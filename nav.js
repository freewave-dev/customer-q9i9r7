(function() {
  var btn = document.getElementById('internet-btn');
  var dd = document.getElementById('internet-dd');
  if (!btn || !dd) return;

  var menuItems = dd.querySelectorAll('[role="menuitem"]');

  function openMenu() {
    dd.classList.add('show');
    btn.setAttribute('aria-expanded', 'true');
    if (menuItems.length) menuItems[0].focus();
  }

  function closeMenu(returnFocus) {
    dd.classList.remove('show');
    btn.setAttribute('aria-expanded', 'false');
    if (returnFocus) btn.focus();
  }

  btn.addEventListener('click', function(e) {
    e.preventDefault();
    if (dd.classList.contains('show')) {
      closeMenu(true);
    } else {
      openMenu();
    }
  });

  btn.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openMenu();
    }
  });

  dd.addEventListener('keydown', function(e) {
    var items = Array.prototype.slice.call(menuItems);
    var idx = items.indexOf(document.activeElement);

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      var next = idx + 1 < items.length ? idx + 1 : 0;
      items[next].focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      var prev = idx - 1 >= 0 ? idx - 1 : items.length - 1;
      items[prev].focus();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      closeMenu(true);
    } else if (e.key === 'Tab') {
      closeMenu(false);
    }
  });

  document.addEventListener('click', function(e) {
    if (!btn.contains(e.target) && !dd.contains(e.target)) {
      closeMenu(false);
    }
  });
})();
