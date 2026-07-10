// Anaqah Clothing Store - Main Logic & Database

// 1. Database of Products
const PRODUCTS = [
    {
        id: 1,
        category: 'men',
        price: 249,
        oldPrice: 320,
        badge: 'New / جديد',
        images: ['https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=600&auto=format&fit=crop'],
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['#000000', '#1a365d', '#718096'],
        title: {
            en: 'Classic Tailored Navy Suit',
            ar: 'بدلة كلاسيكية كحلي مفصلة'
        },
        description: {
            en: 'Crafted from premium Italian wool blend, this slim-fit navy suit offers outstanding breathability and elegance for formal occasions.',
            ar: 'مصنوعة من مزيج الصوف الإيطالي الفاخر، توفر هذه البدلة الكحلية ذات المقاس الضيق تهوية وأناقة استثنائية للمناسبات الرسمية.'
        }
    },
    {
        id: 2,
        category: 'women',
        price: 189,
        oldPrice: null,
        badge: 'Best Seller / الأكثر مبيعاً',
        images: ['https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop'],
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['#c5a880', '#e53e3e', '#000000'],
        title: {
            en: 'Minimalist Silk Wrap Dress',
            ar: 'فستان حريري ملفوف وبسيط'
        },
        description: {
            en: 'An elegant wrap dress made from 100% pure silk. Features a subtle side tie and a flowing asymmetric hemline.',
            ar: 'فستان ملفوف أنيق مصنوع من الحرير الخالص 100%. يتميز برباط جانبي ناعم وحافة منسدلة غير متماثلة.'
        }
    },
    {
        id: 3,
        category: 'men',
        price: 155,
        oldPrice: 199,
        badge: 'Sale / خصم',
        images: ['https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=600&auto=format&fit=crop'],
        sizes: ['M', 'L', 'XL', 'XXL'],
        colors: ['#744210', '#1a202c'],
        title: {
            en: 'Vintage Leather Bomber Jacket',
            ar: 'جاكيت بومبر جلدي كلاسيكي'
        },
        description: {
            en: 'Genuine top-grain leather bomber jacket featuring ribbed collar, cuffs, and hem. Warm, durable, and timeless.',
            ar: 'جاكيت بومبر من الجلد الطبيعي الفاخر يتميز بياقة وأساور وحافة مضلعة. دافئ، متين، ولا تنتهي موضته أبداً.'
        }
    },
    {
        id: 4,
        category: 'accessories',
        price: 340,
        oldPrice: null,
        badge: 'Exclusive / حصري',
        images: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600&auto=format&fit=crop'],
        sizes: ['One Size'],
        colors: ['#744210', '#000000', '#d69e2e'],
        title: {
            en: 'Structured Saffiano Leather Bag',
            ar: 'حقيبة يد من جلد السافيانو الفاخر'
        },
        description: {
            en: 'A structured handbag in scratch-resistant Saffiano leather. Designed with dual top handles and a detachable shoulder strap.',
            ar: 'حقيبة يد متماسكة مصنوعة من جلد السافيانو المقاوم للخدش. مصممة بمقبضين علويين وحزام كتف قابل للفصل.'
        }
    },
    {
        id: 5,
        category: 'accessories',
        price: 450,
        oldPrice: 580,
        badge: 'Premium / فاخر',
        images: ['https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=600&auto=format&fit=crop'],
        sizes: ['Adjustable'],
        colors: ['#ecc94b', '#e2e8f0'],
        title: {
            en: 'Chrono Gold Premium Watch',
            ar: 'ساعة كرونوغراف ذهبية فاخرة'
        },
        description: {
            en: 'Timeless luxury chronograph watch. Water-resistant up to 50m, Japanese quartz movement, and double-dome sapphire glass.',
            ar: 'ساعة كرونوغراف فاخرة وتاريخية. مقاومة للماء حتى عمق 50 متراً، حركة كوارتز يابانية، وزجاج ياقوتي مزدوج القبة.'
        }
    },
    {
        id: 6,
        category: 'women',
        price: 195,
        oldPrice: null,
        badge: 'New / جديد',
        images: ['https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop'],
        sizes: ['S', 'M', 'L'],
        colors: ['#cbd5e0', '#2d3748'],
        title: {
            en: 'Wool Blend Double-Breasted Coat',
            ar: 'معطف صوف بأزرار مزدوجة'
        },
        description: {
            en: 'Elegant longline coat in a soft wool blend, featuring notched lapels, side pockets, and a neat double-breasted button closure.',
            ar: 'معطف طويل أنيق من مزيج الصوف الناعم، يتميز بياقة عريضة مدببة، جيوب جانبية، وإغلاق مرتب بأزرار مزدوجة.'
        }
    },
    {
        id: 7,
        category: 'men',
        price: 120,
        oldPrice: 150,
        badge: 'Sale / خصم',
        images: ['https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=600&auto=format&fit=crop'],
        sizes: ['40', '41', '42', '43', '44'],
        colors: ['#744210', '#000000'],
        title: {
            en: 'Suede Chelsea Boots',
            ar: 'حذاء تشيلسي مصنوع من الجلد المدبوغ'
        },
        description: {
            en: 'Handcrafted suede Chelsea boots with elastic side panels and pull tabs. Features a cushioned footbed for maximum daily comfort.',
            ar: 'حذاء تشيلسي مصنوع يدوياً من الجلد المدبوغ بمرونة على الجوانب. يحتوي على وسادة قدم مريحة لتوفير أقصى درجات الراحة اليومية.'
        }
    },
    {
        id: 8,
        category: 'accessories',
        price: 85,
        oldPrice: null,
        badge: 'Essential / أساسي',
        images: ['https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=600&auto=format&fit=crop'],
        sizes: ['Standard'],
        colors: ['#000000', '#744210'],
        title: {
            en: 'Acetate Round Sunglasses',
            ar: 'نظارات شمسية مستديرة من الأسيتات'
        },
        description: {
            en: 'Premium acetate frames with 100% UVA/UVB protection lenses. Sleek, minimal design suitable for all face shapes.',
            ar: 'إطارات من الأسيتات الفاخر بعدسات توفر حماية 100% من الأشعة فوق البنفسجية UVA/UVB. تصميم أنيق وبسيط يناسب جميع أشكال الوجوه.'
        }
    }
];

