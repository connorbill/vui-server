(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19249ced"],{"1f4d":function(a,t,e){"use strict";e.r(t);var c,n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"scroll-message"},[e("div",{staticClass:"change-tab"},[e("van-tabs",{attrs:{lineWidth:65,sticky:""},on:{click:a.changeTab},model:{value:a.active,callback:function(t){a.active=t},expression:"active"}},[e("van-tab",{staticClass:"change-tab",attrs:{title:a.topTab[0]}}),e("van-tab",{staticClass:"change-tab",attrs:{title:a.topTab[1]}})],1)],1),e("router-view")],1)},i=[],s=(e("a481"),e("88d8")),o=(e("da3c"),e("0b33")),l=(e("7f7f"),e("bda7"),e("5e46")),r={name:"NotificationMain",components:(c={},Object(s["a"])(c,l["a"].name,l["a"]),Object(s["a"])(c,o["a"].name,o["a"]),c),data:function(){return{active:0,topTab:["评论","点赞"]}},methods:{changeTab:function(a,t){0===a?this.$router.replace("/message/chat"):this.$router.replace("/message/like")}}},b=r,u=(e("bc8c"),e("2877")),f=Object(u["a"])(b,n,i,!1,null,"1e463a91",null);f.options.__file="NotificationMain.vue";t["default"]=f.exports},"766a":function(a,t,e){},bc8c:function(a,t,e){"use strict";var c=e("766a"),n=e.n(c);n.a}}]);