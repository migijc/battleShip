(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>A});var r=t(537),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"body{\n    background-color: rgb(4, 47, 82);\n    margin: 0;\n    padding:0;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    align-items: center;\n    font-family: 'Roboto', sans-serif;\n\n}\n\nh2{\n    margin: 0;\n    padding: 0;\n}\n.footer{\n    color: rgba(158, 154, 154,.9);\n    \n}\n\n#header{\n    height: 15%;\n    width: 100%;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n}\n\n#gameBody{\n    height: 80%;\n    width: 100%;\n    box-sizing: border-box;\n    display: flex;\n}\n\n.playerSide{\n    height: 100%;\n    width: 50%;\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.computerSide{\n    height: 100%;\n    width: 50%;\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#footer{\n    border: 2px solid rgba(129, 129, 129, 0.7);\n    height: 5%;\n    width: 100%;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0, 0, 0, .6);\n}\n\n#playerBoard,\n#computerBoard{\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    border: 1px solid white;\n    aspect-ratio: 1 / 1;\n    width: 60%;\n    \n\n}\n\n.gridCell{\n    border:2px solid rgba(255, 255, 255, .4);\n    background-color:rgba(0, 0, 0, .6);\n}\n\n#computerBoard > .gridCell:hover{\n    background-color:rgba(92, 109, 122, 0.9);\n}\n\n.pointHit{\n    background-color:rgba(255, 30, 0, 0.9);}\n\n.ship{\n  height: 200px;\n  width: 50px;\n  position: absolute;\n  top: 420px;\n  left: 368px;\n}\n\n.ship2{\n    height: 130px;\n    width: 50px;\n    position: absolute;\n    top: 664px;\n    left: 197px;\n  }\n  \n  #background{\n      position: fixed;\n      right: 0;\n      bottom: 0;\n      min-width: 100vw;\n      min-height: 100vh;\n      z-index: -1;\n  }\n\n  #bsLogo{\n      margin-top: 20px;\n  }\n\n.shipDisplayed{\n    max-height: 100%;\n    max-width: 30%;\n}\n  .playerShips{\n      border: 6px solid rgba(255, 255, 255, 0.3);\n      height: 8rem;\n      width: 8rem;\n      margin-top: 15rem;\n      margin-left: -2rem;\n      margin-right: -2rem;\n      position: relative;\n      padding: .5rem;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap:1.2rem;\n      background-color: rgba(0, 0, 0, 0.4);\n  }\n\n  *{\n      \n  }\n\n  .currentDrag{\n      position: absolute;\n      /* height: 13rem; */\n  }\n  .currentDrag.onGrid{\n      height: 4rem;\n      position: absolute;\n  }\n\n  .humanShip0.onGrid{\n    position: absolute;\n    height: 15rem;\n      margin-left:.5rem;\n      margin-top: -12.5rem;\n  }\n\n  .humanShip1.onGrid{\n    position: absolute;\n    height: 12rem;\n      margin-left:.5rem;\n      margin-top: -9.5rem;\n  }\n\n  .humanShip2.onGrid{\n    position: absolute;\n    height: 8.6rem;\n      margin-left:.5rem;\n      margin-top: -6rem;\n  }\n\n  .humanShip3.onGrid{\n    position: absolute;\n    height: 5.6rem;\n      margin-left:.5rem;\n      margin-top: -3rem;\n  }\n\n  \n  .humanShip4.onGrid{\n    position: absolute;\n    height: 2.4rem;\n      margin-left:.2rem;\n      margin-top: .3rem;\n  }\n\n  .spotAvailable{\n      background-color: rgba(43, 186, 230, 0.2);\n  }\n\n  .potentialSpot{\n      /* border: 1px solid rgba(13, 255, 85, 0.2); */\n      background-color: rgba(24, 185, 86, 0.616);;\n      /* opacity: .4; */\n  }\n  \n  .spotTaken{\n      background-color: rgba(44, 41, 41, .4);\n  }\n  \n  .orientationButton{\n      position: absolute;\n      top: -5rem;\n      height: 2.5rem;\n      width: 6rem;\n      border: 2px solid rgba(255, 255, 0, .8);\n      border-radius: 90px;\n      background-color: rgba(0, 0, 0, 0.4);\n      color: white;\n  }\n\n  .orientationButton:active{\n    background-color: rgba(97, 88, 88, 0.8);\n  }\n\n  .rotated{\n      transform: rotate(90deg);\n  }\n\n  .humanShip0.onGrid.rotated{\n\n      margin-left:7.5rem;\n      margin-top: -6rem;\n  }\n\n  .humanShip1.onGrid.rotated{\n\n    margin-left:5.8rem;\n      margin-top: -4.5rem;\n  }\n\n  .humanShip2.onGrid.rotated{\n    margin-left:4.1rem;\n      margin-top: -2.7rem;\n  }\n\n  .humanShip3.onGrid.rotated{\n    margin-left:2.1rem;\n    margin-top: -1.3rem;\n  }\n\n\n  \n\n\n\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,gCAAgC;IAChC,SAAS;IACT,SAAS;IACT,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,iCAAiC;;AAErC;;AAEA;IACI,SAAS;IACT,UAAU;AACd;AACA;IACI,6BAA6B;;AAEjC;;AAEA;IACI,WAAW;IACX,WAAW;IACX,sBAAsB;IACtB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,WAAW;IACX,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,0CAA0C;IAC1C,UAAU;IACV,WAAW;IACX,sBAAsB;IACtB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,mCAAmC;AACvC;;AAEA;;IAEI,aAAa;IACb,sCAAsC;IACtC,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;;;AAGd;;AAEA;IACI,wCAAwC;IACxC,kCAAkC;AACtC;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,sCAAsC,CAAC;;AAE3C;EACE,aAAa;EACb,WAAW;EACX,kBAAkB;EAClB,UAAU;EACV,WAAW;AACb;;AAEA;IACI,aAAa;IACb,WAAW;IACX,kBAAkB;IAClB,UAAU;IACV,WAAW;EACb;;EAEA;MACI,eAAe;MACf,QAAQ;MACR,SAAS;MACT,gBAAgB;MAChB,iBAAiB;MACjB,WAAW;EACf;;EAEA;MACI,gBAAgB;EACpB;;AAEF;IACI,gBAAgB;IAChB,cAAc;AAClB;EACE;MACI,0CAA0C;MAC1C,YAAY;MACZ,WAAW;MACX,iBAAiB;MACjB,kBAAkB;MAClB,mBAAmB;MACnB,kBAAkB;MAClB,cAAc;MACd,aAAa;MACb,mBAAmB;MACnB,uBAAuB;MACvB,UAAU;MACV,oCAAoC;EACxC;;EAEA;;EAEA;;EAEA;MACI,kBAAkB;MAClB,mBAAmB;EACvB;EACA;MACI,YAAY;MACZ,kBAAkB;EACtB;;EAEA;IACE,kBAAkB;IAClB,aAAa;MACX,iBAAiB;MACjB,oBAAoB;EACxB;;EAEA;IACE,kBAAkB;IAClB,aAAa;MACX,iBAAiB;MACjB,mBAAmB;EACvB;;EAEA;IACE,kBAAkB;IAClB,cAAc;MACZ,iBAAiB;MACjB,iBAAiB;EACrB;;EAEA;IACE,kBAAkB;IAClB,cAAc;MACZ,iBAAiB;MACjB,iBAAiB;EACrB;;;EAGA;IACE,kBAAkB;IAClB,cAAc;MACZ,iBAAiB;MACjB,iBAAiB;EACrB;;EAEA;MACI,yCAAyC;EAC7C;;EAEA;MACI,8CAA8C;MAC9C,0CAA0C;MAC1C,iBAAiB;EACrB;;EAEA;MACI,sCAAsC;EAC1C;;EAEA;MACI,kBAAkB;MAClB,UAAU;MACV,cAAc;MACd,WAAW;MACX,uCAAuC;MACvC,mBAAmB;MACnB,oCAAoC;MACpC,YAAY;EAChB;;EAEA;IACE,uCAAuC;EACzC;;EAEA;MACI,wBAAwB;EAC5B;;EAEA;;MAEI,kBAAkB;MAClB,iBAAiB;EACrB;;EAEA;;IAEE,kBAAkB;MAChB,mBAAmB;EACvB;;EAEA;IACE,kBAAkB;MAChB,mBAAmB;EACvB;;EAEA;IACE,kBAAkB;IAClB,mBAAmB;EACrB",sourcesContent:["body{\n    background-color: rgb(4, 47, 82);\n    margin: 0;\n    padding:0;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    align-items: center;\n    font-family: 'Roboto', sans-serif;\n\n}\n\nh2{\n    margin: 0;\n    padding: 0;\n}\n.footer{\n    color: rgba(158, 154, 154,.9);\n    \n}\n\n#header{\n    height: 15%;\n    width: 100%;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n}\n\n#gameBody{\n    height: 80%;\n    width: 100%;\n    box-sizing: border-box;\n    display: flex;\n}\n\n.playerSide{\n    height: 100%;\n    width: 50%;\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.computerSide{\n    height: 100%;\n    width: 50%;\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#footer{\n    border: 2px solid rgba(129, 129, 129, 0.7);\n    height: 5%;\n    width: 100%;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0, 0, 0, .6);\n}\n\n#playerBoard,\n#computerBoard{\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    border: 1px solid white;\n    aspect-ratio: 1 / 1;\n    width: 60%;\n    \n\n}\n\n.gridCell{\n    border:2px solid rgba(255, 255, 255, .4);\n    background-color:rgba(0, 0, 0, .6);\n}\n\n#computerBoard > .gridCell:hover{\n    background-color:rgba(92, 109, 122, 0.9);\n}\n\n.pointHit{\n    background-color:rgba(255, 30, 0, 0.9);}\n\n.ship{\n  height: 200px;\n  width: 50px;\n  position: absolute;\n  top: 420px;\n  left: 368px;\n}\n\n.ship2{\n    height: 130px;\n    width: 50px;\n    position: absolute;\n    top: 664px;\n    left: 197px;\n  }\n  \n  #background{\n      position: fixed;\n      right: 0;\n      bottom: 0;\n      min-width: 100vw;\n      min-height: 100vh;\n      z-index: -1;\n  }\n\n  #bsLogo{\n      margin-top: 20px;\n  }\n\n.shipDisplayed{\n    max-height: 100%;\n    max-width: 30%;\n}\n  .playerShips{\n      border: 6px solid rgba(255, 255, 255, 0.3);\n      height: 8rem;\n      width: 8rem;\n      margin-top: 15rem;\n      margin-left: -2rem;\n      margin-right: -2rem;\n      position: relative;\n      padding: .5rem;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap:1.2rem;\n      background-color: rgba(0, 0, 0, 0.4);\n  }\n\n  *{\n      \n  }\n\n  .currentDrag{\n      position: absolute;\n      /* height: 13rem; */\n  }\n  .currentDrag.onGrid{\n      height: 4rem;\n      position: absolute;\n  }\n\n  .humanShip0.onGrid{\n    position: absolute;\n    height: 15rem;\n      margin-left:.5rem;\n      margin-top: -12.5rem;\n  }\n\n  .humanShip1.onGrid{\n    position: absolute;\n    height: 12rem;\n      margin-left:.5rem;\n      margin-top: -9.5rem;\n  }\n\n  .humanShip2.onGrid{\n    position: absolute;\n    height: 8.6rem;\n      margin-left:.5rem;\n      margin-top: -6rem;\n  }\n\n  .humanShip3.onGrid{\n    position: absolute;\n    height: 5.6rem;\n      margin-left:.5rem;\n      margin-top: -3rem;\n  }\n\n  \n  .humanShip4.onGrid{\n    position: absolute;\n    height: 2.4rem;\n      margin-left:.2rem;\n      margin-top: .3rem;\n  }\n\n  .spotAvailable{\n      background-color: rgba(43, 186, 230, 0.2);\n  }\n\n  .potentialSpot{\n      /* border: 1px solid rgba(13, 255, 85, 0.2); */\n      background-color: rgba(24, 185, 86, 0.616);;\n      /* opacity: .4; */\n  }\n  \n  .spotTaken{\n      background-color: rgba(44, 41, 41, .4);\n  }\n  \n  .orientationButton{\n      position: absolute;\n      top: -5rem;\n      height: 2.5rem;\n      width: 6rem;\n      border: 2px solid rgba(255, 255, 0, .8);\n      border-radius: 90px;\n      background-color: rgba(0, 0, 0, 0.4);\n      color: white;\n  }\n\n  .orientationButton:active{\n    background-color: rgba(97, 88, 88, 0.8);\n  }\n\n  .rotated{\n      transform: rotate(90deg);\n  }\n\n  .humanShip0.onGrid.rotated{\n\n      margin-left:7.5rem;\n      margin-top: -6rem;\n  }\n\n  .humanShip1.onGrid.rotated{\n\n    margin-left:5.8rem;\n      margin-top: -4.5rem;\n  }\n\n  .humanShip2.onGrid.rotated{\n    margin-left:4.1rem;\n      margin-top: -2.7rem;\n  }\n\n  .humanShip3.onGrid.rotated{\n    margin-left:2.1rem;\n    margin-top: -1.3rem;\n  }\n\n\n  \n\n\n\n"],sourceRoot:""}]);const A=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var A=0;A<this.length;A++){var l=this[A][0];null!=l&&(a[l]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */"),a=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(a).concat([i]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],A=0;A<n.length;A++){var l=n[A],s=r.base?l[0]+r.base:l[0],d=i[s]||0,c="".concat(s," ").concat(d);i[s]=d+1;var p=t(c),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var h=o(u,r);r.byIndex=A,e.splice(A,0,{identifier:c,updater:h,references:1})}a.push(c)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var A=t(i[a]);e[A].references--}for(var l=r(n,o),s=0;s<i.length;s++){var d=t(i[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=l}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),A=t(565),l=t.n(A),s=t(216),d=t.n(s),c=t(589),p=t.n(c),u=t(426),h={};h.styleTagTransform=p(),h.setAttributes=l(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),e()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;const m=t.p+"c41e15ea54ab86402a49.png",g=t.p+"c9c23d098c4df84090af.png",C=t.p+"53ee74a2ebbc94f66850.png",b=t.p+"084f5d1e9b0bbdde0675.png",B=t.p+"8d24bd40c337f417b443.png";let f=document.createElement("button");f.classList.add("orientationButton"),f.textContent="Rotate";let y=document.querySelector(".playerShips"),E=(document.querySelector("#gameBody"),document.body.querySelector(".computerSide"),(n,e)=>{if(e=e||5,(n=n||0)==w.length)return y.style.visibility="hidden",z();{let t=w[n][0];y=document.querySelector(".playerShips"),t.classList.add(`humanShip${n}`,"shipDisplayed","toBePlaced"),t.setAttribute("draggable","true"),t.setAttribute("data-length",`${e}`),t.style.cursor="move",y.append(t,f);let r=document.querySelectorAll("#playerBoard > .gridCell");!function(n){document.querySelectorAll("#playerBoard > .gridCell");let e=new Promise((e=>{let t=U[0].getAllOpenSpots();n.addEventListener("dragstart",(r=>{var o=function(n,e){let t=document.querySelectorAll("#playerBoard > .gridCell"),r=[];return Array.from(e.classList).includes("rotated")?(Array.from(t).forEach((e=>{+e.dataset.coordinates[0]+n<=10&&r.push(e)})),console.log(r),r):(Array.from(t).forEach((e=>{+e.dataset.coordinates[2]+n<=10&&r.push(e)})),r)}(+n.dataset.length,n);r.target.classList.add("currentDrag"),t.forEach((n=>{document.querySelector(`[data-coordinates = "${n.toString()}"]`).classList.add("spotAvailable")})),U[0].getAllPlayerShips().forEach((n=>{document.querySelector(`[data-coordinates = "${n.toString()}"]`).classList.add("spotTaken")})),e(o)}))}));console.log(e),e.then((e=>{e.forEach((e=>{e.addEventListener("dragover",(e=>{e.preventDefault(),n.classList.add("onGrid"),e.target.appendChild(document.querySelector(".currentDrag")),document.querySelector(".currentDrag").style.visibility="hidden"})),e.addEventListener("dragenter",(n=>{Array.from(n.target.classList).includes("gridCell")&&n.target.classList.add("potentialSpot")})),e.addEventListener("dragleave",(n=>{n.target.classList.remove("potentialSpot")}))}))}))}(t),new Promise((n=>{r.forEach((e=>{e.addEventListener("dragend",(()=>{t.style.visibility="visible",n(e)}))}))})).then((r=>{let o=U[1].board.allAvailableSpots;y.removeChild(f),o.forEach((n=>{let e=document.querySelector(`[data-coordinates = "${n.toString()}"]`);e.classList.remove("spotAvailable"),e.classList.remove("spotTaken")})),r.classList.remove("potentialSpot"),t.classList.remove("currentDrag","toBePlaced"),t.setAttribute("draggable","false");let i=[+r.dataset.coordinates[0],+r.dataset.coordinates[2]];return Array.from(t.classList).includes("rotated")?U[0].board.placeShip(e,i,"Horizontal"):U[0].board.placeShip(e,i,"Vertical"),E(n+1,e-1)}))}});f.addEventListener("click",(()=>{document.querySelector(".toBePlaced").classList.toggle("rotated")}));let v=new Image;v.src=m;let S=new Image;S.src=g;let I=new Image;I.src=C;let x=new Image;x.src=b;let k=new Image;k.src=B;let w=[[v],[S],[I],[x],[k]];class M{constructor(n){this.length=n,this.positionsHit=[],this.isDestroyed=!1}hit=n=>{this.positionsHit.push(n),console.log(n),(n=>{let e;e="Human"==G.name?Array.from(document.querySelectorAll("#computerBoard > .gridCell")):Array.from(document.querySelectorAll("#playerBoard > .gridCell")),e=e.filter((e=>{if(e.dataset.coordinates==n.toString())return e.style.backgroundColor="#29be6085",e}))})(this.positionsHit[this.positionsHit.length-1])};isSunk(){return this.positionsHit.length==this.length&&(this.isDestroyed=!0)}}class L{constructor(){this.ships=[],this.shipCoordinates=[],this.missedShots=[],this.board=[[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9]],this.allAvailableSpots=[]}placeShip(n,e,t){let r=new M(n),o=[],i=e[0],a=e[1];if(o.push(e),"Horizontal"==t){let n=r.length-1;for(let e=i+1;n>0;e++){let t=[e,a];o.push(t),n--}}else if("Vertical"==t){let n=r.length-1;for(let e=a+1;n>0;e++){let t=[i,e];o.push(t),n--}}this.shipCoordinates.push(o),this.ships.push(r)}receiveAttack(n){let e=n[0],t=n[1],r=this.shipCoordinates,o=null;return r.forEach((n=>{n.forEach((i=>{i[0]!=e||i[1]!=t||(o=r.indexOf(n))}))})),null==o?(this.missedShots.push(n),void(n=>{let e;e="Human"==G.name?Array.from(document.querySelectorAll("#computerBoard > .gridCell")):Array.from(document.querySelectorAll("#playerBoard > .gridCell")),e=e.filter((e=>{if(e.dataset.coordinates==n.toString())return e.style.backgroundColor="#be3c2985",e}))})(this.missedShots[this.missedShots.length-1])):(this.ships[o].hit(n),void this.ships[o].isSunk())}allShipsSunk(){let n=this.ships;return n.filter((n=>{if(n.isDestroyed)return n})).length==n.length}getAllPositions=function(){let n,e=this.board[0],t=this.board[1].reverse();e[0],t[t.length-1],t.forEach((t=>{for(let r=0;r<10;r++)n=[e[r],t],this.allAvailableSpots.push(n)}))}}let j={name:"Human",board:new L,attack:n=>{W.board.receiveAttack(n),G=q[1]},getAllPlayerShips(){let n=[];return document.querySelectorAll("#playerBoard > .gridCell").forEach((e=>{q[0].board.shipCoordinates.forEach((t=>{t.forEach((t=>{e.dataset.coordinates==t.toString()&&n.push(t)}))}))})),n},getAllOpenSpots(){let n=j.getAllPlayerShips();for(let e=0;e<n.length;e++)j.board.allAvailableSpots=j.board.allAvailableSpots.filter((t=>{if(t.toString()!==n[e].toString())return t}));return j.board.allAvailableSpots}},W={name:"Computer",board:new L,attack:()=>{let n=Math.floor(Math.random()*W.board.allAvailableSpots.length),e=W.board.allAvailableSpots[n];j.board.receiveAttack(e),W.removeFromAvailableShots(e),G=q[0]},removeFromAvailableShots(n){W.board.allAvailableSpots=W.board.allAvailableSpots.filter((e=>{if(e.toString()!==n.toString())return e}))}},q=[j,W],G=q[0];q.forEach((n=>{n.board.getAllPositions()}));const U=q;document.body.querySelector("#gameBody"),document.body.querySelector(".computerSide"),U[1].board.placeShip(5,[2,1],"Vertical"),U[1].board.placeShip(4,[2,6],"Vertical"),U[1].board.placeShip(3,[4,4],"Horizontal"),U[1].board.placeShip(2,[8,7],"Horizontal"),U[1].board.placeShip(1,[0,9],"Vertical"),(()=>{let n=U[1].board.allAvailableSpots,e=document.getElementById("computerBoard");n.forEach((n=>{let t=document.createElement("div");var r;t.setAttribute("data-coordinates",`${n}`),t.classList.add("gridCell",`${n}`),r=t,U[1].board.shipCoordinates.forEach((n=>{n.forEach((n=>{r.classList[1],n.toString()}))})),t.classList.remove(`${n}`),e.appendChild(t)}))})(),(()=>{let n=U[0].board.allAvailableSpots,e=document.getElementById("playerBoard");n.forEach((n=>{let t=document.createElement("div");t.classList.add("gridCell",`${n}`),t.classList.remove(`${n}`),t.setAttribute("data-coordinates",`${n}`),e.appendChild(t)}))})(),E(),console.log(U);let T=()=>{1!=U[1].board.allShipsSunk()&&1!=U[0].board.allShipsSunk()?new Promise((n=>{document.querySelectorAll("#computerBoard > .gridCell").forEach((e=>{e.addEventListener("click",(e=>{let t=[+e.target.dataset.coordinates[0],+e.target.dataset.coordinates[2]];n(t)}))}))})).then((n=>{U[0].attack(n),setTimeout((()=>{U[1].attack(),T()}),1200)})):alert("gameOver")};const z=T;document.querySelectorAll("#playerBoard  > .gridCell")})()})();
//# sourceMappingURL=main.js.map