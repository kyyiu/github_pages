"use strict";(self.webpackChunkthree=self.webpackChunkthree||[]).push([[853],{8853:function(n,e,a){a.r(e),a.d(e,{default:function(){return y}});var t=a(2791),i=a(1022),s=a(9738),o={canvas0:"drawOnCanvas_canvas0__WvxQj",canvas1:"drawOnCanvas_canvas1__6Hiee",canvas2:"drawOnCanvas_canvas2__VgEc2",canvas3:"drawOnCanvas_canvas3__pBRBE",canvas4:"drawOnCanvas_canvas4__H9-RI",canvas5:"drawOnCanvas_canvas5__w8lmw"},d=a(184),c=new i.xsS,r=new i.cPb(45,window.innerWidth/window.innerHeight,.1,1e3);r.position.set(0,0,700),c.add(r);var v=new i.CP7({antialias:!1});v.setClearColor(new i.Ilk(0)),v.setSize(window.innerWidth,window.innerHeight);var u,w=new i.FM8,f=new Array(6),h=!1,m=new Array(6),l=new Array(6),p=new i.FM8,g=new Array(6),x=new Array(6);function y(){var n=(0,t.useRef)();function e(n){var e,a;f&&(n.changedTouches?(e=n.changedTouches[0].pageX,a=n.changedTouches[0].pageY):(e=n.clientX,a=n.clientY),p.x=e/window.innerWidth*2-1,p.y=-a/window.innerHeight*2+1)}function a(){for(var n="0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f".split(","),e="#",a=0;a<6;a++)e+=n[Math.floor(16*Math.random())];return e}function y(){var n=window.innerWidth,e=window.innerHeight;r.aspect=n/e,r.updateProjectionMatrix(),v.setSize(n,e)}function E(n){v.render(c,r),window.requestAnimationFrame(E)}return(0,t.useEffect)((function(){window.addEventListener("resize",y,!1),function(){var a=new s.z(r,v.domElement);a.enableDamping=!0,a.minDistance=3,a.maxDistance=1e3,a.enablePan=!0,a.zoomSpeed=3,a.addEventListener("change",(function(){!0})),n.current.addEventListener("mousedown",(function(){!1})),n.current.addEventListener("mouseup",(function(){!function(){u.setFromCamera(p,r);var n=u.intersectObjects(c.children);setTimeout((function(){if(n.length>0){var e=n[0].object.name;!function(n){for(var e=0;e<6;e++)n!=e?document.getElementById("canvas"+e).style.display="none":document.getElementById("canvas"+n).style.display="block"}(e),m[e].addEventListener("mousedown",(function(n){h=!0,w.set(n.offsetX,n.offsetY)})),m[e].addEventListener("mousemove",(function(n){var a,t,i,s;h&&(a=g[e],t=n.offsetX,i=n.offsetY,s=e,a.moveTo(w.x,w.y),a.strokeStyle="#000000",a.lineTo(t,i),a.stroke(),w.set(t,i),x[s].map.needsUpdate=!0)})),m[e].addEventListener("mouseup",(function(n){h=!1})),m[e].addEventListener("mouseleave",(function(n){h=!1}))}}),100)}()})),setTimeout((function(){n.current.addEventListener("mousemove",e),n.current.addEventListener("touchmove",e)}),70)}(),function(){var n=new i.PMe("0xffffff");n.position.set(r.position),c.add(n);var e=new i.Mig(4210752);c.add(e)}(),u=new i.iMs,function(){for(var n=200,e=0;e<x.length;e++)l[e]=a(),x[e]=new i.vBJ({color:l[e]}),x[e].side=i.ehD,f[e]=new i.Kj0(new i._12(n,n),x[e]);f[0].position.x=0,f[0].position.y=0,f[0].position.z=0,f[0].name="0",c.add(f[0]),f[1].position.x=0,f[1].position.y=0,f[1].position.z=-200,f[1].name="1",c.add(f[1]),f[3].rotation.x=-Math.PI/2,f[3].position.x=0,f[3].position.y=100,f[3].position.z=-100,f[3].name="3",c.add(f[3]),f[4].rotation.x=-Math.PI/2,f[4].position.x=0,f[4].position.y=-100,f[4].position.z=-100,f[4].name="4",c.add(f[4]),f[5].rotation.y=-Math.PI/2,f[5].position.x=-100,f[5].position.y=0,f[5].position.z=-100,f[5].name="5",c.add(f[5]),f[2].rotation.y=-Math.PI/2,f[2].position.x=100,f[2].position.y=0,f[2].position.z=-100,f[2].name="2",c.add(f[2])}(),function(){for(var n=0;n<6;n++)m[n]=document.getElementById("canvas"+n),g[n]=m[n].getContext("2d"),g[n].fillStyle=l[n],g[n].fillRect(0,0,256,256),x[n].map=new i.xEZ(m[n]),x[n].map.needsUpdate=!0}(),n.current.appendChild(v.domElement),E()}),[]),(0,d.jsxs)("div",{children:[(0,d.jsx)("canvas",{className:o.canvas0,id:"canvas0",height:"256",width:"256"}),(0,d.jsx)("canvas",{className:o.canvas1,id:"canvas1",height:"256",width:"256"}),(0,d.jsx)("canvas",{className:o.canvas2,id:"canvas2",height:"256",width:"256"}),(0,d.jsx)("canvas",{className:o.canvas3,id:"canvas3",height:"256",width:"256"}),(0,d.jsx)("canvas",{className:o.canvas4,id:"canvas4",height:"256",width:"256"}),(0,d.jsx)("canvas",{className:o.canvas5,id:"canvas5",height:"256",width:"256"}),(0,d.jsx)("div",{ref:n})]})}}}]);
//# sourceMappingURL=853.e4bfe202.chunk.js.map