if (new MobileDetect(window.navigator.userAgent).mobile()) {
  document.head.innerHTML += `
    <link rel="stylesheet" href="mobile.css">
  `
}
