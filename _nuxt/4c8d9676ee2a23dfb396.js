(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{241:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));n(18);var r=n(3),o=n(251),c=n.n(o);n(303),n(304);c.a.initializeApp({apiKey:"AIzaSyCMsFreESs58-hRxTtiqQrIcimh4i1wbsM",authDomain:"postwoman-api.firebaseapp.com",databaseURL:"https://postwoman-api.firebaseio.com",projectId:"postwoman-api",storageBucket:"postwoman-api.appspot.com",messagingSenderId:"421993993223",appId:"1:421993993223:web:ec0baa8ee8c02ffa1fc6a2",measurementId:"G-ERJ6025CEB"});var l,d,_,h,m,f=c.a.firestore().collection("users"),v={currentUser:{},currentFeeds:[],currentSettings:[],currentHistory:[],currentCollections:[],currentEnvironments:[],writeFeeds:(m=Object(r.a)(regeneratorRuntime.mark((function t(e,label){var dt;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:dt={createdOn:new Date,author:v.currentUser.uid,author_name:v.currentUser.displayName,author_image:v.currentUser.photoURL,message:e,label:label},f.doc(v.currentUser.uid).collection("feeds").add(dt).catch((function(t){return console.error("error inserting",dt,t)}));case 2:case"end":return t.stop()}}),t)}))),function(t,e){return m.apply(this,arguments)}),deleteFeed:function(t){f.doc(v.currentUser.uid).collection("feeds").doc(t).delete().catch((function(e){return console.error("error deleting",t,e)}))},writeSettings:(h=Object(r.a)(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r={updatedOn:new Date,author:v.currentUser.uid,author_name:v.currentUser.displayName,author_image:v.currentUser.photoURL,name:e,value:n},f.doc(v.currentUser.uid).collection("settings").doc(e).set(r).catch((function(t){return console.error("error updating",r,t)}));case 2:case"end":return t.stop()}}),t)}))),function(t,e){return h.apply(this,arguments)}),writeHistory:(_=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e,f.doc(v.currentUser.uid).collection("history").add(n).catch((function(t){return console.error("error inserting",n,t)}));case 2:case"end":return t.stop()}}),t)}))),function(t){return _.apply(this,arguments)}),deleteHistory:function(t){f.doc(v.currentUser.uid).collection("history").doc(t.id).delete().catch((function(e){return console.error("error deleting",t,e)}))},clearHistory:function(){f.doc(v.currentUser.uid).collection("history").get().then((function(t){t.docs.forEach((function(t){return v.deleteHistory(t)}))}))},toggleStar:function(t,e){f.doc(v.currentUser.uid).collection("history").doc(t.id).update({star:e}).catch((function(e){return console.error("error deleting",t,e)}))},writeCollections:(d=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n={updatedOn:new Date,author:v.currentUser.uid,author_name:v.currentUser.displayName,author_image:v.currentUser.photoURL,collection:e},f.doc(v.currentUser.uid).collection("collections").doc("sync").set(n).catch((function(t){return console.error("error updating",n,t)}));case 2:case"end":return t.stop()}}),t)}))),function(t){return d.apply(this,arguments)}),writeEnvironments:(l=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n={updatedOn:new Date,author:v.currentUser.uid,author_name:v.currentUser.displayName,author_image:v.currentUser.photoURL,environment:e},f.doc(v.currentUser.uid).collection("environments").doc("sync").set(n).catch((function(t){return console.error("error updating",n,t)}));case 2:case"end":return t.stop()}}),t)}))),function(t){return l.apply(this,arguments)})};c.a.auth().onAuthStateChanged((function(t){t?(v.currentUser=t,v.currentUser.providerData.forEach((function(t){var e={updatedOn:new Date,provider:t.providerId,name:t.displayName,email:t.email,photoUrl:t.photoURL,uid:t.uid};f.doc(v.currentUser.uid).set(e).catch((function(t){return console.error("error updating",e,t)}))})),f.doc(v.currentUser.uid).collection("feeds").orderBy("createdOn","desc").onSnapshot((function(t){var e=[];t.forEach((function(t){var n=t.data();n.id=t.id,e.push(n)})),v.currentFeeds=e})),f.doc(v.currentUser.uid).collection("settings").onSnapshot((function(t){var e=[];t.forEach((function(t){var n=t.data();n.id=t.id,e.push(n)})),v.currentSettings=e})),f.doc(v.currentUser.uid).collection("history").onSnapshot((function(t){var e=[];t.forEach((function(t){var n=t.data();n.id=t.id,e.push(n)})),v.currentHistory=e})),f.doc(v.currentUser.uid).collection("collections").onSnapshot((function(t){var e=[];t.forEach((function(t){var n=t.data();n.id=t.id,e.push(n)})),v.currentCollections=e[0].collection})),f.doc(v.currentUser.uid).collection("environments").onSnapshot((function(t){var e=[];t.forEach((function(t){var n=t.data();n.id=t.id,e.push(n)})),v.currentEnvironments=e[0].environment}))):v.currentUser=null}))},895:function(t,e,n){"use strict";n.r(e);n(45),n(251);var r=n(241),o={components:{"pw-section":function(){return n.e(1).then(n.bind(null,366))},"pw-toggle":function(){return n.e(23).then(n.bind(null,906))},swatch:function(){return n.e(50).then(n.bind(null,907))},login:function(){return n.e(7).then(n.bind(null,908))},logout:function(){return n.e(24).then(n.bind(null,909))}},data:function(){return{themes:[{color:"#202124",name:this.$t("kinda_dark"),class:"",aceEditor:"twilight"},{color:"#ffffff",name:this.$t("clearly_white"),vibrant:!0,class:"light",aceEditor:"iplastic"},{color:"#000000",name:this.$t("just_black"),class:"black",aceEditor:"vibrant_ink"},{color:"var(--ac-color)",name:this.$t("auto_system"),vibrant:window.matchMedia("(prefers-color-scheme: light)").matches,class:"auto",aceEditor:window.matchMedia("(prefers-color-scheme: light)").matches?"iplastic":"twilight"}],colors:[{color:"#50fa7b",name:this.$t("green"),vibrant:!0},{color:"#f1fa8c",name:this.$t("yellow"),vibrant:!0},{color:"#ff79c6",name:this.$t("pink"),vibrant:!0},{color:"#ff5555",name:this.$t("red"),vibrant:!1},{color:"#bd93f9",name:this.$t("purple"),vibrant:!0},{color:"#ffb86c",name:this.$t("orange"),vibrant:!0},{color:"#8be9fd",name:this.$t("cyan"),vibrant:!0},{color:"#57b5f9",name:this.$t("blue"),vibrant:!1}],settings:{SCROLL_INTO_ENABLED:void 0===this.$store.state.postwoman.settings.SCROLL_INTO_ENABLED||this.$store.state.postwoman.settings.SCROLL_INTO_ENABLED,THEME_CLASS:"",THEME_COLOR:"",THEME_TAB_COLOR:"",THEME_COLOR_VIBRANT:!0,FRAME_COLORS_ENABLED:this.$store.state.postwoman.settings.FRAME_COLORS_ENABLED||!1,PROXY_ENABLED:this.$store.state.postwoman.settings.PROXY_ENABLED||!1,PROXY_URL:this.$store.state.postwoman.settings.PROXY_URL||"https://postwoman.apollosoftware.xyz/",PROXY_KEY:this.$store.state.postwoman.settings.PROXY_KEY||"",EXTENSIONS_ENABLED:void 0===this.$store.state.postwoman.settings.EXTENSIONS_ENABLED||this.$store.state.postwoman.settings.EXTENSIONS_ENABLED},doneButton:'<i class="material-icons">done</i>',fb:r.a}},watch:{proxySettings:{deep:!0,handler:function(t){this.applySetting("PROXY_URL",t.url),this.applySetting("PROXY_KEY",t.key)}}},methods:{applyTheme:function(t){var e=t.class,n=t.color,r=t.aceEditor;this.applySetting("THEME_CLASS",e),this.applySetting("THEME_ACE_EDITOR",r),document.querySelector("meta[name=theme-color]").setAttribute("content",n),this.applySetting("THEME_TAB_COLOR",n),document.documentElement.className=e},setActiveColor:function(t,e){null===e&&(e=!0),document.documentElement.style.setProperty("--ac-color",t),document.documentElement.style.setProperty("--act-color",e?"rgba(32, 33, 36, 1)":"rgba(255, 255, 255, 1)"),this.applySetting("THEME_COLOR",t.toUpperCase()),this.applySetting("THEME_COLOR_VIBRANT",e)},getActiveColor:function(){var t;return"#".concat((t=window.getComputedStyle(document.documentElement).getPropertyValue("--ac-color"),t.replace(/#/g,"").replace(/ /g,"")).toUpperCase())},applySetting:function(t,e){this.settings[t]=e,this.$store.commit("postwoman/applySetting",[t,e])},toggleSetting:function(t){this.settings[t]=!this.settings[t],this.$store.commit("postwoman/applySetting",[t,this.settings[t]])},toggleSettings:function(s,t){r.a.writeSettings(s,!t)},initSettings:function(){r.a.writeSettings("syncHistory",!0),r.a.writeSettings("syncCollections",!0),r.a.writeSettings("syncEnvironments",!0)},resetProxy:function(t){var e=t.target;this.settings.PROXY_URL="https://postwoman.apollosoftware.xyz/",e.innerHTML=this.doneButton,this.$toast.info(this.$t("cleared"),{icon:"clear_all"}),setTimeout((function(){return e.innerHTML='<i class="material-icons">clear_all</i>'}),1e3)}},beforeMount:function(){this.settings.THEME_CLASS=document.documentElement.className,this.settings.THEME_COLOR=this.getActiveColor()},computed:{proxySettings:function(){return{url:this.settings.PROXY_URL,key:this.settings.PROXY_KEY}}}},c=n(37),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("pw-section",{ref:"account",staticClass:"green",attrs:{label:t.$t("account")}},[n("ul",[n("li",[t.fb.currentUser?n("div",[n("button",{staticClass:"icon"},[t.fb.currentUser.photoURL?n("img",{staticClass:"material-icons",attrs:{src:t.fb.currentUser.photoURL}}):n("i",{staticClass:"material-icons"},[t._v("account_circle")]),t._v(" "),n("span",[t._v("\n                "+t._s(t.fb.currentUser.displayName||t.$t("nothing_found"))+"\n              ")])]),t._v(" "),n("br"),t._v(" "),n("button",{staticClass:"icon"},[n("i",{staticClass:"material-icons"},[t._v("email")]),t._v(" "),n("span",[t._v("\n                "+t._s(t.fb.currentUser.email||t.$t("nothing_found"))+"\n              ")])]),t._v(" "),n("br"),t._v(" "),n("logout"),t._v(" "),t._l(t.fb.currentSettings,(function(e){return n("p",{key:e.id},[n("pw-toggle",{key:e.name,attrs:{on:e.value},on:{change:function(n){return t.toggleSettings(e.name,e.value)}}},[t._v("\n                "+t._s(t.$t(e.name)+" "+t.$t("sync"))+"\n                "+t._s(e.value?t.$t("enabled"):t.$t("disabled"))+"\n              ")])],1)})),t._v(" "),3!==t.fb.currentSettings.length?n("p",[n("button",{on:{click:t.initSettings}},[n("i",{staticClass:"material-icons"},[t._v("sync")]),t._v(" "),n("span",[t._v(t._s(t.$t("turn_on")+" "+t.$t("sync")))])])]):t._e()],2):n("div",[n("label",[t._v(t._s(t.$t("login_with")))]),t._v(" "),n("p",[n("login")],1)])])])]),t._v(" "),n("pw-section",{ref:"theme",staticClass:"cyan",attrs:{label:t.$t("theme")}},[n("ul",[n("li",[n("label",[t._v(t._s(t.$t("background")))]),t._v(" "),n("div",{staticClass:"backgrounds"},t._l(t.themes,(function(e){return n("span",{key:e.class,on:{click:function(n){return t.applyTheme(e)}}},[n("swatch",{staticClass:"bg",class:{vibrant:e.vibrant},attrs:{active:t.settings.THEME_CLASS===e.class,color:e.color,name:e.name}})],1)})),0)])]),t._v(" "),n("ul",[n("li",[n("label",[t._v(t._s(t.$t("color")))]),t._v(" "),n("div",{staticClass:"colors"},t._l(t.colors,(function(e){return n("span",{key:e.color,on:{click:function(n){return t.setActiveColor(e.color,e.vibrant)}}},[n("swatch",{staticClass:"fg",class:{vibrant:e.vibrant},attrs:{active:t.settings.THEME_COLOR===e.color.toUpperCase(),color:e.color,name:e.name}})],1)})),0)])]),t._v(" "),n("ul",[n("li",[n("span",[n("pw-toggle",{attrs:{on:t.settings.FRAME_COLORS_ENABLED},on:{change:function(e){return t.toggleSetting("FRAME_COLORS_ENABLED")}}},[t._v("\n              "+t._s(t.$t("multi_color"))+"\n              "+t._s(t.settings.FRAME_COLORS_ENABLED?t.$t("enabled"):t.$t("disabled"))+"\n            ")])],1)])]),t._v(" "),n("ul",[n("li",[n("span",[n("pw-toggle",{attrs:{on:t.settings.SCROLL_INTO_ENABLED},on:{change:function(e){return t.toggleSetting("SCROLL_INTO_ENABLED")}}},[t._v("\n              "+t._s(t.$t("scrollInto_use_toggle"))+"\n              "+t._s(t.settings.SCROLL_INTO_ENABLED?t.$t("enabled"):t.$t("disabled"))+"\n            ")])],1)])])]),t._v(" "),n("pw-section",{ref:"extensions",staticClass:"purple",attrs:{label:t.$t("extensions")}},[n("ul",[n("li",[n("div",{staticClass:"flex-wrap"},[n("pw-toggle",{attrs:{on:t.settings.EXTENSIONS_ENABLED},on:{change:function(e){return t.toggleSetting("EXTENSIONS_ENABLED")}}},[t._v("\n              "+t._s(t.$t("extensions_use_toggle"))+"\n            ")])],1)])])]),t._v(" "),n("pw-section",{ref:"proxy",staticClass:"blue",attrs:{label:t.$t("proxy")}},[n("ul",[n("li",[n("div",{staticClass:"flex-wrap"},[n("span",[n("pw-toggle",{attrs:{on:t.settings.PROXY_ENABLED},on:{change:function(e){return t.toggleSetting("PROXY_ENABLED")}}},[t._v("\n                "+t._s(t.$t("proxy"))+"\n                "+t._s(t.settings.PROXY_ENABLED?t.$t("enabled"):t.$t("disabled"))+"\n              ")])],1),t._v(" "),n("a",{attrs:{href:"https://github.com/liyasthomas/postwoman/wiki/Proxy",target:"_blank",rel:"noopener"}},[n("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.$t("wiki"),expression:"$t('wiki')"}],staticClass:"icon"},[n("i",{staticClass:"material-icons"},[t._v("help")])])])])])]),t._v(" "),n("ul",[n("li",[n("div",{staticClass:"flex-wrap"},[n("label",{attrs:{for:"url"}},[t._v(t._s(t.$t("url")))]),t._v(" "),n("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.$t("reset_default"),expression:"$t('reset_default')",modifiers:{bottom:!0}}],staticClass:"icon",on:{click:t.resetProxy}},[n("i",{staticClass:"material-icons"},[t._v("clear_all")])])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.PROXY_URL,expression:"settings.PROXY_URL"}],attrs:{id:"url",type:"url",disabled:!t.settings.PROXY_ENABLED},domProps:{value:t.settings.PROXY_URL},on:{input:function(e){e.target.composing||t.$set(t.settings,"PROXY_URL",e.target.value)}}})])]),t._v(" "),n("ul",{staticClass:"info"},[n("li",[n("p",[t._v("\n            "+t._s(t.$t("postwoman_official_proxy_hosting"))+"\n            "),n("br"),t._v("\n            "+t._s(t.$t("read_the"))+"\n            "),n("a",{staticClass:"link",attrs:{href:"https://apollosoftware.xyz/legal/postwoman",target:"_blank",rel:"noopener"}},[t._v("\n              "+t._s(t.$t("apollosw_privacy_policy"))+" ")]),t._v(".\n          ")])])])])],1)}),[],!1,null,"01efc380",null);e.default=component.exports}}]);