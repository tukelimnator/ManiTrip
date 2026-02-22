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
    apiKey: "AIzaSyAhZRRenDmPggZHXIDCZCDLgrR_OPkWweA",
    authDomain: "manitrip-9e8eb.firebaseapp.com",
    databaseURL: "https://manitrip-9e8eb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "manitrip-9e8eb",
    storageBucket: "manitrip-9e8eb.firebasestorage.app",
    messagingSenderId: "472271950165",
    appId: "1:472271950165:web:148fa643bcec6d193d9fdc"
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
