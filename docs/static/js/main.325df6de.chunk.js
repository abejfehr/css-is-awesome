(this["webpackJsonpflex-practice"]=this["webpackJsonpflex-practice"]||[]).push([[0],{253:function(e,t,n){},254:function(e,t,n){},260:function(e,t,n){},351:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(25),s=n.n(l),r=(n(58),n(10)),c=n(1),o=(n(59),n(46)),u=(n(62),function(e){var t=e.width,n=void 0===t?100:t,l=e.height,s=void 0===l?100:l,r=e.x,u=void 0===r?0:r,d=e.y,h=void 0===d?0:d,m=e.label,b=e.resizable,x=void 0===b?["x","y"]:b,g=e.passedClassName,v=e.onInput,f=void 0===v?function(){}:v,w=Object(a.useState)(u),y=Object(c.a)(w,2),p=y[0],N=y[1],E=Object(a.useState)(h),S=Object(c.a)(E,2),z=S[0],O=S[1],j=Object(a.useState)(n),_=Object(c.a)(j,2),C=_[0],k=_[1],A=Object(a.useState)(s),T=Object(c.a)(A,2),M=T[0],R=T[1],I=Object(a.useRef)(),L=function(){I.current&&(document.querySelectorAll(".Box").forEach((function(e){I.current!==e&&(e.style.zIndex=1)})),I.current.style.zIndex=10)},F=Object(a.useCallback)((function(e,t){N(~~(p+t.deltaX)),O(~~(z+t.deltaY)),!I.current&&e.target.classList.contains("Box")&&(I.current=e.target),f(g,~~p,~~z,~~C,~~M)}),[p,z,C,M,f,g]),q=Object(a.useCallback)((function(e,t,n){k(~~n.offsetWidth),R(~~n.offsetHeight),!I.current&&n.classList.contains("Box")&&(I.current=n),f(g,~~p,~~z,~~C,~~M)}),[p,z,C,M,f,g]),B=Object(a.useCallback)((function(){f(g,~~p,~~z,~~C,~~M)}),[p,z,C,M,f,g]),P=Object(a.useCallback)((function(){f(g,~~p,~~z,~~C,~~M)}),[p,z,C,M,f,g]),H={};return x?(x.includes("x")&&!x.includes("y")&&(H.maxHeight=M),x.includes("y")&&!x.includes("x")&&(H.maxWidth=C)):H={enableResizing:!1},i.a.createElement(o.a,Object.assign({className:"Box",default:{x:p,y:z,width:C,height:M},resizeGrid:[10,10],dragGrid:[10,10],onDrag:F,onDragStart:L,onDragStop:B,onResize:q,onResizeStart:L,onResizeStop:P,bounds:"parent"},H),i.a.createElement("div",{className:"Box__crosshair-x"}),i.a.createElement("div",{className:"Box__crosshair-y"}),i.a.createElement("div",{className:"Box__coordinates"},i.a.createElement("pre",null,m),i.a.createElement("pre",null,"Pos: ",p,", ",z),i.a.createElement("pre",null,"Size: ",C,", ",M)))}),d=(n(63),function(e){var t,n=e.rng,a=e.level,l=e.onInput;return i.a.createElement("div",{className:"Puzzle__border"},i.a.createElement("div",{className:"Puzzle__goal",style:{width:a.container.width,height:a.container.height}},i.a.createElement("div",{className:"Puzzle__v-center"}),i.a.createElement("div",{className:"Puzzle__h-center"}),null===(t=a.boxes)||void 0===t?void 0:t.map((function(e,t){return i.a.createElement(u,{key:"".concat(t,"-").concat(n),passedClassName:e.className,label:".".concat(e.className),x:e.x,y:e.y,width:e.width,height:e.height,resizable:e.resizable,onInput:l})}))))}),h=(n(64),function(e){var t=e.children;return i.a.createElement("div",{className:"Puzzle"},t)}),m=n(26),b=n.n(m),x=(n(253),function(e){var t=e.className,n=void 0===t?"":t;return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",className:n},i.a.createElement("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282L20.188 0l-8.212 8.318L3.666.115 0 3.781l8.321 8.24-8.206 8.313L3.781 24l8.237-8.318 8.285 8.203z",fill:"currentColor"}))}),g=function(e){var t=e.className,n=void 0===t?"":t;return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",className:n},i.a.createElement("path",{d:"M20.285 2L9 13.567 3.714 8.556 0 12.272 9 21 24 5.715z",fill:"currentColor"}))},v=function(e){var t=e.correct,n=void 0!==t&&t;return i.a.createElement("div",{className:"Indicator__icon Indicator__icon".concat(n?"--correct":"--incorrect")},i.a.createElement(x,{className:"Indicator__icon-cross"}),i.a.createElement(g,{className:"Indicator__icon-checkmark"}))},f=(n(254),function(e){var t=e.isMatch,n=e.isDirty,a=e.onSubmit,l=e.onReset,s=e.submitText,r=e.subText,c=e.headerText,o=e.children;return i.a.createElement("section",{className:"Sidebar"},i.a.createElement("div",null,i.a.createElement("header",{className:"Sidebar__header-container"},c&&i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",{className:"Sidebar__header"},c),i.a.createElement("p",{className:"Sidebar__subtext",dangerouslySetInnerHTML:{__html:r}}))),o),i.a.createElement("div",{className:"Sidebar__button-container"},s&&n&&i.a.createElement("button",{className:"SecondaryButton",onClick:l},"Reset"),s&&i.a.createElement("button",{className:"PrimaryButton",onClick:a,disabled:!t},s,n&&i.a.createElement("div",{className:"PrimaryButton__contents"},i.a.createElement(v,{correct:t})))))}),w=function(e){var t=e.level;return i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{className:"label"},"CSS"),i.a.createElement(b.a,{className:"css"},t.css.trim()),i.a.createElement("span",{className:"label"},"HTML"),i.a.createElement(b.a,{className:"html"},t.html.trim()))},y=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"The goal of the game is to practice CSS by dragging and resizing boxes to match how they should appear, given some HTML and CSS."),i.a.createElement("p",null,"Look out for the HTML and CSS right here in this left bar."),i.a.createElement("p",null,"Once you think you've got the answer, you'll be able to submit your answer by pressing the \"submit\" button at the bottom of this sidebar."),i.a.createElement("p",null,'If you want to start over, just press "reset" and the level will reset to give you a fresh start.'),i.a.createElement("p",null,"Good luck!"))},p={maxCount:150,speed:2,frameInterval:15,alpha:1,gradient:!1,start:null,stop:null,toggle:null,pause:null,resume:null,togglePause:null,remove:null,isPaused:null,isRunning:null};p.start=R,p.stop=I,p.toggle=function(){S?I():R()},p.pause=A,p.resume=T,p.togglePause=function(){z?T():A()},p.isPaused=function(){return z},p.remove=function(){z=!1,j=[]},p.isRunning=function(){return S};var N=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame,E=["rgba(30,144,255,","rgba(107,142,35,","rgba(255,215,0,","rgba(255,192,203,","rgba(106,90,205,","rgba(173,216,230,","rgba(238,130,238,","rgba(152,251,152,","rgba(70,130,180,","rgba(244,164,96,","rgba(210,105,30,","rgba(220,20,60,"],S=!1,z=!1,O=Date.now(),j=[],_=0,C=null;function k(e,t,n){return e.color=E[Math.random()*E.length|0]+(p.alpha+")"),e.color2=E[Math.random()*E.length|0]+(p.alpha+")"),e.x=Math.random()*t,e.y=Math.random()*n-n,e.diameter=10*Math.random()+5,e.tilt=10*Math.random()-10,e.tiltAngleIncrement=.07*Math.random()+.05,e.tiltAngle=Math.random()*Math.PI,e}function A(){z=!0}function T(){z=!1,M()}function M(){if(!z)if(0===j.length)C.clearRect(0,0,window.innerWidth,window.innerHeight),null;else{var e=Date.now(),t=e-O;(!N||t>p.frameInterval)&&(C.clearRect(0,0,window.innerWidth,window.innerHeight),function(){var e,t=window.innerWidth,n=window.innerHeight;_+=.01;for(var a=0;a<j.length;a++)e=j[a],!S&&e.y<-15?e.y=n+100:(e.tiltAngle+=e.tiltAngleIncrement,e.x+=Math.sin(_)-.5,e.y+=.5*(Math.cos(_)+e.diameter+p.speed),e.tilt=15*Math.sin(e.tiltAngle)),(e.x>t+20||e.x<-20||e.y>n)&&(S&&j.length<=p.maxCount?k(e,t,n):(j.splice(a,1),a--))}(),function(e){for(var t,n,a,i,l=0;l<j.length;l++){if(t=j[l],e.beginPath(),e.lineWidth=t.diameter,a=t.x+t.tilt,n=a+t.diameter/2,i=t.y+t.tilt+t.diameter/2,p.gradient){var s=e.createLinearGradient(n,t.y,a,i);s.addColorStop("0",t.color),s.addColorStop("1.0",t.color2),e.strokeStyle=s}else e.strokeStyle=t.color;e.moveTo(n,t.y),e.lineTo(a,i),e.stroke()}}(C),O=e-t%p.frameInterval),requestAnimationFrame(M)}}function R(e,t,n){var a=window.innerWidth,i=window.innerHeight;window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,p.frameInterval)};var l=document.getElementById("confetti-canvas");null===l?((l=document.createElement("canvas")).setAttribute("id","confetti-canvas"),l.setAttribute("style","display:block;z-index:999999;pointer-events:none;position:fixed;top:0"),document.body.prepend(l),l.width=a,l.height=i,window.addEventListener("resize",(function(){l.width=window.innerWidth,l.height=window.innerHeight}),!0),C=l.getContext("2d")):null===C&&(C=l.getContext("2d"));var s=p.maxCount;if(t)if(n)if(t==n)s=j.length+n;else{if(t>n){var r=t;t=n,n=r}s=j.length+(Math.random()*(n-t)+t|0)}else s=j.length+t;else n&&(s=j.length+n);for(;j.length<s;)j.push(k({},a,i));S=!0,z=!1,M(),e&&window.setTimeout(I,e)}function I(){S=!1}var L=n(49),F=n.n(L),q=(n(260),function(){var e=Object(a.useRef)(),t=F()((function(){console.log("resizing the canvas to be ",e.current.width,e.current.height),e.current.width=e.current.clientWidth,e.current.height=e.current.clientHeight}),50);return Object(a.useLayoutEffect)((function(){return R(),t(),window.addEventListener("resize",t),function(){I(),window.removeEventListener("resize",t)}})),i.a.createElement("div",{className:"Complete"},i.a.createElement("canvas",{id:"confetti-canvas",ref:e}),i.a.createElement("h2",{className:"Complete__header"},"Congratulations!"),i.a.createElement("p",{className:"Complete__text"},"You've completed every level in the game!"),i.a.createElement("br",null),i.a.createElement("p",{className:"Complete__subtext"},"Check back in the future for some more content."))}),B=n(50),P=n.n(B),H=n(51),W=n.n(H),D=n(52),G=n.n(D),J=["className","x","y","width","height"],Y=function(e){return JSON.parse(JSON.stringify(e.map((function(e){return P()(e,J)}))))},K=[{name:"Box sizes",css:"\n  .some-box {\n    width: 300px;\n    height: 200px;\n  }\n",html:'\n<div class="container">\n  <div class="some-box"></div>\n</div>',subtext:"The basics",container:{className:"container",x:0,y:0,width:400,height:400},boxes:[{className:"some-box",x:0,y:0,width:100,height:100,resizable:["x","y"]}],goal:[{className:"some-box",x:0,y:0,width:300,height:200}]},{name:"Margin",css:"\n  .some-box {\n    width: 200px;\n    height: 200px;\n    margin: 10px;\n  }\n",html:'\n<div class="container">\n  <div class="some-box"></div>\n</div>',subtext:"The basics",container:{className:"container",x:0,y:0,width:400,height:400},boxes:[{className:"some-box",x:0,y:0,width:100,height:100,resizable:["x","y"]}],goal:[{className:"some-box",x:10,y:10,width:200,height:200}]},{name:"Margin w/ 2 boxes",css:"\n  .b-1 {\n    width: 200px;\n    height: 200px;\n    margin: 10px;\n  }\n  .b-2 {\n    width: 200px;\n    height: 200px;\n    margin: 10px;\n  }\n",html:'\n<div class="container">\n  <div class="b-1"></div>\n  <div class="b-2"></div>\n</div>',subtext:"The basics",container:{className:"container",x:0,y:0,width:500,height:400},boxes:[{className:"b-1",x:0,y:0,width:100,height:100,resizable:["x","y"]},{className:"b-2",x:50,y:50,width:100,height:100,resizable:["x","y"]}],goal:[{className:"b-1",x:10,y:10,width:200,height:200,resizable:["x","y"]},{className:"b-2",x:230,y:10,width:200,height:200,resizable:["x","y"]}]},{name:"Padding",css:"\n  .container {\n    padding: 20px;\n  }\n",html:'\n<div class="container">\n  <div class="some-box"></div>\n</div>',subtext:"The basics",container:{className:"container",x:0,y:0,width:400,height:400},boxes:[{className:"some-box",x:100,y:100,width:200,height:200,resizable:!1}],goal:[{className:"some-box",x:20,y:20,width:200,height:200}]}],X={name:"Direction 1",css:"\n.container {\n  display: flex;\n}",html:'\n<div class="container">\n  <div class="box-1"></div>\n  <div class="box-2"></div>\n</div>',subtext:"The basics",container:{className:"container",x:0,y:0,width:400,height:400},boxes:[{className:"box-2",x:0,y:0,width:200,height:200,resizable:!1},{className:"box-1",x:100,y:100,width:200,height:200,resizable:!1}],goal:[{className:"box-1",x:0,y:0,width:200,height:200},{className:"box-2",x:200,y:0,width:200,height:200}]},Q={name:"Direction 2",css:"\n.container {\n  display: flex;\n  flex-direction: column;\n}",html:'\n<div class="container">\n  <div class="box-1"></div>\n  <div class="box-2"></div>\n</div>',subtext:"The basics",container:{className:"container",x:0,y:0,width:400,height:400},boxes:[{className:"box-2",x:0,y:0,width:200,height:200,resizable:!1},{className:"box-1",x:100,y:100,width:200,height:200,resizable:!1}],goal:[{className:"box-1",x:0,y:0,width:200,height:200},{className:"box-2",x:0,y:200,width:200,height:200}]},U={name:"Direction 3",css:"\n.container {\n  display: flex;\n  flex-direction: row-reverse;\n}",html:'\n<div class="container">\n  <div class="box-1"></div>\n  <div class="box-2"></div>\n</div>',container:{subtext:"A twist",className:"container",x:0,y:0,width:400,height:400},boxes:[{className:"box-2",x:0,y:0,width:200,height:200,resizable:!1},{className:"box-1",x:100,y:100,width:200,height:200,resizable:!1}],goal:[{className:"box-2",x:0,y:0,width:200,height:200},{className:"box-1",x:200,y:0,width:200,height:200}]},V={name:"Alignment 1",css:"\n.container {\n  display: flex;\n  align-items: center;\n}",html:'\n<div class="container">\n  <div class="box-1"></div>\n  <div class="box-2"></div>\n</div>',container:{subtext:"Lined up",className:"container",x:0,y:0,width:400,height:400},boxes:[{className:"box-2",x:0,y:0,width:140,height:260,resizable:!1},{className:"box-1",x:100,y:100,width:200,height:200,resizable:!1}],goal:[{className:"box-1",x:0,y:100,width:200,height:200},{className:"box-2",x:200,y:70,width:140,height:260}]},Z={name:"Alignment 2",css:"\n.container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}",html:'\n<div class="container">\n  <div class="box-1"></div>\n</div>',container:{className:"container",x:0,y:0,width:400,height:400},boxes:[{className:"box-1",x:0,y:0,width:200,height:200,resizable:!1}],goal:[{className:"box-1",x:100,y:100,width:200,height:200,resizable:!1}]},$={name:"Alignment 3",css:"\n.container {\n  display: flex;\n  align-items: stretch;\n}",html:'\n<div class="container">\n  <div class="box-1"></div>\n  <div class="box-2"></div>\n</div>',container:{className:"container",x:0,y:0,width:400,height:400},boxes:[{className:"box-1",x:0,y:0,width:200,height:200,resizable:["y"]},{className:"box-2",x:100,y:100,width:200,height:200,resizable:["y"]}],goal:[{className:"box-1",x:0,y:0,width:200,height:400},{className:"box-2",x:200,y:0,width:200,height:400}]},ee=([].concat(Object(r.a)(K),[X,Q,U,V,Z,$]),[{title:"Box Model",funnyTitle:"It's just boxes in boxes",funnySubtitle:"how hard could it really be?",description:"An introduction to the box model.",levels:Object(r.a)(K)},{title:"Flexbox",funnyTitle:"Weird Flex but OK",funnySubtitle:"Does anyone <i>really</i> know flexbox?",description:"An exploration of flexbox layouts.",levels:[X,Q,U,V,Z,$]},{title:"Grid",funnyTitle:"Off the grid",funnySubtitle:"Except actually inside the grid",description:"An exploration of grid layouts.",levels:[]},{title:"Legacy Layouts",funnyTitle:"Stylesheets of a bygone era",funnySubtitle:"CSS was different before flexbox and grid",description:"A look at legacy layout techniques.",levels:[]},{title:"Advanced Techniques",funnyTitle:"CSS Wizardry",funnySubtitle:"In case you thought you knew CSS",description:"A few advanced techniques.",levels:[]}]),te=function(){var e=Object(a.useState)(!0),t=Object(c.a)(e,2),n=t[0],l=t[1],s=Object(a.useState)(!1),o=Object(c.a)(s,2),u=o[0],m=o[1],b=function(){var e=Object(a.useState)(0),t=Object(c.a)(e,2),n=t[0],i=t[1],l=Object(a.useState)(0),s=Object(c.a)(l,2),r=s[0],o=s[1],u=Object(a.useState)(ee[0].levels[0]),d=Object(c.a)(u,2),h=d[0],m=d[1],b=Object(a.useCallback)((function(){return ee[n].levels[r+1]?(m(ee[n].levels[r+1]),o(r+1),!0):!!ee[n+1].levels[0]&&(m(ee[n+1].levels[0]),i(n+1),o(0),!0)}),[n,r]),x=Object(a.useCallback)((function(e,t){m(ee[e].levels[t]),i(e),o(t)}),[]);return[ee,h,b,x,n,r]}(),x=Object(c.a)(b,6),g=x[0],v=x[1],p=x[2],N=x[3],E=x[4],S=x[5],z=function(e,t){var n=Object(a.useState)(!1),i=Object(c.a)(n,2),l=i[0],s=i[1],r=Object(a.useState)(!1),o=Object(c.a)(r,2),u=o[0],d=o[1],h=Object(a.useRef)(Y(e)),m=Object(a.useRef)(Y(e)),b=Object(a.useRef)(Y(t)),x=Object(a.useCallback)((function(e,t,n,a,i){var l=h.current.find((function(t){return t.className===e}));l.x=t,l.y=n,l.width=a,l.height=i,s(0===G()(h.current,b.current,W.a).length),u||d(!0)}),[h,m]),g=Object(a.useCallback)((function(e,t){h.current=Y(e),m.current=Y(e),b.current=Y(t),s(!1),d(!1)}),[h,m]);return[l,u,x,g]}(v.boxes,v.goal),O=Object(c.a)(z,4),j=O[0],_=O[1],C=O[2],k=O[3];Object(a.useEffect)((function(){R(Math.random().toString(36).substring(7)),k(v.boxes,v.goal)}),[v,k]);var A=Object(a.useState)(Math.random().toString(36).substring(7)),T=Object(c.a)(A,2),M=T[0],R=T[1],I=Object(a.useCallback)((function(){n?l(!1):j&&(p()||m(!0))}),[j,p,n]);return i.a.createElement("main",null,i.a.createElement(f,{isMatch:n||j,isDirty:_,onReset:function(){k(v.boxes,v.goal),R(Math.random().toString(36).substring(7))},onSubmit:I,submitText:n?"Begin":u?null:"Submit",headerText:n?"Weird flex but ok":u?null:g[E].funnyTitle||"",subText:n?"A CSS flexbox puzzle game":g[E].funnySubtitle||""},n&&i.a.createElement(y,null),!n&&!u&&i.a.createElement(w,{level:v})),i.a.createElement(h,null,!n&&!u&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{position:"absolute",top:20,left:20}},i.a.createElement("label",{style:{fontSize:"14px"}},"Level select: "),i.a.createElement("select",{onChange:function(e){return N.apply(void 0,Object(r.a)(e.target.value.split("-").map((function(e){return Number(e)}))))},value:"".concat(E,"-").concat(S)},g.map((function(e,t){return i.a.createElement(i.a.Fragment,null,e.levels.length&&i.a.createElement("optgroup",{key:t,label:e.title},e.levels.map((function(e,n){return i.a.createElement("option",{key:"".concat(t,"-").concat(n),value:"".concat(t,"-").concat(n)},e.name)}))))})))),i.a.createElement(d,{rng:M,level:v,onInput:C})),u&&i.a.createElement(q,null)))};s.a.render(i.a.createElement(te,null),document.getElementById("root"))},53:function(e,t,n){e.exports=n(351)},58:function(e,t,n){},59:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){}},[[53,1,2]]]);
//# sourceMappingURL=main.325df6de.chunk.js.map