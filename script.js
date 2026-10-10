/* Espresso Perfetto Bar – script.js
   Reines JavaScript, keine Abhängigkeiten. */
(function () {
  'use strict';

  /* Öffnungszeiten (Quelle: Google Maps). Index 0 = Sonntag. Format [von, bis] in "HH:MM", null = geschlossen.
     Hier anpassen, wenn sich die Zeiten ändern - Statusanzeige und Tabelle ziehen automatisch nach. */
  var HOURS = [["10:00","16:00"],["07:00","18:00"],["07:00","18:00"],["07:00","18:00"],["07:00","18:00"],["07:00","18:00"],["08:00","18:00"]];

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* --- Navigation --- */
  var nav = $('.nav'), toggle = $('.nav__toggle'), menu = $('.nav__menu');
  if (toggle && menu) {
    var setMenu = function (open) {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      menu.classList.toggle('is-open', open);
    };
    toggle.addEventListener('click', function () { setMenu(toggle.getAttribute('aria-expanded') !== 'true'); });
    $$('a', menu).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  }
  var onScroll = function () {
    if (nav) nav.classList.toggle('is-scrolled', window.scrollY > 10);
    var b = $('.back-to-top');
    if (b) b.hidden = window.scrollY < 700;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  var back = $('.back-to-top');
  if (back) back.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

  /* --- Öffnungsstatus (Zeit in Düsseldorf, egal wo der Besucher sitzt) --- */
  function berlinNow() {
    var p = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Berlin', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
    var o = {}; p.forEach(function (x) { o[x.type] = x.value; });
    var days = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    return { day: days[o.weekday], min: (parseInt(o.hour, 10) % 24) * 60 + parseInt(o.minute, 10) };
  }
  function toMin(s) { var a = s.split(':'); return parseInt(a[0], 10) * 60 + parseInt(a[1], 10); }

  function renderStatus() {
    var now = berlinNow(), today = HOURS[now.day], open = false, text = '';
    if (today && now.min >= toMin(today[0]) && now.min < toMin(today[1])) {
      open = true; text = 'Jetzt geöffnet · bis ' + today[1] + ' Uhr';
    } else {
      var d = now.day, label = '';
      if (today && now.min < toMin(today[0])) { label = 'heute ' + today[0] + ' Uhr'; }
      else {
        var names = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
        for (var i = 1; i <= 7; i++) {
          var n = (d + i) % 7;
          if (HOURS[n]) { label = (i === 1 ? 'morgen' : names[n]) + ' ' + HOURS[n][0] + ' Uhr'; break; }
        }
      }
      text = 'Geschlossen · öffnet ' + label;
    }
    $$('.hero__status').forEach(function (el) {
      el.setAttribute('data-open', open ? 'true' : 'false');
      var t = $('.hero__status-text', el); if (t) t.textContent = text;
    });
    $$('.hours-table tr[data-day]').forEach(function (tr) {
      tr.setAttribute('data-today', parseInt(tr.getAttribute('data-day'), 10) === now.day ? 'true' : 'false');
    });
  }
  renderStatus();
  setInterval(renderStatus, 60000);

  /* --- Scroll-Reveal --- */
  var revealEls = $$('.reveal-item, .reveal-left, .reveal-right, .reveal-scale');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el, i) {
      var sib = el.parentElement ? $$('.reveal-item', el.parentElement) : [];
      el.style.setProperty('--stagger-index', Math.max(0, sib.indexOf(el)));
      io.observe(el);
    });
  } else { revealEls.forEach(function (el) { el.classList.add('is-visible'); }); }

  /* --- FAQ --- */
  $$('.faq__item').forEach(function (item) {
    var q = $('.faq__question', item);
    q.addEventListener('click', function () {
      var open = !item.classList.contains('is-open');
      item.classList.toggle('is-open', open);
      q.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  /* --- Fotos: fehlt eine Bilddatei, bleibt das Motiv-Muster stehen --- */
  $$('.photo-slot img').forEach(function (img) {
    var slot = img.closest('.photo-slot');
    var miss = function () { img.remove(); if (slot) slot.classList.add('is-empty'); };
    if (img.complete && img.naturalWidth === 0) miss(); else img.addEventListener('error', miss);
  });
  var heroPhoto = $('.hero__photo');
  if (heroPhoto) {
    var gone = function () { heroPhoto.remove(); };
    if (heroPhoto.complete && heroPhoto.naturalWidth === 0) gone(); else heroPhoto.addEventListener('error', gone);
  }

  /* --- Lightbox --- */
  var lb = $('.lightbox');
  if (lb) {
    var lbImg = $('.lightbox__media', lb), lbCap = $('.lightbox__caption', lb);
    var close = function () { lb.hidden = true; document.body.style.overflow = ''; };
    $$('.gallery__tile').forEach(function (tile) {
      tile.addEventListener('click', function () {
        var img = $('img', tile); if (!img || tile.classList.contains('is-empty')) return;
        lbImg.src = img.src; lbImg.alt = img.alt; lbCap.textContent = img.alt;
        lb.hidden = false; document.body.style.overflow = 'hidden';
      });
    });
    $('.lightbox__close', lb).addEventListener('click', close);
    $('.lightbox__backdrop', lb).addEventListener('click', close);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !lb.hidden) close(); });
  }

  /* --- Karte erst nach Klick laden (Zwei-Klick-Lösung, DSGVO) --- */
  var mapBtn = $('[data-load-map]');
  if (mapBtn) {
    mapBtn.addEventListener('click', function () {
      var box = $('.contact__map');
      var f = document.createElement('iframe');
      f.src = 'https://www.google.com/maps?q=' + encodeURIComponent(mapBtn.getAttribute('data-load-map')) + '&output=embed';
      f.title = 'Karte: ' + mapBtn.getAttribute('data-load-map');
      f.loading = 'lazy'; f.referrerPolicy = 'no-referrer-when-downgrade';
      box.innerHTML = ''; box.appendChild(f);
    });
  }
})();
