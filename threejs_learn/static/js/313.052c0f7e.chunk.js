"use strict";(self.webpackChunkthree=self.webpackChunkthree||[]).push([[313],{1313:function(e,n,i){i.r(n),i.d(n,{default:function(){return F}});var t=i(2791),a=i(1022),o=i(9738),r={importFile:"musicVisible_importFile__qY15a",file:"musicVisible_file__Za42I"},d=i(184),s=new a.xsS,l=new a.cPb(45,window.innerWidth/window.innerHeight,.1,1e3);l.position.set(0,40,270),l.lookAt(new a.Pa4(0,0,0)),s.add(l);var w,c,p=new a.CP7({antialias:!0});new o.z(l,p.domElement).enableDamping=!0,p.setSize(window.innerWidth,window.innerHeight),p.shadowMap.enabled=!0,p.shadowMap.type=a._iA;var u,f,h,m,b,v=32,y=new Array(16),g=[],x=new Array(v);function F(){var e=(0,t.useRef)();function n(){var e=window.innerWidth,n=window.innerHeight;l.aspect=e/n,l.updateProjectionMatrix(),p.setSize(e,n)}function i(){for(var e="0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f".split(","),n="#",i=0;i<6;i++)n+=e[Math.floor(16*Math.random())];return n}function o(){if(u){u.getFrequencyData(),y=u.data;for(var e=0;e<.5*v;e++)y[e]/4===0&&(y[e]=4),g[e].scale.y=y[e]/4,g[e].position.y=0;u&&(p.render(s,l),window.requestAnimationFrame(o))}else b.stop()}return(0,t.useEffect)((function(){return function(){var e=new a._12(500,500),n=new a.YBo({color:11184810});(f=new a.Kj0(e,n)).rotation.x=-Math.PI/2,f.position.x=0,f.position.y=0,f.position.z=0,f.receiveShadow=!0,s.add(f)}(),function(){new a.Tme;var e="#bbbbbb";(h=new a.Ox3(e)).position.set(0,50,50),h.castShadow=!0,h.target=f,h.shadow.CameraNear=.1,h.shadow.CameraFar=100,h.shadow.CameraTop=200,h.shadow.CameraBottom=0,h.shadow.MapWidth=2048,h.shadow.MapHeight=2048;var n=h.clone();n.position.set(0,50,-50),s.add(n),s.add(h);var i=new a.Mig("#0c0c0c");s.add(i)}(),window.addEventListener("resize",n,!1),e.current.appendChild(p.domElement),function(){u=null}}),[]),(0,d.jsxs)("div",{children:[(0,d.jsxs)("label",{htmlFor:"importFile",className:r.file,id:"label1",children:[" \u6253\u5f00\u672c\u5730\u97f3\u9891\u6587\u4ef6",(0,d.jsx)("input",{type:"file",className:r.importFile,id:"importFile",accept:"audio/*",onChange:function(){w=document.getElementById("importFile").files[0],c=URL.createObjectURL(w),e.current.style.display="block",document.getElementById("label1").style.display="none",function(){var e=new a.mTL,n=new a.SJI,t=new a.BbS(n);b=t,e.load(c,(function(e){t.setBuffer(e),t.setLoop(!0),t.play()})),u=new a.kqm(t,v),y=u.data;for(var r=0;r<.5*v;r++)x[r]=new a.DvJ(12,2,12),m=new a.xoR({color:i()}),g[r]=new a.Kj0(x[r],m),g[r].position.x=20*r-160,g[r].castShadow=!0,g[r].rotation.y=Math.PI/4,s.add(g[r]);o()}()}})]}),(0,d.jsx)("div",{ref:e,style:{display:"none"}})]})}}}]);
//# sourceMappingURL=313.052c0f7e.chunk.js.map