/**
 * BBQ TODAY · PREMIUM SCRIPT & INTERACTIVITY
 * Grand Mall, Al Rashidiya 3, Ajman
 */

const PHONE = '971522854003';

// Menu Catalog
const MENU = [
  // Pizza
  {
    id: 'royal-crown',
    cat: 'Pizza',
    name: 'Royal Crown Pizza',
    ar: 'بيتزا رويال كراون',
    img: 'royal-crown.jpg',
    tag: 'Signature',
    tagType: 'gold',
    desc: 'Stuffed crown crust with seasoned chicken chunks, bell peppers, golden sweetcorn, black olives & rich stretchy mozzarella.',
    sizes: { M: 35, L: 45 },
    spice: 'Mild',
    diet: ['Halal', 'Chef Special', 'Crown Crust']
  },
  {
    id: 'kabab-pizza',
    cat: 'Pizza',
    name: 'Kabab Pizza',
    ar: 'بيتزا كباب',
    img: 'kabab-pizza.jpg',
    tag: 'Chef Choice',
    tagType: 'flame',
    desc: 'Handmade Pakistani seekh kabab slices baked with onions, crisp capsicum, oregano & thick melted mozzarella cheese.',
    sizes: { S: 25, M: 35, L: 45 },
    spice: 'Medium Spicy',
    diet: ['Halal', 'Charcoal Spiced']
  },
  {
    id: 'bbq-pizza',
    cat: 'Pizza',
    name: 'BBQ Special Pizza',
    ar: 'بيتزا بي بي كيو الخاصة',
    img: 'bbq-pizza.jpg',
    tag: 'Best Seller',
    tagType: 'flame',
    desc: 'Tender chicken glazed in smoky Pakistani barbecue sauce, red onions, mushrooms & extra golden mozzarella.',
    sizes: { S: 20, M: 30, L: 40 },
    spice: 'Smoky & Tangy',
    diet: ['Halal', 'Bestseller']
  },
  {
    id: 'cheese-lover',
    cat: 'Pizza',
    name: 'Cheese Lover Pizza',
    ar: 'بيتزا الجبن',
    img: 'cheese-lover.jpg',
    tag: 'Cheese Pull',
    tagType: 'gold',
    desc: 'A decadent four-cheese blend of mozzarella, cheddar and special herbs over savory house pizza sauce.',
    sizes: { S: 15, M: 25, L: 35 },
    spice: 'Mild',
    diet: ['Vegetarian', 'Extra Cheese']
  },
  {
    id: 'donner-pizza',
    cat: 'Pizza',
    name: 'Donner Pizza',
    ar: 'بيتزا دونر',
    img: 'donner-pizza.jpg',
    tag: '',
    tagType: '',
    desc: 'Shaved savory doner meat, diced tomatoes, sliced onions and signature garlic drizzle on a crispy crust.',
    sizes: { M: 35, L: 45 },
    spice: 'Savory',
    diet: ['Halal', 'Meat Lovers']
  },
  {
    id: 'fajita-pizza',
    cat: 'Pizza',
    name: 'Chicken Fajita Supreme',
    ar: 'دجاج فاهيتا سوبريم',
    img: 'fajita-pizza.jpg',
    tag: 'Spicy',
    tagType: 'flame',
    desc: 'Fiery Mexican-Pakistani fusion fajita chicken, charred green peppers, jalapenos & melted mozzarella.',
    sizes: { S: 18, M: 28, L: 38 },
    spice: 'Spicy 🌶️',
    diet: ['Halal', 'Spicy Kick']
  },

  // Shawarma
  {
    id: 'pak-shawarma',
    cat: 'Shawarma',
    name: 'Pakistani Special Shawarma',
    ar: 'شاورما باكستانية خاصة',
    img: 'pak-shawarma.jpg',
    tag: 'Must Try',
    tagType: 'gold',
    desc: 'Desi-spiced spit-roasted chicken wrapped in toasted saj bread with authentic garlic toum, french fries & pickled cucumbers.',
    price: 8,
    spice: 'Medium Desi',
    diet: ['Halal', 'Authentic Street Recipe']
  },
  {
    id: 'zinger-shawarma',
    cat: 'Shawarma',
    name: 'Zinger Shawarma',
    ar: 'شاورما زنجر',
    img: 'zinger-shawarma.jpg',
    tag: 'Crispy',
    tagType: 'flame',
    desc: 'Golden crispy zinger chicken tenders, crunchy shredded lettuce, pickles and house spicy garlic mayo in warm wrap.',
    price: 10,
    spice: 'Spicy Crunch 🌶️',
    diet: ['Halal', 'Extra Crunchy']
  },
  {
    id: 'kabab-shawarma',
    cat: 'Shawarma',
    name: 'Kabab Shawarma',
    ar: 'كباب شاورما',
    img: 'kabab-shawarma.jpg',
    tag: '',
    tagType: '',
    desc: 'Juicy spiced minced beef/chicken kabab grilled to perfection, rolled with fresh mint-coriander chutney & onions.',
    price: 10,
    spice: 'Charcoal Herb',
    diet: ['Halal', 'High Protein']
  },
  {
    id: 'platter',
    cat: 'Shawarma',
    name: 'Shawarma Platter Deluxe',
    ar: 'طبق شاورما ديلوكس',
    img: 'platter.jpg',
    tag: 'Feast',
    tagType: 'gold',
    desc: 'Sliced bite-sized shawarma rolls served with golden seasoned fries, pickled turnips, creamy garlic toum and spicy dip.',
    price: 12,
    spice: 'Mild to Medium',
    diet: ['Halal', 'Platter Combo']
  },

  // Burgers
  {
    id: 'shami-burger',
    cat: 'Burgers',
    name: 'Shami Special Burger',
    ar: 'برجر اسبيشل شامي',
    img: 'shami-burger.jpg',
    tag: 'Fan Favourite',
    tagType: 'gold',
    desc: 'The iconic Pakistani Anda Shami Burger: handmade lentil-beef patty, fluffy egg omelette, chopped cabbage, onions and tangy secret sauces.',
    price: 8,
    fries: 2,
    spice: 'Desi Street Classic 🌶️',
    diet: ['Halal', 'Lahori Street Food Legend']
  },
  {
    id: 'zinger-burger',
    cat: 'Burgers',
    name: 'Zinger Supreme Burger',
    ar: 'برجر زينجر سوبريم',
    img: 'zinger-burger.jpg',
    tag: 'Crispy Fillet',
    tagType: 'flame',
    desc: 'Thick marinated chicken breast fillet coated in ultra-crispy golden batter, iceberg lettuce, slice of cheese and creamy pepper mayo.',
    price: 10,
    fries: 2,
    spice: 'Mild-Spicy',
    diet: ['Halal', '100% Whole Muscle Chicken']
  },
  {
    id: 'bbq-burger',
    cat: 'Burgers',
    name: 'Smoky BBQ Burger',
    ar: 'برجر بي بي كيو',
    img: 'bbq-burger.jpg',
    tag: '',
    tagType: '',
    desc: 'Flame-grilled patty basted with slow-simmered smoky BBQ glaze, caramelized onions and melted American cheddar.',
    price: 6,
    fries: 2,
    spice: 'Smoky',
    diet: ['Halal', 'Flame Grilled']
  },
  {
    id: 'beef-burger',
    cat: 'Burgers',
    name: 'Classic Gourmet Beef Burger',
    ar: 'برجر لحم بقري كلاسيك',
    img: 'beef-burger.jpg',
    tag: '',
    tagType: '',
    desc: 'Juicy 100% Halal seasoned beef patty, fresh lettuce, red ripe tomato slice, melted cheese and house signature sauce.',
    price: 6,
    fries: 2,
    spice: 'Savory',
    diet: ['Halal', 'Real Beef']
  },

  // Sides
  {
    id: 'cheese-fries',
    cat: 'Sides',
    name: 'Loaded Cheese Fries',
    ar: 'بطاطس مقلية بالجبن',
    img: 'cheese-fries.jpg',
    tag: 'Popular',
    tagType: 'gold',
    desc: 'Heaping bowl of crispy salted fries smothered in warm velvety cheese sauce, seasoned chicken bits, olives and jalapeño peppers.',
    price: 15,
    spice: 'Cheesy Delight',
    diet: ['Comfort Food', 'Shareable']
  },
  {
    id: 'nuggets',
    cat: 'Sides',
    name: 'Crispy Chicken Nuggets (7 pcs)',
    ar: 'قطع دجاج ناجتس ٧ قطع',
    img: 'nuggets.jpg',
    tag: 'Kid Friendly',
    tagType: '',
    desc: 'Seven pieces of golden crunchy chicken nuggets served piping hot with garlic and barbecue dipping sauces.',
    price: 7,
    spice: 'Mild',
    diet: ['Halal', 'Quick Bite']
  },
  {
    id: 'fries',
    cat: 'Sides',
    name: 'Golden French Fries',
    ar: 'بطاطس مقلية',
    img: 'fries.jpg',
    tag: '',
    tagType: '',
    desc: 'Freshly fried hot and crispy potato fries tossed in light sea salt. Served with ketchup and mayo.',
    price: 5,
    spice: 'Mild',
    diet: ['Vegetarian', 'Crispy']
  }
];

