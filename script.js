(() => {
  const D = window.PORTFOLIO;
  const $ = (sel, root = document) => root.querySelector(sel);
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ============ RENDER ============ */
  const socialsHTML = D.socials
    .map(
      (s) =>
        `<a href="${esc(s.url)}" ${s.url.startsWith("http") ? 'target="_blank" rel="noopener"' : ""} aria-label="${esc(s.label)}" title="${esc(s.label)}"><i class="${s.icon}"></i></a>`
    )
    .join("");

  $("#hero-name").textContent = D.fullName;
  $("#status-text").textContent = D.status;
  $("#hero-intro").textContent = D.intro;
  $("#hero-socials").innerHTML = socialsHTML;
  $("#contact-socials").innerHTML = socialsHTML;
  $("#about-text").innerHTML = D.about.map((p) => `<p>${esc(p)}</p>`).join("");
  $("#email-text").textContent = D.email;
  $("#mail-btn").href = `mailto:${D.email}`;
  $("#location").textContent = D.location;
  $("#year").textContent = new Date().getFullYear();

  $("#stats").innerHTML = D.stats
    .map(
      (s) => `
      <div class="card stat reveal">
        <div class="stat-value gradient-text" data-count="${s.value}" data-decimals="${s.decimals}" data-suffix="${s.suffix}" data-plain="${!!s.plain}">0</div>
        <div class="stat-label">${esc(s.label)}</div>
      </div>`
    )
    .join("");

  $("#education").innerHTML = D.education
    .map(
      (e) => `
      <div class="card edu reveal">
        <div class="edu-icon"><i class="${e.icon}"></i></div>
        <div>
          <h4>${esc(e.title)}</h4>
          <p>${esc(e.place)}</p>
          <div class="edu-meta">
            <span class="chip accent"><i class="fa-solid fa-star"></i> ${esc(e.score)}</span>
            <span class="chip"><i class="fa-regular fa-calendar"></i> ${esc(e.period)}</span>
          </div>
        </div>
      </div>`
    )
    .join("");

  $("#timeline").innerHTML = D.experience
    .map(
      (x) => `
      <div class="t-item reveal ${x.current ? "current" : ""}">
        <span class="t-dot"><i class="${x.icon}"></i></span>
        <div class="card">
          <div class="t-head">
            <h3>${esc(x.role)}${x.current ? '<span class="badge-now">Current</span>' : ""}</h3>
            ${x.period ? `<span class="t-period">${esc(x.period)}</span>` : ""}
          </div>
          <div class="t-org">${esc(x.org)} <span class="chip" style="margin-left:6px">${esc(x.type)}</span></div>
          <ul>${x.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
        </div>
      </div>`
    )
    .join("");

  $("#filters").innerHTML = D.projectFilters
    .map(
      (f, i) =>
        `<button class="filter-btn ${i === 0 ? "active" : ""}" data-filter="${f.key}" role="tab" aria-selected="${i === 0}">${esc(f.label)}</button>`
    )
    .join("");

  $("#project-grid").innerHTML = D.projects
    .map(
      (p) => `
      <article class="card project reveal" data-category="${p.category}">
        <div class="p-top">
          <div class="p-icon"><i class="${p.icon}"></i></div>
          <span class="p-status ${p.status === "Ongoing" ? "ongoing" : "done"}">${esc(p.status)}</span>
        </div>
        ${p.featured ? '<div class="p-featured">★ Featured project</div>' : ""}
        <h3>${esc(p.title)}</h3>
        <p class="p-summary">${esc(p.summary)}</p>
        <ul>${p.points.map((pt) => `<li>${esc(pt)}</li>`).join("")}</ul>
        <div class="p-tech">${p.tech.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
        <div class="p-links">
          ${
            p.github
              ? `<a href="${esc(p.github)}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> View code</a>`
              : `<span class="private"><i class="fa-solid fa-lock"></i> Code available on request</span>`
          }
          ${p.live ? `<a href="${esc(p.live)}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live demo</a>` : ""}
        </div>
      </article>`
    )
    .join("");

  $("#skill-grid").innerHTML = D.skills
    .map(
      (g) => `
      <div class="card skill-card reveal">
        <h3><i class="${g.icon}"></i> ${esc(g.group)}</h3>
        <div class="skill-list">
          ${g.items.map((s) => `<span class="skill">${s.icon ? `<i class="${s.icon} ${s.icon.startsWith("devicon") ? "colored" : ""}"></i>` : ""}${esc(s.name)}</span>`).join("")}
        </div>
      </div>`
    )
    .join("");

  // Marquee: every unique devicon, doubled so the loop is seamless.
  const logos = [...new Set(D.skills.flatMap((g) => g.items.map((s) => s.icon)).filter((i) => i && i.startsWith("devicon")))];
  const logoHTML = logos.map((i) => `<i class="${i} colored"></i>`).join("");
  $("#marquee").innerHTML = logoHTML + logoHTML;

  $("#beyond-grid").innerHTML = D.beyond
    .map(
      (b) => `
      <div class="card beyond-item reveal">
        <i class="${b.icon}"></i>
        <h4>${esc(b.title)}</h4>
        <p>${esc(b.text)}</p>
      </div>`
    )
    .join("");

  // Show the resume button only if resume.pdf has been added to the site.
  fetch(D.resume, { method: "HEAD" })
    .then((r) => { if (r.ok) $("#resume-btn").hidden = false; })
    .catch(() => {});

  /* ============ TYPING EFFECT ============ */
  const typed = $("#typed");
  if (reducedMotion) {
    typed.textContent = D.roles[0];
  } else if (D.roles.length === 1) {
    // A single role types out once and stays.
    let i = 0;
    const once = () => {
      typed.textContent = D.roles[0].slice(0, ++i);
      if (i < D.roles[0].length) setTimeout(once, 75);
    };
    setTimeout(once, 600);
  } else {
    let roleIdx = 0, charIdx = 0, deleting = false;
    const tick = () => {
      const word = D.roles[roleIdx];
      charIdx += deleting ? -1 : 1;
      typed.textContent = word.slice(0, charIdx);
      let delay = deleting ? 35 : 75;
      if (!deleting && charIdx === word.length) { deleting = true; delay = 1800; }
      else if (deleting && charIdx === 0) { deleting = false; roleIdx = (roleIdx + 1) % D.roles.length; delay = 350; }
      setTimeout(tick, delay);
    };
    setTimeout(tick, 600);
  }

  /* ============ REVEAL + COUNTERS ============ */
  const animateCount = (el) => {
    const target = parseFloat(el.dataset.count);
    const decimals = +el.dataset.decimals;
    const suffix = el.dataset.suffix;
    if (reducedMotion) { el.textContent = target.toFixed(decimals) + suffix; return; }
    const start = el.dataset.plain === "true" ? target - 30 : 0;
    const t0 = performance.now();
    const dur = 1600;
    const step = (now) => {
      const p = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (start + (target - start) * eased).toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.classList.add("visible");
        // Once revealed, drop the stagger delay and slow transition so hover feels snappy.
        setTimeout(() => { el.style.transitionDelay = ""; el.classList.add("done"); }, 1300);
        const counter = el.querySelector("[data-count]");
        if (counter) animateCount(counter);
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => {
    // Stagger siblings in the same grid.
    const siblings = el.parentElement ? [...el.parentElement.children].filter((c) => c.classList.contains("reveal")) : [];
    const idx = siblings.indexOf(el);
    if (idx > 0) el.style.transitionDelay = `${Math.min(idx * 90, 450)}ms`;
    io.observe(el);
  });

  /* ============ PROJECT FILTERS ============ */
  $("#filters").addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    document.querySelectorAll(".filter-btn").forEach((b) => {
      b.classList.toggle("active", b === btn);
      b.setAttribute("aria-selected", b === btn);
    });
    const f = btn.dataset.filter;
    document.querySelectorAll(".project").forEach((card) => {
      const show = f === "all" || card.dataset.category === f;
      card.classList.toggle("hide", !show);
      card.classList.remove("pop");
      if (show) { void card.offsetWidth; card.classList.add("pop", "visible"); card.style.transitionDelay = "0ms"; }
    });
  });

  /* ============ NAV, PROGRESS, BACK-TO-TOP ============ */
  const nav = $("#nav");
  const progress = $("#scroll-progress");
  const toTop = $("#to-top");
  const links = [...document.querySelectorAll(".nav-links a")];
  const sections = links.map((a) => $(a.getAttribute("href")));

  const onScroll = () => {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;
    nav.classList.toggle("scrolled", y > 20);
    toTop.classList.toggle("show", y > 600);

    let current = -1;
    sections.forEach((s, i) => { if (s && s.getBoundingClientRect().top <= window.innerHeight * 0.35) current = i; });
    links.forEach((a, i) => a.classList.toggle("active", i === current));
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  toTop.addEventListener("click", () => window.scrollTo({ top: 0 }));

  const menuBtn = $("#menu-toggle");
  const navLinks = $("#nav-links");
  const setMenu = (open) => {
    navLinks.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", open);
    menuBtn.innerHTML = `<i class="fa-solid ${open ? "fa-xmark" : "fa-bars"}"></i>`;
  };
  menuBtn.addEventListener("click", () => setMenu(!navLinks.classList.contains("open")));
  links.forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("click", (e) => { if (!nav.contains(e.target)) setMenu(false); });

  /* ============ THEME ============ */
  const root = document.documentElement;
  const themeBtn = $("#theme-toggle");
  const syncThemeIcon = () => {
    themeBtn.innerHTML = `<i class="fa-solid ${root.dataset.theme === "light" ? "fa-sun" : "fa-moon"}"></i>`;
  };
  syncThemeIcon();
  themeBtn.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
    syncThemeIcon();
    particles.recolor();
  });

  /* ============ COPY EMAIL ============ */
  const toast = $("#toast");
  const showToast = (msg) => {
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(showToast.t);
    showToast.t = setTimeout(() => toast.classList.remove("show"), 2200);
  };
  $("#copy-email").addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(D.email); showToast("Email copied to clipboard ✓"); }
    catch (e) { showToast(D.email); }
  });

  /* ============ PARTICLE NETWORK BACKGROUND ============ */
  const particles = (() => {
    const canvas = $("#bg-canvas");
    const ctx = canvas.getContext("2d");
    let w, h, dots = [], rgb = "", raf;
    const mouse = { x: -9999, y: -9999 };
    const LINK = 130;

    const recolor = () => { rgb = getComputedStyle(root).getPropertyValue("--particle").trim(); if (reducedMotion) draw(); };
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + "px"; canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(Math.floor((w * h) / 16000), 90);
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < dots.length; i++) {
        const a = dots[i];
        if (!reducedMotion) {
          a.x += a.vx; a.y += a.vy;
          if (a.x < 0 || a.x > w) a.vx *= -1;
          if (a.y < 0 || a.y > h) a.vy *= -1;
          const dx = mouse.x - a.x, dy = mouse.y - a.y, d = Math.hypot(dx, dy);
          if (d < 160) { a.x -= dx * 0.012; a.y -= dy * 0.012; }
        }
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, 0.7)`;
        ctx.fill();
        for (let j = i + 1; j < dots.length; j++) {
          const b = dots[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK) {
            ctx.strokeStyle = `rgba(${rgb}, ${0.18 * (1 - d / LINK)})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
    };
    const loop = () => { draw(); raf = requestAnimationFrame(loop); };

    resize(); recolor();
    window.addEventListener("resize", () => { resize(); if (reducedMotion) draw(); });
    window.addEventListener("mousemove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
    document.addEventListener("visibilitychange", () => {
      if (reducedMotion) return;
      if (document.hidden) cancelAnimationFrame(raf); else loop();
    });
    if (reducedMotion) draw(); else loop();
    return { recolor };
  })();
})();
