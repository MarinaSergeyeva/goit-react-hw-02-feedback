(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,function(e,t,a){e.exports={statisticsTitle:"Statistics_statisticsTitle__emPMy",statisticsList:"Statistics_statisticsList__10woM",statisticsListItem:"Statistics_statisticsListItem__1h9Yr",statisticsItem:"Statistics_statisticsItem__3jqm-"}},,,,function(e,t,a){e.exports={feedbackTitle:"Feedback_feedbackTitle__3FniE"}},function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(7),i=a.n(s),r=(a(15),a(8)),l=a(1),o=a(2),u=a(4),m=a(3),b=a(9),p=a.n(b),d=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.onLeaveFeedback;return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:p.a.feedbackTitle},"Please leave feedback"),c.a.createElement("button",{type:"button",name:"good",onClick:e},"Good"),c.a.createElement("button",{type:"button",name:"neutral",onClick:e},"Neutral"),c.a.createElement("button",{type:"button",name:"bad",onClick:e},"Bad"))}}]),a}(n.Component),E=a(5),f=a.n(E),v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.good,a=e.bad,n=e.neutral,s=e.total,i=e.positivePercentage;return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:f.a.statisticsTitle},"Statistics"),0===s?"No feedback given":c.a.createElement("ul",{className:f.a.statisticsList},c.a.createElement("li",null,c.a.createElement("p",{className:f.a.statisticsItem},"Good: ",c.a.createElement("span",null,t))),c.a.createElement("li",null,c.a.createElement("p",{className:f.a.statisticsItem},"Neutral: ",c.a.createElement("span",null,n))),c.a.createElement("li",null,c.a.createElement("p",{className:f.a.statisticsItem},"Bad: ",c.a.createElement("span",null,a))),c.a.createElement("li",null,c.a.createElement("p",{className:f.a.statisticsItem},"Total: ",c.a.createElement("span",null,s))),c.a.createElement("li",null,c.a.createElement("p",{className:f.a.statisticsItem},"Positive Percentage:",c.a.createElement("span",null,isNaN(i)?0:i,"%")))))}}]),a}(n.Component),k=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.good,a=e.bad,n=e.neutral,s=e.onLeaveFeedback,i=t+a+n,r=(100*t/i).toFixed(2);return c.a.createElement(c.a.Fragment,null,c.a.createElement(d,{onLeaveFeedback:s}),c.a.createElement(v,{good:t,neutral:n,bad:a,total:i,positivePercentage:r}))}}]),a}(n.Component),h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){var a=t.target.name;e.setState((function(e){return Object(r.a)({},a,e[a]+1)}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad;return c.a.createElement(k,{title:"",good:t,neutral:a,bad:n,onLeaveFeedback:this.onLeaveFeedback})}}]),a}(n.Component);i.a.render(c.a.createElement(h,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.39cec9fb.chunk.js.map