import React from 'react'

export default function prueba() {


    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        // Obtener la información de la pestaña activa
        var currentTab = tabs[0];
      
        // Configurar los parámetros para la consulta de la cookie
        var cookieParams = {
          url: currentTab.url,
          name: 'miCookie'
        };
      
        // Obtener la cookie
        chrome.cookies.get(cookieParams, function(cookie) {
          if (cookie) {
            console.log('Valor de la cookie "miCookie":', cookie.value);
          } else {
            console.log('La cookie "miCookie" no se encontró en este dominio.');
          }
        });
      });
  return (
    <div>holaa :)</div>
  )
}
