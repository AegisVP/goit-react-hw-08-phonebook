"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[982],{7768:function(n,e,t){t.d(e,{Fg:function(){return r.Fg},Fy:function(){return r.Fy},Gq:function(){return r.Gq},Sn:function(){return r.Sn},ar:function(){return r.ar},ch:function(){return r.ch},hX:function(){return r.hX},rS:function(){return o.r},wh:function(){return r.wh}});var r=t(2916),o=t(7211)},982:function(n,e,t){t.r(e),t.d(e,{Phonebook:function(){return xn},default:function(){return gn}});var r,o,i,c,a,s,u,d=t(4165),l=t(5861),h=t(2982),f=t(885),p=t(7768),m=t(168),x=t(6444),g=t(2916),b=(0,x.ZP)(g.Sn)(r||(r=(0,m.Z)(["\n  width: 32px;\n  height: 32px;\n\n  margin: ",";\n  padding: ",";\n\n  background-color: transparent;\n\n  &:hover,\n  &:focus {\n    box-shadow: ",";\n    background-color: ",";\n  }\n\n  &:active {\n    box-shadow: inset ",";\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.mp(1)}),(function(n){return n.theme.mp(1)}),(function(n){return n.theme.shadow.default}),(function(n){return n.theme.colors.buttonColorAccent}),(function(n){return n.theme.shadow.default}),(function(n){return n.theme.colors.buttonColorActive})),v=t(2791),w=t(4164),k=t(2330),Z=x.ZP.div(o||(o=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100vh;\n\n  background-color: rgba(0, 0, 0, 0.6);\n"]))),j=x.ZP.div(i||(i=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n\n  margin: 30px;\n  padding: 0;\n\n  max-width: 80%;\n  max-height: 70%;\n\n  background-color: #ffffff;\n  border-radius: 5px;\n  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.7);\n"]))),y=x.ZP.div(c||(c=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  position: relative;\n  width: 100%;\n  min-width: 300px;\n\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);\n"]))),C=x.ZP.h2(a||(a=(0,m.Z)(["\n  margin: 10px 20px;\n  font-size: 24px;\n  font-weight: bold;\n"]))),P=(0,x.ZP)(b)(s||(s=(0,m.Z)(["\n  margin: 0;\n  padding: 0;\n\n  position: absolute;\n  top: 8px;\n  right: 8px;\n"]))),F=x.ZP.div(u||(u=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  margin: 0;\n  padding: 20px 30px 30px;\n  width: 100%;\n  min-width: 300px;\n  min-height: 100px;\n"]))),L=t(184);function S(n){var e=n.title,t=void 0===e?null:e,r=n.isModalOpen,o=void 0!==r&&r,i=n.handleClose,c=n.children,a=void 0===c?"":c,s=document.getElementById("modal-root"),u=(0,v.useCallback)((function(n){"Escape"===n.code&&i()}),[i]);return(0,v.useEffect)((function(){return o&&document.addEventListener("keydown",u),function(){document.removeEventListener("keydown",u)}}),[o,u]),(0,w.createPortal)(o&&(0,L.jsx)(Z,{id:"modalBackdrop",onClick:function(n){n.currentTarget===n.target&&i()},children:(0,L.jsxs)(j,{children:[(0,L.jsxs)(y,{children:[(0,L.jsx)(C,{children:t}),(0,L.jsx)(P,{onClick:i,children:k.o.icon.clear})]}),(0,L.jsx)(F,{children:a})]})}),s)}var E,I,A,_,B,G,T,X,q,z=function(n){var e=n.isLoading,t=n.handleSubmit;return(0,L.jsxs)(p.Gq,{onSubmit:t,children:[(0,L.jsxs)(p.ar,{children:["Name:",(0,L.jsx)(p.Fy,{name:"name",type:"text"})]}),(0,L.jsxs)(p.ar,{children:["Number:",(0,L.jsx)(p.Fy,{name:"number",type:"text"})]}),(0,L.jsx)(p.Sn,{type:"submit",disabled:e,children:e?k.o.icon.working:"Add Contact"})]})},D=t(9434),N=t(208),W=x.ZP.li(E||(E=(0,m.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  margin: 0;\n  padding: ",";\n\n  font-size: ",";\n  font-weight: ",";\n\n  &:nth-child(odd) {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.mp(0)}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.colors.secondBackground})),K=x.ZP.span(I||(I=(0,m.Z)(["\n  display: inline-block;\n\n  font-weight: ",";\n"])),(function(n){return n.theme.fontWeights.bold})),M=x.ZP.span(A||(A=(0,m.Z)(["\n  display: inline-block;\n  min-width: 150px;\n\n  font-weight: ",";\n\n  &::before {\n    content: 'tel:';\n    margin: ",";\n  }\n"])),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.mp(0,1,0,4)})),O=x.ZP.div(_||(_=(0,m.Z)(["\n  justify-self: flex-end;\n"]))),R=function(n){var e=n.contact,t=(0,D.I0)(),r=(0,v.useState)(!1),o=(0,f.Z)(r,2),i=o[0],c=o[1],a=function(){var n=(0,l.Z)((0,d.Z)().mark((function n(e){return(0,d.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("id",e),c(!0),n.next=4,t((0,N.GK)(e));case 4:return n.next=6,t((0,N.yF)());case 6:c(!1);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,L.jsxs)(W,{children:[(0,L.jsxs)("div",{style:{width:"100%",marginLeft:"10px"},children:[(0,L.jsx)(K,{children:e.name}),(0,L.jsx)(M,{children:e.number})]}),(0,L.jsx)(O,{children:(0,L.jsx)(b,{onClick:function(){return a(e.id)},disabled:i,children:i?k.o.icon.working:k.o.icon.delete})})]})},Y=x.ZP.ul(B||(B=(0,m.Z)(["\n  display: inline-block;\n  margin: ",";\n  padding: 0;\n\n  min-width: 400px;\n  list-style: none;\n  border: 1px solid ",";\n"])),(function(n){return n.theme.mp(3,4,0,4)}),(function(n){return n.theme.colors.secondBackground})),H=function(n){var e=n.contacts,t=void 0===e?[]:e;return(0,L.jsx)(Y,{children:t.map((function(n){return(0,L.jsx)(R,{contact:n},n.id)}))})},J=t(367),Q=t(6351),U=x.ZP.label(G||(G=(0,m.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n\n  width: 332px;\n  height: 32px;\n\n  border-bottom: 2px solid #000000;\n"]))),V=x.ZP.input(T||(T=(0,m.Z)(["\n  width: 300px;\n  border: none;\n  outline: none;\n"]))),$=x.ZP.p(X||(X=(0,m.Z)(["\n  margin: ",";\n"])),(function(n){return n.theme.mp(0,1,0)})),nn=((0,x.ZP)(b)(q||(q=(0,m.Z)([""]))),function(){var n=(0,D.v9)(Q.AD).search,e=(0,D.I0)(),t=(0,v.useCallback)((function(){e((0,J.e)(""))}),[e]),r=(0,v.useCallback)((function(n){"Escape"===n.code&&t()}),[t]);(0,v.useEffect)((function(){document.getElementById("contactFIlter").addEventListener("keydown",r)}),[r]);return(0,L.jsxs)(U,{children:[(0,L.jsx)($,{htmlFor:"contactFIlter",children:k.o.icon.search}),(0,L.jsx)(V,{id:"contactFIlter",type:"text",name:"filterSearch",value:n,onChange:function(n){e((0,J.e)(n.target.value))},autoComplete:"off"}),n.length>0&&(0,L.jsx)(b,{onClick:t,children:k.o.icon.clear})]})});var en=t.p+"static/media/right-arrow.f6ed09b4b93bb91087217edd54d92ded.svg";var tn=t.p+"static/media/push_pin_blue.64a4b8c28f169e0085436bf8f82a8d69.svg";var rn,on,cn,an,sn=t.p+"static/media/push_pin_set.f15ea1461aed6eba574c939d7a3f8f6d.svg",un=x.ZP.input(rn||(rn=(0,m.Z)(["\n  position: absolute;\n  top: -9999px;\n  width: 0px;\n  opacity: 0;\n"]))),dn=x.ZP.label(on||(on=(0,m.Z)(["\n  display: block;\n  width: ","px;\n  height: 100%;\n  min-height: 50px;\n\n  margin: ",";\n\n  background-color: #ffffff;\n  background-image: url(",");\n  background-position: center center;\n  background-repeat: no-repeat;\n  border-bottom-right-radius: ",";\n\n  &:has(",":checked) {\n    background-image: url(",");\n    background-color: ",";\n  }\n"])),30,p.rS.mp(0,0,0,1),en,(function(n){return n.theme.radii.normal}),un,sn,(function(n){return n.theme.colors.pageBackgroundAccent})),ln=x.ZP.div(cn||(cn=(0,m.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  padding: ",";\n\n  position: absolute;\n  top: 80px;\n  left: 0px;\n  width: ","px;\n  height: ","px;\n\n  transform: translateX(-400px);\n\n  background-color: #ffffff;\n  border-bottom-right-radius: ",";\n  border: none;\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);\n\n  transition: transform 350ms ease-in-out;\n\n  &:hover,\n  &:focus-within,\n  &:has(",":checked) {\n    transform: translateX(0);\n  }\n\n  &:hover:has(",":not(:checked)) ",", &:focus-within:has(",":not(:checked)) "," {\n    background-image: url(",");\n  }\n\n  &:has(",":checked) {\n    position: relative;\n    top: 0;\n    left: 0;\n  }\n"])),(function(n){return n.theme.mp(0,0,0,2)}),430,50,(function(n){return n.theme.radii.normal}),un,un,dn,un,dn,tn,un),hn=x.ZP.div(an||(an=(0,m.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  margin: 0;\n  padding: ",";\n\n  width: 100%;\n  height: 100%;\n"])),(function(n){return n.theme.mp(10)})),fn=function(n){var e=n.children;return(0,L.jsxs)(ln,{children:[(0,L.jsx)(hn,{children:e}),(0,L.jsx)(dn,{children:(0,L.jsx)(un,{type:"checkbox",onChange:function(n){console.log(n.target.checked)}})})]})},pn=t(7834),mn=t(7689),xn=function(){var n=(0,D.I0)(),e=(0,D.v9)(Q.Af),t=(0,D.v9)(Q.AD).search,r=(0,pn.a)(),o=(0,v.useState)(),i=(0,f.Z)(o,2),c=i[0],a=i[1],s=(0,v.useState)(!1),u=(0,f.Z)(s,2),m=u[0],x=u[1],g=(0,v.useState)([]),w=(0,f.Z)(g,2),Z=w[0],j=w[1];(0,v.useEffect)((function(){(null===e||void 0===e?void 0:e.length)>0?j((0,h.Z)(e.filter((function(n){return n.name.toLocaleLowerCase().includes(t.toLocaleLowerCase())})).sort((function(n,e){return n.name.localeCompare(e.name)}))).sort()):j([])}),[e,t]),(0,v.useEffect)((function(){n((0,N.yF)())}),[n,r.token]);var y=function(n){a(!1)},C=function(){var t=(0,l.Z)((0,d.Z)().mark((function t(r){var o,i,c,a;return(0,d.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),o=r.currentTarget,i=o.elements,c=i.name,a=i.number,!e.some((function(n){return n.name.toLocaleLowerCase()===c.value.trim().toLocaleLowerCase()}))){t.next=7;break}return setTimeout((function(){window.alert("This name already exists in the list!")}),100),t.abrupt("return");case 7:x(!0),n((0,N.uK)({name:c.value,number:a.value})),x(!1),y(),n((0,N.yF)());case 12:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return r.isLoggedIn||r.isRefreshing?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(fn,{children:[(0,L.jsx)(nn,{}),(0,L.jsx)(b,{style:{color:"#bbffbb"},onClick:function(n){return a(!0)},children:k.o.icon.add})]}),Z.length>0?(0,L.jsx)(H,{contacts:Z}):e.length>0?(0,L.jsx)(p.wh,{children:"Nothing found"}):(0,L.jsx)(p.wh,{children:"Your phonebook is empty"}),(0,L.jsx)(S,{isModalOpen:c,handleClose:y,title:"Add new contact",children:(0,L.jsx)(z,{isLoading:m,handleSubmit:C})})]}):(0,L.jsx)(mn.Fg,{to:"/login"})},gn=xn}}]);
//# sourceMappingURL=982.ccaeb09e.chunk.js.map