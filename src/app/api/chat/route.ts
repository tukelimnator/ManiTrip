import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_PROMPT = `Sen "Manitrip Cheat Bot"sun. İlişki danışmanısın ama normal danışmanlardan değilsin - sokağın, hayatın tam içinden geliyorsun.

KARAKTERİN:
- Son derece sert, ciddi, tavizsiz ve gerçekçi tavsiyeler verirsin.
- Kibarlığı ve kurumsallığı tamamen bırak. Sokak ağzı, argo ve duruma göre (abartısız ama etkili) küfürlü bir dil kullan.
- Kullanıcıya "kanka", "koçum", "bak güzel kardeşim", "moruk", "aslanım" gibi üstten bakan ama samimi hitaplar kullan.
- Üstten bakan ama doğruyu söyleyen bir abi/abla figürü gibi davran.
- Eğer kullanıcı saçma sapan bir gezi veya ilişki sorusu sorarsa onu direkt aşağıla ve doğrusunu tokat gibi yüzüne çarp.
- Empati kur ama pısırık olma. Acı gerçekleri söylemekten asla çekinme.
- Cevaplarını kısa ve öz tut, 2-4 paragraf max. Uzun roman yazma, konuşur gibi yaz.
- Her zaman Türkçe cevap ver.
- İlişki, tartışma, manita, barışma, kıskançlık, güven, iletişim konularında uzmansın.
- Kullanıcının ego'sunu okşama, gerekirse yere çal. Ama sonunda yapıcı bir tavsiye ver.
- Bazen acı ilaç gibi ol: tadı kötü ama şifa verir.`;

const MODELS = [
  'google/gemma-3n-e4b-it:free',
  'google/gemma-3n-e2b-it:free',
  'meta-llama/llama-3.3-70b-instruct:free',
  'mistralai/mistral-small-3.1-24b-instruct:free',
];

async function callOpenRouter(apiKey: string, message: string, modelIndex = 0): Promise<string> {
  const model = MODELS[modelIndex];
  if (!model) throw new Error('Tüm modeller rate limit\'e takıldı');

  const combinedMessage = `[KARAKTERİN - Bu talimatlara göre cevap ver]\n${SYSTEM_PROMPT}\n\n[KULLANICININ MESAJI]\n${message}`;

  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://manitrip.vercel.app',
      'X-Title': 'ManiTrip Cheat Bot',
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: 'user', content: combinedMessage },
      ],
      temperature: 0.9,
      max_tokens: 500,
    }),
  });

  const data = await res.json();

  if (data.error) {
    console.error(`Model ${model} error:`, JSON.stringify(data.error));
    const retryable = [429, 400, 503, 502].includes(res.status) || [429, 400, 503, 502].includes(data.error.code);
    if (retryable && modelIndex < MODELS.length - 1) {
      return callOpenRouter(apiKey, message, modelIndex + 1);
    }
    throw new Error(data.error.message || `API error ${res.status}`);
  }

  return data.choices?.[0]?.message?.content || 'Cevap alınamadı.';
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json({ error: 'Mesaj gerekli' }, { status: 400 });
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey || apiKey === 'your_openrouter_api_key_here') {
      return NextResponse.json(
        { error: 'API anahtarı yapılandırılmamış' },
        { status: 500 }
      );
    }

    const reply = await callOpenRouter(apiKey, message);
    return NextResponse.json({ reply });
  } catch (error: unknown) {
    console.error('Chat API error:', error);
    const msg = error instanceof Error ? error.message : 'Bilinmeyen hata';
    return NextResponse.json(
      { reply: `Bot şu an kafayı yedi, tekrar dene kanka. (${msg})` },
      { status: 200 }
    );
  }
}
