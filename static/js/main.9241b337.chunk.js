(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),m=n(6),c=n.n(m),r=(n(13),n(7)),o=n(1),u=n(2),i=n(4),s=n(3),p=function(){return l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Number"),l.a.createElement("th",null,"List Item"),l.a.createElement("th",null,"Complete"),l.a.createElement("th",null,"Remove")))},h=function(e){var t=e.toDoItems.map((function(t,n){return l.a.createElement("tr",{key:n},l.a.createElement("td",null,n+1),l.a.createElement("td",{className:t.complete?"complete":""},t.item),l.a.createElement("td",null,l.a.createElement("button",{className:"accent-button",onClick:function(){return e.completeItem(n)}},"Complete")),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){return e.removeItem(n)}},"Remove")))}));return l.a.createElement("tbody",null,t)},v=function(e){var t=e.toDoItems;return l.a.createElement("table",null,l.a.createElement(p,null),l.a.createElement(h,{toDoItems:t,removeItem:e.removeItem,completeItem:e.completeItem,itemCount:e.count}))},E=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,l=new Array(a),m=0;m<a;m++)l[m]=arguments[m];return(e=t.call.apply(t,[this].concat(l))).initialState={item:""},e.state=e.initialState,e.handleChange=function(t){var n=t.target.value;e.setState({item:n,complete:!1})},e.submit=function(){e.props.addItem(e.state.item),e.setState(e.initialState)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.item;return l.a.createElement("form",null,l.a.createElement("input",{type:"text",name:"item",value:e,placeholder:"New Item",onChange:this.handleChange}),l.a.createElement("input",{type:"button",value:"Add",className:"full-button",onClick:this.submit}))}}]),n}(a.Component),d=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,l=new Array(a),m=0;m<a;m++)l[m]=arguments[m];return(e=t.call.apply(t,[this].concat(l))).state={items:[],count:0},e.completeItem=function(t){var n=e.state.items.slice();n.forEach((function(e,n){t===n&&(e.complete=!0)})),e.setState({items:n})},e.addItem=function(t){e.setState({items:[].concat(Object(r.a)(e.state.items),[{item:t}])});var n=e.state.count+=1;e.setState({count:n})},e.removeItem=function(t){var n=e.state.items.filter((function(e,n){return n!==t}));e.setState({items:n});var a=e.state.count-=1;e.setState({count:a})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.items;return l.a.createElement("div",{className:"small-container"},l.a.createElement("div",{className:"margin-bottom"},l.a.createElement("h1",null,"To Do List")),l.a.createElement(v,{toDoItems:e,removeItem:this.removeItem,completeItem:this.completeItem,count:this.state.count}),0===this.state.count?l.a.createElement("p",null,"You have no items yet."):"",l.a.createElement(E,{addItem:this.addItem}))}}]),n}(a.Component);c.a.render(l.a.createElement(d,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.9241b337.chunk.js.map