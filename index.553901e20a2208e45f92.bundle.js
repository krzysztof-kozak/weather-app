"use strict";(self.webpackChunkfrontend_toolbox=self.webpackChunkfrontend_toolbox||[]).push([[826],{749:function(){const e=document.querySelector("#app"),t=e.querySelector("form"),n=e.querySelector(".error"),o=e.querySelector(".error-span"),r=e.querySelector(".city"),c=e.querySelector(".temp"),a=e.querySelector(".temp-unit"),i=e.querySelector(".desc"),s=e.querySelector(".icon");async function u(e){const t=`https://api.openweathermap.org/data/2.5/weather?q=${e}&units=metric&appid=aa1bbf0b273f48c741d2c1b343936d69`,n=await fetch(t);return await n.json()}function p(e){const{name:t,main:{temp:n},weather:[o]}=e;a.textContent="C",r.textContent=t,c.textContent=n,i.textContent=o.description,s.src=`http://openweathermap.org/img/wn/${o.icon}@2x.png`}function l(e){o.textContent=e,n.style.display="block"}u("London").then(p),t.addEventListener("submit",(e=>{e.preventDefault(),"none"!==n.style.display&&(n.style.display="none");const o=new FormData(t).get("city");o&&u(o).then(p).catch(l.bind(null,o))}))}},function(e){e(e.s=749)}]);
//# sourceMappingURL=index.553901e20a2208e45f92.bundle.js.map