// 2. Translation Dictionaries
const TRANSLATIONS = {
    en: {
        logoName: 'Anaqah<span>.</span>',
        home: 'Home',
        shop: 'Shop',
        about: 'About',
        contact: 'Contact',
        heroSub1: 'Autumn/Winter Collection 2026',
        heroTitle1: 'Elegance Redefined',
        heroDesc1: 'Discover curated clothing that blends timeless high-fashion aesthetics with everyday premium comfort.',
        heroSub2: 'Exclusive Collaborations',
        heroTitle2: 'The Craft of Luxury',
        heroDesc2: 'Every piece is crafted meticulously using fine-grade materials and exquisite European patterns.',
        shopNow: 'Shop Now',
        sectionSub: 'Our Curated Collection',
        sectionTitle: 'Featured Arrivals',
        searchPlaceholder: 'Search products...',
        catAll: 'All',
        catMen: 'Men',
        catWomen: 'Women',
        catAcc: 'Accessories',
        currency: 'USD',
        cartTitle: 'Shopping Bag',
        cartEmpty: 'Your shopping bag is empty',
        subtotal: 'Subtotal',
        checkout: 'Proceed to Checkout',
        sizeLabel: 'Size',
        colorLabel: 'Color',
        qtyLabel: 'Quantity',
        addCart: 'Add to Bag',
        detailsTitle: 'Product Details',
        checkoutTitle: 'Billing & Delivery Info',
        fullName: 'Full Name',
        phone: 'Phone Number',
        address: 'Shipping Address',
        city: 'City',
        orderBtn: 'Place Order',
        successMsg: 'Thank you! Your order has been placed successfully.',
        orderNo: 'Order Number',
        toastAdded: 'Added to bag!',
        toastRemoved: 'Removed from bag!',
        toastEmptyCart: 'Your cart is empty!',
        toastFillFields: 'Please fill all required fields.'
    },
    ar: {
        logoName: 'أناقة<span>.</span>',
        home: 'الرئيسية',
        shop: 'المتجر',
        about: 'من نحن',
        contact: 'اتصل بنا',
        heroSub1: 'تشكيلة خريف وشتاء 2026',
        heroTitle1: 'مفهوم جديد للأناقة',
        heroDesc1: 'اكتشف الملابس المختارة بعناية والتي تمزج بين جماليات الموضة الكلاسيكية والراحة اليومية الفائقة.',
        heroSub2: 'تعاونات حصرية',
        heroTitle2: 'حرفة الفخامة والجمال',
        heroDesc2: 'تمت حياكة وتفصيل كل قطعة بدقة متناهية باستخدام خامات صوف وحرير أوروبية بالكامل.',
        shopNow: 'تسوق الآن',
        sectionSub: 'مجموعتنا المختارة بعناية',
        sectionTitle: 'أحدث الموديلات',
        searchPlaceholder: 'ابحث عن المنتجات...',
        catAll: 'الكل',
        catMen: 'رجال',
        catWomen: 'نساء',
        catAcc: 'إكسسوارات',
        currency: 'ر.س',
        cartTitle: 'سلة المشتريات',
        cartEmpty: 'سلة المشتريات الخاصة بك فارغة',
        subtotal: 'المجموع الفرعي',
        checkout: 'إتمام عملية الشراء',
        sizeLabel: 'المقاس',
        colorLabel: 'اللون',
        qtyLabel: 'الكمية',
        addCart: 'إضافة للسلة',
        detailsTitle: 'تفاصيل المنتج',
        checkoutTitle: 'معلومات الشحن والتوصيل',
        fullName: 'الاسم الكامل',
        phone: 'رقم الهاتف',
        address: 'عنوان الشحن',
        city: 'المدينة',
        orderBtn: 'تأكيد الطلب',
        successMsg: 'شكراً لك! تم تقديم طلبك بنجاح وسنتواصل معك قريباً.',
        orderNo: 'رقم الطلب',
        toastAdded: 'تمت الإضافة للسلة!',
        toastRemoved: 'تم حذف المنتج من السلة!',
        toastEmptyCart: 'السلة فارغة حالياً!',
        toastFillFields: 'يرجى ملء جميع الحقول المطلوبة.'
    }
};

