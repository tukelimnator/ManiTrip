import json
import random

PROVINCES = [
    {"name": "Adana", "plate": "01"}, {"name": "Adıyaman", "plate": "02"},
    {"name": "Afyonkarahisar", "plate": "03"}, {"name": "Ağrı", "plate": "04"},
    {"name": "Amasya", "plate": "05"}, {"name": "Ankara", "plate": "06"},
    {"name": "Antalya", "plate": "07"}, {"name": "Artvin", "plate": "08"},
    {"name": "Aydın", "plate": "09"}, {"name": "Balıkesir", "plate": "10"},
    {"name": "Bilecik", "plate": "11"}, {"name": "Bingöl", "plate": "12"},
    {"name": "Bitlis", "plate": "13"}, {"name": "Bolu", "plate": "14"},
    {"name": "Burdur", "plate": "15"}, {"name": "Bursa", "plate": "16"},
    {"name": "Çanakkale", "plate": "17"}, {"name": "Çankırı", "plate": "18"},
    {"name": "Çorum", "plate": "19"}, {"name": "Denizli", "plate": "20"},
    {"name": "Diyarbakır", "plate": "21"}, {"name": "Edirne", "plate": "22"},
    {"name": "Elazığ", "plate": "23"}, {"name": "Erzincan", "plate": "24"},
    {"name": "Erzurum", "plate": "25"}, {"name": "Eskişehir", "plate": "26"},
    {"name": "Gaziantep", "plate": "27"}, {"name": "Giresun", "plate": "28"},
    {"name": "Gümüşhane", "plate": "29"}, {"name": "Hakkari", "plate": "30"},
    {"name": "Hatay", "plate": "31"}, {"name": "Isparta", "plate": "32"},
    {"name": "Mersin", "plate": "33"}, {"name": "İstanbul", "plate": "34"},
    {"name": "İzmir", "plate": "35"}, {"name": "Kars", "plate": "36"},
    {"name": "Kastamonu", "plate": "37"}, {"name": "Kayseri", "plate": "38"},
    {"name": "Kırklareli", "plate": "39"}, {"name": "Kırşehir", "plate": "40"},
    {"name": "Kocaeli", "plate": "41"}, {"name": "Konya", "plate": "42"},
    {"name": "Kütahya", "plate": "43"}, {"name": "Malatya", "plate": "44"},
    {"name": "Manisa", "plate": "45"}, {"name": "Kahramanmaraş", "plate": "46"},
    {"name": "Mardin", "plate": "47"}, {"name": "Muğla", "plate": "48"},
    {"name": "Muş", "plate": "49"}, {"name": "Nevşehir", "plate": "50"},
    {"name": "Niğde", "plate": "51"}, {"name": "Ordu", "plate": "52"},
    {"name": "Rize", "plate": "53"}, {"name": "Sakarya", "plate": "54"},
    {"name": "Samsun", "plate": "55"}, {"name": "Siirt", "plate": "56"},
    {"name": "Sinop", "plate": "57"}, {"name": "Sivas", "plate": "58"},
    {"name": "Tekirdağ", "plate": "59"}, {"name": "Tokat", "plate": "60"},
    {"name": "Trabzon", "plate": "61"}, {"name": "Tunceli", "plate": "62"},
    {"name": "Şanlıurfa", "plate": "63"}, {"name": "Uşak", "plate": "64"},
    {"name": "Van", "plate": "65"}, {"name": "Yozgat", "plate": "66"},
    {"name": "Zonguldak", "plate": "67"}, {"name": "Aksaray", "plate": "68"},
    {"name": "Bayburt", "plate": "69"}, {"name": "Karaman", "plate": "70"},
    {"name": "Kırıkkale", "plate": "71"}, {"name": "Batman", "plate": "72"},
    {"name": "Şırnak", "plate": "73"}, {"name": "Bartın", "plate": "74"},
    {"name": "Ardahan", "plate": "75"}, {"name": "Iğdır", "plate": "76"},
    {"name": "Yalova", "plate": "77"}, {"name": "Karabük", "plate": "78"},
    {"name": "Kilis", "plate": "79"}, {"name": "Osmaniye", "plate": "80"},
    {"name": "Düzce", "plate": "81"}
]