const CATS = ['All', 'Pizza', 'Shawarma', 'Burgers', 'Sides'];
const SIZE_NAMES = { S: 'Small', M: 'Medium', L: 'Large' };
const aed = n => 'AED ' + Number(n).toFixed(2);
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

/* ==========================================================================
   1. Canvas Floating Barbecue Embers (Hero Section)
   ========================================================================== */
function initEmberCanvas() {
  const canvas = document.getElementById('emberCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height, particles = [];

  function resize() {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class Ember {
    constructor() {
      this.reset(true);
    }
    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 10;
      this.size = Math.random() * 2.5 + 1;
      this.speedY = Math.random() * 0.8 + 0.4;
      this.speedX = (Math.random() - 0.5) * 0.6;
      this.alpha = Math.random() * 0.7 + 0.3;
      this.decay = Math.random() * 0.003 + 0.001;
      // Warm ember tones: orange, amber, red
      const hue = Math.random() > 0.4 ? (Math.random() * 25 + 35) : (Math.random() * 15 + 5);
      this.color = `hsla(${hue}, 100%, 55%, `;
    }
    update() {
      this.y -= this.speedY;
      this.x += this.speedX + Math.sin(this.y * 0.01) * 0.3;
      this.alpha -= this.decay;
      if (this.y < -10 || this.alpha <= 0) {
        this.reset();
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color + this.alpha + ')';
      ctx.shadowBlur = 8;
      ctx.shadowColor = 'rgba(245, 158, 11, 0.8)';
      ctx.fill();
    }
  }

  const count = Math.min(Math.floor(width / 25), 45);
  for (let i = 0; i < count; i++) {
    particles.push(new Ember());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }
  animate();
}

/* ==========================================================================
   2. Live Operating Hours Status (UAE Timezone)
   ========================================================================== */
function updateLiveStatus() {
  const el = $('#liveStatus');
  if (!el) return;

  // UAE is UTC+4
  const now = new Date();
  const utcHours = now.getUTCHours();
  const uaeHours = (utcHours + 4) % 24;

  // Restaurant is open 12:00 PM (12) to 12:00 AM Midnight (24/0)
  const isOpen = (uaeHours >= 12 && uaeHours <= 23);

  if (isOpen) {
    el.innerHTML = `<span class="status-dot"></span><span class="status-text">Open Now · Closes 12:00 AM</span>`;
    el.style.borderColor = 'rgba(34, 197, 94, 0.4)';
    el.style.color = '#4ade80';
  } else {
    el.innerHTML = `<span class="status-dot" style="background:#f59e0b;box-shadow:0 0 8px #f59e0b;"></span><span class="status-text">Opens at 12:00 PM Daily</span>`;
    el.style.borderColor = 'rgba(245, 158, 11, 0.4)';
    el.style.color = '#fbbf24';
  }
}

/* ==========================================================================
   3. Theme Switcher (Dark Luxury Gold by default, Light option)
   ========================================================================== */
function initTheme() {
  const toggle = $('#themeToggle');
  const saved = localStorage.getItem('bbqtoday-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);

  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('bbqtoday-theme', next);
    });
  }
}

