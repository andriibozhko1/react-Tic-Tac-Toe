(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,a){"use strict";a.r(e);var s=a(1),n=a(3),r=a(4),i=a(7),c=a(5),u=a(8),l=a(0),o=a.n(l),m=a(6),f=a.n(m),d=(a(16),function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(i.a)(this,Object(c.a)(e).call(this,t))).putValueToArray=function(t){if(t.target.dataset.isEmpty){var e=+t.target.dataset.id,n=Object(s.a)(a.state.cells),r=Object(s.a)(a.state.crossStatus),i=Object(s.a)(a.state.circleStatus);n[e].isEmpty=null,a.counter++%2===0?(n[e].status="cross",r.push(e)):(n[e].status="circle",i.push(e)),a.setState({cells:n,circleStatus:i.sort(function(t,e){return t<e?-1:1}),crossStatus:r.sort(function(t,e){return t<e?-1:1})},function(){a.checkWinCombination()})}},a.fillTable=function(){for(var t=[],e=0;e<9;e++){var a={isEmpty:!0,status:!1,id:e};t.push(a)}return t},a.checkWinCombination=function(){var t=0;a.winCombination.map(function(e){var s=a.state.crossStatus.filter(function(t){return~e.indexOf(t)}),n=a.state.circleStatus.filter(function(t){return~e.indexOf(t)});return JSON.stringify(e)===JSON.stringify(s)?(alert("WIN: X"),void a.restartGame()):JSON.stringify(e)===JSON.stringify(n)?(alert("WIN: O"),void a.restartGame()):t>=a.state.cells.length?(alert("Draw"),void a.restartGame()):void 0}),a.state.cells.map(function(e){e.isEmpty||t++})},a.restartGame=function(){a.counter=0,a.setState({cells:a.fillTable(),crossStatus:[],circleStatus:[]})},a.counter=0,a.winCombination=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a.state={cells:a.fillTable(),crossStatus:[],circleStatus:[]},a}return Object(u.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"Game"},this.state.cells.map(function(e,a){return o.a.createElement("div",{key:a,className:"Game__cell ".concat(e.status?"Game__cell-".concat(e.status):""),"data-status":e.status,"data-id":e.id,"data-is-empty":e.isEmpty,onClick:t.putValueToArray})})),o.a.createElement("div",{className:"Game__restart-btn",onClick:this.restartGame},"RESTART GAME"))}}]),e}(l.Component));f.a.render(o.a.createElement(d,null),document.getElementById("app"))},16:function(t,e,a){},9:function(t,e,a){t.exports=a(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.9ea21b16.chunk.js.map