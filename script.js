import React from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';

const COLORS = ['#bbf7d0', '#99f6e4', '#bfdbfe', '#ddd6fe', '#f5d0fe', '#fed7aa', '#fee2e2'];
const TAGS = ['back-end coders', 'begineer ui/ux', 'linux enthusiast ( i use arch btw )', 'cysec enthusiast', 'novel readers', 'anime lovers'];
const DURATION = 18000;
const ROWS = 3;
const TAGS_PER_ROW = 5;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = arr => [...arr].sort(() => .5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "loop-slider", style: {
        '--duration': `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal' } }, /*#__PURE__*/
    React.createElement("div", { className: "inner" },
    children,
    children)));
};

const Tag = ({ text }) => /*#__PURE__*/
React.createElement("div", { className: "tag" }, /*#__PURE__*/React.createElement("span", null, "#"), " ", text);

const App = () => /*#__PURE__*/
React.createElement("div", { className: "app" }, /*#__PURE__*/
React.createElement("header", null, /*#__PURE__*/
React.createElement("h1", null, "hello"), /*#__PURE__*/
React.createElement("p", null, "i'm kiana 👋")), /*#__PURE__*/

React.createElement("div", { className: "tag-list" },
[...new Array(ROWS)].map((_, i) => /*#__PURE__*/
React.createElement(InfiniteLoopSlider, { key: i, duration: random(DURATION - 5000, DURATION + 5000), reverse: i % 2 },
shuffle(TAGS).slice(0, TAGS_PER_ROW).map((tag) => /*#__PURE__*/
React.createElement(Tag, { text: tag, key: tag })))), /*#__PURE__*/

React.createElement("a", { href: "article.html" }, "visit my article 👉"),
React.createElement("div", { className: "fade" })));

ReactDOM.render( /*#__PURE__*/
React.createElement(App, null),
document.body);



function getURLParameter(name) {
	return decodeURI((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]);
}
function hideURLParams() {
	//Parameters to hide (ie ?success=value, ?error=value, etc)
	var hide = ['success','error'];
	for(var h in hide) {
		if(getURLParameter(h)) {
			history.replaceState(null, document.getElementsByTagName("title")[0].innerHTML, window.location.pathname);
		}
	}
}

//Run onload, you can do this yourself if you want to do it a different way
window.onload = hideURLParams;
