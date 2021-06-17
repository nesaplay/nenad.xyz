(window.webpackJsonp=window.webpackJsonp||[]).push([[14,6,7,9,13],{326:function(t,e,r){"use strict";r.r(e);var n={components:{},data:function(){return{}},props:{name:{type:String},photoURL:{type:String,required:!1}}},o=r(5),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("object",{attrs:{data:"https://ui-avatars.com/api/?uppercase=false&background=212324&color=4f46e5&rounded=true&name="+t.name,type:"image/png"}},[r("img",{attrs:{src:t.photoURL,alt:"user photo"}})])}),[],!1,null,null,null);e.default=component.exports},330:function(t,e,r){"use strict";r.r(e);var n=r(3),o=(r(21),{props:{slug:{type:String}},computed:{user:function(){return this.$store.state.user}},data:function(){return{count:0,total:0,buffer:0,id:""}},methods:{clapClicked:function(t){this.count=t,this.total++,this.buffer++,this.user||this.$toast.error("sign in please so we don't lose your likes",{duration:3e3,theme:"bubble"}),this.buffer>=2&&this.user&&(this.$store.dispatch("incrementLikes",{count:this.buffer,slug:this.slug,id:this.id}),this.buffer=0)},fetchLikes:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$config.firebase.enabled){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,t.$store.dispatch("fetchLikes",{slug:t.slug});case 5:r=e.sent,n=r.count,o=r.id,t.total=n,t.id=o,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})))()}},mounted:function(){this.fetchLikes()},watch:{user:function(t){t&&this.fetchLikes()}}}),c=r(5),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"space-y-2 flex flex-col items-center justify-center"},[r("vue-clap-button",{attrs:{"init-clicked":t.count,icon:"good",size:50,"max-click":10,"bg-color":"#18191a","color-active":"#fd2d78","color-normal":"#404345"},on:{clap:t.clapClicked}}),t._v(" "),r("p",{staticClass:"text-xs select-none text-gray-500"},[t._v(t._s(t.total))])],1)}),[],!1,null,"3560c5da",null);e.default=component.exports},331:function(t,e,r){"use strict";r.r(e);var n=r(3),o=(r(21),r(147),r(9),r(68),{props:{slug:{type:String}},computed:{user:function(){return this.$store.state.user}},data:function(){return{text:"",toastOptions:{duration:2e3,theme:"bubble"}}},methods:{postComment:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.user){e.next=3;break}return t.$toast.error("please sign in to post",t.toastOptions),e.abrupt("return");case 3:if(""!==t.text.trim()){e.next=6;break}return t.$toast.error("empty comments do not mean much",t.toastOptions),e.abrupt("return");case 6:if(!(t.text.trim().length>1e3)){e.next=9;break}return t.$toast.error("too long",t.toastOptions),e.abrupt("return");case 9:return e.prev=9,e.next=12,t.$store.dispatch("postComment",{text:t.text,slug:t.slug});case 12:r=e.sent,t.$toast.success(r,t.toastOptions),t.text="",e.next=20;break;case 17:e.prev=17,e.t0=e.catch(9),t.$toast.error(e.t0.toString(),t.toastOptions);case 20:case"end":return e.stop()}}),e,null,[[9,17]])})))()},reset:function(){this.text="",this.$refs.commentarea.focus()}}}),c=r(5),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"max-w-7xl"},[r("label",{staticClass:"block text-sm font-medium text-gray-600",attrs:{for:"comment"}}),t._v(" "),r("div",{staticClass:"mt-1"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],ref:"commentarea",staticClass:"block bg-gray-900 border-transparent text-gray-300 placeholder-gray-600 w-full rounded-md shadow-sm text-sm focus:ring-offset-transparent focus:ring-indigo-900",attrs:{id:"comment",name:"comment",rows:"4",placeholder:"did you like the post or have any questions? please share."},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),t._v(" "),r("p",{staticClass:"mt-3 text-sm text-blue-gray-500"})]),t._v(" "),r("div",{staticClass:"flex justify-end"},[r("button",{staticClass:"bg-gray-900 py-2 px-4 rounded-md shadow-sm text-xs font-medium text-blue-gray-900 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-transparent focus:ring-indigo-900",attrs:{type:"button"},on:{click:t.reset}},[t._v("reset")]),t._v(" "),r("button",{staticClass:"ml-3 inline-flex justify-center py-2 px-4 shadow-sm text-xs font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-transparent focus:ring-gray-900",attrs:{type:"button"},on:{click:t.postComment}},[t._v("post")])])])}),[],!1,null,"1193a4e4",null);e.default=component.exports},332:function(t,e,r){"use strict";r.r(e);var n=r(384),o={props:{comment:{type:Object}},computed:{posted:function(){return Object(n.a)(new Date(this.comment.created),new Date,{addSuffix:!0})}}},c=r(5),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex space-x-3 w-full rounded-md bg-gray-900 py-4 px-4"},[r("div",{staticClass:"flex-shrink-0"},[r("UserAvatar",{staticClass:"h-10 w-10 rounded-full",attrs:{name:t.comment.name}})],1),t._v(" "),r("div",{staticClass:"w-full"},[r("div",{staticClass:"text-xs flex justify-between flex-row"},[r("p",{staticClass:"font-medium text-gray-500"},[t._v(t._s(t.comment.name))]),t._v(" "),r("span",{staticClass:"text-gray-500 font-medium"},[t._v(t._s(t.posted))])]),t._v(" "),r("div",{staticClass:"mt-1 text-sm text-gray-300"},[r("p",[t._v(t._s(t.comment.text))])])])])}),[],!1,null,"6d09ed28",null);e.default=component.exports;installComponents(component,{UserAvatar:r(326).default})},343:function(t,e,r){var content=r(353);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("29098744",content,!0,{sourceMap:!1})},352:function(t,e,r){"use strict";r(343)},353:function(t,e,r){var n=r(29)((function(i){return i[1]}));n.push([t.i,'[data-v-8112eec4] .icon{display:none;--tw-text-opacity:1;color:rgba(79, 70, 229, var(--tw-text-opacity))}[data-v-8112eec4] .icon:hover{--tw-text-opacity:1;color:rgba(253, 45, 120, var(--tw-text-opacity))}[data-v-8112eec4] .breaker{padding-top:0.5rem;padding-bottom:0.5rem;text-align:center}[data-v-8112eec4] .breaker:after{content:"• • •"}[data-v-8112eec4] .nuxt-content .caption{text-align:center}[data-v-8112eec4] .nuxt-content img{margin-left:auto;margin-right:auto;border-radius:0.375rem}',""]),t.exports=n},389:function(t,e,r){"use strict";r.r(e);var n=r(66),o=r(3),c=(r(21),r(56),r(9),r(68),r(16),r(17),r(31),{asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,o=t.route,t.store,c=t.$config,e.next=3,r("posts",n.slug).fetch();case 3:return(l=e.sent).twitterShareUrl="https://twitter.com/intent/tweet?text=".concat(l.title," by @").concat(l.author.twitter,"&url=https://").concat(c.domain).concat(o.fullPath),e.abrupt("return",{post:l});case 6:case"end":return e.stop()}}),e)})))()},computed:{comments:function(){var t=Object(n.a)(this.$store.state.comments[this.post.slug]?this.$store.state.comments[this.post.slug]:[]);return t.sort(this.cmp)}},data:function(){return{toastOptions:{duration:2e3,theme:"bubble"}}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$config.firebase.enabled){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,t.$store.dispatch("fetchComments",{slug:t.post.slug});case 5:e.next=11;break;case 7:e.prev=7,e.t0=e.catch(2),t.$toast.error(e.t0.toString(),t.toastOptions),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,7]])})))()},head:function(){return{title:this.post.title+" -- blog -- ".concat(this.$config.name),meta:[{hid:"description",name:"description",content:this.post.description},{hid:"og:title",property:"og:title",content:this.post.title},{hid:"og:description",property:"og:description",content:this.post.description},{hid:"twitter:title",name:"twitter:title",content:this.post.title},{hid:"twitter:description",name:"twitter:description",content:this.post.description}]}},methods:{scrollToTop:function(){document.documentElement.scrollTo({top:0,behavior:"smooth"})},cmp:function(a,b){return a.created<b.created?1:a.created>b.created?-1:0}}}),l=(r(352),r(5)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"max-w-7xl mx-auto border-gray-700 border-dashed border-l border-r"},[r("div",{staticClass:"dark antialiased text-gray-200"},[r("div",{staticClass:"px-4 py-4 max-w-5xl mx-auto sm:px-6 lg:px-8"},[r("article",{attrs:{"data-aos":"fade-up"}},[r("div",{staticClass:"space-y-9"},[r("div",{staticClass:"py-0.5 border-t border-b border-dashed border-gray-700 flex items-center justify-between"},[r("div",{staticClass:"text-indigo-700 font-bold"},[r("nuxt-link",{staticClass:"hover:text-indigo-500",attrs:{to:t.localePath("/blog")}},[t._v(t._s(t.$t("blog.header")))]),t._v(" "),r("span",{staticClass:"text-gray-700"},[t._v("/")]),t._v(" "+t._s(t.post.category)+"\n            ")],1),t._v(" "),r("div",[r("a",{staticClass:"inline-flex items-center py-2 px-3 space-x-2 rounded-md bg-gray-900 text-gray-300 text-xs font-medium hover:text-gray-200 transition ease-in-out duration-100",attrs:{target:"_blank",rel:"noreferrer",href:t.post.twitterShareUrl}},[r("span",[t._v("Share on Twitter")]),r("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"}},[r("g",{attrs:{transform:"matrix(0.6666666666666666,0,0,0.6666666666666666,0,0)"}},[r("path",{attrs:{d:"M23.32,6.44c0.212-0.177,0.241-0.492,0.065-0.704c-0.068-0.082-0.161-0.14-0.265-0.166l-0.79-0.2 c-0.268-0.067-0.431-0.339-0.364-0.606C21.974,4.731,21.986,4.7,22,4.67l0.44-0.89c0.12-0.249,0.015-0.548-0.233-0.668 C22.099,3.06,21.976,3.049,21.86,3.08l-2,0.56c-0.151,0.044-0.314,0.014-0.44-0.08c-0.865-0.649-1.918-1-3-1c-2.761,0-5,2.239-5,5 l0,0v0.36c0.001,0.127-0.094,0.235-0.22,0.25C8.39,8.5,5.7,7.07,2.8,3.73c-0.128-0.142-0.325-0.2-0.51-0.15 C2.124,3.656,2.013,3.817,2,4C1.599,5.645,1.761,7.377,2.46,8.92c0.062,0.123,0.013,0.274-0.11,0.336 C2.303,9.279,2.251,9.288,2.2,9.28L1.08,9.06C0.807,9.016,0.551,9.202,0.507,9.474C0.498,9.533,0.499,9.592,0.51,9.65 c0.175,1.555,1.047,2.945,2.37,3.78c0.124,0.06,0.176,0.21,0.116,0.334c-0.025,0.051-0.065,0.092-0.116,0.116l-0.53,0.21 c-0.256,0.103-0.381,0.394-0.278,0.65c0.005,0.014,0.011,0.027,0.018,0.04c0.595,1.302,1.791,2.229,3.2,2.48 c0.13,0.047,0.197,0.191,0.15,0.32c-0.025,0.07-0.08,0.124-0.15,0.15C3.93,18.292,2.471,18.575,1,18.56 c-0.276-0.055-0.545,0.124-0.6,0.4s0.124,0.545,0.4,0.6l0,0c2.548,1.208,5.321,1.866,8.14,1.93c2.479,0.038,4.915-0.658,7-2 c3.484-2.326,5.571-6.241,5.56-10.43V8.19c0.001-0.147,0.067-0.286,0.18-0.38L23.32,6.44z",stroke:"none",fill:"currentColor","stroke-width":"0","stroke-linecap":"round","stroke-linejoin":"round"}})])])])])]),t._v(" "),r("div",{staticClass:"px-4 sm:px-0 lg:px-4 pb-4 bg-gray-900 rounded-lg"},[r("a",{attrs:{href:"https://twitter.com/gyankarn"}},[r("div",{staticClass:"flex flex-items-center justify-center  rounded-full"},[r("img",{staticClass:"w-12 h-12 border-2 border-indigo-600 hover:border-hot-pink -mt-5 bg-gray-900 rounded-full",attrs:{src:t.post.author.image,alt:"Author"}})])]),t._v(" "),r("header",{staticClass:"py-4"},[r("div",{staticClass:"space-y-1 text-center"},[r("div",[r("h1",{staticClass:"text-2xl font-extrabold text-gray-100 tracking-tight"},[t._v(t._s(t.post.title))])]),t._v(" "),r("dl",{},[r("div",[r("dt",{staticClass:"sr-only"},[t._v("Published on")]),t._v(" "),r("dd",{staticClass:"text-xs font-medium text-gray-500"},[r("a",{attrs:{target:"_blank",rel:"noreferrer",href:"https://twitter.com/"+t.post.author.twitter}},[r("span",{staticClass:"text-indigo-600 hover:text-indigo-300"},[t._v(t._s(t.post.author.name))])]),t._v(" "),r("time",{attrs:{datetime:t.post.createdAt}},[t._v(t._s(" on "+new Date(t.post.createdAt).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})))]),t._v(" "),r("span",{staticClass:"mx-1"},[t._v("\n                        ·\n                      ")]),t._v("\n                      "+t._s(t.post.readingTime)+"\n                    ")])])]),t._v(" "),r("div",{staticClass:"overflow-hidden flex flex-wrap items-center flex-row justify-center"},t._l(t.post.tags,(function(e,n){return r("div",{key:"tag-"+n,staticClass:"px-3 text-xs flex flex-shrink-0 py-1 mt-1 mr-2 bg-indigo-600 rounded-md hover:bg-indigo-700"},[t._v(t._s(e))])})),0)])]),t._v(" "),r("div",{staticClass:"prose dark:prose-dark break-words my-4 prose-sm max-w-4xl mx-auto"},[r("nuxt-content",{attrs:{document:t.post}})],1)])]),t._v(" "),t.$config.firebase.enabled?r("div",[r("div",{staticClass:"my-6"},[r("Like",{attrs:{slug:t.post.slug}})],1),t._v(" "),r("div",{staticClass:"border-t border-gray-700 border-dashed mt-6 py-5",attrs:{id:"comments"}},[r("CommentInput",{attrs:{slug:t.post.slug}})],1),t._v(" "),r("div",{staticClass:"space-y-4 max-w-7xl"},t._l(t.comments,(function(t,e){return r("Comment",{key:e,attrs:{comment:t}})})),1)]):t._e()])])]),t._v(" "),r("div",{staticClass:"cursor-pointer fixed z-50 bottom-4 right-4 w-8 w-8 rounded-full bg-gray-900 text-white block text-indigo-600 hover:text-hot-pink",on:{click:t.scrollToTop}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z","clip-rule":"evenodd"}})])])])}),[],!1,null,"8112eec4",null);e.default=component.exports;installComponents(component,{Like:r(330).default,CommentInput:r(331).default,Comment:r(332).default})}}]);