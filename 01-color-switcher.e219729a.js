const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");t.addEventListener("click",(function(e){return o=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,t.setAttribute("disabled","disabled")}),1e3)})),e.addEventListener("click",(function(){clearTimeout(o),t.removeAttribute("disabled")}));let o=0;
//# sourceMappingURL=01-color-switcher.e219729a.js.map
