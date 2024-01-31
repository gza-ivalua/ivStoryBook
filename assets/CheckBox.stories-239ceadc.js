import{j as a}from"./jsx-runtime-ffb262ed.js";import{F as f,M as y}from"./FormControlLabel-0d70eb77.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./useFormControl-02f53e84.js";import"./inheritsLoose-5428d580.js";import"./ButtonBase-c15bcc2f.js";import"./assertThisInitialized-081f9914.js";const t=n=>{const{id:o,checked:d,enabled:i,associatedText:u,labelPlacement:c,readOnly:p,required:m}={...n};return a.jsx(f,{control:a.jsx(y,{checked:d,disabled:!i,id:o,readOnly:p,required:m}),label:u,labelPlacement:c})};t.defaultProps={id:"test",enabled:!0,checked:!1,associatedText:"Default",labelPlacement:"top",dataType:"bit",readOnly:!1,required:!1};t.__docgenInfo={description:"",methods:[],displayName:"IvCheckBox",props:{id:{required:!1,tsType:{name:"ControlId"},description:"Sets the component id",defaultValue:{value:"'test'",computed:!1}},controlType:{required:!0,tsType:{name:"string"},description:"Sets the control type"},status:{required:!0,tsType:{name:"union",raw:"'initialized' | 'loading' | 'loaded' | 'rendered'",elements:[{name:"literal",value:"'initialized'"},{name:"literal",value:"'loading'"},{name:"literal",value:"'loaded'"},{name:"literal",value:"'rendered'"}]},description:"Sets the control status"},children:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:"controls's children"},dataType:{required:!1,tsType:{name:"DataType"},description:"Sets the component dataType",defaultValue:{value:"'bit'",computed:!1}},isError:{required:!1,tsType:{name:"boolean"},description:"Is the component in error or not"},helperMessage:{required:!1,tsType:{name:"string"},description:"Message to display when the component is in error"},associatedText:{required:!1,tsType:{name:"string"},description:"Sets the component label",defaultValue:{value:"'Default'",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"Sets the component in readOnly mode",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"If true, the label is displayed as required and the input element is required",defaultValue:{value:"false",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:"If true, the component is checked",defaultValue:{value:"false",computed:!1}},enabled:{required:!1,tsType:{name:"boolean"},description:"If false, the component is disabled",defaultValue:{value:"true",computed:!1}},labelPlacement:{required:!1,tsType:{name:"union",raw:"'bottom' | 'start' | 'top' | 'end'",elements:[{name:"literal",value:"'bottom'"},{name:"literal",value:"'start'"},{name:"literal",value:"'top'"},{name:"literal",value:"'end'"}]},description:"Sets the placement of the label of the checkbox",defaultValue:{value:"'top'",computed:!1}}}};const I={title:"Components/Boolean/IvCheckBox",component:t,parameters:{layout:"centered",docs:{controls:{sort:"requiredFirst"}}},tags:["autodocs"],argTypes:{}},e={args:{id:"test",associatedText:"IvCheckBox",checked:!1,enabled:!0,dataType:"bit",readOnly:!0,required:!1,labelPlacement:"end"}};var r,l,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    id: 'test',
    associatedText: 'IvCheckBox',
    checked: false,
    enabled: true,
    dataType: 'bit',
    readOnly: true,
    required: false,
    labelPlacement: 'end'
  }
}`,...(s=(l=e.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const C=["Example"];export{e as Example,C as __namedExportsOrder,I as default};