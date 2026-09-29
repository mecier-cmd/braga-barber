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
    desc: "Creme tópico fortalecedor, com Baicapil™, para fortalecimento dos fios.",
    vol: "30ml",
    price: 125.0,
    img: "assets/ultra-tonic.jpg",
  },
  {
    category: "Finalização",
    name: "Pasta Nuvem — Jaboque",
    desc: "Pasta de fixação média com efeito nuvem, sem álcool, para todos os tipos de cabelo.",
    vol: "80g",
    price: 65.0,
    img: "assets/pasta-nuvem.jpg",
  },
  {
    category: "Finalização",
    name: "Pasta Classic — Jaboque",
    desc: "Pasta Classic Jaboque para modelar e finalizar o penteado.",
    vol: "80g",
    price: 65.0,
    img: "assets/produto-pasta-classic.jpg",
  },
  {
    category: "Finalização",
    name: "Pasta Matte — Jaboque",
    desc: "Pasta Matte Jaboque com efeito matte e acabamento sem brilho.",
    vol: "80g",
    price: 65.0,
    img: "assets/produto-pasta-matte.jpg",
  },
  {
    category: "Barba",
    name: "Beard Oil — Jaboque",
    desc: "Óleo para hidratar e recuperar a barba, especialmente barbas longas e ressecadas.",
    vol: "30ml",
    price: 75.0,
    img: "assets/beard-oil.jpg",
  },
  {
    category: "Barba",
    name: "Balm de Barba — Jaboque",
    desc: "Balm hidratante de baixa oleosidade para o cuidado diário da barba.",
    vol: "140ml",
    price: 65.0,
    img: "assets/balm.jpg",
  },
  {
    category: "Cabelo",
    name: "Leave-in Finalizador — Jaboque",
    desc: "Creme para pentear com ação anti-frizz e hidratação.",
    vol: "240ml",
    price: 95.0,
    img: "assets/leave-in.jpg",
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
  const categories = ["Cabelo", "Barba", "Finalização"];

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
   Init
   --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderBookingLinks();
  renderServices();
  renderProducts();
  initNav();
  initReveal();
  document.getElementById("year").textContent = new Date().getFullYear();
});
