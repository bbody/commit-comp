(function(t){function e(e){for(var a,i,o=e[0],u=e[1],c=e[2],d=0,f=[];d<o.length;d++)i=o[d],s[i]&&f.push(s[i][0]),s[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(f.length)f.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],a=!0,o=1;o<r.length;o++){var u=r[o];0!==s[u]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},s={app:0},n=[];function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},"03f4":function(t,e,r){"use strict";var a=r("f9bf"),s=r.n(a);s.a},4678:function(t,e,r){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=n(t);return r(e)}function n(t){var e=a[t];if(!(e+1)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return e}s.keys=function(){return Object.keys(a)},s.resolve=n,t.exports=s,s.id="4678"},cd49:function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("v-app",[r("router-view")],1)],1)},n=[],i=(r("96cf"),r("3b8d")),o=(r("ac6a"),r("28a5"),r("d225")),u=r("b0b4"),c=r("308d"),l=r("6bb5"),d=r("4e2b"),f=r("9ab4"),b=r("65d9"),m=r.n(b),v=r("4bb5"),j=r("c1df"),p=r.n(j),h=function(t){var e=p()(t,"YYYY-MM-DD",!0);return e.isValid()},g=function(t){function e(){return Object(o["a"])(this,e),Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(d["a"])(e,t),Object(u["a"])(e,[{key:"created",value:function(){var t=this,e=this.$route.query.users,r=[];e&&(r=e.split(","));var a=this.$route.query.start&&h(this.$route.query.start)?this.$route.query.start:"",s=this.$route.query.end&&h(this.$route.query.end)?this.$route.query.end:"";if(a||s)if(s){if(!a){var n=p()(s,"YYYY-MM-DD");a=n.subtract(1,"month").format("YYYY-MM-DD")}}else{var o=p()(a,"YYYY-MM-DD");s=o.add(1,"month").format("YYYY-MM-DD")}else{var u=p()();u.date(1),a=u.format("YYYY-MM-DD"),u.add(1,"month").subtract(1,"day"),s=u.format("YYYY-MM-DD")}this.$store.dispatch("setRange",{router:this.$router,start:a,end:s}),r.forEach(function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t.$store.dispatch("getGithubData",{username:r,router:t.$router,firstRun:!0}),t.$store.commit("setValidUser","");case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())}}]),e}(a["default"]);f["a"]([Object(v["a"])("setRange")],g.prototype,"setRange",void 0),f["a"]([Object(v["c"])("setUserTriggeredAction")],g.prototype,"setUserTriggeredAction",void 0),g=f["a"]([m.a],g);var y=g,O=y,k=r("2877"),_=Object(k["a"])(O,s,n,!1,null,null,null),D=_.exports,U=r("8c4f"),C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.isDevelopmentEnvironment?t._e():[r("GithubEmbed",{attrs:{githubUrl:"https://github.com/bbody/commit-comp"}})],r("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[r("h1",[t._v("Commit Competition")]),r("v-alert",{attrs:{id:"apiError",value:t.hasAPIError,type:"error"}},[t._v("\n      API does not appear to be working, please try again later\n    ")]),r("v-layout",{attrs:{row:"",wrap:""}},[t.getAllUsersInfo?r("v-flex",{attrs:{xs12:""}},[r("UserTable")],1):t._e(),r("v-flex",{attrs:{xs12:"",md6:""}},[r("Users")],1),r("v-flex",{attrs:{xs12:"",md6:""}},[r("DateSelection")],1)],1)],1)],2)},Y=[],x=r("60a3"),w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{id:"user-card"}},[r("v-toolbar",{attrs:{color:"light-blue lighten-1",dark:""}},[r("v-toolbar-title",[t._v("Github Users")])],1),r("v-alert",{attrs:{id:"invalidUser",value:t.invalidUser,type:"error"}},[t._v("\n    "+t._s(t.invalidUser)+" is not a valid Github user.\n  ")]),r("v-alert",{attrs:{id:"usernameBlank",value:t.usernameBlank,type:"error"}},[t._v("\n    Username not entered\n  ")]),r("v-alert",{attrs:{id:"usernameDuplicate",value:t.usernameDuplicate,type:"error"}},[t._v("\n    "+t._s(t.username)+" already exists in the list\n  ")]),r("v-alert",{attrs:{id:"validUser",value:t.validUser,type:"success"}},[t._v("\n    "+t._s(t.validUser)+" was successfully added\n  ")]),r("v-list",{attrs:{"two-line":""}},[t._l(t.getUsers,function(e){return[r("v-subheader",{key:e},[r("a",{attrs:{href:"https://github.com/"+e}},[t._v(t._s(e))])])]})],2),r("v-divider"),r("v-card-actions",[r("v-text-field",{attrs:{label:"Username"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitInput(e)}},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),r("v-btn",{attrs:{color:"success",small:"",fab:""},on:{click:t.submitInput}},[r("v-icon",[t._v("add")])],1)],1)],1)},E=[],M=(r("6762"),r("2fdb"),1500),I=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.username="",t.usernameBlank=!1,t.usernameDuplicate=!1,t}return Object(d["a"])(e,t),Object(u["a"])(e,[{key:"submitInput",value:function(){var t=this,e=this.username;return e?this.getUsers.includes(e)?(this.usernameDuplicate=!0,void setTimeout(function(){t.usernameDuplicate=!1,t.username=""},M)):(this.username="",void this.$store.dispatch("getGithubData",{username:e,router:this.$router,firstRun:!1})):(this.usernameBlank=!0,void setTimeout(function(){t.usernameBlank=!1},M))}}]),e}(a["default"]);f["a"]([v["b"]],I.prototype,"getUsers",void 0),f["a"]([v["b"]],I.prototype,"invalidUser",void 0),f["a"]([v["b"]],I.prototype,"validUser",void 0),I=f["a"]([m.a],I);var $=I,z=$,P=Object(k["a"])(z,w,E,!1,null,null,null),R=P.exports,A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.getAllUsersInfo,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[r("td",[t._v(t._s(e.item.username))]),r("td",[t._v(t._s(e.item.commits))]),r("td",[t._v(t._s(e.item.daysWithCommits)+" "+t._s(1===e.item.streak?"day":"days"))]),r("td",[t._v(t._s(e.item.commitsPerDay.toFixed(2))+"/day")]),r("td",[t._v(t._s(e.item.percentageOfDays.toFixed(2))+"%")]),r("td",[t._v(t._s(e.item.streak)+" "+t._s(1===e.item.streak?"day":"days"))])]}}])})},S=[],T=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.headers=[{text:"Username",align:"center",sortable:!1,value:"username"},{text:"Total commits",align:"center",sortable:!0,value:"commits",class:"commits"},{text:"Days with commits",align:"center",sortable:!0,value:"daysWithCommits",class:"daysWithCommits"},{text:"Commits per day",align:"center",sortable:!0,value:"commitsPerDay",class:"commitsPerDay"},{text:"% of days",align:"center",sortable:!0,value:"percentageOfDays",class:"percentageOfDays"},{text:"Longest streak",align:"center",sortable:!0,value:"streak",class:"streak"}],t}return Object(d["a"])(e,t),e}(a["default"]);f["a"]([Object(v["b"])("getAllUsersInfo")],T.prototype,"getAllUsersInfo",void 0),T=f["a"]([m.a],T);var q=T,G=q,W=Object(k["a"])(G,A,S,!1,null,null,null),L=W.exports,B=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-toolbar",{attrs:{color:"light-blue lighten-1",dark:""}},[r("v-toolbar-title",[t._v("Date Range")])],1),r("v-list",{attrs:{"two-line":""}},[r("v-list-tile",[r("v-list-tile-content",{attrs:{id:"startDate"}},[r("v-list-tile-title",[t._v(t._s(t.getRange.start))]),r("v-list-tile-sub-title",[t._v("From")])],1)],1),r("v-list-tile",[r("v-list-tile-content",{attrs:{id:"endDate"}},[r("v-list-tile-title",[t._v(t._s(t.getRange.end))]),r("v-list-tile-sub-title",[t._v("Until")])],1)],1)],1),r("v-divider"),r("v-card-actions",[r("v-flex",[r("v-daterange",{attrs:{value:t.getRange},on:{input:t.changeRange}})],1)],1)],1)},F=[],V=(r("d237"),r("2765").VDaterange),Q=function(t){function e(){return Object(o["a"])(this,e),Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(d["a"])(e,t),Object(u["a"])(e,[{key:"changeRange",value:function(t){this.$store.dispatch("setRange",{router:this.$router,start:t.start,end:t.end})}}]),e}(a["default"]);f["a"]([Object(v["b"])("getRange")],Q.prototype,"getRange",void 0),f["a"]([Object(v["a"])("setRange")],Q.prototype,"setRange",void 0),Q=f["a"]([m()({components:{VDaterange:V}})],Q);var J=Q,N=J,Z=Object(k["a"])(N,B,F,!1,null,null,null),H=Z.exports,K=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.githubUrl.length?r("a",{staticClass:"github-corner",attrs:{href:t.githubUrl,"aria-label":"View source on GitHub"}},[r("svg",{staticStyle:{fill:"#70B7FD",color:"#fff",position:"absolute",top:"0",border:"0",right:"0"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[r("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),r("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),r("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])]):t._e()},X=[],tt=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.githubUrl="",t}return Object(d["a"])(e,t),e}(a["default"]);f["a"]([Object(x["b"])(String)],tt.prototype,"githubUrl",void 0),tt=f["a"]([m.a],tt);var et=tt,rt=et,at=(r("03f4"),Object(k["a"])(rt,K,X,!1,null,"a1e06d44",null)),st=at.exports,nt=function(t){function e(){return Object(o["a"])(this,e),Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(d["a"])(e,t),e}(x["c"]);f["a"]([Object(v["b"])("getContributionInfo")],nt.prototype,"getContributionInfo",void 0),f["a"]([Object(v["b"])("getAllUsersInfo")],nt.prototype,"getAllUsersInfo",void 0),f["a"]([Object(v["b"])("hasAPIError")],nt.prototype,"hasAPIError",void 0),f["a"]([Object(v["b"])("getUsernameError")],nt.prototype,"getUsernameError",void 0),f["a"]([Object(v["b"])("isDevelopmentEnvironment")],nt.prototype,"isDevelopmentEnvironment",void 0),nt=f["a"]([Object(x["a"])({components:{Users:R,DateSelection:H,UserTable:L,GithubEmbed:st}})],nt);var it=nt,ot=it,ut=Object(k["a"])(ot,C,Y,!1,null,null,null),ct=ut.exports;a["default"].use(U["a"]);var lt=new U["a"]({routes:[{path:"/",name:"home",component:ct}]}),dt=r("2f62"),ft=r("bc3a"),bt=r.n(ft),mt={setRange:function(t,e){var r=t.commit,a=e.start,s=e.end,n=e.router;a&&r("setDate",{type:"start",date:a}),s&&r("setDate",{type:"end",date:s}),r("updateQueryString",n)},getGithubData:function(t,e){var r=t.commit,a=e.username,s=e.router,n=e.firstRun;return bt.a.get("https://api.github.com/users/".concat(a)).then(function(){return r("addUser",a),n||r("setValidUser",a),r("updateQueryString",s),bt.a.get("https://github-contributions-api.now.sh/v1/".concat(a,"?format=nested")).then(function(t){return t.data.contributions}).then(function(t){r("setContributions",{username:a,payload:t})}).catch(function(t){r("setFormattedContributions",{username:a,payload:!1}),r("setAPIError",!0)})}).catch(function(t){t&&t.response&&404===t.response.status?r("setInvalidUserError",a):t&&t.response&&403===t.response.status?(r("addUser",a),r("setAPIError",!0),r("updateQueryString",s)):r("setAPIError",!0)})}},vt=2e3,jt={addUser:function(t,e){t.users.push(e)},setFormattedContributions:function(t,e){var r=e.username,s=e.payload;a["default"].set(t.formattedContributions,r,s)},setContributions:function(t,e){var r=e.username,s=e.payload;a["default"].set(t.contributionInfo,r,s)},setDate:function(t,e){var r=e.type,a=e.date;t.range[r]=a},setAPIError:function(t){t.apiError=!0},setInvalidUserError:function(t,e){t.invalidUser=e,setTimeout(function(){t.invalidUser=""},vt)},setValidUser:function(t,e){t.validUser=e,setTimeout(function(){t.validUser=""},vt)},updateQueryString:function(t,e){var r={start:t.range.start,end:t.range.end,users:t.users.join(",")};e.push({query:r})}},pt={validUser:function(t){return t.validUser},invalidUser:function(t){return t.invalidUser},getUsernameError:function(t){return t.usernameError},hasAPIError:function(t){return t.apiError},getUsers:function(t){return t.users},isDevelopmentEnvironment:function(){return!1},getRange:function(t){return t.range},getAllUsersInfo:function(t,e){var r=e.getUsers,a=[];return r.forEach(function(t){var r=e.getContributionInfo(t);r&&a.push(r)}),a},getContributionInfo:function(t){return function(e){var r=p()(t.range.start,"YYYY-MM-DD"),a=p()(t.range.end,"YYYY-MM-DD"),s={counts:[],dates:[],daysWithCommits:0,daysWithoutCommits:0,total:0,username:e,commits:0,streak:0,percentageOfDays:0,commitsPerDay:0},n=0;if(!t.contributionInfo[e])return!1;while(1){if(r.isAfter(a)||r.isSameOrAfter(p()()))break;var i=(r.year()===p()().year()?t.contributionInfo[e].contributions:t.contributionInfo[e])[r.year()][r.month()+1][r.date()];s.counts.push(i.count),s.dates.push(i.date),s.commits+=i.count,i.count>0?(s.daysWithCommits+=1,n++,s.streak=Math.max(n,s.streak)):(s.daysWithoutCommits+=1,n=0),r.add(1,"day")}return s.total=s.daysWithCommits+s.daysWithoutCommits,s.percentageOfDays=s.daysWithCommits/s.total*100,s.commits>0?s.commitsPerDay=s.commits/s.total:s.commitsPerDay=0,s}}},ht={users:[],contributionInfo:{},range:{start:p()().date(1).format("YYYY-MM-DD"),end:p()().month(p()().month()+1).subtract(1,"day").format("YYYY-MM-DD")},formattedContributions:{},heatMap:{},apiError:!1,usernameError:"",invalidUser:"",validUser:""};a["default"].use(dt["a"]);var gt=new dt["a"].Store({state:ht,getters:pt,mutations:jt,actions:mt}),yt=r("4ae6"),Ot=r.n(yt),kt=r("ce5b"),_t=r.n(kt);r("bf40");a["default"].use(Ot.a),a["default"].use(_t.a),a["default"].config.productionTip=!1,new a["default"]({router:lt,store:gt,render:function(t){return t(D)}}).$mount("#app")},f9bf:function(t,e,r){}});
//# sourceMappingURL=app.d090d52b.js.map