(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{288:function(t,e,c){"use strict";c.r(e);var o=c(2),r={props:{slug:{type:String}},computed:{user(){return this.$store.state.user}},data:()=>({count:0,total:0,buffer:0,id:""}),methods:{clapClicked(t){this.count=t,this.total++,this.buffer++,this.user||this.$toast.error("sign in please so we don't lose your likes",{duration:3e3,theme:"bubble"}),this.buffer>=2&&this.user&&(this.$store.dispatch("incrementLikes",{count:this.buffer,slug:this.slug,id:this.id}),this.buffer=0)},fetchLikes(){var t=this;return Object(o.a)((function*(){if(t.$config.firebase.enabled)try{var{count:e,id:c}=yield t.$store.dispatch("fetchLikes",{slug:t.slug});t.total=e,t.id=c}catch(t){console.error(t)}}))()}},mounted(){this.fetchLikes()},watch:{user(t){t&&this.fetchLikes()}}},l=c(4),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"space-y-2 flex flex-col items-center justify-center"},[c("vue-clap-button",{attrs:{"init-clicked":t.count,icon:"good",size:50,"max-click":10,"bg-color":"#18191a","color-active":"#fd2d78","color-normal":"#404345"},on:{clap:t.clapClicked}}),t._v(" "),c("p",{staticClass:"text-xs select-none text-gray-500"},[t._v(t._s(t.total))])],1)}),[],!1,null,"3560c5da",null);e.default=component.exports}}]);