System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,h,g,a,c,p,C,d,m;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.initializerDefineProperty},function(t){i=t.cclegacy,n=t.Node,s=t._decorator,l=t.Component,r=t.Color,h=t.Canvas,g=t.UITransform,a=t.instantiate,c=t.Label,p=t.RichText,C=t.Toggle,d=t.Button,m=t.director}],execute:function(){var u,L,M,b,T,f,x,S,E;i._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);const{ccclass:v,property:I}=s;t("DebugViewRuntimeControl",(u=v("internal.DebugViewRuntimeControl"),L=I(n),M=I(n),b=I(n),u((x=e((f=class extends l{constructor(...t){super(...t),o(this,"compositeModeToggle",x,this),o(this,"singleModeToggle",S,this),o(this,"EnableAllCompositeModeButton",E,this),this._single=0,this.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],this.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],this.strMisc=["CSM Layer Coloration","Lighting With Albedo"],this.compositeModeToggleList=[],this.singleModeToggleList=[],this.miscModeToggleList=[],this.textComponentList=[],this.labelComponentList=[],this.textContentList=[],this.hideButtonLabel=void 0,this._currentColorIndex=0,this.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],this.color=[r.WHITE,r.BLACK,r.RED,r.GREEN,r.BLUE]}start(){if(!this.node.parent.getComponent(h))return void console.error("debug-view-runtime-control should be child of Canvas");const t=this.node.parent.getComponent(g),e=.5*t.width,o=.5*t.height;let i=.1*e-e,n=o-.1*o;const s=this.node.getChildByName("MiscMode"),l=a(s);l.parent=this.node,l.name="Buttons";const m=a(s);m.parent=this.node,m.name="Titles";for(let t=0;t<2;t++){const e=a(this.EnableAllCompositeModeButton.getChildByName("Label"));e.setPosition(i+(t>0?450:150),n,0),e.setScale(.75,.75,.75),e.parent=m;const o=e.getComponent(c);o.string=t?"----------Composite Mode----------":"----------Single Mode----------",o.color=r.WHITE,o.overflow=0,this.labelComponentList[this.labelComponentList.length]=o}n-=20;let u=0;for(let t=0;t<this.strSingle.length;t++,u++){t===this.strSingle.length>>1&&(i+=200,u=0);const e=t?a(this.singleModeToggle):this.singleModeToggle;e.setPosition(i,n-20*u,0),e.setScale(.5,.5,.5),e.parent=this.singleModeToggle.parent;const o=e.getComponentInChildren(p);o.string=this.strSingle[t],this.textComponentList[this.textComponentList.length]=o,this.textContentList[this.textContentList.length]=o.string,e.on(C.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[t]=e}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(d.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;let L=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=L;const M=a(this.EnableAllCompositeModeButton);M.setPosition(i+90,n,0),M.setScale(.5,.5,.5),M.on(d.EventType.CLICK,this.changeTextColor,this),M.parent=l,L=M.getComponentInChildren(c),L.string="TextColor",this.labelComponentList[this.labelComponentList.length]=L;const b=a(this.EnableAllCompositeModeButton);b.setPosition(i+200,n,0),b.setScale(.5,.5,.5),b.on(d.EventType.CLICK,this.hideUI,this),b.parent=this.node.parent,L=b.getComponentInChildren(c),L.string="Hide UI",this.labelComponentList[this.labelComponentList.length]=L,this.hideButtonLabel=L,n-=40;for(let t=0;t<this.strMisc.length;t++){const e=a(this.compositeModeToggle);e.setPosition(i,n-20*t,0),e.setScale(.5,.5,.5),e.parent=s;const o=e.getComponentInChildren(p);o.string=this.strMisc[t],this.textComponentList[this.textComponentList.length]=o,this.textContentList[this.textContentList.length]=o.string;e.getComponent(C).isChecked=!!t,e.on(C.EventType.TOGGLE,t?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[t]=e}n-=150;for(let t=0;t<this.strComposite.length;t++){const e=t?a(this.compositeModeToggle):this.compositeModeToggle;e.setPosition(i,n-20*t,0),e.setScale(.5,.5,.5),e.parent=this.compositeModeToggle.parent;const o=e.getComponentInChildren(p);o.string=this.strComposite[t],this.textComponentList[this.textComponentList.length]=o,this.textContentList[this.textContentList.length]=o.string,e.on(C.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[t]=e}}isTextMatched(t,e){let o=new String(t);const i=o.search(">");return-1===i?t===e:(o=o.substr(i+1),o=o.substr(0,o.search("<")),o===e)}toggleSingleMode(t){const e=m.root.debugView,o=t.getComponentInChildren(p);for(let t=0;t<this.strSingle.length;t++)this.isTextMatched(o.string,this.strSingle[t])&&(e.singleMode=t)}toggleCompositeMode(t){const e=m.root.debugView,o=t.getComponentInChildren(p);for(let i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)}toggleLightingWithAlbedo(t){m.root.debugView.lightingWithAlbedo=t.isChecked}toggleCSMColoration(t){m.root.debugView.csmLayerColoration=t.isChecked}enableAllCompositeMode(t){const e=m.root.debugView;e.enableAllCompositeMode(!0);for(let t=0;t<this.compositeModeToggleList.length;t++){this.compositeModeToggleList[t].getComponent(C).isChecked=!0}let o=this.miscModeToggleList[0].getComponent(C);o.isChecked=!1,e.csmLayerColoration=!1,o=this.miscModeToggleList[1].getComponent(C),o.isChecked=!0,e.lightingWithAlbedo=!0}hideUI(t){const e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"}changeTextColor(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(let t=0;t<this.textComponentList.length;t++)this.textComponentList[t].string=this.strColor[this._currentColorIndex]+this.textContentList[t]+"</color>";for(let t=0;t<this.labelComponentList.length;t++)this.labelComponentList[t].color=this.color[this._currentColorIndex]}onLoad(){}update(t){}}).prototype,"compositeModeToggle",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=e(f.prototype,"singleModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(f.prototype,"EnableAllCompositeModeButton",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=f))||T));i._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./main.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/main.ts",["cc"],(function(t){var o,e,n,s,c,l,a;return{setters:[function(t){o=t.cclegacy,e=t.Component,n=t.find,s=t.Sprite,c=t.Button,l=t.EventHandler,a=t._decorator}],execute:function(){var i;o._RF.push({},"4b5001OSbFBnJ5HRCqAHj73","main",void 0);const{ccclass:r,property:u}=a;t("main",r("main")(i=class extends e{start(){const t=n("Canvas");if(t){console.log("Canvas 節點找到:",t);const o=t.getChildByName("Sprite");if(o){console.log("Sprite 節點找到:",o);const t=o.getComponent(s);t?console.log("Sprite 組件找到:",t):console.log("Sprite 節點上未找到 Sprite 組件。")}else console.log("在 Canvas 下未找到 Sprite 節點。");const e=t.getChildByName("Button");if(e){console.log("Button 節點找到:",e);const t=e.getComponent(c);t?(console.log("Button 組件找到:",t),this.registerButtonEvent(t)):console.log("Button 節點上未找到 Button 組件。")}else console.log("在 Canvas 下未找到 Button 節點。")}else console.log("Canvas 節點未找到。")}registerButtonEvent(t){const o=new l;o.target=this.node,o.component="main",o.handler="onButtonClick",o.customEventData="button clicked",t.clickEvents.push(o)}onButtonClick(t,o){console.log("按鈕被點擊! 自定義事件數據:",o),this.callJavaMethod()}callJavaMethod(){cc.sys.isNative&&cc.sys.os===cc.sys.OS_ANDROID?jsb.reflection.callStaticMethod("com/cocos/game/AppActivity","showRewardedAd","()V"):console.log("此功能僅在 Android 原生設備上可用")}update(t){}})||i);o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});