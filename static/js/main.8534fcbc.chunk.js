(this["webpackJsonpdata-viz"]=this["webpackJsonpdata-viz"]||[]).push([[0],{347:function(e,t,o){},348:function(e,t,o){},438:function(e,t,o){},502:function(e,t,o){"use strict";o.r(t);var a=o(4),s=o(0),r=o.n(s),l=o(39),i=o.n(l),c=(o(347),o(12)),n=o(13),y=o(58),C=o(19),x=o(20),d=(o(348),o(220)),h=o(328),g=o(327),u=(o(438),o(439),o(64)),m=[{value:"qualitativeLight",label:"Qualitative Light",colors:u.qualitativeLight},{value:"qualitativeDark",label:"Qualitative Dark",colors:u.qualitativeDark},{value:"sequentialPurple",label:"Sequential Purple",colors:u.sequentialPurple},{value:"sequentialBlue",label:"Sequential Blue",colors:u.sequentialBlue},{value:"diverging",label:"Diverging",colors:u.diverging},{value:"semantic",label:"Semantic",colors:u.semantic},{value:"ibmQualitativeLight",label:"IBM Qualitative Light",colors:u.ibmQualitativeLight},{value:"ibmQualitativeDark",label:"IBM Qualitative Dark",colors:u.ibmQualitativeDark},{value:"custom",label:"Custom",colors:[]}],b=["#FFFFFF","#EFEFEF","#181818","#000000"],j=["#FFFFFF","#181818"],S=function(e){Object(C.a)(o,e);var t=Object(x.a)(o);function o(e){var a;return Object(c.a)(this,o),(a=t.call(this,e)).handleClick=function(){a.setState({displayBackgroundColorPicker:!a.state.displayBackgroundColorPicker})},a.handleBackgroundColorChange=function(e){a.setState({backgroundColor:e.hex}),a.props.onBackgroundColorChange(e.hex)},a.handleTextClick=function(){a.setState({displayTextColorPicker:!a.state.displayTextColorPicker})},a.handleTextColorChange=function(e){a.setState({textColor:e.hex}),a.props.onTextColorChange(e.hex)},a.handleColorScaleChange=function(e){a.setState({colorScale:e.value}),a.props.onColorScaleChange(e.value)},a.handleCustomColorScaleChange=function(e){a.setState({colorScale:"custom",selectValue:e.target.value})},a.handleCustomColorScaleChangeOnBlur=function(e){var t=e.target.value.split(",");a.setState({colorScale:"custom",customColors:t,selectValue:e.target.value}),a.props.onCustomColorScaleChange(t)},a.handleSeriesScaleChange=function(e){a.setState({seriesScale:e}),a.props.onSeriesScaleChange(e)},a.handleClose=function(){a.setState({displayBackgroundColorPicker:!1,displayTextColorPicker:!1})},a.state={backgroundColor:a.props.backgroundColor,textColor:a.props.textColor,displayBackgroundColorPicker:!1,displayTextColorPicker:!1,colorScale:"qualitativeLight",seriesScale:3,customColors:[],selectValue:""},a}return Object(n.a)(o,[{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{className:"sidebar shadow-lg",children:Object(a.jsxs)("div",{className:"sidebar-menu",children:[Object(a.jsx)("div",{className:"sidebar-brand",children:Object(a.jsxs)("div",{children:["Data Vis Palette Tool",Object(a.jsx)("p",{className:"font-size-12 mt-0 text-muted",children:"By: Kevin Chang"})]})}),Object(a.jsx)("div",{className:"sidebar-divider mb-10"}),Object(a.jsx)("h5",{className:"sidebar-title",children:"Theme"}),Object(a.jsxs)("div",{onClick:this.handleClick,className:"sidebar-link d-flex align-items-center justify-content-between",children:[Object(a.jsx)("span",{className:"circle",style:{background:this.state.backgroundColor}}),this.state.displayBackgroundColorPicker?Object(a.jsxs)("div",{className:"popover",children:[Object(a.jsx)("div",{className:"cover",onClick:this.handleClose}),Object(a.jsx)(d.a,{color:this.state.backgroundColor,onChange:this.handleBackgroundColorChange,presetColors:b})]}):null,Object(a.jsx)("div",{className:"d-flex flex-grow-1",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{className:"color-title",children:"Background Color"}),Object(a.jsx)("span",{className:"color-value",children:this.state.backgroundColor})]})}),Object(a.jsx)("div",{className:"edit flex-end",children:"Edit"})]}),Object(a.jsxs)("div",{onClick:this.handleTextClick,className:"sidebar-link d-flex align-items-center  justify-content-between",children:[Object(a.jsx)("span",{className:"circle",style:{background:this.state.textColor}}),this.state.displayTextColorPicker?Object(a.jsxs)("div",{className:"popover",children:[Object(a.jsx)("div",{className:"cover",onClick:this.handleClose}),Object(a.jsx)(d.a,{color:this.state.textColor,onChange:this.handleTextColorChange,presetColors:j})]}):null,Object(a.jsx)("div",{className:"d-flex flex-grow-1",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{className:"color-title",children:"Text Color"}),Object(a.jsx)("span",{className:"color-value",children:this.state.textColor})]})}),Object(a.jsx)("div",{className:"edit flex-end",children:"Edit"})]}),Object(a.jsx)("div",{className:"sidebar-divider my-10"}),Object(a.jsx)("h5",{className:"sidebar-title",children:"Chart Complexity"}),Object(a.jsx)("div",{className:"sidebar-link select",style:{padding:"6px 20px 24px"},children:Object(a.jsx)(g.a,{min:1,max:5,defaultValue:3,marks:{1:"Low",3:"Medium",5:"High"},step:null,onChange:this.handleSeriesScaleChange})}),Object(a.jsx)("div",{className:"sidebar-divider my-10"}),Object(a.jsx)("h5",{className:"sidebar-title",children:"Colors"}),Object(a.jsx)("div",{className:"sidebar-link select mb-5",children:Object(a.jsx)(h.a,{defaultValue:m[0],options:m,onChange:this.handleColorScaleChange})}),"custom"===e.state.colorScale?Object(a.jsx)("div",{className:"sidebar-link select pt-5",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("textarea",{className:"form-control form-control-sm",value:e.state.selectValue,onChange:e.handleCustomColorScaleChange,onBlur:e.handleCustomColorScaleChangeOnBlur}),Object(a.jsx)("div",{className:"form-text",children:"Separate HEX codes with commas. Example: #FFFFFF, #EFEFEF, #CCCCCC"})]})}):u[e.state.colorScale].map((function(e,t){return Object(a.jsxs)("div",{className:"sidebar-link d-flex align-items-center justify-content-between",children:[Object(a.jsx)("span",{className:"circle",style:{background:e}}),Object(a.jsx)("span",{className:"color-value",children:e})]},t)}))]})})}}]),o}(s.Component),p=o(30),f=o.n(p),v=o(112),O=o(64),k=[{id:"1",value:83},{id:"2",value:83},{id:"3",value:36},{id:"4",value:54},{id:"5",value:13},{id:"6",value:128}],K=function(e){Object(C.a)(o,e);var t=Object(x.a)(o);function o(e){var a;return Object(c.a)(this,o),(a=t.call(this,e)).state={textColor:a.props.textColor,colorScale:a.props.colorScale,seriesScale:a.props.seriesScale,customColors:a.props.customColors},a}return Object(n.a)(o,[{key:"componentWillReceiveProps",value:function(e){this.setState({textColor:e.textColor,colorScale:e.colorScale,seriesScale:e.seriesScale,customColors:e.customColors})}},{key:"render",value:function(){var e,t;return e="custom"===this.state.colorScale?this.state.customColors:O[this.state.colorScale],1===this.state.seriesScale?(t=k.slice(0,1),["1"]):3===this.state.seriesScale?(t=k.slice(0,3),["1","2","3"]):5===this.state.seriesScale&&(t=k,["1","2","3","4","5","6"]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(v.a,{data:t,margin:{top:20,right:20,bottom:50,left:60},padding:.3,colors:e,axisTop:null,axisRight:null,axisBottom:{tickSize:5,tickPadding:5,tickRotation:0,legend:"X-axis",legendPosition:"middle",legendOffset:32},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:"Y-axis",legendPosition:"middle",legendOffset:-40,symbolShape:"circle"},enableLabel:!1,isInteractive:!1,theme:{textColor:this.state.textColor,axis:{ticks:{line:{stroke:f()(this.state.textColor).alpha(.2).hex()}}},grid:{line:{stroke:f()(this.state.textColor).alpha(.2).hex()}}}})})}}]),o}(s.Component),F=o(64),B=[{id:"1",Category:83,"Category 2":129,"Category 3":74,"Category 4":74,"Category 5":74,"Category 6":114},{id:"2",Category:83,"Category 2":113,"Category 3":131,"Category 4":74,"Category 5":74,"Category 6":68},{id:"3",Category:36,"Category 2":53,"Category 3":191,"Category 4":74,"Category 5":74,"Category 6":134},{id:"4",Category:54,"Category 2":52,"Category 3":177,"Category 4":74,"Category 5":74,"Category 6":124},{id:"5",Category:13,"Category 2":160,"Category 3":188,"Category 4":74,"Category 5":74,"Category 6":144},{id:"6",Category:128,"Category 2":34,"Category 3":6,"Category 4":74,"Category 5":74,"Category 6":154}],P=function(e){Object(C.a)(o,e);var t=Object(x.a)(o);function o(e){var a;return Object(c.a)(this,o),(a=t.call(this,e)).state={textColor:a.props.textColor,colorScale:a.props.colorScale,seriesScale:a.props.seriesScale,customColors:a.props.customColors},a}return Object(n.a)(o,[{key:"componentWillReceiveProps",value:function(e){this.setState({textColor:e.textColor,colorScale:e.colorScale,seriesScale:e.seriesScale,customColors:e.customColors})}},{key:"render",value:function(){var e,t,o,s=[];if(1===this.state.seriesScale){e=B;for(var r=0;r<e.length;r++){(l={}).id=r,l.Category=e[r].Category,l["Category 2"]=e[r]["Category 2"],s.push(l)}t=["Category","Category 2"]}else if(3===this.state.seriesScale){e=B;for(r=0;r<e.length;r++){var l;(l={}).id=r,l.Category=e[r].Category,l["Category 2"]=e[r]["Category 2"],l["Category 3"]=e[r]["Category 3"],s.push(l)}t=["Category","Category 2","Category 3"]}else 5===this.state.seriesScale&&(s=B,t=["Category","Category 2","Category 3","Category 4","Category 5","Category 6"]);return o="custom"===this.state.colorScale?this.state.customColors:F[this.state.colorScale],Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(v.a,{data:s,keys:t,margin:{top:20,right:130,bottom:50,left:60},padding:.3,innerPadding:1,colors:o,valueScale:{type:"linear"},axisTop:null,axisRight:null,axisBottom:{tickSize:5,tickPadding:5,tickRotation:0,legend:"X-axis",legendPosition:"middle",legendOffset:32},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:"Y-axis",legendPosition:"middle",legendOffset:-40},legends:[{dataFrom:"keys",anchor:"bottom-right",direction:"column",justify:!1,translateX:120,translateY:0,itemsSpacing:2,itemWidth:80,itemHeight:20,itemDirection:"left-to-right",itemOpacity:.75,symbolSize:12,symbolShape:"circle"}],enableLabel:!1,isInteractive:!1,theme:{textColor:this.state.textColor,axis:{ticks:{line:{stroke:f()(this.state.textColor).alpha(.2).hex()}}},grid:{line:{stroke:f()(this.state.textColor).alpha(.2).hex()}}}})})}}]),o}(s.Component),N=o(64),D=[{id:"1",Category:83,"Category 2":129,"Category 3":74,"Category 4":74,"Category 5":74,"Category 6":114},{id:"2",Category:83,"Category 2":113,"Category 3":131,"Category 4":74,"Category 5":74,"Category 6":68},{id:"3",Category:36,"Category 2":53,"Category 3":191,"Category 4":74,"Category 5":74,"Category 6":134},{id:"4",Category:54,"Category 2":52,"Category 3":177,"Category 4":74,"Category 5":74,"Category 6":124},{id:"5",Category:13,"Category 2":160,"Category 3":188,"Category 4":74,"Category 5":74,"Category 6":144},{id:"6",Category:128,"Category 2":34,"Category 3":6,"Category 4":74,"Category 5":74,"Category 6":154}],A=function(e){Object(C.a)(o,e);var t=Object(x.a)(o);function o(e){var a;return Object(c.a)(this,o),(a=t.call(this,e)).state={textColor:a.props.textColor,colorScale:a.props.colorScale,seriesScale:a.props.seriesScale,customColors:a.props.customColors},a}return Object(n.a)(o,[{key:"componentWillReceiveProps",value:function(e){this.setState({textColor:e.textColor,colorScale:e.colorScale,seriesScale:e.seriesScale,customColors:e.customColors})}},{key:"render",value:function(){var e,t;e="custom"===this.state.colorScale?this.state.customColors:N[this.state.colorScale];var o,s=[];if(1===this.state.seriesScale){t=D;for(var r=0;r<t.length;r++){(l={}).id=r,l.Category=t[r].Category,l["Category 2"]=t[r]["Category 2"],s.push(l)}o=["Category","Category 2"]}else if(3===this.state.seriesScale){t=D;for(r=0;r<t.length;r++){var l;(l={}).id=r,l.Category=t[r].Category,l["Category 2"]=t[r]["Category 2"],l["Category 3"]=t[r]["Category 3"],s.push(l)}o=["Category","Category 2","Category 3"]}else 5===this.state.seriesScale&&(s=D,o=["Category","Category 2","Category 3","Category 4","Category 5","Category 6"]);return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(v.a,{data:s,keys:o,margin:{top:20,right:130,bottom:50,left:60},padding:.3,innerPadding:2,groupMode:"grouped",colors:e,axisTop:null,axisRight:null,axisBottom:{tickSize:5,tickPadding:5,tickRotation:0,legend:"X-axis",legendPosition:"middle",legendOffset:32},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:"Y-axis",legendPosition:"middle",legendOffset:-40},legends:[{dataFrom:"keys",anchor:"bottom-right",direction:"column",justify:!1,translateX:120,translateY:0,itemsSpacing:2,itemWidth:80,itemHeight:20,itemDirection:"left-to-right",itemOpacity:.75,symbolSize:12,symbolShape:"circle"}],enableLabel:!1,isInteractive:!1,theme:{textColor:this.state.textColor,axis:{ticks:{line:{stroke:f()(this.state.textColor).alpha(.2).hex()}}},grid:{line:{stroke:f()(this.state.textColor).alpha(.2).hex()}}}})})}}]),o}(s.Component),L=o(165),R=o(64),E=[{id:"Category 1",data:[{x:"1",y:47},{x:"2",y:276},{x:"3",y:8},{x:"4",y:156},{x:"5",y:174},{x:"6",y:284}]},{id:"Category 2",data:[{x:"1",y:269},{x:"2",y:109},{x:"3",y:146},{x:"4",y:157},{x:"5",y:225},{x:"6",y:248}]},{id:"Category 3",data:[{x:"1",y:9},{x:"2",y:185},{x:"3",y:4},{x:"4",y:236},{x:"5",y:177},{x:"6",y:73}]},{id:"Category 4",data:[{x:"1",y:47},{x:"2",y:276},{x:"3",y:8},{x:"4",y:156},{x:"5",y:174},{x:"6",y:284}]},{id:"Category 5",data:[{x:"1",y:47},{x:"2",y:276},{x:"3",y:8},{x:"4",y:156},{x:"5",y:174},{x:"6",y:284}]},{id:"Category 6",data:[{x:"1",y:47},{x:"2",y:276},{x:"3",y:8},{x:"4",y:156},{x:"5",y:174},{x:"6",y:284}]}],T=function(e){Object(C.a)(o,e);var t=Object(x.a)(o);function o(e){var a;return Object(c.a)(this,o),(a=t.call(this,e)).state={textColor:a.props.textColor,colorScale:a.props.colorScale,seriesScale:a.props.seriesScale,customColors:a.props.customColors},a}return Object(n.a)(o,[{key:"componentWillReceiveProps",value:function(e){this.setState({textColor:e.textColor,colorScale:e.colorScale,seriesScale:e.seriesScale,customColors:e.customColors})}},{key:"render",value:function(){var e,t;return e="custom"===this.state.colorScale?this.state.customColors:R[this.state.colorScale],1===this.state.seriesScale?t=E.slice(0,1):3===this.state.seriesScale?t=E.slice(0,3):5===this.state.seriesScale&&(t=E),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(L.a,{data:t,margin:{top:20,right:110,bottom:50,left:60},xScale:{type:"point"},yScale:{type:"linear",min:"auto",max:"auto",stacked:!0,reverse:!1},yFormat:" >-.2f",colors:e,axisTop:null,axisRight:null,axisBottom:{orient:"bottom",tickSize:5,tickPadding:5,tickRotation:0,legend:"X-axis",legendOffset:36,legendPosition:"middle"},axisLeft:{orient:"left",tickSize:5,tickPadding:5,tickRotation:0,legend:"Y-axis",legendOffset:-40,legendPosition:"middle"},pointSize:6,pointBorderWidth:2,pointBorderColor:{from:"serieColor"},pointLabelYOffset:-12,legends:[{anchor:"bottom-right",direction:"column",justify:!1,translateX:100,translateY:0,itemsSpacing:2,itemDirection:"left-to-right",itemWidth:80,itemHeight:20,itemOpacity:.75,symbolSize:12,symbolShape:"circle"}],enableLabel:!1,isInteractive:!1,theme:{textColor:this.state.textColor,axis:{ticks:{line:{stroke:f()(this.state.textColor).alpha(.2).hex()}}},grid:{line:{stroke:f()(this.state.textColor).alpha(.2).hex()}}}})})}}]),o}(s.Component),z=o(64),q=[{id:"Category 1",data:[{x:"1",y:47},{x:"2",y:276},{x:"3",y:8},{x:"4",y:156},{x:"5",y:174},{x:"6",y:284}]},{id:"Category 2",data:[{x:"1",y:269},{x:"2",y:109},{x:"3",y:146},{x:"4",y:157},{x:"5",y:225},{x:"6",y:248}]},{id:"Category 3",data:[{x:"1",y:9},{x:"2",y:185},{x:"3",y:4},{x:"4",y:236},{x:"5",y:177},{x:"6",y:73}]},{id:"Category 4",data:[{x:"1",y:47},{x:"2",y:276},{x:"3",y:8},{x:"4",y:156},{x:"5",y:174},{x:"6",y:284}]},{id:"Category 5",data:[{x:"1",y:47},{x:"2",y:276},{x:"3",y:8},{x:"4",y:156},{x:"5",y:174},{x:"6",y:284}]},{id:"Category 6",data:[{x:"1",y:47},{x:"2",y:276},{x:"3",y:8},{x:"4",y:156},{x:"5",y:174},{x:"6",y:284}]}],W=function(e){Object(C.a)(o,e);var t=Object(x.a)(o);function o(e){var a;return Object(c.a)(this,o),(a=t.call(this,e)).state={textColor:a.props.textColor,colorScale:a.props.colorScale,seriesScale:a.props.seriesScale,customColors:a.props.customColors},a}return Object(n.a)(o,[{key:"componentWillReceiveProps",value:function(e){this.setState({textColor:e.textColor,colorScale:e.colorScale,seriesScale:e.seriesScale,customColors:e.customColors})}},{key:"render",value:function(){var e,t;return e="custom"===this.state.colorScale?this.state.customColors:z[this.state.colorScale],1===this.state.seriesScale?t=q.slice(0,1):3===this.state.seriesScale?t=q.slice(0,3):5===this.state.seriesScale&&(t=q),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(L.a,{data:t,margin:{top:20,right:110,bottom:50,left:60},xScale:{type:"point"},yScale:{type:"linear",min:"auto",max:"auto",stacked:!0,reverse:!1},yFormat:" >-.2f",colors:e,axisTop:null,axisRight:null,enableArea:!0,axisBottom:{orient:"bottom",tickSize:5,tickPadding:5,tickRotation:0,legend:"X-axis",legendOffset:36,legendPosition:"middle"},axisLeft:{orient:"left",tickSize:5,tickPadding:5,tickRotation:0,legend:"Y-axis",legendOffset:-40,legendPosition:"middle"},pointSize:6,pointBorderWidth:2,pointBorderColor:{from:"serieColor"},pointLabelYOffset:-12,legends:[{anchor:"bottom-right",direction:"column",justify:!1,translateX:100,translateY:0,itemsSpacing:2,itemDirection:"left-to-right",itemWidth:80,itemHeight:20,itemOpacity:.75,symbolSize:12,symbolShape:"circle"}],enableLabel:!1,isInteractive:!1,theme:{textColor:this.state.textColor,axis:{ticks:{line:{stroke:f()(this.state.textColor).alpha(.2).hex()}}},grid:{line:{stroke:f()(this.state.textColor).alpha(.2).hex()}}}})})}}]),o}(s.Component),Q=o(325),w=o(64),Y=[{id:"Category 1",data:[{x:31,y:26},{x:66,y:1},{x:76,y:11},{x:4,y:110},{x:5,y:68},{x:27,y:62},{x:8,y:86},{x:85,y:92},{x:95,y:113},{x:45,y:106},{x:60,y:50},{x:17,y:106},{x:82,y:97},{x:26,y:108},{x:50,y:81},{x:13,y:110},{x:100,y:12},{x:69,y:51},{x:25,y:55},{x:91,y:11},{x:47,y:17},{x:21,y:18},{x:58,y:103},{x:100,y:59}]},{id:"Category 2",data:[{x:1,y:52},{x:44,y:100},{x:63,y:6},{x:81,y:71},{x:77,y:8},{x:44,y:76},{x:89,y:37},{x:55,y:89},{x:21,y:92},{x:39,y:88},{x:70,y:20},{x:82,y:22},{x:11,y:78},{x:19,y:69},{x:70,y:7},{x:97,y:17},{x:19,y:42},{x:7,y:65},{x:49,y:101},{x:65,y:8},{x:62,y:115},{x:45,y:69},{x:42,y:31},{x:91,y:49},{x:4,y:113},{x:41,y:11},{x:11,y:83},{x:59,y:112},{x:72,y:61},{x:24,y:118},{x:32,y:65}]},{id:"Category 3",data:[{x:6,y:68},{x:86,y:35},{x:61,y:44},{x:95,y:82},{x:27,y:48},{x:31,y:8},{x:66,y:36},{x:4,y:90},{x:93,y:43},{x:60,y:109},{x:0,y:26},{x:53,y:57},{x:67,y:47},{x:30,y:33},{x:14,y:10},{x:51,y:23},{x:49,y:43},{x:7,y:29},{x:9,y:67},{x:10,y:82},{x:81,y:28},{x:3,y:9}]},{id:"Category 4",data:[{x:21,y:25},{x:46,y:13},{x:36,y:11},{x:45,y:10},{x:50,y:6},{x:37,y:52},{x:18,y:66},{x:25,y:42},{x:45,y:13},{x:35,y:16},{x:80,y:50},{x:37,y:146},{x:22,y:97},{x:25,y:88},{x:40,y:51}]},{id:"Category 5",data:[{x:11,y:55},{x:40,y:10},{x:68,y:46},{x:52,y:28},{x:21,y:78},{x:79,y:49},{x:40,y:17},{x:87,y:14},{x:29,y:44},{x:14,y:123},{x:61,y:31},{x:111,y:83},{x:39,y:102},{x:32,y:81},{x:14,y:89},{x:22,y:45}]},{id:"Category 6",data:[{x:11,y:26},{x:63,y:1},{x:46,y:11},{x:42,y:110},{x:55,y:68},{x:47,y:62},{x:18,y:86},{x:45,y:92},{x:45,y:113},{x:55,y:106},{x:70,y:50},{x:27,y:106},{x:52,y:97},{x:76,y:108},{x:60,y:81},{x:113,y:110},{x:50,y:12},{x:99,y:51},{x:35,y:55},{x:21,y:11},{x:57,y:17},{x:121,y:18},{x:48,y:103},{x:20,y:59}]}],X=function(e){Object(C.a)(o,e);var t=Object(x.a)(o);function o(e){var a;return Object(c.a)(this,o),(a=t.call(this,e)).state={textColor:a.props.textColor,colorScale:a.props.colorScale,seriesScale:a.props.seriesScale,customColors:a.props.customColors},a}return Object(n.a)(o,[{key:"componentWillReceiveProps",value:function(e){this.setState({textColor:e.textColor,colorScale:e.colorScale,seriesScale:e.seriesScale,customColors:e.customColors})}},{key:"render",value:function(){var e,t;return e="custom"===this.state.colorScale?this.state.customColors:w[this.state.colorScale],1===this.state.seriesScale?t=Y.slice(0,1):3===this.state.seriesScale?t=Y.slice(0,3):5===this.state.seriesScale&&(t=Y),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(Q.a,{data:t,margin:{top:20,right:140,bottom:70,left:90},xScale:{type:"linear",min:0,max:"auto"},xFormat:function(e){return e+" kg"},yScale:{type:"linear",min:0,max:"auto"},yFormat:function(e){return e+" cm"},colors:e,blendMode:"multiply",axisTop:null,axisRight:null,axisBottom:{orient:"bottom",tickSize:5,tickPadding:5,tickRotation:0,legend:"X-axis",legendPosition:"middle",legendOffset:46},axisLeft:{orient:"left",tickSize:5,tickPadding:5,tickRotation:0,legend:"Y-axis",legendPosition:"middle",legendOffset:-60},legends:[{anchor:"bottom-right",direction:"column",justify:!1,translateX:100,translateY:0,itemsSpacing:2,itemDirection:"left-to-right",itemWidth:80,itemHeight:20,itemOpacity:.75,symbolSize:12,symbolShape:"circle"}],enableLabel:!1,isInteractive:!1,theme:{textColor:this.state.textColor,axis:{ticks:{line:{stroke:f()(this.state.textColor).alpha(.2).hex()}}},grid:{line:{stroke:f()(this.state.textColor).alpha(.2).hex()}}}})})}}]),o}(s.Component),I=o(330),H=o(64),V=[{id:"Category 1",label:"Category 1",value:422},{id:"Category 2",label:"Category 2",value:120},{id:"Category 3",label:"Category 3",value:506},{id:"Category 4",label:"Category 4",value:295},{id:"Category 5",label:"Category 5",value:439},{id:"Category 6",label:"Category 6",value:79}],M=function(e){Object(C.a)(o,e);var t=Object(x.a)(o);function o(e){var a;return Object(c.a)(this,o),(a=t.call(this,e)).state={textColor:a.props.textColor,colorScale:a.props.colorScale,seriesScale:a.props.seriesScale,customColors:a.props.customColors},a}return Object(n.a)(o,[{key:"componentWillReceiveProps",value:function(e){this.setState({textColor:e.textColor,colorScale:e.colorScale,seriesScale:e.seriesScale,customColors:e.customColors})}},{key:"render",value:function(){var e,t;return e="custom"===this.state.colorScale?this.state.customColors:H[this.state.colorScale],1===this.state.seriesScale?t=V.slice(0,1):3===this.state.seriesScale?t=V.slice(0,3):5===this.state.seriesScale&&(t=V),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(I.a,{data:t,margin:{top:20,right:80,bottom:80,left:80},innerRadius:.5,padAngle:.7,colors:e,radialLabelsSkipAngle:10,radialLabelsLinkColor:{from:"color"},sliceLabelsSkipAngle:10,legends:[{anchor:"bottom",direction:"row",justify:!1,translateX:0,translateY:56,itemsSpacing:0,itemWidth:80,itemHeight:20,itemDirection:"left-to-right",itemOpacity:1,symbolSize:12,symbolShape:"circle"}],enableSliceLabels:!1,enableLabel:!1,isInteractive:!1,theme:{textColor:this.state.textColor,axis:{ticks:{line:{stroke:f()(this.state.textColor).alpha(.2).hex()}}},grid:{line:{stroke:f()(this.state.textColor).alpha(.2).hex()}}}})})}}]),o}(s.Component),J=o(329),G=o(64),U=[{attribute:"Attribute 1",Category:64,"Category 2":73,"Category 3":57,"Category 4":57,"Category 5":57,"Category 6":57},{attribute:"Attribute 2",Category:20,"Category 2":94,"Category 3":102,"Category 4":57,"Category 5":57,"Category 6":57},{attribute:"Attribute 3",Category:41,"Category 2":21,"Category 3":106,"Category 4":57,"Category 5":57,"Category 6":57},{attribute:"Attribute 4",Category:53,"Category 2":78,"Category 3":105,"Category 4":57,"Category 5":57,"Category 6":57},{attribute:"Attribute 5",Category:86,"Category 2":39,"Category 3":48,"Category 4":57,"Category 5":57,"Category 6":57}],Z=function(e){Object(C.a)(o,e);var t=Object(x.a)(o);function o(e){var a;return Object(c.a)(this,o),(a=t.call(this,e)).state={textColor:a.props.textColor,colorScale:a.props.colorScale,seriesScale:a.props.seriesScale,customColors:a.props.customColors},a}return Object(n.a)(o,[{key:"componentWillReceiveProps",value:function(e){this.setState({textColor:e.textColor,colorScale:e.colorScale,seriesScale:e.seriesScale,customColors:e.customColors})}},{key:"render",value:function(){var e,t;e="custom"===this.state.colorScale?this.state.customColors:G[this.state.colorScale];var o,s=[];if(1===this.state.seriesScale){t=U;for(var r=0;r<t.length;r++){(l={}).attribute="Attribute "+r,l.Category=t[r].Category,s.push(l)}o=["Category"]}else if(3===this.state.seriesScale){t=U;for(r=0;r<t.length;r++){var l;(l={}).attribute="Attribute "+r,l.Category=t[r].Category,l["Category 2"]=t[r]["Category 2"],l["Category 3"]=t[r]["Category 3"],s.push(l)}o=["Category","Category 2","Category 3"]}else 5===this.state.seriesScale&&(s=U,o=["Category","Category 2","Category 3","Category 4","Category 5","Category 6"]);return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(J.a,{data:s,keys:o,indexBy:"attribute",maxValue:"auto",margin:{top:70,right:80,bottom:40,left:80},borderWidth:2,borderColor:{from:"color"},gridLevels:5,gridShape:"circular",gridLabelOffset:36,enableDots:!0,dotSize:10,dotBorderWidth:2,dotBorderColor:{from:"color"},enableDotLabel:!1,colors:e,blendMode:"multiply",enableLabel:!1,isInteractive:!1,legends:[{anchor:"top-left",direction:"column",translateX:-50,translateY:-40,itemWidth:80,itemHeight:20,itemTextColor:"#999",symbolSize:12,symbolShape:"circle"}],theme:{textColor:this.state.textColor,axis:{ticks:{line:{stroke:f()(this.state.textColor).alpha(.2).hex()}}},grid:{line:{stroke:f()(this.state.textColor).alpha(.2).hex()}}}})})}}]),o}(s.Component),$=o(326),_=o(64),ee=[{country:"1","Key 1":78,"Key 2":18,"Key 3":26,"Key 4":64,"Key 5":71,"Key 6":43,"Key 7":85,"Key 8":43,"Key 9":32,"Key 10":38},{country:"2","Key 1":49,"Key 2":59,"Key 3":61,"Key 4":64,"Key 5":90,"Key 6":64,"Key 7":50,"Key 8":94,"Key 9":30,"Key 10":20},{country:"3","Key 1":66,"Key 2":5,"Key 3":18,"Key 4":10,"Key 5":44,"Key 6":57,"Key 7":95,"Key 8":79,"Key 9":70,"Key 10":9},{country:"4","Key 1":70,"Key 2":61,"Key 3":17,"Key 4":56,"Key 5":53,"Key 6":10,"Key 7":71,"Key 8":2,"Key 9":89,"Key 10":26},{country:"5","Key 1":16,"Key 2":34,"Key 3":89,"Key 4":75,"Key 5":98,"Key 6":1,"Key 7":84,"Key 8":26,"Key 9":38,"Key 10":81},{country:"6","Key 1":46,"Key 2":48,"Key 3":57,"Key 4":33,"Key 5":93,"Key 6":89,"Key 7":1,"Key 8":13,"Key 9":32,"Key 10":21},{country:"7","Key 1":9,"Key 2":27,"Key 3":30,"Key 4":47,"Key 5":19,"Key 6":49,"Key 7":86,"Key 8":58,"Key 9":76,"Key 10":21},{country:"8","Key 1":40,"Key 2":81,"Key 3":52,"Key 4":92,"Key 5":99,"Key 6":40,"Key 7":81,"Key 8":17,"Key 9":76,"Key 10":94}],te=function(e){Object(C.a)(o,e);var t=Object(x.a)(o);function o(e){var a;return Object(c.a)(this,o),(a=t.call(this,e)).state={textColor:a.props.textColor,colorScale:"sequentialBlue"},a}return Object(n.a)(o,[{key:"componentWillReceiveProps",value:function(e){this.setState({textColor:e.textColor,colorScale:e.colorScale})}},{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)($.a,{data:ee,keys:["Key 1","Key 2","Key 3","Key 4","Key 5","Key 6","Key 7","Key 8","Key 9","Key 10"],indexBy:"country",colors:_[this.state.colorScale],margin:{top:50,right:60,bottom:60,left:60},padding:2,axisTop:{orient:"top",tickSize:5,tickPadding:5,tickRotation:-90,legend:"",legendOffset:36},axisRight:null,axisBottom:null,axisLeft:{orient:"left",tickSize:5,tickPadding:5,tickRotation:0,legend:"Y-axis",legendPosition:"middle",legendOffset:-40},cellOpacity:1,cellBorderColor:{from:"color",modifiers:[["darker",.4]]},enableLabels:!1,isInteractive:!1,theme:{textColor:this.state.textColor,axis:{ticks:{line:{stroke:f()(this.state.textColor).alpha(.2).hex()}}},grid:{line:{stroke:f()(this.state.textColor).alpha(.2).hex()}}}})})}}]),o}(s.Component),oe=function(e){Object(C.a)(o,e);var t=Object(x.a)(o);function o(e){var a;return Object(c.a)(this,o),(a=t.call(this,e)).state={backgroundColor:"#ffffff",textColor:"#000000",colorScale:"qualitativeLight",seriesScale:3,customColors:[]},a.handleBackgroundColorChange=a.handleBackgroundColorChange.bind(Object(y.a)(a)),a.handleTextColorChange=a.handleTextColorChange.bind(Object(y.a)(a)),a.handleColorScaleChange=a.handleColorScaleChange.bind(Object(y.a)(a)),a.handleSeriesScaleChange=a.handleSeriesScaleChange.bind(Object(y.a)(a)),a.handleCustomColorScaleChange=a.handleCustomColorScaleChange.bind(Object(y.a)(a)),a}return Object(n.a)(o,[{key:"handleBackgroundColorChange",value:function(e){this.setState({backgroundColor:e})}},{key:"handleTextColorChange",value:function(e){this.setState({textColor:e})}},{key:"handleColorScaleChange",value:function(e){this.setState({colorScale:e})}},{key:"handleSeriesScaleChange",value:function(e){this.setState({seriesScale:e})}},{key:"handleCustomColorScaleChange",value:function(e){this.setState({colorScale:"custom",customColors:e})}},{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"page-wrapper with-sidebar",style:{backgroundColor:this.state.backgroundColor,color:this.state.textColor},children:[Object(a.jsx)(S,{backgroundColor:this.state.backgroundColor,onBackgroundColorChange:this.handleBackgroundColorChange,textColor:this.state.textColor,onTextColorChange:this.handleTextColorChange,colorScale:this.state.colorScale,onColorScaleChange:this.handleColorScaleChange,seriesScale:this.state.seriesScale,onSeriesScaleChange:this.handleSeriesScaleChange,customColors:this.state.customColors,onCustomColorScaleChange:this.handleCustomColorScaleChange}),Object(a.jsx)("div",{className:"content-wrapper",children:Object(a.jsxs)("div",{className:"mx-auto",style:{width:"80%",maxWidth:"700px"},children:[Object(a.jsx)("h6",{className:"flex-grow-1",children:"Bar Chart"}),Object(a.jsx)("p",{className:"mt-0 text-muted",children:"Recommended: Qualitative"}),Object(a.jsx)("div",{className:"chart-container-sm",children:Object(a.jsx)(K,{textColor:this.state.textColor,colorScale:this.state.colorScale,seriesScale:this.state.seriesScale,customColors:this.state.customColors},this.state.textColor)}),Object(a.jsx)("hr",{}),Object(a.jsx)("h6",{children:"Stacked Bar Chart"}),Object(a.jsx)("p",{className:"mt-0 text-muted",children:"Recommended: Qualitative or Sequential"}),Object(a.jsx)("div",{className:"chart-container-sm",children:Object(a.jsx)(P,{textColor:this.state.textColor,colorScale:this.state.colorScale,seriesScale:this.state.seriesScale,customColors:this.state.customColors},this.state.textColor)}),Object(a.jsx)("hr",{}),Object(a.jsx)("h6",{children:"Grouped Bar Chart"}),Object(a.jsx)("p",{className:"mt-0 text-muted",children:"Recommended: Qualitative"}),Object(a.jsx)("div",{className:"chart-container-sm",children:Object(a.jsx)(A,{textColor:this.state.textColor,colorScale:this.state.colorScale,seriesScale:this.state.seriesScale,customColors:this.state.customColors},this.state.textColor)}),Object(a.jsx)("hr",{}),Object(a.jsx)("h6",{children:"Line Chart"}),Object(a.jsx)("p",{className:"mt-0 text-muted",children:"Recommended: Qualitative"}),Object(a.jsx)("div",{className:"chart-container-md",children:Object(a.jsx)(T,{textColor:this.state.textColor,colorScale:this.state.colorScale,seriesScale:this.state.seriesScale,customColors:this.state.customColors},this.state.textColor)}),Object(a.jsx)("hr",{}),Object(a.jsx)("h6",{children:"Area Chart"}),Object(a.jsx)("p",{className:"mt-0 text-muted",children:"Recommended: Qualitative"}),Object(a.jsx)("div",{className:"chart-container-md",children:Object(a.jsx)(W,{textColor:this.state.textColor,colorScale:this.state.colorScale,seriesScale:this.state.seriesScale,customColors:this.state.customColors},this.state.textColor)}),Object(a.jsx)("hr",{}),Object(a.jsx)("h6",{children:"Scatter Plot Chart"}),Object(a.jsx)("p",{className:"mt-0 text-muted",children:"Recommended: Qualitative Sequential, or Diverging"}),Object(a.jsx)("div",{className:"chart-container-md",children:Object(a.jsx)(X,{textColor:this.state.textColor,colorScale:this.state.colorScale,seriesScale:this.state.seriesScale,customColors:this.state.customColors},this.state.textColor)}),Object(a.jsx)("hr",{}),Object(a.jsx)("h6",{children:"Pie Chart"}),Object(a.jsx)("p",{className:"mt-0 text-muted",children:"Recommended: Qualitative or Sequential"}),Object(a.jsx)("div",{className:"chart-container-sm",children:Object(a.jsx)(M,{textColor:this.state.textColor,colorScale:this.state.colorScale,seriesScale:this.state.seriesScale,customColors:this.state.customColors},this.state.textColor)}),Object(a.jsx)("hr",{}),Object(a.jsx)("h6",{children:"Radar Chart"}),Object(a.jsx)("div",{className:"chart-container-lg",children:Object(a.jsx)(Z,{textColor:this.state.textColor,colorScale:this.state.colorScale,seriesScale:this.state.seriesScale,customColors:this.state.customColors},this.state.textColor)}),Object(a.jsx)("hr",{}),Object(a.jsx)("h6",{children:"Heatmap Chart"}),Object(a.jsx)("p",{className:"mt-0 text-muted",children:"Recommended: Sequential or Diverging"}),Object(a.jsx)("div",{className:"chart-container-lg",children:Object(a.jsx)(te,{textColor:this.state.textColor,colorScale:this.state.colorScale},this.state.textColor)})]})})]})})}}]),o}(s.Component),ae=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,570)).then((function(t){var o=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,l=t.getTTFB;o(e),a(e),s(e),r(e),l(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(oe,{})}),document.getElementById("root")),ae()},64:function(e,t){e.exports={qualitativeLight:["#1D6AF0","#914CD4","#00A1C2","#DA3395","#6200C2","#A70062","#1E008F","#00404E","#600558","#997809","#18703C","#FF463C"],qualitativeDark:["#1D6AF0","#AD2CA2","#B5B2FF","#00A1C2","#DF4CA2","#FFE99F","#99D9E7","#CF83C8","#FFC80F","#24A85A","#FFB5B1","#F63261"],ibmQualitativeLight:["#6929c4","#1192e8","#005d5d","#9f1853","#fa4d56","#570408","#198038","#002d9c","#ee538b","#b28600","#009d9a","#012749","#8a3800","#a56eff"],ibmQualitativeDark:["#8a3ffc","#33b1ff","#007d79","#ff7eb6","#fa4d56","#fff1f1","#6fdc8c","#4589ff","#d12771","#d2a106","#08bdba","#bae6ff","#ba4e00","#d4bbff"],sequentialPurple:["#580450","#700666","#88077C","#A00892","#AE2DA2","#BC52B3","#CB77C3","#D99CD3","#E7C1E4","#F5E6F4"],sequentialBlue:["#103A84","#144AA8","#195ACC","#1D7AF0","#3F80F2","#6197F2","#83ADF7","#A5C3F9","#C6DAFB","#E8F0FD"],diverging:["#00A1C2","#26AFCB","#4CBDD4","#73CBDD","#99D9E7","#BFE8F0","#E4F6F9","#FAE5F2","#F4BFD3","#ED99CA","#E673B6","#DF4CA2","#D8268E","#D1007A"],semantic:["#E53F36","#FCA016","#FFC80F","#209650","#3479F2"]}}},[[502,1,2]]]);
//# sourceMappingURL=main.8534fcbc.chunk.js.map