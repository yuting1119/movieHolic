(function(t){function e(e){for(var s,n,r=e[0],c=e[1],l=e[2],d=0,u=[];d<r.length;d++)n=r[d],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&u.push(a[n][0]),a[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);v&&v(e);while(u.length)u.shift()();return o.push.apply(o,l||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],s=!0,r=1;r<i.length;r++){var c=i[r];0!==a[c]&&(s=!1)}s&&(o.splice(e--,1),t=n(n.s=i[0]))}return t}var s={},a={app:0},o=[];function n(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=s,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/movieHolic/dist/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var v=c;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Left"),i("div",{staticClass:"container"},[i("router-view")],1),i("Footer")],1)},o=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"left"}},[i("div",{staticClass:"left-container"},[i("router-link",{attrs:{to:"/"}},[i("p",{staticClass:"title"},[t._v("moVieHoLic")])]),i("div",{staticClass:"menu"},[i("router-link",{attrs:{to:"/top"}},[i("span",{staticClass:"menustyle"},[t._v("TOP 20")])]),i("span",[t._v("|")]),i("router-link",{attrs:{to:"/random"}},[i("span",{staticClass:"menustyle"},[t._v("RANDOM")])]),i("span",[t._v("|")]),i("router-link",{attrs:{to:"/news"}},[i("span",{staticClass:"menustyle"},[t._v("NEWS")])]),i("br"),i("router-link",{attrs:{to:"/list"}},[i("span",{staticClass:"menustyle"},[t._v("my list")])]),i("br")],1),i("div",{staticClass:"search"},[i("input",{staticClass:"search-movie",attrs:{type:"text",placeholder:" search movie"}}),i("router-link",{attrs:{to:{name:"Search",params:{keywords:""+this.searchMovie}}}},[i("input",{staticClass:"search-movie-btn",attrs:{type:"button",value:"submit"},on:{click:t.getSearchMovie}})])],1),i("div",{staticClass:"copyright"},[t._v(" © 2021 moVieHoLic All Rights Reserved by Yuting Hung. ")])],1)])},r=[],c=(i("498a"),{data:function(){return{searchMovie:[]}},methods:{getSearchMovie:function(){var t=document.querySelector(".search-movie");this.searchMovie=t.value.trim(),t.value=""}}}),l=c,v=i("2877"),d=Object(v["a"])(l,n,r,!1,null,null,null),u=d.exports,h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"footer"}},[t._v(" © 2021 moVieHoLic All Rights Reserved by Yuting Hung. ")])},p=[],m={},g=Object(v["a"])(m,h,p,!1,null,null,null),f=g.exports,_={name:"app",components:{Left:u,Footer:f}},C=_,b=(i("5c0b"),Object(v["a"])(C,a,o,!1,null,null,null)),w=b.exports,k=i("8c4f"),y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"top"}},[i("h1",[t._v("Top20s")]),i("div",{staticClass:"link"},[i("router-link",{attrs:{to:"/top/"}},[i("div",{staticClass:"linkstyle"},[t._v("recently popular")])]),i("span",[t._v("/")]),i("div",{staticClass:"linkstyle"},[i("router-link",{attrs:{to:"/top/classic"}},[t._v("most rated")])],1),i("span",[t._v("/")]),i("div",{staticClass:"linkstyle"},[i("router-link",{attrs:{to:"/top/tvshow"}},[t._v("tvshow")])],1)],1),i("div",{staticClass:"view"},[i("router-view")],1)])},M=[],T={},S=Object(v["a"])(T,y,M,!1,null,null,null),x=S.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{style:{backgroundImage:"url(https://image.tmdb.org/t/p/original/"+this.chosenMovie.backdrop_path+")"},attrs:{id:"random"}},[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),s("h1",[t._v("find movies")]),s("div",{staticClass:"random-select"},[s("select",{attrs:{id:"genres"},on:{click:t.findTheMovie}},[s("option",[t._v("pick today's movie!")]),s("option",{attrs:{value:"28"}},[t._v("Action")]),s("option",{attrs:{value:"12"}},[t._v("Adventure")]),s("option",{attrs:{value:"16"}},[t._v("Animation")]),s("option",{attrs:{value:"35"}},[t._v("Comedy")]),s("option",{attrs:{value:"80"}},[t._v("Crime")]),s("option",{attrs:{value:"99"}},[t._v("Documentary")]),s("option",{attrs:{value:"18"}},[t._v("Drama")]),s("option",{attrs:{value:"10751"}},[t._v("Family")]),s("option",{attrs:{value:"14"}},[t._v("Fantasy")]),s("option",{attrs:{value:"36"}},[t._v("History")]),s("option",{attrs:{value:"27"}},[t._v("Horror")]),s("option",{attrs:{value:"10402"}},[t._v("Music")]),s("option",{attrs:{value:"9648"}},[t._v("Mystery")]),s("option",{attrs:{value:"10749"}},[t._v("Romance")]),s("option",{attrs:{value:"878"}},[t._v("Science Fiction")]),s("option",{attrs:{value:"53"}},[t._v("Thriller")]),s("option",{attrs:{value:"10752"}},[t._v("War")]),s("option",{attrs:{value:"37"}},[t._v("Western")])])]),0==this.chosenMovie.length?s("div",{staticClass:"random-first"},[s("img",{staticClass:"first-pic",attrs:{src:i("9c08"),alt:""}})]):t._e(),""!=t.chosenMovie?s("router-link",{attrs:{to:{name:"Movie",params:{id:""+this.chosenMovie.id}}}},[s("div",{staticClass:"ans-container"},[s("div",{staticClass:"ans-title"},[t._v(t._s(t.chosenMovie.title))]),s("div",{staticClass:"ans-release"},[t._v(t._s(t.chosenMovie.release_date))]),s("div",{staticClass:"ans-rate"},[s("i",{staticClass:"fas fa-star"}),t._v(t._s(t.chosenMovie.vote_average))]),s("div",{staticClass:"ans-poster"},[s("img",{attrs:{src:t.getPoster(this.chosenMovie),alt:""}})]),s("div",{staticClass:"ans-overview"},[t._v(t._s(t.chosenMovie.overview))])])]):t._e()],1)},L=[],I=(i("99af"),i("7db0"),{data:function(){return{chosenMovie:[],videoYT:[],isLoading:!1}},created:function(){this.findTheMovie()},methods:{findTheMovie:function(){var t=this,e=document.querySelector("#genres"),i=e.value,s=Math.floor(10*Math.random());this.isLoading=!0;var a="https://api.themoviedb.org/3/discover/movie?api_key=540c13e42b8f4dd5690d1ed0982c83c2&with_genres=".concat(i,"&sort_by=popularity.desc&page=").concat(s);this.axios.get(a).then((function(e){var i=e.data.results;t.chosenMovie=i.find((function(t,e){return e===Math.floor(5*Math.random())})),console.log(t.chosenMovie)})),this.getPoster()},getPoster:function(t){return"https://image.tmdb.org/t/p/w300".concat(this.chosenMovie.poster_path)}}}),j=I,E=Object(v["a"])(j,O,L,!1,null,null,null),V=E.exports,$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"news"}},[i("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),i("h1",[t._v("entertainment news")]),i("div",{staticClass:"search-container"},[i("input",{staticClass:"search-input",attrs:{type:"text",placeholder:"  search news"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getSearchNews.apply(null,arguments)}}}),i("input",{staticClass:"search-btn",attrs:{type:"button",value:"submit"},on:{click:t.getSearchNews}})]),i("div",{staticClass:"news-container"},t._l(t.allNews,(function(e){return i("div",{key:e.author,staticClass:"news-wrapper"},[i("div",{staticClass:"social-container"},[i("a",{attrs:{href:"https://www.facebook.com/sharer.php?u＝item.url",target:"_blank"}},[i("i",{staticClass:"fab fa-facebook"})]),i("a",{attrs:{href:"http://line.naver.jp/R/msg/text/?"+e.url,target:"_blank"}},[i("i",{staticClass:"fab fa-line"})])]),i("a",{staticClass:"news-link",attrs:{href:e.url}},[i("div",{staticClass:"news-card"},[i("h6",{staticClass:"news-title"},[t._v(t._s(e.title))]),i("div",{staticClass:"news-author"},[t._v(t._s(e.author))]),i("div",{staticClass:"news-pic"},[i("img",{attrs:{src:e.urlToImage}})]),i("div",{staticClass:"news-content"},[t._v(t._s(e.content))])])])])})),0),i("div",{staticClass:"up",on:{click:t.goTop}},[i("i",{staticClass:"fas fa-angle-double-up"})])],1)},N=[],H=i("2909"),P={data:function(){return{allNews:[],isLoading:!1}},mounted:function(){this.getNews()},methods:{getNews:function(){var t="https://sleepy-waters-79700.herokuapp.com/NEWS",e=this;e.isLoading=!0,this.axios.get(t).then((function(t){var i;e.isLoading=!1,(i=e.allNews).push.apply(i,Object(H["a"])(t.data))}))},getSearchNews:function(){var t=document.querySelector(".search-input"),e=t.value.trim(),i="https://sleepy-waters-79700.herokuapp.com/NEWS?q=".concat(e);this.axios.get(i).then((function(t){var e=[];e.push.apply(e,Object(H["a"])(t.data));var i="";e.forEach((function(t){i+='\n          <div class="news-wrapper">\n        <div class="social-container">\n          <a href="https://www.facebook.com/sharer.php?u＝'.concat(t.url,'" target="_blank"><i class="fab fa-facebook"></i></a>\n          <a href="http://line.naver.jp/R/msg/text/?').concat(t.url,'" target="_blank"><i class="fab fa-line"></i></a>\n        </div>\n        <a class="news-link" href="').concat(t.url,'">\n          <div class="news-card">\n            <h6 class="news-title">').concat(t.title,'</h6>\n            <div class="news-author">').concat(t.author,'</div>\n            <div class="news-pic"><img src="').concat(t.urlToImage,'"></div>\n            <div class="news-content">').concat(t.content,"</div>\n          </div>\n        </a>\n      </div>");var e=document.querySelector(".news-container");e.innerHTML=i}))}))},goTop:function(){document.documentElement.scrollTop=0}}},F=P,R=Object(v["a"])(F,$,N,!1,null,null,null),J=R.exports,A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"moviepage"}},[i("div",{staticClass:"moviepage-container"},[i("div",{staticClass:"movie-name"},[i("div",{staticClass:"movie-title"},[t._v(t._s(t.thisMovie.title)),i("span",{staticClass:"heart",on:{click:t.addHeart}},[i("i",{staticClass:"fab fa-gratipay"})])]),i("div",{staticClass:"movie-info"},[t._v(t._s(t.thisMovie.release_date)+" ｜ "+t._s(t.thisMovie.runtime)+" mins ｜ "),i("i",{staticClass:"fas fa-star"}),t._v(" "+t._s(t.thisMovie.vote_average))]),t._l(t.thisMovie.genres,(function(e){return i("div",{key:e.id,staticClass:"movie-genres"},[t._v(t._s(e.name))])}))],2),i("div",{staticClass:"movie-wrapper"},[i("div",{staticClass:"movie-poster"},[i("img",{attrs:{src:t.posterImg(t.thisMovie),alt:""}})]),i("div",{staticClass:"movie-content"},[i("div",{staticClass:"movie-photo"},[i("button",{on:{click:function(e){t.toggler=!t.toggler}}},[t._v("trailers")]),i("FsLightbox",{attrs:{toggler:t.toggler,sources:["https://www.youtube.com/watch?v="+this.videoYT[0].key]}})],1),i("span",[t._v("DIRECTOR：")]),i("div",{staticClass:"movie-director"},[t._v(t._s(t.director.name))]),i("span",[t._v("CAST：")]),i("br"),t._l(t.cast,(function(e){return i("div",{key:e.order,staticClass:"cast-container"},[i("div",{staticClass:"movie-cast"},[t._v(t._s(e.name))])])})),i("div",{staticClass:"movie-overview"},[t._v(t._s(t.thisMovie.overview))])],2)]),i("div",{staticClass:"similar-container"},[t._v(" similar movies"),i("br"),t._l(t.similarMovie,(function(e){return i("div",{key:e.id,staticClass:"similar"},[i("router-link",{attrs:{to:{name:"Movie",params:{id:""+e.id}}}},[i("div",{staticClass:"similar-title"},[t._v(t._s(e.title))])])],1)}))],2)])])},Y=[],q=(i("4de4"),i("e099")),D=i.n(q),W={props:["id"],components:{FsLightbox:D.a},data:function(){return{thisMovie:[],cast:[],director:[],videoYT:[],backdrop:[],similarMovie:[],toggler:!1}},created:function(){this.getMovieInfo()},methods:{getMovieInfo:function(){var t=this;console.log(this.$route.params.id);var e=this.$route.params.id,i="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=540c13e42b8f4dd5690d1ed0982c83c2");this.axios.get(i).then((function(e){t.thisMovie=e.data,t.getPeople(),t.getVideo(),t.getSimilarMovie()}))},posterImg:function(t){return"https://image.tmdb.org/t/p/w300/".concat(this.thisMovie.poster_path)},getPeople:function(){var t=this,e=this.$route.params.id,i="https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=540c13e42b8f4dd5690d1ed0982c83c2");this.axios.get(i).then((function(e){var i=e.data.cast;t.cast=i.filter((function(t){if(t.order<7)return t}));var s=e.data.crew;t.director=s.find((function(t,e,i){return"Director"===t.job}))}))},getVideo:function(){var t=this,e=this.$route.params.id,i="https://api.themoviedb.org/3/movie/".concat(e,"/videos?api_key=540c13e42b8f4dd5690d1ed0982c83c2");this.axios.get(i).then((function(e){var i=e.data.results;t.videoYT=i.filter((function(t){return"YouTube"===t.site}))}))},getSimilarMovie:function(){var t=this,e=this.$route.params.id,i="https://api.themoviedb.org/3/movie/".concat(e,"/similar?api_key=540c13e42b8f4dd5690d1ed0982c83c2&page=1");this.axios.get(i).then((function(e){var i=e.data.results;t.similarMovie=i.filter((function(t,e){if(e<5)return t}))}))},addHeart:function(){for(var t=JSON.parse(localStorage.getItem("heartMovie"))||[],e=0;e<t.length;e++)if(this.thisMovie.id===t[e].id)return void alert("此電影已經在最愛囉！");t.push(this.thisMovie),localStorage.setItem("heartMovie",JSON.stringify(t))}},watch:{$route:"getMovieInfo"}},U=W,z=Object(v["a"])(U,A,Y,!1,null,null,null),B=z.exports,G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"list"}},[s("h1",[t._v("my movie list")]),0===t.heartList.length?s("div",{staticClass:"list-empty"},[s("span",[t._v("empty now")]),s("br"),s("img",{attrs:{src:i("8479"),alt:""}})]):t._e(),s("div",{staticClass:"list-container"},t._l(t.heartList,(function(e,i){return s("div",{key:e.id,staticClass:"list-wrapper"},[s("div",{staticClass:"list-wrapper-left"},[s("div",{staticClass:"list-title"},[t._v(t._s(e.title)),s("span",{staticClass:"list-rate"},[s("i",{staticClass:"fas fa-star"}),t._v(" "+t._s(e.vote_average))])])]),s("div",{staticClass:"list-wrapper-right"},[s("div",{staticClass:"list-overview"},[t._v(t._s(e.overview))]),s("div",{staticClass:"list-write",on:{click:function(i){return t.edit(e)}}},[s("i",{staticClass:"fas fa-pencil-alt"})]),s("div",{staticClass:"list-del",on:{click:function(e){return t.deleteItem(i)}}},[s("i",{staticClass:"fas fa-trash-alt"})])]),e.id===t.cacheList.id?s("div",{staticClass:"list-edit"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.editList,expression:"editList"}],staticClass:"list-text",attrs:{name:"",id:"",placeholder:"how about the movie?"},domProps:{value:t.editList},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancel.apply(null,arguments)},input:function(e){e.target.composing||(t.editList=e.target.value)}}}),s("div",{staticClass:"list-ok",on:{click:function(i){return t.doneEdit(e)}}},[s("i",{staticClass:"far fa-check-circle"})])]):t._e(),t._l(t.thoughtList,(function(i){return s("div",{key:i.id,staticClass:"list-thought"},[i.id===e.id?s("div",[s("hr"),s("span",[t._v("I think the movie...")]),t._v(" "+t._s(i.content)+" ")]):t._e()])}))],2)})),0)])},K=[],Q=(i("a434"),{data:function(){return{heartList:[],thoughtList:[],cacheList:{},editList:""}},created:function(){this.getHeart(),this.getThought()},methods:{getHeart:function(){var t,e=JSON.parse(localStorage.getItem("heartMovie"))||[];(t=this.heartList).push.apply(t,Object(H["a"])(e))},getThought:function(t){var e,i=JSON.parse(localStorage.getItem("thoughtEdit"))||[];(e=this.thoughtList).push.apply(e,Object(H["a"])(i))},edit:function(t){for(var e=0;e<this.thoughtList.length;e++)if(t.id===this.thoughtList[e].id)return void alert("already edited!");this.cacheList=t},cancel:function(){this.cacheList={}},doneEdit:function(t){var e={};e={id:t.id,content:this.editList};var i=JSON.parse(localStorage.getItem("thoughtEdit"))||[];i.push(e),localStorage.setItem("thoughtEdit",JSON.stringify(i)),location.reload()},deleteItem:function(t){this.heartList.splice(t,1),localStorage.setItem("heartMovie",JSON.stringify(this.heartList)),location.reload()}}}),X=Q,Z=Object(v["a"])(X,G,K,!1,null,null,null),tt=Z.exports,et=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"nowhit"}},[i("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),i("VueSlickCarousel",t._b({staticClass:"slick-wrapper"},"VueSlickCarousel",t.settings,!1),[i("div",{staticClass:"slick-content slick-bg",style:{backgroundImage:"url(https://image.tmdb.org/t/p/original/"+this.movieOne.backdrop_path+")"}},[i("div",{staticClass:"slick-title"},[t._v(t._s(t.movieOne.title))]),i("div",{staticClass:"slick-tagline"},[t._v("－－ “ "+t._s(t.movieOne.tagline)+" ”")]),i("div",{staticClass:"slick-overview"},[t._v(t._s(t.movieOne.overview))])]),i("div",{staticClass:"slick-content slick-bg",style:{backgroundImage:"url(https://image.tmdb.org/t/p/original/"+this.movieTwo.backdrop_path+")"}},[i("div",{staticClass:"slick-title"},[t._v(t._s(t.movieTwo.title))]),i("div",{staticClass:"slick-tagline"},[t._v("－－ “ "+t._s(t.movieTwo.tagline)+" ”")]),i("div",{staticClass:"slick-overview"},[t._v(t._s(t.movieTwo.overview))])]),i("div",{staticClass:"slick-content slick-bg",style:{backgroundImage:"url(https://image.tmdb.org/t/p/original/"+this.movieThree.backdrop_path+")"}},[i("div",{staticClass:"slick-title"},[t._v(t._s(t.movieThree.title))]),i("div",{staticClass:"slick-tagline"},[t._v("－－ “ "+t._s(t.movieThree.tagline)+" ”")]),i("div",{staticClass:"slick-overview"},[t._v(t._s(t.movieThree.overview))])]),i("div",{staticClass:"slick-content slick-bg",style:{backgroundImage:"url(https://image.tmdb.org/t/p/original/"+this.movieFour.backdrop_path+")"}},[i("div",{staticClass:"slick-title"},[t._v(t._s(t.movieFour.title))]),i("div",{staticClass:"slick-tagline"},[t._v("－－ “ "+t._s(t.movieFour.tagline)+" ”")]),i("div",{staticClass:"slick-overview"},[t._v(t._s(t.movieFour.overview))])])])],1)},it=[],st=i("a7ab"),at=i.n(st),ot=(i("7b8d"),i("6a2c"),{name:"MyComponent",components:{VueSlickCarousel:at.a},data:function(){return{settings:{arrows:!1,autoplay:!0,autoplaySpeed:5e3,dots:!1,fade:!0,isLoading:!1},movieOne:[],movieTwo:[],movieThree:[],movieFour:[]}},created:function(){this.getHitMovie()},methods:{getHitMovie:function(){var t=this;t.isLoading=!0,this.axios.get("https://api.themoviedb.org/3/movie/436969?api_key=540c13e42b8f4dd5690d1ed0982c83c2").then((function(e){t.isLoading=!1,t.movieOne=e.data})),this.axios.get("https://api.themoviedb.org/3/movie/566525?api_key=540c13e42b8f4dd5690d1ed0982c83c2").then((function(e){t.movieTwo=e.data})),this.axios.get("https://api.themoviedb.org/3/movie/550988?api_key=540c13e42b8f4dd5690d1ed0982c83c2").then((function(e){t.movieThree=e.data})),this.axios.get("https://api.themoviedb.org/3/movie/588228?api_key=540c13e42b8f4dd5690d1ed0982c83c2").then((function(e){t.movieFour=e.data}))}}}),nt=ot,rt=Object(v["a"])(nt,et,it,!1,null,null,null),ct=rt.exports,lt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"search"}},[i("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),i("h1",[t._v("results for： "+t._s(t.keywords)+" ")]),i("div",{staticClass:"search-container"},t._l(t.searchedMovie,(function(e){return i("div",{key:e.id,staticClass:"search-wrapper"},[i("router-link",{attrs:{to:{name:"Movie",params:{id:""+e.id}}}},[i("img",{staticClass:"search-poster",attrs:{src:t.getPoster(e),alt:""}}),i("div",{staticClass:"search-title"},[t._v(t._s(e.title))])])],1)})),0),0===this.searchedMovie.length?i("div",{staticClass:"search-no"},[i("span",[t._v("found nothing...")]),i("br"),i("img",{attrs:{src:"https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/v2/assets/empty.svg",alt:""}})]):t._e()],1)},vt=[],dt={props:["keywords"],data:function(){return{searchedMovie:[],isLoading:!1}},created:function(){this.getSearchedMovie()},methods:{getSearchedMovie:function(){var t=this.$route.params.keywords,e=this;e.isLoading=!0;var i="https://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=540c13e42b8f4dd5690d1ed0982c83c2");this.axios.get(i).then((function(t){e.isLoading=!1,e.searchedMovie=t.data.results,console.log(e.searchedMovie)}))},getPoster:function(t){return"https://image.tmdb.org/t/p/w200/".concat(t.poster_path)}},watch:{$route:"getSearchedMovie"}},ut=dt,ht=Object(v["a"])(ut,lt,vt,!1,null,null,null),pt=ht.exports,mt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"recent"}},[i("div",{staticClass:"container"},t._l(t.recentMovies,(function(e,s){return i("div",{key:e.id,staticClass:"rated-wrapper"},[i("router-link",{attrs:{to:{name:"Movie",params:{id:""+e.id}}}},[i("div",{staticClass:"rated-content"},[i("div",{staticClass:"rated-index"},[t._v(t._s(s+1))]),i("div",{staticClass:"rated-left"},[i("img",{attrs:{src:t.getImg(e)}})]),i("div",{staticClass:"rated-right"},[i("div",{staticClass:"rated-title"},[t._v(t._s(e.title)),i("span",{staticClass:"rated-date"},[t._v(t._s(e.release_date))]),i("span",{staticClass:"rated-vote"},[i("i",{staticClass:"fas fa-star"}),t._v(t._s(e.vote_average))])]),i("div",{staticClass:"rated-overview"},[t._v(t._s(e.overview))])])])])],1)})),0),i("div",{staticClass:"up",on:{click:t.goTop}},[i("i",{staticClass:"fas fa-angle-double-up"})])])},gt=[],ft={data:function(){return{recentMovies:[]}},created:function(){this.getRecentMovies()},methods:{getRecentMovies:function(){var t="https://api.themoviedb.org/3/movie/popular?api_key=540c13e42b8f4dd5690d1ed0982c83c2&_page=1&_limit=10",e=this;this.axios.get(t).then((function(t){var i;(i=e.recentMovies).push.apply(i,Object(H["a"])(t.data.results))}))},getImg:function(t){return"https://image.tmdb.org/t/p/w200/".concat(t.poster_path)},goTop:function(){document.documentElement.scrollTop=0}}},_t=ft,Ct=Object(v["a"])(_t,mt,gt,!1,null,null,null),bt=Ct.exports,wt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"classic"}},[i("div",{staticClass:"container"},t._l(t.classicMovies,(function(e,s){return i("div",{key:e.id,staticClass:"rated-wrapper"},[i("router-link",{attrs:{to:{name:"Movie",params:{id:""+e.id}}}},[i("div",{staticClass:"rated-content"},[i("div",{staticClass:"rated-index"},[t._v(t._s(s+1))]),i("div",{staticClass:"rated-left"},[i("img",{attrs:{src:t.getImg(e)}})]),i("div",{staticClass:"rated-right"},[i("div",{staticClass:"rated-title"},[t._v(t._s(e.title)),i("span",{staticClass:"rated-date"},[t._v(t._s(e.release_date))]),i("span",{staticClass:"rated-vote"},[i("i",{staticClass:"fas fa-star"}),t._v(t._s(e.vote_average))])]),i("div",{staticClass:"rated-overview"},[t._v(t._s(e.overview))])])])])],1)})),0),i("div",{staticClass:"up",on:{click:t.goTop}},[i("i",{staticClass:"fas fa-angle-double-up"})])])},kt=[],yt={data:function(){return{classicMovies:[]}},created:function(){this.getClassicMovies()},methods:{getClassicMovies:function(){var t="https://api.themoviedb.org/3/movie/top_rated?api_key=540c13e42b8f4dd5690d1ed0982c83c2&page=1",e=this;this.axios.get(t).then((function(t){var i;(i=e.classicMovies).push.apply(i,Object(H["a"])(t.data.results))}))},getImg:function(t){return"https://image.tmdb.org/t/p/w200/".concat(t.poster_path)},goTop:function(){document.documentElement.scrollTop=0}}},Mt=yt,Tt=Object(v["a"])(Mt,wt,kt,!1,null,null,null),St=Tt.exports,xt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"tvshow"}},[i("div",{staticClass:"container"},t._l(t.tvshow,(function(e,s){return i("div",{key:e.id,staticClass:"rated-wrapper"},[i("router-link",{attrs:{to:{name:"TVshow",params:{id:""+e.id}}}},[i("div",{staticClass:"rated-content"},[i("div",{staticClass:"rated-index"},[t._v(t._s(s+1))]),i("div",{staticClass:"rated-left"},[i("img",{attrs:{src:t.getImg(e)}})]),i("div",{staticClass:"rated-right"},[i("div",{staticClass:"rated-title"},[t._v(t._s(e.name)),i("span",{staticClass:"rated-date"},[t._v("since : "+t._s(e.first_air_date))]),i("span",{staticClass:"rated-vote"},[i("i",{staticClass:"fas fa-star"}),t._v(t._s(e.vote_average))])]),i("div",{staticClass:"rated-overview"},[t._v(t._s(e.overview))])])])])],1)})),0),i("div",{staticClass:"up",on:{click:t.goTop}},[i("i",{staticClass:"fas fa-angle-double-up"})])])},Ot=[],Lt={data:function(){return{tvshow:[]}},created:function(){this.getTvShow()},methods:{getTvShow:function(){var t="https://api.themoviedb.org/3/tv/popular?api_key=540c13e42b8f4dd5690d1ed0982c83c2&language=en-US&page=1",e=this;this.axios.get(t).then((function(t){var i;(i=e.tvshow).push.apply(i,Object(H["a"])(t.data.results))}))},getImg:function(t){return"https://image.tmdb.org/t/p/w200/".concat(t.poster_path)},goTop:function(){document.documentElement.scrollTop=0}}},It=Lt,jt=Object(v["a"])(It,xt,Ot,!1,null,null,null),Et=jt.exports,Vt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"tvshowpage"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"movie-name"},[i("div",{staticClass:"movie-title"},[t._v(t._s(t.thisTVshow.name)),i("span",{staticClass:"heart",on:{click:t.addHeart}},[i("i",{staticClass:"fab fa-gratipay"})])]),i("div",{staticClass:"movie-info"},[t._v("latest"+t._s(t.thisTVshow.last_air_date)+" ｜ since"+t._s(t.thisTVshow.first_air_date)+" ｜ "),i("i",{staticClass:"fas fa-star"}),t._v(" "+t._s(t.thisTVshow.vote_average))]),t._l(t.thisTVshow.genres,(function(e){return i("div",{key:e.id,staticClass:"movie-genres"},[t._v(t._s(e.name))])}))],2),i("div",{staticClass:"movie-wrapper"},[i("div",{staticClass:"movie-poster"},[i("img",{attrs:{src:t.posterImg(t.thisTVshow),alt:""}})]),i("div",{staticClass:"movie-content"},[i("span",[t._v("CAST：")]),i("br"),t._l(t.cast,(function(e){return i("div",{key:e.order,staticClass:"cast-container"},[i("div",{staticClass:"movie-cast"},[t._v(t._s(e.name))])])})),i("div",{staticClass:"movie-overview"},[t._v(t._s(t.thisTVshow.overview))])],2)])])])},$t=[],Nt={props:["id"],data:function(){return{thisTVshow:[],cast:[],videoYT:[],backdrop:[],similarTVshow:[]}},created:function(){this.getTVshowInfo()},methods:{getTVshowInfo:function(){var t=this,e=this.$route.params.id,i="https://api.themoviedb.org/3/tv/".concat(e,"?api_key=540c13e42b8f4dd5690d1ed0982c83c2&language=en-US");this.axios.get(i).then((function(e){t.thisTVshow=e.data,t.getPeople(),t.getVideo(),t.getSimilarTVshow()}))},posterImg:function(t){return"https://image.tmdb.org/t/p/w300/".concat(this.thisTVshow.poster_path)},getPeople:function(){var t=this,e=this.$route.params.id,i="https://api.themoviedb.org/3/tv/".concat(e,"/credits?api_key=540c13e42b8f4dd5690d1ed0982c83c2&language=en-US");this.axios.get(i).then((function(e){var i=e.data.cast;t.cast=i.filter((function(t){if(t.order<7)return t}))}))},getSimilarTVshow:function(){var t=this,e=this.$route.params.id,i="https://api.themoviedb.org/3/tv/".concat(e,"/similar?api_key=540c13e42b8f4dd5690d1ed0982c83c2&language=en-US&page=1");this.axios.get(i).then((function(e){var i=e.data.results;t.similarTVshow=i.filter((function(t,e){if(e<3)return t}))}))},addHeart:function(){for(var t=JSON.parse(localStorage.getItem("heartMovie"))||[],e=0;e<t.length;e++)if(this.thisTVshow.id===t[e].id)return void alert("already added");t.push(this.thisMovie),localStorage.setItem("heartMovie",JSON.stringify(t))}},watch:{$route:"getTVshowInfo"}},Ht=Nt,Pt=Object(v["a"])(Ht,Vt,$t,!1,null,null,null),Ft=Pt.exports;s["a"].use(k["a"]);var Rt=[{path:"/",name:"nowHit",component:ct},{path:"/top",name:"Top",component:x,children:[{path:"classic",name:"classic",component:St},{path:"",name:"recent",component:bt},{path:"tvshow",name:"tvshow",component:Et}]},{path:"/random",name:"Random",component:V},{path:"/news",name:"News",component:J},{path:"/moviepage/:id",name:"Movie",component:B,props:!0},{path:"/tvshowpage/:id",name:"TVshow",component:Ft,props:!0},{path:"/list",name:"List",component:tt},{path:"/search/:keywords",name:"Search",component:pt,props:!0}],Jt=new k["a"]({routes:Rt}),At=Jt,Yt=i("bc3a"),qt=i.n(Yt),Dt=i("2106"),Wt=i.n(Dt),Ut=(i("15f5"),i("7051"),i("9062")),zt=i.n(Ut);i("e40d");s["a"].use("Loading",zt.a),s["a"].use(Wt.a,qt.a),s["a"].config.productionTip=!1,new s["a"]({router:At,render:function(t){return t(w)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";i("9c0c")},8479:function(t,e,i){t.exports=i.p+"img/empty.b56c64ff.svg"},"9c08":function(t,e,i){t.exports=i.p+"img/undraw_searching_p5ux.5863de27.svg"},"9c0c":function(t,e,i){}});
//# sourceMappingURL=app.ce510bac.js.map