(function(t){function e(e){for(var i,o,l=e[0],s=e[1],c=e[2],u=0,v=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&v.push(r[o][0]),r[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);d&&d(e);while(v.length)v.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,l=1;l<a.length;l++){var s=a[l];0!==r[s]&&(i=!1)}i&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},r={app:0},n=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=s;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1698:function(t,e,a){"use strict";var i=a("9336"),r=a.n(i);r.a},5290:function(t,e,a){"use strict";var i=a("6a9e"),r=a.n(i);r.a},"56d7":function(t,e,a){"use strict";a.r(e);var i=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-navigation-drawer",{attrs:{app:"",temporary:"",color:"#00569B",dark:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v("\n            Timesheet\n          ")]),a("v-list-item-subtitle",[t._v("\n            subtext\n          ")])],1)],1),a("v-divider"),a("v-list",[t._l(t.links,(function(e){return a("v-list-group",{key:e.title,attrs:{color:"#A1DAF8",link:"","no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)]},proxy:!0}],null,!0),model:{value:e.active,callback:function(a){t.$set(e,"active",a)},expression:"admin.active"}},[t._l(e.items,(function(e){return a("v-list-item",{key:e.id,attrs:{to:e.url}},[a("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)})),t._l(e.items_2,(function(e){return a("v-list-item",{key:e.title,attrs:{to:e.url}},[a("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)}))],2)})),t._l(t.links_2,(function(e){return a("v-list-group",{key:e.title,attrs:{color:"#A1DAF8",link:"","no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-item-title",{domProps:{textContent:t._s(e.title)}})]},proxy:!0}],null,!0),model:{value:e.active,callback:function(a){t.$set(e,"active",a)},expression:"admin.active"}},[t._l(e.links_3,(function(e){return a("v-list-group",{key:e.title,attrs:{"no-action":"","sub-group":"",value:"true",color:"#A1DAF8",link:""},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)]},proxy:!0}],null,!0),model:{value:e.active,callback:function(a){t.$set(e,"active",a)},expression:"project.active"}},[t._l(e.items_1,(function(e){return a("v-list-item",{key:e.id,attrs:{to:e.url}},[a("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)})),t._l(e.items_2,(function(e){return a("v-list-item",{key:e.title,attrs:{to:e.url}},[a("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)}))],2)})),t._l(e.links_4,(function(e){return a("v-list-group",{key:e.title,attrs:{"no-action":"","sub-group":"",value:"true",color:"#A1DAF8",link:""},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)]},proxy:!0}],null,!0),model:{value:e.active,callback:function(a){t.$set(e,"active",a)},expression:"users.active"}},t._l(e.items,(function(e){return a("v-list-item",{key:e.title,attrs:{to:e.url}},[a("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)})),1)}))],2)}))],2)],1),a("v-app-bar",{attrs:{app:"",color:"rgba(243, 244, 248)"}},[a("v-app-bar-nav-icon",{attrs:{color:"rgba(0, 86, 155)"},on:{click:function(e){t.drawer=!t.drawer}}}),a("v-toolbar-title",[a("router-link",{staticClass:"pointer",attrs:{to:"/",tag:"span"}},[t._v("Home")])],1),a("div",{staticClass:"flex-grow-1"}),t.$vuetify.breakpoint.smAndUp?[a("v-toolbar-items",t._l(t.users,(function(e){return a("v-menu",{key:e.title,attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(i){var r=i.on;return[a("v-btn",t._g({attrs:{text:"",color:"rgba(0, 86, 155)"}},r),[a("v-icon",{attrs:{size:"38"}},[t._v(t._s(e.icon))]),t._v("\n            "+t._s(e.title)+"\n            "),a("v-icon",{attrs:{right:""}},[t._v("mdi-chevron-down")])],1)]}}],null,!0)},[a("v-list",t._l(e.drops,(function(e,i){return a("v-list-item",{key:i,attrs:{to:e.url}},[a("v-list-item-title",[t._v(t._s(e.title))])],1)})),1)],1)})),1)]:t._e()],2),a("v-content",{staticClass:"contentApp"},[a("v-container",{attrs:{fluid:""}},[a("router-view",{staticClass:"grey lighten-4"})],1)],1),a("v-footer",{attrs:{app:""}})],1)},n=[],o={data(){return{drawer:null,links:[{title:"Отчеты",icon:"mdi-chevron-right",action:"mdi-chevron-right",items:[{id:"1",title:"Проекты",url:"/reports"}],items_2:[{id:"2",title:"Сотрудники",url:"/reports2"}]}],links_2:[{id:3,title:"Администрирование",icon:"mdi-chevron-right",url:"/admin",action:"mdi-chevron-right",links_3:[{id:4,title:"Проекты",icon:"mdi-chevron-right",url:"/admin",action:"mdi-chevron-right",items_1:[{id:"5",title:"Добавление проекта",url:"/project"}],items_2:[{id:"6",title:"Изменить проект",url:"/project_2"}]}],links_4:[{id:7,title:"Сотрудники",icon:"mdi-chevron-right",url:"/admin",action:"mdi-chevron-right",items:[{id:"8",title:"Редактировать сотрудника",url:"/transformUser"}]}]}],users:[{title:"Иванов Иван Иванович",icon:"mdi-account-circle-outline",url:"/users",drops:[{title:"Login",icon:"mdi-login",url:"/login"},{title:"Registration",icon:"mdi-clipboard-account",url:"/registration"}]}]}}},l=o,s=(a("1698"),a("2877")),c=a("6544"),d=a.n(c),u=a("7496"),v=a("40dc"),m=a("5bc1"),p=a("8336"),f=a("a523"),h=a("a75b"),b=a("ce7e"),y=a("553a"),g=a("132d"),x=a("8860"),w=a("56b0"),_=a("da13"),C=a("5d23"),k=a("e449"),V=a("f774"),T=a("2a7f"),S=Object(s["a"])(l,r,n,!1,null,"32e343d7",null),P=S.exports;d()(S,{VApp:u["a"],VAppBar:v["a"],VAppBarNavIcon:m["a"],VBtn:p["a"],VContainer:f["a"],VContent:h["a"],VDivider:b["a"],VFooter:y["a"],VIcon:g["a"],VList:x["a"],VListGroup:w["a"],VListItem:_["a"],VListItemContent:C["a"],VListItemSubtitle:C["b"],VListItemTitle:C["c"],VMenu:k["a"],VNavigationDrawer:V["a"],VToolbarItems:T["a"],VToolbarTitle:T["b"]});var j=a("8c4f"),L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-sheet",{staticClass:"overflow-hidden",staticStyle:{position:"relative"},attrs:{height:"400"}},[a("v-container",{staticClass:"fill-height"},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-btn",{attrs:{color:"pink",dark:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[t._v("\n        Toggle\n      ")])],1)],1),a("v-navigation-drawer",{attrs:{absolute:"",temporary:"",right:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v("John Leider")])],1)],1),a("v-divider"),a("v-list",{attrs:{dense:""}},t._l(t.items,(function(e){return a("v-list-item",{key:e.title,attrs:{link:""}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1)],1)},A=[],B={data(){return{drawer:null,items:[{title:"Home",icon:"mdi-dashboard"},{title:"About",icon:"mdi-question_answer"}],ads:[{title:"First list",description:"Hello i am squirrel",promo:!1,imageSrc:"https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",id:"123"},{title:"Second list",description:"Hello i am bird",promo:!0,imageSrc:"https://cdn.vuetifyjs.com/images/carousel/bird.jpg",id:"1234"}]}}},I=B,O=(a("5290"),a("34c3")),D=a("0fd9"),R=a("8dd9"),F=Object(s["a"])(I,L,A,!1,null,"26b8f013",null),E=F.exports;d()(F,{VBtn:p["a"],VContainer:f["a"],VDivider:b["a"],VIcon:g["a"],VList:x["a"],VListItem:_["a"],VListItemContent:C["a"],VListItemIcon:O["a"],VListItemTitle:C["c"],VNavigationDrawer:V["a"],VRow:D["a"],VSheet:R["a"]});var H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("h1",[t._v("Ad")])])],1)],1)},$=[],N={data(){return{}}},q=N,M=a("0e8f"),U=a("a722"),z=Object(s["a"])(q,H,$,!1,null,null,null),G=z.exports;d()(z,{VContainer:f["a"],VFlex:M["a"],VLayout:U["a"]});var J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-sheet",{staticClass:"overflow-hidden",staticStyle:{position:"relative"},attrs:{height:"400"}},[a("v-card",{scopedSlots:t._u([{key:"expanded-item",fn:function(e){var i=e.headers;return t._l(i,(function(e){return a("td",{key:e.id,staticClass:"tdWhite",attrs:{slot:"activator",colspan:e.text},domProps:{textContent:t._s(e.text)},slot:"activator"})}))}}])}),a("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v("John Leider")])],1)],1),a("v-divider"),a("v-list",{attrs:{dense:""}},t._l(t.items,(function(e){return a("v-list-item",{key:e.title,attrs:{link:""}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1)],1)},W=[],K={data(){return{drawer:null,items:[{title:"Home",icon:"mdi-dashboard"},{title:"About",icon:"mdi-question_answer"}]}}},Y=K,Q=a("b0af"),X=Object(s["a"])(Y,J,W,!1,null,null,null),Z=X.exports;d()(X,{VCard:Q["a"],VDivider:b["a"],VIcon:g["a"],VList:x["a"],VListItem:_["a"],VListItemContent:C["a"],VListItemIcon:O["a"],VListItemTitle:C["c"],VNavigationDrawer:V["a"],VSheet:R["a"]});var tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("h1",[t._v("NewAd")])])],1)],1)},et=[],at={data(){return{}}},it=at,rt=Object(s["a"])(it,tt,et,!1,null,null,null),nt=rt.exports;d()(rt,{VContainer:f["a"],VFlex:M["a"],VLayout:U["a"]});var ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("h1",[t._v("Admin")])])],1)],1)},lt=[],st={data(){return{}}},ct=st,dt=Object(s["a"])(ct,ot,lt,!1,null,null,null),ut=dt.exports;d()(dt,{VContainer:f["a"],VFlex:M["a"],VLayout:U["a"]});var vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[a("v-toolbar-title",[t._v("Login form")])],1),a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{label:"Email",name:"email","prepend-icon":"mdi-account",type:"email",rules:t.emailRules},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{id:"password",label:"Password",name:"password","prepend-icon":"mdi-lock",type:"password",counter:6,rules:t.passRules},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),a("v-card-actions",[a("div",{staticClass:"flex-grow-1"}),a("v-btn",{attrs:{color:"primary",disabled:!t.valid},on:{click:t.onSubmit}},[t._v("Login")])],1)],1)],1)],1)],1)},mt=[],pt={data(){return{email:"",password:"",valid:!1,emailRules:[t=>!!t||"E-mail is required",t=>/.+@.+\..+/.test(t)||"E-mail must be valid"],passRules:[t=>!!t||"Pass is required",t=>t&&t.length>=6||"Password must be equal or more than 6 characters"]}},methods:{onSubmit(){if(this.$refs.form.validate()){const t={email:this.email,password:this.password};console.log(t),this.$router.push("/reports")}}}},ft=pt,ht=a("99d9"),bt=a("62ad"),yt=a("4bd4"),gt=a("8654"),xt=a("71d9"),wt=Object(s["a"])(ft,vt,mt,!1,null,null,null),_t=wt.exports;d()(wt,{VBtn:p["a"],VCard:Q["a"],VCardActions:ht["a"],VCardText:ht["b"],VCol:bt["a"],VContainer:f["a"],VForm:yt["a"],VRow:D["a"],VTextField:gt["a"],VToolbar:xt["a"],VToolbarTitle:T["b"]});var Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[a("v-toolbar-title",[t._v("Registration form")])],1),a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{label:"Email",name:"email","prepend-icon":"mdi-account",type:"email",rules:t.emailRules},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{label:"Password",name:"password","prepend-icon":"mdi-lock",type:"password",counter:6,rules:t.passRules},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("v-text-field",{attrs:{label:"Confirm password",name:"confirm-password","prepend-icon":"mdi-lock",type:"password",counter:6,rules:t.confPassRules},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1)],1),a("v-card-actions",[a("div",{staticClass:"flex-grow-1"}),a("v-btn",{attrs:{color:"primary",disabled:!t.valid},on:{click:t.onSubmit}},[t._v("Create account")])],1)],1)],1)],1)],1)},kt=[],Vt={data(){return{email:"",password:"",confirmPassword:"",valid:!1,emailRules:[t=>!!t||"E-mail is required",t=>/.+@.+\..+/.test(t)||"E-mail must be valid"],passRules:[t=>!!t||"Pass is required",t=>t&&t.length>=6||"Password must be equal or more than 6 characters"],confPassRules:[t=>!!t||"Pass is required",t=>t===this.password||"Password should match"]}},methods:{onSubmit(){if(this.$refs.form.validate()){const t={email:this.email,password:this.password};this.$router.push("/"),this.$store.dispatch("firebaseConfig",t),console.log(t)}}}},Tt=Vt,St=Object(s["a"])(Tt,Ct,kt,!1,null,null,null),Pt=St.exports;d()(St,{VBtn:p["a"],VCard:Q["a"],VCardActions:ht["a"],VCardText:ht["b"],VCol:bt["a"],VContainer:f["a"],VForm:yt["a"],VRow:D["a"],VTextField:gt["a"],VToolbar:xt["a"],VToolbarTitle:T["b"]});var jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-sheet",{staticClass:"overflow-hidden",staticStyle:{position:"relative"}},[[a("div",[a("v-data-table",{staticClass:"elevation-0",attrs:{headers:t.headers,items:t.desserts,"single-select":t.singleSelect,"show-select":"","single-expand":t.singleExpand,expanded:t.expanded,"item-key":"name","show-expand":""},on:{"update:expanded":function(e){t.expanded=e}},scopedSlots:t._u([{key:"expanded-item",fn:function(e){var i=e.headers;return[t._l(i,(function(e){return a("td",{key:e.id,staticClass:"tdWhite",attrs:{colspan:e.text},domProps:{textContent:t._s(e.text)},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}})})),a("v-navigation-drawer",{attrs:{app:"",temporary:"",color:"#FFFFFF",right:"",width:"40%"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("div",{staticClass:"my-2 mt-5 mr-5 mb-5 d-flex align-end flex-column"},[a("v-btn",{attrs:{depressed:"",color:"primary"}},[t._v("Изменить")])],1),a("v-divider"),a("div",{staticClass:"align-start ml-3 mr-3 mb-n4"},[a("v-text-field",{staticClass:"mt-3 mb-n4",attrs:{label:"title",name:"Title",type:"text",outlined:""},model:{value:t.editedTitle,callback:function(e){t.editedTitle=e},expression:"editedTitle"}}),a("v-text-field",{staticClass:"mb-n4",attrs:{label:"description",name:"Description",type:"text",outlined:""},model:{value:t.editedDescription,callback:function(e){t.editedDescription=e},expression:"editedDescription"}}),a("v-text-field",{staticClass:"mb-n4",attrs:{label:"title2",name:"Title2",type:"text",outlined:""},model:{value:t.editedTitle2,callback:function(e){t.editedTitle2=e},expression:"editedTitle2"}}),a("v-text-field",{staticClass:"mb-n4",attrs:{label:"title3",name:"Title3",type:"text",outlined:""},model:{value:t.editedTitle3,callback:function(e){t.editedTitle3=e},expression:"editedTitle3"}}),a("v-btn",{attrs:{block:"",color:"primary"},on:{click:function(e){t.hidden=!t.hidden}}},[t._v("Проектная команда")]),t._l(t.projectUser,(function(e){return a("v-list-item",{directives:[{name:"show",rawName:"v-show",value:t.hidden,expression:"hidden"}],key:e.id,attrs:{to:e.url,link:""},model:{value:t.hidden,callback:function(e){t.hidden=e},expression:"hidden"}},[a("v-list-item-title",{domProps:{textContent:t._s(e.name)}})],1)})),a("v-text-field",{staticClass:"mt-4 font-italic font-weight-light",attrs:{label:"Исполнитель",name:"Исполнитель",type:"text",outlined:""},model:{value:t.editedTitle3,callback:function(e){t.editedTitle3=e},expression:"editedTitle3"}})],2)],1)]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)]],2)},Lt=[],At={data(){return{editedTitle:"",editedTitle2:"",editedTitle3:"",editedDescription:"",hidden:"",expanded:[],selected:[],singleExpand:!1,singleSelect:!1,snack:!1,snackColor:"",snackText:"",max25chars:t=>t.length<=25||"Input too long!",pagination:{},projectUser:[{name:"Апкова Луиза",url:"/reports2"},{name:"Ермолаев Семен",url:"/reports2"},{name:"Анна Петухова",url:"/reports2"},{name:"Кузин Александр",url:"/reports2"}],headers:[{text:"Dessert (100g serving)",align:"left",sortable:!1,value:"name"},{text:"Calories",value:"calories"},{text:"Fat (g)",value:"fat"},{text:"Carbs (g)",value:"carbs"},{text:"Protein (g)",value:"protein"},{text:"Iron (%)",value:"iron"}],desserts:[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4,iron:"1%"},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3,iron:"1%"},{name:"Eclair",calories:262,fat:16,carbs:23,protein:6,iron:"7%"},{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3,iron:"8%"},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9,iron:"16%"},{name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0,iron:"0%"},{name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0,iron:"2%"},{name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5,iron:"45%"},{name:"Donut",calories:452,fat:25,carbs:51,protein:4.9,iron:"22%"},{name:"KitKat",calories:518,fat:26,carbs:65,protein:7,iron:"6%"}],drawer:null,hidden:!1}}},Bt=At,It=(a("d9af"),a("8fea")),Ot=Object(s["a"])(Bt,jt,Lt,!1,null,null,null),Dt=Ot.exports;d()(Ot,{VBtn:p["a"],VDataTable:It["a"],VDivider:b["a"],VListItem:_["a"],VListItemTitle:C["c"],VNavigationDrawer:V["a"],VSheet:R["a"],VTextField:gt["a"]});var Rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-row",{staticClass:"pa-4",attrs:{justify:"space-between"}},[a("v-col",{attrs:{cols:"5"}},[a("v-treeview",{attrs:{active:t.active,items:t.items,"load-children":t.fetchUsers,open:t.open,activatable:"",color:"warning","open-on-click":"",transition:""},on:{"update:active":function(e){t.active=e},"update:open":function(e){t.open=e}},scopedSlots:t._u([{key:"prepend",fn:function(e){var i=e.item;e.active;return[i.children?t._e():a("v-icon",[t._v("mdi-account-circle-outline")])]}}])})],1),a("v-divider",{attrs:{vertical:""}}),a("v-col",{staticClass:"d-flex text-center"},[a("v-scroll-y-transition",{attrs:{mode:"out-in"}},[t.selected?a("v-card",{key:t.selected.id,staticClass:"pt-6 mx-auto",attrs:{flat:"","max-width":"400"}},[a("v-card-text",[t.avatar?a("v-avatar",{attrs:{size:"88"}},[a("v-img",{staticClass:"mb-6",attrs:{src:"https://avataaars.io/"+t.avatar}})],1):t._e(),a("h3",{staticClass:"headline mb-2"},[t._v("\n              "+t._s(t.selected.name)+"\n            ")]),a("div",{staticClass:"blue--text mb-2"},[t._v(t._s(t.selected.email))]),a("div",{staticClass:"blue--text subheading font-weight-bold"},[t._v(t._s(t.selected.username))])],1),a("v-divider"),a("v-row",{staticClass:"text-left",attrs:{tag:"v-card-text"}},[a("v-col",{staticClass:"text-right mr-4 mb-2",attrs:{tag:"strong",cols:"5"}},[t._v("Company:")]),a("v-col",[t._v(t._s(t.selected.company.name))]),a("v-col",{staticClass:"text-right mr-4 mb-2",attrs:{tag:"strong",cols:"5"}},[t._v("Website:")]),a("v-col",[a("a",{attrs:{href:"//"+t.selected.website,target:"_blank"}},[t._v(t._s(t.selected.website))])]),a("v-col",{staticClass:"text-right mr-4 mb-2",attrs:{tag:"strong",cols:"5"}},[t._v("Phone:")]),a("v-col",[t._v(t._s(t.selected.phone))])],1)],1):a("div",{staticClass:"title grey--text text--lighten-1 font-weight-light",staticStyle:{"align-self":"center"}},[t._v("\n          Select a User\n        ")])],1)],1)],1)],1)},Ft=[];const Et=["?accessoriesType=Blank&avatarStyle=Circle&clotheColor=PastelGreen&clotheType=ShirtScoopNeck&eyeType=Wink&eyebrowType=UnibrowNatural&facialHairColor=Black&facialHairType=MoustacheMagnum&hairColor=Platinum&mouthType=Concerned&skinColor=Tanned&topType=Turban","?accessoriesType=Sunglasses&avatarStyle=Circle&clotheColor=Gray02&clotheType=ShirtScoopNeck&eyeType=EyeRoll&eyebrowType=RaisedExcited&facialHairColor=Red&facialHairType=BeardMagestic&hairColor=Red&hatColor=White&mouthType=Twinkle&skinColor=DarkBrown&topType=LongHairBun","?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=Black&clotheType=ShirtVNeck&eyeType=Surprised&eyebrowType=Angry&facialHairColor=Blonde&facialHairType=Blank&hairColor=Blonde&hatColor=PastelOrange&mouthType=Smile&skinColor=Black&topType=LongHairNotTooLong","?accessoriesType=Round&avatarStyle=Circle&clotheColor=PastelOrange&clotheType=Overall&eyeType=Close&eyebrowType=AngryNatural&facialHairColor=Blonde&facialHairType=Blank&graphicType=Pizza&hairColor=Black&hatColor=PastelBlue&mouthType=Serious&skinColor=Light&topType=LongHairBigHair","?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Gray01&clotheType=BlazerShirt&eyeType=Surprised&eyebrowType=Default&facialHairColor=Red&facialHairType=Blank&graphicType=Selena&hairColor=Red&hatColor=Blue02&mouthType=Twinkle&skinColor=Pale&topType=LongHairCurly"],Ht=t=>new Promise(e=>setTimeout(e,t));var $t={data:()=>({active:[],avatar:null,open:[],users:[]}),computed:{items(){return[{name:"Users",children:this.users}]},selected(){if(!this.active.length)return;const t=this.active[0];return this.users.find(e=>e.id===t)}},watch:{selected:"randomAvatar"},methods:{async fetchUsers(t){return await Ht(1500),fetch("https://jsonplaceholder.typicode.com/users").then(t=>t.json()).then(e=>t.children.push(...e)).catch(t=>console.warn(t))},randomAvatar(){this.avatar=Et[Math.floor(Math.random()*Et.length)]}}},Nt=$t,qt=a("8212"),Mt=a("adda"),Ut=a("0789"),zt=a("eb2a"),Gt=Object(s["a"])(Nt,Rt,Ft,!1,null,null,null),Jt=Gt.exports;d()(Gt,{VAvatar:qt["a"],VCard:Q["a"],VCardText:ht["b"],VCol:bt["a"],VDivider:b["a"],VIcon:g["a"],VImg:Mt["a"],VRow:D["a"],VScrollYTransition:Ut["d"],VTreeview:zt["a"]}),i["a"].use(j["a"]);var Wt=new j["a"]({routes:[{path:"",name:"home",component:E},{path:"/ad/:id",name:"ad",component:G},{path:"/report",name:"report",component:Z},{path:"/new",name:"newAd",component:nt},{path:"/admin",name:"admin",component:ut},{path:"/login",name:"login",component:_t},{path:"/registration",name:"registration",component:Pt},{path:"/reports",name:"reports",component:Dt},{path:"/users",name:"users",component:Jt}],mode:"history"}),Kt=a("2f62"),Yt={state:{ads:[]},mutations:{},actions:{},getters:{}},Qt={state:{user:null},mutations:{setUser(t,e){t.user=e}},actions:{},getters:{user(t){return t.user}}};i["a"].use(Kt["a"]);var Xt=new Kt["a"].Store({modules:{ads:Yt,user:Qt}}),Zt=a("f309");i["a"].use(Zt["a"]);var te=new Zt["a"]({icons:{iconfont:"mdi"}});a("bf40");i["a"].use(te),i["a"].config.productionTip=!1,new i["a"]({router:Wt,store:Xt,vuetify:te,render:t=>t(P)}).$mount("#app")},"6a9e":function(t,e,a){},"89a2":function(t,e,a){},9336:function(t,e,a){},d9af:function(t,e,a){"use strict";var i=a("89a2"),r=a.n(i);r.a}});
//# sourceMappingURL=app.7daeb331.js.map