(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{287:function(t,e,r){"use strict";r.r(e);var n={props:{post:{type:Object}}},o=r(4),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nuxt-link",{staticClass:"flex transition duration-700 ease-in-out transform hover:translate-y-0.5 hover:scale-105 flex-col rounded-xl shadow-lg overflow-hidden",attrs:{to:t.localePath("/blog/"+t.post.slug)}},[r("div",{staticClass:"flex-1 bg-gray-900 p-5 flex flex-col justify-between"},[r("div",{staticClass:"flex-1"},[r("p",{staticClass:"text-xs font-medium text-hot-pink hover:text-hot-pink"},[r("a",{staticClass:"hover:underline hover:text-hot-pink",attrs:{href:"#"}},[t._v("\n            "+t._s(t.post.category)+"\n          ")])]),t._v(" "),r("div",[r("h3",{staticClass:"mt-0.5 text-md leading-7 font-semibold text-gray-200"},[t._v("\n            "+t._s(t.post.title)+"\n          ")]),t._v(" "),r("p",{staticClass:"mt-2 text-xs text-gray-400"},[t._v("\n            "+t._s(t.post.description)+"\n          ")])])]),t._v(" "),r("div",{staticClass:"mt-2 flex items-center"},[r("div",{staticClass:"flex-shrink-0"},[r("a",{attrs:{target:"_blank",rel:"noreferrer",href:"https://twitter.com/"+t.post.author.twitter}},[r("img",{staticClass:"h-9 w-9 rounded-full",attrs:{src:""+t.post.author.image,alt:"Author Photo"}})])]),t._v(" "),r("div",{staticClass:"ml-3"},[r("p",{staticClass:"text-xs font-medium text-gray-200"},[r("a",{staticClass:"hover:text-indigo-600",attrs:{target:"_blank",rel:"noreferrer",href:"https://twitter.com/"+t.post.author.twitter}},[t._v("\n              "+t._s(t.post.author.name)+"\n            ")])]),t._v(" "),r("div",{staticClass:"flex text-xs text-gray-300"},[r("time",{attrs:{datetime:t.post.createdAt}},[t._v("\n              "+t._s(new Date(t.post.createdAt).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}))+"\n            ")]),t._v(" "),r("span",{staticClass:"mx-1"},[t._v("\n              ·\n            ")]),t._v(" "),r("span",[t._v("\n              "+t._s(t.post.readingTime)+"\n            ")])])])])])])}),[],!1,null,"33c28b9e",null);e.default=component.exports}}]);