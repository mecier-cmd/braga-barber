/* =========================================================
   Braga Barber Style — script.js
   Edite os arrays SERVICES e PRODUCTS abaixo para adicionar,
   remover ou alterar itens. O site atualiza sozinho.
   ========================================================= */

const WHATSAPP_NUMBER = "5534998173443"; // (34) 99817-3443
const WA_BOOKING_MSG = "Olá! Gostaria de agendar um horário na Braga Barber.";

const ICONS = {
  scissors: `<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M9.64 4.6a2.5 2.5 0 1 0-2.5 2.5c.3 0 .58-.05.85-.14L9.3 8.27 6.7 10.87l1.41 1.41 2.6-2.6 4.83 4.83a2.5 2.5 0 1 0 1.41-1.41l-1.6-1.6 2.1-2.1a2.48 2.48 0 0 0 .85.14 2.5 2.5 0 1 0-2.5-2.5c0 .3.05.58.14.85L13.3 9.83l-2.1-2.1c.09-.27.14-.55.14-.85 0-.1-.01-.19-.02-.28zM7.14 5.6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm9.72 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 13.8a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM5 18a2 2 0 1 0 4.8 1.6L12 17.4l-1.4-1.4-2.2 2.2A2 2 0 0 0 5 18z"/></svg>`,
  combo: `<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M20 7h-3.17A3 3 0 1 0 12 4.1 3 3 0 1 0 7.17 7H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7h1a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM9 5a1 1 0 1 1 2 1H9V5zm4 1a1 1 0 1 1 2-1v1h-2zM7 19v-7h4v7H7zm10 0h-4v-7h4v7z"/></svg>`,
  star: `<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.2 21 12 17.77 5.8 21 7 14.14l-5-4.87 7.1-1.01z"/></svg>`,
  family: `<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 12.75a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5zm-6-1a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5zm12 0a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5zM12 14c-2.4 0-7 1.2-7 3.6V19h14v-1.4c0-2.4-4.6-3.6-7-3.6zm-6.5-.9c-1.7.3-3.5 1.2-3.5 2.9V19h3v-1.6c0-.87.29-1.63.9-2.3zm13 0c.61.67.9 1.43.9 2.3V19h3v-2c0-1.7-1.8-2.6-3.5-2.9z"/></svg>`,
  bottle: `<svg viewBox="0 0 24 24" width="26" height="26"><path fill="currentColor" d="M9 2h6v3.2l1.6 2.4A3 3 0 0 1 17 9.4V20a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9.4a3 3 0 0 1 .4-1.8L9 5.2V2zm2 2v2h2V4h-2z"/></svg>`,
};

/**
 * Serviços da barbearia.
 * badge é opcional (ex.: "Terça-feira"). old é o preço "de" riscado, opcional.
 */
const SERVICES = [
  {
    icon: "scissors",
    name: "Corte",
    desc: "Corte de cabelo para homem, mulher ou criança.",
    price: 55.0,
    img: "assets/ia-service-1.jpg",
  },
  {
    icon: "combo",
    name: "Corte + Barba",
    desc: "Combo completo de corte e barba no mesmo atendimento.",
    price: 100.0,
    img: "assets/ia-service-2.jpg",
  },
  {
    icon: "star",
    name: "Corte + Barba",
    badge: "Terça-feira",
    desc: "Promoção especial de terça-feira.",
    price: 80.0,
    img: "assets/ia-service-3.jpg",
  },
  {
    icon: "family",
    name: "Combo Pai & Filho",
    badge: "Quarta-feira",
    desc: "Um corte para cada, no mesmo dia.",
    price: 45.0,
    old: 55.0,
    priceNote: "por corte",
    img: "assets/ia-service-4.jpg",
  },
];

/**
 * Produtos à venda.
 * img: null quando ainda não há foto real do produto (não inventamos foto).
 * vol: volume/peso, quando informado.
 */
