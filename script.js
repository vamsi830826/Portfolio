// Copy email to clipboard, with a fallback for older/restricted browsers
function copyText(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text);
  }
  return new Promise(function (resolve, reject) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      resolve();
    } catch (err) {
      reject(err);
    }
    document.body.removeChild(ta);
  });
}

document.querySelectorAll('.copy-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var text = btn.getAttribute('data-copy');
    var restore = btn.textContent;
    copyText(text).then(function () {
      btn.textContent = 'Copied';
      btn.classList.add('copied');
      setTimeout(function () {
        btn.textContent = restore;
        btn.classList.remove('copied');
      }, 1500);
    }).catch(function () {
      // Clipboard blocked (e.g. no permission) — the email is still
      // right there as visible, selectable text, so this fails quietly.
    });
  });
});

// Highlight the current section's nav link while scrolling
var navLinks = Array.prototype.slice.call(document.querySelectorAll('[data-nav]'));
var sections = navLinks
  .map(function (link) { return document.querySelector(link.getAttribute('href')); })
  .filter(Boolean);

if (navLinks.length && sections.length && 'IntersectionObserver' in window) {
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = '#' + entry.target.id;
          navLinks.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('href') === id);
          });
        }
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );
  sections.forEach(function (section) { observer.observe(section); });
}

// Gentle reveal-on-scroll for sections (skipped entirely if IO isn't supported,
// content just stays visible either way)
if ('IntersectionObserver' in window) {
  var revealEls = document.querySelectorAll('.reveal');
  revealEls.forEach(function (el) { el.classList.add('is-ready'); });

  var revealObserver = new IntersectionObserver(
    function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach(function (el) { revealObserver.observe(el); });
}
