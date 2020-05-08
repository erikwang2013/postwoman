(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{253:function(t,n,e){"use strict";e.d(n,"c",(function(){return r})),e.d(n,"b",(function(){return l})),e.d(n,"a",(function(){return m}));e(101);function o(t){return new RegExp("".concat(t,"(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"))}function c(t){return new RegExp("".concat(t,"(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]).)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9/])$"))}function r(t){var n=o("^(wss?:\\/\\/)?"),e=c("^(wss?:\\/\\/)?");return n.test(t)||e.test(t)}function l(t){var n=o("^(https?:\\/\\/)?"),e=c("^(https?:\\/\\/)?");return n.test(t)||e.test(t)}function m(t){var n="^((wss?:\\/\\/)|(https?:\\/\\/))?",e=o(n),r=c(n);return e.test(t)||r.test(t)}},846:function(t,n){},904:function(t,n,e){"use strict";e.r(n);var o=e(253),c=e(821),r=e.n(c),l={components:{"pw-section":function(){return e.e(1).then(e.bind(null,366))},realtimeLog:function(){return e.e(2).then(e.bind(null,892))}},data:function(){return{url:"ws://",connectionState:!1,io:null,communication:{log:null,eventName:"",input:""}}},computed:{urlValid:function(){return Object(o.a)(this.url)}},methods:{toggleConnection:function(){return this.connectionState?this.disconnect():this.connect()},connect:function(){var t=this;this.communication.log=[{payload:this.$t("connecting_to",{name:this.url}),source:"info",color:"var(--ac-color)"}];try{this.io=new r.a(this.url),this.io.on("connect",(function(){t.connectionState=!0,t.communication.log=[{payload:t.$t("connected_to",{name:t.url}),source:"info",color:"var(--ac-color)",ts:(new Date).toLocaleTimeString()}],t.$toast.success(t.$t("connected"),{icon:"sync"})})),this.io.on("message",(function(data){t.communication.log.push({payload:data,source:"server",ts:(new Date).toLocaleTimeString()})})),this.io.on("connect_error",(function(n){t.handleError(n)})),this.io.on("reconnect_error",(function(n){t.handleError(n)})),this.io.on("error",(function(data){t.handleError()})),this.io.on("disconnect",(function(){t.connectionState=!1,t.communication.log.push({payload:t.$t("disconnected_from",{name:t.url}),source:"info",color:"#ff5555",ts:(new Date).toLocaleTimeString()}),t.$toast.error(t.$t("disconnected"),{icon:"sync_disabled"})}))}catch(t){this.handleError(t),this.$toast.error(this.$t("something_went_wrong"),{icon:"error"})}},disconnect:function(){this.io.close()},handleError:function(t){this.disconnect(),this.connectionState=!1,this.communication.log.push({payload:this.$t("error_occurred"),source:"info",color:"#ff5555",ts:(new Date).toLocaleTimeString()}),null!==t&&this.communication.log.push({payload:t,source:"info",color:"#ff5555",ts:(new Date).toLocaleTimeString()})},sendMessage:function(){var t=this,n=this.communication.eventName,e=this.communication.input;this.io&&(this.io.emit(n,e,(function(data){t.communication.log.push({payload:"[".concat(n,"] ").concat(JSON.stringify(data)),source:"server",ts:(new Date).toLocaleTimeString()})})),this.communication.log.push({payload:"[".concat(n,"] ").concat(e),source:"client",ts:(new Date).toLocaleTimeString()}),this.communication.input="")}}},m=e(37),component=Object(m.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("pw-section",{ref:"request",staticClass:"blue",attrs:{label:t.$t("request")}},[e("ul",[e("li",[e("label",{attrs:{for:"socketio-url"}},[t._v(t._s(t.$t("url")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],class:{error:!t.urlValid},attrs:{id:"socketio-url",type:"url",spellcheck:"false"},domProps:{value:t.url},on:{keyup:function(n){if(!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter"))return null;t.urlValid&&t.toggleConnection()},input:function(n){n.target.composing||(t.url=n.target.value)}}})]),t._v(" "),e("div",[e("li",[e("label",{staticClass:"hide-on-small-screen",attrs:{for:"connect"}},[t._v(" ")]),t._v(" "),e("button",{attrs:{disabled:!t.urlValid,id:"connect",name:"connect"},on:{click:t.toggleConnection}},[t._v("\n            "+t._s(t.connectionState?t.$t("disconnect"):t.$t("connect"))+"\n            "),e("span",[e("i",{staticClass:"material-icons"},[t._v("\n                "+t._s(t.connectionState?"sync_disabled":"sync")+"\n              ")])])])])])])]),t._v(" "),e("pw-section",{ref:"response",staticClass:"purple",attrs:{label:t.$t("communication"),id:"response"}},[e("ul",[e("li",[e("realtime-log",{attrs:{title:t.$t("log"),log:t.communication.log}})],1)]),t._v(" "),e("ul",[e("li",[e("label",{attrs:{for:"event_name"}},[t._v(t._s(t.$t("event_name")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.communication.eventName,expression:"communication.eventName"}],attrs:{id:"event_name",name:"event_name",type:"text",readonly:!t.connectionState},domProps:{value:t.communication.eventName},on:{input:function(n){n.target.composing||t.$set(t.communication,"eventName",n.target.value)}}})])]),t._v(" "),e("ul",[e("li",[e("label",{attrs:{for:"socketio-message"}},[t._v(t._s(t.$t("message")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.communication.input,expression:"communication.input"}],attrs:{id:"socketio-message",name:"message",type:"text",readonly:!t.connectionState},domProps:{value:t.communication.input},on:{keyup:function(n){if(!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter"))return null;t.connectionState&&t.sendMessage()},input:function(n){n.target.composing||t.$set(t.communication,"input",n.target.value)}}})]),t._v(" "),e("div",[e("li",[e("label",{staticClass:"hide-on-small-screen",attrs:{for:"send"}},[t._v(" ")]),t._v(" "),e("button",{attrs:{id:"send",name:"send",disabled:!t.connectionState},on:{click:t.sendMessage}},[t._v("\n            "+t._s(t.$t("send"))+"\n            "),e("span",[e("i",{staticClass:"material-icons"},[t._v("send")])])])])])])])],1)}),[],!1,null,null,null);n.default=component.exports}}]);