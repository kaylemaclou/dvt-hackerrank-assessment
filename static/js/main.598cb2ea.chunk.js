(this["webpackJsonpapar-web"]=this["webpackJsonpapar-web"]||[]).push([[0],{100:function(e,t,a){e.exports=a(118)},106:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),i=a.n(o),c=(a(105),a(106),a(194)),l=a(193),s=a(88),u=Object(s.a)({palette:{primary:{light:"#0033A1",main:"#0033A1",dark:"#0033A1",contrastText:"#fff"},secondary:{light:"#00A1E0",main:"#00A1E0",dark:"#00A1E0",contrastText:"#000"},error:{light:"#DE3831",main:"#DE3831",dark:"#DE3831",contrastText:"#000"},warning:{light:"#FF681D",main:"#FF681D",dark:"#FF681D",contrastText:"#000"},info:{light:"#FFFFFF",main:"#FFFFFF",dark:"#FFFFFF",contrastText:"#000"},success:{light:"#00AD6C",main:"#00AD6C",dark:"#00AD6C",contrastText:"#000"}},typography:{fontFamily:["Benton Sans","Roboto"].join(",")}}),m=a(22),d=a(70),h=a(167),g=a(18),p=a(169),E=a(174),f=a(171),b=a(46),y=a(172),w=a(82),k=a.n(w),v=a(173),x=a(81),O=a.n(x),j=a(198),F=a(83),A=a.n(F),C=a(84),N=a.n(C),S=a(176),D=a(177),T=a(178),I=a(179),B=a(175),R=a(67),q=a.n(R),H=a(85),P=a.n(H),K=a(86),U=a.n(K),z=a(87),_=a.n(z),G=a(45),W=Object(h.a)((function(e){return{root:{flex:1,backgroundImage:"linear-gradient(90deg, #0033A1, #00A1E0);",marginBottom:4,color:"yellow"},title:{flexGrow:1,paddingLeft:"2em"},imageIcon:{height:"100%",width:"100%"},iconRoot:{textAlign:"center",width:"1.5em",height:"1.5em"},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0,color:"whitesmoke"},drawerPaper:{backgroundImage:"linear-gradient(to bottom, #0033a1, #0037ad, #003bb9, #0140c6, #0244d2);",width:240,color:"whitesmoke"},drawerHeader:Object(d.a)(Object(d.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end",color:"whitesmoke",letterSpacing:3}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},icon:{color:"whitesmoke"},link:{textDecoration:"none",color:"whitesmoke"}}}));function M(e){var t=W(),a=Object(g.a)(),n=r.a.useState(!1),o=Object(m.a)(n,2),i=o[0],c=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.root},r.a.createElement(p.a,{position:"static",style:{background:"transparent",color:"yellow"}},r.a.createElement(f.a,null,r.a.createElement(y.a,{color:"inherit","aria-label":"open drawer",onClick:function(){c(!0)},edge:"start",className:t.menuButton},r.a.createElement(O.a,null)),r.a.createElement(v.a,{classes:{root:t.iconRoot}}),r.a.createElement(b.a,{className:t.title},r.a.createElement("img",{className:t.imageIcon,style:{width:"10rem"},src:"./images/deezer.png"})),r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{"aria-label":"2 consesus requests awaiting approval",color:"inherit"},r.a.createElement(E.a,{badgeContent:2,color:"primary"},r.a.createElement(q.a,null))),r.a.createElement(y.a,{edge:"end","aria-haspopup":"true",color:"inherit"},r.a.createElement(k.a,null)))))),r.a.createElement(j.a,{className:t.drawer,variant:"persistent",anchor:"left",open:i,classes:{paper:t.drawerPaper}},r.a.createElement("div",{className:t.drawerHeader},r.a.createElement(v.a,{classes:{root:t.iconRoot}}),r.a.createElement(b.a,{variant:"button",display:"block",gutterBottom:!0,style:{paddingRight:"3rem",color:"yellow"}},"|||||||| Menu"),r.a.createElement(y.a,{style:{paddingRight:"3rem",color:"yellow"},onClick:function(){c(!1)}},"ltr"===a.direction?r.a.createElement(A.a,null):r.a.createElement(N.a,null))),r.a.createElement(B.a,null),r.a.createElement(S.a,null,r.a.createElement(D.a,{button:!0,key:"Notifications",color:"white"},r.a.createElement(T.a,{className:t.icon},r.a.createElement(q.a,null)),r.a.createElement(I.a,{primary:"Search"})),r.a.createElement(G.b,{to:"/",className:t.link},r.a.createElement(D.a,{button:!0,key:"search"},r.a.createElement(T.a,{className:t.icon},r.a.createElement(P.a,null)),r.a.createElement(I.a,{primary:"Searc"}))),r.a.createElement(G.b,{to:"/artists",className:t.link},r.a.createElement(D.a,{button:!0,key:"artists"},r.a.createElement(T.a,{className:t.icon},r.a.createElement(U.a,null)),r.a.createElement(I.a,{primary:"Artists"}))),r.a.createElement(G.b,{to:"/albums",className:t.link},r.a.createElement(D.a,{button:!0,key:"albums"},r.a.createElement(T.a,{className:t.icon},r.a.createElement(_.a,null)),r.a.createElement(I.a,{primary:"Albums"})))),r.a.createElement(B.a,null)))}var L=a(13),J=a(34),Y=a.n(J),V=a(49),X=a(192),Z=a(190),$=a(197),Q=a(196),ee=a(41),te=a(42),ae=function(){function e(t,a,n,r){Object(ee.a)(this,e),this.uniqueKey="",this.description="",this.artistName="",this.duration=0,this.uniqueKey=t,this.description=a,this.artistName=n,this.duration=r}return Object(te.a)(e,[{key:"imageUrl",get:function(){return"https://e-cdns-images.dzcdn.net/images/cover/"+this.uniqueKey+"/264x264-000000-80-0-0.jpg"}},{key:"formatedDuration",get:function(){return"".concat(Math.round(this.duration/60),":").concat(1===(this.duration%60).toString().length?"0"+this.duration%60:this.duration%60," mins")}}]),e}(),ne=function(){function e(t,a,n,r){Object(ee.a)(this,e),this.uniqueKey="",this.position=0,this.title="",this.duration=0,this.uniqueKey=t,this.position=a,this.title=n,this.duration=r}return Object(te.a)(e,[{key:"formatedDuration",get:function(){return"".concat(Math.round(this.duration/60),":").concat(1===(this.duration%60).toString().length?"0"+this.duration%60:this.duration%60," mins")}}]),e}(),re=function(){function e(){Object(ee.a)(this,e)}return Object(te.a)(e,null,[{key:"searchForTitles",value:function(e){return new Promise(function(){var t=Object(V.a)(Y.a.mark((function t(a,n){var r;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat("https://thingproxy.freeboard.io/fetch/").concat("https://api.deezer.com/","/search?q=").concat(e),{method:"GET",headers:new Headers({})}).then((function(e){return e.json().then((function(e){return console.log(e.data),e.data.map((function(e){return new ae(e.md5_image,e.title,e.artist.name,parseInt(e.duration))}))}))}));case 3:r=t.sent,a(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(new Error("Unable to call Deezer API. ".concat(t.t0.message)));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,a){return t.apply(this,arguments)}}())}},{key:"getTracksForAlbum",value:function(e){return new Promise(function(){var t=Object(V.a)(Y.a.mark((function t(a,n){var r;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat("https://thingproxy.freeboard.io/fetch/").concat(e),{method:"GET",headers:new Headers({})}).then((function(e){return e.json().then((function(e){return console.log(e.data),e.data.map((function(e){return new ne(e.id,e.track_position,e.title,parseInt(e.duration))}))}))}));case 3:r=t.sent,a(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(new Error("Unable to call Deezer API. ".concat(t.t0.message)));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,a){return t.apply(this,arguments)}}())}}]),e}(),oe=a(71),ie=a(195),ce=a(181),le=Object(h.a)((function(e){return{paperContainer:{flex:"1 1 80%",verticalAlign:"center",margin:".5rem 1.6rem",border:"0px dotted #00A1E0",backgroundColor:"whitesmoke"},searchCriterionTextField:{width:"80%",border:0},searchButton:{width:"20%",height:56,border:"2px dotted #00A1E0",color:"#00A1E0",background:"yellow"}}}));function se(e){var t=e.searchButtonClickHandler,a=le(),o=Object(n.useState)(""),i=Object(m.a)(o,2),c=i[0],l=i[1];return r.a.createElement(oe.a,{className:a.paperContainer},r.a.createElement(ie.a,{label:"Type here to find music...",variant:"filled",className:a.searchCriterionTextField,value:c,onChange:function(e){l(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&t(c)}}),r.a.createElement(ce.a,{color:"primary",className:a.searchButton,onClick:function(){t(c)}},"Search"))}var ue=a(182),me=a(183),de=a(185),he=a(184),ge=Object(h.a)({root:{maxWidth:240,margin:"0 auto",transition:"0.3s",boxShadow:"0 8px 40px -12px rgba(0,0,0,0.3)","&:hover":{boxShadow:"0 16px 70px -12.125px rgba(0,0,0,0.3)"},fontFamily:"calibri"}});function pe(e){var t=e.uniqueKey,a=e.imageUrl,n=e.title,o=e.subtitle1,i=e.subtitle2,c=e.onClickHandler,l=ge();return r.a.createElement(ue.a,{key:t,className:l.root,onClick:c},r.a.createElement(me.a,null,r.a.createElement(he.a,{component:"img",alt:n,image:a,title:n}),r.a.createElement(de.a,null,r.a.createElement(b.a,{variant:"subtitle1",component:"p",style:{fontFamily:"calibri",fontWeight:"bold"}},n),r.a.createElement(b.a,{variant:"subtitle2",component:"p",style:{fontFamily:"calibri",fontWeight:"bold"}},o),r.a.createElement(b.a,{variant:"subtitle2",component:"p",style:{fontFamily:"calibri",fontWeight:"bold"}},i))))}var Ee=a(186),fe=a(191),be=a(188),ye=a(189),we=a(187),ke=Object(h.a)((function(e){return{root:{flexGrow:1,width:"100%",color:"yellow"},gridContainer:{padding:"0rem"}}}));function ve(e){var t=e.isOpen,a=(e.title,e.closeHandler),n=ke();return r.a.createElement(Ee.a,{open:t,onClose:a,"aria-labelledby":"form-dialog-title",className:n.root},r.a.createElement(we.a,{id:"form-dialog-title"},"Album Info"),r.a.createElement(be.a,null,r.a.createElement(ye.a,null,"OUT OF TIME .... SORRY!"),r.a.createElement(Z.a,{container:!0,spacing:4,className:n.gridContainer,justify:"center"},r.a.createElement(Z.a,{item:!0,xs:12,sm:6,md:4,style:{width:100,height:100,backgroundColor:"blue`"}}),r.a.createElement(Z.a,{item:!0,xs:12,sm:6,md:4,style:{width:100,height:100,backgroundColor:"red`"}})),r.a.createElement(fe.a,null,r.a.createElement(ce.a,{onClick:a,color:"primary"},"Close"))))}var xe=Object(h.a)((function(e){return{root:{flexGrow:1,width:"100%",overflowY:"auto",overflowX:"hidden",backgroundImage:"linear-gradient(90deg, #0033A1, #00A1E0);",textAlign:"center",color:"yellow"},gridContainer:{padding:"2rem"}}}));function Oe(){var e=xe(),t=Object(n.useState)([]),a=Object(m.a)(t,2),o=a[0],i=a[1],c=Object(n.useState)(),l=Object(m.a)(c,2),s=l[0],u=l[1],d=Object(n.useState)(!1),h=Object(m.a)(d,2),g=h[0],p=h[1],E=Object(n.useState)(""),f=Object(m.a)(E,2),b=f[0],y=f[1],w=Object(n.useState)(!1),k=Object(m.a)(w,2),v=k[0],x=k[1],O=Object(n.useState)(!1),j=Object(m.a)(O,2),F=j[0],A=j[1];function C(){return(C=Object(V.a)(Y.a.mark((function e(t){var a;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.trim()){e.next=3;break}return e.abrupt("return");case 3:return p(!0),e.next=6,re.searchForTitles(t);case 6:if(a=e.sent,p(!1),!a.error){e.next=13;break}throw i([]),new Error("Unable to call the Deezer API. ".concat(a.error.message));case 13:console.log(a),i(a);case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(0),y("An error occured whilst searching for titles. ".concat(e.t0.message)),x(!0);case 21:case"end":return e.stop()}}),e,null,[[0,17]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,g&&r.a.createElement(X.a,null),r.a.createElement("div",{className:e.root,style:{flex:9}},r.a.createElement(se,{searchButtonClickHandler:function(e){return C.apply(this,arguments)}}),r.a.createElement(Z.a,{container:!0,spacing:4,className:e.gridContainer,justify:"center"},o&&o.map((function(e){return r.a.createElement(Z.a,{item:!0,xs:12,sm:6,md:4},r.a.createElement(pe,{key:e.uniqueKey,uniqueKey:e.uniqueKey,imageUrl:e.imageUrl,title:e.description,subtitle1:"by ".concat(e.artistName),subtitle2:e.formatedDuration,onClickHandler:function(){u(e),A(!0)}}))})))),r.a.createElement(ve,{isOpen:F,title:s,closeHandler:function(){return A(!1)}}),r.a.createElement($.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:v,autoHideDuration:1e4,onClose:function(){return x(!1)}},r.a.createElement(Q.a,{onClose:function(){return x(!1)},severity:"error"},b)))}var je=function(){return r.a.createElement(l.a,{theme:u},r.a.createElement(c.a,null),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",height:"100vh",overflow:"hidden"}},r.a.createElement(G.a,null,r.a.createElement(L.a,{path:"/"},r.a.createElement(M,null)),r.a.createElement(L.c,null,r.a.createElement(L.a,{path:"/",exact:!0},r.a.createElement(Oe,null)),r.a.createElement(L.a,{path:"/artist"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));console.log("process.env.NODE_ENV"),console.log("production"),console.log("process.env.REACT_APP_DEEZER_API_BASE_URL"),console.log("https://api.deezer.com/"),i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(je,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[100,1,2]]]);
//# sourceMappingURL=main.598cb2ea.chunk.js.map