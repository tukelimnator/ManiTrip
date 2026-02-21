const REGIONS = {
    marmara: ["İstanbul", "Tekirdağ", "Edirne", "Kırklareli", "Balıkesir", "Çanakkale", "Kocaeli", "Sakarya", "Bursa", "Yalova", "Bilecik"],
    ege: ["İzmir", "Aydın", "Denizli", "Muğla", "Manisa", "Afyonkarahisar", "Kütahya", "Uşak"],
    akdeniz: ["Antalya", "Mersin", "Adana", "Hatay", "Kahramanmaraş", "Osmaniye", "Burdur", "Isparta"],
    icanadolu: ["Ankara", "Konya", "Eskişehir", "Kayseri", "Sivas", "Yozgat", "Aksaray", "Niğde", "Nevşehir", "Kırşehir", "Kırıkkale", "Çankırı", "Karaman"],
    karadeniz: ["Trabzon", "Rize", "Artvin", "Giresun", "Ordu", "Samsun", "Amasya", "Tokat", "Çorum", "Sinop", "Kastamonu", "Bartın", "Karabük", "Zonguldak", "Bolu", "Düzce", "Gümüşhane", "Bayburt"],
    doguanadolu: ["Erzurum", "Erzincan", "Kars", "Iğdır", "Ağrı", "Ardahan", "Van", "Muş", "Bitlis", "Hakkari", "Bingöl", "Tunceli", "Elazığ", "Malatya"],
    guneydogu: ["Gaziantep", "Şanlıurfa", "Diyarbakır", "Mardin", "Batman", "Şırnak", "Siirt", "Adıyaman", "Kilis"]
};

let currentProvince = null;
let currentCafes = [];
let activeRegion = "all";

function init() {
    renderProvinces();
    setupSearch();
    setupRegionFilters();
    setupScrollIndicator();
    updateTotalCafes();
}

function updateTotalCafes() {
    let total = 0;
    for (const key in PROVINCES_DATA) {
        total += PROVINCES_DATA[key].cafeCount;
    }
    document.getElementById("total-cafes").textContent = total;
}

function getProvinceKey(name) {
    return name.toLowerCase()
        .replace(/ı/g, "i").replace(/ö/g, "o").replace(/ü/g, "u")
        .replace(/ş/g, "s").replace(/ç/g, "c").replace(/ğ/g, "g")
        .replace(/İ/g, "i").replace(/ /g, "");
}

