(this.webpackJsonproomout=this.webpackJsonproomout||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(0),o=c(1),n=c(8),a=c.n(n),i=(c(15),c(2)),r=c(3),l=c(5),u=c(4),d=(c(16),c(17),function(e){Object(l.a)(c,e);var t=Object(u.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"logoanie",value:function(){var e=document.querySelector(".logoani");e.style.transition="all 1.5s linear",e.style.transform="translate(150%,0)"}},{key:"startani",value:function(){var e=document.querySelector(".startbuttonani");setTimeout((function(){e.style.transition="all 1.5s linear",e.style.opacity="1",setInterval((function(){e.style.transition="all 1.5s linear",e.style.transform="scale(0.5)"}),1e3),setInterval((function(){e.style.transition="all 1.5s linear",e.style.transform="scale(1)"}),1500)}),2e3)}},{key:"startclick",value:function(){var e=document.querySelector(".roomout2boss"),t=document.querySelector(".ropeking"),c=document.querySelector(".mousecur");e.style.display="none",t.style.display="block",c.style.display="block"}},{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{className:"roomout2boss",children:Object(s.jsxs)("div",{className:"roomout2backimg",children:[Object(s.jsx)("section",{className:"startlogo",children:Object(s.jsx)("img",{width:"50%",className:"logoani",onLoad:function(){return e.logoanie()},src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTG4ft4xx3YFyJ3y5cLzw0IiRTLUurvQzSKVH5EbqVRqU6SeaUJ"})}),Object(s.jsx)("section",{className:"startbutton",children:Object(s.jsx)("img",{width:"30%",className:"startbuttonani",onLoad:function(){return e.startani()},onClick:function(t){return e.startclick()},src:"./startbutton.png"})})]})})}}]),c}(o.Component)),m=c(9),j=c(6),b=(c(18),c(19),function(e){Object(l.a)(c,e);var t=Object(u.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"roomout3backimg",children:Object(s.jsx)("section",{className:"window1",children:Object(s.jsx)("img",{width:"20%",src:"https://cdn.pixabay.com/photo/2018/04/08/17/50/cage-3301936_960_720.png"})})})}}]),c}(o.Component)),h=(c(20),function(e){Object(l.a)(c,e);var t=Object(u.a)(c);function c(e){var s;return Object(i.a)(this,c),(s=t.call(this,e)).onSubmit=function(e){e.preventDefault(),parseInt(s.state.value)===s.state.gugu1*s.state.gugu2?s.setState({result:"\uc815\ub2f5\uc785\ub2c8\ub2e4 \ube44\ubc00\ubc88\ud638\ub294 x x x 1\uc785\ub2c8\ub2e4",gugu1:Math.ceil(19*Math.random()),gugu2:Math.ceil(19*Math.random()),value:""}):s.setState({result:"\uc624\ub2f5\uc785\ub2c8\ub2e4 \ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc138\uc694",value:""})},s.onChange=function(e){s.setState({value:e.target.value})},s.passwordjs=function(e){e.preventDefault();var t=document.querySelector(".doorbox"),c=document.querySelector(".opendoorjs"),o=document.querySelector(".doorjs"),n=document.querySelector(".doorlock");1221===parseInt(s.state.value2)?(t.style.display="none",c.style.display="block",o.style.display="none",n.style.display="none",s.setState({result2:"\ubb38\uc774\uc5f4\ub838\uc2b5\ub2c8\ub2e4",value2:""})):s.setState({result2:"\ube44\ubc00\ubc88\ud638\uac00 \ud2c0\ub838\uc2b5\ub2c8\ub2e4"})},s.passwordinput=function(e){s.setState({value2:e.target.value})},s.state={click:0,x:0,y:0,gugu1:Math.ceil(9*Math.random()),gugu2:Math.ceil(9*Math.random()),value:"",result:"",value2:"",result2:""},s}return Object(r.a)(c,[{key:"intervalcat",value:function(){var e=document.querySelector(".cat"),t=document.querySelector(".postcat");setInterval((function(){setTimeout((function(){e.style.opacity="1",t.style.opacity="1"}),1e3),setTimeout((function(){e.style.opacity="0",t.style.opacity="0"}),2e3)}),4e3)}},{key:"catboxopen",value:function(){document.querySelector(".catbox").style.display="block"}},{key:"catboxclosejs",value:function(){var e=document.querySelector(".catbox"),t=document.querySelector(".cat"),c=document.querySelector(".postcat");e.style.display="none",t.style.display="none",c.style.display="none"}},{key:"computer1",value:function(){document.querySelector(".combox").style.display="block"}},{key:"computer2",value:function(){document.querySelector(".combox").style.display="none"}},{key:"memoani",value:function(){document.querySelector(".memoani");document.querySelector(".canvasdraw").style.display="block"}},{key:"memoclose",value:function(){document.querySelector(".canvasdraw").style.display="none"}},{key:"clockboxopen",value:function(){document.querySelector(".clockbox").style.display="block"}},{key:"clockboxclose",value:function(){document.querySelector(".clockbox").style.display="none"}},{key:"doorlock",value:function(){document.querySelector(".doorbox").style.display="block"}},{key:"doorboxclose",value:function(){document.querySelector(".doorbox").style.display="none"}},{key:"nextroom",value:function(){document.querySelector(".roomout3boss2").style.display="none"}},{key:"render",value:function(){return Object(s.jsx)("div",{className:"roomout3boos2",children:Object(s.jsxs)("div",{className:"roomout3backimg2",children:[Object(s.jsx)("section",{className:"window2",children:Object(s.jsx)("img",{width:"20%",src:"https://cdn.pixabay.com/photo/2018/04/08/17/50/cage-3301936_960_720.png"})}),Object(s.jsx)("section",{className:"windowback",children:"22"}),Object(s.jsxs)("section",{className:"catboss",children:[Object(s.jsx)("img",{className:"cat",width:"7%",src:"https://cdn.pixabay.com/photo/2016/07/21/02/29/kitten-1531754_960_720.png",onLoad:this.intervalcat,onClick:this.catboxopen}),Object(s.jsx)("setcion",{className:"postcatboss",children:Object(s.jsx)("img",{src:"https://cdn.pixabay.com/photo/2013/07/12/14/11/note-147951_960_720.png",className:"postcat",width:"1.4%"})}),Object(s.jsxs)("section",{className:"catbox",children:[Object(s.jsx)("section",{className:"catboxclose",children:Object(s.jsx)("img",{src:"https://cdn.pixabay.com/photo/2017/11/07/07/06/x-2925826_960_720.png",onClick:this.catboxclosejs})}),Object(s.jsx)("img",{src:"https://cdn.pixabay.com/photo/2013/07/12/14/11/note-147951_960_720.png"}),Object(s.jsx)("h1",{children:"X X 2 X"}),Object(s.jsx)("span",{children:"\uace0\uc591\uc774\uac00 \ubb3c\uace0\uc788\ub358 \uc885\uc774\ub2e4"}),Object(s.jsxs)("span",{children:[Object(s.jsx)("strong",{children:"X X 2 X"})," \ub77c\uace0 \uc801\ud600\uc788\ub294\uac70\uac19\ub2e4"]})]})]}),Object(s.jsx)("section",{className:"comimgboss",children:Object(s.jsx)("img",{className:"comimg",width:"20%",src:"https://cdn.pixabay.com/photo/2013/07/12/15/21/desk-149741_960_720.png",onClick:this.computer1})}),Object(s.jsxs)("section",{className:"combox",children:[Object(s.jsx)("img",{width:"5%",src:"https://cdn.pixabay.com/photo/2017/11/07/07/06/x-2925826_960_720.png",onClick:this.computer2}),Object(s.jsxs)("section",{className:"gugudanboss",children:[Object(s.jsxs)("section",{className:"gugudan1",children:[this.state.gugu1," \uacf1\ud558\uae30 ",this.state.gugu2," \ub294?"]}),Object(s.jsxs)("form",{className:"gugudan2",onSubmit:this.onSubmit,children:[Object(s.jsx)("input",{type:"number",className:"gugudan3",value:this.state.value,onChange:this.onChange}),Object(s.jsx)("section",{className:"gugudan4",children:this.state.result})]})]})]}),Object(s.jsx)("section",{className:"memoboss",children:Object(s.jsx)("img",{onClick:this.memoani,width:"5%",src:"https://cdn.pixabay.com/photo/2016/09/04/11/51/checklist-1643781_960_720.png"})}),Object(s.jsx)("section",{className:"testmemo",children:Object(s.jsxs)("section",{className:"canvasdraw",children:["\ubcc4 \ub0b4\uc6a9\uc774 \uc5c6\ub294\uac70\uac19\ub2e4",Object(s.jsx)("img",{src:"https://cdn.pixabay.com/photo/2017/11/07/07/06/x-2925826_960_720.png",className:"xmemo",onClick:this.memoclose})]})}),Object(s.jsx)("section",{className:"doorboss",children:Object(s.jsx)("img",{className:"doorjs",width:"17%",src:"./door.png"})}),Object(s.jsx)("section",{className:"doorlockboss",children:Object(s.jsx)("img",{width:"7%",src:"https://www.sktsmarthome.com/resources/img/upload/product/detail/default/gateman-doorlock-img1514330935761.png",className:"doorlock",onClick:this.doorlock})}),Object(s.jsx)("section",{className:"dooropenboss",children:Object(s.jsx)("img",{className:"opendoorjs",width:"7%",src:"./opendoor.png"})}),Object(s.jsxs)("section",{className:"doorbox",children:[Object(s.jsx)("img",{width:"10%",src:"https://cdn.pixabay.com/photo/2017/11/07/07/06/x-2925826_960_720.png",onClick:this.doorboxclose}),Object(s.jsxs)("form",{onSubmit:this.passwordjs,children:[Object(s.jsx)("input",{type:"password",placeholder:"\ube44\ubc00\ubc88\ud638",value:this.state.value2,onChange:this.passwordinput}),Object(s.jsx)("section",{children:this.state.result2})]})]}),Object(s.jsx)("section",{className:"nightboss",children:Object(s.jsx)("img",{className:"night",src:"./night.png",onClick:this.nextroom})}),Object(s.jsxs)("section",{children:[Object(s.jsx)("section",{className:"clockimg",children:Object(s.jsx)("img",{width:"10%",src:"./clock.png",onClick:this.clockboxopen})}),Object(s.jsxs)("section",{className:"clockbox",children:[Object(s.jsx)("img",{width:"10%",src:"https://cdn.pixabay.com/photo/2017/11/07/07/06/x-2925826_960_720.png",onClick:this.clockboxclose}),Object(s.jsx)("img",{width:"100%",src:"./clock.png"}),Object(s.jsxs)("span",{children:["\uc2dc\uacc4\ubc14\ub298\uc774 ",Object(s.jsx)("strong",{children:"12"})," \uc5d0\uba48\ucdb0\uc788\ub2e4."]}),Object(s.jsx)("span",{children:"\uace0\uc7a5\ub09c \uc2dc\uacc4\uc778\uac70\uac19\ub2e4."})]})]})]})})}}]),c}(o.Component)),p=function(e){Object(l.a)(c,e);var t=Object(u.a)(c);function c(e){var s;return Object(i.a)(this,c),(s=t.call(this,e)).mousecure=s.mousecure.bind(Object(j.a)(s)),s.state=Object(m.a)({x:0,y:0,check:0},"check",1),s}return Object(r.a)(c,[{key:"mousecure",value:function(e){var t=document.querySelector(".mousecur");t.style.postion="absolute",this.setState({x:e.clientX,y:e.clientY}),t.style.left=this.state.x-100+"px",t.style.top=this.state.y+"px"}},{key:"ropee",value:function(){var e=document.querySelector(".rope");e.style.transition="all 0.3s linear",e.style.transform="translate(0,10%)"}},{key:"ropee2",value:function(){var e=document.querySelector(".rope"),t=document.querySelector(".light2"),c=document.querySelector(".roomout3backimg"),s=document.querySelector(".roomout3backimg2");e.style.transition="all 0.3s linear",e.style.transform="translate(0,-10%)",1===this.state.check?(t.style.zIndex="2",s.style.display="block",c.style.display="none",this.setState({check:this.state.check+1})):(t.style.zIndex="1",s.style.display="none",c.style.display="block",this.setState({check:this.state.check-1}))}},{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{className:"roomout3bosscss",children:Object(s.jsxs)("div",{className:"roomout3boos",onMouseMove:this.mousecure,children:[Object(s.jsx)("section",{className:"mousecurboss",children:Object(s.jsx)("img",{width:"5%",className:"mousecur",src:"hand.png"})}),Object(s.jsxs)("section",{className:"ropeking",children:[Object(s.jsx)("section",{className:"lightcase",children:Object(s.jsx)("img",{width:"10%",src:"./triangle.png"})}),Object(s.jsxs)("section",{className:"lightboss",children:[Object(s.jsx)("img",{className:"light1",width:"6%",src:"./light1.png"}),Object(s.jsx)("img",{className:"light2",width:"6%",src:"./light2.png"})]}),Object(s.jsx)("section",{className:"ropeboss",children:Object(s.jsx)("img",{className:"rope",width:"20%",height:"60%",src:"./rope.png",onMouseDown:function(){return e.ropee()},onMouseUp:function(){return e.ropee2()}})})]}),Object(s.jsx)("div",{className:"fixbox2",children:Object(s.jsx)(b,{})}),Object(s.jsx)("div",{className:"fixbox3",children:Object(s.jsx)(h,{})})]})})}}]),c}(o.Component),y=function(e){Object(l.a)(c,e);var t=Object(u.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(s.jsx)("div",{})}}]),c}(o.Component),x=function(e){Object(l.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(i.a)(this,c);for(var s=arguments.length,o=new Array(s),n=0;n<s;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))).drag1=function(e){e.preventDefault()},e}return Object(r.a)(c,[{key:"render",value:function(){return Object(s.jsxs)("div",{onContextMenu:this.drag1,onDragStart:this.drag1,children:[Object(s.jsx)("section",{className:"roomout2",children:Object(s.jsx)(d,{})}),Object(s.jsx)("section",{className:"roomout3",children:Object(s.jsx)(p,{})}),Object(s.jsx)("section",{children:Object(s.jsx)(y,{})})]})}}]),c}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(s.jsx)(x,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[21,1,2]]]);
//# sourceMappingURL=main.283570d0.chunk.js.map