"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[982],{7768:function(n,e,t){t.d(e,{Fg:function(){return r.Fg},Fy:function(){return r.Fy},Gq:function(){return r.Gq},Sn:function(){return r.Sn},ar:function(){return r.ar},ch:function(){return r.ch},hX:function(){return r.hX},rS:function(){return o.r},wh:function(){return r.wh}});var r=t(2916),o=t(7211)},982:function(n,e,t){t.r(e),t.d(e,{Phonebook:function(){return pn},default:function(){return mn}});var r,o,i,c,a,u,s,d=t(4165),l=t(5861),f=t(885),h=t(168),p=t(6444),m=t(2916),x=(0,p.ZP)(m.Sn)(r||(r=(0,h.Z)(["\n  width: 32px;\n  height: 32px;\n\n  margin: ",";\n  padding: ",";\n\n  background-color: transparent;\n\n  &:hover,\n  &:focus {\n    box-shadow: ",";\n    background-color: ",";\n  }\n\n  &:active {\n    box-shadow: inset ",";\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.mp(1)}),(function(n){return n.theme.mp(1)}),(function(n){return n.theme.shadow.default}),(function(n){return n.theme.colors.buttonColorAccent}),(function(n){return n.theme.shadow.default}),(function(n){return n.theme.colors.buttonColorActive})),g=t(2791),b=t(4164),v=t(2330),w=p.ZP.div(o||(o=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100vh;\n\n  background-color: rgba(0, 0, 0, 0.6);\n"]))),k=p.ZP.div(i||(i=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n\n  margin: 30px;\n  padding: 0;\n\n  max-width: 80%;\n  max-height: 70%;\n\n  background-color: #ffffff;\n  border-radius: 5px;\n  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.7);\n"]))),Z=p.ZP.div(c||(c=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  position: relative;\n  width: 100%;\n  min-width: 300px;\n\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);\n"]))),y=p.ZP.h2(a||(a=(0,h.Z)(["\n  margin: 10px 20px;\n  font-size: 24px;\n  font-weight: bold;\n"]))),j=(0,p.ZP)(x)(u||(u=(0,h.Z)(["\n  margin: 0;\n  padding: 0;\n\n  position: absolute;\n  top: 8px;\n  right: 8px;\n"]))),C=p.ZP.div(s||(s=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  margin: 0;\n  padding: 20px 30px 30px;\n  width: 100%;\n  min-width: 300px;\n  min-height: 100px;\n"]))),P=t(184);function S(n){var e=n.title,t=void 0===e?null:e,r=n.isModalOpen,o=void 0!==r&&r,i=n.handleClose,c=n.children,a=void 0===c?"":c,u=document.getElementById("modal-root"),s=(0,g.useCallback)((function(n){"Escape"===n.code&&i()}),[i]);return(0,g.useEffect)((function(){return o&&document.addEventListener("keydown",s),function(){document.removeEventListener("keydown",s)}}),[o,s]),(0,b.createPortal)(o&&(0,P.jsx)(w,{id:"modalBackdrop",onClick:function(n){n.currentTarget===n.target&&i()},children:(0,P.jsxs)(k,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(y,{children:t}),(0,P.jsx)(j,{onClick:i,children:v.o.icon.clear})]}),(0,P.jsx)(C,{children:a})]})}),u)}var F,L,E,I,_,A,B,G,T,X=t(7768),q=function(n){var e=n.isLoading,t=n.handleSubmit;return(0,P.jsxs)(X.Gq,{onSubmit:t,children:[(0,P.jsxs)(X.ar,{children:["Name:",(0,P.jsx)(X.Fy,{name:"name",type:"text"})]}),(0,P.jsxs)(X.ar,{children:["Number:",(0,P.jsx)(X.Fy,{name:"number",type:"text"})]}),(0,P.jsx)(X.Sn,{type:"submit",disabled:e,children:e?v.o.icon.working:"Add Contact"})]})},z=t(9434),D=t(208),W=p.ZP.li(F||(F=(0,h.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  margin: 0;\n  padding: ",";\n\n  font-size: ",";\n  font-weight: ",";\n\n  &:nth-child(odd) {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.mp(0)}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.colors.secondBackground})),K=p.ZP.span(L||(L=(0,h.Z)(["\n  display: inline-block;\n\n  font-weight: ",";\n"])),(function(n){return n.theme.fontWeights.bold})),M=p.ZP.span(E||(E=(0,h.Z)(["\n  display: inline-block;\n  min-width: 150px;\n\n  font-weight: ",";\n\n  &::before {\n    content: 'tel:';\n    margin: ",";\n  }\n"])),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.mp(0,1,0,4)})),N=p.ZP.div(I||(I=(0,h.Z)(["\n  justify-self: flex-end;\n"]))),O=function(n){var e=n.contact,t=(0,z.I0)(),r=(0,g.useState)(!1),o=(0,f.Z)(r,2),i=o[0],c=o[1],a=function(){var n=(0,l.Z)((0,d.Z)().mark((function n(e){return(0,d.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("id",e),c(!0),n.next=4,t((0,D.GK)(e));case 4:return n.next=6,t((0,D.yF)());case 6:c(!1);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,P.jsxs)(W,{children:[(0,P.jsxs)("div",{style:{width:"100%",marginLeft:"10px"},children:[(0,P.jsx)(K,{children:e.name}),(0,P.jsx)(M,{children:e.number})]}),(0,P.jsx)(N,{children:(0,P.jsx)(x,{onClick:function(){return a(e.id)},disabled:i,children:i?v.o.icon.working:v.o.icon.delete})})]})},Y=p.ZP.ul(_||(_=(0,h.Z)(["\n  display: inline-block;\n  margin: ",";\n  padding: 0;\n\n  min-width: 400px;\n  list-style: none;\n  border: 1px solid ",";\n"])),(function(n){return n.theme.mp(3,4,0,4)}),(function(n){return n.theme.colors.secondBackground})),H=function(n){var e=n.contacts,t=void 0===e?[]:e;return(null===t||void 0===t?void 0:t.length)>=0?(0,P.jsx)(Y,{children:t.map((function(n){return(0,P.jsx)(O,{contact:n},n.id)}))}):(0,P.jsx)(X.wh,{children:"Your phonebook is empty"})},J=t(367),Q=t(6351),R=p.ZP.label(A||(A=(0,h.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n\n  width: 332px;\n  height: 32px;\n\n  border-bottom: 2px solid #000000;\n"]))),U=p.ZP.input(B||(B=(0,h.Z)(["\n  width: 300px;\n  border: none;\n  outline: none;\n"]))),V=p.ZP.p(G||(G=(0,h.Z)(["\n  margin: ",";\n"])),(function(n){return n.theme.mp(0,1,0)})),$=((0,p.ZP)(x)(T||(T=(0,h.Z)([""]))),function(){var n=(0,z.v9)(Q.AD).search,e=(0,z.I0)(),t=(0,g.useCallback)((function(){e((0,J.e)(""))}),[e]),r=(0,g.useCallback)((function(n){"Escape"===n.code&&t()}),[t]);(0,g.useEffect)((function(){document.getElementById("contactFIlter").addEventListener("keydown",r)}),[r]);return(0,P.jsxs)(R,{children:[(0,P.jsx)(V,{htmlFor:"contactFIlter",children:v.o.icon.search}),(0,P.jsx)(U,{id:"contactFIlter",type:"text",name:"filterSearch",value:n,onChange:function(n){e((0,J.e)(n.target.value))},autoComplete:"off"}),n.length>0&&(0,P.jsx)(x,{onClick:t,children:v.o.icon.clear})]})});var nn=t.p+"static/media/right-arrow.f6ed09b4b93bb91087217edd54d92ded.svg";var en=t.p+"static/media/push_pin_blue.64a4b8c28f169e0085436bf8f82a8d69.svg";var tn,rn,on,cn,an=t.p+"static/media/push_pin_set.f15ea1461aed6eba574c939d7a3f8f6d.svg",un=p.ZP.input(tn||(tn=(0,h.Z)(["\n  position: absolute;\n  top: -9999px;\n  width: 0px;\n  opacity: 0;\n"]))),sn=p.ZP.label(rn||(rn=(0,h.Z)(["\n  display: block;\n  width: ","px;\n  height: 100%;\n  min-height: 50px;\n\n  margin: ",";\n\n  background-color: #ffffff;\n  background-image: url(",");\n  background-position: center center;\n  background-repeat: no-repeat;\n  border-bottom-right-radius: ",";\n\n  &:has(",":checked) {\n    background-image: url(",");\n    background-color: ",";\n  }\n"])),30,X.rS.mp(0,0,0,1),nn,(function(n){return n.theme.radii.normal}),un,an,(function(n){return n.theme.colors.pageBackgroundAccent})),dn=p.ZP.div(on||(on=(0,h.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  padding: ",";\n\n  position: absolute;\n  top: 80px;\n  left: 0px;\n  width: ","px;\n  height: ","px;\n\n  transform: translateX(-400px);\n\n  background-color: #ffffff;\n  border-bottom-right-radius: ",";\n  border: none;\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);\n\n  transition: transform 350ms ease-in-out;\n\n  &:hover,\n  &:focus-within,\n  &:has(",":checked) {\n    transform: translateX(0);\n  }\n\n  &:hover:has(",":not(:checked)) ",", &:focus-within:has(",":not(:checked)) "," {\n    background-image: url(",");\n  }\n\n  &:has(",":checked) {\n    position: relative;\n    top: 0;\n    left: 0;\n  }\n"])),(function(n){return n.theme.mp(0,0,0,2)}),430,50,(function(n){return n.theme.radii.normal}),un,un,sn,un,sn,en,un),ln=p.ZP.div(cn||(cn=(0,h.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  margin: 0;\n  padding: ",";\n\n  width: 100%;\n  height: 100%;\n"])),(function(n){return n.theme.mp(10)})),fn=function(n){var e=n.children;return(0,P.jsxs)(dn,{children:[(0,P.jsx)(ln,{children:e}),(0,P.jsx)(sn,{children:(0,P.jsx)(un,{type:"checkbox",onChange:function(n){console.log(n.target.checked)}})})]})},hn=t(7834),pn=function(){var n=(0,z.I0)(),e=(0,z.v9)(Q.Af),t=(0,z.v9)(Q.AD).search,r=(0,hn.a)().user,o=(0,g.useState)(),i=(0,f.Z)(o,2),c=i[0],a=i[1],u=(0,g.useState)(!1),s=(0,f.Z)(u,2),h=s[0],p=s[1],m=(0,g.useState)([]),b=(0,f.Z)(m,2),w=b[0],k=b[1];(0,g.useEffect)((function(){(null===e||void 0===e?void 0:e.length)>0&&k(e.filter((function(n){return n.name.toLocaleLowerCase().includes(t.toLocaleLowerCase())})).sort((function(n,e){return n.name.localeCompare(e.name)})))}),[e,t]),(0,g.useEffect)((function(){n((0,D.yF)())}),[n,r]);var Z=function(n){a(!1)},y=function(){var t=(0,l.Z)((0,d.Z)().mark((function t(r){var o,i,c,a;return(0,d.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),o=r.currentTarget,i=o.elements,c=i.name,a=i.number,!e.some((function(n){return n.name.toLocaleLowerCase()===c.value.trim().toLocaleLowerCase()}))){t.next=7;break}return setTimeout((function(){window.alert("This name already exists in the list!")}),100),t.abrupt("return");case 7:return p(!0),t.next=10,n((0,D.uK)({name:c.value,number:a.value}));case 10:p(!1),Z(),n((0,D.yF)());case 13:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(fn,{children:[(0,P.jsx)($,{}),(0,P.jsx)(x,{style:{color:"#bbffbb"},onClick:function(n){return a(!0)},children:v.o.icon.add})]}),(0,P.jsx)(H,{contacts:w.sort()}),(0,P.jsx)(S,{isModalOpen:c,handleClose:Z,title:"modal title",children:(0,P.jsx)(q,{isLoading:h,handleSubmit:y})})]})},mn=pn}}]);
//# sourceMappingURL=982.4c0a315b.chunk.js.map