"use strict";(self.webpackChunkkalmars_website=self.webpackChunkkalmars_website||[]).push([[60],{225:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294);function l(e){var t=e.calendlyURL,a="css--calendly-iframe "+e.bonusClass;return n.createElement(n.Fragment,null,n.createElement("iframe",{className:a,src:t,title:"Book a meeting with us",minWidth:"320px",height:"100%"}),n.createElement("script",{type:"text/javascript",src:"https://assets.calendly.com/assets/external/widget.js",async:!0}))}},5381:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.direction,a=e.text,l="css--bottom";return"bottom"===t?l="css--bottom":"top"===t?l="css--top":"left"===t?l="css--left":"right"===t&&(l="css--right"),n.createElement("div",{className:"hidden md:block css--fadedtext "+l},a)}},1707:function(e,t,a){a.d(t,{H:function(){return c}});var n=a(7294),l=a(1597),c=function(e){var t,a,c=e.title,r=e.description,m=e.pathname,s=e.keywords,i=void 0===s?"":s,o=e.children,d=null==(a=(0,l.useStaticQuery)("1023032324"))||null===(t=a.site)||void 0===t?void 0:t.siteMetadata,u=d.title,p=d.description,f=d.keywords,E=d.image,g=d.siteUrl,h={title:(c||u)+" | /KALMARS/",description:r||p,keywords:i||f,image:""+g+E,url:""+g+(m||""),author:d.author||"/KALMARS/"};return n.createElement(n.Fragment,null,n.createElement("title",null,h.title),n.createElement("meta",{name:"title",content:h.title}),n.createElement("meta",{name:"description",content:h.description}),n.createElement("meta",{name:"keywords",content:h.keywords}),h.image&&n.createElement("meta",{name:"image",content:h.image}),n.createElement("meta",{name:"theme-color",content:"#2FC7E5"}),n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"og:title",content:h.title}),n.createElement("meta",{property:"og:description",content:h.description}),h.image&&n.createElement("meta",{property:"og:image",content:h.image}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.createElement("meta",{name:"twitter:title",content:h.title}),n.createElement("meta",{name:"twitter:url",content:h.url}),n.createElement("meta",{name:"twitter:description",content:h.description}),n.createElement("meta",{name:"twitter:creator",content:h.author}),h.image&&n.createElement("meta",{name:"twitter:image",content:h.image}),n.createElement("meta",{name:"robots",content:"index, follow"}),n.createElement("meta",{name:"revisit-after",content:"14 days"}),n.createElement("meta",{name:"author",content:h.author}),n.createElement("link",{rel:"shortcut icon",href:"/favicon-32x32.png"}),o)}},8403:function(e,t,a){a.r(t),a.d(t,{Head:function(){return E},default:function(){return f}});a(2363);var n=a(7294),l=a(5381),c=a(7448),r=a(7956),m=a(5019),s=a(6158),i=a.n(s),o=function(e){var t=e.accessToken,a=e.mapStyle,l=e.longitude,c=e.latitude,r=e.flyToEffect;i().accessToken=t;var m=(0,n.useRef)(null),s=[l,c],o={center:s,zoom:10,pitch:0},d={center:s,zoom:17.1,pitch:50};return!1===r&&(o=d),(0,n.useEffect)((function(){var e=new(i().Map)(Object.assign({container:m.current,style:a},o)),t=document.createElement("div");t.className="location-marker",new(i().Marker)({element:t,anchor:"bottom"}).setLngLat(s).addTo(e),!0===r&&e.on("load",(function(){e.flyTo(Object.assign({},d,{duration:7e3,essential:!0}))}))}),[]),n.createElement("div",{className:"css--map-3d h-96",ref:m})},d=a(225);function u(){var e=(0,m.$)().t;return(0,n.useLayoutEffect)((function(){var e=r.Z.timeline({easing:"linear",autoplay:!0});e.add({targets:".container",easing:"easeOutExpo",opacity:[0,1],scale:[.8,1],duration:1500,delay:500}),e.add({targets:".css--fadedtext",easing:"easeOutExpo",opacity:[0,1],translateX:["-100%",0],duration:500})}),[]),n.createElement("div",{className:"relative min-h-screen justify-center pt-20 pb-36"},n.createElement("div",{className:"md:container md:mx-auto px-4 h-full flex flex-col justify-center md:items-center mt-8"},n.createElement("h1",{className:"text-center text-2xl md:text-5xl glitch","data-glitch":e("contact_us")},e("contact_us")),n.createElement("div",{className:"grid grid-cols-1 lg:grid-cols-5 w-full sm:pt-0 lg:py-4 mb-8 lg:mb-0"},n.createElement("div",{className:"lg:col-span-2 md:px-4 w-full sm:mt-0 mb-8 lg:mb-0"},n.createElement("div",{className:"col-lg-4 mt-lg-0"},n.createElement("div",{itemScope:!0,itemType:"https://schema.org/Organization",className:"section css--letstalk-contacts p-4"},n.createElement("h2",{className:"mb-3 text-white font-bold"},e("call_us")),n.createElement("p",{itemProp:"telephone",className:"mb-0"},"+371 27 79 7931"),n.createElement("p",{itemProp:"telephone",className:"mb-5"},"+371 29 33 1911"),n.createElement("h2",{className:"mb-3 text-white font-bold"},e("email_us")),n.createElement("p",{itemProp:"email",className:"mb-5"},"info@kalmars.lv"),n.createElement("h2",{className:"mb-3 text-white font-bold"},e("company")),n.createElement("p",{itemProp:"name",className:"mb-0"},"SIA Kalmars Group"),n.createElement("p",{className:"mb-5"},"Registration Nr. 40203267964"),n.createElement("h2",{className:"mb-3 text-white font-bold"},e("adress")),n.createElement("p",{itemProp:"address",className:"mb-5"},"Riga, Sarlotes street 18A-3, LV-1001"),n.createElement("h2",{className:"mb-3 text-white font-bold"},e("bank")),n.createElement("p",{className:"mb-0"},"Bank account Nr. LV52HABA0551049691987"),n.createElement("p",{className:"mb-0"},"Bank: AS SWEDBANK"),n.createElement("p",{className:"mb-0"},"SWIFT code: HABALV22"),n.createElement("p",{className:"mb-0"},"VAT Nr: ",n.createElement("span",{itemProp:"vatID"},"LV40203267964"))))),n.createElement("div",{className:"lg:col-span-3 h-full lg:block justify-self-center lg:justify-self-end md:px-4 w-full"},n.createElement(d.Z,{calendlyURL:"https://calendly.com/kalmars-meeting/30min?embed_domain=kalmars.lv&embed_type=Inline&hide_event_type_details=1&background_color=0b0c15&text_color=ffffff&primary_color=2fc7e5",bonusClass:"lg:ml-auto lg:mr-0 mx-auto"}))),n.createElement("div",{className:"pt-0 lg:pt-4 md:px-4 w-full"},n.createElement(o,{accessToken:"pk.eyJ1Ijoia2FsdmlzYW4iLCJhIjoiY2xhYXdhcHQ4MDcweTNvbjFueGw4NHlsciJ9.c18OWa3v2R-s_g6jiIF5Hw",mapStyle:"mapbox://styles/kalvisan/clagpkwh4006x14nsmjwnutwc",longitude:24.130012362878453,latitude:56.96498776289796,flyToEffect:!0}))))}var p=a(1707),f=function(){return n.createElement("main",{className:"main-wrapper"},n.createElement(c.Z,{pageNr:"U58KL"}),n.createElement(l.Z,{text:"EXPAND",direction:"left"}),n.createElement(u,null))},E=function(){return n.createElement(p.H,{title:"Contact Us",description:"If you have any question or proposal, feel free to contact us!"})}}}]);
//# sourceMappingURL=component---src-pages-contact-us-js-18273b3543ab3f8970fd.js.map