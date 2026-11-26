/* ============ The Recipe Hub — shared data & behavior ============ */

const SITE = {
  name: "The Recipe Hub",
  tagline: "Simple, friendly recipes for cooks just starting out",
  owner: "Rachel Mizer",
  email: "hello@recipehubraleigh.example",
  phone: "(919) 555-0142",
  address: "123 Saffron Lane, Suite 4, Raleigh, NC 27601"
};

/* ---------- Recipe data ---------- */
const RECIPES = [
  {
    id: "garlic-butter-pasta", title: "Garlic Butter Pasta", emoji: "🍝", c1: "#F2C46D", c2: "#C9772F",
    cuisine: "Italian", category: "Main", difficulty: "Easy", time: 20, serves: 2, added: "2026-11-22",
    summary: "Five pantry ingredients, one pot of water, and a weeknight dinner that tastes like a restaurant.",
    ingredients: ["200 g spaghetti", "3 tbsp butter", "4 cloves garlic, thinly sliced", "1/4 cup grated Parmesan", "Salt, pepper and chopped parsley"],
    steps: ["Boil a large pot of well-salted water and cook the spaghetti until just tender.", "Before draining, scoop out a mug of the starchy pasta water.", "Melt the butter in a pan over low heat and gently cook the garlic until fragrant and pale gold.", "Toss the drained pasta into the pan with a splash of pasta water and the Parmesan until glossy.", "Season with pepper, sprinkle with parsley and serve right away."],
    tip: "Keep the heat low for the garlic — it turns bitter in seconds if it browns too much."
  },
  {
    id: "fluffy-pancakes", title: "Fluffy Weekend Pancakes", emoji: "🥞", c1: "#F7D9A6", c2: "#D99A4E",
    cuisine: "American", category: "Breakfast", difficulty: "Easy", time: 25, serves: 4, added: "2026-11-19",
    summary: "Tall, tender pancakes from scratch — no mix required, and no fancy equipment either.",
    ingredients: ["1 1/2 cups flour", "1 tbsp sugar", "2 tsp baking powder", "1/2 tsp salt", "1 1/4 cups milk", "1 egg", "3 tbsp melted butter"],
    steps: ["Whisk the dry ingredients together in a large bowl.", "In another bowl, whisk the milk, egg and melted butter.", "Pour wet into dry and stir just until combined — lumps are fine!", "Heat a lightly oiled pan over medium heat and pour 1/4 cup batter per pancake.", "Flip when bubbles form on top, then cook another minute until golden."],
    tip: "Over-mixing makes pancakes tough. Stop stirring as soon as you don't see dry flour."
  },
  {
    id: "chicken-teriyaki", title: "Easy Chicken Teriyaki", emoji: "🍗", c1: "#E59A5C", c2: "#8A3B1E",
    cuisine: "Japanese", category: "Main", difficulty: "Easy", time: 30, serves: 3, added: "2026-11-16",
    summary: "Sticky, glossy, sweet-savory chicken with a homemade four-ingredient sauce.",
    ingredients: ["500 g boneless chicken thighs", "1/4 cup soy sauce", "2 tbsp mirin", "1 tbsp sugar or honey", "1 tsp grated ginger", "Steamed rice, to serve"],
    steps: ["Stir together the soy sauce, mirin, sugar and ginger.", "Pat the chicken dry and cook skin-side down in a pan over medium heat until golden.", "Flip and cook until the chicken is cooked through.", "Pour in the sauce and simmer, spooning it over the chicken, until thick and shiny.", "Slice and serve over rice."],
    tip: "Patting the chicken dry is the secret to a golden crust instead of a steamed one."
  },
  {
    id: "chana-masala", title: "Weeknight Chana Masala", emoji: "🍛", c1: "#E8A23A", c2: "#9B3D1C",
    cuisine: "Indian", category: "Main", difficulty: "Medium", time: 40, serves: 4, added: "2026-11-12",
    summary: "A cozy chickpea curry that builds big flavor from a handful of everyday spices.",
    ingredients: ["2 cans chickpeas, drained", "1 onion, diced", "3 cloves garlic", "1 tbsp grated ginger", "1 can crushed tomatoes", "2 tsp garam masala", "1 tsp cumin", "1 tsp turmeric", "Fresh cilantro"],
    steps: ["Soften the onion in oil over medium heat for 8 minutes.", "Add garlic, ginger and spices; stir for one minute until fragrant.", "Add tomatoes and simmer 10 minutes.", "Stir in the chickpeas and a splash of water; simmer 15 minutes more.", "Season with salt and finish with cilantro."],
    tip: "Toasting the spices in oil for a minute 'wakes them up' and makes the curry taste deeper."
  },
  {
    id: "chicken-tacos", title: "Lime Chicken Street Tacos", emoji: "🌮", c1: "#9CCB6B", c2: "#3F7A3A",
    cuisine: "Mexican", category: "Main", difficulty: "Easy", time: 30, serves: 4, added: "2026-11-08",
    summary: "Bright, juicy chicken tucked into warm tortillas with a quick onion-cilantro topping.",
    ingredients: ["500 g chicken thighs", "2 limes", "1 tsp chili powder", "1 tsp cumin", "Small corn tortillas", "1/2 white onion, diced", "Cilantro"],
    steps: ["Toss the chicken with lime juice, chili powder, cumin and salt.", "Cook in a hot pan 5–6 minutes per side.", "Rest for 5 minutes, then chop into small pieces.", "Warm tortillas in a dry pan.", "Top with chicken, onion, cilantro and an extra squeeze of lime."],
    tip: "Letting meat rest before cutting keeps the juices inside instead of on the cutting board."
  },
  {
    id: "tomato-soup", title: "Roasted Tomato Soup", emoji: "🍅", c1: "#F07A5E", c2: "#A62C2B",
    cuisine: "American", category: "Soup", difficulty: "Easy", time: 45, serves: 4, added: "2026-11-04",
    summary: "Mostly hands-off: the oven does the work, and a blender makes it silky smooth.",
    ingredients: ["1 kg ripe tomatoes, halved", "1 onion, quartered", "4 cloves garlic", "3 tbsp olive oil", "2 cups vegetable broth", "Fresh basil"],
    steps: ["Heat the oven to 200°C / 400°F.", "Spread tomatoes, onion and garlic on a tray, drizzle with oil and season.", "Roast 30 minutes until soft and slightly charred.", "Blend with the broth and basil until smooth.", "Reheat, taste for salt and serve with grilled cheese."],
    tip: "Let hot soup cool for a few minutes before blending, and never fill the blender more than halfway."
  },
  {
    id: "greek-salad", title: "Classic Greek Salad", emoji: "🥗", c1: "#B5D77E", c2: "#4E8A50",
    cuisine: "Greek", category: "Side", difficulty: "Easy", time: 15, serves: 4, added: "2026-10-30",
    summary: "No cooking at all — just good chopping practice and a punchy olive-oil dressing.",
    ingredients: ["3 tomatoes, chunked", "1 cucumber, sliced", "1/2 red onion, thinly sliced", "1 green pepper", "Kalamata olives", "200 g feta", "Olive oil, red wine vinegar, dried oregano"],
    steps: ["Chop the vegetables into bite-size pieces.", "Combine in a large bowl with the olives.", "Whisk 3 tbsp olive oil, 1 tbsp vinegar, oregano and a pinch of salt.", "Pour over the salad and toss gently.", "Top with a slab of feta and an extra drizzle of oil."],
    tip: "Soak sliced red onion in cold water for 5 minutes to soften its sharp bite."
  },
  {
    id: "fried-rice", title: "Leftover Fried Rice", emoji: "🍚", c1: "#F3D27A", c2: "#B4762E",
    cuisine: "Chinese", category: "Main", difficulty: "Easy", time: 15, serves: 2, added: "2026-10-26",
    summary: "The best use for day-old rice — fast, flexible and ready in 15 minutes.",
    ingredients: ["3 cups cold cooked rice", "2 eggs", "1 cup frozen peas & carrots", "3 green onions", "2 tbsp soy sauce", "1 tsp sesame oil"],
    steps: ["Heat oil in a large pan or wok over high heat.", "Scramble the eggs, then push them to one side.", "Add the vegetables and cook 2 minutes.", "Add the rice, breaking up clumps, and stir-fry until hot.", "Season with soy sauce and sesame oil; top with green onions."],
    tip: "Cold rice is key — freshly cooked rice turns mushy in the pan."
  },
  {
    id: "choc-chip-cookies", title: "Chewy Chocolate Chip Cookies", emoji: "🍪", c1: "#D9A46A", c2: "#6B3F1F",
    cuisine: "American", category: "Dessert", difficulty: "Easy", time: 35, serves: 24, added: "2026-10-21",
    summary: "Crisp edges, soft middles and lots of chocolate — a perfect first baking project.",
    ingredients: ["1 cup softened butter", "3/4 cup brown sugar", "1/2 cup white sugar", "2 eggs", "1 tsp vanilla", "2 1/4 cups flour", "1 tsp baking soda", "1/2 tsp salt", "2 cups chocolate chips"],
    steps: ["Heat the oven to 180°C / 350°F.", "Beat butter and sugars until creamy, then beat in eggs and vanilla.", "Stir in the flour, baking soda and salt, then fold in the chips.", "Scoop tablespoon-size balls onto a lined tray.", "Bake 10–12 minutes until the edges are golden; cool on the tray."],
    tip: "Pull cookies out when the centers still look a little underdone — they finish setting as they cool."
  },
  {
    id: "shakshuka", title: "One-Pan Shakshuka", emoji: "🍳", c1: "#E8704F", c2: "#8E2A25",
    cuisine: "Middle Eastern", category: "Breakfast", difficulty: "Medium", time: 30, serves: 3, added: "2026-10-15",
    summary: "Eggs gently poached in a spiced tomato and pepper sauce. Serve with crusty bread.",
    ingredients: ["1 onion", "1 red pepper", "2 cloves garlic", "1 tsp cumin", "1 tsp paprika", "1 can crushed tomatoes", "4–5 eggs", "Feta & parsley"],
    steps: ["Cook the onion and pepper in oil until soft.", "Add garlic and spices for 1 minute.", "Pour in tomatoes and simmer 10 minutes until thick.", "Make wells in the sauce and crack an egg into each.", "Cover and cook 5–8 minutes until the whites are set; top with feta and parsley."],
    tip: "A lid traps steam to cook the tops of the eggs without overcooking the yolks."
  },
  {
    id: "banana-bread", title: "One-Bowl Banana Bread", emoji: "🍌", c1: "#F5DB7A", c2: "#A87A2E",
    cuisine: "American", category: "Dessert", difficulty: "Easy", time: 70, serves: 8, added: "2026-10-09",
    summary: "Turn spotty bananas into a moist, golden loaf — just one bowl and a fork.",
    ingredients: ["3 very ripe bananas", "1/3 cup melted butter", "3/4 cup sugar", "1 egg", "1 tsp vanilla", "1 tsp baking soda", "Pinch of salt", "1 1/2 cups flour"],
    steps: ["Heat the oven to 175°C / 350°F and grease a loaf pan.", "Mash the bananas in a bowl with a fork.", "Stir in butter, then sugar, egg, vanilla, baking soda and salt.", "Fold in the flour until just combined.", "Bake 55–65 minutes until a skewer comes out clean."],
    tip: "The darker and spottier the bananas, the sweeter and more flavorful the bread."
  },
  {
    id: "miso-soup", title: "5-Minute Miso Soup", emoji: "🥣", c1: "#D9C08A", c2: "#7A6A3A",
    cuisine: "Japanese", category: "Soup", difficulty: "Easy", time: 10, serves: 2, added: "2026-10-02",
    summary: "A warm, savory bowl that's nearly impossible to mess up.",
    ingredients: ["3 cups dashi or vegetable broth", "3 tbsp white miso paste", "150 g soft tofu, cubed", "2 green onions", "1 sheet nori, cut into strips"],
    steps: ["Bring the broth to a gentle simmer.", "Add the tofu and warm for 2 minutes.", "Turn off the heat.", "Whisk the miso with a ladle of broth in a small bowl, then stir it back in.", "Top with green onions and nori."],
    tip: "Never boil miso — high heat dulls its flavor. Always add it off the heat."
  }
].sort((a, b) => b.added.localeCompare(a.added));

