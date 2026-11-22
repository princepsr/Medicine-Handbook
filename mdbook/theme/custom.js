// Marks inline code that starts with the warning sign (the "verify" flags)
// so custom.css can show them as small amber badges.
(function () {
  function mark() {
    document.querySelectorAll('.content code').forEach(function (el) {
      if (el.parentElement && el.parentElement.tagName === 'PRE') return;
      var t = (el.textContent || '').trim();
      if (t.indexOf('⚠') === 0) el.classList.add('mlh-verify');
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mark);
  } else {
    mark();
  }
})();
