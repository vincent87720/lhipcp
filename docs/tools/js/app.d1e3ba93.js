(function(e){function a(a){for(var r,s,i=a[0],o=a[1],c=a[2],d=0,u=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&u.push(n[s][0]),n[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);m&&m(a);while(u.length)u.shift()();return l.push.apply(l,c||[]),t()}function t(){for(var e,a=0;a<l.length;a++){for(var t=l[a],r=!0,i=1;i<t.length;i++){var o=t[i];0!==n[o]&&(r=!1)}r&&(l.splice(a--,1),e=s(s.s=t[0]))}return e}var r={},n={app:0},l=[];function s(a){if(r[a])return r[a].exports;var t=r[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=r,s.d=function(e,a,t){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var r in e)s.d(t,r,function(a){return e[a]}.bind(null,r));return t},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=a,i=i.slice();for(var c=0;c<i.length;c++)a(i[c]);var m=o;l.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-app",[t("v-container",{attrs:{fluid:""}},[t("v-row",{attrs:{align:"center"}},[t("v-col",{staticClass:"d-flex justify-start order-1 order-md-0",attrs:{cols:"6",sm:"6",md:"4"}},[t("v-speed-dial",{staticClass:"mt-4 mb-4",attrs:{direction:"right",transition:"slide-x-transition"},scopedSlots:e._u([{key:"activator",fn:function(){return[t("v-btn",{attrs:{color:"blue-grey",dark:"",fab:"",small:""},model:{value:e.speedDialMode,callback:function(a){e.speedDialMode=a},expression:"speedDialMode"}},[e.speedDialMode?t("v-icon",[e._v(" mdi-close ")]):t("v-icon",[e._v(" mdi-dots-horizontal ")])],1)]},proxy:!0}]),model:{value:e.speedDialMode,callback:function(a){e.speedDialMode=a},expression:"speedDialMode"}},[t("div",{staticClass:"d-flex flex-column justify-start mt-4"},[t("v-switch",{staticClass:"pa-0 ma-0",staticStyle:{width:"190px"},attrs:{color:"blue-grey",inset:"",dense:"",label:e.modeSwitch?"雇主":"員工"},on:{change:function(a){return e.onVarChange()}},model:{value:e.modeSwitch,callback:function(a){e.modeSwitch=a},expression:"modeSwitch"}}),t("v-switch",{staticClass:"pa-0 ma-0",attrs:{color:"blue-grey",inset:"",dense:"",label:e.stateChange?"有加退保":"無加退保"},on:{change:function(a){return e.onVarChange()}},model:{value:e.stateChange,callback:function(a){e.stateChange=a},expression:"stateChange"}}),t("v-switch",{staticClass:"pa-0 ma-0",attrs:{color:"blue-grey",inset:"",dense:"",label:e.stateChangeInSameMonth?"同月份加退保":"非同月加退保"},on:{change:function(a){return e.onVarChange()}},model:{value:e.stateChangeInSameMonth,callback:function(a){e.stateChangeInSameMonth=a},expression:"stateChangeInSameMonth"}})],1)])],1),t("v-col",{staticClass:"d-flex justify-center order-0 order-md-1",attrs:{cols:"12",sm:"12",md:"4"}},[t("h2",[e._v("勞健保計算程式")])]),t("v-col",{staticClass:"d-flex justify-end align-center order-2 order-md-2",attrs:{cols:"6",sm:"6",md:"4"}},[t("v-speed-dial",{staticClass:"mt-4 mb-4",attrs:{direction:"left",transition:"slide-x-reverse-transition"},scopedSlots:e._u([{key:"activator",fn:function(){return[t("v-btn",{attrs:{color:"blue-grey",dark:"",fab:"",small:""},model:{value:e.tableSpeedDial,callback:function(a){e.tableSpeedDial=a},expression:"tableSpeedDial"}},[e.tableSpeedDial?t("v-icon",[e._v(" mdi-close ")]):t("v-icon",[e._v(" mdi-table ")])],1)]},proxy:!0}]),model:{value:e.tableSpeedDial,callback:function(a){e.tableSpeedDial=a},expression:"tableSpeedDial"}},[t("v-btn",{staticClass:"ma-2",attrs:{color:"blue-grey",dark:"",small:""},on:{click:function(a){a.stopPropagation(),e.activeTableID=0,e.activeTable=e.laborRangeSet,e.rangeSetDialog=!0}}},[e._v(" 勞保 ")]),t("v-btn",{staticClass:"ma-2",attrs:{color:"blue-grey lighten-1",dark:"",small:""},on:{click:function(a){a.stopPropagation(),e.activeTableID=2,e.activeTable=e.healthRangeSet,e.rangeSetDialog=!0}}},[e._v(" 勞退 ")]),t("v-btn",{staticClass:"ma-2 blue-grey--text",attrs:{color:"blue-grey lighten-5",plain:"",small:""},on:{click:function(a){a.stopPropagation(),e.activeTableID=1,e.activeTable=e.pensionRangeSet,e.rangeSetDialog=!0}}},[e._v(" 健保 ")])],1)],1)],1),t("v-row",[t("v-col",{staticClass:"order-0",attrs:{cols:"12",md:"6",sm:"12"}},[t("v-text-field",{attrs:{label:"薪水",type:"tel",color:"blue-grey",dense:""},on:{keyup:e.onVarChange},model:{value:e.salary,callback:function(a){e.salary=a},expression:"salary"}})],1),t("v-col",{staticClass:"order-1",attrs:{cols:"12",md:"6",sm:"12"}},[t("v-select",{attrs:{label:"適用職業災害費率",items:e.items,color:"blue-grey",dense:""},on:{input:e.onVarChange},model:{value:e.rate,callback:function(a){e.rate=a},expression:"rate"}})],1),t("v-col",{staticClass:"order-2",attrs:{cols:"12",md:"6",sm:"12"}},[t("v-date-picker",{attrs:{color:"blue-grey","full-width":"",scrollable:"",range:""},on:{input:e.onVarChange},model:{value:e.dates,callback:function(a){e.dates=a},expression:"dates"}})],1),t("v-col",{staticClass:"d-flex d-md-none order-3"},[t("v-divider")],1),t("v-col",{staticClass:"order-11 order-md-3",attrs:{cols:"12",md:"6",sm:"12"}},[t("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.table_Headers,items:e.Insurance,"hide-default-footer":""}})],1),t("v-col",{staticClass:"order-4",attrs:{cols:"12",md:"12",sm:"12"}},[t("v-alert",{staticClass:"d-flex justify-center align-center",attrs:{color:"blue-grey",outlined:"",dense:""}},[1==e.modeSwitch?t("h3",[e._v("勞保+健保+勞退 雇主負擔總計"+e._s(e.Insurance[3].company+e.Insurance[4].company+e.Insurance[5].company)+"元")]):t("h3",[e._v("勞保+健保 自行負擔總計"+e._s(e.Insurance[3].self+e.Insurance[4].self)+"元")])])],1),t("v-col",{staticClass:"order-5",attrs:{cols:"12",md:"4",sm:"12"}},[t("v-alert",{staticClass:"d-flex justify-center align-center",attrs:{border:"top",color:"blue-grey",dark:"",dense:""}},[t("h3",[e._v("勞保"+e._s(e.modeSwitch?"雇主":"自行")+"負擔總計"+e._s(e.modeSwitch?e.Insurance[3].company:e.Insurance[3].self)+"元")])])],1),t("v-col",{staticClass:"order-6",attrs:{cols:"12",md:"4",sm:"12"}},[t("v-alert",{staticClass:"d-flex justify-center align-center",attrs:{border:"top",color:"blue-grey lighten-1",dark:"",dense:""}},[t("h3",[e._v("勞退"+e._s(e.modeSwitch?"雇主":"自行")+"負擔總計"+e._s(e.modeSwitch?e.Insurance[5].company:e.Insurance[5].self)+"元")])])],1),t("v-col",{staticClass:"order-7",attrs:{cols:"12",md:"4",sm:"12"}},[t("v-alert",{staticClass:"d-flex justify-center align-center",attrs:{border:"top",color:"blue-grey",text:"",dense:""}},[t("h3",[e._v("健保"+e._s(e.modeSwitch?"雇主":"自行")+"負擔總計"+e._s(e.modeSwitch?e.Insurance[4].company:e.Insurance[4].self)+"元")])])],1),t("v-col",{staticClass:"order-8 d-flex align-stretch flex-column",attrs:{cols:"12",md:"4",sm:"12"}},[t("v-alert",{staticClass:"d-flex justify-start justify-md-center align-center",attrs:{color:"blue-grey",dark:"",dense:""}},[t("h3",[e._v("普通事故保險費")]),e.modeSwitch?t("p",[e._v(" "+e._s(e.laborSalaryLevel.premium)+"(投保薪資) *"+e._s(100*e.ordinaryAccidentInsuranceRate)+"%(普通事故保險費費率) *70%(雇主負擔比率) /30(每月天數) *"+e._s(e.totalDate)+"(實際天數) ="+e._s(e.Insurance[0].company)+" ")]):t("p",[e._v(" "+e._s(e.laborSalaryLevel.premium)+"(投保薪資) *"+e._s(100*e.ordinaryAccidentInsuranceRate)+"%(普通事故保險費費率) *20%(自行負擔比率) /30(每月天數) *"+e._s(e.totalDate)+"(實際天數) ="+e._s(e.Insurance[0].self)+" ")]),t("h3",[e._v("+")]),t("h3",[e._v("職業災害保險費")]),e.modeSwitch?t("p",[e._v(" "+e._s(e.laborSalaryLevel.premium)+"(投保薪資) *"+e._s(e.rate)+"%(職業災害保險費費率) /30(每月天數) *"+e._s(e.totalDate)+"(實際天數) ="+e._s(e.Insurance[1].company)+" ")]):t("p",[e._v(" 0 ")]),t("h3",[e._v("+")]),t("h3",[e._v("就業保險費")]),e.modeSwitch?t("p",[e._v(" "+e._s(e.laborSalaryLevel.premium)+"(投保薪資) *"+e._s(100*e.employmentInsuranceRate)+"%(就業保險費費率) *70%(雇主負擔比率) /30(每月天數) *"+e._s(e.totalDate)+"(實際天數) ="+e._s(e.Insurance[2].company)+" ")]):t("p",[e._v(" "+e._s(e.laborSalaryLevel.premium)+"(投保薪資) *"+e._s(100*e.employmentInsuranceRate)+"%(就業保險費費率) *20%(雇主負擔比率) /30(每月天數) *"+e._s(e.totalDate)+"(實際天數) ="+e._s(e.Insurance[2].self)+" ")]),t("h3",[e._v("=")]),t("h3",[e._v("總金額")]),t("h3",[e._v(e._s(e.modeSwitch?e.Insurance[3].company:e.Insurance[3].self))])])],1),t("v-col",{staticClass:"order-9 d-flex align-stretch flex-column",attrs:{cols:"12",md:"4",sm:"12"}},[t("v-alert",{staticClass:"d-flex justify-start justify-md-center align-stretch fill-height",attrs:{color:"blue-grey lighten-1",dark:"",dense:""}},[t("h3",[e._v("勞工退休金"+e._s(e.modeSwitch?"":"(非強制提繳)"))]),e.fullMonth?t("p",[e._v(" "+e._s(e.pensionSalaryLevel.premium)+"(月提繳薪資) "+e._s(e.modeSwitch?"*6%(雇主提繳比率)":"*3.5%(全月自願提繳比率)")+" ="+e._s(e.modeSwitch?e.Insurance[5].company:e.Insurance[5].self)+" ")]):t("p",[e._v(" "+e._s(e.pensionSalaryLevel.premium)+"(月提繳薪資) /30(每月天數) *"+e._s(e.totalDate)+"(實際天數) "+e._s(e.modeSwitch?"*6%(雇主提繳比率)":"*2%(非全月自願提繳比率)")+" ="+e._s(e.modeSwitch?e.Insurance[5].company:e.Insurance[5].self)+" ")]),t("h3",[e._v("=")]),t("h3",[e._v("總金額")]),t("h3",[e._v(e._s(e.modeSwitch?e.Insurance[5].company:e.Insurance[5].self))])])],1),t("v-col",{staticClass:"order-10 d-flex align-stretch flex-column",attrs:{cols:"12",md:"4",sm:"12"}},[t("v-alert",{staticClass:"d-flex justify-start justify-md-center align-stretch fill-height",attrs:{color:"blue-grey",dark:"",dense:"",text:""}},[t("h3",[e._v("健保保險費")]),e.modeSwitch?t("p",[e._v(" "+e._s(e.healthSalaryLevel.premium)+"(投保薪資) *"+e._s(100*e.healthInsuranceRate)+"%(健保保險費費率) *60%(雇主負擔比率) *"+e._s(e.totalMonth)+"(月份數量) *1.58(1+平均眷口數) ="+e._s(e.Insurance[4].company)+" ")]):t("p",[e._v(" "+e._s(e.healthSalaryLevel.premium)+"(投保薪資) *"+e._s(100*e.healthInsuranceRate)+"%(健保保險費費率) *30%(自行負擔比率) *"+e._s(e.totalMonth)+"(月份數量) ="+e._s(e.Insurance[4].self)+" ")]),t("h3",[e._v("=")]),t("h3",[e._v("總金額")]),t("h3",[e._v(e._s(e.modeSwitch?e.Insurance[4].company:e.Insurance[4].self))])])],1)],1)],1),t("v-dialog",{attrs:{width:"500"},model:{value:e.rangeSetDialog,callback:function(a){e.rangeSetDialog=a},expression:"rangeSetDialog"}},[t("v-card",[t("v-card-title",{staticClass:"headline"},[e._v(" "+e._s(e.rageSetTable[e.activeTableID].title)+" ")]),t("v-divider"),t("v-card-text",[t("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[t("thead",[t("tr",[t("th",{staticClass:"text-left"},[e._v(" "+e._s(e.rageSetTable[e.activeTableID].col1)+" ")]),t("th",{staticClass:"text-left"},[e._v(" "+e._s(e.rageSetTable[e.activeTableID].col2)+" ")]),t("th",{staticClass:"text-left"},[e._v(" "+e._s(e.rageSetTable[e.activeTableID].col3)+" ")]),t("th",{staticClass:"text-left"},[e._v(" "+e._s(e.rageSetTable[e.activeTableID].col4)+" ")])])]),t("tbody",e._l(e.activeTable,(function(a){return t("tr",{key:a.level},[t("td",[e._v(e._s(a.level))]),t("td",[e._v(e._s(a.rangeStart))]),t("td",[e._v(e._s(null==a.rangeEnd?">"+a.rangeStart:a.rangeEnd))]),t("td",[e._v(e._s(a.premium))])])})),0)]},proxy:!0}])})],1),t("v-divider"),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{color:"blue-grey",text:""},on:{click:function(a){e.rangeSetDialog=!1}}},[e._v(" Close ")])],1)],1)],1)],1)},l=[],s=(t("b0c0"),t("ac1f"),t("1276"),{name:"App",components:{},data:function(){return{salary:"",rate:0,dates:[],speedDialMode:!1,tableSpeedDial:!1,modeSwitch:!1,stateChange:!1,stateChangeInSameMonth:!1,rangeSetDialog:!1,fullMonth:!0,activeTable:null,activeTableID:1,totalMonth:0,totalDate:0,laborSalaryLevel:{level:0,rangeStart:0,rangeEnd:0,premium:0},healthSalaryLevel:{level:0,rangeStart:0,rangeEnd:0,premium:0},pensionSalaryLevel:{level:0,rangeStart:0,rangeEnd:0,premium:0},ordinaryAccidentInsuranceRate:.105,employmentInsuranceRate:.01,healthInsuranceRate:.0517,laborRangeSet:[{level:1,rangeStart:0,rangeEnd:24e3,premium:24e3},{level:2,rangeStart:24001,rangeEnd:25200,premium:25200},{level:3,rangeStart:25201,rangeEnd:26400,premium:26400},{level:4,rangeStart:26401,rangeEnd:27600,premium:27600},{level:5,rangeStart:27601,rangeEnd:28800,premium:28800},{level:6,rangeStart:28801,rangeEnd:30300,premium:30300},{level:7,rangeStart:30301,rangeEnd:31800,premium:31800},{level:8,rangeStart:31801,rangeEnd:33300,premium:33300},{level:9,rangeStart:33301,rangeEnd:34800,premium:34800},{level:10,rangeStart:34801,rangeEnd:36300,premium:36300},{level:11,rangeStart:36301,rangeEnd:38200,premium:38200},{level:12,rangeStart:38201,rangeEnd:40100,premium:40100},{level:13,rangeStart:40101,rangeEnd:42e3,premium:42e3},{level:14,rangeStart:42001,rangeEnd:43900,premium:43900},{level:15,rangeStart:43901,rangeEnd:null,premium:45800}],healthRangeSet:[{level:1,rangeStart:0,rangeEnd:24e3,premium:24e3},{level:2,rangeStart:24001,rangeEnd:25200,premium:25200},{level:3,rangeStart:25201,rangeEnd:26400,premium:26400},{level:4,rangeStart:26401,rangeEnd:27600,premium:27600},{level:5,rangeStart:27601,rangeEnd:28800,premium:28800},{level:6,rangeStart:28801,rangeEnd:30300,premium:30300},{level:7,rangeStart:30301,rangeEnd:31800,premium:31800},{level:8,rangeStart:31801,rangeEnd:33300,premium:33300},{level:9,rangeStart:33301,rangeEnd:34800,premium:34800},{level:10,rangeStart:34801,rangeEnd:36300,premium:36300},{level:11,rangeStart:36301,rangeEnd:38200,premium:38200},{level:12,rangeStart:38201,rangeEnd:40100,premium:40100},{level:13,rangeStart:40101,rangeEnd:42e3,premium:42e3},{level:14,rangeStart:42001,rangeEnd:43900,premium:43900},{level:15,rangeStart:43901,rangeEnd:45800,premium:45800},{level:16,rangeStart:45801,rangeEnd:48200,premium:48200},{level:17,rangeStart:48201,rangeEnd:50600,premium:50600},{level:18,rangeStart:50601,rangeEnd:53e3,premium:53e3},{level:19,rangeStart:53001,rangeEnd:55400,premium:55400},{level:20,rangeStart:55401,rangeEnd:57800,premium:57800},{level:21,rangeStart:57801,rangeEnd:60800,premium:60800},{level:22,rangeStart:60801,rangeEnd:63800,premium:63800},{level:23,rangeStart:63801,rangeEnd:66800,premium:66800},{level:24,rangeStart:66801,rangeEnd:69800,premium:69800},{level:25,rangeStart:69801,rangeEnd:72800,premium:72800},{level:26,rangeStart:72801,rangeEnd:76500,premium:76500},{level:27,rangeStart:76501,rangeEnd:80200,premium:80200},{level:28,rangeStart:80201,rangeEnd:83900,premium:83900},{level:29,rangeStart:83901,rangeEnd:87600,premium:87600},{level:30,rangeStart:87601,rangeEnd:92100,premium:92100},{level:31,rangeStart:92101,rangeEnd:96600,premium:96600},{level:32,rangeStart:96601,rangeEnd:101100,premium:101100},{level:33,rangeStart:101101,rangeEnd:105600,premium:105600},{level:34,rangeStart:105601,rangeEnd:110100,premium:110100},{level:35,rangeStart:110101,rangeEnd:115500,premium:115500},{level:36,rangeStart:115501,rangeEnd:120900,premium:120900},{level:37,rangeStart:120901,rangeEnd:126300,premium:126300},{level:38,rangeStart:126301,rangeEnd:131700,premium:131700},{level:39,rangeStart:131701,rangeEnd:137100,premium:137100},{level:40,rangeStart:137101,rangeEnd:142500,premium:142500},{level:41,rangeStart:142501,rangeEnd:147900,premium:147900},{level:42,rangeStart:147901,rangeEnd:15e4,premium:15e4},{level:43,rangeStart:150001,rangeEnd:156400,premium:156400},{level:44,rangeStart:156401,rangeEnd:162800,premium:162800},{level:45,rangeStart:162801,rangeEnd:169200,premium:169200},{level:46,rangeStart:169201,rangeEnd:175600,premium:175600},{level:47,rangeStart:175601,rangeEnd:null,premium:182e3}],pensionRangeSet:[{level:1,rangeStart:0,rangeEnd:1500,premium:1500},{level:2,rangeStart:1501,rangeEnd:3e3,premium:3e3},{level:3,rangeStart:3001,rangeEnd:4500,premium:4500},{level:4,rangeStart:4501,rangeEnd:6e3,premium:6e3},{level:5,rangeStart:6001,rangeEnd:7500,premium:7500},{level:6,rangeStart:7501,rangeEnd:8700,premium:8700},{level:7,rangeStart:8701,rangeEnd:9900,premium:9900},{level:8,rangeStart:9901,rangeEnd:11100,premium:11100},{level:9,rangeStart:11101,rangeEnd:12540,premium:12540},{level:10,rangeStart:12541,rangeEnd:13500,premium:13500},{level:11,rangeStart:13501,rangeEnd:15840,premium:15840},{level:12,rangeStart:15841,rangeEnd:16500,premium:16500},{level:13,rangeStart:16501,rangeEnd:17280,premium:17280},{level:14,rangeStart:17281,rangeEnd:17880,premium:17880},{level:15,rangeStart:17881,rangeEnd:19047,premium:19047},{level:16,rangeStart:19048,rangeEnd:20008,premium:20008},{level:17,rangeStart:20009,rangeEnd:21009,premium:21009},{level:18,rangeStart:21010,rangeEnd:22e3,premium:22e3},{level:19,rangeStart:22001,rangeEnd:23100,premium:23100},{level:20,rangeStart:23101,rangeEnd:24e3,premium:24e3},{level:21,rangeStart:24001,rangeEnd:25200,premium:25200},{level:22,rangeStart:25201,rangeEnd:26400,premium:26400},{level:23,rangeStart:26401,rangeEnd:27600,premium:27600},{level:24,rangeStart:27601,rangeEnd:28800,premium:28800},{level:25,rangeStart:28801,rangeEnd:30300,premium:30300},{level:26,rangeStart:30301,rangeEnd:31800,premium:31800},{level:27,rangeStart:31801,rangeEnd:33300,premium:33300},{level:28,rangeStart:33301,rangeEnd:34800,premium:34800},{level:29,rangeStart:34801,rangeEnd:36300,premium:36300},{level:30,rangeStart:36301,rangeEnd:38200,premium:38200},{level:31,rangeStart:38201,rangeEnd:40100,premium:40100},{level:32,rangeStart:40101,rangeEnd:42e3,premium:42e3},{level:33,rangeStart:42001,rangeEnd:43900,premium:43900},{level:34,rangeStart:43901,rangeEnd:45800,premium:45800},{level:35,rangeStart:45801,rangeEnd:48200,premium:48200},{level:36,rangeStart:48201,rangeEnd:50600,premium:50600},{level:37,rangeStart:50601,rangeEnd:53e3,premium:53e3},{level:38,rangeStart:53001,rangeEnd:55400,premium:55400},{level:39,rangeStart:55401,rangeEnd:57800,premium:57800},{level:40,rangeStart:57801,rangeEnd:60800,premium:60800},{level:41,rangeStart:60801,rangeEnd:63800,premium:63800},{level:42,rangeStart:63801,rangeEnd:66800,premium:66800},{level:43,rangeStart:66801,rangeEnd:69800,premium:69800},{level:44,rangeStart:69801,rangeEnd:72800,premium:72800},{level:45,rangeStart:72801,rangeEnd:76500,premium:76500},{level:46,rangeStart:76501,rangeEnd:80200,premium:80200},{level:47,rangeStart:80201,rangeEnd:83900,premium:83900},{level:48,rangeStart:83901,rangeEnd:87600,premium:87600},{level:49,rangeStart:87601,rangeEnd:92100,premium:92100},{level:50,rangeStart:92101,rangeEnd:96600,premium:96600},{level:51,rangeStart:96601,rangeEnd:101100,premium:101100},{level:52,rangeStart:101101,rangeEnd:105600,premium:105600},{level:53,rangeStart:105601,rangeEnd:110100,premium:110100},{level:54,rangeStart:110101,rangeEnd:115500,premium:115500},{level:55,rangeStart:115501,rangeEnd:120900,premium:120900},{level:56,rangeStart:120901,rangeEnd:126300,premium:126300},{level:57,rangeStart:126301,rangeEnd:131700,premium:131700},{level:58,rangeStart:131701,rangeEnd:137100,premium:137100},{level:59,rangeStart:137101,rangeEnd:142500,premium:142500},{level:60,rangeStart:142501,rangeEnd:147900,premium:147900},{level:61,rangeStart:147901,rangeEnd:null,premium:15e4}],Insurance:[{name:"普通事故保險費",government:0,company:0,self:0},{name:"職業災害保險費",government:0,company:0,self:0},{name:"就業保險費",government:0,company:0,self:0},{name:"總計勞保負擔保費",government:0,company:0,self:0},{name:"健保保險費",government:0,company:0,self:0},{name:"勞工退休金",government:0,company:0,self:0}],table_Headers:[{text:" ",align:"start",sortable:!1,value:"name"},{text:"雇主負擔",value:"company"},{text:"自行負擔",value:"self"},{text:"政府負擔",value:"government"}],items:[.11,.12,.13,.15,.16,.17,.18,.19,.2,.21,.22,.23,.24,.26,.27,.28,.37,.39,.4,.41,.47,.48,.53,.61,.92,.96],rageSetTable:[{id:0,title:"勞工保險投保薪資分級表",col1:"投保薪資等級",col2:"起始薪資",col3:"結束薪資",col4:"月投保薪資"},{id:1,title:"全民健康保險投保薪資分級表",col1:"投保薪資等級",col2:"起始薪資",col3:"結束薪資",col4:"月投保薪資"},{id:2,title:"勞工退休金提繳薪資分級表",col1:"提繳薪資等級",col2:"起始薪資",col3:"結束薪資",col4:"月提繳薪資"}]}},methods:{checkLeapYear:function(e){return e%4==0&&e%100!=0||e%400==0},getLastDay:function(e,a){var t=0;switch(e){case 1:case 3:case 5:case 7:case 8:case 10:case 12:t=31;break;case 4:case 6:case 9:case 11:t=30;break;case 2:t=a?29:28;break;default:t=30}return t},checkFullMonth:function(e,a){var t=!1,r=0;return 1==e[2]&&(t=this.checkLeapYear(a[0]),r=this.getLastDay(a[1],t),r==a[2])},dayCalc:function(){this.fullMonth=!1;var e=0;if(this.dates.length>1){for(var a=this.dates[0].split("-"),t=this.dates[1].split("-"),r=0;r<3;r++)a[r]=parseInt(a[r]),t[r]=parseInt(t[r]);var n=[],l=new Date(this.dates[0]).getTime(),s=new Date(this.dates[1]).getTime();l>s&&(n=a,a=t,t=n),this.fullMonth=this.checkFullMonth(a,t);var i=t[0]-a[0],o=a[1],c=12*i+t[1];this.totalMonth=c-o+1;var m=!1,d=30;m=this.checkLeapYear(t[0]),d=this.getLastDay(t[1],m),this.getLastDay(a[1],m),1==this.stateChangeInSameMonth?(t[2]>30&&(t[2]=30),e=t[2]-a[2]+1):1==a[2]&&t[2]==d&&0==this.stateChange?e=30*(c-o+1):(this.totalMonth<2&&(1==a[2]&&t[2]!=d?(t[2]>30&&(t[2]=30),e=t[2]):1!=a[2]&&t[2]==d?(a[2]>30&&(a[2]=30),e=30-a[2]+1):(1==a[2]&&t[2]==d||1!=a[2]&&t[2]!=d)&&(t[2]>30&&(t[2]=30),e=t[2]-a[2]+1)),this.totalMonth>=2&&(d==t[2]?e+=30:e+=t[2],1==a[2]?e+=30:a[2]>=30?e+=1:e+=30-a[2]+1),this.totalMonth>2&&(e+=30*(this.totalMonth-2)))}else e=1;this.totalDate=e},test_dayCalc:function(){for(var e=[{date:["2020-01-01","2020-01-01"],expectedDays:1},{date:["2020-01-01","2020-01-02"],expectedDays:2},{date:["2020-01-01","2020-01-29"],expectedDays:29},{date:["2020-01-01","2020-01-30"],expectedDays:30},{date:["2020-01-01","2020-01-31"],expectedDays:30},{date:["2020-01-02","2020-01-29"],expectedDays:28},{date:["2020-01-02","2020-01-30"],expectedDays:29},{date:["2020-01-02","2020-01-31"],expectedDays:30},{date:["2020-01-29","2020-01-31"],expectedDays:3},{date:["2020-01-30","2020-01-31"],expectedDays:1},{date:["2020-01-01","2020-02-01"],expectedDays:31},{date:["2020-01-01","2020-02-28"],expectedDays:58},{date:["2020-01-01","2020-02-29"],expectedDays:60},{date:["2020-01-02","2020-02-28"],expectedDays:58},{date:["2020-01-03","2020-02-28"],expectedDays:57},{date:["2020-01-03","2020-02-29"],expectedDays:59},{date:["2020-01-01","2020-03-29"],expectedDays:89},{date:["2020-01-01","2020-03-30"],expectedDays:90},{date:["2020-01-01","2020-03-31"],expectedDays:90},{date:["2020-01-02","2020-03-29"],expectedDays:89},{date:["2020-01-02","2020-03-30"],expectedDays:90},{date:["2020-01-02","2020-03-31"],expectedDays:90},{date:["2020-01-03","2020-03-29"],expectedDays:88},{date:["2020-01-03","2020-03-30"],expectedDays:89},{date:["2020-01-03","2020-03-31"],expectedDays:89}],a=!0,t=0;t<e.length;t++)this.dates=e[t].date,this.dayCalc(),this.totalDate!=e[t].expectedDays&&(console.log("testDate:",e[t].date,"expectedDays:",e[t].expectedDays," actual:",this.totalDate),a=!1);console.log("test_dayCalc: ",a?"pass":"fail")},laborPaymentCalculate:function(){for(var e=this.laborRangeSet.length-1;e>=0;e--){var a=this.laborRangeSet[e];if(this.salary>=a.rangeStart){this.laborSalaryLevel=a;break}}for(var t=0;t<4;t++)this.Insurance[t].government=0,this.Insurance[t].company=0,this.Insurance[t].self=0;var r=0,n=0,l=0,s=0;for(t=0;t<5;t++){var i=this.Insurance[t];if("普通事故保險費"==i.name)r=this.laborSalaryLevel.premium*this.ordinaryAccidentInsuranceRate;else{if("職業災害保險費"==i.name){i.company=Math.round(this.laborSalaryLevel.premium*this.rate/100/30*this.totalDate),l+=i.company;continue}if("就業保險費"==i.name)r=this.laborSalaryLevel.premium*this.employmentInsuranceRate;else if("總計勞保負擔保費"==i.name){i.government=n,i.company=l,i.self=s;continue}}i.government=Math.round(.1*r/30*this.totalDate),i.company=Math.round(.7*r/30*this.totalDate),i.self=Math.round(.2*r/30*this.totalDate),n+=i.government,l+=i.company,s+=i.self}},healthPaymentCalculate:function(){for(var e=this.healthRangeSet.length-1;e>=0;e--){var a=this.healthRangeSet[e];if(this.salary>=a.rangeStart){this.healthSalaryLevel=a;break}}for(var t=0,r=0;r<this.Insurance.length;r++)"健保保險費"==this.Insurance[r].name&&(t=r);this.Insurance[t].government=Math.round(this.healthSalaryLevel.premium*this.healthInsuranceRate*.1*1.58*this.totalMonth),this.Insurance[t].company=Math.round(this.healthSalaryLevel.premium*this.healthInsuranceRate*.6*1.58*this.totalMonth),this.Insurance[t].self=Math.round(this.healthSalaryLevel.premium*this.healthInsuranceRate*.3*this.totalMonth)},pensionPaymentCalculate:function(){for(var e=this.pensionRangeSet.length-1;e>=0;e--){var a=this.pensionRangeSet[e];if(this.salary>=a.rangeStart){this.pensionSalaryLevel=a;break}}for(var t=0,r=0;r<this.Insurance.length;r++)"勞工退休金"==this.Insurance[r].name&&(t=r);1==this.fullMonth?(this.Insurance[t].company=Math.round(.06*this.pensionSalaryLevel.premium),this.Insurance[t].self=Math.round(.035*this.pensionSalaryLevel.premium)):(this.Insurance[t].company=Math.round(this.pensionSalaryLevel.premium/30*.06*parseInt(this.totalDate/30)+this.pensionSalaryLevel.premium/30*.06*(this.totalDate%30)),this.Insurance[t].self=Math.round(this.pensionSalaryLevel.premium/30*.035*parseInt(this.totalDate/30)+this.pensionSalaryLevel.premium/30*.02*(this.totalDate%30)))},onVarChange:function(){this.dayCalc(),this.laborPaymentCalculate(),this.healthPaymentCalculate(),this.pensionPaymentCalculate()}}}),i=s,o=t("2877"),c=t("6544"),m=t.n(c),d=t("0798"),u=t("7496"),g=t("8336"),p=t("b0af"),v=t("99d9"),h=t("62ad"),S=t("a523"),f=t("8fea"),y=t("2e4b"),b=t("169a"),E=t("ce7e"),_=t("132d"),D=t("0fd9"),x=t("b974"),I=t("1f4f"),C=t("2fa4"),w=t("c73b"),k=t("b73d"),M=t("8654"),L=Object(o["a"])(i,n,l,!1,null,null,null),T=L.exports;m()(L,{VAlert:d["a"],VApp:u["a"],VBtn:g["a"],VCard:p["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:v["c"],VCol:h["a"],VContainer:S["a"],VDataTable:f["a"],VDatePicker:y["a"],VDialog:b["a"],VDivider:E["a"],VIcon:_["a"],VRow:D["a"],VSelect:x["a"],VSimpleTable:I["a"],VSpacer:C["a"],VSpeedDial:w["a"],VSwitch:k["a"],VTextField:M["a"]});var V=t("f309");t("5363");r["a"].use(V["a"]);var R=new V["a"]({icons:{iconfont:"mdi"}}),j=t("9483");Object(j["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({vuetify:R,render:function(e){return e(T)}}).$mount("#app")}});