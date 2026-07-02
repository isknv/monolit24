 // ============================================================
    // ПЕРЕВОДЫ ДЛЯ СТАТИЧЕСКИХ ТЕКСТОВ (data-i18n)
    // ============================================================
    const translations = {
      'hero.badge': {
        ru: 'Монолитные работы любой сложности',
        ky: 'Монолит иштердин бардык татаалдыгы'
      },
      'hero.slogan': {
        ru: 'MONOLIT 24 — 24 года опыта',
        ky: 'MONOLIT 24 — 24 жыл тажрыйба'
      },
      'hero.cta1': {
        ru: 'Связаться',
        ky: 'Байланышуу'  // ""
      },
      'about.kicker': {
        ru: 'О компании',
        ky: 'Компания жөнүндө'
      },
      'about.title': {
        ru: 'Строим будущее <br>с 2002 года', 
        ky: 'Келечекти курабыз <br>2002-жылдан'
      },
      'about.text': {
        ru: '<p><strong>Monolit 24</strong> — команда профессионалов с 24-летним опытом в монолитном строительстве. Мы выполняем работы любой сложности: от фундаментов до многоэтажных каркасов. Наша философия — <strong>качество выше скорости</strong>, но мы всегда соблюдаем сроки.</p><p style="margin-top: 16px;">Работаем по всему Кыргызстану, имеем 5 собственных бригад (до 20 человек каждая), оснащённых профессиональным оборудованием. Все договоры официальные, есть допуски СРО.</p>',
        ky: '<p><strong>Monolit 24</strong> — монолиттик курулуш тармагында 24 жылдык тажрыйбасы бар кесипкөйлөр командасы. Биз каалаган татаалдыктагы иштерди аткарабыз: пайдубалдан баштап көп кабаттуу каркастарга чейин. Биздин философия — <strong>сапат ылдамдыктан жогору</strong>, бирок биз ар дайым мөөнөттөрдү так сактайбыз.</p><p style="margin-top: 16px;"> Кыргызстандын бардык аймактарында иштейбиз, профессионалдык жабдуулар менен толук камсыздалган өзүбүздүн 5 бригадабыз бар (ар биринде 20га чейин адам). Бардык келишимдер расмий түзүлөт, СРО уруксаттары (допусктары) бар.</p>'
      },
      'about.highlight1': {
        ru: 'года опыта',
        ky: 'тажрыйба'
      },
      'about.highlight2': {
        ru: 'реализованных объектов',
        ky: 'ишке ашырылган объект'
      },
      'about.highlight3': {
        ru: 'собственных бригад',
        ky: 'өз бригада'
      },
      'about.highlight4': {
        ru: 'контроль качества',
        ky: 'сапатты көзөмөлдөө'
      },
      'services.kicker': {
        ru: 'Услуги',
        ky: 'Кызматтар'
      },
      'services.title': {
        ru: 'Монолитные работы <br>любой сложности',
        ky: 'Монолит иштер <br> бардык татаалдыктар'
      },
      'projects.kicker': {
        ru: 'Объекты',
        ky: 'Объекттер'
      },
      'projects.title': {
        ru: 'Наши реализованные проекты',
        ky: 'Биздин ишке ашырылган долбоорлор'
      },
      'projects.sub': {
        ru: 'Фото с наших строительных площадок',
        ky: 'Курулуш аянтчаларыбыздан фото'
      },
      'advantages.kicker': {
        ru: 'Преимущества',
        ky: 'Артыкчылыктар'
      },
      'advantages.title': {
        ru: 'Почему выбирают нас',
        ky: 'Эмне үчүн бизди тандашат'
      },
      'process.kicker': {
        ru: 'Процесс работы',
        ky: 'Иш процесси'
      },
      'process.title': {
        ru: 'От заявки до сдачи',
        ky: 'Өтүнмөдөн тапшырууга чейин'
      },
      'technology.kicker': {
        ru: 'Технология',
        ky: 'Технология'
      },
      'technology.title': {
        ru: 'Монолитное строительство<br>от А до Я',
        ky: 'Монолит курулуш<br>башынан аягына чейин' 
      },
      'technology.sub': {
        ru: 'Каждый этап – под контролем наших инженеров',
        ky: 'Ар бир этап – биздин инженерлердин көзөмөлүндө'
      },
      'partners.kicker': {
        ru: 'Партнёры',
        ky: 'Өнөктөштөр'
      },
      'partners.title': {
        ru: 'С нами работают',
        ky: 'Биз менен иштешет'
      },
      'contacts.kicker': {
        ru: 'Контакты',
        ky: 'Байланыш'
      },
      'contacts.title': {
        ru: 'Свяжитесь с нами',
        ky: 'Биз менен байланышыңыз'
      },
      'contacts.sub': {
        ru: 'Мы всегда на связи и готовы обсудить ваш проект',
        ky: 'Биз ар дайым байланышта жана долбооруңузду талкуулоого даярбыз'
      },
      'footer.copyright': {
        ru: '© 2026 MONOLIT 24. Все права защищены.',
        ky: '© 2026 MONOLIT 24. Бардык укуктар корголгон.' 
      }
    };

    // ============================================================
    // DATA (все ваши данные)
    // ============================================================
    const siteData = {
      heroStats: [
        { value: 24, suffix: '', label_ru: 'года опыта', label_ky: 'жыл тажрыйба' },
        { value: 200, suffix: '+', label_ru: 'объектов', label_ky: 'объект' },
        { value: 5, suffix: '', label_ru: 'бригад', label_ky: 'бригада' },
        { value: 100, suffix: '%', label_ru: 'качества', label_ky: 'сапат' }
      ],
      services: [
        { icon: 'fa-solid fa-layer-group', title_ru: 'Фундаменты', title_ky: 'Фундаменттер', desc_ru: 'Ленточные, плитные, свайные – любые типы оснований.', desc_ky: 'Тасма, плита, үймө – бардык типтеги негиздер.' },
        { icon: 'fa-solid fa-cubes', title_ru: 'Монолитные стены', title_ky: 'Монолит дубалдар', desc_ru: 'Несущие и ограждающие стены любой сложности.', desc_ky: 'Көтөрүүчү жана тосмо дубалдар.' },
        { icon: 'fa-solid fa-columns', title_ru: 'Колонны', title_ky: 'Колонналар', desc_ru: 'Вертикальные опоры с высокой несущей способностью.', desc_ky: 'Жогорку көтөрүмдүүлүктүү вертикалдык тирөөчтөр.' },
        { icon: 'fa-solid fa-arrows-up-down', title_ru: 'Перекрытия', title_ky: 'Кабат аралыктар', desc_ru: 'Монолитные плиты перекрытий для зданий любого назначения.', desc_ky: 'Ар кандай имараттар үчүн монолит плиталар.' },
        { icon: 'fa-solid fa-building', title_ru: 'Каркасы', title_ky: 'Каркастар', desc_ru: 'Полные монолитные каркасы жилых и коммерческих объектов.', desc_ky: 'Турак жай жана коммерциялык объекттердин толук монолит каркастары.' },
        { icon: 'fa-solid fa-hard-hat', title_ru: 'ЖБ конструкции', title_ky: 'Темир-бетон конструкциялар', desc_ru: 'Изготовление и монтаж ЖБИ, ригели, балки.', desc_ky: 'Темир-бетон буюмдарын даярдоо жана орнотуу.' }
      ],
      projects: [
        { title_ru: 'Областная больница', title_ky: 'Облустук оорукана', desc_ru: 'Монолитный каркас 4 этажей', desc_ky: '4 кабаттуу монолит каркас', img: 'assets/images/projects/hospital.jpg' },
        { title_ru: 'Aiva Apart Hotel', title_ky: 'Aiva Apart Hotel', desc_ru: 'Жилой комплекс на Иссык-Куле', desc_ky: 'Ысык-Көлдөгү турак комплекси', img: 'assets/images/projects/aiva.jpg' },
        { title_ru: 'Elizaveta Resort', title_ky: 'Elizaveta Resort', desc_ru: 'Премиальный курортный объект', desc_ky: 'Премиум курорттук объект', img: 'assets/images/projects/elizaveta.jpg' },
        { title_ru: 'ЖК от Elite House', title_ky: 'Elite House турак комплекси', desc_ru: 'Современный жилой комплекс с подземным паркингом', desc_ky: 'Жер астындагы унаа токтоочу заманбап турак комплекси', img: 'assets/images/projects/elite-house.jpg' },
        { title_ru: 'Alma Apart Hotel', title_ky: 'Alma Apart Hotel', desc_ru: 'Гостиничный комплекс', desc_ky: 'Мейманкана комплекси', img: 'assets/images/projects/alma.jpg' }
      ],
      advantages: [
        { title_ru: '24 года опыта', title_ky: '24 жыл тажрыйба', desc_ru: 'Более 200 реализованных объектов по всему Кыргызстану.', desc_ky: 'Кыргызстан боюнча 200дөн ашык ишке ашырылган объект.' },
        { title_ru: 'Собственные бригады', title_ky: 'Өз бригадалар', desc_ru: '5 бригад до 20 человек, работающих по единому стандарту.', desc_ky: '20 кишиге чейин 5 бригада, бирдиктүү стандарт боюнча иштейт.' },
        { title_ru: 'Контроль качества', title_ky: 'Сапатты көзөмөлдөө', desc_ru: 'Поэтапная проверка на всех стадиях строительства.', desc_ky: 'Курулуштун бардык этаптарында этап-этабы менен текшерүү.' },
        { title_ru: 'Соблюдение сроков', title_ky: 'Мөөнөттөрдү сактоо', desc_ru: 'Четкая логистика и планирование – без задержек.', desc_ky: 'Так логистика жана пландоо – кечигүүсүз.' },
        { title_ru: 'Любая сложность', title_ky: 'Кандай татаалдык болбосун', desc_ru: 'Технически сложные узлы и нестандартные решения.', desc_ky: 'Техникалык жактан татаал түйүндөр жана стандарттуу эмес чечимдер.' },
        { title_ru: 'Работа по договору', title_ky: 'Келишим боюнча иш', desc_ru: 'Официальное оформление, допуски и гарантии.', desc_ky: 'Расмий каттоо, уруксаттар жана кепилдиктер.' }
      ],
      process: [
        { step: '01', title_ru: 'Заявка', title_ky: 'Өтүнмө', desc_ru: 'Вы оставляете заявку, мы связываемся для уточнения.', desc_ky: 'Сиз өтүнмө калтырасыз, биз тактоо үчүн байланышабыз.' },
        { step: '02', title_ru: 'Консультация', title_ky: 'Кеңешүү', desc_ru: 'Обсуждаем технические детали и составляем план работ.', desc_ky: 'Техникалык чоо-жайын талкуулап, иш планын түзөбүз.' },
        { step: '03', title_ru: 'Смета', title_ky: 'Смета', desc_ru: 'Готовим точный расчет стоимости и сроков.', desc_ky: 'Так бааны жана мөөнөттөрдү эсептеп чыгабыз.' },
        { step: '04', title_ru: 'Договор', title_ky: 'Келишим', desc_ru: 'Заключаем договор с фиксацией всех условий.', desc_ky: 'Бардык шарттарды белгилеп, келишим түзөбүз.' },
        { step: '05', title_ru: 'Строительство', title_ky: 'Курулуш', desc_ru: 'Выполняем работы с контролем качества на каждом этапе.', desc_ky: 'Ар бир этапта сапатты көзөмөлдөө менен иштерди аткарабыз.' },
        { step: '06', title_ru: 'Сдача объекта', title_ky: 'Объектти тапшыруу', desc_ru: 'Передаем объект с исполнительной документацией.', desc_ky: 'Объектти аткаруучу документтер менен тапшырабыз.' }
      ],
      partners: [
        { name: 'Elizaveta', logo: 'assets/images/partners/elizaveta.png' },
        { name: 'Elite House', logo: 'assets/images/partners/elite-house.png' },
        { name: 'Olimpstroi', logo: 'assets/images/partners/olimpstroi.png' },
        { name: 'Alpha', logo: 'assets/images/partners/alpha.png' },
        { name: 'NAK-Stroi', logo: 'assets/images/partners/nak-stroi.png' },
        { name: 'Vision Group', logo: 'assets/images/partners/vision.png' }
      ],
      technology: [
        { step: '01', title_ru: 'Установка опалубки', title_ky: 'Калып орнотуу', desc_ru: 'Опалубка из водостойкой фанеры и телескопических стоек. Точность сборки – залог ровных конструкций.', desc_ky: 'Сууга чыдамдуу фанерден жана телескопиялык тирөөчтөрдөн жасалган калып. Так чогултуу – так конструкциялардын кепили.', img: 'assets/images/technology/opalbuka.jpg' },
        { step: '02', title_ru: 'Устройство арматурного каркаса', title_ky: 'Арматура каркасын түзүү', desc_ru: 'Армирование по проекту, соблюдение защитного слоя, стыковка по ГОСТ. Основа прочности здания.', desc_ky: 'Долбоор боюнча арматуралоо, коргоочу катмарды сактоо, ГОСТ боюнча туташтыруу. Имараттын бекемдигинин негизи.', img: 'assets/images/technology/armatura.jpg' },
        { step: '03', title_ru: 'Укладка и уплотнение бетона', title_ky: 'Бетон төшөө жана тыгыздоо', desc_ru: 'Контроль подвижности смеси, вибрирование для удаления воздуха. Обеспечивает проектную прочность.', desc_ky: 'Аралашманын кыймылдуулугун көзөмөлдөө, абаны кетирүү үчүн вибрациялоо. Долбоордук бекемдикти камсыздайт.', img: 'assets/images/technology/beton.jpg' },
        { step: '04', title_ru: 'Уход за бетоном', title_ky: 'Бетонго кам көрүү', desc_ru: 'Поддержание влажности в первые дни твердения. Не допускаем пересыхания – сохраняем прочность.', desc_ky: 'Катуунун алгачкы күндөрүндө нымдуулукту сактоо. Кургап калбашына жол бербейбиз – бекемдикти сактайбыз.', img: 'assets/images/technology/uhod.jpg' }
      ],
      contacts: [
        { icon: 'fas fa-phone', label_ru: 'Телефон', label_ky: 'Телефон', value: '+996 702 814 294', href: 'tel:+996702814294' },
        { icon: 'fab fa-whatsapp', label_ru: 'WhatsApp', label_ky: 'WhatsApp', value: '+996 702 814 294', href: 'https://wa.me/996702814294' }
      ]
    };

    // ============================================================
    // ЯЗЫК И ПЕРЕКЛЮЧЕНИЕ
    // ============================================================
    let currentLang = 'ru';

    function updateLanguage(lang) {
      currentLang = lang;
      // Обновляем статические тексты (data-i18n)
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[key] && translations[key][lang]) {
          el.innerHTML = translations[key][lang];
        }
      });
      // Перерисовываем динамические блоки
      renderAll();
      // Обновляем активную кнопку
      document.querySelectorAll('.header__lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
      });
    }

    // ============================================================
    // ФУНКЦИИ РЕНДЕРИНГА (все ваши, только вынесены для ясности)
    // ============================================================
    function renderHeroStats() {
      const container = document.getElementById('heroStats');
      container.innerHTML = siteData.heroStats.map(stat => `
        <div class="hero-stats__item">
          <div class="hero-stats__number" data-counter="${stat.value}">0${stat.suffix}</div>
          <div class="hero-stats__label">${stat[`label_${currentLang}`]}</div>
        </div>
      `).join('');
    }

    function renderServices() {
      const container = document.getElementById('servicesGrid');
      container.innerHTML = siteData.services.map(s => `
        <div class="service-card reveal">
          <div class="service-card__icon"><i class="${s.icon}"></i></div>
          <div class="service-card__title">${s[`title_${currentLang}`]}</div>
          <div class="service-card__desc">${s[`desc_${currentLang}`]}</div>
        </div>
      `).join('');
    }

    function renderProjects() {
      const container = document.getElementById('projectsGrid');
      container.innerHTML = siteData.projects.map(p => `
        <div class="project-card reveal">
          <img src="${p.img}" alt="${p[`title_${currentLang}`]}" loading="lazy" onerror="this.src='assets/images/placeholder.jpg'" />
          <div class="project-card__overlay">
            <div class="project-card__title">${p[`title_${currentLang}`]}</div>
            <div class="project-card__desc">${p[`desc_${currentLang}`]}</div>
          </div>
        </div>
      `).join('');
    }

    function renderAdvantages() {
      const container = document.getElementById('advantagesGrid');
      container.innerHTML = siteData.advantages.map(a => `
        <div class="advantage-item reveal">
          <i class="fas fa-check-circle"></i>
          <div>
            <div class="advantage-item__title">${a[`title_${currentLang}`]}</div>
            <div class="advantage-item__desc">${a[`desc_${currentLang}`]}</div>
          </div>
        </div>
      `).join('');
    }

    function renderProcess() {
      const container = document.getElementById('processSteps');
      container.innerHTML = siteData.process.map(p => `
        <div class="process-step reveal">
          <div class="process-step__number">${p.step}</div>
          <div class="process-step__title">${p[`title_${currentLang}`]}</div>
          <div class="process-step__desc">${p[`desc_${currentLang}`]}</div>
        </div>
      `).join('');
    }

    function renderTechnology() {
      const container = document.getElementById('technologyGrid');
      if (!container) return;
      container.className = 'technology-grid-compact';
      container.innerHTML = siteData.technology.map(item => `
        <div class="tech-card-compact reveal">
          <img class="tech-card-compact__img" src="${item.img}" alt="${item[`title_${currentLang}`]}" loading="lazy" onerror="this.src='assets/images/placeholder.jpg'" />
          <div class="tech-card-compact__body">
            <div class="tech-card-compact__step">${item.step}</div>
            <div class="tech-card-compact__title">${item[`title_${currentLang}`]}</div>
            <div class="tech-card-compact__desc">${item[`desc_${currentLang}`]}</div>
          </div>
        </div>
      `).join('');
    }

    function renderPartners() {
      const container1 = document.getElementById('partnersTrack1');
      const container2 = document.getElementById('partnersTrack2');
      const items = [...siteData.partners];
      const reversedItems = [...siteData.partners].reverse();
      container1.innerHTML = [...items, ...items].map(p => `
        <div class="partner-logo">
          ${p.logo ? `<img src="${p.logo}" alt="${p.name}" onerror="this.style.display='none'" />` : `<span>${p.name}</span>`}
        </div>
      `).join('');
      container2.innerHTML = [...reversedItems, ...reversedItems].map(p => `
        <div class="partner-logo">
          ${p.logo ? `<img src="${p.logo}" alt="${p.name}" onerror="this.style.display='none'" />` : `<span>${p.name}</span>`}
        </div>
      `).join('');
    }

    function renderContacts() {
      const container = document.getElementById('contactsGrid');
      container.innerHTML = siteData.contacts.map(c => `
        <a href="${c.href}" class="contact-item reveal" target="${c.href.startsWith('http') ? '_blank' : ''}">
          <i class="${c.icon}"></i>
          <div>
            <div class="contact-item__label">${c[`label_${currentLang}`]}</div>
            <div class="contact-item__value">${c.value}</div>
          </div>
        </a>
      `).join('');
    }

    function renderAll() {
      renderHeroStats();
      renderServices();
      renderProjects();
      renderAdvantages();
      renderProcess();
      renderTechnology();
      renderPartners();
      renderContacts();
      setTimeout(initCounters, 100);
      if (window.gsap) {
        initRevealAnimations();
      }
    }

    // ============================================================
    // АНИМАЦИЯ СЧЁТЧИКОВ
    // ============================================================
    function initCounters() {
      const counters = document.querySelectorAll('[data-counter]');
      counters.forEach(counter => {
        const target = parseInt(counter.dataset.counter);
        if (isNaN(target)) return;
        const suffix = counter.textContent.replace(/[0-9]/g, '');
        let current = 0;
        const step = Math.max(1, Math.floor(target / 60));
        const interval = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(interval);
          }
          counter.textContent = current + suffix;
        }, 25);
      });
    }

    // ============================================================
    // GSAP REVEAL ANIMATIONS
    // ============================================================
    function initRevealAnimations() {
      if (!window.gsap || !window.ScrollTrigger) return;
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.getAll().forEach(t => t.kill());
      gsap.utils.toArray('.reveal').forEach(el => {
        gsap.fromTo(el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    }

    // ============================================================
    // HEADER SCROLL EFFECT
    // ============================================================
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 80);
    });

    // ============================================================
    // PRELOADER
    // ============================================================
    const preloader = document.getElementById('preloader');
    const preloaderFill = document.getElementById('preloaderFill');
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 20;
      if (progress > 100) progress = 100;
      preloaderFill.style.width = progress + '%';
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          preloader.classList.add('hidden');
          document.body.style.overflow = '';
        }, 400);
      }
    }, 200);

    // ============================================================
    // LANGUAGE SWITCH
    // ============================================================
    document.querySelectorAll('.header__lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        if (lang !== currentLang) {
          updateLanguage(lang);
        }
      });
    });

    // ============================================================
    // АНИМАЦИЯ СМЕНЫ СЛОВ В HERO
    // ============================================================
    const heroWords = ['качество', 'скорость', 'надёжность', 'будущее', 'доверие'];
    let heroWordIndex = 0;
    const heroWordEl = document.getElementById('heroChangingWord');
    if (heroWordEl) {
      setInterval(() => {
        heroWordEl.style.opacity = 0;
        setTimeout(() => {
          heroWordIndex = (heroWordIndex + 1) % heroWords.length;
          heroWordEl.textContent = heroWords[heroWordIndex];
          heroWordEl.style.opacity = 1;
        }, 200);
      }, 1500);
    }

    // ============================================================
    // INIT
    // ============================================================
    document.addEventListener('DOMContentLoaded', () => {
      renderAll();
      setTimeout(() => {
        if (window.gsap) {
          initRevealAnimations();
        }
      }, 300);
      setTimeout(initCounters, 500);
    });

    // ============================================================
    // FIX для отсутствующих картинок
    // ============================================================
    document.addEventListener('error', (e) => {
      const target = e.target;
      if (target.tagName === 'IMG') {
        target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" fill="%23333"%3E%3Crect width="400" height="300" /%3E%3Ctext x="50%25" y="50%25" fill="%23666" font-family="sans-serif" font-size="18" text-anchor="middle" dy=".3em"%3ENo Image%3C/text%3E%3C/svg%3E';
      }
    }, true);
 