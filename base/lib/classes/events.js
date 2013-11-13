/*! Base ~ Released under MIT license ~ Copyright (c) 2013 Teun Zengerink */
(function(){var a=[].slice;define(function(){var b;return b=function(){function b(){}return b.prototype._handlers={},b.prototype._events={},b.prototype._mapPubSub=function(){var b,c,d,e,f,g,h,i,j;if(d=arguments[0],f=arguments[1],b=3<=arguments.length?a.call(arguments,2):[],"[object Array]"===Object.prototype.toString.call(f)){for(i=[],g=0,h=f.length;h>g;g++)e=f[g],i.push(d.apply(this,[e,b]));return i}j=[];for(e in f)c=f[e],j.push(d.apply(this,[e,c,b]));return j},b.prototype._mapEvents=function(){var b,c,d,e,f,g,h,i,j,k;if(e=arguments[0],c=arguments[1],g=arguments[2],b=4<=arguments.length?a.call(arguments,3):[],"[object Array]"===Object.prototype.toString.call(g)){for(j=[],h=0,i=g.length;i>h;h++)f=g[h],j.push(e.apply(this,[c,f,b]));return j}k=[];for(f in g)d=g[f],k.push(e.apply(this,[c,f,d,b]));return k},b.prototype.bind=function(a,b,c){return"object"==typeof b&&this._mapEvents(this.bind,a,b),"undefined"==typeof this._handlers[a]&&(this._handlers[a]={}),"undefined"==typeof this._handlers[a][b]&&(this._handlers[a][b]=[]),this._handlers[a][b].push(c),a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c),this},b.prototype.fire=function(){var b,c,d,e,f,g,h;if(c=arguments[0],e=arguments[1],b=3<=arguments.length?a.call(arguments,2):[],"object"==typeof e&&this._mapEvents(this.fire,c,e),this._handlers[c]&&this._handlers[c][e])for(h=this._handlers[c][e],f=0,g=h.length;g>f;f++)d=h[f],d.apply(this,b);return this},b.prototype.unbind=function(a,b){var c,d,e,f;if("object"==typeof b&&this._mapEvents(this.unbind,a,b),this._handlers[a]&&this._handlers[a][b])for(f=this._handlers[a][b],d=0,e=f.length;e>d;d++)c=f[d],a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent(b,c),this._handlers[a][b]=[];return this},b.prototype.off=function(a){return"object"==typeof a&&this._mapPubSub(this.off,a),this._events[a]=[],this},b.prototype.on=function(a,b){return"object"==typeof a&&this._mapPubSub(this.on,a),"undefined"==typeof this._events[a]&&(this._events[a]=[]),this._events[a].push(b),this},b.prototype.trigger=function(){var b,c,d,e,f,g;if(d=arguments[0],b=2<=arguments.length?a.call(arguments,1):[],"object"==typeof d)this._mapPubSub(this.trigger,d,b);else for(g=this._events[d],e=0,f=g.length;f>e;e++)c=g[e],c.apply(this,b);return this},b}()})}).call(this);