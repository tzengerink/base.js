###
  Events
  ------

  Your class can extend this simple `Events` class to support events by
  itself. The events class also accepts an object containing a map of
  'name/function'-pairs.

  Licensed under MIT license
  Copyright (c) 2013 Teun Zengerink
###

define -> class Events

  __events: {}
  __map: (map) -> @on(name, fn) for fn, name in map

  # TODO: Add bind/unbind/fire functionality

  # Offer simple PubSub functionality.
  off: (name) -> @__events[name] = []
  on: (name, fn) ->
    @__map(name) if typeof name is 'object'
    @__events[name] = [] if typeof @__events[name] is 'undefined'
    @__events[name].push fn
  trigger: (name, args...) -> fn.apply(@, args) for fn in @__events[name]

Events
