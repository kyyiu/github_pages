"use strict";(self.webpackChunkthree=self.webpackChunkthree||[]).push([[282],{4282:function(n,e,t){t.r(e),t.d(e,{default:function(){return l}});var r=t(2791),a=t(1022),o="  \nvarying vec2 vUv;\nvoid main() { \n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",i="\n#define S smoothstep\n#define HEART_COLOR_F vec3(1.0,.05,0.05)\n#define HEART_COLOR_B vec3(1.0,0.25,0.25)\n#define BG_COLOR vec3(0.5,0.05,0.05)\n#define NB_HEARTS 50.0\n\nvarying vec2 vUv;\nuniform float u_time;\nuniform vec2 u_resolution;\n\nmat2 Rot(float angle){\n  float c = cos(angle);\n  float s = sin(angle);\n  return mat2(c,-s,s,c);\n}\n\nfloat smax(float a, float b, float k){\n  float h = clamp((b-a)/k+0.5, 0., 1.);\n  return mix(a, b, h) + h*(1.0-h)*k*0.5;\n}\n\nvec4 Heart(vec2 uv, float radius, float blur){\n  float angle = sin(u_time*0.1)*0.25;    \n  blur *= radius;\n  uv -= vec2(0.0,-radius);\n  uv *= Rot(angle*length(uv)*2.);\n  uv -= vec2(0.0,+radius);\n  uv.x *= 0.7;\n  uv.y -= smax(sqrt(abs(uv.x))*.5, blur, 0.1) -.1 - blur*0.5;\n  float d = length(uv);\n  float c = S(radius+blur,radius-blur-0.01,d);\n  return vec4(vec3(1),c);\n}\n\nvec3 Transform(vec3 p, float a){\n  p.xz *= Rot(a);\n  p.xy *= Rot(a*0.765);\n  return p;\n}\n\nvec4 HeartBall(vec3 ro, vec3 rd, vec3 pos, float radius, float angle, float blur){\n\n  vec4 col = vec4(0);\n  float t  = dot(pos-ro, rd);\n  vec3  p  = ro + rd*t;\n  float y  = length(pos-p);    \n  if (y<1.0){\n      float x = sqrt(1.0-y);\n      vec3 pF = ro + rd*(t-x) - pos;         // front intersection\n      vec3 pB = ro + rd*(t+x) - pos;         // back intersection\n      pF = Transform(pF,angle);\n      pB = Transform(pB,angle);    \n      vec2 uvF = vec2(atan(pF.x,pF.z),pF.y);\n      vec2 uvB = vec2(atan(pB.x,pB.z),pB.y);\n      vec4 front = Heart(uvF, radius, blur);\n      vec4 back = Heart(uvB, radius, blur);\n      front.xyz *= HEART_COLOR_F;\n      back.xyz  *= HEART_COLOR_B;\n      col = mix(back, front, front.a) ;\n  }\n  return col;\n}\n\n\nvoid main()\n{\n    vec2 uv = vUv.xy*2.0-1.0;\n    vec3 bg = BG_COLOR*(uv.y+1.0);\n    vec4 col = vec4(bg,1.0);\n    vec3 ro = vec3(0,0,-4);\n    vec3 rd = normalize(vec3(uv,1));\n    \n    for(float i=0.0; i<1.0 ; i+=1.0/NB_HEARTS){\n        float x = mix(-4.0, 4.0, fract(sin(i*735.25)*457.56));\n        float y = mix(-5.0,5.0,fract(i-u_time*0.1));\n        float z = mix(3.0, 0.0, i);\n        float radius = S(3.0,0.0,z)*0.3+0.3 ;\n        float angle = u_time+i*985.989;\n        // blur in the background / Blur in the foreground \n        float blur = S(0.25,0.75,abs(z-1.5))/4.0;\n        vec3 pos = vec3(x,y,z);\n        vec4 heart = HeartBall(ro, rd, pos, radius, angle, blur); \n        // heart.xyz = vec3(abs(1.5-z)/1.5 );\n        col = mix(col, heart, heart.a);\n    }\n    gl_FragColor = col;\n}",u=t(184);function l(){var n=new a.xsS,e=new a.cPb(75,window.innerWidth/window.innerHeight,.1,1e3);e.position.set(0,0,1),n.add(e);var t=new a._12(3,3),l={u_time:{type:"f",value:1},u_resolution:{type:"v2",value:new a.FM8}},v=new a.jyz({uniforms:l,vertexShader:o,fragmentShader:i}),c=new a.Kj0(t,v);n.add(c);var f,s=new a.CP7;s.setSize(window.innerWidth,window.innerHeight);var d=(0,r.useRef)();function p(){var n=window.innerWidth,t=window.innerHeight;e.aspect=n/t,e.updateProjectionMatrix(),s.setSize(n,t)}function m(t){f&&(l.u_time.value+=f.getDelta(),s.render(n,e),window.requestAnimationFrame(m))}return(0,r.useEffect)((function(){return f=new a.SUY,window.addEventListener("resize",p,!1),d.current.appendChild(s.domElement),m(),function(){f=null}}),[]),(0,u.jsx)("div",{ref:d})}}}]);
//# sourceMappingURL=282.a1f71c85.chunk.js.map