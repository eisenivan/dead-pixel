;(function() {
    'use strict'

    var pxl = document.createElement("img")
    pxl.style.width = '1px'
    pxl.style.height = '1px'
    pxl.style.background = 'black'
    pxl.style.position = 'fixed'
    pxl.style.left = '74.3%'
    pxl.style.top = '17.3%'
    pxl.style.zIndex = '999999999'
    pxl.src = 'https://deadpixel-11ef1.firebaseapp.com/pixel.png'

    document.body.appendChild(pxl)
})()
