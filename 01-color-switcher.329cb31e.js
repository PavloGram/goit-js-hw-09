const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=document.querySelector("body");t.addEventListener("click",(function(e){r=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.setAttribute("disabled","disabled")})),e.addEventListener("click",(function(){clearTimeout(r),t.removeAttribute("disabled")}));let r=0;
//# sourceMappingURL=01-color-switcher.329cb31e.js.map