/* ==========================================================================
   4. Header & Navigation Logic
   ========================================================================== */
const toggleBtn = $('#menuToggle');
const navLinks = $('#navLinks');
const header = $('#header');

if (toggleBtn && navLinks) {
  toggleBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggleBtn.classList.toggle('open', isOpen);
    toggleBtn.setAttribute('aria-expanded', isOpen);
  });

  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggleBtn.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// Header scrolled styling & Active spy
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 20;
  if (header) header.classList.toggle('scrolled', scrolled);

  // Back to top button
  const btt = $('#backToTop');
  if (btt) btt.classList.toggle('show', window.scrollY > 400);

  // Active section spy
  const sections = $$('section[id]');
  const scrollPos = window.scrollY + 120;
  sections.forEach(sec => {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');
    if (scrollPos >= top && scrollPos < top + height) {
      $$('.nav-links .nav-link').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { passive: true });

// Back to top click
const bttBtn = $('#backToTop');
if (bttBtn) {
  bttBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Copyright year
const yearEl = $('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ==========================================================================
   5. Interactive Menu Rendering, Filtering & Search
   ========================================================================== */
let activeCat = 'All';
let searchQuery = '';

function renderTabs() {
  const tabsContainer = $('#tabs');
  if (!tabsContainer) return;
  tabsContainer.innerHTML = CATS.map(c =>
    `<button class="tab ${c === activeCat ? 'active' : ''}" role="tab" aria-selected="${c === activeCat}" data-cat="${c}">${c}</button>`
  ).join('');
}

function cardHTML(item, i) {
  let price, controls = '';
  if (item.sizes) {
    const keys = Object.keys(item.sizes);
    const def = keys.includes('M') ? 'M' : keys[0];
    price = item.sizes[def];
    controls = `<div class="sizes-selector">${keys.map(k =>
      `<button class="size-pill ${k === def ? 'active' : ''}" data-size="${k}">${SIZE_NAMES[k]}<small>${item.sizes[k]} AED</small></button>`
    ).join('')}</div>`;
  } else {
    price = item.price;
    if (item.fries) {
      controls = `<label class="addon-label"><input type="checkbox" class="fries-opt" /> Add hot fries (+AED ${item.fries})</label>`;
    }
  }

  const badgeClass = item.tagType === 'flame' ? 'badge-tag flame' : 'badge-tag';
  const tagHtml = item.tag ? `<span class="${badgeClass}">${item.tag}</span>` : '';

  return `
    <article class="card" data-id="${item.id}" style="animation-delay:${(i % 8) * 45}ms">
      <div class="card-img-wrap" data-action="quickview">
        <img src="images/${item.img}" alt="${item.name}" loading="lazy" />
        ${tagHtml}
        <div class="card-overlay-btn">
          <span class="overlay-pill">🔍 Quick View</span>
        </div>
      </div>
      <div class="card-body">
        <div class="card-header-row">
          <h3>${item.name}</h3>
          <span class="price-tag"><small>AED</small><span class="pv">${price}</span></span>
        </div>
        <div class="card-ar">${item.ar}</div>
        <p class="card-desc">${item.desc}</p>
        ${controls}
        <button class="btn-add-dish" aria-label="Add ${item.name} to order">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>
          <span>Add to Order</span>
        </button>
      </div>
    </article>
  `;
}

function renderMenu() {
  const grid = $('#menuGrid');
  const emptyState = $('#emptySearch');
  if (!grid) return;

  let filtered = activeCat === 'All' ? MENU : MENU.filter(m => m.cat === activeCat);

  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(m =>
      m.name.toLowerCase().includes(q) ||
      m.ar.includes(q) ||
      m.desc.toLowerCase().includes(q) ||
      m.cat.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
  } else {
    if (emptyState) emptyState.style.display = 'none';
    grid.innerHTML = filtered.map(cardHTML).join('');
  }
}

// Tab click listener
$('#tabs')?.addEventListener('click', e => {
  const t = e.target.closest('.tab');
  if (!t) return;
  activeCat = t.dataset.cat;
  renderTabs();
  renderMenu();
  t.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
});

// Search input listener
const searchInput = $('#menuSearch');
const clearSearchBtn = $('#clearSearch');

if (searchInput) {
  searchInput.addEventListener('input', e => {
    searchQuery = e.target.value;
    if (clearSearchBtn) clearSearchBtn.style.display = searchQuery ? 'grid' : 'none';
    renderMenu();
  });
}

if (clearSearchBtn) {
  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.style.display = 'none';
    renderMenu();
    searchInput.focus();
  });
}

$('#resetSearchBtn')?.addEventListener('click', () => {
  if (searchInput) searchInput.value = '';
  searchQuery = '';
  activeCat = 'All';
  if (clearSearchBtn) clearSearchBtn.style.display = 'none';
  renderTabs();
  renderMenu();
});

// Footer links filter shortcut
$$('a[data-filter]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const targetCat = a.dataset.filter;
    activeCat = targetCat;
    renderTabs();
    renderMenu();
    const menuSec = $('#menu');
    if (menuSec) menuSec.scrollIntoView({ behavior: 'smooth' });
  });
});

