function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,r){if(e){if("string"==typeof e)return t(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var r=document.querySelector("table");function n(t){var n=r.tBodies[0],o=e(n.rows),a=document.createElement("tbody"),c=[];switch(t.target.textContent){case"Name":c=o.sort(function(t,e){return t.cells[0].textContent.localeCompare(e.cells[0].textContent)});break;case"Position":c=o.sort(function(t,e){return t.cells[1].textContent.localeCompare(e.cells[1].textContent)});break;case"Age":c=o.sort(function(t,e){return+t.cells[2].textContent-+e.cells[2].textContent});break;case"Salary":c=o.sort(function(t,e){return+t.cells[3].textContent.replace(/\D/g,"")-+e.cells[3].textContent.replace(/\D/g,"")})}c.forEach(function(t){return a.appendChild(t)}),r.replaceChild(a,n)}e(r.tHead.rows[0].cells).forEach(function(t){t.addEventListener("click",n)});
//# sourceMappingURL=index.4da68d77.js.map
