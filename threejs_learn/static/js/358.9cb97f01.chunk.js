"use strict";(self.webpackChunkthree=self.webpackChunkthree||[]).push([[358],{7358:function(e,r,t){t.r(r),t.d(r,{default:function(){return g}});var n=t(3433),a=t(9439),i=t(2791),o=t(1022),s=t(9738),c=t(6145),u=t(1730),d=t(5171),l=t(5331),f=t(184),h=new o.xsS,p=new o.cPb(75,window.innerWidth/window.innerHeight,1,1e5);p.position.set(1e3,1e3,1e3),h.add(p);var y=new o.CP7({antialias:!0,logarithmicDepthBuffer:!0});y.setSize(window.innerWidth,window.innerHeight);var v={camera:p},m={default:p};function g(){var e=(0,i.useRef)(),r=(0,i.useState)(0),s=(0,a.Z)(r,2),p=s[0],g=s[1],w=(0,i.useState)(0),b=(0,a.Z)(w,2),k=b[0],A=b[1],_=(0,i.useState)([]),E=(0,a.Z)(_,2),L=E[0],T=E[1];function x(){var e=window.innerWidth,r=window.innerHeight;v.camera.aspect=e/r,v.camera.updateProjectionMatrix(),y.setSize(e,r)}function P(e){if(v.camera){if(v.mixer){var r=v.clock.getDelta();v.mixer.update(2*r)}y.render(h,v.camera),window.requestAnimationFrame(P)}}return(0,i.useEffect)((function(){return v.clock=new o.SUY,window.addEventListener("resize",x,!1),function(){v.loader=new c.E;var e=new u._;e.setDecoderPath("./draco/"),v.loader.setDRACOLoader(e),v.loader.load("/github_pages/threejs_learn/model/city4.glb",(function(e){v.gltf=e,h.add(e.scene),e.scene.traverse((function(r){if("\u70ed\u6c14\u7403"===r.name&&(v.mixer=new o.Xcj(r),v.clip=e.animations[0],v.action=v.mixer.clipAction(v.clip),v.action.play()),"\u6c7d\u8f66\u56ed\u533a\u8f68\u8ff9"===r.name){var t=r;t.visible=!1;for(var n=[],a=t.geometry.attributes.position.count-1;a>=0;a--)n.push(new o.Pa4(t.geometry.attributes.position.getX(a),t.geometry.attributes.position.getY(a),t.geometry.attributes.position.getZ(a)));v.curve=new o.YT8(n),v.curveProgress=0,function(){if(!v.curve)return;l.ZP.to(v,{curveProgress:.999,duration:10,repeat:-1,onUpdate:function(){if(v.curve){var e=v.curve.getPoint(v.curveProgress);if(v.redcar.position.set(e.x,e.y,e.z),v.curveProgress+.001<1){var r=v.curve.getPoint(v.curveProgress+.001);v.redcar.lookAt(r)}}}})}()}"redcar"===r.name&&(v.redcar=r)})),e.cameras.forEach((function(e){m[e.name]=e}))})),(new d.x).loadAsync(t(4367)).then((function(e){h.background=e,h.environment=e,h.environment.mapping=o.dSO})),y.shadowMap.enabled=!0,y.toneMapping=o.LY2,y.toneMappingExposure=1.5,new o.Ox3(16777215,1).position.set(10,100,10)}(),e.current.appendChild(y.domElement),P(),function(){window.removeEventListener("resize",x),v={}}}),[]),(0,i.useEffect)((function(){var e=document.querySelector(".panel");e.scrollTop=e.scrollHeight}),[L]),(0,f.jsxs)("div",{style:{position:"relative",userSelect:"none"},children:[(0,f.jsx)("div",{ref:e,onClick:function(e){var r=new o.iMs,t=new o.FM8;t.x=e.clientX/window.innerWidth*2-1,t.y=-e.clientY/window.innerHeight*2+1,r.setFromCamera(t,v.camera);var a=r.intersectObjects(h.children);a.length&&T([].concat((0,n.Z)(L),[a[0].object.name])),console.log("click---",a)}}),(0,f.jsxs)("div",{style:{position:"absolute",right:0,top:0,width:"200px"},children:[(0,f.jsxs)("div",{className:"panel",style:{height:"250px",overflow:"auto",background:"rgba(255,255,255, .8)"},children:[(0,f.jsx)("div",{children:"\u70b9\u51fb\u8bb0\u5f55"}),L.map((function(e,r){return(0,f.jsxs)("div",{children:["\u70b9\u51fb\u4e86",e]},r)}))]}),(0,f.jsx)("div",{style:{height:"4px"}}),(0,f.jsxs)("div",{style:{background:"rgba(255,255,255, .8)",cursor:"pointer"},onClick:function(){A((function(e){var r=+!e;return v.action.stop(),v.action.reset(),v.clip=v.gltf.animations[r],v.action=v.mixer.clipAction(v.clip),v.action.play(),r}))},children:["\u5207\u6362\u70ed\u6c14\u7403\u52a8\u753b(\u5f53\u524d",k?"\u73af\u7ed5":"\u6a2a\u7a7f",")"]}),(0,f.jsx)("div",{style:{height:"4px"}}),(0,f.jsxs)("div",{style:{background:"rgba(255,255,255, .8)",cursor:"pointer"},onClick:function(){var e=(p+1)%3,r=["default","carcamera_Orientation","rightcamera_Orientation"][e];g(e),m[r]&&(v.camera=m[r],v.camera.aspect=window.innerWidth/window.innerHeight,v.camera.updateProjectionMatrix())},children:["\u5207\u63623\u79cd\u89c6\u89d2(\u5f53\u524d",p+1,")"]})]})]})}new s.z(v.camera,y.domElement).enableDamping=!0},4367:function(e,r,t){e.exports=t.p+"static/media/h.9523aa39222271d54812.hdr"},1730:function(e,r,t){t.d(r,{_:function(){return u}});var n=t(5671),a=t(3144),i=t(136),o=t(7277),s=t(1022),c=new WeakMap,u=function(e){(0,i.Z)(t,e);var r=(0,o.Z)(t);function t(e){var a;return(0,n.Z)(this,t),(a=r.call(this,e)).decoderPath="",a.decoderConfig={},a.decoderBinary=null,a.decoderPending=null,a.workerLimit=4,a.workerPool=[],a.workerNextTaskID=1,a.workerSourceURL="",a.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},a.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"},a}return(0,a.Z)(t,[{key:"setDecoderPath",value:function(e){return this.decoderPath=e,this}},{key:"setDecoderConfig",value:function(e){return this.decoderConfig=e,this}},{key:"setWorkerLimit",value:function(e){return this.workerLimit=e,this}},{key:"load",value:function(e,r,t,n){var a=this,i=new s.hH6(this.manager);i.setPath(this.path),i.setResponseType("arraybuffer"),i.setRequestHeader(this.requestHeader),i.setWithCredentials(this.withCredentials),i.load(e,(function(e){a.decodeDracoFile(e,r).catch(n)}),t,n)}},{key:"decodeDracoFile",value:function(e,r,t,n){var a={attributeIDs:t||this.defaultAttributeIDs,attributeTypes:n||this.defaultAttributeTypes,useUniqueIDs:!!t};return this.decodeGeometry(e,a).then(r)}},{key:"decodeGeometry",value:function(e,r){var t,n=this,a=JSON.stringify(r);if(c.has(e)){var i=c.get(e);if(i.key===a)return i.promise;if(0===e.byteLength)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}var o=this.workerNextTaskID++,s=e.byteLength,u=this._getWorker(o,s).then((function(n){return t=n,new Promise((function(n,a){t._callbacks[o]={resolve:n,reject:a},t.postMessage({type:"decode",id:o,taskConfig:r,buffer:e},[e])}))})).then((function(e){return n._createGeometry(e.geometry)}));return u.catch((function(){return!0})).then((function(){t&&o&&n._releaseTask(t,o)})),c.set(e,{key:a,promise:u}),u}},{key:"_createGeometry",value:function(e){var r=new s.u9r;e.index&&r.setIndex(new s.TlE(e.index.array,1));for(var t=0;t<e.attributes.length;t++){var n=e.attributes[t],a=n.name,i=n.array,o=n.itemSize;r.setAttribute(a,new s.TlE(i,o))}return r}},{key:"_loadLibrary",value:function(e,r){var t=new s.hH6(this.manager);return t.setPath(this.decoderPath),t.setResponseType(r),t.setWithCredentials(this.withCredentials),new Promise((function(r,n){t.load(e,r,void 0,n)}))}},{key:"preload",value:function(){return this._initDecoder(),this}},{key:"_initDecoder",value:function(){var e=this;if(this.decoderPending)return this.decoderPending;var r="object"!==typeof WebAssembly||"js"===this.decoderConfig.type,t=[];return r?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then((function(t){var n=t[0];r||(e.decoderConfig.wasmBinary=t[1]);var a=d.toString(),i=["/* draco decoder */",n,"","/* worker */",a.substring(a.indexOf("{")+1,a.lastIndexOf("}"))].join("\n");e.workerSourceURL=URL.createObjectURL(new Blob([i]))})),this.decoderPending}},{key:"_getWorker",value:function(e,r){var t=this;return this._initDecoder().then((function(){if(t.workerPool.length<t.workerLimit){var n=new Worker(t.workerSourceURL);n._callbacks={},n._taskCosts={},n._taskLoad=0,n.postMessage({type:"init",decoderConfig:t.decoderConfig}),n.onmessage=function(e){var r=e.data;switch(r.type){case"decode":n._callbacks[r.id].resolve(r);break;case"error":n._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},t.workerPool.push(n)}else t.workerPool.sort((function(e,r){return e._taskLoad>r._taskLoad?-1:1}));var a=t.workerPool[t.workerPool.length-1];return a._taskCosts[e]=r,a._taskLoad+=r,a}))}},{key:"_releaseTask",value:function(e,r){e._taskLoad-=e._taskCosts[r],delete e._callbacks[r],delete e._taskCosts[r]}},{key:"debug",value:function(){console.log("Task load: ",this.workerPool.map((function(e){return e._taskLoad})))}},{key:"dispose",value:function(){for(var e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}}]),t}(s.aNw);function d(){var e,r;function t(e,r,t,n,a,i){var o=i.num_components(),s=t.num_points()*o,c=s*a.BYTES_PER_ELEMENT,u=function(e,r){switch(r){case Float32Array:return e.DT_FLOAT32;case Int8Array:return e.DT_INT8;case Int16Array:return e.DT_INT16;case Int32Array:return e.DT_INT32;case Uint8Array:return e.DT_UINT8;case Uint16Array:return e.DT_UINT16;case Uint32Array:return e.DT_UINT32}}(e,a),d=e._malloc(c);r.GetAttributeDataArrayForAllPoints(t,i,u,c,d);var l=new a(e.HEAPF32.buffer,d,s).slice();return e._free(d),{name:n,array:l,itemSize:o}}onmessage=function(n){var a=n.data;switch(a.type){case"init":e=a.decoderConfig,r=new Promise((function(r){e.onModuleLoaded=function(e){r({draco:e})},DracoDecoderModule(e)}));break;case"decode":var i=a.buffer,o=a.taskConfig;r.then((function(e){var r=e.draco,n=new r.Decoder,s=new r.DecoderBuffer;s.Init(new Int8Array(i),i.byteLength);try{var c=function(e,r,n,a){var i,o,s=a.attributeIDs,c=a.attributeTypes,u=r.GetEncodedGeometryType(n);if(u===e.TRIANGULAR_MESH)i=new e.Mesh,o=r.DecodeBufferToMesh(n,i);else{if(u!==e.POINT_CLOUD)throw new Error("THREE.DRACOLoader: Unexpected geometry type.");i=new e.PointCloud,o=r.DecodeBufferToPointCloud(n,i)}if(!o.ok()||0===i.ptr)throw new Error("THREE.DRACOLoader: Decoding failed: "+o.error_msg());var d={index:null,attributes:[]};for(var l in s){var f=self[c[l]],h=void 0,p=void 0;if(a.useUniqueIDs)p=s[l],h=r.GetAttributeByUniqueId(i,p);else{if(-1===(p=r.GetAttributeId(i,e[s[l]])))continue;h=r.GetAttribute(i,p)}d.attributes.push(t(e,r,i,l,f,h))}u===e.TRIANGULAR_MESH&&(d.index=function(e,r,t){var n=t.num_faces(),a=3*n,i=4*a,o=e._malloc(i);r.GetTrianglesUInt32Array(t,i,o);var s=new Uint32Array(e.HEAPF32.buffer,o,a).slice();return e._free(o),{array:s,itemSize:1}}(e,r,i));return e.destroy(i),d}(r,n,s,o),u=c.attributes.map((function(e){return e.array.buffer}));c.index&&u.push(c.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:c},u)}catch(d){console.error(d),self.postMessage({type:"error",id:a.id,error:d.message})}finally{r.destroy(s),r.destroy(n)}}))}}}},5171:function(e,r,t){t.d(r,{x:function(){return d}});var n=t(5671),a=t(3144),i=t(1752),o=t(1120),s=t(136),c=t(7277),u=t(1022),d=function(e){(0,s.Z)(t,e);var r=(0,c.Z)(t);function t(e){var a;return(0,n.Z)(this,t),(a=r.call(this,e)).type=u.cLu,a}return(0,a.Z)(t,[{key:"parse",value:function(e){var r=function(e,r){switch(e){case 1:console.error("THREE.RGBELoader Read Error: "+(r||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(r||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(r||""));break;default:console.error("THREE.RGBELoader: Error: "+(r||""))}return-1},t=function(e,r,t){r=r||1024;for(var n=e.pos,a=-1,i=0,o="",s=String.fromCharCode.apply(null,new Uint16Array(e.subarray(n,n+128)));0>(a=s.indexOf("\n"))&&i<r&&n<e.byteLength;)o+=s,i+=s.length,n+=128,s+=String.fromCharCode.apply(null,new Uint16Array(e.subarray(n,n+128)));return-1<a&&(!1!==t&&(e.pos+=i+a+1),o+s.slice(0,a))},n=function(e,r,t,n){var a=e[r+3],i=Math.pow(2,a-128)/255;t[n+0]=e[r+0]*i,t[n+1]=e[r+1]*i,t[n+2]=e[r+2]*i,t[n+3]=1},a=function(e,r,t,n){var a=e[r+3],i=Math.pow(2,a-128)/255;t[n+0]=u.A5E.toHalfFloat(Math.min(e[r+0]*i,65504)),t[n+1]=u.A5E.toHalfFloat(Math.min(e[r+1]*i,65504)),t[n+2]=u.A5E.toHalfFloat(Math.min(e[r+2]*i,65504)),t[n+3]=u.A5E.toHalfFloat(1)},i=new Uint8Array(e);i.pos=0;var o=function(e){var n,a,i=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,o=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,s=/^\s*FORMAT=(\S+)\s*$/,c=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,u={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};if(e.pos>=e.byteLength||!(n=t(e)))return r(1,"no header found");if(!(a=n.match(/^#\?(\S+)/)))return r(3,"bad initial token");for(u.valid|=1,u.programtype=a[1],u.string+=n+"\n";!1!==(n=t(e));)if(u.string+=n+"\n","#"!==n.charAt(0)){if((a=n.match(i))&&(u.gamma=parseFloat(a[1])),(a=n.match(o))&&(u.exposure=parseFloat(a[1])),(a=n.match(s))&&(u.valid|=2,u.format=a[1]),(a=n.match(c))&&(u.valid|=4,u.height=parseInt(a[1],10),u.width=parseInt(a[2],10)),2&u.valid&&4&u.valid)break}else u.comments+=n+"\n";return 2&u.valid?4&u.valid?u:r(3,"missing image size specifier"):r(3,"missing format specifier")}(i);if(-1!==o){var s=o.width,c=o.height,d=function(e,t,n){var a=t;if(a<8||a>32767||2!==e[0]||2!==e[1]||128&e[2])return new Uint8Array(e);if(a!==(e[2]<<8|e[3]))return r(3,"wrong scanline width");var i=new Uint8Array(4*t*n);if(!i.length)return r(4,"unable to allocate buffer space");for(var o=0,s=0,c=4*a,u=new Uint8Array(4),d=new Uint8Array(c),l=n;l>0&&s<e.byteLength;){if(s+4>e.byteLength)return r(1);if(u[0]=e[s++],u[1]=e[s++],u[2]=e[s++],u[3]=e[s++],2!=u[0]||2!=u[1]||(u[2]<<8|u[3])!=a)return r(3,"bad rgbe scanline format");for(var f=0,h=void 0;f<c&&s<e.byteLength;){var p=(h=e[s++])>128;if(p&&(h-=128),0===h||f+h>c)return r(3,"bad scanline data");if(p)for(var y=e[s++],v=0;v<h;v++)d[f++]=y;else d.set(e.subarray(s,s+h),f),f+=h,s+=h}for(var m=a,g=0;g<m;g++){var w=0;i[o]=d[g+w],w+=a,i[o+1]=d[g+w],w+=a,i[o+2]=d[g+w],w+=a,i[o+3]=d[g+w],o+=4}l--}return i}(i.subarray(i.pos),s,c);if(-1!==d){var l,f,h;switch(this.type){case u.VzW:h=d.length/4;for(var p=new Float32Array(4*h),y=0;y<h;y++)n(d,4*y,p,4*y);l=p,f=u.VzW;break;case u.cLu:h=d.length/4;for(var v=new Uint16Array(4*h),m=0;m<h;m++)a(d,4*m,v,4*m);l=v,f=u.cLu;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type)}return{width:s,height:c,data:l,header:o.string,gamma:o.gamma,exposure:o.exposure,type:f}}}return null}},{key:"setDataType",value:function(e){return this.type=e,this}},{key:"load",value:function(e,r,n,a){return(0,i.Z)((0,o.Z)(t.prototype),"load",this).call(this,e,(function(e,t){switch(e.type){case u.VzW:case u.cLu:e.encoding=u.rnI,e.minFilter=u.wem,e.magFilter=u.wem,e.generateMipmaps=!1,e.flipY=!0}r&&r(e,t)}),n,a)}}]),t}(u.yxD)}}]);
//# sourceMappingURL=358.9cb97f01.chunk.js.map