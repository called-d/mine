(function(t){function e(e){for(var o,a,s=e[0],c=e[1],l=e[2],h=0,f=[];h<s.length;h++)a=s[h],i[a]&&f.push(i[a][0]),i[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},i={app:0},r=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/mine/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0763":function(t,e,n){},"37ac":function(t,e,n){},"50c2":function(t,e,n){"use strict";var o=n("0763"),i=n.n(o);i.a},"57ed":function(t,e,n){},"9a40":function(t,e,n){"use strict";var o=n("ac9f"),i=n.n(o);i.a},ac9f:function(t,e,n){},b8e5:function(t,e,n){"use strict";var o=n("d773"),i=n.n(o);i.a},cd49:function(t,e,n){"use strict";n.r(e);var o,i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header",[n("ConfigBar",{on:{change:t.onChangeBoardSize,start:t.initBoard}})],1),n("div",{staticClass:"board-wrapper"},[t.board?t._e():n("MineBoardPreview",{attrs:{width:t.width,height:t.height},on:{open:t.realizeGhostBoard}}),t.board?n("MineBoard",{ref:"mineBoard",attrs:{board:t.board,width:t.board.width,height:t.board.height},on:{over:t.onGameEnd}}):t._e(),t.explosions?n("ExplosionAnimation",{attrs:{explosions:t.explosions},on:{end:t.onAnimationEnd}}):t._e()],1),t.win?n("div",[t._v("クリア！")]):t._e(),n("footer",[n("ThanksFooter")],1)])},a=[],s=n("9ab4"),c=n("60a3"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mine-board",style:t.boardStyle,attrs:{"data-lose":t.lose?"lose":""}},t._l(t.width*t.height,function(e){return n("BoardCell",{key:e,attrs:{info:t.cellInfos[e-1]},on:{toggle:function(n){t.toggleState(e-1)},open:function(n){t.openCell(e-1)},openaround:function(n){t.openAround(e-1)},contextmenu:function(t){t.preventDefault()}}})}),1)},u=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cell",attrs:{"data-state":t.state},on:{click:function(e){return"button"in e||!t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])?"button"in e&&0!==e.button?null:t.onClick(e):null},contextmenu:function(e){e.preventDefault(),t.$emit("toggle")},dblclick:function(e){t.$emit("openaround")}}},["open"===t.state?n("div",{staticClass:"char"},[t.hasMine?n("span",[t._v("×")]):t.mineCount?n("span",[t._v(t._s(t.mineCount))]):t._e()]):n("div",{staticClass:"char close"},["flagged"===t.state?n("span",[t._v("F")]):t._e(),"?"===t.state?n("span",[t._v("?")]):t._e()])])},f=[];(function(t){t["CLOSE"]="close",t["FLAGGED"]="flagged",t["QUESTION_MARKED"]="?",t["OPEN"]="open",t["GHOST"]="ghost"})(o||(o={}));var p=function(){function t(t,e,n){this.hasMine=t,this.mineCount=e,this.state=o.CLOSE,this.hasMine=t,this.mineCount=e,this.state=n}return t}(),d=p,b=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s["b"](e,t),Object.defineProperty(e.prototype,"state",{get:function(){return this.info?this.info.state:o.GHOST},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hasMine",{get:function(){return!!this.info&&this.info.hasMine},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"mineCount",{get:function(){return this.info?this.info.mineCount:0},enumerable:!0,configurable:!0}),e.prototype.onClick=function(){switch(this.state){case o.OPEN:return;case o.FLAGGED:return;default:this.$emit("open")}},s["a"]([Object(c["b"])({default:null})],e.prototype,"info",void 0),e=s["a"]([Object(c["a"])({name:"BoardCell",components:{}})],e),e}(c["c"]),g=b,v=g,m=(n("9a40"),n("2877")),y=Object(m["a"])(v,h,f,!1,null,"71a5144e",null),w=y.exports,O=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.lose=!1,e.cellInfos=e.board.cellInfos,e}return s["b"](e,t),e.prototype.check=function(){this.board.lose?(this.$emit("over",!1,this.board.lose),this.lose=!0,this.cellInfos=this.board.openAllForGameOver()):this.board.win&&this.$emit("over",!0)},Object.defineProperty(e.prototype,"boardStyle",{get:function(){return"grid-template-columns: repeat("+this.width+", 1fr)"},enumerable:!0,configurable:!0}),e.prototype.toggleState=function(t){this.cellInfos=this.board.toggleState(t),this.check()},e.prototype.openCell=function(t){console.log(t),this.cellInfos=this.board.open(t),this.check()},e.prototype.openAround=function(t){this.board.shouldOpenAround(t)&&(this.cellInfos=this.board.openAround(t),this.check())},s["a"]([Object(c["b"])()],e.prototype,"width",void 0),s["a"]([Object(c["b"])()],e.prototype,"height",void 0),s["a"]([Object(c["b"])()],e.prototype,"board",void 0),e=s["a"]([Object(c["a"])({name:"MineBoard",components:{BoardCell:w}})],e),e}(c["c"]),x=O,_=x,C=(n("f5d3"),Object(m["a"])(_,l,u,!1,null,null,null)),E=C.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"config-bar"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.size,expression:"size"}],on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.size=e.target.multiple?n:n[0]},t.changeBoardSize]}},t._l(t.sizes,function(e){return n("option",{key:e.name,domProps:{value:e.size}},[t._v(t._s(e.name))])}),0),n("button",{on:{click:function(e){t.$emit("start",t.size)}}},[t._v("Start")])])},k=[],S=[{name:"6x6",size:{width:6,height:6}},{name:"8x12",size:{width:8,height:12}},{name:"Very Large",size:{width:64,height:64}}];function B(t){return Math.ceil(t.width*t.height/5)}var A=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.size=S[0].size,e}return s["b"](e,t),Object.defineProperty(e.prototype,"sizes",{get:function(){return S},enumerable:!0,configurable:!0}),e.prototype.mounted=function(){this.changeBoardSize()},e.prototype.changeBoardSize=function(){this.$emit("change",this.size)},e=s["a"]([Object(c["a"])({name:"ConfigBar",components:{}})],e),e}(c["c"]),M=A,P=M,$=(n("b8e5"),Object(m["a"])(P,j,k,!1,null,"53c6a94c",null)),z=$.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-container"},[n("a",{staticClass:"open-thanks",on:{click:function(e){t.$refs.thanks.showModal()}}},[t._v("すぺしゃるさんくす")]),n("dialog",{ref:"thanks"},[n("nav",[n("a",{staticClass:"close",on:{click:function(e){t.$refs.thanks.close()}}},[t._v("x")])]),t._m(0)])])},I=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("dl",[n("dt",[t._v("フォント")]),n("dd",[n("a",{attrs:{href:"http://www17.plala.or.jp/xxxxxxx/00ff/"}},[t._v("ゼロピクセルフリーフォント")])]),n("dt",[t._v("フレームワーク")]),n("dd",[t._v("Vue.js")])])}];class F extends i["default"]{}var L=F,N=(n("f02d"),Object(m["a"])(L,G,I,!1,null,"2e3765bd",null)),T=N.exports;function D(t){for(var e,n=t.length,o=n-1;o>0;o--){var i=Math.floor(Math.random()*(o+1));e=[t[i],t[o]],t[o]=e[0],t[i]=e[1]}}function H(t,e,n){var o=function(t,o){return t<0||t>=e||o<0||o>=n};return function(n,i){return o(n,i)?null:t[i*e+n]}}function R(t,e){var n=[];return t.forEach(function(t){return e.forEach(function(e){return n.push([t,e])})}),n}var K=function(){function t(t){this.opened=!1,this.neighbors8=R([-1,0,1],[-1,0,1]).filter(function(t){var e=t[0],n=t[1];return e||n}),this.width=t.width,this.height=t.height,this.cells=Array.from({length:this.width*this.height},function(){return new d(!1,0,o.CLOSE)})}return Object.defineProperty(t.prototype,"cellInfos",{get:function(){return this.cells},enumerable:!0,configurable:!0}),t.prototype.open=function(t){return this.opened||(this.opened=!0,this.cells=this.generate(t)),this.openCells.apply(this,[!0].concat(this.coordFrom(t))),this.cellInfos},t.prototype.shouldOpenAround=function(t){var e=this.coordFrom(t),n=e[0],i=e[1],r=H(this.cellInfos,this.width,this.height),a=this.neighbors8.map(function(t){var e=t[0],o=t[1];return r(n+e,i+o)}),s=a.filter(function(t){return t&&t.state===o.FLAGGED}).length;return r(n,i).mineCount===s},t.prototype.openAllForGameOver=function(){return this.cells.forEach(function(t){t.state=o.OPEN}),this.cellInfos},t.prototype.openCells=function(t,e,n){var i=this,r=H(this.cells,this.width,this.height)(e,n),a=this.neighbors8.map(function(t){var o=t[0],i=t[1];return[e+o,n+i]});null!==r&&r.state!==o.OPEN&&(!t&&r.hasMine||(console.log("openCells: "+e+" "+n),r.state=o.OPEN,r.mineCount||a.forEach(function(t){return i.openCells.apply(i,[!1].concat(t))})))},t.prototype.openAround=function(t){var e=this,n=this.coordFrom(t),i=n[0],r=n[1];this.openCells(!0,i,r);var a=H(this.cellInfos,this.width,this.height),s=this.neighbors8.map(function(t){var e=t[0],n=t[1];return[i+e,r+n]});return s.filter(function(t){var e=t[0],n=t[1],i=a(e,n);return i&&i.state!==o.FLAGGED}).forEach(function(t){var n=t[0],o=t[1];return e.openCells(!0,n,o)}),this.cellInfos},t.prototype.generate=function(t){var e=this,n=this.width*this.height,o=B({width:this.width,height:this.height}),i=new Array(n-1).fill(!0,0,o).fill(!1,o);D(i),i.splice(t,0,!1);var r=H(i,this.width,this.height);return this.cells.map(function(t,n){var o=e.coordFrom(n),i=o[0],a=o[1],s=e.neighbors8.filter(function(t){var e=t[0],n=t[1];return r(i+e,a+n)}).length;return new d(r(i,a),s,t.state)})},t.prototype.toggleState=function(t){var e=this.cells[t];switch(e.state){case o.CLOSE:e.state=o.FLAGGED;break;case o.FLAGGED:e.state=o.QUESTION_MARKED;break;case o.QUESTION_MARKED:e.state=o.CLOSE;break;default:break}return this.cellInfos},Object.defineProperty(t.prototype,"win",{get:function(){return this.cells.every(function(t){return t.hasMine?t.state===o.FLAGGED:t.state===o.OPEN})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"lose",{get:function(){var t=this.cells.map(function(t,e){return t.hasMine&&t.state===o.OPEN?e:-1}).filter(function(t){return t>=0});return t.length>0&&t},enumerable:!0,configurable:!0}),t.prototype.coordFrom=function(t){return[t%this.width,Math.floor(t/this.width)]},t}(),Q=K,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mine-board preview",style:t.boardStyle},t._l(t.width*t.height,function(e){return n("BoardCell",{key:e,on:{open:function(n){t.$emit("open",e-1)}}})}),1)},J=[],V=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s["b"](e,t),Object.defineProperty(e.prototype,"boardStyle",{get:function(){return"grid-template-columns: repeat("+this.width+", 1fr)"},enumerable:!0,configurable:!0}),s["a"]([Object(c["b"])()],e.prototype,"width",void 0),s["a"]([Object(c["b"])()],e.prototype,"height",void 0),e=s["a"]([Object(c["a"])({name:"MineBoardPreview",components:{BoardCell:w}})],e),e}(c["c"]),W=V,q=W,X=(n("50c2"),Object(m["a"])(q,U,J,!1,null,"42a6f3dc",null)),Y=X.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[n("canvas",{ref:"canvas",attrs:{width:t.body.clientWidth,height:t.body.clientHeight}})])},tt=[],et=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.fps=30,e.animationSeconds=1.5,e.tick=0,e}return s["b"](e,t),Object.defineProperty(e.prototype,"body",{get:function(){return document.body},enumerable:!0,configurable:!0}),e.prototype.mounted=function(){var t=this,e=this.$refs.canvas;this.ctx=e.getContext("2d"),console.log(this.explosions),this.drawTimerHandler=setInterval(function(){return t.draw()},1e3/this.fps)},e.prototype.draw=function(){var t=this;if(this.tick++>this.fps*this.animationSeconds)return clearInterval(this.drawTimerHandler),void this.$emit("end");var e=Math.exp(this.tick/1.5);this.ctx.clearRect(0,0,this.body.clientWidth,this.body.clientHeight),this.ctx.fillStyle="rgba(255, 0, 0, "+Math.exp(-this.tick/this.fps),this.explosions.forEach(function(n){var o=n[0],i=n[1];t.ctx.beginPath(),t.ctx.ellipse(o,i,e,e,0,0,2*Math.PI),t.ctx.fill()})},s["a"]([Object(c["b"])()],e.prototype,"explosions",void 0),e=s["a"]([Object(c["a"])({name:"ExplosionAnimation",components:{}})],e),e}(c["c"]),nt=et,ot=nt,it=(n("e4b6"),Object(m["a"])(ot,Z,tt,!1,null,"45a23aa4",null)),rt=it.exports,at=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.board=null,e.width=0,e.height=0,e.win=!1,e.explosions=null,e}return s["b"](e,t),e.prototype.onChangeBoardSize=function(t){console.log("onChangeBoardSize",t),this.width=t.width,this.height=t.height},e.prototype.initBoard=function(t){var e=this;console.log("initBoard(); size: ",t),this.win=!1,this.board=null,this.$nextTick(function(){e.board=new Q(t)})},e.prototype.realizeGhostBoard=function(t){console.log("realizeGhostBoard"),this.initBoard({width:this.width,height:this.height})},e.prototype.onGameEnd=function(t,e){console.log(t),t?this.win=!0:this.explode(e)},e.prototype.explode=function(t){console.log("explode",t);var e=this.$refs.mineBoard,n={x:window.pageXOffset,y:window.pageYOffset};this.explosions=t.map(function(t){return e.$el.children.item(t)}).map(function(t){var e=t.getBoundingClientRect();return[n.x+e.left+e.width/2,n.y+e.top+e.height/2]})},e.prototype.onAnimationEnd=function(){this.explosions=null},e=s["a"]([Object(c["a"])({components:{ExplosionAnimation:rt,MineBoard:E,MineBoardPreview:Y,ConfigBar:z,ThanksFooter:T}})],e),e}(c["c"]),st=at,ct=st,lt=(n("ff82"),Object(m["a"])(ct,r,a,!1,null,"cc23d976",null)),ut=lt.exports,ht=n("9483");Object(ht["a"])("/mine/service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(ut)}}).$mount("#app")},d6fd:function(t,e,n){},d773:function(t,e,n){},e194:function(t,e,n){},e4b6:function(t,e,n){"use strict";var o=n("57ed"),i=n.n(o);i.a},f02d:function(t,e,n){"use strict";var o=n("37ac"),i=n.n(o);i.a},f5d3:function(t,e,n){"use strict";var o=n("e194"),i=n.n(o);i.a},ff82:function(t,e,n){"use strict";var o=n("d6fd"),i=n.n(o);i.a}});
//# sourceMappingURL=app.375e3e6f.js.map