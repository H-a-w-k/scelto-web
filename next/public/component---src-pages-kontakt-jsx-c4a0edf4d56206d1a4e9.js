(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{164:function(t,e,n){"use strict";n.r(e);n(32);var a=n(7),i=n.n(a),o=n(52),r=n.n(o),s=n(0),l=n.n(s),c=n(4),m=n.n(c),u=function(t){var e=t.image,n=t.children;return l.a.createElement("div",{style:{width:"100%",height:"100vh",minHeight:"800px",background:"linear-gradient(rgba(40, 55, 57, 0.4), rgba(40, 55, 57, 0.4)), url("+e+") center",backgroundSize:"cover"}},n)};u.propTypes={image:m.a.object,children:m.a.element};var h=u,d=n(180),g=n(201),p=n(292),k=n.n(p),f=n(181),v=n.n(f),b=n(182),_=n.n(b),E=n(183),x=n(293),N=n.n(x),w=n(203),C=n.n(w),j=n(171),y=n(167),S=n.n(y),T=function(t){function e(e){var n;return(n=t.call(this,e)||this).sendMail=function(t){console.log("Shiiiiiet! %o",n.state),n.setState(Object.assign({},n.state,{showKvittering:!0})),t.preventDefault(),t.stopPropagation()},n.state={name:"",number:""},n.onPhoneChanged=n.onPhoneChanged.bind(r()(r()(n))),n.onNameChanged=n.onNameChanged.bind(r()(r()(n))),n}i()(e,t);var n=e.prototype;return n.onNameChanged=function(t){this.setState(Object.assign({},this.state,{name:t.target.value}))},n.onPhoneChanged=function(t){this.setState(Object.assign({},this.state,{number:t.target.value}))},n.render=function(){return l.a.createElement(s.Fragment,null,l.a.createElement(v.a,{title:"Scelto AS",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}],link:[{rel:"icon",href:_.a}]}),l.a.createElement(d.a,null),l.a.createElement(h,{title:"Ønsker du å bli kontaktet av oss?",image:k.a},l.a.createElement("div",{className:N.a.form},this.state.showKvittering&&l.a.createElement(S.a,null,l.a.createElement("div",{className:N.a.kvittering},l.a.createElement("img",{alt:"Tor-Eric Sandvik - Daglig leder",className:N.a.kvitteringImage,src:C.a}),l.a.createElement("div",{className:N.a.kvitteringWrapper},l.a.createElement("h4",{className:N.a.kvitteringText},"Jeg kontakter deg!"),l.a.createElement("h5",{className:N.a.kvitteringTextAuthor},"- Tor-Eric Sandvik (Daglig leder)")))),!this.state.showKvittering&&l.a.createElement(S.a,null,l.a.createElement("div",{className:N.a.form__container},l.a.createElement("div",{className:N.a.form__container__text},l.a.createElement("div",{className:""},"Hei, jeg heter "),l.a.createElement(g.a,{placeholder:"Ola Nordmann",onChange:this.onNameChanged,maxLength:"20"}),l.a.createElement("div",{className:""}," og mitt telefonnummer er "),l.a.createElement(g.a,{placeholder:"91234567",onChange:this.onPhoneChanged,maxLength:"8"})),l.a.createElement("div",{className:N.a.form__container__buttons},l.a.createElement(j.b,{onClick:this.sendMail},"Kontakt meg!")))))),l.a.createElement(E.a,null))},e}(l.a.Component);e.default=T},171:function(t,e,n){"use strict";n.d(e,"b",function(){return h}),n.d(e,"a",function(){return d});n(32);var a=n(184),i=n.n(a),o=n(0),r=n.n(o),s=n(4),l=n.n(s),c=n(179),m=n(172),u=n.n(m),h=function(t){var e=t.text,n=t.to,a=t.className,o=t.children,s=i()(t,["text","to","className","children"]);return r.a.createElement(c.Link,Object.assign({to:n,className:(a||"")+" "+u.a.buttonLight},s),e||o)};h.propTypes={text:l.a.string.isRequired};var d=function(t){var e=t.text,n=t.to,a=t.className,o=t.children,s=i()(t,["text","to","className","children"]);return r.a.createElement(c.Link,Object.assign({to:n,className:(a||"")+" "+u.a.buttonDark},s),e||o)};d.propTypes={text:l.a.string.isRequired}},172:function(t,e,n){t.exports={button:"Button-module--button--imwi3",buttonLight:"Button-module--buttonLight--z27Qi Button-module--button--imwi3",buttonDark:"Button-module--buttonDark--fwCTY Button-module--button--imwi3"}},201:function(t,e,n){"use strict";n(32);var a=n(7),i=n.n(a),o=n(52),r=n.n(o),s=n(0),l=n.n(s),c=(n(202),function(t){function e(e){var n;return(n=t.call(this,e)||this).state={value:e.placeholder},n.onChange=n.onChange.bind(r()(r()(n))),n.onKeyUp=n.onKeyUp.bind(r()(r()(n))),n}i()(e,t);var n=e.prototype;return n.componentDidMount=function(){this.setState(Object.assign({},this.state,{value:this.inputElement.value,width:this.divElement.clientWidth}))},n.componentWillReceiveProps=function(t){this.setState(Object.assign({},this.state,{value:this.inputElement.value}))},n.onKeyUp=function(t){this.setState(Object.assign({},this.state,{width:0===this.divElement.clientWidth?100:this.divElement.clientWidth}))},n.onChange=function(t){this.setState(Object.assign({},this.state,{value:this.inputElement.value})),this.props.onChange(t)},n.render=function(){var t=this,e=this.props,n=e.id,a=e.placeholder,i=e.maxLength,o=e.className;return l.a.createElement(s.Fragment,null,l.a.createElement("div",{id:"hidden-"+n,ref:function(e){return t.divElement=e},className:"inline inline-input__input"},this.state.value),l.a.createElement("input",{id:n,type:"text","aria-label":n,className:"inline inline-input__input "+o,style:{width:this.state.width},placeholder:a,ref:function(e){return t.inputElement=e},maxLength:i,"aria-autocomplete":"none",onKeyUp:this.onKeyUp,onChange:this.onChange,autoComplete:"off",autoCorrect:"false"}))},e}(l.a.Component));e.a=c},202:function(t,e,n){},203:function(t,e,n){t.exports=n.p+"static/tor_eric_crop-c0a801b206cd0fa1f7ebd1b6f4c482dc.jpg"},292:function(t,e,n){t.exports=n.p+"static/contact-9241bd29ff018ecec4119f53b80c42aa.jpg"},293:function(t,e,n){t.exports={kontakt:"kontakt-module--kontakt--2fwcu",form:"kontakt-module--form--3Xco3",form__container:"kontakt-module--form__container--1m3LQ kontakt-module--kontakt--2fwcu",form__container__text:"kontakt-module--form__container__text--3uDjf",form__container__buttons:"kontakt-module--form__container__buttons--99lGO",kvitteringImage:"kontakt-module--kvitteringImage--3t_gK",kvitteringText:"kontakt-module--kvitteringText--2Bedl",kvitteringTextAuthor:"kontakt-module--kvitteringTextAuthor--1R3iY",kvittering:"kontakt-module--kvittering--1b3_c kontakt-module--kontakt--2fwcu"}}}]);
//# sourceMappingURL=component---src-pages-kontakt-jsx-c4a0edf4d56206d1a4e9.js.map