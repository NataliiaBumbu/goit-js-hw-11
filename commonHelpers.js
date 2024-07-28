import{S as d,i as g}from"./assets/vendor-8501dee5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();const m={method:"GET"},y="https://pixabay.com/api/?",h="45125188-29656ded7c12a384255e46c86";async function L(r){try{const t=new URLSearchParams({key:h,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),o=await fetch(y+t,m).then();if(!o.ok){u(c.error,l.orange);return}return await o.json()}catch(t){u(`${c.exception} ERROR:  ${t}`,l.orange)}}const c={info:"Please enter a value in the search field!",warning:"Sorry, there are no images matching your search query. Please try again!",error:"Sorry, there are no connection to the server. Please try again later! ",exception:"Exception: We have some issue with connection. Please try again later! "},l={blue:"#000000",orange:"#f28111",red:"#e97782"};function u(r,t){iziToast.info({position:"topRight",backgroundColor:`${t}`,message:`${r}`})}const S=new d(".gallery a",{captionsData:"alt",captionDelay:250});function w(r,t){t.innerHTML=b(r),S.refresh()}function b(r){return r.hits.map(({webformatURL:t,largeImageURL:o,tags:a,likes:e,views:n,comments:s,downloads:p})=>`<li class="gallery-item hvr-grow">
	 <a class="gallery-link" href="${o}">
	 <figure class="gallery-figure ">
	 <img class="gallery-image" src="${t}" alt="${a}" loading="lazy">
	 <figcaption class="gallery-figcaption">
	  <ul class="img-content-wrapper">
		<li>Likes<span>${e}</span></li>
		<li>Views<span>${n}</span></li>
		<li>Comments<span>${s}</span></li>
		<li>Downloads<span>${p}</span></li>
	   </ul>
	 </figcaption>
	 </figure>
	 </a>
	 </li>`).join("")}const E=document.querySelector(".search-form"),i=document.querySelector(".gallery"),f=document.createElement("div");E.addEventListener("submit",P);async function P(r){r.preventDefault(),g.destroy(),i.innerHTML="",$();const t=new FormData(r.target),{search:o}=Object.fromEntries(t.entries());if(!o.trim()){u(c.info,l.blue),i.innerHTML="";return}try{const a=await L(o.trim());O(a)&&w(a,i)}catch(a){u(c.exception+a,l.orange)}r.target.reset()}function $(){f.classList.add("loader"),i.append(f)}function O(r){return r?r&&r.totalHits===0?(u(c.warning,l.red),i.innerHTML="",!1):!0:(i.innerHTML="",!1)}
//# sourceMappingURL=commonHelpers.js.map
