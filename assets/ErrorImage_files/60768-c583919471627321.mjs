(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[60768],{303998:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(616550),s=n(463310),a=n(549201);function i(){const e=(0,o.useHistory)(),t=(0,a.HG)();return n=>{t?(0,s.Z)(n,{disableOriginCheck:!0}):e.push(n)}}},550941:(e,t,n)=>{n.d(t,{Di:()=>_,Jl:()=>c,R:()=>u,ZP:()=>f,aU:()=>h,j2:()=>d,pN:()=>g,rL:()=>b,vW:()=>m});var o=n(883119),s=n(870243),a=n(550140),i=n(630089),r=n(739425),l=n(785893);const c=7e3,u="permanent_account_closure",d="account_deletion_email_sent",_="account_deactivated",h="unlink_successful",g="account_switch_to_settings";function p(e,t,n){return(0,l.jsx)(o.xv,{align:n||"center",children:(0,i.nk)(e,{username:(0,l.jsx)(o.xv,{inline:!0,weight:"bold",children:t})})})}function m({i18n:e,message:t,multipleAccounts:n,username:o=""}){switch(t){case u:return e._('Your account has been deleted. We\'re sad to see you go', 'unauthLoginPage.accountDeletedToast.message', 'Confirmation message after a user has successfully deleted their account');case d:return p(n?e._('An email has been sent with final steps to delete your account, {{username}} and its linked accounts', 'accountDeletedEmailToast.message.multipleAccounts', 'Confirmation message after a user has successfully requested multiple accounts deletion'):e._('An email has been sent with final steps to delete your account, {{username}}', 'accountDeletedEmailToast.message.singleAccount', 'Confirmation message after a user has successfully requested a single account deletion'),o);case _:return p(n?e._('The account, {{username}}, and its associated linked accounts have been deactivated', 'unauthLoginPage.deactivatedToast.message.multipleAccounts', 'Confirmation message after a user has successfully deactivated multiple accounts'):e._('The account, {{username}}, has been deactivated', 'unauthLoginPage.deactivatedToast.message.singleAccount', 'Confirmation message after a user has successfully deactivated a single account'),o);case h:return p(e._('Success! You\'ve unlinked this business account. You are currently in {{username}}.', 'authHomeFeedPage.unlinkAccountToast.message', 'Confirmation message after a user has successfully unlinked business account'),o,"start");case g:return p(e._('You\'ve switched into and are currently in the account {{username}}', 'accountSettings.switchAccountToAccountChanges', 'Confirmation message after a user has successfully switched accounts and got redirected to Account Changes'),o,"start");default:return""}}function f(e,t,n=""){if(!t||!t.search)return"";const{message:o}=(0,r.mB)(t.search),s=(0,r.mB)(t.search).username||n;return m({i18n:e,message:o,multipleAccounts:"true"===(0,r.mB)(t.search).multiple_accounts,username:s})}function b({showOneToast:e,i18n:t,location:n,history:o,username:i,fullName:u,avatarUrl:d}){if(!n||!n.search)return;const _=f(t,n,i||""),{message:p}=(0,r.mB)(n.search),m=p===g||p===h;_&&(e((({hideToast:e})=>(0,l.jsx)(a.ZP,{duration:c,onHide:e,text:_,thumbnail:m?{avatar:(0,l.jsx)(s.qE,{name:u||"",src:d||"",size:"md"})}:void 0}))),o.replace(n.hash?`${n.pathname}${n.hash}`:n.pathname))}},212380:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(883119),s=n(536042),a=n(785893);const i=({isInModal:e})=>{const t=(0,s.ZP)();return(0,a.jsx)(o.xu,{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",left:!0,position:e?"absolute":"fixed",top:!0,width:"100%",zIndex:new o.Ry(1),dangerouslySetInlineStyle:{__style:{backgroundColor:"rgba(255, 255, 255, .5)"}},children:(0,a.jsx)(o.$j,{accessibilityLabel:t._('Loading', 'Full page loading state', 'Full page loading state'),show:!0})})}},259987:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(365661),s=n(98736);async function a(e){const t=await(0,o.Kw)(),n=t?{user_ids:Object.keys(t)}:{};(0,s.tj)(`mweb_multiple_accounts_${e}`,n)}},447755:(e,t,n)=>{n.d(t,{eN:()=>l,_:()=>u,kB:()=>c});var o=n(40660),s=n(837792),a=n(739425),i=n(616550);const r=["/resource/:name/:method/","/resource/commerce/:name/:method/","/:username/pins/follow/","/email/remove/","/about/trademark/form/:claim_type/","/about/copyright/dmca-pin/web-result/:id/","/about/copyright/dmca-pin/pin/:id/","/about/copyright/dmca-pin/","/about/koplg/","/about/:lawName/","/about/radtc/","/website/confirm/","/oauth/","/app-factory-oauth/","/settings/extension/uninstall/","/offsite/","/amp/(.*)"],l=e=>e&&(0,a.Qg)(e)&&s.lf!==e?(0,a.Qc)(e).relative:"/",c=(e,t)=>{const n=(0,a.Jx)(e);return((e,t)=>{const n=new URL(e,t);return r.some((e=>!!(0,i.matchPath)(n.pathname,{path:e,exact:!0})))})(n,t)||(0,a.OM)(n)===a.vx.TRUSTED_DIFFERENT_ORIGIN},u=({forceFullPageNavigation:e,history:t,next:n,noLocationReplace:s,origin:i})=>{const r=(0,a.Jx)(n);c(n,i)||!t||e?(e&&o.Z.increment("webapp.duplo.navigateOnLogin.forceFullPageNavigation",1),window.location.assign(r)):s?t.push(l(r)):t.replace(l(r))}},662751:(e,t,n)=>{n.d(t,{Z:()=>b});var o=n(667294),s=n(883119),a=n(539636),i=n(684113),r=n(324159),l=n(245410),c=n(282802),u=n(98736),d=n(536042),_=n(353226),h=n(219097),g=n(960251),p=n(785893);function m(){const e=(0,d.ZP)(),[t,n]=(0,o.useState)();return(0,h.Z)()?null:(0,p.jsxs)(s.xu,{position:"relative",children:[(0,p.jsx)(s.iP,{onTap:()=>n(!0),children:(0,p.jsxs)(s.xu,{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",height:40,rounding:"pill",color:"secondary",children:[(0,p.jsx)(s.xu,{height:24,width:24,marginTop:1,children:(0,p.jsx)(_.Z,{size:20})}),(0,p.jsx)(s.xu,{marginStart:2,children:(0,p.jsx)(s.xv,{weight:"bold",children:e._('Connect with Google', 'googleConnectButtonWithDisabledSDK.buttonText', 'Connect with Google button text')})})]})}),t&&(0,p.jsx)(g.Z,{type:"google",onDismiss:()=>n(!1)})]})}function f({onGoogleConnectSuccess:e,onTouch:t}){const{locale:n}=(0,c.B)(),{checkExperiment:d}=(0,l.F)(),_=d("mweb_google_button_locale_fix").anyEnabled,h=(0,o.useRef)(null),g=(0,r.M)(),m=(0,o.useRef)(e);return(0,o.useEffect)((()=>{m.current=e}),[e]),(0,o.useEffect)((()=>{const e=({credential:e,select_by:t})=>{(0,u.My)(`unauth_mweb.gsi_button.select_by.${t}`),(0,u.NC)("press_google_connect_button");const n=(0,a.Z)(e);m.current({google_open_id_token:e,autologin:!1},{type:"google",google_open_id_token:e,first_name:n.given_name,last_name:n.family_name,image_url:n.picture})};return(async()=>{await(null==g?void 0:g.ensureInit("button",e)),(0,i.ru)({buttonRef:h,isDesktop:!1,locale:_?n:void 0})})(),()=>{null==g||g.removeButtonCallback(e)}}),[g,_,n]),(0,p.jsx)(s.xu,{position:"relative",children:(0,p.jsx)(s.iP,{onTap:()=>{null==t||t(),(0,u.My)("gsi_personalized_button.tap"),(0,u.EX)({event:"start",provider:"google"})},children:(0,p.jsx)(s.xu,{"aria-label":"GOOGLE_SIGNIN_BUTTON",height:44,children:(0,p.jsx)(s.xu,{ref:h,position:"absolute",width:"100%"})})})})}function b(e){const{checkExperiment:t}=(0,l.F)(),{anyEnabled:n}=t("mweb_google_disabled");return n?(0,p.jsx)(m,{}):(0,p.jsx)(f,{onGoogleConnectSuccess:e.onGoogleConnectSuccess,onTouch:e.onTouch})}},241245:(e,t,n)=>{n.d(t,{Z:()=>p});var o=n(667294),s=n(883119),a=n(798198),i=n(874261);const r={yellow:"#FAB904",orange:"#FF6400",green:"#0FA573",blue:"#0074e8",purple:"#B469EB"},l="DelightfulBubbles__",c=[`${l}fadeIn {\n  to {\n    opacity: 1;\n  }\n}\n`,`${l}growShrink {\n  0% {\n    transform: scale(0);\n  }\n  50% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n`,`${l}swirl {\n  0% {\n    transform: rotate(0deg) translateX(-50%);\n  }\n  100% {\n    transform: rotate(-360deg) translateX(-50%);\n  }\n}\n`,...Object.keys(r).map((e=>{const t=((e,t)=>{const n=e.length,o=e.indexOf(t)+1>=n?0:e.indexOf(t)+1;return e[o]})(Object.keys(r),e);return`${l}colorChange_${e} {\n      0% {\n        background-color: ${r[e]};\n      }\n      50% {\n        background-color: ${r[t]};\n      }\n    }\n    `}))],u=(0,a.Ll)(c);var d=n(785893);function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const h=e=>{const{delay:t,diameter:n,height:o,initialColor:a,width:i,xOffset:c,yOffset:u}=e,_=((e,t,n,o,s,a,i,c)=>({bubblePositionStyles:{position:"absolute",marginLeft:a/2-s+"px",marginTop:n/2-s+"px",left:`${i}px`,top:`${c}px`},bubbleSwirlStyles:{animation:`${l}swirl 6s ease-in-out ${e}s infinite forwards`,WebkitAnimation:`${l}swirl 6s ease-in-out ${e}s infinite forwards`},bubbleGrowShrinkStyles:{transform:"scale(0)",WebkitTransform:"scale(0)",animation:`${l}growShrink 6s ease-in-out ${e}s infinite alternate`,WebkitAnimation:`${l}growShrink 6s ease-in-out ${e}s infinite alternate`},bubbleShapeStyles:{height:`${t}px`,width:`${t}px`,borderRadius:"50%",backgroundColor:r[o],opacity:0,animation:`${l}colorChange_${o} 12s steps(1, start) ${e}s infinite forwards,\n      ${l}fadeIn 3s linear ${e}s 1 forwards`,WebkitAnimation:`${l}colorChange_${o} 12s steps(1, start) ${e}s infinite forwards,\n      ${l}fadeIn 3s linear ${e}s 1 forwards`}}))(t,n,o,a,Math.floor(n/2),i,c,u);return(0,d.jsx)(s.xu,{dangerouslySetInlineStyle:{__style:_.bubblePositionStyles},children:(0,d.jsx)(s.xu,{dangerouslySetInlineStyle:{__style:_.bubbleSwirlStyles},children:(0,d.jsx)(s.xu,{dangerouslySetInlineStyle:{__style:_.bubbleGrowShrinkStyles},children:(0,d.jsx)(s.xu,{dangerouslySetInlineStyle:{__style:_.bubbleShapeStyles}})})})})};class g extends o.Component{constructor(...e){super(...e),_(this,"state",{isInitialized:!1})}componentDidMount(){window.requestAnimationFrame((()=>{this.setState({isInitialized:!0})}))}shouldComponentUpdate(e,t){return!e.numBubbles===this.props.numBubbles||!t.isInitialized===this.state.isInitialized}getSize(){const{width:e,height:t}=this.props;return void 0!==e&&void 0!==t?{width:e,height:t}:this.containerElement?{height:this.containerElement.offsetHeight,width:this.containerElement.offsetWidth}:{height:void 0,width:void 0}}createBubbles(e,t){const{delayFactor:n,delayOffset:o,numBubbles:s,xRadiusAdjustment:i,yRadiusAdjustment:l}=this.props,c=e+2*l,u=t+2*i,_=[],g=Object.keys(r);for(let r=0;r<s;r+=1){const s=16+(0,a.XF)(-4,4),i=g[r%g.length],{x:l,y:p}=(0,a.CC)(c,u);_.push((0,d.jsx)(h,{delay:r*n+o,diameter:s,initialColor:i,xOffset:l,yOffset:p,height:e,width:t},r))}return _}render(){const{isDesktop:e}=this.props,{height:t,width:n}=this.getSize();return(0,d.jsxs)(s.xu,{height:t,width:n,position:"relative",children:[(0,d.jsx)(i.Z,{unsafeCSS:u}),(0,d.jsxs)(s.xu,{position:e?void 0:"absolute",ref:e=>this.containerElement=e,children:[this.state.isInitialized&&this.createBubbles(t||0,n||0),(0,d.jsx)(s.xu,{position:"relative",children:this.props.children})]})]})}}_(g,"defaultProps",{numBubbles:10,xRadiusAdjustment:0,yRadiusAdjustment:0,delayFactor:1,delayOffset:0});const p=g},208833:(e,t,n)=>{n.d(t,{R:()=>h,Z:()=>p});var o=n(667294),s=n(883119),a=n(293926),i=n(777610),r=n(536042),l=n(282802),c=n(212380),u=n(509342),d=n(241245),_=n(785893);const h=e=>new Set([...u.EU,...u.rT,...u.IO]).has(e),g=3e3;function p({isReducedHeader:e,progressBarAnimationDuration:t}){const n=(0,r.ZP)(),{country:u}=(0,l.B)(),p=h(u);return(0,_.jsx)(o.Fragment,{children:p?(0,_.jsx)(i.Z,{log:{view_type:10,view_parameter:259},children:(0,_.jsxs)(s.xu,{position:"fixed",top:!0,left:!0,right:!0,bottom:!0,width:"100%",color:"default",children:[(0,_.jsx)(a.Z,{color:"dark",duration:t||g,finalProgress:95}),(0,_.jsxs)(s.kC,{alignItems:"stretch",justifyContent:"start",direction:"column",height:"100%",children:[(0,_.jsxs)(s.xu,{margin:10,children:[(0,_.jsx)(s.X6,{overflow:"normal",size:e?"500":"600",children:n._('Your account is being created!', 'account created heading', 'account created heading')}),(0,_.jsx)(s.xv,{overflow:"normal",children:n._('You can now save ideas, get personalized recommendations, and more', 'loading state description while waiting for any sign up registration to complete', 'loading state description while waiting for any sign up registration to complete')})]}),(0,_.jsx)(s.kC,{alignItems:"center",flex:"grow",justifyContent:"center",children:(0,_.jsx)(d.Z,{delayOffset:-5,isDesktop:!1,xRadiusAdjustment:40,yRadiusAdjustment:40,children:(0,_.jsx)(s.xu,{alignItems:"center",color:"lightWash",direction:"column",display:"flex",height:120,justifyContent:"end",overflow:"hidden",rounding:"circle",width:120,children:(0,_.jsx)(s.JO,{accessibilityLabel:n._('Loading', 'Loading state for any sign up registration', 'Loading state for any sign up registration'),color:"subtle",icon:"person",size:"90"})})})})]})]})}):(0,_.jsx)(c.Z,{})})}},791229:(e,t,n)=>{n.d(t,{f:()=>S,l:()=>z});var o=n(667294),s=n(702664),a=n(690108),i=n(563962),r=n(457628),l=n(791045),c=n(420434),u=n(256558),d=n(31368),_=n(550941),h=n(950861),g=n(245410),p=n(617285),m=n(499441),f=n(282802),b=n(336436),y=n(611756),x=n(98736),v=n(284814),w=n(509342),A=n(259987),k=n(447755),j=n(890415),C=n(495590),P=n(935340);const E=e=>({type:"AUTHENTICATE_USER",payload:{user:e}}),S=()=>{const e=(0,i.Z)(),t=(0,g.F)(),n=(0,s.useDispatch)(),{country:S,countryFromHostName:z,countryFromIp:T,regionFromIp:D,userAgent:{isTablet:F,isMobile:I}}=(0,f.B)(),Z=(0,p.Z)(),O=(0,v.Z)();return(0,o.useCallback)((async(o,s,i="/",g={isAutologin:!1,isSwitchAccount:!1,noLocationReplace:!1,recaptchaV3Token:"default",noImmediateRedirect:!1,useAlternativeResourceCall:!1,trigger:"other",accountUnlinked:!1},p,f)=>{Z();const v=!F&&!I,{isAutologin:R,isSwitchAccount:$,noLocationReplace:L,recaptchaV3Token:B,noImmediateRedirect:N,useAlternativeResourceCall:H,trigger:G,accountUnlinked:U}=g;let M={get_user:!0,...o,app_type_from_client:6,recaptchaV3Token:B};const Y=(0,j.t_)();Y&&(M={...M,visited_pages_before_login:Y});const X=(0,j.OJ)();X&&(M={...M,referrer:X});let K=a.Z.create("UserSessionResource",M).callCreate();if(H&&o.username_or_email&&o.password){const e=new FormData;e.append("username",o.username_or_email),e.append("password",o.password);const t={method:"POST",body:e,credentials:"include",headers:{Accept:"application/json, text/javascript, */*","X-CSRFToken":(0,c.getCsrfToken)()||"","X-Requested-With":"XMLHttpRequest"}};K=fetch("/resource/UserSessionResource/create/",t).then((e=>{if(200!==e.status)throw new Error(e.statusText);return e.json()})).catch((e=>Promise.reject(e)))}try{R?(0,x.dy)({event:"login_api_call_start",provider:o.google_open_id_token?"google":"facebook"}):(0,x.EX)({event:"login_api_call_start",provider:(0,h.nY)(o)}),e({...p,event_type:7534}),O({action:R?"autologin":"login",event:"attempt",type:(0,h.lp)(o),trigger:G});const a=await K;R?(0,x.dy)({event:"login_api_call_success",provider:o.google_open_id_token?"google":"facebook"}):(0,x.EX)({event:"login_api_call_success",provider:(0,h.nY)(o)}),n(E(a.resource_response.data.user));const c=a.client_context,g=a.resource_response.data.user.gatekeeper_experiments;g?(t.active=g.active,t.triggerable=g.triggerable):(0,P.nP)("webapp.authentication.updateExperimentsFailed"),c&&c.placed_experiences&&n((0,u.OD)(c.placed_experiences)),(0,A.Z)("authentication.login_success"),h.ZP.storeLoginCredentialsToBrowser(o),e({...p,event_type:7536}),O({action:R?"autologin":"login",event:"success",type:(0,h.lp)(o),trigger:G}),(0,d.Z)(),r.zN(l.e7.name),r.zN(l.x3.name),(0,y.Nh)(w.AA,1),"/"!==i&&(0,C.E)(!0),$?(0,b.Dm)().then((()=>{var e;const t=`/${(null===(e=a.resource_response.data)||void 0===e?void 0:e.user.username)||""}`+(U?`?message=${_.aU}`:"");window.location.href=t})):R&&!v||(!v&&f&&"google"!==(0,h.nY)(o)&&((0,x.yl)(),window.location.reload()),N||(0,k._)({forceFullPageNavigation:v,history:s,next:i,noLocationReplace:L,origin:window.location})),(0,m.ko)({country:S,countryFromHostName:z,countryFromIp:T,regionFromIp:D,deviceType:"Mobile",eventCategory:"Logins"})}catch(W){if(R?(0,x.dy)({event:"login_api_call_failure",provider:o.google_open_id_token?"google":"facebook"}):(0,x.EX)({event:"login_api_call_failure",provider:(0,h.nY)(o)}),1201!==W.api_error_code||R||v)throw e({...p,event_type:7535}),O({action:R?"autologin":"login",event:"fail",type:(0,h.lp)(o),trigger:G}),$&&(0,A.Z)("authentication.login_error"),W;if(s){const e={creds:o,next:i,phoneNumber:W.data.phone_number_end};s.push({pathname:"/login/mfa/",state:e})}}}),[n,S,z,T,Z,t,I,F,e,D,O])},z=()=>{const e=(0,g.F)(),t=(0,s.useDispatch)(),n=(0,p.Z)();return({client_context:o,resource_response:s})=>{const{data:a}=s;a&&(n(),t(E(a.user)));const i=a.user.gatekeeper_experiments;i?(e.active=i.active,e.triggerable=i.triggerable):(0,P.nP)("webapp.crossDomainAutologin.updateExperimentsFailed"),o&&t((0,u.OD)(o.placed_experiences))}}},697812:(e,t,n)=>{n.d(t,{m:()=>S});var o=n(702664),s=n(40660),a=n(690108),i=n(818917),r=n(563962),l=n(457628),c=n(791045),u=n(256558),d=n(31368),_=n(315219),h=n(804484),g=n(245410),p=n(617285),m=n(499441),f=n(282802),b=n(336436),y=n(173085),x=n(98736),v=n(284814),w=n(259987),A=n(890415),k=n(611756),j=n(509342);function C(){return function(e){const t={};return e.forEach((e=>{const n=JSON.parse((0,k.qn)(e));n&&(t[e]=n)})),JSON.stringify(t)}([j.E9])}var P=n(208833),E=n(935340);const S=()=>{const e=(0,g.F)(),t=(0,o.useDispatch)(),{country:n,countryFromHostName:k,countryFromIp:j,regionFromIp:S,isAuthenticated:z}=(0,f.B)(),T=(0,p.Z)(),D=(0,r.Z)(),F=(0,v.Z)();return(o,{signupAttemptContextEvent:r})=>{const g=(0,h.yV)(o);D({...r,event_type:7537}),F({action:"signup",event:"attempt",type:g}),T();let p=0;const f=(0,P.R)(n),v=new Promise((e=>{f?setTimeout((()=>{e()}),3e3):e()}));return new Promise(((f,P)=>{const T=()=>{var I;const Z=z,O=(0,A.t_)(),R=(0,A.OJ)(),$={...o,user_behavior_data:C(),visited_pages:O};R&&($.referrer=R),s.Z.increment("webapp.debug_signup_type.redux_registration",1,{CHECK_TYPE:null!==(I=(0,h.Eh)($,"CHECK_TYPE"))&&void 0!==I?I:"none",CHECK_EXISTS:(0,h.Eh)($,"DEPRECATED_CHECK_EXISTS"),CHECK_TRUTHY:(0,h.Eh)($,"DEPRECATED_CHECK_TRUTHY")}),a.Z.create("UserRegisterResource",{...$,get_user:!0}).callCreate().then((s=>v.then((()=>{(0,y.L_)("d_pif_invite");const a=s.client_context;t({type:"REGISTER_USER",payload:{user:s.resource_response.data.user}});const l=s.resource_response.data.user.gatekeeper_experiments;l?(e.active=l.active,e.triggerable=l.triggerable):(0,E.nP)("webapp.registration.updateExperimentsFailed"),a&&a.placed_experiences&&t((0,u.OD)(a.placed_experiences)),Z&&(0,w.Z)("registration.signup_success");const c=o.email||o.username||null,_=o.password||null,{credentials:h}=navigator;if(h&&c&&_)try{const e=new window.PasswordCredential({id:c,password:_});(0,x.My)("unauth_mweb.navigatorCredentials.store.attempt"),h.store(e).then((()=>{(0,x.My)("unauth_mweb.navigatorCredentials.store.success")}))}catch(p){(0,x.My)("unauth_mweb.navigatorCredentials.store.error")}D({...r,event_type:7487}),F({action:"signup",event:"success",type:g}),(0,i.Z)(),(0,d.Z)(),Z&&(0,b.Dm)(),(0,m.ko)({country:n,countryFromHostName:k,countryFromIp:j,regionFromIp:S,deviceType:"Mobile",eventCategory:"NewUsers"}),f()})))).catch((e=>{(null==e?void 0:e.api_error_code)===_.tz&&((0,x.My)("multi_step_set_age_restrict_cookie"),l.t8(c.It,"1",(0,l.kZ)(c.It))),p<3&&[_.dO,_.cZ].includes(null==e?void 0:e.api_error_code)?(p+=1,T()):(D({...r,event_type:7488}),F({action:"signup",event:"fail",type:g}),Z&&(0,w.Z)("registration.signup_error"),P(e))}))};T()}))}}},960251:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(883119),s=n(88622),a=n(536042),i=n(785893);function r({type:e,onDismiss:t}){const n=(0,a.ZP)(),r="facebook"===e?n._('Oops! Facebook isn\'t available', 'socialAuthDisabled.facebook.title', 'Title for the modal shown when Facebook services are not working'):n._('Oops! Google isn\'t available', 'socialAuthDisabled.google.title', 'Title for the modal shown when Google services are not working'),l="facebook"===e?n._('Looks like Facebook isn\'t available right now.\n\nGive another option a try or refresh the page and try again later.', 'socialAuthDisabled.facebook.description', 'Description for the modal shown when Facebook services are not working'):n._('Looks like Google isn\'t available right now.\n\nGive another option a try or refresh the page and try again later.', 'socialAuthDisabled.google.description', 'Description for the modal shown when Google services are not working');return(0,i.jsx)(s.ZP,{accessibilityModalLabel:"",mobileHideCloseIcon:!0,isOpen:!0,onDismiss:t,type:"social_auth_disabled_modal",children:(0,i.jsxs)(o.xu,{padding:5,children:[(0,i.jsx)(o.xu,{marginBottom:3,children:(0,i.jsx)(o.X6,{size:"500",accessibilityLevel:1,children:r})}),(0,i.jsx)(o.xu,{marginBottom:3,children:(0,i.jsx)(o.xv,{children:l})}),(0,i.jsx)(o.kC,{alignItems:"stretch",justifyContent:"start",direction:"column",children:(0,i.jsx)(o.xu,{paddingY:1,children:(0,i.jsx)(o.zx,{accessibilityLabel:n._('OK', 'socialAuthDisabled.okButton', 'Button that closes modal shown when Facebook or Google services are not working'),size:"lg",color:"red",text:n._('OK', 'socialAuthDisabled.okButton', 'Button that closes modal shown when Facebook or Google services are not working'),onClick:t})})})]})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/60768-c583919471627321.mjs.map