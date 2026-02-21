/*
  ManiTrip - Firebase Yapılandırması

  Cross-device veri paylaşımı için Firebase Realtime Database kullanılıyor.
  Aşağıdaki adımları takip ederek Firebase projenizi oluşturun:

  1. https://console.firebase.google.com adresine gidin
  2. "Proje Ekle" butonuna tıklayın, proje adı "ManiTrip" yazın
  3. Analytics'i kapatabilirsiniz, "Proje Oluştur" tıklayın
  4. Sol menüden "Build > Realtime Database" seçin
  5. "Veritabanı oluştur" tıklayın, konum seçin, "Test modunda başlat" seçin
  6. Sol menüden ⚙️ > "Proje ayarları" > aşağı kaydırın > "Web uygulaması ekle" (</> ikonu)
  7. Uygulama adı "ManiTrip" yazın, "Kaydet" tıklayın
  8. Çıkan config bilgilerini aşağıya yapıştırın
*/

var FIREBASE_CONFIG = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

var firebaseReady = false;

if (FIREBASE_CONFIG.apiKey && FIREBASE_CONFIG.databaseURL) {
    try {
        firebase.initializeApp(FIREBASE_CONFIG);
        firebaseReady = true;
        console.log("ManiTrip: Firebase bağlantısı başarılı!");
    } catch (e) {
        console.warn("ManiTrip: Firebase başlatılamadı, localStorage kullanılıyor.", e);
    }
} else {
    console.log("ManiTrip: Firebase yapılandırılmamış, localStorage kullanılıyor.");
}