// 3. Application State Variables
let currentLang = localStorage.getItem('anaqah_lang') || 'ar'; // Default to Arabic
let cart = JSON.parse(localStorage.getItem('anaqah_cart')) || [];
let activeCategory = 'all';
let searchQuery = '';
let selectedProduct = null;
let currentHeroSlide = 0;

// Dynamic Elements Selection
const elements = {
    body: document.body,
    langBtn: document.getElementById('lang-btn'),
    cartBtn: document.getElementById('cart-btn'),
    cartDrawer: document.getElementById('cart-drawer'),
    closeCartBtn: document.getElementById('close-cart'),
    cartOverlay: document.getElementById('cart-overlay'),
    productsGrid: document.getElementById('products-grid'),
    cartCount: document.getElementById('cart-count'),
    cartItems: document.getElementById('cart-items'),
    cartTotal: document.getElementById('cart-total'),
    checkoutBtn: document.getElementById('checkout-btn'),
    
    // Product Detail Modal
    productModal: document.getElementById('product-modal'),
    closeProductModal: document.getElementById('close-product-modal'),
    productModalContent: document.getElementById('product-modal-content'),
    
    // Checkout Modal
    checkoutModal: document.getElementById('checkout-modal'),
    closeCheckoutModal: document.getElementById('close-checkout-modal'),
    checkoutForm: document.getElementById('checkout-form'),
    
    // Toast Container
    toastContainer: document.getElementById('toast-container'),
    
    // Search
    searchInput: document.getElementById('search-input'),
    
    // Category Tabs
    filterTabs: document.getElementById('filter-tabs')
};

// 4. Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang);
    setupEventListeners();
    setupHeroSlider();
    renderProducts();
    updateCartUI();
    
    // Header Scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

