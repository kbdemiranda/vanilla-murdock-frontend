(function () {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const content = {
    en: {
      languageCode: 'en-US',
      languageLabel: 'Language',
      skipLink: 'Skip to content',
      navAria: 'Main navigation',
      nav: {
        home: 'Home',
        areas: 'Practice Areas',
        why: 'Why Us',
        testimonials: 'Testimonials',
        contact: 'Contact'
      },
      meta: {
        title: 'Nelson, Murdock & Page | Neighborhood-Focused Legal Counsel',
        description: 'Practical, compassionate legal support for people, families, workers, and small businesses in New York City.'
      },
      hero: {
        headline: 'Legal help that meets you where you are',
        subheadline: 'When life gets complicated, we bring clear advice, steady advocacy, and real respect to every client we serve.',
        primaryCta: 'Book a Consultation',
        secondaryCta: 'Talk to Our Team',
        asideKicker: 'Neighborhood Counsel',
        asideHeadline: 'Practical advice. Steady advocacy. Real respect.'
      },
      trustBar: {
        items: [
          'Clear communication, no legal jargon',
          'Client-first, trauma-informed approach',
          'Thoughtful strategy from day one'
        ]
      },
      practiceAreas: {
        title: 'Practice Areas',
        subtitle: 'Focused support for everyday legal challenges in New York City.',
        areas: [
          { name: 'Personal Injury', description: 'Support after accidents and injuries, with practical guidance through claims and recovery.' },
          { name: 'Criminal Defense', description: 'Strong defense for misdemeanor and felony charges, with respect for your rights at every step.' },
          { name: 'Civil Litigation', description: 'Representation in disputes involving contracts, property, and other civil conflicts.' },
          { name: 'Tenant & Housing', description: 'Advocacy for tenants facing unsafe conditions, eviction pressure, or lease disputes.' },
          { name: 'Employment Issues', description: 'Help with workplace discrimination, retaliation, wage concerns, and wrongful termination.' },
          { name: 'Small Business Counsel', description: 'Legal support for formation, contracts, risk review, and day-to-day business decisions.' }
        ]
      },
      whyUs: {
        title: 'Why Clients Choose Us',
        bullets: [
          'We listen first and build strategy around your goals.',
          'We explain options in plain language so you can decide with confidence.',
          'We stay responsive and keep you informed throughout your case.',
          'We combine courtroom readiness with practical negotiation skills.'
        ]
      },
      testimonials: {
        title: 'Client Voices',
        items: [
          { quote: 'They treated me with dignity from the first call. I always understood what was happening and what came next.', name: 'A. Rivera' },
          { quote: 'I came in overwhelmed and left with a plan. Their team was steady, respectful, and easy to reach.', name: 'Jordan M.' },
          { quote: 'They were direct, honest, and compassionate. I felt supported the entire time.', name: 'Samira K.' }
        ]
      },
      ctaSection: {
        title: 'Let\'s talk about your situation',
        subtitle: 'A clear first conversation can make the next step easier.',
        cta: 'Request a Consultation'
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'Tell us what\'s going on. We\'ll get back to you promptly.',
        labels: {
          name: 'Full Name',
          email: 'Email',
          phone: 'Phone',
          message: 'Message'
        },
        placeholders: {
          name: 'Your full name',
          email: 'you@example.com',
          phone: '(212) 555-0147',
          message: 'Briefly describe your legal concern'
        },
        submit: 'Send Message',
        successMessage: 'Thanks for reaching out. Our team will contact you soon.'
      },
      footer: {
        officeTitle: 'Office Information',
        addressLabel: 'Address: 468 W 47th Street, 4th Floor, Hell\'s Kitchen, New York, NY 10036',
        hoursLabel: 'Hours: Mon–Fri, 9:00 AM–6:00 PM',
        phoneLabel: 'Phone: (212) 555-0147',
        emailLabel: 'Email: contact@nelsonmurdockpage.com',
        disclaimer: 'Fictional firm for demonstration purposes.'
      },
      validation: {
        name: 'Please enter your full name.',
        email: 'Please enter a valid email address.',
        phone: 'Please enter a valid phone number.',
        message: 'Please add a few more details to your message.',
        generic: 'Please review the highlighted fields.'
      }
    },
    ptBR: {
      languageCode: 'pt-BR',
      languageLabel: 'Idioma',
      skipLink: 'Ir para o conteúdo',
      navAria: 'Navegação principal',
      nav: {
        home: 'Início',
        areas: 'Áreas',
        why: 'Por que nós',
        testimonials: 'Depoimentos',
        contact: 'Contato'
      },
      meta: {
        title: 'Nelson, Murdock & Page | Advocacia Próxima de Você',
        description: 'Assessoria jurídica prática e humana para pessoas, famílias, trabalhadores e pequenos negócios em Nova York.'
      },
      hero: {
        headline: 'Apoio jurídico no seu momento mais difícil',
        subheadline: 'Quando a vida complica, oferecemos orientação clara, defesa consistente e respeito real em cada etapa.',
        primaryCta: 'Agendar Consulta',
        secondaryCta: 'Falar com a Equipe',
        asideKicker: 'Advocacia de proximidade',
        asideHeadline: 'Orientação prática. Defesa firme. Respeito de verdade.'
      },
      trustBar: {
        items: [
          'Comunicação clara, sem juridiquês',
          'Atendimento humano e acolhedor',
          'Estratégia responsável desde o início'
        ]
      },
      practiceAreas: {
        title: 'Áreas de Atuação',
        subtitle: 'Suporte jurídico objetivo para desafios reais do dia a dia em Nova York.',
        areas: [
          { name: 'Lesões Corporais', description: 'Acompanhamento em casos de acidente e lesão, com orientação prática sobre pedido de indenização.' },
          { name: 'Defesa Criminal', description: 'Defesa técnica em acusações criminais, com proteção dos seus direitos em todas as fases.' },
          { name: 'Litígios Cíveis', description: 'Atuação em conflitos de contrato, patrimônio e outras disputas cíveis.' },
          { name: 'Inquilino e Moradia', description: 'Defesa de inquilinos em despejo, problemas no imóvel e conflitos de locação.' },
          { name: 'Questões Trabalhistas', description: 'Suporte em discriminação, retaliação, salários e desligamento indevido.' },
          { name: 'Pequenos Negócios', description: 'Assessoria para abertura, contratos, prevenção de riscos e decisões do dia a dia empresarial.' }
        ]
      },
      whyUs: {
        title: 'Por Que Escolher Nosso Escritório',
        bullets: [
          'Primeiro ouvimos sua história, depois definimos a estratégia.',
          'Explicamos caminhos possíveis com linguagem simples e direta.',
          'Mantemos contato frequente para você nunca ficar sem resposta.',
          'Unimos preparo para litígio com negociação prática e responsável.'
        ]
      },
      testimonials: {
        title: 'Depoimentos',
        items: [
          { quote: 'Fui atendida com respeito desde o começo. Entendi cada etapa e me senti segura para decidir.', name: 'A. Rivera' },
          { quote: 'Cheguei sem saber por onde começar e saí com um plano claro. Equipe acessível e muito séria.', name: 'Jordan M.' },
          { quote: 'Atendimento humano, direto e transparente. Me senti acompanhada o tempo todo.', name: 'Samira K.' }
        ]
      },
      ctaSection: {
        title: 'Vamos conversar sobre seu caso',
        subtitle: 'Uma boa orientação inicial pode mudar o rumo da sua decisão.',
        cta: 'Solicitar Consulta'
      },
      contact: {
        title: 'Contato',
        subtitle: 'Conte sua situação. Nossa equipe retorna o quanto antes.',
        labels: {
          name: 'Nome completo',
          email: 'E-mail',
          phone: 'Telefone',
          message: 'Mensagem'
        },
        placeholders: {
          name: 'Seu nome completo',
          email: 'voce@exemplo.com',
          phone: '(212) 555-0147',
          message: 'Descreva brevemente sua questão jurídica'
        },
        submit: 'Enviar Mensagem',
        successMessage: 'Mensagem recebida. Entraremos em contato em breve.'
      },
      footer: {
        officeTitle: 'Informações do escritório',
        addressLabel: 'Endereço: 468 W 47th Street, 4th Floor, Hell\'s Kitchen, New York, NY 10036',
        hoursLabel: 'Horário: Mon–Fri, 9:00 AM–6:00 PM',
        phoneLabel: 'Telefone: (212) 555-0147',
        emailLabel: 'E-mail: contact@nelsonmurdockpage.com',
        disclaimer: 'Escritório fictício para fins de demonstração.'
      },
      validation: {
        name: 'Por favor, informe seu nome completo.',
        email: 'Por favor, informe um e-mail válido.',
        phone: 'Por favor, informe um telefone válido.',
        message: 'Por favor, escreva uma mensagem com mais detalhes.',
        generic: 'Verifique os campos destacados.'
      }
    },
    esLATAM: {
      languageCode: 'es',
      languageLabel: 'Idioma',
      skipLink: 'Ir al contenido',
      navAria: 'Navegación principal',
      nav: {
        home: 'Inicio',
        areas: 'Áreas',
        why: 'Por qué nosotros',
        testimonials: 'Testimonios',
        contact: 'Contacto'
      },
      meta: {
        title: 'Nelson, Murdock & Page | Asesoría Legal Cercana',
        description: 'Apoyo legal práctico y humano para personas, familias, trabajadores y pequeños negocios en Nueva York.'
      },
      hero: {
        headline: 'Apoyo legal cuando más lo necesitas',
        subheadline: 'Cuando todo se complica, te damos orientación clara, defensa firme y trato humano en cada paso.',
        primaryCta: 'Agendar Consulta',
        secondaryCta: 'Hablar con el Equipo',
        asideKicker: 'Asesoría legal cercana',
        asideHeadline: 'Consejo práctico. Defensa firme. Respeto real.'
      },
      trustBar: {
        items: [
          'Comunicación clara, sin tecnicismos',
          'Trato humano y respetuoso',
          'Estrategia sólida desde el inicio'
        ]
      },
      practiceAreas: {
        title: 'Áreas de Práctica',
        subtitle: 'Acompañamiento legal realista para problemas cotidianos en Nueva York.',
        areas: [
          { name: 'Lesiones Personales', description: 'Asesoría tras accidentes y lesiones, con apoyo claro durante el proceso de reclamación.' },
          { name: 'Defensa Penal', description: 'Defensa legal en cargos menores y graves, cuidando tus derechos en todo momento.' },
          { name: 'Litigio Civil', description: 'Representación en disputas por contratos, propiedad y otros conflictos civiles.' },
          { name: 'Vivienda e Inquilinos', description: 'Apoyo a inquilinos ante desalojos, condiciones inseguras y conflictos de arrendamiento.' },
          { name: 'Conflictos Laborales', description: 'Ayuda en casos de discriminación, represalias, salarios y despido injustificado.' },
          { name: 'Pequeños Negocios', description: 'Asesoría para constitución, contratos, gestión de riesgos y decisiones comerciales diarias.' }
        ]
      },
      whyUs: {
        title: 'Por Qué Elegirnos',
        bullets: [
          'Primero escuchamos tu situación y luego trazamos una estrategia útil.',
          'Te explicamos tus opciones en lenguaje claro para decidir con seguridad.',
          'Mantenemos comunicación constante para que siempre sepas qué sigue.',
          'Combinamos preparación para juicio con negociación práctica.'
        ]
      },
      testimonials: {
        title: 'Lo Que Dicen Nuestros Clientes',
        items: [
          { quote: 'Desde la primera llamada me trataron con respeto. Siempre supe en qué etapa estaba mi caso.', name: 'A. Rivera' },
          { quote: 'Llegué con mucha presión y salí con un plan claro. El equipo fue cercano y muy profesional.', name: 'Jordan M.' },
          { quote: 'Fueron directos, transparentes y humanos. Me sentí acompañada durante todo el proceso.', name: 'Samira K.' }
        ]
      },
      ctaSection: {
        title: 'Conversemos sobre tu situación',
        subtitle: 'Una primera orientación clara puede facilitar tu próximo paso.',
        cta: 'Solicitar Consulta'
      },
      contact: {
        title: 'Contacto',
        subtitle: 'Cuéntanos qué está pasando. Te responderemos pronto.',
        labels: {
          name: 'Nombre completo',
          email: 'Correo electrónico',
          phone: 'Teléfono',
          message: 'Mensaje'
        },
        placeholders: {
          name: 'Tu nombre completo',
          email: 'tu@correo.com',
          phone: '(212) 555-0147',
          message: 'Describe brevemente tu consulta legal'
        },
        submit: 'Enviar Mensaje',
        successMessage: 'Gracias por escribirnos. Nuestro equipo te contactará pronto.'
      },
      footer: {
        officeTitle: 'Información de la oficina',
        addressLabel: 'Dirección: 468 W 47th Street, 4th Floor, Hell\'s Kitchen, New York, NY 10036',
        hoursLabel: 'Horario: Mon–Fri, 9:00 AM–6:00 PM',
        phoneLabel: 'Teléfono: (212) 555-0147',
        emailLabel: 'Correo: contact@nelsonmurdockpage.com',
        disclaimer: 'Firma ficticia para fines de demostración.'
      },
      validation: {
        name: 'Por favor, escribe tu nombre completo.',
        email: 'Por favor, escribe un correo válido.',
        phone: 'Por favor, escribe un teléfono válido.',
        message: 'Por favor, agrega más detalles en tu mensaje.',
        generic: 'Revisa los campos marcados.'
      }
    }
  };

  let currentLocale = 'en';
  let currentTheme = 'light';

  function updateThemeToggle() {
    const isDark = currentTheme === 'dark';
    const button = document.getElementById('themeToggle');
    const icon = document.getElementById('themeToggleIcon');

    if (!button) return;

    if (icon) {
      icon.className = isDark ? 'fa-regular fa-sun' : 'fa-regular fa-moon';
    }

    button.setAttribute('aria-pressed', String(isDark));
    button.setAttribute('aria-label', 'Alternar tema');
    button.setAttribute('title', 'Alternar tema');
  }

  function applyTheme(theme) {
    currentTheme = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', currentTheme === 'dark');

    try {
      localStorage.setItem('site-theme', currentTheme);
    } catch (e) {
      // Ignore localStorage failures.
    }
    updateThemeToggle();
  }

  function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  function renderPracticeAreas(items) {
    const grid = document.getElementById('practice-areas-grid');
    if (!grid) return;

    grid.innerHTML = items
      .map(
        (item) =>
          '<article class="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900">' +
          '<h3 class="text-xl font-bold text-brand-navy dark:text-slate-100">' + item.name + '</h3>' +
          '<p class="mt-2 flex-1 leading-relaxed text-slate-600 dark:text-slate-300">' + item.description + '</p>' +
          '</article>'
      )
      .join('');
  }

  function renderWhyBullets(items) {
    const list = document.getElementById('why-bullets');
    if (!list) return;

    list.innerHTML = items
      .map(
        (item) =>
          '<li class="rounded-2xl border border-slate-200 bg-stone-50 p-6 leading-relaxed text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200">' +
          item +
          '</li>'
      )
      .join('');
  }

  function renderTestimonials(items) {
    const grid = document.getElementById('testimonials-grid');
    if (!grid) return;

    grid.innerHTML = items
      .map(
        (item) =>
          '<blockquote class="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900">' +
          '<p class="flex-1 leading-relaxed text-slate-700 dark:text-slate-200">' + item.quote + '</p>' +
          '<footer class="mt-3 text-sm font-semibold text-slate-500 dark:text-slate-400">' + item.name + '</footer>' +
          '</blockquote>'
      )
      .join('');
  }

  function renderTrust(items) {
    const trust = document.getElementById('trust-items');
    if (!trust) return;

    trust.innerHTML = items
      .map(
        (item) =>
          '<div class="rounded-xl border border-white/20 bg-white/10 p-3">' +
          '<p class="text-sm leading-snug">' + item + '</p>' +
          '</div>'
      )
      .join('');
  }

  function applyLocale(locale) {
    const data = content[locale] || content.en;
    currentLocale = locale;

    document.documentElement.lang = data.languageCode;
    document.title = data.meta.title;
    document.querySelector('meta[name="description"]').setAttribute('content', data.meta.description);
    document.querySelector('meta[property="og:description"]').setAttribute('content', data.meta.description);

    setText('skip-link', data.skipLink);
    setText('language-label', data.languageLabel);
    const navEl = document.getElementById('main-nav');
    if (navEl) navEl.setAttribute('aria-label', data.navAria);

    document.querySelectorAll('[data-nav]').forEach((node) => {
      const key = node.getAttribute('data-nav');
      node.textContent = data.nav[key] || '';
    });

    setText('hero-headline', data.hero.headline);
    setText('hero-subheadline', data.hero.subheadline);
    setText('hero-primary-cta', data.hero.primaryCta);
    setText('hero-secondary-cta', data.hero.secondaryCta);
    setText('hero-aside-kicker', data.hero.asideKicker);
    setText('hero-aside-headline', data.hero.asideHeadline);

    renderTrust(data.trustBar.items);

    setText('areas-title', data.practiceAreas.title);
    setText('areas-subtitle', data.practiceAreas.subtitle);
    renderPracticeAreas(data.practiceAreas.areas);

    setText('why-title', data.whyUs.title);
    renderWhyBullets(data.whyUs.bullets);

    setText('testimonials-title', data.testimonials.title);
    renderTestimonials(data.testimonials.items);

    setText('cta-title', data.ctaSection.title);
    setText('cta-subtitle', data.ctaSection.subtitle);
    setText('cta-button', data.ctaSection.cta);

    setText('contact-title', data.contact.title);
    setText('contact-subtitle', data.contact.subtitle);
    setText('label-name', data.contact.labels.name);
    setText('label-email', data.contact.labels.email);
    setText('label-phone', data.contact.labels.phone);
    setText('label-message', data.contact.labels.message);
    setText('contact-submit', data.contact.submit);

    document.getElementById('name').placeholder = data.contact.placeholders.name;
    document.getElementById('email').placeholder = data.contact.placeholders.email;
    document.getElementById('phone').placeholder = data.contact.placeholders.phone;
    document.getElementById('message').placeholder = data.contact.placeholders.message;

    setText('office-title', data.footer.officeTitle);
    setText('footer-address', data.footer.addressLabel);
    setText('footer-hours', data.footer.hoursLabel);
    setText('footer-phone', data.footer.phoneLabel);
    setText('footer-email', data.footer.emailLabel);
    setText('footer-disclaimer', data.footer.disclaimer);

    try {
      localStorage.setItem('site-locale', locale);
    } catch (e) {
      // Ignore localStorage failures.
    }
  }

  function scrollToTarget(el) {
    if (!el) return;
    const behavior = prefersReducedMotion ? 'auto' : 'smooth';
    el.scrollIntoView({ behavior, block: 'start' });
  }

  document.addEventListener('click', function (e) {
    const link = e.target.closest('a[data-scroll], .site-nav-link');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href || href.charAt(0) !== '#') return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    scrollToTarget(target);
    history.replaceState(null, '', href);
  });

  const navLinks = Array.from(document.querySelectorAll('.site-nav-link'));
  const sections = navLinks
    .map(function (l) {
      return document.querySelector(l.getAttribute('href'));
    })
    .filter(Boolean);

  function setActiveNav(link) {
    navLinks.forEach(function (a) {
      a.classList.remove('bg-slate-100', 'text-brand-navy', 'dark:bg-slate-800', 'dark:text-white');
      a.classList.add('text-slate-600', 'dark:text-slate-300');
    });

    if (link) {
      link.classList.add('bg-slate-100', 'text-brand-navy', 'dark:bg-slate-800', 'dark:text-white');
      link.classList.remove('text-slate-600', 'dark:text-slate-300');
    }
  }

  if ('IntersectionObserver' in window && sections.length) {
    const obs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          const link = document.querySelector('.site-nav-link[href="#' + id + '"]');
          setActiveNav(link);
        });
      },
      { threshold: 0.45, rootMargin: '-10% 0px -40% 0px' }
    );

    sections.forEach(function (s) {
      obs.observe(s);
    });
  }

  function showToast(msg) {
    const t = document.createElement('div');
    t.className = 'fixed bottom-5 right-5 z-[70] rounded-xl bg-brand-navy px-4 py-3 text-sm font-semibold text-white shadow-card';
    t.role = 'status';
    t.setAttribute('aria-live', 'polite');
    t.textContent = msg;
    document.body.appendChild(t);

    if (!prefersReducedMotion) {
      t.animate(
        [{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }],
        { duration: 220, easing: 'cubic-bezier(.2,.8,.2,1)' }
      );
    }

    setTimeout(function () {
      t.remove();
    }, 3500);
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePhone(phone) {
    return (phone || '').replace(/\D/g, '').length >= 8;
  }

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const data = content[currentLocale] || content.en;
      const validMessages = data.validation;

      let valid = true;
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const phone = form.phone.value.trim();
      const message = form.message.value.trim();

      ['name', 'email', 'phone', 'message'].forEach(function (k) {
        const err = document.getElementById('error-' + k);
        if (err) err.textContent = '';
      });

      if (name.length < 2) {
        document.getElementById('error-name').textContent = validMessages.name;
        valid = false;
      }
      if (!validateEmail(email)) {
        document.getElementById('error-email').textContent = validMessages.email;
        valid = false;
      }
      if (!validatePhone(phone)) {
        document.getElementById('error-phone').textContent = validMessages.phone;
        valid = false;
      }
      if (message.length < 6) {
        document.getElementById('error-message').textContent = validMessages.message;
        valid = false;
      }

      if (!valid) {
        showToast(validMessages.generic);
        return;
      }

      showToast(data.contact.successMessage);
      form.reset();
    });
  }

  const select = document.getElementById('languageSelect');
  if (select) {
    select.addEventListener('change', function () {
      applyLocale(select.value);
    });
  }

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
  }

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  let initialTheme = 'light';
  try {
    const savedTheme = localStorage.getItem('site-theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      initialTheme = savedTheme;
    }
  } catch (e) {
    // Ignore localStorage failures.
  }

  applyTheme(initialTheme);

  const initialLocale = 'en';
  if (select) select.value = initialLocale;
  applyLocale(initialLocale);
})();
