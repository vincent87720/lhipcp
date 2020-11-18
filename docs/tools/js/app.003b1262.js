(function(e){function r(r){for(var t,m,i=r[0],s=r[1],o=r[2],g=0,d=[];g<i.length;g++)m=i[g],Object.prototype.hasOwnProperty.call(n,m)&&n[m]&&d.push(n[m][0]),n[m]=0;for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t]);u&&u(r);while(d.length)d.shift()();return l.push.apply(l,o||[]),a()}function a(){for(var e,r=0;r<l.length;r++){for(var a=l[r],t=!0,i=1;i<a.length;i++){var s=a[i];0!==n[s]&&(t=!1)}t&&(l.splice(r--,1),e=m(m.s=a[0]))}return e}var t={},n={app:0},l=[];function m(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,m),a.l=!0,a.exports}m.m=e,m.c=t,m.d=function(e,r,a){m.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:a})},m.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},m.t=function(e,r){if(1&r&&(e=m(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(m.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)m.d(a,t,function(r){return e[r]}.bind(null,t));return a},m.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return m.d(r,"a",r),r},m.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},m.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=r,i=i.slice();for(var o=0;o<i.length;o++)r(i[o]);var u=s;l.push([0,"chunk-vendors"]),a()})({0:function(e,r,a){e.exports=a("56d7")},"56d7":function(e,r,a){"use strict";a.r(r);a("e260"),a("e6cf"),a("cca6"),a("a79d");var t=a("2b0e"),n=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("v-app",[a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[a("h2",[e._v("勞健保自負額計算程式")])])],1),a("v-row",[a("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[a("v-alert",{staticClass:"d-flex justify-center align-center",attrs:{border:"top",color:"blue-grey",dark:"",dense:""}},[a("h3",[e._v("勞保自行負擔總計"+e._s(e.Insurance[3].self)+"元")])])],1),a("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[a("v-alert",{staticClass:"d-flex justify-center align-center",attrs:{border:"top",color:"blue-grey",text:"",dense:""}},[a("h3",[e._v("健保自行負擔總計"+e._s(e.Insurance[4].self)+"元")])])],1)],1),a("v-row",[a("v-col",{staticClass:"d-flex order-0",attrs:{cols:"12",md:"6",sm:"12"}},[a("v-text-field",{attrs:{label:"薪水",type:"tel"},on:{keyup:e.onVarChange},model:{value:e.salary,callback:function(r){e.salary=r},expression:"salary"}})],1),a("v-col",{staticClass:"d-flex order-xl-1 order-lg-1 order-md-1 order-3",attrs:{cols:"12",md:"6",sm:"12"}},[a("v-select",{attrs:{label:"適用職業災害費率",items:e.items},on:{input:e.onVarChange},model:{value:e.rate,callback:function(r){e.rate=r},expression:"rate"}})],1),a("v-col",{staticClass:"d-flex d-md-none order-2"},[a("v-divider")],1),a("v-col",{staticClass:"d-flex order-xl-3 order-lg-3 order-md-3 order-1",attrs:{cols:"12",md:"6",sm:"12"}},[a("v-date-picker",{attrs:{color:"blue-grey","full-width":"",range:""},on:{input:e.onVarChange},model:{value:e.dates,callback:function(r){e.dates=r},expression:"dates"}})],1),a("v-col",{staticClass:"order-3",attrs:{cols:"12",md:"6",sm:"12"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.table_Headers,items:e.Insurance}})],1)],1)],1)],1)},l=[],m=(a("b0c0"),a("ac1f"),a("1276"),{name:"App",components:{},data:function(){return{salary:"",laborSalaryLevel:{level:0,rangeStart:0,rangeEnd:0,premium:0},healthSalaryLevel:{level:0,rangeStart:0,rangeEnd:0,premium:0},rate:0,dates:[],totalDate:0,items:[.11,.12,.13,.15,.16,.17,.18,.19,.2,.21,.22,.23,.24,.26,.27,.28,.37,.39,.4,.41,.47,.48,.53,.61,.92,.96],laborRangeSet:[{level:1,rangeStart:0,rangeEnd:23800,premium:23800},{level:2,rangeStart:23801,rangeEnd:24e3,premium:24e3},{level:3,rangeStart:24001,rangeEnd:25200,premium:25200},{level:4,rangeStart:25201,rangeEnd:26400,premium:26400},{level:5,rangeStart:26401,rangeEnd:27600,premium:27600},{level:6,rangeStart:27601,rangeEnd:28800,premium:28800},{level:7,rangeStart:28801,rangeEnd:30300,premium:30300},{level:8,rangeStart:30301,rangeEnd:31800,premium:31800},{level:9,rangeStart:31801,rangeEnd:33300,premium:33300},{level:10,rangeStart:33301,rangeEnd:34800,premium:34800},{level:11,rangeStart:34801,rangeEnd:36300,premium:36300},{level:12,rangeStart:36301,rangeEnd:38200,premium:38200},{level:13,rangeStart:38201,rangeEnd:40100,premium:40100},{level:14,rangeStart:40101,rangeEnd:42e3,premium:42e3},{level:15,rangeStart:42001,rangeEnd:43900,premium:43900},{level:16,rangeStart:43901,rangeEnd:null,premium:45800}],healthRangeSet:[{level:1,rangeStart:0,rangeEnd:23800,premium:23800},{level:2,rangeStart:23801,rangeEnd:24e3,premium:24e3},{level:3,rangeStart:24001,rangeEnd:25200,premium:25200},{level:4,rangeStart:25201,rangeEnd:26400,premium:26400},{level:5,rangeStart:26401,rangeEnd:27600,premium:27600},{level:6,rangeStart:27601,rangeEnd:28800,premium:28800},{level:7,rangeStart:28801,rangeEnd:30300,premium:30300},{level:8,rangeStart:30301,rangeEnd:31800,premium:31800},{level:9,rangeStart:31801,rangeEnd:33300,premium:33300},{level:10,rangeStart:33301,rangeEnd:34800,premium:34800},{level:11,rangeStart:34801,rangeEnd:36300,premium:36300},{level:12,rangeStart:36301,rangeEnd:38200,premium:38200},{level:13,rangeStart:38201,rangeEnd:40100,premium:40100},{level:14,rangeStart:40101,rangeEnd:42e3,premium:42e3},{level:15,rangeStart:42001,rangeEnd:43900,premium:43900},{level:16,rangeStart:43901,rangeEnd:45800,premium:45800},{level:17,rangeStart:45801,rangeEnd:48200,premium:48200},{level:18,rangeStart:48201,rangeEnd:50600,premium:50600},{level:19,rangeStart:50601,rangeEnd:53e3,premium:53e3},{level:20,rangeStart:53001,rangeEnd:55400,premium:55400},{level:21,rangeStart:55401,rangeEnd:57800,premium:57800},{level:22,rangeStart:57801,rangeEnd:60800,premium:60800},{level:23,rangeStart:60801,rangeEnd:63800,premium:63800},{level:24,rangeStart:63801,rangeEnd:66800,premium:66800},{level:25,rangeStart:66801,rangeEnd:69800,premium:69800},{level:26,rangeStart:69801,rangeEnd:72800,premium:72800},{level:27,rangeStart:72801,rangeEnd:76500,premium:76500},{level:28,rangeStart:76501,rangeEnd:80200,premium:80200},{level:29,rangeStart:80201,rangeEnd:83900,premium:83900},{level:30,rangeStart:83901,rangeEnd:87600,premium:87600},{level:31,rangeStart:87601,rangeEnd:92100,premium:92100},{level:32,rangeStart:92101,rangeEnd:96600,premium:96600},{level:33,rangeStart:96601,rangeEnd:101100,premium:101100},{level:34,rangeStart:101101,rangeEnd:105600,premium:105600},{level:35,rangeStart:105601,rangeEnd:110100,premium:110100},{level:36,rangeStart:110101,rangeEnd:115500,premium:115500},{level:37,rangeStart:115501,rangeEnd:120900,premium:120900},{level:38,rangeStart:120901,rangeEnd:126300,premium:126300},{level:39,rangeStart:126301,rangeEnd:131700,premium:131700},{level:40,rangeStart:131701,rangeEnd:137100,premium:137100},{level:41,rangeStart:137101,rangeEnd:142500,premium:142500},{level:42,rangeStart:142501,rangeEnd:147900,premium:147900},{level:43,rangeStart:147901,rangeEnd:15e4,premium:15e4},{level:44,rangeStart:150001,rangeEnd:156400,premium:156400},{level:45,rangeStart:156401,rangeEnd:162800,premium:162800},{level:46,rangeStart:162801,rangeEnd:169200,premium:169200},{level:47,rangeStart:169201,rangeEnd:175600,premium:175600},{level:48,rangeStart:175601,rangeEnd:null,premium:182e3}],Insurance:[{name:"普通事故保險費",government:0,company:0,self:0},{name:"職業災害保險費",government:0,company:0,self:0},{name:"就業保險費",government:0,company:0,self:0},{name:"總計勞保負擔保費",government:0,company:0,self:0},{name:"健保保險費",government:0,company:0,self:0}],table_Headers:[{text:" ",align:"start",sortable:!1,value:"name"},{text:"雇主負擔",value:"company"},{text:"自行負擔",value:"self"},{text:"政府負擔",value:"government"}]}},methods:{dayCalc:function(){var e=0;if(this.dates.length>1){for(var r=this.dates[0].split("-"),a=this.dates[1].split("-"),t=0;t<3;t++)r[t]=parseInt(r[t]),a[t]=parseInt(a[t]);var n=r[0];r[0]-=n,a[0]-=n,a[1]=12*a[0]+a[1];while(r[1]!=a[1])a[2]>30?e+=30:e+=a[2],a[2]=30,a[1]-=1;r[2]>=30?e+=1:e+=a[2]-r[2]+1}else e=1;this.totalDate=e},laborPaymentCalculate:function(){for(var e=this.laborRangeSet.length-1;e>=0;e--){var r=this.laborRangeSet[e];if(this.salary>=r.rangeStart){this.laborSalaryLevel=r;break}}for(var a=0;a<4;a++)this.Insurance[a].government=0,this.Insurance[a].company=0,this.Insurance[a].self=0;var t=0,n=0,l=0,m=0;for(a=0;a<5;a++){var i=this.Insurance[a];if("普通事故保險費"==i.name)t=.1*this.laborSalaryLevel.premium;else{if("職業災害保險費"==i.name){i.company=Math.round(this.laborSalaryLevel.premium*this.rate/100/30*this.totalDate),l+=i.company;continue}if("就業保險費"==i.name)t=.01*this.laborSalaryLevel.premium;else if("總計勞保負擔保費"==i.name){i.government=n,i.company=l,i.self=m;continue}}i.government=Math.round(.1*t/30*this.totalDate),i.company=Math.round(.7*t/30*this.totalDate),i.self=Math.round(.2*t/30*this.totalDate),n+=i.government,l+=i.company,m+=i.self}},healthPaymentCalculate:function(){for(var e=this.healthRangeSet.length-1;e>=0;e--){var r=this.healthRangeSet[e];if(this.salary>=r.rangeStart){this.healthSalaryLevel=r;break}}for(var a=0,t=0;t<this.Insurance.length;t++)"健保保險費"==this.Insurance[t].name&&(a=t);var n=.0469;this.Insurance[a].government=Math.round(this.healthSalaryLevel.premium*n*.1*1.58),this.Insurance[a].company=Math.round(this.healthSalaryLevel.premium*n*.6*1.58),this.Insurance[a].self=Math.round(this.healthSalaryLevel.premium*n*.3)},onVarChange:function(){this.dayCalc(),this.laborPaymentCalculate(),this.healthPaymentCalculate()}}}),i=m,s=a("2877"),o=a("6544"),u=a.n(o),g=a("0798"),d=a("7496"),v=a("62ad"),p=a("a523"),c=a("8fea"),h=a("2e4b"),f=a("ce7e"),S=a("0fd9"),E=a("b974"),y=a("8654"),b=Object(s["a"])(i,n,l,!1,null,null,null),x=b.exports;u()(b,{VAlert:g["a"],VApp:d["a"],VCol:v["a"],VContainer:p["a"],VDataTable:c["a"],VDatePicker:h["a"],VDivider:f["a"],VRow:S["a"],VSelect:E["a"],VTextField:y["a"]});var C=a("f309");t["a"].use(C["a"]);var w=new C["a"]({});t["a"].config.productionTip=!1,new t["a"]({vuetify:w,render:function(e){return e(x)}}).$mount("#app")}});