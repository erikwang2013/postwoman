(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{315:function(t,e,n){var content=n(818);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(44).default)("8e077dee",content,!0,{sourceMap:!1})},817:function(t,e,n){"use strict";var o=n(315);n.n(o).a},818:function(t,e,n){(e=n(43)(!1)).push([t.i,".autocomplete-wrapper[data-v-71683807]{position:relative}.autocomplete-wrapper input:focus+ul.suggestions[data-v-71683807],.autocomplete-wrapper ul.suggestions[data-v-71683807]:hover{display:block}.autocomplete-wrapper ul.suggestions[data-v-71683807]{display:none;background-color:var(--atc-color);position:absolute;top:calc(100% - 4px);margin:0 4px;left:0;padding:0;border-radius:0 0 8px 8px;z-index:9999;transition:transform .2s ease-out;box-shadow:0 5px 30px rgba(0,0,0,.1)}.autocomplete-wrapper ul.suggestions li[data-v-71683807]{width:100%;display:block;padding:8px 16px;font-size:16px;font-family:Roboto Mono,monospace;font-weight:400}.autocomplete-wrapper ul.suggestions li[data-v-71683807]:last-child{border-radius:0 0 8px 8px}.autocomplete-wrapper ul.suggestions li.active[data-v-71683807],.autocomplete-wrapper ul.suggestions li[data-v-71683807]:hover{background-color:var(--ac-color);color:var(--act-color);cursor:pointer}",""]),t.exports=e},899:function(t,e,n){"use strict";n.r(e);n(144);var o={props:{spellcheck:{type:Boolean,default:!0,required:!1},placeholder:{type:String,default:"",required:!1},source:{type:Array,required:!0},value:{type:String,default:"",required:!1}},watch:{text:function(){this.$emit("input",this.text)}},data:function(){return{text:this.value,selectionStart:0,suggestionsOffsetLeft:0,currentSuggestionIndex:-1,suggestionsVisible:!1}},methods:{updateSuggestions:function(t){if(t.which&&27===t.which)return t.preventDefault(),this.suggestionsVisible=!1,void(this.currentSuggestionIndex=-1);this.selectionStart=this.$refs.acInput.selectionStart,this.suggestionsOffsetLeft=12*this.selectionStart,this.suggestionsVisible=!0},forceSuggestion:function(text){var input=this.text.substring(0,this.selectionStart);this.text=input+text,this.selectionStart=this.text.length,this.suggestionsVisible=!0,this.currentSuggestionIndex=-1},handleKeystroke:function(t){switch(t.which){case 38:t.preventDefault(),this.currentSuggestionIndex=this.currentSuggestionIndex-1>=0?this.currentSuggestionIndex-1:0;break;case 40:t.preventDefault(),this.currentSuggestionIndex=this.currentSuggestionIndex<this.suggestions.length-1?this.currentSuggestionIndex+1:this.suggestions.length-1;break;case 9:t.preventDefault();var e=this.suggestions[this.currentSuggestionIndex>=0?this.currentSuggestionIndex:0];if(e){var input=this.text.substring(0,this.selectionStart);this.text=input+e}}}},computed:{suggestions:function(){var t=this,input=this.text.substring(0,this.selectionStart);return this.source.filter((function(t){return t.toLowerCase().startsWith(input.toLowerCase())&&input.toLowerCase()!==t.toLowerCase()})).map((function(e){return e.substring(t.selectionStart)})).slice(0,6)}},mounted:function(){this.updateSuggestions({target:this.$refs.acInput})}},r=(n(817),n(37)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"autocomplete-wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],ref:"acInput",attrs:{type:"text",placeholder:t.placeholder,spellcheck:t.spellcheck,autocapitalize:t.spellcheck,autocorrect:t.spellcheck},domProps:{value:t.text},on:{input:[function(e){e.target.composing||(t.text=e.target.value)},t.updateSuggestions],keyup:t.updateSuggestions,click:t.updateSuggestions,keydown:t.handleKeystroke}}),t._v(" "),t.suggestions.length>0&&t.suggestionsVisible?n("ul",{staticClass:"suggestions",style:{transform:"translate("+t.suggestionsOffsetLeft+"px, 0)"}},t._l(t.suggestions,(function(e,o){return n("li",{key:o,class:{active:t.currentSuggestionIndex===o},on:{click:function(n){return n.preventDefault(),t.forceSuggestion(e)}}},[t._v("\n      "+t._s(e)+"\n    ")])})),0):t._e()])}),[],!1,null,"71683807",null);e.default=component.exports}}]);