function normalizeTurkish(str) {
    return str.toLowerCase()
        .replace(/İ/gi, "i").replace(/I/g, "i")
        .replace(/ı/g, "i").replace(/i̇/g, "i")
        .replace(/ö/g, "o").replace(/ü/g, "u")
        .replace(/ş/g, "s").replace(/ç/g, "c")
        .replace(/ğ/g, "g")
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function renderProvinces(filter = "", autoSelect = true) {
    const grid = document.getElementById("provinces-grid");
    const entries = Object.entries(PROVINCES_DATA);

    entries.sort((a, b) => a[1].name.localeCompare(b[1].name, "tr"));

    let html = "";
    let matchedKeys = [];

    const normalizedFilter = normalizeTurkish(filter);

    for (const [key, data] of entries) {
        const matchesSearch = !filter ||
            normalizeTurkish(data.name).includes(normalizedFilter) ||
            data.plate.includes(filter);

        const matchesRegion = activeRegion === "all" ||
            (REGIONS[activeRegion] && REGIONS[activeRegion].includes(data.name));

        const visible = matchesSearch && matchesRegion;

        if (visible) matchedKeys.push(key);

        html += `
            <div class="province-card ${visible ? '' : 'hidden'}"
                 onclick="selectProvince('${key}')"
                 data-province="${key}">
                <span class="province-card-plate">${data.plate}</span>
                <div class="province-card-name">${data.name}</div>
                <div class="province-card-count"><span>${data.cafeCount}</span> mekan</div>
            </div>
        `;
    }

    if (matchedKeys.length === 0) {
        html += `
            <div class="no-results">
                <div class="no-results-icon">🔍</div>
                <h3>Sonuç bulunamadı</h3>
                <p>Farklı bir arama terimi deneyin</p>
            </div>
        `;
    }

    grid.innerHTML = html;

    if (autoSelect && filter && matchedKeys.length === 1) {
        selectProvince(matchedKeys[0]);
    }
}

function selectProvince(key) {
    const data = PROVINCES_DATA[key];
    if (!data) return;

    currentProvince = key;
    currentCafes = [...data.cafes];

    document.getElementById("provinces-grid").style.display = "none";
    document.getElementById("provinces-header").style.display = "none";
    document.getElementById("cafe-detail-view").style.display = "block";

    document.getElementById("province-plate").textContent = data.plate;
    document.getElementById("province-name").textContent = data.name;
    document.getElementById("province-cafe-count").textContent = `${data.cafeCount} mekan bulundu`;
    document.getElementById("sort-select").value = "rating-desc";

    sortCafes();
    renderComments();
    window.scrollTo({ top: document.getElementById("main-content").offsetTop - 80, behavior: "smooth" });
}

let renderedCafes = [];

function renderCafes(cafes) {
    const grid = document.getElementById("cafes-grid");
    renderedCafes = cafes;
    let html = "";

    for (let i = 0; i < cafes.length; i++) {
        const cafe = cafes[i];
        const privacyPercent = (cafe.privacyScore / 10) * 100;

        html += `
            <div class="cafe-card">
                <div class="cafe-card-top">
                    <div class="cafe-name">${cafe.name}</div>
                    <div class="cafe-rating">
                        <span class="cafe-rating-star">★</span>
                        <span class="cafe-rating-value">${cafe.rating}</span>
                    </div>
                </div>

                <div class="cafe-district">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    ${cafe.address}
                </div>

                <p class="cafe-description">${cafe.description}</p>

                <div class="cafe-meta">
                    <div class="cafe-meta-item">
                        <span class="cafe-meta-icon">🔇</span>
                        <span class="cafe-meta-label">${cafe.atmosphere}</span>
                    </div>
                    <div class="cafe-meta-item">
                        <span class="cafe-meta-icon">🕯️</span>
                        <span class="cafe-meta-label">${cafe.lighting}</span>
                    </div>
                    <div class="cafe-meta-item">
                        <span class="cafe-meta-icon">💬</span>
                        <span class="cafe-meta-label">${cafe.reviewCount} yorum</span>
                    </div>
                    <div class="cafe-meta-item">
                        <span class="cafe-meta-icon">📞</span>
                        <span class="cafe-meta-label">${cafe.phone}</span>
                    </div>
                </div>

                <div class="privacy-bar">
                    <div class="privacy-bar-label">
                        <span>Mahremiyet Skoru</span>
                        <span>${cafe.privacyScore}/10</span>
                    </div>
                    <div class="privacy-bar-track">
                        <div class="privacy-bar-fill" style="width: ${privacyPercent}%"></div>
                    </div>
                </div>

                <div class="cafe-tags">
                    ${cafe.tags.map(t => `<span class="cafe-tag">${t}</span>`).join('')}
                </div>

                <div class="cafe-actions">
                    <a href="${cafe.googleMapsUrl}" target="_blank" rel="noopener" class="cafe-action-btn primary">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        Haritada Gör
                    </a>
                    <button class="cafe-action-btn secondary" onclick="shareCafeByIndex(${i})">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="18" cy="5" r="3"></circle>
                            <circle cx="6" cy="12" r="3"></circle>
                            <circle cx="18" cy="19" r="3"></circle>
                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                        </svg>
                        Paylaş
                    </button>
                </div>
            </div>
        `;
    }

    grid.innerHTML = html;
}

function shareCafeByIndex(index) {
    const cafe = renderedCafes[index];
    if (!cafe || !currentProvince) return;
    shareCafe(cafe.name, PROVINCES_DATA[currentProvince].name);
}

function sortCafes() {
    const sortBy = document.getElementById("sort-select").value;
    let sorted = [...currentCafes];

    switch (sortBy) {
        case "rating-desc":
            sorted.sort((a, b) => b.rating - a.rating);
            break;
        case "rating-asc":
            sorted.sort((a, b) => a.rating - b.rating);
            break;
        case "privacy-desc":
            sorted.sort((a, b) => b.privacyScore - a.privacyScore);
            break;
        case "reviews-desc":
            sorted.sort((a, b) => b.reviewCount - a.reviewCount);
            break;
    }

    renderCafes(sorted);
}

function goBack() {
    currentProvince = null;
    currentCafes = [];
    document.getElementById("cafe-detail-view").style.display = "none";
    document.getElementById("provinces-grid").style.display = "grid";
    document.getElementById("provinces-header").style.display = "block";
    document.getElementById("search-input").value = "";
    document.getElementById("search-clear").classList.remove("visible");
    renderProvinces("", false);
    window.scrollTo({ top: document.getElementById("main-content").offsetTop - 80, behavior: "smooth" });
}

function goHome() {
    goBack();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function setupSearch() {
    const input = document.getElementById("search-input");
    const clearBtn = document.getElementById("search-clear");

    input.addEventListener("input", (e) => {
        const val = e.target.value.trim();
        clearBtn.classList.toggle("visible", val.length > 0);

        if (currentProvince) {
            goBack();
        }

        renderProvinces(val);

        if (val.length > 0) {
            scrollToProvinces();
        }
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            clearSearch();
        }
    });
}

function clearSearch() {
    const input = document.getElementById("search-input");
    input.value = "";
    document.getElementById("search-clear").classList.remove("visible");
    renderProvinces();
    input.focus();
}

function setupRegionFilters() {
    const buttons = document.querySelectorAll(".region-btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeRegion = btn.dataset.region;

            const searchVal = document.getElementById("search-input").value.trim();
            renderProvinces(searchVal);
        });
    });
}

