(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{168:function(t,e,n){"use strict";n.r(e);n(32);var a=n(7),i=n.n(a),o=n(51),r=n.n(o),s=n(0),c=n.n(s),l=n(4),u=n.n(l),m=function(t){var e=t.image,n=t.children;return c.a.createElement("div",{style:{width:"100%",height:"100vh",minHeight:"800px",background:"linear-gradient(rgba(40, 55, 57, 0.4), rgba(40, 55, 57, 0.4)), url("+e+") center",backgroundSize:"cover"}},n)};m.propTypes={image:u.a.object,children:u.a.element};var h=m,d=n(183),g=n(208),f=n(305),v=n.n(f),p=n(184),k=n.n(p),b=n(185),E=n.n(b),_=n(186),w=n(306),N=n.n(w),x=n(196),C=n.n(x),j=n(174),S=n(170),T=n.n(S),y=n(182),L=function(t){function e(e){var n;return(n=t.call(this,e)||this).sendMail=function(t){console.log("Shiiiiiet! %o",n.state),n.setState(Object.assign({},n.state,{showKvittering:!0})),t.preventDefault(),t.stopPropagation()},n.state={name:"",number:""},n.onPhoneChanged=n.onPhoneChanged.bind(r()(r()(n))),n.onNameChanged=n.onNameChanged.bind(r()(r()(n))),n}i()(e,t);var n=e.prototype;return n.onNameChanged=function(t){this.setState(Object.assign({},this.state,{name:t.target.value}))},n.onPhoneChanged=function(t){this.setState(Object.assign({},this.state,{number:t.target.value}))},n.render=function(){return c.a.createElement(s.Fragment,null,c.a.createElement(k.a,{title:"Scelto AS",meta:Object(y.a)({title:"Ønsker du å bli kontaktet av oss?",image:v.a}),link:[{rel:"icon",href:E.a}]}),c.a.createElement(d.a,null),c.a.createElement(h,{title:"Ønsker du å bli kontaktet av oss?",image:v.a},c.a.createElement("div",{className:N.a.form},this.state.showKvittering&&c.a.createElement(T.a,null,c.a.createElement("div",{className:N.a.kvittering},c.a.createElement("img",{alt:"Tor-Eric Sandvik - Daglig leder",className:N.a.kvitteringImage,src:C.a}),c.a.createElement("div",{className:N.a.kvitteringWrapper},c.a.createElement("h4",{className:N.a.kvitteringText},"Jeg kontakter deg!"),c.a.createElement("h5",{className:N.a.kvitteringTextAuthor},"- Tor-Eric Sandvik (Daglig leder)")))),!this.state.showKvittering&&c.a.createElement(T.a,null,c.a.createElement("div",{className:N.a.form__container},c.a.createElement("div",{className:N.a.form__container__text},c.a.createElement("div",{className:""},"Hei, jeg heter "),c.a.createElement(g.a,{placeholder:"Ola Nordmann",onChange:this.onNameChanged,maxLength:"20"}),c.a.createElement("div",{className:""}," og mitt telefonnummer er "),c.a.createElement(g.a,{placeholder:"91234567",onChange:this.onPhoneChanged,maxLength:"8",type:"number"})),c.a.createElement("div",{className:N.a.form__container__buttons},c.a.createElement(j.b,{onClick:this.sendMail},"Kontakt meg!")))))),c.a.createElement(_.a,null))},e}(c.a.Component);e.default=L},174:function(t,e,n){"use strict";n.d(e,"b",function(){return h}),n.d(e,"c",function(){return d}),n.d(e,"a",function(){return g});n(32);var a=n(187),i=n.n(a),o=n(0),r=n.n(o),s=n(4),c=n.n(s),l=n(181),u=n(175),m=n.n(u),h=function(t){var e=t.text,n=t.to,a=t.className,o=t.children,s=i()(t,["text","to","className","children"]);return r.a.createElement(l.Link,Object.assign({to:n,className:(a||"")+" "+m.a.buttonLight},s),e||o)},d=function(t){var e=t.text,n=t.href,a=t.className,o=t.children,s=i()(t,["text","href","className","children"]);return r.a.createElement("a",Object.assign({href:n,className:(a||"")+" "+m.a.buttonLight},s),e||o)};h.propTypes={text:c.a.string.isRequired};var g=function(t){var e=t.text,n=t.to,a=t.className,o=t.children,s=i()(t,["text","to","className","children"]);return r.a.createElement(l.Link,Object.assign({to:n,className:(a||"")+" "+m.a.buttonDark},s),e||o)};g.propTypes={text:c.a.string.isRequired}},175:function(t,e,n){t.exports={button:"Button-module--button--imwi3",buttonLight:"Button-module--buttonLight--z27Qi Button-module--button--imwi3",buttonDark:"Button-module--buttonDark--fwCTY Button-module--button--imwi3"}},182:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a=function(t){var e=t.image,n=t.title,a=t.description;return[{name:"title",content:n},{name:"description",content:a},{name:"image",content:"https://www.scelto.no"+e},{name:"og:title",content:n},{name:"og:description",content:a},{name:"og:image",content:"https://www.scelto.no"+e}]}},196:function(t,e,n){t.exports=n.p+"static/tor_eric_crop-c0a801b206cd0fa1f7ebd1b6f4c482dc.jpg"},208:function(t,e,n){"use strict";n(32);var a=n(7),i=n.n(a),o=n(51),r=n.n(o),s=n(0),c=n.n(s),l=(n(209),function(t){function e(e){var n;return(n=t.call(this,e)||this).state={value:e.placeholder},n.onChange=n.onChange.bind(r()(r()(n))),n.onKeyDown=n.onKeyDown.bind(r()(r()(n))),n.timeoutListener=void 0,n}i()(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this;this.setState(Object.assign({},this.state,{value:this.inputElement.value})),this.timeoutListener=setTimeout(function(){"function"==typeof t.setState&&t.setState(Object.assign({},t.state,{width:t.divElement.clientWidth}))},50)},n.componentWillUnmount=function(){void 0!==this.timeoutListener&&clearTimeout(this.timeoutListener)},n.componentWillReceiveProps=function(t){this.setState(Object.assign({},this.state,{value:this.inputElement.value}))},n.onKeyDown=function(t){var e=this;setTimeout(function(){e.setState(Object.assign({},e.state,{width:e.divElement.clientWidth}))},1)},n.onChange=function(t){var e=this;this.setState(Object.assign({},this.state,{value:this.inputElement.value})),setTimeout(function(){e.setState(Object.assign({},e.state,{width:e.divElement.clientWidth}))},1),this.props.onChange(t)},n.render=function(){var t=this,e=this.props,n=e.id,a=e.placeholder,i=e.maxLength,o=e.className;return c.a.createElement(s.Fragment,null,c.a.createElement("div",{id:"hidden-"+n,ref:function(e){return t.divElement=e},className:"inline inline-input__input"},this.state.value||a),c.a.createElement("input",{id:n,type:"text","aria-label":n,className:"inline inline-input__input "+o,style:{width:this.state.width},placeholder:a,ref:function(e){return t.inputElement=e},maxLength:i,"aria-autocomplete":"none",onKeyDown:this.onKeyDown,onChange:this.onChange,autoComplete:"on",autoCorrect:"false"}))},e}(c.a.Component));e.a=l},209:function(t,e,n){},305:function(t,e,n){t.exports=n.p+"static/contact-9241bd29ff018ecec4119f53b80c42aa.jpg"},306:function(t,e,n){t.exports={kontakt:"kontakt-module--kontakt--2fwcu",form:"kontakt-module--form--3Xco3",form__container:"kontakt-module--form__container--1m3LQ kontakt-module--kontakt--2fwcu",form__container__text:"kontakt-module--form__container__text--3uDjf",form__container__buttons:"kontakt-module--form__container__buttons--99lGO",kvitteringImage:"kontakt-module--kvitteringImage--3t_gK",kvitteringText:"kontakt-module--kvitteringText--2Bedl",kvitteringTextAuthor:"kontakt-module--kvitteringTextAuthor--1R3iY",kvittering:"kontakt-module--kvittering--1b3_c kontakt-module--kontakt--2fwcu"}}}]);
//# sourceMappingURL=component---src-pages-kontakt-jsx-562b83dc43057fc14bfd.js.map