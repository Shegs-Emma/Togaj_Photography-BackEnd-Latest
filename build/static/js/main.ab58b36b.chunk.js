(this["webpackJsonptogaj-photography"]=this["webpackJsonptogaj-photography"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){e.exports={SideDrawer:"SideDrawer_SideDrawer__1jl-N",Open:"SideDrawer_Open__3dTbu",Close:"SideDrawer_Close__2cxGr",Logo:"SideDrawer_Logo__3pNKY"}},,,function(e,t,a){e.exports={Photo:"Photo_Photo__3BLrc",Image:"Photo_Image__3pFeH",Button:"Photo_Button__fU1os"}},function(e,t,a){e.exports={Content:"Layout_Content__Ha9AW",header2:"Layout_header2__2T10l",header3:"Layout_header3__eYLed"}},function(e,t,a){e.exports={Input:"input_Input__3ER8c",Label:"input_Label__1GFw7",InputElement:"input_InputElement__2GhBW",Invalid:"input_Invalid__2Q9yQ"}},,,,function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__21wBV",DesktopOnly:"Toolbar_DesktopOnly__3KQzU"}},function(e,t,a){e.exports={Gallery:"PhotoData_Gallery__vGcCk",ContactData:"PhotoData_ContactData__3G3Db",DropDown:"PhotoData_DropDown__1oVpo"}},,,,,function(e,t,a){e.exports={Button:"Button_Button__1ozcB",enable:"Button_enable__1JP30",Success:"Button_Success__3RnRB",Danger:"Button_Danger__10DWP"}},function(e,t,a){e.exports={Photos:"Photos_Photos__4Wqgr",Photo:"Photos_Photo__1oQoL"}},,,function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem__1ZDqJ",active:"NavigationItem_active__3e2Jy"}},function(e,t,a){e.exports={Gallery:"Gallery_Gallery__1saKQ",PhotoDiv:"Gallery_PhotoDiv__3bzoV"}},function(e,t,a){e.exports={Gallery:"Login_Gallery__3Mi5N",ContactData:"Login_ContactData__2I_ND",Input:"Login_Input__1qH-j"}},function(e,t,a){e.exports={Contact:"Contact_Contact__AG8JO",Form:"Contact_Form__13m6Q",Input:"Contact_Input__221aq",TextArea:"Contact_TextArea__YOfpJ"}},,,,,,,,,,,,function(e,t,a){e.exports={Loader:"Spinner_Loader__1kJV8",load2:"Spinner_load2__2J08P"}},function(e,t,a){e.exports={Modal:"Modal_Modal__2OoX4"}},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__3GkTv"}},function(e,t,a){e.exports={PhotoViewer:"PhotoViewer_PhotoViewer__2KwTg"}},,function(e,t,a){e.exports=a.p+"static/media/togaj_logo.2cf1493e.png"},function(e,t,a){e.exports={Logo:"Logo_Logo__14guc"}},function(e,t,a){e.exports=a.p+"static/media/togaj_logo_edited.8f901228.png"},function(e,t,a){e.exports={NavigationItems:"NavigationItems_NavigationItems__3RxZJ"}},function(e,t,a){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__2wHc9"}},,function(e,t,a){e.exports=a(94)},,,,,function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(23),l=a.n(r),c=(a(66),a(5)),i=a(4),u=(a(71),a(31)),s=a.n(u),m=function(e){return o.a.createElement("button",{disabled:e.disabled,className:[s.a.Button,s.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},d=(a(72),function(){return o.a.createElement("div",{className:"Landing"},o.a.createElement("img",{src:"https://images.unsplash.com/photo-1506241537529-eefea1fbe44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",alt:"alt"}),o.a.createElement("div",null,o.a.createElement("div",{className:"welcome-text"},"Welcome To Togaj Photography"),o.a.createElement("div",{className:"Button"},o.a.createElement("a",{href:"/gallery"},o.a.createElement(m,{btnType:"Danger"}," Gallery ")))))}),g=a(3),p=a(50),h=a.n(p),f=function(){return o.a.createElement("div",{className:h.a.Loader},"Loading...")},E=a(51),v=a.n(E),_=function(e){return o.a.createElement("div",null,e.children)},b=a(52),C=a.n(b),y=function(e){return e.show?o.a.createElement("div",{className:C.a.Backdrop,onClick:e.clicked}):null},O=function(e){return o.a.createElement(_,null,o.a.createElement(y,{show:e.show,clicked:e.modalClosed}),o.a.createElement("div",{className:v.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))},T=function(e,t){return function(a){var r=function(e){var t=Object(n.useState)(null),a=Object(g.a)(t,2),o=a[0],r=a[1],l=e.interceptors.request.use((function(e){return r(null),e})),c=e.interceptors.response.use((function(e){return e}),(function(e){r(e)}));Object(n.useEffect)((function(){return function(){e.interceptors.request.eject(l),e.interceptors.response.eject(c)}}),[e.interceptors.request,e.interceptors.response,l,c]);return[o,function(){r(null)}]}(t),l=Object(g.a)(r,2),c=l[0],i=l[1];return o.a.createElement(_,null,o.a.createElement(O,{show:c,modalClosed:i},c?c.message:null),o.a.createElement(e,a))}},S=a(8),A=a.n(S),D=a(19),I=a.n(D),N=function(e){return o.a.createElement("div",{className:I.a.Photo},o.a.createElement("img",{src:e.imageUrl,alt:"",className:I.a.Image}),o.a.createElement("button",{className:I.a.Button,onClick:function(){e.viewer(),e.click()}}," View Photo "),e.isAuth&&e.isAdmin&&e.isAuth===e.isAdmin?o.a.createElement("button",{className:I.a.Button,onClick:e.delete}," Delete Photo "):null)},j=a(32),w=a.n(j),k=a(53),P=a.n(k),L=function(e){return o.a.createElement(_,null,o.a.createElement("img",{src:e.imageUrl,alt:"",className:P.a.PhotoViewer}))},x=Object(i.b)((function(e){return{isAuthenticated:null!==e.auth.token,isAdmin:e.auth.isAdmin}}))((function(e){var t=Object(n.useState)(""),a=Object(g.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(""),u=Object(g.a)(i,2),s=u[0],m=u[1],d=Object(n.useState)(!1),p=Object(g.a)(d,2),h=p[0],E=p[1],v=function(e,t){l(e),m(t)},b=function(e){A.a.delete("http://localhost:3001/api/photos/".concat(e)).then((function(e){E(!0)})).catch((function(e){console.log(e),E(!1)}))},C=[];return e.pictures.forEach((function(t){e.sortCategory&&e.sortCategory===t.imageCategory?C.push(o.a.createElement(N,{key:t.id,imageUrl:t.photoUrl,category:t.imageCategory,viewer:e.view,isAuth:e.isAuthenticated,isAdmin:e.isAdmin,click:function(){return v(t.photoUrl,t.id)},delete:function(){return b(t.id)}})):e.sortCategory||C.push(o.a.createElement(N,{key:t.id,imageUrl:t.photoUrl,category:t.imageCategory,viewer:e.view,isAuth:e.isAuthenticated,isAdmin:e.isAdmin,click:function(){return v(t.photoUrl,t.id)},delete:function(){return b(t.id)}}))})),e.loading&&(C=o.a.createElement(f,null)),h&&(C=o.a.createElement(c.a,{to:"/photo"})),o.a.createElement(_,null,o.a.createElement("div",{className:w.a.Photos},o.a.createElement(O,{show:e.viewing,modalClosed:e.viewHandlerClosed},o.a.createElement(L,{imageUrl:r,imageID:s})),o.a.createElement("div",{className:w.a.Photo},C)))})),U=a(20),H=a.n(U),B=a(55),G=a.n(B),F=a(25),q=a.n(F),V=a(56),R=a.n(V),J=a(57),M=a.n(J),W=function(e){return o.a.createElement("div",{className:R.a.Logo,style:{height:e.height,width:e.width}},o.a.createElement("img",{src:M.a,alt:""}))},Y=a(58),Q=a.n(Y),z=a(14),K=a(35),X=a.n(K),Z=function(e){return o.a.createElement("li",{className:X.a.NavigationItem},o.a.createElement(z.b,{to:e.link,exact:e.exact,activeClassName:X.a.active},e.children))},$=function(e){return o.a.createElement("ul",{className:Q.a.NavigationItems},o.a.createElement(Z,{link:"/",exact:!0}," Home "),o.a.createElement(Z,{link:"/gallery"}," Gallery "),o.a.createElement(Z,{link:"/about"}," About "),o.a.createElement(Z,{link:"/contact"}," Contact "),e.isAuthenticated&&e.isAdminUser&&e.isAuthenticated===e.isAdminUser?o.a.createElement(Z,{link:"/photo"}," ADD+ "):null,e.isAuthenticated?o.a.createElement(Z,{link:"/logout"},"Logout"):o.a.createElement(Z,{link:"/login"},"Authenticate"))},ee=a(59),te=a.n(ee),ae=function(e){return o.a.createElement("div",{className:te.a.DrawerToggle,onClick:e.clicked},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))},ne=function(e){return o.a.createElement("header",{className:q.a.Toolbar},o.a.createElement(ae,{clicked:e.drawerToggleClicked}),o.a.createElement("div",{className:q.a.DesktopOnly},o.a.createElement(W,null)),o.a.createElement("nav",{className:q.a.DesktopOnly},o.a.createElement($,{isAuthenticated:e.isAuth,isAdminUser:e.isAdmin})))},oe=a(16),re=a.n(oe),le=function(e){var t=[re.a.SideDrawer,re.a.Close];return e.open&&(t=[re.a.SideDrawer,re.a.Open]),o.a.createElement(_,null,o.a.createElement(y,{show:e.open,clicked:e.closed}),o.a.createElement("div",{className:t.join(" ")},o.a.createElement("div",{className:re.a.Logo},o.a.createElement(W,null)),o.a.createElement("nav",null,o.a.createElement($,{isAuthenticated:e.isAuth}))))},ce=Object(i.b)((function(e){return{isAuthenticated:null!==e.auth.token,isAdmin:e.auth.isAdmin}}))((function(e){var t=Object(n.useState)(!1),a=Object(g.a)(t,2),r=a[0],l=a[1],c=o.a.createElement("header",{className:H.a.header2},o.a.createElement("span",{onClick:function(){return e.sort("Weddings")}},"Weddings"),o.a.createElement("span",{onClick:function(){return e.sort("Birthdays")}},"Birthdays"),o.a.createElement("span",{onClick:function(){return e.sort("Graduations")}},"Graduations"),o.a.createElement("span",{onClick:function(){return e.sort("Others")}},"Others"));return e.uploading&&(c=o.a.createElement("header",{className:H.a.header3},o.a.createElement("h4",null,e.header))),e.contact&&(c=o.a.createElement("header",{className:H.a.header3},o.a.createElement("h4",null,e.header))),o.a.createElement(_,null,o.a.createElement(ne,{isAuth:e.isAuthenticated,isAdmin:e.isAdmin,img:G.a,drawerToggleClicked:function(){l(!r)}}),o.a.createElement(le,{open:r,closed:function(){l(!1)},isAuth:e.isAuthenticated}),c,o.a.createElement("main",{className:H.a.Content},e.children))})),ie=a(36),ue=a.n(ie),se=a(15);Object(se.config)();var me=function(e,t,a){return{type:"AUTH_SUCCESS",idToken:e,userId:t,isAdmin:a}},de=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationTime"),localStorage.removeItem("userId"),localStorage.removeItem("isAdmin"),{type:"AUTH_LOGOUT"}},ge=function(e){return function(t){setTimeout((function(){t(de())}),1e3*e)}};Object(se.config)();Object(se.config)();var pe=Object(i.b)((function(e){return{pictures:e.photo.pictures,loading:e.photo.loading}}),(function(e){return{onFetch:function(){return e((function(e){e({type:"FETCH_START"}),console.log("http://localhost:3001/api/"),A.a.get("".concat("http://localhost:3001/api/","photos")).then((function(t){var a=[];t.data.forEach((function(e){a.push({id:e._id,photoUrl:e.photoUrl,imageCategory:e.imageCategory})})),e({type:"FETCH_SUCCESS",pictures:a})})).catch((function(t){e({type:"FETCH_FAIL",error:t})}))}))}}}))(T((function(e){var t=Object(n.useState)(!1),a=Object(g.a)(t,2),r=a[0],l=a[1],c=e.pictures,i=e.loading,u=e.onFetch,s=Object(n.useState)(""),m=Object(g.a)(s,2),d=m[0],p=m[1];Object(n.useEffect)((function(){u()}),[u]);var h=o.a.createElement(f,null);c&&(h=o.a.createElement(x,{pictures:c,sortCategory:d,view:function(){l(!0)},loading:i,viewing:r,viewHandlerClosed:function(){l(!1)}}));return o.a.createElement("div",{className:ue.a.Gallery},o.a.createElement(ce,{sort:function(e){p(e)}},o.a.createElement("div",{className:ue.a.PhotoDiv},h)))}),A.a)),he=a(26),fe=a.n(he),Ee=Object(i.b)((function(e){return{filePath:e.photo.filePath,imageCategory:e.photo.imageCategory,loading:e.photo.loading,submitted:e.photo.submitted,token:e.auth.token}}),(function(e){return{onPost:function(t,a){return e(function(e,t){return function(a){a({type:"POST_PHOTO_START"}),A.a.post("".concat("http://localhost:3001/api/","photos"),e,{headers:{"Content-type":"multi-part/form-data",Authorization:"Bearer ".concat(t)}}).then((function(e){var t=e.data,n=t.filePath,o=t.imageCategory;a(function(e,t){return{type:"POST_PHOTO_SUCCESS",filePath:e,imageCategory:t}}(n,o))})).catch((function(e){a(function(e){return{type:"POST_PHOTO_FAIL",error:e}}(e))}))}}(t,a))}}}))((function(e){var t=Object(n.useState)(""),a=Object(g.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(""),u=Object(g.a)(i,2),s=u[0],d=u[1],p=Object(n.useState)("Choose File"),h=Object(g.a)(p,2),E=h[0],v=h[1],_=Object(n.useState)(),b=Object(g.a)(_,2),C=b[0],y=b[1],O=function(e){var t=new FileReader;t.readAsDataURL(e),t.onloadend=function(){y(t.result)}},T=null;return e.loading&&(T=o.a.createElement(f,null)),e.submitted&&(T=o.a.createElement(c.a,{to:"/gallery"})),o.a.createElement("div",{className:fe.a.Gallery},o.a.createElement(ce,{uploading:!0,header:"UPLOAD A PHOTOGRAPH"},o.a.createElement("div",{className:fe.a.ContactData},o.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a=new FormData;a.append("file",r),a.append("imageCategory",s),e.onPost(a,e.token)}},o.a.createElement("div",{className:"custom-file mb-4"},o.a.createElement("input",{required:!0,type:"file",className:"custom-file-input",id:"customFile",onChange:function(e){var t=e.target.files[0];l(e.target.files[0]),v(e.target.files[0].name),O(t)}}),o.a.createElement("label",{className:"custom-file-label",htmlFor:"customFile"},E),o.a.createElement("div",{className:fe.a.DropDown},o.a.createElement("select",{id:"inputState",className:"form-control",onChange:function(e){d(e.target.value)}},o.a.createElement("option",null,"Select Category..."),o.a.createElement("option",null,"Weddings"),o.a.createElement("option",null,"Birthdays"),o.a.createElement("option",null,"Graduations"),o.a.createElement("option",null,"Others")))),o.a.createElement(m,{btnType:"Danger"},"SUBMIT")))),C&&o.a.createElement("img",{src:C,alt:"chosen",style:{height:"300px"}}),T)})),ve=a(12),_e=a(37),be=a.n(_e),Ce=a(21),ye=a.n(Ce),Oe=function(e){var t=null,a=[ye.a.InputElement];switch(e.inValid&&e.shouldValidate&&e.touched&&a.push(ye.a.Invalid),e.elementType){case"input":case"file":case"password":t=o.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=o.a.createElement("textarea",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=o.a.createElement("select",{className:a.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return o.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=o.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return o.a.createElement("div",{className:ye.a.Input},o.a.createElement("label",{className:ye.a.Label},e.label),t)},Te=Object(i.b)((function(e){return{loading:e.auth.loading,submitted:e.auth.submitted,error:e.auth.error}}),(function(e){return{onAuth:function(t,a,n,o){return e(function(e,t,a,n){return function(o){o({type:"AUTH_START"});var r={email:e,password:t,adminCode:a},l="".concat("http://localhost:3001/api/","auth/signup");return n||(l="".concat("http://localhost:3001/api/","auth/login")),A.a.post(l,r).then((function(e){try{var t=new Date((new Date).getTime()+36e5);localStorage.setItem("token",e.data.token),localStorage.setItem("expirationTime",t),localStorage.setItem("userId",e.data.userId),localStorage.setItem("isAdmin",e.data.isAdmin),o(me(e.data.token,e.data.userId,e.data.isAdmin)),o(ge(3600))}catch(a){console.log(e),console.log(a),console.log("I got here!"+a.error)}})).catch((function(e){console.log(e),o(function(e){return{type:"AUTH_FAIL",error:e}}(e))}))}}(t,a,n,o))}}}))(T((function(e){var t=Object(n.useState)({adminData:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Input your Email"},value:"",validation:{required:!0},valid:!1,touched:!1},password:{elementType:"password",elementConfig:{type:"password",placeholder:"Input your Password"},value:"",validation:{required:!0,minLength:6,maxLength:16},valid:!1,touched:!1},adminCode:{elementType:"password",elementConfig:{type:"password",placeholder:"Admin Passcode"},value:"",validation:{required:!0,minLength:4,maxLength:6},valid:!1,touched:!1}}}),a=Object(g.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(!1),u=Object(g.a)(i,2),s=u[0],d=u[1],p=Object(n.useState)(!0),h=Object(g.a)(p,2),E=h[0],v=h[1],_=null,b=null;e.loading&&(_=o.a.createElement(f,null)),e.submitted&&(_=o.a.createElement(c.a,{to:"/gallery"})),e.error&&(b=o.a.createElement("p",null,e.error));var C=[];for(var y in r.adminData)C.push({id:y,config:r.adminData[y]});return o.a.createElement("div",{className:be.a.Gallery},o.a.createElement(ce,{uploading:!0,header:"LOGIN"},o.a.createElement("div",{className:be.a.ContactData},b,o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.onAuth(r.adminData.email.value,r.adminData.password.value,r.adminData.adminCode.value,E)}},C.map((function(e){return o.a.createElement(Oe,{key:e.id,elementType:e.config.elementType,elementConfig:e.config.elementConfig,value:e.config.value,inValid:!e.config.valid,shouldValidate:e.config.validation,touched:e.config.touched,changed:function(t){return function(e,t){var a=Object(ve.a)({},r.adminData),n=Object(ve.a)({},a[t]);n.value=e.target.value,n.valid=function(e,t){var a=!0;return t.required&&(a=""!==e.trim()&&a),t.minLength&&(a=e.length>=t.minLength&&a),t.maxLength&&(a=e.length<=t.maxLength&&a),a}(n.value,n.validation),n.touched=!0,a[t]=n;for(var o in a)o=a[o].valid&&!0;l({adminData:a}),d(!0)}(t,e.id)}})})),o.a.createElement(m,{btnType:"Success",disabled:!s},"SUBMIT")),o.a.createElement(m,{clicked:function(){v(!E)},btnType:"Danger"},"SWITCH TO ",E?"SIGNIN":"SIGNUP"))),_)}),A.a)),Se=Object(i.b)(null,(function(e){return{onLogout:function(){return e(de())}}}))((function(e){return Object(n.useEffect)((function(){e.onLogout()}),[e]),o.a.createElement(c.a,{to:"/"})})),Ae=a(38),De=a.n(Ae),Ie=a(27),Ne=a(28),je=Object(i.b)((function(e){return{userId:e.contact.userId,loading:e.contact.loading,submitted:e.contact.submitted}}),(function(e){return{onContact:function(t){return e((a=t,function(e){e({type:"CONTACT_START"}),A.a.post("".concat("http://localhost:3001/api/","contact"),a).then((function(t){console.log(t),e({type:"CONTACT_SUCCESS",userId:t.data.messageId})})).catch((function(t){console.log(t),e({type:"FETCH_FAIL",error:t})}))}));var a}}}))((function(e){var t=Object(n.useState)({contactData:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},phoneNumber:{elementType:"input",elementConfig:{type:"tel",placeholder:"Your Phone Number"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your Email"},value:"",validation:{required:!0},valid:!1,touched:!1},message:{elementType:"textarea",elementConfig:{type:"password",placeholder:"Your Message"},value:"",validation:{required:!0},valid:!1,touched:!1}}}),a=Object(g.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(!1),u=Object(g.a)(i,2),s=u[0],d=u[1],p=null,h=null;e.loading&&(p=o.a.createElement(f,null)),e.submitted&&(h="Your message with Id of ".concat(e.userId," has been submitted successfully"),p=o.a.createElement(c.a,{to:"/gallery"}));var E=[];for(var v in r.contactData)E.push({id:v,config:r.contactData[v]});return o.a.createElement(_,null,o.a.createElement(ce,{contact:!0,header:"Please Contact Us"},o.a.createElement("div",{className:De.a.Contact},o.a.createElement("div",null,o.a.createElement("p",null,"Ogun, Nigeria")),o.a.createElement("div",null,o.a.createElement(Ie.a,{icon:Ne.c})," (+234) 80 998 239 86 ",o.a.createElement("br",null),o.a.createElement(Ie.a,{icon:Ne.b})," Togajphotography21@gmail.com ",o.a.createElement("br",null),o.a.createElement(Ie.a,{icon:Ne.a}),"  Always Open"),o.a.createElement("div",{className:De.a.Form},h,o.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a={name:r.contactData.name.value,phoneNumber:r.contactData.phoneNumber.value,email:r.contactData.email.value,message:r.contactData.message.value};e.onContact(a)}},E.map((function(e){return o.a.createElement(Oe,{key:e.id,elementType:e.config.elementType,elementConfig:e.config.elementConfig,value:e.config.value,inValid:!e.config.valid,shouldValidate:e.config.validation,touched:e.config.touched,changed:function(t){return function(e,t){var a=Object(ve.a)({},r.contactData),n=Object(ve.a)({},a[t]);n.value=e.target.value,n.valid=function(e,t){var a=!0;return t.required&&(a=""!==e.trim()&&a),t.minLength&&(a=e.length>=t.minLength&&a),t.maxLength&&(a=e.length<=t.maxLength&&a),a}(n.value,n.validation),n.touched=!0,a[t]=n;for(var o in a)o=a[o].valid&&!0;l({contactData:a}),d(!0)}(t,e.id)}})})),o.a.createElement(m,{btnType:"Success",disabled:!s},"Contact US")),p))))})),we=Object(c.g)(Object(i.b)((function(e){return{isAuthenticated:null!==e.auth.token}}),(function(e){return{onTryAutoSignUp:function(){return e((function(e){var t=localStorage.getItem("token"),a=localStorage.getItem("isAdmin");if(t){var n=new Date(localStorage.getItem("expirationTime"));if(n<new Date)e(de());else{var o=localStorage.getItem("userId");e(me(t,o,a)),e(ge((n.getTime()-(new Date).getTime())/1e3))}}else e(de())}))}}}))((function(e){Object(n.useEffect)((function(){e.onTryAutoSignUp()}));var t=o.a.createElement(c.d,null,o.a.createElement(c.b,{path:"/gallery",component:pe}),o.a.createElement(c.b,{path:"/login",component:Te}),o.a.createElement(c.b,{path:"/logout",component:Se}),o.a.createElement(c.b,{path:"/contact",component:je}),o.a.createElement(c.b,{path:"/",exact:!0,component:d}),o.a.createElement(c.a,{to:"/"}));return e.isAuthenticated&&(t=o.a.createElement(c.d,null,o.a.createElement(c.b,{path:"/gallery",component:pe}),o.a.createElement(c.b,{path:"/login",component:Te}),o.a.createElement(c.b,{path:"/photo",component:Ee}),o.a.createElement(c.b,{path:"/contact",component:je}),o.a.createElement(c.b,{path:"/logout",component:Se}),o.a.createElement(c.b,{path:"/",exact:!0,component:d}),o.a.createElement(c.a,{to:"/"}))),o.a.createElement("div",{className:"App"},t)}))),ke=a(13),Pe=function(e,t){return Object(ve.a)({},e,{},t)},Le={pictures:null,filePath:null,imageCategory:null,error:null,loading:null,submitted:!1,filename:null,filepath:null},xe=function(e,t){return Pe(e,{loading:!0,submitted:!1})},Ue=function(e,t){return Pe(e,{pictures:t.pictures,loading:!1})},He=function(e,t){return Pe(e,{error:t.error,loading:!1})},Be=function(e,t){return Pe(e,{loading:!0,submitted:!1})},Ge=function(e,t){return Pe(e,{loading:!1,submitted:!0,filePath:t.filePath,imageCategory:t.imageCategory})},Fe=function(e,t){return Pe(e,{error:t.error,loading:!1,submitted:!1})},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_START":return xe(e);case"FETCH_SUCCESS":return Ue(e,t);case"FETCH_FAIL":return He(e,t);case"POST_PHOTO_START":return Be(e);case"POST_PHOTO_SUCCESS":return Ge(e,t);case"POST_PHOTO_FAIL":return Fe(e,t);default:return e}},Ve={token:null,userId:null,isAdmin:null,error:null,loading:null,submitted:null},Re=function(e,t){return Pe(e,{error:!1,loading:!0,submitted:!1})},Je=function(e,t){return Pe(e,{token:t.idToken,userId:t.userId,isAdmin:"true"===t.isAdmin,error:null,loading:!1,submitted:!0})},Me=function(e,t){return Pe(e,{error:t.error,loading:!1,submitted:!1})},We=function(e,t){return Pe(e,{token:null,userId:null,submitted:!1})},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return Re(e);case"AUTH_SUCCESS":return Je(e,t);case"AUTH_FAIL":return Me(e,t);case"AUTH_LOGOUT":return We(e);default:return e}},Qe={userId:null,error:null,loading:null,submitted:null},ze=function(e,t){return Pe(e,{error:!1,loading:!0,submitted:!1})},Ke=function(e,t){return Pe(e,{userId:t.userId,error:null,loading:!1,submitted:!0})},Xe=function(e,t){return Pe(e,{error:t.error,loading:!1,submitted:!1})},Ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONTACT_START":return ze(e);case"CONTACT_SUCCESS":return Ke(e,t);case"CONTACT_FAIL":return Xe(e,t);default:return e}},$e=a(60),et=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ke.d,tt=Object(ke.c)({photo:qe,auth:Ye,contact:Ze}),at=Object(ke.e)(tt,et(Object(ke.a)($e.a))),nt=o.a.createElement(i.a,{store:at},o.a.createElement(z.a,null,o.a.createElement(we,null)));l.a.render(o.a.createElement(o.a.StrictMode,null,nt),document.getElementById("root"))}],[[61,1,2]]]);
//# sourceMappingURL=main.ab58b36b.chunk.js.map