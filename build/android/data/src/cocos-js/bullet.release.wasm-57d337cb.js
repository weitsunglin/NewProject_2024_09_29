System.register(["./_virtual_cc-bc53f4ed.js"],(function(t){"use strict";var e;return{setters:[function(t){e=t.c}],execute:function(){var r=e((function(t){var e,r=(e="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,function(t={}){var r,n,i=void 0!==t?t:{};i.ready=new Promise(((t,e)=>{r=t,n=e}));var o=Object.assign({},i),a="";"undefined"!=typeof document&&document.currentScript&&(a=document.currentScript.src),e&&(a=e),a=0!==a.indexOf("blob:")?a.substr(0,a.replace(/[?#].*/,"").lastIndexOf("/")+1):"",i.print||console.log.bind(console);var s,u,c=i.printErr||console.error.bind(console);Object.assign(i,o),o=null,i.arguments&&i.arguments,i.thisProgram&&i.thisProgram,i.quit&&i.quit,i.wasmBinary&&(s=i.wasmBinary),i.noExitRuntime,"object"!=typeof WebAssembly&&_("no native wasm support detected");var l,f,p,d,h,v,y,m,g,$=!1;function b(){var t=u.buffer;i.HEAP8=l=new Int8Array(t),i.HEAP16=p=new Int16Array(t),i.HEAP32=h=new Int32Array(t),i.HEAPU8=f=new Uint8Array(t),i.HEAPU16=d=new Uint16Array(t),i.HEAPU32=v=new Uint32Array(t),i.HEAPF32=y=new Float32Array(t),i.HEAPF64=m=new Float64Array(t)}var w,C,P=[],T=[],A=[],S=0,O=null;function _(t){i.onAbort&&i.onAbort(t),c(t="Aborted("+t+")"),$=!0,t+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(t);throw n(e),e}function k(t){return t.startsWith("data:application/octet-stream;base64,")}function E(t){try{if(t==w&&s)return new Uint8Array(s);throw"both async and sync fetching of the wasm failed"}catch(t){_(t)}}function W(t,e,r){return function(t){return s||"function"!=typeof fetch?Promise.resolve().then((()=>E(t))):fetch(t,{credentials:"same-origin"}).then((e=>{if(!e.ok)throw"failed to load wasm binary file at '"+t+"'";return e.arrayBuffer()})).catch((()=>E(t)))}(t).then((t=>WebAssembly.instantiate(t,e))).then((t=>t)).then(r,(t=>{c("failed to asynchronously prepare wasm: "+t),_(t)}))}function F(t){for(;t.length>0;)t.shift()(i)}function R(t){if(void 0===t)return"_unknown";var e=(t=t.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return e>=48&&e<=57?`_${t}`:t}function j(t,e){return{[t=R(t)]:function(){return e.apply(this,arguments)}}[t]}k(w="bullet.release.wasm.wasm")||(C=w,w=i.locateFile?i.locateFile(C,a):a+C);var D=new function(){this.allocated=[void 0],this.freelist=[],this.get=function(t){return this.allocated[t]},this.has=function(t){return void 0!==this.allocated[t]},this.allocate=function(t){var e=this.freelist.pop()||this.allocated.length;return this.allocated[e]=t,e},this.free=function(t){this.allocated[t]=void 0,this.freelist.push(t)}};function I(t,e){var r=j(e,(function(t){this.name=e,this.message=t;var r=new Error(t).stack;void 0!==r&&(this.stack=this.toString()+"\n"+r.replace(/^Error(:[^\n]*)?\n/,""))}));return r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.prototype.toString=function(){return void 0===this.message?this.name:`${this.name}: ${this.message}`},r}var U=void 0;function x(t){throw new U(t)}var V=t=>(t||x("Cannot use deleted val. handle = "+t),D.get(t).value),z=t=>{switch(t){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return D.allocate({refcount:1,value:t})}},B=void 0,H=void 0;function M(t){for(var e="",r=t;f[r];)e+=H[f[r++]];return e}var q=[];function G(){for(;q.length;){var t=q.pop();t.$$.deleteScheduled=!1,t.delete()}}var L=void 0;var N={};function J(t,e){for(void 0===e&&x("ptr should not be undefined");t.baseClass;)e=t.upcast(e),t=t.baseClass;return e}function Z(t,e,r){e=J(t,e),N.hasOwnProperty(e)?x(`Tried to register registered instance: ${e}`):N[e]=r}var K={};function Q(t){var e=te(t),r=M(e);return Yt(e),r}function X(t,e){var r=K[t];return void 0===r&&x(e+" has unknown type "+Q(t)),r}function Y(){}var tt=!1;function et(t){t.count.value-=1,0===t.count.value&&function(t){t.smartPtr?t.smartPtrType.rawDestructor(t.smartPtr):t.ptrType.registeredClass.rawDestructor(t.ptr)}(t)}function rt(t,e,r){if(e===r)return t;if(void 0===r.baseClass)return null;var n=rt(t,e,r.baseClass);return null===n?null:r.downcast(n)}var nt={},it=void 0;function ot(t){throw new it(t)}function at(t,e){return e.ptrType&&e.ptr||ot("makeClassHandle requires ptr and ptrType"),!!e.smartPtrType!=!!e.smartPtr&&ot("Both smartPtrType and smartPtr must be specified"),e.count={value:1},st(Object.create(t,{$$:{value:e}}))}function st(t){return"undefined"==typeof FinalizationRegistry?(st=t=>t,t):(tt=new FinalizationRegistry((t=>{et(t.$$)})),Y=t=>tt.unregister(t),(st=t=>{var e=t.$$;if(e.smartPtr){var r={$$:e};tt.register(t,r,t)}return t})(t))}function ut(t){switch(t){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError(`Unknown type size: ${t}`)}}var ct={},lt={};function ft(t,e,r){function n(e){var n=r(e);n.length!==t.length&&ot("Mismatched type converter count");for(var i=0;i<t.length;++i)pt(t[i],n[i])}t.forEach((function(t){lt[t]=e}));var i=new Array(e.length),o=[],a=0;e.forEach(((t,e)=>{K.hasOwnProperty(t)?i[e]=K[t]:(o.push(t),ct.hasOwnProperty(t)||(ct[t]=[]),ct[t].push((()=>{i[e]=K[t],++a===o.length&&n(i)})))})),0===o.length&&n(i)}function pt(t,e,r={}){if(!("argPackAdvance"in e))throw new TypeError("registerType registeredInstance requires argPackAdvance");var n=e.name;if(t||x(`type "${n}" must have a positive integer typeid pointer`),K.hasOwnProperty(t)){if(r.ignoreDuplicateRegistrations)return;x(`Cannot register type '${n}' twice`)}if(K[t]=e,delete lt[t],ct.hasOwnProperty(t)){var i=ct[t];delete ct[t],i.forEach((t=>t()))}}function dt(t){x(t.$$.ptrType.registeredClass.name+" instance already deleted")}function ht(){}function vt(t,e,r){if(void 0===t[e].overloadTable){var n=t[e];t[e]=function(){return t[e].overloadTable.hasOwnProperty(arguments.length)||x(`Function '${r}' called with an invalid number of arguments (${arguments.length}) - expects one of (${t[e].overloadTable})!`),t[e].overloadTable[arguments.length].apply(this,arguments)},t[e].overloadTable=[],t[e].overloadTable[n.argCount]=n}}function yt(t,e,r){i.hasOwnProperty(t)?((void 0===r||void 0!==i[t].overloadTable&&void 0!==i[t].overloadTable[r])&&x(`Cannot register public name '${t}' twice`),vt(i,t,t),i.hasOwnProperty(r)&&x(`Cannot register multiple overloads of a function with the same number of arguments (${r})!`),i[t].overloadTable[r]=e):(i[t]=e,void 0!==r&&(i[t].numArguments=r))}function mt(t,e,r,n,i,o,a,s){this.name=t,this.constructor=e,this.instancePrototype=r,this.rawDestructor=n,this.baseClass=i,this.getActualType=o,this.upcast=a,this.downcast=s,this.pureVirtualFunctions=[]}function gt(t,e,r){for(;e!==r;)e.upcast||x(`Expected null or instance of ${r.name}, got an instance of ${e.name}`),t=e.upcast(t),e=e.baseClass;return t}function $t(t,e){if(null===e)return this.isReference&&x(`null is not a valid ${this.name}`),0;e.$$||x(`Cannot pass "${Dt(e)}" as a ${this.name}`),e.$$.ptr||x(`Cannot pass deleted object as a pointer of type ${this.name}`);var r=e.$$.ptrType.registeredClass;return gt(e.$$.ptr,r,this.registeredClass)}function bt(t,e){var r;if(null===e)return this.isReference&&x(`null is not a valid ${this.name}`),this.isSmartPointer?(r=this.rawConstructor(),null!==t&&t.push(this.rawDestructor,r),r):0;e.$$||x(`Cannot pass "${Dt(e)}" as a ${this.name}`),e.$$.ptr||x(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&e.$$.ptrType.isConst&&x(`Cannot convert argument of type ${e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name} to parameter type ${this.name}`);var n=e.$$.ptrType.registeredClass;if(r=gt(e.$$.ptr,n,this.registeredClass),this.isSmartPointer)switch(void 0===e.$$.smartPtr&&x("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:e.$$.smartPtrType===this?r=e.$$.smartPtr:x(`Cannot convert argument of type ${e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:r=e.$$.smartPtr;break;case 2:if(e.$$.smartPtrType===this)r=e.$$.smartPtr;else{var i=e.clone();r=this.rawShare(r,z((function(){i.delete()}))),null!==t&&t.push(this.rawDestructor,r)}break;default:x("Unsupporting sharing policy")}return r}function wt(t,e){if(null===e)return this.isReference&&x(`null is not a valid ${this.name}`),0;e.$$||x(`Cannot pass "${Dt(e)}" as a ${this.name}`),e.$$.ptr||x(`Cannot pass deleted object as a pointer of type ${this.name}`),e.$$.ptrType.isConst&&x(`Cannot convert argument of type ${e.$$.ptrType.name} to parameter type ${this.name}`);var r=e.$$.ptrType.registeredClass;return gt(e.$$.ptr,r,this.registeredClass)}function Ct(t){return this.fromWireType(h[t>>2])}function Pt(t,e,r,n,i,o,a,s,u,c,l){this.name=t,this.registeredClass=e,this.isReference=r,this.isConst=n,this.isSmartPointer=i,this.pointeeType=o,this.sharingPolicy=a,this.rawGetPointee=s,this.rawConstructor=u,this.rawShare=c,this.rawDestructor=l,i||void 0!==e.baseClass?this.toWireType=bt:n?(this.toWireType=$t,this.destructorFunction=null):(this.toWireType=wt,this.destructorFunction=null)}function Tt(t,e,r){i.hasOwnProperty(t)||ot("Replacing nonexistant public symbol"),void 0!==i[t].overloadTable&&void 0!==r?i[t].overloadTable[r]=e:(i[t]=e,i[t].argCount=r)}var At=[];function St(t){var e=At[t];return e||(t>=At.length&&(At.length=t+1),At[t]=e=g.get(t)),e}function Ot(t,e,r){return t.includes("j")?function(t,e,r){var n=i["dynCall_"+t];return r&&r.length?n.apply(null,[e].concat(r)):n.call(null,e)}(t,e,r):St(e).apply(null,r)}function _t(t,e){var r,n,i,o=(t=M(t)).includes("j")?(r=t,n=e,i=[],function(){return i.length=0,Object.assign(i,arguments),Ot(r,n,i)}):St(e);return"function"!=typeof o&&x(`unknown function pointer with signature ${t}: ${e}`),o}var kt=void 0;function Et(t,e){var r=[],n={};throw e.forEach((function t(e){n[e]||K[e]||(lt[e]?lt[e].forEach(t):(r.push(e),n[e]=!0))})),new kt(`${t}: `+r.map(Q).join([", "]))}function Wt(t){for(;t.length;){var e=t.pop();t.pop()(e)}}function Ft(t,e,r,n,i){var o=e.length;o<2&&x("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==e[1]&&null!==r,s=!1,u=1;u<e.length;++u)if(null!==e[u]&&void 0===e[u].destructorFunction){s=!0;break}var c="void"!==e[0].name,l=o-2,f=new Array(l),p=[],d=[];return function(){var r;arguments.length!==l&&x(`function ${t} called with ${arguments.length} arguments, expected ${l} args!`),d.length=0,p.length=a?2:1,p[0]=i,a&&(r=e[1].toWireType(d,this),p[1]=r);for(var o=0;o<l;++o)f[o]=e[o+2].toWireType(d,arguments[o]),p.push(f[o]);var u=n.apply(null,p);function h(t){if(s)Wt(d);else for(var n=a?1:2;n<e.length;n++){var i=1===n?r:f[n-2];null!==e[n].destructorFunction&&e[n].destructorFunction(i)}if(c)return e[0].fromWireType(t)}return h(u)}}function Rt(t,e){for(var r=[],n=0;n<t;n++)r.push(v[e+4*n>>2]);return r}function jt(t){t>=D.reserved&&0==--D.get(t).refcount&&D.free(t)}function Dt(t){if(null===t)return"null";var e=typeof t;return"object"===e||"array"===e||"function"===e?t.toString():""+t}function It(t,e){switch(e){case 2:return function(t){return this.fromWireType(y[t>>2])};case 3:return function(t){return this.fromWireType(m[t>>3])};default:throw new TypeError("Unknown float type: "+t)}}function Ut(t,e,r){switch(e){case 0:return r?function(t){return l[t]}:function(t){return f[t]};case 1:return r?function(t){return p[t>>1]}:function(t){return d[t>>1]};case 2:return r?function(t){return h[t>>2]}:function(t){return v[t>>2]};default:throw new TypeError("Unknown integer type: "+t)}}var xt="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;var Vt="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function zt(t,e){for(var r=t,n=r>>1,i=n+e/2;!(n>=i)&&d[n];)++n;if((r=n<<1)-t>32&&Vt)return Vt.decode(f.subarray(t,r));for(var o="",a=0;!(a>=e/2);++a){var s=p[t+2*a>>1];if(0==s)break;o+=String.fromCharCode(s)}return o}function Bt(t,e,r){if(void 0===r&&(r=2147483647),r<2)return 0;for(var n=e,i=(r-=2)<2*t.length?r/2:t.length,o=0;o<i;++o){var a=t.charCodeAt(o);p[e>>1]=a,e+=2}return p[e>>1]=0,e-n}function Ht(t){return 2*t.length}function Mt(t,e){for(var r=0,n="";!(r>=e/4);){var i=h[t+4*r>>2];if(0==i)break;if(++r,i>=65536){var o=i-65536;n+=String.fromCharCode(55296|o>>10,56320|1023&o)}else n+=String.fromCharCode(i)}return n}function qt(t,e,r){if(void 0===r&&(r=2147483647),r<4)return 0;for(var n=e,i=n+r-4,o=0;o<t.length;++o){var a=t.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++o)),h[e>>2]=a,(e+=4)+4>i)break}return h[e>>2]=0,e-n}function Gt(t){for(var e=0,r=0;r<t.length;++r){var n=t.charCodeAt(r);n>=55296&&n<=57343&&++r,e+=4}return e}var Lt={},Nt=[],Jt=[];function Zt(t){var e=t-u.buffer.byteLength+65535>>>16;try{return u.grow(e),b(),1}catch(t){}}U=i.BindingError=I(Error,"BindingError"),D.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),D.reserved=D.allocated.length,i.count_emval_handles=function(){for(var t=0,e=D.reserved;e<D.allocated.length;++e)void 0!==D.allocated[e]&&++t;return t},B=i.PureVirtualError=I(Error,"PureVirtualError"),function(){for(var t=new Array(256),e=0;e<256;++e)t[e]=String.fromCharCode(e);H=t}(),i.getInheritedInstanceCount=function(){return Object.keys(N).length},i.getLiveInheritedInstances=function(){var t=[];for(var e in N)N.hasOwnProperty(e)&&t.push(N[e]);return t},i.flushPendingDeletes=G,i.setDelayFunction=function(t){L=t,q.length&&L&&L(G)},it=i.InternalError=I(Error,"InternalError"),ht.prototype.isAliasOf=function(t){if(!(this instanceof ht))return!1;if(!(t instanceof ht))return!1;for(var e=this.$$.ptrType.registeredClass,r=this.$$.ptr,n=t.$$.ptrType.registeredClass,i=t.$$.ptr;e.baseClass;)r=e.upcast(r),e=e.baseClass;for(;n.baseClass;)i=n.upcast(i),n=n.baseClass;return e===n&&r===i},ht.prototype.clone=function(){if(this.$$.ptr||dt(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var t,e=st(Object.create(Object.getPrototypeOf(this),{$$:{value:(t=this.$$,{count:t.count,deleteScheduled:t.deleteScheduled,preservePointerOnDelete:t.preservePointerOnDelete,ptr:t.ptr,ptrType:t.ptrType,smartPtr:t.smartPtr,smartPtrType:t.smartPtrType})}}));return e.$$.count.value+=1,e.$$.deleteScheduled=!1,e},ht.prototype.delete=function(){this.$$.ptr||dt(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&x("Object already scheduled for deletion"),Y(this),et(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},ht.prototype.isDeleted=function(){return!this.$$.ptr},ht.prototype.deleteLater=function(){return this.$$.ptr||dt(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&x("Object already scheduled for deletion"),q.push(this),1===q.length&&L&&L(G),this.$$.deleteScheduled=!0,this},Pt.prototype.getPointee=function(t){return this.rawGetPointee&&(t=this.rawGetPointee(t)),t},Pt.prototype.destructor=function(t){this.rawDestructor&&this.rawDestructor(t)},Pt.prototype.argPackAdvance=8,Pt.prototype.readValueFromPointer=Ct,Pt.prototype.deleteObject=function(t){null!==t&&t.delete()},Pt.prototype.fromWireType=function(t){var e=this.getPointee(t);if(!e)return this.destructor(t),null;var r=function(t,e){return e=J(t,e),N[e]}(this.registeredClass,e);if(void 0!==r){if(0===r.$$.count.value)return r.$$.ptr=e,r.$$.smartPtr=t,r.clone();var n=r.clone();return this.destructor(t),n}function i(){return this.isSmartPointer?at(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:e,smartPtrType:this,smartPtr:t}):at(this.registeredClass.instancePrototype,{ptrType:this,ptr:t})}var o,a=this.registeredClass.getActualType(e),s=nt[a];if(!s)return i.call(this);o=this.isConst?s.constPointerType:s.pointerType;var u=rt(e,this.registeredClass,o.registeredClass);return null===u?i.call(this):this.isSmartPointer?at(o.registeredClass.instancePrototype,{ptrType:o,ptr:u,smartPtrType:this,smartPtr:t}):at(o.registeredClass.instancePrototype,{ptrType:o,ptr:u})},kt=i.UnboundTypeError=I(Error,"UnboundTypeError");var Kt={k:function(t,e,r){t=M(t),e=X(e,"wrapper"),r=V(r);var n=[].slice,i=e.registeredClass,o=i.instancePrototype,a=i.baseClass.instancePrototype,s=i.baseClass.constructor,u=j(t,(function(){i.baseClass.pureVirtualFunctions.forEach(function(t){if(this[t]===a[t])throw new B(`Pure virtual function ${t} must be implemented in JavaScript`)}.bind(this)),Object.defineProperty(this,"__parent",{value:o}),this.__construct.apply(this,n.call(arguments))}));for(var c in o.__construct=function(){this===o&&x("Pass correct 'this' to __construct");var t=s.implement.apply(void 0,[this].concat(n.call(arguments)));Y(t);var e=t.$$;t.notifyOnDestruction(),e.preservePointerOnDelete=!0,Object.defineProperties(this,{$$:{value:e}}),st(this),Z(i,e.ptr,this)},o.__destruct=function(){var t;this===o&&x("Pass correct 'this' to __destruct"),Y(this),t=J(i,t=this.$$.ptr),N.hasOwnProperty(t)?delete N[t]:x(`Tried to unregister unregistered instance: ${t}`)},u.prototype=Object.create(o),r)u.prototype[c]=r[c];return z(u)},p:function(){},t:function(t,e,r,n,i){var o=ut(r);pt(t,{name:e=M(e),fromWireType:function(t){return!!t},toWireType:function(t,e){return e?n:i},argPackAdvance:8,readValueFromPointer:function(t){var n;if(1===r)n=l;else if(2===r)n=p;else{if(4!==r)throw new TypeError("Unknown boolean type size: "+e);n=h}return this.fromWireType(n[t>>o])},destructorFunction:null})},i:function(t,e,r,n,i,o,a,s,u,c,l,f,p){l=M(l),o=_t(i,o),s&&(s=_t(a,s)),c&&(c=_t(u,c)),p=_t(f,p);var d=R(l);yt(d,(function(){Et(`Cannot construct ${l} due to unbound types`,[n])})),ft([t,e,r],n?[n]:[],(function(e){var r,i;e=e[0],i=n?(r=e.registeredClass).instancePrototype:ht.prototype;var a=j(d,(function(){if(Object.getPrototypeOf(this)!==u)throw new U("Use 'new' to construct "+l);if(void 0===f.constructor_body)throw new U(l+" has no accessible constructor");var t=f.constructor_body[arguments.length];if(void 0===t)throw new U(`Tried to invoke ctor of ${l} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(f.constructor_body).toString()}) parameters instead!`);return t.apply(this,arguments)})),u=Object.create(i,{constructor:{value:a}});a.prototype=u;var f=new mt(l,a,u,p,r,o,s,c);f.baseClass&&(void 0===f.baseClass.__derivedClasses&&(f.baseClass.__derivedClasses=[]),f.baseClass.__derivedClasses.push(f));var h=new Pt(l,f,!0,!1,!1),v=new Pt(l+"*",f,!1,!1,!1),y=new Pt(l+" const*",f,!1,!0,!1);return nt[t]={pointerType:v,constPointerType:y},Tt(d,a),[h,v,y]}))},h:function(t,e,r,n,i,o,a){var s=Rt(r,n);e=M(e),o=_t(i,o),ft([],[t],(function(t){var n=`${(t=t[0]).name}.${e}`;function i(){Et(`Cannot call ${n} due to unbound types`,s)}e.startsWith("@@")&&(e=Symbol[e.substring(2)]);var u=t.registeredClass.constructor;return void 0===u[e]?(i.argCount=r-1,u[e]=i):(vt(u,e,n),u[e].overloadTable[r-1]=i),ft([],s,(function(i){var s=[i[0],null].concat(i.slice(1)),c=Ft(n,s,null,o,a);if(void 0===u[e].overloadTable?(c.argCount=r-1,u[e]=c):u[e].overloadTable[r-1]=c,t.registeredClass.__derivedClasses)for(const r of t.registeredClass.__derivedClasses)r.constructor.hasOwnProperty(e)||(r.constructor[e]=c);return[]})),[]}))},g:function(t,e,r,n,i,o,a,s){var u=Rt(r,n);e=M(e),o=_t(i,o),ft([],[t],(function(t){var n=`${(t=t[0]).name}.${e}`;function i(){Et(`Cannot call ${n} due to unbound types`,u)}e.startsWith("@@")&&(e=Symbol[e.substring(2)]),s&&t.registeredClass.pureVirtualFunctions.push(e);var c=t.registeredClass.instancePrototype,l=c[e];return void 0===l||void 0===l.overloadTable&&l.className!==t.name&&l.argCount===r-2?(i.argCount=r-2,i.className=t.name,c[e]=i):(vt(c,e,n),c[e].overloadTable[r-2]=i),ft([],u,(function(i){var s=Ft(n,i,t,o,a);return void 0===c[e].overloadTable?(s.argCount=r-2,c[e]=s):c[e].overloadTable[r-2]=s,[]})),[]}))},s:function(t,e){pt(t,{name:e=M(e),fromWireType:function(t){var e=V(t);return jt(t),e},toWireType:function(t,e){return z(e)},argPackAdvance:8,readValueFromPointer:Ct,destructorFunction:null})},n:function(t,e,r){var n=ut(r);pt(t,{name:e=M(e),fromWireType:function(t){return t},toWireType:function(t,e){return e},argPackAdvance:8,readValueFromPointer:It(e,n),destructorFunction:null})},a:function(t,e,r,n,i,o){var a=Rt(e,r);t=M(t),i=_t(n,i),yt(t,(function(){Et(`Cannot call ${t} due to unbound types`,a)}),e-1),ft([],a,(function(r){var n=[r[0],null].concat(r.slice(1));return Tt(t,Ft(t,n,null,i,o),e-1),[]}))},f:function(t,e,r,n){e=M(e);var i=ut(r),o=t=>t;if(0===n){var a=32-8*r;o=t=>t<<a>>>a}var s=e.includes("unsigned");pt(t,{name:e,fromWireType:o,toWireType:s?function(t,e){return this.name,e>>>0}:function(t,e){return this.name,e},argPackAdvance:8,readValueFromPointer:Ut(e,i,0!==n),destructorFunction:null})},b:function(t,e,r){var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][e];function i(t){var e=v,r=e[t>>=2],i=e[t+1];return new n(e.buffer,i,r)}pt(t,{name:r=M(r),fromWireType:i,argPackAdvance:8,readValueFromPointer:i},{ignoreDuplicateRegistrations:!0})},m:function(t,e){var r="std::string"===(e=M(e));pt(t,{name:e,fromWireType:function(t){var e,n,i,o=v[t>>2],a=t+4;if(r)for(var s=a,u=0;u<=o;++u){var c=a+u;if(u==o||0==f[c]){var l=(i=c-s,(n=s)?function(t,e,r){for(var n=e+r,i=e;t[i]&&!(i>=n);)++i;if(i-e>16&&t.buffer&&xt)return xt.decode(t.subarray(e,i));for(var o="";e<i;){var a=t[e++];if(128&a){var s=63&t[e++];if(192!=(224&a)){var u=63&t[e++];if((a=224==(240&a)?(15&a)<<12|s<<6|u:(7&a)<<18|s<<12|u<<6|63&t[e++])<65536)o+=String.fromCharCode(a);else{var c=a-65536;o+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else o+=String.fromCharCode((31&a)<<6|s)}else o+=String.fromCharCode(a)}return o}(f,n,i):"");void 0===e?e=l:(e+=String.fromCharCode(0),e+=l),s=c+1}}else{var p=new Array(o);for(u=0;u<o;++u)p[u]=String.fromCharCode(f[a+u]);e=p.join("")}return Yt(t),e},toWireType:function(t,e){var n;e instanceof ArrayBuffer&&(e=new Uint8Array(e));var i="string"==typeof e;i||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||x("Cannot pass non-string to std::string"),n=r&&i?function(t){for(var e=0,r=0;r<t.length;++r){var n=t.charCodeAt(r);n<=127?e++:n<=2047?e+=2:n>=55296&&n<=57343?(e+=4,++r):e+=3}return e}(e):e.length;var o=Xt(4+n+1),a=o+4;if(v[o>>2]=n,r&&i)!function(t,e,r,n){if(!(n>0))return 0;for(var i=r+n-1,o=0;o<t.length;++o){var a=t.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++o)),a<=127){if(r>=i)break;e[r++]=a}else if(a<=2047){if(r+1>=i)break;e[r++]=192|a>>6,e[r++]=128|63&a}else if(a<=65535){if(r+2>=i)break;e[r++]=224|a>>12,e[r++]=128|a>>6&63,e[r++]=128|63&a}else{if(r+3>=i)break;e[r++]=240|a>>18,e[r++]=128|a>>12&63,e[r++]=128|a>>6&63,e[r++]=128|63&a}}e[r]=0}(e,f,a,n+1);else if(i)for(var s=0;s<n;++s){var u=e.charCodeAt(s);u>255&&(Yt(a),x("String has UTF-16 code units that do not fit in 8 bits")),f[a+s]=u}else for(s=0;s<n;++s)f[a+s]=e[s];return null!==t&&t.push(Yt,o),o},argPackAdvance:8,readValueFromPointer:Ct,destructorFunction:function(t){Yt(t)}})},l:function(t,e,r){var n,i,o,a,s;r=M(r),2===e?(n=zt,i=Bt,a=Ht,o=()=>d,s=1):4===e&&(n=Mt,i=qt,a=Gt,o=()=>v,s=2),pt(t,{name:r,fromWireType:function(t){for(var r,i=v[t>>2],a=o(),u=t+4,c=0;c<=i;++c){var l=t+4+c*e;if(c==i||0==a[l>>s]){var f=n(u,l-u);void 0===r?r=f:(r+=String.fromCharCode(0),r+=f),u=l+e}}return Yt(t),r},toWireType:function(t,n){"string"!=typeof n&&x(`Cannot pass non-string to C++ string type ${r}`);var o=a(n),u=Xt(4+o+e);return v[u>>2]=o>>s,i(n,u+4,o+e),null!==t&&t.push(Yt,u),u},argPackAdvance:8,readValueFromPointer:Ct,destructorFunction:function(t){Yt(t)}})},u:function(t,e){pt(t,{isVoid:!0,name:e=M(e),argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},c:function(t,e,r,n){var i,o;(t=Nt[t])(e=V(e),r=void 0===(o=Lt[i=r])?M(i):o,null,n)},e:jt,d:function(t,e){var r=function(t,e){for(var r=new Array(t),n=0;n<t;++n)r[n]=X(v[e+4*n>>2],"parameter "+n);return r}(t,e),n=r[0],i=n.name+"_$"+r.slice(1).map((function(t){return t.name})).join("_")+"$",o=Jt[i];if(void 0!==o)return o;var a,s,u=new Array(t-1);return a=(e,i,o,a)=>{for(var s=0,c=0;c<t-1;++c)u[c]=r[c+1].readValueFromPointer(a+s),s+=r[c+1].argPackAdvance;var l=e[i].apply(e,u);for(c=0;c<t-1;++c)r[c+1].deleteObject&&r[c+1].deleteObject(u[c]);if(!n.isVoid)return n.toWireType(o,l)},s=Nt.length,Nt.push(a),o=s,Jt[i]=o,o},o:function(t){t>4&&(D.get(t).refcount+=1)},j:function(){_("")},r:function(t,e,r){f.copyWithin(t,e,e+r)},q:function(t){var e=f.length,r=2147483648;if((t>>>=0)>r)return!1;for(var n,i=1;i<=4;i*=2){var o=e*(1+.2/i);if(o=Math.min(o,t+100663296),Zt(Math.min(r,(n=Math.max(t,o))+(65536-n%65536)%65536)))return!0}return!1}};!function(){var t,e,r,o,a={a:Kt};function l(t){var e,r=t.exports;return i.asm=r,u=i.asm.v,b(),g=i.asm.z,e=i.asm.w,T.unshift(e),function(){if(S--,i.monitorRunDependencies&&i.monitorRunDependencies(S),0==S&&O){var t=O;O=null,t()}}(),r}if(S++,i.monitorRunDependencies&&i.monitorRunDependencies(S),i.instantiateWasm)try{return i.instantiateWasm(a,l)}catch(t){c("Module.instantiateWasm callback failed with error: "+t),n(t)}(t=s,e=w,r=a,o=function(t){l(t.instance)},t||"function"!=typeof WebAssembly.instantiateStreaming||k(e)||"function"!=typeof fetch?W(e,r,o):fetch(e,{credentials:"same-origin"}).then((t=>WebAssembly.instantiateStreaming(t,r).then(o,(function(t){return c("wasm streaming compile failed: "+t),c("falling back to ArrayBuffer instantiation"),W(e,r,o)}))))).catch(n)}();var Qt,Xt=function(){return(Xt=i.asm.x).apply(null,arguments)},Yt=function(){return(Yt=i.asm.y).apply(null,arguments)},te=function(){return(te=i.asm.A).apply(null,arguments)};function ee(){function t(){Qt||(Qt=!0,i.calledRun=!0,$||(F(T),r(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),function(){if(i.postRun)for("function"==typeof i.postRun&&(i.postRun=[i.postRun]);i.postRun.length;)t=i.postRun.shift(),A.unshift(t);var t;F(A)}()))}S>0||(function(){if(i.preRun)for("function"==typeof i.preRun&&(i.preRun=[i.preRun]);i.preRun.length;)t=i.preRun.shift(),P.unshift(t);var t;F(P)}(),S>0||(i.setStatus?(i.setStatus("Running..."),setTimeout((function(){setTimeout((function(){i.setStatus("")}),1),t()}),1)):t()))}if(i.__embind_initialize_bindings=function(){return(i.__embind_initialize_bindings=i.asm.B).apply(null,arguments)},O=function t(){Qt||ee(),Qt||(O=t)},i.preInit)for("function"==typeof i.preInit&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return ee(),t.ready});t.exports=r}));t({default:r,__moduleExports:r})}}}));