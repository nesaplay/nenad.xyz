(window.webpackJsonp=window.webpackJsonp||[]).push([[16,8],{286:function(t,e,r){var content=r(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("292a2e21",content,!0,{sourceMap:!1})},294:function(t,e,r){"use strict";r(286)},295:function(t,e,r){var o=r(16)((function(i){return i[1]}));o.push([t.i,"[data-v-5416bd70] .vue-typer .custom.char{--tw-text-opacity:1;color:rgba(79, 70, 229, var(--tw-text-opacity))}[data-v-5416bd70] .vue-typer .custom.char.selected{--tw-bg-opacity:1;background-color:rgba(79, 70, 229, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}[data-v-5416bd70] .vue-typer .custom.caret{width:5px;--tw-bg-opacity:1;background-color:rgba(79, 70, 229, var(--tw-bg-opacity))}.hover-arrow[data-v-5416bd70]{position:relative;stroke-width:1px}",""]),t.exports=o},306:function(t,e,r){"use strict";r.r(e);r(104),r(13);var o={data:()=>({email:"",firstName:"",lastName:"",isLoading:!1}),methods:{subscribeUser(){this.isLoading=!0;var data={email:this.email.trim(),first_name:this.firstName.trim(),last_name:this.lastName.trim()};if(console.debug(data),""===this.email.trim())return this.$toast.show("please enter your email address",{duration:2e3,theme:"bubble"}),void(this.isLoading=!1);fetch("https://bfi6exs27j.execute-api.ap-south-1.amazonaws.com/v1/subscribers",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)}).then((t=>t.json())).then((data=>{console.debug(data),this.$toast.success(data.body.message,{duration:3e3}),this.isLoading=!1,this.email="",this.firstName="",this.lastName=""}))}}},l=(r(294),r(4)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative bg-gray-800 overflow-hidden"},[r("div",{staticClass:"relative"},[r("main",{},[r("div",{staticClass:"mx-auto py-8 max-w-7xl border-l border-r border-dashed border-gray-700"},[r("div",{staticClass:"lg:grid lg:grid-cols-12",attrs:{"data-aos":"zoom-in"}},[r("div",{staticClass:"px-4 sm:px-6 lg:border-r lg:border-dashed lg:border-gray-700 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center"},[r("div",[t.$config.blog.enabled?r("nuxt-link",{staticClass:"group inline-flex hover:bg-black items-center text-white bg-gray-900 rounded-full p-0.5 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200",attrs:{to:t.localePath("/blog")}},[r("span",{staticClass:"px-3 py-0.5 text-white text-xs font-semibold leading-5 tracking-wide bg-indigo-600 rounded-full"},[t._v(t._s(t.$t("hero.iBlogTech")))]),t._v(" "),r("span",{staticClass:"ml-4 text-xs"},[t._v(t._s(t.$t("hero.haveALook")))]),t._v(" "),r("svg",{staticClass:"transition duration-500 transform block group-hover:rotate-180 hover-arrow ml-2 w-5 h-5 text-gray-500",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])]):t._e(),t._v(" "),r("h1",{staticClass:"mt-4 text-3xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-3xl"},[r("span",{staticClass:"md:block"},[t._v(t._s(t.$t("hero.friendlyNeighborhood")))]),t._v(" "),r("div",[r("vue-typer",{attrs:{text:t.$t("hero.words")}})],1)]),t._v(" "),r("p",{staticClass:"mt-3 text-base text-gray-300 sm:mt-5"},[t._v("\n                "+t._s(t.$t("hero.description"))+"\n              ")]),t._v(" "),t.$config.workedAt.enabled?r("p",{staticClass:"mt-8 text-sm text-white lowercase tracking-wide font-semibold sm:mt-10"},[t._v("Worked at")]):t._e(),t._v(" "),t.$config.workedAt.enabled?r("div",{staticClass:"mt-5 w-full sm:mx-auto lg:ml-0"},[r("div",{staticClass:"flex flex-wrap space-x-1 items-start items-center space-x-10"},t._l(t.$config.workedAt.meta,(function(t,e){return r("div",{key:e},[r("a",{staticClass:"flex items-center justify-center",attrs:{href:t.url,target:"_blank",rel:"noreferrer"}},[r("img",{staticClass:"h-8 rounded-sm sm:h-9",attrs:{src:t.src,alt:t.name}})])])})),0)]):t._e()],1)]),t._v(" "),r("div",{staticClass:"mt-8 px-5 sm:mt-16 lg:mt-0 lg:col-span-6"},[r("div",{staticClass:"flex-shrink-0 w-full sm:mx-auto flex flex-1 items-center justify-center rounded-lg sm:overflow-hidden"},[r("img",{staticClass:"rounded-md h-80",attrs:{src:t.$config.image,alt:t.$config.name}})])])])])])])])}),[],!1,null,"5416bd70",null);e.default=component.exports},340:function(t,e,r){"use strict";r.r(e);var o=r(2),l={head(){return{title:"home -- ".concat(this.$config.name)}},data:()=>({posts:null}),created(){var t=this;return Object(o.a)((function*(){var e="fetchAllPosts";console.time(e);try{var r=yield t.$content("posts").without(["body","toc","dir","extension","path","tags"]).limit(3).skip(0).sortBy("createdAt","desc").fetch();t.posts=r}catch(t){console.error(t)}finally{console.timeEnd(e)}}))()}},n=r(4),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("HeroSection"),t._v(" "),t.$config.social.github?r("GithubCalendar"):t._e(),t._v(" "),t.$config.blog.enabled&&t.posts?r("LazyRecentBlog",{attrs:{posts:t.posts}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeroSection:r(306).default,GithubCalendar:r(331).default})}}]);