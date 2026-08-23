(function () {
  "use strict";

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
        en: "MADE CARE is a single-page site for a private clinic. The brief was simple: make a new patient trust the practice within the first scroll — so the page leads with services and doctors instead of a generic hero banner, and keeps a visual language people already associate with medical care: blues, whites, and plenty of breathing room.",
        ar: "ميد كير موقع من صفحة واحدة لعيادة خاصة. الهدف كان بسيط: تخلي المريض الجديد يثق في العيادة من أول سكرول، فالصفحة بتبدأ مباشرة بالخدمات والأطباء بدل بانر ترحيبي عام، وبتحافظ على لغة بصرية قريبة من اللي الناس متعودة تشوفه في المجال الطبي: أزرق، أبيض، ومساحات فاضية كتير.",
      },
      challenge: {
        en: "Most clinic websites either look sterile and corporate or try too hard to be friendly and end up looking unprofessional. Doctor bios and services also needed to load fast on the older Android phones a lot of patients in this segment actually use, not just flagship devices.",
        ar: "أغلب مواقع العيادات إما بتبان باردة وبيروقراطية، أو بتحاول توّدي ودّ زيادة فتبان مش احترافية. مع ذلك كان لازم بيانات الأطباء والخدمات تحمّل بسرعة حتى على موبايلات أندرويد قديمة، مش بس الأجهزة الحديثة، لأن دي شريحة كبيرة من المرضى فعلاً بتستخدمها.",
      },
      approach: {
        en: "I split the page into three blocks — services, doctors, and patient trust signals — each written as an independent HTML partial so the clinic's team could hand me new doctor info without me touching the layout. Blue was kept to two shades only; everything else stays near-white to avoid visual noise.",
        ar: "قسّمت الصفحة لثلاث كتل: الخدمات، الأطباء، ومؤشرات الثقة، وكل كتلة مبنية كجزء HTML مستقل عشان فريق العيادة يقدر يبعتلي بيانات طبيب جديد من غير ما ألمس التصميم. اقتصرت درجات الأزرق على درجتين بس، والباقي كله قريب من الأبيض عشان مفيش تشويش بصري.",
      },
      features: [
        {
          icon: "fa-user-doctor",
          title: { en: "Doctor Profiles", ar: "ملفات الأطباء" },
          desc: {
            en: "Each doctor gets a compact card with specialty, a short bio line, and a visible availability tag — no scrolling through a full paragraph to find what matters.",
            ar: "كل طبيب ليه كارت مختصر فيه التخصص وسطر بسيط عنه وعلامة توفر واضحة، من غير ما المريض يقرأ فقرة كاملة عشان يوصل للمعلومة المهمة.",
          },
        },
        {
          icon: "fa-notes-medical",
          title: { en: "Services Grid", ar: "شبكة الخدمات" },
          desc: {
            en: "Services are grouped by department with one icon per card, so a patient can scan the whole list on a single screen without pinch-zooming.",
            ar: "الخدمات متجمعة حسب القسم بأيقونة واحدة لكل كارت، عشان المريض يقدر يلاقي اللي محتاجه من شاشة واحدة من غير تكبير.",
          },
        },
        {
          icon: "fa-calendar-check",
          title: { en: "Appointment CTA", ar: "دعوة لحجز موعد" },
          desc: {
            en: "A booking button reappears after every major section instead of sitting only in the header, since that's usually where visitors actually decide to act.",
            ar: "زرار الحجز بيتكرر بعد كل قسم رئيسي مش بس في الهيدر، لأن دي غالبًا اللحظة اللي الزائر بيقرر فيها فعلاً يحجز.",
          },
        },
        {
          icon: "fa-mobile-screen",
          title: { en: "Mobile-First Layout", ar: "تصميم يبدأ من الموبايل" },
          desc: {
            en: "Built for a 375px screen first, then widened — the reverse order avoids the usual problem of desktop-first sites feeling cramped on phones.",
            ar: "اتبنى على مقاس شاشة 375 بكسل الأول، وبعدين اتوسع تدريجيًا؛ الترتيب العكسي ده بيتجنب مشكلة المواقع اللي بتتصمم للديسكتوب الأول وبتبان ضيقة على الموبايل.",
          },
        },
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      process: [
        {
          title: { en: "Content Inventory", ar: "حصر المحتوى" },
          desc: {
            en: "Listed every service and doctor with the clinic owner before opening the code editor, to avoid restructuring sections halfway through.",
            ar: "عملت جرد لكل خدمة وطبيب مع صاحب العيادة قبل ما افتح أي محرر أكواد، عشان أتجنب إعادة ترتيب الأقسام في نص الشغل.",
          },
        },
        {
          title: { en: "Skeleton First", ar: "الهيكل أولاً" },
          desc: {
            en: "Wrote the semantic HTML with no styling at all first, so the reading order made sense even with CSS switched off.",
            ar: "كتبت الـ HTML الدلالي من غير أي تنسيق في البداية، عشان ترتيب القراءة يبقى منطقي حتى لو الـ CSS اتقفل.",
          },
        },
        {
          title: { en: "Color & Type", ar: "اللون والخط" },
          desc: {
            en: "Locked the blue palette and spacing scale once the skeleton was approved, then applied it section by section.",
            ar: "ثبّت درجات الأزرق ومقياس المسافات بعد ما اتعتمد الهيكل، وبعدين طبّقتهم قسم قسم.",
          },
        },
        {
          title: { en: "QA & Deploy", ar: "الفحص والنشر" },
          desc: {
            en: "Checked on three real devices belonging to the client's staff before pushing to Vercel — not just browser dev tools.",
            ar: "جربت الموقع على 3 أجهزة حقيقية بتاعة موظفين العيادة قبل ما أرفعه على Vercel، مش بس أدوات المتصفح.",
          },
        },
      ],
      problems: [
        {
          problem: {
            en: "Doctor cards started looking crowded the moment we added a fourth field (rating).",
            ar: "بطاقات الأطباء بقت مزدحمة أول ما ضفنا حقل رابع وهو التقييم.",
          },
          solution: {
            en: "Moved the rating into a small badge inside the specialty tag instead of a separate line, keeping the card at three visual layers.",
            ar: "نقلت التقييم جوه وسم صغير داخل تاج التخصص بدل سطر مستقل، وخليت الكارت على 3 طبقات بصرية بس.",
          },
        },
        {
          problem: {
            en: "Some service descriptions ran to five lines while others were one, breaking the grid's rhythm.",
            ar: "بعض أوصاف الخدمات كانت بتوصل لخمس أسطر وغيرها سطر واحد، فكانت بتكسر إيقاع الشبكة.",
          },
          solution: {
            en: "Capped every description at two lines with a fade, and moved the rest into an optional 'read more' instead of forcing every card to match the longest one.",
            ar: "حددت كل وصف بسطرين مع تلاشي بسيط، ونقلت الباقي لخيار 'اقرأ أكتر' بدل ما أخلي كل الكروت بطول أطول وصف.",
          },
        },
      ],
      performance: {
        en: "Images are compressed and lazy-loaded past the first screen; animations only touch transform and opacity so they don't force layout recalculation on the mid-range phones this audience actually uses.",
        ar: "الصور متضغوطة ومحمّلة كسول بعد الشاشة الأولى، والحركات كلها بتشتغل على transform وopacity بس عشان متجبرش المتصفح يعيد حساب التخطيط على الأجهزة المتوسطة اللي الجمهور ده فعلاً بيستخدمها.",
      },
      lessons: {
        en: "Working on this one changed how early I plan hierarchy now — before this project I used to jump into CSS almost immediately, and it always cost me a rebuild later.",
        ar: "الشغل على المشروع ده غيّر إمتى بقيت بخطط للتسلسل الهرمي؛ قبل كده كنت بادخل في الـ CSS بسرعة، وده كان دايمًا بيكلفني إعادة بناء بعدين.",
      },
      result: {
        en: "A clinic front page a first-time visitor can read in under a minute and still walk away knowing exactly which doctor to book.",
        ar: "واجهة عيادة الزائر الجديد يقدر يقراها في أقل من دقيقة ويطلع عارف يحجز عند مين بالظبط.",
      },
    },

    "tony-romany": {
      accent: "#fbbf24",
      rgb: "251,191,36",
      icon: "fa-palette",
      hero: "Screenshot_9-8-2026_13117_.jpeg",
      gallery: ["Screenshot_9-8-2026_13117_.jpeg"],
      title: { en: "Tony Romany Portfolio", ar: "بورتفوليو توني رماني" },
      tag: {
        en: "Graphic Design · Freelance Project",
        ar: "تصميم جرافيك · مشروع فريلانس",
      },
      summary: {
        en: "A cinematic dark-themed portfolio for a graphic designer, built around bold typography, an animated starfield hero, and a story-driven case-study flow.",
        ar: "بورتفوليو سينمائي بخلفية داكنة لمصمم جرافيك، مبني على خطوط جريئة وخلفية نجوم متحركة وعرض مشاريع بأسلوب قصصي.",
      },
      demo: "https://portfolio-tony-gilt.vercel.app/",
      github: "https://github.com/peteremad438-ux/portfolio-tony.git",
      overview: {
        en: "Tony designs identities and packaging for small brands and founders, so his own site had one job: prove that in the first five seconds. Instead of a typical portfolio homepage, it opens on a full-bleed hero with a slow-moving starfield behind an oversized serif headline, then settles into a straightforward case-study flow.",
        ar: "توني بيصمم هويات بصرية وتغليف لبراندات ومؤسسين صغيرين، فموقعه الشخصي كان له مهمة واحدة: يثبت الكلام ده من أول خمس ثواني. بدل الصفحة الرئيسية التقليدية للبورتفوليوهات، الموقع بيبدأ بهيرو بيغطي الشاشة كاملة وخلفية نجوم بتتحرك ببطء خلف عنوان بخط serif كبير، وبعدين بيدخل في عرض مشاريع مباشر.",
      },
      challenge: {
        en: "A designer's portfolio gets judged harder than any client site he'd ever build — people expect real art direction, not a template with his name on it. At the same time it still had to load fast on mobile, where most of his inbound leads land first.",
        ar: "بورتفوليو أي مصمم بيتحاكم بمعايير أعلى من أي موقع عميل هيصممه، لأن الناس متوقعة إخراج فني حقيقي مش قالب باسمه بس. في نفس الوقت كان لازم يحمّل بسرعة على الموبايل، لأن أغلب طلبات العملاء بتوصله من هناك الأول.",
      },
      approach: {
        en: "I tried three starfield densities before landing on one subtle enough not to fight the headline for attention, then paired it with one warm orange used only on calls-to-action so the eye always knows where to go next.",
        ar: "جربت 3 مستويات مختلفة من كثافة النجوم قبل ما أستقر على مستوى خفيف مايشتتش الانتباه عن العنوان، وبعدين استخدمت لون برتقالي دافئ واحد بس على أزرار الدعوة للإجراء عشان العين تعرف تروح فين بعد كده.",
      },
      features: [
        {
          icon: "fa-stars",
          title: { en: "Animated Starfield Hero", ar: "هيرو بنجوم متحركة" },
          desc: {
            en: "A lightweight canvas layer with around 80 particles — enough to read as depth, capped low enough to stay off the main thread.",
            ar: "طبقة canvas خفيفة فيها حوالي 80 نقطة، كفاية عشان تدي إحساس بالعمق من غير ما تثقل على الـ main thread.",
          },
        },
        {
          icon: "fa-swatchbook",
          title: { en: "Identity-Led Sections", ar: "أقسام تعكس الهوية" },
          desc: {
            en: "About, Services, Work, Process, and Pricing read as one continuous brand story rather than five disconnected blocks.",
            ar: "أقسام About وServices وWork وProcess وPricing بتتقرأ كقصة براند واحدة متصلة مش خمس كتل منفصلة.",
          },
        },
        {
          icon: "fa-arrow-pointer",
          title: { en: "Dual CTA Header", ar: "هيدر بدعوتين للإجراء" },
          desc: {
            en: "'Start a Project' stays pinned in the header while 'View My Work' sits in the hero — two different intents, two different buttons.",
            ar: "زرار 'Start a Project' ثابت في الهيدر و'View My Work' في الهيرو، لأنهم نيتين مختلفين فاستحقوا زرارين مختلفين.",
          },
        },
        {
          icon: "fa-mobile-screen",
          title: { en: "Responsive Typography", ar: "طباعة متجاوبة" },
          desc: {
            en: "Headline size is driven by clamp(), tested from a 360px phone to a 1920px monitor rather than at three fixed breakpoints.",
            ar: "حجم العنوان متحكم فيه بـ clamp() واتجرب من شاشة 360 بكسل لحد شاشة 1920، مش على 3 نقاط توقف ثابتة بس.",
          },
        },
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      process: [
        {
          title: { en: "Palette First", ar: "اللوحة أولاً" },
          desc: {
            en: "Picked the near-black background and ember accent before writing a single line of layout code.",
            ar: "اخترت الخلفية شبه السوداء ولون الإمبر قبل ما أكتب أي سطر تخطيط.",
          },
        },
        {
          title: { en: "Hero Prototyping", ar: "تجربة الهيرو" },
          desc: {
            en: "Rebuilt the starfield four separate times until the motion felt cinematic instead of distracting.",
            ar: "أعدت بناء خلفية النجوم 4 مرات لحد ما الحركة حسّت سينمائية مش مشتتة.",
          },
        },
        {
          title: { en: "Section Build", ar: "بناء الأقسام" },
          desc: {
            en: "Each section was coded as its own reusable block so future case studies slot in without touching the rest of the page.",
            ar: "كل قسم اتكتب ككتلة مستقلة قابلة لإعادة الاستخدام عشان أي دراسة حالة جديدة تتضاف من غير ما تلمس باقي الصفحة.",
          },
        },
        {
          title: { en: "QA & Deploy", ar: "الفحص والنشر" },
          desc: {
            en: "Profiled the animation's frame rate on a mid-range Android before shipping, not just on my own laptop.",
            ar: "قست معدل الفريمات للحركة على موبايل أندرويد متوسط قبل النشر، مش على اللابتوب بتاعي بس.",
          },
        },
      ],
      problems: [
        {
          problem: {
            en: "Early versions of the starfield pulled focus away from the headline entirely.",
            ar: "النسخ الأولى من خلفية النجوم كانت بتسحب الانتباه من العنوان تمامًا.",
          },
          solution: {
            en: "Dropped opacity to 35%, slowed the drift speed by half, and fixed it behind a solid-contrast text layer.",
            ar: "قللت الشفافية لـ 35%، وبطّأت سرعة الحركة، وثبّتها خلف طبقة نص بتباين قوي.",
          },
        },
        {
          problem: {
            en: "Oversized serif headlines clipped at the edges on anything under 400px wide.",
            ar: "العناوين الكبيرة بخط serif كانت بتتقص من الحواف على أي شاشة أضيق من 400 بكسل.",
          },
          solution: {
            en: "Swapped fixed font sizes for clamp() so the headline scales continuously instead of jumping between breakpoints.",
            ar: "استبدلت الأحجام الثابتة بـ clamp() عشان العنوان يتغير بشكل متصل بدل القفز بين نقاط التوقف.",
          },
        },
      ],
      performance: {
        en: "The starfield and glow effects run on transform/opacity only and throttle their update rate, which kept things smooth without draining battery on the phones most visitors browse from.",
        ar: "تأثيرات النجوم والتوهج بتشتغل على transform وopacity بس ومعدل تحديثها محدود، وده خلى الأداء سلس من غير استهلاك بطارية زيادة على الموبايلات اللي أغلب الزوار بيستخدموها.",
      },
      lessons: {
        en: "Building a portfolio for a designer taught me to cut effects I personally liked but that hadn't earned their place — restraint read as more expensive than adding one more animation ever would.",
        ar: "تصميم بورتفوليو لمصمم علّمني أشيل تأثيرات كنت شخصيًا بحبها بس مكنتش مستحقة مكانها؛ البساطة بانت أغلى بكتير من أي أنيميشن إضافي.",
      },
      result: {
        en: "A portfolio that reads as art-directed rather than templated, and still loads comfortably on the phones his leads actually browse it from.",
        ar: "بورتفوليو بيبان مُخرَج فنيًا مش قالب جاهز، ولسه بيحمّل بارتياح على الموبايلات اللي عملاؤه فعلاً بيتصفحوا منها.",
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
        en: "Electro Shop is a vanilla-JS storefront built to answer a question I kept hearing: does e-commerce actually need a framework? Cart, wishlist, comparison, and search all stay in sync using one shared state object and plain functions — no React, no build step.",
        ar: "إلكترو شوب متجر إلكتروني مبني بـ JavaScript خام، اتعمل عشان أجاوب على سؤال كنت بسمعه كتير: هل التجارة الإلكترونية فعلاً محتاجة فريمورك؟ السلة والمفضلة والمقارنة والبحث كلهم متزامنين باستخدام كائن حالة واحد ودوال بسيطة، من غير React ولا خطوة بناء.",
      },
      challenge: {
        en: "Four features — search, comparison, wishlist, and cart — all needed to read and write the same data without a framework's built-in reactivity, and without the event listeners turning into an unmanageable mess.",
        ar: "أربع ميزات — البحث والمقارنة والمفضلة والسلة — كانوا محتاجين يقروا ويكتبوا في نفس البيانات من غير reactivity جاهزة من فريمورك، وبدون ما الـ event listeners تتحول لفوضى صعب التحكم فيها.",
      },
      approach: {
        en: "I put cart, wishlist, and comparison into one JS object with small pure functions to mutate it, then re-rendered only the DOM fragments that actually changed — essentially hand-rolling the one part of a framework I actually needed.",
        ar: "جمّعت السلة والمفضلة والمقارنة في كائن JS واحد مع دوال بسيطة للتعديل عليه، وبعدين بعيد رسم أجزاء الـ DOM اللي اتغيرت فعلاً بس — يعني بنيت يدويًا الجزء الوحيد من الفريمورك اللي كنت محتاجه فعلاً.",
      },
      features: [
        {
          icon: "fa-magnifying-glass",
          title: { en: "Live Search", ar: "بحث فوري" },
          desc: {
            en: "Filters the product grid as you type, debounced by 200ms so it doesn't re-render on every keystroke.",
            ar: "بيفلتر شبكة المنتجات وانت بتكتب، مع تأخير 200 ميلي ثانية عشان مايعيدش الرسم مع كل ضغطة زرار.",
          },
        },
        {
          icon: "fa-scale-balanced",
          title: { en: "Product Comparison", ar: "مقارنة المنتجات" },
          desc: {
            en: "Pick up to three products and see their specs lined up side by side, with no page reload.",
            ar: "اختار لحد 3 منتجات وشوف مواصفاتهم جنب بعض في نفس الوقت، من غير إعادة تحميل الصفحة.",
          },
        },
        {
          icon: "fa-heart",
          title: { en: "Wishlist", ar: "قائمة المفضلة" },
          desc: {
            en: "Saved products persist in localStorage, so the list survives a closed tab or a phone restart.",
            ar: "المنتجات المحفوظة بتتخزن في localStorage، فالقائمة بتفضل موجودة حتى لو قفلت التاب أو عملت ريستارت للموبايل.",
          },
        },
        {
          icon: "fa-cart-shopping",
          title: { en: "Cart & Checkout Flow", ar: "سلة وخطوات الدفع" },
          desc: {
            en: "Quantity steppers update the total instantly, with a summary screen before the final confirm step.",
            ar: "أزرار التحكم في الكمية بتحدث الإجمالي فورًا، مع شاشة ملخص قبل خطوة التأكيد النهائية.",
          },
        },
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
      process: [
        {
          title: { en: "State Shape First", ar: "تصميم شكل الحالة" },
          desc: {
            en: "Sketched the cart/wishlist data structure on paper before opening the editor — the UI followed from that, not the other way around.",
            ar: "رسمت شكل بيانات السلة والمفضلة على ورقة قبل ما افتح المحرر؛ الواجهة اتبنت بناءً على ده مش العكس.",
          },
        },
        {
          title: { en: "Card Template", ar: "قالب البطاقة" },
          desc: {
            en: "Built one JS function that generates a product card from data, reused for the grid, comparison view, and wishlist alike.",
            ar: "بنيت دالة JS واحدة بتنتج كارت منتج من البيانات، واستخدمتها في الشبكة وشاشة المقارنة والمفضلة كلهم.",
          },
        },
        {
          title: { en: "Wire the Events", ar: "ربط الأحداث" },
          desc: {
            en: "Connected search, filters, and cart actions through event delegation on the grid container instead of per-card listeners.",
            ar: "ربطت أحداث البحث والفلاتر والسلة عن طريق event delegation على حاوية الشبكة بدل listener لكل كارت لوحده.",
          },
        },
        {
          title: { en: "Perf Pass", ar: "تحسين الأداء" },
          desc: {
            en: "Profiled with Chrome DevTools, found the icon library was reinitializing per card, and fixed it.",
            ar: "استخدمت Chrome DevTools للفحص، اكتشفت إن مكتبة الأيقونات كانت بتتهيأ لكل كارت لوحده، وصلحتها.",
          },
        },
      ],
      problems: [
        {
          problem: {
            en: "Typing fast in the search box re-rendered the entire grid on every character, and it visibly lagged on a mid-range phone.",
            ar: "الكتابة السريعة في خانة البحث كانت بتعيد رسم الشبكة كلها مع كل حرف، وده كان واضح إنه بيهنج على موبايل متوسط.",
          },
          solution: {
            en: "Added a 200ms debounce and diffed the new result set against the old one so only changed cards get touched.",
            ar: "أضفت تأخير 200 ميلي ثانية وقارنت النتائج الجديدة بالقديمة عشان بس الكروت اللي اتغيرت هي اللي تتلمس.",
          },
        },
        {
          problem: {
            en: "Refreshing the page wiped the cart every time — the kind of bug that kills trust in a shop instantly.",
            ar: "تحديث الصفحة كان بيمسح السلة كل مرة، وده نوع باج بيكسر الثقة في المتجر فورًا.",
          },
          solution: {
            en: "Added a thin serialization layer over localStorage that syncs on every cart mutation.",
            ar: "أضفت طبقة تسلسل بسيطة فوق localStorage بتتزامن مع أي تعديل في السلة.",
          },
        },
      ],
      performance: {
        en: "Product images lazy-load below the fold, and the icon library now initializes once at page load instead of once per card — that single fix removed the biggest layout-thrashing bottleneck in the whole build.",
        ar: "صور المنتجات بتحمّل كسول أسفل الشاشة الأولى، ومكتبة الأيقونات بقت بتتهيأ مرة واحدة عند تحميل الصفحة بدل كل كارت لوحده — التصليحة دي لوحدها شالت أكبر عنق زجاجة في إعادة تنسيق الصفحة.",
      },
      lessons: {
        en: "Building comparison and wishlist logic by hand made me appreciate exactly how much a reactive framework automates, and gave me a much better sense of when skipping one is actually worth it.",
        ar: "بناء منطق المقارنة والمفضلة يدويًا خلاني أقدّر بالظبط قد إيه الفريمورك الـ reactive بيأتمت، وعرّفني أحسن إمتى فعلاً يستاهل تتجاهله.",
      },
      result: {
        en: "A framework-free storefront that handles four interdependent features smoothly enough that most people never notice there's no React underneath it.",
        ar: "متجر بدون فريمورك بيدير أربع ميزات مترابطة بسلاسة، لدرجة إن أغلب الناس مش هتلاحظ إن مفيش React تحته.",
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
        en: "A client project telling the life of Saint Paul the Apostle for readers coming to it in Arabic first — built as a chaptered, journey-style read rather than a single long article.",
        ar: "مشروع لعميل بيحكي سيرة القديس بولس الرسول لقارئ بيقرا بالعربي في المقام الأول، متبني كرحلة مقسمة على فصول مش مقالة طويلة واحدة.",
      },
      challenge: {
        en: "Long historical and spiritual content turns into a wall of text fast. The client also wanted the Arabic version to be the primary experience, not a translated afterthought bolted onto an English layout.",
        ar: "المحتوى التاريخي والروحي الطويل بيتحول لحائط نصوص بسرعة. العميل كمان كان عايز النسخة العربية تبقى هي التجربة الأساسية، مش ترجمة بعدين على تصميم إنجليزي أصلاً.",
      },
      approach: {
        en: "I broke the biography into chapters with a visual timeline and pulled key teachings out as standout quotes, then built the whole typography system RTL-first and only mirrored it for English afterward.",
        ar: "قسّمت السيرة على فصول مع خط زمني بصري وسحبت أهم التعاليم كاقتباسات بارزة، وبنيت نظام الطباعة كله بأسلوب RTL أولاً وعكسته للإنجليزي بعد كده.",
      },
      features: [
        {
          icon: "fa-route",
          title: { en: "Journey Timeline", ar: "خط الرحلات الزمني" },
          desc: {
            en: "A horizontal timeline marking each of Paul's missionary journeys with the years and key stops.",
            ar: "خط زمني أفقي يوضح كل رحلة من رحلات بولس التبشيرية بالسنين وأهم المحطات.",
          },
        },
        {
          icon: "fa-quote-left",
          title: { en: "Pull-Quotes", ar: "اقتباسات بارزة" },
          desc: {
            en: "Key teachings are lifted out of the body text and set in a larger, distinct style so they're easy to find on a re-read.",
            ar: "أهم التعاليم متسحوبة من النص وموضوعة بخط أكبر وستايل مختلف عشان يسهل الرجوع ليها بعد كده.",
          },
        },
        {
          icon: "fa-language",
          title: { en: "Arabic-First Typography", ar: "طباعة عربية أولاً" },
          desc: {
            en: "Cairo, tuned in line-height and size specifically for long paragraphs — not the default settings most templates ship with.",
            ar: "خط Cairo متضبوط في المسافة بين الأسطر والحجم مخصوص للفقرات الطويلة، مش الإعدادات الافتراضية اللي أغلب القوالب بتيجي بيها.",
          },
        },
        {
          icon: "fa-images",
          title: { en: "Editorial Sections", ar: "أقسام تحريرية" },
          desc: {
            en: "Biography and teachings sit in visually distinct sections so a reader can jump straight to what they came for.",
            ar: "السيرة والتعاليم في أقسام متمايزة بصريًا عشان القارئ يقدر يوصل مباشرة للي جاي عشانه.",
          },
        },
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "RTL Layout"],
      process: [
        {
          title: { en: "Outline With the Client", ar: "التخطيط مع العميل" },
          desc: {
            en: "Went through the source material together and agreed on chapter breaks before any design work started.",
            ar: "راجعنا المصدر مع بعض واتفقنا على تقسيم الفصول قبل ما أي شغل تصميم يبدأ.",
          },
        },
        {
          title: { en: "RTL Foundation", ar: "أساس RTL" },
          desc: {
            en: "Built spacing and alignment with logical CSS properties from day one, instead of writing left/right rules and fixing them for RTL later.",
            ar: "بنيت المسافات والمحاذاة بخصائص CSS منطقية من أول يوم، بدل ما أكتب قواعد left/right وأصلحها لـ RTL بعد كده.",
          },
        },
        {
          title: { en: "Type Scale", ar: "مقياس الخطوط" },
          desc: {
            en: "Tested three line-heights on printed pages before settling on the one that felt least tiring for long Arabic paragraphs.",
            ar: "جربت 3 مسافات مختلفة بين الأسطر على صفحات مطبوعة قبل ما أستقر على اللي حسّيت إنها الأقل إجهادًا للفقرات العربية الطويلة.",
          },
        },
        {
          title: { en: "Review & Launch", ar: "المراجعة والإطلاق" },
          desc: {
            en: "Two content review rounds with the client, then final polish and deployment.",
            ar: "جولتين مراجعة محتوى مع العميل، وبعدين لمسات أخيرة ونشر.",
          },
        },
      ],
      problems: [
        {
          problem: {
            en: "Nested sections mirrored their spacing incorrectly once RTL was switched on — margins that should've stayed put flipped sides.",
            ar: "الأقسام المتداخلة كانت بتعكس المسافات بشكل غلط أول ما اتفعّل RTL، ومسافات كان المفروض تفضل زي ما هي انقلبت.",
          },
          solution: {
            en: "Rebuilt every margin and padding rule using logical properties (margin-inline-start, not margin-left) so direction stopped being a special case.",
            ar: "أعدت بناء كل قواعد الهوامش باستخدام خصائص منطقية (margin-inline-start بدل margin-left) عشان الاتجاه يبطل يبقى حالة خاصة.",
          },
        },
        {
          problem: {
            en: "Long paragraphs on mobile read as dense, gray blocks with nothing to anchor the eye.",
            ar: "الفقرات الطويلة على الموبايل كانت تبان كتل رمادية كثيفة من غير حاجة تثبت نظر القارئ.",
          },
          solution: {
            en: "Increased line-height and broke sections with small icon dividers every few paragraphs to give the eye a place to rest.",
            ar: "زودت المسافة بين الأسطر، وحطيت فواصل صغيرة بأيقونات كل كذا فقرة عشان تدي العين مكان تريح فيه.",
          },
        },
      ],
      performance: {
        en: "Fonts are subset and preconnected, and images below the timeline load lazily — the goal was a fast first paint even on the 3G most readers of this kind of content browse on.",
        ar: "الخطوط متحملة جزئيًا ومربوطة مسبقًا، والصور أسفل الخط الزمني بتحمّل كسول؛ الهدف كان أول عرض سريع حتى على شبكة 3G اللي أغلب قراء المحتوى ده بيستخدموها.",
      },
      lessons: {
        en: "This one taught me to design the Arabic typography first and treat English as the derived version — every previous project I'd done it the other way around, and it always showed.",
        ar: "المشروع ده علّمني أصمم الطباعة العربية أولاً وأتعامل مع الإنجليزي كنسخة مشتقة منها؛ كل مشروع فاتني كنت بعمل العكس، وده كان دايمًا باين في النتيجة.",
      },
      result: {
        en: "A long biography that reads as a paced journey instead of an assignment, in the language most of its actual readers think in.",
        ar: "سيرة طويلة بتتقرأ كرحلة متزنة مش كواجب مدرسي، باللغة اللي أغلب القراء الفعليين بيفكروا بيها.",
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
        en: "ENGAGE GYM had to sell memberships without leaning on the usual stock-photo gym-website formula. The plan was to make the interface itself feel energetic — bold red, high contrast, sharp dividers — so the design carries the motivation, not just the photography.",
        ar: "إنجيج جيم كان محتاج يبيع اشتراكات من غير ما يعتمد على قالب صور الجيم الجاهزة المعتادة. الخطة كانت خلي الواجهة نفسها تحس بالحماس: أحمر جريء وتباين عالي وفواصل حادة، عشان التحفيز يجي من التصميم نفسه مش الصور بس.",
      },
      challenge: {
        en: "Fitness sites collapse into the same template fast — generic photos, generic red-on-black, nothing that says this particular gym. The membership tiers also needed to feel like a genuine comparison, not a pricing table copy-pasted from somewhere else.",
        ar: "مواقع الجيم بتقع بسهولة في نفس القالب: صور عامة، أحمر على أسود بشكل نمطي، مفيش حاجة بتقول إن ده الجيم ده تحديدًا. خطط الاشتراك كمان كان لازم تحس كمقارنة حقيقية، مش جدول أسعار متنسخ من مكان تاني.",
      },
      approach: {
        en: "I kept the red to one accent used sparingly against dark sections, added angular dividers between blocks instead of straight lines, and built the pricing cards on equal-height grid rows so no plan looks like an afterthought.",
        ar: "خليت الأحمر لون واحد مستخدم بحرص فوق أقسام داكنة، وحطيت فواصل زاوية بين الكتل بدل خطوط مستقيمة، وبنيت كروت الأسعار على صفوف شبكة متساوية الارتفاع عشان ولا خطة تحس إنها إضافة متأخرة.",
      },
      features: [
        {
          icon: "fa-list-check",
          title: { en: "Membership Tiers", ar: "خطط الاشتراك" },
          desc: {
            en: "Three plans laid out with matching feature rows so the difference between them is obvious at a glance, not buried in fine print.",
            ar: "3 خطط معروضة بصفوف مزايا متطابقة عشان الفرق بينهم يبان من نظرة واحدة مش مدفون في خط صغير.",
          },
        },
        {
          icon: "fa-dumbbell",
          title: { en: "Program Showcase", ar: "عرض البرامج" },
          desc: {
            en: "Strength, cardio, and class programs each get their own visual card instead of a shared list.",
            ar: "برامج القوة والكارديو والحصص كل واحد ليه كارت بصري مستقل بدل قائمة مشتركة.",
          },
        },
        {
          icon: "fa-user-group",
          title: { en: "Trainer Highlights", ar: "أبرز المدربين" },
          desc: {
            en: "Trainer profiles sit right after the programs section, on the theory that seeing who's coaching you matters as much as the program itself.",
            ar: "ملفات المدربين موضوعة مباشرة بعد قسم البرامج، على أساس إن تشوف مين هيدربك بيهم بقد ما البرنامج نفسه بيهم.",
          },
        },
        {
          icon: "fa-bolt",
          title: { en: "Bold Micro-Interactions", ar: "تفاعلات دقيقة قوية" },
          desc: {
            en: "Hover states and scroll-triggered emphasis keep momentum going without needing autoplay video anywhere on the page.",
            ar: "حالات hover وتأثيرات عند التمرير بتحافظ على الزخم من غير الحاجة لفيديو تشغيل تلقائي في أي مكان بالصفحة.",
          },
        },
      ],
      tech: ["HTML5", "CSS3", "JavaScript"],
      process: [
        {
          title: { en: "Mood & Palette", ar: "المزاج واللوحة" },
          desc: {
            en: "Locked red-on-dark early and tested it against three alternative color pairs before committing.",
            ar: "ثبّت الأحمر على الداكن بدري وجربته مقابل 3 توليفات ألوان تانية قبل ما أستقر عليه.",
          },
        },
        {
          title: { en: "Section Rhythm", ar: "إيقاع الأقسام" },
          desc: {
            en: "Alternated light and dark sections deliberately so the page has a visual beat instead of one flat scroll.",
            ar: "بدّلت بين أقسام فاتحة وداكنة بشكل مقصود عشان الصفحة يكون ليها إيقاع بصري مش سكرول مسطح واحد.",
          },
        },
        {
          title: { en: "Interaction Layer", ar: "طبقة التفاعل" },
          desc: {
            en: "Added hover and scroll effects last, after the static layout was already approved — motion should support structure, not fix a weak one.",
            ar: "أضفت تأثيرات hover والسكرول في الآخر بعد ما التصميم الثابت اتعتمد؛ الحركة المفروض تدعم الهيكل مش تصلح واحد ضعيف.",
          },
        },
        {
          title: { en: "QA & Ship", ar: "الفحص والنشر" },
          desc: {
            en: "Tested the angular dividers on five different screen widths, since that's exactly the kind of detail that breaks first.",
            ar: "جربت الفواصل الزاوية على 5 أحجام شاشة مختلفة، لأن ده بالظبط نوع التفاصيل اللي بتتكسر الأول.",
          },
        },
      ],
      problems: [
        {
          problem: {
            en: "Angular dividers built with fixed clip-path values snapped in odd ways on narrow screens.",
            ar: "الفواصل الزاوية اللي كانت مبنية بقيم clip-path ثابتة كانت بتتكسر بشكل غريب على الشاشات الضيقة.",
          },
          solution: {
            en: "Rewrote them with viewport-relative units so the angle stays proportional at any width.",
            ar: "أعدت كتابتهم بوحدات نسبية للشاشة عشان الزاوية تفضل متناسبة على أي عرض.",
          },
        },
        {
          problem: {
            en: "Pricing cards with a different feature count per plan didn't line up, so the cheapest plan looked oddly short.",
            ar: "كروت الأسعار باختلاف عدد المزايا لكل خطة كانت مش متساوية، فالخطة الأرخص كانت بتبان قصيرة بشكل غريب.",
          },
          solution: {
            en: "Switched to CSS Grid with equal-height rows and pinned each card's CTA to the bottom regardless of content length.",
            ar: "استخدمت CSS Grid بصفوف متساوية الارتفاع وثبّت زرار كل كارت في الأسفل بغض النظر عن طول المحتوى.",
          },
        },
      ],
      performance: {
        en: "Heavy gradients are limited to the first two sections only — everything below the fold uses flat colors, which kept scroll performance smooth on mobile GPUs without any visible quality loss.",
        ar: "التدرجات الثقيلة مقتصرة على أول قسمين بس، والباقي كله ألوان مسطحة، وده خلى السكرول سلس على معالجات الموبايل من غير أي فرق في الجودة يتلاحظ.",
      },
      lessons: {
        en: "Realized how much tone a page can carry through color and pacing alone once I stopped reaching for an extra effect every time something felt flat.",
        ar: "لاحظت قد إيه اللون وإيقاع الصفحة لوحدهم ممكن ينقلوا إحساس كامل، أول ما بطلت أضيف تأثير كل ما حسيت إن حاجة بانت مسطحة.",
      },
      result: {
        en: "A gym site where scrolling through membership options feels closer to hyping yourself up for a workout than filling out a form.",
        ar: "موقع جيم السكرول فيه بين خطط الاشتراك حاسس أقرب لتحميس نفسك للتمرين مش ملء فورم.",
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
        en: "A personal archive project celebrating golden-era Egyptian cinema. The live site itself is Arabic-only by design, built to feel like flipping through a vintage film catalogue rather than a Wikipedia-style list.",
        ar: "مشروع شخصي أرشيفي يحتفي بالعصر الذهبي للسينما المصرية، والموقع الفعلي عربي بالكامل بشكل مقصود، مبني ليحس المستخدم إنه بيقلّب في كتالوج أفلام قديم مش قائمة أشبه بويكيبيديا.",
      },
      challenge: {
        en: "Dozens of films, each with a poster, cast list, and summary, needed a browsing structure that doesn't turn into an overwhelming scroll. And since the content is entirely in Arabic, the layout had to be RTL-native from the first line of CSS, not adapted from an English draft.",
        ar: "عشرات الأفلام، كل واحد بالبوستر والكاست والملخص، كانوا محتاجين هيكل تصفح مايتحولش لسكرول مرهق، وبما إن المحتوى كله بالعربي، كان لازم التصميم يكون RTL من أول سطر CSS مش متكيف من مسودة إنجليزية.",
      },
      approach: {
        en: "I used a gold-on-dark cinema palette with a poster-first grid — large thumbnails carry the browsing, and cast/summary details unfold only when a poster is opened, so the grid itself stays clean no matter how many films get added.",
        ar: "استخدمت لوحة ذهبية على خلفية داكنة بروح السينما، مع شبكة تعتمد على البوستر أولاً؛ الصور المصغرة الكبيرة هي اللي بتحمل التصفح، وتفاصيل الكاست والملخص بتظهر بس لما البوستر يتفتح، عشان الشبكة نفسها تفضل نضيفة مهما زاد عدد الأفلام.",
      },
      features: [
        {
          icon: "fa-clapperboard",
          title: { en: "Poster Grid", ar: "شبكة البوسترات" },
          desc: {
            en: "A large, scannable grid where posters do the heavy lifting instead of text labels.",
            ar: "شبكة بوسترات كبيرة سهلة التصفح، البوستر نفسه هو اللي بيوصل المعلومة مش النص.",
          },
        },
        {
          icon: "fa-users",
          title: { en: "Cast Details", ar: "تفاصيل الكاست" },
          desc: {
            en: "Cast and crew appear the moment a film is opened, kept out of the grid view to avoid clutter.",
            ar: "الكاست وطاقم العمل بيظهروا فور فتح الفيلم، بعيد عن عرض الشبكة عشان يتجنب الازدحام.",
          },
        },
        {
          icon: "fa-record-vinyl",
          title: { en: "Vintage Sound Accent", ar: "لمسة صوتية قديمة" },
          desc: {
            en: "A short vinyl-crackle sound cue plays on key interactions — a small, deliberate nod to the era the films are from.",
            ar: "تأثير صوتي قصير بروح خشخشة أسطوانات الفينيل بيشتغل عند التفاعلات الرئيسية، لمسة صغيرة ومقصودة بتحاكي عصر الأفلام نفسها.",
          },
        },
        {
          icon: "fa-language",
          title: { en: "Arabic Native Layout", ar: "تصميم عربي أصيل" },
          desc: {
            en: "Built RTL-first from the ground up, not an Arabic translation layered on top of an English template.",
            ar: "مبني بأسلوب RTL من الأساس، مش ترجمة عربية فوق قالب إنجليزي جاهز.",
          },
        },
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "RTL Layout"],
      process: [
        {
          title: { en: "Content Curation", ar: "تنظيم المحتوى" },
          desc: {
            en: "Picked and grouped films by era and genre before touching any grid code.",
            ar: "اخترت ونظمت الأفلام حسب العصر والنوع قبل ما ألمس أي كود شبكة.",
          },
        },
        {
          title: { en: "Poster Grid Build", ar: "بناء شبكة البوسترات" },
          desc: {
            en: "Built a responsive CSS Grid gallery, tuned specifically for the mixed poster aspect ratios I actually had.",
            ar: "بنيت معرض CSS Grid متجاوب، متضبوط خصيصًا لاختلاف نسب أبعاد البوسترات اللي كانت متاحة فعلاً.",
          },
        },
        {
          title: { en: "Detail Views", ar: "شاشات التفاصيل" },
          desc: {
            en: "Added expandable detail panels per film that load in place instead of navigating to a new page.",
            ar: "أضفت لوحات تفاصيل قابلة للتوسيع لكل فيلم بتفتح في نفس المكان بدل الانتقال لصفحة جديدة.",
          },
        },
        {
          title: { en: "RTL & Sound Polish", ar: "تلميع RTL والصوت" },
          desc: {
            en: "Final pass on RTL spacing edge cases, then added the vinyl sound cue.",
            ar: "مراجعة أخيرة لحالات المسافات في RTL، وبعدين أضفت التأثير الصوتي للفينيل.",
          },
        },
      ],
      problems: [
        {
          problem: {
            en: "Posters came in wildly different aspect ratios and kept breaking the grid's alignment.",
            ar: "البوسترات كانت بنسب أبعاد مختلفة جدًا وكانت بتكسر تناسق الشبكة باستمرار.",
          },
          solution: {
            en: "Forced a consistent aspect-ratio container with object-fit cropping, so every poster fills its slot the same way.",
            ar: "فرضت حاوية بنسبة أبعاد ثابتة مع قص object-fit، عشان كل بوستر يملأ مكانه بنفس الطريقة.",
          },
        },
        {
          problem: {
            en: "The archive felt flat and static — accurate information, but nothing that made it feel like an actual collection.",
            ar: "الأرشيف كان حاسس ثابت ومسطح، معلومات صح بس مفيش حاجة بتخليه يحس بمجموعة فعلية.",
          },
          solution: {
            en: "Added the vinyl sound cue and a slight hover lift on posters — small, but it's the detail people mention first.",
            ar: "أضفت التأثير الصوتي وحركة رفع خفيفة عند الـ hover على البوسترات، تفصيلة صغيرة بس هي أول حاجة الناس بتذكرها.",
          },
        },
      ],
      performance: {
        en: "Posters are lazy-loaded and served at grid-appropriate sizes, so the archive scrolls smoothly even once it passes fifty films.",
        ar: "البوسترات بتحمّل كسول وبأحجام مناسبة للشبكة، فالأرشيف بيفضل بيتصفح بسلاسة حتى لو عدى الخمسين فيلم.",
      },
      lessons: {
        en: "Working in Arabic-only from the start, with no bilingual toggle to fall back on, forced me to get RTL details right the first time instead of patching them in later.",
        ar: "الشغل بالعربي بس من البداية، من غير خيار تبديل لغة أرجع له، خلاني أظبط تفاصيل RTL صح من أول مرة بدل ما أرقعها بعدين.",
      },
      result: {
        en: "A living, browsable tribute to Egyptian classic cinema that reads naturally to the audience it was actually built for.",
        ar: "تحية حية وقابلة للتصفح للسينما المصرية الكلاسيكية، بتتقرأ بشكل طبيعي للجمهور اللي اتبنت عشانه فعلاً.",
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
        en: "A tribute site walking through World Cup history as a fast, scrollable story, built to feel like a highlight reel rather than a stats database.",
        ar: "موقع تحية لتاريخ كأس العالم بيتصفح كقصة سريعة، اتبنى ليحس كملخص لحظات مش قاعدة بيانات إحصائية.",
      },
      challenge: {
        en: "World Cup history spans nearly a century of moments. The real challenge wasn't finding content, it was cutting most of it: picking a narrative thread and a pace that feels curated rather than exhaustive.",
        ar: "تاريخ كأس العالم ممتد لقرب قرن من اللحظات. التحدي الحقيقي مكانش إني ألاقي محتوى، كان إني أشيل أغلبه، وأختار خط سردي وإيقاع يحس منتقى مش شامل لكل حاجة.",
      },
      approach: {
        en: "Content is structured chronologically with a green, pitch-inspired palette, and each era reveals itself on scroll, timed like a montage rather than all appearing at once.",
        ar: "المحتوى منظم زمنيًا بلوحة خضراء مستوحاة من الملعب، وكل عصر بيظهر مع السكرول بتوقيت أشبه بمونتاج مش كله بيظهر مرة واحدة.",
      },
      features: [
        {
          icon: "fa-trophy",
          title: { en: "Iconic Editions", ar: "نسخ أيقونية" },
          desc: {
            en: "A handful of the most iconic editions, each with the facts that actually matter, not a full stat sheet.",
            ar: "عدد قليل من أكتر النسخ أيقونية، كل واحدة بالمعلومات اللي فعلاً مهمة مش جدول إحصائيات كامل.",
          },
        },
        {
          icon: "fa-star",
          title: { en: "Legendary Players", ar: "لاعبون أسطوريون" },
          desc: {
            en: "Player spotlight cards spanning different eras, picked for the moment they're known for rather than career totals.",
            ar: "بطاقات تسليط ضوء على لاعبين من عصور مختلفة، اتختاروا على اللحظة اللي اشتهروا بيها مش إجمالي مشوارهم.",
          },
        },
        {
          icon: "fa-futbol",
          title: { en: "Moment Cards", ar: "بطاقات اللحظات" },
          desc: {
            en: "Short, punchy write-ups of specific unforgettable moments — a sentence or two, not a paragraph.",
            ar: "كتابة قصيرة ومباشرة عن لحظات لا تُنسى محددة، سطر أو اتنين مش فقرة كاملة.",
          },
        },
        {
          icon: "fa-timeline",
          title: { en: "Scroll Storytelling", ar: "سرد بالتمرير" },
          desc: {
            en: "Sections reveal chronologically as you scroll, each firing once so re-scrolling doesn't repeat the animation.",
            ar: "الأقسام بتظهر زمنيًا وانت بتعمل سكرول، وكل قسم بيتفعل مرة واحدة عشان التكرار في السكرول مايكررش الحركة.",
          },
        },
      ],
      tech: ["HTML5", "CSS3", "JavaScript"],
      process: [
        {
          title: { en: "Narrative Outline", ar: "تخطيط السرد" },
          desc: {
            en: "Chose which editions and moments actually earn a spot before writing any HTML.",
            ar: "اخترت أنهي نسخ ولحظات فعلاً تستاهل مكان قبل ما أكتب أي HTML.",
          },
        },
        {
          title: { en: "Section Build", ar: "بناء الأقسام" },
          desc: {
            en: "Each era became its own self-contained scroll section, easy to reorder if the narrative needed it.",
            ar: "كل عصر بقى قسم سكرول مستقل قائم بذاته، سهل إعادة ترتيبه لو السرد احتاج كده.",
          },
        },
        {
          title: { en: "Motion Pass", ar: "مرحلة الحركة" },
          desc: {
            en: "Added scroll-reveal timing after the content was locked, tuning the delay until the pacing felt intentional.",
            ar: "أضفت توقيت الظهور عند السكرول بعد ما المحتوى اتثبت، وضبطت التأخير لحد ما الإيقاع حسّ مقصود.",
          },
        },
        {
          title: { en: "Polish & Ship", ar: "التلميع والنشر" },
          desc: {
            en: "Fine-tuned spacing between sections, then deployed.",
            ar: "ضبطت المسافات بين الأقسام بدقة، وبعدين نشرت.",
          },
        },
      ],
      problems: [
        {
          problem: {
            en: "An early draft tried to cover every edition and ended up feeling endless rather than curated.",
            ar: "مسودة أولى حاولت تغطي كل النسخ، وطلعت حاسة بلا نهاية بدل ما تحس منتقاة.",
          },
          solution: {
            en: "Cut it down to the most iconic editions only — pacing mattered more than completeness here.",
            ar: "قللتها للنسخ الأكثر أيقونية بس؛ الإيقاع كان أهم من الشمولية هنا.",
          },
        },
        {
          problem: {
            en: "Scroll-reveal timing felt broken for anyone scrolling fast, since sections would fire out of order.",
            ar: "توقيت ظهور المحتوى كان بيحس غلط لمن يعمل سكرول بسرعة، لأن الأقسام كانت بتتفعل مش بالترتيب.",
          },
          solution: {
            en: "Tuned the intersection observer's threshold and added a fire-once flag per section.",
            ar: "ضبطت حدود intersection observer وأضفت علامة تفعيل-مرة-واحدة لكل قسم.",
          },
        },
      ],
      performance: {
        en: "Each section's imagery only loads as it approaches the viewport, so the page stays light even with this much visual density packed into it.",
        ar: "صور كل قسم بتحمّل بس وهي قربانة من الشاشة، فالصفحة بتفضل خفيفة رغم الكثافة البصرية اللي فيها.",
      },
      lessons: {
        en: "This one made me think in terms of pacing rather than layout, treating how far someone has scrolled as a storytelling tool, not just a trigger for CSS.",
        ar: "المشروع ده خلاني أفكر بالإيقاع مش بس التخطيط، وأتعامل مع مكان السكرول كأداة سرد مش مجرد trigger للـ CSS.",
      },
      result: {
        en: "A quick, focused trip through World Cup history that reads like a highlight reel someone actually curated, not a page copied from Wikipedia.",
        ar: "رحلة سريعة ومركزة في تاريخ كأس العالم بتتقرأ كملخص لحظات فعلاً منتقى، مش صفحة متنسخة من ويكيبيديا.",
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
        en: "A freelance project organizing Coptic hymns into a calm, browsable library, built for someone opening it during prayer or study, not casual scrolling.",
        ar: "مشروع لعميل ينظم الألحان القبطية في مكتبة هادئة سهلة التصفح، اتبنى لحد بيفتحه وقت الصلاة أو الدرس مش تصفح عابر.",
      },
      challenge: {
        en: "Hymn audio needed reliable, fast playback and clear categorization, in an interface calm enough to actually fit a spiritual context — not something that felt like a generic music app.",
        ar: "الألحان الصوتية كانت محتاجة تشغيل سريع وموثوق وتصنيف واضح، في واجهة هادئة تليق فعلاً بالسياق الروحي، مش حاجة حاسة كأي تطبيق موسيقى عادي.",
      },
      approach: {
        en: "I structured everything category-first with a soft purple palette, and moved media hosting entirely to Cloudinary instead of serving audio files directly — that decision alone solved most of the reliability problems before they started.",
        ar: "نظمت كل حاجة على أساس التصنيف أولاً بلوحة بنفسجية هادئة، ونقلت استضافة الوسائط بالكامل لـ Cloudinary بدل تشغيل ملفات الصوت مباشرة، والقرار ده لوحده حل أغلب مشاكل الموثوقية قبل ما تبدأ أصلاً.",
      },
      features: [
        {
          icon: "fa-layer-group",
          title: { en: "Categorized Library", ar: "مكتبة مصنّفة" },
          desc: {
            en: "Hymns grouped by occasion and liturgical season, collapsible so the list never overwhelms.",
            ar: "الألحان مجمعة حسب المناسبة والموسم الطقسي، وقابلة للطي عشان القائمة متبقاش مرهقة.",
          },
        },
        {
          icon: "fa-cloud",
          title: { en: "Cloudinary Delivery", ar: "توصيل عبر Cloudinary" },
          desc: {
            en: "Audio is hosted and streamed through Cloudinary's CDN instead of the site's own server.",
            ar: "الصوت مستضاف ومبثوث عبر شبكة Cloudinary بدل سيرفر الموقع نفسه.",
          },
        },
        {
          icon: "fa-play",
          title: { en: "Simple Player UI", ar: "واجهة تشغيل بسيطة" },
          desc: {
            en: "Just play, pause, and a progress bar — nothing competing for attention while someone's listening.",
            ar: "تشغيل وإيقاف وشريط تقدم بس، مفيش حاجة بتنافس على الانتباه وهو بيسمع.",
          },
        },
        {
          icon: "fa-language",
          title: { en: "Bilingual Titles", ar: "عناوين ثنائية اللغة" },
          desc: {
            en: "Hymn titles are available in Arabic and English so the library serves both a local and a diaspora audience.",
            ar: "عناوين الألحان متاحة بالعربي والإنجليزي عشان المكتبة تخدم الجمهور المحلي وجمهور المهجر مع بعض.",
          },
        },
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "Cloudinary"],
      process: [
        {
          title: { en: "Content Structuring", ar: "تنظيم المحتوى" },
          desc: {
            en: "Categorized every hymn by occasion together with the client before building any UI.",
            ar: "صنفت كل لحن حسب المناسبة مع العميل قبل ما أبني أي واجهة.",
          },
        },
        {
          title: { en: "Media Pipeline", ar: "مسار الوسائط" },
          desc: {
            en: "Connected Cloudinary early, once it became clear self-hosted audio wasn't going to hold up on slower connections.",
            ar: "ربطت Cloudinary بدري، لما بان واضح إن الصوت المستضاف ذاتيًا مش هيصمد على اتصالات أبطأ.",
          },
        },
        {
          title: { en: "Calm UI Build", ar: "بناء واجهة هادئة" },
          desc: {
            en: "Stripped the player interface down repeatedly until nothing was left that didn't need to be there.",
            ar: "بسّطت واجهة المشغل أكتر من مرة لحد ما اتشال منها أي حاجة مكنتش لازمة.",
          },
        },
        {
          title: { en: "Test & Deliver", ar: "الاختبار والتسليم" },
          desc: {
            en: "Verified playback on three different connection speeds before final delivery.",
            ar: "تأكدت من التشغيل على 3 سرعات اتصال مختلفة قبل التسليم النهائي.",
          },
        },
      ],
      problems: [
        {
          problem: {
            en: "Audio files hosted directly on the server buffered noticeably on weaker connections.",
            ar: "ملفات الصوت المستضافة مباشرة على السيرفر كانت بتعمل تقطيع واضح على اتصالات ضعيفة.",
          },
          solution: {
            en: "Migrated everything to Cloudinary, which handles adaptive delivery automatically.",
            ar: "نقلت كل حاجة لـ Cloudinary، اللي بيدير توصيل متكيف تلقائيًا.",
          },
        },
        {
          problem: {
            en: "The category list grew past twenty entries and became hard to scan in one glance.",
            ar: "قائمة التصنيفات كبرت لأكتر من عشرين عنصر وبقت صعب تتصفحها بنظرة واحدة.",
          },
          solution: {
            en: "Grouped categories into collapsible sections so the default view only shows the top-level list.",
            ar: "جمّعت التصنيفات في مجموعات قابلة للطي عشان العرض الافتراضي يبين القائمة الرئيسية بس.",
          },
        },
      ],
      performance: {
        en: "Offloading audio to Cloudinary's CDN removed the single biggest load-time bottleneck in the project, and kept the front-end itself lightweight enough to load instantly.",
        ar: "نقل الصوت لشبكة Cloudinary شال أكبر عنق زجاجة في وقت التحميل في المشروع كله، وخلى الواجهة نفسها خفيفة كفاية تحمّل فورًا.",
      },
      lessons: {
        en: "This taught me to treat media hosting as an architecture decision made on day one, not something bolted on after the front-end is already built.",
        ar: "ده علّمني أتعامل مع استضافة الوسائط كقرار معماري بياخد من أول يوم، مش حاجة بتتضاف بعد ما الواجهة تخلص.",
      },
      result: {
        en: "A quiet, well-organized hymn library that plays reliably regardless of connection speed and feels appropriate for its purpose.",
        ar: "مكتبة ألحان هادئة ومنظمة بتشتغل بثبات بغض النظر عن سرعة الاتصال، وحاسة مناسبة لغرضها.",
      },
    },

    calculator: {
      accent: "#b8f000",
      rgb: "184,240,0",
      icon: "fa-calculator",
      hero: "{14B7F15F-9338-4BED-A1B0-10EF836A7183}.png",
      gallery: ["{14B7F15F-9338-4BED-A1B0-10EF836A7183}.png"],
      title: { en: "CALCULATOR", ar: "آلة حاسبة" },
      tag: {
        en: "Calculator App · Freelance",
        ar: "تطبيق آلة حاسبة · عمل حر",
      },
      summary: {
        en: "A fast, responsive calculator with a clean interface for everyday arithmetic.",
        ar: "آلة حاسبة سريعة ومتجاوبة بواجهة نظيفة للعمليات الحسابية اليومية.",
      },
      demo: "https://calculator-self-gamma-67.vercel.app/",
      github: "https://github.com/peteremad438-ux/project.git",
      overview: {
        en: "A small, focused calculator built to nail the basics — clear input, instant feedback, comfortable to use one-handed on a phone.",
        ar: "آلة حاسبة صغيرة ومركزة اتبنت عشان تظبط الأساسيات: إدخال واضح، استجابة فورية، ومريحة الاستخدام بإيد واحدة على الموبايل.",
      },
      challenge: {
        en: "There's nothing to hide behind in a calculator — no content to distract from a clunky button or a laggy keypress. Every interaction had to feel immediate.",
        ar: "في الآلة الحاسبة مفيش حاجة تختبي وراها، مفيش محتوى يشتت الانتباه عن زرار غير مريح أو استجابة بطيئة. كل تفاعل كان لازم يحس فوري.",
      },
      approach: {
        en: "I kept the display and keypad in a strict visual hierarchy, and used one vivid lime accent to give an otherwise plain tool some personality.",
        ar: "خليت شاشة العرض ولوحة الأزرار في تسلسل هرمي واضح، واستخدمت لون ليموني ساطع واحد عشان يدي أداة بسيطة شخصية خاصة بيها.",
      },
      features: [
        {
          icon: "fa-divide",
          title: { en: "Core Operations", ar: "العمليات الأساسية" },
          desc: {
            en: "Handles the four basic operations plus percentage and clear, without a single unnecessary function cluttering the layout.",
            ar: "بتنفذ العمليات الأربع الأساسية بالإضافة للنسبة المئوية والمسح، من غير أي دالة زيادة تزحم التصميم.",
          },
        },
        {
          icon: "fa-grip",
          title: { en: "Clear Keypad", ar: "لوحة أزرار واضحة" },
          desc: {
            en: "A readable button grid with generous tap targets, sized for actual thumbs, not mouse cursors.",
            ar: "شبكة أزرار واضحة بمساحة لمس كافية، متحسوبة على أساس الأصابع الحقيقية مش مؤشر الماوس.",
          },
        },
        {
          icon: "fa-mobile-screen",
          title: { en: "Responsive Layout", ar: "تصميم متجاوب" },
          desc: {
            en: "Stays comfortable to use from a small phone screen up to a full desktop window.",
            ar: "تفضل مريحة الاستخدام من شاشة موبايل صغيرة لحد نافذة ديسكتوب كاملة.",
          },
        },
        {
          icon: "fa-bolt",
          title: { en: "Fast Interaction", ar: "تفاعل سريع" },
          desc: {
            en: "Zero dependencies and a handful of event listeners keep every keypress feeling instant.",
            ar: "من غير أي اعتماديات خارجية وبعدد قليل من الـ event listeners، كل ضغطة زرار بتحس فورية.",
          },
        },
      ],
      tech: ["HTML5", "CSS3", "JavaScript"],
      process: [
        {
          title: { en: "Interaction Map", ar: "خريطة التفاعل" },
          desc: {
            en: "Listed every operation the calculator needed to support before drawing a single button.",
            ar: "حصرت كل عملية الآلة الحاسبة محتاجة تدعمها قبل ما أرسم أي زرار.",
          },
        },
        {
          title: { en: "Display Logic", ar: "منطق الشاشة" },
          desc: {
            en: "Built the calculation and display-formatting logic first, then wired the UI on top of working functions.",
            ar: "بنيت منطق الحساب وتنسيق العرض الأول، وبعدين ربطت الواجهة فوق دوال شغالة فعلاً.",
          },
        },
        {
          title: { en: "Keypad Layout", ar: "تصميم لوحة الأزرار" },
          desc: {
            en: "Iterated on button sizing and spacing until nothing felt cramped on a small screen.",
            ar: "جربت أحجام ومسافات الأزرار أكتر من مرة لحد ما مفيش حاجة حسّت ضيقة على شاشة صغيرة.",
          },
        },
        {
          title: { en: "Ship", ar: "النشر" },
          desc: {
            en: "Deployed as a lightweight, dependency-free standalone page.",
            ar: "نشرتها كصفحة مستقلة خفيفة بدون أي اعتماديات.",
          },
        },
      ],
      problems: [
        {
          problem: {
            en: "Chained operations (like 5 + 3 × 2) initially calculated left-to-right instead of respecting operator precedence.",
            ar: "العمليات المتسلسلة (زي 5 + 3 × 2) كانت في الأول بتتحسب من اليسار لليمين من غير مراعاة أولوية العمليات.",
          },
          solution: {
            en: "Rewrote the evaluation logic to respect standard operator precedence before displaying a result.",
            ar: "أعدت كتابة منطق الحساب عشان يراعي أولوية العمليات القياسية قبل ما يعرض النتيجة.",
          },
        },
      ],
      performance: {
        en: "Zero external dependencies and a single CSS file keep this near-instant to load on any connection.",
        ar: "من غير أي اعتماديات خارجية وملف CSS واحد بس، الأداة تحمّل فوريًا تقريبًا على أي اتصال.",
      },
      lessons: {
        en: "A good reminder that a tiny surface area still deserves the same care as a big one — there's nowhere to hide a rough edge in something this small.",
        ar: "تذكير كويس إن حتى المساحة الصغيرة تستاهل نفس مستوى العناية زي الكبيرة؛ في حاجة بالحجم ده مفيش مكان تخبي فيه أي عيب.",
      },
      result: {
        en: "A calculator that does exactly what it needs to, feels responsive on any device, and doesn't get in its own way.",
        ar: "آلة حاسبة بتعمل بالظبط اللي المفروض تعمله، بتحس سريعة الاستجابة على أي جهاز، ومش بتقف في طريق نفسها.",
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
        en: "Personal Card · Freelance Project",
        ar: "كارت تعريفي شخصي · مشروع فريلانس",
      },
      summary: {
        en: "A personal card showcasing skills, projects, and a clean professional identity.",
        ar: "كارت شخصي يعرض المهارات والمشاريع وهوية مهنية نظيفة.",
      },
      demo: "https://rewis-jet.vercel.app/",
      github: "https://github.com/peteremad438-ux/project.git",
      overview: {
        en: "A single-screen personal card built for situations where a full portfolio is overkill — a quick link to send someone who just needs your skills, projects, and contact info in one glance.",
        ar: "كارت شخصي بشاشة واحدة اتبنى للمواقف اللي فيها البورتفوليو الكامل يبقى زيادة عن اللزوم؛ لينك سريع تبعته لحد محتاج يشوف مهاراتك ومشاريعك وبيانات التواصل من نظرة واحدة.",
      },
      challenge: {
        en: "The whole point of a card like this is that it loads instantly and says everything in one screen — any scroll or delay defeats the purpose.",
        ar: "الهدف الأساسي من كارت زي ده إنه يحمّل فورًا ويقول كل حاجة في شاشة واحدة؛ أي سكرول أو تأخير بيلغي الفايدة منه.",
      },
      approach: {
        en: "I limited the whole page to one viewport height on desktop, prioritized three pieces of information — role, top skills, and contact — and left everything else out.",
        ar: "حددت الصفحة كلها بارتفاع شاشة واحدة على الديسكتوب، وركزت على 3 معلومات بس: الدور، أهم المهارات، والتواصل، وسبت أي حاجة زيادة برا.",
      },
      features: [
        {
          icon: "fa-id-card",
          title: { en: "Single-Screen Layout", ar: "تصميم شاشة واحدة" },
          desc: {
            en: "Everything a visitor needs sits in one view — no scrolling required to understand who you are.",
            ar: "كل اللي الزائر محتاجه موجود في شاشة واحدة، من غير الحاجة لسكرول عشان يفهم إنت مين.",
          },
        },
        {
          icon: "fa-list-check",
          title: { en: "Priority Skill Chips", ar: "وسوم مهارات ذات أولوية" },
          desc: {
            en: "Skills are grouped into a handful of chips instead of a long list, so the strongest ones don't get lost.",
            ar: "المهارات مجمعة في عدد قليل من الوسوم بدل قائمة طويلة، عشان أقواها متضيعش وسط الباقي.",
          },
        },
        {
          icon: "fa-link",
          title: { en: "Quick Contact Links", ar: "روابط تواصل سريعة" },
          desc: {
            en: "Direct links to GitHub, email, and social profiles — no contact form, no extra step.",
            ar: "روابط مباشرة لـ GitHub والإيميل والحسابات الاجتماعية، من غير فورم تواصل ولا خطوة زيادة.",
          },
        },
        {
          icon: "fa-gauge-high",
          title: { en: "Instant Load", ar: "تحميل فوري" },
          desc: {
            en: "No frameworks, no external fonts blocking render — the card is visible before most sites finish their first request.",
            ar: "من غير فريموركس ولا خطوط خارجية بتأخر العرض؛ الكارت بيبان قبل ما أغلب المواقع تخلص أول طلب ليها أصلاً.",
          },
        },
      ],
      tech: ["HTML5", "CSS3"],
      process: [
        {
          title: { en: "Content Priority", ar: "أولوية المحتوى" },
          desc: {
            en: "Chose the three facts a visitor sees first, and cut everything that didn't fit that list.",
            ar: "اخترت أهم 3 معلومات الزائر هيشوفها الأول، وشلت أي حاجة مكانتش داخلة في القايمة دي.",
          },
        },
        {
          title: { en: "Single-Column Layout", ar: "تصميم عمود واحد" },
          desc: {
            en: "Built one tight column instead of a multi-section homepage, keeping the whole thing scannable in seconds.",
            ar: "بنيت عمود واحد مضبوط بدل صفحة رئيسية بأقسام متعددة، عشان الكارت كله يتقرأ في ثواني.",
          },
        },
        {
          title: { en: "Micro-Styling", ar: "تنسيق دقيق" },
          desc: {
            en: "Fine-tuned spacing and chip styling over several small passes rather than one big redesign.",
            ar: "ضبطت المسافات وتصميم الوسوم على كذا مرحلة صغيرة بدل إعادة تصميم واحدة كبيرة.",
          },
        },
        {
          title: { en: "Ship", ar: "النشر" },
          desc: {
            en: "Deployed as a lightweight standalone page with no build step.",
            ar: "نشرتها كصفحة مستقلة خفيفة من غير أي خطوة بناء.",
          },
        },
      ],
      problems: [
        {
          problem: {
            en: "Listing every skill made the card feel busy and undercut the point of keeping it minimal.",
            ar: "سرد كل مهارة خلى الكارت يحس مزدحم وضيّع الهدف من إنه يفضل بسيط.",
          },
          solution: {
            en: "Grouped skills into a few priority chips and left the rest for the full portfolio link instead.",
            ar: "جمّعت المهارات في وسوم قليلة ذات أولوية وسبت الباقي للينك البورتفوليو الكامل بدل ما أحطهم هنا.",
          },
        },
      ],
      performance: {
        en: "Zero external dependencies and a single CSS file keep this card near-instant to load on any connection.",
        ar: "بدون أي اعتماديات خارجية وملف CSS واحد فقط، الكارت يحمّل فورياً تقريباً على أي اتصال.",
      },
      lessons: {
        en: "A good constraint exercise — proof that a tiny surface area can still feel deliberate if every element on it earns its place.",
        ar: "تمرين جيد في القيود، وإثبات إن مساحة صغيرة جدًا لسه ممكن تحس مدروسة لو كل عنصر فيها فعلاً مستاهل مكانه.",
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
        <div class="btp-modal-header" data-reveal="up">
          <div class="btp-modal-icon"><i class="fa-solid ${d.icon}"></i></div>
          <div class="btp-modal-header-text">
            <span class="btp-hero-tag">${tr(d.tag)}</span>
            <h2 class="btp-modal-title">${tr(d.title)}</h2>
          </div>
        </div>

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

    // Let the browser finish the (fairly large) layout/paint of the modal
    // content BEFORE starting the backdrop blur + scale-in transition.
    // Doing both in the same frame is what made opening feel like a
    // freeze: a big synchronous layout landing on top of an expensive
    // full-viewport backdrop-filter animation.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        backdrop.classList.add("open");
        const lockScrollY = window.scrollY || window.pageYOffset || 0;
        document.body.dataset.btpScrollY = String(lockScrollY);
        document.body.style.top = `-${lockScrollY}px`;
        document.body.classList.add("btp-lock");
        setupReveal();

        // Pause the animated background canvas while the modal (which has
        // a blurred backdrop) is open — this is what was causing the page
        // to hang.
        window.dispatchEvent(new Event("btp:modalopen"));
      });
    });
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

    // Resume the animated background canvas now that the modal is closed.
    window.dispatchEvent(new Event("btp:modalclose"));
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
        // Match main.js's language crossfade duration so the modal content
        // swap happens while the page is faded out, not as a visible flash.
      }, window.__LANG_FADE_MS || 220);
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
