"use strict";(self.webpackChunkgatsby_starter_netlify_cms=self.webpackChunkgatsby_starter_netlify_cms||[]).push([[298],{1194:function(e,t,a){var i=a(7294),n=a(2585);t.Z=function(e){var t=e.gridItems;return i.createElement("div",{className:"columns is-multiline"},t.map((function(e){return i.createElement("div",{key:e.text,className:"column is-6"},i.createElement("section",{className:"section"},i.createElement("div",{className:"has-text-centered"},i.createElement("div",{style:{width:"240px",display:"inline-block"}},i.createElement(n.Z,{imageInfo:e}))),i.createElement("p",null,e.text)))})))}},3888:function(e,t,a){a.d(t,{Z:function(){return s}});var i=a(7294),n=a(6125);function s(e){var t=e.height,a=void 0===t?400:t,s=e.img,l=e.title,r=e.subheading,c=e.imgPosition,m=void 0===c?"top left":c;return i.createElement(i.Fragment,null,i.createElement("div",{className:"margin-top-0",style:{display:"grid",alignItems:"center"}},null!=s&&s.url?i.createElement("img",{src:s,objectFit:"cover",objectPosition:m,style:{gridArea:"1/1",height:a,width:"100%"},aspectratio:3,alt:"",formats:["auto","webp","avif"]}):i.createElement(n.G,{image:s,objectFit:"cover",objectPosition:m,style:{gridArea:"1/1",maxHeight:a},layout:"fullWidth",aspectratio:3,alt:"",formats:["auto","webp","avif"]}),(l||r)&&i.createElement("div",{style:{gridArea:"1/1",position:"relative",placeItems:"center",display:"grid"}},l&&i.createElement("h1",{className:"has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen",style:{boxShadow:"rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",backgroundColor:"rgb(255, 68, 0)",color:"white",lineHeight:"1",padding:"0.25em"}},l),r&&i.createElement("h3",{className:"has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen",style:{boxShadow:"rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",backgroundColor:"rgb(255, 68, 0)",color:"white",lineHeight:"1",padding:"0.25rem",marginTop:"0.5rem"}},r))))}},2585:function(e,t,a){var i=a(7294),n=a(6125);t.Z=function(e){var t=e.imageInfo,a={borderRadius:"5px"},s=t.alt,l=void 0===s?"":s,r=t.childImageSharp,c=t.image;return c&&c.childImageSharp?i.createElement(n.G,{image:c.childImageSharp.gatsbyImageData,style:a,alt:l}):r?i.createElement(n.G,{image:r.gatsbyImageData,style:a,alt:l}):c?i.createElement("img",{style:{imageStyle:a},src:c,alt:l}):null}},7215:function(e,t,a){a.r(t),a.d(t,{ProductPageTemplate:function(){return N},default:function(){return y}});var i,n=a(7294),s=a(6125),l=a(3069),r=a(1194),c=new Uint8Array(16);function m(){if(!i&&!(i="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(c)}var o=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var d=function(e){return"string"==typeof e&&o.test(e)},u=[],g=0;g<256;++g)u.push((g+256).toString(16).substr(1));var p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=(u[e[t+0]]+u[e[t+1]]+u[e[t+2]]+u[e[t+3]]+"-"+u[e[t+4]]+u[e[t+5]]+"-"+u[e[t+6]]+u[e[t+7]]+"-"+u[e[t+8]]+u[e[t+9]]+"-"+u[e[t+10]]+u[e[t+11]]+u[e[t+12]]+u[e[t+13]]+u[e[t+14]]+u[e[t+15]]).toLowerCase();if(!d(a))throw TypeError("Stringified UUID is invalid");return a};var E=function(e,t,a){var i=(e=e||{}).random||(e.rng||m)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t){a=a||0;for(var n=0;n<16;++n)t[a+n]=i[n];return t}return p(i)},f=function(e){var t=e.testimonials;return n.createElement("div",null,t.map((function(e){return n.createElement("article",{key:E(),className:"message"},n.createElement("div",{className:"message-body"},e.quote,n.createElement("br",null),n.createElement("cite",null," – ",e.author)))})))},h=function(e){var t=e.data;return n.createElement("div",{className:"columns"},t.map((function(e){return n.createElement("div",{key:e.plan,className:"column"},n.createElement("section",{className:"section"},n.createElement("h4",{className:"has-text-centered has-text-weight-semibold"},e.plan),n.createElement("h2",{className:"is-size-1 has-text-weight-bold has-text-primary has-text-centered"},"$",e.price),n.createElement("p",{className:"has-text-weight-semibold"},e.description),n.createElement("ul",null,e.items.map((function(e){return n.createElement("li",{key:e,className:"is-size-5"},e)})))))})))},v=a(2585),b=a(3888),N=function(e){var t=e.image,a=e.title,i=e.heading,l=e.description,c=e.intro,m=e.main,o=e.testimonials,d=e.fullImage,u=e.pricing,g=(0,s.d)(t)||t,p=(0,s.d)(d)||d;return n.createElement("div",{className:"content"},n.createElement(b.Z,{img:g,title:a}),n.createElement("section",{className:"section section--gradient"},n.createElement("div",{className:"container"},n.createElement("div",{className:"section"},n.createElement("div",{className:"columns"},n.createElement("div",{className:"column is-7 is-offset-1"},n.createElement("h3",{className:"has-text-weight-semibold is-size-2"},i),n.createElement("p",null,l))),n.createElement("div",{className:"columns"},n.createElement("div",{className:"column is-10 is-offset-1"},n.createElement(r.Z,{gridItems:c.blurbs}),n.createElement("div",{className:"columns"},n.createElement("div",{className:"column is-7"},n.createElement("h3",{className:"has-text-weight-semibold is-size-3"},m.heading),n.createElement("p",null,m.description))),n.createElement("div",{className:"tile is-ancestor"},n.createElement("div",{className:"tile is-vertical"},n.createElement("div",{className:"tile"},n.createElement("div",{className:"tile is-parent is-vertical"},n.createElement("article",{className:"tile is-child"},n.createElement(v.Z,{imageInfo:m.image1}))),n.createElement("div",{className:"tile is-parent"},n.createElement("article",{className:"tile is-child"},n.createElement(v.Z,{imageInfo:m.image2})))),n.createElement("div",{className:"tile is-parent"},n.createElement("article",{className:"tile is-child"},n.createElement(v.Z,{imageInfo:m.image3}))))),n.createElement(f,{testimonials:o})))))),n.createElement(b.Z,{img:p,imgPosition:"bottom"}),n.createElement("section",{className:"section section--gradient"},n.createElement("div",{className:"container"},n.createElement("div",{className:"section"},n.createElement("div",{className:"columns"},n.createElement("div",{className:"column is-10 is-offset-1"},n.createElement("h2",{className:"has-text-weight-semibold is-size-2"},u.heading),n.createElement("p",{className:"is-size-5"},u.description),n.createElement(h,{data:u.plans})))))))},y=function(e){var t=e.data.markdownRemark.frontmatter;return n.createElement(l.Z,null,n.createElement(N,{image:t.image,title:t.title,heading:t.heading,description:t.description,intro:t.intro,main:t.main,testimonials:t.testimonials,fullImage:t.full_image,pricing:t.pricing}))}}}]);
//# sourceMappingURL=component---src-templates-product-page-js-b1c71d1a26eaaac5bc8c.js.map