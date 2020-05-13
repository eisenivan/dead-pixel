# dead-pixel

The most minimalistic analytics system I could imagine. Stores only page loads, no personal information. Tracks by loading a simulated dead pixel into your site. Check your stats at https://deadpixel-11ef1.firebaseapp.com/<your-url-here>/

## Installation

At the most basic level you can just load the tracking pixel and style it.

```html
<img src="https://deadpixel-11ef1.firebaseapp.com/pixel.png" />
```

I tend to use this snippet at the bottom of the document.

```javascript
<script>
  ;(function() {
    'use strict'

    var pxl = document.createElement("img")
    pxl.style.width = '1px'
    pxl.style.height = '1px'
    pxl.style.background = 'black'
    pxl.style.position = 'fixed'
    pxl.style.left = '99.7%'
    pxl.style.top = '0.3%'
    pxl.style.zIndex = '999999999'
    pxl.src = 'https://deadpixel-11ef1.firebaseapp.com/pixel.png'

    document.body.appendChild(pxl)
   })()
</script>
```

The world is your oyster.
