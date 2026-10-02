const $ = (selector, parent=document) => parent.querySelector(selector);
const $$ = (selector, parent=document) => [...parent.querySelectorAll(selector)];

const header = $("#header");
const progress = $("#scrollProgress");
const menuToggle = $("#menuToggle");
const nav = $("#mainNav");
const productGrid = $("#productsGrid");

function renderProducts(filter="all"){
  const list = filter === "all" ? products : products.filter(p => p.category === filter);
  productGrid.innerHTML = list.map((p, i) => `
    <article class="product-card reveal visible" data-category="${p.category}">
      <span class="product-no">0${i+1} / PRODUCT</span>
      <span class="product-tag">${p.tag}</span>
      <div class="product-icon">${p.icon}</div>
      <h3>${p.name}</h3>
      <p>${p.description}</p>
    </article>
  `).join("");
}
renderProducts();

$$(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    $$(".filter").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProducts(btn.dataset.filter);
  });
});

menuToggle?.addEventListener("click", () => {
  nav.classList.toggle("open");
});
$$(".nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

function onScroll(){
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${Math.max(0, Math.min(100, (scrollY / max) * 100))}%`;
  header.classList.toggle("scrolled", scrollY > 30);
}
addEventListener("scroll", onScroll, {passive:true});
onScroll();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
$$(".reveal").forEach(el => observer.observe(el));

const sections = $$("main section[id]");
const navLinks = $$(".nav a");
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
    }
  });
},{rootMargin:"-35% 0px -55% 0px"});
sections.forEach(s => sectionObserver.observe(s));

$("#contactForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const note = $("#formNote");
  const name = e.currentTarget.elements.name.value.trim();
  note.textContent = `شكراً ${name || ""} — تم تجهيز طلبك. اربط هذا النموذج لاحقاً بملف PHP أو API لإرسال البيانات.`;
  note.style.color = "#e1262f";
  e.currentTarget.reset();
});