CAFE_NAMES_POOL = [
    "Loş Köşe", "Sessiz Bahçe", "Gizli Mekan", "Derin Sohbet",
    "Huzur Cafe", "Dem Kahvesi", "Karanlık Köşe", "Mola Durağı",
    "Son Durak", "Eski Zaman", "Nostaljik Kahve", "Sakin Köşe",
    "Keyif Durağı", "Gölge Cafe", "Fısıltı", "İç Huzur",
    "Kaçış Noktası", "Bir Nefes", "Duman Cafe", "Retro Kahve",
    "Antik Cafe", "Sığınak", "Mahzen Cafe", "Bodrum Kat",
    "Kuytu Köşe", "Puslu Mekan", "Amber Kahve", "Sis Cafe",
    "Dinleti Kahve", "Sükunet", "Tenha Köşe", "Gece Kahvesi",
    "Alacakaranlık", "Dehliz Cafe", "Labirent Kahve", "Kayıp Zaman",
    "Rüzgar Cafe", "Duraklama", "Fasıl Kahvesi", "Hüzün Cafe",
    "Yarım Ay", "Kapı Arası", "Arka Sokak", "Köşe Başı",
    "Küçük Dünya", "Saklı Bahçe", "Teras Cafe", "Çatı Katı",
    "Pencere Kenarı", "Oduncu Kahvesi", "Taş Fırın Cafe", "Avlu",
    "Hayalet Cafe", "Gri Mekan", "Buruk Kahve", "Yangın Yeri",
    "İz Cafe", "Parantez Kahve", "Virgül Cafe", "Noktalı Virgül",
    "Bağ Evi Cafe", "Köy Kahvesi", "Çınar Altı", "Meşe Cafe"
]