const PRODUCTS = [
  {
    category: "Cabelo",
    name: "Ultra Tonic — Jaboque",
    desc: "Creme tópico fortalecedor dos fios, com Baicapil™ e óleo de rícino.",
    vol: "30ml",
    price: 125.0,
    img: "assets/ultra-tonic.jpg",
  },
  {
    category: "Cabelo",
    name: "Leave-in Finalizador — Jaboque",
    desc: "Creme para pentear com ação anti-frizz, proteção térmica e hidratação.",
    vol: "240ml",
    price: 98.0,
    img: "assets/leave-in.jpg",
  },
  {
    category: "Cabelo",
    name: "Condicionador — Jaboque",
    desc: "Condicionador para barba, cabelo e bigode com hidratação profunda, brilho intenso e fortalecimento dos fios.",
    vol: "220ml",
    price: 55.0,
    img: "assets/condicionador-jaboque.jpg",
  },
  {
    category: "Cabelo",
    name: "Shampoo 2 em 1 — Jaboque",
    desc: "Shampoo 2 em 1 para barba, cabelo e bigode, com limpeza profunda, hidratação e fortalecimento dos fios.",
    vol: "220ml",
    price: 55.0,
    img: "assets/shampoo-2-em-1-jaboque.jpg",
  },
  {
    category: "Finalização",
    name: "Pó Texturizador — Jaboque",
    desc: "Pó texturizador com efeito matte, volume e textura instantânea para modelar os fios com fixação duradoura.",
    vol: "5g",
    price: 88.0,
    img: "assets/po-texturizador-jaboque.jpg",
  },
  {
    category: "Finalização",
    name: "Pasta Nuvem — Jaboque",
    desc: "Pasta de fixação média com efeito nuvem, sem resíduos, para todos os tipos de cabelo.",
    vol: "80g",
    price: 68.0,
    img: "assets/pasta-nuvem.jpg",
  },
  {
    category: "Finalização",
    name: "Pasta Classic — Jaboque",
    desc: "Pasta modeladora de alta fixação com efeito brilho e óleos de rícino e argan.",
    vol: "80g",
    price: 68.0,
    img: "assets/produto-pasta-classic.jpg",
  },
  {
    category: "Finalização",
    name: "Pasta Matte — Jaboque",
    desc: "Pasta de fixação máxima com efeito matte e acabamento sem resíduos.",
    vol: "80g",
    price: 68.0,
    img: "assets/produto-pasta-matte.jpg",
  },
  {
    category: "Facial",
    name: "Esfoliante Facial — Jaboque",
    desc: "Esfoliante facial para limpeza profunda, revitalização e hidratação da pele.",
    vol: "100g",
    price: 68.0,
    img: "assets/esfoliante-facial.jpg",
  },
  {
    category: "Facial",
    name: "Espuma de Limpeza Facial — Jaboque",
    desc: "Espuma para limpeza profunda e hidratação, com ação calmante com ácido hialurônico.",
    vol: "150ml",
    price: 78.0,
    img: "assets/espuma-facial.jpg",
  },
  {
    category: "Barba",
    name: "Beard Oil — Jaboque",
    desc: "Óleo para hidratar e recuperar a barba, com hidratação intensa e brilho natural.",
    vol: "30ml",
    price: 80.0,
    img: "assets/beard-oil.jpg",
  },
  {
    category: "Barba",
    name: "Balm de Barba — Jaboque",
    desc: "Balm hidratante de baixa oleosidade para hidratação, maciez e controle do frizz.",
    vol: "140ml",
    price: 75.0,
    img: "assets/balm.jpg",
  },
  {
    category: "Fragrâncias",
    name: "Body Splash — Blue Essence",
    desc: "Desodorante corporal com fragrância Blue Essence, inspirado no Bleu de Chanel.",
    vol: "200ml",
    price: 90.0,
    img: "assets/body-splash-blue-essence.jpg",
  },
  {
    category: "Fragrâncias",
    name: "Body Splash — Imperial Venture",
    desc: "Desodorante corporal com fragrância Imperial Venture, inspirado no Creed Aventus.",
    vol: "200ml",
    price: 90.0,
    img: "assets/body-splash-imperial-venture.jpg",
  },
  {
    category: "Fragrâncias",
    name: "Body Splash — Essenza Pura",
    desc: "Desodorante corporal com fragrância Essenza Pura, inspirado no Erba Pura.",
    vol: "200ml",
    price: 90.0,
    img: "assets/body-splash-essenza-pura.jpg",
  },
  {
    category: "Kits",
    name: "Kit Essenza Pura — Body Splash + Hidratante",
    desc: "Kit com Body Splash e hidratante corporal Essenza Pura para perfumar, hidratar e cuidar da pele.",
    vol: "2 itens",
    price: 125.0,
    img: "assets/kit-essenza-pura.jpg",
  },
  {
    category: "Kits",
    name: "Kit Imperial Venture — Body Splash + Hidratante",
    desc: "Kit com Body Splash e hidratante corporal Imperial Venture para perfumar, hidratar e cuidar da pele.",
    vol: "2 itens",
    price: 125.0,
    img: "assets/kit-imperial-venture.jpg",
  },
];

/* ---------------------------------------------------------
   Helpers
   --------------------------------------------------------- */
function formatBRL(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* ---------------------------------------------------------
   Render: CTAs fixos de agendamento
   --------------------------------------------------------- */
function renderBookingLinks() {
  const link = waLink(WA_BOOKING_MSG);
  ["headerCta", "heroCta", "infoCta", "mobileCta", "floatCta"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = link;
  });
}

/* ---------------------------------------------------------
   Render: Serviços
   --------------------------------------------------------- */
