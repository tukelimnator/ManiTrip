'use client';

import { useEffect } from 'react';
import Chat from '../components/Chat';

const BODY_HTML = `
<div id="particles-bg"></div>

<nav class="navbar">
  <div class="nav-container">
    <a href="#" class="logo" onclick="goHome()">
      <span class="logo-icon">💔</span>
      <span class="logo-text">Mani<span class="logo-accent">Trip</span></span>
    </a>
    <div class="nav-right">
      <a href="#advice-section" class="nav-advice-link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        Tavsiye Köşesi
      </a>
      <div class="nav-stats">
        <div class="stat">
          <span class="stat-number">81</span>
          <span class="stat-label">İl</span>
        </div>
        <div class="stat">
          <span class="stat-number" id="total-cafes">254</span>
          <span class="stat-label">Mekan</span>
        </div>
      </div>
    </div>
  </div>
</nav>

<header class="hero" id="hero">
  <div class="hero-content">
    <h1 class="hero-title">
      <span class="hero-line">Tartışmak İçin</span>
      <span class="hero-line accent">Doğru Mekan</span>
    </h1>
    <p class="hero-subtitle">
      Türkiye'nin 81 ilinde, manitanızla sessiz sakin bir ortamda
      dertleşebileceğiniz loş ışıklı cafeleri keşfedin.
    </p>
    <div class="hero-search">
      <div class="search-wrapper">
        <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input type="text" id="search-input" placeholder="Şehir ara... (ör: İstanbul, Ankara)" autocomplete="off">
        <button class="search-clear" id="search-clear" onclick="clearSearch()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
    <div class="hero-tags">
      <span class="hero-tag" onclick="scrollToProvinces()">Sessiz Mekanlar</span>
      <span class="hero-tag" onclick="scrollToProvinces()">Loş Işık</span>
      <span class="hero-tag" onclick="scrollToProvinces()">Köşe Masalar</span>
      <span class="hero-tag" onclick="scrollToProvinces()">3.4 - 4.0 Puan</span>
    </div>
  </div>
  <div class="hero-scroll-indicator">
    <span>Keşfet</span>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  </div>
</header>

<section class="info-bar">
  <div class="container">
    <div class="info-cards">
      <div class="info-card">
        <div class="info-icon">🤫</div>
        <h3>Sessiz Ortam</h3>
        <p>Kimsenin sizi duymayacağı sakin mekanlar</p>
      </div>
      <div class="info-card">
        <div class="info-icon">🕯️</div>
        <h3>Loş Işık</h3>
        <p>Gözyaşlarınız karanlıkta kaybolsun</p>
      </div>
      <div class="info-card">
        <div class="info-icon">⭐</div>
        <h3>3.4 - 4.0 Puan</h3>
        <p>Ne çok iyi ne çok kötü, tıpkı ilişkiniz gibi</p>
      </div>
      <div class="info-card">
        <div class="info-icon">🗺️</div>
        <h3>81 İl</h3>
        <p>Türkiye'nin her köşesinde tartışma fırsatı</p>
      </div>
    </div>
  </div>
</section>

<main class="main-content" id="main-content">
  <div class="container">
    <div class="section-header" id="provinces-header">
      <h2 class="section-title">Şehir Seçin</h2>
      <p class="section-subtitle">Hangi ilde tartışmak istiyorsunuz?</p>
      <div class="region-filters">
        <button class="region-btn active" data-region="all">Tümü</button>
        <button class="region-btn" data-region="marmara">Marmara</button>
        <button class="region-btn" data-region="ege">Ege</button>
        <button class="region-btn" data-region="akdeniz">Akdeniz</button>
        <button class="region-btn" data-region="icanadolu">İç Anadolu</button>
        <button class="region-btn" data-region="karadeniz">Karadeniz</button>
        <button class="region-btn" data-region="doguanadolu">Doğu Anadolu</button>
        <button class="region-btn" data-region="guneydogu">Güneydoğu</button>
      </div>
    </div>

    <div class="provinces-grid" id="provinces-grid"></div>

    <div class="cafe-detail-view" id="cafe-detail-view" style="display:none">
      <button class="back-btn" onclick="goBack()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
        Tüm Şehirler
      </button>

      <div class="province-header" id="province-header">
        <div class="province-info">
          <span class="province-plate" id="province-plate">34</span>
          <div>
            <h2 class="province-name" id="province-name">İstanbul</h2>
            <p class="province-cafe-count" id="province-cafe-count">8 mekan bulundu</p>
          </div>
        </div>
        <div class="province-sort">
          <select id="sort-select" onchange="sortCafes()">
            <option value="rating-desc">Puan (Yüksek)</option>
            <option value="rating-asc">Puan (Düşük)</option>
            <option value="privacy-desc">Mahremiyet (Yüksek)</option>
            <option value="reviews-desc">Yorum Sayısı</option>
          </select>
        </div>
      </div>

      <div class="cafes-grid" id="cafes-grid"></div>

      <section class="comments-section" id="comments-section">
        <div class="comments-header">
          <h3 class="comments-title">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            Tartışmalık Mekan Öner
          </h3>
          <p class="comments-subtitle">Bu ilde bildiğin sessiz, sakin, loş bir cafe var mı? Öner, herkes faydalansın!</p>
        </div>

        <form class="comment-form" id="comment-form" onsubmit="submitComment(event)">
          <div class="form-row">
            <div class="form-group">
              <label for="comment-name">Takma Adın</label>
              <input type="text" id="comment-name" placeholder="ör: Tartışma Ustası" required maxlength="30">
            </div>
            <div class="form-group">
              <label for="comment-cafe">Cafe Adı</label>
              <input type="text" id="comment-cafe" placeholder="ör: Sessiz Köşe Cafe" required maxlength="60">
            </div>
          </div>
          <div class="form-group">
            <label for="comment-address">Adres / Semt</label>
            <input type="text" id="comment-address" placeholder="ör: Kadıköy, Moda Caddesi" maxlength="100">
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="comment-rating">Tartışmalık Puanı</label>
              <select id="comment-rating" required>
                <option value="">Puan seç</option>
                <option value="5">⭐⭐⭐⭐⭐ Efsane mekan</option>
                <option value="4">⭐⭐⭐⭐ Çok iyi</option>
                <option value="3">⭐⭐⭐ İdare eder</option>
                <option value="2">⭐⭐ Pek değil</option>
                <option value="1">⭐ Gitmeyin</option>
              </select>
            </div>
            <div class="form-group">
              <label for="comment-vibe">Atmosfer</label>
              <select id="comment-vibe">
                <option value="Çok Sessiz">🤫 Çok Sessiz</option>
                <option value="Sessiz">🔇 Sessiz</option>
                <option value="Orta">😐 Orta</option>
                <option value="Gürültülü">📢 Gürültülü</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label for="comment-text">Yorumun</label>
            <textarea id="comment-text" placeholder="Bu mekan neden tartışmak için ideal? Detay ver..." required maxlength="500" rows="3"></textarea>
          </div>
          <button type="submit" class="comment-submit-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
            Önerinizi Gönderin
          </button>
        </form>

        <div class="comments-list" id="comments-list"></div>
      </section>
    </div>
  </div>
</main>

<section class="advice-section" id="advice-section">
  <div class="container">
    <div class="advice-header">
      <h2 class="advice-title">
        <span class="advice-title-icon">🗣️</span>
        İlişki Tavsiye Köşesi
      </h2>
      <p class="advice-subtitle">Manitayla tartışma konusunda tavsiye mi arıyorsun? Sor, topluluk cevaplasın!</p>
    </div>

    <div class="sorunsal-banner">
      <div class="sorunsal-banner-icon">🔥🤖</div>
      <div class="sorunsal-banner-content">
        <h3 class="sorunsal-banner-title">@sorunsal Botu Aktif!</h3>
        <p class="sorunsal-banner-text">
          Herhangi bir konunun altına yanıt yazarken mesajının içine
          <strong>@sorunsal</strong> yaz. Acımasız, küfürlü ve agresif ama bir o kadar da
          samimi tavsiye veren yapay zeka botumuz anında sana cevap verecek.
          Ego'nu kaldıramıyorsan yazma!
        </p>
        <div class="sorunsal-banner-steps">
          <div class="sorunsal-step">
            <span class="sorunsal-step-num">1</span>
            <span>Bir konunun altındaki yanıt bölümüne git</span>
          </div>
          <div class="sorunsal-step">
            <span class="sorunsal-step-num">2</span>
            <span>Mesajına <strong>@sorunsal</strong> yaz</span>
          </div>
          <div class="sorunsal-step">
            <span class="sorunsal-step-num">3</span>
            <span>Gönder'e bas, bot anında acımasız tavsiyesini yapıştırsın</span>
          </div>
        </div>
        <p class="sorunsal-banner-warning">Dikkat: Bot ağır konuşur, alıngan biriysen kullanma. Tavsiyeler tamamen eğlence amaçlıdır.</p>
      </div>
    </div>

    <div class="advice-layout">
      <div class="advice-form-wrap">
        <form class="advice-form" id="advice-form" onsubmit="submitAdvice(event)">
          <h4 class="advice-form-title">Yeni Konu Aç</h4>
          <div class="form-group">
            <label for="advice-nick">Takma Adın</label>
            <input type="text" id="advice-nick" placeholder="ör: Kalbi Kırık" required maxlength="25">
          </div>
          <div class="form-group">
            <label for="advice-topic">Konu Başlığı</label>
            <input type="text" id="advice-topic" placeholder="ör: Mesajlara geç cevap verme tartışması" required maxlength="100">
          </div>
          <div class="form-group">
            <label for="advice-category">Kategori</label>
            <select id="advice-category">
              <option value="genel">💬 Genel Tavsiye</option>
              <option value="kiskanclik">😤 Kıskançlık</option>
              <option value="iletisim">📱 İletişim Sorunları</option>
              <option value="guven">🤝 Güven Problemleri</option>
              <option value="uzaktan">🌍 Uzak İlişki</option>
              <option value="barışma">🕊️ Barışma Yolları</option>
              <option value="diger">🤷 Diğer</option>
            </select>
          </div>
          <div class="form-group">
            <label for="advice-detail">Detay</label>
            <textarea id="advice-detail" placeholder="Durumu anlat, topluluktan tavsiye al..." required maxlength="1000" rows="4"></textarea>
          </div>
          <button type="submit" class="advice-submit-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            Konuyu Paylaş
          </button>
        </form>
      </div>

      <div class="advice-topics-wrap">
        <div class="advice-topics-toolbar">
          <div class="advice-topics-count" id="advice-topics-count">0 konu</div>
          <select id="advice-category-filter" onchange="renderAdviceTopics()">
            <option value="all">Tüm Kategoriler</option>
            <option value="genel">💬 Genel Tavsiye</option>
            <option value="kiskanclik">😤 Kıskançlık</option>
            <option value="iletisim">📱 İletişim Sorunları</option>
            <option value="guven">🤝 Güven Problemleri</option>
            <option value="uzaktan">🌍 Uzak İlişki</option>
            <option value="barişma">🕊️ Barışma Yolları</option>
            <option value="diger">🤷 Diğer</option>
          </select>
        </div>
        <div class="advice-topics-list" id="advice-topics-list"></div>
      </div>
    </div>
  </div>
</section>

<footer class="footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-brand">
        <span class="logo-icon">💔</span>
        <span class="logo-text">Mani<span class="logo-accent">Trip</span></span>
        <p class="footer-tagline">Her tartışmanın bir mekanı vardır.</p>
      </div>
      <div class="footer-info">
        <p>Veriler Google Maps üzerinden derlenmiştir.</p>
        <p>Puan aralığı: 3.4 - 4.0 | Sessiz & Loş mekanlar</p>
      </div>
    </div>

    <div class="secret-section">
      <div class="secret-lock" id="secret-lock">
        <span class="secret-lock-icon">🔒</span>
        <p class="secret-lock-text">Gizli bir mesaj var... Şifreyi gir.</p>
        <div class="secret-input-wrap">
          <input type="password" id="secret-password" placeholder="Şifreyi gir..." maxlength="6" onkeydown="if(event.key==='Enter')document.getElementById('secret-btn').click()">
          <button id="secret-btn" onclick="(function(){var p=document.getElementById('secret-password');if(p.value==='340619'){document.getElementById('secret-lock').style.display='none';document.getElementById('secret-message').style.display='block';}else{p.style.borderColor='#e11d48';p.value='';p.placeholder='Yanlış şifre!';}})()">Aç</button>
        </div>
      </div>
      <div class="secret-message" id="secret-message" style="display:none">
        <p class="secret-text">Eloşum, yavrum seni babandan isteyeceğim. Seviyorum seni. 💍❤️</p>
        <img src="/secret-photo.png" alt="Biz" class="secret-photo">
      </div>
    </div>

    <div class="footer-bottom">
      <p>Emeği geçen Elif'e teşekkür ederiz. 💖</p>
      <p>&copy; 2026 ManiTrip. Tüm kavgalar saklıdır.</p>
    </div>
  </div>
</footer>

<nav class="touch-bar" id="touch-bar">
  <a href="#hero" class="touch-bar-item active" data-section="hero">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
    <span>Ana Sayfa</span>
  </a>
  <a href="#main-content" class="touch-bar-item" data-section="main-content">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
    <span>Mekanlar</span>
  </a>
  <a href="#advice-section" class="touch-bar-item" data-section="advice-section">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
    <span>Tavsiye</span>
  </a>
  <a class="touch-bar-item" id="touch-bar-scroll-top">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
    <span>Yukarı</span>
  </a>
</nav>
`;

