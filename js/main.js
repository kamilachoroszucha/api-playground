!function(e){var t={};function n(c){if(t[c])return t[c].exports;var i=t[c]={i:c,l:!1,exports:{}};return e[c].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(c,i,function(t){return e[t]}.bind(null,i));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(module,exports,__webpack_require__){"use strict";eval('\nconst list = document.querySelector(\'.list--js\')\n\nfetch("https://api.github.com/users/kamilachoroszucha/repos?sort=created&direction=desc")\n  .then(resp => resp.json())\n  .then(resp => {\n    for (const repo of resp) {\n      const { name, html_url } = repo;\n\n      list.innerHTML += `<li class="list__item" ><div class="list__item--title">${name.toUpperCase()}:</div> <div class="list__item--address"><a class="list__item--link" href="${html_url}">${html_url}</a></div></li>`;\n  \n    }\n  })\n  .catch(err =>\n    console.log(err))\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGlCQUFpQjs7QUFFOUIsa0ZBQWtGLG1CQUFtQiw2RUFBNkUsU0FBUyxJQUFJLFNBQVM7O0FBRXhNO0FBQ0EsR0FBRztBQUNIO0FBQ0EiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LS1qcycpXG5cbmZldGNoKFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9rYW1pbGFjaG9yb3N6dWNoYS9yZXBvcz9zb3J0PWNyZWF0ZWQmZGlyZWN0aW9uPWRlc2NcIilcbiAgLnRoZW4ocmVzcCA9PiByZXNwLmpzb24oKSlcbiAgLnRoZW4ocmVzcCA9PiB7XG4gICAgZm9yIChjb25zdCByZXBvIG9mIHJlc3ApIHtcbiAgICAgIGNvbnN0IHsgbmFtZSwgaHRtbF91cmwgfSA9IHJlcG87XG5cbiAgICAgIGxpc3QuaW5uZXJIVE1MICs9IGA8bGkgY2xhc3M9XCJsaXN0X19pdGVtXCIgPjxkaXYgY2xhc3M9XCJsaXN0X19pdGVtLS10aXRsZVwiPiR7bmFtZS50b1VwcGVyQ2FzZSgpfTo8L2Rpdj4gPGRpdiBjbGFzcz1cImxpc3RfX2l0ZW0tLWFkZHJlc3NcIj48YSBjbGFzcz1cImxpc3RfX2l0ZW0tLWxpbmtcIiBocmVmPVwiJHtodG1sX3VybH1cIj4ke2h0bWxfdXJsfTwvYT48L2Rpdj48L2xpPmA7XG4gIFxuICAgIH1cbiAgfSlcbiAgLmNhdGNoKGVyciA9PlxuICAgIGNvbnNvbGUubG9nKGVycikpXG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n')}]);