function scrollToProvinces() {
    document.getElementById("main-content").scrollIntoView({ behavior: "smooth", block: "start" });
}

function setupScrollIndicator() {
    const indicator = document.querySelector(".hero-scroll-indicator");
    if (indicator) {
        indicator.addEventListener("click", scrollToProvinces);
    }
}

function shareCafe(cafeName, provinceName) {
    const text = cafeName + " - " + provinceName + " | ManiTrip'te keşfettim! Manitayla tartışmak için ideal bir mekan 💔";
    const url = window.location.href;
    const fullText = text + "\n" + url;

    const existing = document.getElementById("share-modal");
    if (existing) existing.remove();

    const modal = document.createElement("div");
    modal.id = "share-modal";
    modal._shareText = fullText;
    modal._shareUrl = url;

    const overlay = document.createElement("div");
    overlay.className = "share-overlay";
    overlay.onclick = closeShareModal;
    modal.appendChild(overlay);

    const panel = document.createElement("div");
    panel.className = "share-panel";

    panel.innerHTML =
        '<div class="share-panel-header">' +
            '<h4>Paylaş</h4>' +
            '<button class="share-close" id="share-close-btn">' +
                '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">' +
                    '<line x1="18" y1="6" x2="6" y2="18"></line>' +
                    '<line x1="6" y1="6" x2="18" y2="18"></line>' +
                '</svg>' +
            '</button>' +
        '</div>' +
        '<p class="share-preview"></p>' +
        '<div class="share-options">' +
            '<button class="share-option whatsapp" data-platform="whatsapp">' +
                '<span class="share-option-icon">💬</span>' +
                '<span>WhatsApp</span>' +
            '</button>' +
            '<button class="share-option twitter" data-platform="twitter">' +
                '<span class="share-option-icon">𝕏</span>' +
                '<span>X / Twitter</span>' +
            '</button>' +
            '<button class="share-option telegram" data-platform="telegram">' +
                '<span class="share-option-icon">✈️</span>' +
                '<span>Telegram</span>' +
            '</button>' +
            '<button class="share-option copy" data-platform="copy">' +
                '<span class="share-option-icon">📋</span>' +
                '<span>Kopyala</span>' +
            '</button>' +
        '</div>';

    modal.appendChild(panel);

    panel.querySelector(".share-preview").textContent = cafeName + " - " + provinceName;

    panel.querySelector("#share-close-btn").onclick = closeShareModal;

    panel.querySelectorAll(".share-option").forEach(function(btn) {
        btn.addEventListener("click", function() {
            var platform = this.getAttribute("data-platform");
            if (platform === "copy") {
                copyShareText();
            } else {
                shareVia(platform, fullText, url);
            }
        });
    });

    document.body.appendChild(modal);
    requestAnimationFrame(function() { modal.classList.add("active"); });
}

function shareVia(platform, text, url) {
    var encoded = encodeURIComponent(text);
    var encodedUrl = encodeURIComponent(url);
    var shareUrl = "";

    switch (platform) {
        case "whatsapp":
            shareUrl = "https://wa.me/?text=" + encodeURIComponent(text + "\n" + url);
            break;
        case "twitter":
            shareUrl = "https://x.com/intent/tweet?text=" + encoded;
            break;
        case "telegram":
            shareUrl = "https://t.me/share/url?url=" + encodedUrl + "&text=" + encoded;
            break;
    }
    window.open(shareUrl, "_blank", "noopener,width=600,height=500");
    closeShareModal();
}

function copyShareText() {
    const modal = document.getElementById("share-modal");
    const text = modal ? modal._shareText : "";
    navigator.clipboard.writeText(text).then(() => {
        showToast("Metin kopyalandı!");
        closeShareModal();
    }).catch(() => {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        ta.remove();
        showToast("Metin kopyalandı!");
        closeShareModal();
    });
}

function closeShareModal() {
    const modal = document.getElementById("share-modal");
    if (modal) {
        modal.classList.remove("active");
        setTimeout(() => modal.remove(), 300);
    }
}

// ===== COMMENTS SYSTEM =====

function getComments(provinceKey) {
    const all = JSON.parse(localStorage.getItem("manitrip_comments") || "{}");
    return all[provinceKey] || [];
}

