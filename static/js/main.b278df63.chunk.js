(this.webpackJsonpfrontend_base_dapp=this.webpackJsonpfrontend_base_dapp||[]).push([[0],{248:function(t){t.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"activateWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_user","type":"address[]"}],"name":"removeWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setMaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"},{"internalType":"uint256","name":"_newWalletLimit","type":"uint256"}],"name":"setMaxMintAmountAndWalletLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newSupply","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newWalletLimit","type":"uint256"}],"name":"setWalletLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"walletLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whitelistOnly","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_user","type":"address[]"}],"name":"whitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]')},258:function(t,e,n){},259:function(t,e,n){},260:function(t,e,n){},261:function(t,e,n){},262:function(t,e,n){},268:function(t,e,n){},269:function(t,e,n){},270:function(t,e,n){},271:function(t,e,n){},272:function(t,e,n){},273:function(t,e,n){},274:function(t,e,n){},275:function(t,e,n){},276:function(t,e,n){},289:function(t,e){},312:function(t,e){},314:function(t,e){},391:function(t,e){},393:function(t,e){},426:function(t,e){},431:function(t,e){},433:function(t,e){},440:function(t,e){},453:function(t,e){},476:function(t,e){},485:function(t,e){},487:function(t,e){},556:function(t,e,n){},557:function(t,e,n){},558:function(t,e,n){},559:function(t,e,n){},560:function(t,e,n){},561:function(t,e,n){},562:function(t,e,n){},563:function(t,e,n){},564:function(t,e,n){},565:function(t,e,n){},567:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),s=n(32),c=n.n(s),r=(n(258),n(259),n(4)),o=n(5),l=n(9),u=n(8),d=(n.p,n.p+"static/media/CenterPic.6eabdc78.png"),p=n.p+"static/media/Pink Caladium.d0e793f6.webp",b=(n(260),n(575)),j=n(571),m=n(576),y=n(572),h=n(573),O=(n(261),n(24)),f=(n(262),n(0)),x=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsx)("button",{className:"ybutton",children:this.props.text})}}]),n}(i.a.Component);function g(){document.getElementById("mint").scrollIntoView()}function v(){document.getElementById("team").scrollIntoView()}function T(){document.getElementById("roadmap").scrollIntoView()}function w(){window.open("https://opensea.io/")}var N=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"header-control",children:[Object(f.jsx)(b.a,{collapseOnSelect:!0,expand:"lg",children:Object(f.jsxs)(j.a,{children:[Object(f.jsx)(b.a.Brand,{href:"#home",style:{paddingTop:10},children:Object(f.jsx)("img",{src:d,width:289,height:115.1,alt:"logo"})}),Object(f.jsx)(b.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(f.jsxs)(b.a.Collapse,{id:"responsive-navbar-nav",children:[Object(f.jsx)(m.a,{className:"me-auto"}),Object(f.jsxs)(m.a,{style:{borderRadius:0,padding:"0 20px 0 20px"},children:[Object(f.jsx)(m.a.Link,{className:"bruh",style:{fontWeight:900},onClick:g,children:"MINT"}),Object(f.jsx)(m.a.Link,{className:"bruh",style:{fontWeight:900},onClick:T,children:"ROADMAP"}),Object(f.jsx)(m.a.Link,{className:"bruh",style:{fontWeight:900},onClick:v,children:"TEAM"}),Object(f.jsx)(m.a.Link,{className:"bruh",style:{fontWeight:900},onClick:w,children:"OPENSEA"}),Object(f.jsx)("text",{style:{width:20}}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("a",{style:{textDecoration:"none",color:"white",paddingRight:10},target:"_blank",rel:"noopener noreferrer",href:"https://instagram.com/",children:[" ",Object(f.jsx)(O.d,{size:32})]}),Object(f.jsxs)("a",{style:{textDecoration:"none",color:"white",paddingLeft:10,paddingRight:10},target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/",children:[" ",Object(f.jsx)(O.g,{size:32})]}),Object(f.jsxs)("a",{style:{textDecoration:"none",color:"white",paddingLeft:10},target:"_blank",rel:"noopener noreferrer",href:"https://discord.gg",children:[" ",Object(f.jsx)(O.a,{size:32}),"   "]})]}),Object(f.jsx)("text",{style:{width:0}}),Object(f.jsx)("div",{})]})]})]})}),Object(f.jsxs)("div",{className:"header-content",children:[Object(f.jsx)(j.a,{children:Object(f.jsxs)(y.a,{children:[Object(f.jsxs)(h.a,{md:6,xs:12,className:"about-description",style:{textAlign:"center"},children:[Object(f.jsx)("header",{children:Object(f.jsxs)("span",{style:{color:"white",fontStyle:"normal"},children:["The new generation of plants.",Object(f.jsx)("br",{})]})}),Object(f.jsx)("p",{style:{color:"white"},children:"No watering required."}),Object(f.jsx)("text",{className:"xbutton",onClick:g,children:"MINT"})]}),Object(f.jsx)(h.a,{md:6,xs:12,className:"image-control",children:Object(f.jsx)("img",{style:{borderRadius:0},src:p,alt:"about gif"})})]})}),Object(f.jsx)("div",{className:"header-content-buttons-container"})]}),Object(f.jsx)("div",{})]})})}}]),n}(i.a.Component),C=(n(268),n.p+"static/media/about.73d1c470.gif"),_=(n(269),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"teammember-control",style:{textAlign:"center",justifyContent:"center"},children:[Object(f.jsx)("img",{style:{maxHeight:500,maxWidth:500},src:this.props.imageUrl,alt:"team member"}),Object(f.jsxs)("div",{className:"teammember-description",children:[Object(f.jsx)("p",{className:"teammember-name",children:this.props.name}),Object(f.jsx)("p",{className:"teammember-occupation",children:this.props.title})]})]})}}]),n}(i.a.Component)),M=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).state={teams:[{image:C,title:"Founder",name:"Muhani"},{image:C,title:"Founder",name:"Thomas"},{image:C,title:"Artist",name:"Alexander"},{image:C,title:"Developer",name:"Joseph"},{image:C,title:"Social Media",name:"Emily"}]},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"team-control",id:"team",children:Object(f.jsxs)(j.a,{children:[Object(f.jsx)("header",{style:{fontStyle:"normal",color:"white"},children:" Team Members "}),Object(f.jsx)(y.a,{children:this.state.teams.map((function(t,e){return Object(f.jsx)(h.a,{style:{justifyContent:"center",textAlign:"center"},children:Object(f.jsx)(_,{imageUrl:t.image,title:t.title,name:t.name},e)},e)}))})]})})}}]),n}(i.a.Component),k=(n(270),i.a.Component,n(271),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"footer-control",id:"socials",children:Object(f.jsxs)(j.a,{className:"footer",children:[Object(f.jsx)("p",{className:"hidden",children:"\xa92021 \xa0 PowerPlants"}),Object(f.jsx)("div",{children:Object(f.jsx)("p",{style:{fontSize:15},children:Object(f.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://metaversesolutions.ai/",style:{textDecoration:"none",color:"white",textAlign:"right"},children:"Website by Metaverse Solutions, LLC"})})})]})})}}]),n}(i.a.Component)),S=(n(272),n.p+"static/media/about.73d1c470.gif"),A=n(251),I=(n(273),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).state={open:!1},a}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{onClick:function(){t.setState({open:!t.state.open})},"aria-controls":"example","aria-expanded":this.state.open,className:"collapse-header-control",children:[Object(f.jsxs)("div",{className:"collapse-header",children:[Object(f.jsx)("h4",{children:this.props.tag}),Object(f.jsx)("p",{children:this.props.title})]}),Object(f.jsx)(O.e,{})]}),Object(f.jsx)(A.a,{in:this.state.open,children:Object(f.jsx)("div",{id:"example",className:"collapse-content display-linebreak",children:this.props.content})})]})}}]),n}(i.a.Component)),E=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).state={roadmaps:[{tag:"Phase 1",title:"Inception",content:"-Website is launched \n -Social Media marketing campaigns are launched \n -Create partnerships with tree foundations"},{tag:"Phase 2",title:"Community",content:"-Raffle giveaway once we reach 25,000 Discord Members\n-Merchandise is launched\n-Whitelist"},{tag:"Phase 3",title:"Launch",content:"-NFTs are sold to the public\n-Unlockable content\n-Exclusive community group launched"},{tag:"Phase 4",title:"Donation",content:"-Donation of 10% to charitable foundations\n -Contributions to DAOs \n-Trees are planted and matched"},{tag:"Phase 5",title:"After Launch",content:"-$50,000 is pumped into the Power Plants Fund for ongoing developments and marketing campaigns\n-Rare owners get original art/seeds mailed to them\n-2% of secondary marketplace sales are donated\n-Raffles on social media platforms"},{tag:"Phase 6",title:"Metaverse",content:"-The next phase..."}]},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"roadmap-control",id:"roadmap",style:{textAlign:"center"},children:Object(f.jsxs)(j.a,{children:[Object(f.jsxs)("header",{style:{fontWeight:900},children:[Object(f.jsx)("span",{children:"POWER PLANTS"})," ROAD MAP"]}),Object(f.jsx)("p",{className:"roadmap-description",children:"Our Roadmap is under construction!Placeholder"}),Object(f.jsxs)(y.a,{style:{alignContent:"center",justifyContent:"center",textAlign:"center"},children:[Object(f.jsx)(h.a,{xs:12,md:6,children:Object(f.jsx)("img",{src:S})}),Object(f.jsx)(h.a,{style:{color:"black",alignContent:"center",justifyContent:"center",textAlign:"center"},children:this.state.roadmaps.map((function(t,e){return Object(f.jsx)(I,{style:{textAlign:"center",color:"black"},tag:t.tag,title:t.title,content:t.content},e)}))})]})]})})}}]),n}(i.a.Component),D=(n(274),n.p+"static/media/item1.1c214071.png"),B=n.p+"static/media/item2.81e34ae6.png",P=n.p+"static/media/item3.eec91da6.png",z=(n(275),n.p+"static/media/fire.76eb30ed.png"),R=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"top-item",children:[Object(f.jsx)("img",{src:this.props.image,alt:"top item"}),Object(f.jsxs)("div",{className:"top-item-description",children:[Object(f.jsx)("p",{children:this.props.name}),Object(f.jsx)("h6",{children:this.props.price})]}),Object(f.jsxs)("div",{className:"top-item-bid",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)(O.f,{})," HighestBid ",Object(f.jsx)("b",{children:this.props.highestBid})]}),Object(f.jsxs)("p",{children:["New Bid \xa0",Object(f.jsx)("img",{src:z,width:17,height:17,alt:"new bid"})]})]})]})}}]),n}(i.a.Component),F=(i.a.Component,n(17)),L=(n(276),n(42)),W=n(25),U=n.n(W),J=n(91),H=(n(89),n(247),n(248),n(92)),G=n(249),K=n(3),Q={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},V=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CONNECTION_REQUEST":return Object(K.a)(Object(K.a)({},Q),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(K.a)(Object(K.a)({},t),{},{loading:!1,account:e.payload.account,smartContract:e.payload.smartContract,web3:e.payload.web3});case"CONNECTION_FAILED":return Object(K.a)(Object(K.a)({},Q),{},{loading:!1,errorMsg:e.payload});case"UPDATE_ACCOUNT":return Object(K.a)(Object(K.a)({},t),{},{account:e.payload.account});default:return t}},Y={loading:!1,name:"",totalSupply:0,cost:0,error:!1,errorMsg:""},q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECK_DATA_REQUEST":return Object(K.a)(Object(K.a)({},t),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(K.a)(Object(K.a)({},t),{},{loading:!1,name:e.payload.name,totalSupply:e.payload.totalSupply,cost:e.payload.cost,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(K.a)(Object(K.a)({},Y),{},{loading:!1,error:!0,errorMsg:e.payload});default:return t}},$=Object(H.b)({blockchain:V,data:q}),X=[G.a],Z=Object(H.c)(H.a.apply(void 0,X)),tt=Object(H.d)($,Z),et=function(t){return{type:"CHECK_DATA_FAILED",payload:t}},nt=function(t){return function(){var t=Object(J.a)(U.a.mark((function t(e){var n,a,i;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"CHECK_DATA_REQUEST"}),t.prev=1,t.next=4,tt.getState().blockchain.smartContract.methods.name().call();case 4:return n=t.sent,t.next=7,tt.getState().blockchain.smartContract.methods.totalSupply().call();case 7:return a=t.sent,t.next=10,tt.getState().blockchain.smartContract.methods.cost().call();case 10:i=t.sent,e({type:"CHECK_DATA_SUCCESS",payload:{name:n,totalSupply:a,cost:i}}),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(1),console.log(t.t0),e(et("Could not load data from contract."));case 18:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e){return t.apply(this,arguments)}}()};var at=function(){var t=Object(L.b)(),e=Object(L.c)((function(t){return t.blockchain})),n=(Object(L.c)((function(t){return t.data})),Object(a.useState)("")),i=Object(F.a)(n,2),s=(i[0],i[1]),c=Object(a.useState)(!1),r=Object(F.a)(c,2),o=r[0],l=r[1],u=Object(a.useState)(0),d=Object(F.a)(u,2),p=d[0],b=d[1],m=function(){""!==e.account&&null!==e.smartContract&&t(nt(e.account))};return Object(a.useEffect)((function(){m()}),[e.account]),Object(f.jsx)("div",{className:"mint-control",id:"mint",children:Object(f.jsx)(j.a,{children:Object(f.jsxs)(y.a,{children:[Object(f.jsx)(h.a,{md:6,xs:12,className:"mint-image",children:Object(f.jsx)("img",{src:S,alt:"mint gif"})}),Object(f.jsxs)(h.a,{md:6,xs:12,className:"mint-description",children:[Object(f.jsxs)("header",{style:{fontStyle:"normal"},children:["MINT YOUR ",Object(f.jsx)("text",{style:{color:"white"},children:"POWER PLANT"})]}),Object(f.jsx)("text",{style:{textAlign:"center",height:10}}),Object(f.jsxs)("div",{className:"number-control",children:[Object(f.jsx)(O.b,{color:"white",size:40,onClick:function(){p<=0||b(p-1)}}),Object(f.jsx)("span",{id:"inputBox",style:{color:"white"},children:p}),Object(f.jsx)(O.c,{color:"white",size:40,onClick:function(){p>=25||b(p+1)}})]}),Object(f.jsx)("p",{style:{marginTop:0,marginBottom:0},children:"0.08 ETH + Gas"}),""===e.account||null===e.smartContract?Object(f.jsxs)("div",{className:"flex-column",children:[Object(f.jsx)("button",{className:"ybutton",onClick:function(t){},children:"COMING SOON"}),""!==e.errorMsg?Object(f.jsx)("div",{style:{textAlign:"center",fontSize:20,color:"white"},children:e.errorMsg}):null]}):Object(f.jsx)("button",{className:"ybutton",onClick:function(n){var a;n.preventDefault(),a=1,(a=document.getElementById("inputBox").textContent)<=0||(s("Minting your Official BooCrew NFT..."),l(!0),e.smartContract.methods.mint(e.account,a).send({gasLimit:285e3*a,to:"0x7181d2038B849A18145eb153b8bEFC552e52c37A",from:e.account,value:e.web3.utils.toWei((.077*a).toString(),"ether")}).once("error",(function(t){console.log(t),s("Sorry, something went wrong. Check your transaction on Etherscan to find out what happened!"),l(!1)})).then((function(n){s("Your BooCrew NFT has been successfully minted!"),l(!1),t(nt(e.account))}))),m()},children:o?"BUSY":"MINT"})]})]})})})},it=n.p+"static/media/legif.e473ad46.gif",st=(n(556),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"about-control",style:{background:"#141416"},children:Object(f.jsx)(j.a,{style:{border:"solid #7E7E7F 1px",padding:20},children:Object(f.jsxs)(y.a,{children:[Object(f.jsx)(h.a,{md:6,xs:12,className:"image-control",children:Object(f.jsx)("img",{style:{border:"solid black 2px",borderRadius:0},src:it,alt:"about gif"})}),Object(f.jsxs)(h.a,{md:6,xs:12,className:"about-description",children:[Object(f.jsxs)("header",{style:{color:"white",fontStyle:"normal"},children:["Utility",Object(f.jsx)("br",{})]}),Object(f.jsxs)("p",{style:{color:"white"},children:[Object(f.jsx)("text",{style:{fontSize:30},children:"Donating 10% from the initial release, 2% from secondary sales."})," ",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("text",{style:{color:"#7E7E7F"},children:"We will be making contributions towards DAOs (decentralized autonomous organizations) to benefit renewable energy (such as solar, wind, etc), carbon offsets, and support ETH 2.0 Proof of Stake."})]})]})]})})})}}]),n}(i.a.Component)),ct=n(250),rt=n.n(ct),ot=(n.p,n(557),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"meet-control",children:[Object(f.jsx)(j.a,{children:Object(f.jsxs)("header",{style:{textAlign:"center",color:"white"},children:[Object(f.jsx)("br",{})," ",Object(f.jsx)("span",{style:{fontStyle:"normal"},children:"Check out our assortment."})]})}),Object(f.jsxs)(rt.a,{breakpoints:[{breakpoint:500,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:1280,settings:{slidesToShow:3,slidesToScroll:1}}],dots:!1,arrows:!0,showSides:!0,sidesOpacity:.5,sideSize:.1,slidesToScroll:1,slidesToShow:4,scrollOnDevice:!0,children:[Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"caroImg",src:"https://raw.githubusercontent.com/DeadBanditz/banditzsite/main/image0.jpg",alt:"boy1"})}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"caroImg",src:"https://raw.githubusercontent.com/DeadBanditz/banditzsite/main/image1.jpg",alt:"boy2"})}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"caroImg",src:"https://raw.githubusercontent.com/DeadBanditz/banditzsite/main/image0.jpg",alt:"boy1"})}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"caroImg",src:"https://raw.githubusercontent.com/DeadBanditz/banditzsite/main/image1.jpg",alt:"boy2"})}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"caroImg",src:"https://raw.githubusercontent.com/DeadBanditz/banditzsite/main/image0.jpg",alt:"boy1"})}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"caroImg",src:"https://raw.githubusercontent.com/DeadBanditz/banditzsite/main/image1.jpg",alt:"boy2"})}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"caroImg",src:"https://raw.githubusercontent.com/DeadBanditz/banditzsite/main/image0.jpg",alt:"boy1"})}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"caroImg",src:"https://raw.githubusercontent.com/DeadBanditz/banditzsite/main/image1.jpg",alt:"boy2"})}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"caroImg",src:"https://raw.githubusercontent.com/DeadBanditz/banditzsite/main/image0.jpg",alt:"boy1"})}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"caroImg",src:"https://raw.githubusercontent.com/DeadBanditz/banditzsite/main/image1.jpg",alt:"boy2"})})]})]})}}]),n}(i.a.Component)),lt=n.p+"static/media/dicklogo.9f1ffd25.png",ut=(n(558),i.a.Component,n(559),n.p+"static/media/award.14ea6b22.JPG"),dt=n.p+"static/media/community.4baca058.JPG",pt=n.p+"static/media/diamont.3cec241c.JPG",bt=n.p+"static/media/money.e63839ce.JPG",jt=n.p+"static/media/paintbrush.7501d99d.JPG",mt=n.p+"static/media/tickets.4eac7c08.JPG",yt=n.p+"static/media/plant.fe24cbae.JPG",ht=(n(560),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"card_layout",children:[1==this.props.svg&&Object(f.jsx)("img",{className:"card_svg",src:ut}),2==this.props.svg&&Object(f.jsx)("img",{className:"card_svg",src:dt}),3==this.props.svg&&Object(f.jsx)("img",{className:"card_svg",src:pt}),4==this.props.svg&&Object(f.jsx)("img",{className:"card_svg",src:bt}),5==this.props.svg&&Object(f.jsx)("img",{className:"card_svg",src:jt}),6==this.props.svg&&Object(f.jsx)("img",{className:"card_svg",src:mt}),7==this.props.svg&&Object(f.jsx)("img",{className:"card_svg",src:yt}),Object(f.jsx)("h3",{className:"card_title",children:this.props.title}),Object(f.jsx)("p",{className:"card_text",children:this.props.description}),Object(f.jsx)("hr",{className:"card_bar"})]})}}]),n}(i.a.Component));var Ot=function(){var t=Object(a.useState)({title:"Certificate of authenticity",svg:1,description:"asfdf"}),e=Object(F.a)(t,2),n=e[0],i=(e[1],Object(a.useState)({title:"Community",svg:2,description:"asdasdfasdff"})),s=Object(F.a)(i,2),c=s[0],r=(s[1],Object(a.useState)({title:"Raffles",svg:3,description:"asfffdf"})),o=Object(F.a)(r,2),l=o[0],u=(o[1],Object(a.useState)({title:"Win Rare Seeds & Art",svg:6,description:"asasdffedf"})),d=Object(F.a)(u,2),p=d[0],b=(d[1],Object(a.useState)({title:"Bonus Content",svg:4,description:"asasdffdf"})),j=Object(F.a)(b,2),m=j[0],y=(j[1],Object(a.useState)({title:"Special Offer Codes",svg:5,description:"asdasdffef"})),h=Object(F.a)(y,2),O=h[0],x=(h[1],Object(a.useState)({title:"Planting Trees",svg:7,description:"asdasdffef"})),g=Object(F.a)(x,2),v=g[0],T=(g[1],Object(L.b)()),w=Object(L.c)((function(t){return t.blockchain})),N=(Object(L.c)((function(t){return t.data})),Object(a.useState)("")),C=Object(F.a)(N,2),_=(C[0],C[1],Object(a.useState)(!1)),M=Object(F.a)(_,2),k=(M[0],M[1],Object(a.useState)(0)),S=Object(F.a)(k,2);return S[0],S[1],Object(a.useEffect)((function(){""!==w.account&&null!==w.smartContract&&T(nt(w.account))}),[w.account]),Object(f.jsx)("div",{className:"utility_container",children:Object(f.jsx)("div",{className:"utility_section",children:Object(f.jsx)("div",{className:"utility_right_bar",children:Object(f.jsxs)("div",{className:"cards_layout2",children:[Object(f.jsx)(ht,{title:n.title,svg:n.svg,description:n.description}),Object(f.jsx)(ht,{title:c.title,svg:c.svg,description:c.description}),Object(f.jsx)(ht,{title:l.title,svg:p.svg,description:l.description}),Object(f.jsx)(ht,{title:m.title,svg:l.svg,description:m.description}),Object(f.jsx)(ht,{title:O.title,svg:m.svg,description:O.description}),Object(f.jsx)(ht,{title:p.title,svg:O.svg,description:p.description}),Object(f.jsx)(ht,{title:v.title,svg:v.svg,description:v.description})]})})})})},ft=(n(561),n(562),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"state_card_layout",children:[Object(f.jsx)("p",{className:"state_card_title",children:this.props.title}),Object(f.jsx)("p",{className:"state_card_text",children:Object(f.jsx)("span",{className:"state_card_span",children:this.props.text})}),Object(f.jsx)("hr",{className:"state_card_bar"})]})}}]),n}(i.a.Component)),xt=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).state={data:[{title:"15",text:"Total in Collection"},{title:"10K",text:"Trees Planted"},{title:"25M",text:"Total Donated"},{title:"22",text:"Countries World Wide"},{title:"5",text:"Industry Awards"}]},a}return Object(o.a)(n,[{key:"render",value:function(){return console.log(this.state.data),Object(f.jsxs)("div",{className:"state_layout",children:[Object(f.jsx)("div",{className:"state_cards",children:this.state.data.map((function(t){return Object(f.jsx)("div",{className:"state_card",children:Object(f.jsx)(ft,{title:t.title,text:t.text})})}))}),Object(f.jsx)("div",{className:"state_bg"})]})}}]),n}(i.a.Component),gt=(n(563),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"footer_layout",children:Object(f.jsxs)("div",{className:"footer_section",children:[Object(f.jsx)("div",{className:"footer_text_room",children:Object(f.jsx)("p",{className:"footer_title",children:"PARTNERS"})}),Object(f.jsx)("div",{className:"footer_bg_1"})]})})}}]),n}(i.a.Component));n(564),n(565);var vt=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(N,{}),Object(f.jsx)(st,{}),Object(f.jsx)(Ot,{className:"utilitysec"}),Object(f.jsx)(ot,{}),Object(f.jsx)(at,{}),Object(f.jsx)(E,{}),Object(f.jsx)(xt,{}),Object(f.jsx)(M,{}),Object(f.jsx)(gt,{}),Object(f.jsx)(k,{})]})},Tt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,577)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),a(t),i(t),s(t),c(t)}))};n(566);c.a.render(Object(f.jsx)(L.a,{store:tt,children:Object(f.jsx)(vt,{})}),document.getElementById("root")),Tt()}},[[567,1,2]]]);
//# sourceMappingURL=main.b278df63.chunk.js.map