(this["webpackJsonptogaj-photography"]=this["webpackJsonptogaj-photography"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports={Footer:"Footer_Footer__1ic8w",Togaj:"Footer_Togaj__z5ik7",TextSide:"Footer_TextSide__1fDSr",Socials:"Footer_Socials__1SFph",Logos:"Footer_Logos__15giI",Linkedin:"Footer_Linkedin__2W08U"}},,,function(e,t,a){e.exports={SideDrawer:"SideDrawer_SideDrawer__1jl-N",Open:"SideDrawer_Open__3dTbu",Close:"SideDrawer_Close__2cxGr",Logo:"SideDrawer_Logo__3pNKY"}},,,function(e,t,a){e.exports={Photo:"Photo_Photo__3BLrc",Image:"Photo_Image__3pFeH",Button:"Photo_Button__fU1os"}},function(e,t,a){e.exports={Content:"Layout_Content__Ha9AW",header2:"Layout_header2__2T10l",header3:"Layout_header3__eYLed"}},function(e,t,a){e.exports={Input:"input_Input__3ER8c",Label:"input_Label__1GFw7",InputElement:"input_InputElement__2GhBW",Invalid:"input_Invalid__2Q9yQ"}},,,function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__21wBV",DesktopOnly:"Toolbar_DesktopOnly__3KQzU"}},function(e,t,a){e.exports={Gallery:"PhotoData_Gallery__vGcCk",ContactData:"PhotoData_ContactData__3G3Db",DropDown:"PhotoData_DropDown__1oVpo"}},,,,,function(e,t,a){e.exports={Button:"Button_Button__1ozcB",enable:"Button_enable__1JP30",Success:"Button_Success__3RnRB",Danger:"Button_Danger__10DWP"}},function(e,t,a){e.exports={Photos:"Photos_Photos__4Wqgr",Photo:"Photos_Photo__1oQoL"}},,,function(e,t,a){e.exports={Logo:"Logo_Logo__14guc",LogoSide:"Logo_LogoSide__1ybGs"}},function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem__1ZDqJ",active:"NavigationItem_active__3e2Jy"}},function(e,t,a){e.exports={Gallery:"Gallery_Gallery__1saKQ",PhotoDiv:"Gallery_PhotoDiv__3bzoV"}},function(e,t,a){e.exports={Gallery:"Login_Gallery__3Mi5N",ContactData:"Login_ContactData__2I_ND",Input:"Login_Input__1qH-j"}},function(e,t,a){e.exports={Contact:"Contact_Contact__AG8JO",Form:"Contact_Form__13m6Q",Input:"Contact_Input__221aq",TextArea:"Contact_TextArea__YOfpJ"}},,,,,,,,,,,,,function(e,t,a){e.exports={Loader:"Spinner_Loader__1kJV8",load2:"Spinner_load2__2J08P"}},function(e,t,a){e.exports={Modal:"Modal_Modal__2OoX4"}},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__3GkTv"}},function(e,t,a){e.exports={PhotoViewer:"PhotoViewer_PhotoViewer__2KwTg"}},,function(e,t,a){e.exports=a.p+"static/media/togaj.015596a0.png"},function(e,t,a){e.exports=a.p+"static/media/togaj.015596a0.png"},function(e,t,a){e.exports=a.p+"static/media/togaj_d.f55f4f06.png"},function(e,t,a){e.exports={NavigationItems:"NavigationItems_NavigationItems__3RxZJ"}},function(e,t,a){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__2wHc9"}},function(e,t,a){e.exports=a.p+"static/media/togaj_w.19c367fa.png"},,function(e,t,a){e.exports=a(94)},,,,,function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(22),l=a.n(r),i=(a(68),a(5)),c=a(4),u=(a(73),a(30)),s=a.n(u),m=function(e){return o.a.createElement("button",{disabled:e.disabled,className:[s.a.Button,s.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},d=(a(74),function(){return o.a.createElement("div",{className:"Landing"},o.a.createElement("img",{src:"https://images.unsplash.com/photo-1506241537529-eefea1fbe44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",alt:"alt"}),o.a.createElement("div",null,o.a.createElement("div",{className:"welcome-text"},"Welcome To Togaj Photography"),o.a.createElement("div",{className:"Button"},o.a.createElement("a",{href:"/gallery"},o.a.createElement(m,{btnType:"Danger"}," Gallery ")))))}),g=a(3),p=a(51),h=a.n(p),f=function(){return o.a.createElement("div",{className:h.a.Loader},"Loading...")},E=a(52),_=a.n(E),v=function(e){return o.a.createElement("div",null,e.children)},b=a(53),y=a.n(b),C=function(e){return e.show?o.a.createElement("div",{className:y.a.Backdrop,onClick:e.clicked}):null},T=function(e){return o.a.createElement(v,null,o.a.createElement(C,{show:e.show,clicked:e.modalClosed}),o.a.createElement("div",{className:_.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))},O=function(e,t){return function(a){var r=function(e){var t=Object(n.useState)(null),a=Object(g.a)(t,2),o=a[0],r=a[1],l=e.interceptors.request.use((function(e){return r(null),e})),i=e.interceptors.response.use((function(e){return e}),(function(e){r(e)}));Object(n.useEffect)((function(){return function(){e.interceptors.request.eject(l),e.interceptors.response.eject(i)}}),[e.interceptors.request,e.interceptors.response,l,i]);return[o,function(){r(null)}]}(t),l=Object(g.a)(r,2),i=l[0],c=l[1];return o.a.createElement(v,null,o.a.createElement(T,{show:i,modalClosed:c},i?i.message:null),o.a.createElement(e,a))}},S=a(8),A=a.n(S),N=a(19),k=a.n(N),w=function(e){return o.a.createElement("div",{className:k.a.Photo},o.a.createElement("img",{src:e.imageUrl,alt:"",className:k.a.Image}),o.a.createElement("button",{className:k.a.Button,onClick:function(){e.viewer(),e.click()}}," Enlarge Photo "),e.isAuth&&e.isAdmin&&e.isAuth===e.isAdmin?o.a.createElement("button",{className:k.a.Button,onClick:e.delete}," Delete Photo "):null)},j=a(31),D=a.n(j),I=a(54),L=a.n(I),P=function(e){return o.a.createElement(v,null,o.a.createElement("img",{src:e.imageUrl,alt:"",className:L.a.PhotoViewer}))},x=Object(c.b)((function(e){return{isAuthenticated:null!==e.auth.token,isAdmin:e.auth.isAdmin}}))((function(e){var t=Object(n.useState)(""),a=Object(g.a)(t,2),r=a[0],l=a[1],c=Object(n.useState)(""),u=Object(g.a)(c,2),s=u[0],m=u[1],d=Object(n.useState)(!1),p=Object(g.a)(d,2),h=p[0],E=p[1],_=function(e,t){l(e),m(t)},b=function(e){A.a.delete("http://localhost:3001/api/photos/".concat(e)).then((function(e){E(!0)})).catch((function(e){console.log(e),E(!1)}))},y=[];return e.pictures.forEach((function(t){e.sortCategory&&e.sortCategory===t.imageCategory?y.push(o.a.createElement(w,{key:t.id,imageUrl:t.photoUrl,category:t.imageCategory,viewer:e.view,isAuth:e.isAuthenticated,isAdmin:e.isAdmin,click:function(){return _(t.photoUrl,t.id)},delete:function(){return b(t.id)}})):e.sortCategory||y.push(o.a.createElement(w,{key:t.id,imageUrl:t.photoUrl,category:t.imageCategory,viewer:e.view,isAuth:e.isAuthenticated,isAdmin:e.isAdmin,click:function(){return _(t.photoUrl,t.id)},delete:function(){return b(t.id)}}))})),e.loading&&(y=o.a.createElement(f,null)),h&&(y=o.a.createElement(i.a,{to:"/photo"})),o.a.createElement(v,null,o.a.createElement("div",{className:D.a.Photos},o.a.createElement(T,{show:e.viewing,modalClosed:e.viewHandlerClosed},o.a.createElement(P,{imageUrl:r,imageID:s})),o.a.createElement("div",{className:D.a.Photo},y)))})),U=a(20),F=a.n(U),H=a(56),G=a.n(H),B=a(24),q=a.n(B),R=a(34),V=a.n(R),J=a(57),W=a.n(J),M=a(58),Y=a.n(M),Q=function(e){var t="sidebar"===e.locate?Y.a:W.a,a="sidebar"===e.locate?V.a.LogoSide:V.a.Logo;return o.a.createElement("div",{className:a,style:{height:e.height,width:e.width}},o.a.createElement("img",{src:t,alt:""}))},z=a(59),K=a.n(z),X=a(15),Z=a(35),$=a.n(Z),ee=function(e){return o.a.createElement("li",{className:$.a.NavigationItem},o.a.createElement(X.b,{to:e.link,exact:e.exact,activeClassName:$.a.active},e.children))},te=function(e){return o.a.createElement("ul",{className:K.a.NavigationItems},o.a.createElement(ee,{link:"/",exact:!0}," Home "),o.a.createElement(ee,{link:"/gallery"}," Gallery "),o.a.createElement(ee,{link:"/about"}," About "),o.a.createElement(ee,{link:"/contact"}," Contact "),e.isAuthenticated&&e.isAdminUser&&e.isAuthenticated===e.isAdminUser?o.a.createElement(ee,{link:"/photo"}," ADD+ "):null,e.isAuthenticated?o.a.createElement(ee,{link:"/logout"},"Logout"):o.a.createElement(ee,{link:"/login"},"Authenticate"))},ae=a(60),ne=a.n(ae),oe=function(e){return o.a.createElement("div",{className:ne.a.DrawerToggle,onClick:e.clicked},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))},re=function(e){return o.a.createElement("header",{className:q.a.Toolbar},o.a.createElement(oe,{clicked:e.drawerToggleClicked}),o.a.createElement("div",{className:q.a.DesktopOnly},o.a.createElement(Q,null)),o.a.createElement("nav",{className:q.a.DesktopOnly},o.a.createElement(te,{isAuthenticated:e.isAuth,isAdminUser:e.isAdmin})))},le=a(16),ie=a.n(le),ce=function(e){var t=[ie.a.SideDrawer,ie.a.Close];return e.open&&(t=[ie.a.SideDrawer,ie.a.Open]),o.a.createElement(v,null,o.a.createElement(C,{show:e.open,clicked:e.closed}),o.a.createElement("div",{className:t.join(" ")},o.a.createElement("div",{className:ie.a.Logo},o.a.createElement(Q,{locate:"sidebar"})),o.a.createElement("nav",null,o.a.createElement(te,{isAuthenticated:e.isAuth}))))},ue=a(61),se=a.n(ue),me=a(13),de=a.n(me),ge=function(){return o.a.createElement("footer",null,o.a.createElement("div",null,o.a.createElement("div",{className:de.a.Footer},o.a.createElement("div",{className:de.a.TextSide},o.a.createElement("h6",null,o.a.createElement("b",null,"TOGAJ PHOTOGRAPHY")),o.a.createElement("p",null,"View sample pictures from my recent contracts. We are sure to provide professional coverage, no matter the event and location. Give us a ring.")),o.a.createElement("div",null,o.a.createElement("img",{src:se.a,className:de.a.Togaj,alt:"togajlogo",id:"myLogoFooter"})),o.a.createElement("div",{className:de.a.Socials},o.a.createElement("span",null,o.a.createElement("a",{href:"https://web.facebook.com/shegs.emma/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{className:de.a.Logos,src:"https://cdn.svgporn.com/logos/facebook.svg",alt:"facebook_logo"})),o.a.createElement("a",{href:"https://www.linkedin.com/in/emmanuel-oderemi-6bb497170/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{className:de.a.Linkedin,src:"https://cdn.svgporn.com/logos/linkedin.svg",alt:"linkedin_logo"})),o.a.createElement("a",{href:"https://twitter.com/mightymilan04",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:"https://cdn.svgporn.com/logos/twitter.svg",className:de.a.Logos,alt:"twitter_logo"})))))))},pe=Object(c.b)((function(e){return{isAuthenticated:null!==e.auth.token,isAdmin:e.auth.isAdmin}}))((function(e){var t=Object(n.useState)(!1),a=Object(g.a)(t,2),r=a[0],l=a[1],i=o.a.createElement("header",{className:F.a.header2},o.a.createElement("span",{onClick:function(){return e.sort("Weddings")}},"Weddings"),o.a.createElement("span",{onClick:function(){return e.sort("Birthdays")}},"Birthdays"),o.a.createElement("span",{onClick:function(){return e.sort("Graduations")}},"Graduations"),o.a.createElement("span",{onClick:function(){return e.sort("Others")}},"Others"));return e.uploading&&(i=o.a.createElement("header",{className:F.a.header3},o.a.createElement("h4",null,e.header))),e.contact&&(i=o.a.createElement("header",{className:F.a.header3},o.a.createElement("h4",null,e.header))),o.a.createElement(v,null,o.a.createElement(re,{isAuth:e.isAuthenticated,isAdmin:e.isAdmin,img:G.a,drawerToggleClicked:function(){l(!r)}}),o.a.createElement(ce,{open:r,closed:function(){l(!1)},isAuth:e.isAuthenticated}),i,o.a.createElement("main",{className:F.a.Content},e.children),o.a.createElement(ge,null))})),he=a(36),fe=a.n(he),Ee=function(e,t,a){return{type:"AUTH_SUCCESS",idToken:e,userId:t,isAdmin:a}},_e=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationTime"),localStorage.removeItem("userId"),localStorage.removeItem("isAdmin"),{type:"AUTH_LOGOUT"}},ve=function(e){return function(t){setTimeout((function(){t(_e())}),1e3*e)}},be=Object(c.b)((function(e){return{pictures:e.photo.pictures,loading:e.photo.loading}}),(function(e){return{onFetch:function(){return e((function(e){e({type:"FETCH_START"}),A.a.get("https://enigmatic-eyrie-76099.herokuapp.com/api/photos").then((function(t){var a=[];t.data.forEach((function(e){a.push({id:e._id,photoUrl:e.photoUrl,imageCategory:e.imageCategory})})),e({type:"FETCH_SUCCESS",pictures:a})})).catch((function(t){e({type:"FETCH_FAIL",error:t})}))}))}}}))(O((function(e){var t=Object(n.useState)(!1),a=Object(g.a)(t,2),r=a[0],l=a[1],i=e.pictures,c=e.loading,u=e.onFetch,s=Object(n.useState)(""),m=Object(g.a)(s,2),d=m[0],p=m[1];Object(n.useEffect)((function(){u()}),[u]);var h=o.a.createElement(f,null);i&&(h=o.a.createElement(x,{pictures:i,sortCategory:d,view:function(){l(!0)},loading:c,viewing:r,viewHandlerClosed:function(){l(!1)}}));return o.a.createElement("div",{className:fe.a.Gallery},o.a.createElement(pe,{sort:function(e){p(e)}},o.a.createElement("div",{className:fe.a.PhotoDiv},h)))}),A.a)),ye=a(25),Ce=a.n(ye),Te=Object(c.b)((function(e){return{filePath:e.photo.filePath,imageCategory:e.photo.imageCategory,loading:e.photo.loading,submitted:e.photo.submitted,token:e.auth.token}}),(function(e){return{onPost:function(t,a){return e(function(e,t){return function(a){a({type:"POST_PHOTO_START"}),A.a.post("https://enigmatic-eyrie-76099.herokuapp.com/api/photos",e,{headers:{"Content-type":"multi-part/form-data",Authorization:"Bearer ".concat(t)}}).then((function(e){var t=e.data,n=t.filePath,o=t.imageCategory;a(function(e,t){return{type:"POST_PHOTO_SUCCESS",filePath:e,imageCategory:t}}(n,o))})).catch((function(e){a(function(e){return{type:"POST_PHOTO_FAIL",error:e}}(e))}))}}(t,a))}}}))((function(e){var t=Object(n.useState)(""),a=Object(g.a)(t,2),r=a[0],l=a[1],c=Object(n.useState)(""),u=Object(g.a)(c,2),s=u[0],d=u[1],p=Object(n.useState)("Choose File"),h=Object(g.a)(p,2),E=h[0],_=h[1],v=Object(n.useState)(),b=Object(g.a)(v,2),y=b[0],C=b[1],T=function(e){var t=new FileReader;t.readAsDataURL(e),t.onloadend=function(){C(t.result)}},O=null;return e.loading&&(O=o.a.createElement(f,null)),e.submitted&&(O=o.a.createElement(i.a,{to:"/gallery"})),o.a.createElement("div",{className:Ce.a.Gallery},o.a.createElement(pe,{uploading:!0,header:"UPLOAD A PHOTOGRAPH"},o.a.createElement("div",{className:Ce.a.ContactData},o.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a=new FormData;a.append("file",r),a.append("imageCategory",s),e.onPost(a,e.token)}},o.a.createElement("div",{className:"custom-file mb-4"},o.a.createElement("input",{required:!0,type:"file",className:"custom-file-input",id:"customFile",onChange:function(e){var t=e.target.files[0];l(e.target.files[0]),_(e.target.files[0].name),T(t)}}),o.a.createElement("label",{className:"custom-file-label",htmlFor:"customFile"},E),o.a.createElement("div",{className:Ce.a.DropDown},o.a.createElement("select",{id:"inputState",className:"form-control",onChange:function(e){d(e.target.value)}},o.a.createElement("option",null,"Select Category..."),o.a.createElement("option",null,"Weddings"),o.a.createElement("option",null,"Birthdays"),o.a.createElement("option",null,"Graduations"),o.a.createElement("option",null,"Others")))),o.a.createElement(m,{btnType:"Danger"},"SUBMIT")))),y&&o.a.createElement("img",{src:y,alt:"chosen",style:{height:"300px"}}),O)})),Oe=a(12),Se=a(37),Ae=a.n(Se),Ne=a(21),ke=a.n(Ne),we=function(e){var t=null,a=[ke.a.InputElement];switch(e.inValid&&e.shouldValidate&&e.touched&&a.push(ke.a.Invalid),e.elementType){case"input":case"file":case"password":t=o.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=o.a.createElement("textarea",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=o.a.createElement("select",{className:a.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return o.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=o.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return o.a.createElement("div",{className:ke.a.Input},o.a.createElement("label",{className:ke.a.Label},e.label),t)},je=Object(c.b)((function(e){return{loading:e.auth.loading,submitted:e.auth.submitted,error:e.auth.error}}),(function(e){return{onAuth:function(t,a,n,o){return e(function(e,t,a,n){return function(o){o({type:"AUTH_START"});var r={email:e,password:t,adminCode:a},l="https://enigmatic-eyrie-76099.herokuapp.com/api/auth/signup";return n||(l="https://enigmatic-eyrie-76099.herokuapp.com/api/auth/login"),A.a.post(l,r).then((function(e){try{var t=new Date((new Date).getTime()+36e5);localStorage.setItem("token",e.data.token),localStorage.setItem("expirationTime",t),localStorage.setItem("userId",e.data.userId),localStorage.setItem("isAdmin",e.data.isAdmin),o(Ee(e.data.token,e.data.userId,e.data.isAdmin)),o(ve(3600))}catch(a){console.log(a)}})).catch((function(e){console.log(e),o(function(e){return{type:"AUTH_FAIL",error:e}}(e))}))}}(t,a,n,o))}}}))(O((function(e){var t=Object(n.useState)({adminData:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Input your Email"},value:"",validation:{required:!0},valid:!1,touched:!1},password:{elementType:"password",elementConfig:{type:"password",placeholder:"Input your Password"},value:"",validation:{required:!0,minLength:6,maxLength:16},valid:!1,touched:!1},adminCode:{elementType:"password",elementConfig:{type:"password",placeholder:"Admin Passcode"},value:"",validation:{required:!0,minLength:4,maxLength:6},valid:!1,touched:!1}}}),a=Object(g.a)(t,2),r=a[0],l=a[1],c=Object(n.useState)(!1),u=Object(g.a)(c,2),s=u[0],d=u[1],p=Object(n.useState)(!0),h=Object(g.a)(p,2),E=h[0],_=h[1],v=null,b=null;e.loading&&(v=o.a.createElement(f,null)),e.submitted&&(v=o.a.createElement(i.a,{to:"/gallery"})),e.error&&(b=o.a.createElement("p",null,e.error));var y=[];for(var C in r.adminData)y.push({id:C,config:r.adminData[C]});return o.a.createElement("div",{className:Ae.a.Gallery},o.a.createElement(pe,{uploading:!0,header:"LOGIN"},o.a.createElement("div",{className:Ae.a.ContactData},b,o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.onAuth(r.adminData.email.value,r.adminData.password.value,r.adminData.adminCode.value,E)}},y.map((function(e){return o.a.createElement(we,{key:e.id,elementType:e.config.elementType,elementConfig:e.config.elementConfig,value:e.config.value,inValid:!e.config.valid,shouldValidate:e.config.validation,touched:e.config.touched,changed:function(t){return function(e,t){var a=Object(Oe.a)({},r.adminData),n=Object(Oe.a)({},a[t]);n.value=e.target.value,n.valid=function(e,t){var a=!0;return t.required&&(a=""!==e.trim()&&a),t.minLength&&(a=e.length>=t.minLength&&a),t.maxLength&&(a=e.length<=t.maxLength&&a),a}(n.value,n.validation),n.touched=!0,a[t]=n;for(var o in a)o=a[o].valid&&!0;l({adminData:a}),d(!0)}(t,e.id)}})})),o.a.createElement(m,{btnType:"Success",disabled:!s},"SUBMIT")),o.a.createElement(m,{clicked:function(){_(!E)},btnType:"Danger"},"SWITCH TO ",E?"SIGNIN":"SIGNUP"))),v)}),A.a)),De=Object(c.b)(null,(function(e){return{onLogout:function(){return e(_e())}}}))((function(e){return Object(n.useEffect)((function(){e.onLogout()}),[e]),o.a.createElement(i.a,{to:"/"})})),Ie=a(38),Le=a.n(Ie),Pe=a(26),xe=a(27),Ue=Object(c.b)((function(e){return{userId:e.contact.userId,loading:e.contact.loading,submitted:e.contact.submitted}}),(function(e){return{onContact:function(t){return e((a=t,function(e){e({type:"CONTACT_START"}),A.a.post("https://enigmatic-eyrie-76099.herokuapp.com/api/contact",a).then((function(t){console.log(t),e({type:"CONTACT_SUCCESS",userId:t.data.messageId})})).catch((function(t){console.log(t),e({type:"FETCH_FAIL",error:t})}))}));var a}}}))((function(e){var t=Object(n.useState)({contactData:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},phoneNumber:{elementType:"input",elementConfig:{type:"tel",placeholder:"Your Phone Number"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your Email"},value:"",validation:{required:!0},valid:!1,touched:!1},message:{elementType:"textarea",elementConfig:{type:"password",placeholder:"Your Message"},value:"",validation:{required:!0},valid:!1,touched:!1}}}),a=Object(g.a)(t,2),r=a[0],l=a[1],c=Object(n.useState)(!1),u=Object(g.a)(c,2),s=u[0],d=u[1],p=null,h=null;e.loading&&(p=o.a.createElement(f,null)),e.submitted&&(h="Your message with Id of ".concat(e.userId," has been submitted successfully"),p=o.a.createElement(i.a,{to:"/gallery"}));var E=[];for(var _ in r.contactData)E.push({id:_,config:r.contactData[_]});return o.a.createElement(v,null,o.a.createElement(pe,{contact:!0,header:"Please Contact Us"},o.a.createElement("div",{className:Le.a.Contact},o.a.createElement("div",null,o.a.createElement("p",null,"Ogun, Nigeria")),o.a.createElement("div",null,o.a.createElement(Pe.a,{icon:xe.c})," (+234) 80 998 239 86 ",o.a.createElement("br",null),o.a.createElement(Pe.a,{icon:xe.b})," Togajphotography21@gmail.com ",o.a.createElement("br",null),o.a.createElement(Pe.a,{icon:xe.a}),"  Always Open"),o.a.createElement("div",{className:Le.a.Form},h,o.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a={name:r.contactData.name.value,phoneNumber:r.contactData.phoneNumber.value,email:r.contactData.email.value,message:r.contactData.message.value};e.onContact(a)}},E.map((function(e){return o.a.createElement(we,{key:e.id,elementType:e.config.elementType,elementConfig:e.config.elementConfig,value:e.config.value,inValid:!e.config.valid,shouldValidate:e.config.validation,touched:e.config.touched,changed:function(t){return function(e,t){var a=Object(Oe.a)({},r.contactData),n=Object(Oe.a)({},a[t]);n.value=e.target.value,n.valid=function(e,t){var a=!0;return t.required&&(a=""!==e.trim()&&a),t.minLength&&(a=e.length>=t.minLength&&a),t.maxLength&&(a=e.length<=t.maxLength&&a),a}(n.value,n.validation),n.touched=!0,a[t]=n;for(var o in a)o=a[o].valid&&!0;l({contactData:a}),d(!0)}(t,e.id)}})})),o.a.createElement(m,{btnType:"Success",disabled:!s},"Contact US")),p))))})),Fe=Object(i.g)(Object(c.b)((function(e){return{isAuthenticated:null!==e.auth.token}}),(function(e){return{onTryAutoSignUp:function(){return e((function(e){var t=localStorage.getItem("token"),a=localStorage.getItem("isAdmin");if(t){var n=new Date(localStorage.getItem("expirationTime"));if(n<new Date)e(_e());else{var o=localStorage.getItem("userId");e(Ee(t,o,a)),e(ve((n.getTime()-(new Date).getTime())/1e3))}}else e(_e())}))}}}))((function(e){Object(n.useEffect)((function(){e.onTryAutoSignUp()}));var t=o.a.createElement(i.d,null,o.a.createElement(i.b,{path:"/gallery",component:be}),o.a.createElement(i.b,{path:"/login",component:je}),o.a.createElement(i.b,{path:"/logout",component:De}),o.a.createElement(i.b,{path:"/contact",component:Ue}),o.a.createElement(i.b,{path:"/",exact:!0,component:d}),o.a.createElement(i.a,{to:"/"}));return e.isAuthenticated&&(t=o.a.createElement(i.d,null,o.a.createElement(i.b,{path:"/gallery",component:be}),o.a.createElement(i.b,{path:"/login",component:je}),o.a.createElement(i.b,{path:"/photo",component:Te}),o.a.createElement(i.b,{path:"/contact",component:Ue}),o.a.createElement(i.b,{path:"/logout",component:De}),o.a.createElement(i.b,{path:"/",exact:!0,component:d}),o.a.createElement(i.a,{to:"/"}))),o.a.createElement("div",{className:"App"},t)}))),He=a(14),Ge=function(e,t){return Object(Oe.a)({},e,{},t)},Be={pictures:null,filePath:null,imageCategory:null,error:null,loading:null,submitted:!1,filename:null,filepath:null},qe=function(e,t){return Ge(e,{loading:!0,submitted:!1})},Re=function(e,t){return Ge(e,{pictures:t.pictures,loading:!1})},Ve=function(e,t){return Ge(e,{error:t.error,loading:!1})},Je=function(e,t){return Ge(e,{loading:!0,submitted:!1})},We=function(e,t){return Ge(e,{loading:!1,submitted:!0,filePath:t.filePath,imageCategory:t.imageCategory})},Me=function(e,t){return Ge(e,{error:t.error,loading:!1,submitted:!1})},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_START":return qe(e);case"FETCH_SUCCESS":return Re(e,t);case"FETCH_FAIL":return Ve(e,t);case"POST_PHOTO_START":return Je(e);case"POST_PHOTO_SUCCESS":return We(e,t);case"POST_PHOTO_FAIL":return Me(e,t);default:return e}},Qe={token:null,userId:null,isAdmin:null,error:null,loading:null,submitted:null},ze=function(e,t){return Ge(e,{error:!1,loading:!0,submitted:!1})},Ke=function(e,t){return Ge(e,{token:t.idToken,userId:t.userId,isAdmin:"true"===t.isAdmin,error:null,loading:!1,submitted:!0})},Xe=function(e,t){return Ge(e,{error:t.error,loading:!1,submitted:!1})},Ze=function(e,t){return Ge(e,{token:null,userId:null,submitted:!1})},$e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return ze(e);case"AUTH_SUCCESS":return Ke(e,t);case"AUTH_FAIL":return Xe(e,t);case"AUTH_LOGOUT":return Ze(e);default:return e}},et={userId:null,error:null,loading:null,submitted:null},tt=function(e,t){return Ge(e,{error:!1,loading:!0,submitted:!1})},at=function(e,t){return Ge(e,{userId:t.userId,error:null,loading:!1,submitted:!0})},nt=function(e,t){return Ge(e,{error:t.error,loading:!1,submitted:!1})},ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONTACT_START":return tt(e);case"CONTACT_SUCCESS":return at(e,t);case"CONTACT_FAIL":return nt(e,t);default:return e}},rt=a(62),lt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||He.d,it=Object(He.c)({photo:Ye,auth:$e,contact:ot}),ct=Object(He.e)(it,lt(Object(He.a)(rt.a))),ut=o.a.createElement(c.a,{store:ct},o.a.createElement(X.a,null,o.a.createElement(Fe,null)));l.a.render(o.a.createElement(o.a.StrictMode,null,ut),document.getElementById("root"))}],[[63,1,2]]]);
//# sourceMappingURL=main.0d9236e3.chunk.js.map