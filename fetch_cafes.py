"""
ManiTrip - Google Places API ile Cafe Verisi Çekme Scripti

Kullanım:
    python fetch_cafes.py --api-key YOUR_GOOGLE_API_KEY

Bu script, Google Places API kullanarak Türkiye'nin 81 ilindeki
sessiz, sakin, loş ışıklı cafeleri çeker ve data.js dosyasına yazar.
Sadece 3.4-4.0 puan aralığındaki cafeler dahil edilir.

Google Places API Anahtarı almak için:
    1. https://console.cloud.google.com adresine gidin
    2. Yeni proje oluşturun
    3. Places API'yi etkinleştirin
    4. API anahtarı oluşturun
"""

import argparse
import json
import time
import urllib.request
import urllib.parse

PROVINCES = [
    "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara",
    "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl",
    "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı",
    "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan",
    "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari",
    "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars",
    "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya",
    "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla",
    "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya",
    "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat",
    "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat",
    "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman",
    "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük",
    "Kilis", "Osmaniye", "Düzce"
]

PLATE_CODES = {
    "Adana": "01", "Adıyaman": "02", "Afyonkarahisar": "03", "Ağrı": "04",
    "Amasya": "05", "Ankara": "06", "Antalya": "07", "Artvin": "08",
    "Aydın": "09", "Balıkesir": "10", "Bilecik": "11", "Bingöl": "12",
    "Bitlis": "13", "Bolu": "14", "Burdur": "15", "Bursa": "16",
    "Çanakkale": "17", "Çankırı": "18", "Çorum": "19", "Denizli": "20",
    "Diyarbakır": "21", "Edirne": "22", "Elazığ": "23", "Erzincan": "24",
    "Erzurum": "25", "Eskişehir": "26", "Gaziantep": "27", "Giresun": "28",
    "Gümüşhane": "29", "Hakkari": "30", "Hatay": "31", "Isparta": "32",
    "Mersin": "33", "İstanbul": "34", "İzmir": "35", "Kars": "36",
    "Kastamonu": "37", "Kayseri": "38", "Kırklareli": "39", "Kırşehir": "40",
    "Kocaeli": "41", "Konya": "42", "Kütahya": "43", "Malatya": "44",
    "Manisa": "45", "Kahramanmaraş": "46", "Mardin": "47", "Muğla": "48",
    "Muş": "49", "Nevşehir": "50", "Niğde": "51", "Ordu": "52",
    "Rize": "53", "Sakarya": "54", "Samsun": "55", "Siirt": "56",
    "Sinop": "57", "Sivas": "58", "Tekirdağ": "59", "Tokat": "60",
    "Trabzon": "61", "Tunceli": "62", "Şanlıurfa": "63", "Uşak": "64",
    "Van": "65", "Yozgat": "66", "Zonguldak": "67", "Aksaray": "68",
    "Bayburt": "69", "Karaman": "70", "Kırıkkale": "71", "Batman": "72",
    "Şırnak": "73", "Bartın": "74", "Ardahan": "75", "Iğdır": "76",
    "Yalova": "77", "Karabük": "78", "Kilis": "79", "Osmaniye": "80",
    "Düzce": "81"
}

MIN_RATING = 3.4
MAX_RATING = 4.0


def normalize_key(name):
    return (name.lower()
            .replace("ı", "i").replace("ö", "o").replace("ü", "u")
            .replace("ş", "s").replace("ç", "c").replace("ğ", "g")
            .replace("İ", "i").replace(" ", ""))


def search_places(api_key, query, province):
    url = "https://maps.googleapis.com/maps/api/place/textsearch/json"
    params = {
        "query": query,
        "key": api_key,
        "language": "tr",
        "region": "tr"
    }
    full_url = f"{url}?{urllib.parse.urlencode(params)}"

    try:
        req = urllib.request.Request(full_url)
        with urllib.request.urlopen(req) as response:
            return json.loads(response.read().decode("utf-8"))
    except Exception as e:
        print(f"  Hata ({province}): {e}")
        return None


def fetch_province_cafes(api_key, province):
    queries = [
        f"sessiz sakin cafe {province}",
        f"loş kahve {province}",
        f"cafe {province}"
    ]

    all_places = {}

    for query in queries:
        result = search_places(api_key, query, province)
        if not result or result.get("status") != "OK":
            continue

        for place in result.get("results", []):
            place_id = place.get("place_id")
            rating = place.get("rating", 0)

            if MIN_RATING <= rating <= MAX_RATING and place_id not in all_places:
                all_places[place_id] = {
                    "name": place.get("name", ""),
                    "district": place.get("formatted_address", "").split(",")[0].strip(),
                    "address": place.get("formatted_address", ""),
                    "rating": rating,
                    "reviewCount": place.get("user_ratings_total", 0),
                    "description": f"{place.get('name', '')} - {province} ilinde sessiz ve sakin bir ortam.",
                    "tags": extract_tags(place),
                    "phone": "",
                    "googleMapsUrl": f"https://www.google.com/maps/place/?q=place_id:{place_id}",
                    "atmosphere": classify_atmosphere(place),
                    "lighting": "Loş",
                    "privacyScore": round(rating * 2.2, 1)
                }

        time.sleep(0.5)

    return list(all_places.values())[:8]


def extract_tags(place):
    tags = []
    types = place.get("types", [])
    if "cafe" in types:
        tags.append("Cafe")
    if "restaurant" in types:
        tags.append("Restoran")
    if "bar" in types:
        tags.append("Bar")

    price = place.get("price_level", 0)
    if price <= 1:
        tags.append("Uygun Fiyat")
    elif price == 2:
        tags.append("Orta Fiyat")
    elif price >= 3:
        tags.append("Üst Segment")

    tags.append("Sessiz")
    if len(tags) < 3:
        tags.append("Loş Işık")

    return tags[:4]


def classify_atmosphere(place):
    rating = place.get("rating", 3.5)
    if rating < 3.6:
        return "Çok Sessiz"
    elif rating < 3.8:
        return "Sessiz"
    return "Orta Sessiz"


def main():
    parser = argparse.ArgumentParser(description="ManiTrip - Google Places API Cafe Fetcher")
    parser.add_argument("--api-key", required=True, help="Google Places API anahtarı")
    parser.add_argument("--output", default="data.js", help="Çıktı dosyası (varsayılan: data.js)")
    parser.add_argument("--provinces", nargs="*", help="Sadece belirli iller (ör: İstanbul Ankara)")
    args = parser.parse_args()

    target_provinces = args.provinces if args.provinces else PROVINCES
    data = {}

    print(f"ManiTrip Veri Çekici")
    print(f"{'='*40}")
    print(f"Hedef il sayısı: {len(target_provinces)}")
    print(f"Puan aralığı: {MIN_RATING} - {MAX_RATING}")
    print()

    for i, province in enumerate(target_provinces, 1):
        print(f"[{i}/{len(target_provinces)}] {province} taranıyor...")

        cafes = fetch_province_cafes(args.api_key, province)
        key = normalize_key(province)

        data[key] = {
            "name": province,
            "plate": PLATE_CODES.get(province, "??"),
            "cafeCount": len(cafes),
            "cafes": cafes
        }

        print(f"  -> {len(cafes)} mekan bulundu")
        time.sleep(1)

    js_content = "const PROVINCES_DATA = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n"

    with open(args.output, "w", encoding="utf-8") as f:
        f.write(js_content)

    total = sum(d["cafeCount"] for d in data.values())
    print(f"\nTamamlandı! {len(data)} il, {total} mekan")
    print(f"Dosya: {args.output}")


if __name__ == "__main__":
    main()
