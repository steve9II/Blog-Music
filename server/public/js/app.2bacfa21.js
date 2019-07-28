(function(t){function n(n){for(var r,i,u=n[0],a=n[1],s=n[2],p=0,f=[];p<u.length;p++)i=u[p],o[i]&&f.push(o[i][0]),o[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);l&&l(n);while(f.length)f.shift()();return c.push.apply(c,s||[]),e()}function e(){for(var t,n=0;n<c.length;n++){for(var e=c[n],r=!0,u=1;u<e.length;u++){var a=e[u];0!==o[a]&&(r=!1)}r&&(c.splice(n--,1),t=i(i.s=e[0]))}return t}var r={},o={app:0},c=[];function i(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=r,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)i.d(e,r,function(n){return t[n]}.bind(null,r));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=n,u=u.slice();for(var s=0;s<u.length;s++)n(u[s]);var l=a;c.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var r=e("64a9"),o=e.n(r);o.a},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var r=e("2b0e"),o=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:e("cf05")}}),r("music",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},c=[],i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"music"},[e("div",{ref:"addDom",staticClass:"add"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.musicName,expression:"musicName"}],attrs:{type:"text",id:"music-name"},domProps:{value:t.musicName},on:{input:function(n){n.target.composing||(t.musicName=n.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.musicUrl,expression:"musicUrl"}],attrs:{type:"text",id:"music-url"},domProps:{value:t.musicUrl},on:{input:function(n){n.target.composing||(t.musicUrl=n.target.value)}}}),e("button",{on:{click:function(n){return t.addSong({name:t.musicName,songUrl:t.musicUrl})}}},[t._v("add")]),e("button",{on:{click:t.getSong}},[t._v("get")])]),t._v("\n  "+t._s(t.songList)+"\n  "),e("div",{staticClass:"player"},[t.loading?e("div",{staticClass:"loading"},[t._v("💗")]):t._e(),e("audio",{ref:t.currentSong.name,attrs:{src:t.currentSong.songUrl,controls:"controls"}}),e("button",{on:{click:function(n){return t.playSong(t.$refs[t.currentSong.name])}}},[t._v("播放")]),e("audio",{attrs:{src:"../assets/雨宮天 - 奏 (かなで).mp3",controls:"controls"}}),e("button",{staticClass:"next",on:{click:function(){var n=t.songList.indexOf(t.currentSong)+1;t.currentSong=t.songList[n]}}},[t._v("NEXT")])])])},u=[],a=(e("8e6e"),e("ac6a"),e("456d"),e("bd86")),s=e("d225"),l=e("b0b4"),p=e("b157"),f=e.n(p);function d(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,r)}return e}function g(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?d(e,!0).forEach(function(n){Object(a["a"])(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):d(e).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}var m="api/music/",v=function(){function t(){Object(s["a"])(this,t)}return Object(l["a"])(t,null,[{key:"getMusic",value:function(){return f.a.get(m,{"Content-Type":"application/json"}).then(function(t){return t.data.map(function(t){return g({},t)})})}},{key:"addMusic",value:function(t){return f.a.post(m,t,{"Content-Type":"application/json"})}},{key:"delMusic",value:function(t){return f.a.delete("".concat(m).concat(t))}}]),t}(),b=v,y={name:"music",data:function(){return{songList:[],currentSong:{},musicName:"",musicUrl:"",loading:!1}},methods:{playSong:function(t){console.log(t),t.play()},getSong:function(){var t=this;return this.loading=!0,b.getMusic().then(function(n){t.songList=n,t.loading=!1,t.currentSong=t.songList[0]})},addSong:function(t){var n=this;return this.loading=!0,b.addMusic(t).then(function(){return n.getSong()})},delSong:function(t){var n=this;return this.loading=!0,b.delMusic(t).then(function(){return n.getSong()})}}},h=y,O=(e("9d7c"),e("2877")),j=Object(O["a"])(h,i,u,!1,null,"6ce9ac0c",null),S=j.exports,w={name:"app",components:{music:S}},_=w,P=(e("034f"),Object(O["a"])(_,o,c,!1,null,null,null)),x=P.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(x)}}).$mount("#app")},"64a9":function(t,n,e){},"9d7c":function(t,n,e){"use strict";var r=e("a17c"),o=e.n(r);o.a},a17c:function(t,n,e){},cf05:function(t,n,e){t.exports=e.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.2bacfa21.js.map