const VIDEOS = [
  { title: "Knife Skills 101: Dice an Onion Without Tears", emoji: "🔪", c1: "#9AA7B5", c2: "#3E4A5A", dur: "8:42", views: "12K views" },
  { title: "How to Cook Perfect Rice on the Stove", emoji: "🍚", c1: "#E9DDBF", c2: "#9C8A5E", dur: "6:15", views: "8.4K views" },
  { title: "Garlic Butter Pasta — Full Walkthrough", emoji: "🍝", c1: "#F2C46D", c2: "#C9772F", dur: "11:03", views: "21K views" },
  { title: "Your First Batch of Cookies (Start to Finish)", emoji: "🍪", c1: "#D9A46A", c2: "#6B3F1F", dur: "14:27", views: "17K views" }
];

/* ---------- Helpers ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const fmtDate = (iso) => new Date(iso + "T12:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
const fmtTime = (m) => (m >= 60 ? `${Math.floor(m / 60)} hr ${m % 60 ? (m % 60) + " min" : ""}`.trim() : `${m} min`);
const art = (r, extra = "") => `<div class="dish-art" style="--c1:${r.c1};--c2:${r.c2}" role="img" aria-label="${esc(r.title)}">${extra}<span class="emoji">${r.emoji}</span></div>`;
const diffBadge = (d) => `<span class="badge ${d.toLowerCase()}">${d}</span>`;
const isNew = (r) => (Date.parse(RECIPES[0].added) - Date.parse(r.added)) / 86400000 <= 14;

function toast(msg) {
  let t = $(".toast");
  if (!t) { t = document.createElement("div"); t.className = "toast"; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._h);
  t._h = setTimeout(() => t.classList.remove("show"), 2200);
}

/* ---------- Shared layout: header, nav, footer ---------- */
const ICONS = {
  facebook: '<svg viewBox="0 0 24 24"><path d="M14 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V2.3C16.7 2.3 15.7 2 14.6 2 12.2 2 10.6 3.4 10.6 6.1v2.4H8v3.6h2.6V22H14v-9.9h2.7l.4-3.6H14z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24"><path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zM17.3 5.5a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zM12 3.8c2.7 0 3 0 4 .1 2.7.1 4 1.4 4.1 4.1.1 1 .1 1.3.1 4s0 3-.1 4c-.1 2.7-1.4 4-4.1 4.1-1 .1-1.3.1-4 .1s-3 0-4-.1c-2.7-.1-4-1.4-4.1-4.1-.1-1-.1-1.3-.1-4s0-3 .1-4C4 5.3 5.3 4 8 3.9c1-.1 1.3-.1 4-.1zM12 2c-2.7 0-3.1 0-4.1.1C4.2 2.2 2.2 4.2 2.1 7.9 2 8.9 2 9.3 2 12s0 3.1.1 4.1c.1 3.7 2.1 5.7 5.8 5.8 1 .1 1.4.1 4.1.1s3.1 0 4.1-.1c3.7-.1 5.7-2.1 5.8-5.8.1-1 .1-1.4.1-4.1s0-3.1-.1-4.1c-.1-3.7-2.1-5.7-5.8-5.8C15.1 2 14.7 2 12 2z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24"><path d="M23 7.2a3 3 0 00-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 001 7.2 31 31 0 00.5 12a31 31 0 00.5 4.8 3 3 0 002.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 002.1-2.1 31 31 0 00.5-4.8 31 31 0 00-.5-4.8zM9.7 15V9l5.8 3-5.8 3z"/></svg>',
  pinterest: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 00-3.6 19.3c-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.5 1.8-2.5.9 0 1.3.7 1.3 1.4 0 .9-.6 2.2-.9 3.4-.2 1 .5 1.9 1.6 1.9 1.9 0 3.3-2 3.3-4.9 0-2.6-1.8-4.4-4.5-4.4-3 0-4.8 2.3-4.8 4.6 0 .9.4 1.9.8 2.4.1.1.1.2.1.3l-.3 1.2c0 .2-.2.3-.4.2-1.4-.6-2.2-2.6-2.2-4.2 0-3.4 2.5-6.6 7.2-6.6 3.8 0 6.7 2.7 6.7 6.3 0 3.8-2.4 6.8-5.7 6.8-1.1 0-2.2-.6-2.5-1.3l-.7 2.6c-.2 1-.9 2.2-1.4 2.9A10 10 0 1012 2z"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24"><path d="M16.6 5.8A4.3 4.3 0 0115.5 3h-3.2v12.4a2.6 2.6 0 11-1.8-2.5V9.6a5.8 5.8 0 105 5.8V9.1a7.4 7.4 0 004.3 1.4V7.3a4.3 4.3 0 01-3.2-1.5z"/></svg>',
  home: '<svg viewBox="0 0 24 24"><path d="M12 3 2 11.5h3V21h5.5v-6h3v6H19v-9.5h3L12 3z"/></svg>',
  recipes: '<svg viewBox="0 0 24 24"><path d="M6 2h11a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm1 2v16h10V4H7zm2 3h6v1.6H9V7zm0 3.5h6v1.6H9v-1.6zm0 3.5h4v1.6H9V14z"/></svg>',
  about: '<svg viewBox="0 0 24 24"><path d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0 2c-4 0-8 2-8 5v2h16v-2c0-3-4-5-8-5z"/></svg>',
  contact: '<svg viewBox="0 0 24 24"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm1.6 2L12 12.3 19.4 7H4.6zM4 9v8h16V9l-8 5.7L4 9z"/></svg>',
  share: '<svg viewBox="0 0 24 24"><path d="M18 16a3 3 0 00-2.4 1.2l-6.7-3.4a3 3 0 000-1.6l6.7-3.4A3 3 0 1015 7l-6.7 3.4a3 3 0 100 3.2L15 17a3 3 0 103-1z"/></svg>'
};

