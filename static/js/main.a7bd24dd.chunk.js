(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,a){"use strict";a.r(e);var n=a(1),s=a(3),c=a(4),i=a(7),r=a(5),u=a(8),l=a(0),o=a.n(l),f=a(6),m=a.n(f),S=(a(16),function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(i.a)(this,Object(r.a)(e).call(this,t))).putValueToArray=function(t){if(t.isEmpty){var e=+t.id,s=Object(n.a)(a.state.cells),c=Object(n.a)(a.state.crossStatus),i=Object(n.a)(a.state.circleStatus);s[e].isEmpty=null,a.counter++%2===0?(s[e].status="cross",c.push(e)):(s[e].status="circle",i.push(e)),a.setState({cells:s,circleStatus:i.sort(function(t,e){return t<e?-1:1}),crossStatus:c.sort(function(t,e){return t<e?-1:1})},function(){a.checkWinCombination()})}},a.fillTable=function(){for(var t=[],e=0;e<9;e++){var a={isEmpty:!0,status:!1,id:e};t.push(a)}return t},a.checkWinCombination=function(){a.winCombination.map(function(t){var e=a.state.crossStatus.filter(function(e){return~t.indexOf(e)}),n=a.state.circleStatus.filter(function(e){return~t.indexOf(e)});JSON.stringify(t)===JSON.stringify(e)?(a.winStatus="X",alert("WIN: ".concat(a.winStatus)),a.restartGame()):JSON.stringify(t)===JSON.stringify(n)&&(a.winStatus="O",alert("WIN: ".concat(a.winStatus)),a.restartGame())}),!a.winStatus&&a.counter>=9&&(a.winStatus="Draw",alert(a.winStatus),a.restartGame())},a.restartGame=function(){a.setState({cells:a.fillTable(),crossStatus:[],circleStatus:[]},function(){a.counter=0,a.winStatus=!1})},a.counter=0,a.winCombination=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a.winStatus=!1,a.state={cells:a.fillTable(),crossStatus:[],circleStatus:[]},a}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"Game"},this.state.cells.map(function(e,a){return o.a.createElement("div",{key:a,className:"Game__cell ".concat(e.status?"Game__cell-".concat(e.status):""),onClick:function(){t.putValueToArray(e)}})})),o.a.createElement("div",{className:"Game__restart-btn",onClick:this.restartGame},"RESTART GAME"))}}]),e}(l.Component));m.a.render(o.a.createElement(S,null),document.getElementById("app"))},16:function(t,e,a){},9:function(t,e,a){t.exports=a(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.a7bd24dd.chunk.js.map