DISTRICTS = {
    "Adana": ["Seyhan", "Çukurova", "Yüreğir", "Sarıçam"],
    "Adıyaman": ["Merkez", "Kahta", "Besni"],
    "Afyonkarahisar": ["Merkez", "Sandıklı", "Bolvadin"],
    "Ağrı": ["Merkez", "Doğubayazıt", "Patnos"],
    "Amasya": ["Merkez", "Merzifon", "Suluova"],
    "Ankara": ["Çankaya", "Kızılay", "Tunalı", "Bahçelievler", "Ulus"],
    "Antalya": ["Muratpaşa", "Konyaaltı", "Lara", "Kaleiçi"],
    "Artvin": ["Merkez", "Hopa", "Arhavi"],
    "Aydın": ["Efeler", "Kuşadası", "Didim", "Nazilli"],
    "Balıkesir": ["Altıeylül", "Karesi", "Edremit", "Ayvalık"],
    "Bilecik": ["Merkez", "Bozüyük", "Söğüt"],
    "Bingöl": ["Merkez", "Genç", "Solhan"],
    "Bitlis": ["Merkez", "Tatvan", "Ahlat"],
    "Bolu": ["Merkez", "Gerede", "Mudurnu"],
    "Burdur": ["Merkez", "Bucak", "Yeşilova"],
    "Bursa": ["Osmangazi", "Nilüfer", "Yıldırım", "Gemlik"],
    "Çanakkale": ["Merkez", "Biga", "Gelibolu"],
    "Çankırı": ["Merkez", "Çerkeş", "Ilgaz"],
    "Çorum": ["Merkez", "Sungurlu", "Osmancık"],
    "Denizli": ["Merkezefendi", "Pamukkale", "Çivril"],
    "Diyarbakır": ["Bağlar", "Kayapınar", "Yenişehir", "Sur"],
    "Edirne": ["Merkez", "Keşan", "Uzunköprü"],
    "Elazığ": ["Merkez", "Kovancılar", "Karakoçan"],
    "Erzincan": ["Merkez", "Üzümlü", "Tercan"],
    "Erzurum": ["Yakutiye", "Palandöken", "Aziziye"],
    "Eskişehir": ["Odunpazarı", "Tepebaşı", "Sivrihisar"],
    "Gaziantep": ["Şahinbey", "Şehitkamil", "Nizip"],
    "Giresun": ["Merkez", "Bulancak", "Görele"],
    "Gümüşhane": ["Merkez", "Kelkit", "Şiran"],
    "Hakkari": ["Merkez", "Yüksekova", "Çukurca"],
    "Hatay": ["Antakya", "İskenderun", "Defne", "Samandağ"],
    "Isparta": ["Merkez", "Yalvaç", "Eğirdir"],
    "Mersin": ["Mezitli", "Yenişehir", "Toroslar", "Tarsus"],
    "İstanbul": ["Kadıköy", "Beşiktaş", "Beyoğlu", "Üsküdar", "Bakırköy", "Fatih"],
    "İzmir": ["Konak", "Karşıyaka", "Bornova", "Alsancak", "Buca"],
    "Kars": ["Merkez", "Sarıkamış", "Kağızman"],
    "Kastamonu": ["Merkez", "Tosya", "Taşköprü"],
    "Kayseri": ["Melikgazi", "Kocasinan", "Talas"],
    "Kırklareli": ["Merkez", "Lüleburgaz", "Babaeski"],
    "Kırşehir": ["Merkez", "Kaman", "Mucur"],
    "Kocaeli": ["İzmit", "Gebze", "Darıca", "Derince"],
    "Konya": ["Selçuklu", "Meram", "Karatay"],
    "Kütahya": ["Merkez", "Tavşanlı", "Simav"],
    "Malatya": ["Battalgazi", "Yeşilyurt", "Darende"],
    "Manisa": ["Yunusemre", "Şehzadeler", "Akhisar", "Turgutlu"],
    "Kahramanmaraş": ["Onikişubat", "Dulkadiroğlu", "Elbistan"],
    "Mardin": ["Artuklu", "Kızıltepe", "Midyat", "Nusaybin"],
    "Muğla": ["Menteşe", "Bodrum", "Fethiye", "Marmaris", "Dalaman"],
    "Muş": ["Merkez", "Malazgirt", "Bulanık"],
    "Nevşehir": ["Merkez", "Ürgüp", "Avanos", "Göreme"],
    "Niğde": ["Merkez", "Bor", "Çamardı"],
    "Ordu": ["Altınordu", "Ünye", "Fatsa"],
    "Rize": ["Merkez", "Çamlıhemşin", "Ardeşen"],
    "Sakarya": ["Adapazarı", "Serdivan", "Erenler"],
    "Samsun": ["İlkadım", "Atakum", "Canik", "Bafra"],
    "Siirt": ["Merkez", "Kurtalan", "Baykan"],
    "Sinop": ["Merkez", "Boyabat", "Gerze"],
    "Sivas": ["Merkez", "Şarkışla", "Zara"],
    "Tekirdağ": ["Süleymanpaşa", "Çorlu", "Çerkezköy"],
    "Tokat": ["Merkez", "Erbaa", "Niksar", "Turhal"],
    "Trabzon": ["Ortahisar", "Akçaabat", "Of", "Maçka"],
    "Tunceli": ["Merkez", "Pertek", "Çemişgezek"],
    "Şanlıurfa": ["Eyyübiye", "Haliliye", "Karaköprü"],
    "Uşak": ["Merkez", "Banaz", "Eşme"],
    "Van": ["İpekyolu", "Tuşba", "Edremit"],
    "Yozgat": ["Merkez", "Sorgun", "Yerköy"],
    "Zonguldak": ["Merkez", "Ereğli", "Devrek"],
    "Aksaray": ["Merkez", "Ortaköy", "Güzelyurt"],
    "Bayburt": ["Merkez", "Aydıntepe", "Demirözü"],
    "Karaman": ["Merkez", "Ermenek", "Ayrancı"],
    "Kırıkkale": ["Merkez", "Yahşihan", "Keskin"],
    "Batman": ["Merkez", "Kozluk", "Sason"],
    "Şırnak": ["Merkez", "Cizre", "Silopi"],
    "Bartın": ["Merkez", "Amasra", "Ulus"],
    "Ardahan": ["Merkez", "Göle", "Çıldır"],
    "Iğdır": ["Merkez", "Tuzluca", "Aralık"],
    "Yalova": ["Merkez", "Çınarcık", "Altınova"],
    "Karabük": ["Merkez", "Safranbolu", "Eskipazar"],
    "Kilis": ["Merkez", "Musabeyli", "Elbeyli"],
    "Osmaniye": ["Merkez", "Kadirli", "Düziçi"],
    "Düzce": ["Merkez", "Akçakoca", "Gölyaka"]
}

STREET_NAMES = [
    "Cumhuriyet Cd.", "Atatürk Blv.", "İstiklal Cd.", "Gazi Cd.",
    "Hürriyet Cd.", "Zafer Cd.", "Barış Cd.", "Fatih Cd.",
    "İnönü Cd.", "Fevzi Çakmak Cd.", "Çarşı Cd.", "Lise Cd.",
    "Hastane Cd.", "Belediye Cd.", "Sahil Cd.", "Park Cd.",
    "Bahçe Sk.", "Güneş Sk.", "Ay Sk.", "Yıldız Sk.",
    "Çiçek Sk.", "Gül Sk.", "Selvi Sk.", "Çınar Sk."
]