function renderLayout() {
  const page = document.body.dataset.page;
  const links = [
    ["index.html", "Home", "home"],
    ["recipes.html", "Recipe Catalog", "recipes"],
    ["about.html", "About Us", "about"],
    ["contact.html", "Contact", "contact"]
  ];

  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `<p class="logo"><a href="index.html">${SITE.name}</a></p><p class="tagline">${SITE.tagline}</p>`;

  const nav = document.createElement("nav");
  nav.className = "site-nav";
  nav.setAttribute("aria-label", "Main");
  nav.innerHTML = `
    <div class="nav-inner">
      <ul class="nav-links">
        ${links.map(([href, label, key]) => `<li><a href="${href}" class="${key === page || (page === "recipe" && key === "recipes") ? "active" : ""}">${ICONS[key]}<span>${label}</span></a></li>`).join("")}
      </ul>
      <div class="nav-social">
        ${["facebook", "instagram", "youtube", "pinterest", "tiktok"].map((s) =>
          `<a href="#" class="social-link" aria-label="${s[0].toUpperCase() + s.slice(1)}" title="${s[0].toUpperCase() + s.slice(1)}">${ICONS[s]}</a>`).join("")}
        <button class="share-btn" type="button" id="shareBtn">${ICONS.share}Share</button>
      </div>
    </div>`;

  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="footer-inner">
      <div>
        <h4>${SITE.name}</h4>
        <p>${SITE.tagline}.</p>
      </div>
      <div>
        <h4>Explore</h4>
        <ul class="footer-links">
          ${links.map(([href, label]) => `<li><a href="${href}">${label}</a></li>`).join("")}
        </ul>
      </div>
      <div>
        <h4>Get in Touch</h4>
        <p><a href="contact.html">Contact the Recipe Hub &rarr;</a></p>
        <p>${SITE.email}</p>
      </div>
    </div>
    <p class="copyright">&copy; ${new Date().getFullYear()} ${SITE.name} &middot; ${SITE.owner}. All rights reserved.</p>`;

  document.body.prepend(header, nav);
  document.body.append(footer);

  // Social links are placeholders
  nav.querySelectorAll(".social-link").forEach((a) =>
    a.addEventListener("click", (e) => { e.preventDefault(); toast(`${a.title} page coming soon!`); }));

  // Share button: native share sheet if available, otherwise copy the link
  $("#shareBtn").addEventListener("click", async () => {
    const data = { title: document.title, text: `Check out ${SITE.name}!`, url: location.href };
    try {
      if (navigator.share) { await navigator.share(data); return; }
      await navigator.clipboard.writeText(location.href);
      toast("Link copied to clipboard!");
    } catch (err) {
      if (err && err.name !== "AbortError") toast("Copy this page's address to share it.");
    }
  });
}

/* ---------- Cards ---------- */
function recipeCard(r) {
  return `
    <a class="recipe-card" href="recipe.html?id=${r.id}">
      ${art(r, isNew(r) ? '<span class="badge new-flag">New</span>' : "")}
      <div class="card-body">
        <h3>${esc(r.title)}</h3>
        <p>${esc(r.summary)}</p>
        <div class="card-meta">
          ${diffBadge(r.difficulty)}
          <span class="badge light">${r.cuisine}</span>
          <span class="time">⏱ ${fmtTime(r.time)}</span>
        </div>
      </div>
    </a>`;
}

/* ---------- Page: Home ---------- */
function initHome() {
  const slides = RECIPES.slice(0, 5);
  const show = $("#slideshow");
  show.innerHTML = `
    ${slides.map((r, i) => `
      <div class="slide ${i === 0 ? "active" : ""}" aria-hidden="${i !== 0}">
        ${art(r)}
        <div class="slide-caption">
          <span class="badge">Just Added &middot; ${r.cuisine}</span>
          <h2>${esc(r.title)}</h2>
          <p>${esc(r.summary)}</p>
          <a class="btn" href="recipe.html?id=${r.id}">Get the Recipe</a>
        </div>
      </div>`).join("")}
    <button class="slide-btn prev" aria-label="Previous slide">&#8249;</button>
    <button class="slide-btn next" aria-label="Next slide">&#8250;</button>
    <div class="slide-dots">${slides.map((_, i) => `<button aria-label="Go to slide ${i + 1}" class="${i === 0 ? "active" : ""}"></button>`).join("")}</div>`;

  const els = show.querySelectorAll(".slide");
  const dots = show.querySelectorAll(".slide-dots button");
  let cur = 0, timer;
  const go = (n) => {
    els[cur].classList.remove("active"); els[cur].setAttribute("aria-hidden", "true"); dots[cur].classList.remove("active");
    cur = (n + els.length) % els.length;
    els[cur].classList.add("active"); els[cur].setAttribute("aria-hidden", "false"); dots[cur].classList.add("active");
  };
  const restart = () => { clearInterval(timer); timer = setInterval(() => go(cur + 1), 5500); };
  $(".prev", show).onclick = () => { go(cur - 1); restart(); };
  $(".next", show).onclick = () => { go(cur + 1); restart(); };
  dots.forEach((d, i) => (d.onclick = () => { go(i); restart(); }));
  show.addEventListener("mouseenter", () => clearInterval(timer));
  show.addEventListener("mouseleave", restart);
  restart();

  $("#newestList").innerHTML = RECIPES.slice(0, 6).map((r) => `
    <li>
      <a class="newest-item" href="recipe.html?id=${r.id}">
        ${art(r)}
        <div class="info">
          <h3>${esc(r.title)}</h3>
          <p>${esc(r.summary)}</p>
          <span class="date">Added ${fmtDate(r.added)}</span> &nbsp; ${diffBadge(r.difficulty)}
        </div>
      </a>
    </li>`).join("");

  $("#videoGrid").innerHTML = VIDEOS.map((v) => `
    <a class="video-card" href="#" data-video>
      <div class="video-thumb">
        ${art(v)}<span class="shade"></span><span class="play"></span><span class="duration">${v.dur}</span>
      </div>
      <h4>${esc(v.title)}</h4>
      <span class="channel">The Recipe Hub &middot; ${v.views}</span>
    </a>`).join("");
  document.querySelectorAll("[data-video]").forEach((a) =>
    a.addEventListener("click", (e) => { e.preventDefault(); toast("Video coming soon to our YouTube channel!"); }));
}

/* ---------- Page: Catalog ---------- */
function initCatalog() {
  const fill = (id, key) => {
    const vals = [...new Set(RECIPES.map((r) => r[key]))].sort();
    $(id).insertAdjacentHTML("beforeend", vals.map((v) => `<option>${v}</option>`).join(""));
  };
  fill("#fCuisine", "cuisine");
  fill("#fCategory", "category");

  const params = new URLSearchParams(location.search);
  if (params.get("cuisine")) $("#fCuisine").value = params.get("cuisine");

  const grid = $("#catalogGrid");
  const apply = () => {
    const q = $("#fSearch").value.trim().toLowerCase();
    const cu = $("#fCuisine").value, ca = $("#fCategory").value, d = $("#fDifficulty").value;
    const list = RECIPES.filter((r) =>
      (!q || (r.title + " " + r.summary + " " + r.ingredients.join(" ")).toLowerCase().includes(q)) &&
      (!cu || r.cuisine === cu) && (!ca || r.category === ca) && (!d || r.difficulty === d));
    grid.innerHTML = list.length ? list.map(recipeCard).join("")
      : `<div class="empty"><h3>No recipes match those filters</h3><p style="text-align:center">Try clearing a filter or searching for something else.</p></div>`;
    $("#resultCount").textContent = `Showing ${list.length} of ${RECIPES.length} recipes`;
  };
  ["#fSearch", "#fCuisine", "#fCategory", "#fDifficulty"].forEach((s) => $(s).addEventListener("input", apply));
  $("#resetFilters").addEventListener("click", () => {
    ["#fSearch", "#fCuisine", "#fCategory", "#fDifficulty"].forEach((s) => ($(s).value = ""));
    apply();
  });

  document.querySelectorAll(".view-toggle button").forEach((b) =>
    b.addEventListener("click", () => {
      document.querySelectorAll(".view-toggle button").forEach((x) => x.classList.toggle("active", x === b));
      grid.classList.toggle("list-view", b.dataset.view === "list");
    }));
  apply();
}

/* ---------- Page: Recipe detail ---------- */
function initRecipe() {
  const id = new URLSearchParams(location.search).get("id");
  const r = RECIPES.find((x) => x.id === id) || RECIPES[0];
  document.title = `${r.title} | ${SITE.name}`;
  $("#recipe").innerHTML = `
    <a class="back-link" href="recipes.html">&larr; Back to the Recipe Catalog</a>
    <div class="recipe-hero">
      ${art(r)}
      <div>
        <span class="badge light">${r.cuisine} &middot; ${r.category}</span>
        <h1>${esc(r.title)}</h1>
        <p>${esc(r.summary)}</p>
        <div class="fact-row">
          <div class="fact"><strong>Time</strong>${fmtTime(r.time)}</div>
          <div class="fact"><strong>Serves</strong>${r.serves}</div>
          <div class="fact"><strong>Level</strong>${r.difficulty}</div>
          <div class="fact"><strong>Added</strong>${fmtDate(r.added)}</div>
        </div>
      </div>
    </div>
    <div class="recipe-body">
      <div class="panel">
        <h2>Ingredients</h2>
        <ul>${r.ingredients.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
      </div>
      <div class="panel">
        <h2>Method</h2>
        <ol>${r.steps.map((s) => `<li>${esc(s)}</li>`).join("")}</ol>
        <div class="tip"><strong>Beginner tip:</strong> ${esc(r.tip)}</div>
      </div>
    </div>
    <section class="section" style="margin-top:3rem">
      <h2 class="section-title">You Might Also Like</h2>
      <div class="card-grid">${RECIPES.filter((x) => x.id !== r.id).slice(0, 4).map(recipeCard).join("")}</div>
    </section>`;
}

/* ---------- Page: Contact ---------- */
function initContact() {
  const form = $("#contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const name = $("#cName").value.trim().split(" ")[0];
    $("#formSuccess").innerHTML = `<strong>Thanks, ${esc(name)}!</strong> Your message has been sent. ${SITE.owner.split(" ")[0]} usually replies within 2–3 days. (This is a demo form — nothing was actually sent.)`;
    $("#formSuccess").classList.add("show");
    form.reset();
    $("#formSuccess").scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderLayout();
  const init = { home: initHome, recipes: initCatalog, recipe: initRecipe, contact: initContact }[document.body.dataset.page];
  if (init) init();
});
