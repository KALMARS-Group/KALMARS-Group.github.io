(this["webpackJsonpkalmars-website"]=this["webpackJsonpkalmars-website"]||[]).push([[0],{45:function(e,t,o){},46:function(e,t,o){},47:function(e,t,o){"use strict";o.r(t);var r=o(21),c=o.n(r),i=o(7),n=o(8),a=o(11),s=o(49),l=o(9),f=o(16),u=o.n(f),h=o(13),j=o(23),d={sections:7,pages:6,zoom:75,color_numbers:"#212b4c",color_header:"#fff",color_hero:"#fff",color_footer:"#fff",color_circle:"#fff",color_triangle:"#fff",paragraphs:[{offset:1,factor:1.75,header:"Realize the growth",image:"/assets/img/sections/growth.jpg",aspect:1.51,text:"We still have a long way to go as a collective to reach our full potential. With Realize we have the vision to enable the generations that are growing up to create that world."},{offset:2,factor:2,header:"Trust the research",image:"/assets/img/sections/research.jpg",aspect:1.5,text:"The growth path is directly influenced by learning and new idea generation. In order to do that, research is required."},{offset:3,factor:2,header:"Protect your future",image:"/assets/img/sections/protect.jpg",aspect:1.5037,text:"Take the key steps towards understanding and mitigating the risks that your organisation may face today and in the future"},{offset:4,factor:2.7,header:"Solve your obstacles",image:"/assets/img/sections/obstacles.jpg",aspect:.8,text:"When risks are taking in place it might be costly for you. So its better to resolve them by work"},{offset:5,factor:1.75,header:"Bring value to your needs",image:"/assets/img/sections/values.jpg",aspect:.8,text:"With awareness, when ideas and dreams cross your mind, your business is growing to the right direction."}],stripes:[{offset:0,color:"#1c2541",height:13},{offset:6,color:"#1c2541",height:10}],top:Object(i.createRef)()},m=o(6),b=["children","size","left","right","top","bottom","color","opacity","height","layers","font"];function p(e){var t=e.children,o=e.size,r=void 0===o?1:o,c=e.left,s=e.right,f=e.top,p=e.bottom,v=e.color,g=void 0===v?"white":v,x=e.opacity,O=void 0===x?1:x,y=e.height,w=void 0===y?.01:y,_=(e.layers,e.font),k=void 0===_?"/fonts/Roboto Mono_Bold.json":_,M=Object(h.a)(e,b),z=Object(a.d)(l.FontLoader,k),R=Object(j.a)((function(){return new Promise((function(e){return e(new l.TextBufferGeometry(t,{font:z,size:1,height:w,curveSegments:32}))}))}),[t]),B=Object(i.useCallback)((function(e){var t=new l.Vector3;e.geometry.computeBoundingBox(),e.geometry.boundingBox.getSize(t),e.position.x=c?0:s?-t.x:-t.x/2,e.position.y=f?0:p?-t.y:-t.y/2}),[c,s,f,p]),N=Object(i.useRef)(),C=d.top.current;return Object(a.c)((function(){N.current.shift=u()(N.current.shift,(d.top.current-C)/100,.1),C=d.top.current})),Object(m.jsx)("group",Object(n.a)(Object(n.a)({},M),{},{scale:[r,r,.1],children:Object(m.jsx)("mesh",{geometry:R,onUpdate:B,frustumCulled:!1,children:Object(m.jsx)("meshBasicMaterial",{ref:N,color:g,transparent:!0,opacity:O})})}))}var v=["color","opacity","args","map"],g=Object(i.forwardRef)((function(e,t){var o=e.color,r=void 0===o?"white":o,c=e.opacity,a=void 0===c?1:c,s=e.args,l=e.map,f=Object(h.a)(e,v),u=Object(i.useRef)();return Object(m.jsxs)("mesh",Object(n.a)(Object(n.a)({ref:t},f),{},{children:[Object(m.jsx)("planeBufferGeometry",{args:s}),Object(m.jsx)("meshBasicMaterial",{ref:u,color:r,map:l,transparent:!0,opacity:a})]}))})),x=o(0),O=o(3),y=o(1),w=o(2),_=function(e){Object(y.a)(o,e);var t=Object(w.a)(o);function o(){return Object(x.a)(this,o),t.call(this,{vertexShader:"uniform float scale;\n      uniform float shift;\n      varying vec2 vUv;\n      void main() {\n        vec3 pos = position;\n        pos.y = pos.y + ((sin(uv.x * 3.1415926535897932384626433832795) * shift * 2.0) * 0.125);\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);\n      }",fragmentShader:"uniform sampler2D tex;\n      uniform float hasTexture;\n      uniform float shift;\n      uniform float scale;\n      uniform vec3 color;\n      uniform float opacity;\n      varying vec2 vUv;\n      void main() {\n        float angle = 1.55;\n        vec2 p = (vUv - vec2(0.5, 0.5)) * (1.0 - scale) + vec2(0.5, 0.5);\n        vec2 offset = shift / 15.0 * vec2(cos(angle), sin(angle));\n        vec4 cr = texture2D(tex, p + offset);\n        vec4 cga = texture2D(tex, p);\n        vec4 cb = texture2D(tex, p - offset);\n        if (hasTexture == 1.0) gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);\n        else gl_FragColor = vec4(color, opacity);\n      }",uniforms:{tex:{value:null},hasTexture:{value:0},scale:{value:0},shift:{value:0},opacity:{value:1},color:{value:new l.Color("white")}}})}return Object(O.a)(o,[{key:"scale",get:function(){return this.uniforms.scale.value},set:function(e){this.uniforms.scale.value=e}},{key:"shift",get:function(){return this.uniforms.shift.value},set:function(e){this.uniforms.shift.value=e}},{key:"map",get:function(){return this.uniforms.tex.value},set:function(e){this.uniforms.hasTexture.value=!!e,this.uniforms.tex.value=e}},{key:"color",get:function(){return this.uniforms.color.value}},{key:"opacity",get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms&&(this.uniforms.opacity.value=e)}}]),o}(l.ShaderMaterial);Object(a.b)({CustomMaterial:_});var k=["children","offset","factor"],M=Object(i.createContext)(0);function z(e){var t=e.children,o=e.offset,r=e.factor,c=Object(h.a)(e,k),s=R(),l=s.offset,f=s.sectionHeight,j=Object(i.useRef)();return o=void 0!==o?o:l,Object(a.c)((function(){var e=j.current.position.y,t=d.top.current;j.current.position.y=u()(e,t/d.zoom*r,.1)})),Object(m.jsx)(M.Provider,{value:o,children:Object(m.jsx)("group",Object(n.a)(Object(n.a)({},c),{},{position:[0,-f*o*r,0],children:Object(m.jsx)("group",{ref:j,children:t})}))})}function R(){var e=d.sections,t=d.pages,o=d.zoom,r=Object(a.e)(),c=r.size,n=r.viewport,s=Object(i.useContext)(M),l=n.width*o,f=n.height*o,u=l/o,h=f/o,j=c.width<700;return{viewport:n,offset:s,viewportWidth:l,viewportHeight:f,canvasWidth:u,canvasHeight:h,mobile:j,margin:u*(j?.2:.1),contentMaxWidth:u*(j?.8:.6),sectionHeight:h*((t-1)/(e-1)),offsetFactor:(s+1)/e}}var B=["color","shift","opacity","args","map"],N=Object(i.forwardRef)((function(e,t){var o=e.color,r=void 0===o?"white":o,c=e.shift,s=void 0===c?1:c,l=e.opacity,f=void 0===l?1:l,j=e.args,b=e.map,p=Object(h.a)(e,B),v=R(),g=v.viewportHeight,x=v.offsetFactor,O=Object(i.useRef)(),y=d.top.current;return Object(a.c)((function(){var e=d.pages,t=d.top;O.current.scale=u()(O.current.scale,x-t.current/((e-1)*g),.1),O.current.shift=u()(O.current.shift,(t.current-y)/s*1.5,.1),y=t.current})),Object(m.jsxs)("mesh",Object(n.a)(Object(n.a)({ref:t},p),{},{children:[Object(m.jsx)("planeBufferGeometry",{args:j}),Object(m.jsx)("customMaterial",{ref:O,color:r,map:b,transparent:!0,opacity:f})]}))})),C=o(33);function W(e){var t=e.color,o=void 0===t?"#fff":t,r=e.size,c=void 0===r?100:r,n=e.outerRadius,a=void 0===n?30:n,s=e.innerRadius,l=void 0===s?7:s;function f(e,t){if(null==t&&(t=e,e=0),e>t){var o=e;e=t,t=o}return Math.round(e+(t-e)*Math.random())}function u(e){var t=document.querySelector("#circle");t.style.left=e.clientX-c/2,t.style.top=e.clientY-c/2}return Object(i.useEffect)((function(){window.addEventListener("mousemove",u),function(e){for(var t=[],o=e.element,r=2*Math.PI/e.numPoints,c=f(2*Math.PI),i=C.a.timeline({onUpdate:function(){o.setAttribute("d",function(e,t,o){if(e.length<1)return"M0 0";null==o&&(o=1);for(var r=e.length-(t?0:1),c="M"+e[0].x+" "+e[0].y+" C",i=0;i<r;i++){var n=void 0,a=void 0,s=void 0,l=void 0;t?(n=e[(i-1+r)%r],a=e[i],s=e[(i+1)%r],l=e[(i+2)%r]):(n=0===i?e[0]:e[i-1],a=e[i],s=e[i+1],l=i===r-1?s:e[i+2]),c+=" "+(a.x+(s.x-n.x)/6*o)+" "+(a.y+(s.y-n.y)/6*o)+" "+(s.x-(l.x-a.x)/6*o)+" "+(s.y-(l.y-a.y)/6*o)+" "+s.x+" "+s.y}return t?c+"z":c}(t,!0,1))}}),n=0;n<e.numPoints;n++){var a=c+n*r,s=f(e.minDuration,e.maxDuration),l={x:e.centerX+Math.cos(a)*e.minRadius,y:e.centerY+Math.sin(a)*e.minRadius},u=C.a.to(l,s,{x:e.centerX+Math.cos(a)*e.maxRadius,y:e.centerY+Math.sin(a)*e.maxRadius,repeat:-1,yoyo:!0,ease:"power1.inOut"});i.add(u,-f(s)),t.push(l)}e.tl=i,e.points=t}({element:document.querySelector("#outerCircle"),numPoints:10,centerX:c/2,centerY:c/2,minRadius:a,maxRadius:a+3,minDuration:1,maxDuration:3});var e=btoa('<svg width="'.concat(c,'" height="').concat(c,'" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n              <circle cx="').concat(c/2,'" cy="').concat(c/2,'" r="').concat(l,'" fill="').concat(o,'"/>\n            </svg>'));document.body.style.cursor="url('data:image/svg+xml;base64,".concat(e,"') ").concat(c/2," ").concat(c/2,", auto")}),[o,c,l]),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("svg",{id:"circle",viewBox:"0 0 100 100",width:c,height:c,children:Object(m.jsx)("path",{stroke:o,fill:"transparent",id:"outerCircle"})})})}function S(e){var t=e.image,o=e.index,r=e.offset,c=e.factor,i=e.header,n=e.aspect,a=e.text,l=R(),f=l.contentMaxWidth,u=l.canvasWidth,h=l.margin,j=l.mobile,b=n<1&&!j?.65:1,v=(u-f*b-h)/2,g=f*d.zoom*b,x=!(o%2);return Object(m.jsx)(z,{factor:c,offset:j?.9*r:r,children:Object(m.jsxs)("group",{position:[x?-v:v,0,0],children:[Object(m.jsx)(N,{map:t,args:[1,1,32,32],shift:75,size:b,aspect:n,scale:[f*b,f*b/n,1],frustumCulled:!1}),Object(m.jsx)(s.a,{style:{width:g/(j?1:2),textAlign:x?"left":"right"},position:[x||j?-f*b/2:0,-f*b/2/n-.4,1],children:Object(m.jsx)("div",{tabIndex:o,children:a})}),Object(m.jsx)(p,{left:x,right:!x,size:.055*f,color:d.color_header,top:!0,position:[(x?-f:f)*b/2,f*b/n/2+.5,-1],children:i}),Object(m.jsx)(z,{factor:.2,children:Object(m.jsx)(p,{opacity:.5,size:.5*f,color:d.color_numbers,position:[(x?f:-f)/(j?7:1.7)*b,f*b/n/1.1,-10],children:"0"+(o+1)})})]})})}function P(e){var t=e.scale,o=e.position,r=e.rotation,c=e.opacity,i=void 0===c?1:c,n=e.color,a=void 0===n?"white":n;return Object(m.jsxs)("mesh",{position:o,scale:t,rotation:r,children:[Object(m.jsx)("ringBufferGeometry",{args:[1.94,2,3]}),Object(m.jsx)("meshBasicMaterial",{color:a,transparent:!0,opacity:i})]})}function T(e){var t=e.scale,o=e.position,r=e.rotation,c=e.opacity,i=void 0===c?1:c,n=e.color,a=void 0===n?"white":n;return Object(m.jsxs)("mesh",{position:o,scale:t,rotation:r,children:[Object(m.jsx)("ringBufferGeometry",{args:[1.95,2,70]}),Object(m.jsx)("meshBasicMaterial",{color:a,transparent:!0,opacity:i})]})}function F(){var e=Object(a.d)(l.TextureLoader,d.paragraphs.map((function(e){return e.image})));Object(i.useMemo)((function(){return e.forEach((function(e){return e.minFilter=l.LinearFilter}))}),[e]);var t=R(),o=t.contentMaxWidth,r=t.canvasWidth,c=t.canvasHeight,f=t.mobile;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(z,{factor:1,offset:0,children:[Object(m.jsxs)(z,{factor:1.2,children:[Object(m.jsx)(T,{rotation:[0,-.1,0],scale:r/12,position:[f?-.6:r/4*-1,1.4,0],opacity:.4,color:d.color_circle}),Object(m.jsx)(p,{left:!f,size:.12*o,position:[f?-.4:-r/2.1,1.4,0],color:d.color_hero,children:"Discover"}),Object(m.jsx)(p,{size:r*(f?.07:.05),position:[f?0:.5,0,1],color:d.color_hero,children:"&"}),Object(m.jsx)(P,{rotation:[0,-.1,Math.PI/6],scale:r/10,position:[f?.6:r/4,-1.4,0],opacity:.4,color:d.color_triangle}),Object(m.jsx)(p,{right:!f,size:.12*o,position:[f?.4:r/2.4,-1.4,0],color:d.color_hero,children:"Expand"})]}),Object(m.jsx)(z,{factor:1,children:Object(m.jsx)(s.a,{className:"bottom-left",style:{color:"#ccc"},position:[-r/2,-c/2,0],children:Object(m.jsx)("h3",{children:"- We are solving complex obstacles to help you concentrate on your business."})})})]}),Object(m.jsx)(z,{factor:3,offset:5.9,children:Object(m.jsx)("mesh",{onClick:function(e){return alert("click")},children:Object(m.jsx)(p,{top:!0,size:r*(f?.09:.07),position:[f?-.2:0,-3.5,1],color:d.color_footer,children:"Let's Talk!"})})}),d.paragraphs.map((function(t,o){return Object(m.jsx)(S,Object(n.a)(Object(n.a)({index:o},t),{},{image:e[o]}),o)})),d.stripes.map((function(e,t){var o=e.offset,r=e.color,c=e.height;return Object(m.jsx)(z,{factor:-1.5,offset:o,children:Object(m.jsx)(g,{args:[50,f?.7*c:c,32,32],color:r,rotation:[0,0,Math.PI/8],position:[0,0,-10]})},t)}))]})}function D(){return Object(m.jsxs)("div",{className:"loading",children:[Object(m.jsx)("div",{children:"Loading..."}),Object(m.jsxs)("div",{className:"blob",children:[Object(m.jsx)("p",{children:Object(m.jsx)("span",{})}),Object(m.jsx)("p",{children:Object(m.jsx)("span",{})})]})]})}function I(){var e=Object(i.useRef)();return Object(a.c)((function(){return e.current.material.opacity=u()(e.current.material.opacity,0,.04)})),Object(m.jsxs)("mesh",{ref:e,position:[0,0,200],scale:[100,100,1],children:[Object(m.jsx)("planeBufferGeometry",{attach:"geometry"}),Object(m.jsx)("meshBasicMaterial",{attach:"material",color:"#000",transparent:!0})]})}function L(){var e=Object(i.useRef)(),t=function(e){return d.top.current=e.target.scrollTop};return Object(i.useEffect)((function(){t({target:e.current})}),[]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(i.Suspense,{fallback:Object(m.jsx)(D,{}),children:[Object(m.jsx)(W,{}),Object(m.jsxs)(a.a,{className:"canvas",linear:!0,dpr:[1,2],orthographic:!0,camera:{zoom:d.zoom,position:[0,0,500]},children:[Object(m.jsx)(F,{}),Object(m.jsx)(I,{})]}),Object(m.jsx)("div",{className:"scrollArea",ref:e,onScroll:t,children:new Array(d.sections).fill().map((function(e,t){return Object(m.jsx)("div",{id:"0"+t,style:{height:"".concat(d.pages/d.sections*100,"vh")}},t)}))}),Object(m.jsxs)("div",{className:"frame",children:[Object(m.jsx)("h1",{className:"frame__title",children:Object(m.jsx)("img",{src:"/assets/img/logo/logo_text_White-full.svg",alt:"KALMARS logo",className:"logo"})}),Object(m.jsxs)("div",{className:"frame__nav",children:[Object(m.jsx)("a",{className:"frame__link",href:"#00",children:"Intro"}),Object(m.jsx)("a",{className:"frame__link",href:"#01",children:"01"}),Object(m.jsx)("a",{className:"frame__link",href:"#02",children:"02"}),Object(m.jsx)("a",{className:"frame__link",href:"#03",children:"03"}),Object(m.jsx)("a",{className:"frame__link",href:"#04",children:"04"}),Object(m.jsx)("a",{className:"frame__link",href:"#05",children:"05"}),Object(m.jsx)("a",{className:"frame__link",href:"#06",children:"Contact Us"})]})]})]})})}o(45),o(46);c.a.render(Object(m.jsx)(L,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.c2c7fb67.chunk.js.map