/* ==========================================================================
   6. Dish Quick View Modal
   ========================================================================== */
const dishModal = $('#dishModal');
const dishModalBackdrop = $('#dishModalBackdrop');
const modalBody = $('#modalBody');
const closeModalBtn = $('#closeModalBtn');

function openModal(item) {
  if (!dishModal || !modalBody) return;

  let sizeControls = '';
  let defaultPrice = item.price;
  if (item.sizes) {
    const keys = Object.keys(item.sizes);
    const def = keys.includes('M') ? 'M' : keys[0];
    defaultPrice = item.sizes[def];
    sizeControls = `
      <div class="sizes-selector modal-sizes" style="margin: 16px 0;">
        ${keys.map(k => `
          <button class="size-pill ${k === def ? 'active' : ''}" data-size="${k}">
            ${SIZE_NAMES[k]}<small>${item.sizes[k]} AED</small>
          </button>
        `).join('')}
      </div>
    `;
  } else if (item.fries) {
    sizeControls = `
      <label class="addon-label modal-addon" style="margin: 16px 0;">
        <input type="checkbox" class="fries-opt" /> Add seasoned hot fries (+AED ${item.fries})
      </label>
    `;
  }

  const tagChips = (item.diet || []).map(t => `<span class="modal-tag-chip">✓ ${t}</span>`).join('');

  modalBody.innerHTML = `
    <div class="modal-img-wrap">
      <img src="images/${item.img}" alt="${item.name}" />
    </div>
    <div class="modal-content-wrap">
      <div class="modal-header-top">
        <h3>${item.name}</h3>
        <span class="modal-price-lg"><small style="font-size:13px;color:var(--text-muted)">AED </small><span class="modal-pv">${defaultPrice}</span></span>
      </div>
      <div class="modal-ar">${item.ar}</div>
      <p class="modal-desc">${item.desc}</p>
      <div class="modal-tags">
        <span class="modal-tag-chip">🌶️ ${item.spice || 'Savory'}</span>
        ${tagChips}
      </div>
      ${sizeControls}
      <button class="btn btn-primary btn-block modal-add-btn" data-id="${item.id}">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>
        <span>Add to Order (<span class="modal-btn-price">AED ${defaultPrice}.00</span>)</span>
      </button>
    </div>
  `;

  dishModal.classList.add('show');
  dishModalBackdrop.classList.add('show');
  dishModal.setAttribute('aria-hidden', 'false');
  dishModalBackdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!dishModal) return;
  dishModal.classList.remove('show');
  dishModalBackdrop.classList.remove('show');
  dishModal.setAttribute('aria-hidden', 'true');
  dishModalBackdrop.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

