(function(t){function e(e){for(var a,o,r=e[0],u=e[1],s=e[2],l=0,m=[];l<r.length;l++)o=r[l],c[o]&&m.push(c[o][0]),c[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);p&&p(e);while(m.length)m.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var r=n[o];0!==c[r]&&(a=!1)}a&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},o={app:0},c={app:0},i=[];function r(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-00281336":"441267a8","chunk-121ae9a8":"6fe24c76","chunk-19249ced":"dc5386b6","chunk-250670f9":"f868fcfc","chunk-2d21a9c7":"6a8e08c0","chunk-2f42dd70":"8f878282","chunk-3e83eb0c":"07178911","chunk-434bdd9c":"2820070a","chunk-4ba3a103":"211eb7aa","chunk-53109738":"457fd3f4","chunk-64054d42":"c6e11242","chunk-7a79ad25":"d4cf4d67","chunk-90cfa3ba":"257881e7","chunk-b7c486ec":"ac97123e","chunk-c540245e":"421d02b6","chunk-d9082150":"149a17f8","chunk-dc3afe2a":"3ef23ed4"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-00281336":1,"chunk-121ae9a8":1,"chunk-19249ced":1,"chunk-250670f9":1,"chunk-2f42dd70":1,"chunk-3e83eb0c":1,"chunk-434bdd9c":1,"chunk-4ba3a103":1,"chunk-53109738":1,"chunk-64054d42":1,"chunk-7a79ad25":1,"chunk-90cfa3ba":1,"chunk-b7c486ec":1,"chunk-c540245e":1,"chunk-d9082150":1,"chunk-dc3afe2a":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-00281336":"b02bdf7e","chunk-121ae9a8":"030d3415","chunk-19249ced":"ea0cb222","chunk-250670f9":"d797e331","chunk-2d21a9c7":"31d6cfe0","chunk-2f42dd70":"32d3838f","chunk-3e83eb0c":"7a1173f1","chunk-434bdd9c":"8bc3997e","chunk-4ba3a103":"704dbd33","chunk-53109738":"e6602943","chunk-64054d42":"735c3c47","chunk-7a79ad25":"d9869741","chunk-90cfa3ba":"a7a1c545","chunk-b7c486ec":"eb7684eb","chunk-c540245e":"cc53a5d5","chunk-d9082150":"2371e893","chunk-dc3afe2a":"c894d713"}[t]+".css",o=u.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var r=c[i],s=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(s===a||s===o))return e()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){r=l[i],s=r.getAttribute("data-href");if(s===a||s===o)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var a=e&&e.target&&e.target.src||o,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.request=a,n(c)},m.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(m)}).then(function(){o[t]=0}));var a=c[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise(function(e,n){a=c[t]=[e,n]});e.push(a[2]=i);var s,l=document.getElementsByTagName("head")[0],m=document.createElement("script");m.charset="utf-8",m.timeout=120,u.nc&&m.setAttribute("nonce",u.nc),m.src=r(t),s=function(e){m.onerror=m.onload=null,clearTimeout(p);var n=c[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+a+": "+o+")");i.type=a,i.request=o,n[1](i)}c[t]=void 0}};var p=setTimeout(function(){s({type:"timeout",target:m})},12e4);m.onerror=m.onload=s,l.appendChild(m)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var m=0;m<s.length;m++)e(s[m]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"06a3":function(t,e,n){"use strict";var a=n("f9c9"),o=n.n(a);o.a},"07a4":function(t,e,n){"use strict";var a=n("2b0e"),o=n("2f62");a["a"].use(o["a"]),e["a"]=new o["a"].Store({state:{id:"",name:"",user_id:"",user_phone:"",user_name:"",isLoading:!1,token:"",network:!0,bottomNav:{active:0,arr:[{to:"/",icon:{normal:"https://pic.qianxiangbank.com/waps/images/bottom-nav-main.png",active:"https://pic.qianxiangbank.com/waps/images/bottom-nav-main-act.png"}},{to:"/topics",icon:{normal:"https://pic.qianxiangbank.com/waps/images/bottom-nav-myaccount.png",active:"https://pic.qianxiangbank.com/waps/images/bottom-nav-myaccount-act.png"}},{to:"/my",icon:{normal:"https://pic.qianxiangbank.com/waps/images/bottom-nav-myaccount.png",active:"https://pic.qianxiangbank.com/waps/images/bottom-nav-myaccount-act.png"}}]},isBack:!1,topHomeNavPath:"",homeNav:0,backPath:""},mutations:{changeNetwork:function(t,e){t.network=e},loginSuccess:function(t,e){t.token=e},changeBottomNav:function(t,e){t.bottomNav.arr[0].to=e},changeBottomActive:function(t,e){t.bottomNav.active=e},changeBack:function(t,e){t.isBack=e},changeBackPath:function(t,e){t.backPath=e},changeHomeNav:function(t,e){t.homeNav=e},setUserInfo:function(t,e,n){t.id=e,t.name=n},changeLoading:function(t,e){t.isLoading=e}},actions:{}})},12:function(t,e){},13:function(t,e){},14:function(t,e){},15:function(t,e){},"232d":function(t,e,n){"use strict";var a=n("449d"),o=n.n(a);o.a},2856:function(t,e,n){},4493:function(t,e,n){},"449d":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d"),n("cf34");var a,o=n("2b0e"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("nav-top-bar",{attrs:{"nav-title-word":t.navTitle}}),n("router-view"),n("nav-bottom-bar",{attrs:{tabbar:t.tabbar,"show-bottom-nav":t.showBottomNav}})],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showBottomNav,expression:"showBottomNav"}],staticClass:"nav-bottom-padding"},[n("div",{staticClass:"nav-bottom"},[n("van-tabbar",{model:{value:t.tabbar.active,callback:function(e){t.$set(t.tabbar,"active",e)},expression:"tabbar.active"}},[n("van-tabbar-item",{attrs:{to:t.tabbar.list[0].to},on:{click:function(e){t.changeTabbar(0)}},scopedSlots:t._u([{key:"icon",fn:function(e){return n("img",{attrs:{src:e.active?t.tabbar.list[0].icon.active:t.tabbar.list[0].icon.normal}})}}])},[n("span",[t._v("社区")])]),n("van-tabbar-item",{attrs:{to:t.tabbar.list[1].to},on:{click:function(e){t.changeTabbar(1)}},scopedSlots:t._u([{key:"icon",fn:function(e){return n("img",{attrs:{src:e.active?t.tabbar.list[1].icon.active:t.tabbar.list[1].icon.normal}})}}])},[n("span",[t._v("话题")])]),n("van-tabbar-item",{attrs:{to:t.tabbar.list[2].to},on:{click:function(e){t.changeTabbar(2)}},scopedSlots:t._u([{key:"icon",fn:function(e){return n("img",{attrs:{src:e.active?t.tabbar.list[2].icon.active:t.tabbar.list[2].icon.normal}})}}])},[n("span",[t._v("我的")])])],1)],1)])])},u=[],s=n("88d8"),l=(n("a52c"),n("2ed4")),m=(n("7f7f"),n("537a"),n("ac28")),p={name:"NavBottomBar",components:(a={},Object(s["a"])(a,m["a"].name,m["a"]),Object(s["a"])(a,l["a"].name,l["a"]),a),props:{tabbar:{type:Object},showBottomNav:{type:Boolean}},methods:{changeTabbar:function(t){this.$store.commit("changeBottomActive",t)}}},h=p,d=(n("06a3"),n("2877")),f=Object(d["a"])(h,r,u,!1,null,"0c8ce317",null);f.options.__file="NavBottomBarComponent.vue";var g=f.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"nav-top-padding"},[n("div",{staticClass:"nav-top"},[n("van-nav-bar",{attrs:{title:t.navTitleWord,"left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}})],1)])])},v=[],k=(n("5246"),n("6b41")),y={name:"NavTopBar",components:Object(s["a"])({},k["a"].name,k["a"]),data:function(){return{}},props:{navTitleWord:{type:String}},methods:{onClickLeft:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/")},onClickRight:function(){}}},w=y,T=(n("aff3"),Object(d["a"])(w,b,v,!1,null,"cde80784",null));T.options.__file="NavTopBarComponent.vue";var N=T.exports,j={components:{NavTopBar:N,NavBottomBar:g},data:function(){return{navTitle:this.$route.meta.navTopTitle,showBottomNav:this.$route.meta.navBottom,tabbar:{active:0,list:[]},isLoading:!1}},created:function(){this.tabbar.active=this.$store.state.bottomNav.active,this.tabbar.list=this.$store.state.bottomNav.arr},watch:{$route:{handler:function(t,e){this.navTitle=t.meta.navTopTitle||"钱香社区",this.showBottomNav=t.meta.navBottom||!1;var n=this.$route.meta.navBottomActive;void 0!==n&&this.$store.commit("changeBottomActive",n),this.tabbar.active=this.$store.state.bottomNav.active},deep:!0}}},B=j,q=(n("5c0b"),Object(d["a"])(B,c,i,!1,null,null,null));q.options.__file="App.vue";var I,x=q.exports,A=(n("a481"),n("f210")),C=n("8c4f"),O=n("07a4"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-hot"},[n("div",{staticClass:"change-tab"},[n("van-tabs",{attrs:{lineWidth:65,sticky:""},on:{click:t.changeTab},model:{value:t.$store.state.homeNav,callback:function(e){t.$set(t.$store.state,"homeNav",e)},expression:"$store.state.homeNav"}},[n("van-tab",{staticClass:"change-tab",attrs:{title:t.homeTopTab[0]}}),n("van-tab",{staticClass:"change-tab",attrs:{title:t.homeTopTab[1]}})],1)],1),n("router-view")],1)},L=[],S=(n("da3c"),n("0b33")),$=(n("bda7"),n("5e46")),D={name:"HomeIndex",components:(I={},Object(s["a"])(I,$["a"].name,$["a"]),Object(s["a"])(I,S["a"].name,S["a"]),I),data:function(){return{homeTopTab:["热门","钱香动态"],activeName:"first"}},created:function(){},methods:{changeTab:function(t,e){0===t?(this.$router.replace("/home"),this.$store.commit("changeBottomNav","/home")):(this.$router.replace("/home/dynamic"),this.$store.commit("changeBottomNav","/home/dynamic")),this.$store.commit("changeHomeNav",t)}},watch:{"$route.meta":function(t,e){console.log(this.$route)}}},P=D,R=(n("232d"),Object(d["a"])(P,_,L,!1,null,null,null));R.options.__file="HomeIndex.vue";var E=R.exports,H=[{path:"/",name:"index",redirect:"/home"},{path:"/home",component:E,children:[{path:"",name:"HomeHot",component:function(){return n.e("chunk-2f42dd70").then(n.bind(null,"520f"))},meta:{requiresAuth:!0,navTop:!0,navTopTitle:"钱香社区",navBottom:!0,navBottomActive:0}},{path:"dynamic",name:"dynamic",component:function(){return n.e("chunk-00281336").then(n.bind(null,"c1ca"))},meta:{requiresAuth:!0,navTop:!0,navTopTitle:"钱香社区",navBottom:!0,navBottomActive:0}}]},{path:"/dyitem",name:"DyItem",component:function(){return n.e("chunk-90cfa3ba").then(n.bind(null,"c0a1"))},meta:{requiresAuth:!0,navTop:!0,navTopTitle:"钱香社区",navBottom:!1}},{path:"/detail",name:"detail",component:function(){return n.e("chunk-7a79ad25").then(n.bind(null,"a7dc"))},meta:{requiresAuth:!0,navTop:!0,navTopTitle:"内容详情",navBottom:!1}},{path:"/compose",name:"compose",component:function(){return n.e("chunk-64054d42").then(n.bind(null,"e5a5"))},meta:{requiresAuth:!0,navTop:!0,navTopTitle:"发帖",navBottom:!1}}],z=H,Q=[{path:"/login",name:"login",meta:{navTop:!0,navBottom:!1,navTopTitle:"登录"},component:function(){return n.e("chunk-121ae9a8").then(n.bind(null,"3bea"))}}],F=Q,Y=[{path:"/topics",component:function(){return n.e("chunk-2d21a9c7").then(n.bind(null,"bbf7"))},children:[{path:"",name:"topics",component:function(){return n.e("chunk-434bdd9c").then(n.bind(null,"b071"))},meta:{requiresAuth:!0,navTop:!0,navTopTitle:"钱香社区",navBottom:!0,navBottomActive:1}},{path:"item",name:"item",component:function(){return n.e("chunk-c540245e").then(n.bind(null,"d97e"))},meta:{requiresAuth:!0,navTop:!0,navTopTitle:"钱香社区",navBottom:!1,navBottomActive:1}}]}],M=Y,W=[{path:"/my",name:"my",meta:{requiresAuth:!0,navTop:!0,navBottom:!0,navTopTitle:"钱香社区",navBottomActive:2},component:function(){return n.e("chunk-3e83eb0c").then(n.bind(null,"e94d"))}},{path:"/profile",name:"profile",meta:{requiresAuth:!0,navTop:!0,navBottom:!1,navTopTitle:"个人信息"},component:function(){return n.e("chunk-53109738").then(n.bind(null,"a68b"))}},{path:"/post",name:"post",meta:{requiresAuth:!0,navTop:!0,navBottom:!1,navTopTitle:"我的动态"},component:function(){return n.e("chunk-dc3afe2a").then(n.bind(null,"ccbf"))}},{path:"/message",redirect:"/message/chat",component:function(){return n.e("chunk-19249ced").then(n.bind(null,"1f4d"))},children:[{path:"chat",name:"NotificationChat",component:function(){return n.e("chunk-4ba3a103").then(n.bind(null,"d5a8"))},meta:{requiresAuth:!0,navTop:!0,navTopTitle:"我的消息",navBottom:!1}},{path:"like",name:"NotificationLike",component:function(){return n.e("chunk-250670f9").then(n.bind(null,"5719"))},meta:{requiresAuth:!0,navTop:!0,navTopTitle:"我的消息",navBottom:!1}}]}],J=W,U=[{path:"/todoListService",name:"todoListService",meta:{requiresAuth:!0,navTop:!0,navBottom:!1,navTopTitle:"todoList"},component:function(){return n.e("chunk-b7c486ec").then(n.bind(null,"0d2e"))}}],G=U;o["a"].use(C["a"]);var K={routes:Object(A["a"])(z).concat(Object(A["a"])(F),Object(A["a"])(J),Object(A["a"])(M),Object(A["a"])(G),[{path:"/nomsg",name:"nomsg",meta:{requiresAuth:!0,navTop:!0,navBottom:!0,navTopTitle:"缺省页示例"},component:function(){return n.e("chunk-d9082150").then(n.bind(null,"608b"))}},{path:"*",redirect:"/"}]),scrollBehavior:function(t,e,n){return n||{x:0,y:0}},mode:"history"},V=new C["a"](K);V.beforeEach(function(t,e,n){var a=localStorage.getItem("token"),o=function(){V.replace({path:"/login",query:{redirect:t.path}})};"/login"===t.path?("null"!==a&&null!==a&&""!==a&&(O["a"].commit("loginSuccess",a),n()),n()):t.meta.requiresAuth?"null"!==a&&null!==a&&""!==a?(O["a"].commit("loginSuccess",a),n()):o():n()}),V.afterEach(function(t,e){});var X=V,Z={domainOne:"http://106.14.66.94:8564",domainTwo:"http://localhost:8889"},tt={todoList:{getTodoList:Z.domainOne+"/api/todolist",addTodos:Z.domainOne+"/api/todolist",update:Z.domainOne+"/api/todolist",remove:Z.domainOne+"/api/todolist"},article:{articleList:Z.domainOne+"/api/articleService",articleDetail:Z.domainOne+"/api/articleDetail"},sign:{register:Z.domainOne+"",login:Z.domainOne+"/auth/user"},homeHot:{getBanner:Z.domainOne+"/api/getBanner",getNormalQuestion:Z.domainOne+"/api/getNormalQuestion",getCardList:Z.domainOne+"/api/getCardList",getHotTopic:Z.domainOne+"/api/getHotTopic",getTopicDetail:Z.domainOne+"/api/getTopicDetail"}},et=tt,nt=(n("e7e5"),n("d399")),at=n("bc3a"),ot=n.n(at),ct=function(t){Object(nt["a"])({message:t,duration:1e3,forbidClick:!0})},it=function(){X.replace({path:"/login",query:{redirect:X.currentRoute.fullPath}})},rt=function(t,e){switch(t){case 401:break;case 403:ct("登录过期，请重新登录"),localStorage.removeItem("token"),O["a"].commit("loginSuccess",null),setTimeout(function(){it()},1e3);break;case 404:ct("请求的资源不存在");break;default:console.log(e)}},ut=ot.a.create({timeout:2500});ut.interceptors.request.use(function(t){var e=O["a"].state.token;return e&&(t.headers.Authorization="Bearer "+e),t},function(t){return Promise.reject(t)}),ut.interceptors.response.use(function(t){return console.log(t),200===t.status?t.data.success?t.data:69633===t.data.code?(localStorage.removeItem("token"),O["a"].commit("loginSuccess",null),void it()):Promise.reject(t.data):Promise.reject(t.data)},function(t){if(console.log(t.response),console.log(t.config),console.log(t.request),console.log("Error",t.message),t.response)return alert(1),rt(t.response.status),Promise.reject(t.response.data);O["a"].commit("changeNetwork",!1),console.log("网络错误"),alert(2)});var st=ot.a,lt={articleList:function(){return ut.get("".concat(et.article.articleList))},articleDetail:function(t,e){return ut.get("".concat(et.article.articleDetail).concat(t),{params:e})}},mt=lt,pt=n("4328"),ht=n.n(pt),dt={register:function(t,e){return ut.get("".concat(et.sign.register,"/topic/").concat(t),{params:e})},login:function(t){return ut.post(et.sign.login,ht.a.stringify(t))}},ft=dt,gt=n("2f1d"),bt=n.n(gt),vt={getTodolist:function(t){return ut.get("".concat(et.todoList.getTodoList,"/").concat(t))},addTodos:function(t){return ut.post("".concat(et.todoList.addTodos),t)},update:function(t,e,n){return ut.put("".concat(et.todoList.update,"/").concat(t,"/").concat(e,"/").concat(n))},remove:function(t,e){return ut.delete("".concat(et.todoList.remove,"/").concat(t,"/").concat(e))},getUserInfo:function(){var t=localStorage.getItem("token");if(null!==t&&"null"!==t){var e=bt.a.decode(t);return e}return null}},kt=vt,yt={getBanner:function(){return ut.get("".concat(et.todoList.getTodoList,"/9"))},getNormalQuestion:function(){return ut.get("".concat(et.todoList.getTodoList,"/9"))},getCardList:function(){var t=[{userInfo:{headImg:"http://tx.haiqq.com/uploads/allimg/170510/00345T064-8.jpg",name:"也子",time:"3-12  04:30",isFollow:!0,type:"湘史蒂夫"},card:{title:"动画片展在明天召开",content:"绿色减肥乐山大佛是两地分居收到了发接受的绿色的减肥乐山大佛就收到了发接受的雷锋精神的龙卷风",imgArr:["http://www.qqzhi.com/uploadpic/2014-12-07/165956548.jpg","http://uploads.5068.com/allimg/120112/10341JT1-3.jpg","http://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/0b55b319ebc4b745551b5d46c7fc1e178b8215d6.jpg","http://s.wasu.tv/mrms/manage/images/201504/15/552e2a34b9261.jpg"]},number:{lookNum:600,talkNum:25,likeNum:100},talkDetail:[{userId:"8",userName:"朽木",isRe:!1,replayName:"",replayId:"",talkContent:"相当有意思"},{userId:"8",userName:"史蒂夫",isRe:!0,replayName:"柯林斯",replayId:"10",talkContent:"还行"},{userId:"8",userName:"史密斯",isRe:!0,replayName:"鲍勃",replayId:"10",talkContent:"真热闹"}],talkDetailNum:20},{userInfo:{headImg:"http://tx.haiqq.com/uploads/allimg/c170313/14Y33S4Q2430-32917.jpg",name:"曾斌",time:"3-13  05:30",isFollow:!1,type:"四额"},card:{title:"动画片展在明天召开",content:"绿色减肥乐山大佛是两地分居收到了发接受的绿色的减肥乐山大佛就收到了发接受的雷锋精神的龙卷风",imgArr:["http://www.qqzhi.com/uploadpic/2014-12-07/165956548.jpg","http://ww2.sinaimg.cn/orj480/7044e956gw1f6y4dgxrfxj20b40b40tw.jpg","http://static.i3.xywy.com/cms/20140920/c7851006fae5be187f31a3661271427781268.jpg","http://pic28.photophoto.cn/20130913/0010023590300809_b.jpg"]},number:{lookNum:500,talkNum:111,likeNum:89},talkDetail:[{userId:"8",userName:"朽木",isRe:!1,replayName:"",replayId:"",talkContent:"相当有意思"},{userId:"8",userName:"史蒂夫",isRe:!0,replayName:"柯林斯",replayId:"10",talkContent:"还行"}],talkDetailNum:2},{userInfo:{headImg:"http://tx.haiqq.com/uploads/allimg/c170313/14Y33S4Q2430-32917.jpg",name:"曾斌",time:"3-13  05:30",isFollow:!1,type:"四额"},card:{title:"动画片展在明天召开",content:"绿色减肥乐山大佛是两地分居收到了发接受的绿色的减肥乐山大佛就收到了发接受的雷锋精神的龙卷风",imgArr:["http://www.qqzhi.com/uploadpic/2014-12-07/165956548.jpg","http://ww2.sinaimg.cn/orj480/7044e956gw1f6y4dgxrfxj20b40b40tw.jpg","http://static.i3.xywy.com/cms/20140920/c7851006fae5be187f31a3661271427781268.jpg","http://pic28.photophoto.cn/20130913/0010023590300809_b.jpg"]},number:{lookNum:500,talkNum:111,likeNum:89},talkDetail:[{userId:"8",userName:"朽木",isRe:!1,replayName:"",replayId:"",talkContent:"相当有意思"},{userId:"8",userName:"史蒂夫",isRe:!0,replayName:"柯林斯",replayId:"10",talkContent:"还行"}],talkDetailNum:2},{userInfo:{headImg:"http://tx.haiqq.com/uploads/allimg/c170313/14Y33S4Q2430-32917.jpg",name:"曾斌",time:"3-13  05:30",isFollow:!1,type:"四额"},card:{title:"动画片展在明天召开",content:"绿色减肥乐山大佛是两地分居收到了发接受的绿色的减肥乐山大佛就收到了发接受的雷锋精神的龙卷风",imgArr:["http://www.qqzhi.com/uploadpic/2014-12-07/165956548.jpg","http://ww2.sinaimg.cn/orj480/7044e956gw1f6y4dgxrfxj20b40b40tw.jpg","http://static.i3.xywy.com/cms/20140920/c7851006fae5be187f31a3661271427781268.jpg","http://pic28.photophoto.cn/20130913/0010023590300809_b.jpg"]},number:{lookNum:500,talkNum:111,likeNum:89},talkDetail:[{userId:"8",userName:"朽木",isRe:!1,replayName:"",replayId:"",talkContent:"相当有意思"},{userId:"8",userName:"史蒂夫",isRe:!0,replayName:"柯林斯",replayId:"10",talkContent:"还行"}],talkDetailNum:2},{userInfo:{headImg:"http://tx.haiqq.com/uploads/allimg/c170313/14Y33S4Q2430-32917.jpg",name:"曾斌",time:"3-13  05:30",isFollow:!1,type:"四额"},card:{title:"动画片展在明天召开",content:"绿色减肥乐山大佛是两地分居收到了发接受的绿色的减肥乐山大佛就收到了发接受的雷锋精神的龙卷风",imgArr:["http://www.qqzhi.com/uploadpic/2014-12-07/165956548.jpg","http://ww2.sinaimg.cn/orj480/7044e956gw1f6y4dgxrfxj20b40b40tw.jpg","http://static.i3.xywy.com/cms/20140920/c7851006fae5be187f31a3661271427781268.jpg","http://pic28.photophoto.cn/20130913/0010023590300809_b.jpg"]},number:{lookNum:500,talkNum:111,likeNum:89},talkDetail:[{userId:"8",userName:"朽木",isRe:!1,replayName:"",replayId:"",talkContent:"相当有意思"},{userId:"8",userName:"史蒂夫",isRe:!0,replayName:"柯林斯",replayId:"10",talkContent:"还行"}],talkDetailNum:2},{userInfo:{headImg:"http://tx.haiqq.com/uploads/allimg/c170313/14Y33S4Q2430-32917.jpg",name:"曾斌",time:"3-13  05:30",isFollow:!1,type:"四额"},card:{title:"动画片展在明天召开",content:"绿色减肥乐山大佛是两地分居收到了发接受的绿色的减肥乐山大佛就收到了发接受的雷锋精神的龙卷风",imgArr:["http://www.qqzhi.com/uploadpic/2014-12-07/165956548.jpg","http://ww2.sinaimg.cn/orj480/7044e956gw1f6y4dgxrfxj20b40b40tw.jpg","http://static.i3.xywy.com/cms/20140920/c7851006fae5be187f31a3661271427781268.jpg","http://pic28.photophoto.cn/20130913/0010023590300809_b.jpg"]},number:{lookNum:500,talkNum:111,likeNum:89},talkDetail:[{userId:"8",userName:"朽木",isRe:!1,replayName:"",replayId:"",talkContent:"相当有意思"},{userId:"8",userName:"史蒂夫",isRe:!0,replayName:"柯林斯",replayId:"10",talkContent:"还行"}],talkDetailNum:2},{userInfo:{headImg:"http://tx.haiqq.com/uploads/allimg/c170313/14Y33S4Q2430-32917.jpg",name:"曾斌",time:"3-13  05:30",isFollow:!1,type:"四额"},card:{title:"动画片展在明天召开",content:"绿色减肥乐山大佛是两地分居收到了发接受的绿色的减肥乐山大佛就收到了发接受的雷锋精神的龙卷风",imgArr:["http://www.qqzhi.com/uploadpic/2014-12-07/165956548.jpg","http://ww2.sinaimg.cn/orj480/7044e956gw1f6y4dgxrfxj20b40b40tw.jpg","http://static.i3.xywy.com/cms/20140920/c7851006fae5be187f31a3661271427781268.jpg","http://pic28.photophoto.cn/20130913/0010023590300809_b.jpg"]},number:{lookNum:500,talkNum:111,likeNum:89},talkDetail:[{userId:"8",userName:"朽木",isRe:!1,replayName:"",replayId:"",talkContent:"相当有意思"},{userId:"8",userName:"史蒂夫",isRe:!0,replayName:"柯林斯",replayId:"10",talkContent:"还行"}],talkDetailNum:2}];return ut.get("".concat(et.todoList.getTodoList,"/9")).then(function(e){return console.log(e),e.data=t,e}).catch(function(t){return console.log(t),Promise.reject(t)})},getHotTopic:function(){return ut.get("".concat(et.todoList.getTodoList,"/9")).then(function(t){return console.log(1),t=1,t}).catch(function(t){return console.log(t),Promise.reject(t)})},getTopicDetail:function(t){return ut.get("".concat(et.todoList.getTodoList,"/9"))},getAllDemo:function(){return st.all([this.getCardList(),this.getHotTopic()]).then(st.spread(function(t,e){console.log(t),console.log(e);var n={res1:t,res2:e};return n})).catch(function(t){return console.log(t),Promise.reject(t)})}},wt=yt,Tt={article:mt,sign:ft,todolist:kt,homeHot:wt};n("800e");o["a"].prototype.$http=Tt,o["a"].config.productionTip=!1,console.log("http://106.14.66.94:8564"),console.log("production"),new o["a"]({router:X,store:O["a"],render:function(t){return t(x)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("2856"),o=n.n(a);o.a},"800e":function(t,e,n){},aff3:function(t,e,n){"use strict";var a=n("4493"),o=n.n(a);o.a},cf34:function(t,e,n){},f9c9:function(t,e,n){}});