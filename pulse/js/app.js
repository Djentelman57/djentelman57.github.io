import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

import './libs.js'

alert("Hello");


// Simplebar
if (document.querySelector('.custom-scrollbar') !== null) {
  var customScrollbar = document.querySelectorAll('.custom-scrollbar');

  for (var i = 0; i < customScrollbar.length; i++) {
    new SimpleBar(customScrollbar[i], {
      autoHide: false,
      scrollbarMinSize: 10,
      scrollbarMaxSize: 35
    })
  }
}