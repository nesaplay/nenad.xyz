(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{289:function(t,e,o){"use strict";o.r(e);var r=o(2),n=(o(104),o(42),{props:{slug:{type:String}},computed:{user(){return this.$store.state.user}},data:()=>({text:"",toastOptions:{duration:2e3,theme:"bubble"}}),methods:{postComment(){var t=this;return Object(r.a)((function*(){if(t.user)if(""!==t.text.trim())if(t.text.trim().length>1e3)t.$toast.error("too long",t.toastOptions);else try{var e=yield t.$store.dispatch("postComment",{text:t.text,slug:t.slug});t.$toast.success(e,t.toastOptions),t.text=""}catch(e){t.$toast.error(e.toString(),t.toastOptions)}else t.$toast.error("empty comments do not mean much",t.toastOptions);else t.$toast.error("please sign in to post",t.toastOptions)}))()},reset(){this.text="",this.$refs.commentarea.focus()}}}),c=o(4),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"max-w-7xl"},[o("label",{staticClass:"block text-sm font-medium text-gray-600",attrs:{for:"comment"}}),t._v(" "),o("div",{staticClass:"mt-1"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],ref:"commentarea",staticClass:"block bg-gray-900 border-transparent text-gray-300 placeholder-gray-600 w-full rounded-md shadow-sm text-sm focus:ring-offset-transparent focus:ring-indigo-900",attrs:{id:"comment",name:"comment",rows:"4",placeholder:"did you like the post or have any questions? please share."},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),t._v(" "),o("p",{staticClass:"mt-3 text-sm text-blue-gray-500"})]),t._v(" "),o("div",{staticClass:"flex justify-end"},[o("button",{staticClass:"bg-gray-900 py-2 px-4 rounded-md shadow-sm text-xs font-medium text-blue-gray-900 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-transparent focus:ring-indigo-900",attrs:{type:"button"},on:{click:t.reset}},[t._v("reset")]),t._v(" "),o("button",{staticClass:"ml-3 inline-flex justify-center py-2 px-4 shadow-sm text-xs font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-transparent focus:ring-gray-900",attrs:{type:"button"},on:{click:t.postComment}},[t._v("post")])])])}),[],!1,null,"1193a4e4",null);e.default=component.exports}}]);