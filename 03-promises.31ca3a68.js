function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const n=t.target.delay.value,o=t.target.step.value,r=t.target.amount.value;let l=0,a=Number(n)-Number(o);setTimeout((()=>{const t=setInterval((()=>{var n,u;l+=1,a+=Number(o),(n=o,u=r,new Promise(((e,t)=>{Math.random()>.3?e({position:n,delay:u}):t({position:n,delay:u})}))).then((({position:t,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${l} in ${a}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`❌ Rejected promise ${l} in ${a}ms`)})),l>=r&&clearInterval(t)}),o)}),n)}));
//# sourceMappingURL=03-promises.31ca3a68.js.map
