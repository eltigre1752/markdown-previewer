(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{19:function(e,n,t){},20:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var i=t(2),a=t.n(i),r=t(9),o=t.n(r),d=(t(19),t(10)),s=t(11),c=t(3),h=t(14),l=t(13),m=(t(20),t(12)),u=t.n(m),b=t(8),x=t(5),j=t(1),v=function(e){Object(h.a)(t,e);var n=Object(l.a)(t);function t(e){var i;return Object(d.a)(this,t),(i=n.call(this,e)).state={markdown:p,editorMaximized:!1,previewMaximized:!1},i.handleChange=i.handleChange.bind(Object(c.a)(i)),i.handleEditorMaximize=i.handleEditorMaximize.bind(Object(c.a)(i)),i.handlePreviewMaximize=i.handlePreviewMaximize.bind(Object(c.a)(i)),i}return Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState({markdown:e.target.value})}},{key:"handleEditorMaximize",value:function(){this.setState({editorMaximized:!this.state.editorMaximized})}},{key:"handlePreviewMaximize",value:function(){this.setState({previewMaximized:!this.state.previewMaximized})}},{key:"render",value:function(){var e=this.state.editorMaximized?["editorWrap maximized","previewWrap hide",x.b]:this.state.previewMaximized?["editorWrap hide","previewWrap maximized",x.b]:["editorWrap","previewWrap",x.a];return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:e[0],children:[Object(j.jsx)(w,{icon:e[2],onClick:this.handleEditorMaximize,text:"Editor"}),Object(j.jsx)(f,{markdown:this.state.markdown,onChange:this.handleChange})]}),Object(j.jsxs)("div",{className:e[1],children:[Object(j.jsx)(w,{icon:e[2],onClick:this.handlePreviewMaximize,text:"Previewer"}),Object(j.jsx)(k,{markdown:this.state.markdown})]})]})}}]),t}(a.a.Component),w=function(e){return Object(j.jsxs)("div",{className:"toolbar",children:[Object(j.jsx)(b.a,{className:"ico",icon:x.c}),e.text,Object(j.jsx)(b.a,{className:"ico ico2",icon:e.icon,onClick:e.onClick})]})},f=function(e){return Object(j.jsx)("div",{children:Object(j.jsx)("textarea",{id:"editor",onChange:e.onChange,type:"text",value:e.markdown})})},k=function(e){return Object(j.jsx)("div",{dangerouslySetInnerHTML:{__html:u()(e.markdown)},id:"preview"})},p="# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. yeah this is the end of demo!",O=v,g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,28)).then((function(n){var t=n.getCLS,i=n.getFID,a=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),i(e),a(e),r(e),o(e)}))};o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),g()}},[[27,1,2]]]);
//# sourceMappingURL=main.185b346b.chunk.js.map