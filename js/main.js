!function(e){var t={};function n(c){if(t[c])return t[c].exports;var r=t[c]={i:c,l:!1,exports:{}};return e[c].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(c,r,function(t){return e[t]}.bind(null,r));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(module,exports,__webpack_require__){"use strict";eval('\nconst list = document.querySelector(\'.list--js\')\n\nfetch("https://api.github.com/users/kamilachoroszucha/repos?sort=created&direction=asc")\n  .then(resp => resp.json())\n  .then(resp => {\n    for (const repo of resp) {\n      const { name, html_url } = repo;\n      const upperName = name.toUpperCase();\n      \n      list.innerHTML += `<li class="list__item" ><div class="list__item--title">${upperName}:</div> <div class="list__item--address"><a class="list__item--link" href="${html_url}">${html_url}</a></div></li>`;\n     \n      \n    }\n  })\n  .catch(err =>\n    console.log(err))\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGlCQUFpQjtBQUM5Qjs7QUFFQSxrRkFBa0YsVUFBVSw2RUFBNkUsU0FBUyxJQUFJLFNBQVM7OztBQUcvTDtBQUNBLEdBQUc7QUFDSDtBQUNBIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC0tanMnKVxuXG5mZXRjaChcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMva2FtaWxhY2hvcm9zenVjaGEvcmVwb3M/c29ydD1jcmVhdGVkJmRpcmVjdGlvbj1hc2NcIilcbiAgLnRoZW4ocmVzcCA9PiByZXNwLmpzb24oKSlcbiAgLnRoZW4ocmVzcCA9PiB7XG4gICAgZm9yIChjb25zdCByZXBvIG9mIHJlc3ApIHtcbiAgICAgIGNvbnN0IHsgbmFtZSwgaHRtbF91cmwgfSA9IHJlcG87XG4gICAgICBjb25zdCB1cHBlck5hbWUgPSBuYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgICBcbiAgICAgIGxpc3QuaW5uZXJIVE1MICs9IGA8bGkgY2xhc3M9XCJsaXN0X19pdGVtXCIgPjxkaXYgY2xhc3M9XCJsaXN0X19pdGVtLS10aXRsZVwiPiR7dXBwZXJOYW1lfTo8L2Rpdj4gPGRpdiBjbGFzcz1cImxpc3RfX2l0ZW0tLWFkZHJlc3NcIj48YSBjbGFzcz1cImxpc3RfX2l0ZW0tLWxpbmtcIiBocmVmPVwiJHtodG1sX3VybH1cIj4ke2h0bWxfdXJsfTwvYT48L2Rpdj48L2xpPmA7XG4gICAgIFxuICAgICAgXG4gICAgfVxuICB9KVxuICAuY2F0Y2goZXJyID0+XG4gICAgY29uc29sZS5sb2coZXJyKSlcblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n')}]);