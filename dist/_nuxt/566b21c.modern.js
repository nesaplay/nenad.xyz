(window.webpackJsonp=window.webpackJsonp||[]).push([[6,13],{284:function(t,e,n){"use strict";n.r(e);var r={components:{},data:()=>({}),props:{name:{type:String},photoURL:{type:String,required:!1}}},o=n(4),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("object",{attrs:{data:"https://ui-avatars.com/api/?uppercase=false&background=212324&color=4f46e5&rounded=true&name="+t.name,type:"image/png"}},[n("img",{attrs:{src:t.photoURL,alt:"user photo"}})])}),[],!1,null,null,null);e.default=component.exports},290:function(t,e,n){"use strict";n.r(e);var r=n(333),o={props:{comment:{type:Object}},computed:{posted(){return Object(r.a)(new Date(this.comment.created),new Date,{addSuffix:!0})}}},l=n(4),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex space-x-3 w-full rounded-md bg-gray-900 py-4 px-4"},[n("div",{staticClass:"flex-shrink-0"},[n("UserAvatar",{staticClass:"h-10 w-10 rounded-full",attrs:{name:t.comment.name}})],1),t._v(" "),n("div",{staticClass:"w-full"},[n("div",{staticClass:"text-xs flex justify-between flex-row"},[n("p",{staticClass:"font-medium text-gray-500"},[t._v(t._s(t.comment.name))]),t._v(" "),n("span",{staticClass:"text-gray-500 font-medium"},[t._v(t._s(t.posted))])]),t._v(" "),n("div",{staticClass:"mt-1 text-sm text-gray-300"},[n("p",[t._v(t._s(t.comment.text))])])])])}),[],!1,null,"6d09ed28",null);e.default=component.exports;installComponents(component,{UserAvatar:n(284).default})}}]);