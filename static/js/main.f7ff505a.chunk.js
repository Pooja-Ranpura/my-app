(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,a,n){},14:function(e,a,n){},16:function(e,a,n){"use strict";n.r(a);var i=n(1),t=n(3),r=n.n(t),s=(n(12),n(4)),o=n(5),c=n(7),l=n(6),h=n(0),m=function(e){var a=e.name,n=e.email,i=e.id;return Object(h.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(h.jsx)("img",{alt:"photo",src:"https://robohash.org/"+i}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:a}),Object(h.jsx)("p",{children:n})]})]})},u=function(e){var a=e.robots;return Object(h.jsx)("div",{children:a.map((function(e,n){return Object(h.jsx)(m,{id:a[n].id,name:a[n].name,email:a[n].email},n)}))})},d=function(e){e.searchfield;var a=e.searchChange;return Object(h.jsx)("div",{className:"pa2",children:Object(h.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:a})})},b=function(e){return Object(h.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:e.children})},j=(n(14),[{id:1,name:"Pooja",username:"Pooja",email:"pooja123@gmail.com"},{id:2,name:"Ronak",username:"Ronak",email:"ronak@gmail.com"},{id:3,name:"Kinjal",username:"Kinjal",email:"kinjal@yesenia.net"},{id:4,name:"Surabhi",username:"Surabhi",email:"surabhi.OConner@kory.org"},{id:5,name:"Nishita",username:"Nishita",email:"nishita@annie.ca"},{id:6,name:"Rushi",username:"Rushi",email:"rushi_Dach@jasper.info"},{id:7,name:"Bansari",username:"Bansari",email:"bansari.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),g=function(e){Object(c.a)(n,e);var a=Object(l.a)(n);function n(){var e;return Object(s.a)(this,n),(e=a.call(this)).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={robots:j,searchfield:""},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,a=e.robots,n=e.searchfield,i=a.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return a.length?Object(h.jsxs)("div",{className:"tc",children:[Object(h.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(h.jsx)(d,{searchChange:this.onSearchChange}),Object(h.jsx)(b,{children:Object(h.jsx)(u,{robots:i})})]}):Object(h.jsx)("h1",{children:"Loading"})}}]),n}(i.Component),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(a){var n=a.getCLS,i=a.getFID,t=a.getFCP,r=a.getLCP,s=a.getTTFB;n(e),i(e),t(e),r(e),s(e)}))};n(15);r.a.render(Object(h.jsx)(g,{}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.f7ff505a.chunk.js.map