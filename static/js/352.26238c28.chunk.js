"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[352],{3352:function(n,e,t){t.r(e),t.d(e,{default:function(){return Gn}});var r=t(2791),i=t(9434),o=t(3634),a=t(1538),c=t(6916),d=function(n){return n.contacts.items},s=function(n){return n.contacts.isLoading},l=function(n){return n.contacts.error},u=function(n){return n.filter},x=function(n){return n.contacts.showModal},p=function(n){return n.contacts.deleteId},m=function(n){return n.contacts.isAddFormOpen},h=new Intl.Collator("en");function f(n,e){return h.compare(n.name,e.name)}var g,b,Z,v,j,P,y=(0,c.P1)([d,u],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})).sort(f)})),w=t(247),k=t(5218),C=t(5705),L=t(6727),I=t(5639),N=t(184),X=L.Ry().shape({name:L.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Required").trim(),number:L.Z_().matches(/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,"Phone number is not valid").required("Required")}),z=function(){var n=(0,i.I0)(),e=(0,i.v9)(d);return(0,N.jsx)(C.J9,{initialValues:{name:"",number:""},validationSchema:X,onSubmit:function(t,r){var i,a=t.name,c=t.number;if(e.some((function(n){return n.name.toLowerCase()===a.toLowerCase()})))return i="".concat(a," is already in contacts."),k.ZP.error(i);!function(e,t){n((0,o.uK)({name:e,number:t}))}(a,c),r.resetForm()},children:(0,N.jsxs)(I.l0,{children:[(0,N.jsxs)(I.lX,{children:["Name:",(0,N.jsx)(I.gN,{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}),(0,N.jsx)(I.Bc,{name:"name",component:"span"})]}),(0,N.jsxs)(I.lX,{children:["Number:",(0,N.jsx)(I.gN,{type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}),(0,N.jsx)(I.Bc,{name:"number",component:"span"})]}),(0,N.jsx)(I.GX,{type:"submit",children:"Add contact"}),(0,N.jsx)(k.x7,{position:"top-left",toastOptions:{duration:3e3}})]})})},G=t(168),J=t(6444),S=J.ZP.li(g||(g=(0,G.Z)(["\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n  padding-bottom: 10px;\n\n  :first-child {\n    margin-top: 0;\n  }\n  font-size: 20px;\n  border-bottom: ",";\n"])),(function(n){return"1px solid ".concat(n.theme.colors.bd)})),q=(0,J.ZP)(I.GX)(b||(b=(0,G.Z)(["\n  margin: 0;\n  margin-left: auto;\n  font-size: 11px;\n"]))),A=J.ZP.div(Z||(Z=(0,G.Z)(["\n  margin-left: 15px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  font-weight: 700;\n  font-size: 22px;\n  text-shadow: 0 0 1px #000000;\n"]))),E=J.ZP.div(v||(v=(0,G.Z)(["\n  width: 200px;\n  /* border: 1px solid red; */\n  margin-left: 25px;\n"]))),M=J.ZP.div(j||(j=(0,G.Z)(["\n  width: 200px;\n  /* border: 1px solid blue; */\n  /* margin-left: 10px; */\n"]))),$=function(n){var e=n.id,t=n.name,r=n.number,o=n.randomColor,c=(0,i.I0)();return(0,N.jsxs)(S,{children:[(0,N.jsx)(A,{style:{background:"".concat(o)},children:t[0]}),(0,N.jsx)(E,{children:t}),(0,N.jsx)(M,{children:r}),(0,N.jsx)(q,{type:"button",onClick:function(){return c((0,a.$J)(e))},children:"Delete"})]})},F=J.ZP.ul(P||(P=(0,G.Z)(["\n  margin-top: 10px;\n"])));var T,B,O,R,K,_,D,V,H,Q,U,W,Y,nn,en,tn,rn,on,an=function(){var n=(0,i.v9)(y);return(0,N.jsx)(F,{children:n.map((function(n){var e=n.id,t=n.name,r=n.number,i="#".concat(Math.floor(16777215*Math.random()).toString(16));return(0,N.jsx)($,{id:e,name:t,number:r,randomColor:i},e)}))})},cn=J.ZP.label(T||(T=(0,G.Z)(["\n  margin-left: auto;\n"]))),dn=J.ZP.input(B||(B=(0,G.Z)(["\n  margin-left: 10px;\n"]))),sn=t(4808),ln=function(){var n=(0,i.v9)(u),e=(0,i.I0)();return(0,N.jsxs)(cn,{children:["Search:",(0,N.jsx)(dn,{type:"text",value:n,onChange:function(n){return e((0,sn.M)(n.currentTarget.value))}})]})},un=J.ZP.div(O||(O=(0,G.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  padding: 30px;\n  border: ",";\n  border-top: 0px;\n"])),(function(n){return"1px solid ".concat(n.theme.colors.bd)})),xn=J.ZP.h2(R||(R=(0,G.Z)(["\n  display: inline;\n"]))),pn=J.ZP.div(K||(K=(0,G.Z)(["\n  padding-bottom: 25px;\n  display: flex;\n  align-items: center;\n  border-bottom: ",";\n  \n"])),(function(n){return"1px solid ".concat(n.theme.colors.bd)})),mn=(0,J.ZP)(I.GX)(_||(_=(0,G.Z)(["\n  margin: 0;\n  margin-left: 15px;\n  padding: 0.2em 0.6em;\n\n  background: #ed8e6b;\n  color: rgb(247, 239, 239);\n  font-size: 18px;\n"]))),hn=J.ZP.div(D||(D=(0,G.Z)(["\n  display: flex;\n  padding-bottom: 10px;\n  padding-top: 10px;\n  align-items: center;\n  border-bottom: ",";\n"])),(function(n){return"1px solid ".concat(n.theme.colors.bd)})),fn=J.ZP.div(V||(V=(0,G.Z)(["\n  width: 70px;\n"]))),gn=J.ZP.div(H||(H=(0,G.Z)(["\n  width: 200px;\n  margin-left: 10px;\n"]))),bn=J.ZP.div(Q||(Q=(0,G.Z)(["\n  width: 200px;\n"]))),Zn=J.ZP.p(U||(U=(0,G.Z)(["\n  text-align: center;\n  margin-top: 30px;\n"]))),vn=function(n){var e=n.message;return(0,N.jsx)(Zn,{children:e})},jn=J.ZP.div(W||(W=(0,G.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 1200;\n"]))),Pn=J.ZP.div(Y||(Y=(0,G.Z)([""]))),yn=t(4164),wn=document.querySelector("#modal-root"),kn=function(n){var e=n.children,t=(0,i.I0)();return(0,r.useEffect)((function(){var n=function(n){"Escape"===n.code&&t((0,a.$J)())};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[]),(0,yn.createPortal)((0,N.jsx)(jn,{children:(0,N.jsx)(Pn,{children:e})}),wn)},Cn=J.ZP.div(nn||(nn=(0,G.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  width: 250px;\n  height: 100px;\n\n  border-radius: 5px;\n  border: ",";\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),\n    1px 4px 6px rgba(0, 0, 0, 0.16);\n  background-color: rgba(219, 219, 219);\n"])),(function(n){return"1px solid ".concat(n.theme.colors.bd)})),Ln=J.ZP.div(en||(en=(0,G.Z)(["\n  font-weight: bold;\n  /* margin-right: 10px; */\n"]))),In=J.ZP.div(tn||(tn=(0,G.Z)(["\n  margin-top: 15px;\n"]))),Nn=(0,J.ZP)(I.GX)(rn||(rn=(0,G.Z)(["\n  margin: 0;\n  margin-right: 50px;\n"]))),Xn=(0,J.ZP)(I.GX)(on||(on=(0,G.Z)(["\n  margin: 0;\n"]))),zn=function(n){var e=n.id,t=(0,i.I0)();return(0,N.jsxs)(Cn,{children:[(0,N.jsx)(Ln,{children:"A you sure?"}),(0,N.jsxs)(In,{children:[(0,N.jsx)(Nn,{type:"button",onClick:function(){t((0,o.GK)(e)),t((0,a.$J)(e))},children:"Ok"}),(0,N.jsx)(Xn,{type:"button",onClick:function(){return t((0,a.$J)(e))},children:"No"})]})]})},Gn=function(){var n=(0,i.I0)(),e=(0,i.v9)(d),t=(0,i.v9)(s),c=(0,i.v9)(l),u=(0,i.v9)(x),h=(0,i.v9)(p),f=(0,i.v9)(m);(0,r.useEffect)((function(){n((0,o.yF)())}),[n]);return(0,N.jsxs)("div",{children:[(0,N.jsxs)(un,{children:[(0,N.jsxs)(pn,{children:[!t&&(0,N.jsx)(xn,{children:"Contacts"}),t&&!c&&(0,N.jsx)(xn,{children:"Loading..."}),(0,N.jsx)(mn,{type:"button",onClick:function(){n((0,a.Z8)())},children:"+"})]}),f&&(0,N.jsx)(z,{}),(0,N.jsxs)(hn,{children:[(0,N.jsxs)(fn,{children:["Total: ",null===e||void 0===e?void 0:e.length]}),(0,N.jsx)(gn,{children:"Name"}),(0,N.jsx)(bn,{children:"Number"}),(0,N.jsx)(ln,{})]}),(0,N.jsx)("div",{children:(null===e||void 0===e?void 0:e.length)<1&&!t?(0,N.jsx)(vn,{message:"Phonebook is empty!"}):(0,N.jsx)(an,{})}),(0,N.jsx)(w.Z,{})]}),u&&(0,N.jsx)(kn,{children:(0,N.jsx)(zn,{id:h})})]})}}}]);
//# sourceMappingURL=352.26238c28.chunk.js.map