closeModalBtn?.addEventListener('click', closeModal);
dishModalBackdrop?.addEventListener('click', closeModal);

// Modal interaction events (sizes, fries, add)
dishModal?.addEventListener('click', e => {
  const sizeBtn = e.target.closest('.size-pill');
  const card = dishModal;
  const item = MENU.find(m => m.id === card.querySelector('.modal-add-btn')?.dataset.id);

  if (sizeBtn && item) {
    card.querySelectorAll('.size-pill').forEach(b => b.classList.toggle('active', b === sizeBtn));
    const newPrice = item.sizes[sizeBtn.dataset.size];
    card.querySelector('.modal-pv').textContent = newPrice;
    card.querySelector('.modal-btn-price').textContent = aed(newPrice);
    return;
  }

  const addBtn = e.target.closest('.modal-add-btn');
  if (addBtn && item) {
    let size = null, withFries = false, unit;
    if (item.sizes) {
      size = card.querySelector('.size-pill.active')?.dataset.size;
      unit = item.sizes[size];
    } else {
      withFries = !!card.querySelector('.fries-opt')?.checked;
      unit = item.price + (withFries ? item.fries : 0);
    }
    addToCart(item, size, withFries, unit);
    closeModal();
  }
});

dishModal?.addEventListener('change', e => {
  if (!e.target.classList.contains('fries-opt')) return;
  const card = dishModal;
  const item = MENU.find(m => m.id === card.querySelector('.modal-add-btn')?.dataset.id);
  if (!item) return;
  const total = item.price + (e.target.checked ? item.fries : 0);
  card.querySelector('.modal-pv').textContent = total;
  card.querySelector('.modal-btn-price').textContent = aed(total);
});

