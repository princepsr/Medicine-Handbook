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
  var SECS = [
    [/red flags?/i, 'mlh-sec-redflags'],
    [/ask your doctor/i, 'mlh-sec-ask'],
    [/not verified/i, 'mlh-sec-verify'],
    [/key terms/i, 'mlh-sec-terms']
  ];
  function wrapSections() {
    document.querySelectorAll('.content main h2').forEach(function (h) {
      var cls = null;
      SECS.forEach(function (s) { if (!cls && s[0].test(h.textContent)) cls = s[1]; });
      if (!cls || h.parentElement.classList.contains('mlh-sec')) return;
      var box = document.createElement('div');
      box.className = 'mlh-sec ' + cls;
      h.parentNode.insertBefore(box, h);
      var n = h;
      while (n && !(n !== h && /^H[12]$/.test(n.tagName))) {
        var next = n.nextSibling;
        box.appendChild(n);
        n = next;
      }
    });
  }
  function run() { mark(); wrapSections(); }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
