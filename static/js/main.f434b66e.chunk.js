(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,a,t){e.exports=t(38)},31:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var i=t(0),s=t.n(i),n=t(21),u=t.n(n),r=(t(31),t(10)),l=t(4),o=t(5),m=t(7),c=t(6),d=t(8),p=t(15);var v=function(e){var a=e.onSubmit,t=void 0===a?function(){}:a,n=e.placeholder,u=void 0===n?"":n,r=Object(i.useState)(""),l=Object(p.a)(r,2),o=l[0],m=l[1];return s.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(o),m("")}},s.a.createElement("input",{onChange:function(e){return m(e.target.value)},className:"input",placeholder:u||"",value:o}))},g=function(e){function a(){return Object(l.a)(this,a),Object(m.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"onSubmit",value:function(e){console.log(e)}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(v,{placeholder:"Search...",onSubmit:this.onSubmit}))}}]),a}(i.Component);var k=function(){var e=Object(r.d)(function(e){return e.theme.current}),a=Object(r.c)(function(e){return e.theme.switchTheme});return s.a.createElement("header",{className:"header"},s.a.createElement("div",{className:"logo"},"Koala Life"),s.a.createElement("div",{className:"header-items-container"},s.a.createElement(g,null),s.a.createElement("div",{className:"theme-button",onClick:a},"light"===e?"\ud83c\udf19":"\u2600\ufe0f")))},b=function(e){function a(){return Object(l.a)(this,a),Object(m.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"footer"},"Some footer stuff")}}]),a}(i.Component),h=t(41),j=t(39),f=t(42),E=function(e){function a(){var e,t;Object(l.a)(this,a);for(var i=arguments.length,s=new Array(i),n=0;n<i;n++)s[n]=arguments[n];return(t=Object(m.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(s)))).openStory=function(e){t.props.history.push("/story/"+e)},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"story-item"},s.a.createElement("div",{className:"si-heading-container"},s.a.createElement("div",{className:"story-item-heading",onClick:function(){return e.openStory(e.props.id)}},this.props.heading),s.a.createElement("div",{className:"story-item-tags"},this.props.tags.map(function(e,a){return s.a.createElement("div",{className:"story-item-tag",key:a},e)}))),s.a.createElement("div",{className:"story-item-summary"},this.props.summary),s.a.createElement("div",{className:"story-item-description"},this.props.description,s.a.createElement("div",{className:"read-more",onClick:function(){return e.openStory(e.props.id)}}," Read more \xbb")),s.a.createElement("div",{className:"story-item-bottom"},s.a.createElement("div",{className:"story-item-date"},"Published: "+this.props.date),s.a.createElement("div",{className:"story-item-views"},"Views: "+this.props.views)))}}]),a}(i.Component),N=Object(f.a)(E),O=[{id:685587,heading:"Lugu sellest kuidas ma loomaaias k\xe4isin",summary:"See on lugu Juhist ja tema kaasaelajatest",tags:["Hello","Hola","Random Tag"],description:"Juht tervitab oma kaasaelajaid: \u201cTere, s\xf5brad, tuttavad ja koost\xf6\xf6partnerid. Kirjutan Teile, sest inimesed on natuke mures, mis minuga toimub. Annan teada, et minuga on \xfcldiselt k\xf5ik okei, vaid pisemad kahjustused, neist hullemaid suutsin ennetada. Ma luban, et kirjutan peagi ka t\xe4psemalt, mis maratonil toimus. See v\xf5istlus on minutite m\xe4ng, kus valikuks v\xf5ib osutuda j\xe4tkata v\xf5i m\xf5nest j\xe4semest ilma j\xe4\xe4da. Seega ei saa ma j\xe4tta lahti seletamata, mis see olukord tegelikult t\xe4hendab. Muidu v\xf5ib m\xf5ne jaoks see esmapilgul tunduda kui tore jalutusk\xe4ik?",date:"09.02.2019",views:13},{id:685587,heading:"Uus lugu!!!",tags:["Yes","Hola","Random Tag"],description:"Yukon Arctic Ultra eelmise aasta rekordiomanik Casper Wakefield toob Juhti osalemise v\xe4lja kui kangelasteo. \u201cTean, et praegu emotsioonid keevad ja v\xf5id olla olukorra peale vihane. Ometi oled Sa kangelane ja v\xe4ga unikaalne sportlane! Koos saame taastumise j\xe4rel teekonnale tagasi vaadata ja hea anal\xfc\xfcsi teha,\u201d kirjutas ta Juhtile.",date:"09.02.2019",views:33},{id:685587,heading:"Saias sadas saia sadas aias!",summary:"Random kirjeldus",tags:["Hello","Hola","Random Tag"],description:"Juht tervitab oma kaasaelajaid: \u201cTere, s\xf5brad, tuttavad ja koost\xf6\xf6partnerid. Kirjutan Teile, sest inimesed on natuke mures, mis minuga toimub. Annan teada, et minuga on \xfcldiselt k\xf5ik okei, vaid pisemad kahjustused, neist hullemaid suutsin ennetada. Ma luban, et kirjutan peagi ka t\xe4psemalt, mis maratonil toimus. See v\xf5istlus on minutite m\xe4ng, kus valikuks v\xf5ib osutuda j\xe4tkata v\xf5i m\xf5nest j\xe4semest ilma j\xe4\xe4da. Seega ei saa ma j\xe4tta lahti seletamata, mis see olukord tegelikult t\xe4hendab. Muidu v\xf5ib m\xf5ne jaoks see esmapilgul tunduda kui tore jalutusk\xe4ik?",date:"09.02.2019",views:13},{id:685587,heading:"Uus lugu!!!",tags:["Yes","Hola","Random Tag"],description:"Yukon Arctic Ultra eelmise aasta rekordiomanik Casper Wakefield toob Juhti osalemise v\xe4lja kui kangelasteo. \u201cTean, et praegu emotsioonid keevad ja v\xf5id olla olukorra peale vihane. Ometi oled Sa kangelane ja v\xe4ga unikaalne sportlane! Koos saame taastumise j\xe4rel teekonnale tagasi vaadata ja hea anal\xfc\xfcsi teha,\u201d kirjutas ta Juhtile.",date:"09.02.2019",views:33},{id:685587,heading:"Pealkiri...",tags:["Hello","Hola","Random Tag"],description:"Juht tervitab oma kaasaelajaid: \u201cTere, s\xf5brad, tuttavad ja koost\xf6\xf6partnerid. Kirjutan Teile, sest inimesed on natuke mures, mis minuga toimub. Annan teada, et minuga on \xfcldiselt k\xf5ik okei, vaid pisemad kahjustused, neist hullemaid suutsin ennetada. Ma luban, et kirjutan peagi ka t\xe4psemalt, mis maratonil toimus. See v\xf5istlus on minutite m\xe4ng, kus valikuks v\xf5ib osutuda j\xe4tkata v\xf5i m\xf5nest j\xe4semest ilma j\xe4\xe4da. Seega ei saa ma j\xe4tta lahti seletamata, mis see olukord tegelikult t\xe4hendab. Muidu v\xf5ib m\xf5ne jaoks see esmapilgul tunduda kui tore jalutusk\xe4ik?",date:"09.02.2019",views:13},{id:685587,heading:"Uus lugu!!!",tags:["Yes","Hola","Random Tag"],description:"Yukon Arctic Ultra eelmise aasta rekordiomanik Casper Wakefield toob Juhti osalemise v\xe4lja kui kangelasteo. \u201cTean, et praegu emotsioonid keevad ja v\xf5id olla olukorra peale vihane. Ometi oled Sa kangelane ja v\xe4ga unikaalne sportlane! Koos saame taastumise j\xe4rel teekonnale tagasi vaadata ja hea anal\xfc\xfcsi teha,\u201d kirjutas ta Juhtile.",date:"09.02.2019",views:33},{id:685587,heading:"Pealkiri...",tags:["Hello","Hola","Random Tag"],description:"Juht tervitab oma kaasaelajaid: \u201cTere, s\xf5brad, tuttavad ja koost\xf6\xf6partnerid. Kirjutan Teile, sest inimesed on natuke mures, mis minuga toimub. Annan teada, et minuga on \xfcldiselt k\xf5ik okei, vaid pisemad kahjustused, neist hullemaid suutsin ennetada. Ma luban, et kirjutan peagi ka t\xe4psemalt, mis maratonil toimus. See v\xf5istlus on minutite m\xe4ng, kus valikuks v\xf5ib osutuda j\xe4tkata v\xf5i m\xf5nest j\xe4semest ilma j\xe4\xe4da. Seega ei saa ma j\xe4tta lahti seletamata, mis see olukord tegelikult t\xe4hendab. Muidu v\xf5ib m\xf5ne jaoks see esmapilgul tunduda kui tore jalutusk\xe4ik?",date:"09.02.2019",views:13},{id:685587,heading:"Uus lugu!!!",tags:["Yes","Hola","Random Tag"],description:"Yukon Arctic Ultra eelmise aasta rekordiomanik Casper Wakefield toob Juhti osalemise v\xe4lja kui kangelasteo. \u201cTean, et praegu emotsioonid keevad ja v\xf5id olla olukorra peale vihane. Ometi oled Sa kangelane ja v\xe4ga unikaalne sportlane! Koos saame taastumise j\xe4rel teekonnale tagasi vaadata ja hea anal\xfc\xfcsi teha,\u201d kirjutas ta Juhtile.",date:"09.02.2019",views:33}],q=function(e){function a(){return Object(l.a)(this,a),Object(m.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"desc",value:function(e){return e.description.substring(0,350)+"..."}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,O.map(function(a,t){return s.a.createElement(N,{key:t,id:a.id,heading:a.heading,summary:a.summary,tags:a.tags,description:e.desc(a),date:a.date,views:a.views})}))}}]),a}(i.Component),y=t(11);var S=function(e,a){for(var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=e,s=[];i<=a;)s.push(i),i+=t;return s},w=function(e){var a=Object(i.useState)(e.currentPage),t=Object(p.a)(a,2),n=t[0],u=t[1],r=e.pageChanged,l=void 0===r?function(){}:r,o=e.totalRecords,m=void 0===o?null:o,c=e.pageLimit,d=void 0===c?5:c,v=e.pageNeighbours,g=void 0===v?2:v,k=e.backButton,b=void 0===k?"\xabBACK":k,h=e.nextButton,j=void 0===h?"NEXT\xbb":h,f=Math.ceil(m/d),E=2*g+3,N=[];if(f>E+2){var O=Math.max(2,n-g),q=Math.min(f-1,n+g);N=S(O,q);var w=O>2,T=f-q>1,P=E-(N.length+1);switch(!0){case w&&!T:var C=S(O-P,O-1);N=[b].concat(Object(y.a)(C),Object(y.a)(N));break;case!w&&T:var M=S(q+1,q+P);N=[].concat(Object(y.a)(N),Object(y.a)(M),[j]);break;case w&&T:default:N=[b].concat(Object(y.a)(N),[j])}N=[1].concat(Object(y.a)(N),[f])}else N=S(1,f);return s.a.createElement("div",{className:"Pagination"},N.map(function(e,a){return e===j?s.a.createElement("div",{onClick:function(){var e;e=n+1,n<=f&&(l(e),u(e))},key:a,className:"pagination-button next"},e):e===b?s.a.createElement("div",{onClick:function(){var e;e=n-1,n>1&&(l(e),u(e))},key:a,className:"pagination-button back"},e):e===n?s.a.createElement("div",{key:a,className:"pagination-button current"},e):s.a.createElement("div",{onClick:function(){var a;l(a=e),u(a)},key:a,className:"pagination-button"},e)}))},T=["Tere","Hola","Yo","Random"],P=function(e){function a(){return Object(l.a)(this,a),Object(m.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"main"},s.a.createElement("aside",null,s.a.createElement("div",{className:"headline"},"Tags"),s.a.createElement("div",{className:"line"}),s.a.createElement("div",{className:"tag-list"},T.map(function(e,a){return s.a.createElement("div",{key:a,className:"tag"},e)}))),s.a.createElement("article",null,s.a.createElement("div",{className:"headline"},"All posts"),s.a.createElement("div",{className:"line"}),s.a.createElement(q,null),s.a.createElement(w,{totalRecords:614,currentPage:91})))}}]),a}(i.Component),C=function(e){function a(){var e,t;Object(l.a)(this,a);for(var i=arguments.length,s=new Array(i),n=0;n<i;n++)s[n]=arguments[n];return(t=Object(m.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(s)))).goBack=function(){t.props.history.goBack()},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return s.a.createElement("div",{className:"main"},s.a.createElement("aside",null,s.a.createElement("div",{className:"headline back-button",onClick:this.goBack},"\xabBack")),s.a.createElement("article",null,s.a.createElement("div",{className:"headline"},"Story title"),s.a.createElement("div",{className:"line"}),s.a.createElement("div",{className:"story-text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a rhoncus quam. Pellentesque convallis dolor in quam faucibus dictum. Suspendisse tempor dapibus ipsum, non accumsan nulla. Maecenas eu nulla dui. Fusce lobortis ligula at sem consectetur facilisis. Vestibulum luctus in urna id semper. Aenean eleifend justo erat, vel laoreet diam consectetur tempus. Integer ut sem eu ipsum iaculis cursus. Phasellus scelerisque euismod elit. Maecenas ante nunc, sodales eget lorem ultricies, hendrerit ullamcorper felis.\n\nMorbi in rutrum est. Donec condimentum viverra ipsum sed eleifend. Maecenas nulla risus, vestibulum vulputate hendrerit in, lobortis in lorem. Nullam at massa sed nisl aliquam dignissim in eget metus. Nam consequat et risus eget varius. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque nec lacus leo. Nam quis nisi velit.\n\nNunc lacinia id libero ac consectetur. Mauris ut odio ut sapien sodales tempor. Sed iaculis mauris at justo interdum, at congue risus dapibus. Nullam pharetra sed enim a vestibulum. Mauris eget nulla felis. Pellentesque mattis sapien vitae pulvinar feugiat. Donec feugiat neque id semper venenatis.\n\nIn nec arcu vitae turpis fringilla maximus. Vestibulum mollis, leo dignissim rhoncus venenatis, ante arcu laoreet ligula, sed ultricies nibh ex at metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur quis erat et magna ullamcorper suscipit sit amet ac dolor. Donec consectetur erat nunc, vel semper arcu commodo nec. Aenean lacinia in augue eget posuere. Etiam a fringilla sapien. Vivamus at erat eu dolor tristique finibus malesuada eu nisi.\n\nPhasellus erat enim, porttitor non sem vel, finibus euismod ante. Donec eget turpis lorem. Quisque rutrum vitae enim id rutrum. Duis metus risus, egestas at volutpat ut, pulvinar at ligula. Aliquam dictum enim sed nisi finibus, sit amet varius risus iaculis. Pellentesque in urna nec nisl molestie rutrum. Proin sagittis magna pretium enim lobortis, ac gravida massa placerat. Nullam lobortis at elit non iaculis. Nunc tincidunt nulla maximus odio porttitor, at maximus dolor ullamcorper. Curabitur non interdum ipsum. Pellentesque porttitor mauris eu ultricies placerat. Integer arcu elit, faucibus eu lacus eget, ultrices consectetur tortor.\n\nDuis urna tellus, bibendum in pellentesque eu, porttitor rutrum nisi. Proin sit amet ligula ac sapien porta ultricies. Curabitur turpis magna, consequat at hendrerit sed, iaculis nec lectus. Proin cursus neque eros, sit amet porta felis viverra nec. Pellentesque vehicula, purus fermentum efficitur accumsan, nisl felis maximus libero, at laoreet leo nibh eget tortor. Integer sagittis euismod orci a dapibus. Praesent id semper eros. In hac habitasse platea dictumst.\n\nUt scelerisque, libero a semper suscipit, sem neque aliquam quam, sit amet pharetra eros quam at dolor. Mauris vitae diam in lectus lobortis mollis. Morbi hendrerit at diam ac sollicitudin. Quisque rutrum ac tellus nec semper. Duis eget euismod urna. Nulla ac enim id ex aliquet aliquet. Nullam tempus semper elit, vitae congue erat. Vestibulum a efficitur libero. Vivamus lorem augue, malesuada sit amet lorem vulputate, malesuada sagittis libero. Proin at scelerisque mi, id sollicitudin enim. Proin tincidunt tempus interdum. Vivamus a ipsum quis sapien lacinia auctor et non arcu.\n\nIn hac habitasse platea dictumst. Praesent feugiat leo in magna commodo, id cursus quam vehicula. Fusce molestie feugiat erat et faucibus. Phasellus vitae tortor lectus. Sed placerat elit eu nisi congue ultricies ut at elit. In dapibus libero non mi ornare, sed dapibus risus tristique. Donec non tempor velit. Pellentesque ut hendrerit neque. Nunc eu tempor metus. Fusce rutrum erat eros, sed molestie sapien varius eu. Etiam ac accumsan risus, vitae scelerisque nulla. Etiam a commodo tortor, dictum pharetra massa. Duis dignissim ut odio ac vulputate. Sed in augue dui.\n\nSed ut condimentum massa, non aliquet ex. Nam vulputate porta ligula a ultrices. Sed molestie ultrices eros ut commodo. Vestibulum pulvinar ultrices nulla tristique finibus. Donec quis orci eu est commodo molestie vitae quis nisl. Nam odio tortor, egestas at urna vel, faucibus ullamcorper orci. Vestibulum sed sodales ex. Aliquam erat volutpat. Maecenas consequat nulla ac sem dignissim, eu bibendum lacus faucibus. Aliquam commodo leo ultricies ullamcorper vulputate. Duis purus orci, finibus ut rutrum ac, semper eget arcu.\n\nIn eget congue mauris, in varius dui. Sed ullamcorper est in risus tempor, at faucibus quam rutrum. Ut sollicitudin mattis ante a imperdiet. Aliquam sed tortor efficitur urna ultrices hendrerit eget a neque. Nam vulputate vulputate suscipit. Nam vitae nisl erat. Sed id vulputate velit. Praesent quis orci quis ante rutrum varius. Suspendisse eget auctor nulla, vel ornare tellus. Integer lacus quam, rutrum vel ante at, malesuada tincidunt sapien. Mauris dictum commodo felis imperdiet porta. Suspendisse porta justo nec arcu semper sodales. Ut ac velit cursus, pellentesque augue sodales, euismod leo1.")))}}]),a}(i.Component),M=function(e){return s.a.createElement(h.a,null,s.a.createElement(j.a,{path:"/",exact:!0,component:P}),s.a.createElement(j.a,{path:"/story/:id",component:C}))};var A=function(){Object(i.useEffect)(function(){document.title="Koala Life"});var e=Object(r.d)(function(e){return e.theme.current});return s.a.createElement("div",{className:e},s.a.createElement("div",{className:"App"},s.a.createElement(k,null),s.a.createElement(M,null),s.a.createElement(b,null)))},x=t(40),J=Object(r.b)({theme:{current:"light",switchTheme:function(e){e.current="dark"===e.current?"light":"dark"}}});u.a.render(s.a.createElement(r.a,{store:J},s.a.createElement(x.a,{basename:"/text-db-front"},s.a.createElement(A,null))),document.getElementById("root"))}},[[26,2,1]]]);
//# sourceMappingURL=main.f434b66e.chunk.js.map