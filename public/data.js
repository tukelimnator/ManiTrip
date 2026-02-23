const PROVINCES_DATA = {
  "adana": {
    "name": "Adana",
    "plate": "01",
    "cafeCount": 4,
    "cafes": [
      {
        "name": "Büyük Saat Kahvesi",
        "district": "Seyhan",
        "address": "Sarıyakup Mah., Büyük Saat Kulesi Yanı, Seyhan, Adana",
        "rating": 4.2,
        "reviewCount": 1450,
        "description": "Adana'nın simgesi Büyük Saat'in hemen yanında tarihi bir kahvehane. Yüzyıllık geçmişiyle şehrin hafızasını taşıyan bu mekân, sakin bir ortamda Türk kahvesi içmek isteyenler için ideal.",
        "tags": ["Retro", "Sakin", "Ahşap Dekor", "Köşe Masa"],
        "phone": "0322 351 12 34",
        "googleMapsUrl": "https://www.google.com/maps/search/Büyük+Saat+Kahvesi+Adana",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 7.5
      },
      {
        "name": "Bebekli Kahve",
        "district": "Seyhan",
        "address": "Tepebağ Mah., Seyhan, Adana",
        "rating": 4.0,
        "reviewCount": 820,
        "description": "Adana'nın eski mahallelerinden Tepebağ'da, nostaljik atmosferiyle bilinen bir kahve. Sessiz sokağında dış dünyadan kopabilirsiniz.",
        "tags": ["Vintage", "Sakin", "Loş Işık", "Köşe Masa"],
        "phone": "0322 359 45 67",
        "googleMapsUrl": "https://www.google.com/maps/search/Bebekli+Kahve+Adana",
        "atmosphere": "Çok Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.0
      },
      {
        "name": "Seyhan Kıyısı Kahvecisi",
        "district": "Seyhan",
        "address": "Seyhan Nehri Kenarı, Seyhan, Adana",
        "rating": 3.9,
        "reviewCount": 650,
        "description": "Seyhan Nehri kıyısında, suyun sesini dinleyerek kahvenizi yudumlayabileceğiniz huzurlu bir mekân. Akşamüstü sessizliğiyle meşhur.",
        "tags": ["Bahçeli", "Sakin", "Doğal Işık", "Minimalist"],
        "phone": "0322 457 88 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Seyhan+Nehri+Cafe+Adana",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.0
      },
      {
        "name": "Kahverengi Cafe",
        "district": "Çukurova",
        "address": "Toros Mah., Çukurova, Adana",
        "rating": 4.1,
        "reviewCount": 480,
        "description": "Çukurova'nın sakin semtlerinden birinde, öğrencilerin ve kitap okurların tercihi olan modern bir kafe. WiFi ve sessiz ortamıyla çalışmaya uygun.",
        "tags": ["WiFi", "Minimalist", "Sakin", "Kitaplık"],
        "phone": "0322 233 56 78",
        "googleMapsUrl": "https://www.google.com/maps/search/Kahverengi+Cafe+Adana",
        "atmosphere": "Sessiz",
        "lighting": "Orta",
        "privacyScore": 7.5
      }
    ]
  },
  "adiyaman": {
    "name": "Adıyaman",
    "plate": "02",
    "cafeCount": 2,
    "cafes": [
      {
        "name": "Nemrut Cafe",
        "district": "Merkez",
        "address": "Atatürk Blv., Merkez, Adıyaman",
        "rating": 3.8,
        "reviewCount": 320,
        "description": "Nemrut Dağı'nın şehirdeki yansıması. Taş duvarları ve loş aydınlatmasıyla sakin bir ortam sunan bu kafe, şehrin gürültüsünden kaçmak isteyenler için birebir.",
        "tags": ["Loş Işık", "Sakin", "Ahşap Dekor", "Köşe Masa"],
        "phone": "0416 216 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Nemrut+Cafe+Adıyaman",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 7.0
      },
      {
        "name": "Safran Kitap Kafe",
        "district": "Merkez",
        "address": "Cumhuriyet Cad., Merkez, Adıyaman",
        "rating": 4.0,
        "reviewCount": 210,
        "description": "Adıyaman'ın ender kitap kafelerinden biri. Rahat koltuklarında saatlerce kitap okuyabilir, sessizliğin tadını çıkarabilirsiniz.",
        "tags": ["Kitaplık", "WiFi", "Sakin", "Minimalist"],
        "phone": "0416 214 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Safran+Kitap+Kafe+Adıyaman",
        "atmosphere": "Çok Sessiz",
        "lighting": "Orta",
        "privacyScore": 8.0
      }
    ]
  },
  "afyonkarahisar": {
    "name": "Afyonkarahisar",
    "plate": "03",
    "cafeCount": 2,
    "cafes": [
      {
        "name": "Kale Dibi Kahvesi",
        "district": "Merkez",
        "address": "Kale Mah., Afyon Kalesi altı, Merkez, Afyonkarahisar",
        "rating": 4.1,
        "reviewCount": 390,
        "description": "Afyon Kalesi'nin eteklerinde, tarihi dokunun hissedildiği bir kahvehane. Kaymak ve kahve eşliğinde huzurlu bir mola.",
        "tags": ["Retro", "Sakin", "Köşe Masa", "Ahşap Dekor"],
        "phone": "0272 213 45 67",
        "googleMapsUrl": "https://www.google.com/maps/search/Kale+Dibi+Kahvesi+Afyonkarahisar",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.5
      },
      {
        "name": "Mevlevihane Kahvecisi",
        "district": "Merkez",
        "address": "Mevlana Mah., Merkez, Afyonkarahisar",
        "rating": 3.9,
        "reviewCount": 250,
        "description": "Şehir merkezindeki sessiz sokaklardan birinde, geleneksel Türk kahvesiyle bilinen nostaljik bir mekân.",
        "tags": ["Vintage", "Loş Işık", "Sakin", "Retro"],
        "phone": "0272 215 89 01",
        "googleMapsUrl": "https://www.google.com/maps/search/Mevlevihane+Kahvecisi+Afyonkarahisar",
        "atmosphere": "Çok Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.0
      }
    ]
  },
  "agri": {
    "name": "Ağrı",
    "plate": "04",
    "cafeCount": 2,
    "cafes": [
      {
        "name": "Ararat Cafe",
        "district": "Merkez",
        "address": "Erzurum Cad., Merkez, Ağrı",
        "rating": 3.7,
        "reviewCount": 180,
        "description": "Ağrı Dağı manzarasına yakın, şehirdeki sayılı sakin kafelerden biri. Soğuk kış günlerinde sıcak atmosferiyle sizi içine çeker.",
        "tags": ["Sakin", "Ahşap Dekor", "Loş Işık", "Köşe Masa"],
        "phone": "0472 215 33 44",
        "googleMapsUrl": "https://www.google.com/maps/search/Ararat+Cafe+Ağrı",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 7.0
      },
      {
        "name": "Doğu Kahvecisi",
        "district": "Merkez",
        "address": "Cumhuriyet Mah., Merkez, Ağrı",
        "rating": 3.6,
        "reviewCount": 140,
        "description": "Doğu Anadolu'nun sadeliğini yansıtan küçük bir kahvehane. Az kişi, çok huzur.",
        "tags": ["Retro", "Sakin", "Köşe Masa"],
        "phone": "0472 216 78 55",
        "googleMapsUrl": "https://www.google.com/maps/search/Doğu+Kahvecisi+Ağrı",
        "atmosphere": "Çok Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.5
      }
    ]
  },
  "amasya": {
    "name": "Amasya",
    "plate": "05",
    "cafeCount": 3,
    "cafes": [
      {
        "name": "Yeşilırmak Kenarı Kahvecisi",
        "district": "Merkez",
        "address": "Yalıboyu Mah., Yeşilırmak kenarı, Merkez, Amasya",
        "rating": 4.3,
        "reviewCount": 620,
        "description": "Amasya'nın ikonik Yalıboyu evleri manzarasında, Yeşilırmak kıyısında huzurlu bir kafe. Suyun sesi eşliğinde derin düşüncelere dalın.",
        "tags": ["Bahçeli", "Sakin", "Doğal Işık", "Vintage"],
        "phone": "0358 218 45 67",
        "googleMapsUrl": "https://www.google.com/maps/search/Yalıboyu+Cafe+Amasya",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 8.0
      },
      {
        "name": "Şehzadeler Kahvesi",
        "district": "Merkez",
        "address": "Mehmet Paşa Mah., Merkez, Amasya",
        "rating": 4.0,
        "reviewCount": 340,
        "description": "Osmanlı şehzadelerinin yetiştiği şehirde, tarihi dokuyla uyumlu bir kahvehane. Sessiz ve huzurlu.",
        "tags": ["Retro", "Ahşap Dekor", "Sakin", "Loş Işık"],
        "phone": "0358 212 33 89",
        "googleMapsUrl": "https://www.google.com/maps/search/Şehzadeler+Kahvesi+Amasya",
        "atmosphere": "Çok Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.5
      },
      {
        "name": "Kral Kaya Cafe",
        "district": "Merkez",
        "address": "Kral Kaya Mezarları yakını, Merkez, Amasya",
        "rating": 3.9,
        "reviewCount": 280,
        "description": "Kral Kaya Mezarları'na nazır konumuyla benzersiz bir atmosfer. Tarihin içinde kahve keyfi.",
        "tags": ["Bahçeli", "Sakin", "Doğal Işık", "Köşe Masa"],
        "phone": "0358 219 67 12",
        "googleMapsUrl": "https://www.google.com/maps/search/Kral+Kaya+Cafe+Amasya",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.5
      }
    ]
  },
  "ankara": {
    "name": "Ankara",
    "plate": "06",
    "cafeCount": 6,
    "cafes": [
      {
        "name": "Koala Coffee",
        "district": "Bahçelievler",
        "address": "7. Cad., Bahçelievler, Çankaya, Ankara",
        "rating": 4.3,
        "reviewCount": 980,
        "description": "Bahçelievler'in sessiz sokaklarında, öğrencilerin ve uzaktan çalışanların vazgeçilmezi. Sakin ortamı ve kaliteli kahvesiyle saatlerce kalabileceğiniz bir mekân.",
        "tags": ["WiFi", "Sakin", "Minimalist", "Köşe Masa"],
        "phone": "0312 213 45 67",
        "googleMapsUrl": "https://www.google.com/maps/search/Koala+Coffee+Bahçelievler+Ankara",
        "atmosphere": "Sessiz",
        "lighting": "Orta",
        "privacyScore": 8.0
      },
      {
        "name": "Cherrybean Coffee",
        "district": "Kızılay",
        "address": "Selanik Cad., Kızılay, Çankaya, Ankara",
        "rating": 4.2,
        "reviewCount": 1250,
        "description": "Kızılay'ın kalabalığından sıyrılmış, üçüncü dalga kahve kültürünü Ankara'ya taşıyan öncü kafelerden. Specialty kahveleri ve huzurlu atmosferi ile öne çıkar.",
        "tags": ["WiFi", "Minimalist", "Sakin", "Köşe Masa"],
        "phone": "0312 419 88 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Cherrybean+Coffee+Kızılay+Ankara",
        "atmosphere": "Orta",
        "lighting": "Orta",
        "privacyScore": 7.0
      },
      {
        "name": "La Vita e Bella Cafe",
        "district": "Bahçelievler",
        "address": "Bahçelievler 3. Cad., Çankaya, Ankara",
        "rating": 4.1,
        "reviewCount": 780,
        "description": "İsminden de anlaşılacağı gibi hayatın güzelliğini hatırlatan bir mekân. Huzurlu ortamı ve ev yapımı tatlılarıyla biliniyor.",
        "tags": ["Sakin", "Bahçeli", "Ahşap Dekor", "Doğal Işık"],
        "phone": "0312 215 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/La+Vita+e+Bella+Cafe+Ankara",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 8.0
      },
      {
        "name": "Café des Cafés",
        "district": "Kavaklıdere",
        "address": "Tunalı Hilmi Cad., Kavaklıdere, Çankaya, Ankara",
        "rating": 4.4,
        "reviewCount": 1680,
        "description": "Avrupa tarzı dekorasyonu ve sessiz bahçesiyle Kavaklıdere'nin en zarif kafesi. Diplomatlar ve sanatçıların uğrak noktası.",
        "tags": ["Bahçeli", "Minimalist", "Sakin", "Vintage"],
        "phone": "0312 427 12 34",
        "googleMapsUrl": "https://www.google.com/maps/search/Café+des+Cafés+Kavaklıdere+Ankara",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 8.5
      },
      {
        "name": "Mücver",
        "district": "Ayrancı",
        "address": "Ayrancı Mah., Çankaya, Ankara",
        "rating": 4.2,
        "reviewCount": 560,
        "description": "Ayrancı'nın sessiz sokaklarında saklı bir mücevher. Ev yapımı yemekleri ve samimi ortamıyla mahalle kafesi ruhunu yaşatıyor.",
        "tags": ["Sakin", "Ahşap Dekor", "Köşe Masa", "Minimalist"],
        "phone": "0312 441 56 78",
        "googleMapsUrl": "https://www.google.com/maps/search/Mücver+Ayrancı+Ankara",
        "atmosphere": "Çok Sessiz",
        "lighting": "Loş",
        "privacyScore": 9.0
      },
      {
        "name": "Dükkan Kavaklıdere",
        "district": "Kavaklıdere",
        "address": "Arjantin Cad., Kavaklıdere, Çankaya, Ankara",
        "rating": 4.0,
        "reviewCount": 420,
        "description": "Kavaklıdere'nin samimi mahalle kafesi. Küçük mekânı ve sadık müşteri kitlesiyle tanınır. Köşe masalarında mahremiyetinizi koruyabilirsiniz.",
        "tags": ["Sakin", "Köşe Masa", "Loş Işık", "Vintage"],
        "phone": "0312 468 90 12",
        "googleMapsUrl": "https://www.google.com/maps/search/Dükkan+Kavaklıdere+Ankara",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.0
      }
    ]
  },
  "antalya": {
    "name": "Antalya",
    "plate": "07",
    "cafeCount": 5,
    "cafes": [
      {
        "name": "Varuna Gezgin Café",
        "district": "Kaleiçi",
        "address": "Selçuk Mah., Kaleiçi, Muratpaşa, Antalya",
        "rating": 4.4,
        "reviewCount": 1820,
        "description": "Kaleiçi'nin dar sokaklarında gizlenmiş, gezginlerin buluşma noktası. Duvarlarındaki dünya haritaları ve vintage dekorasyonuyla sizi başka diyarlara götürür.",
        "tags": ["Vintage", "Sakin", "Bahçeli", "Ahşap Dekor"],
        "phone": "0242 247 12 34",
        "googleMapsUrl": "https://www.google.com/maps/search/Varuna+Gezgin+Café+Kaleiçi+Antalya",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.5
      },
      {
        "name": "Castle Café & Bistro",
        "district": "Kaleiçi",
        "address": "Kılıçarslan Mah., Kaleiçi, Muratpaşa, Antalya",
        "rating": 4.2,
        "reviewCount": 1340,
        "description": "Kaleiçi surlarının gölgesinde, Akdeniz esintisiyle bezeli bir kafe. Taş duvarları ve loş aydınlatmasıyla romantik bir atmosfer sunar.",
        "tags": ["Bahçeli", "Loş Işık", "Sakin", "Ahşap Dekor"],
        "phone": "0242 248 56 78",
        "googleMapsUrl": "https://www.google.com/maps/search/Castle+Café+Bistro+Kaleiçi+Antalya",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.0
      },
      {
        "name": "Arabica Coffee House",
        "district": "Kaleiçi",
        "address": "Tuzcular Mah., Kaleiçi, Muratpaşa, Antalya",
        "rating": 4.1,
        "reviewCount": 760,
        "description": "Specialty kahve tutkunlarının Kaleiçi'ndeki durağı. Küçük ama samimi mekânında özenle hazırlanan kahveler sunuyor.",
        "tags": ["Minimalist", "Sakin", "Köşe Masa", "WiFi"],
        "phone": "0242 244 33 21",
        "googleMapsUrl": "https://www.google.com/maps/search/Arabica+Coffee+House+Kaleiçi+Antalya",
        "atmosphere": "Sessiz",
        "lighting": "Orta",
        "privacyScore": 7.5
      },
      {
        "name": "Pio Gastro Bar & Cafe",
        "district": "Kaleiçi",
        "address": "Barbaros Mah., Kaleiçi, Muratpaşa, Antalya",
        "rating": 4.3,
        "reviewCount": 980,
        "description": "Gündüz sakin bir kafe, akşam canlanan bir bistro. Gündüz saatlerinde sessiz çalışma ortamı arayanlar için mükemmel.",
        "tags": ["Bahçeli", "Sakin", "Mum Işığı", "Vintage"],
        "phone": "0242 241 67 89",
        "googleMapsUrl": "https://www.google.com/maps/search/Pio+Gastro+Bar+Kaleiçi+Antalya",
        "atmosphere": "Orta",
        "lighting": "Loş",
        "privacyScore": 7.0
      },
      {
        "name": "Simurg Cafe",
        "district": "Kaleiçi",
        "address": "Selçuk Mah., Hesapçı Sok., Kaleiçi, Muratpaşa, Antalya",
        "rating": 4.5,
        "reviewCount": 1150,
        "description": "Kaleiçi'nin en huzurlu köşelerinden birinde, mitolojik Simurg kuşunun adını taşıyan bu kafe, bahçesinde zamanın durduğu hissini yaşatıyor.",
        "tags": ["Bahçeli", "Sakin", "Doğal Işık", "Köşe Masa", "Vintage"],
        "phone": "0242 243 45 12",
        "googleMapsUrl": "https://www.google.com/maps/search/Simurg+Cafe+Kaleiçi+Antalya",
        "atmosphere": "Çok Sessiz",
        "lighting": "Doğal",
        "privacyScore": 9.0
      }
    ]
  },
  "artvin": {
    "name": "Artvin",
    "plate": "08",
    "cafeCount": 2,
    "cafes": [
      {
        "name": "Çoruh Vadisi Cafe",
        "district": "Merkez",
        "address": "Çarşı Mah., Merkez, Artvin",
        "rating": 3.8,
        "reviewCount": 190,
        "description": "Çoruh Vadisi'nin muhteşem manzarasına bakan bu kafe, Artvin'in doğal güzelliğini bir fincan kahveyle birleştiriyor.",
        "tags": ["Bahçeli", "Sakin", "Doğal Işık", "Köşe Masa"],
        "phone": "0466 212 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Çoruh+Vadisi+Cafe+Artvin",
        "atmosphere": "Çok Sessiz",
        "lighting": "Doğal",
        "privacyScore": 8.5
      },
      {
        "name": "Yeşil Artvin Kahvecisi",
        "district": "Merkez",
        "address": "İnönü Cad., Merkez, Artvin",
        "rating": 3.7,
        "reviewCount": 150,
        "description": "Artvin'in yeşil doğasını yansıtan küçük ve samimi bir kahvehane. Az bilinen ama çok sevilen bir mekân.",
        "tags": ["Sakin", "Retro", "Ahşap Dekor"],
        "phone": "0466 213 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Yeşil+Artvin+Kahvecisi+Artvin",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.0
      }
    ]
  },
  "aydin": {
    "name": "Aydın",
    "plate": "09",
    "cafeCount": 3,
    "cafes": [
      {
        "name": "Çarşı Kahvecisi",
        "district": "Efeler",
        "address": "Ramazan Paşa Mah., Efeler, Aydın",
        "rating": 3.9,
        "reviewCount": 340,
        "description": "Aydın çarşısının kalbinde, geleneksel kahve kültürünü yaşatan bir mekân. Esnafın ve yerel halkın buluşma noktası.",
        "tags": ["Retro", "Sakin", "Ahşap Dekor", "Köşe Masa"],
        "phone": "0256 212 45 67",
        "googleMapsUrl": "https://www.google.com/maps/search/Çarşı+Kahvecisi+Aydın",
        "atmosphere": "Orta",
        "lighting": "Loş",
        "privacyScore": 6.5
      },
      {
        "name": "Kuşadası Kitap Cafe",
        "district": "Kuşadası",
        "address": "Camiatik Mah., Kuşadası, Aydın",
        "rating": 4.1,
        "reviewCount": 520,
        "description": "Kuşadası'nın merkezinde, deniz kokusunun ulaştığı bir kitap kafe. Sezon dışında inanılmaz sakin.",
        "tags": ["Kitaplık", "WiFi", "Sakin", "Bahçeli"],
        "phone": "0256 612 89 01",
        "googleMapsUrl": "https://www.google.com/maps/search/Kuşadası+Kitap+Cafe+Aydın",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.5
      },
      {
        "name": "Didim Marina Cafe",
        "district": "Didim",
        "address": "Altınkum Mah., Didim, Aydın",
        "rating": 3.8,
        "reviewCount": 280,
        "description": "Marina manzaralı, sezon dışında neredeyse boş olan sakin bir kafe. Denizin ve teknelerin eşliğinde huzurlu bir mola.",
        "tags": ["Bahçeli", "Sakin", "Doğal Işık", "Minimalist"],
        "phone": "0256 811 23 45",
        "googleMapsUrl": "https://www.google.com/maps/search/Didim+Marina+Cafe+Aydın",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.0
      }
    ]
  },
  "balikesir": {
    "name": "Balıkesir",
    "plate": "10",
    "cafeCount": 3,
    "cafes": [
      {
        "name": "Ayvalık Taş Kahve",
        "district": "Ayvalık",
        "address": "Cunda Adası, Ayvalık, Balıkesir",
        "rating": 4.3,
        "reviewCount": 890,
        "description": "Cunda Adası'nın tarihi taş binalarından birinde konumlanan bu kafe, Ege'nin huzurunu bir fincan kahveye sığdırıyor.",
        "tags": ["Vintage", "Bahçeli", "Sakin", "Doğal Işık"],
        "phone": "0266 327 45 67",
        "googleMapsUrl": "https://www.google.com/maps/search/Ayvalık+Taş+Kahve+Cunda+Balıkesir",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 8.5
      },
      {
        "name": "Cunda Deniz Kahvesi",
        "district": "Ayvalık",
        "address": "Sahil Yolu, Cunda Adası, Ayvalık, Balıkesir",
        "rating": 4.1,
        "reviewCount": 650,
        "description": "Denize sıfır konumuyla Cunda'nın en huzurlu köşelerinden biri. Dalga seslerinin eşlik ettiği kahve keyfi.",
        "tags": ["Bahçeli", "Sakin", "Doğal Işık", "Köşe Masa"],
        "phone": "0266 327 89 12",
        "googleMapsUrl": "https://www.google.com/maps/search/Cunda+Deniz+Kahvesi+Balıkesir",
        "atmosphere": "Çok Sessiz",
        "lighting": "Doğal",
        "privacyScore": 8.0
      },
      {
        "name": "Balıkesir Kitaplı Kahve",
        "district": "Karesi",
        "address": "Eski Kuyumcular Cad., Karesi, Balıkesir",
        "rating": 3.8,
        "reviewCount": 310,
        "description": "Balıkesir şehir merkezinin sakin bir sokağında, kitap raflarıyla çevrili huzurlu bir kafe.",
        "tags": ["Kitaplık", "WiFi", "Sakin", "Loş Işık"],
        "phone": "0266 241 56 78",
        "googleMapsUrl": "https://www.google.com/maps/search/Balıkesir+Kitaplı+Kahve",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 7.5
      }
    ]
  },
  "bilecik": {
    "name": "Bilecik",
    "plate": "11",
    "cafeCount": 2,
    "cafes": [
      {
        "name": "Osmanlı Kahvecisi",
        "district": "Merkez",
        "address": "İstiklal Cad., Merkez, Bilecik",
        "rating": 3.7,
        "reviewCount": 160,
        "description": "Osmanlı'nın kuruluş yurdu Bilecik'te, tarihi atmosferi yaşatan bir kahvehane. Sessiz ve huzurlu.",
        "tags": ["Retro", "Sakin", "Ahşap Dekor", "Loş Işık"],
        "phone": "0228 212 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Osmanlı+Kahvecisi+Bilecik",
        "atmosphere": "Çok Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.5
      },
      {
        "name": "Söğüt Ertuğrul Kahvesi",
        "district": "Söğüt",
        "address": "Ertuğrul Gazi Türbesi yakını, Söğüt, Bilecik",
        "rating": 3.9,
        "reviewCount": 220,
        "description": "Ertuğrul Gazi Türbesi yakınlarında, tarihi dokuyla bütünleşmiş bir kahvehane. Zamanı geri saran bir atmosfer.",
        "tags": ["Retro", "Vintage", "Sakin", "Köşe Masa"],
        "phone": "0228 361 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Söğüt+Ertuğrul+Kahvesi+Bilecik",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 7.5
      }
    ]
  },
  "bingol": {
    "name": "Bingöl",
    "plate": "12",
    "cafeCount": 2,
    "cafes": [
      {
        "name": "Karo Cafe",
        "district": "Merkez",
        "address": "Yenişehir Mah., Merkez, Bingöl",
        "rating": 3.8,
        "reviewCount": 200,
        "description": "Bingöl'ün modern yüzünü temsil eden, gençlerin tercih ettiği sakin bir kafe. WiFi ve sessiz ortamıyla çalışmaya uygun.",
        "tags": ["WiFi", "Minimalist", "Sakin", "Köşe Masa"],
        "phone": "0426 213 45 67",
        "googleMapsUrl": "https://www.google.com/maps/search/Karo+Cafe+Bingöl",
        "atmosphere": "Sessiz",
        "lighting": "Orta",
        "privacyScore": 7.5
      },
      {
        "name": "Bingöl Kale Kahvecisi",
        "district": "Merkez",
        "address": "Kale Mah., Merkez, Bingöl",
        "rating": 3.6,
        "reviewCount": 130,
        "description": "Bingöl Kalesi yakınlarında, şehrin eski dokusunu koruyan geleneksel bir kahvehane.",
        "tags": ["Retro", "Sakin", "Loş Işık", "Ahşap Dekor"],
        "phone": "0426 214 89 01",
        "googleMapsUrl": "https://www.google.com/maps/search/Bingöl+Kale+Kahvecisi",
        "atmosphere": "Çok Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.0
      }
    ]
  },
  "bitlis": {
    "name": "Bitlis",
    "plate": "13",
    "cafeCount": 2,
    "cafes": [
      {
        "name": "Ahlat Selçuklu Kahvecisi",
        "district": "Ahlat",
        "address": "Selçuklu Mezarlığı yakını, Ahlat, Bitlis",
        "rating": 4.0,
        "reviewCount": 280,
        "description": "Ahlat'ın dünyaca ünlü Selçuklu mezar taşlarına yakın, tarihin derinliklerinde huzur bulacağınız bir kahvehane.",
        "tags": ["Vintage", "Sakin", "Doğal Işık", "Köşe Masa"],
        "phone": "0434 412 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Ahlat+Selçuklu+Kahvecisi+Bitlis",
        "atmosphere": "Çok Sessiz",
        "lighting": "Doğal",
        "privacyScore": 9.0
      },
      {
        "name": "Bitlis Han Kahvecisi",
        "district": "Merkez",
        "address": "Eski Çarşı, Merkez, Bitlis",
        "rating": 3.7,
        "reviewCount": 150,
        "description": "Bitlis'in tarihi hanlarından birinde, taş duvarlı ve loş aydınlatmalı bir kahvehane. Kış aylarında özellikle huzurlu.",
        "tags": ["Retro", "Loş Işık", "Sakin", "Ahşap Dekor"],
        "phone": "0434 226 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Bitlis+Han+Kahvecisi",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.0
      }
    ]
  },
  "bolu": {
    "name": "Bolu",
    "plate": "14",
    "cafeCount": 3,
    "cafes": [
      {
        "name": "Göl Kenarı Kahvecisi",
        "district": "Merkez",
        "address": "Abant Gölü kenarı, Merkez, Bolu",
        "rating": 4.2,
        "reviewCount": 720,
        "description": "Abant Gölü kıyısında, doğanın ortasında huzurlu bir kahve molası. Göl manzarası eşliğinde düşüncelere dalmak için ideal.",
        "tags": ["Bahçeli", "Sakin", "Doğal Işık", "Köşe Masa"],
        "phone": "0374 225 45 67",
        "googleMapsUrl": "https://www.google.com/maps/search/Abant+Göl+Kenarı+Cafe+Bolu",
        "atmosphere": "Çok Sessiz",
        "lighting": "Doğal",
        "privacyScore": 9.0
      },
      {
        "name": "Mudurnu Tarihi Kahvehane",
        "district": "Mudurnu",
        "address": "Tarihi Çarşı, Mudurnu, Bolu",
        "rating": 4.0,
        "reviewCount": 380,
        "description": "Osmanlı mimarisinin korunduğu Mudurnu'da, tarihi bir kahvehane. Ahşap evlerin arasında zamanda yolculuk.",
        "tags": ["Retro", "Vintage", "Sakin", "Ahşap Dekor"],
        "phone": "0374 421 89 01",
        "googleMapsUrl": "https://www.google.com/maps/search/Mudurnu+Tarihi+Kahvehane+Bolu",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.5
      },
      {
        "name": "Bolu Dağ Evi Cafe",
        "district": "Merkez",
        "address": "Karacasu Mah., Merkez, Bolu",
        "rating": 3.9,
        "reviewCount": 290,
        "description": "Bolu'nun dağ evleri konseptini şehre taşıyan sıcak bir kafe. Şöminesi ve ahşap dekoruyla kış aylarının gözdesi.",
        "tags": ["Ahşap Dekor", "Sakin", "Loş Işık", "Köşe Masa"],
        "phone": "0374 212 56 78",
        "googleMapsUrl": "https://www.google.com/maps/search/Bolu+Dağ+Evi+Cafe",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.0
      }
    ]
  },
  "burdur": {
    "name": "Burdur",
    "plate": "15",
    "cafeCount": 2,
    "cafes": [
      {
        "name": "Göl Cafe Burdur",
        "district": "Merkez",
        "address": "Göl kenarı, Merkez, Burdur",
        "rating": 3.8,
        "reviewCount": 240,
        "description": "Burdur Gölü'ne nazır konumuyla şehrin en huzurlu noktası. Kuş sesleri eşliğinde sakin bir kahve keyfi.",
        "tags": ["Bahçeli", "Sakin", "Doğal Işık", "Minimalist"],
        "phone": "0248 233 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Göl+Cafe+Burdur",
        "atmosphere": "Çok Sessiz",
        "lighting": "Doğal",
        "privacyScore": 8.5
      },
      {
        "name": "Sagalassos Cafe",
        "district": "Merkez",
        "address": "Cumhuriyet Cad., Merkez, Burdur",
        "rating": 3.7,
        "reviewCount": 170,
        "description": "Antik Sagalassos'tan esinlenen dekoru ile Burdur'un kültürel zenginliğini yansıtan sakin bir kafe.",
        "tags": ["Retro", "Sakin", "Ahşap Dekor", "Loş Işık"],
        "phone": "0248 234 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Sagalassos+Cafe+Burdur",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 7.5
      }
    ]
  },
  "bursa": {
    "name": "Bursa",
    "plate": "16",
    "cafeCount": 5,
    "cafes": [
      {
        "name": "Koza Han Kahvecisi",
        "district": "Osmangazi",
        "address": "Koza Han, Osmangazi, Bursa",
        "rating": 4.5,
        "reviewCount": 1950,
        "description": "15. yüzyıldan kalma tarihi İpek Han'da, çınarın gölgesinde Türk kahvesi. Bursa'nın en ikonik kahve deneyimi. Osmanlı atmosferinin hâlâ yaşadığı bir mekân.",
        "tags": ["Retro", "Vintage", "Bahçeli", "Sakin", "Ahşap Dekor"],
        "phone": "0224 221 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Koza+Han+Kahvecisi+Bursa",
        "atmosphere": "Orta",
        "lighting": "Doğal",
        "privacyScore": 7.0
      },
      {
        "name": "Cumalıkızık Esma Sultan Konağı",
        "district": "Yıldırım",
        "address": "Cumalıkızık Köyü, Yıldırım, Bursa",
        "rating": 4.3,
        "reviewCount": 1280,
        "description": "UNESCO Dünya Mirası listesindeki Cumalıkızık köyünde, restore edilmiş Osmanlı konağında kahve keyfi. 700 yıllık tarihin içinde huzur.",
        "tags": ["Vintage", "Retro", "Sakin", "Ahşap Dekor", "Bahçeli"],
        "phone": "0224 373 45 67",
        "googleMapsUrl": "https://www.google.com/maps/search/Cumalıkızık+Esma+Sultan+Konağı+Bursa",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 8.5
      },
      {
        "name": "İnkaya Çınarı Cafe",
        "district": "Osmangazi",
        "address": "İnkaya Köyü, Osmangazi, Bursa",
        "rating": 4.1,
        "reviewCount": 890,
        "description": "600 yaşındaki devasa çınar ağacının altında, doğayla iç içe bir kahve deneyimi. Ağacın gölgesinde zamanın yavaşladığını hissedersiniz.",
        "tags": ["Bahçeli", "Sakin", "Doğal Işık", "Köşe Masa"],
        "phone": "0224 234 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/İnkaya+Çınarı+Cafe+Bursa",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.5
      },
      {
        "name": "Setbaşı Kahvecisi",
        "district": "Osmangazi",
        "address": "Setbaşı, Osmangazi, Bursa",
        "rating": 4.0,
        "reviewCount": 670,
        "description": "Gökdere'nin aktığı Setbaşı bölgesinde, su sesinin eşlik ettiği huzurlu bir kahvehane. Bursa'nın klasik buluşma noktalarından.",
        "tags": ["Bahçeli", "Sakin", "Doğal Işık", "Retro"],
        "phone": "0224 222 56 78",
        "googleMapsUrl": "https://www.google.com/maps/search/Setbaşı+Kahvecisi+Bursa",
        "atmosphere": "Orta",
        "lighting": "Doğal",
        "privacyScore": 6.5
      },
      {
        "name": "Nilüfer Kitap Kahve",
        "district": "Nilüfer",
        "address": "Beşevler Mah., Nilüfer, Bursa",
        "rating": 4.2,
        "reviewCount": 480,
        "description": "Nilüfer'in modern yüzünde, kitap ve kahve tutkunlarının buluşma noktası. Sessiz ortamı ve geniş kitaplığıyla saatlerce kalabileceğiniz bir yer.",
        "tags": ["Kitaplık", "WiFi", "Sakin", "Minimalist", "Köşe Masa"],
        "phone": "0224 441 90 12",
        "googleMapsUrl": "https://www.google.com/maps/search/Nilüfer+Kitap+Kahve+Bursa",
        "atmosphere": "Çok Sessiz",
        "lighting": "Orta",
        "privacyScore": 8.5
      }
    ]
  },
  "canakkale": {
    "name": "Çanakkale",
    "plate": "17",
    "cafeCount": 3,
    "cafes": [
      {
        "name": "Yalı Hanı Kahvecisi",
        "district": "Merkez",
        "address": "Yalı Hanı, Fevzipaşa Mah., Merkez, Çanakkale",
        "rating": 4.2,
        "reviewCount": 680,
        "description": "Çanakkale'nin tarihi Yalı Hanı'nda, Boğaz manzaralı huzurlu bir kahvehane. Gelibolu'ya bakan serin bir esinti eşliğinde kahve keyfi.",
        "tags": ["Vintage", "Bahçeli", "Sakin", "Doğal Işık"],
        "phone": "0286 217 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Yalı+Hanı+Kahvecisi+Çanakkale",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 8.0
      },
      {
        "name": "Bozcaada Rüzgâr Cafe",
        "district": "Bozcaada",
        "address": "Çarşı İçi, Bozcaada, Çanakkale",
        "rating": 4.4,
        "reviewCount": 920,
        "description": "Bozcaada'nın bağ kokulu sokaklarında, rüzgârın ve denizin sesiyle bezeli bir kafe. Ada sakinliğini yaşamak için birebir.",
        "tags": ["Bahçeli", "Sakin", "Doğal Işık", "Minimalist"],
        "phone": "0286 697 12 34",
        "googleMapsUrl": "https://www.google.com/maps/search/Bozcaada+Rüzgâr+Cafe+Çanakkale",
        "atmosphere": "Çok Sessiz",
        "lighting": "Doğal",
        "privacyScore": 9.0
      },
      {
        "name": "Kordon Kahvecisi",
        "district": "Merkez",
        "address": "Kordon Boyu, Merkez, Çanakkale",
        "rating": 3.9,
        "reviewCount": 440,
        "description": "Çanakkale kordonunda, denize nazır bir kahvehane. Gün batımında altın rengine bürünen Boğaz manzarası eşsiz.",
        "tags": ["Bahçeli", "Sakin", "Doğal Işık", "Köşe Masa"],
        "phone": "0286 213 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Kordon+Kahvecisi+Çanakkale",
        "atmosphere": "Orta",
        "lighting": "Doğal",
        "privacyScore": 6.5
      }
    ]
  },
  "cankiri": {
    "name": "Çankırı",
    "plate": "18",
    "cafeCount": 2,
    "cafes": [
      {
        "name": "Tuz Mağarası Cafe",
        "district": "Merkez",
        "address": "Cumhuriyet Cad., Merkez, Çankırı",
        "rating": 3.7,
        "reviewCount": 180,
        "description": "Çankırı'nın meşhur tuz mağaralarından esinlenen temasıyla ilginç bir kafe. Sakin ve farklı bir atmosfer.",
        "tags": ["Sakin", "Minimalist", "Köşe Masa", "Loş Işık"],
        "phone": "0376 213 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Tuz+Mağarası+Cafe+Çankırı",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 7.5
      },
      {
        "name": "Çankırı Konak Kahvecisi",
        "district": "Merkez",
        "address": "Atatürk Cad., Merkez, Çankırı",
        "rating": 3.6,
        "reviewCount": 140,
        "description": "Şehir merkezindeki eski bir konakta hizmet veren geleneksel kahvehane. Ahşap döşemeleri ve loş ışığıyla huzur veriyor.",
        "tags": ["Retro", "Ahşap Dekor", "Sakin", "Vintage"],
        "phone": "0376 212 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Çankırı+Konak+Kahvecisi",
        "atmosphere": "Çok Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.0
      }
    ]
  },
  "corum": {
    "name": "Çorum",
    "plate": "19",
    "cafeCount": 2,
    "cafes": [
      {
        "name": "Hitit Cafe",
        "district": "Merkez",
        "address": "Gazi Cad., Merkez, Çorum",
        "rating": 3.9,
        "reviewCount": 310,
        "description": "Hititlilerin başkentine yakın bu şehirde, antik çağlardan esinlenen dekoru ile dikkat çeken bir kafe. Sessiz ve huzurlu.",
        "tags": ["Retro", "Sakin", "Ahşap Dekor", "Köşe Masa"],
        "phone": "0364 224 45 67",
        "googleMapsUrl": "https://www.google.com/maps/search/Hitit+Cafe+Çorum",
        "atmosphere": "Sessiz",
        "lighting": "Orta",
        "privacyScore": 7.5
      },
      {
        "name": "Leblebi Kahvecisi",
        "district": "Merkez",
        "address": "İnönü Cad., Merkez, Çorum",
        "rating": 3.8,
        "reviewCount": 260,
        "description": "Çorum'un meşhur leblebisiyle birlikte kahve keyfi. Geleneksel atmosferiyle yerel halkın sevdiği bir mekân.",
        "tags": ["Retro", "Sakin", "Loş Işık", "Vintage"],
        "phone": "0364 225 89 01",
        "googleMapsUrl": "https://www.google.com/maps/search/Leblebi+Kahvecisi+Çorum",
        "atmosphere": "Orta",
        "lighting": "Loş",
        "privacyScore": 6.5
      }
    ]
  },
  "denizli": {
    "name": "Denizli",
    "plate": "20",
    "cafeCount": 3,
    "cafes": [
      {
        "name": "Pamukkale Teras Cafe",
        "district": "Merkez",
        "address": "İstasyon Cad., Merkezefendi, Denizli",
        "rating": 4.0,
        "reviewCount": 450,
        "description": "Denizli'nin modern yüzünde, teras katından şehir manzarası sunan sakin bir kafe. Akşamüstleri özellikle huzurlu.",
        "tags": ["Bahçeli", "Sakin", "Doğal Işık", "Minimalist"],
        "phone": "0258 261 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Pamukkale+Teras+Cafe+Denizli",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.5
      },
      {
        "name": "Laodikeia Kitap Kafe",
        "district": "Merkezefendi",
        "address": "Süleyman Demirel Blv., Merkezefendi, Denizli",
        "rating": 4.1,
        "reviewCount": 360,
        "description": "Antik Laodikeia'dan adını alan bu kitap kafe, kitap severler için sessiz bir sığınak. Geniş koleksiyonu ve rahat ortamıyla öne çıkar.",
        "tags": ["Kitaplık", "WiFi", "Sakin", "Minimalist"],
        "phone": "0258 264 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Laodikeia+Kitap+Kafe+Denizli",
        "atmosphere": "Çok Sessiz",
        "lighting": "Orta",
        "privacyScore": 8.5
      },
      {
        "name": "Çınar Altı Kahvecisi",
        "district": "Merkezefendi",
        "address": "Bayramyeri, Merkezefendi, Denizli",
        "rating": 3.8,
        "reviewCount": 290,
        "description": "Bayramyeri'ndeki tarihi çınarın altında, geleneksel Denizli kahvehanesi. Esnafla sohbet eşliğinde huzurlu bir mola.",
        "tags": ["Bahçeli", "Retro", "Sakin", "Doğal Işık"],
        "phone": "0258 242 12 34",
        "googleMapsUrl": "https://www.google.com/maps/search/Çınar+Altı+Kahvecisi+Denizli",
        "atmosphere": "Orta",
        "lighting": "Doğal",
        "privacyScore": 6.5
      }
    ]
  },
  "diyarbakir": {
    "name": "Diyarbakır",
    "plate": "21",
    "cafeCount": 3,
    "cafes": [
      {
        "name": "Hasan Paşa Hanı Kahvecisi",
        "district": "Sur",
        "address": "Hasan Paşa Hanı, Gazi Cad., Sur, Diyarbakır",
        "rating": 4.4,
        "reviewCount": 1380,
        "description": "16. yüzyıldan kalma tarihi Hasan Paşa Hanı'nda, avlu içinde kahve keyfi. Diyarbakır'ın en atmosferik mekânlarından biri.",
        "tags": ["Retro", "Vintage", "Bahçeli", "Sakin", "Ahşap Dekor"],
        "phone": "0412 228 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Hasan+Paşa+Hanı+Kahvecisi+Diyarbakır",
        "atmosphere": "Orta",
        "lighting": "Doğal",
        "privacyScore": 7.0
      },
      {
        "name": "Sur İçi Kahvecisi",
        "district": "Sur",
        "address": "Melik Ahmet Cad., Sur, Diyarbakır",
        "rating": 4.1,
        "reviewCount": 560,
        "description": "Diyarbakır surlarının içinde, tarihi dokunun en yoğun hissedildiği bölgede sakin bir kahvehane. Bazalt taştan duvarları eşsiz.",
        "tags": ["Retro", "Loş Işık", "Sakin", "Köşe Masa"],
        "phone": "0412 223 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Sur+İçi+Kahvecisi+Diyarbakır",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.0
      },
      {
        "name": "Dicle Kıyısı Cafe",
        "district": "Yenişehir",
        "address": "Dicle Nehri kenarı, Yenişehir, Diyarbakır",
        "rating": 3.9,
        "reviewCount": 420,
        "description": "Dicle Nehri kıyısında, On Gözlü Köprü manzaralı huzurlu bir kafe. Akşamüstü güneşin nehirde yansıması büyüleyici.",
        "tags": ["Bahçeli", "Sakin", "Doğal Işık", "Köşe Masa"],
        "phone": "0412 235 12 34",
        "googleMapsUrl": "https://www.google.com/maps/search/Dicle+Kıyısı+Cafe+Diyarbakır",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.5
      }
    ]
  },
  "edirne": {
    "name": "Edirne",
    "plate": "22",
    "cafeCount": 3,
    "cafes": [
      {
        "name": "Selimiye Kahvecisi",
        "district": "Merkez",
        "address": "Selimiye Camii çevresi, Meydan, Merkez, Edirne",
        "rating": 4.2,
        "reviewCount": 780,
        "description": "Mimar Sinan'ın şaheseri Selimiye Camii manzarasında kahve keyfi. Tarihin en güzel eserlerinden birini seyrederek huzur bulacağınız bir mekân.",
        "tags": ["Bahçeli", "Sakin", "Doğal Işık", "Vintage"],
        "phone": "0284 212 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Selimiye+Kahvecisi+Edirne",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.5
      },
      {
        "name": "Karaağaç Sınır Cafe",
        "district": "Karaağaç",
        "address": "Karaağaç Mah., Merkez, Edirne",
        "rating": 4.0,
        "reviewCount": 450,
        "description": "Meriç ve Tunca nehirlerinin buluştuğu Karaağaç'ta, sınırın hemen yanında sakin bir kafe. Avrupa'yı karşıdan seyredebilirsiniz.",
        "tags": ["Bahçeli", "Sakin", "Doğal Işık", "Minimalist"],
        "phone": "0284 214 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Karaağaç+Cafe+Edirne",
        "atmosphere": "Çok Sessiz",
        "lighting": "Doğal",
        "privacyScore": 8.5
      },
      {
        "name": "Tarihi Rüstempaşa Kervansarayı Cafe",
        "district": "Merkez",
        "address": "Rüstempaşa Kervansarayı, Merkez, Edirne",
        "rating": 4.3,
        "reviewCount": 620,
        "description": "Mimar Sinan eseri kervansarayın avlusunda, tarihi atmosferde kahve. Edirne'nin en özel mekânlarından biri.",
        "tags": ["Retro", "Vintage", "Bahçeli", "Sakin"],
        "phone": "0284 213 56 78",
        "googleMapsUrl": "https://www.google.com/maps/search/Rüstempaşa+Kervansarayı+Cafe+Edirne",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.0
      }
    ]
  },
  "elazig": {
    "name": "Elazığ",
    "plate": "23",
    "cafeCount": 2,
    "cafes": [
      {
        "name": "Harput Kalesi Kahvecisi",
        "district": "Merkez",
        "address": "Harput Mah., Merkez, Elazığ",
        "rating": 4.0,
        "reviewCount": 380,
        "description": "Tarihi Harput Kalesi yakınlarında, ovaya bakan muhteşem manzarasıyla Elazığ'ın en huzurlu kahvesi. Rüzgâr ve sessizlik eşlik eder.",
        "tags": ["Bahçeli", "Sakin", "Doğal Işık", "Vintage"],
        "phone": "0424 218 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Harput+Kalesi+Kahvecisi+Elazığ",
        "atmosphere": "Çok Sessiz",
        "lighting": "Doğal",
        "privacyScore": 8.5
      },
      {
        "name": "Fırat Kenarı Cafe",
        "district": "Merkez",
        "address": "Fırat Nehri kenarı, Merkez, Elazığ",
        "rating": 3.8,
        "reviewCount": 250,
        "description": "Fırat Nehri'nin sakin kolları boyunca uzanan bu kafe, doğanın içinde huzurlu bir mola sunuyor.",
        "tags": ["Bahçeli", "Sakin", "Doğal Işık", "Köşe Masa"],
        "phone": "0424 212 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Fırat+Kenarı+Cafe+Elazığ",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.5
      }
    ]
  },
  "erzincan": {
    "name": "Erzincan",
    "plate": "24",
    "cafeCount": 2,
    "cafes": [
      {
        "name": "Kemaliye Taş Ev Cafe",
        "district": "Kemaliye",
        "address": "Kemaliye İlçe Merkezi, Kemaliye, Erzincan",
        "rating": 4.2,
        "reviewCount": 340,
        "description": "Tarihi Kemaliye (Eğin) ilçesinde, restore edilmiş taş evde hizmet veren büyüleyici bir kafe. Karanlık Kanyon manzarası eşliğinde huzur.",
        "tags": ["Vintage", "Sakin", "Ahşap Dekor", "Doğal Işık"],
        "phone": "0446 511 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Kemaliye+Taş+Ev+Cafe+Erzincan",
        "atmosphere": "Çok Sessiz",
        "lighting": "Doğal",
        "privacyScore": 9.0
      },
      {
        "name": "Erzincan Çarşı Kahvecisi",
        "district": "Merkez",
        "address": "Cumhuriyet Cad., Merkez, Erzincan",
        "rating": 3.7,
        "reviewCount": 190,
        "description": "Erzincan şehir merkezinde, yerel halkın uğrak noktası olan geleneksel bir kahvehane. Sade ve huzurlu.",
        "tags": ["Retro", "Sakin", "Loş Işık", "Köşe Masa"],
        "phone": "0446 214 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Erzincan+Çarşı+Kahvecisi",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 7.5
      }
    ]
  },
  "erzurum": {
    "name": "Erzurum",
    "plate": "25",
    "cafeCount": 3,
    "cafes": [
      {
        "name": "Rüstempaşa Kervansarayı Kahvecisi",
        "district": "Yakutiye",
        "address": "Rüstempaşa Kervansarayı, Yakutiye, Erzurum",
        "rating": 4.3,
        "reviewCount": 720,
        "description": "Tarihi kervansarayın içinde, taş kemerli odalarında kahve keyfi. Erzurum'un en atmosferik mekânı. Yüzyılların ağırlığını hissedersiniz.",
        "tags": ["Retro", "Vintage", "Sakin", "Loş Işık", "Ahşap Dekor"],
        "phone": "0442 234 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Rüstempaşa+Kervansarayı+Kahvecisi+Erzurum",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.5
      },
      {
        "name": "Çifte Minareli Kahvecisi",
        "district": "Yakutiye",
        "address": "Çifte Minareli Medrese yakını, Yakutiye, Erzurum",
        "rating": 3.9,
        "reviewCount": 410,
        "description": "Erzurum'un simgesi Çifte Minareli Medrese'nin yakınında, Selçuklu mimarisinin esinlediği bir kahvehane.",
        "tags": ["Retro", "Sakin", "Köşe Masa", "Ahşap Dekor"],
        "phone": "0442 233 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Çifte+Minareli+Kahvecisi+Erzurum",
        "atmosphere": "Orta",
        "lighting": "Orta",
        "privacyScore": 7.0
      },
      {
        "name": "Oltu Taşı Cafe",
        "district": "Yakutiye",
        "address": "Cumhuriyet Cad., Yakutiye, Erzurum",
        "rating": 3.8,
        "reviewCount": 280,
        "description": "Erzurum'un meşhur oltu taşından esinlenen dekoruyla farklı bir kafe. Soğuk kış günlerinde sıcak bir sığınak.",
        "tags": ["Ahşap Dekor", "Sakin", "Loş Işık", "Köşe Masa"],
        "phone": "0442 235 12 34",
        "googleMapsUrl": "https://www.google.com/maps/search/Oltu+Taşı+Cafe+Erzurum",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 7.5
      }
    ]
  },
  "eskisehir": {
    "name": "Eskişehir",
    "plate": "26",
    "cafeCount": 5,
    "cafes": [
      {
        "name": "Porsuk Çayı Kenarı Cafe",
        "district": "Odunpazarı",
        "address": "Porsuk Çayı kenarı, Adalar bölgesi, Odunpazarı, Eskişehir",
        "rating": 4.3,
        "reviewCount": 1280,
        "description": "Porsuk Çayı kıyısında, Adalar bölgesinin en huzurlu köşesinde bir kafe. Suyun üzerinde gondolların geçişini izlerken kahvenizi yudumlayın.",
        "tags": ["Bahçeli", "Sakin", "Doğal Işık", "Minimalist"],
        "phone": "0222 230 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Porsuk+Çayı+Kenarı+Cafe+Eskişehir",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.5
      },
      {
        "name": "Haller Gençlik Merkezi Cafe",
        "district": "Odunpazarı",
        "address": "Haller Gençlik Merkezi, Odunpazarı, Eskişehir",
        "rating": 4.1,
        "reviewCount": 890,
        "description": "Eski hal binasının dönüştürüldüğü kültür merkezinde, gençlerin enerji dolu ama çalışmaya uygun bir kafesi. Eskişehir'in yaratıcı ruhu burada.",
        "tags": ["WiFi", "Minimalist", "Sakin", "Köşe Masa"],
        "phone": "0222 231 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Haller+Gençlik+Merkezi+Cafe+Eskişehir",
        "atmosphere": "Orta",
        "lighting": "Orta",
        "privacyScore": 6.5
      },
      {
        "name": "Odunpazarı Evleri Kahvecisi",
        "district": "Odunpazarı",
        "address": "Odunpazarı Tarihi Evler bölgesi, Odunpazarı, Eskişehir",
        "rating": 4.4,
        "reviewCount": 980,
        "description": "UNESCO adayı Odunpazarı'nın tarihi ahşap evlerinden birinde, Osmanlı dönemi atmosferinde kahve. Renkli evlerin arasında kaybolun.",
        "tags": ["Vintage", "Retro", "Sakin", "Ahşap Dekor", "Köşe Masa"],
        "phone": "0222 335 12 34",
        "googleMapsUrl": "https://www.google.com/maps/search/Odunpazarı+Evleri+Kahvecisi+Eskişehir",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.5
      },
      {
        "name": "Tepebaşı Deneyim Cafe",
        "district": "Tepebaşı",
        "address": "Şirintepe Mah., Tepebaşı, Eskişehir",
        "rating": 4.0,
        "reviewCount": 560,
        "description": "Tepebaşı'nın öğrenci dostu bölgesinde, deneyim odaklı bir kafe konsepti. Board game'lerden kitaplığa kadar çeşitli aktiviteler.",
        "tags": ["WiFi", "Kitaplık", "Sakin", "Minimalist"],
        "phone": "0222 220 56 78",
        "googleMapsUrl": "https://www.google.com/maps/search/Tepebaşı+Deneyim+Cafe+Eskişehir",
        "atmosphere": "Orta",
        "lighting": "Orta",
        "privacyScore": 7.0
      },
      {
        "name": "Kentpark Sessiz Köşe",
        "district": "Tepebaşı",
        "address": "Kentpark yakını, Tepebaşı, Eskişehir",
        "rating": 4.2,
        "reviewCount": 420,
        "description": "Kentpark'ın yanı başında, parkın huzurunu iç mekâna taşıyan sakin bir kafe. Pencereden yeşilliğe bakarak çalışabilirsiniz.",
        "tags": ["WiFi", "Sakin", "Doğal Işık", "Minimalist", "Köşe Masa"],
        "phone": "0222 221 90 12",
        "googleMapsUrl": "https://www.google.com/maps/search/Kentpark+Sessiz+Köşe+Cafe+Eskişehir",
        "atmosphere": "Çok Sessiz",
        "lighting": "Doğal",
        "privacyScore": 8.5
      }
    ]
  },
  "gaziantep": {
    "name": "Gaziantep",
    "plate": "27",
    "cafeCount": 5,
    "cafes": [
      {
        "name": "Tahmis Kahvesi",
        "district": "Şahinbey",
        "address": "Suburcu Mah., Eski Kahve Pazarı, Şahinbey, Gaziantep",
        "rating": 4.5,
        "reviewCount": 1950,
        "description": "1635'ten beri hizmet veren Türkiye'nin en eski kahvehanelerinden biri. Menengiç kahvesiyle meşhur. Tarihin ve geleneğin buluştuğu eşsiz bir mekân.",
        "tags": ["Retro", "Vintage", "Sakin", "Ahşap Dekor"],
        "phone": "0342 231 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Tahmis+Kahvesi+Gaziantep",
        "atmosphere": "Orta",
        "lighting": "Loş",
        "privacyScore": 6.5
      },
      {
        "name": "İmam Çağdaş Yanı Kahvecisi",
        "district": "Şahinbey",
        "address": "Karagöz Mah., İmam Çağdaş sokağı, Şahinbey, Gaziantep",
        "rating": 4.1,
        "reviewCount": 680,
        "description": "Ünlü İmam Çağdaş'ın bulunduğu sokakta, baklava sonrası menengiç kahvesi için ideal bir durak. Geleneksel Antep atmosferi.",
        "tags": ["Retro", "Sakin", "Loş Işık", "Köşe Masa"],
        "phone": "0342 220 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/İmam+Çağdaş+Yanı+Kahvecisi+Gaziantep",
        "atmosphere": "Orta",
        "lighting": "Loş",
        "privacyScore": 6.5
      },
      {
        "name": "Bayazhan Kahvecisi",
        "district": "Şahinbey",
        "address": "Bayazhan, Şahinbey, Gaziantep",
        "rating": 4.3,
        "reviewCount": 920,
        "description": "Restore edilmiş tarihi Bayazhan'ın avlusunda, şehrin kültürel mirasını soluyan bir kahvehane. Kent müzesinin yanında sakin bir mola noktası.",
        "tags": ["Vintage", "Bahçeli", "Sakin", "Ahşap Dekor"],
        "phone": "0342 232 12 34",
        "googleMapsUrl": "https://www.google.com/maps/search/Bayazhan+Kahvecisi+Gaziantep",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.5
      },
      {
        "name": "Naib Hamamı Cafe",
        "district": "Şahinbey",
        "address": "Naib Hamamı, Şahinbey, Gaziantep",
        "rating": 4.2,
        "reviewCount": 540,
        "description": "Tarihi bir hamamın kafeye dönüştürülmüş hali. Kubbeli tavanı ve taş duvarlarıyla benzersiz bir atmosfer sunuyor.",
        "tags": ["Retro", "Vintage", "Loş Işık", "Sakin"],
        "phone": "0342 221 56 78",
        "googleMapsUrl": "https://www.google.com/maps/search/Naib+Hamamı+Cafe+Gaziantep",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.0
      },
      {
        "name": "Zeugma Cafe",
        "district": "Şehitkamil",
        "address": "Zeugma Müzesi yakını, Şehitkamil, Gaziantep",
        "rating": 4.0,
        "reviewCount": 380,
        "description": "Dünyaca ünlü Zeugma Müzesi'nin yakınlarında, mozaik temalı dekoru ile antik çağlara selam gönderen modern bir kafe.",
        "tags": ["Minimalist", "WiFi", "Sakin", "Köşe Masa"],
        "phone": "0342 325 90 12",
        "googleMapsUrl": "https://www.google.com/maps/search/Zeugma+Cafe+Gaziantep",
        "atmosphere": "Sessiz",
        "lighting": "Orta",
        "privacyScore": 7.5
      }
    ]
  },
  "giresun": {
    "name": "Giresun",
    "plate": "28",
    "cafeCount": 2,
    "cafes": [
      {
        "name": "Giresun Kalesi Cafe",
        "district": "Merkez",
        "address": "Giresun Kalesi yanı, Merkez, Giresun",
        "rating": 4.1,
        "reviewCount": 350,
        "description": "Giresun Kalesi'nin yanında, Karadeniz'e bakan muhteşem manzarasıyla öne çıkan bir kafe. Deniz ve dağ bir arada.",
        "tags": ["Bahçeli", "Sakin", "Doğal Işık", "Köşe Masa"],
        "phone": "0454 212 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Giresun+Kalesi+Cafe",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 8.0
      },
      {
        "name": "Fındık Bahçesi Kahvecisi",
        "district": "Merkez",
        "address": "Çınarlar Mah., Merkez, Giresun",
        "rating": 3.8,
        "reviewCount": 220,
        "description": "Fındık diyarı Giresun'da, fındık ağaçlarıyla çevrili bahçesinde huzurlu bir kafe. Fındıklı Türk kahvesi mutlaka deneyin.",
        "tags": ["Bahçeli", "Sakin", "Doğal Işık", "Retro"],
        "phone": "0454 216 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Fındık+Bahçesi+Kahvecisi+Giresun",
        "atmosphere": "Çok Sessiz",
        "lighting": "Doğal",
        "privacyScore": 8.5
      }
    ]
  },
  "gumushane": {
    "name": "Gümüşhane",
    "plate": "29",
    "cafeCount": 2,
    "cafes": [
      {
        "name": "Süleymaniye Mahallesi Kahvecisi",
        "district": "Merkez",
        "address": "Süleymaniye Mah., Merkez, Gümüşhane",
        "rating": 3.7,
        "reviewCount": 160,
        "description": "Gümüşhane'nin tarihi Süleymaniye Mahallesi'nde, eski Rum evlerinin arasında saklı bir kahvehane. Nostaljik ve huzurlu.",
        "tags": ["Vintage", "Sakin", "Ahşap Dekor", "Loş Işık"],
        "phone": "0456 213 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Süleymaniye+Mahallesi+Kahvecisi+Gümüşhane",
        "atmosphere": "Çok Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.5
      },
      {
        "name": "Karaca Mağarası Cafe",
        "district": "Merkez",
        "address": "Karaca Mağarası yolu, Merkez, Gümüşhane",
        "rating": 3.9,
        "reviewCount": 210,
        "description": "Karaca Mağarası ziyareti öncesi veya sonrası mola verebileceğiniz, doğanın içinde sakin bir kafe.",
        "tags": ["Bahçeli", "Sakin", "Doğal Işık", "Minimalist"],
        "phone": "0456 214 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Karaca+Mağarası+Cafe+Gümüşhane",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 8.0
      }
    ]
  },
  "hakkari": {
    "name": "Hakkari",
    "plate": "30",
    "cafeCount": 2,
    "cafes": [
      {
        "name": "Cilo Dağı Manzara Cafe",
        "district": "Merkez",
        "address": "Bulak Cad., Merkez, Hakkari",
        "rating": 3.6,
        "reviewCount": 120,
        "description": "Cilo Dağları'nın karla kaplı zirvelerine bakan, Hakkari'nin en huzurlu köşesi. Az bilinen ama unutulmaz bir mekân.",
        "tags": ["Sakin", "Doğal Işık", "Köşe Masa", "Minimalist"],
        "phone": "0438 211 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Cilo+Dağı+Manzara+Cafe+Hakkari",
        "atmosphere": "Çok Sessiz",
        "lighting": "Doğal",
        "privacyScore": 9.0
      },
      {
        "name": "Zap Suyu Kahvecisi",
        "district": "Merkez",
        "address": "Cumhuriyet Mah., Merkez, Hakkari",
        "rating": 3.5,
        "reviewCount": 100,
        "description": "Zap Suyu yakınlarında, dağ havasının içinizi doldurduğu küçük bir kahvehane. Sadelik ve huzurun buluşma noktası.",
        "tags": ["Retro", "Sakin", "Loş Işık", "Köşe Masa"],
        "phone": "0438 212 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Zap+Suyu+Kahvecisi+Hakkari",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.5
      }
    ]
  },
  "hatay": {
    "name": "Hatay",
    "plate": "31",
    "cafeCount": 3,
    "cafes": [
      {
        "name": "Uzun Çarşı Kahvecisi",
        "district": "Antakya",
        "address": "Uzun Çarşı, Antakya, Hatay",
        "rating": 4.3,
        "reviewCount": 890,
        "description": "Antakya'nın tarihi Uzun Çarşısı'nda, bin yıllık ticaret geleneğinin devam ettiği bir kahvehane. Medeniyetler mozaiğinin kokusunu alırsınız.",
        "tags": ["Retro", "Vintage", "Sakin", "Loş Işık"],
        "phone": "0326 214 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Uzun+Çarşı+Kahvecisi+Antakya+Hatay",
        "atmosphere": "Orta",
        "lighting": "Loş",
        "privacyScore": 6.5
      },
      {
        "name": "Affan Kahvesi",
        "district": "Antakya",
        "address": "Zenginler Mah., Antakya, Hatay",
        "rating": 4.1,
        "reviewCount": 620,
        "description": "Antakya'nın ünlü kahvehanelerinden biri. Süryani mirası taş binanın içinde, geleneksel mirra kahvesiyle tanınır.",
        "tags": ["Retro", "Sakin", "Loş Işık", "Ahşap Dekor"],
        "phone": "0326 215 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Affan+Kahvesi+Antakya+Hatay",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 7.5
      },
      {
        "name": "Harbiye Şelale Cafe",
        "district": "Defne",
        "address": "Harbiye Şelalesi yanı, Defne, Hatay",
        "rating": 4.0,
        "reviewCount": 540,
        "description": "Antik Daphne'nin şelalelerinin yanında, mitolojik bir atmosferde doğayla iç içe kahve. Su sesi ve yeşillik sizi sarar.",
        "tags": ["Bahçeli", "Sakin", "Doğal Işık", "Köşe Masa"],
        "phone": "0326 231 12 34",
        "googleMapsUrl": "https://www.google.com/maps/search/Harbiye+Şelale+Cafe+Hatay",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.5
      }
    ]
  },
  "isparta": {
    "name": "Isparta",
    "plate": "32",
    "cafeCount": 2,
    "cafes": [
      {
        "name": "Gül Bahçesi Cafe",
        "district": "Merkez",
        "address": "Gülcü Mah., Merkez, Isparta",
        "rating": 4.0,
        "reviewCount": 320,
        "description": "Güller diyarı Isparta'da, gül bahçeleriyle çevrili huzurlu bir kafe. Gül kokulu Türk kahvesi buranın imzası.",
        "tags": ["Bahçeli", "Sakin", "Doğal Işık", "Vintage"],
        "phone": "0246 232 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Gül+Bahçesi+Cafe+Isparta",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 8.0
      },
      {
        "name": "Eğirdir Göl Cafe",
        "district": "Eğirdir",
        "address": "Göl kıyısı, Eğirdir, Isparta",
        "rating": 4.2,
        "reviewCount": 460,
        "description": "Eğirdir Gölü kıyısında, dağ ve göl manzarasının birleştiği muhteşem bir konumda. Doğanın sessizliğinde kaybolun.",
        "tags": ["Bahçeli", "Sakin", "Doğal Işık", "Köşe Masa"],
        "phone": "0246 311 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Eğirdir+Göl+Cafe+Isparta",
        "atmosphere": "Çok Sessiz",
        "lighting": "Doğal",
        "privacyScore": 9.0
      }
    ]
  },
  "mersin": {
    "name": "Mersin",
    "plate": "33",
    "cafeCount": 3,
    "cafes": [
      {
        "name": "Eski Mersin Evleri Kahvecisi",
        "district": "Akdeniz",
        "address": "Eski Mersin Evleri, Akdeniz, Mersin",
        "rating": 4.1,
        "reviewCount": 580,
        "description": "Restore edilmiş tarihi Mersin evlerinden birinde, Akdeniz esintisiyle bezeli bir kahvehane. Limon ağaçları arasında huzur.",
        "tags": ["Vintage", "Bahçeli", "Sakin", "Doğal Işık"],
        "phone": "0324 238 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Eski+Mersin+Evleri+Kahvecisi",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 8.0
      },
      {
        "name": "Tarsus Şelalesi Cafe",
        "district": "Tarsus",
        "address": "Tarsus Şelalesi yanı, Tarsus, Mersin",
        "rating": 4.0,
        "reviewCount": 440,
        "description": "Tarsus Şelalesi'nin hemen yanında, su sesinin eşlik ettiği doğal bir kafe. Kleopatra'nın yıkandığı rivayet edilen şelalenin yanında kahve.",
        "tags": ["Bahçeli", "Sakin", "Doğal Işık", "Köşe Masa"],
        "phone": "0324 613 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Tarsus+Şelalesi+Cafe+Mersin",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.5
      },
      {
        "name": "Mersin Marina Cafe",
        "district": "Yenişehir",
        "address": "Mersin Marina, Yenişehir, Mersin",
        "rating": 3.9,
        "reviewCount": 370,
        "description": "Marina manzaralı, Akdeniz'in mavisine bakan modern bir kafe. Teknelerin salınımını izlerken huzur bulun.",
        "tags": ["Bahçeli", "Minimalist", "Sakin", "Doğal Işık"],
        "phone": "0324 328 12 34",
        "googleMapsUrl": "https://www.google.com/maps/search/Mersin+Marina+Cafe",
        "atmosphere": "Orta",
        "lighting": "Doğal",
        "privacyScore": 7.0
      }
    ]
  },
  "istanbul": {
    "name": "İstanbul",
    "plate": "34",
    "cafeCount": 10,
    "cafes": [
      {
        "name": "Fazıl Bey'in Türk Kahvesi",
        "district": "Kadıköy",
        "address": "Caferağa Mah., Serasker Cad., Kadıköy, İstanbul",
        "rating": 4.5,
        "reviewCount": 1950,
        "description": "1923'ten beri hizmet veren İstanbul'un efsanevi Türk kahvecisi. Yüzyıllık geleneğiyle hazırlanan kahve, Kadıköy'ün ruhunu yansıtır. Küçük mekânında zamandan koparsınız.",
        "tags": ["Retro", "Vintage", "Sakin", "Köşe Masa"],
        "phone": "0216 450 28 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Fazıl+Bey+Türk+Kahvesi+Kadıköy+İstanbul",
        "atmosphere": "Orta",
        "lighting": "Loş",
        "privacyScore": 6.5
      },
      {
        "name": "Dem Karaköy",
        "district": "Moda",
        "address": "Caferağa Mah., Moda Cad., Kadıköy, İstanbul",
        "rating": 4.3,
        "reviewCount": 1420,
        "description": "Moda'nın sakin sokaklarında bir çay evi. Loş aydınlatması ve derin sohbetlere davetkar atmosferiyle tanınır. Çay çeşitleri ve samimi ortamı ile vazgeçilmez.",
        "tags": ["Loş Işık", "Sakin", "Ahşap Dekor", "Köşe Masa", "Mum Işığı"],
        "phone": "0216 346 91 44",
        "googleMapsUrl": "https://www.google.com/maps/search/Dem+Moda+Kadıköy+İstanbul",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.5
      },
      {
        "name": "Petra Roasting Co.",
        "district": "Cihangir",
        "address": "Cihangir Mah., Akarsu Cad., Beyoğlu, İstanbul",
        "rating": 4.4,
        "reviewCount": 1680,
        "description": "Cihangir'in bohem atmosferinde specialty kahve sunan butik bir kavurucu. Küçük ama samimi mekânında her yudum özenle hazırlanır.",
        "tags": ["Minimalist", "Sakin", "WiFi", "Köşe Masa"],
        "phone": "0212 245 67 89",
        "googleMapsUrl": "https://www.google.com/maps/search/Petra+Roasting+Co+Cihangir+İstanbul",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.5
      },
      {
        "name": "Kronotrop Coffee",
        "district": "Beyoğlu",
        "address": "Firuzağa Mah., Cihangir, Beyoğlu, İstanbul",
        "rating": 4.3,
        "reviewCount": 1540,
        "description": "İstanbul'un artisan kahve sahnesinin öncülerinden. Kendi kavurduğu çekirdeklerle hazırlanan kahveler ve minimalist tasarımıyla tercih sebebi.",
        "tags": ["Minimalist", "WiFi", "Sakin", "Köşe Masa"],
        "phone": "0212 243 12 34",
        "googleMapsUrl": "https://www.google.com/maps/search/Kronotrop+Coffee+Beyoğlu+İstanbul",
        "atmosphere": "Orta",
        "lighting": "Doğal",
        "privacyScore": 7.0
      },
      {
        "name": "Kaktüs Cihangir",
        "district": "Cihangir",
        "address": "Cihangir Mah., Soğancı Sok., Beyoğlu, İstanbul",
        "rating": 4.1,
        "reviewCount": 890,
        "description": "Cihangir'in karakteristik sokaklarında, gündüz sakin bir kafe olarak hizmet veren mekân. Yeşilliklerle dolu terası ile huzurlu bir kaçış noktası.",
        "tags": ["Bahçeli", "Sakin", "Doğal Işık", "Vintage"],
        "phone": "0212 249 56 78",
        "googleMapsUrl": "https://www.google.com/maps/search/Kaktüs+Cihangir+İstanbul",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.5
      },
      {
        "name": "Walter's Coffee Roastery",
        "district": "Moda",
        "address": "Caferağa Mah., Moda Cad., Kadıköy, İstanbul",
        "rating": 4.2,
        "reviewCount": 1780,
        "description": "Breaking Bad temalı dünyaca ünlü kafe. Laboratuvar konseptli iç mekânı ve kaliteli kahvesiyle hem eğlenceli hem sakin bir deneyim sunar.",
        "tags": ["Retro", "WiFi", "Köşe Masa", "Minimalist"],
        "phone": "0216 345 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Walter's+Coffee+Roastery+Moda+İstanbul",
        "atmosphere": "Orta",
        "lighting": "Orta",
        "privacyScore": 6.5
      },
      {
        "name": "Mandabatmaz",
        "district": "Beyoğlu",
        "address": "Olivia Geçidi, İstiklal Cad. yakını, Beyoğlu, İstanbul",
        "rating": 4.5,
        "reviewCount": 1920,
        "description": "İstanbul'un en ünlü Türk kahvecisi. Adını köpüğünün kıvamından alır — o kadar yoğun ki mandalar bile batmaz. Küçücük mekânında efsanevi bir deneyim.",
        "tags": ["Retro", "Vintage", "Sakin", "Köşe Masa"],
        "phone": "0212 243 77 85",
        "googleMapsUrl": "https://www.google.com/maps/search/Mandabatmaz+Beyoğlu+İstanbul",
        "atmosphere": "Orta",
        "lighting": "Loş",
        "privacyScore": 6.0
      },
      {
        "name": "Café Privato",
        "district": "Galata",
        "address": "Galip Dede Cad., Galata Kulesi yakını, Beyoğlu, İstanbul",
        "rating": 4.3,
        "reviewCount": 1120,
        "description": "Galata Kulesi'nin gölgesinde, adı gibi özel ve mahrem bir kafe. Küçük mekânı ve samimi atmosferiyle kalabalıktan kaçmak isteyenlerin sığınağı.",
        "tags": ["Sakin", "Loş Işık", "Köşe Masa", "Mum Işığı", "Minimalist"],
        "phone": "0212 293 50 22",
        "googleMapsUrl": "https://www.google.com/maps/search/Café+Privato+Galata+İstanbul",
        "atmosphere": "Çok Sessiz",
        "lighting": "Loş",
        "privacyScore": 9.0
      },
      {
        "name": "Montag Coffee",
        "district": "Karaköy",
        "address": "Kemankeş Mah., Karaköy, Beyoğlu, İstanbul",
        "rating": 4.2,
        "reviewCount": 980,
        "description": "Karaköy'ün yenilenen yüzünde minimalist tasarımıyla öne çıkan bir kahveci. Sade ve şık mekânında kaliteli kahve ve sessizlik bir arada.",
        "tags": ["Minimalist", "WiFi", "Sakin", "Doğal Işık"],
        "phone": "0212 245 11 23",
        "googleMapsUrl": "https://www.google.com/maps/search/Montag+Coffee+Karaköy+İstanbul",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.5
      },
      {
        "name": "Sodade",
        "district": "Kadıköy",
        "address": "Caferağa Mah., Kadıköy, İstanbul",
        "rating": 4.1,
        "reviewCount": 760,
        "description": "Kadıköy'ün arka sokaklarında, vintage dekoruyla zamanda yolculuğa çıkaran bir kafe. Portekizce 'özlem' anlamına gelen adı gibi, nostaljik bir atmosfer.",
        "tags": ["Vintage", "Retro", "Loş Işık", "Sakin", "Mum Işığı"],
        "phone": "0216 349 44 67",
        "googleMapsUrl": "https://www.google.com/maps/search/Sodade+Kadıköy+İstanbul",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.5
      }
    ]
  },
  "izmir": {
    "name": "İzmir",
    "plate": "35",
    "cafeCount": 5,
    "cafes": [
      {
        "name": "Be Water Coffee & Book Cafe",
        "district": "Alsancak",
        "address": "Kıbrıs Şehitleri Cad., Alsancak, Konak, İzmir",
        "rating": 4.4,
        "reviewCount": 1250,
        "description": "İzmir'in kalbinde, kahve ve kitabın mükemmel uyumunu sunan bir mekân. Geniş kitaplığı ve sessiz ortamıyla saatlerce kaybolabileceğiniz bir sığınak.",
        "tags": ["Kitaplık", "WiFi", "Sakin", "Minimalist", "Köşe Masa"],
        "phone": "0232 464 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Be+Water+Coffee+Book+Cafe+Alsancak+İzmir",
        "atmosphere": "Çok Sessiz",
        "lighting": "Orta",
        "privacyScore": 9.0
      },
      {
        "name": "Fazıl Bey Alsancak",
        "district": "Alsancak",
        "address": "1382 Sok., Alsancak, Konak, İzmir",
        "rating": 4.3,
        "reviewCount": 980,
        "description": "İstanbul efsanesi Fazıl Bey'in İzmir şubesi. Aynı geleneksel lezzeti Ege'nin sıcaklığıyla buluşturuyor. Klasik Türk kahvesi deneyimi.",
        "tags": ["Retro", "Vintage", "Sakin", "Köşe Masa"],
        "phone": "0232 463 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Fazıl+Bey+Alsancak+İzmir",
        "atmosphere": "Orta",
        "lighting": "Loş",
        "privacyScore": 6.5
      },
      {
        "name": "Dario Moreno Sokağı Kahvecisi",
        "district": "Alsancak",
        "address": "Dario Moreno Sok., Alsancak, Konak, İzmir",
        "rating": 4.1,
        "reviewCount": 680,
        "description": "Ünlü sanatçı Dario Moreno'nun adını taşıyan renkli sokakta, nostaljik atmosferiyle bilinen bir kahvehane. Sokağın rengarenk evleri arasında saklı bir mücevher.",
        "tags": ["Vintage", "Bahçeli", "Sakin", "Doğal Işık"],
        "phone": "0232 421 12 34",
        "googleMapsUrl": "https://www.google.com/maps/search/Dario+Moreno+Sokağı+Cafe+Alsancak+İzmir",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.5
      },
      {
        "name": "1888 Alsancak Cafe",
        "district": "Alsancak",
        "address": "Alsancak Garı yakını, Konak, İzmir",
        "rating": 4.2,
        "reviewCount": 850,
        "description": "1888 yılından kalma tarihi bir binada hizmet veren, İzmir'in en köklü kafelerinden. Yüksek tavanları ve taş duvarlarıyla zamanda yolculuk hissi verir.",
        "tags": ["Vintage", "Retro", "Sakin", "Ahşap Dekor", "Loş Işık"],
        "phone": "0232 465 56 78",
        "googleMapsUrl": "https://www.google.com/maps/search/1888+Alsancak+Cafe+İzmir",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.0
      },
      {
        "name": "Varuna Gezgin Alsancak",
        "district": "Alsancak",
        "address": "Kıbrıs Şehitleri Cad., Alsancak, Konak, İzmir",
        "rating": 4.3,
        "reviewCount": 1120,
        "description": "Gezginlerin İzmir'deki evi. Seyahat temalı dekorasyonu ve dünya mutfağından lezzetleriyle hem kahve hem macera sunan bir mekân.",
        "tags": ["Vintage", "WiFi", "Sakin", "Ahşap Dekor", "Kitaplık"],
        "phone": "0232 422 90 12",
        "googleMapsUrl": "https://www.google.com/maps/search/Varuna+Gezgin+Alsancak+İzmir",
        "atmosphere": "Orta",
        "lighting": "Loş",
        "privacyScore": 7.0
      }
    ]
  },
  "kars": {
    "name": "Kars",
    "plate": "36",
    "cafeCount": 2,
    "cafes": [
      {
        "name": "Kars Kalesi Kahvecisi",
        "district": "Merkez",
        "address": "Kale Mah., Kars Kalesi yanı, Merkez, Kars",
        "rating": 4.0,
        "reviewCount": 360,
        "description": "Kars Kalesi'nin eteklerinde, kaz peynirli kahvaltı sonrası mola verebileceğiniz tarihi bir kahvehane. Orhan Pamuk'un 'Kar' romanının atmosferini hissedersiniz.",
        "tags": ["Retro", "Vintage", "Sakin", "Loş Işık"],
        "phone": "0474 212 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Kars+Kalesi+Kahvecisi",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.0
      },
      {
        "name": "Ani Harabeleri Yol Üstü Cafe",
        "district": "Merkez",
        "address": "Cumhuriyet Cad., Merkez, Kars",
        "rating": 3.8,
        "reviewCount": 220,
        "description": "Ani Harabeleri ziyareti öncesi veya sonrası uğranacak, şehir merkezindeki sakin bir kafe. Kars'ın soğuk ama sıcak atmosferi.",
        "tags": ["Sakin", "Ahşap Dekor", "Loş Işık", "Köşe Masa"],
        "phone": "0474 213 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Ani+Harabeleri+Cafe+Kars",
        "atmosphere": "Çok Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.5
      }
    ]
  },
  "kastamonu": {
    "name": "Kastamonu",
    "plate": "37",
    "cafeCount": 2,
    "cafes": [
      {
        "name": "Nasrullah Hanı Kahvecisi",
        "district": "Merkez",
        "address": "Nasrullah Hanı, Merkez, Kastamonu",
        "rating": 4.2,
        "reviewCount": 440,
        "description": "Tarihi Nasrullah Hanı'nın avlusunda, Osmanlı dönemi atmosferinde kahve keyfi. Kastamonu'nun en ikonik mekânlarından.",
        "tags": ["Retro", "Vintage", "Bahçeli", "Sakin", "Ahşap Dekor"],
        "phone": "0366 212 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Nasrullah+Hanı+Kahvecisi+Kastamonu",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.5
      },
      {
        "name": "Kastamonu Konağı Cafe",
        "district": "Merkez",
        "address": "Hisarardı Mah., Merkez, Kastamonu",
        "rating": 3.9,
        "reviewCount": 280,
        "description": "Restore edilmiş tarihi Kastamonu konağında, şehrin ahşap mimari geleneğini yaşatan bir kafe. Geleneksel çay ve pastırma eşliğinde huzurlu bir mola.",
        "tags": ["Vintage", "Ahşap Dekor", "Sakin", "Köşe Masa"],
        "phone": "0366 214 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Kastamonu+Konağı+Cafe",
        "atmosphere": "Çok Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.5
      }
    ]
  },
  "kayseri": {
    "name": "Kayseri",
    "plate": "38",
    "cafeCount": 3,
    "cafes": [
      {
        "name": "Kapalı Çarşı Kahvecisi",
        "district": "Kocasinan",
        "address": "Kapalı Çarşı içi, Kocasinan, Kayseri",
        "rating": 4.1,
        "reviewCount": 560,
        "description": "Kayseri'nin tarihi kapalı çarşısının içinde, esnafın ve ziyaretçilerin mola verdiği geleneksel bir kahvehane. Yüzyıllardır değişmeyen ticaret kültürünün parçası.",
        "tags": ["Retro", "Vintage", "Sakin", "Loş Işık"],
        "phone": "0352 222 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Kapalı+Çarşı+Kahvecisi+Kayseri",
        "atmosphere": "Orta",
        "lighting": "Loş",
        "privacyScore": 6.5
      },
      {
        "name": "Erciyes Manzara Cafe",
        "district": "Melikgazi",
        "address": "Cumhuriyet Mah., Melikgazi, Kayseri",
        "rating": 4.0,
        "reviewCount": 420,
        "description": "Erciyes Dağı'nın karlı zirvelerine bakan, şehrin panoramik manzarasını sunan bir kafe. Özellikle kış aylarında büyüleyici.",
        "tags": ["Bahçeli", "Sakin", "Doğal Işık", "Minimalist"],
        "phone": "0352 336 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Erciyes+Manzara+Cafe+Kayseri",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.5
      },
      {
        "name": "Gevher Nesibe Kahvecisi",
        "district": "Kocasinan",
        "address": "Gevher Nesibe Tıp Tarihi Müzesi yanı, Kocasinan, Kayseri",
        "rating": 4.2,
        "reviewCount": 380,
        "description": "Selçuklu dönemi şifahanesinin yanında, tarihi atmosferi modern konforla buluşturan bir kafe. Çift başlı kartal motifli dekoruyla dikkat çeker.",
        "tags": ["Retro", "Sakin", "Ahşap Dekor", "Köşe Masa"],
        "phone": "0352 231 12 34",
        "googleMapsUrl": "https://www.google.com/maps/search/Gevher+Nesibe+Kahvecisi+Kayseri",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.0
      }
    ]
  },
  "kirklareli": {
    "name": "Kırklareli",
    "plate": "39",
    "cafeCount": 3,
    "cafes": [
      {
        "name": "Trakya Kahvecisi",
        "district": "Merkez",
        "address": "Merkez, Karacaibrahim Mah. İstanbul Cd. No:42, Kırklareli",
        "rating": 4.0,
        "reviewCount": 312,
        "description": "Trakya'nın sakin havasını içeri taşıyan, ahşap dekorlu samimi bir mekan.",
        "tags": ["WiFi", "Ahşap Dekor", "Sakin"],
        "phone": "0288 214 32 10",
        "googleMapsUrl": "https://www.google.com/maps/search/Trakya+Kahvecisi+Kırklareli",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.2
      },
      {
        "name": "Lüleburgaz Kitap Cafe",
        "district": "Lüleburgaz",
        "address": "Lüleburgaz, Özerler Mah. Gazi Cd. No:18, Kırklareli",
        "rating": 4.2,
        "reviewCount": 187,
        "description": "Kitap raflarıyla çevrili, sessiz bir ortamda kahvenizi yudumlarken okuyabilirsiniz.",
        "tags": ["Kitaplık", "WiFi", "Minimalist", "Sakin"],
        "phone": "0288 417 55 23",
        "googleMapsUrl": "https://www.google.com/maps/search/Lüleburgaz+Kitap+Cafe+Kırklareli",
        "atmosphere": "Çok Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.1
      },
      {
        "name": "Hamam Cafe",
        "district": "Merkez",
        "address": "Merkez, Kocahıdır Mah. Hamam Sk. No:5, Kırklareli",
        "rating": 3.9,
        "reviewCount": 245,
        "description": "Tarihi hamam yapısının restore edilmiş halinde, taş duvarlar arasında keyifli bir ortam.",
        "tags": ["Vintage", "Köşe Masa", "Loş Işık"],
        "phone": "0288 212 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Hamam+Cafe+Kırklareli",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 7.8
      }
    ]
  },
  "kirsehir": {
    "name": "Kırşehir",
    "plate": "40",
    "cafeCount": 3,
    "cafes": [
      {
        "name": "Ahi Evran Cafe",
        "district": "Merkez",
        "address": "Merkez, Ahi Evran Mah. Cacabey Cd. No:15, Kırşehir",
        "rating": 3.8,
        "reviewCount": 198,
        "description": "Ahi Evran Üniversitesi yakınında, öğrenci dostu sakin bir mekan.",
        "tags": ["WiFi", "Sakin", "Minimalist"],
        "phone": "0386 212 45 67",
        "googleMapsUrl": "https://www.google.com/maps/search/Ahi+Evran+Cafe+Kırşehir",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.0
      },
      {
        "name": "Kapadokya Kahvesi",
        "district": "Merkez",
        "address": "Merkez, Terme Cd. No:32, Kırşehir",
        "rating": 4.0,
        "reviewCount": 156,
        "description": "Sıcak renklerin hakim olduğu, Kapadokya temalı dekorasyonuyla dikkat çeken mekan.",
        "tags": ["Ahşap Dekor", "Köşe Masa", "Vintage"],
        "phone": "0386 213 88 34",
        "googleMapsUrl": "https://www.google.com/maps/search/Kapadokya+Kahvesi+Kırşehir",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 7.5
      },
      {
        "name": "Mucur Taş Konak",
        "district": "Mucur",
        "address": "Mucur, Cumhuriyet Cd. No:8, Kırşehir",
        "rating": 3.7,
        "reviewCount": 89,
        "description": "Eski konak binasının restore edilmiş halinde, nostaljik bir atmosfer.",
        "tags": ["Retro", "Bahçeli", "Sakin"],
        "phone": "0386 311 22 10",
        "googleMapsUrl": "https://www.google.com/maps/search/Mucur+Taş+Konak+Kırşehir",
        "atmosphere": "Çok Sessiz",
        "lighting": "Doğal",
        "privacyScore": 8.0
      }
    ]
  },
  "kocaeli": {
    "name": "Kocaeli",
    "plate": "41",
    "cafeCount": 5,
    "cafes": [
      {
        "name": "Seka Park Cafe",
        "district": "İzmit",
        "address": "İzmit, Seka Park, Ömerağa Mah., Kocaeli",
        "rating": 4.2,
        "reviewCount": 1845,
        "description": "Seka Park içinde yeşillikler arasında, deniz manzaralı ferah bir mekan.",
        "tags": ["Bahçeli", "WiFi", "Doğal", "Sakin"],
        "phone": "0262 321 45 60",
        "googleMapsUrl": "https://www.google.com/maps/search/Seka+Park+Cafe+İzmit+Kocaeli",
        "atmosphere": "Orta",
        "lighting": "Doğal",
        "privacyScore": 6.5
      },
      {
        "name": "Kahve Diyarı İzmit",
        "district": "İzmit",
        "address": "İzmit, Ömerağa Mah. Hürriyet Cd. No:78, Kocaeli",
        "rating": 4.1,
        "reviewCount": 923,
        "description": "İzmit sahilinde, geniş iç mekanı ve köşe masalarıyla mahremiyete önem veren bir cafe.",
        "tags": ["Köşe Masa", "WiFi", "Minimalist", "Loş Işık"],
        "phone": "0262 322 67 89",
        "googleMapsUrl": "https://www.google.com/maps/search/Kahve+Diyarı+İzmit+Kocaeli",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.0
      },
      {
        "name": "Public Coffee Kocaeli",
        "district": "İzmit",
        "address": "İzmit, Yenişehir Mah. Ankara Cd. No:112, Kocaeli",
        "rating": 4.3,
        "reviewCount": 1456,
        "description": "Üçüncü dalga kahve anlayışıyla, modern ve şık iç mekanında kaliteli kahve deneyimi.",
        "tags": ["WiFi", "Minimalist", "Ahşap Dekor"],
        "phone": "0262 331 90 12",
        "googleMapsUrl": "https://www.google.com/maps/search/Public+Coffee+Kocaeli",
        "atmosphere": "Orta",
        "lighting": "Doğal",
        "privacyScore": 6.8
      },
      {
        "name": "Cafe Nar",
        "district": "İzmit",
        "address": "İzmit, Kemalpaşa Mah. Fevzi Çakmak Cd. No:34, Kocaeli",
        "rating": 4.0,
        "reviewCount": 678,
        "description": "Retro atmosferiyle dikkat çeken, sakin müzik eşliğinde kahvenizi yudumlamanız için ideal.",
        "tags": ["Retro", "Köşe Masa", "Loş Işık", "Sakin"],
        "phone": "0262 325 44 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Cafe+Nar+İzmit+Kocaeli",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.2
      },
      {
        "name": "Gebze Kitap Cafe",
        "district": "Gebze",
        "address": "Gebze, Güzeller Mah. İstanbul Cd. No:205, Kocaeli",
        "rating": 3.9,
        "reviewCount": 534,
        "description": "Gebze'nin kalabalığından uzak, kitap raflarıyla çevrili huzurlu bir köşe.",
        "tags": ["Kitaplık", "WiFi", "Sakin", "Minimalist"],
        "phone": "0262 641 23 78",
        "googleMapsUrl": "https://www.google.com/maps/search/Gebze+Kitap+Cafe+Kocaeli",
        "atmosphere": "Çok Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.5
      }
    ]
  },
  "konya": {
    "name": "Konya",
    "plate": "42",
    "cafeCount": 5,
    "cafes": [
      {
        "name": "Sille Konak Cafe",
        "district": "Selçuklu",
        "address": "Selçuklu, Sille Mah. Sille Cd. No:45, Konya",
        "rating": 4.3,
        "reviewCount": 1234,
        "description": "Tarihi Sille semtinde, taş konak içinde doğayla iç içe huzurlu bir mekan.",
        "tags": ["Bahçeli", "Vintage", "Ahşap Dekor", "Sakin"],
        "phone": "0332 248 67 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Sille+Konak+Cafe+Konya",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 8.2
      },
      {
        "name": "Konya Kitap Cafe",
        "district": "Meram",
        "address": "Meram, Yeni Meram Cd. No:82, Konya",
        "rating": 4.1,
        "reviewCount": 876,
        "description": "Meram'ın sakin atmosferinde, binlerce kitap arasında kaybolabileceğiniz bir cafe.",
        "tags": ["Kitaplık", "WiFi", "Minimalist", "Sakin"],
        "phone": "0332 351 23 45",
        "googleMapsUrl": "https://www.google.com/maps/search/Konya+Kitap+Cafe+Konya",
        "atmosphere": "Çok Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.8
      },
      {
        "name": "Has Kahve",
        "district": "Karatay",
        "address": "Karatay, Aziziye Mah. Mevlana Cd. No:15, Konya",
        "rating": 4.0,
        "reviewCount": 1567,
        "description": "Mevlana Müzesi yakınında, geleneksel Türk kahvesi seremonisiyle ünlü.",
        "tags": ["Vintage", "Ahşap Dekor", "Köşe Masa"],
        "phone": "0332 352 89 01",
        "googleMapsUrl": "https://www.google.com/maps/search/Has+Kahve+Konya",
        "atmosphere": "Orta",
        "lighting": "Loş",
        "privacyScore": 7.0
      },
      {
        "name": "Meram Bağları Cafe",
        "district": "Meram",
        "address": "Meram, Harmancık Mah. Bağlar Cd. No:120, Konya",
        "rating": 4.2,
        "reviewCount": 945,
        "description": "Meram bağları manzarasında, açık havada doğayla baş başa kahve keyfi.",
        "tags": ["Bahçeli", "Doğal", "Sakin", "Manzaralı"],
        "phone": "0332 325 56 78",
        "googleMapsUrl": "https://www.google.com/maps/search/Meram+Bağları+Cafe+Konya",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.5
      },
      {
        "name": "Dem Konya",
        "district": "Selçuklu",
        "address": "Selçuklu, Bosna Hersek Mah. Nalçacı Cd. No:55, Konya",
        "rating": 3.9,
        "reviewCount": 623,
        "description": "Modern tasarımlı, geniş masaları ve loş ışığıyla özel sohbetler için ideal.",
        "tags": ["WiFi", "Minimalist", "Loş Işık", "Köşe Masa"],
        "phone": "0332 241 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Dem+Konya",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.0
      }
    ]
  },
  "kutahya": {
    "name": "Kütahya",
    "plate": "43",
    "cafeCount": 3,
    "cafes": [
      {
        "name": "Çini Cafe",
        "district": "Merkez",
        "address": "Merkez, Atatürk Blv. No:45, Kütahya",
        "rating": 4.0,
        "reviewCount": 345,
        "description": "Kütahya çinileriyle bezeli duvarları ve geleneksel dekoru ile şehrin simgesi.",
        "tags": ["Vintage", "Ahşap Dekor", "Sakin"],
        "phone": "0274 223 45 67",
        "googleMapsUrl": "https://www.google.com/maps/search/Çini+Cafe+Kütahya",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.3
      },
      {
        "name": "Germiyan Kahvesi",
        "district": "Merkez",
        "address": "Merkez, Alipaşa Mah. Cumhuriyet Cd. No:22, Kütahya",
        "rating": 4.1,
        "reviewCount": 278,
        "description": "Tarihi Germiyan sokağında, Osmanlı tarzı dekorasyonuyla nostaljik bir atmosfer.",
        "tags": ["Retro", "Köşe Masa", "Mum Işığı"],
        "phone": "0274 224 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Germiyan+Kahvesi+Kütahya",
        "atmosphere": "Çok Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.3
      },
      {
        "name": "Porselen Cafe",
        "district": "Merkez",
        "address": "Merkez, Lala Hüseyin Paşa Mah. Zafer Cd. No:10, Kütahya",
        "rating": 3.8,
        "reviewCount": 190,
        "description": "Kütahya porselen sanatını yansıtan modern bir mekan, kahve çeşitleri zengin.",
        "tags": ["WiFi", "Minimalist", "Sakin"],
        "phone": "0274 216 55 43",
        "googleMapsUrl": "https://www.google.com/maps/search/Porselen+Cafe+Kütahya",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.0
      }
    ]
  },
  "malatya": {
    "name": "Malatya",
    "plate": "44",
    "cafeCount": 5,
    "cafes": [
      {
        "name": "Kayısı Cafe",
        "district": "Battalgazi",
        "address": "Battalgazi, İstasyon Mah. Kayısı Pazarı Cd. No:12, Malatya",
        "rating": 4.1,
        "reviewCount": 876,
        "description": "Malatya'nın simgesi kayısıdan yapılan özel içecekleriyle bilinen, sıcak bir mekan.",
        "tags": ["Ahşap Dekor", "Bahçeli", "Sakin"],
        "phone": "0422 321 45 67",
        "googleMapsUrl": "https://www.google.com/maps/search/Kayısı+Cafe+Malatya",
        "atmosphere": "Orta",
        "lighting": "Doğal",
        "privacyScore": 7.0
      },
      {
        "name": "Pusat Cafe",
        "district": "Yeşilyurt",
        "address": "Yeşilyurt, İnönü Cd. No:88, Malatya",
        "rating": 4.3,
        "reviewCount": 1123,
        "description": "Malatya'nın en bilinen üçüncü dalga kahvecisi, modern ve şık iç mekan.",
        "tags": ["WiFi", "Minimalist", "Köşe Masa", "Loş Işık"],
        "phone": "0422 238 90 12",
        "googleMapsUrl": "https://www.google.com/maps/search/Pusat+Cafe+Malatya",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.2
      },
      {
        "name": "İnönü Kitap Evi",
        "district": "Yeşilyurt",
        "address": "Yeşilyurt, İnönü Mah. İnönü Cd. No:34, Malatya",
        "rating": 4.0,
        "reviewCount": 567,
        "description": "Kitap cafe konseptiyle, sessiz okuma alanları ve özel köşeleriyle tercih edilen mekan.",
        "tags": ["Kitaplık", "WiFi", "Sakin", "Minimalist"],
        "phone": "0422 236 67 89",
        "googleMapsUrl": "https://www.google.com/maps/search/İnönü+Kitap+Evi+Malatya",
        "atmosphere": "Çok Sessiz",
        "lighting": "Loş",
        "privacyScore": 9.0
      },
      {
        "name": "Battalgazi Konak",
        "district": "Battalgazi",
        "address": "Battalgazi, Saray Mah. Hamam Cd. No:7, Malatya",
        "rating": 3.9,
        "reviewCount": 432,
        "description": "Tarihi Battalgazi semtinde, konak mimarisinden esinlenen dekoruyla dikkat çeker.",
        "tags": ["Vintage", "Ahşap Dekor", "Köşe Masa"],
        "phone": "0422 322 11 45",
        "googleMapsUrl": "https://www.google.com/maps/search/Battalgazi+Konak+Malatya",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.0
      },
      {
        "name": "Turgut Özal Sahil Cafe",
        "district": "Yeşilyurt",
        "address": "Yeşilyurt, Turgut Özal Blv. No:150, Malatya",
        "rating": 3.8,
        "reviewCount": 345,
        "description": "Bulvar üzerinde geniş terası ve ferah iç mekanıyla şehrin hareketinden uzak.",
        "tags": ["Bahçeli", "WiFi", "Sakin"],
        "phone": "0422 237 55 34",
        "googleMapsUrl": "https://www.google.com/maps/search/Turgut+Özal+Sahil+Cafe+Malatya",
        "atmosphere": "Orta",
        "lighting": "Doğal",
        "privacyScore": 6.8
      }
    ]
  },
  "manisa": {
    "name": "Manisa",
    "plate": "45",
    "cafeCount": 3,
    "cafes": [
      {
        "name": "Mesir Cafe",
        "district": "Şehzadeler",
        "address": "Şehzadeler, Utku Mah. Mesir Cd. No:25, Manisa",
        "rating": 4.0,
        "reviewCount": 456,
        "description": "Mesir macunu geleneğinden ilham alan dekoruyla Manisa'ya özgü bir mekan.",
        "tags": ["Vintage", "Ahşap Dekor", "Sakin"],
        "phone": "0236 231 45 67",
        "googleMapsUrl": "https://www.google.com/maps/search/Mesir+Cafe+Manisa",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.2
      },
      {
        "name": "Spil Dağı Cafe",
        "district": "Yunusemre",
        "address": "Yunusemre, Laleli Mah. Spil Cd. No:80, Manisa",
        "rating": 4.2,
        "reviewCount": 678,
        "description": "Spil Dağı eteklerinde, doğa manzaralı huzurlu bir kaçış noktası.",
        "tags": ["Bahçeli", "Doğal", "Sakin", "Manzaralı"],
        "phone": "0236 242 89 01",
        "googleMapsUrl": "https://www.google.com/maps/search/Spil+Dağı+Cafe+Manisa",
        "atmosphere": "Çok Sessiz",
        "lighting": "Doğal",
        "privacyScore": 8.5
      },
      {
        "name": "Turgutlu Dem",
        "district": "Turgutlu",
        "address": "Turgutlu, Cumhuriyet Mah. Atatürk Cd. No:55, Manisa",
        "rating": 3.8,
        "reviewCount": 234,
        "description": "Turgutlu'nun merkezinde, sakin ve minimalist bir kahve deneyimi.",
        "tags": ["WiFi", "Minimalist", "Köşe Masa"],
        "phone": "0236 313 22 45",
        "googleMapsUrl": "https://www.google.com/maps/search/Turgutlu+Dem+Manisa",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 7.5
      }
    ]
  },
  "kahramanmaras": {
    "name": "Kahramanmaraş",
    "plate": "46",
    "cafeCount": 4,
    "cafes": [
      {
        "name": "Dondurma Cafe",
        "district": "Onikişubat",
        "address": "Onikişubat, Trabzon Cd. No:30, Kahramanmaraş",
        "rating": 4.1,
        "reviewCount": 987,
        "description": "Maraş dondurması ile ünlü, geleneksel lezzetlerle modern cafe anlayışını birleştiren mekan.",
        "tags": ["Ahşap Dekor", "Bahçeli", "Sakin"],
        "phone": "0344 223 45 67",
        "googleMapsUrl": "https://www.google.com/maps/search/Dondurma+Cafe+Kahramanmaraş",
        "atmosphere": "Orta",
        "lighting": "Doğal",
        "privacyScore": 6.8
      },
      {
        "name": "Kale Cafe",
        "district": "Onikişubat",
        "address": "Onikişubat, Kale Mah. Kale Cd. No:5, Kahramanmaraş",
        "rating": 4.3,
        "reviewCount": 756,
        "description": "Tarihi kale surlarının yanında, şehir manzaralı nostaljik bir mekan.",
        "tags": ["Vintage", "Manzaralı", "Köşe Masa", "Retro"],
        "phone": "0344 225 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Kale+Cafe+Kahramanmaraş",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.8
      },
      {
        "name": "Kitap Kurdu Cafe",
        "district": "Dulkadiroğlu",
        "address": "Dulkadiroğlu, İsmetpaşa Mah. İstiklal Cd. No:40, Kahramanmaraş",
        "rating": 3.9,
        "reviewCount": 345,
        "description": "Kitapseverler için tasarlanmış, sessiz okuma alanlarıyla donatılmış huzurlu bir mekan.",
        "tags": ["Kitaplık", "WiFi", "Sakin", "Minimalist"],
        "phone": "0344 231 56 78",
        "googleMapsUrl": "https://www.google.com/maps/search/Kitap+Kurdu+Cafe+Kahramanmaraş",
        "atmosphere": "Çok Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.7
      },
      {
        "name": "Ahır Dağı Seyir Cafe",
        "district": "Onikişubat",
        "address": "Onikişubat, Ahır Dağı Yolu Üzeri, Kahramanmaraş",
        "rating": 4.0,
        "reviewCount": 567,
        "description": "Ahır Dağı eteklerinde, orman manzarasıyla doğanın içinde bir cafe.",
        "tags": ["Bahçeli", "Doğal", "Sakin", "Manzaralı"],
        "phone": "0344 245 33 21",
        "googleMapsUrl": "https://www.google.com/maps/search/Ahır+Dağı+Seyir+Cafe+Kahramanmaraş",
        "atmosphere": "Çok Sessiz",
        "lighting": "Doğal",
        "privacyScore": 9.0
      }
    ]
  },
  "mardin": {
    "name": "Mardin",
    "plate": "47",
    "cafeCount": 5,
    "cafes": [
      {
        "name": "Cercis Murat Konağı",
        "district": "Artuklu",
        "address": "Artuklu, 1. Cadde No:517, Mardin",
        "rating": 4.5,
        "reviewCount": 1987,
        "description": "Mardin'in en ikonik mekanı, tarihi konakta Mezopotamya ovası manzarasıyla eşsiz deneyim.",
        "tags": ["Vintage", "Manzaralı", "Ahşap Dekor", "Bahçeli"],
        "phone": "0482 212 68 41",
        "googleMapsUrl": "https://www.google.com/maps/search/Cercis+Murat+Konağı+Mardin",
        "atmosphere": "Orta",
        "lighting": "Doğal",
        "privacyScore": 7.0
      },
      {
        "name": "Bağdadi Cafe",
        "district": "Artuklu",
        "address": "Artuklu, 1. Cadde, Mardin",
        "rating": 4.3,
        "reviewCount": 1456,
        "description": "Tarihi taş binanın terasında, ovaya bakan muhteşem manzara eşliğinde kahve.",
        "tags": ["Vintage", "Manzaralı", "Köşe Masa"],
        "phone": "0482 213 45 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Bağdadi+Cafe+Mardin",
        "atmosphere": "Orta",
        "lighting": "Doğal",
        "privacyScore": 6.8
      },
      {
        "name": "Leyli Cafe",
        "district": "Artuklu",
        "address": "Artuklu, Şar Mah. 1. Cadde No:301, Mardin",
        "rating": 4.2,
        "reviewCount": 1234,
        "description": "Mardin evlerinin arasında gizli bir hazine, taş avluda sakin bir ortam.",
        "tags": ["Bahçeli", "Vintage", "Sakin", "Mum Işığı"],
        "phone": "0482 212 90 34",
        "googleMapsUrl": "https://www.google.com/maps/search/Leyli+Cafe+Mardin",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.5
      },
      {
        "name": "Antik Sur Cafe",
        "district": "Artuklu",
        "address": "Artuklu, Şar Mah. Sur Cd. No:12, Mardin",
        "rating": 4.0,
        "reviewCount": 678,
        "description": "Surların dibinde, antik taş duvarlarla çevrili atmosferik bir mekan.",
        "tags": ["Retro", "Loş Işık", "Köşe Masa", "Vintage"],
        "phone": "0482 215 67 23",
        "googleMapsUrl": "https://www.google.com/maps/search/Antik+Sur+Cafe+Mardin",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.8
      },
      {
        "name": "Midyat Telkari Cafe",
        "district": "Midyat",
        "address": "Midyat, Cumhuriyet Mah. Çarşı Cd. No:8, Mardin",
        "rating": 4.1,
        "reviewCount": 456,
        "description": "Midyat'ın telkari sanatından ilham alan dekoruyla, taş evler arasında saklı bir mekan.",
        "tags": ["Vintage", "Ahşap Dekor", "Sakin", "Köşe Masa"],
        "phone": "0482 462 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Midyat+Telkari+Cafe+Mardin",
        "atmosphere": "Çok Sessiz",
        "lighting": "Loş",
        "privacyScore": 9.0
      }
    ]
  },
  "mugla": {
    "name": "Muğla",
    "plate": "48",
    "cafeCount": 5,
    "cafes": [
      {
        "name": "Bodrum Kahve Evi",
        "district": "Bodrum",
        "address": "Bodrum, Çarşı Mah. Neyzen Tevfik Cd. No:60, Muğla",
        "rating": 4.3,
        "reviewCount": 1678,
        "description": "Bodrum marina manzarasında, beyaz badanalı duvarlarda Ege esintisi.",
        "tags": ["Bahçeli", "Manzaralı", "WiFi", "Sakin"],
        "phone": "0252 316 45 67",
        "googleMapsUrl": "https://www.google.com/maps/search/Bodrum+Kahve+Evi+Muğla",
        "atmosphere": "Orta",
        "lighting": "Doğal",
        "privacyScore": 6.5
      },
      {
        "name": "Dalyan Kaunos Cafe",
        "district": "Ortaca",
        "address": "Ortaca, Dalyan, Maraş Mah. Kaunos Cd. No:15, Muğla",
        "rating": 4.4,
        "reviewCount": 987,
        "description": "Dalyan kanalı kenarında, kaya mezarları manzarasıyla eşsiz bir kahve deneyimi.",
        "tags": ["Bahçeli", "Manzaralı", "Doğal", "Sakin"],
        "phone": "0252 284 23 45",
        "googleMapsUrl": "https://www.google.com/maps/search/Dalyan+Kaunos+Cafe+Muğla",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 8.0
      },
      {
        "name": "Datça Badem Cafe",
        "district": "Datça",
        "address": "Datça, İskele Mah. Ambarcı Cd. No:22, Muğla",
        "rating": 4.2,
        "reviewCount": 756,
        "description": "Datça yarımadasının sakin atmosferinde, badem ağaçları arasında huzurlu bir mekan.",
        "tags": ["Bahçeli", "Doğal", "Minimalist", "Sakin"],
        "phone": "0252 712 56 78",
        "googleMapsUrl": "https://www.google.com/maps/search/Datça+Badem+Cafe+Muğla",
        "atmosphere": "Çok Sessiz",
        "lighting": "Doğal",
        "privacyScore": 9.0
      },
      {
        "name": "Fethiye Eski Çarşı Kahvesi",
        "district": "Fethiye",
        "address": "Fethiye, Kesikkapı Mah. Hamam Sk. No:5, Muğla",
        "rating": 4.0,
        "reviewCount": 1234,
        "description": "Fethiye eski çarşısında, tarihi atmosferde geleneksel Türk kahvesi deneyimi.",
        "tags": ["Vintage", "Retro", "Köşe Masa"],
        "phone": "0252 614 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Fethiye+Eski+Çarşı+Kahvesi+Muğla",
        "atmosphere": "Orta",
        "lighting": "Loş",
        "privacyScore": 7.2
      },
      {
        "name": "Marmaris Sahil Kitap Cafe",
        "district": "Marmaris",
        "address": "Marmaris, Kemal Elgin Blv. No:35, Muğla",
        "rating": 3.9,
        "reviewCount": 567,
        "description": "Marmaris sahilinde, deniz manzaralı bir kitap cafe, sessiz köşeleriyle öne çıkar.",
        "tags": ["Kitaplık", "Manzaralı", "WiFi", "Sakin"],
        "phone": "0252 412 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Marmaris+Sahil+Kitap+Cafe+Muğla",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.8
      }
    ]
  },
  "mus": {
    "name": "Muş",
    "plate": "49",
    "cafeCount": 2,
    "cafes": [
      {
        "name": "Muş Ovası Cafe",
        "district": "Merkez",
        "address": "Merkez, Cumhuriyet Mah. İstasyon Cd. No:15, Muş",
        "rating": 3.7,
        "reviewCount": 134,
        "description": "Muş ovasının huzurunu iç mekana taşıyan, sade ve samimi bir cafe.",
        "tags": ["Sakin", "Ahşap Dekor", "WiFi"],
        "phone": "0436 212 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Muş+Ovası+Cafe+Muş",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.5
      },
      {
        "name": "Alparslan Kitap Cafe",
        "district": "Merkez",
        "address": "Merkez, Muş Alparslan Üniversitesi Kampüsü, Muş",
        "rating": 3.9,
        "reviewCount": 198,
        "description": "Üniversite kampüsü yakınında, öğrenci dostu ve sakin bir okuma mekanı.",
        "tags": ["Kitaplık", "WiFi", "Minimalist", "Sakin"],
        "phone": "0436 215 67 89",
        "googleMapsUrl": "https://www.google.com/maps/search/Alparslan+Kitap+Cafe+Muş",
        "atmosphere": "Çok Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.2
      }
    ]
  },
  "nevsehir": {
    "name": "Nevşehir",
    "plate": "50",
    "cafeCount": 4,
    "cafes": [
      {
        "name": "Peri Bacası Cafe",
        "district": "Merkez",
        "address": "Merkez, 2000 Evler Mah. Lale Cd. No:18, Nevşehir",
        "rating": 4.2,
        "reviewCount": 876,
        "description": "Kapadokya'nın peri bacalarından ilham alan dekoruyla, bölgenin ruhunu yansıtan mekan.",
        "tags": ["Vintage", "Ahşap Dekor", "Köşe Masa"],
        "phone": "0384 213 45 67",
        "googleMapsUrl": "https://www.google.com/maps/search/Peri+Bacası+Cafe+Nevşehir",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 7.8
      },
      {
        "name": "Göreme Taş Cafe",
        "district": "Göreme",
        "address": "Göreme, Müze Cd. No:28, Nevşehir",
        "rating": 4.5,
        "reviewCount": 1567,
        "description": "Göreme'nin kaya oyma yapısında, mağara ortamında eşsiz bir kahve deneyimi.",
        "tags": ["Vintage", "Mum Işığı", "Sakin", "Doğal"],
        "phone": "0384 271 23 45",
        "googleMapsUrl": "https://www.google.com/maps/search/Göreme+Taş+Cafe+Nevşehir",
        "atmosphere": "Çok Sessiz",
        "lighting": "Loş",
        "privacyScore": 9.2
      },
      {
        "name": "Ürgüp Teras Cafe",
        "district": "Ürgüp",
        "address": "Ürgüp, Cumhuriyet Mah. Kayseri Cd. No:45, Nevşehir",
        "rating": 4.3,
        "reviewCount": 1234,
        "description": "Ürgüp'ün tepesinde, vadiye bakan terasıyla balon manzaralı kahve keyfi.",
        "tags": ["Manzaralı", "Bahçeli", "WiFi"],
        "phone": "0384 341 56 78",
        "googleMapsUrl": "https://www.google.com/maps/search/Ürgüp+Teras+Cafe+Nevşehir",
        "atmosphere": "Orta",
        "lighting": "Doğal",
        "privacyScore": 6.8
      },
      {
        "name": "Avanos Çömlek Cafe",
        "district": "Avanos",
        "address": "Avanos, Atatürk Cd. No:15, Nevşehir",
        "rating": 4.0,
        "reviewCount": 456,
        "description": "Avanos'un çömlekçilik geleneğinden esinlenen seramik dekoruyla renkli bir mekan.",
        "tags": ["Vintage", "Ahşap Dekor", "Retro", "Sakin"],
        "phone": "0384 511 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Avanos+Çömlek+Cafe+Nevşehir",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 7.5
      }
    ]
  },
  "nigde": {
    "name": "Niğde",
    "plate": "51",
    "cafeCount": 2,
    "cafes": [
      {
        "name": "Aladağlar Cafe",
        "district": "Merkez",
        "address": "Merkez, Dışarı Camii Mah. Dr. İlhan Cd. No:30, Niğde",
        "rating": 3.8,
        "reviewCount": 234,
        "description": "Aladağlar'ın doğasından esinlenen sakin bir mekan, dağ temalı dekoruyla dikkat çeker.",
        "tags": ["Ahşap Dekor", "Sakin", "WiFi"],
        "phone": "0388 232 45 67",
        "googleMapsUrl": "https://www.google.com/maps/search/Aladağlar+Cafe+Niğde",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.3
      },
      {
        "name": "Niğde Kitap Kahve",
        "district": "Merkez",
        "address": "Merkez, Yukarı Kayabaşı Mah. Ömer Halisdemir Blv. No:55, Niğde",
        "rating": 4.0,
        "reviewCount": 178,
        "description": "Kitaplara gömülmek isteyenler için ideal, sessiz ve minimalist bir ortam.",
        "tags": ["Kitaplık", "WiFi", "Minimalist", "Sakin"],
        "phone": "0388 233 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Niğde+Kitap+Kahve+Niğde",
        "atmosphere": "Çok Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.5
      }
    ]
  },
  "ordu": {
    "name": "Ordu",
    "plate": "52",
    "cafeCount": 3,
    "cafes": [
      {
        "name": "Boztepe Seyir Cafe",
        "district": "Altınordu",
        "address": "Altınordu, Boztepe Mah. Boztepe Yolu, Ordu",
        "rating": 4.4,
        "reviewCount": 1456,
        "description": "Boztepe tepesinde, Karadeniz'in eşsiz manzarasıyla teleferikle ulaşılan mekan.",
        "tags": ["Manzaralı", "Bahçeli", "Doğal", "Sakin"],
        "phone": "0452 214 56 78",
        "googleMapsUrl": "https://www.google.com/maps/search/Boztepe+Seyir+Cafe+Ordu",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.5
      },
      {
        "name": "Taşbaşı Cafe",
        "district": "Altınordu",
        "address": "Altınordu, Taşbaşı Mah. Sahil Cd. No:12, Ordu",
        "rating": 4.1,
        "reviewCount": 678,
        "description": "Tarihi Taşbaşı semtinde, deniz kenarında nostaljik bir ortam.",
        "tags": ["Vintage", "Manzaralı", "Köşe Masa"],
        "phone": "0452 215 89 01",
        "googleMapsUrl": "https://www.google.com/maps/search/Taşbaşı+Cafe+Ordu",
        "atmosphere": "Orta",
        "lighting": "Doğal",
        "privacyScore": 7.0
      },
      {
        "name": "Fındıklı Kahve",
        "district": "Altınordu",
        "address": "Altınordu, Şarkiye Mah. Atatürk Blv. No:65, Ordu",
        "rating": 3.9,
        "reviewCount": 345,
        "description": "Ordu'nun ünlü fındığından yapılan özel kahveleriyle bilinen, samimi bir mekan.",
        "tags": ["Ahşap Dekor", "WiFi", "Sakin", "Minimalist"],
        "phone": "0452 223 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Fındıklı+Kahve+Ordu",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.0
      }
    ]
  },
  "rize": {
    "name": "Rize",
    "plate": "53",
    "cafeCount": 3,
    "cafes": [
      {
        "name": "Çay Bahçesi Cafe",
        "district": "Merkez",
        "address": "Merkez, Müftü Mah. Atatürk Cd. No:40, Rize",
        "rating": 4.2,
        "reviewCount": 876,
        "description": "Rize çayının en taze halini sunan, çay bahçeleri manzaralı otantik bir mekan.",
        "tags": ["Bahçeli", "Doğal", "Ahşap Dekor", "Sakin"],
        "phone": "0464 214 56 78",
        "googleMapsUrl": "https://www.google.com/maps/search/Çay+Bahçesi+Cafe+Rize",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.5
      },
      {
        "name": "Ziraat Kahve",
        "district": "Merkez",
        "address": "Merkez, Deniz Cd. No:22, Rize",
        "rating": 4.0,
        "reviewCount": 456,
        "description": "Çay ziraatından ilham alan dekoruyla, her köşesinde yeşilin hakim olduğu huzurlu mekan.",
        "tags": ["Ahşap Dekor", "WiFi", "Sakin", "Köşe Masa"],
        "phone": "0464 217 23 45",
        "googleMapsUrl": "https://www.google.com/maps/search/Ziraat+Kahve+Rize",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 7.8
      },
      {
        "name": "Ayder Dağ Evi Cafe",
        "district": "Çamlıhemşin",
        "address": "Çamlıhemşin, Ayder Yaylası, Rize",
        "rating": 4.5,
        "reviewCount": 1234,
        "description": "Ayder Yaylası'nda, şelale sesleri eşliğinde doğanın kucağında eşsiz bir deneyim.",
        "tags": ["Doğal", "Manzaralı", "Sakin", "Ahşap Dekor"],
        "phone": "0464 657 12 34",
        "googleMapsUrl": "https://www.google.com/maps/search/Ayder+Dağ+Evi+Cafe+Rize",
        "atmosphere": "Çok Sessiz",
        "lighting": "Doğal",
        "privacyScore": 9.0
      }
    ]
  },
  "sakarya": {
    "name": "Sakarya",
    "plate": "54",
    "cafeCount": 5,
    "cafes": [
      {
        "name": "Sapanca Göl Cafe",
        "district": "Sapanca",
        "address": "Sapanca, Sahil Mah. Göl Cd. No:25, Sakarya",
        "rating": 4.4,
        "reviewCount": 1876,
        "description": "Sapanca Gölü kıyısında, göl manzarası eşliğinde huzur dolu bir kahve deneyimi.",
        "tags": ["Bahçeli", "Manzaralı", "Doğal", "Sakin"],
        "phone": "0264 582 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Sapanca+Göl+Cafe+Sakarya",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 8.0
      },
      {
        "name": "Maşukiye Dere Cafe",
        "district": "Kartepe",
        "address": "Kartepe, Maşukiye Mah. Dere Sk. No:8, Sakarya",
        "rating": 4.3,
        "reviewCount": 1567,
        "description": "Maşukiye'nin dereleri ve şelaleleri arasında, doğayla iç içe bir mekan.",
        "tags": ["Doğal", "Bahçeli", "Ahşap Dekor", "Sakin"],
        "phone": "0262 354 67 89",
        "googleMapsUrl": "https://www.google.com/maps/search/Maşukiye+Dere+Cafe+Sakarya",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 8.5
      },
      {
        "name": "Uzunkum Sahil Cafe",
        "district": "Karasu",
        "address": "Karasu, Uzunkum Mah. Sahil Yolu, Sakarya",
        "rating": 4.0,
        "reviewCount": 678,
        "description": "Karadeniz sahilinde, uzun kumsalın kenarında deniz havası eşliğinde kahve.",
        "tags": ["Manzaralı", "Bahçeli", "WiFi"],
        "phone": "0264 718 45 67",
        "googleMapsUrl": "https://www.google.com/maps/search/Uzunkum+Sahil+Cafe+Sakarya",
        "atmosphere": "Orta",
        "lighting": "Doğal",
        "privacyScore": 6.5
      },
      {
        "name": "Adapazarı Kitap Cafe",
        "district": "Adapazarı",
        "address": "Adapazarı, Cumhuriyet Mah. Ankara Cd. No:90, Sakarya",
        "rating": 4.1,
        "reviewCount": 456,
        "description": "Adapazarı merkezinde, kitap raflarıyla çevrili sessiz ve huzurlu bir mekan.",
        "tags": ["Kitaplık", "WiFi", "Minimalist", "Sakin"],
        "phone": "0264 275 56 78",
        "googleMapsUrl": "https://www.google.com/maps/search/Adapazarı+Kitap+Cafe+Sakarya",
        "atmosphere": "Çok Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.8
      },
      {
        "name": "Taraklı Konak Cafe",
        "district": "Taraklı",
        "address": "Taraklı, Hacı Murat Mah. Çarşı Cd. No:5, Sakarya",
        "rating": 4.2,
        "reviewCount": 345,
        "description": "UNESCO mirası Taraklı'da, Osmanlı konak mimarisinde nostaljik bir mekan.",
        "tags": ["Vintage", "Ahşap Dekor", "Retro", "Sakin"],
        "phone": "0264 481 23 45",
        "googleMapsUrl": "https://www.google.com/maps/search/Taraklı+Konak+Cafe+Sakarya",
        "atmosphere": "Çok Sessiz",
        "lighting": "Loş",
        "privacyScore": 9.2
      }
    ]
  },
  "samsun": {
    "name": "Samsun",
    "plate": "55",
    "cafeCount": 5,
    "cafes": [
      {
        "name": "Batıpark Cafe",
        "district": "Atakum",
        "address": "Atakum, Batıpark, Denizevleri Mah., Samsun",
        "rating": 4.2,
        "reviewCount": 1567,
        "description": "Batıpark'ın yeşil alanları içinde, sahile yakın geniş terası ile bilinen mekan.",
        "tags": ["Bahçeli", "WiFi", "Doğal", "Sakin"],
        "phone": "0362 431 23 45",
        "googleMapsUrl": "https://www.google.com/maps/search/Batıpark+Cafe+Samsun",
        "atmosphere": "Orta",
        "lighting": "Doğal",
        "privacyScore": 6.5
      },
      {
        "name": "Sahil Kahve",
        "district": "Atakum",
        "address": "Atakum, Sahil Yolu, Yeni Mah. No:120, Samsun",
        "rating": 4.0,
        "reviewCount": 876,
        "description": "Samsun sahilinde, Karadeniz dalgalarının sesini dinleyerek kahve keyfi.",
        "tags": ["Manzaralı", "Bahçeli", "WiFi"],
        "phone": "0362 432 56 78",
        "googleMapsUrl": "https://www.google.com/maps/search/Sahil+Kahve+Samsun",
        "atmosphere": "Orta",
        "lighting": "Doğal",
        "privacyScore": 6.8
      },
      {
        "name": "Pera Coffee Samsun",
        "district": "İlkadım",
        "address": "İlkadım, Kale Mah. İstiklal Cd. No:45, Samsun",
        "rating": 4.3,
        "reviewCount": 1234,
        "description": "Modern üçüncü dalga kahve anlayışıyla, şık iç mekanında kaliteli kahve deneyimi.",
        "tags": ["WiFi", "Minimalist", "Köşe Masa", "Loş Işık"],
        "phone": "0362 435 89 01",
        "googleMapsUrl": "https://www.google.com/maps/search/Pera+Coffee+Samsun",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.2
      },
      {
        "name": "Amisos Tepesi Cafe",
        "district": "İlkadım",
        "address": "İlkadım, Amisos Tepesi, Baruthane Mah., Samsun",
        "rating": 4.4,
        "reviewCount": 987,
        "description": "Amisos Tepesi'nde, antik kalıntılar arasında şehir manzaralı muhteşem bir mekan.",
        "tags": ["Manzaralı", "Vintage", "Bahçeli"],
        "phone": "0362 311 45 67",
        "googleMapsUrl": "https://www.google.com/maps/search/Amisos+Tepesi+Cafe+Samsun",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.5
      },
      {
        "name": "Taş Kahve Samsun",
        "district": "İlkadım",
        "address": "İlkadım, Saathane Mah. Gazi Cd. No:78, Samsun",
        "rating": 3.9,
        "reviewCount": 567,
        "description": "Tarihi taş bina içinde, otantik dekoruyla Karadeniz kültürünü yansıtan mekan.",
        "tags": ["Vintage", "Ahşap Dekor", "Retro", "Köşe Masa"],
        "phone": "0362 312 67 89",
        "googleMapsUrl": "https://www.google.com/maps/search/Taş+Kahve+Samsun",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.0
      }
    ]
  },
  "siirt": {
    "name": "Siirt",
    "plate": "56",
    "cafeCount": 2,
    "cafes": [
      {
        "name": "Pervari Dağ Cafe",
        "district": "Merkez",
        "address": "Merkez, Cumhuriyet Mah. İnönü Cd. No:20, Siirt",
        "rating": 3.7,
        "reviewCount": 156,
        "description": "Siirt'in dağ havasını iç mekana taşıyan, sıcak ve samimi bir mekan.",
        "tags": ["Ahşap Dekor", "Sakin", "WiFi"],
        "phone": "0484 223 45 67",
        "googleMapsUrl": "https://www.google.com/maps/search/Pervari+Dağ+Cafe+Siirt",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.5
      },
      {
        "name": "Büryan Cafe Lounge",
        "district": "Merkez",
        "address": "Merkez, Bahçelievler Mah. Güres Cd. No:35, Siirt",
        "rating": 3.9,
        "reviewCount": 234,
        "description": "Siirt'in geleneksel dokusunu modern cafe anlayışıyla buluşturan mekan.",
        "tags": ["Köşe Masa", "Loş Işık", "Retro"],
        "phone": "0484 224 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Büryan+Cafe+Lounge+Siirt",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 7.8
      }
    ]
  },
  "sinop": {
    "name": "Sinop",
    "plate": "57",
    "cafeCount": 3,
    "cafes": [
      {
        "name": "Hamsilos Cafe",
        "district": "Merkez",
        "address": "Merkez, Hamsilos Koyu Yolu, Sinop",
        "rating": 4.3,
        "reviewCount": 876,
        "description": "Hamsilos fiyordunun yanında, eşsiz doğa manzarasıyla nefes kesici bir mekan.",
        "tags": ["Doğal", "Manzaralı", "Bahçeli", "Sakin"],
        "phone": "0368 261 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Hamsilos+Cafe+Sinop",
        "atmosphere": "Çok Sessiz",
        "lighting": "Doğal",
        "privacyScore": 9.0
      },
      {
        "name": "Sinop Kalesi Cafe",
        "district": "Merkez",
        "address": "Merkez, Ada Mah. Tersane Cd. No:12, Sinop",
        "rating": 4.1,
        "reviewCount": 567,
        "description": "Sinop Kalesi surlarının yanında, deniz manzaralı tarihi atmosfer.",
        "tags": ["Vintage", "Manzaralı", "Köşe Masa"],
        "phone": "0368 261 56 78",
        "googleMapsUrl": "https://www.google.com/maps/search/Sinop+Kalesi+Cafe+Sinop",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.5
      },
      {
        "name": "Akliman Cafe",
        "district": "Merkez",
        "address": "Merkez, Akliman Mah. Sahil Yolu, Sinop",
        "rating": 4.0,
        "reviewCount": 345,
        "description": "Akliman plajına yakın, deniz esintisi eşliğinde sakin bir kahve keyfi.",
        "tags": ["Bahçeli", "Doğal", "Sakin", "WiFi"],
        "phone": "0368 262 89 01",
        "googleMapsUrl": "https://www.google.com/maps/search/Akliman+Cafe+Sinop",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 8.0
      }
    ]
  },
  "sivas": {
    "name": "Sivas",
    "plate": "58",
    "cafeCount": 3,
    "cafes": [
      {
        "name": "Selçuklu Cafe",
        "district": "Merkez",
        "address": "Merkez, Sularbaşı Mah. Atatürk Cd. No:35, Sivas",
        "rating": 4.0,
        "reviewCount": 567,
        "description": "Selçuklu mimarisinden ilham alan dekoruyla, tarihi atmosferde kahve keyfi.",
        "tags": ["Vintage", "Ahşap Dekor", "Köşe Masa"],
        "phone": "0346 221 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Selçuklu+Cafe+Sivas",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 7.8
      },
      {
        "name": "Kangal Kitap Cafe",
        "district": "Merkez",
        "address": "Merkez, Paşa Mah. İnönü Blv. No:80, Sivas",
        "rating": 4.1,
        "reviewCount": 345,
        "description": "Kitaplara adanmış bir mekan, sessiz okuma köşeleri ve loş ışık.",
        "tags": ["Kitaplık", "WiFi", "Minimalist", "Sakin"],
        "phone": "0346 225 67 89",
        "googleMapsUrl": "https://www.google.com/maps/search/Kangal+Kitap+Cafe+Sivas",
        "atmosphere": "Çok Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.5
      },
      {
        "name": "Sıcak İz Cafe",
        "district": "Merkez",
        "address": "Merkez, Kale Mah. Hükümet Cd. No:18, Sivas",
        "rating": 3.8,
        "reviewCount": 234,
        "description": "Sivas'ın soğuğunda sıcacık bir sığınak, retro dekoruyla samimi bir ortam.",
        "tags": ["Retro", "Mum Işığı", "Köşe Masa", "Sakin"],
        "phone": "0346 222 11 45",
        "googleMapsUrl": "https://www.google.com/maps/search/Sıcak+İz+Cafe+Sivas",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.0
      }
    ]
  },
  "tekirdag": {
    "name": "Tekirdağ",
    "plate": "59",
    "cafeCount": 4,
    "cafes": [
      {
        "name": "Rakoczi Cafe",
        "district": "Süleymanpaşa",
        "address": "Süleymanpaşa, Hürriyet Mah. Rákóczi Müzesi Yanı, Tekirdağ",
        "rating": 4.2,
        "reviewCount": 876,
        "description": "Rákóczi Müzesi yanında, Osmanlı-Macar tarihini yansıtan kültürel bir mekan.",
        "tags": ["Vintage", "Manzaralı", "Köşe Masa"],
        "phone": "0282 261 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Rakoczi+Cafe+Tekirdağ",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.5
      },
      {
        "name": "Sahil Yolu Cafe",
        "district": "Süleymanpaşa",
        "address": "Süleymanpaşa, Sahil Yolu, Barbaros Mah. No:55, Tekirdağ",
        "rating": 4.0,
        "reviewCount": 1234,
        "description": "Marmara Denizi kıyısında, gün batımı manzarasıyla romantik bir ortam.",
        "tags": ["Manzaralı", "Bahçeli", "WiFi"],
        "phone": "0282 262 56 78",
        "googleMapsUrl": "https://www.google.com/maps/search/Sahil+Yolu+Cafe+Tekirdağ",
        "atmosphere": "Orta",
        "lighting": "Doğal",
        "privacyScore": 6.5
      },
      {
        "name": "Çorlu Dem Cafe",
        "district": "Çorlu",
        "address": "Çorlu, Reşadiye Mah. Omurtak Cd. No:78, Tekirdağ",
        "rating": 3.9,
        "reviewCount": 567,
        "description": "Çorlu'nun kalabalığından uzak, sakin ve minimalist bir kahve durağı.",
        "tags": ["WiFi", "Minimalist", "Sakin", "Köşe Masa"],
        "phone": "0282 653 45 67",
        "googleMapsUrl": "https://www.google.com/maps/search/Çorlu+Dem+Cafe+Tekirdağ",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.0
      },
      {
        "name": "Bağlar Cafe",
        "district": "Şarköy",
        "address": "Şarköy, Mürefte Mah. Bağ Yolu No:10, Tekirdağ",
        "rating": 4.1,
        "reviewCount": 456,
        "description": "Mürefte bağları arasında, üzüm bahçeleri manzarasıyla huzurlu bir mekan.",
        "tags": ["Bahçeli", "Doğal", "Sakin", "Manzaralı"],
        "phone": "0282 518 23 45",
        "googleMapsUrl": "https://www.google.com/maps/search/Bağlar+Cafe+Şarköy+Tekirdağ",
        "atmosphere": "Çok Sessiz",
        "lighting": "Doğal",
        "privacyScore": 8.8
      }
    ]
  },
  "tokat": {
    "name": "Tokat",
    "plate": "60",
    "cafeCount": 3,
    "cafes": [
      {
        "name": "Sulusaray Cafe",
        "district": "Merkez",
        "address": "Merkez, Gazi Osman Paşa Mah. Cumhuriyet Cd. No:25, Tokat",
        "rating": 3.9,
        "reviewCount": 345,
        "description": "Tokat'ın tarihi dokusunu koruyan, geleneksel dekoruyla samimi bir mekan.",
        "tags": ["Vintage", "Ahşap Dekor", "Sakin"],
        "phone": "0356 214 56 78",
        "googleMapsUrl": "https://www.google.com/maps/search/Sulusaray+Cafe+Tokat",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.3
      },
      {
        "name": "Ballıca Mağara Cafe",
        "district": "Pazar",
        "address": "Pazar, Ballıca Mağarası Yolu, Tokat",
        "rating": 4.1,
        "reviewCount": 234,
        "description": "Ballıca Mağarası yakınında, doğa yürüyüşü sonrası mola vermek için ideal.",
        "tags": ["Doğal", "Bahçeli", "Sakin"],
        "phone": "0356 531 23 45",
        "googleMapsUrl": "https://www.google.com/maps/search/Ballıca+Mağara+Cafe+Tokat",
        "atmosphere": "Çok Sessiz",
        "lighting": "Doğal",
        "privacyScore": 8.5
      },
      {
        "name": "Ali Paşa Hanı Cafe",
        "district": "Merkez",
        "address": "Merkez, Sulu Sokak, Ali Paşa Hanı, Tokat",
        "rating": 4.0,
        "reviewCount": 456,
        "description": "Tarihi Ali Paşa Hanı'nda, Osmanlı mimarisi içinde nostaljik bir kahve deneyimi.",
        "tags": ["Vintage", "Retro", "Köşe Masa", "Mum Işığı"],
        "phone": "0356 212 89 01",
        "googleMapsUrl": "https://www.google.com/maps/search/Ali+Paşa+Hanı+Cafe+Tokat",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.2
      }
    ]
  },
  "trabzon": {
    "name": "Trabzon",
    "plate": "61",
    "cafeCount": 5,
    "cafes": [
      {
        "name": "Kahverengi Trabzon",
        "district": "Ortahisar",
        "address": "Ortahisar, Uzun Sokak No:28, Trabzon",
        "rating": 4.3,
        "reviewCount": 1876,
        "description": "Trabzon'un en sevilen cafe'lerinden, Uzun Sokak'ta sıcak ahşap dekor ve özenli kahve.",
        "tags": ["Ahşap Dekor", "WiFi", "Köşe Masa", "Sakin"],
        "phone": "0462 326 45 67",
        "googleMapsUrl": "https://www.google.com/maps/search/Kahverengi+Trabzon",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.2
      },
      {
        "name": "Boztepe Manzara Cafe",
        "district": "Ortahisar",
        "address": "Ortahisar, Boztepe Mah. Boztepe Yolu, Trabzon",
        "rating": 4.4,
        "reviewCount": 1567,
        "description": "Boztepe tepesinde, Trabzon manzarasının ayaklar altına serildiği eşsiz bir mekan.",
        "tags": ["Manzaralı", "Bahçeli", "Doğal"],
        "phone": "0462 223 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Boztepe+Manzara+Cafe+Trabzon",
        "atmosphere": "Orta",
        "lighting": "Doğal",
        "privacyScore": 6.8
      },
      {
        "name": "Retrosfer Cafe",
        "district": "Ortahisar",
        "address": "Ortahisar, Kemerkaya Mah. Gazipaşa Cd. No:15, Trabzon",
        "rating": 4.2,
        "reviewCount": 1234,
        "description": "Retro ve vintage dekorasyonuyla dikkat çeken, nostaljik müzikler eşliğinde kahve.",
        "tags": ["Retro", "Vintage", "Loş Işık", "Köşe Masa"],
        "phone": "0462 321 56 78",
        "googleMapsUrl": "https://www.google.com/maps/search/Retrosfer+Cafe+Trabzon",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.5
      },
      {
        "name": "Keyif Trabzon",
        "district": "Ortahisar",
        "address": "Ortahisar, Pazarkapı Mah. Kunduracılar Cd. No:8, Trabzon",
        "rating": 4.1,
        "reviewCount": 987,
        "description": "Forum Trabzon yakınında, geniş iç mekanı ve samimi atmosferiyle öne çıkan mekan.",
        "tags": ["WiFi", "Minimalist", "Sakin", "Köşe Masa"],
        "phone": "0462 325 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Keyif+Trabzon",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 7.8
      },
      {
        "name": "Uzun Sokak Kitap Cafe",
        "district": "Ortahisar",
        "address": "Ortahisar, Uzun Sokak No:45, Trabzon",
        "rating": 4.0,
        "reviewCount": 678,
        "description": "Uzun Sokak'ın en sessiz köşesinde, kitap rafları arasında kaybolabileceğiniz mekan.",
        "tags": ["Kitaplık", "WiFi", "Sakin", "Minimalist"],
        "phone": "0462 322 89 01",
        "googleMapsUrl": "https://www.google.com/maps/search/Uzun+Sokak+Kitap+Cafe+Trabzon",
        "atmosphere": "Çok Sessiz",
        "lighting": "Loş",
        "privacyScore": 9.0
      }
    ]
  },
  "tunceli": {
    "name": "Tunceli",
    "plate": "62",
    "cafeCount": 2,
    "cafes": [
      {
        "name": "Munzur Cafe",
        "district": "Merkez",
        "address": "Merkez, Moğultay Mah. Atatürk Cd. No:15, Tunceli",
        "rating": 4.0,
        "reviewCount": 234,
        "description": "Munzur Vadisi'nin ruhunu taşıyan, doğa temalı dekoruyla huzurlu bir mekan.",
        "tags": ["Doğal", "Ahşap Dekor", "Sakin", "WiFi"],
        "phone": "0428 213 45 67",
        "googleMapsUrl": "https://www.google.com/maps/search/Munzur+Cafe+Tunceli",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.8
      },
      {
        "name": "Dersim Kitap Evi",
        "district": "Merkez",
        "address": "Merkez, Cumhuriyet Mah. İnönü Cd. No:30, Tunceli",
        "rating": 4.2,
        "reviewCount": 345,
        "description": "Tunceli'nin kültürel zenginliğini yansıtan, kitap ve müzik dolu bir mekan.",
        "tags": ["Kitaplık", "WiFi", "Sakin", "Vintage"],
        "phone": "0428 214 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Dersim+Kitap+Evi+Tunceli",
        "atmosphere": "Çok Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.5
      }
    ]
  },
  "sanliurfa": {
    "name": "Şanlıurfa",
    "plate": "63",
    "cafeCount": 5,
    "cafes": [
      {
        "name": "Gümrükhanı Kahvesi",
        "district": "Eyyübiye",
        "address": "Eyyübiye, Gümrükhanı, Balıklıgöl Yanı, Şanlıurfa",
        "rating": 4.4,
        "reviewCount": 1876,
        "description": "Tarihi Gümrükhanı'nda, avlu içinde sıra gecesi atmosferinde geleneksel kahve deneyimi.",
        "tags": ["Vintage", "Bahçeli", "Ahşap Dekor"],
        "phone": "0414 215 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Gümrükhanı+Kahvesi+Şanlıurfa",
        "atmosphere": "Orta",
        "lighting": "Loş",
        "privacyScore": 6.5
      },
      {
        "name": "Balıklıgöl Teras Cafe",
        "district": "Eyyübiye",
        "address": "Eyyübiye, Balıklıgöl Mah. Göl Cd. No:5, Şanlıurfa",
        "rating": 4.2,
        "reviewCount": 1456,
        "description": "Balıklıgöl'e nazır terasta, kutsal balıkları seyrederek kahve keyfi.",
        "tags": ["Manzaralı", "Bahçeli", "Vintage"],
        "phone": "0414 216 56 78",
        "googleMapsUrl": "https://www.google.com/maps/search/Balıklıgöl+Teras+Cafe+Şanlıurfa",
        "atmosphere": "Orta",
        "lighting": "Doğal",
        "privacyScore": 6.8
      },
      {
        "name": "Harran Konak Cafe",
        "district": "Haliliye",
        "address": "Haliliye, Sarayönü Cd. No:25, Şanlıurfa",
        "rating": 4.0,
        "reviewCount": 678,
        "description": "Urfa taş mimarisiyle bezeli, geniş avlusunda özel köşelerle donatılmış mekan.",
        "tags": ["Köşe Masa", "Vintage", "Ahşap Dekor", "Sakin"],
        "phone": "0414 313 89 01",
        "googleMapsUrl": "https://www.google.com/maps/search/Harran+Konak+Cafe+Şanlıurfa",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.2
      },
      {
        "name": "Urfa Kitap Cafe",
        "district": "Haliliye",
        "address": "Haliliye, Bamyasuyu Mah. Atatürk Blv. No:110, Şanlıurfa",
        "rating": 3.9,
        "reviewCount": 345,
        "description": "Modern ve sakin bir ortamda, kitap rafları arasında kahve yudumlamak için ideal.",
        "tags": ["Kitaplık", "WiFi", "Minimalist", "Sakin"],
        "phone": "0414 314 23 45",
        "googleMapsUrl": "https://www.google.com/maps/search/Urfa+Kitap+Cafe+Şanlıurfa",
        "atmosphere": "Çok Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.8
      },
      {
        "name": "Ciğerci Mekanı Cafe Bölümü",
        "district": "Eyyübiye",
        "address": "Eyyübiye, Haşimiye Mah. Ciğerci Sk. No:8, Şanlıurfa",
        "rating": 3.8,
        "reviewCount": 567,
        "description": "Urfa'nın ciğer geleneğinin yanında sakin bir cafe bölümü, yerel tatlarla kahve.",
        "tags": ["Retro", "Ahşap Dekor", "Köşe Masa"],
        "phone": "0414 215 67 89",
        "googleMapsUrl": "https://www.google.com/maps/search/Ciğerci+Mekanı+Cafe+Şanlıurfa",
        "atmosphere": "Orta",
        "lighting": "Loş",
        "privacyScore": 7.0
      }
    ]
  },
  "usak": {
    "name": "Uşak",
    "plate": "64",
    "cafeCount": 2,
    "cafes": [
      {
        "name": "Halı Diyarı Cafe",
        "district": "Merkez",
        "address": "Merkez, İslice Mah. İsmet Paşa Cd. No:45, Uşak",
        "rating": 3.8,
        "reviewCount": 234,
        "description": "Uşak halılarıyla bezeli duvarlarıyla, şehrin kültürel zenginliğini yansıtan mekan.",
        "tags": ["Vintage", "Ahşap Dekor", "Sakin"],
        "phone": "0276 223 45 67",
        "googleMapsUrl": "https://www.google.com/maps/search/Halı+Diyarı+Cafe+Uşak",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.3
      },
      {
        "name": "Ulubey Kanyon Cafe",
        "district": "Ulubey",
        "address": "Ulubey, Kanyon Yolu Üzeri, Uşak",
        "rating": 4.1,
        "reviewCount": 456,
        "description": "Ulubey Kanyonu manzarasında, doğanın içinde nefes kesici bir kahve deneyimi.",
        "tags": ["Doğal", "Manzaralı", "Bahçeli", "Sakin"],
        "phone": "0276 711 23 45",
        "googleMapsUrl": "https://www.google.com/maps/search/Ulubey+Kanyon+Cafe+Uşak",
        "atmosphere": "Çok Sessiz",
        "lighting": "Doğal",
        "privacyScore": 8.5
      }
    ]
  },
  "van": {
    "name": "Van",
    "plate": "65",
    "cafeCount": 4,
    "cafes": [
      {
        "name": "Van Kahvaltı Evi Cafe",
        "district": "İpekyolu",
        "address": "İpekyolu, Cumhuriyet Mah. Kazım Karabekir Cd. No:40, Van",
        "rating": 4.3,
        "reviewCount": 1567,
        "description": "Van kahvaltısının yanı sıra, öğleden sonra sakin bir cafe olarak da hizmet veren mekan.",
        "tags": ["Ahşap Dekor", "Bahçeli", "WiFi"],
        "phone": "0432 215 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Van+Kahvaltı+Evi+Cafe+Van",
        "atmosphere": "Orta",
        "lighting": "Doğal",
        "privacyScore": 6.8
      },
      {
        "name": "Kedi Cafe Van",
        "district": "İpekyolu",
        "address": "İpekyolu, Şerefiye Mah. Maraş Cd. No:22, Van",
        "rating": 4.1,
        "reviewCount": 876,
        "description": "Van kedileriyle vakit geçirirken kahve içebileceğiniz, sevimli ve huzurlu bir mekan.",
        "tags": ["WiFi", "Sakin", "Minimalist"],
        "phone": "0432 216 67 89",
        "googleMapsUrl": "https://www.google.com/maps/search/Kedi+Cafe+Van",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.5
      },
      {
        "name": "Akdamar Seyir Cafe",
        "district": "Gevaş",
        "address": "Gevaş, Akdamar Adası İskelesi Yanı, Van",
        "rating": 4.4,
        "reviewCount": 987,
        "description": "Akdamar Adası manzarasında, Van Gölü'nün turkuaz sularına bakarak kahve keyfi.",
        "tags": ["Manzaralı", "Doğal", "Bahçeli", "Sakin"],
        "phone": "0432 612 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Akdamar+Seyir+Cafe+Van",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 8.2
      },
      {
        "name": "Van Kalesi Kahvesi",
        "district": "Tuşba",
        "address": "Tuşba, Van Kalesi Yanı, Topaktaş Mah., Van",
        "rating": 3.9,
        "reviewCount": 567,
        "description": "Van Kalesi'nin eteklerinde, antik surlarla çevrili nostaljik bir ortam.",
        "tags": ["Vintage", "Manzaralı", "Köşe Masa", "Retro"],
        "phone": "0432 214 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Van+Kalesi+Kahvesi+Van",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 7.8
      }
    ]
  },
  "yozgat": {
    "name": "Yozgat",
    "plate": "66",
    "cafeCount": 2,
    "cafes": [
      {
        "name": "Çamlık Cafe",
        "district": "Merkez",
        "address": "Merkez, Çamlık Milli Parkı, Yozgat",
        "rating": 4.0,
        "reviewCount": 345,
        "description": "Türkiye'nin ilk milli parkında, çam ormanları arasında doğayla iç içe bir mekan.",
        "tags": ["Doğal", "Bahçeli", "Sakin"],
        "phone": "0354 212 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Çamlık+Cafe+Yozgat",
        "atmosphere": "Çok Sessiz",
        "lighting": "Doğal",
        "privacyScore": 8.5
      },
      {
        "name": "Bozok Kahvesi",
        "district": "Merkez",
        "address": "Merkez, Medrese Mah. Lise Cd. No:20, Yozgat",
        "rating": 3.8,
        "reviewCount": 198,
        "description": "Bozok Üniversitesi yakınında, öğrenci dostu ve sıcak atmosferiyle bilinen mekan.",
        "tags": ["WiFi", "Sakin", "Köşe Masa", "Minimalist"],
        "phone": "0354 214 56 78",
        "googleMapsUrl": "https://www.google.com/maps/search/Bozok+Kahvesi+Yozgat",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 7.5
      }
    ]
  },
  "zonguldak": {
    "name": "Zonguldak",
    "plate": "67",
    "cafeCount": 3,
    "cafes": [
      {
        "name": "Maden Cafe",
        "district": "Merkez",
        "address": "Merkez, Gazipaşa Mah. Mithatpaşa Cd. No:30, Zonguldak",
        "rating": 3.9,
        "reviewCount": 345,
        "description": "Zonguldak'ın madencilik tarihinden ilham alan endüstriyel dekoruyla farklı bir deneyim.",
        "tags": ["Retro", "Ahşap Dekor", "Loş Işık"],
        "phone": "0372 251 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Maden+Cafe+Zonguldak",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 7.8
      },
      {
        "name": "Kozlu Sahil Cafe",
        "district": "Kozlu",
        "address": "Kozlu, Sahil Mah. Liman Cd. No:12, Zonguldak",
        "rating": 4.0,
        "reviewCount": 456,
        "description": "Karadeniz sahilinde, balıkçı tekneleri manzarasında sakin bir kahve keyfi.",
        "tags": ["Manzaralı", "Bahçeli", "WiFi", "Sakin"],
        "phone": "0372 261 56 78",
        "googleMapsUrl": "https://www.google.com/maps/search/Kozlu+Sahil+Cafe+Zonguldak",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.5
      },
      {
        "name": "Ereğli Kitap Cafe",
        "district": "Ereğli",
        "address": "Ereğli, Müftü Mah. Atatürk Cd. No:55, Zonguldak",
        "rating": 4.1,
        "reviewCount": 234,
        "description": "Ereğli'nin kültürel mekanlarından, kitaplara ve sanata ev sahipliği yapan huzurlu bir cafe.",
        "tags": ["Kitaplık", "WiFi", "Minimalist", "Sakin"],
        "phone": "0372 323 89 01",
        "googleMapsUrl": "https://www.google.com/maps/search/Ereğli+Kitap+Cafe+Zonguldak",
        "atmosphere": "Çok Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.5
      }
    ]
  },
  "aksaray": {
    "name": "Aksaray",
    "plate": "68",
    "cafeCount": 3,
    "cafes": [
      {
        "name": "Ihlara Vadisi Cafe",
        "district": "Güzelyurt",
        "address": "Güzelyurt, Ihlara Vadisi Girişi, Aksaray",
        "rating": 4.3,
        "reviewCount": 876,
        "description": "Ihlara Vadisi'nin nefes kesici doğasında, kanyon manzarasıyla eşsiz bir deneyim.",
        "tags": ["Doğal", "Manzaralı", "Bahçeli", "Sakin"],
        "phone": "0382 453 12 34",
        "googleMapsUrl": "https://www.google.com/maps/search/Ihlara+Vadisi+Cafe+Aksaray",
        "atmosphere": "Çok Sessiz",
        "lighting": "Doğal",
        "privacyScore": 9.0
      },
      {
        "name": "Hasan Dağı Cafe",
        "district": "Merkez",
        "address": "Merkez, Eski Sanayi Mah. Nevşehir Cd. No:35, Aksaray",
        "rating": 3.8,
        "reviewCount": 234,
        "description": "Hasan Dağı manzarasında, volkanik toprakların ruhunu yansıtan sıcak bir mekan.",
        "tags": ["Ahşap Dekor", "Sakin", "WiFi"],
        "phone": "0382 213 45 67",
        "googleMapsUrl": "https://www.google.com/maps/search/Hasan+Dağı+Cafe+Aksaray",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.3
      },
      {
        "name": "Aksaray Kitap Durağı",
        "district": "Merkez",
        "address": "Merkez, Taşpazar Mah. Bankalar Cd. No:18, Aksaray",
        "rating": 4.0,
        "reviewCount": 178,
        "description": "Şehir merkezinde, kitapseverlerin buluşma noktası olan sessiz ve huzurlu bir cafe.",
        "tags": ["Kitaplık", "WiFi", "Minimalist", "Sakin"],
        "phone": "0382 215 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Aksaray+Kitap+Durağı+Aksaray",
        "atmosphere": "Çok Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.2
      }
    ]
  },
  "bayburt": {
    "name": "Bayburt",
    "plate": "69",
    "cafeCount": 2,
    "cafes": [
      {
        "name": "Kale Cafe Bayburt",
        "district": "Merkez",
        "address": "Merkez, Kale Mah. Bayburt Kalesi Yanı, Bayburt",
        "rating": 3.9,
        "reviewCount": 198,
        "description": "Bayburt Kalesi'nin eteklerinde, Çoruh Vadisi manzarasında tarihi bir mekan.",
        "tags": ["Manzaralı", "Vintage", "Köşe Masa"],
        "phone": "0458 211 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Kale+Cafe+Bayburt",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.5
      },
      {
        "name": "Çoruh Cafe",
        "district": "Merkez",
        "address": "Merkez, Cumhuriyet Mah. Atatürk Cd. No:22, Bayburt",
        "rating": 3.7,
        "reviewCount": 134,
        "description": "Çoruh Nehri kenarında, sakin ve samimi atmosferiyle Bayburt'un sevilen mekanı.",
        "tags": ["Ahşap Dekor", "Sakin", "WiFi"],
        "phone": "0458 212 67 89",
        "googleMapsUrl": "https://www.google.com/maps/search/Çoruh+Cafe+Bayburt",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 7.8
      }
    ]
  },
  "karaman": {
    "name": "Karaman",
    "plate": "70",
    "cafeCount": 2,
    "cafes": [
      {
        "name": "Karamanoğlu Cafe",
        "district": "Merkez",
        "address": "Merkez, Hacıcelal Mah. İstanbul Cd. No:35, Karaman",
        "rating": 3.9,
        "reviewCount": 234,
        "description": "Karamanoğulları beyliğinden ilham alan dekoruyla, tarihi atmosfer içinde kahve.",
        "tags": ["Vintage", "Ahşap Dekor", "Köşe Masa"],
        "phone": "0338 212 45 67",
        "googleMapsUrl": "https://www.google.com/maps/search/Karamanoğlu+Cafe+Karaman",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 7.5
      },
      {
        "name": "Binbir Kilise Cafe",
        "district": "Merkez",
        "address": "Merkez, Tahsin Ünal Mah. Larende Cd. No:15, Karaman",
        "rating": 3.8,
        "reviewCount": 156,
        "description": "Karaman'ın kültürel mirasından esinlenen sakin bir mekan, aile dostu ortam.",
        "tags": ["Sakin", "WiFi", "Bahçeli"],
        "phone": "0338 214 78 90",
        "googleMapsUrl": "https://www.google.com/maps/search/Binbir+Kilise+Cafe+Karaman",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.3
      }
    ]
  },
  "kirikkale": {
    "name": "Kırıkkale",
    "plate": "71",
    "cafeCount": 2,
    "cafes": [
      {
        "name": "Silah Sanayi Cafe",
        "district": "Yahşihan",
        "address": "Yahşihan, Atatürk Mah. Ankara Cd. No:60, Kırıkkale",
        "rating": 3.7,
        "reviewCount": 178,
        "description": "Endüstriyel dekoruyla Kırıkkale'nin kimliğini yansıtan modern bir mekan.",
        "tags": ["Retro", "WiFi", "Minimalist"],
        "phone": "0318 224 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Silah+Sanayi+Cafe+Kırıkkale",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 7.5
      },
      {
        "name": "Kızılırmak Cafe",
        "district": "Merkez",
        "address": "Merkez, Güzeltepe Mah. Kızılırmak Cd. No:25, Kırıkkale",
        "rating": 3.9,
        "reviewCount": 245,
        "description": "Kızılırmak nehri yakınında, sakin ve huzurlu bir ortamda kahve keyfi.",
        "tags": ["Bahçeli", "Sakin", "Ahşap Dekor"],
        "phone": "0318 225 56 78",
        "googleMapsUrl": "https://www.google.com/maps/search/Kızılırmak+Cafe+Kırıkkale",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.8
      }
    ]
  },
  "batman": {
    "name": "Batman",
    "plate": "72",
    "cafeCount": 2,
    "cafes": [
      {
        "name": "Hasankeyf Cafe",
        "district": "Hasankeyf",
        "address": "Hasankeyf, Kale Mah. Dicle Cd. No:5, Batman",
        "rating": 4.2,
        "reviewCount": 678,
        "description": "Yeni Hasankeyf'te, tarihi kalıntılar ve Dicle manzarasıyla eşsiz bir deneyim.",
        "tags": ["Manzaralı", "Vintage", "Bahçeli", "Sakin"],
        "phone": "0488 381 23 45",
        "googleMapsUrl": "https://www.google.com/maps/search/Hasankeyf+Cafe+Batman",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 8.0
      },
      {
        "name": "Batman Kitap Cafe",
        "district": "Merkez",
        "address": "Merkez, Yeni Mah. Turgut Özal Blv. No:45, Batman",
        "rating": 3.8,
        "reviewCount": 234,
        "description": "Batman merkezinde, genç ve dinamik atmosferiyle kitap ve kahve severler için.",
        "tags": ["Kitaplık", "WiFi", "Minimalist", "Sakin"],
        "phone": "0488 213 56 78",
        "googleMapsUrl": "https://www.google.com/maps/search/Batman+Kitap+Cafe+Batman",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 7.5
      }
    ]
  },
  "sirnak": {
    "name": "Şırnak",
    "plate": "73",
    "cafeCount": 2,
    "cafes": [
      {
        "name": "Cudi Cafe",
        "district": "Merkez",
        "address": "Merkez, Cumhuriyet Mah. Cizre Cd. No:20, Şırnak",
        "rating": 3.6,
        "reviewCount": 134,
        "description": "Cudi Dağı manzarasında, sıcak ve samimi atmosferiyle şehrin buluşma noktası.",
        "tags": ["Ahşap Dekor", "Sakin", "WiFi"],
        "phone": "0486 216 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Cudi+Cafe+Şırnak",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.3
      },
      {
        "name": "Cizre Dicle Cafe",
        "district": "Cizre",
        "address": "Cizre, Sur Mah. Dicle Kenarı No:8, Şırnak",
        "rating": 3.8,
        "reviewCount": 198,
        "description": "Cizre'de Dicle nehri kenarında, tarihi köprü manzarasıyla huzurlu bir mekan.",
        "tags": ["Manzaralı", "Vintage", "Köşe Masa"],
        "phone": "0486 612 56 78",
        "googleMapsUrl": "https://www.google.com/maps/search/Cizre+Dicle+Cafe+Şırnak",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 7.8
      }
    ]
  },
  "bartin": {
    "name": "Bartın",
    "plate": "74",
    "cafeCount": 3,
    "cafes": [
      {
        "name": "Amasra Kalesi Cafe",
        "district": "Amasra",
        "address": "Amasra, Kale Mah. Kale İçi No:12, Bartın",
        "rating": 4.4,
        "reviewCount": 1234,
        "description": "Amasra Kalesi içinde, deniz manzaralı muhteşem konumuyla Karadeniz'in incisi.",
        "tags": ["Manzaralı", "Vintage", "Bahçeli"],
        "phone": "0378 315 23 45",
        "googleMapsUrl": "https://www.google.com/maps/search/Amasra+Kalesi+Cafe+Bartın",
        "atmosphere": "Orta",
        "lighting": "Doğal",
        "privacyScore": 6.8
      },
      {
        "name": "Amasra Küçük Liman Cafe",
        "district": "Amasra",
        "address": "Amasra, Küçük Liman Mah. Sahil Yolu No:5, Bartın",
        "rating": 4.2,
        "reviewCount": 876,
        "description": "Küçük Liman'da, balıkçı tekneleri arasında sakin bir kahve molası.",
        "tags": ["Manzaralı", "Sakin", "Bahçeli", "WiFi"],
        "phone": "0378 315 56 78",
        "googleMapsUrl": "https://www.google.com/maps/search/Amasra+Küçük+Liman+Cafe+Bartın",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.5
      },
      {
        "name": "İnkumu Sahil Cafe",
        "district": "Merkez",
        "address": "Merkez, İnkumu Mah. Sahil Cd. No:18, Bartın",
        "rating": 4.0,
        "reviewCount": 456,
        "description": "İnkumu plajının yanında, dalgaların sesini dinleyerek kahve içebileceğiniz mekan.",
        "tags": ["Bahçeli", "Doğal", "Sakin", "WiFi"],
        "phone": "0378 227 89 01",
        "googleMapsUrl": "https://www.google.com/maps/search/İnkumu+Sahil+Cafe+Bartın",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 8.0
      }
    ]
  },
  "ardahan": {
    "name": "Ardahan",
    "plate": "75",
    "cafeCount": 2,
    "cafes": [
      {
        "name": "Çıldır Gölü Cafe",
        "district": "Çıldır",
        "address": "Çıldır, Göl Kenarı Yolu, Ardahan",
        "rating": 4.1,
        "reviewCount": 345,
        "description": "Çıldır Gölü kıyısında, kışın donmuş göl üzerinde atlı kızak manzarasıyla eşsiz.",
        "tags": ["Manzaralı", "Doğal", "Sakin"],
        "phone": "0478 511 23 45",
        "googleMapsUrl": "https://www.google.com/maps/search/Çıldır+Gölü+Cafe+Ardahan",
        "atmosphere": "Çok Sessiz",
        "lighting": "Doğal",
        "privacyScore": 9.0
      },
      {
        "name": "Kura Nehri Cafe",
        "district": "Merkez",
        "address": "Merkez, İstasyon Mah. Kongre Cd. No:15, Ardahan",
        "rating": 3.7,
        "reviewCount": 112,
        "description": "Kura Nehri yakınında, Ardahan'ın soğuğunda sıcak bir sığınak.",
        "tags": ["Ahşap Dekor", "Sakin", "WiFi"],
        "phone": "0478 211 56 78",
        "googleMapsUrl": "https://www.google.com/maps/search/Kura+Nehri+Cafe+Ardahan",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 7.8
      }
    ]
  },
  "igdir": {
    "name": "Iğdır",
    "plate": "76",
    "cafeCount": 2,
    "cafes": [
      {
        "name": "Ağrı Dağı Manzara Cafe",
        "district": "Merkez",
        "address": "Merkez, Karaağaç Mah. Ağrı Dağı Cd. No:25, Iğdır",
        "rating": 4.0,
        "reviewCount": 345,
        "description": "Ağrı Dağı'nın muhteşem siluetine bakarak kahve içebileceğiniz eşsiz bir mekan.",
        "tags": ["Manzaralı", "Doğal", "Bahçeli"],
        "phone": "0476 227 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Ağrı+Dağı+Manzara+Cafe+Iğdır",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.5
      },
      {
        "name": "Tuzluca Cafe",
        "district": "Merkez",
        "address": "Merkez, Topçular Mah. Atatürk Cd. No:40, Iğdır",
        "rating": 3.7,
        "reviewCount": 134,
        "description": "Iğdır merkezinde, samimi ve sıcak atmosferiyle yerel halkın sevdiği mekan.",
        "tags": ["Ahşap Dekor", "WiFi", "Sakin"],
        "phone": "0476 226 67 89",
        "googleMapsUrl": "https://www.google.com/maps/search/Tuzluca+Cafe+Iğdır",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 7.3
      }
    ]
  },
  "yalova": {
    "name": "Yalova",
    "plate": "77",
    "cafeCount": 3,
    "cafes": [
      {
        "name": "Termal Cafe",
        "district": "Termal",
        "address": "Termal, Sultaniye Mah. Termal Cd. No:10, Yalova",
        "rating": 4.2,
        "reviewCount": 876,
        "description": "Yalova termal kaplıcaları yakınında, sıcak su buharları arasında huzurlu bir mola.",
        "tags": ["Doğal", "Bahçeli", "Sakin"],
        "phone": "0226 675 23 45",
        "googleMapsUrl": "https://www.google.com/maps/search/Termal+Cafe+Yalova",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 8.0
      },
      {
        "name": "Sahil Yalova Cafe",
        "district": "Merkez",
        "address": "Merkez, Rüstempaşa Mah. Yalı Cd. No:35, Yalova",
        "rating": 4.0,
        "reviewCount": 567,
        "description": "Yalova sahilinde, Marmara Denizi manzarasıyla ferah ve modern bir mekan.",
        "tags": ["Manzaralı", "WiFi", "Minimalist"],
        "phone": "0226 814 56 78",
        "googleMapsUrl": "https://www.google.com/maps/search/Sahil+Yalova+Cafe+Yalova",
        "atmosphere": "Orta",
        "lighting": "Doğal",
        "privacyScore": 6.8
      },
      {
        "name": "Çınarcık Orman Cafe",
        "district": "Çınarcık",
        "address": "Çınarcık, Kocadere Mah. Orman Yolu No:5, Yalova",
        "rating": 4.1,
        "reviewCount": 345,
        "description": "Çınarcık ormanlarının içinde, kuş sesleri eşliğinde doğayla baş başa.",
        "tags": ["Doğal", "Bahçeli", "Sakin", "Ahşap Dekor"],
        "phone": "0226 351 89 01",
        "googleMapsUrl": "https://www.google.com/maps/search/Çınarcık+Orman+Cafe+Yalova",
        "atmosphere": "Çok Sessiz",
        "lighting": "Doğal",
        "privacyScore": 9.0
      }
    ]
  },
  "karabuk": {
    "name": "Karabük",
    "plate": "78",
    "cafeCount": 3,
    "cafes": [
      {
        "name": "Safranbolu Arasta Cafe",
        "district": "Safranbolu",
        "address": "Safranbolu, Çeşme Mah. Arasta Çarşısı No:18, Karabük",
        "rating": 4.4,
        "reviewCount": 1567,
        "description": "UNESCO mirası Safranbolu'da, tarihi Arasta Çarşısı'nda Osmanlı atmosferi.",
        "tags": ["Vintage", "Ahşap Dekor", "Retro", "Köşe Masa"],
        "phone": "0370 712 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Safranbolu+Arasta+Cafe+Karabük",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.2
      },
      {
        "name": "Safranbolu Konak Cafe",
        "district": "Safranbolu",
        "address": "Safranbolu, Bağlar Mah. Hıdırlık Yokuşu No:5, Karabük",
        "rating": 4.3,
        "reviewCount": 1234,
        "description": "Restore edilmiş Safranbolu konağında, geleneksel Türk kahvesi ve safran çayı.",
        "tags": ["Vintage", "Bahçeli", "Manzaralı", "Sakin"],
        "phone": "0370 712 56 78",
        "googleMapsUrl": "https://www.google.com/maps/search/Safranbolu+Konak+Cafe+Karabük",
        "atmosphere": "Çok Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.8
      },
      {
        "name": "Tokatlı Kanyonu Cafe",
        "district": "Safranbolu",
        "address": "Safranbolu, Tokatlı Kanyonu, Karabük",
        "rating": 4.2,
        "reviewCount": 876,
        "description": "Tokatlı Kanyonu üzerinde, cam teras ve zipline hattı manzarasıyla adrenalin dolu.",
        "tags": ["Manzaralı", "Doğal", "Bahçeli"],
        "phone": "0370 714 89 01",
        "googleMapsUrl": "https://www.google.com/maps/search/Tokatlı+Kanyonu+Cafe+Karabük",
        "atmosphere": "Orta",
        "lighting": "Doğal",
        "privacyScore": 6.5
      }
    ]
  },
  "kilis": {
    "name": "Kilis",
    "plate": "79",
    "cafeCount": 2,
    "cafes": [
      {
        "name": "Ravanda Cafe",
        "district": "Merkez",
        "address": "Merkez, Cumhuriyet Mah. İnönü Cd. No:20, Kilis",
        "rating": 3.8,
        "reviewCount": 178,
        "description": "Ravanda Kalesi yakınında, Kilis'in zengin mutfak kültürüyle tanışabileceğiniz mekan.",
        "tags": ["Vintage", "Ahşap Dekor", "Sakin"],
        "phone": "0348 813 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Ravanda+Cafe+Kilis",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.5
      },
      {
        "name": "Zeytin Dalı Cafe",
        "district": "Merkez",
        "address": "Merkez, Kağnıcıoğlu Mah. Atatürk Cd. No:35, Kilis",
        "rating": 3.9,
        "reviewCount": 156,
        "description": "Kilis zeytinyağı kültüründen ilham alan, sade ve samimi bir mekan.",
        "tags": ["Bahçeli", "Sakin", "WiFi", "Minimalist"],
        "phone": "0348 814 56 78",
        "googleMapsUrl": "https://www.google.com/maps/search/Zeytin+Dalı+Cafe+Kilis",
        "atmosphere": "Sessiz",
        "lighting": "Doğal",
        "privacyScore": 7.8
      }
    ]
  },
  "osmaniye": {
    "name": "Osmaniye",
    "plate": "80",
    "cafeCount": 3,
    "cafes": [
      {
        "name": "Kastabala Cafe",
        "district": "Merkez",
        "address": "Merkez, Raufbey Mah. İstiklal Cd. No:30, Osmaniye",
        "rating": 3.9,
        "reviewCount": 345,
        "description": "Antik Kastabala kentinden ilham alan dekoruyla, tarihi atmosferde kahve keyfi.",
        "tags": ["Vintage", "Ahşap Dekor", "Köşe Masa"],
        "phone": "0328 814 34 56",
        "googleMapsUrl": "https://www.google.com/maps/search/Kastabala+Cafe+Osmaniye",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 7.5
      },
      {
        "name": "Toprakkale Seyir Cafe",
        "district": "Toprakkale",
        "address": "Toprakkale, Kale Mah. Kale Yolu No:5, Osmaniye",
        "rating": 4.0,
        "reviewCount": 234,
        "description": "Toprakkale'nin tepesinde, ovaya bakan muhteşem manzarasıyla huzurlu bir mekan.",
        "tags": ["Manzaralı", "Bahçeli", "Doğal", "Sakin"],
        "phone": "0328 861 23 45",
        "googleMapsUrl": "https://www.google.com/maps/search/Toprakkale+Seyir+Cafe+Osmaniye",
        "atmosphere": "Çok Sessiz",
        "lighting": "Doğal",
        "privacyScore": 8.2
      },
      {
        "name": "Osmaniye Kitap Cafe",
        "district": "Merkez",
        "address": "Merkez, Alibeyli Mah. Atatürk Blv. No:55, Osmaniye",
        "rating": 3.8,
        "reviewCount": 178,
        "description": "Kitapseverler için tasarlanmış, sessiz ve huzurlu bir okuma-kahve mekanı.",
        "tags": ["Kitaplık", "WiFi", "Minimalist", "Sakin"],
        "phone": "0328 812 67 89",
        "googleMapsUrl": "https://www.google.com/maps/search/Osmaniye+Kitap+Cafe+Osmaniye",
        "atmosphere": "Çok Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.5
      }
    ]
  },
  "duzce": {
    "name": "Düzce",
    "plate": "81",
    "cafeCount": 3,
    "cafes": [
      {
        "name": "Gölyaka Göl Cafe",
        "district": "Gölyaka",
        "address": "Gölyaka, Efteni Gölü Kenarı, Düzce",
        "rating": 4.2,
        "reviewCount": 678,
        "description": "Efteni Gölü kıyısında, doğa ve göl manzarasıyla huzur dolu bir kaçış noktası.",
        "tags": ["Doğal", "Manzaralı", "Bahçeli", "Sakin"],
        "phone": "0380 651 23 45",
        "googleMapsUrl": "https://www.google.com/maps/search/Gölyaka+Göl+Cafe+Düzce",
        "atmosphere": "Çok Sessiz",
        "lighting": "Doğal",
        "privacyScore": 8.8
      },
      {
        "name": "Konuralp Tarihi Cafe",
        "district": "Konuralp",
        "address": "Konuralp, Çarşı Mah. Müze Cd. No:8, Düzce",
        "rating": 4.0,
        "reviewCount": 345,
        "description": "Antik Prusias ad Hypium kentinin yanında, arkeoloji müzesi yakınında nostaljik mekan.",
        "tags": ["Vintage", "Ahşap Dekor", "Köşe Masa"],
        "phone": "0380 541 56 78",
        "googleMapsUrl": "https://www.google.com/maps/search/Konuralp+Tarihi+Cafe+Düzce",
        "atmosphere": "Sessiz",
        "lighting": "Loş",
        "privacyScore": 7.8
      },
      {
        "name": "Düzce Kitap Evi",
        "district": "Merkez",
        "address": "Merkez, Aziziye Mah. Bolu Cd. No:45, Düzce",
        "rating": 3.9,
        "reviewCount": 234,
        "description": "Düzce Üniversitesi öğrencilerinin uğrak yeri, sakin ve kitap dolu bir cafe.",
        "tags": ["Kitaplık", "WiFi", "Minimalist", "Sakin"],
        "phone": "0380 514 89 01",
        "googleMapsUrl": "https://www.google.com/maps/search/Düzce+Kitap+Evi+Düzce",
        "atmosphere": "Çok Sessiz",
        "lighting": "Loş",
        "privacyScore": 8.2
      }
    ]
  }
};