// 5. Setup Event Listeners
function setupEventListeners() {
    // Language toggle
    elements.langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        localStorage.setItem('anaqah_lang', currentLang);
        applyLanguage(currentLang);
        renderProducts();
        updateCartUI();
    });

    // Cart opening and closing
    elements.cartBtn.addEventListener('click', openCart);
    elements.closeCartBtn.addEventListener('click', closeCart);
    elements.cartOverlay.addEventListener('click', () => {
        closeCart();
        closeProductModal();
        closeCheckoutModal();
    });

    // Modal Close
    elements.closeProductModal.addEventListener('click', closeProductModal);
    elements.closeCheckoutModal.addEventListener('click', closeCheckoutModal);

    // Search trigger
    elements.searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderProducts();
    });

    // Category filtering
    elements.filterTabs.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-tab')) {
            document.querySelectorAll('.filter-tab').forEach(tab => tab.classList.remove('active'));
            e.target.classList.add('active');
            activeCategory = e.target.getAttribute('data-category');
            renderProducts();
        }
    });

    // Checkout Click
    elements.checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            showToast(TRANSLATIONS[currentLang].toastEmptyCart);
            return;
        }
        closeCart();
        openCheckoutModal();
    });

    // Submit Order
    elements.checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('check-name').value;
        const phone = document.getElementById('check-phone').value;
        const address = document.getElementById('check-address').value;
        const city = document.getElementById('check-city').value;
        
        if (!name || !phone || !address || !city) {
            showToast(TRANSLATIONS[currentLang].toastFillFields);
            return;
        }
        
        // Display Success State in Modal
        const orderNo = Math.floor(100000 + Math.random() * 900000);
        elements.checkoutForm.innerHTML = `
            <div class="order-success-msg">
                <div class="success-icon">&#x2713;</div>
                <h3>${TRANSLATIONS[currentLang].successMsg}</h3>
                <p style="margin-top: 1rem; font-weight: bold; color: var(--accent-color);">
                    ${TRANSLATIONS[currentLang].orderNo}: #${orderNo}
                </p>
                <button type="button" class="btn-luxury" style="margin-top: 2rem;" onclick="location.reload()">
                    OK
                </button>
            </div>
        `;
        
        // Clear Cart
        cart = [];
        localStorage.setItem('anaqah_cart', JSON.stringify(cart));
        updateCartUI();
    });
}

// 6. Language Translation Layer
function applyLanguage(lang) {
    elements.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    elements.body.setAttribute('lang', lang);
    elements.langBtn.textContent = lang === 'en' ? 'العربية' : 'EN';
    
    // Select and translate elements using keys
    document.querySelectorAll('[data-trans]').forEach(elem => {
        const key = elem.getAttribute('data-trans');
        if (TRANSLATIONS[lang][key]) {
            elem.innerHTML = TRANSLATIONS[lang][key];
        }
    });

    // Translate Placeholders
    if (elements.searchInput) {
        elements.searchInput.placeholder = TRANSLATIONS[lang].searchPlaceholder;
    }

    // Set slider backgrounds and texts dynamically
    updateHeroSliderTexts();
}

// 7. Hero Slider functionality
function setupHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.slider-dot');
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentHeroSlide = index;
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });

    // Auto rotate every 7 seconds
    setInterval(() => {
        let nextIndex = (currentHeroSlide + 1) % slides.length;
        showSlide(nextIndex);
    }, 7000);
}

function updateHeroSliderTexts() {
    const slides = document.querySelectorAll('.hero-slide');
    slides.forEach((slide, idx) => {
        const id = idx + 1;
        const sub = slide.querySelector('.hero-subtitle');
        const title = slide.querySelector('.hero-title');
        const desc = slide.querySelector('.hero-desc');
        const btn = slide.querySelector('.btn-luxury');
        
        if (sub) sub.textContent = TRANSLATIONS[currentLang][`heroSub${id}`];
        if (title) title.textContent = TRANSLATIONS[currentLang][`heroTitle${id}`];
        if (desc) desc.textContent = TRANSLATIONS[currentLang][`heroDesc${id}`];
        if (btn) btn.textContent = TRANSLATIONS[currentLang].shopNow;
    });
}

