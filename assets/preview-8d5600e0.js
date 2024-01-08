import{s as E,w as F,T as I,i as j,a as _,b as L,j as k}from"./emotion-element-c39617d8.browser.esm-7f355d58.js";import{r as C}from"./index-76fb7be0.js";import{a as T}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-6f09c02c.js";import{t as O}from"./theme-3894d062.js";import"./_commonjsHelpers-de833af9.js";var M={exports:{}},t={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=typeof Symbol=="function"&&Symbol.for,v=r?Symbol.for("react.element"):60103,$=r?Symbol.for("react.portal"):60106,c=r?Symbol.for("react.fragment"):60107,p=r?Symbol.for("react.strict_mode"):60108,m=r?Symbol.for("react.profiler"):60114,y=r?Symbol.for("react.provider"):60109,b=r?Symbol.for("react.context"):60110,w=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.concurrent_mode"):60111,g=r?Symbol.for("react.forward_ref"):60112,h=r?Symbol.for("react.suspense"):60113,q=r?Symbol.for("react.suspense_list"):60120,x=r?Symbol.for("react.memo"):60115,S=r?Symbol.for("react.lazy"):60116,D=r?Symbol.for("react.block"):60121,N=r?Symbol.for("react.fundamental"):60117,W=r?Symbol.for("react.responder"):60118,B=r?Symbol.for("react.scope"):60119;function n(e){if(typeof e=="object"&&e!==null){var o=e.$$typeof;switch(o){case v:switch(e=e.type,e){case w:case d:case c:case m:case p:case h:return e;default:switch(e=e&&e.$$typeof,e){case b:case g:case S:case x:case y:return e;default:return o}}case $:return o}}}function A(e){return n(e)===d}t.AsyncMode=w;t.ConcurrentMode=d;t.ContextConsumer=b;t.ContextProvider=y;t.Element=v;t.ForwardRef=g;t.Fragment=c;t.Lazy=S;t.Memo=x;t.Portal=$;t.Profiler=m;t.StrictMode=p;t.Suspense=h;t.isAsyncMode=function(e){return A(e)||n(e)===w};t.isConcurrentMode=A;t.isContextConsumer=function(e){return n(e)===b};t.isContextProvider=function(e){return n(e)===y};t.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===v};t.isForwardRef=function(e){return n(e)===g};t.isFragment=function(e){return n(e)===c};t.isLazy=function(e){return n(e)===S};t.isMemo=function(e){return n(e)===x};t.isPortal=function(e){return n(e)===$};t.isProfiler=function(e){return n(e)===m};t.isStrictMode=function(e){return n(e)===p};t.isSuspense=function(e){return n(e)===h};t.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===c||e===d||e===m||e===p||e===h||e===q||typeof e=="object"&&e!==null&&(e.$$typeof===S||e.$$typeof===x||e.$$typeof===y||e.$$typeof===b||e.$$typeof===g||e.$$typeof===N||e.$$typeof===W||e.$$typeof===B||e.$$typeof===D)};t.typeOf=n;M.exports=t;var G=M.exports,P=G,V={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Y={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},R={};R[P.ForwardRef]=V;R[P.Memo]=Y;var Z=F(function(e,o){var a=e.styles,u=E([a],void 0,C.useContext(I)),z=C.useRef();return T(function(){var i=o.key+"-global",s=new o.sheet.constructor({key:i,nonce:o.sheet.nonce,container:o.sheet.container,speedy:o.sheet.isSpeedy}),f=!1,l=document.querySelector('style[data-emotion="'+i+" "+u.name+'"]');return o.sheet.tags.length&&(s.before=o.sheet.tags[0]),l!==null&&(f=!0,l.setAttribute("data-emotion",i),s.hydrate([l])),z.current=[s,f],function(){s.flush()}},[o]),T(function(){var i=z.current,s=i[0],f=i[1];if(f){i[1]=!1;return}if(u.next!==void 0&&j(o,u.next,!0),s.tags.length){var l=s.tags[s.tags.length-1].nextElementSibling;s.before=l,s.flush()}o.insert("",u,s,!1)},[o,u.name]),null});function H(){for(var e=arguments.length,o=new Array(e),a=0;a<e;a++)o[a]=arguments[a];return E(o)}const J=H`
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }
  body {
    margin: 0;
  }
  main {
    display: block;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  a {
    background-color: transparent;
  }
  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }
  b,
  strong {
    font-weight: bolder;
  }
  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  img {
    border-style: none;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }
  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }
  progress {
    vertical-align: baseline;
  }
  textarea {
    overflow: auto;
  }
  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }
  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }
  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
  details {
    display: block;
  }
  summary {
    display: list-item;
  }
  template {
    display: none;
  }
  [hidden] {
    display: none;
  }
`,te={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}}},oe=[e=>_(L,{theme:O,children:[k(Z,{styles:J}),k(e,{})]})];export{oe as decorators,te as default};