export default function Home() {
  useEffect(() => {
    const scripts = [
      'https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js',
      'https://www.gstatic.com/firebasejs/10.14.1/firebase-database-compat.js',
      '/firebase-config.js',
      '/data.js',
      '/app.js',
    ];

    let i = 0;
    function loadNext() {
      if (i >= scripts.length) return;
      const script = document.createElement('script');
      script.src = scripts[i];
      script.onload = () => {
        i++;
        loadNext();
      };
      script.onerror = () => {
        console.warn('Failed to load:', scripts[i]);
        i++;
        loadNext();
      };
      document.body.appendChild(script);
    }
    loadNext();

    // Touch bar active section tracking
    const sections = ['hero', 'main-content', 'advice-section'];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          document.querySelectorAll('.touch-bar-item').forEach((item) => {
            item.classList.toggle('active', item.getAttribute('data-section') === id);
          });
        }
      });
    }, { threshold: 0.3 });

    setTimeout(() => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });

      const scrollTopBtn = document.getElementById('touch-bar-scroll-top');
      if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', (e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }

      // Swipe gesture support for touch bar
      let touchStartX = 0;
      let touchEndX = 0;
      document.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
      document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) < 80) return;
        const activeItem = document.querySelector('.touch-bar-item.active');
        const currentSection = activeItem?.getAttribute('data-section') || 'hero';
        const idx = sections.indexOf(currentSection);
        if (diff > 0 && idx < sections.length - 1) {
          const next = document.getElementById(sections[idx + 1]);
          if (next) next.scrollIntoView({ behavior: 'smooth' });
        } else if (diff < 0 && idx > 0) {
          const prev = document.getElementById(sections[idx - 1]);
          if (prev) prev.scrollIntoView({ behavior: 'smooth' });
        }
      }, { passive: true });
    }, 1000);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
      <Chat />
    </>
  );
}
