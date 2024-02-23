const btn = document.querySelector('#arianna');

btn.addEventListener('click', () => {
    console.log('Arianna, te amo');
})



/* chrome.runtime.onInstalled.addListener(function () {
    // Pide permisos al usuario al instalar la extensión
    chrome.permissions.request({
      permissions: ["clipboardRead", "clipboardWrite"],
      origins: [chrome.runtime.getURL('/')]
    }, function (granted) {
      if (granted) {
        console.log('Permisos de portapapeles concedidos.');
      } else {
        console.log('Permisos de portapapeles denegados.');
      }
    });
  }); */