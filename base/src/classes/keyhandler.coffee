###
  KeyHandler
  ----------

  Catch keypresses and execute all assigned event functions.

  Licensed under MIT license
  Copyright (c) 2013 Teun Zengerink
###


define ['./events'], (Events) -> class KeyHandler extends Events

  keys:
    8:'backspace', 9:'tab', 13:'enter', 16:'shift', 17:'ctrl', 18:'alt', 
    37:'left', 38:'up', 39:'right', 40:'down',
    # Numbers
    48:'0', 49:'1', 50:'2', 51:'3', 52:'4', 53:'5', 54:'6', 55:'7', 56:'8', 
    57:'9',
    # Alpha
    65:'a', 66:'b', 67:'c', 68:'d', 69:'e', 70:'f', 71:'g', 72:'h', 73:'i',
    74:'j', 75:'k', 76:'l', 77:'m', 78:'n', 79:'o', 80:'p', 81:'q', 82:'r',
    83:'s', 84:'t', 85:'u', 86:'v', 87:'w', 88:'x', 89:'y', 90:'z',
    # Function keys
    112:'f1', 113:'f2', 114:'f3', 115:'f4', 116:'f5', 117:'f6', 118:'f7',
    119:'f8', 120:'f9', 121:'f10', 122:'f11', 123:'f12',
    # Numpad
    96:'num0', 97:'num1', 98:'num2', 99:'num3', 100:'num4', 101:'num5',
    102:'num6', 103:'num7', 104:'num8', 105:'num9'
  handler: (event) -> @fire keys[event.keyCode] if not /input|textarea|select/i.test((event.target or event.srcElement).nodeName)
  off: (name) -> 
    @unbind document, 'keyup', @handler
    super name
  on: (name, fn) ->
    @bind document, 'keyup', @handler
    super name, fn

KeyHandler