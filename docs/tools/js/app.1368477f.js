(function(e){function t(t){for(var r,s,o=t[0],i=t[1],c=t[2],d=0,m=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&m.push(n[s][0]),n[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(t);while(m.length)m.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],r=!0,o=1;o<a.length;o++){var i=a[o];0!==n[i]&&(r=!1)}r&&(l.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},n={app:0},l=[];function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=i;l.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[a("h2",[e._v("勞健保自負額計算程式")])])],1),a("v-row",[a("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[a("v-alert",{staticClass:"d-flex justify-center align-center",attrs:{border:"top",color:"blue-grey",dark:"",dense:""}},[a("h3",[e._v("勞保自行負擔總計"+e._s(e.Insurance[3].self)+"元")])])],1),a("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[a("v-alert",{staticClass:"d-flex justify-center align-center",attrs:{border:"top",color:"blue-grey",text:"",dense:""}},[a("h3",[e._v("健保自行負擔總計"+e._s(e.Insurance[3].self)+"元")])])],1)],1),a("v-row",[a("v-col",{staticClass:"d-flex order-0",attrs:{cols:"12",md:"6",sm:"12"}},[a("v-text-field",{attrs:{label:"薪水",type:"tel"},on:{keyup:e.onVarChange},model:{value:e.salary,callback:function(t){e.salary=t},expression:"salary"}})],1),a("v-col",{staticClass:"d-flex order-xl-1 order-lg-1 order-md-1 order-3",attrs:{cols:"12",md:"6",sm:"12"}},[a("v-select",{attrs:{label:"適用職業災害費率",items:e.items},on:{input:e.onVarChange},model:{value:e.rate,callback:function(t){e.rate=t},expression:"rate"}})],1),a("v-col",{staticClass:"d-flex d-md-none order-2"},[a("v-divider")],1),a("v-col",{staticClass:"d-flex order-xl-3 order-lg-3 order-md-3 order-1",attrs:{cols:"12",md:"6",sm:"12"}},[a("v-date-picker",{attrs:{color:"blue-grey","full-width":"",range:""},on:{input:e.onVarChange},model:{value:e.dates,callback:function(t){e.dates=t},expression:"dates"}})],1),a("v-col",{staticClass:"order-3",attrs:{cols:"12",md:"6",sm:"12"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.table_Headers,items:e.Insurance}})],1)],1)],1)],1)},l=[],s=(a("b0c0"),a("ac1f"),a("1276"),{name:"App",components:{},data:function(){return{salary:"",salaryLevel:{level:0,rangeStart:0,rangeEnd:0,premium:0},rate:0,dates:[],totalDate:0,items:[.11,.12,.13,.15,.16,.17,.18,.19,.2,.21,.22,.23,.24,.26,.27,.28,.37,.39,.4,.41,.47,.48,.53,.61,.92,.96],rangeSet:[{level:1,rangeStart:0,rangeEnd:23800,premium:23800},{level:2,rangeStart:23801,rangeEnd:24e3,premium:24e3},{level:3,rangeStart:24001,rangeEnd:25200,premium:25200},{level:4,rangeStart:25201,rangeEnd:26400,premium:26400},{level:5,rangeStart:26401,rangeEnd:27600,premium:27600},{level:6,rangeStart:27601,rangeEnd:28800,premium:28800},{level:7,rangeStart:28801,rangeEnd:30300,premium:30300},{level:8,rangeStart:30301,rangeEnd:31800,premium:31800},{level:9,rangeStart:31801,rangeEnd:33300,premium:33300},{level:10,rangeStart:33301,rangeEnd:34800,premium:34800},{level:11,rangeStart:34801,rangeEnd:36300,premium:36300},{level:12,rangeStart:36301,rangeEnd:38200,premium:38200},{level:13,rangeStart:38201,rangeEnd:40100,premium:40100},{level:14,rangeStart:40101,rangeEnd:42e3,premium:42e3},{level:15,rangeStart:42001,rangeEnd:43900,premium:43900},{level:16,rangeStart:43901,rangeEnd:null,premium:45800}],Insurance:[{name:"普通事故保險費",government:0,company:0,self:0},{name:"職業災害保險費",government:0,company:0,self:0},{name:"就業保險費",government:0,company:0,self:0},{name:"總計負擔保費",government:0,company:0,self:0}],table_Headers:[{text:" ",align:"start",sortable:!1,value:"name"},{text:"雇主負擔",value:"company"},{text:"自行負擔",value:"self"},{text:"政府負擔",value:"government"}]}},methods:{dayCalc:function(){var e=0;if(this.dates.length>1){for(var t=this.dates[0].split("-"),a=this.dates[1].split("-"),r=0;r<3;r++)t[r]=parseInt(t[r]),a[r]=parseInt(a[r]);var n=t[0];t[0]-=n,a[0]-=n,a[1]=12*a[0]+a[1];while(t[1]!=a[1])a[2]>30?e+=30:e+=a[2],a[2]=30,a[1]-=1;t[2]>=30?e+=1:e+=a[2]-t[2]+1}else e=1;this.totalDate=e},paymentCalculate:function(){for(var e=0;e<4;e++)this.Insurance[e].government=0,this.Insurance[e].company=0,this.Insurance[e].self=0;var t=0,a=0,r=0,n=0;for(e=0;e<4;e++){var l=this.Insurance[e];if("普通事故保險費"==l.name)t=.1*this.salaryLevel.premium;else{if("職業災害保險費"==l.name){l.company=Math.round(this.salaryLevel.premium*this.rate/100/30*this.totalDate),r+=l.company;continue}if("就業保險費"==l.name)t=.01*this.salaryLevel.premium;else if("總計負擔保費"==l.name){l.government=a,l.company=r,l.self=n;continue}}l.government=Math.round(.1*t/30*this.totalDate),l.company=Math.round(.7*t/30*this.totalDate),l.self=Math.round(.2*t/30*this.totalDate),a+=l.government,r+=l.company,n+=l.self}},onVarChange:function(){for(var e=this.rangeSet.length-1;e>=0;e--){var t=this.rangeSet[e];if(this.salary>=t.rangeStart){this.salaryLevel=t;break}}this.dayCalc(),this.paymentCalculate()}}}),o=s,i=a("2877"),c=a("6544"),u=a.n(c),d=a("0798"),m=a("7496"),p=a("62ad"),v=a("a523"),f=a("8fea"),g=a("2e4b"),h=a("ce7e"),y=a("0fd9"),b=a("b974"),S=a("8654"),x=Object(i["a"])(o,n,l,!1,null,null,null),C=x.exports;u()(x,{VAlert:d["a"],VApp:m["a"],VCol:p["a"],VContainer:v["a"],VDataTable:f["a"],VDatePicker:g["a"],VDivider:h["a"],VRow:y["a"],VSelect:b["a"],VTextField:S["a"]});var w=a("f309");r["a"].use(w["a"]);var E=new w["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:E,render:function(e){return e(C)}}).$mount("#app")}});