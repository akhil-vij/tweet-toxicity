(this["webpackJsonpnode-knockout-2019"]=this["webpackJsonpnode-knockout-2019"]||[]).push([[0],{62:function(t,e,a){t.exports=a(81)},67:function(t,e,a){},77:function(t,e){},78:function(t,e){},79:function(t,e){},80:function(t,e,a){},81:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),r=a(8),s=a.n(r),c=(a(67),a(21)),o=a(17),l=a.n(o),u=a(33),h=a(37),d=a(22),m=a(48),f=a(49),y=a(12),x=a(53),p=a(42),b=a(119),v=a(122),E=a(124),w=a(128),g=a(127),k=a(125),T=a(133),_=a(126),R=[{id:"text",label:"Tweet",minWidth:500,width:500},{id:"identity_attack",label:"Identity Attack",width:70,format:function(t){return t.toLocaleString()}},{id:"insult",label:"Insult",width:70,format:function(t){return t.toLocaleString()}},{id:"obscene",label:"Obscene",width:70,format:function(t){return t.toLocaleString()}},{id:"severe_toxicity",label:"Severe Toxicity",width:70,format:function(t){return t.toLocaleString()}},{id:"sexual_explicit",label:"Sexual Explicit",width:70,format:function(t){return t.toLocaleString()}},{id:"threat",label:"Threat",width:70,format:function(t){return t.toLocaleString()}},{id:"toxicity",label:"Toxicity",width:70,format:function(t){return t.toLocaleString()}}],U=Object(b.a)({root:{width:"100%"},tableWrapper:{maxHeight:440,overflow:"auto"}});function O(t){var e=U(),a=i.a.useState(0),n=Object(p.a)(a,2),r=n[0],s=n[1],c=i.a.useState(10),o=Object(p.a)(c,2),l=o[0],u=o[1],h=t.tweets||[];return i.a.createElement(v.a,{className:e.root},i.a.createElement("div",{className:e.tableWrapper},i.a.createElement(E.a,{stickyHeader:!0,"aria-label":"sticky table"},i.a.createElement(k.a,null,i.a.createElement(_.a,null,R.map((function(t){return i.a.createElement(g.a,{key:t.id,align:t.align,style:{minWidth:t.minWidth,width:t.width}},t.label)})))),i.a.createElement(w.a,null,h.slice(r*l,r*l+l).map((function(t){return i.a.createElement(_.a,{hover:!0,role:"checkbox",tabIndex:-1,key:t.code},R.map((function(e){var a=t[e.id];return i.a.createElement(g.a,{key:e.id,align:e.align,className:"TRUE"===a?"red":"green"},e.format&&"number"===typeof a?e.format(a):a)})))}))))),i.a.createElement(T.a,{rowsPerPageOptions:[10,25,100],component:"div",count:h.length,rowsPerPage:l,page:r,onChangePage:function(t,e){s(e)},onChangeRowsPerPage:function(t){u(+t.target.value),s(0)}}))}var j=a(134),S=a(131),C=a(51),P=(a(80),[{text:"I will kill your entire family if you do not give me $100000 as ransom amount.",identity_attack:"-",insult:"-",obscene:"-",severe_toxicity:"-",sexual_explicit:"-",threat:"-",toxicity:"-"},{text:"You are writing stupid comments from your room hidden behind your screen. You are quite astonishingly stupid.",identity_attack:"-",insult:"-",obscene:"-",severe_toxicity:"-",sexual_explicit:"-",threat:"-",toxicity:"-"},{text:"What a lovely and bright day. Sun is shining in the clear sky :)",identity_attack:"-",insult:"-",obscene:"-",severe_toxicity:"-",sexual_explicit:"-",threat:"-",toxicity:"-"},{text:"What a lovely and bright day. Sun is shining in the clear sky :). Perfect day for murdering trolls like you.",identity_attack:"-",insult:"-",obscene:"-",severe_toxicity:"-",sexual_explicit:"-",threat:"-",toxicity:"-"},{text:"You are a racist moron.",identity_attack:"-",insult:"-",obscene:"-",severe_toxicity:"-",sexual_explicit:"-",threat:"-",toxicity:"-"},{text:"RT @p_r_k_d_l: this is a stupid idea but i have to get this out of my system https://t.co/6H5BtRh8rL",identity_attack:"-",insult:"-",obscene:"-",severe_toxicity:"-",sexual_explicit:"-",threat:"-",toxicity:"-"}]),W=function(t){function e(t){var a;return Object(h.a)(this,e),(a=Object(m.a)(this,Object(f.a)(e).call(this,t))).state={tweets:P},a.handleEnter=a.handleEnter.bind(Object(y.a)(a)),a.handleClear=a.handleClear.bind(Object(y.a)(a)),a.handleFetch=a.handleFetch.bind(Object(y.a)(a)),a.handlePopulate=a.handlePopulate.bind(Object(y.a)(a)),a.model=null,a}return Object(x.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){var t=Object(u.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a(.5);case 2:return this.model=t.sent,t.next=5,this.model.classify(this.state.tweets.map((function(t){return t.text})));case 5:e=t.sent,this.setState((function(t){return{tweets:t.tweets.map((function(t,a){var n={};return n.text=t.text,n.identity_attack=e[0].results[a].match?"TRUE":"-",n.insult=e[1].results[a].match?"TRUE":"-",n.obscene=e[2].results[a].match?"TRUE":"-",n.severe_toxicity=e[3].results[a].match?"TRUE":"-",n.sexual_explicit=e[4].results[a].match?"TRUE":"-",n.threat=e[5].results[a].match?"TRUE":"-",n.toxicity=e[6].results[a].match?"TRUE":"-",n}))}}));case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"handleClear",value:function(){this.setState({tweets:[]})}},{key:"handlePopulate",value:function(){var t=Object(u.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.handleClear(),t.next=3,this.model.classify(P.map((function(t){return t.text})));case 3:e=t.sent,this.setState((function(t){return{tweets:P.map((function(t,a){var n={};return n.text=t.text,n.identity_attack=e[0].results[a].match?"TRUE":"-",n.insult=e[1].results[a].match?"TRUE":"-",n.obscene=e[2].results[a].match?"TRUE":"-",n.severe_toxicity=e[3].results[a].match?"TRUE":"-",n.sexual_explicit=e[4].results[a].match?"TRUE":"-",n.threat=e[5].results[a].match?"TRUE":"-",n.toxicity=e[6].results[a].match?"TRUE":"-",n}))}}));case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"handleFetch",value:function(){var t=this;this.handleClear(),fetch("/search").then((function(t){return t.json()})).then(function(){var e=Object(u.a)(l.a.mark((function e(a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=14;break}if(n=[],!a.statuses||!a.statuses.length){e.next=8;break}return e.next=5,t.model.classify(a.statuses.map((function(t){return t.text})));case 5:n=e.sent,e.next=13;break;case 8:return a.statuses=[],a.statuses.push(P[5]),e.next=12,t.model.classify(a.statuses.map((function(t){return t.text})));case 12:n=e.sent;case 13:t.setState((function(t){return{tweets:a.statuses.map((function(t,e){var a={};return a.text=t.text,a.identity_attack=n[0].results[e].match?"TRUE":"-",a.insult=n[1].results[e].match?"TRUE":"-",a.obscene=n[2].results[e].match?"TRUE":"-",a.severe_toxicity=n[3].results[e].match?"TRUE":"-",a.sexual_explicit=n[4].results[e].match?"TRUE":"-",a.threat=n[5].results[e].match?"TRUE":"-",a.toxicity=n[6].results[e].match?"TRUE":"-",a}))}}));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"handleEnter",value:function(){var t=Object(u.a)(l.a.mark((function t(e){var a,n,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(13!==e.keyCode){t.next=17;break}return a=e.target.value,e.target.value="",t.next=5,this.model.classify(a);case 5:n=t.sent,0,(i={}).text=a,i.identity_attack=n[0].results[0].match?"TRUE":"-",i.insult=n[1].results[0].match?"TRUE":"-",i.obscene=n[2].results[0].match?"TRUE":"-",i.severe_toxicity=n[3].results[0].match?"TRUE":"-",i.sexual_explicit=n[4].results[0].match?"TRUE":"-",i.threat=n[5].results[0].match?"TRUE":"-",i.toxicity=n[6].results[0].match?"TRUE":"-",this.setState({tweets:[].concat(Object(c.a)(this.state.tweets),[i])});case 17:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(j.a,{disabled:!0,id:"outlined-disabled",label:"Text/Tweet Monitoring Application",defaultValue:"This application uses Deep Neural Networks to find out rude/offensive language in texts/tweets.  The tensorflow model is loaded when the page loads, so you might have to wait for 4-5 seconds before you see the prediction of the model. The application is seeded with some dummy data, you can clear the dummy data and fetch random tweets from the twitter API. This application can also be used as a real time rude/offensive language detection in tweets. REMEMBER - Please avoid using offensive language in your social media platforms :) ",fullWidth:!0,multiline:!0,margin:"normal",variant:"outlined"}),i.a.createElement("div",{className:"button-cont"},i.a.createElement(S.a,{variant:"contained",color:"primary",onClick:this.handleFetch},"Fetch Random Tweet(s)"),i.a.createElement(S.a,{onClick:this.handleClear},"Clear Table"),i.a.createElement(S.a,{onClick:this.handlePopulate},"Populate with Dummy Data")),i.a.createElement(O,{tweets:this.state.tweets}),i.a.createElement("div",{className:"manual-analysis-cont"},i.a.createElement(j.a,{fullWidth:!0,id:"outlined-basic",label:"Enter any text for Toxicity classification and press Enter",variant:"outlined",onChange:this.handleChange,onKeyDown:this.handleEnter})))}}]),e}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[62,1,2]]]);
//# sourceMappingURL=main.7adb9915.chunk.js.map