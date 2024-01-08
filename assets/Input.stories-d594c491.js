import{a as $,j as r}from"./emotion-element-c39617d8.browser.esm-7f355d58.js";import{n as c}from"./emotion-styled.browser.esm-1ded5d6e.js";import{t}from"./theme-3894d062.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-6f09c02c.js";const k=e=>{switch(e){case"disabled":return"#e4e3ea";case"error":return t.backgroundColor.red;case"success":return t.backgroundColor.green;default:return t.backgroundColor.grey}},i=e=>{switch(e){case"disabled":return"#e4e3ea";case"error":return t.color.red;case"success":return t.color.green;default:return t.color.default}},E=c.input`
  height: 40px;
  width: 300px;
  padding: 0px 6px;
  border-radius: ${({theme:e})=>e.radius};
  border: solid 2px ${({status:e})=>i(e)};
  color: ${({status:e})=>i(e)};
  background-color: ${({status:e})=>k(e)};
`,q=c.div`
  font-size: small;
  padding-bottom: 6px;
  color: ${({status:e,theme:u})=>e==="disabled"?u.color.grey:"black"};
`,V=c.div`
  font-size: small;
  padding-top: 6px;
  color: ${({theme:e})=>e.color.purple};
  display: ${({status:e})=>e==="disabled"?"none":e==="error"||e==="success"?"block":"none"};
`,p=c.p`
  margin: 0px;
  color: ${({status:e})=>i(e)};
`,a=({label:e,message:u,status:s,...C})=>$("div",{children:[r(q,{status:s,children:r(p,{status:s,children:e})}),r(E,{type:"text",disabled:s==="disabled",status:s,...C}),r(V,{status:s,children:r(p,{status:s,children:u})})]});try{a.displayName="Input",a.__docgenInfo={description:"",displayName:"Input",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"normal"'},{value:'"success"'},{value:'"error"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}const T={component:a,title:"Components/Input",argTypes:{}},o=e=>r(a,{"data-testId":"InputField-id",...e});o.args={label:"Label"};const d=e=>r(a,{"data-testId":"InputField-id",...e});d.args={label:"Success",message:"Success Message",status:"success"};const l=e=>r(a,{"data-testId":"InputField-id",...e});l.args={label:"Error",message:"Error Message",status:"error"};const n=e=>r(a,{"data-testId":"InputField-id",...e});n.args={label:"Disabled",status:"disabled"};var m,g,I;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:'(args: InputProps) => <Input data-testId="InputField-id" {...args} />',...(I=(g=o.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var b,f,y;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:'(args: InputProps) => <Input data-testId="InputField-id" {...args} />',...(y=(f=d.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var h,S,x;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:'(args: InputProps) => <Input data-testId="InputField-id" {...args} />',...(x=(S=l.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var F,_,v;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:'(args: InputProps) => <Input data-testId="InputField-id" {...args} />',...(v=(_=n.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};const z=["Label","Success","Error","Disabled"];export{n as Disabled,l as Error,o as Label,d as Success,z as __namedExportsOrder,T as default};