function renderServices() {
  const grid = document.getElementById("servicesGrid");
  grid.innerHTML = SERVICES.map((s) => `
    <article class="service-card">
      ${s.img ? `<div class="service-card__media"><img src="${s.img}" alt="${s.name}" loading="eager" onerror="this.closest('.service-card__media').classList.add('image-error');"></div>` : ""}
      ${s.badge ? `<span class="service-card__badge">${s.badge}</span>` : ""}
      <span class="service-card__icon">${ICONS[s.icon] || ""}</span>
      <h3 class="service-card__name">${s.name}</h3>
      <p class="service-card__desc">${s.desc}</p>
      <div class="service-card__foot">
        <span>
          ${s.old != null ? `<span class="service-card__old">${formatBRL(s.old)}</span> ` : ""}
          <span class="service-card__price">${formatBRL(s.price)}</span>
        </span>
        ${s.priceNote ? `<span class="service-card__old">${s.priceNote}</span>` : ""}
      </div>
    </article>
  `).join("");
}

/* ---------------------------------------------------------
   Render: Produtos
   --------------------------------------------------------- */
function renderProducts() {
  const grid = document.getElementById("productsGrid");
  const categories = ["Cabelo", "Barba", "Finalização", "Facial", "Fragrâncias", "Kits"];

  grid.innerHTML = categories.map((category) => {
    const items = PRODUCTS.filter((p) => p.category === category);
    if (!items.length) return "";

    return `
      <div class="products__category">
        <div class="products__category-head">
          <h3>${category}</h3>
          <span>${items.length} ${items.length === 1 ? "produto" : "produtos"}</span>
        </div>
        <div class="products__category-grid">
          ${items.map((p) => {
            const msg = `Olá! Tenho interesse no produto ${p.name}. Poderia me passar mais informações?`;
            const media = p.img
              ? `<div class="product-card__photo"><img src="${p.img}" alt="${p.name}" loading="eager" onerror="this.closest('.product-card__photo').classList.add('image-error');"></div>`
              : `<div class="product-card__placeholder">${ICONS.bottle}</div>`;
            return `
              <article class="product-card">
                ${media}
                <div class="product-card__body">
                  <h3 class="product-card__name">${p.name}</h3>
                  ${p.vol ? `<p class="product-card__vol">${p.vol}</p>` : ""}
                  <p class="product-card__desc">${p.desc}</p>
                  <p class="product-card__price">${formatBRL(p.price)}</p>
                  <a class="btn btn--outline btn--small" href="${waLink(msg)}" target="_blank" rel="noopener">Quero esse</a>
                </div>
              </article>
            `;
          }).join("")}
        </div>
      </div>
    `;
  }).join("");
}

/* ---------------------------------------------------------
   Menu mobile
   --------------------------------------------------------- */
function initNav() {
  const burger = document.getElementById("burger");
  const mobileNav = document.getElementById("mobileNav");

  burger.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(isOpen));
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    });
  });

  // destaca o item ativo do menu conforme a seção visível
  const links = document.querySelectorAll(".nav__link");
  const sections = Array.from(links)
    .map((l) => document.querySelector(l.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window) {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = `#${entry.target.id}`;
            links.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === id));
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
  }
}

/* ---------------------------------------------------------
   Reveal on scroll
   --------------------------------------------------------- */
function initReveal() {
  const targets = document.querySelectorAll(".service-card, .product-card");
  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  targets.forEach((el) => observer.observe(el));
}

/* ---------------------------------------------------------
   Avaliações
   --------------------------------------------------------- */
function isSupabaseConfigured() {
  const config = window.BRAGA_SUPABASE;
  return Boolean(
    config &&
    config.url &&
    config.anonKey &&
    !config.url.includes("COLE_AQUI") &&
    !config.anonKey.includes("COLE_AQUI")
  );
}

function starsMarkup(value) {
  const rating = Math.max(0, Math.min(5, Math.round(Number(value) || 0)));
  return "★".repeat(rating) + "☆".repeat(5 - rating);
}

function formatReviewDate(dateString) {
  try {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    }).format(new Date(dateString));
  } catch (_) {
    return "";
  }
}