// Card delegate click listener
$('#menuGrid')?.addEventListener('click', e => {
  const card = e.target.closest('.card');
  if (!card) return;
  const item = MENU.find(m => m.id === card.dataset.id);
  if (!item) return;

  // Quick view trigger on image
  if (e.target.closest('.card-img-wrap')) {
    openModal(item);
    return;
  }

  // Size pill switcher
  const sizeBtn = e.target.closest('.size-pill');
  if (sizeBtn) {
    card.querySelectorAll('.size-pill').forEach(b => b.classList.toggle('active', b === sizeBtn));
    card.querySelector('.pv').textContent = item.sizes[sizeBtn.dataset.size];
    return;
  }

  // Add to order button
  if (e.target.closest('.btn-add-dish')) {
    let size = null, withFries = false, unit;
    if (item.sizes) {
      size = card.querySelector('.size-pill.active')?.dataset.size;
      unit = item.sizes[size];
    } else {
      withFries = !!card.querySelector('.fries-opt')?.checked;
      unit = item.price + (withFries ? item.fries : 0);
    }
    addToCart(item, size, withFries, unit);
  }
});

$('#menuGrid')?.addEventListener('change', e => {
  if (!e.target.classList.contains('fries-opt')) return;
  const card = e.target.closest('.card');
  const item = MENU.find(m => m.id === card.dataset.id);
  if (!item) return;
  card.querySelector('.pv').textContent = item.price + (e.target.checked ? item.fries : 0);
});

/* ==========================================================================
   7. Shopping Cart, Slide-in Drawer & WhatsApp Formatting
   ========================================================================== */
let cart = [];
try {
  cart = JSON.parse(localStorage.getItem('bbqtoday-cart')) || [];
} catch (_) {}

function saveCart() {
  try {
    localStorage.setItem('bbqtoday-cart', JSON.stringify(cart));
  } catch (_) {}
}

function getItemLabel(l) {
  return l.name + (l.size ? ` (${SIZE_NAMES[l.size]})` : '') + (l.withFries ? ' + Hot Fries' : '');
}

function addToCart(item, size, withFries, unit) {
  const key = `${item.id}|${size || ''}|${withFries}`;
  const existing = cart.find(l => l.key === key);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      key,
      id: item.id,
      name: item.name,
      img: item.img,
      size,
      withFries,
      unit,
      qty: 1
    });
  }
  saveCart();
  updateCartUI();
  toast(`Added ${getItemLabel({ name: item.name, size, withFries })}`);
}

function updateCartUI() {
  const count = cart.reduce((s, l) => s + l.qty, 0);
  const total = cart.reduce((s, l) => s + l.qty * l.unit, 0);

  // Badges & Counters
  ['#cartCount', '#navCartCount', '#mobileCartCount'].forEach(id => {
    const el = $(id);
    if (el) el.textContent = count;
  });

  const cartTotal = $('#cartTotal');
  const drawerSubtotal = $('#drawerSubtotal');
  const drawerTotal = $('#drawerTotal');
  if (cartTotal) cartTotal.textContent = aed(total);
  if (drawerSubtotal) drawerSubtotal.textContent = aed(total);
  if (drawerTotal) drawerTotal.textContent = aed(total);

  // Floating order bar visibility
  $('#orderBar')?.classList.toggle('show', count > 0);

  // Drawer items rendering
  const itemsContainer = $('#cartItems');
  if (itemsContainer) {
    if (count === 0) {
      itemsContainer.innerHTML = `
        <div class="drawer-empty-state">
          <div class="empty-cart-emoji">🍕</div>
          <h4>Your cart is empty</h4>
          <p>Add some sizzling BBQ burgers, shawarmas or crown pizzas!</p>
        </div>
      `;
    } else {
      itemsContainer.innerHTML = cart.map((l, i) => `
        <div class="cart-item">
          <img src="images/${l.img}" alt="${l.name}" />
          <div class="cart-item-info">
            <b>${getItemLabel(l)}</b>
            <small>${aed(l.unit)} each</small>
          </div>
          <div class="qty-control">
            <button data-i="${i}" data-d="-1" aria-label="Decrease quantity">−</button>
            <span>${l.qty}</span>
            <button data-i="${i}" data-d="1" aria-label="Increase quantity">+</button>
          </div>
        </div>
      `).join('');
    }
  }

  // Build WhatsApp message
  buildWhatsAppLink(total);
}

