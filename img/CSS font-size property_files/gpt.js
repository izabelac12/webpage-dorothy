(function(){var window=this;var aa="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},g;if("function"==typeof Object.setPrototypeOf)g=Object.setPrototypeOf;else{var k;a:{var ba={H:!0},ca={};try{ca.__proto__=ba;k=ca.H;break a}catch(a){}k=!1}g=k?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var da=g,ea=function(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(da)da(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.K=b.prototype},l=this,m=function(a){return"string"==typeof a},ha=function(){if(null===n)a:{var a=l.document;if((a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&fa.test(a)){n=a;break a}n=""}return n},fa=/^[\w+/_-]+[=]{0,2}$/,n=null,ia=function(a){a=a.split(".");for(var b=l,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b},ja=function(){},ka=function(a){a.l=void 0;a.g=function(){return a.l?a.l:a.l=new a}},p=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},la="closure_uid_"+(1E9*Math.random()>>>0),ma=0,q=function(a,b){function c(){}c.prototype=b.prototype;a.K=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.L=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var r=function(a,b){for(var c=a.length,d=m(a)?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},na=function(a,b){for(var c=a.length,d=[],e=0,f=m(a)?a.split(""):a,h=0;h<c;h++)if(h in f){var v=f[h];b.call(void 0,v,h,a)&&(d[e++]=v)}return d},oa=function(a,b){for(var c=a.length,d=Array(c),e=m(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));return d},pa=function(a,b){a:{for(var c=a.length,d=m(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:m(a)?a.charAt(b):a[b]},ra=function(a,b){a:{var c=a.length,d=m(a)?a.split(""):a;for(--c;0<=c;c--)if(c in d&&b.call(void 0,d[c],c,a)){b=c;break a}b=-1}return 0>b?null:m(a)?a.charAt(b):a[b]};var sa=function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},ua=function(a,b){var c=0;a=sa(String(a)).split(".");b=sa(String(b)).split(".");for(var d=Math.max(a.length,b.length),e=0;0==c&&e<d;e++){var f=a[e]||"",h=b[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==f[0].length&&0==h[0].length)break;c=ta(0==f[1].length?0:parseInt(f[1],10),0==h[1].length?0:parseInt(h[1],10))||ta(0==f[2].length,0==h[2].length)||ta(f[2],h[2]);f=f[3];h=h[3]}while(0==c)}return c},ta=function(a,b){return a<b?-1:a>b?1:0};var t;a:{var va=l.navigator;if(va){var wa=va.userAgent;if(wa){t=wa;break a}}t=""};var xa=function(a){var b={},c;for(c in a)b[c]=a[c];return b};var w=function(a){w[" "](a);return a};w[" "]=ja;var x=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};var y=function(){this.b="";this.f=ya};y.prototype.c=!0;y.prototype.a=function(){return this.b};var za=function(a){return a instanceof y&&a.constructor===y&&a.f===ya?a.b:"type_error:TrustedResourceUrl"},ya={};var z=function(){this.m="";this.G=Aa};z.prototype.c=!0;z.prototype.a=function(){return this.m};var Ba=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Aa={},Ca=function(a){var b=new z;b.m=a;return b};Ca("about:blank");var Da=function(a,b){a.src=za(b);(b=ha())&&a.setAttribute("nonce",b)};var Fa=function(a){Ea();var b=new y;b.b=a;return b},Ea=ja;var Ja=function(a,b){if(!Ga()&&!Ha()){var c=Math.random();if(c<b)return c=Ia(l),a[Math.floor(c*a.length)]}return null},Ia=function(a){if(!a.crypto)return Math.random();try{var b=new Uint32Array(1);a.crypto.getRandomValues(b);return b[0]/65536/65536}catch(c){return Math.random()}},Ka=function(){var a=A(210),b;for(b in a)if(Object.prototype.hasOwnProperty.call(a,b))return!1;return!0},Ha=x(function(){return-1!=t.indexOf("Google Web Preview")||1E-4>Math.random()}),Ga=x(function(){return-1!=t.indexOf("MSIE")}),La=/^(-?[0-9.]{1,30})$/,Ma=function(a,b){return La.test(a)&&(a=Number(a),!isNaN(a))?a:void 0==b?null:b},Na=function(){try{return ha()}catch(a){}};var Oa=function(){return l.googletag||(l.googletag={})},Pa=function(a,b){var c=Oa();c.hasOwnProperty(a)||(c[a]=b)};var B={173:"pubads.g.doubleclick.net",174:"securepubads.g.doubleclick.net",7:.02,13:1500,23:.001,24:200,37:.01,38:.001,58:1,66:1E-5,71:.05,76:"",124:1,129:.05,134:.01,135:.005,143:.005,187:.01,150:".google.cz",179:0,211:!1,196:.001,234:5E-4,236:5E-4,197:.001,152:[],172:null,191:"001901242049580",192:"021901222107370",190:"011901222107370",245:{},180:null,219:[],230:{},210:{},227:{},226:[],241:{},202:"",214:.05,215:.01,220:!1,228:"//www.googletagservices.com/pubconsole/",242:!1,244:!1,243:-1};B[6]=function(a,b){try{for(var c=null;c!=a;c=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;case "file:":return!!b;case "http:":return!1}}catch(d){}return!0}(window);B[49]=(new Date).getTime();B[36]=/^true$/.test("false");B[46]=/^true$/.test("false");B[148]=/^true$/.test("false");B[221]=/^true$/.test("true");B[204]=Ma("{{MOD}}",-1);var C=function(){for(var a in B)this[a]=B[a]};ka(C);var A=function(a){return C.g()[a]},D=function(a,b){C.g()[a]=b},Qa=Oa(),Ra=C.g(),Sa=Qa._vars_,Ta;for(Ta in Sa)Ra[Ta]=Sa[Ta];Qa._vars_=Ra;var Ua=function(){return Ma("0")||0};Pa("getVersion",function(){return"297"});var E=function(){},Va="function"==typeof Uint8Array,G=function(a,b,c,d){a.b=null;b||(b=[]);a.M=void 0;a.f=-1;a.a=b;a:{if(b=a.a.length){--b;var e=a.a[b];if(!(null===e||"object"!=typeof e||"array"==p(e)||Va&&e instanceof Uint8Array)){a.h=b-a.f;a.c=e;break a}}a.h=Number.MAX_VALUE}a.w={};if(c)for(b=0;b<c.length;b++)e=c[b],e<a.h?(e+=a.f,a.a[e]=a.a[e]||F):(Wa(a),a.c[e]=a.c[e]||F);if(d&&d.length)for(b=0;b<d.length;b++)Xa(a,d[b])},F=[],Wa=function(a){var b=a.h+a.f;a.a[b]||(a.c=a.a[b]={})},Ya=function(a,b){if(b<a.h){b+=a.f;var c=a.a[b];return c===F?a.a[b]=[]:c}if(a.c)return c=a.c[b],c===F?a.c[b]=[]:c},Za=function(a,b){if(b<a.h){b+=a.f;var c=a.a[b];return c===F?a.a[b]=[]:c}c=a.c[b];return c===F?a.c[b]=[]:c},I=function(a,b,c){a=Ya(a,b);return null==a?c:a},$a=function(a,b,c){b<a.h?a.a[b+a.f]=c:(Wa(a),a.c[b]=c)},Xa=function(a,b){for(var c,d,e=0;e<b.length;e++){var f=b[e],h=Ya(a,f);null!=h&&(c=f,d=h,$a(a,f,void 0))}return c?($a(a,c,d),c):0},J=function(a,b,c){a.b||(a.b={});if(!a.b[c]){var d=Ya(a,c);d&&(a.b[c]=new b(d))}return a.b[c]},K=function(a,b,c){a.b||(a.b={});if(!a.b[c]){for(var d=Za(a,c),e=[],f=0;f<d.length;f++)e[f]=new b(d[f]);a.b[c]=e}b=a.b[c];b==F&&(b=a.b[c]=[]);return b};var ab=function(a,b){a=[a];for(var c=b.length-1;0<=c;--c)a.push(typeof b[c],b[c]);return a.join("\x0B")};var bb=function(){var a=window,b=-1;try{a.localStorage&&(b=parseInt(a.localStorage.getItem("google_experiment_mod"),10))}catch(c){return null}if(0<=b&&1E3>b)return b;if(Ha())return null;b=Math.floor(1E3*Ia(a));try{if(a.localStorage)return a.localStorage.setItem("google_experiment_mod",""+b),b}catch(c){}return null};var cb=function(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.line=b.line||-1;this.msg=b.message||"";this.file=b.file||"";this.id=b.id||"jserror";this.meta=c};var L=null,db=function(){if(null===L){L="";try{var a="";try{a=l.top.location.hash}catch(c){a=l.location.hash}if(a){var b=a.match(/\bdeid=([\d,]+)/);L=b?b[1]:""}}catch(c){}}return L};var fb=function(a){G(this,a,eb,null)};q(fb,E);var hb=function(a){G(this,a,gb,null)};q(hb,E);var M=function(a){G(this,a,ib,jb)};q(M,E);var kb=function(a){G(this,a,null,null)};q(kb,E);var mb=function(a){G(this,a,lb,null)};q(mb,E);var N=function(a){G(this,a,nb,ob)};q(N,E);var eb=[2],gb=[2];hb.prototype.getId=function(){return I(this,1,0)};var ib=[5],jb=[[1,2,3,6]],lb=[4],nb=[2,8],ob=[[3,4,5],[6,7]];var pb=function(a){return null!=a?!a:a},qb=function(a,b){for(var c=!1,d=0;d<a.length;d++){var e=a[d].call();if(e==b)return e;null==e&&(c=!0)}if(!c)return!b},sb=function(a,b){var c=K(a,N,2);if(!c.length)return rb(a,b);a=I(a,1,0);if(1==a)return pb(sb(c[0],b));c=oa(c,function(a){return function(){return sb(a,b)}});switch(a){case 2:return qb(c,!1);case 3:return qb(c,!0)}},rb=function(a,b){var c=Xa(a,ob[0]);a:{switch(c){case 3:var d=I(a,3,0);break a;case 4:d=I(a,4,0);break a;case 5:d=I(a,5,0);break a}d=void 0}if(d&&(b=(b=b[c])&&b[d])){try{var e=b.apply(null,Za(a,8))}catch(f){return}b=I(a,1,0);if(4==b)return!!e;d=null!=e;if(5==b)return d;a:{switch(c){case 4:a=+I(a,6,0);break a;case 5:a=I(a,7,"");break a}a=void 0}if(null!=a){if(6==b)return e===a;if(9==b)return 0==ua(e,a);if(d)switch(b){case 7:return e<a;case 8:return e>a;case 12:return(new RegExp(a)).test(e);case 10:return-1==ua(e,a);case 11:return 1==ua(e,a)}}}},tb=function(a,b){return!a||!(!b||!sb(a,b))};var O=function(a){this.a=a},ub=new O(1),vb=new O(2),wb=new O(3),xb=new O(4),P=function(a,b,c){c.hasOwnProperty(a.a)||Object.defineProperty(c,String(a.a),{value:b})};var yb=function(a,b){switch(b){case 1:return I(a,1,0);case 2:return I(a,2,0);case 3:return I(a,3,0);case 6:return I(a,6,0);default:return null}},zb=function(a,b){if(!a)return null;switch(b){case 1:return I(a,1,!1);case 2:return+I(a,2,0);case 3:return I(a,3,"");case 6:return Za(a,4);default:return null}},Ab=x(function(){var a="";try{a=l.top.location.hash}catch(c){a=l.location.hash}var b={};if(a=(a=/\bdflags=({.*})(&|$)/.exec(a))&&a[1])try{b=JSON.parse(decodeURIComponent(a))}catch(c){}return b}),R=function(a,b,c){var d=Ab();if(d[a]&&null!=d[a][b])return d[a][b];b=Q.g().a[a][b];if(!b)return c;b=new M(b);b=Bb(b);a=zb(b,a);return null!=a?a:c},Bb=function(a){var b=Q.g().b;if(b){var c=ra(K(a,kb,5),function(a){return tb(J(a,N,1),b)});if(c)return J(c,mb,2)}return J(a,mb,4)},Q=function(){var a={};this.a=(a[1]={},a[2]={},a[3]={},a[6]={},a);this.b=null};ka(Q);var Cb=function(a,b){return R(3,a,void 0===b?"":b)},Db=function(a){var b=Q.g().a;r(a,function(a){var c=Xa(a,jb[0]),e=yb(a,c);e&&(b[c][e]=a.a)})};var Eb=function(a,b){var c=this,d=void 0===b?{}:b;b=void 0===d.u?!1:d.u;var e=void 0===d.A?{}:d.A;d=void 0===d.D?[]:d.D;this.h=a;this.w=b;this.c=e;this.a=null;this.f=d;this.b={};if(a=db())a=a.split(",")||[],r(a,function(a){(a=parseInt(a,10))&&(c.b[a]=!0)})},Gb=function(a,b){var c=a.h[b];c&&(delete a.h[b],r(c,function(b){b=new fb(b);tb(J(b,N,3),a.a)&&(b=Fb(a,b))&&(a.f.push(b.getId()),(b=K(b,M,2))&&Db(b))}))},Fb=function(a,b){var c=K(b,hb,2),d=a.a,e=d?na(c,function(a){return tb(J(a,N,3),d)}):c,f=e.length;if(!f)return null;c=I(b,4,0);b=f*I(b,1,0);if(!c)return Hb(a,e,b/1E3);f=null!=a.c[c]?a.c[c]:1E3;if(0>=f)return null;e=Hb(a,e,b/f);a.c[c]=e?0:f-b;return e},Hb=function(a,b,c){var d=a.b,e=pa(b,function(a){return!!d[a.getId()]});return e?e:a.w?null:Ja(b,c)},Ib=function(a){var b=A(245);P(ub,function(b){a.b[b]=!0},b);P(vb,function(b){return void Gb(a,b)},b);P(wb,function(){return a.f},b);P(xb,function(b){a.a=b},b)};var Jb=x(function(){var a=l.navigator&&l.navigator.userAgent||"";a=a.toLowerCase();return-1!=a.indexOf("firefox/")||-1!=a.indexOf("chrome/")||-1!=a.indexOf("opr/")}),S=function(a,b,c,d,e){d=void 0===d?"":d;var f=a.createElement("link");try{f.rel=c;if(-1!=c.toLowerCase().indexOf("stylesheet"))var h=za(b);else{if(b instanceof y)var v=za(b);else{if(b instanceof z)var u=b instanceof z&&b.constructor===z&&b.G===Aa?b.m:"type_error:SafeUrl";else{if(b instanceof z)var H=b;else b="object"==typeof b&&b.c?b.a():String(b),Ba.test(b)||(b="about:invalid#zClosurez"),H=Ca(b);u=H.a()}v=u}h=v}f.href=h}catch(qa){return}d&&"preload"==c&&(f.as=d);e&&f.setAttribute("nonce",e);if(a=a.getElementsByTagName("head")[0])try{a.appendChild(f)}catch(qa){}};var Kb=/^\.google\.(com?\.)?[a-z]{2,3}$/,Lb=/\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,Mb=function(a){return Kb.test(a)&&!Lb.test(a)},Nb=function(a){return a.replace(/[\W]/g,function(a){return"&#"+a.charCodeAt()+";"})},T=l,Ob=function(a,b){a="https://"+("adservice"+b+"/adsid/integrator."+a);b=["domain="+encodeURIComponent(l.location.hostname)];U[3]>=+new Date&&b.push("adsid="+encodeURIComponent(U[1]));return a+"?"+b.join("&")},U,V,W=function(){T=l;U=T.googleToken=T.googleToken||{};var a=+new Date;U[1]&&U[3]>a&&0<U[2]||(U[1]="",U[2]=-1,U[3]=-1,U[4]="",U[6]="");V=T.googleIMState=T.googleIMState||{};Mb(V[1])||(V[1]=".google.com");"array"==p(V[5])||(V[5]=[]);"boolean"==typeof V[6]||(V[6]=!1);"array"==p(V[7])||(V[7]=[]);"number"==typeof V[8]||(V[8]=0)},Pb=function(a){try{a()}catch(b){l.setTimeout(function(){throw b;},0)}},Rb=function(a){"complete"==l.document.readyState||"loaded"==l.document.readyState||l.document.currentScript&&l.document.currentScript.async?Qb(3):a()},Sb=0,X={i:function(){return 0<V[8]},o:function(){V[8]++},B:function(){0<V[8]&&V[8]--},C:function(){V[8]=0},j:function(){},F:function(){return!1},v:function(){return V[5]},s:Pb},Y={i:function(){return V[6]},o:function(){V[6]=!0},B:function(){V[6]=!1},C:function(){V[6]=!1},j:function(){},F:function(){return".google.com"!=V[1]&&2<++Sb},v:function(){return V[7]},s:function(a){Rb(function(){Pb(a)})}},Qb=function(a){if(1E-5>Math.random()){l.google_image_requests||(l.google_image_requests=[]);var b=l.document.createElement("img");b.src="https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+a;l.google_image_requests.push(b)}};X.j=function(){if(!X.i()){var a=l.document,b=function(b){b=Ob("js",b);var c=Na();S(a,b,"preload","script",c);c=a.createElement("script");c.type="text/javascript";c.onerror=function(){return l.processGoogleToken({},2)};b=Fa(b);Da(c,b);try{(a.head||a.body||a.documentElement).appendChild(c),X.o()}catch(h){}},c=V[1];b(c);".google.com"!=c&&b(".google.com");b={};var d=(b.newToken="FBT",b);l.setTimeout(function(){return l.processGoogleToken(d,1)},1E3)}};Y.j=function(){if(!Y.i()){var a=l.document,b=Ob("sync.js",V[1]);S(a,b,"preload","script");b=Nb(b);var c=w("script"),d="",e=Na();e&&(d='nonce="'+Nb(e)+'"');var f="<"+c+' src="'+b+'" '+d+"></"+c+">"+("<"+c+" "+d+'>processGoogleTokenSync({"newToken":"FBS"},5);</'+c+">");Rb(function(){a.write(f);Y.o()})}};var Tb=function(a){W();U[3]>=+new Date&&U[2]>=+new Date||a.j()},Vb=function(){l.processGoogleToken=l.processGoogleToken||function(a,b){return Ub(X,a,b)};Tb(X)},Wb=function(){l.processGoogleTokenSync=l.processGoogleTokenSync||function(a,b){return Ub(Y,a,b)};Tb(Y)},Ub=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?0:c;var d=b.newToken||"",e="NT"==d,f=parseInt(b.freshLifetimeSecs||"",10),h=parseInt(b.validLifetimeSecs||"",10),v=b["1p_jar"]||"";b=b.pucrd||"";W();1==c?a.C():a.B();if(!d&&a.F())Mb(".google.com")&&(V[1]=".google.com"),a.j();else{var u=T.googleToken=T.googleToken||{},H=0==c&&d&&m(d)&&!e&&"number"==typeof f&&0<f&&"number"==typeof h&&0<h&&m(v);e=e&&!a.i()&&(!(U[3]>=+new Date)||"NT"==U[1]);var qa=!(U[3]>=+new Date)&&0!=c;if(H||e||qa)e=+new Date,f=e+1E3*f,h=e+1E3*h,Qb(c),u[5]=c,u[1]=d,u[2]=f,u[3]=h,u[4]=v,u[6]=b,W();if(H||!a.i()){c=a.v();for(d=0;d<c.length;d++)a.s(c[d]);c.length=0}}};var Xb=function(){this.a=null},Yb=function(a,b){a.a=b};Xb.prototype.b=function(a,b,c,d,e){if(Math.random()>(void 0===c?.01:c))return!1;b.error&&b.meta&&b.id||(b=new cb(b,{context:a,id:void 0===e?"gpt_exception":e}));if(d||this.a)b.meta={},this.a&&this.a(b.meta),d&&d(b.meta);l.google_js_errors=l.google_js_errors||[];l.google_js_errors.push(b);l.error_rep_loaded||(b=l.document,a=b.createElement("script"),Da(a,Fa(l.location.protocol+"//pagead2.googlesyndication.com/pagead/js/err_rep.js")),(b=b.getElementsByTagName("script")[0])&&b.parentNode&&b.parentNode.insertBefore(a,b),l.error_rep_loaded=!0);return!1};var Zb=function(a,b){var c=void 0===c?a.b:c;try{b()}catch(d){if(!c.call(a,420,d,.01,void 0,"gpt_exception"))throw d;}};var $b=function(a){if(!a.google_ltobserver){var b=new a.PerformanceObserver(function(b){var c=a.google_lt_queue=a.google_lt_queue||[];r(b.getEntries(),function(a){return c.push(a)})});b.observe({entryTypes:["longtask"]});a.google_ltobserver=b}};var ac=function(a){var b=a;b=void 0===b?l:b;if(b=(b=b.performance)&&b.now?b.now():null)b={label:"1",type:9,value:b},a=a.google_js_reporting_queue=a.google_js_reporting_queue||[],1024>a.length&&a.push(b)};var bc=[[28,null,null,[1]],[38,null,null,[1]],[null,7,null,[null,.1]],[40,null,null,[1]],[72,null,null,[1]],[61,null,null,[1]],[46,null,null,[1]],[null,null,8,[null,null,"/pagead/js/rum.js"]],[11,null,null,[1]],[48,null,null,[1]],[18,null,null,[1]],[39,null,null,[1]],[30,null,null,[1]],[3,null,null,[1]],[null,8,null,[null,-1]],[15,null,null,[1]],[null,11,null,[null,10]],[null,2,null,[null,1E3]],[106,null,null,[1]],[45,null,null,[]],[null,null,2,[null,null,"1-0-31"]],[21,null,null,[1]],[7,null,null,[1]],[94,null,null,[1]]];var cc=function(){Eb.call(this,A(210),{u:A(211),A:A(227),D:A(226)})};ea(cc,Eb);var dc=function(){return A(36)};var ec=function(a,b){var c=b||ab;return function(){var b=this||l;b=b.closure_memoize_cache_||(b.closure_memoize_cache_={});var e=c(a[la]||(a[la]=++ma),arguments);return b.hasOwnProperty(e)?b[e]:b[e]=a.apply(this,arguments)}}(function(a){return a&&a.src?/^(?:https?:)?\/\/www\.googletagservices\.com\/tag\/js\/gpt(?:_[a-z]+)*\.js/.test(a.src)?0:1:2},function(a,b){return a+"\x0B"+(b[0]&&b[0].src)}),fc=function(){return 0===ec(A(172))};var gc=function(){var a={};this[3]=(a[8]=function(a){return!!ia(a)},a[3]=fc,a[2]=dc,a[9]=function(a){a=ia(a);var b;if(b="function"==p(a))a=a&&a.toString&&a.toString(),b=m(a)&&-1!=a.indexOf("[native code]");return b},a[10]=function(){return window==window.top},a);a={};this[4]=(a[1]=function(){return A(204)},a[4]=Ua,a[2]=function(){return 297},a[5]=function(){var a=bb();return null!=a?a:void 0},a);a={};this[5]=(a[2]=function(){return window.location.href},a[3]=function(){try{return window.top.location.hash}catch(b){return""}},a)};ka(gc);var hc={3:[[null,[[1337,[[82,null,null,[1]],[null,null,8,[null,null,"/pagead/js/rum_debug.js"]]]]]],[1,[[20194812,[[20,null,null,[1]]]],[20194813]],null,3],[500,[[21060697],[21060698,[[87,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,["21061508"]],[4,null,8,null,null,null,null,["Uint8Array"]],[4,null,11]]]],[100,[[21061497],[21061498,[[86,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,["21061508"]],[4,null,9,null,null,null,null,["requestAnimationFrame"]]]]],[10,[[21061505],[21061506,[[82,null,null,[1]]]]]],[100,[[21061545],[21061546,[[79,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,["21061508"]],[4,null,8,null,null,null,null,["google_ltobserver"]]]]],[50,[[21061763],[21061764,[[5,null,null,[1]]]]]],[50,[[21061999],[21062E3,[[81,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,["21061508"]],[4,null,10]]]],[1,[[21062059,[[null,null,null,[null,null,null,["50","50","50","50","50"]],null,2]]],[21062060,[[null,null,null,[null,null,null,"25 25 25 25 25 25 25 25 25 25".split(" ")],null,2]]],[21062061,[[null,null,null,[null,null,null,["125","125","125","125"]],null,2]]],[22321847],[22321848,[[null,null,null,[null,null,null,"50 50 50 50 50 50 50 50 50 50".split(" ")],null,2]]],[22322161,[[null,null,null,[null,null,null,["250","250"]],null,2]]]]],[50,[[21062068,[[58,null,null,[1]]]],[21062069]]],[1E3,[[21062150,null,[2,[[8,null,null,1,null,9],[7,null,null,1,null,15]]]],[21062151,[[null,null,null,[null,null,null,["50","50","50","50","50"]],null,2]],[2,[[8,null,null,1,null,14],[7,null,null,1,null,20]]]],[21062152,[[null,null,null,[null,null,null,"50 50 50 50 50 50 50 50 50 50".split(" ")],null,2]],[2,[[8,null,null,1,null,19],[7,null,null,1,null,25]]]],[21062153,[[null,null,null,[null,null,null,"25 25 25 25 25 25 25 25 25 25".split(" ")],null,2]],[2,[[8,null,null,1,null,24],[7,null,null,1,null,30]]]]],[4,null,3]],[null,[[21062156],[21062157,[[15,null,null,[1]]]]]],[10,[[21062185],[21062186,[[24,null,null,[1]]]]]],[1,[[21062261],[21062262,[[92,null,null,[1]],[33,null,null,[1]]]]],null,8],[10,[[21062287],[21062288,[[56,null,null,[1]],[53,null,null,[1]],[52,null,null,[1]],[27,null,null,[1]],[88,null,null,[1]],[29,null,null,[1]],[14,null,null,[1]],[12,null,null,[1]],[63,null,null,[1]]]]],null,4],[1,[[21062330],[21062331,[[null,8,null,[null,800]]]],[21062332,[[null,8,null,[null,1E4]]]]],null,3],[10,[[21062352],[21062353,[[20,null,null,[1]]]]],[1,[[4,null,1]]],3],[50,[[21062377],[21062378,[[11,null,null,[]]]]]],[1,[[21062398],[21062399,[[null,13,null,[null,1]]]],[21062400,[[null,13,null,[null,1]]]],[21062593,[[null,13,null,[null,2]]]]]],[50,[[21062414],[21062415,[[64,null,null,[1]]]]]],[1,[[21062416],[21062417,[[37,null,null,[1]]]]]],[50,[[21062420],[21062421,[[42,null,null,[1]]]]]],[50,[[21062452],[21062453,[[43,null,null,[1]]]]]],[50,[[21062454],[21062456,[[51,null,null,[1]]]]]],[1,[[21062495],[21062496,[[47,null,null,[1]]]]]],[1,[[21062500],[21062501,[[null,6,null,[null,1]],[53,null,null,[1]],[52,null,null,[1]],[27,null,null,[1]],[88,null,null,[1]],[29,null,null,[1]],[26,null,null,[1]],[14,null,null,[1]],[12,null,null,[1]],[63,null,null,[1]]]]],null,4],[50,[[21062576],[21062577,[[20,null,null,[],[[[1,[[4,null,1]]],[1]]]]]]],null,3],[1,[[21062693],[21062694,[[65,null,null,[1]]]]]],[50,[[21062722],[21062723,[[69,null,null,[1]]]]]],[10,[[21062724],[21062725,[[67,null,null,[1]]]]]],[null,[[21062738],[21062739,[[null,null,null,[null,null,null,["v","1-0-31"]],null,1]]],[21062740,[[null,null,2,[null,null,"1-0-31"]]]]]],[10,[[21062745],[21062748,[[null,11,null,[null,60]]]],[21062862,[[null,11,null,[null,40]]]]]],[10,[[21062751],[21062752,[[null,15,null,[null,1]]]],[21062753,[[null,15,null,[null,2]]]]]],[10,[[21062796],[21062797,null,[4,null,8,null,null,null,null,["Map"]]]]],[50,[[21062818],[21062819,[[93,null,null,[1]]]]]],[50,[[21062830],[21062831,[[90,null,null,[1]]]]]],[50,[[21062832],[21062833,[[89,null,null,[1]]]]]],[50,[[21062834],[21062835,[[92,null,null,[1]],[33,null,null,[1]]]]],[4,null,2],8],[10,[[21062844],[21062845]]],[50,[[21062854],[21062855,[[100,null,null,[1]]]]]],[1,[[21062856],[21062857,[[99,null,null,[1]]]]],[2,[[8,null,null,2,null,278],[7,null,null,2,null,1E3]]]],[10,[[21062859],[21062860,[[92,null,null,[1]]]]],null,8],[50,[[21062886],[21062887,[[91,null,null,[1]]]]]],[10,[[21062888],[21062889,[[101,null,null,[1]]]]]],[5,[[21062899],[21062900,[[98,null,null,[1]]]],[21062901,[[98,null,null,[1]]]]]],[5,[[21062916,[[98,null,null,[1]]]],[21062917,[[98,null,null,[1]]]]]],[1,[[21062937],[21062947,[[12,null,null,[1]]]],[21062948,[[12,null,null,[1]]]]],[4,null,10],4],[1,[[21062939],[21062940,[[null,14,null,[null,1]],[114,null,null,[1]]]]],[2,[[8,null,null,2,null,291],[7,null,null,2,null,1E3]]]],[1,[[21062949],[21062950,[[108,null,null,[1]]]]]],[10,[[21062957],[21062958,[[102,null,null,[1]]]]]],[1,[[21062970],[21062971,[[109,null,null,[1]]]]],[2,[[8,null,null,2,null,289],[7,null,null,2,null,1E3]]]],[10,[[21062975],[21062977,[[104,null,null,[1]]]]]],[1,[[21063011],[21063012,[[117,null,null,[1]]]]],[2,[[8,null,null,2,null,297],[7,null,null,2,null,1E3]]]],[50,[[21063015],[21063016,[[97,null,null,[1]]]]]],[10,[[21063041],[21063042,[[62,null,null,[1]],[68,null,null,[1]],[107,null,null,[1]]]],[21063043,[[107,null,null,[1]]]]]],[10,[[21063044],[21063045,[[110,null,null,[1]]]]]],[5,[[21063046],[21063047],[21063048]],[2,[[4,null,7],[8,null,null,2,null,278],[7,null,null,2,null,1E3]]],9],[500,[[21063064,[[56,null,null,[1]],[53,null,null,[1]],[52,null,null,[1]],[27,null,null,[1]],[29,null,null,[1]],[14,null,null,[1]],[12,null,null,[1]],[63,null,null,[1]]]]],null,4],[10,[[21063065],[21063066,[[116,null,null,[1]]]]],[2,[[8,null,null,2,null,294],[7,null,null,2,null,1E3]]]],[1,[[21063090],[21063091,[[null,null,null,[null,null,null,["cb","1"]],null,1]]]]],[10,[[21063094],[21063095],[21063096]],[2,[[4,null,7],[8,null,null,2,null,278],[7,null,null,2,null,1E3]]],9],[50,[[21063101],[21063102,[[72,null,null,[]]]]]],[1E3,[[22316437,null,[2,[[8,null,null,1,null,-1],[7,null,null,1,null,5]]]],[22316438,null,[2,[[8,null,null,1,null,4],[7,null,null,1,null,10]]]]],[4,null,3]],[10,[[22322686],[22322687,[[null,3,null,[null,.01]]]]]],[100,[[22325465],[22325466,[[80,null,null,[1]]]]],[4,null,6,null,null,null,null,["21060611"]]],[10,[[53887176],[53887177]]],[1,[[108809132],[108809133,[[45,null,null,[1]]]]]],[10,[[370204054],[370204055,[[113,null,null,[1]]]]]],[null,[[370204058],[370204059,[[119,null,null,[1]]]]]]],4:[[null,[[21062304],[21062305,[[34,null,null,[1]]]]]],[null,[[21062804],[21062805,[[8,null,null,[1]]]],[21062806,[[55,null,null,[1]]]]]],[null,[[21062807],[21062808,[[8,null,null,[1]],[55,null,null,[1]]]]]],[null,[[21062846],[21062847,[[74,null,null,[1]]]],[21062848,[[75,null,null,[1]]]],[21062849,[[74,null,null,[1]],[75,null,null,[1]]]]]],[null,[[21062983],[21062984,[[96,null,null,[1]]]],[21062985,[[96,null,null,[1]],[8,null,null,[1]],[55,null,null,[1]]]]]],[null,[[21063037],[21063038,[[105,null,null,[1]]]]]],[null,[[21063039],[21063040,[[70,null,null,[1]]]]]]],5:[[500,[[21060610],[21060611,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,["21061508"]]],[null,[[21061212],[21061213,[[16,null,null,[1]]]],[21061214,[[17,null,null,[1]]]],[21061277,[[17,null,null,[1]],[16,null,null,[1]]]]]],[1,[[21061590,[[null,null,6,[null,null,"21061590"]]]],[21061591,[[59,null,null,[1]]]]],null,1],[10,[[21062549,[[null,null,5,[null,null,"ob"]],[null,null,6,[null,null,"ob"]]]],[21062550,[[null,null,4,[null,null,"/gpt/pubads_impl_ob_"]]]]],null,1],[50,[[21062749],[21062750,[[95,null,null,[1]]]]]],[1E3,[[21062763,[[56,null,null,[1]],[53,null,null,[1]],[52,null,null,[1]],[27,null,null,[1]],[88,null,null,[1]],[29,null,null,[1]],[14,null,null,[1]],[12,null,null,[1]],[63,null,null,[1]]]]],[12,null,null,null,3,null,"googEnableStrictApi"],4],[1E3,[[21062785,[[23,null,null,[]]],[7,null,null,5,null,50]],[21062786,[[23,null,null,[1]]],[8,null,null,5,null,949]]],[2,[[12,null,null,null,2,null,"today\\.line\\.me/.+/article"],[4,null,8,null,null,null,null,["_gmptnl"]]]],7],[1E3,[[21062812,[[23,null,null,[1]]]]],[2,[[12,null,null,null,2,null,"today\\.line\\.me/.+/article"],[4,null,8,null,null,null,null,["_gmptnl"]]]],7],[1E3,[[21062903,[[92,null,null,[1]],[33,null,null,[1]]],[12,null,null,null,3,null,"googDisableSync"]]],null,8],[100,[[21063092,[[null,7,null,[null,1]],[null,null,5,[null,null,"21063092"]],[null,12,null,[null,297]],[null,null,7,[null,null,"21063092"]],[60,null,null,[1]],[null,null,6,[null,null,"21063092"]]]],[21063093,[[null,7,null,[null,1]],[null,null,5,[null,null,"21063093"]],[null,12,null,[null,299]],[null,null,7,[null,null,"21063093"]],[60,null,null,[1]],[null,null,6,[null,null,"21063093"]]]]],null,1]],6:[[50,[[21062920],[21062921,[[null,14,null,[null,1]]]]]],[10,[[21063049],[21063050],[21063051]],[3,[[4,null,6,null,null,null,null,["21062415"]],[4,null,6,null,null,null,null,["21062414"]]]]]],7:[[10,[[21061507],[21061508,[[83,null,null,[1]],[84,null,null,[1]]]]]],[1E3,[[21062473,[[null,null,5,[null,null,"21062473"]],[null,null,6,[null,null,"21062473"]]],[6,null,null,4,null,2]],[21062474,null,[6,null,null,4,null,3]]],[4,null,3],1],[1E3,[[21062475,null,[6,null,null,4,null,1]]],[4,null,3],1]]};var ic=function(a){var b={I:bc,J:hc};a=a||b;Ka()&&D(210,xa(a.J));cc.call(this);var c=this;b=gc.g();b[3][6]=function(a){a:{var b=c.f;a=parseInt(a,10);if(m(b))b=m(a)&&1==a.length?b.indexOf(a,0):-1;else{for(var d=0;d<b.length;d++)if(d in b&&b[d]===a){b=d;break a}b=-1}}return 0<=b};this.a=b;A(219).length||D(219,a.I);Q.g().b=b;D(241,b);Db(oa(A(219),function(a){return new M(a)}));D(230,Q.g().a);Ib(this)};ea(ic,cc);w("partner.googleadservices.com");var jc=w("www.googletagservices.com"),Z=function(){return A(46)&&!A(6)?"http://pubads.g.doubleclick.net":"https://securepubads.g.doubleclick.net"},kc=function(a){var b=a.currentScript;return"complete"!=a.readyState&&"loaded"!=a.readyState&&!(b&&b.async)},mc=function(){var a=A(76);if(a)return a;a=Z();var b=Cb(4,"/gpt/pubads_impl_"),c=lc()||R(2,12,0)||"297",d=Cb(5);a=a+b+c+".js";d&&(a+="?"+d);D(76,a);return a},nc=function(a,b){var c;if(!(c=a.currentScript))a:{if(a=a.scripts)for(c=0;c<a.length;c++){var d=a[c];if(-1<d.src.indexOf(jc+"/tag/js/gpt")){c=d;break a}}c=null}D(172,c);b=new ic(b);Gb(b,7);Gb(b,5);R(1,59,!1)&&(D(173,jc),D(174,jc));b=A(150);W();Mb(b)&&(V[1]=b)},oc=function(){return navigator.getBattery?navigator.getBattery().then(function(a){D(243,a.level);D(244,a.charging);D(242,!0)}):null},lc=function(){var a="";if(!A(148))return a;try{var b="";try{b=l.top.location.hash}catch(d){b=l.location.hash}if(b){var c=b.match(/\bgptv=(\d+)/);a=c?c[1]:""}}catch(d){}return a},pc=function(a,b){var c=Oa(),d=c.fifWin||window;a=a||d.document;Pa("cmd",[]);if(c.evalScripts)c.evalScripts();else{nc(a,b);d.PerformanceObserver&&d.PerformanceLongTaskTiming&&$b(d);ac(d);b=mc();if(kc(a)){d="gpt-impl-"+Math.random();try{var e='<script id="'+d+'" src="'+b+'">\x3c/script>';R(1,17,!1)&&Jb()&&(e+='<link rel="preconnect" href="'+Z()+'">');a.write(e)}catch(f){}a.getElementById(d)&&(c._loadStarted_=!0,D(220,!1),R(2,4,0)||Wb())}c._loadStarted_||(R(2,4,0)||Vb(),R(1,16,!1)&&S(a,b,"preload","script"),R(1,108,!1)&&(d=Cb(6),e=lc()||R(2,12,0)||"297",d=Z()+"/gpt/"+("pubads_impl_rendering_"+e+".js")+(d?"?"+d:""),S(a,d,"preload","script")),d=a.createElement("script"),d.src=b,d.async=!0,(a.head||a.body||a.documentElement).appendChild(d),R(1,17,!1)&&Jb()&&S(a,Z(),"preconnect"),D(220,!0),c._loadStarted_=!0);(a=oc())&&a.catch(function(a){var b=new Xb;Yb(b,function(a){a.methodId=501});b.b(501,a)})}};(function(a,b){var c=new Xb;Yb(c,function(a){a.methodId=420});Zb(c,function(){return pc(a,b)})})();}).call(this.googletag&&googletag.fifWin?googletag.fifWin.parent:this)
