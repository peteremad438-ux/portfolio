/* ══════════════════════════════════════════════════════
   BEHIND THE PROJECT — premium case-study modal engine
   Self-contained: data + renderer + interactions.
   Reads document.documentElement.lang ("ar" | "en") for copy,
   and reacts live to the existing #langToggle button.
══════════════════════════════════════════════════════ */
(function () {
  "use strict";

  /* ── 1. PROJECT DATA ───────────────────────────────── */
  const P = {
    "made-care": {
      accent: "#4f8bff",
      rgb: "79,139,255",
      icon: "fa-heart-pulse",
      hero: "WhatsApp Image 2026-06-04 at 9.51.42 PM.jpeg",
      gallery: ["WhatsApp Image 2026-06-04 at 9.51.42 PM.jpeg"],
      title: { en: "MADE CARE", ar: "ميد كير" },
      tag: {
        en: "Healthcare · Personal Project",
        ar: "رعاية صحية · مشروع شخصي",
      },
      summary: {
        en: "A professional healthcare website designed to showcase medical services, expert doctors, and patient care solutions.",
        ar: "موقع رعاية صحية احترافي يعرض الخدمات الطبية والأطباء المتخصصين وحلول رعاية المرضى.",
      },
      demo: "https://made-care-ten.vercel.app/",
      github: "https://github.com/peteremad438-ux/MADE-CARE.git",
      overview: {
        en: "MADE CARE is a healthcare brand website built to make a clinic feel trustworthy at first glance — clear service categories, doctor profiles, and a calm, clinical visual tone that still feels warm.",
        ar: "ميد كير موقع لعيادة طبية صُمم ليمنح ثقة فورية من أول نظرة، بعرض واضح للخدمات وملفات الأطباء، بهوية بصرية هادئة واحترافية لكنها دافئة.",
      },
      challenge: {
        en: "Healthcare visitors decide in seconds whether a clinic looks credible. The site needed to communicate expertise and safety without feeling cold or overly corporate, while staying fast on the low-end phones most patients browse from.",
        ar: "زائر الموقع الطبي يقرر في ثوانٍ هل العيادة موثوقة أم لا. كان التحدي هو إيصال شعور بالاحترافية والأمان دون برود، مع الحفاظ على أداء سريع على الأجهزة المتوسطة التي يتصفح منها أغلب المرضى.",
      },
      approach: {
        en: "I structured the page around three pillars — services, doctors, and patient trust signals — using a soft blue palette and generous whitespace. Each section was built as an isolated, reusable HTML/CSS block so content could be edited without touching layout logic.",
        ar: "قسّمت الصفحة على ثلاثة محاور: الخدمات، الأطباء، ومؤشرات الثقة، باستخدام لوحة ألوان زرقاء هادئة ومساحات بيضاء واسعة. كل قسم بُني ككتلة HTML/CSS مستقلة قابلة لإعادة الاستخدام حتى يسهل تعديل المحتوى دون المساس بالتصميم.",
      },
      features: [
        {
          icon: "fa-user-doctor",
          title: { en: "Doctor Profiles", ar: "ملفات الأطباء" },
          desc: {
            en: "Card-based doctor listings with specialty tags and availability.",
            ar: "بطاقات أطباء تعرض التخصص ومواعيد التوفر بشكل منظم.",
          },
        },
        {
          icon: "fa-notes-medical",
          title: { en: "Services Grid", ar: "شبكة الخدمات" },
          desc: {
            en: "Icon-led service cards that scan quickly on mobile.",
            ar: "بطاقات خدمات بأيقونات واضحة يسهل تصفحها على الموبايل.",
          },
        },
        {
          icon: "fa-calendar-check",
          title: { en: "Appointment CTA", ar: "دعوة لحجز موعد" },
          desc: {
            en: "Persistent booking call-to-action placed at key trust moments.",
            ar: "زر حجز موعد ثابت يظهر في اللحظات المناسبة لبناء الثقة.",
          },
        },
        {
          icon: "fa-mobile-screen",
          title: { en: "Mobile-First Layout", ar: "تصميم يبدأ من الموبايل" },
          desc: {
            en: "Built mobile-first, then progressively enhanced for desktop.",
            ar: "بُني بأسلوب mobile-first ثم تم تطويره تدريجيًا لسطح المكتب.",
          },
        },
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      process: [
        {
          title: { en: "Content Mapping", ar: "تنظيم المحتوى" },
          desc: {
            en: "Listed every service and doctor to plan section hierarchy first.",
            ar: "حصر كل خدمة وطبيب لتحديد ترتيب الأقسام قبل التصميم.",
          },
        },
        {
          title: { en: "Static Layout", ar: "بناء الهيكل الثابت" },
          desc: {
            en: "Built the semantic HTML skeleton with accessible landmarks.",
            ar: "بناء هيكل HTML دلالي مع عناصر وصول واضحة.",
          },
        },
        {
          title: { en: "Visual Styling", ar: "التنسيق البصري" },
          desc: {
            en: "Applied the calm blue palette, spacing scale, and typography.",
            ar: "تطبيق اللوحة الزرقاء الهادئة ومقياس المسافات والخطوط.",
          },
        },
        {
          title: { en: "Polish & Deploy", ar: "التلميع والنشر" },
          desc: {
            en: "Cross-device QA, then shipped to Vercel.",
            ar: "اختبار على أجهزة متعددة ثم النشر على Vercel.",
          },
        },
      ],
      problems: [
        {
          problem: {
            en: "Doctor cards looked cluttered with more than 3 fields.",
            ar: "بطاقات الأطباء بدت مزدحمة عند إضافة أكثر من 3 حقول.",
          },
          solution: {
            en: "Redesigned as a two-tier card: identity on top, specialty chip below.",
            ar: "أعدت تصميمها كبطاقة من طبقتين: الاسم أعلى وتخصص الطبيب كوسم أسفله.",
          },
        },
        {
          problem: {
            en: "Long service descriptions broke the grid rhythm.",
            ar: "أوصاف الخدمات الطويلة كسرت إيقاع الشبكة.",
          },
          solution: {
            en: "Applied consistent line-clamping so every card keeps equal height.",
            ar: "طبّقت قص نص متساوي حتى تحافظ كل البطاقات على نفس الارتفاع.",
          },
        },
      ],
      performance: {
        en: "Images were compressed and lazy-loaded below the fold, and all animations rely on transform/opacity so they stay GPU-accelerated on mid-range phones.",
        ar: "تم ضغط الصور وتحميلها كسولاً أسفل الشاشة الأولى، وتعتمد كل الحركات على transform/opacity لتبقى مسرّعة بالـ GPU على الأجهزة المتوسطة.",
      },
      lessons: {
        en: "This project sharpened how I plan information hierarchy before touching CSS, and reinforced that trust in healthcare UI comes from restraint, not decoration.",
        ar: "هذا المشروع صقل طريقتي في تنظيم أولوية المعلومات قبل الدخول في CSS، وأكد لي أن الثقة في واجهات المواقع الطبية تأتي من البساطة لا من الزخرفة.",
      },
      result: {
        en: "A calm, credible healthcare front that loads fast and reads clearly on any device — the kind of first impression a clinic needs.",
        ar: "واجهة طبية هادئة وموثوقة تحمل بسرعة وتُقرأ بوضوح على أي جهاز — بالضبط الانطباع الأول الذي تحتاجه أي عيادة.",
      },
    },

    "electro-shop": {
      accent: "#f97316",
      rgb: "249,115,22",
      icon: "fa-cart-shopping",
      hero: "Screenshot_26-6-2026_171523_ .jpeg",
      gallery: ["Screenshot_26-6-2026_171523_ .jpeg"],
      title: { en: "Electro Shop", ar: "إلكترو شوب" },
      tag: {
        en: "E-Commerce · Personal Project",
        ar: "تجارة إلكترونية · مشروع شخصي",
      },
      summary: {
        en: "A responsive electronics e-commerce website with product search, comparison, wishlist, cart, and a smooth shopping experience.",
        ar: "موقع تجارة إلكترونية متجاوب لبيع المنتجات الإلكترونية، يضم البحث والمقارنة وقائمة المفضلة وسلة المشتريات.",
      },
      demo: "https://peteremad438-ux.github.io/electro---shop./",
      github: "https://github.com/peteremad438-ux/Electro-shop.git",
      overview: {
        en: "Electro Shop is a vanilla JS storefront built to prove that a fast, feature-rich e-commerce UI doesn't need a framework — just disciplined state management in plain JavaScript.",
        ar: "إلكترو شوب متجر مبني بـ JavaScript الخام لإثبات أن واجهة تسوق سريعة وغنية بالميزات لا تحتاج فريمورك، بل إدارة حالة منضبطة بجافاسكريبت العادي.",
      },
      challenge: {
        en: "Cart, wishlist, comparison, and search all needed to stay in sync across the page without a framework's reactivity — and without the DOM turning into spaghetti.",
        ar: "كان لازم تبقى السلة وقائمة المفضلة والمقارنة والبحث متزامنة في كل الصفحة بدون فريمورك، وبدون ما يتحول الكود لفوضى.",
      },
      approach: {
        en: "I centralized cart/wishlist/comparison state in a single JS object with small pure functions to mutate it, then re-rendered only the affected DOM fragments — a manual, lightweight version of a reactive pattern.",
        ar: "جمّعت حالة السلة والمفضلة والمقارنة في كائن JS واحد مع دوال بسيطة للتعديل عليه، ثم أعدت رسم أجزاء الـ DOM المتأثرة فقط، كنسخة خفيفة من نمط reactive.",
      },
      features: [
        {
          icon: "fa-magnifying-glass",
          title: { en: "Live Search", ar: "بحث فوري" },
          desc: {
            en: "Instant product filtering as the user types.",
            ar: "فلترة فورية للمنتجات أثناء الكتابة.",
          },
        },
        {
          icon: "fa-scale-balanced",
          title: { en: "Product Comparison", ar: "مقارنة المنتجات" },
          desc: {
            en: "Side-by-side spec comparison for shortlisted items.",
            ar: "مقارنة مواصفات جنبًا إلى جنب للمنتجات المختارة.",
          },
        },
        {
          icon: "fa-heart",
          title: { en: "Wishlist", ar: "قائمة المفضلة" },
          desc: {
            en: "Persistent wishlist saved across sessions.",
            ar: "قائمة مفضلة تحفظ بين الزيارات.",
          },
        },
        {
          icon: "fa-cart-shopping",
          title: { en: "Cart & Checkout Flow", ar: "سلة وخطوات الدفع" },
          desc: {
            en: "Quantity controls, totals, and a clean checkout summary.",
            ar: "تحكم في الكمية وحساب الإجمالي وملخص دفع نظيف.",
          },
        },
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
      process: [
        {
          title: { en: "State Design", ar: "تصميم الحالة" },
          desc: {
            en: "Defined the cart/wishlist data shape before any UI.",
            ar: "تحديد شكل بيانات السلة والمفضلة قبل أي واجهة.",
          },
        },
        {
          title: { en: "Component Markup", ar: "بناء المكونات" },
          desc: {
            en: "Built reusable product-card templates in JS.",
            ar: "بناء قوالب بطاقات منتج قابلة لإعادة الاستخدام بـ JS.",
          },
        },
        {
          title: { en: "Interaction Wiring", ar: "ربط التفاعلات" },
          desc: {
            en: "Connected search, filters, and cart events.",
            ar: "ربط أحداث البحث والفلاتر والسلة.",
          },
        },
        {
          title: { en: "Perf Pass", ar: "تحسين الأداء" },
          desc: {
            en: "Debounced search and batched DOM updates.",
            ar: "تأخير البحث (debounce) وتجميع تحديثات الـ DOM.",
          },
        },
      ],
      problems: [
        {
          problem: {
            en: "Re-rendering the whole product grid on every keystroke was slow.",
            ar: "إعادة رسم كل شبكة المنتجات مع كل ضغطة زر كانت بطيئة.",
          },
          solution: {
            en: "Added debounced search input plus diffing to only touch changed cards.",
            ar: "أضفت تأخير للبحث (debounce) ومقارنة لتحديث البطاقات المتغيرة فقط.",
          },
        },
        {
          problem: {
            en: "Cart state was getting lost on page refresh.",
            ar: "كانت بيانات السلة تُفقد عند تحديث الصفحة.",
          },
          solution: {
            en: "Persisted state to localStorage with a small serialization layer.",
            ar: "حفظت الحالة في localStorage عبر طبقة تسلسل بسيطة.",
          },
        },
      ],
      performance: {
        en: "Product images use lazy loading, and the icon library initializes once instead of per-card, cutting a major layout-thrashing bottleneck.",
        ar: "صور المنتجات تُحمّل كسولاً، ومكتبة الأيقونات تُهيّأ مرة واحدة بدل كل بطاقة، مما أزال عنق زجاجة كبير في إعادة تنسيق الصفحة.",
      },
      lessons: {
        en: "Building comparison and wishlist logic without a framework taught me how much discipline reactive frameworks actually automate — and how to replicate it deliberately.",
        ar: "بناء منطق المقارنة والمفضلة بدون فريمورك علّمني قد إيه الفريموركس الريأكتيف بتأتمت انضباط كبير، وكيف أعيد إنتاجه يدويًا وبوعي.",
      },
      result: {
        en: "A snappy, framework-free storefront that handles real shopping features smoothly, proving vanilla JS can carry serious interactivity.",
        ar: "متجر سريع بدون فريمورك يدير ميزات تسوق حقيقية بسلاسة، ما يثبت أن جافاسكريبت الخام قادرة على تفاعل جاد.",
      },
    },

    "saint-paul": {
      accent: "#a855f7",
      rgb: "168,85,247",
      icon: "fa-book-open",
      hero: "Screenshot_1-7-2026_19402_saint-paul-five.vercel.app.jpeg",
      gallery: ["Screenshot_1-7-2026_19402_saint-paul-five.vercel.app.jpeg"],
      title: { en: "SAINT PAUL", ar: "القديس بولس" },
      tag: { en: "Editorial / Church · Freelance", ar: "محتوى كنسي · عمل حر" },
      summary: {
        en: "A comprehensive website about Saint Paul the Apostle, featuring his biography, missionary journeys, and teachings in a modern experience.",
        ar: "موقع إلكتروني شامل عن القديس بولس الرسول، يضم سيرته الذاتية ورحلاته التبشيرية وتعاليمه ضمن تجربة استخدام حديثة.",
      },
      demo: "https://saint-paul-five.vercel.app/",
      github: "https://github.com/peteremad438-ux/saint-paul-project1.git",
      overview: {
        en: "A client project telling the life story of Saint Paul the Apostle through a modern, readable, editorial-style layout that respects the weight of the subject.",
        ar: "مشروع لعميل يروي سيرة القديس بولس الرسول عبر تصميم تحريري حديث وسهل القراءة يليق بثقل الموضوع.",
      },
      challenge: {
        en: "Long-form historical and spiritual content needed to stay engaging rather than turning into a wall of text, for an audience reading in Arabic first.",
        ar: "المحتوى التاريخي والروحي الطويل كان لازم يفضل جذاب مش حائط نصوص، لجمهور بيقرأ بالعربي في المقام الأول.",
      },
      approach: {
        en: "I broke the biography into a journey-style structure — chapters, timelines, and pull-quotes — with a warm purple palette and strong typographic rhythm to guide reading pace.",
        ar: "قسّمت السيرة على شكل رحلة: فصول وخط زمني واقتباسات بارزة، مع لوحة بنفسجية دافئة وإيقاع طباعي قوي يوجّه سرعة القراءة.",
      },
      features: [
        {
          icon: "fa-route",
          title: { en: "Journey Timeline", ar: "خط الرحلات الزمني" },
          desc: {
            en: "Visual timeline of Paul's missionary journeys.",
            ar: "خط زمني بصري لرحلات بولس التبشيرية.",
          },
        },
        {
          icon: "fa-quote-left",
          title: { en: "Pull-Quotes", ar: "اقتباسات بارزة" },
          desc: {
            en: "Highlighted teachings styled as standout quotes.",
            ar: "تعاليم مميزة معروضة كاقتباسات بارزة.",
          },
        },
        {
          icon: "fa-language",
          title: { en: "Arabic-First Typography", ar: "طباعة عربية أولاً" },
          desc: {
            en: "Cairo typeface tuned for long-form Arabic reading.",
            ar: "خط Cairo مضبوط لقراءة عربية طويلة ومريحة.",
          },
        },
        {
          icon: "fa-images",
          title: { en: "Editorial Sections", ar: "أقسام تحريرية" },
          desc: {
            en: "Magazine-style sections separating biography and teachings.",
            ar: "أقسام بأسلوب مجلة تفصل السيرة عن التعاليم.",
          },
        },
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "RTL Layout"],
      process: [
        {
          title: { en: "Research & Outline", ar: "البحث والتخطيط" },
          desc: {
            en: "Structured the biography into readable chapters with the client.",
            ar: "تنظيم السيرة على شكل فصول قابلة للقراءة بالتنسيق مع العميل.",
          },
        },
        {
          title: { en: "RTL Foundation", ar: "أساس RTL" },
          desc: {
            en: "Built the layout RTL-first, then mirrored spacing logic.",
            ar: "بناء التصميم بأسلوب RTL أولاً ثم عكس منطق المسافات.",
          },
        },
        {
          title: { en: "Typographic System", ar: "نظام الطباعة" },
          desc: {
            en: "Set a type scale tuned for long Arabic paragraphs.",
            ar: "ضبط مقياس خطوط مناسب للفقرات العربية الطويلة.",
          },
        },
        {
          title: { en: "Review & Launch", ar: "المراجعة والإطلاق" },
          desc: {
            en: "Client content review, final polish, deployment.",
            ar: "مراجعة المحتوى مع العميل، اللمسات الأخيرة، ثم النشر.",
          },
        },
      ],
      problems: [
        {
          problem: {
            en: "RTL layout mirrored spacing incorrectly in nested sections.",
            ar: "تصميم RTL كان بيعكس المسافات بشكل خاطئ في الأقسام المتداخلة.",
          },
          solution: {
            en: "Rebuilt spacing with logical CSS properties instead of left/right.",
            ar: "أعدت بناء المسافات بخصائص CSS المنطقية بدل left/right.",
          },
        },
        {
          problem: {
            en: "Long paragraphs felt dense on mobile.",
            ar: "الفقرات الطويلة كانت تبدو كثيفة على الموبايل.",
          },
          solution: {
            en: "Increased line-height and introduced section breaks with icons.",
            ar: "زودت المسافة بين الأسطر وأضفت فواصل أقسام بأيقونات.",
          },
        },
      ],
      performance: {
        en: "Fonts were subset and preconnected, and images lazy-load beneath the timeline to keep first paint fast on 3G connections.",
        ar: "تم تحميل الخطوط بشكل مسبق ومحدود، والصور تُحمّل كسولاً أسفل الخط الزمني للحفاظ على سرعة أول عرض على شبكات 3G.",
      },
      lessons: {
        en: "This project taught me to design typography for Arabic reading rhythm first, not as an afterthought translation of an English layout.",
        ar: "هذا المشروع علّمني تصميم الطباعة لإيقاع القراءة العربي أولاً، مش كترجمة لاحقة لتصميم إنجليزي.",
      },
      result: {
        en: "A respectful, readable editorial site that turns a long biography into an engaging, easy-to-follow journey.",
        ar: "موقع تحريري محترم وسهل القراءة يحوّل سيرة طويلة إلى رحلة جذابة وسهلة المتابعة.",
      },
    },

    "engage-gym": {
      accent: "#ff6b6b",
      rgb: "255,107,107",
      icon: "fa-dumbbell",
      hero: "Screenshot_29-5-2026_171232_.jpeg",
      gallery: ["Screenshot_29-5-2026_171232_.jpeg"],
      title: { en: "ENGAGE GYM", ar: "إنجيج جيم" },
      tag: { en: "Fitness · Personal Project", ar: "لياقة بدنية · مشروع شخصي" },
      summary: {
        en: "A modern gym website showcasing fitness programs, memberships, and an engaging user experience.",
        ar: "موقع جيم عصري يعرض برامج اللياقة والاشتراكات بتجربة مستخدم جذابة.",
      },
      demo: "https://modern-gym-eight.vercel.app",
      github: "https://github.com/peteremad438-ux/Modern-gym.git",
      overview: {
        en: "ENGAGE GYM is a high-energy fitness brand site designed to make membership plans and programs feel exciting rather than transactional.",
        ar: "إنجيج جيم موقع رياضي عالي الطاقة صُمم ليخلي خطط الاشتراك والبرامج تحس إنها مشوقة مش مجرد عملية بيع.",
      },
      challenge: {
        en: "Fitness sites easily fall into generic stock-photo templates. The goal was to make membership tiers and programs feel bold and motivating through pure UI, not just imagery.",
        ar: "مواقع الجيم بتقع بسهولة في قالب صور جاهزة عام. الهدف كان يخلي خطط الاشتراك والبرامج تحس بالحماس والتحفيز من خلال الواجهة نفسها مش الصور بس.",
      },
      approach: {
        en: "I leaned into a bold red accent with high-contrast dark sections, sharp angular dividers, and punchy CTAs to make the page feel as energetic as a workout.",
        ar: "اعتمدت على لون أحمر جريء مع أقسام داكنة عالية التباين وفواصل زاوية حادة وأزرار دعوة قوية، عشان الصفحة تحس بنفس طاقة التمرين.",
      },
      features: [
        {
          icon: "fa-list-check",
          title: { en: "Membership Tiers", ar: "خطط الاشتراك" },
          desc: {
            en: "Clear pricing cards comparing plan benefits.",
            ar: "بطاقات أسعار واضحة تقارن مزايا كل خطة.",
          },
        },
        {
          icon: "fa-dumbbell",
          title: { en: "Program Showcase", ar: "عرض البرامج" },
          desc: {
            en: "Visual program cards for strength, cardio, and classes.",
            ar: "بطاقات مرئية لبرامج القوة والكارديو والحصص.",
          },
        },
        {
          icon: "fa-user-group",
          title: { en: "Trainer Highlights", ar: "أبرز المدربين" },
          desc: {
            en: "Spotlighted trainer profiles to build credibility.",
            ar: "ملفات مدربين بارزة لبناء المصداقية.",
          },
        },
        {
          icon: "fa-bolt",
          title: { en: "Bold Micro-Interactions", ar: "تفاعلات دقيقة قوية" },
          desc: {
            en: "Hover and scroll effects that keep energy high.",
            ar: "تأثيرات hover وسكرول تحافظ على الحماس.",
          },
        },
      ],
      tech: ["HTML5", "CSS3", "JavaScript"],
      process: [
        {
          title: { en: "Mood & Palette", ar: "المزاج واللوحة" },
          desc: {
            en: "Locked the bold red-on-dark identity early.",
            ar: "تحديد الهوية الحمراء على خلفية داكنة من البداية.",
          },
        },
        {
          title: { en: "Section Rhythm", ar: "إيقاع الأقسام" },
          desc: {
            en: "Alternated light/dark sections for visual pacing.",
            ar: "تبديل بين أقسام فاتحة وداكنة لضبط الإيقاع البصري.",
          },
        },
        {
          title: { en: "Interaction Layer", ar: "طبقة التفاعل" },
          desc: {
            en: "Added hover states and scroll-triggered emphasis.",
            ar: "إضافة حالات hover وتأثيرات عند التمرير.",
          },
        },
        {
          title: { en: "QA & Ship", ar: "الفحص والنشر" },
          desc: {
            en: "Tested across breakpoints, then deployed.",
            ar: "اختبار على كل أحجام الشاشات ثم النشر.",
          },
        },
      ],
      problems: [
        {
          problem: {
            en: "Angular divider shapes broke on narrow screens.",
            ar: "أشكال الفواصل الزاوية كانت تنكسر على الشاشات الضيقة.",
          },
          solution: {
            en: "Swapped fixed-angle clip-paths for viewport-relative units.",
            ar: "استبدلت clip-path بزاوية ثابتة بوحدات نسبية لعرض الشاشة.",
          },
        },
        {
          problem: {
            en: "Pricing cards misaligned when plan features differed in count.",
            ar: "بطاقات الأسعار كانت تختل عند اختلاف عدد المزايا لكل خطة.",
          },
          solution: {
            en: "Used CSS Grid with equal-height rows and a sticky CTA footer per card.",
            ar: "استخدمت CSS Grid بارتفاع صفوف متساوٍ وزر دعوة ثابت أسفل كل بطاقة.",
          },
        },
      ],
      performance: {
        en: "Heavy gradients were limited to above-the-fold sections only, keeping scroll performance smooth on mobile GPUs.",
        ar: "التدرجات الثقيلة اقتصرت على الأقسام الأولى فقط للحفاظ على سلاسة السكرول على معالجات الرسوميات بالموبايل.",
      },
      lessons: {
        en: "Learned how much tone can be carried by color and pacing alone — a valuable lesson in restraint versus decoration.",
        ar: "اتعلمت قد إيه اللون وإيقاع الأقسام لوحدهم ممكن ينقلوا إحساس كامل، درس مهم في الفرق بين البساطة والزخرفة.",
      },
      result: {
        en: "A bold, motivating gym site that makes membership decisions feel exciting rather than like a form to fill.",
        ar: "موقع جيم جريء ومحفّز يخلي قرار الاشتراك يحس بالحماس مش مجرد فورم هتملاه.",
      },
    },

    "classic-movies": {
      accent: "#d4af37",
      rgb: "212,175,55",
      icon: "fa-film",
      hero: "Screenshot_10-7-2026_154941_.jpeg",
      gallery: ["Screenshot_10-7-2026_154941_.jpeg"],
      title: { en: "Classic Movies", ar: "أرشيف الأفلام المصرية" },
      tag: {
        en: "Cultural Archive · Personal Project",
        ar: "أرشيف ثقافي · مشروع شخصي",
      },
      summary: {
        en: "A showcase of timeless Egyptian classic films with posters, summaries, cast, and film details.",
        ar: "موقع يعرض أشهر أفلام السينما المصرية الكلاسيكية مع البوسترات والملخصات وأهم معلومات كل فيلم.",
      },
      demo: "https://classic-egyption-movies.vercel.app/",
      github: "https://github.com/peteremad438-ux/Classic-Egyption-movies.git",
      overview: {
        en: "A personal archive project celebrating golden-era Egyptian cinema — built to feel like flipping through a vintage film catalogue on the web.",
        ar: "مشروع شخصي أرشيفي يحتفي بالعصر الذهبي للسينما المصرية، مبني ليحس المستخدم إنه بيقلّب في كتالوج أفلام قديم لكن على الويب.",
      },
      challenge: {
        en: "Presenting dozens of films with posters, casts, and summaries without the page turning into an overwhelming, disorganized list.",
        ar: "عرض عشرات الأفلام مع البوسترات والكاست والملخصات من غير ما تتحول الصفحة لقائمة مرهقة وغير منظمة.",
      },
      approach: {
        en: "I used a gold-on-dark cinema palette with a poster-first grid, letting large thumbnails carry the browsing experience and details unfold on demand.",
        ar: "استخدمت لوحة ذهبية على خلفية داكنة بروح السينما، مع شبكة تعتمد على البوستر أولاً، وتفاصيل الفيلم تظهر عند الطلب.",
      },
      features: [
        {
          icon: "fa-clapperboard",
          title: { en: "Poster Grid", ar: "شبكة البوسترات" },
          desc: {
            en: "Large, scannable poster grid inspired by film catalogues.",
            ar: "شبكة بوسترات كبيرة وسهلة التصفح مستوحاة من كتالوجات الأفلام.",
          },
        },
        {
          icon: "fa-users",
          title: { en: "Cast Details", ar: "تفاصيل الكاست" },
          desc: {
            en: "Cast and crew info surfaced per film.",
            ar: "معلومات الكاست وطاقم العمل لكل فيلم.",
          },
        },
        {
          icon: "fa-record-vinyl",
          title: { en: "Vintage Sound Accent", ar: "لمسة صوتية قديمة" },
          desc: {
            en: "A nostalgic vinyl-style sound cue on key interactions.",
            ar: "تأثير صوتي بروح أسطوانات الفينيل عند التفاعلات الرئيسية.",
          },
        },
        {
          icon: "fa-language",
          title: { en: "Bilingual Archive", ar: "أرشيف ثنائي اللغة" },
          desc: {
            en: "Full Arabic/English support with RTL layout.",
            ar: "دعم كامل للعربي والإنجليزي مع تصميم RTL.",
          },
        },
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "RTL Layout"],
      process: [
        {
          title: { en: "Content Curation", ar: "تنظيم المحتوى" },
          desc: {
            en: "Selected and organized films by era and genre.",
            ar: "اختيار وتنظيم الأفلام حسب العصر والنوع.",
          },
        },
        {
          title: { en: "Poster Grid Build", ar: "بناء شبكة البوسترات" },
          desc: {
            en: "Built a responsive CSS Grid gallery for posters.",
            ar: "بناء معرض CSS Grid متجاوب للبوسترات.",
          },
        },
        {
          title: { en: "Detail Views", ar: "شاشات التفاصيل" },
          desc: {
            en: "Added expandable detail sections per film.",
            ar: "إضافة أقسام تفاصيل قابلة للتوسيع لكل فيلم.",
          },
        },
        {
          title: { en: "RTL & Sound Polish", ar: "تلميع RTL والصوت" },
          desc: {
            en: "Finalized Arabic layout and the vinyl sound cue.",
            ar: "إتمام التصميم العربي والتأثير الصوتي.",
          },
        },
      ],
      problems: [
        {
          problem: {
            en: "Poster aspect ratios varied and broke the grid alignment.",
            ar: "نسب أبعاد البوسترات كانت مختلفة وبتكسر تناسق الشبكة.",
          },
          solution: {
            en: "Enforced a consistent aspect-ratio container with object-fit cropping.",
            ar: "فرضت حاوية بنسبة أبعاد ثابتة مع قص object-fit.",
          },
        },
        {
          problem: {
            en: "The archive felt static without any tactile detail.",
            ar: "الأرشيف كان يحس ثابت وناقصه لمسة حسية.",
          },
          solution: {
            en: "Added a subtle vinyl-record sound button to add nostalgic texture.",
            ar: "أضفت زر صوت أسطوانة فينيل بلمسة نوستالجية.",
          },
        },
      ],
      performance: {
        en: "Poster images are lazy-loaded and served at grid-appropriate sizes so the catalogue scrolls smoothly even with dozens of films.",
        ar: "صور البوسترات تُحمّل كسولاً وبأحجام مناسبة للشبكة حتى يفضل السكرول سلس حتى مع عشرات الأفلام.",
      },
      lessons: {
        en: "Working on a cultural archive taught me how to balance nostalgia-driven design choices with modern usability standards.",
        ar: "العمل على أرشيف ثقافي علّمني إزاي أوازن بين خيارات تصميم نوستالجية ومعايير سهولة استخدام حديثة.",
      },
      result: {
        en: "A living tribute to Egyptian classic cinema that's genuinely enjoyable to browse, in Arabic or English.",
        ar: "تحية حية للسينما المصرية الكلاسيكية، ممتعة فعلاً للتصفح بالعربي أو الإنجليزي.",
      },
    },

    "fifa-world-cup": {
      accent: "#10b981",
      rgb: "16,185,129",
      icon: "fa-futbol",
      hero: "Screenshot_10-6-2026_142442_.jpeg",
      gallery: ["Screenshot_10-6-2026_142442_.jpeg"],
      title: { en: "FIFA WORLD CUP", ar: "كأس العالم فيفا" },
      tag: {
        en: "Editorial · Personal Project",
        ar: "محتوى تحريري · مشروع شخصي",
      },
      summary: {
        en: "A quick journey through World Cup history, showcasing iconic editions, legendary players, and unforgettable moments.",
        ar: "رحلة سريعة عبر تاريخ كأس العالم، تعرض نسخاً أيقونية ولاعبين أسطوريين ولحظات لا تُنسى.",
      },
      demo: "https://fifa-world-cup-ashen.vercel.app/",
      github: "https://github.com/peteremad438-ux/fifa-world-cup.git",
      overview: {
        en: "A tribute editorial site walking through World Cup history — built as a fast, scrollable story rather than a data-heavy stats page.",
        ar: "موقع تحريري تحية لتاريخ كأس العالم، مبني كقصة سريعة قابلة للتصفح مش صفحة إحصائيات ثقيلة.",
      },
      challenge: {
        en: "World Cup history spans decades of moments — the challenge was picking a narrative thread and pacing that feels like a highlight reel, not an encyclopedia.",
        ar: "تاريخ كأس العالم ممتد عبر عقود من اللحظات، والتحدي كان اختيار خط سردي وإيقاع يحس كأنه ملخص لحظات لا موسوعة جافة.",
      },
      approach: {
        en: "I structured content chronologically with a green pitch-inspired palette, using scroll-reveal sections timed like a highlight montage.",
        ar: "نظّمت المحتوى زمنيًا بلوحة خضراء مستوحاة من الملعب، مع أقسام تظهر عند السكرول بإيقاع أشبه بمونتاج لحظات بارزة.",
      },
      features: [
        {
          icon: "fa-trophy",
          title: { en: "Iconic Editions", ar: "نسخ أيقونية" },
          desc: {
            en: "Highlighted editions with key facts and imagery.",
            ar: "عرض النسخ الأبرز مع أهم المعلومات والصور.",
          },
        },
        {
          icon: "fa-star",
          title: { en: "Legendary Players", ar: "لاعبون أسطوريون" },
          desc: {
            en: "Player spotlight cards across eras.",
            ar: "بطاقات تسليط ضوء على لاعبين من عصور مختلفة.",
          },
        },
        {
          icon: "fa-futbol",
          title: { en: "Moment Cards", ar: "بطاقات اللحظات" },
          desc: {
            en: "Bite-sized unforgettable-moment storytelling.",
            ar: "سرد قصير للحظات لا تُنسى في شكل بطاقات.",
          },
        },
        {
          icon: "fa-timeline",
          title: { en: "Scroll Storytelling", ar: "سرد بالتمرير" },
          desc: {
            en: "Chronological scroll-reveal pacing.",
            ar: "إيقاع زمني يتكشف مع التمرير في الصفحة.",
          },
        },
      ],
      tech: ["HTML5", "CSS3", "JavaScript"],
      process: [
        {
          title: { en: "Narrative Outline", ar: "تخطيط السرد" },
          desc: {
            en: "Picked the editions and moments to feature.",
            ar: "اختيار النسخ واللحظات اللي هتُعرض.",
          },
        },
        {
          title: { en: "Section Build", ar: "بناء الأقسام" },
          desc: {
            en: "Built each era as its own scroll section.",
            ar: "بناء كل عصر كقسم مستقل بالصفحة.",
          },
        },
        {
          title: { en: "Motion Pass", ar: "مرحلة الحركة" },
          desc: {
            en: "Added scroll-reveal timing for pacing.",
            ar: "إضافة توقيت ظهور عند التمرير لضبط الإيقاع.",
          },
        },
        {
          title: { en: "Polish & Ship", ar: "التلميع والنشر" },
          desc: {
            en: "Fine-tuned spacing and deployed.",
            ar: "ضبط المسافات بدقة ثم النشر.",
          },
        },
      ],
      problems: [
        {
          problem: {
            en: "Too many editions made the page feel endless.",
            ar: "كثرة النسخ خلت الصفحة تحس بلا نهاية.",
          },
          solution: {
            en: "Curated to the most iconic editions only, trimming for pacing over completeness.",
            ar: "اقتصرت على النسخ الأكثر أيقونية فقط، لصالح الإيقاع بدل الشمولية.",
          },
        },
        {
          problem: {
            en: "Scroll-reveal timing felt off on fast scrollers.",
            ar: "توقيت ظهور المحتوى عند التمرير كان غريب مع من يسكرول بسرعة.",
          },
          solution: {
            en: "Tuned intersection thresholds and added a max-once trigger per section.",
            ar: "ضبطت حدود intersection وأضفت شرط تشغيل مرة واحدة لكل قسم.",
          },
        },
      ],
      performance: {
        en: "Sections load their imagery only as they approach the viewport, keeping the scroll story light despite the visual density.",
        ar: "الأقسام تحمّل صورها فقط عند اقترابها من الشاشة، ما يخلي القصة خفيفة رغم الكثافة البصرية.",
      },
      lessons: {
        en: "This project taught me to think in narrative pacing, not just layout — treating scroll position as a storytelling tool.",
        ar: "المشروع ده علّمني أفكر في إيقاع السرد مش بس التصميم، وأتعامل مع موضع السكرول كأداة سرد.",
      },
      result: {
        en: "A quick, enjoyable editorial trip through World Cup history that feels more like a highlight reel than a wiki page.",
        ar: "رحلة تحريرية سريعة وممتعة عبر تاريخ كأس العالم، تحس أقرب لملخص لحظات من كونها صفحة ويكيبيديا.",
      },
    },

    "coptic-hymns": {
      accent: "#a855f7",
      rgb: "168,85,247",
      icon: "fa-music",
      hero: "Screenshot_2-7-2026_16311_.jpeg",
      gallery: ["Screenshot_2-7-2026_16311_.jpeg"],
      title: { en: "COPTIC HYMNS", ar: "الألحان القبطية" },
      tag: {
        en: "Spiritual / Media · Freelance",
        ar: "موقع روحي / وسائط · عمل حر",
      },
      summary: {
        en: "A spiritual website dedicated to Coptic hymns with organized content and a peaceful user interface.",
        ar: "موقع روحي مخصص للألحان القبطية بمحتوى منظم وواجهة مستخدم هادئة.",
      },
      demo: "https://mot5ss-portfolio.vercel.app/",
      github: "https://github.com/peteremad438-ux/mot5ss-portfolio.git",
      overview: {
        en: "A freelance project organizing Coptic hymns into a calm, media-friendly library that's easy to browse during prayer or study.",
        ar: "مشروع لعميل ينظّم الألحان القبطية في مكتبة هادئة وسهلة الوسائط، تسهل التصفح أثناء الصلاة أو الدرس.",
      },
      challenge: {
        en: "Hymn media needed organized categorization and reliable playback delivery, in an interface calm enough for a spiritual context.",
        ar: "الألحان كانت محتاجة تصنيف منظم وتشغيل وسائط موثوق، في واجهة هادئة تناسب السياق الروحي.",
      },
      approach: {
        en: "I built a clean category-first structure with soft purple tones and used Cloudinary for reliable, fast audio/media delivery instead of hosting media directly.",
        ar: "بنيت هيكل يعتمد على التصنيف أولاً بألوان بنفسجية هادئة، واستخدمت Cloudinary لتوصيل الوسائط الصوتية بسرعة وموثوقية بدل استضافتها مباشرة.",
      },
      features: [
        {
          icon: "fa-layer-group",
          title: { en: "Categorized Library", ar: "مكتبة مصنّفة" },
          desc: {
            en: "Hymns grouped by occasion and season.",
            ar: "ألحان مصنفة حسب المناسبة والموسم.",
          },
        },
        {
          icon: "fa-cloud",
          title: { en: "Cloudinary Delivery", ar: "توصيل عبر Cloudinary" },
          desc: {
            en: "Fast, reliable media hosting via Cloudinary.",
            ar: "استضافة وسائط سريعة وموثوقة عبر Cloudinary.",
          },
        },
        {
          icon: "fa-play",
          title: { en: "Simple Player UI", ar: "واجهة تشغيل بسيطة" },
          desc: {
            en: "Distraction-free playback controls.",
            ar: "أزرار تشغيل بسيطة بلا تشتيت.",
          },
        },
        {
          icon: "fa-language",
          title: { en: "Bilingual Content", ar: "محتوى ثنائي اللغة" },
          desc: {
            en: "Arabic/English support for wider reach.",
            ar: "دعم عربي/إنجليزي لوصول أوسع.",
          },
        },
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "Cloudinary"],
      process: [
        {
          title: { en: "Content Structuring", ar: "تنظيم المحتوى" },
          desc: {
            en: "Categorized hymns with the client by occasion.",
            ar: "تصنيف الألحان مع العميل حسب المناسبة.",
          },
        },
        {
          title: { en: "Media Pipeline", ar: "مسار الوسائط" },
          desc: {
            en: "Connected Cloudinary for hosting and delivery.",
            ar: "ربط Cloudinary للاستضافة والتوصيل.",
          },
        },
        {
          title: { en: "Calm UI Build", ar: "بناء واجهة هادئة" },
          desc: {
            en: "Designed a quiet, distraction-free interface.",
            ar: "تصميم واجهة هادئة بلا تشتيت.",
          },
        },
        {
          title: { en: "Test & Deliver", ar: "الاختبار والتسليم" },
          desc: {
            en: "Verified playback across devices, then delivered.",
            ar: "التأكد من التشغيل على أجهزة متعددة ثم التسليم.",
          },
        },
      ],
      problems: [
        {
          problem: {
            en: "Directly hosted audio files were slow on weaker connections.",
            ar: "ملفات الصوت المستضافة مباشرة كانت بطيئة على الاتصالات الضعيفة.",
          },
          solution: {
            en: "Migrated media delivery to Cloudinary for adaptive, faster streaming.",
            ar: "نقلت توصيل الوسائط لـ Cloudinary لتشغيل أسرع وأكثر تكيفًا.",
          },
        },
        {
          problem: {
            en: "Category lists grew long and hard to scan.",
            ar: "قوائم التصنيفات كبرت وصعب تصفحها.",
          },
          solution: {
            en: "Added collapsible category groups to keep the interface calm.",
            ar: "أضفت مجموعات تصنيف قابلة للطي للحفاظ على هدوء الواجهة.",
          },
        },
      ],
      performance: {
        en: "Offloading media to Cloudinary's CDN removed the biggest load-time bottleneck, keeping the interface itself lightweight.",
        ar: "نقل الوسائط لشبكة Cloudinary أزال أكبر عنق زجاجة في وقت التحميل، وخلّى الواجهة نفسها خفيفة.",
      },
      lessons: {
        en: "Learned to treat media hosting as its own architectural decision, not an afterthought bolted onto the frontend.",
        ar: "اتعلمت أتعامل مع استضافة الوسائط كقرار معماري مستقل، مش تفصيلة بتتضاف بعد كده للواجهة.",
      },
      result: {
        en: "A peaceful, well-organized hymn library that plays reliably and feels appropriate for its spiritual purpose.",
        ar: "مكتبة ألحان منظمة وهادئة تشتغل بثبات وتحس مناسبة لغرضها الروحي.",
      },
    },

    "simple-card": {
      accent: "#06b6d4",
      rgb: "6,182,212",
      icon: "fa-id-card",
      hero: "card.jpeg",
      gallery: ["card.jpeg"],
      title: { en: "SIMPLE CARD", ar: "كارت تعريفي بسيط" },
      tag: {
        en: "Personal Identity Card · Freelance",
        ar: "بطاقة تعريف شخصية · عمل حر",
      },
      summary: {
        en: "A personal card showcasing skills, projects, and a clean professional identity.",
        ar: "كارت شخصي يعرض المهارات والمشاريع وهوية مهنية نظيفة.",
      },
      demo: "https://rewis-jet.vercel.app/",
      github: "https://github.com/peteremad438-ux/project.git",
      overview: {
        en: "A compact single-page identity card — the kind of link-in-bio alternative that presents someone's skills and work at a glance.",
        ar: "كارت تعريفي بصفحة واحدة، بديل لروابط البايو بيعرض مهارات وأعمال الشخص بنظرة واحدة.",
      },
      challenge: {
        en: "Fit a full professional identity — skills, projects, contact — into one small, fast-loading card without feeling cramped.",
        ar: "استيعاب هوية مهنية كاملة، مهارات ومشاريع وتواصل، في كارت صغير وسريع التحميل بلا ما يحس بالازدحام.",
      },
      approach: {
        en: "I used a cyan accent with tight vertical rhythm and a single-column flow, prioritizing the two or three facts a visitor actually needs first.",
        ar: "استخدمت لون سماوي وإيقاع رأسي مضبوط وتصميم عمود واحد، مع تقديم أهم معلومتين أو ثلاثة اللي الزائر محتاجها فعلاً أولاً.",
      },
      features: [
        {
          icon: "fa-id-card",
          title: { en: "Identity Header", ar: "رأسية تعريفية" },
          desc: {
            en: "Name, role, and a one-line pitch up top.",
            ar: "الاسم والدور وجملة تعريف مختصرة في الأعلى.",
          },
        },
        {
          icon: "fa-code",
          title: { en: "Skill Chips", ar: "وسوم المهارات" },
          desc: {
            en: "Compact, scannable skill tags.",
            ar: "وسوم مهارات مختصرة وسهلة القراءة.",
          },
        },
        {
          icon: "fa-link",
          title: { en: "Quick Links", ar: "روابط سريعة" },
          desc: {
            en: "Direct links to projects and socials.",
            ar: "روابط مباشرة للمشاريع ووسائل التواصل.",
          },
        },
        {
          icon: "fa-gauge-high",
          title: { en: "Instant Load", ar: "تحميل فوري" },
          desc: {
            en: "Single-page, near-zero-dependency footprint.",
            ar: "صفحة واحدة بأقل اعتماديات ممكنة.",
          },
        },
      ],
      tech: ["HTML5", "CSS3"],
      process: [
        {
          title: { en: "Content Priority", ar: "أولوية المحتوى" },
          desc: {
            en: "Chose the 3 facts a visitor sees first.",
            ar: "اختيار أهم 3 معلومات يشوفها الزائر أولاً.",
          },
        },
        {
          title: { en: "Single-Column Layout", ar: "تصميم عمود واحد" },
          desc: {
            en: "Built a tight, single-column flow.",
            ar: "بناء تدفق عمود واحد مضبوط.",
          },
        },
        {
          title: { en: "Micro-Styling", ar: "تنسيق دقيق" },
          desc: {
            en: "Fine-tuned spacing and chip styling.",
            ar: "ضبط دقيق للمسافات وتصميم الوسوم.",
          },
        },
        {
          title: { en: "Ship", ar: "النشر" },
          desc: {
            en: "Deployed as a lightweight standalone page.",
            ar: "نشر الصفحة كصفحة مستقلة خفيفة.",
          },
        },
      ],
      problems: [
        {
          problem: {
            en: "Too many skills made the card feel busy.",
            ar: "كثرة المهارات خلت الكارت يحس مزدحم.",
          },
          solution: {
            en: "Grouped skills into a few priority chips instead of listing everything.",
            ar: "جمّعت المهارات في وسوم قليلة ذات أولوية بدل سرد كل حاجة.",
          },
        },
      ],
      performance: {
        en: "Zero external dependencies and a single CSS file keep this card near-instant to load on any connection.",
        ar: "بدون أي اعتماديات خارجية وملف CSS واحد فقط، الكارت يحمّل فورياً تقريباً على أي اتصال.",
      },
      lessons: {
        en: "A great constraint exercise — proof that a tiny surface area can still feel deliberate and polished.",
        ar: "تمرين ممتاز في القيود، وإثبات إن مساحة صغيرة جداً ممكن كمان تحس مدروسة ومصقولة.",
      },
      result: {
        en: "A clean, instant-loading personal card that says exactly what it needs to, and nothing more.",
        ar: "كارت شخصي نظيف وسريع التحميل يقول بالظبط اللي محتاج يقوله ولا أكتر.",
      },
    },
  };

  /* ── 2. HELPERS ─────────────────────────────────────── */
  function isAr() {
    return document.documentElement.getAttribute("lang") === "ar";
  }
  function tr(field) {
    if (!field) return "";
    return isAr() ? field.ar || field.en : field.en || field.ar;
  }

  const backdrop = document.getElementById("btpBackdrop");
  const modal = document.getElementById("btpModal");
  let lastFocused = null;
  let currentKey = null;

  if (!backdrop || !modal) return;

  /* ── 3. RENDER ──────────────────────────────────────── */
  function render(key) {
    const d = P[key];
    if (!d) return "";
    const ar = isAr();

    modal.style.setProperty("--btp-accent", d.accent);
    modal.style.setProperty("--btp-accent-rgb", d.rgb);

    const featuresHtml = d.features
      .map(
        (f, i) => `
      <div class="btp-feature" data-reveal="up" style="--d:${i * 70}ms">
        <div class="btp-feature-icon"><i class="fa-solid ${f.icon}"></i></div>
        <h4>${tr(f.title)}</h4>
        <p>${tr(f.desc)}</p>
      </div>`,
      )
      .join("");

    const techHtml = d.tech
      .map(
        (t, i) =>
          `<span class="btp-tech-badge" style="--d:${i * 60}ms">${t}</span>`,
      )
      .join("");

    const processHtml = d.process
      .map(
        (s, i) => `
      <div class="btp-step" data-reveal="up" style="--d:${i * 80}ms">
        <div class="btp-step-num">${String(i + 1).padStart(2, "0")}</div>
        <div class="btp-step-body">
          <h4>${tr(s.title)}</h4>
          <p>${tr(s.desc)}</p>
        </div>
      </div>`,
      )
      .join("");

    const problemsHtml = d.problems
      .map(
        (p, i) => `
      <div class="btp-problem" data-reveal="up" style="--d:${i * 90}ms">
        <div class="btp-problem-row">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <p>${tr(p.problem)}</p>
        </div>
        <div class="btp-solution-row">
          <i class="fa-solid fa-circle-check"></i>
          <p>${tr(p.solution)}</p>
        </div>
      </div>`,
      )
      .join("");

    const lessonsHtml = tr(d.lessons);
    const perfHtml = tr(d.performance);

    const galleryHtml = d.gallery
      .map(
        (img, i) => `
      <div class="btp-gallery-item" data-reveal="up" style="--d:${i * 70}ms" data-img="${img}" role="button" tabindex="0" aria-label="${ar ? "تكبير الصورة" : "Enlarge image"}">
        <img src="${img}" alt="${tr(d.title)}" loading="lazy" />
        <div class="btp-gallery-zoom"><i class="fa-solid fa-magnifying-glass-plus"></i></div>
      </div>`,
      )
      .join("");

    return `
      <button type="button" class="btp-close" id="btpClose" aria-label="${ar ? "إغلاق" : "Close"}">
        <i class="fa-solid fa-xmark"></i>
      </button>

      <div class="btp-body btp-body--no-hero">
        <section class="btp-section" data-reveal="up">
          <span class="btp-section-eyebrow">01 · ${ar ? "نظرة عامة" : "Overview"}</span>
          <h3>${ar ? "نظرة عامة على المشروع" : "Project Overview"}</h3>
          <p>${tr(d.overview)}</p>
        </section>

        <section class="btp-section" data-reveal="up">
          <span class="btp-section-eyebrow">02 · ${ar ? "التحدي" : "Challenge"}</span>
          <h3>${ar ? "التحدي" : "The Challenge"}</h3>
          <p>${tr(d.challenge)}</p>
        </section>

        <section class="btp-section" data-reveal="up">
          <span class="btp-section-eyebrow">03 · ${ar ? "الأسلوب" : "Approach"}</span>
          <h3>${ar ? "أسلوبي في التنفيذ" : "My Approach"}</h3>
          <p>${tr(d.approach)}</p>
        </section>

        <section class="btp-section" data-reveal="up">
          <span class="btp-section-eyebrow">04 · ${ar ? "الميزات" : "Features"}</span>
          <h3>${ar ? "أبرز الميزات" : "Key Features"}</h3>
          <div class="btp-features-grid">${featuresHtml}</div>
        </section>

        <section class="btp-section" data-reveal="up">
          <span class="btp-section-eyebrow">05 · ${ar ? "التقنيات" : "Stack"}</span>
          <h3>${ar ? "التقنيات المستخدمة" : "Technologies Used"}</h3>
          <div class="btp-tech-row">${techHtml}</div>
        </section>

        <section class="btp-section" data-reveal="up">
          <span class="btp-section-eyebrow">06 · ${ar ? "سير العمل" : "Process"}</span>
          <h3>${ar ? "مراحل التطوير" : "Development Process"}</h3>
          <div class="btp-steps">${processHtml}</div>
        </section>

        <section class="btp-section" data-reveal="up">
          <span class="btp-section-eyebrow">07 · ${ar ? "التحديات" : "Problem Solving"}</span>
          <h3>${ar ? "مشاكل تقنية وحلولها" : "Problems Solved"}</h3>
          <div class="btp-problems">${problemsHtml}</div>
        </section>

        <section class="btp-section" data-reveal="up">
          <span class="btp-section-eyebrow">08 · ${ar ? "الأداء" : "Performance"}</span>
          <h3>${ar ? "تحسينات الأداء" : "Performance Optimizations"}</h3>
          <p>${perfHtml}</p>
        </section>

        <section class="btp-section" data-reveal="up">
          <span class="btp-section-eyebrow">09 · ${ar ? "الدروس المستفادة" : "Lessons"}</span>
          <h3>${ar ? "الدروس المستفادة" : "Lessons Learned"}</h3>
          <p>${lessonsHtml}</p>
        </section>

        <section class="btp-section btp-result" data-reveal="up">
          <span class="btp-section-eyebrow">10 · ${ar ? "النتيجة" : "Result"}</span>
          <h3>${ar ? "النتيجة النهائية" : "Final Result"}</h3>
          <p>${tr(d.result)}</p>
        </section>

        <section class="btp-section" data-reveal="up">
          <span class="btp-section-eyebrow">11 · ${ar ? "المعرض" : "Gallery"}</span>
          <h3>${ar ? "معرض الصور" : "Gallery"}</h3>
          <div class="btp-gallery">${galleryHtml}</div>
        </section>
      </div>
    `;
  }

  /* ── 4. REVEAL OBSERVER (scoped to modal) ───────────── */
  let revealObs = null;
  function setupReveal() {
    if (revealObs) revealObs.disconnect();
    revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const delay = parseInt(el.style.getPropertyValue("--d") || "0");
          setTimeout(() => el.classList.add("revealed"), delay);
          revealObs.unobserve(el);
        });
      },
      { root: modal, threshold: 0.08, rootMargin: "0px 0px -30px 0px" },
    );
    modal
      .querySelectorAll("[data-reveal]")
      .forEach((el) => revealObs.observe(el));
  }

  /* ── 5. LIGHTBOX ────────────────────────────────────── */
  let lightbox = null;
  function ensureLightbox() {
    if (lightbox) return lightbox;
    lightbox = document.createElement("div");
    lightbox.className = "btp-lightbox";
    lightbox.innerHTML = `<img src="" alt="" /><button type="button" class="btp-lightbox-close" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>`;
    document.body.appendChild(lightbox);
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox || e.target.closest(".btp-lightbox-close")) {
        lightbox.classList.remove("open");
      }
    });
    return lightbox;
  }

  function openLightbox(src, alt) {
    const lb = ensureLightbox();
    const img = lb.querySelector("img");
    img.src = src;
    img.alt = alt || "";
    lb.classList.add("open");
  }

  /* ── 6. OPEN / CLOSE ────────────────────────────────── */
  function openBTP(key) {
    if (!P[key]) return;
    currentKey = key;
    lastFocused = document.activeElement;
    modal.innerHTML = render(key);
    modal.scrollTop = 0;
    backdrop.classList.add("open");
    const lockScrollY = window.scrollY || window.pageYOffset || 0;
    document.body.dataset.btpScrollY = String(lockScrollY);
    document.body.style.top = `-${lockScrollY}px`;
    document.body.classList.add("btp-lock");

    modal.querySelectorAll(".btp-gallery-item").forEach((item) => {
      const open = () =>
        openLightbox(item.dataset.img, item.querySelector("img")?.alt);
      item.addEventListener("click", open);
      item.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      });
    });

    document.getElementById("btpClose")?.addEventListener("click", closeBTP);
    requestAnimationFrame(setupReveal);
  }

  function closeBTP() {
    backdrop.classList.remove("open");
    document.body.classList.remove("btp-lock");
    const restoreY = parseInt(document.body.dataset.btpScrollY || "0", 10);
    document.body.style.top = "";
    delete document.body.dataset.btpScrollY;
    window.scrollTo(0, restoreY);
    lightbox?.classList.remove("open");
    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
    setTimeout(() => {
      if (!backdrop.classList.contains("open")) modal.innerHTML = "";
    }, 450);
  }

  window.openBehindProject = openBTP;
  window.closeBehindProject = closeBTP;

  /* ── 7. GLOBAL BINDINGS ─────────────────────────────── */
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".btp-btn");
    if (btn) {
      e.preventDefault();
      e.stopPropagation();
      spawnRipple(btn, e);
      const key = btn.getAttribute("data-project");
      openBTP(key);
      return;
    }
    if (e.target === backdrop) closeBTP();
  });

  document.addEventListener("keydown", (e) => {
    if (e.target.closest(".btp-btn") && (e.key === "Enter" || e.key === " ")) {
      e.stopPropagation();
    }
    if (e.key === "Escape") {
      if (lightbox?.classList.contains("open")) {
        lightbox.classList.remove("open");
        return;
      }
      if (backdrop.classList.contains("open")) closeBTP();
    }
  });

  // Re-render live if the user is mid-modal and toggles language
  document.getElementById("langToggle")?.addEventListener("click", () => {
    if (backdrop.classList.contains("open") && currentKey) {
      setTimeout(() => {
        const scrollPos = modal.scrollTop;
        modal.innerHTML = render(currentKey);
        modal.scrollTop = scrollPos;
        modal.querySelectorAll(".btp-gallery-item").forEach((item) => {
          const open = () =>
            openLightbox(item.dataset.img, item.querySelector("img")?.alt);
          item.addEventListener("click", open);
        });
        document
          .getElementById("btpClose")
          ?.addEventListener("click", closeBTP);
        setupReveal();
      }, 30);
    }
  });

  /* ── 8. RIPPLE EFFECT ───────────────────────────────── */
  function spawnRipple(btn, e) {
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.className = "btp-ripple";
    const size = Math.max(rect.width, rect.height) * 1.8;
    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = e.clientX - rect.left - size / 2 + "px";
    ripple.style.top = e.clientY - rect.top - size / 2 + "px";
    btn.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  }
})();