// 8. Render Catalog Products
function renderProducts() {
    const filtered = PRODUCTS.filter(prod => {
        const matchCat = activeCategory === 'all' || prod.category === activeCategory;
        const titleText = prod.title[currentLang] || '';
        const matchSearch = titleText.toLowerCase().includes(searchQuery);
        return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
        elements.productsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
                ${currentLang === 'en' ? 'No products found matching your search.' : 'لم يتم العثور على منتجات مطابقة لبحثك.'}
            </div>
        `;
        return;
    }

    elements.productsGrid.innerHTML = filtered.map(prod => {
        const priceLabel = `${prod.price} ${TRANSLATIONS[currentLang].currency}`;
        const oldPriceLabel = prod.oldPrice ? `${prod.oldPrice} ${TRANSLATIONS[currentLang].currency}` : '';
        const title = prod.title[currentLang];
        
        return `
            <div class="product-card" data-aos="fade-up">
                <div class="product-img-wrapper">
                    <img class="product-img" src="${prod.images[0]}" alt="${title}" loading="lazy">
                    ${prod.badge ? `<div class="product-badge">${prod.badge}</div>` : ''}
                    <div class="product-card-actions">
                        <button class="card-action-btn" title="${currentLang === 'en' ? 'View Details' : 'عرض التفاصيل'}" onclick="openProductModal(${prod.id})">
                            &#x1F441;
                        </button>
                        <button class="card-action-btn" title="${currentLang === 'en' ? 'Add to Cart' : 'أضف للسلة'}" onclick="quickAddToCart(${prod.id})">
                            &#x1F6D2;
                        </button>
                    </div>
                </div>
                <div class="product-info">
                    <span class="product-category">${TRANSLATIONS[currentLang][`cat${prod.category.charAt(0).toUpperCase() + prod.category.slice(1, 3)}`]}</span>
                    <h3 class="product-title" onclick="openProductModal(${prod.id})" style="cursor:pointer">${title}</h3>
                    <div class="product-price-wrapper">
                        <span class="product-price">${priceLabel}</span>
                        ${prod.oldPrice ? `<span class="product-old-price">${oldPriceLabel}</span>` : ''}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// 9. Shopping Cart State Manager
function updateCartUI() {
    // Update Cart Badge Count
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    elements.cartCount.textContent = totalCount;
    elements.cartCount.style.display = totalCount > 0 ? 'flex' : 'none';

    if (cart.length === 0) {
        elements.cartItems.innerHTML = `
            <div class="cart-empty-state">
                <div class="cart-empty-icon">&#x1F6D2;</div>
                <p>${TRANSLATIONS[currentLang].cartEmpty}</p>
            </div>
        `;
        elements.cartTotal.textContent = `0 ${TRANSLATIONS[currentLang].currency}`;
        return;
    }

    // Render Items
    let subtotal = 0;
    elements.cartItems.innerHTML = cart.map((item, idx) => {
        const prod = PRODUCTS.find(p => p.id === item.productId);
        if (!prod) return '';
        const itemPriceTotal = prod.price * item.qty;
        subtotal += itemPriceTotal;
        const title = prod.title[currentLang];
        
        return `
            <div class="cart-item">
                <img class="cart-item-img" src="${prod.images[0]}" alt="${title}">
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${title}</h4>
                    <div class="cart-item-meta">
                        ${TRANSLATIONS[currentLang].sizeLabel}: ${item.size} | ${TRANSLATIONS[currentLang].colorLabel}: 
                        <span style="display:inline-block; width:12px; height:12px; border-radius:50%; background-color:${item.color}; vertical-align:middle; border:1px solid #ddd;"></span>
                    </div>
                    <div class="cart-item-price">${prod.price} ${TRANSLATIONS[currentLang].currency}</div>
                    <div class="cart-item-qty">
                        <button class="qty-btn" onclick="updateQty(${idx}, -1)">-</button>
                        <span class="qty-val">${item.qty}</span>
                        <button class="qty-btn" onclick="updateQty(${idx}, 1)">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeCartItem(${idx})">&#x1F5D1;</button>
            </div>
        `;
    }).join('');

    elements.cartTotal.textContent = `${subtotal} ${TRANSLATIONS[currentLang].currency}`;
}

function quickAddToCart(productId) {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod) return;
    
    // Choose default size and color
    addToCart(productId, prod.sizes[0], prod.colors[0], 1);
}

function addToCart(productId, size, color, qty) {
    const existing = cart.find(item => item.productId === productId && item.size === size && item.color === color);
    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({ productId, size, color, qty });
    }
    
    localStorage.setItem('anaqah_cart', JSON.stringify(cart));
    updateCartUI();
    showToast(TRANSLATIONS[currentLang].toastAdded);
}

window.updateQty = function(index, delta) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
        showToast(TRANSLATIONS[currentLang].toastRemoved);
    }
    localStorage.setItem('anaqah_cart', JSON.stringify(cart));
    updateCartUI();
};

window.removeCartItem = function(index) {
    cart.splice(index, 1);
    localStorage.setItem('anaqah_cart', JSON.stringify(cart));
    updateCartUI();
    showToast(TRANSLATIONS[currentLang].toastRemoved);
};

// 10. Drawer Control Animations
function openCart() {
    elements.cartDrawer.classList.add('open');
    elements.cartOverlay.classList.add('active');
}

function closeCart() {
    elements.cartDrawer.classList.remove('open');
    elements.cartOverlay.classList.remove('active');
}

