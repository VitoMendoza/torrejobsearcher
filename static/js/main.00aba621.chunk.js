(this.webpackJsonptorrejobsearcher=this.webpackJsonptorrejobsearcher||[]).push([[0],{12:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(2),c=t.n(o),s=(t(12),t(3)),i=t(4),l=t(6),u=t(5),m=function(e){var n=e.subjectId,t=e.name,a=e.username,o=e.professionalHeadline,c=e.locationName,s=e.picture,i=e.amount,l=e.currency,u=e.periodicity,m=o.length>40?o.slice(0,37)+"...":o,p=null==s?"https://voxpopulii.in/system/static/dashboard/img/default_user.png":s,d=""===i?"Private":i+l+" "+u;return r.a.createElement("div",{className:"bg-dark-gray dib br3 pa2 ma2 grow bw2 shadow-5",id:"".concat(n)},r.a.createElement("div",{className:""},r.a.createElement("div",{className:""},r.a.createElement("img",{className:"br-100 pa1 ba b--black-10 h3 w3",src:"".concat(p),alt:"foto"})),r.a.createElement("div",null,r.a.createElement("a",{href:"https://bio.torre.co/".concat(a),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("h2",null,t)),r.a.createElement("h3",null,m),r.a.createElement("p",null,c),r.a.createElement("h3",{className:"rate"},"Rate: ",d))))},p=function(e){var n=e.people;return 0===n.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h3",null,"No results.")):r.a.createElement("div",null,n.map((function(e,t){var a="",o="",c="";return null==n[t].compensations?r.a.createElement(m,{key:t,subjectId:n[t].subjectId,name:n[t].name,username:n[t].username,professionalHeadline:n[t].professionalHeadline,locationName:n[t].locationName,picture:n[t].picture,amount:"",currency:"",periodicity:""}):null!=n[t].compensations.employee?(a=null==n[t].compensations.employee.amount?"":n[t].compensations.employee.amount,o=null==n[t].compensations.employee.currency?"":n[t].compensations.employee.currency,c=null==n[t].compensations.employee.periodicity?"":n[t].compensations.employee.periodicity,r.a.createElement(m,{key:t,subjectId:n[t].subjectId,name:n[t].name,username:n[t].username,professionalHeadline:n[t].professionalHeadline,locationName:n[t].locationName,picture:n[t].picture,amount:a,currency:o,periodicity:c})):null!=n[t].compensations.freelancer?(a=null==n[t].compensations.freelancer.amount?"":n[t].compensations.freelancer.amount,o=null==n[t].compensations.freelancer.currency?"":n[t].compensations.freelancer.currency,c=null==n[t].compensations.freelancer.periodicity?"":n[t].compensations.freelancer.periodicity,r.a.createElement(m,{key:t,subjectId:n[t].subjectId,name:n[t].name,username:n[t].username,professionalHeadline:n[t].professionalHeadline,locationName:n[t].locationName,picture:n[t].picture,amount:a,currency:o,periodicity:c})):null!=n[t].compensations.intern?(a=null==n[t].compensations.intern.amount?"":n[t].compensations.intern.amount,o=null==n[t].compensations.intern.currency?"":n[t].compensations.intern.currency,c=null==n[t].compensations.intern.periodicity?"":n[t].compensations.intern.periodicity,r.a.createElement(m,{key:t,subjectId:n[t].subjectId,name:n[t].name,username:n[t].username,professionalHeadline:n[t].professionalHeadline,locationName:n[t].locationName,picture:n[t].picture,amount:a,currency:o,periodicity:c})):r.a.createElement(m,{key:t,subjectId:n[t].subjectId,name:n[t].name,username:n[t].username,professionalHeadline:n[t].professionalHeadline,locationName:n[t].locationName,picture:n[t].picture,amount:"",currency:"",periodicity:""})})),";")},d=function(e){e.searchfield;var n=e.searchChange,t=e.keyPress;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--gray bg-black",type:"search",placeholder:"search people",onChange:n,onKeyDown:t}))},h=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)},f=function(e){Object(l.a)(t,e);var n=Object(u.a)(t);function t(){var e;return Object(s.a)(this,t),(e=n.call(this)).onSearchChange=function(n){""===n.target.value.trim&&(e.setState({searchfield:n.target.value}),e.name.term=n.target.value,e.verifyText(e.name))},e.onkeyPress=function(n){13===n.keyCode&&(e.setState({searchfield:n.target.value}),e.name.term=n.target.value,e.verifyText(e.name))},e.state={people:[],searchfield:"",response:!1},e.name={term:""},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://search.torre.co/people/_search/?currency=USD%24&page=0&periodicity=hourly&aggregate=true&offset=0&size=20",{method:"POST"}).then((function(e){return e.json()})).then((function(n){e.setState({people:n.results,response:!0})}))}},{key:"verifyText",value:function(e){var n=this;this.setState({response:!1}),""===e.term?fetch("https://search.torre.co/people/_search/?currency=USD%24&page=0&periodicity=hourly&aggregate=true&offset=0&size=20",{method:"POST"}).then((function(e){return e.json()})).then((function(e){n.setState({people:e.results,response:!0})})):fetch("https://search.torre.co/people/_search/?currency=USD%24&page=0&periodicity=hourly&aggregate=true&offset=0&size=20",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e})}).then((function(e){return e.json()})).then((function(e){n.setState({people:e.results,response:!0})}))}},{key:"render",value:function(){var e=this.state,n=e.people,t=e.searchfield,a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Find People in Torre"),r.a.createElement(d,{searchChange:this.onSearchChange,keyPress:this.onkeyPress}),r.a.createElement(h,null,r.a.createElement(p,{people:a})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(13);c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,n,t){e.exports=t(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.00aba621.chunk.js.map