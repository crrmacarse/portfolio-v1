(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{467:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},469:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},470:function(e,t,r){var o=r(69),n=r(467);e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?n(e):t}},471:function(e,t,r){var o=r(490);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},490:function(e,t){function r(t,o){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,o)}e.exports=r},527:function(e,t,r){e.exports=function(e,t,r,o,n,a,i,s,u,c){"use strict";function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function d(e){for(var t,r=1;r<arguments.length;r++)t=null==arguments[r]?{}:arguments[r],r%2?l(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}));return e}e=e&&e.hasOwnProperty("default")?e.default:e,t=t&&t.hasOwnProperty("default")?t.default:t,r=r&&r.hasOwnProperty("default")?r.default:r,o=o&&o.hasOwnProperty("default")?o.default:o,n=n&&n.hasOwnProperty("default")?n.default:n,a=a&&a.hasOwnProperty("default")?a.default:a,i=i&&i.hasOwnProperty("default")?i.default:i,s=s&&s.hasOwnProperty("default")?s.default:s;var f="default"in u?u.default:u,p={},m=(c.node,c.node,c.bool,c.string,c.oneOfType([c.string,c.array]),c.func,c.func,c.func,function(u){function c(e){var r;t(this,c),r=o(this,n(c).call(this,e)),s(a(r),"srcToArray",(function(e){return(Array.isArray(e)?e:[e]).filter((function(e){return e}))})),s(a(r),"onLoad",(function(){p[r.sourceList[r.state.currentIndex]]=!0,r.i&&r.setState({isLoaded:!0})})),s(a(r),"onError",(function(){if(p[r.sourceList[r.state.currentIndex]]=!1,!r.i)return!1;for(var e,t=r.state.currentIndex+1;t<r.sourceList.length;t++){if(!((e=r.sourceList[t])in p)){r.setState({currentIndex:t});break}if(!0===p[e])return r.setState({currentIndex:t,isLoading:!1,isLoaded:!0}),!0;p[e]}return t===r.sourceList.length?r.setState({isLoading:!1}):void r.loadImg()})),s(a(r),"loadImg",(function(){r.i=new Image,r.i.src=r.sourceList[r.state.currentIndex],r.props.crossorigin&&(r.i.crossOrigin=r.props.crossorigin),r.props.decode&&r.i.decode?r.i.decode().then(r.onLoad).catch(r.onError):(r.i.onload=r.onLoad,r.i.onerror=r.onError)})),s(a(r),"unloadImg",(function(){r.i.onerror=null,r.i.onload=null,r.i.src="";try{delete r.i.src}catch(e){}delete r.i})),r.loaderContainer=e.loaderContainer||e.container,r.unloaderContainer=e.unloaderContainer||e.container,r.sourceList=r.srcToArray(r.props.src);for(var i=0;i<r.sourceList.length&&r.sourceList[i]in p;i++)if(!0===p[r.sourceList[i]])return r.state={currentIndex:i,isLoading:!1,isLoaded:!0},o(r);return r.state=r.sourceList.length?{currentIndex:0,isLoading:!0,isLoaded:!1}:{isLoading:!1,isLoaded:!1},r}return i(c,u),r(c,[{key:"componentDidMount",value:function(){this.state.isLoading&&this.loadImg()}},{key:"componentWillUnmount",value:function(){this.i&&this.unloadImg()}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this;this.loaderContainer=e.loaderContainer||e.container,this.unloaderContainer=e.unloaderContainer||e.container;var r=this.srcToArray(e.src),o=r.filter((function(e){return-1===t.sourceList.indexOf(e)})),n=this.sourceList.filter((function(e){return-1===r.indexOf(e)}));if(o.length||n.length){if(this.sourceList=r,!r.length)return this.setState({isLoading:!1,isLoaded:!1});this.setState({currentIndex:0,isLoading:!0,isLoaded:!1},this.loadImg)}}},{key:"render",value:function(){var t=this.props,r=t.container,o=t.loader,n=t.unloader,a=(t.src,t.decode,t.loaderContainer,t.unloaderContainer,t.mockImage,e(t,["container","loader","unloader","src","decode","loaderContainer","unloaderContainer","mockImage"]));if(this.state.isLoaded){var i=d({},{src:this.sourceList[this.state.currentIndex]},{},a);return r(f.createElement("img",i))}return!this.state.isLoaded&&this.state.isLoading?o?this.loaderContainer(o):null:this.state.isLoaded||this.state.isLoading?void 0:n?this.unloaderContainer(n):null}}]),c}(u.Component));return s(m,"defaultProps",{loader:!1,unloader:!1,decode:!0,src:[],container:function(e){return e}}),m.propTypes={},m}(r(53),r(145),r(146),r(470),r(469),r(467),r(471),r(39),r(0),r(3))},528:function(e,t,r){"use strict";t.a="data:image/jpeg;base64,UklGRjIFAABXRUJQVlA4ICYFAABwcgCdASpYAlgCPm02mkkkIyKhITHoeIANiWlu62AzcM7OuHcryTIcCL/5vbz+gF9a6I+tdEfWuiPrXRH1roj610R9a6I+tdEfWuiPrXRH1roj610R9a6I+tdEfWuiPrXRH1roj610R9a6I+tdEfWuiPrXRH1roj610R9a6I+tdEfWuiPrXRH1roj610R9a6I+tdEfWuiPrXRH1roj610R9a6I+tdEfWuiPrXRH1roj610R9a6I+tdEfWuiPrXRH1roj610R9a6I+tdEfWuiPrXRH1roj610R9a6I+tdEfWuiPrXRH1roj610R9a6I+tdEfWuiPrXRH1roj610R9a6I+tdEWlgeZsQkMhSSGQpJDIUkhkKRqp+W8nP3OzviQO9P2slRfQFq2W9ob+RKjjboj610R9a6I+tZTTl5ERYRCAwUEIT5/SORZfEXhFIYBFRe0YHIfwOtLi0/Pkg/nyQfz5IP58PwROgKtNNYXXlwnlctK8y7yi9CMxikUFYUUutdEfWuiPrXRH1mglFDfwT9Vybjp9QUhhSH9kP7aPQwIvqNgSQfz5IP58kH8+RMHSJUF2rymm55WpGjL8QikZMAaj5D+yH6g29UyUo5fWuiPrXRH1roj6UFUmGOYyuLEvmjKoOqq7rXY5okiLBrHnkNP5nSjl9a6I+tdEfWuiPpeEIM/scKqIqUCX1F6gTzXN3iOAOMZZ4gMczLw0nnZQL58kH8+SD+fJB/KE6WSIQO8vm4J5cmBnlXStc5Q5PgtcxWMzSMnpJDIUkhkKSQyFIzguyUoC7m2pxLdYpcAxJfeRlBLbNyTl9a6I+tdEfWuiPpZ+FQBp1mt7tsn3t3lrvKkcb7/2O0MwKWQ26I+tdEfWuiPrWaoTs/nWRlLXfMu+ZK8y7yiZBAyjjboj610R9a6I+tdEfWuiPrXRH1roj610R9a6I+tdEfWuiPrXRH1roj610R9a6I+tdEfWuiPrXRH1roj610R9a6I+tdEfWuiPrXRH1roj610R9a6I+tdEfWuiPrXRH1roj610R9a6I+tdEfWuiPrXRH1roj610R9a6I+tdEfWuiPrXRH1roj610R9a6I+tdEfWuiPrXRH1roj610R9a6I+tdEfWuiPrXRH1roj610R9a6I+tdEfWuiPrXRH1roj610R9a6I+tdEfWuiPrXRH1roj610R9a6I+tdEfWuiPrXRH1roj610R9a6I+tdEfWuiPrMAA/v/JW5AgAAAAAAAAAAAAAAAeAtfgY/gijLQGbXGlp3fh9bkm1eZYuk/8INtNgkzWSANY6vR6IBucgMT9jV2MzgZVuadUDqxAXW+dbqC9i0bqZ5zcs3OoYDZYNW1RdkBtHCQBK9lwhcsrxzXGujPMy8H1TU0AvruohLtQRdAU68j/29QL9dYfyghDXJaM0XnAjfDCfky//0YFylxVPyyUj+58KbWvWgjFJW9OrhPParH+m9cJki0gWDtF58XY7RRl8TnQpCC+X46+sLcMChrGiP+E23tcgO67vprg4UdBLXlJ/rZkCAMVNAhlayfcIrZYmNM1qpsAyEXlHAOskCIQDjtW1cWU+/5pz/tNoxiv2JaGtpx6JLAm8iL9ILxYvA+6S2IUj54N8c/JSh5ot6QS2ibF0F1uEHyqDmUTCbRKBJs68aLVG7YO7qUa79nNyikQmiCpFRgOJvgFwjsU2+mYijzjJ1fB+rmygliA6XMJ0npullxa+lZ0C+gAAAAAAAAAAAAAAAAAAAAA"},679:function(e,t,r){"use strict";r.r(t);var o=r(0),n=r.n(o),a=r(54),i=r(527),s=r.n(i),u=r(528);t.default=function(){var e=Object(a.b)().t;return n.a.createElement("div",{className:"about-section flex flex-col items-center justify-center"},n.a.createElement("div",{className:"flex flex-col md:flex-row max-w-6xl mx-auto"},n.a.createElement(s.a,{className:"h-128 w-max-64 p-5",src:["assets/0ef842857805f8c658a6c194526ec333.0ef842857805f8c658a6c194526ec333.jpg",u.a],alt:"@crrmacarse",title:"Damn, you look good bruh"}),n.a.createElement("div",{className:"mx-5"},n.a.createElement("h1",{className:"text-5xl"},e("about.title"),n.a.createElement("b",null," "+e("about.title-followup")+".")),n.a.createElement("div",{className:"description text-lg my-5"},n.a.createElement("p",null,"Hi guys! My name is Christian Ryan Refuerzo Macarse. My friends call me either Pablo or Wawi. A bit of a technical knowledgeable guy who gets confused every time if I am really qualified to be part of the Software Development scene or not. I really don’t know why I am able to make (barely) functional systems and real-world applied software",n.a.createElement("span",{role:"img","aria-label":"smile"}," 🤷‍♂️. "),"I'm just really that type of a person who is very eager to learn and a curious freak. I would just typically go on to research and start with implemenation the moment i would get my momentum going. I am also that office guy you see who'll put tremendous effort to get things done."),n.a.createElement("p",{className:"mt-5"},"A *self-acclaimed full stack developer, I worked my way to such structures like CRUD, OOP, MVC, MERN stack, AdonisJS/ Expo/.NET framework, REST Api, and Javascript SPAs. I am not really good at all, but just a purely try hard individual. A team-person who is willing to listen and would love to have discussions about inputs and what to offer to the table. Now Hire me.")),n.a.createElement("div",{className:"actions mt-12 text-lg"},n.a.createElement("a",{href:"mailto:crrmacarse@gmail.com?",title:"Like for real. Hire me.",className:"font-bold"},e("Get in touch"))))))}}}]);
//# sourceMappingURL=6.75fadab571c0f868b5f2.bundle.js.map