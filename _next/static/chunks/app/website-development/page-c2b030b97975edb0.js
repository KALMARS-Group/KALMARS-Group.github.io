(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[857],{7253:function(e,t,o){Promise.resolve().then(o.bind(o,4650)),Promise.resolve().then(o.bind(o,4889)),Promise.resolve().then(o.bind(o,9434))},4889:function(e,t,o){"use strict";o.r(t),o.d(t,{Hero:function(){return Hero}});var i=o(7437),s=o(4124),r=o(258),a=o(9303);o(2265);var n=o(251),l=o(7041);let Hero=()=>{let{t:e}=(0,n.$G)();return(0,i.jsx)("div",{className:"px-4 pt-40 lg:px-0 lg:pt-36 pb-20 min-h-[calc(100vh-2rem)]",children:(0,i.jsxs)("div",{className:"flex grid lg:grid-cols-2 min-h-[70vh] h-full",children:[(0,i.jsxs)("div",{className:"overflow-y-auto content-center",children:[(0,i.jsx)(s.Z,{text:e("Website Development")}),(0,i.jsx)(r.Z,{text:e("Comlex and High level website")}),(0,i.jsx)(a.Z,{text:e("You most probably have questioned what are the limitations of development and design implementation in the website, what is possible, and what's not. Our website gives an idea of what we can achieve and implement in websites, such as - custom 3D models which have their own logic, how it behaves, complex styling, and animation implementation.")})]}),(0,i.jsx)("div",{className:"lg:flex hidden w-full h-full",children:(0,i.jsx)(l.Z,{})})]})})}},9434:function(e,t,o){"use strict";o.r(t),o.d(t,{ServiceValues:function(){return ServiceValues}});var i=o(7437),s=o(4124),r=o(258);o(2265);var a=o(251),n=o(1084);let ServiceValues=()=>{let{t:e}=(0,a.$G)(),t=[{number:"01",title:e("Stand out from competitors"),description:e("In the digital world a lot of things are changing and improving with time. Be in front of competitors by using advantages that technologies give, by being with the latest trends and frameworks.")},{number:"02",title:e("Higher results and overview"),description:e("We offer not only to build nice-looking websites but also implement automated workflows, and complex solutions that will help you to save time, better analyze or prepare information specific to your business needs. ")},{number:"03",title:e("Performance and Knowledge"),description:e("During the development process, we will consult you and give valuable information about what are the key points for every development step so that you can better understand why work is done in a certain way and methodology. This will help you to better understand your competitors.\u2028")}];return(0,i.jsxs)("div",{className:"px-4 pt-10 lg:px-0 lg:pt-36 pb-20 min-h-[calc(100vh-2rem)]",children:[(0,i.jsx)("div",{className:"flex pb-16 grid lg:grid-cols-2",children:(0,i.jsxs)("div",{children:[(0,i.jsx)(s.Z,{text:e("Values")}),(0,i.jsx)(r.Z,{text:e("What we value in website development")})]})}),(0,i.jsx)("div",{className:"grid lg:grid-cols-3 gap-10 lg:gap-8",children:t.map((e,t)=>(0,i.jsx)(n.Z,{children:(0,i.jsxs)("div",{className:"flex h-full flex-col justify-between",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"text-primary text-lg font-bold font-kalmars",children:e.number}),(0,i.jsx)("div",{className:"text-primary pt-2 font-bold font-archivo text-xl lg:text-3xl first-of-type:text-gray",children:e.title})]}),(0,i.jsx)("div",{className:"text-secondary pt-10",children:e.description})]})},t))})]})}},7041:function(e,t,o){"use strict";o.d(t,{Z:function(){return Laptop_Laptop3DObject}});var i=o(7437),s=o(7837),r=o(5887),a=o(4977),n=o(2265),l=o(6264),c=o(6375);function LaptopModel(e){let t=(0,n.useRef)(),{nodes:o,materials:r}=(0,l.L)("/black_laptop_design.glb"),[a,d]=n.useState(1);return n.useEffect(()=>{if(t.current){let e=new c.Box3().setFromObject(t.current),o=e.getCenter(new c.Vector3);t.current.position.x+=t.current.position.x-o.x,t.current.position.y+=t.current.position.y-o.y,t.current.position.z+=t.current.position.z-o.z}},[t]),(0,s.C)(()=>{d(e=>e+3e-4*Math.sin(Date.now()/1e3)),t.current&&(t.current.rotation.y=a-1)}),(0,i.jsx)("group",{ref:t,...e,dispose:null,scale:a,children:(0,i.jsx)("group",{rotation:[-Math.PI/2,0,0],children:(0,i.jsxs)("group",{rotation:[Math.PI/2,0,0],children:[(0,i.jsxs)("group",{position:[0,.034,-.084],rotation:[-.011,0,0],children:[(0,i.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_6.geometry,material:r.case}),(0,i.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_7.geometry,material:r.shiny_part}),(0,i.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_8.geometry,material:r.ports1}),(0,i.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_9.geometry,material:r.ports_2}),(0,i.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_10.geometry,material:r.ports_3})]}),(0,i.jsxs)("group",{position:[0,.025,.178],rotation:[1.745,0,0],children:[(0,i.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_12.geometry,material:r.case}),(0,i.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_13.geometry,material:r.bezel}),(0,i.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_14.geometry,material:r.display}),(0,i.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_15.geometry,material:r.webcam})]}),(0,i.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Object_4.geometry,material:r.keys,position:[.193,.037,.121],rotation:[3.133,0,Math.PI],scale:.151})]})})})}l.L.preload("/black_laptop_design.glb");let LightFollowingCamera=()=>{let e=n.useRef();return(0,s.C)(t=>{let{camera:o}=t;e.current&&e.current.position.copy(o.position)}),(0,i.jsx)("directionalLight",{ref:e,intensity:5,position:[0,0,8],color:"#3e3e3e"})};var Laptop_Laptop3DObject=()=>(0,i.jsx)("div",{className:"w-full",children:(0,i.jsx)("div",{style:{width:"100%",height:"100%",position:"relative"},children:(0,i.jsxs)(r.Xz,{gl:{alpha:!0},camera:{position:[-4,4,-32],fov:2},children:[(0,i.jsx)(a.z,{makeDefault:!0,autoRotate:!1,enablePan:!1,enableZoom:!1,autoRotateSpeed:.5,zoomSpeed:.1}),(0,i.jsx)(LightFollowingCamera,{}),(0,i.jsx)(n.Suspense,{fallback:null,children:(0,i.jsx)(LaptopModel,{})})]})})})}},function(e){e.O(0,[689,922,304,724,667,850,977,821,971,864,744],function(){return e(e.s=7253)}),_N_E=e.O()}]);