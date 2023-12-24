import{g as C,b as V,n as u,c as L,d as k,j as a}from"./globalStyles-8de4d768.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8d77eac8.js";function i(e){const{red:t,green:d,default:r}=C;switch(e){case"disabled":return"#e4e3ea";case"error":return t;case"success":return d;default:return r}}function w(e){const{grey:t,red:d,green:r}=V;switch(e){case"disabled":return"#e4e3ea";case"error":return d;case"success":return r;default:return t}}const M=u.input`
  height: 40px;
  width: 300px;
  padding: 0px 6px;
  border-radius: ${L};
  border: solid 2px ${({status:e})=>i(e)};
  color: ${({status:e})=>i(e)};
  background-color: ${({status:e})=>w(e)};
`,P=u.div`
  font-size: small;
  color: ${({status:e})=>e==="disabled"?C.grey:"#000000"};
  padding-bottom: 6px;
`,j=u.div`
  display: ${({status:e})=>e==="disabled"?"none":e==="error"||e==="success"?"block":"none"};
  font-size: small;
  color: #9150b8;
  padding-top: 6px;
`,p=u.p`
  margin: 0px;
  color: ${({status:e})=>i(e)};
`,s=({id:e,label:t,message:d,status:r,onChange:E,placeholder:$,...q})=>k("div",{children:[a(P,{status:r,children:a(p,{status:r,children:t})}),a(M,{id:e,type:"text",onChange:E,disabled:r==="disabled",status:r,placeholder:$,...q}),a(j,{status:r,children:a(p,{status:r,children:d})})]});try{s.displayName="Input",s.__docgenInfo={description:"",displayName:"Input",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"disabled"'},{value:'"success"'},{value:'"error"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}const H={component:s,title:"Components/Input",argTypes:{}},l=e=>a(s,{"data-testId":"InputField-id",...e});l.args={label:"Label"};const o=e=>a(s,{"data-testId":"InputField-id",...e});o.args={label:"Success",message:"Success Message",status:"success"};const n=e=>a(s,{"data-testId":"InputField-id",...e});n.args={label:"Error",message:"Error Message",status:"error"};const c=e=>a(s,{"data-testId":"InputField-id",...e});c.args={label:"Disabled",status:"disabled"};var m,g,b;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:'(args: InputProps) => <Input data-testId="InputField-id" {...args} />',...(b=(g=l.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var I,f,y;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:'(args: InputProps) => <Input data-testId="InputField-id" {...args} />',...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var S,h,x;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:'(args: InputProps) => <Input data-testId="InputField-id" {...args} />',...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var F,_,v;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:'(args: InputProps) => <Input data-testId="InputField-id" {...args} />',...(v=(_=c.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};const N=["Label","Success","Error","Disabled"];export{c as Disabled,n as Error,l as Label,o as Success,N as __namedExportsOrder,H as default};
