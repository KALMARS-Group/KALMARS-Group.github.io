"use strict";(self.webpackChunkkalmars_website=self.webpackChunkkalmars_website||[]).push([[678],{1686:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var s=a(7294),n=a(7956),r=function(){function e(e,t){void 0===t&&(t="!<>-_\\/[]{}—=+*^?#________"),e&&(this.el=e,this.chars=t,this.update=this.update.bind(this),this.initText=e.innerText)}var t=e.prototype;return t.setText=function(e){var t=this;void 0===e&&(e=null),e||(e=this.initText);var a=this.el.innerText,s=Math.max(a.length,e.length),n=new Promise((function(e){return t.resolve=e}));this.queue=[];for(var r=0;r<s;r++){var l=a[r]||"",i=e[r]||"",o=Math.floor(40*Math.random()),c=o+Math.floor(40*Math.random());this.queue.push({from:l,to:i,start:o,end:c})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),n},t.update=function(){for(var e="",t=0,a=0,s=this.queue.length;a<s;a++){var n=this.queue[a],r=n.from,l=n.to,i=n.start,o=n.end,c=n.char;this.frame>=o?(t++,e+=l):this.frame>=i?((!c||Math.random()<.28)&&(c=this.randomChar(),this.queue[a].char=c),e+='<span class="dud">'+c+"</span>"):e+=r}this.el.innerHTML=e,t===this.queue.length?this.resolve():(this.frameRequest=requestAnimationFrame(this.update),this.frame++)},t.randomChar=function(){return this.chars[Math.floor(Math.random()*this.chars.length)]},e}(),l=a(1250),i=a(5019),o=function(e){var t=e.nextPage,a=(0,i.$)().t;return(0,s.useLayoutEffect)((function(){var e=n.Z.timeline({easing:"linear",autoplay:!0});e.add({targets:".css--hero-content",easing:"easeOutExpo",opacity:[0,1],scale:[.8,1],duration:1500,delay:1e3}),e.add({targets:"#hero .text-scramble, #hero .css--anim-btn",opacity:[0,1],duration:1e3}),e.add({targets:".css--hero-small",scale:[.9,1],opacity:[0,1],duration:500})}),[]),s.createElement("div",{id:"hero",className:"relative"},s.createElement("div",{className:"css--hero-decor"},s.createElement("div",{className:"css--hero-decor-inner"},s.createElement("img",{src:"/img/discover_expand/rectangle_inner.svg",alt:"Decor rectangle"}),s.createElement("div",{className:"css--writing-mode absolute text-center hidden md:block",style:{height:"100%",width:"40%",top:0,left:"60%",zIndex:"50"}},s.createElement("a",{href:"https://goo.gl/maps/QWNKNHRk13UjGTo7A",target:"_blank",rel:"noreferrer",className:"text-secondary css--navbar-cord-text text-scramble"},"i 56.9282618N — 24.006794W")))),s.createElement("div",{className:"container mx-auto h-screen"},s.createElement("div",{className:"grid md:grid-cols-8 h-full"},s.createElement("div",{className:"css--hero-content md:col-start-2 md:col-span-6 relative overflow-hidden w-full h-full",style:{minHeight:"50vh"}},s.createElement("div",{className:"flex self-start anim--left"},s.createElement("div",{className:"css--hero-discover ml-3"},"DISCOVER")),s.createElement("div",{className:"relative flex self-end flex-wrap anim--right"},s.createElement("div",{className:"css--hero-and",style:{zIndex:3}},"&"),s.createElement("div",{className:"css--hero-expand"},"EXPAND"),s.createElement("div",{className:"css--hero-small css--hero-small-exe"},".exe")),s.createElement("div",{className:"mx-auto mt-16 md:mt-24 css--anim-btn"},s.createElement("button",{className:"btn px-12",onClick:t},a("about_us"))),s.createElement("div",{className:"absolute text-scramble pl-5 md:pl-0 w-3/5 md:w-2/5 md:pr-8 bottom-24 md:bottom-1/3"},"We are a digital development agency that makes math equations look easy")))))},c=function(){return(0,s.useLayoutEffect)((function(){console.log("test"),window.loading=!0;var e=n.Z.timeline({easing:"linear",autoplay:!0});e.add({easing:"easeOutExpo",autoplay:!0,targets:".css--anim-footer",translateX:["-100%",0],duration:100,delay:300}),e.add({targets:".css--page-number",easing:"easeOutExpo",opacity:[0,1],scale:[.8,1],duration:400}),e.finished.then((function(){window.loading=!1}));var t=document.getElementsByClassName("text-scramble");Array.prototype.forEach.call(t,(function(e){var t=new r(e);!function e(){t.setText().then((function(){var t,a;setTimeout(e,13e3+(t=0,a=5e3,t=Math.ceil(t),a=Math.floor(a),Math.floor(Math.random()*(a-t+1))+t))}))}()}))})),s.createElement(s.Fragment,null,s.createElement("main",null,s.createElement("div",{id:"main-wrapper relative"},s.createElement(l.Z,{pageNr:"01"}),s.createElement("section",null,s.createElement(o,null)))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-1750a96bf0840882cb20.js.map