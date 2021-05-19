(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={form:"Section_form__62xnk",name:"Section_name__1VAHk"}},14:function(t,e,n){t.exports={lfInput:"Filter_lfInput__nCh4U","lf--input":"Filter_lf--input__2-xLA"}},2:function(t,e,n){t.exports={flexRow:"Form_flexRow__3-FHr",lfInput:"Form_lfInput___xxTd","lf--input":"Form_lf--input__2dVJ_",lfSubmit:"Form_lfSubmit__6LWhr"}},29:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),s=n.n(r),i=n(15),o=n(6),l=n(7),u=n(9),m=n(8),d=n(3),b=n.n(d),h=n(13),f=n(2),j=n.n(f),p=n(0),x=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameId=b.a.generate(),t.numberId=b.a.generate(),t.handleChange=function(e){t.setState(Object(h.a)({},e.currentTarget.name,e.currentTarget.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.name,t.state.number),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("form",{className:j.a.form,onSubmit:this.handleSubmit,children:[Object(p.jsx)("label",{htmlFor:this.nameId,children:Object(p.jsx)("div",{className:j.a.flexRow,children:Object(p.jsx)("input",{className:j.a.lfInput,type:"text",name:"name",placeholder:"Name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange,id:this.nameId})})}),Object(p.jsx)("label",{className:j.a.label,htmlFor:this.numberId,children:Object(p.jsx)("div",{className:j.a.flexRow,children:Object(p.jsx)("input",{className:j.a.lfInput,placeholder:"Number",type:"tel",name:"number",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange,id:this.numberId})})}),Object(p.jsx)("button",{className:j.a.lfSubmit,type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),_=n(4),O=n.n(_),C=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(p.jsx)("ul",{className:O.a.list,children:e.map((function(t){var e=t.name,a=t.id,c=t.number;return Object(p.jsxs)("li",{className:O.a.contactList,children:[Object(p.jsxs)("span",{className:O.a.contactsNameNumber,children:[e,": ",c]}),Object(p.jsx)("button",{className:O.a.buttonDelete,onClick:function(){return n(a)},children:"Delete"})]},a)}))})},g=n(14),v=n.n(g),N=function(t){var e=t.value,n=t.onChange;return Object(p.jsx)("label",{children:Object(p.jsx)("input",{className:v.a.lfInput,placeholder:"Find contacts by name",type:"text",value:e,onChange:n})})},S=n(11),I=n.n(S),y=function(t){var e=t.title,n=t.children;return Object(p.jsxs)("div",{className:I.a.form,children:[Object(p.jsx)("h1",{className:I.a.name,children:e}),n]})},F=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e,n){var a={id:b.a.generate(),name:e,number:n};t.state.contacts.find((function(t){return t.name===e}))?alert("".concat(e," is already in contacts")):t.setState((function(t){return{contacts:[a].concat(Object(i.a)(t.contacts))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state.filter.toLowerCase();return t.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.getVisibleContacts();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(y,{title:"Phonebook",children:Object(p.jsx)(x,{onSubmit:this.addContact})}),Object(p.jsxs)(y,{title:"Contacts",children:[Object(p.jsx)(N,{value:this.state.filter,onChange:this.changeFilter}),Object(p.jsx)(C,{contacts:t,onDeleteContact:this.deleteContact})]})]})}}]),n}(a.Component);s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(F,{})}),document.getElementById("root"))},4:function(t,e,n){t.exports={list:"ContactList_list__IwcLi",contactList:"ContactList_contactList__2YARj",contactsNameNumber:"ContactList_contactsNameNumber__5fSGN",buttonDelete:"ContactList_buttonDelete__3hmLo"}}},[[29,1,2]]]);
//# sourceMappingURL=main.52b28c26.chunk.js.map