// 11. Product Detail Modal Handling
window.openProductModal = function(id) {
    const prod = PRODUCTS.find(p => p.id === id);
    if (!prod) return;
    selectedProduct = prod;

    const title = prod.title[currentLang];
    const desc = prod.description[currentLang];
    const priceText = `${prod.price} ${TRANSLATIONS[currentLang].currency}`;
    const oldPriceText = prod.oldPrice ? `${prod.oldPrice} ${TRANSLATIONS[currentLang].currency}` : '';

    elements.productModalContent.innerHTML = `
        <div class="product-modal-gallery">
            <img class="product-modal-img" src="${prod.images[0]}" alt="${title}">
        </div>
        <div class="product-modal-details">
            <span class="detail-category">${TRANSLATIONS[currentLang][`cat${prod.category.charAt(0).toUpperCase() + prod.category.slice(1, 3)}`]}</span>
            <h2 class="detail-title">${title}</h2>
            <div class="detail-price-row">
                <span class="detail-price">${priceText}</span>
                ${prod.oldPrice ? `<span class="detail-old-price">${oldPriceText}</span>` : ''}
            </div>
            <p class="detail-desc">${desc}</p>
            
            <div class="option-group">
                <span class="option-label">${TRANSLATIONS[currentLang].sizeLabel}</span>
                <div class="size-selectors">
                    ${prod.sizes.map((s, idx) => `
                        <button class="size-btn ${idx === 0 ? 'active' : ''}" onclick="selectSize(this, '${s}')">${s}</button>
                    `).join('')}
                </div>
            </div>
            
            <div class="option-group">
                <span class="option-label">${TRANSLATIONS[currentLang].colorLabel}</span>
                <div class="color-selectors">
                    ${prod.colors.map((c, idx) => `
                        <button class="color-dot ${idx === 0 ? 'active' : ''}" style="background-color: ${c}" onclick="selectColor(this, '${c}')"></button>
                    `).join('')}
                </div>
            </div>
            
            <div class="detail-actions">
                <div class="detail-qty">
                    <button class="detail-qty-btn" onclick="updateModalQty(-1)">-</button>
                    <span class="detail-qty-val" id="modal-qty-val">1</span>
                    <button class="detail-qty-btn" onclick="updateModalQty(1)">+</button>
                </div>
                <button class="btn-add-cart-large" onclick="addModalProductToCart()">
                    ${TRANSLATIONS[currentLang].addCart}
                </button>
            </div>
        </div>
    `;

    // Reset default selections
    elements.productModalContent.dataset.selectedSize = prod.sizes[0];
    elements.productModalContent.dataset.selectedColor = prod.colors[0];
    elements.productModalContent.dataset.qty = 1;

    elements.productModal.classList.add('open');
    elements.cartOverlay.classList.add('active');
};

window.selectSize = function(btn, size) {
    const parent = btn.parentElement;
    parent.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    elements.productModalContent.dataset.selectedSize = size;
};

window.selectColor = function(dot, color) {
    const parent = dot.parentElement;
    parent.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
    elements.productModalContent.dataset.selectedColor = color;
};

window.updateModalQty = function(delta) {
    let currentQty = parseInt(elements.productModalContent.dataset.qty) || 1;
    currentQty = Math.max(1, currentQty + delta);
    elements.productModalContent.dataset.qty = currentQty;
    document.getElementById('modal-qty-val').textContent = currentQty;
};

window.addModalProductToCart = function() {
    if (!selectedProduct) return;
    const size = elements.productModalContent.dataset.selectedSize;
    const color = elements.productModalContent.dataset.selectedColor;
    const qty = parseInt(elements.productModalContent.dataset.qty) || 1;

    addToCart(selectedProduct.id, size, color, qty);
    closeProductModal();
    openCart();
};

function closeProductModal() {
    elements.productModal.classList.remove('open');
    if (!elements.cartDrawer.classList.contains('open') && !elements.checkoutModal.classList.contains('open')) {
        elements.cartOverlay.classList.remove('active');
    }
}

// 12. Checkout Modal Handling
function openCheckoutModal() {
    elements.checkoutModal.classList.add('open');
    elements.cartOverlay.classList.add('active');
}

function closeCheckoutModal() {
    elements.checkoutModal.classList.remove('open');
    if (!elements.cartDrawer.classList.contains('open') && !elements.productModal.classList.contains('open')) {
        elements.cartOverlay.classList.remove('active');
    }
}

// 13. Toast Notification Alert Box
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>&#x2713;</span> ${message}`;
    elements.toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'none'; // reset
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(50px)';
        toast.style.transition = 'all 0.4s ease';
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}