function saveComments(provinceKey, comments) {
    const all = JSON.parse(localStorage.getItem("manitrip_comments") || "{}");
    all[provinceKey] = comments;
    localStorage.setItem("manitrip_comments", JSON.stringify(all));
}

function submitComment(e) {
    e.preventDefault();
    if (!currentProvince) return;

    const name = document.getElementById("comment-name").value.trim();
    const cafe = document.getElementById("comment-cafe").value.trim();
    const address = document.getElementById("comment-address").value.trim();
    const rating = document.getElementById("comment-rating").value;
    const vibe = document.getElementById("comment-vibe").value;
    const text = document.getElementById("comment-text").value.trim();

    if (!name || !cafe || !rating || !text) return;

    const comment = {
        id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
        name,
        cafe,
        address,
        rating: parseInt(rating),
        vibe,
        text,
        date: new Date().toISOString(),
        likes: 0
    };

    const comments = getComments(currentProvince);
    comments.unshift(comment);
    saveComments(currentProvince, comments);

    document.getElementById("comment-form").reset();
    renderComments();
    showToast("Öneriniz eklendi!");
}

function deleteComment(commentId) {
    if (!currentProvince) return;
    const comments = getComments(currentProvince).filter(c => c.id !== commentId);
    saveComments(currentProvince, comments);
    renderComments();
}

function likeComment(commentId) {
    if (!currentProvince) return;
    const likedKey = "manitrip_liked";
    const liked = JSON.parse(localStorage.getItem(likedKey) || "[]");

    const comments = getComments(currentProvince);
    const comment = comments.find(c => c.id === commentId);
    if (!comment) return;

    if (liked.includes(commentId)) {
        comment.likes = Math.max(0, comment.likes - 1);
        liked.splice(liked.indexOf(commentId), 1);
    } else {
        comment.likes++;
        liked.push(commentId);
    }

    saveComments(currentProvince, comments);
    localStorage.setItem(likedKey, JSON.stringify(liked));
    renderComments();
}

function renderComments() {
    if (!currentProvince) return;
    const comments = getComments(currentProvince);
    const list = document.getElementById("comments-list");
    const liked = JSON.parse(localStorage.getItem("manitrip_liked") || "[]");

    if (comments.length === 0) {
        list.innerHTML = `
            <div class="comments-empty">
                <div class="comments-empty-icon">💬</div>
                <h4>Henüz öneri yok</h4>
                <p>Bu ilde bildiğin tartışmalık bir mekan varsa ilk öneren sen ol!</p>
            </div>
        `;
        return;
    }

    let html = "";
    for (const c of comments) {
        const dateStr = formatDate(c.date);
        const initial = c.name.charAt(0).toUpperCase();
        const stars = "⭐".repeat(c.rating);
        const isLiked = liked.includes(c.id);

        html += `
            <div class="comment-card">
                <div class="comment-card-header">
                    <div class="comment-user">
                        <div class="comment-avatar">${initial}</div>
                        <div class="comment-user-info">
                            <span class="comment-username">${escapeHtml(c.name)}</span>
                            <span class="comment-date">${dateStr}</span>
                        </div>
                    </div>
                    <button class="comment-delete" onclick="deleteComment('${c.id}')" title="Sil">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                    </button>
                </div>
                <div class="comment-cafe-info">
                    <div>
                        <div class="comment-cafe-name">${escapeHtml(c.cafe)}</div>
                        ${c.address ? `<div class="comment-cafe-address">${escapeHtml(c.address)}</div>` : ''}
                    </div>
                    <div class="comment-cafe-meta">
                        <span class="comment-cafe-rating">${stars}</span>
                        <span class="comment-cafe-vibe">${escapeHtml(c.vibe)}</span>
                    </div>
                </div>
                <p class="comment-text">${escapeHtml(c.text)}</p>
                <div class="comment-likes">
                    <button class="comment-like-btn ${isLiked ? 'liked' : ''}" onclick="likeComment('${c.id}')">
                        <svg viewBox="0 0 24 24" fill="${isLiked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                        ${c.likes > 0 ? c.likes : ''} Beğen
                    </button>
                </div>
            </div>
        `;
    }

    list.innerHTML = html;
}

function formatDate(isoStr) {
    const d = new Date(isoStr);
    const now = new Date();
    const diff = now - d;
    const mins = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (mins < 1) return "Az önce";
    if (mins < 60) return `${mins} dk önce`;
    if (hours < 24) return `${hours} saat önce`;
    if (days < 7) return `${days} gün önce`;

    return d.toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
}

function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
}

