import{i as u,S as m}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function p(s){const o="47610997-d306474ab50bfce7565e6433d",i=new URLSearchParams({key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${i}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function h(s){return s.map(({webformatURL:o,largeImageURL:i,tags:r,likes:e,views:t,comments:n,downloads:f})=>`
      <a href="${i}" class="list-item">
      <div class="thumb"><img src="${o}" alt="${r}" class="list-img"></div>
      <ul class="info-box">
      <li class="info-item">
      <h2 class="info-text">Likes</h2>
      <p class="info-amount">${e}</p>
      </li>
      <li class="info-item">
      <h2 class="info-text">Views</h2>
      <p class="info-amount">${t}</p>
      </li>
      <li class="info-item">
      <h2 class="info-text">Comments</h2>
      <p class="info-amount">${n}</p>
      </li>
      <li class="info-item">
      <h2 class="info-text">Downloads</h2>
      <p class="info-amount">${f}</p>
      </li>
      </ul>
      </a>
        `).join("")}const d=document.querySelector(".form"),l=document.querySelector(".list"),a=document.querySelector(".loader");d.addEventListener("submit",y);function y(s){if(s.preventDefault(),a.style.display="inline-block",l.innerHTML="",s.currentTarget.elements.search.value.trim()===""){a.style.display="none",c();return}const o=s.currentTarget.elements.search.value.trim();p(o).then(i=>{i.total===0&&(a.style.display="none",c()),a.style.display="none",l.insertAdjacentHTML("afterbegin",h(i.hits)),g()}).catch(i=>{a.style.display="none",u.error({position:"topRight",message:i.message,maxWidth:432})})}function c(){u.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:432}),l.innerHTML=""}function g(){new m(".list-item",{captions:!0,captionsData:"alt",captionDelay:150}).refresh()}
//# sourceMappingURL=index.js.map