function renderReviews(reviews) {
  const list = document.getElementById("reviewsList");
  const status = document.getElementById("reviewsStatus");
  const average = document.getElementById("reviewsAverage");
  const averageStars = document.getElementById("reviewsAverageStars");
  const count = document.getElementById("reviewsCount");

  if (!list || !average || !averageStars || !count) return;

  if (!reviews.length) {
    average.textContent = "—";
    averageStars.textContent = "☆☆☆☆☆";
    count.textContent = "Ainda não há avaliações";
    list.innerHTML = '<div class="reviews__empty">Seja o primeiro cliente a deixar uma avaliação. 💈</div>';
    if (status) status.textContent = "Nenhuma avaliação publicada ainda";
    return;
  }

  const total = reviews.reduce((sum, review) => {
    return sum + Number(review.service_rating) + Number(review.environment_rating) + Number(review.quality_rating);
  }, 0);
  const averageValue = total / (reviews.length * 3);

  average.textContent = averageValue.toFixed(1).replace(".", ",");
  averageStars.textContent = starsMarkup(averageValue);
  count.textContent = `${reviews.length} ${reviews.length === 1 ? "avaliação" : "avaliações"}`;
  if (status) status.textContent = `${reviews.length} ${reviews.length === 1 ? "avaliação publicada" : "avaliações publicadas"}`;

  list.innerHTML = reviews.map((review) => {
    const reviewAverage = (
      (Number(review.service_rating) + Number(review.environment_rating) + Number(review.quality_rating)) / 3
    );
    const safeName = escapeHtml(review.name);
    const safeComment = escapeHtml(review.comment);
    const date = formatReviewDate(review.created_at);

    return `
      <article class="review-card">
        <div class="review-card__top">
          <div>
            <h4>${safeName}</h4>
            <div class="review-card__date">${date}</div>
          </div>
          <div class="review-card__rating" aria-label="Nota média ${reviewAverage.toFixed(1)} de 5">
            <span>${starsMarkup(reviewAverage)}</span>
            <strong>${reviewAverage.toFixed(1).replace(".", ",")}</strong>
          </div>
        </div>
        <p class="review-card__comment">“${safeComment}”</p>
        <div class="review-card__details">
          <span>Atendimento <b>${review.service_rating}/5</b></span>
          <span>Ambiente <b>${review.environment_rating}/5</b></span>
          <span>Qualidade <b>${review.quality_rating}/5</b></span>
        </div>
      </article>
    `;
  }).join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function loadReviews(client) {
  const status = document.getElementById("reviewsStatus");
  if (status) status.textContent = "Carregando avaliações...";

  const { data, error } = await client
    .from("reviews")
    .select("id,name,service_rating,environment_rating,quality_rating,comment,created_at")
    .eq("approved", true)
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) {
    console.error("Erro ao carregar avaliações:", error);
    if (status) status.textContent = "Não foi possível carregar as avaliações";
    return;
  }

  renderReviews(data || []);
}

function initReviewForm() {
  const form = document.getElementById("reviewForm");
  if (!form) return;

  const note = document.getElementById("reviewFormNote");
  const submitButton = document.getElementById("reviewSubmit");

  if (!isSupabaseConfigured() || !window.supabase) {
    if (note) note.textContent = "O sistema online ainda precisa ser conectado ao banco de avaliações. Veja o arquivo CONFIGURAR-AVALIACOES.md deste pacote.";
    if (submitButton) submitButton.disabled = true;
    const status = document.getElementById("reviewsStatus");
    if (status) status.textContent = "Banco de avaliações ainda não configurado";
    return;
  }

  const client = window.supabase.createClient(
    window.BRAGA_SUPABASE.url,
    window.BRAGA_SUPABASE.anonKey
  );

  loadReviews(client);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("reviewName").value.trim();
    const service = Number(document.getElementById("reviewService").value);
    const environment = Number(document.getElementById("reviewEnvironment").value);
    const quality = Number(document.getElementById("reviewQuality").value);
    const comment = document.getElementById("reviewComment").value.trim();

    if (name.length < 2 || name.length > 60 || comment.length < 5 || comment.length > 1000) {
      if (note) note.textContent = "Confira o nome e o comentário antes de enviar.";
      return;
    }

    if (![service, environment, quality].every((value) => value >= 1 && value <= 5)) {
      if (note) note.textContent = "Selecione uma nota de 1 a 5 para os três critérios.";
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = "Publicando...";
    if (note) note.textContent = "Enviando sua avaliação...";

    const { error } = await client.from("reviews").insert({
      name,
      service_rating: service,
      environment_rating: environment,
      quality_rating: quality,
      comment,
      approved: true
    });

    if (error) {
      console.error("Erro ao publicar avaliação:", error);
      submitButton.disabled = false;
      submitButton.textContent = "Publicar avaliação";
      if (note) note.textContent = "Não foi possível publicar agora. Tente novamente em alguns instantes.";
      return;
    }

    form.reset();
    submitButton.disabled = false;
    submitButton.textContent = "Publicar avaliação";
    if (note) note.textContent = "Obrigado! Sua avaliação foi publicada no site. 💈";
    await loadReviews(client);
  });
}

/* ---------------------------------------------------------
   Init
   --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderBookingLinks();
  renderServices();
  renderProducts();
  initNav();
  initReveal();
  initReviewForm();
  document.getElementById("year").textContent = new Date().getFullYear();
});
