parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector("table"),n=e.tBodies[0],t=e.tHead,a=!0,r=function(e){return Number(e.slice(1).replace(",",""))};t.addEventListener("click",function(t){var c=Array.from(e.tBodies[0].rows),o=t.target.innerText,i=t.target.cellIndex;c.sort(function(e,n){var t=a?e.cells[i].innerText:n.cells[i].innerText,c=a?n.cells[i].innerText:e.cells[i].innerText;return"Salary"===o?r(t)-r(c):"string"==typeof t?t.localeCompare(c):t-c}),c.forEach(function(e){return n.append(e)}),a=!a}),n.addEventListener("click",function(e){var n=e.target.parentElement;n.classList.add("active"),n.addEventListener("mouseleave",function(){n.classList.remove("active")})}),document.body.insertAdjacentHTML("beforeend",'\n  <form class="new-employee-form">\n    <label>Name: <input name="name" type="text" data-qa="name"></label>\n\n    <label>Position: <input name="position" type="text" data-qa="position">\n    </label>\n\n    <label>Office:\n      <select name="office" data-qa="office">\n        <option>Tokyo</option>\n\n        <option>Singapore</option>\n\n        <option>London</option>\n\n        <option>New York</option>\n\n        <option>Edinburgh</option>\n\n        <option>San Francisco</option>\n      </select>\n    </label>\n\n    <label>Age: <input name="age" type="number" data-qa="age"></label>\n\n    <label>Salary: <input name="salary" type="number" data-qa="salary"></label>\n\n    <button>Save to table</button>\n  </form>');var c=function(e){var n=document.createElement("div");n.classList.add("notification",e),n.dataset.qa="notification";var t="success"===e?"Success!":"Error occurred!",a="success"===e?"New employee added.":"Please, enter correct data!";n.innerHTML='\n    <h2 class="title">'.concat(t,"</h2>\n    <p>").concat(a,"</p>"),document.body.append(n)},o=document.querySelector("button"),i=document.querySelector("[name = name]"),l=document.querySelector("[name = position]"),u=document.querySelector("[name = office]"),s=document.querySelector("[name = age]"),d=document.querySelector("[name = salary]"),m=function(e){return Number(e).toLocaleString("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0})},p=function(){switch(!0){case i.value.length<4:case Number(s.value)<18:case Number(s.value)>90:case d.value:case l.value:return!1;default:return!0}},v=function(){n.insertAdjacentHTML("beforeend","\n  <td>".concat(i.value,"</td>\n\n  <td>").concat(l.value,"</td>\n\n  <td>").concat(u.value,"</td>\n\n  <td>").concat(Number(s.value),"</td>\n\n  <td>").concat(m(d.value),"</td>\n")),i.value="",l.value="",u.value="",s.value="",d.value=""};o.addEventListener("click",function(e){e.preventDefault(),setTimeout(function(){document.querySelector(".notification").remove()},3e3),p()?(c("success"),v()):c("error")}),n.addEventListener("dblclick",function(e){var n=document.createElement("input"),t=e.target.cellIndex,a=Array.from(u.children).map(function(e){return e.innerHTML}),r=function(){var r=document.createElement("td");r.innerHTML=function(n){switch(!0){case!n.length:case 2===t&&!a.includes(n):case(3===t||4===t)&&isNaN(+n)||+n<=0:return e.target.innerHTML;case 4===t&&!isNaN(+n):return m(n);default:return n}}(n.value),n.replaceWith(r)};n.classList.add("cell-input"),n.value=e.target.innerHTML,e.target.replaceWith(n),n.addEventListener("blur",r),n.addEventListener("mouseout",r),n.addEventListener("keypress",function(e){"Enter"===e.key&&r()})});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.ce32cd2c.js.map