function showToast(message) {
    const existing = document.querySelector(".toast");
    if (existing) existing.remove();

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--accent);
        color: white;
        padding: 12px 28px;
        border-radius: 30px;
        font-size: 14px;
        font-weight: 500;
        z-index: 9999;
        animation: toastIn 0.3s ease, toastOut 0.3s ease 2s forwards;
        box-shadow: 0 8px 24px rgba(233, 69, 96, 0.3);
    `;

    const style = document.createElement("style");
    style.textContent = `
        @keyframes toastIn { from { opacity: 0; transform: translateX(-50%) translateY(20px); } to { opacity: 1; transform: translateX(-50%) translateY(0); } }
        @keyframes toastOut { from { opacity: 1; } to { opacity: 0; transform: translateX(-50%) translateY(20px); } }
    `;
    document.head.appendChild(style);

    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}

// ===== ADVICE FORUM SYSTEM =====

var CATEGORY_LABELS = {
    genel: "Genel Tavsiye",
    kiskanclik: "Kıskançlık",
    iletisim: "İletişim Sorunları",
    guven: "Güven Problemleri",
    uzaktan: "Uzak İlişki",
    barişma: "Barışma Yolları",
    diger: "Diğer"
};

function getAdviceTopics() {
    return JSON.parse(localStorage.getItem("manitrip_advice") || "[]");
}

function saveAdviceTopics(topics) {
    localStorage.setItem("manitrip_advice", JSON.stringify(topics));
    if (typeof firebaseReady !== "undefined" && firebaseReady) {
        firebase.database().ref("advice_topics").set(topics);
    }
}

var isSubmitting = false;

function syncFromFirebase() {
    if (typeof firebaseReady === "undefined" || !firebaseReady) return;

    firebase.database().ref("advice_topics").on("value", function(snapshot) {
        if (isSubmitting) return;
        var data = snapshot.val();
        if (data) {
            var topics = Array.isArray(data) ? data : Object.values(data);
            localStorage.setItem("manitrip_advice", JSON.stringify(topics));
            renderAdviceTopics();
        }
    });
}

function submitAdvice(e) {
    e.preventDefault();

    var nick = document.getElementById("advice-nick").value.trim();
    var topic = document.getElementById("advice-topic").value.trim();
    var category = document.getElementById("advice-category").value;
    var detail = document.getElementById("advice-detail").value.trim();

    if (!nick || !topic || !detail) return;

    var entry = {
        id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
        nick: nick,
        topic: topic,
        category: category,
        detail: detail,
        date: new Date().toISOString(),
        replies: []
    };

    var topics = getAdviceTopics();
    topics.unshift(entry);
    saveAdviceTopics(topics);

    document.getElementById("advice-form").reset();
    renderAdviceTopics();
    showToast("Konunuz paylaşıldı!");
}

// ===== @SORUNSAL BOT =====

var SORUNSAL_RESPONSES = {
    genel: [
        "Kardeşim bu ilişkide iki tarafın da ego'su Everest kadar yüksek. Biriniz inecek mi yoksa ikiziniz de o dağın tepesinde mi donacaksınız? İnin lan aşağı.",
        "Bunu okudum bir daha okudum, üçüncüde anladım: ikiniz de birbirinizden betersiniz. Niye tartışıyorsunuz amk, aynı kafa zaten.",
        "Sana tavsiye: SUS. Evet öyle. 24 saat sus, bak bakalım ne oluyor. Konuşarak çözemediysen kapa o çeneni bir.",
        "Abi derdini anlattın da çözüm mü istiyorsun onay mı? Çözüm istiyorsan sert konuşacağım, hazır ol.",
        "Bu tartışmayı kazanmak mı istiyorsun mutlu mu olmak? İkisi aynı anda olmuyor, birini seç be kardeşim.",
        "Tamam dinledim. Şimdi telefonu kapat yüz yüze konuş. Emoji ile tartışma olmaz amk, bu WhatsApp mı mahkeme mi?",
        "Valla bu anlattıkların benim ilkokuldaki kavgalarıma benziyor. Büyüyün artık lan, ergenlik bitti.",
        "İkinize de lazım olan: bir bardak su, derin nefes ve 'ben de hata yapıyor olabilirim' cümlesi. Dene bak mucize gibi.",
        "Haklısın belki. Ama haklı olmak ilişkiyi kurtarmıyor. Bazen haksız olup özür dilemek daha yürekli iştir.",
        "Bu sorunu çözmek istiyorsan önce şunu kabul et: Senin de bu tartışmadaki payın en az %50. Melek misin sanki?",
        "Gel buraya otur, sana bir şey söyleyeyim: İlişkide haklı olan değil, ilişkiyi seven kazanır. Egonu ye bitir.",
        "Off yine mi bu muhabbet? Sıkıldım sizden. Git bir dondurma ye, sakinleş, sonra düşün.",
        "Sana acı bir gerçek: Karşındaki insan seni kızdırıyorsa, sana o kadar etki ediyorsa, demek ki önemsiyor. Önemsemese siklmezdi bile.",
        "Derdini sikeyim ama yine de dinliyorum. Çözüm basit: otur karşısına, göz göze bak, 'seni seviyorum ama şu an sinirden patlıyorum' de. Bitti."
    ],
    kiskanclik: [
        "Kıskançlık sevgiden değil güvensizlikten gelir. Sorunu karşında değil aynada ara be amına koyayım.",
        "Telefonunu kontrol ediyorsan ilişki değil istihbarat teşkilatı kurmuşsun. FBI mısın lan sen?",
        "Her beğendiği fotoğrafa trip atıyorsan, sorun onda değil sende. Git kendine güven kas, sonra gel.",
        "Kıskanıyorsun çünkü kendi değerini bilmiyorsun. Karşındaki seni SEÇMİŞ. Bunu anla artık salak mısın?",
        "Bir insanı kafese koyarsan kaçmak ister, serbest bırakırsan yanında kalır. Gevşe biraz be abi.",
        "Kıskançlığın ilacı yok ama reçetesi var: KENDİNE GÜVEN. Git spor yap, kitap oku, hobi edin. Boş kaldıkça kafayı yersin.",
        "Instagram'da kimi takip ediyor diye araştırıyorsan, sana ilişki değil terapi lazım. Ciddiyim."
    ],
    iletisim: [
        "Mesaj atarak tartışan insan, mektupla boks yapmaya çalışan adam gibi. Aç telefonunu ARA lan.",
        "'Bir şeyim yok' deyip trip atan mısın? Bravo, ilişki yıkmanın en etkili yolu bu. Alkış.",
        "'Anla beni' diyorsun ama açıklamıyorsun. Karşındaki falcı değil be amk. AÇ AĞZINI KONUŞ.",
        "'Tamam' yazıyorsun mesajda. O 'tamam'ın arkasında 47 farklı anlam var, karşındaki hangisini anlasın? Net ol.",
        "Ses tonundan anlasın diyorsun. Kardeşim burası telepati merkezi değil, mesajda ses tonu mu olur? ARA.",
        "İletişim dediğin iki taraflıdır. Sen konuşurken o dinleyecek, o konuşurken sen dinleyeceksin. İkiniz de aynı anda bağırmayı bırakın.",
        "'Neyse boşver' diyen taraf mısın? O cümle ilişkide atom bombası gibi. Boşverme, KONUŞ."
    ],
    guven: [
        "Güven bir kere kırılınca yapıştırıcıyla yapıştıramazsın. Ya yeniden inşa edeceksin ya da siktir git. Ortası yok.",
        "Sürekli hesap soran biri misin? O zaman sorun karşında değil AYNADA. Kendine bak.",
        "Güvenmiyorsan neden berabersin? Kendine işkence mi ediyorsun? Mazoşist misin?",
        "Güven inşa etmek istiyorsan önce kendi yalanlarını bırak. 'Arkadaşlarlaydım' deyip başka yere giden sen değil misin?",
        "Bir kere yalan söyleyen bin kere söyler. Ama herkes ikinci şansı hak eder. Sadece BİR ikinci şans. Üçüncü yok.",
        "Güven sorunu yaşıyorsanız, ikiniz de oturup açık açık konuşacaksınız. Tablo neyi gösteriyor? Yalan var mı yok mu? Net olun."
    ],
    uzaktan: [
        "Uzak ilişki mi? Vay amk, sado-mazoşist misiniz? Şaka şaka, ama ciddi emek ister. Günde en az 1 saat görüntülü konuş, yoksa biter.",
        "Uzak ilişkide güven %200 lazım. %199 olsa bile çöker. Ya güveneceksin ya da kendini yiyeceksin.",
        "Mesafe değil mesaj öldürür ilişkiyi. Her gün 'günaydın' at, 'iyi geceler' at, arada 'seni özledim' at. Zor değil amk.",
        "Uzak ilişkideysen ve güvenmiyorsan, bırak birbirinizi. Hem kendinize hem karşınızdakine eziyet etmeyin.",
        "Uzak ilişkinin tek ilacı: BİTİŞ TARİHİ. Ne zaman bir araya geleceksiniz? Planınız yoksa hayal kuruyorsunuz."
    ],
    barişma: [
        "Barışmak istiyorsan 'ama' kelimesini sözlüğünden sil. 'Özür dilerim AMA...' özür değil, bahanedir. Direkt 'özür dilerim' de, nokta.",
        "Git al bir çiçek bir de çikolata, kapısına dik. Basit işleri zorlaştırmayın amk, roket bilimi değil bu.",
        "Ego'nu yutup 'özür dilerim' demek ölüm değil. Ama ego ile devam etmek ilişkinin ölümü. Seç.",
        "Barışmak için ilk adımı atan zayıf değildir, yüreklidir. Git at o mesajı, 'konuşalım mı?' de. Basit.",
        "3 gündür konuşmuyorsunuz ve ikiziniz de bekliyorsunuz. Neyi bekliyorsunuz amk? Birleşmiş Milletler mi araya girecek? Aç telefonu ARA.",
        "Barışacaksan düzgün barış. 'Neyse ya gel barışalım' değil. Otur, konuş, nerede hata yaptık, nasıl düzeltiriz. Adam gibi."
    ],
    diger: [
        "Ne diyeyim sana? Her ilişkinin bir son kullanma tarihi yok, ama bakmazsan bozulur. Bakım yap ilişkine.",
        "Sevmek kolay, sevgiyi sürdürmek zor. Zor olan şeyler için çaba gösterilir. Göstermiyorsan sevmiyorsundur.",
        "Sana son bir tavsiye: Mükemmel ilişki diye bir şey yok. Ama mükemmel ÇABA var. İkiziniz de çabalayın.",
        "Herkes mutlu çift fotoğrafı paylaşıyor, sen de özeniyor musun? O fotoğrafların arkasında da kavga var kardeşim. Normal bu.",
        "İlişki iki kişiliktir. Sen tek başına kurtaramazsın. Karşı taraf da istemiyorsa, bırak gitsin. Kendine acıma."
    ]
};

function generateSorunsalResponse(topicCategory, topicText) {
    var pool = SORUNSAL_RESPONSES[topicCategory] || SORUNSAL_RESPONSES.genel;
    var allPool = pool.concat(SORUNSAL_RESPONSES.genel);

    var keywords = {
        kiskanclik: ["kıskan", "takip", "beğen", "instagram", "telefon", "kontrol", "stalklıyor"],
        iletisim: ["mesaj", "cevap", "konuş", "anlamıyor", "dinlemiyor", "yazm", "aramiyor", "sessiz"],
        guven: ["güven", "yalan", "aldatma", "ihanet", "şüphe", "gizli"],
        barişma: ["barış", "özür", "küs", "konuşmuyoruz", "ayrıl", "dön", "son şans"]
    };

    var lowerText = topicText.toLowerCase();
    for (var cat in keywords) {
        for (var k = 0; k < keywords[cat].length; k++) {
            if (lowerText.indexOf(keywords[cat][k]) !== -1 && SORUNSAL_RESPONSES[cat]) {
                allPool = allPool.concat(SORUNSAL_RESPONSES[cat]);
                break;
            }
        }
    }

    return allPool[Math.floor(Math.random() * allPool.length)];
}

function handleReplySubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    var form = e.target;
    var topicId = form.getAttribute("data-topic-id");
    if (!topicId) return;
    submitReply(topicId, form);
}

function submitReply(topicId, form) {
    var nameInput = form ? form.querySelector('[name="reply-name"]') : null;
    var textInput = form ? form.querySelector('[name="reply-text"]') : null;
    if (!nameInput || !textInput) return;

    var name = nameInput.value.trim();
    var text = textInput.value.trim();
    if (!name || !text) return;

    var topics = getAdviceTopics();
    var topic = topics.find(function(t) { return t.id === topicId; });
    if (!topic) return;

    topic.replies.push({
        id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
        name: name,
        text: text,
        date: new Date().toISOString(),
        isBot: false
    });

    var hasSorunsal = text.toLowerCase().indexOf("@sorunsal") !== -1;
    if (hasSorunsal) {
        var botResponse = generateSorunsalResponse(topic.category, topic.detail + " " + text);
        topic.replies.push({
            id: "bot_" + Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
            name: "Sorunsal Bot",
            text: botResponse,
            date: new Date().toISOString(),
            isBot: true
        });
    }

    isSubmitting = true;
    saveAdviceTopics(topics);
    nameInput.value = "";
    textInput.value = "";
    renderAdviceTopics();

    setTimeout(function() {
        var repliesSection = document.getElementById("replies-" + topicId);
        if (repliesSection) repliesSection.classList.add("open");
        var toggleBtn = document.getElementById("toggle-" + topicId);
        if (toggleBtn) toggleBtn.classList.add("open");
        isSubmitting = false;
    }, 100);

    showToast(hasSorunsal ? "Sorunsal sana cevap verdi! 🔥" : "Yanıtınız eklendi!");
}

function toggleReplies(topicId) {
    var section = document.getElementById("replies-" + topicId);
    var btn = document.getElementById("toggle-" + topicId);
    if (section && btn) {
        section.classList.toggle("open");
        btn.classList.toggle("open");
    }
}

function deleteAdviceTopic(topicId) {
    var topics = getAdviceTopics().filter(function(t) { return t.id !== topicId; });
    saveAdviceTopics(topics);
    renderAdviceTopics();
}

function renderAdviceTopics() {
    var topics = getAdviceTopics();
    var filterEl = document.getElementById("advice-category-filter");
    var filter = filterEl ? filterEl.value : "all";

    var filtered = topics;
    if (filter !== "all") {
        filtered = topics.filter(function(t) { return t.category === filter; });
    }

    var countEl = document.getElementById("advice-topics-count");
    if (countEl) countEl.textContent = filtered.length + " konu";

    var list = document.getElementById("advice-topics-list");
    if (!list) return;

    if (filtered.length === 0) {
        list.innerHTML =
            '<div class="advice-empty">' +
                '<div class="advice-empty-icon">💭</div>' +
                '<h4>Henüz konu yok</h4>' +
                '<p>İlk konuyu açan sen ol, topluluk sana yardım etsin!</p>' +
            '</div>';
        return;
    }

    var html = "";
    for (var i = 0; i < filtered.length; i++) {
        var t = filtered[i];
        var initial = t.nick.charAt(0).toUpperCase();
        var dateStr = formatDate(t.date);
        var catLabel = CATEGORY_LABELS[t.category] || t.category;
        var replyCount = t.replies ? t.replies.length : 0;

        html += '<div class="advice-topic-card">';
        html += '<div class="advice-topic-main" onclick="toggleReplies(\'' + t.id + '\')">';
        html += '<div class="advice-topic-top">';
        html += '<div class="advice-topic-title">' + escapeHtml(t.topic) + '</div>';
        html += '<span class="advice-topic-category">' + escapeHtml(catLabel) + '</span>';
        html += '</div>';
        html += '<div class="advice-topic-body">' + escapeHtml(t.detail) + '</div>';
        html += '<div class="advice-topic-meta">';
        html += '<div class="advice-topic-author">';
        html += '<div class="advice-topic-avatar">' + initial + '</div>';
        html += '<span>' + escapeHtml(t.nick) + ' &middot; ' + dateStr + '</span>';
        html += '</div>';
        html += '<div class="advice-topic-stats">';
        html += '<span class="advice-topic-stat">';
        html += '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>';
        html += replyCount + ' yanıt';
        html += '</span>';
        html += '</div>';
        html += '</div>';
        html += '</div>';

        html += '<button class="advice-toggle-replies" id="toggle-' + t.id + '" onclick="toggleReplies(\'' + t.id + '\')">';
        html += '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>';
        html += replyCount > 0 ? (replyCount + ' yanıtı gör') : 'Yanıt yaz';
        html += '</button>';

        html += '<div class="advice-replies-section" id="replies-' + t.id + '">';

        if (replyCount > 0) {
            html += '<div class="advice-replies-list">';
            for (var j = 0; j < t.replies.length; j++) {
                var r = t.replies[j];
                var isBot = r.isBot === true;
                var rInitial = isBot ? '🔥' : r.name.charAt(0).toUpperCase();
                var botClass = isBot ? ' bot-reply' : '';
                html += '<div class="advice-reply' + botClass + '">';
                html += '<div class="advice-reply-avatar' + (isBot ? ' bot-avatar' : '') + '">' + rInitial + '</div>';
                html += '<div class="advice-reply-content">';
                html += '<div class="advice-reply-header">';
                html += '<span class="advice-reply-name' + (isBot ? ' bot-name' : '') + '">' + escapeHtml(r.name) + (isBot ? ' 🤖' : '') + '</span>';
                html += '<span class="advice-reply-date">' + formatDate(r.date) + '</span>';
                html += '</div>';
                html += '<p class="advice-reply-text' + (isBot ? ' bot-text' : '') + '">' + escapeHtml(r.text) + '</p>';
                html += '</div>';
                html += '</div>';
            }
            html += '</div>';
        }

        html += '<form class="advice-reply-form" data-topic-id="' + t.id + '" onsubmit="handleReplySubmit(event)">';
        html += '<input type="text" name="reply-name" placeholder="Adın" maxlength="25" required>';
        html += '<textarea name="reply-text" placeholder="Tavsiyeni yaz... (@sorunsal yaz, agresif tavsiye alsın!)" maxlength="500" rows="1" required></textarea>';
        html += '<button type="submit">Gönder</button>';
        html += '</form>';

        html += '</div>';
        html += '</div>';
    }

    list.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", function() {
    init();
    renderAdviceTopics();
    syncFromFirebase();
});
