"use strict";(self.webpackChunkkalmars_website=self.webpackChunkkalmars_website||[]).push([[678],{1392:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294);function r(){return n.createElement(n.Fragment,null,n.createElement("div",{className:"container h-screen mx-auto flex justify-center items-center"},n.createElement("div",{className:"loading-message pt-32 lg:pt-60"},n.createElement("h1",{t:"LOADING..."},"LOADING...")),n.createElement("div",{className:"bars-common bar-one"}),n.createElement("div",{className:"bars-common bar-two"}),n.createElement("div",{className:"bars-common bar-three"}),n.createElement("div",{className:"squares-common square-one"}),n.createElement("div",{className:"squares-common square-two"})))}},2276:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(7294),r=a(7956),s=function(){function e(e,t){void 0===t&&(t="!<>-_\\/[]{}—=+*^?#________"),e&&(this.el=e,this.chars=t,this.update=this.update.bind(this),this.initText=e.innerText)}var t=e.prototype;return t.setText=function(e){var t=this;void 0===e&&(e=null),e||(e=this.initText);var a=this.el.innerText,n=Math.max(a.length,e.length),r=new Promise((function(e){return t.resolve=e}));this.queue=[];for(var s=0;s<n;s++){var i=a[s]||"",o=e[s]||"",l=Math.floor(40*Math.random()),u=l+Math.floor(40*Math.random());this.queue.push({from:i,to:o,start:l,end:u})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),r},t.update=function(){for(var e="",t=0,a=0,n=this.queue.length;a<n;a++){var r=this.queue[a],s=r.from,i=r.to,o=r.start,l=r.end,u=r.char;this.frame>=l?(t++,e+=i):this.frame>=o?((!u||Math.random()<.28)&&(u=this.randomChar(),this.queue[a].char=u),e+='<span class="dud">'+u+"</span>"):e+=s}this.el.innerHTML=e,t===this.queue.length?this.resolve():(this.frameRequest=requestAnimationFrame(this.update),this.frame++)},t.randomChar=function(){return this.chars[Math.floor(Math.random()*this.chars.length)]},e}(),i=a(1392),o=(0,n.lazy)((function(){return Promise.all([a.e(532),a.e(313),a.e(19)]).then(a.bind(a,1250))})),l=(0,n.lazy)((function(){return a.e(156).then(a.bind(a,9156))})),u=function(){return(0,n.useLayoutEffect)((function(){console.log("test"),window.loading=!0;var e=r.Z.timeline({easing:"linear",autoplay:!0});e.add({easing:"easeOutExpo",autoplay:!0,targets:".css--anim-footer",translateX:["-100%",0],duration:100,delay:300}),e.add({targets:".css--page-number",easing:"easeOutExpo",opacity:[0,1],scale:[.8,1],duration:400}),e.finished.then((function(){window.loading=!1}));var t=document.getElementsByClassName("text-scramble");Array.prototype.forEach.call(t,(function(e){var t=new s(e);!function e(){t.setText().then((function(){var t,a;setTimeout(e,13e3+(t=0,a=5e3,t=Math.ceil(t),a=Math.floor(a),Math.floor(Math.random()*(a-t+1))+t))}))}()}))})),n.createElement(n.Fragment,null,n.createElement("main",null,n.createElement(n.Suspense,{fallback:n.createElement(i.Z,null)},n.createElement("div",{id:"main-wrapper relative"},n.createElement(o,{pageNr:"01"}),n.createElement("section",null,n.createElement(l,null))))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-9e5e3481993f588079cd.js.map