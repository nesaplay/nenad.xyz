(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{327:function(t,e,n){var content=n(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("0e987878",content,!0,{sourceMap:!1})},333:function(t,e,n){"use strict";n(327)},334:function(t,e,n){var o=n(29)((function(i){return i[1]}));o.push([t.i,".buttons[data-v-99aa8488]{margin-left:0!important;margin-right:0!important}.content[data-v-99aa8488]{padding:12px}",""]),t.exports=o},347:function(t,e,n){"use strict";n.r(e);n(338),n(148);var o=n(339),c=n.n(o),d=(n(340),{props:{src:{type:String,required:!0}},components:{pdf:c.a},data:function(){return{page:1,numPages:0,pdfdata:void 0,errors:[],scale:"page-width"}},computed:{formattedZoom:function(){return Number.parseInt(100*this.scale)}},mounted:function(){this.getPdf()},watch:{show:function(s){s&&this.getPdf()},page:function(p){(window.pageYOffset<=this.findPos(document.getElementById(p))||document.getElementById(p+1)&&window.pageYOffset>=this.findPos(document.getElementById(p+1)))&&document.getElementById(p).scrollIntoView()}},methods:{handle_pdf_link:function(t){document.getElementById(String(t.pageNumber)).scrollIntoView()},getPdf:function(){var t=this,e=this;e.pdfdata=c.a.createLoadingTask(this.src),e.pdfdata.then((function(n){e.numPages=n.numPages,window.onscroll=function(){d(),c()};var o=t.$refs.buttons.offsetTop,c=function(){window.pageYOffset>=o?t.$refs.buttons.classList.remove("hidden"):t.$refs.buttons.classList.add("hidden")},d=function(){var i=1,t=Number(n.numPages);do{window.pageYOffset>=e.findPos(document.getElementById(i))&&window.pageYOffset<=e.findPos(document.getElementById(i+1))&&(e.page=i),i++}while(i<t);window.pageYOffset>=e.findPos(document.getElementById(i))&&(e.page=i)}}))},findPos:function(t){return t&&t.offsetTop?t.offsetTop:0}}}),r=(n(341),n(333),n(5)),component=Object(r.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"pdfvuer"}},[n("div",{ref:"buttons",staticClass:"ui grey three item inverted bottom fixed menu transition hidden"},[n("a",{staticClass:"item",on:{click:function(e){!(t.page>1)||t.page--}}},[n("i",{staticClass:"left chevron icon"}),t._v("\n      Back\n    ")]),t._v(" "),n("a",{staticClass:"ui active item"},[t._v("\n      "+t._s(t.page)+" / "+t._s(t.numPages?t.numPages:"∞")+"\n    ")]),t._v(" "),n("a",{staticClass:"item",on:{click:function(e){!(t.page<t.numPages)||t.page++}}},[t._v("\n      Forward\n      "),n("i",{staticClass:"right chevron icon"})])]),t._v(" "),n("div",{ref:"buttons",staticClass:"ui grey three item inverted bottom fixed menu transition hidden"},[n("a",{staticClass:"item",on:{click:function(e){t.scale-=t.scale>.2?.1:0}}},[n("i",{staticClass:"left chevron icon"}),t._v("\n        Zoom -\n    ")]),t._v(" "),n("a",{staticClass:"ui active item"},[t._v("\n      "+t._s(t.formattedZoom)+" %\n    ")]),t._v(" "),n("a",{staticClass:"item",on:{click:function(e){t.scale+=t.scale<2?.1:0}}},[t._v("\n      Zoom +\n      "),n("i",{staticClass:"right chevron icon"})])]),t._v(" "),t._l(t.numPages,(function(i){return n("pdf",{key:i,staticStyle:{width:"100%",margin:"8px auto"},attrs:{src:t.pdfdata,id:i,page:i,scale:t.scale,annotation:!0,resize:!0},on:{"update:scale":function(e){t.scale=e},"link-clicked":t.handle_pdf_link}},[n("template",{slot:"loading"},[t._v("\n      loading content here...\n    ")])],2)}))],2)}),[],!1,null,"99aa8488",null);e.default=component.exports}}]);