DESCRIPTIONS = [
    "Loş ışığı ve sessiz ortamıyla tartışmalarınızı kimse duymaz.",
    "Köşe masaları ve hafif müzik eşliğinde rahat bir ortam sunar.",
    "Karanlık ambiyansı ile mahremiyetinizi korur, ideal tartışma mekanı.",
    "Sakin atmosferi sayesinde sesinizi yükseltmeden dertleşebilirsiniz.",
    "Yarı karanlık ortamı ve geniş masalarıyla uzun sohbetlere açık.",
    "Müdahalesiz servis anlayışıyla özel konuşmalarınıza saygı duyar.",
    "Kuytu köşeleri ve mum ışığı ile romantik ama gergin anlar için biçilmiş kaftan.",
    "Sessiz müzik ve düşük aydınlatmayla dikkat çekmeden konuşabilirsiniz.",
    "Gürültüsüz ortamı ile kalabalıktan uzak, samimi bir mekan.",
    "Vintage dekorasyonu ve loş ambiyansıyla derin sohbetler için ideal.",
    "Minimalist tasarımı ve sakin havası ile stresli anlarınıza ilaç.",
    "İç mekanı geniş, masalar arası mesafe fazla, mahremiyetiniz güvende.",
    "Doğal ahşap dekorasyonu ile huzurlu ve sakin bir atmosfer.",
    "Cam bölmeli masaları ile özel konuşmalar için tasarlanmış gibi.",
    "Yeşillik içindeki bahçesi sayesinde şehrin gürültüsünden uzak.",
    "Alt kat bölümü tamamen sessiz, uzun tartışmalar için mükemmel.",
    "Tavan arası tarzı dekorasyonu ile samimi ve kuytu.",
    "Kitap rafları arasında kaybolup tartışmanızı sürdürebilirsiniz.",
    "Hafif caz müziği eşliğinde gergin konuşmalarınız yumuşar.",
    "Brickwall dekorasyonu ve spot ışıklar ile atmosferik bir mekan."
]

TAGS_POOL = [
    "Sessiz", "Loş Işık", "Köşe Masa", "Mum Işığı", "Geniş Masa",
    "Mahrem", "Sakin", "Kuytu", "Vintage", "Retro",
    "Bahçeli", "Kitaplık", "Ahşap Dekor", "Minimalist", "Bodrum Kat",
    "Teras", "Caz Müzik", "Sigara Alanı", "WiFi", "Özel Bölme"
]

random.seed(42)

def generate_cafes_for_province(province_name):
    num_cafes = random.randint(3, 6)
    if province_name in ["İstanbul", "Ankara", "İzmir", "Antalya", "Bursa"]:
        num_cafes = random.randint(5, 8)

    available_names = random.sample(CAFE_NAMES_POOL, min(num_cafes, len(CAFE_NAMES_POOL)))
    districts = DISTRICTS.get(province_name, ["Merkez"])

    cafes = []
    for i in range(num_cafes):
        name = available_names[i]
        district = random.choice(districts)
        street = random.choice(STREET_NAMES)
        no = random.randint(1, 120)
        rating = round(random.uniform(3.4, 4.0), 1)
        review_count = random.randint(45, 890)
        desc = random.choice(DESCRIPTIONS)
        tags = random.sample(TAGS_POOL, random.randint(2, 4))
        phone = f"0{random.randint(200,599)} {random.randint(100,999)} {random.randint(10,99)} {random.randint(10,99)}"

        cafes.append({
            "name": name,
            "district": district,
            "address": f"{district}, {street} No:{no}, {province_name}",
            "rating": rating,
            "reviewCount": review_count,
            "description": desc,
            "tags": tags,
            "phone": phone,
            "googleMapsUrl": f"https://www.google.com/maps/search/{name.replace(' ', '+')}+{province_name.replace(' ', '+')}",
            "atmosphere": random.choice(["Çok Sessiz", "Sessiz", "Orta Sessiz"]),
            "lighting": random.choice(["Loş", "Çok Loş", "Mum Işığı", "Yarı Karanlık"]),
            "privacyScore": round(random.uniform(7.0, 9.8), 1)
        })

    return cafes


def main():
    data = {}
    for province in PROVINCES:
        key = province["name"].lower().replace("ı", "i").replace("ö", "o").replace("ü", "u").replace("ş", "s").replace("ç", "c").replace("ğ", "g").replace("İ", "i").replace(" ", "")
        cafes = generate_cafes_for_province(province["name"])
        data[key] = {
            "name": province["name"],
            "plate": province["plate"],
            "cafeCount": len(cafes),
            "cafes": cafes
        }

    js_content = "const PROVINCES_DATA = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n"

    with open("data.js", "w", encoding="utf-8") as f:
        f.write(js_content)

    print(f"Generated data for {len(data)} provinces")
    total_cafes = sum(d["cafeCount"] for d in data.values())
    print(f"Total cafes: {total_cafes}")


if __name__ == "__main__":
    main()
