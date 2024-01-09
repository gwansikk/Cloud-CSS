import{t as a,a as $,j as r}from"./theme-206c2090.js";import{n as c}from"./emotion-styled.browser.esm-5b4b8dd0.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-6f09c02c.js";const k=e=>{switch(e){case"disabled":return"#e4e3ea";case"error":return a.backgroundColor.red;case"success":return a.backgroundColor.green;default:return a.backgroundColor.grey}},u=e=>{switch(e){case"disabled":return"#e4e3ea";case"error":return a.color.red;case"success":return a.color.green;default:return a.color.default}},E=c.input`
  height: 40px;
  width: 300px;
  padding: 0px 6px;
  border-radius: ${a.radius};
  border: solid 2px ${({status:e})=>u(e)};
  color: ${({status:e})=>u(e)};
  background-color: ${({status:e})=>k(e)};
`,q=c.div`
  font-size: small;
  padding-bottom: 6px;
  color: ${({status:e})=>e==="disabled"?a.color.grey:"black"};
`,V=c.div`
  font-size: small;
  padding-top: 6px;
  color: ${a.color.purple};
  display: ${({status:e})=>e==="disabled"?"none":e==="error"||e==="success"?"block":"none"};
`,i=c.p`
  margin: 0px;
  color: ${({status:e})=>u(e)};
`,s=({label:e,message:v,status:t,...C})=>$("div",{children:[r(q,{status:t,children:r(i,{status:t,children:e})}),r(E,{type:"text",disabled:t==="disabled",status:t,...C}),r(V,{status:t,children:r(i,{status:t,children:v})})]});try{s.displayName="Input",s.__docgenInfo={description:"",displayName:"Input",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"normal"'},{value:'"success"'},{value:'"error"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}const D={component:s,title:"Components/Input",argTypes:{}},o=e=>r(s,{"data-testId":"InputField-id",...e});o.args={label:"Label"};const d=e=>r(s,{"data-testId":"InputField-id",...e});d.args={label:"Success",message:"Success Message",status:"success"};const l=e=>r(s,{"data-testId":"InputField-id",...e});l.args={label:"Error",message:"Error Message",status:"error"};const n=e=>r(s,{"data-testId":"InputField-id",...e});n.args={label:"Disabled",status:"disabled"};var p,m,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:'(args: InputProps) => <Input data-testId="InputField-id" {...args} />',...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var I,b,f;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:'(args: InputProps) => <Input data-testId="InputField-id" {...args} />',...(f=(b=d.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var y,h,S;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:'(args: InputProps) => <Input data-testId="InputField-id" {...args} />',...(S=(h=l.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var x,F,_;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:'(args: InputProps) => <Input data-testId="InputField-id" {...args} />',...(_=(F=n.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};const T=["Label","Success","Error","Disabled"];export{n as Disabled,l as Error,o as Label,d as Success,T as __namedExportsOrder,D as default};