function buildWhatsAppLink(total) {
  const sendBtn = $('#sendOrder');
  if (!sendBtn) return;

  const orderType = document.querySelector('input[name="orderType"]:checked')?.value || 'Delivery';
  const notes = $('#orderNotes')?.value.trim();

  let msg = `🔥 *NEW ORDER - BBQ TODAY AJMAN* 🔥\n`;
  msg += `📍 *Order Type:* ${orderType}\n`;
  msg += `--------------------------------\n`;

  cart.forEach((l, index) => {
    msg += `${index + 1}. *${l.qty}x* ${getItemLabel(l)} — ${aed(l.qty * l.unit)}\n`;
  });

  msg += `--------------------------------\n`;
  msg += `💰 *Estimated Total:* ${aed(total)}\n`;

  if (notes) {
    msg += `📝 *Special Instructions:* ${notes}\n`;
  }

  msg += `\nPlease confirm availability and prep time. Thank you!`;

  sendBtn.href = `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
}

// Drawer quantity controls
$('#cartItems')?.addEventListener('click', e => {
  const b = e.target.closest('button[data-i]');
  if (!b) return;
  const i = +b.dataset.i;
  const diff = +b.dataset.d;
  if (!cart[i]) return;

  cart[i].qty += diff;
  if (cart[i].qty <= 0) {
    cart.splice(i, 1);
  }
  saveCart();
  updateCartUI();
});

// Order type radio & notes change
$$('.ot-option')?.forEach(opt => {
  opt.addEventListener('click', () => {
    $$('.ot-option').forEach(o => o.classList.remove('active'));
    opt.classList.add('active');
    const total = cart.reduce((s, l) => s + l.qty * l.unit, 0);
    buildWhatsAppLink(total);
  });
});

$('#orderNotes')?.addEventListener('input', () => {
  const total = cart.reduce((s, l) => s + l.qty * l.unit, 0);
  buildWhatsAppLink(total);
});

// Drawer toggling
const drawer = $('#cartDrawer');
const backdrop = $('#backdrop');

function openDrawer(isOpen) {
  if (!drawer || !backdrop) return;
  drawer.classList.toggle('open', isOpen);
  backdrop.classList.toggle('show', isOpen);
  drawer.setAttribute('aria-hidden', !isOpen);
  backdrop.setAttribute('aria-hidden', !isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

$('#openCart')?.addEventListener('click', () => openDrawer(true));
$('#navCartBtn')?.addEventListener('click', () => openDrawer(true));
$('#mobileCartTrigger')?.addEventListener('click', () => openDrawer(true));
$('#closeCart')?.addEventListener('click', () => openDrawer(false));
backdrop?.addEventListener('click', () => openDrawer(false));

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    openDrawer(false);
    closeModal();
  }
});

$('#clearCart')?.addEventListener('click', () => {
  if (confirm('Are you sure you want to clear your current order?')) {
    cart = [];
    saveCart();
    updateCartUI();
  }
});

/* ==========================================================================
   8. Toast Notification System
   ========================================================================== */
let toastTimeout;
function toast(text) {
  const toastEl = $('#toast');
  const toastText = $('#toastText');
  if (!toastEl || !toastText) return;

  toastText.textContent = text;
  toastEl.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastEl.classList.remove('show');
  }, 2200);
}

/* ==========================================================================
   9. Plus Code Copy to Clipboard
   ========================================================================== */
$('#copyCodeBtn')?.addEventListener('click', () => {
  navigator.clipboard.writeText('9XVR+928 Grand Mall, Ajman').then(() => {
    toast('Plus Code copied: 9XVR+928');
  }).catch(() => {
    toast('Address: Grand Mall, Al Rashidiya 3, Ajman');
  });
});

/* ==========================================================================
   10. IntersectionObserver for Reveal Animations
   ========================================================================== */
function initScrollObserver() {
  const targets = $$('.feature-box, .service-card, .review-card, .craft-feature-item');
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  targets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

/* ==========================================================================
   11. Initialization
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initEmberCanvas();
  updateLiveStatus();
  renderTabs();
  renderMenu();
  updateCartUI();
  initScrollObserver();
  setInterval(updateLiveStatus, 60000); // Check hours every minute
});
