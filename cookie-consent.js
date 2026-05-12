(function () {
  var STORAGE_KEY = 'kh_cookies';
  var banner = document.getElementById('cookieBanner');
  if (!banner) return;

  function dismiss(choice) {
    localStorage.setItem(STORAGE_KEY, choice);
    banner.classList.remove('visible');
    if (choice === 'all') {
      document.dispatchEvent(new CustomEvent('kh:consent:all'));
    }
  }

  if (!localStorage.getItem(STORAGE_KEY)) {
    setTimeout(function () {
      banner.classList.add('visible');
    }, 900);
  }

  var btnAccept    = document.getElementById('cookieBtnAccept');
  var btnEssential = document.getElementById('cookieBtnEssential');

  if (btnAccept)    btnAccept.addEventListener('click',    function () { dismiss('all'); });
  if (btnEssential) btnEssential.addEventListener('click', function () { dismiss('essential'); });
})();
