.clearfix:after,.clearfix:before {
	content:"";
	display:table
}
.clearfix:after {
	clear:both
}
.left-col.show {
	box-shadow:0 0 6px 0 rgba(0,0,0,.75)
}
.mid-col,.mid-col.show .article,.tools-col,.tools-col .tools-section .search-tag.tagcloud .article-tag-list,.tools-col .tools-section .search-ul .search-tag span:hover,.tools-col .tools-section .search-ul .search-time span:hover,.tools-col .tools-section .search-ul .search-title:hover,.tools-col .tools-section .search-wrap .icon {
	transition:all .2s ease-in;
	-ms-transition:all .2s ease-in
}
@-webkit-keyframes leftIn {
	0%,60%,75%,90%,to {
	-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);
	animation-timing-function:cubic-bezier(.215,.61,.355,1)
}
0% {
	-webkit-transform:translateZ(0);
	transform:translateZ(0)
}
60% {
	-webkit-transform:translate3d(358px,0,0);
	transform:translate3d(358px,0,0)
}
75% {
	-webkit-transform:translate3d(323px,0,0);
	transform:translate3d(323px,0,0)
}
90% {
	-webkit-transform:translate3d(338px,0,0);
	transform:translate3d(338px,0,0)
}
to {
	-webkit-transform:translate3d(333px,0,0);
	transform:translate3d(333px,0,0)
}
}@keyframes leftIn {
	0%,60%,75%,90%,to {
	-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);
	animation-timing-function:cubic-bezier(.215,.61,.355,1)
}
0% {
	-webkit-transform:translateZ(0);
	transform:translateZ(0)
}
60% {
	-webkit-transform:translate3d(358px,0,0);
	transform:translate3d(358px,0,0)
}
75% {
	-webkit-transform:translate3d(323px,0,0);
	transform:translate3d(323px,0,0)
}
90% {
	-webkit-transform:translate3d(338px,0,0);
	transform:translate3d(338px,0,0)
}
to {
	-webkit-transform:translate3d(333px,0,0);
	transform:translate3d(333px,0,0)
}
}.mid-col.show {
	-webkit-animation-duration:.8s;
	animation-duration:.8s;
	-webkit-animation-fill-mode:both;
	animation-fill-mode:both;
	-webkit-animation-name:leftIn;
	animation-name:leftIn
}
@-webkit-keyframes leftOut {
	0%,60%,75%,90%,to {
	-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);
	animation-timing-function:cubic-bezier(.215,.61,.355,1)
}
0% {
	-webkit-transform:translate3d(333px,0,0);
	transform:translate3d(333px,0,0)
}
60% {
	-webkit-transform:translate3d(-25px,0,0);
	transform:translate3d(-25px,0,0)
}
75% {
	-webkit-transform:translate3d(10px,0,0);
	transform:translate3d(10px,0,0)
}
90% {
	-webkit-transform:translate3d(-5px,0,0);
	transform:translate3d(-5px,0,0)
}
to {
	-webkit-transform:translateZ(0);
	transform:translateZ(0)
}
}@keyframes leftOut {
	0%,60%,75%,90%,to {
	-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);
	animation-timing-function:cubic-bezier(.215,.61,.355,1)
}
0% {
	-webkit-transform:translate3d(333px,0,0);
	transform:translate3d(333px,0,0)
}
60% {
	-webkit-transform:translate3d(-25px,0,0);
	transform:translate3d(-25px,0,0)
}
75% {
	-webkit-transform:translate3d(10px,0,0);
	transform:translate3d(10px,0,0)
}
90% {
	-webkit-transform:translate3d(-5px,0,0);
	transform:translate3d(-5px,0,0)
}
to {
	-webkit-transform:translateZ(0);
	transform:translateZ(0)
}
}.mid-col.hide {
	-webkit-animation-duration:.8s;
	animation-duration:.8s;
	-webkit-animation-name:leftOut;
	animation-name:leftOut
}
@-webkit-keyframes smallLeftIn {
	0%,60%,75%,90%,to {
	-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);
	animation-timing-function:cubic-bezier(.215,.61,.355,1)
}
0% {
	-webkit-transform:translateZ(0);
	transform:translateZ(0)
}
60% {
	-webkit-transform:translate3d(325px,0,0);
	transform:translate3d(325px,0,0)
}
75% {
	-webkit-transform:translate3d(290px,0,0);
	transform:translate3d(290px,0,0)
}
90% {
	-webkit-transform:translate3d(305px,0,0);
	transform:translate3d(305px,0,0)
}
to {
	-webkit-transform:translate3d(300px,0,0);
	transform:translate3d(300px,0,0)
}
}@keyframes smallLeftIn {
	0%,60%,75%,90%,to {
	-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);
	animation-timing-function:cubic-bezier(.215,.61,.355,1)
}
0% {
	-webkit-transform:translateZ(0);
	transform:translateZ(0)
}
60% {
	-webkit-transform:translate3d(325px,0,0);
	transform:translate3d(325px,0,0)
}
75% {
	-webkit-transform:translate3d(290px,0,0);
	transform:translate3d(290px,0,0)
}
90% {
	-webkit-transform:translate3d(305px,0,0);
	transform:translate3d(305px,0,0)
}
to {
	-webkit-transform:translate3d(300px,0,0);
	transform:translate3d(300px,0,0)
}
}.tools-col.show {
	-webkit-animation-duration:.8s;
	animation-duration:.8s;
	-webkit-animation-fill-mode:both;
	animation-fill-mode:both;
	-webkit-animation-name:smallLeftIn;
	animation-name:smallLeftIn
}
@-webkit-keyframes smallleftOut {
	0%,60%,75%,90%,to {
	-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);
	animation-timing-function:cubic-bezier(.215,.61,.355,1)
}
0% {
	-webkit-transform:translate3d(333px,0,0);
	transform:translate3d(333px,0,0)
}
60% {
	-webkit-transform:translate3d(-25px,0,0);
	transform:translate3d(-25px,0,0)
}
75% {
	-webkit-transform:translate3d(10px,0,0);
	transform:translate3d(10px,0,0)
}
90% {
	-webkit-transform:translate3d(-5px,0,0);
	transform:translate3d(-5px,0,0)
}
to {
	-webkit-transform:translateZ(0);
	transform:translateZ(0)
}
}@keyframes smallleftOut {
	0%,60%,75%,90%,to {
	-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);
	animation-timing-function:cubic-bezier(.215,.61,.355,1)
}
0% {
	-webkit-transform:translate3d(333px,0,0);
	transform:translate3d(333px,0,0)
}
60% {
	-webkit-transform:translate3d(-25px,0,0);
	transform:translate3d(-25px,0,0)
}
75% {
	-webkit-transform:translate3d(10px,0,0);
	transform:translate3d(10px,0,0)
}
90% {
	-webkit-transform:translate3d(-5px,0,0);
	transform:translate3d(-5px,0,0)
}
to {
	-webkit-transform:translateZ(0);
	transform:translateZ(0)
}
}.tools-col.hide {
	-webkit-animation-duration:.8s;
	animation-duration:.8s;
	-webkit-animation-fill-mode:both;
	animation-fill-mode:both;
	-webkit-animation-name:smallleftOut;
	animation-name:smallleftOut
}
html {
	-ms-text-size-adjust:100%;
	-webkit-text-size-adjust:100%;
	-webkit-tap-highlight-color:transparent;
	height:100%
}
body {
	margin:0;
	font-size:14px;
	font-family:Helvetica Neue,Helvetica,STHeiTi,Arial,sans-serif;
	line-height:1.5;
	color:#333;
	background-color:#fff;
	min-height:100%
}
article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary {
	display:block
}
audio,canvas,progress,video {
	display:inline-block
}
audio:not([controls]) {
	display:none;
	height:0
}
progress {
	vertical-align:baseline
}
[hidden],template {
	display:none
}
a {
	background:transparent;
	text-decoration:none;
	color:#08c
}
a:active {
	outline:0
}
abbr[title] {
	border-bottom:1px dotted
}
b,strong {
	font-weight:700
}
dfn {
	font-style:italic
}
mark {
	background:#ff0;
	color:#000
}
small {
	font-size:80%
}
sub,sup {
	font-size:75%;
	line-height:0;
	position:relative;
	vertical-align:baseline
}
sup {
	top:-.5em
}
sub {
	bottom:-.25em
}
img {
	border:0;
	vertical-align:middle;
	max-width:100%
}
svg:not(:root) {
	overflow:hidden
}
pre {
	overflow:auto;
	white-space:pre;
	white-space:pre-wrap;
	word-wrap:break-word
}
code,kbd,pre,samp {
	font-family:monospace,monospace;
	font-size:1em
}
button,input,optgroup,select,textarea {
	color:inherit;
	font:inherit;
	margin:0;
	vertical-align:middle
}
button,input,select {
	overflow:visible
}
button,select {
	text-transform:none
}
button,html input[type=button],input[type=reset],input[type=submit] {
	-webkit-appearance:button;
	cursor:pointer
}
[disabled] {
	cursor:default
}
button::-moz-focus-inner,input::-moz-focus-inner {
	border:0;
	padding:0
}
input {
	line-height:normal
}
input[type=checkbox],input[type=radio] {
	box-sizing:border-box;
	padding:0
}
input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button {
	height:auto
}
input[type=search] {
	-webkit-appearance:textfield;
	box-sizing:border-box
}
input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration {
	-webkit-appearance:none
}
fieldset {
	border:1px solid silver;
	margin:0 2px;
	padding:.35em .625em .75em
}
legend {
	border:0;
	padding:0
}
textarea {
	overflow:auto;
	resize:vertical;
	vertical-align:top
}
optgroup {
	font-weight:700
}
button,input,select,textarea {
	outline:0
}
input,textarea {
	-webkit-user-modify:read-write-plaintext-only
}
input::-ms-clear,input::-ms-reveal {
	display:none
}
input::-moz-placeholder,textarea::-moz-placeholder {
	color:#999
}
input:-ms-input-placeholder,textarea:-ms-input-placeholder {
	color:#999
}
input::-webkit-input-placeholder,textarea::-webkit-input-placeholder {
	color:#999
}
.placeholder {
	color:#999
}
table {
	border-collapse:collapse;
	border-spacing:0
}
td,th {
	padding:0
}
blockquote,figure,form,h1,h2,h3,h4,h5,h6,p {
	margin:0
}
dd,dl,li,ol,ul {
	margin:0;
	padding:0
}
ol,ul {
	list-style:none outside none
}
h1,h2,h3 {
	line-height:2;
	font-weight:400
}
h1 {
	font-size:18px
}
h2 {
	font-size:16px
}
h3 {
	font-size:14px
}
i {
	font-style:normal
}
* {
	box-sizing:border-box
}
@font-face {
	font-family:iconfont;
	src:url(./fonts/iconfont.b322fa.eot);
	src:url(./fonts/iconfont.b322fa.eot#iefix) format("embedded-opentype"),url(./fonts/iconfont.8c627f.woff) format("woff"),url(./fonts/iconfont.16acc2.ttf) format("truetype"),url(./fonts/iconfont.45d7ee.svg#iconfont) format("svg")
}
[class*=" icon-"],[class^=icon-] {
	font-family:iconfont!important;
	speak:none;
	font-size:16px;
	font-style:normal;
	font-weight:400;
	font-variant:normal;
	text-transform:none;
	line-height:1;
	-webkit-font-smoothing:antialiased;
	-moz-osx-font-smoothing:grayscale
}
.icon-twitter:before {
	content:"\E600"
}
.icon-facebook:before {
	content:"\E601"
}
.icon-clock:before {
	content:"\E602"
}
.icon-mail:before {
	content:"\E609"
}
.icon-link:before {
	content:"\E6AB"
}
.icon-search:before {
	content:"\E65B"
}
.icon-smile:before {
	content:"\E64A"
}
.icon-roundrightfill:before {
	content:"\E65A"
}
.icon-list:before {
	content:"\E682"
}
.icon-book:before {
	content:"\E6FE"
}
.icon-home:before {
	content:"\E6BB"
}
.icon-share:before {
	content:"\E618"
}
.icon-back:before {
	content:"\E625"
}
.icon-qq:before {
	content:"\E62D"
}
.icon-weibo:before {
	content:"\E619"
}
.icon-segmentfault:before {
	content:"\E603"
}
.icon-sort:before {
	content:"\E700"
}
.icon-jianshu:before {
	content:"\E613"
}
.icon-circle-left:before {
	content:"\E71F"
}
.icon-circle-right:before {
	content:"\E720"
}
.icon-loading:before {
	content:"\E614"
}
.icon-acfun:before {
	content:"\E604"
}
.icon-close:before {
	content:"\E60C"
}
.icon-tumblr:before {
	content:"\E6B0"
}
.icon-calendar:before {
	content:"\E667"
}
.icon-rss:before {
	content:"\E877"
}
.icon-price-tags:before {
	content:"\E6F9"
}
.icon-quo-left:before {
	content:"\E7F5"
}
.icon-quo-right:before {
	content:"\E7F6"
}
.icon-back1:before {
	content:"\E64E"
}
.icon-github:before {
	content:"\E735"
}
.icon-film:before {
	content:"\E7B7"
}
.icon-weixin:before {
	content:"\E61F"
}
.icon-qzone:before {
	content:"\E680"
}
.icon-category:before {
	content:"\E605"
}
.icon-douban:before {
	content:"\E64C"
}
.icon-roundleftfill:before {
	content:"\E799"
}
.icon-tuding:before {
	content:"\E651"
}
.icon-zhihu:before {
	content:"\E61B"
}
.icon-linkedin:before {
	content:"\E6D4"
}
.icon-google:before {
	content:"\E635"
}
.icon-plane:before {
	content:"\E62F"
}
.icon-bilibili:before {
	content:"\E622"
}
.icon-psn:before {
	content:"\E6C7"
}
body,button,input,select,textarea {
	color:#1a1a1a;
	font-family:lucida grande,lucida sans unicode,lucida,helvetica,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
	font-size:16px;
	font-size:1rem;
	line-height:1.75
}
body {
	overflow-y:hidden;
	background:#eaeaea
}
#container,body,html {
	height:100%;
	overflow-x:hidden;
	overflow-y:auto
}
#mobile-nav {
	display:none
}
#container {
	position:relative;
	min-height:100%
}
#container .anm-canvas {
	display:none
}
#container.show .anm-canvas {
	display:block;
	position:fixed
}
.body-wrap {
	margin-bottom:80px
}
.mid-col {
	position:absolute;
	right:0;
	min-height:100%;
	background:#eaeaea;
	left:300px;
	width:auto
}
.mid-col.show {
	background:none;
	opacity:.9
}
.mid-col.show .article {
	background:hsla(0,0%,100%,.3)
}
.left-col {
	background:#fff;
	width:300px;
	position:fixed;
	opacity:1;
	transition:all .2s ease-in;
	height:100%;
	z-index:999
}
.left-col .overlay {
	width:100%;
	height:180px;
	position:absolute
}
.left-col .intrude-less {
	width:76%;
	text-align:center;
	margin:112px auto 0
}
.left-col #header {
	width:100%;
	height:300px;
	position:relative;
	border-bottom:1px solid color-border
}
.left-col #header a {
	color:#696969
}
.left-col #header a:hover {
	color:#b0a0aa
}
.left-col #header .header-subtitle {
	text-align:center;
	color:#999;
	font-size:14px;
	line-height:25px;
	overflow:hidden;
	text-overflow:ellipsis;
	display:-webkit-box;
	-webkit-line-clamp:2;
	-webkit-box-orient:vertical
}
.left-col #header .header-menu {
	font-weight:300;
	line-height:31px;
	text-transform:uppercase;
	float:none;
	min-height:150px;
	margin-left:-12px;
	text-align:center;
	display:-webkit-box;
	-webkit-box-orient:horizontal;
	-webkit-box-pack:center;
	-webkit-box-align:center
}
.left-col #header .header-menu li {
	cursor:default
}
.left-col #header .header-menu li a {
	font-size:14px;
	min-width:300px
}
.left-col #header .header-smart-menu {
	font-size:12px;
	margin-bottom:20px
}
.left-col #header .header-smart-menu a:after {
	content:"/"
}
.left-col #header .header-smart-menu a:last-child:after {
	content:""
}
.left-col #header .profilepic {
	display:block;
	border:5px solid #fff;
	border-radius:300px;
	width:128px;
	height:128px;
	margin:0 auto;
	position:relative;
	overflow:hidden;
	background:#88acdb;
	-webkit-transition:all .2s ease-in;
	display:-webkit-box;
	-webkit-box-orient:horizontal;
	-webkit-box-pack:center;
	-webkit-box-align:center;
	text-align:center
}
.left-col #header .profilepic img {
	border-radius:300px;
	opacity:1;
	-webkit-transition:all .2s ease-in
}
.left-col #header .profilepic img.show {
	width:100%;
	height:100%;
	opacity:1
}
.left-col #header .header-author {
	text-align:center;
	margin:.67em 0;
	font-family:Roboto,serif;
	font-size:30px;
	transition:.3s
}
::-webkit-scrollbar {
	width:10px;
	height:10px
}
::-webkit-scrollbar-button {
	width:0;
	height:0
}
::-webkit-scrollbar-button:end:decrement,::-webkit-scrollbar-button:start:increment {
	display:none
}
::-webkit-scrollbar-corner {
	display:block
}
::-webkit-scrollbar-thumb {
	border-radius:8px;
	background-color:rgba(0,0,0,.2)
}
::-webkit-scrollbar-thumb:hover {
	border-radius:8px;
	background-color:rgba(0,0,0,.5)
}
::-webkit-scrollbar-thumb,::-webkit-scrollbar-track {
	border-right:1px solid transparent;
	border-left:1px solid transparent
}
::-webkit-scrollbar-track:hover {
	background-color:rgba(0,0,0,.15)
}
::-webkit-scrollbar-button:start {
	width:10px;
	height:10px;
	background:url(./img/scrollbar_arrow.png) no-repeat 0 0
}
::-webkit-scrollbar-button:start:hover {
	background:url(./img/scrollbar_arrow.png) no-repeat -15px 0
}
::-webkit-scrollbar-button:start:active {
	background:url(./img/scrollbar_arrow.png) no-repeat -30px 0
}
::-webkit-scrollbar-button:end {
	width:10px;
	height:10px;
	background:url(./img/scrollbar_arrow.png) no-repeat 0 -18px
}
::-webkit-scrollbar-button:end:hover {
	background:url(./img/scrollbar_arrow.png) no-repeat -15px -18px
}
::-webkit-scrollbar-button:end:active {
	background:url(./img/scrollbar_arrow.png) no-repeat -30px -18px
}
.article-entry .highlight,.article-entry pre {
	background:#272822;
	margin:10px 0;
	padding:10px;
	overflow:auto;
	color:#fff;
	font-size:.9em;
	line-height:22.400000000000002px
}
.article-entry .gist .gist-file .gist-data .line-numbers,.article-entry .highlight .gutter pre,.article-entry .highlight .gutter pre .line {
	color:#666
}
.article-entry code,.article-entry pre {
	font-family:Source Code Pro,Consolas,Monaco,Menlo,monospace
}
.article-entry code {
	background:#eee;
	padding:0 .3em;
	border:none
}
.article-entry pre code {
	background:none;
	text-shadow:none;
	padding:0;
	color:#fff
}
.article-entry .highlight {
	border-radius:4px
}
.article-entry .highlight pre {
	border:none;
	margin:0;
	padding:0
}
.article-entry .highlight table {
	margin:0;
	width:auto
}
.article-entry .highlight td {
	border:none;
	padding:0
}
.article-entry .highlight figcaption {
	color:highlight-comment;
	line-height:1em;
	margin-bottom:1em
}
.article-entry .highlight figcaption:after,.article-entry .highlight figcaption:before {
	content:"";
	display:table
}
.article-entry .highlight figcaption:after {
	clear:both
}
.article-entry .highlight figcaption a {
	float:right
}
.article-entry .highlight .gutter pre {
	text-align:right;
	padding-right:20px
}
.article-entry .highlight .gutter pre .line {
	text-shadow:none
}
.article-entry .highlight .line {
	color:#fff;
	min-height:19px
}
.article-entry .gist {
	margin:0 -20px;
	border-style:solid;
	border-color:#ddd;
	border-width:1px 0;
	background:#272822;
	padding:15px 20px 15px 0
}
.article-entry .gist .gist-file {
	border:none;
	font-family:Source Code Pro,Consolas,Monaco,Menlo,monospace;
	margin:0
}
.article-entry .gist .gist-file .gist-data {
	background:none;
	border:none
}
.article-entry .gist .gist-file .gist-data .line-numbers {
	background:none;
	border:none;
	padding:0 20px 0 0
}
.article-entry .gist .gist-file .gist-data .line-data {
	padding:0!important
}
.article-entry .gist .gist-file .highlight {
	margin:0;
	padding:0;
	border:none
}
.article-entry .gist .gist-file .gist-meta {
	background:#272822;
	color:highlight-comment;
	font:.85em Helvetica Neue,Helvetica,Arial,sans-serif;
	text-shadow:0 0;
	padding:0;
	margin-top:1em;
	margin-left:20px
}
.article-entry .gist .gist-file .gist-meta a {
	color:#258fb8;
	font-weight:400
}
.article-entry .gist .gist-file .gist-meta a:hover {
	text-decoration:underline
}
pre .comment {
	color:#75715e
}
pre .class .params,pre .function .keyword,pre .keyword {
	color:#66d9ef
}
pre .css .value,pre .doctype,pre .function,pre .params,pre .tag {
	color:#fff
}
pre .at_rule,pre .at_rule .keyword,pre .css~* .tag,pre .preprocessor,pre .preprocessor .keyword,pre .title {
	color:#f92672
}
pre .attribute,pre .built_in,pre .class,pre .css~* .class,pre .function .title {
	color:#a6e22e
}
pre .string,pre .value {
	color:#e6db74
}
pre .number {
	color:#7163d7
}
pre .css~* .id,pre .id {
	color:#fd971f
}
#header .tagcloud a {
	color:#fff
}
.tagcloud a {
	display:inline-block;
	text-decoration:none;
	font-weight:400;
	font-size:10px;
	color:#fff;
	height:18px;
	line-height:18px;
	float:left;
	padding:0 5px 0 10px;
	position:relative;
	border-radius:0 5px 5px 0;
	margin:5px 9px 5px 8px;
	font-family:Menlo,Monaco,Andale Mono,lucida console,Courier New,monospace
}
.tagcloud a:hover {
	opacity:.8
}
.tagcloud a:before {
	content:" ";
	width:0;
	height:0;
	position:absolute;
	top:0;
	left:-18px;
	border:9px solid transparent
}
.tagcloud a:after {
	content:" ";
	width:4px;
	height:4px;
	background-color:#fff;
	border-radius:4px;
	box-shadow:0 0 0 1px rgba(0,0,0,.3);
	position:absolute;
	top:7px;
	left:2px
}
.tagcloud a.color1 {
	background:#ff945c
}
.tagcloud a.color1:before {
	border-right-color:#ff945c
}
.tagcloud a.color2 {
	background:#cc8167
}
.tagcloud a.color2:before {
	border-right-color:#cc8167
}
.tagcloud a.color3 {
	background:#ba8f6c
}
.tagcloud a.color3:before {
	border-right-color:#ba8f6c
}
.tagcloud a.color4 {
	background:#94635c
}
.tagcloud a.color4:before {
	border-right-color:#94635c
}
.tagcloud a.color5 {
	background:#7b5d5f
}
.tagcloud a.color5:before {
	border-right-color:#7b5d5f
}
.article-tag-list .article-tag-list-item {
	float:left
}
.article-pop-out .icon-tuding {
	color:#999;
	float:left;
	margin-right:10px;
	margin-top:6px
}
.article-category,.article-category .article-tag-list,.article-tag,.article-tag .article-tag-list {
	float:left
}
.article-category .icon,.article-tag .icon {
	color:#999;
	float:left;
	margin-right:10px;
	margin-top:6px
}
.article-pop-out {
	float:left
}
.archive-article-date {
	color:#999;
	margin-right:7.6923%;
	float:right
}
.archive-article-date .icon {
	margin:5px 5px 5px 0
}
.glass {
	background-color:rgba(54,70,93,.9);
	z-index:998;
	transition:opacity .15s;
	width:100%;
	height:100%;
	display:none
}
.glass,.tagcloud-ctn {
	left:0;
	opacity:1;
	bottom:0;
	position:fixed;
	right:0;
	top:0
}
.tagcloud-ctn {
	z-index:90120;
	background-size:100% 100%
}
.tagcloud-ctn .tagcloud-global {
	position:fixed;
	top:50%;
	left:50%;
	margin-top:-115px;
	margin-left:-315px;
	width:630px
}
.tagcloud-ctn .tagcloud-global a {
	width:80px;
	height:80px;
	border-radius:50%;
	background:#f2992e;
	color:#fff;
	display:block;
	float:left;
	line-height:80px;
	text-align:center
}
.tagcloud-ctn .tagcloud-global .tab-post-types .tab-post-type:first-child .post-type-icon {
	background:#f2992e
}
.tagcloud-ctn .tagcloud-global .tab-post-types .tab-post-type:nth-child(2) .post-type-icon {
	background:#56bc8a
}
.tagcloud-ctn .tagcloud-global .tab-post-types .tab-post-type:nth-child(3) .post-type-icon {
	background:#4aa8d8
}
.tagcloud-ctn .tagcloud-global .tab-post-types .tab-post-type:nth-child(4) .post-type-icon {
	background:#a77dc2
}
.tagcloud-ctn .tagcloud-global .tab-post-types .tab-post-type:nth-child(5) .post-type-icon {
	background:#dd765d
}
#header .header-nav {
	width:100%;
	position:absolute;
	transition:-webkit-transform .3s ease-in;
	transition:transform .3s ease-in;
	transition:transform .3s ease-in,-webkit-transform .3s ease-in
}
#header .header-nav .social {
	margin-top:10px;
	text-align:center;
	display:-webkit-box;
	display:-ms-flexbox;
	display:flex;
	-ms-flex-wrap:wrap;
	flex-wrap:wrap;
	-webkit-box-pack:center;
	-ms-flex-pack:center;
	justify-content:center
}
#header .header-nav .social a {
	border-radius:50%;
	display:-moz-inline-stack;
	display:inline-block;
	vertical-align:middle;
	*vertical-align:auto;
	zoom:1;
	*display:inline;
	margin:0 8px 15px;
	transition:.3s;
	text-align:center;
	color:#fff;
	opacity:.7;
	width:28px;
	height:28px;
	line-height:26px
}
#header .header-nav .social a:hover {
	opacity:1
}
#header .header-nav .social a.weibo {
	background:#aaf;
	border:1px solid #aaf
}
#header .header-nav .social a.weibo:hover {
	border:1px solid #aaf
}
#header .header-nav .social a.segmentfault {
	background:#009a61;
	border:1px solid #009a61
}
#header .header-nav .social a.segmentfault:hover {
	border:1px solid #009a61
}
#header .header-nav .social a.rss {
	background:#ef7522;
	border:1px solid #ef7522
}
#header .header-nav .social a.rss:hover {
	border:1px solid #cf5d0f
}
#header .header-nav .social a.github {
	background:#afb6ca;
	border:1px solid #afb6ca
}
#header .header-nav .social a.github:hover {
	border:1px solid #909ab6
}
#header .header-nav .social a.facebook {
	background:#3b5998;
	border:1px solid #3b5998
}
#header .header-nav .social a.facebook:hover {
	border:1px solid #2d4373
}
#header .header-nav .social a.google {
	background:#c83d20;
	border:1px solid #c83d20
}
#header .header-nav .social a.google:hover {
	border:1px solid #9c3019
}
#header .header-nav .social a.twitter {
	background:#55cff8;
	border:1px solid #55cff8
}
#header .header-nav .social a.twitter:hover {
	border:1px solid #24c1f6
}
#header .header-nav .social a.linkedin {
	background:#005a87;
	border:1px solid #005a87
}
#header .header-nav .social a.linkedin:hover {
	border:1px solid #006b98
}
#header .header-nav .social a.acfun {
	background:#fd4c5d;
	border:1px solid #fd4c5d
}
#header .header-nav .social a.acfun:hover {
	border:1px solid #fd4c5d
}
#header .header-nav .social a.bilibili {
	background:#e15280;
	border:1px solid #e15280
}
#header .header-nav .social a.bilibili:hover {
	border:1px solid #e15280
}
#header .header-nav .social a.zhihu {
	background:#0078d8;
	border:1px solid #0078d8
}
#header .header-nav .social a.zhihu:hover {
	border:1px solid #0078d8
}
#header .header-nav .social a.douban {
	background:#06c611;
	border:1px solid #06c611
}
#header .header-nav .social a.douban:hover {
	border:1px solid #06c611
}
#header .header-nav .social a.mail {
	background:#005a87;
	border:1px solid #005a87
}
#header .header-nav .social a.mail:hover {
	border:1px solid #006b98
}
#header .header-nav .social a.jianshu {
	background:#ff5722;
	border:1px solid #ff5722
}
#header .header-nav .social a.jianshu:hover {
	border:1px solid #ff5722
}
#header .header-nav .social a.weixin {
	background:#4caf50;
	border:1px solid #4caf50
}
#header .header-nav .social a.weixin:hover {
	border:1px solid #4caf50
}
#header .header-nav .social a.qq {
	background:#34baad;
	border:1px solid #34baad
}
#header .header-nav .social a.qq:hover {
	border:1px solid #34baad
}
#header .header-nav .social a.psn {
	background:#086ef6;
	border:1px solid #086ef6
}
#header .header-nav .social a.psn:hover {
	border:1px solid #086ef6
}
#page-nav {
	text-align:center;
	margin-top:30px
}
#page-nav .page-number {
	width:20px;
	height:25px;
	background:#4d4d4d;
	display:inline-block;
	color:#fff;
	line-height:25px;
	font-size:12px;
	margin:0 5px 30px;
	border-radius:2px
}
#page-nav .page-number:hover {
	background:#5e5e5e
}
#page-nav .current {
	background:#88acdb;
	cursor:default
}
#page-nav .current:hover {
	background:#88acdb
}
#page-nav .extend {
	color:#4d4d4d;
	margin:0 27px;
	opacity:1
}
#page-nav .extend:hover {
	color:#5e5e5e
}
#page-nav:hover .extend {
	opacity:1
}
.archives-wrap {
	position:relative;
	margin:0 30px;
	padding-right:60px;
	border-bottom:1px solid #eee;
	background:#fff
}
.archives-wrap:first-child {
	margin-top:30px
}
.archives-wrap:last-child {
	margin-bottom:80px
}
.archives-wrap .archive-year-wrap {
	line-height:35px;
	width:200px;
	position:absolute;
	padding-top:15px;
	font-size:1.8em;
	z-index:1
}
.archives-wrap .archive-year-wrap a {
	color:#666;
	font-weight:700;
	padding-left:48px
}
.archives {
	position:relative
}
.archives .article-info {
	border:none
}
.archives .archive-article {
	margin-left:200px;
	padding:20px 0;
	border-bottom:1px solid #eee;
	border-top:1px solid #fff;
	position:relative
}
.archives .archive-article:first-child {
	border-top:none
}
.archives .archive-article:last-child {
	border-bottom:none
}
.archives .archive-article-title {
	font-size:16px;
	color:#333;
	transition:color .3s
}
.archives .archive-article-title:hover {
	color:#657b83
}
.archives .archive-article-title span {
	display:block;
	color:#a8a8a8;
	font-size:12px;
	line-height:14px;
	height:7px;
	padding-left:2px
}
.archives .archive-article-title span:before {
	display:inline-block;
	content:"\201C";
	font-family:serif;
	font-size:30px;
	float:left;
	margin:4px 4px 0 -12px;
	color:#c8c8c8
}
.archive-article-inner .icon-clock {
	margin-right:5px
}
.archive-article-inner .archive-article-header {
	position:relative;
	min-height:36px
}
.archive-article-inner .article-meta {
	position:relative;
	float:right;
	margin-top:-10px;
	color:#555;
	background:none;
	text-align:right;
	width:auto
}
.archive-article-inner .article-meta .article-date time {
	color:#aaa
}
.archive-article-inner .article-meta .archive-article-date,.archive-article-inner .article-meta .article-tag-list {
	margin-right:30px;
	display:-moz-inline-stack;
	display:inline-block;
	vertical-align:middle;
	zoom:1;
	color:#666;
	font-size:14px
}
.archive-article-inner .article-meta .archive-article-date {
	cursor:default;
	font-size:12px;
	margin-bottom:5px;
	margin-top:-10px;
	margin-right:0
}
.archive-article-inner .article-meta .article-category:before {
	float:left;
	margin-top:1px;
	left:15px
}
.archive-article-inner .article-meta .article-category .article-category-link {
	width:auto;
	max-width:83px;
	padding-left:10px
}
.archive-article-inner .article-meta .article-tag-list {
	margin-top:0
}
.archive-article-inner .article-meta .article-tag-list:before {
	left:15px
}
.archive-article-inner .article-meta .article-tag-list .article-tag-list-item {
	display:inline-block;
	width:auto;
	max-width:83px;
	padding-left:8px;
	font-size:12px
}
.tools-col {
	width:300px;
	height:100%;
	position:fixed;
	left:0;
	top:0;
	z-index:0;
	padding:0;
	opacity:0;
	-webkit-overflow-scrolling:touch;
	overflow-scrolling:touch
}
.tools-col.show {
	opacity:1
}
.tools-col.hide {
	z-index:0
}
.tools-col .tools-nav {
	display:none
}
.tools-col .tools-section,.tools-col .tools-wrap {
	height:100%;
	color:#e5e5e5;
	width:360px;
	overflow:hidden;
	overflow-y:auto
}
.tools-col .tools-section ::-webkit-scrollbar,.tools-col .tools-wrap ::-webkit-scrollbar {
	display:none
}
.tools-col .tools-section .search-wrap {
	width:310px;
	margin:20px 20px 10px;
	position:relative
}
.tools-col .tools-section .search-wrap .search-ipt {
	width:310px;
	color:#fff;
	background:none;
	border:none;
	border-bottom:2px solid #fff;
	font-family:Roboto,serif
}
.tools-col .tools-section .search-wrap .icon {
	position:absolute;
	right:0;
	top:7px;
	color:#fff;
	cursor:pointer
}
.tools-col .tools-section .search-wrap .icon:hover {
	-webkit-transform:scale(1.2);
	transform:scale(1.2)
}
.tools-col .tools-section .search-wrap ::-webkit-input-placeholder {
	color:#ededed
}
.tools-col .tools-section .search-tag.tagcloud {
	text-align:center;
	position:relative
}
.tools-col .tools-section .search-tag.tagcloud .search-tag-wording {
	font-size:12px;
	float:right;
	margin:4px 75px 0 0
}
.tools-col .tools-section .search-tag.tagcloud .search-switch {
	width:40px;
	height:25px;
	display:block
}
.tools-col .tools-section .search-tag.tagcloud .search-switch input {
	width:40px;
	height:14px;
	position:absolute;
	top:0;
	right:30px;
	z-index:2;
	border:0;
	background:0 0;
	-webkit-appearance:none;
	outline:0
}
.tools-col .tools-section .search-tag.tagcloud .search-switch input:before {
	content:"";
	width:40px;
	height:14px;
	border:1px solid #bdcabc;
	background-color:#fdfdfd;
	border-radius:20px;
	cursor:pointer;
	display:inline-block;
	position:relative;
	vertical-align:middle;
	box-sizing:content-box;
	box-shadow:inset 0 0 0 0 #dfdfdf;
	transition:border .4s,box-shadow .4s;
	background-clip:content-box
}
.tools-col .tools-section .search-tag.tagcloud .search-switch input:checked:before {
	border-color:#64bd63;
	box-shadow:inset 0 0 0 .16rem #64bd63;
	background-color:#64bd63;
	transition:border .4s,box-shadow .4s,background-color 1.2s
}
.tools-col .tools-section .search-tag.tagcloud .search-switch input:checked:after {
	left:27px;
	background:#fff
}
.tools-col .tools-section .search-tag.tagcloud .search-switch input:after {
	content:"";
	width:14px;
	height:14px;
	position:absolute;
	top:16px;
	left:2px;
	-webkit-transform:translateY(-50%);
	border-radius:100%;
	background-color:#91c0f1;
	box-shadow:0 1px 1px rgba(0,0,0,.4);
	transition:left .2s;
	cursor:pointer
}
.tools-col .tools-section .search-tag.tagcloud .article-tag-list {
	display:none;
	margin:15px 10px 0;
	padding:10px;
	background:hsla(0,0%,100%,.2)
}
.tools-col .tools-section .search-tag.tagcloud .article-tag-list.show {
	display:block
}
.tools-col .tools-section .search-tag.tagcloud .a {
	float:none
}
.tools-col .tools-section .search-ul {
	margin-top:10px;
	color:rgba(77,77,77,.75);
	-webkit-overflow-scrolling:touch;
	overflow-scrolling:touch;
	overflow-y:auto
}
.tools-col .tools-section .search-ul .search-li {
	padding:10px 20px;
	border-bottom:1px dotted #dcdcdc
}
.tools-col .tools-section .search-ul .search-li:hover {
	background:hsla(0,0%,100%,.2)
}
.tools-col .tools-section .search-ul .search-title {
	overflow:hidden;
	white-space:nowrap;
	text-overflow:ellipsis;
	display:block;
	color:#fffff8;
	text-shadow:1px 1px rgba(77,77,77,.25)
}
.tools-col .tools-section .search-ul .search-title .icon {
	margin-right:10px;
	color:#fffdd8
}
.tools-col .tools-section .search-ul .search-title:hover {
	color:#fff
}
.tools-col .tools-section .search-ul .search-tag,.tools-col .tools-section .search-ul .search-time {
	font-size:12px;
	color:#fffdd8;
	margin-right:10px
}
.tools-col .tools-section .search-ul .search-tag .icon,.tools-col .tools-section .search-ul .search-time .icon {
	margin-right:0
}
.tools-col .tools-section .search-ul .search-tag span,.tools-col .tools-section .search-ul .search-time span {
	cursor:pointer
}
.tools-col .tools-section .search-ul .search-tag span:hover,.tools-col .tools-section .search-ul .search-time span:hover {
	color:#fff
}
.tools-col .tools-section .search-ul .search-time {
	float:left
}
.tools-col .tools-section .search-ul .search-tag span {
	margin-right:5px
}
.tools-col .tools-section-friends {
	padding-top:30px
}
.tools-col .aboutme-wrap {
	display:-webkit-box;
	display:-ms-flexbox;
	display:flex;
	-webkit-box-align:center;
	-ms-flex-align:center;
	align-items:center;
	-webkit-box-pack:center;
	-ms-flex-pack:center;
	justify-content:center;
	width:100%;
	height:100%;
	color:#fffdd8;
	text-shadow:1px 1px rgba(77,77,77,.45)
}
.body-wrap>article {
	position:relative
}
@-webkit-keyframes cd-bounce-1 {
	0% {
	opacity:0;
	-webkit-transform:scale(1)
}
60% {
	opacity:1;
	-webkit-transform:scale(1.01)
}
to {
	-webkit-transform:scale(1)
}
}@keyframes cd-bounce-1 {
	0% {
	opacity:0;
	-webkit-transform:scale(1);
	transform:scale(1)
}
60% {
	opacity:1;
	-webkit-transform:scale(1.01);
	transform:scale(1.01)
}
to {
	-webkit-transform:scale(1);
	transform:scale(1)
}
}.article {
	margin:30px;
	position:relative;
	border:1px solid #ddd;
	border-top:1px solid #fff;
	border-bottom:1px solid #fff;
	background:#fff;
	transition:all .2s ease-in
}
.article img {
	max-width:100%
}
.article-inner h1.article-title,.article-title {
	color:#696969;
	margin-left:0;
	font-weight:300;
	line-height:35px;
	margin-bottom:20px;
	font-size:26px;
	transition:color .3s
}
.article-header {
	border-left:5px solid #4d4d4d;
	padding:30px 0 15px 25px;
	padding-left:7.6923%
}
.article-meta {
	width:150px;
	font-size:14;
	text-align:right;
	position:absolute;
	right:0;
	top:23px;
	text-align:center;
	z-index:1
}
.article-meta time {
	color:#aaa
}
.article-meta time .icon-clock {
	margin-right:8px;
	font-size:16px
}
.article-more-link {
	margin-top:0;
	text-align:left;
	float:right
}
.article-more-link a {
	background:#4d4d4d;
	color:#fff;
	font-size:12px;
	padding:5px 8px;
	line-height:16px;
	border-radius:2px;
	transition:background .3s
}
.article-more-link a:hover {
	background:#3c3c3c
}
.article-more-link a.hidden {
	visibility:hidden
}
.article-info.info-on-right {
	margin:10px 0 0;
	float:right
}
.article-info-index.article-info {
	padding-top:20px;
	margin:30px 7.6923% 0;
	min-height:72px;
	border-top:1px solid #ddd
}
.article-info-post.article-info {
	padding:0;
	border:none;
	margin:-30px 0 20px 7.6923%
}
.article-inner p {
	margin:0 0 1.75em
}
.article-inner {
	border-color:#d1d1d1
}
.article-inner h1 {
	font-size:28px;
	font-size:1.75rem;
	line-height:1.25;
	margin-top:2em;
	margin-bottom:1em
}
.article-inner h2 {
	font-size:23px;
	font-size:1.4375rem;
	line-height:1.2173913043;
	margin-top:2.4347826087em;
	margin-bottom:1.2173913043em
}
.article-inner h3 {
	font-size:19px;
	font-size:1.1875rem;
	line-height:1.1052631579;
	margin-top:2.9473684211em;
	margin-bottom:1.4736842105em
}
.article-inner h4,.article-inner h5,.article-inner h6 {
	font-size:16px;
	font-size:1rem;
	line-height:1.3125;
	margin-top:3.5em;
	margin-bottom:1.75em
}
.article-inner h4 {
	letter-spacing:.140625em;
	text-transform:uppercase
}
.article-inner h6 {
	font-style:italic
}
.article-inner h1,.article-inner h2,.article-inner h3,.article-inner h4,.article-inner h5,.article-inner h6 {
	font-weight:900
}
.article-inner h1:first-child,.article-inner h2:first-child,.article-inner h3:first-child,.article-inner h4:first-child,.article-inner h5:first-child,.article-inner h6:first-child {
	margin-top:0
}
.article-inner h1:first-child {
	margin-bottom:10px;
	display:inline
}
.article-entry {
	line-height:1.8em;
	padding-right:7.6923%;
	padding-left:7.6923%
}
.article-entry p {
	margin-top:10px
}
.article-entry li code,.article-entry p code {
	padding:1px 3px;
	margin:0 3px;
	background:#ddd;
	border:1px solid #ccc;
	font-family:Menlo,Monaco,Andale Mono,lucida console,Courier New,monospace;
	word-wrap:break-word;
	font-size:14px
}
.article-entry blockquote {
	background:#ddd;
	border-left:5px solid #ccc;
	padding:15px 20px;
	margin-top:10px;
	border-left:5px solid #657b83;
	background:#f6f6f6
}
.article-entry blockquote p {
	margin-top:0;
	margin-bottom:0
}
.article-entry em {
	font-style:italic
}
.article-entry ul li:before {
	content:"";
	width:6px;
	height:6px;
	border:1px solid #999;
	border-radius:10px;
	background:#aaa;
	display:inline-block;
	margin-right:10px;
	float:left;
	margin-top:10px
}
.article-entry ol {
	counter-reset:item
}
.article-entry ol li:before {
	counter-increment:item;
	content:counter(item) ".";
	margin-right:10px
}
.article-entry ol,.article-entry ul {
	font-size:14px;
	margin:10px 0
}
.article-entry li ol,.article-entry li ul {
	margin-left:30px
}
.article-entry li ol li:before,.article-entry li ul li:before {
	content:"";
	background:#dedede
}
.article-entry h1 {
	margin-top:30px
}
.article-entry h2,.article-entry h3,.article-entry h4,.article-entry h5,.article-entry h6 {
	margin-top:20px;
	font-weight:700;
	color:#574c4c;
	padding-bottom:5px;
	border-bottom:1px solid #ddd
}
.article-entry video {
	max-width:100%
}
.article-entry strong {
	font-weight:700
}
.article-entry .caption {
	display:block;
	font-size:.8em;
	color:#aaa
}
.article-entry hr {
	height:0;
	margin-top:20px;
	margin-bottom:20px;
	border-left:0;
	border-right:0;
	border-top:1px solid #ddd;
	border-bottom:1px solid #fff
}
.article-entry pre {
	line-height:1.5;
	margin-top:10px;
	padding:5px 15px;
	overflow-x:auto;
	color:#657b83;
	border:1px solid #ccc;
	text-shadow:0 1px #444;
	font-family:Menlo,Monaco,Andale Mono,lucida console,Courier New,monospace
}
.article-entry pre code {
	font-size:14px
}
.article-entry table {
	width:100%;
	border:1px solid #dedede;
	margin:15px 0;
	border-collapse:collapse
}
.article-entry table td,.article-entry table tr {
	height:35px
}
.article-entry table thead tr {
	background:#f8f8f8
}
.article-entry table tbody tr:hover {
	background:#efefef
}
.article-entry table td,.article-entry table th {
	border:1px solid #dedede;
	padding:0 10px
}
.article-entry figure table {
	border:none;
	width:auto;
	margin:0
}
.article-entry figure table tbody tr:hover {
	background:none
}
#article-nav {
	margin:0 0 20px;
	padding:0 32px 10px;
	min-height:30px
}
#article-nav .article-nav-link-wrap {
	font-size:14px
}
#article-nav .article-nav-link-wrap .article-nav-title {
	display:inline-block;
	font-size:16px;
	transition:color .3s
}
#article-nav .article-nav-link-wrap:hover .article-nav-title,#article-nav .article-nav-link-wrap:hover i {
	color:#4d4d4d
}
#article-nav #article-nav-older {
	float:right
}
#disqus_thread,#gitment-ctn,#SOHUCS,.cloud-tie-wrapper,.duoshuo {
	padding:0 30px!important;
	min-height:20px
}
#SOHUCS #SOHU_MAIN .module-cmt-list .block-cont-gw {
	border-bottom:1px dashed #c8c8c8!important
}
.share-wrap {
	min-height:20px
}
.share-btn {
	float:right;
	position:relative
}
.share-icons {
	display:-webkit-box;
	display:-ms-flexbox;
	display:flex;
	-webkit-box-pack:center;
	-ms-flex-pack:center;
	justify-content:center;
	-webkit-box-align:center;
	-ms-flex-align:center;
	align-items:center;
	-ms-flex-wrap:wrap;
	flex-wrap:wrap
}
.share-icons a {
	border:1px solid #fff;
	border-radius:50%;
	display:-moz-inline-stack;
	display:inline-block;
	vertical-align:middle;
	zoom:1;
	margin:10px;
	transition:.3s;
	text-align:center;
	color:#fff;
	opacity:.7;
	width:28px;
	height:28px;
	line-height:26px;
	text-shadow:1px 1px 1px #509eb7
}
.share-icons a:active {
	color:#fff
}
.share-icons a:hover {
	-webkit-transform:scale(1.2);
	transform:scale(1.2)
}
.share-icons a.share-outer {
	border:none;
	color:#fff;
	background:#4d4d4d;
	text-shadow:none
}
.page-modal {
	position:fixed;
	top:24%;
	left:50%;
	z-index:1001;
	padding:20px;
	text-align:center;
	color:#727272;
	background:#fff;
	border-radius:4px;
	box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);
	opacity:0;
	-webkit-transform:translate(-50%,-200%);
	transform:translate(-50%,-200%)
}
.page-modal p {
	margin-bottom:10px
}
.page-modal.ready {
	visibility:hidden;
	display:block;
	-webkit-transform:translate(-50%,-100%);
	transform:translate(-50%,-100%);
	transition:.3s
}
.page-modal.in {
	visibility:visible;
	opacity:1;
	-webkit-transform:translate(-50%);
	transform:translate(-50%)
}
.page-modal .close {
	position:absolute;
	right:15px;
	top:15px;
	color:rgba(0,0,0,.2);
	font-size:16px;
	line-height:20px
}
.page-modal .close:active,.page-modal .close:hover {
	color:rgba(0,0,0,.4)
}
.mask {
	visibility:hidden;
	position:fixed;
	top:0;
	left:0;
	bottom:0;
	z-index:1000;
	width:100%;
	height:100%;
	background:#000;
	opacity:0;
	filter:alpha(opacity=0);
	pointer-events:none;
	transition:.3s ease-in-out
}
.mask.in {
	visibility:visible;
	pointer-events:auto;
	opacity:.3
}
.page-reward {
	margin:60px 0;
	text-align:center
}
.page-reward .page-reward-btn {
	position:relative;
	display:inline-block;
	width:56px;
	height:56px;
	line-height:200px;
	font-size:20px;
	color:#fff;
	background:#f44336;
	border-radius:50%;
	box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);
	transition:.4s ease-in-out
}
.page-reward .page-reward-btn:active,.page-reward .page-reward-btn:hover {
	box-shadow:0 6px 12px rgba(0,0,0,.2),0 4px 15px rgba(0,0,0,.2)
}
.page-reward .page-reward-btn .tooltip-item{
	display:block;
	width:56px;
	height:56px
}
.page-reward .reward-box {
	display:-webkit-box;
	display:-ms-flexbox;
	display:flex;
	-ms-flex-pack:distribute;
	justify-content:space-around
}
.page-reward .reward-p {
	color:#fff;
	font-weight:700;
	text-shadow:1px 1px 1px #45b9e0
}
.page-reward .reward-p .icon {
	margin:0 10px;
	color:#ddd
}
.page-reward .reward-type {
	font-size:16px;
	display:block;
	color:#4d4d4d;
	margin:20px 0 0
}
.page-reward .reward-img {
	width:130px;
	height:130px;
	border:6px solid #fff;
	border-radius:3px
}
.wrap-side-operation {
	position:fixed;
	right:40px;
	bottom:50px;
	z-index:999;
	font-size:14px
}
.wrap-side-operation .icon-plane {
	color:#fff;
	text-shadow:1px 1px 1px #509eb7;
	opacity:.7;
	font-size:52px;
	line-height:40px;
	width:40px;
	text-align:center;
	display:block
}
.mod-side-operation {
	width:40px;
	text-align:center
}
.jump-container:hover .icon-back {
	background:rgba(36,193,246,.9)
}
.jump-container,.toc-container {
	position:relative;
	cursor:pointer;
	width:40px;
	height:40px;
	opacity:.8
}
.jump-plan-container {
	position:absolute;
	top:-11px;
	left:-4px;
	width:50px;
	height:61px;
	overflow:hidden
}
.jump-plan-container .jump-plane {
	display:block;
	position:absolute;
	width:42px;
	height:66px;
	-webkit-transform:translateY(68px);
	transform:translateY(68px);
	left:-2px
}
.mod-side-operation__jump-to-top .icon-back {
	transition:.3s;
	color:#fff;
	background:#ccc;
	-webkit-transform:rotate(90deg);
	transform:rotate(90deg);
	font-size:32px;
	line-height:40px;
	width:40px;
	text-align:center;
	display:block
}
.mod-side-operation__jump-to-top .icon-back:hover {
	background:#24c1f6;
	color:#24c1f6
}
.toc-container.tooltip-left {
	background:#ccc;
	margin-top:10px;
	transition:.3s
}
.toc-container.tooltip-left:hover {
	background:rgba(36,193,246,.9)
}
.toc-container.tooltip-left .icon-font {
	font-size:22px;
	line-height:40px;
	color:#fff
}
.toc-container.tooltip-left .tooltip {
	width:40px;
	height:40px;
	top:0;
	left:0
}
.toc-container.tooltip-left .tooltip-east .tooltip-content {
	min-height:100px;
	text-align:left;
	padding:5px 0 5px 20px;
	right:4.7em;
	min-width:200px;
	width:auto;
	font-size:14px;
	text-shadow:1px 1px 1px #398199;
	bottom:-10px;
	-webkit-transform-origin:100% 100%;
	transform-origin:100% 100%;
	-webkit-transform:translate3d(0,-10px,0) rotate3d(1,1,1,-30deg);
	transform:translate3d(0,-10px,0) rotate3d(1,1,1,-30deg)
}
.toc-container.tooltip-left .tooltip-east .tooltip-content a {
	color:#fff
}
.toc-container.tooltip-left .tooltip-east .tooltip-content:after {
	top:auto;
	bottom:23px
}
.toc-container.tooltip-left .tooltip-east .tooltip-content .toc-article {
	max-height:500px;
	overflow-x:hidden;
	overflow-y:auto
}
.toc-container.tooltip-left .tooltip-east .tooltip-content .toc-article li ol,.toc-container.tooltip-left .tooltip-east .tooltip-content .toc-article li ul {
	margin-left:30px
}
.toc-container.tooltip-left .tooltip-east .tooltip-content .toc-article li {
	white-space:nowrap
}
.toc-container.tooltip-left .tooltip:hover .tooltip-content {
	bottom:-10px;
	-webkit-transform:translate(0);
	transform:translate(0)
}
.tooltip-left .tooltip {
	position:absolute;
	z-index:999;
	cursor:pointer;
	width:28px;
	height:28px;
	top:-10px;
	right:10px
}
.tooltip-left .tooltip:hover a.share-outer {
	background:#24c1f6
}
@-webkit-keyframes pulse {
	0% {
	-webkit-transform:scale3d(.5,.5,1)
}
to {
	-webkit-transform:scaleX(1)
}
}@keyframes pulse {
	0% {
	-webkit-transform:scale3d(.5,.5,1);
	transform:scale3d(.5,.5,1)
}
to {
	-webkit-transform:scaleX(1);
	transform:scaleX(1)
}
}.tooltip-left .tooltip-content {
	position:absolute;
	background:rgba(36,193,246,.9);
	z-index:9999;
	width:200px;
	bottom:50%;
	margin-bottom:-10px;
	border-radius:20px;
	font-size:1.1em;
	text-align:center;
	color:#fff;
	opacity:0;
	cursor:default;
	pointer-events:none;
	-webkit-font-smoothing:antialiased;
	transition:opacity .3s,-webkit-transform .3s;
	transition:opacity .3s,transform .3s;
	transition:opacity .3s,transform .3s,-webkit-transform .3s
}
.tooltip-left .tooltip-west .tooltip-content {
	left:3.5em;
	-webkit-transform-origin:-2em 50%;
	transform-origin:-2em 50%;
	-webkit-transform:translate3d(0,50%,0) rotate3d(1,1,1,30deg);
	transform:translate3d(0,50%,0) rotate3d(1,1,1,30deg)
}
.tooltip-left .tooltip-east .tooltip-content {
	right:3.5em;
	-webkit-transform-origin:calc(100% + 2em) 50%;
	transform-origin:calc(100% + 2em) 50%;
	-webkit-transform:translate3d(0,50%,0) rotate3d(1,1,1,-30deg);
	transform:translate3d(0,50%,0) rotate3d(1,1,1,-30deg)
}
.tooltip-left .tooltip:hover .tooltip-content {
	opacity:1;
	-webkit-transform:translate3d(0,50%,0) rotate3d(0,0,0,0);
	transform:translate3d(0,50%,0) rotate3d(0,0,0,0);
	pointer-events:auto
}
.tooltip-left .tooltip-content:after,.tooltip-left .tooltip-content:before {
	content:"";
	position:absolute
}
.tooltip-left .tooltip-content:before {
	height:100%;
	width:3em
}
.tooltip-left .tooltip-content:after {
	width:2em;
	height:2em;
	top:50%;
	margin:-1em 0 0;
	background:url(./fonts/tooltip.4004ff.svg) no-repeat 50%;
	background-size:100%
}
.tooltip-left .tooltip-west .tooltip-content:after,.tooltip-left .tooltip-west .tooltip-content:before {
	right:99%
}
.tooltip-left .tooltip-east .tooltip-content:after,.tooltip-left .tooltip-east .tooltip-content:before {
	left:99%
}
.tooltip-left .tooltip-east .tooltip-content:after {
	-webkit-transform:scaleX(-1);
	transform:scaleX(-1)
}
.tooltip-top .tooltip {
	display:inline;
	position:relative;
	z-index:999
}
.tooltip-top .tooltip:after {
	content:"";
	position:absolute;
	width:100%;
	height:20px;
	bottom:100%;
	left:50%;
	pointer-events:none;
	-webkit-transform:translateX(-50%);
	transform:translateX(-50%)
}
.tooltip-top .tooltip:hover:after {
	pointer-events:auto
}
.tooltip-top .tooltip-content {
	position:absolute;
	z-index:9999;
	width:370px;
	left:50%;
	bottom:100%;
	font-size:20px;
	line-height:1.4;
	text-align:center;
	font-weight:400;
	color:#4d4d4d;
	background:transparent;
	opacity:0;
	margin:0 0 -10px -185px;
	cursor:default;
	pointer-events:none;
	font-family:Satisfy,cursive;
	-webkit-font-smoothing:antialiased;
	transition:opacity .3s .3s;
	padding-bottom:80px
}
.tooltip-top .tooltip:hover .tooltip-content {
	opacity:1;
	pointer-events:auto;
	transition-delay:0s
}
.tooltip-top .tooltip-content span {
	display:block
}
.tooltip-top .tooltip-text {
	border-bottom:10px solid #4d4d4d;
	overflow:hidden;
	-webkit-transform:scaleX(0);
	transform:scaleX(0);
	transition:-webkit-transform .3s .3s;
	transition:transform .3s .3s;
	transition:transform .3s .3s,-webkit-transform .3s .3s
}
.tooltip-top .tooltip:hover .tooltip-text {
	transition-delay:0s;
	-webkit-transform:scaleX(1);
	transform:scaleX(1)
}
.tooltip-top .tooltip-inner {
	background:rgba(36,193,246,.9);
	padding:40px;
	-webkit-transform:translate3d(0,100%,0);
	transform:translate3d(0,100%,0);
	webkit-transition:-webkit-transform .3s;
	transition:-webkit-transform .3s;
	transition:transform .3s;
	transition:transform .3s,-webkit-transform .3s
}
.tooltip-top .tooltip:hover .tooltip-inner {
	transition-delay:.3s;
	-webkit-transform:translateZ(0);
	transform:translateZ(0)
}
.tooltip-top .tooltip-content:after {
	content:"";
	left:50%;
	border:solid transparent;
	height:0;
	width:0;
	position:absolute;
	pointer-events:none;
	border-color:transparent;
	border-top-color:#4d4d4d;
	border-width:10px;
	margin-left:-10px
}
#footer {
	font-size:12px;
	font-family:Menlo,Monaco,Andale Mono,lucida console,Courier New,monospace;
	text-shadow:0 1px #fff;
	position:absolute;
	bottom:30px;
	opacity:.6;
	width:100%;
	text-align:center
}
#footer .outer {
	padding:0 30px
}
.footer-left {
	float:left
}
.footer-right {
	float:right
}
@media screen and (max-width:800px) {
	#container,body,html {
	height:auto;
	overflow-x:hidden;
	overflow-y:auto
}
#mobile-nav {
	display:block
}
.body-wrap {
	margin-bottom:0
}
.left-col {
	display:none
}
.mid-col {
	left:0
}
#header .header-nav,.mid-col {
	position:relative
}
.wrap-side-operation {
	display:none
}
.cloud-tie-wrapper {
	padding:0;
	min-height:20px
}
.tools-col {
	left:-300px;
	width:300px
}
.tools-col .tools-wrap {
	padding-top:48px
}
.tools-col .tools-section,.tools-col .tools-wrap {
	width:300px
}
.tools-col .tools-section .search-wrap,.tools-col .tools-wrap .search-wrap {
	width:280px
}
.tools-col .tools-section .search-tag.tagcloud,.tools-col .tools-wrap .search-tag.tagcloud {
	margin-right:-30px
}
.tools-col .tools-section .search-ul .search-li,.tools-col .tools-wrap .search-ul .search-li {
	padding:5px 20px
}
.tools-col.show .header-menu.tools-nav {
	display:block
}
#container .header-author.fixed {
	position:fixed;
	top:-29px;
	width:100%;
	color:#ddd
}
.mobile-mask {
	width:100%;
	height:100%;
	position:fixed;
	top:0;
	left:0;
	background:rgba(0,0,0,.85);
	z-index:999
}
.btnctn {
	position:fixed;
	width:50px;
	height:50px;
	top:-5px;
	z-index:4
}
.btnctn .slider-trigger {
	position:absolute;
	z-index:101;
	width:42px;
	height:42px;
	text-align:center;
	line-height:50px
}
.btnctn .slider-trigger.back {
	top:0;
	left:0
}
.btnctn .slider-trigger.list {
	bottom:0;
	left:0
}
.btnctn .slider-trigger:hover {
	background:#444
}
.btnctn .slider-trigger .icon {
	font-size:24px;
	color:#fff
}
.article-header {
	border-left:none;
	padding:0;
	border-bottom:1px dotted #ddd
}
.article-header h1 {
	margin-bottom:10px
}
.article-header .archive-article-date {
	float:none
}
.header-subtitle .icon {
	margin:0 10px;
	color:#d0d0d0
}
.article-info-index.article-info {
	min-height:40px;
	padding-top:10px;
	margin:0;
	border-top:1px solid #ddd
}
.article-info-post.article-info {
	margin:0;
	padding-top:10px;
	border:none
}
#viewer-box .viewer-box-l {
	font-size:14px
}
.article-nav-link-wrap {
	margin:5px 0;
	display:block;
	clear:both
}
.article-nav-link-wrap .icon-circle-right {
	float:left;
	margin:6px 4px 0 0
}
.article {
	padding:10px;
	margin:10px 0;
	border:0;
	font-size:16px;
	color:#555
}
.article .article-more-link {
	margin:0
}
.article .article-entry {
	padding:10px 0 30px
}
.article .article-inner h1.article-title,.article .article-title {
	font-size:18px;
	font-weight:300;
	display:block;
	margin:0
}
.article .article-meta {
	width:auto;
	height:30px;
	margin-top:-5px;
	position:ralative
}
.article .article-meta .article-date {
	font-size:12px;
	border-radius:0;
	color:#666;
	background:none;
	height:auto;
	padding:0;
	margin:0;
	width:100%;
	text-align:left;
	margin-left:10px
}
.article .article-meta .article-date time {
	width:auto;
	float:right;
	margin-right:10px
}
.article .article-meta .article-tag-list {
	margin-top:7px;
	position:absolute;
	right:10px;
	top:0
}
.article .article-meta .article-tag-list:before {
	float:left;
	margin-top:1px;
	left:0
}
.article .article-meta .article-tag-list .article-tag-list-item {
	float:left;
	padding-left:0;
	width:auto;
	max-width:83px
}
.article .article-meta .article-category {
	margin-top:7px;
	position:absolute;
	right:10px;
	top:-30px
}
.article .article-meta .article-category:before {
	float:left;
	margin-top:1px;
	left:15px
}
.article .article-meta .article-category .article-category-link {
	max-width:83px;
	width:auto;
	padding-left:10px
}
.article #article-nav-older {
	float:none;
	display:block
}
.share {
	padding:3px 10px
}
#disqus_thread,.duoshuo {
	padding:0 13px
}
#article-nav {
	margin:0;
	padding:5px 10px 10px
}
#article-nav #article-nav-older {
	float:none
}
#article-nav .article-nav-link-wrap .article-nav-title {
	font-size:16px
}
#page-nav .extend {
	opacity:1
}
.instagram .open-ins {
	left:2px;
	top:-30px;
	color:#aaa
}
.info-on-right {
	float:none
}
.archives-wrap {
	margin:10px 10px 0;
	padding:10px
}
.archives-wrap .archive-article-title {
	font-size:16px
}
.archives-wrap .archive-year-wrap {
	position:relative;
	padding:0
}
.archives-wrap .archive-year-wrap a {
	padding:0
}
.archives-wrap .article-meta .archive-article-date {
	font-size:12px;
	margin-right:10px;
	margin-top:-5px
}
.archives-wrap .article-meta .article-tag-list-link {
	font-size:12px
}
.archives .archive-article {
	padding:10px 0;
	margin-left:0
}
#footer {
	position:relative;
	bottom:0
}
#footer .footer-left {
	float:none;
	margin-bottom:10px
}
#footer .footer-right {
	float:none
}
#mobile-nav .header-author {
	margin:0;
	position:relative;
	z-index:2;
	color:#424242
}
#mobile-nav .overlay {
	height:110px;
	position:absolute;
	width:100%;
	z-index:2;
	background:#4d4d4d
}
#mobile-nav #header {
	padding:10px 0 0
}
#mobile-nav #header .profilepic {
	display:block;
	position:relative;
	z-index:100
}
.header-menu {
	height:auto;
	margin:10px 0 20px
}
.header-menu.tools-nav {
	display:none;
	position:fixed;
	left:0;
	width:100%;
	z-index:9999
}
.header-menu.tools-nav ul {
	margin-right:28px
}
.header-menu.tools-nav li,.header-menu.tools-nav ul {
	border-color:#fff
}
.header-menu.tools-nav li a,.header-menu.tools-nav ul a {
	color:#fff
}
.header-menu.tools-nav li a.active,.header-menu.tools-nav ul a.active {
	background:#81b5cc
}
.header-menu ul {
	text-align:center;
	cursor:default;
	display:-webkit-box;
	display:-ms-flexbox;
	display:flex;
	margin:0 auto;
	-webkit-box-align:center;
	-ms-flex-align:center;
	align-items:center;
	-ms-flex-pack:distribute;
	justify-content:space-around;
	position:relative;
	z-index:1;
	border:1px solid #a0a0a0;
	border-radius:3px
}
.header-menu li {
	border-left:1px solid #a0a0a0
}
.header-menu li:first-child {
	border-left:0
}
.header-menu li:last-child {
	border-right:0
}
.header-menu li a {
	font-size:14px;
	overflow:hidden;
	text-overflow:ellipsis;
	white-space:nowrap;
	display:block;
	color:#a0a0a0
}
.header-menu li a.active {
	color:#eaeaea;
	background:#a0a0a0
}
.profilepic {
	display:block;
	border:5px solid #fff;
	border-radius:300px;
	width:128px;
	height:128px;
	margin:0 auto;
	position:relative;
	overflow:hidden;
	background:#88acdb;
	-webkit-transition:all .2s ease-in;
	display:-webkit-box;
	-webkit-box-orient:horizontal;
	-webkit-box-pack:center;
	-webkit-box-align:center;
	text-align:center
}
.header-author {
	text-align:center;
	margin:.67em 0;
	font-family:Roboto,serif;
	font-size:30px;
	transition:.3s
}
.header-subtitle {
	text-align:center;
	color:#999;
	font-size:14px;
	line-height:25px;
	overflow:hidden;
	text-overflow:ellipsis;
	display:-webkit-box;
	-webkit-line-clamp:2;
	-webkit-box-orient:vertical;
	padding:0 24px
}
}
/*! PhotoSwipe Default UI CSS by Dmitry Semenov | photoswipe.com | MIT license*/
	.pswp__button {
	width:44px;
	height:44px;
	position:relative;
	background:none;
	cursor:pointer;
	overflow:visible;
	-webkit-appearance:none;
	display:block;
	border:0;
	padding:0;
	margin:0;
	float:right;
	opacity:.75;
	transition:opacity .2s;
	box-shadow:none
}
.pswp__button:focus,.pswp__button:hover {
	opacity:1
}
.pswp__button:active {
	outline:none;
	opacity:.9
}
.pswp__button::-moz-focus-inner {
	padding:0;
	border:0
}
.pswp__ui--over-close .pswp__button--close {
	opacity:1
}
.pswp__button,.pswp__button--arrow--left:before,.pswp__button--arrow--right:before {
	background:url(./img/default-skin.png) 0 0 no-repeat;
	background-size:264px 88px;
	width:44px;
	height:44px
}
@media (-webkit-min-device-pixel-ratio:1.1),(-webkit-min-device-pixel-ratio:1.09375),(min-resolution:1.1dppx),(min-resolution:105dpi) {
	.pswp--svg .pswp__button,.pswp--svg .pswp__button--arrow--left:before,.pswp--svg .pswp__button--arrow--right:before {
	background-image:url(./fonts/default-skin.b257fa.svg)
}
.pswp--svg .pswp__button--arrow--left,.pswp--svg .pswp__button--arrow--right {
	background:none
}
}.pswp__button--close {
	background-position:0 -44px
}
.pswp__button--share {
	background-position:-44px -44px
}
.pswp__button--fs {
	display:none
}
.pswp--supports-fs .pswp__button--fs {
	display:block
}
.pswp--fs .pswp__button--fs {
	background-position:-44px 0
}
.pswp__button--zoom {
	display:none;
	background-position:-88px 0
}
.pswp--zoom-allowed .pswp__button--zoom {
	display:block
}
.pswp--zoomed-in .pswp__button--zoom {
	background-position:-132px 0
}
.pswp--touch .pswp__button--arrow--left,.pswp--touch .pswp__button--arrow--right {
	visibility:hidden
}
.pswp__button--arrow--left,.pswp__button--arrow--right {
	background:none;
	top:50%;
	margin-top:-50px;
	width:70px;
	height:100px;
	position:absolute
}
.pswp__button--arrow--left {
	left:0
}
.pswp__button--arrow--right {
	right:0
}
.pswp__button--arrow--left:before,.pswp__button--arrow--right:before {
	content:"";
	top:35px;
	background-color:rgba(0,0,0,.3);
	height:30px;
	width:32px;
	position:absolute
}
.pswp__button--arrow--left:before {
	left:6px;
	background-position:-138px -44px
}
.pswp__button--arrow--right:before {
	right:6px;
	background-position:-94px -44px
}
.pswp__counter,.pswp__share-modal {
	-webkit-user-select:none;
	-moz-user-select:none;
	-ms-user-select:none;
	user-select:none
}
.pswp__share-modal {
	display:block;
	background:rgba(0,0,0,.5);
	width:100%;
	height:100%;
	top:0;
	left:0;
	padding:10px;
	position:absolute;
	z-index:1600;
	opacity:0;
	transition:opacity .25s ease-out;
	-webkit-backface-visibility:hidden;
	will-change:opacity
}
.pswp__share-modal--hidden {
	display:none
}
.pswp__share-tooltip {
	z-index:1620;
	position:absolute;
	background:#fff;
	top:56px;
	border-radius:2px;
	display:block;
	width:auto;
	right:44px;
	box-shadow:0 2px 5px rgba(0,0,0,.25);
	-webkit-transform:translateY(6px);
	transform:translateY(6px);
	transition:-webkit-transform .25s;
	transition:transform .25s;
	transition:transform .25s,-webkit-transform .25s;
	-webkit-backface-visibility:hidden;
	will-change:transform
}
.pswp__share-tooltip a {
	display:block;
	padding:8px 12px;
	font-size:14px;
	line-height:18px
}
.pswp__share-tooltip a,.pswp__share-tooltip a:hover {
	color:#000;
	text-decoration:none
}
.pswp__share-tooltip a:first-child {
	border-radius:2px 2px 0 0
}
.pswp__share-tooltip a:last-child {
	border-radius:0 0 2px 2px
}
.pswp__share-modal--fade-in {
	opacity:1
}
.pswp__share-modal--fade-in .pswp__share-tooltip {
	-webkit-transform:translateY(0);
	transform:translateY(0)
}
.pswp--touch .pswp__share-tooltip a {
	padding:16px 12px
}
a.pswp__share--facebook:before {
	content:"";
	display:block;
	width:0;
	height:0;
	position:absolute;
	top:-12px;
	right:15px;
	border:6px solid transparent;
	border-bottom-color:#fff;
	-webkit-pointer-events:none;
	-moz-pointer-events:none;
	pointer-events:none
}
a.pswp__share--facebook:hover {
	background:#3e5c9a;
	color:#fff
}
a.pswp__share--facebook:hover:before {
	border-bottom-color:#3e5c9a
}
a.pswp__share--twitter:hover {
	background:#55acee;
	color:#fff
}
a.pswp__share--pinterest:hover {
	background:#ccc;
	color:#ce272d
}
a.pswp__share--download:hover {
	background:#ddd
}
.pswp__counter {
	position:absolute;
	left:0;
	top:0;
	height:44px;
	font-size:13px;
	line-height:44px;
	color:#fff;
	opacity:.75;
	padding:0 10px
}
.pswp__caption {
	position:absolute;
	left:0;
	bottom:0;
	width:100%;
	min-height:44px
}
.pswp__caption small {
	font-size:11px;
	color:#bbb
}
.pswp__caption__center {
	text-align:left;
	max-width:420px;
	margin:0 auto;
	font-size:13px;
	padding:10px;
	line-height:20px;
	color:#ccc
}
.pswp__caption--empty {
	display:none
}
.pswp__caption--fake {
	visibility:hidden
}
.pswp__preloader {
	width:44px;
	height:44px;
	position:absolute;
	top:0;
	left:50%;
	margin-left:-22px;
	opacity:0;
	transition:opacity .25s ease-out;
	will-change:opacity;
	direction:ltr
}
.pswp__preloader__icn {
	width:20px;
	height:20px;
	margin:12px
}
.pswp__preloader--active {
	opacity:1
}
.pswp__preloader--active .pswp__preloader__icn {
	background:url(./img/preloader.gif) 0 0 no-repeat
}
.pswp--css_animation .pswp__preloader--active {
	opacity:1
}
.pswp--css_animation .pswp__preloader--active .pswp__preloader__icn {
	-webkit-animation:clockwise .5s linear infinite;
	animation:clockwise .5s linear infinite
}
.pswp--css_animation .pswp__preloader--active .pswp__preloader__donut {
	-webkit-animation:donut-rotate 1s cubic-bezier(.4,0,.22,1) infinite;
	animation:donut-rotate 1s cubic-bezier(.4,0,.22,1) infinite
}
.pswp--css_animation .pswp__preloader__icn {
	background:none;
	opacity:.75;
	width:14px;
	height:14px;
	position:absolute;
	left:15px;
	top:15px;
	margin:0
}
.pswp--css_animation .pswp__preloader__cut {
	position:relative;
	width:7px;
	height:14px;
	overflow:hidden
}
.pswp--css_animation .pswp__preloader__donut {
	box-sizing:border-box;
	width:14px;
	height:14px;
	border:2px solid #fff;
	border-radius:50%;
	border-left-color:transparent;
	border-bottom-color:transparent;
	position:absolute;
	top:0;
	left:0;
	background:none;
	margin:0
}
@media screen and (max-width:1024px) {
	.pswp__preloader {
	position:relative;
	left:auto;
	top:auto;
	margin:0;
	float:right
}
}@-webkit-keyframes clockwise {
	0% {
	-webkit-transform:rotate(0deg);
	transform:rotate(0deg)
}
to {
	-webkit-transform:rotate(1turn);
	transform:rotate(1turn)
}
}@keyframes clockwise {
	0% {
	-webkit-transform:rotate(0deg);
	transform:rotate(0deg)
}
to {
	-webkit-transform:rotate(1turn);
	transform:rotate(1turn)
}
}@-webkit-keyframes donut-rotate {
	0% {
	-webkit-transform:rotate(0);
	transform:rotate(0)
}
50% {
	-webkit-transform:rotate(-140deg);
	transform:rotate(-140deg)
}
to {
	-webkit-transform:rotate(0);
	transform:rotate(0)
}
}@keyframes donut-rotate {
	0% {
	-webkit-transform:rotate(0);
	transform:rotate(0)
}
50% {
	-webkit-transform:rotate(-140deg);
	transform:rotate(-140deg)
}
to {
	-webkit-transform:rotate(0);
	transform:rotate(0)
}
}.pswp__ui {
	-webkit-font-smoothing:auto;
	visibility:visible;
	opacity:1;
	z-index:1550
}
.pswp__top-bar {
	position:absolute;
	left:0;
	top:0;
	height:44px;
	width:100%
}
.pswp--has_mouse .pswp__button--arrow--left,.pswp--has_mouse .pswp__button--arrow--right,.pswp__caption,.pswp__top-bar {
	-webkit-backface-visibility:hidden;
	will-change:opacity;
	transition:opacity 333ms cubic-bezier(.4,0,.22,1)
}
.pswp--has_mouse .pswp__button--arrow--left,.pswp--has_mouse .pswp__button--arrow--right {
	visibility:visible
}
.pswp__caption,.pswp__top-bar {
	background-color:rgba(0,0,0,.5)
}
.pswp__ui--fit .pswp__caption,.pswp__ui--fit .pswp__top-bar {
	background-color:rgba(0,0,0,.3)
}
.pswp__ui--idle .pswp__button--arrow--left,.pswp__ui--idle .pswp__button--arrow--right,.pswp__ui--idle .pswp__top-bar {
	opacity:0
}
.pswp__ui--hidden .pswp__button--arrow--left,.pswp__ui--hidden .pswp__button--arrow--right,.pswp__ui--hidden .pswp__caption,.pswp__ui--hidden .pswp__top-bar {
	opacity:.001
}
.pswp__ui--one-slide .pswp__button--arrow--left,.pswp__ui--one-slide .pswp__button--arrow--right,.pswp__ui--one-slide .pswp__counter {
	display:none
}
.pswp__element--disabled {
	display:none!important
}
.pswp--minimal--dark .pswp__top-bar {
	background:none
}
/*! PhotoSwipe main CSS by Dmitry Semenov | photoswipe.com | MIT license*/
	.pswp {
	display:none;
	position:absolute;
	width:100%;
	height:100%;
	left:0;
	top:0;
	overflow:hidden;
	-ms-touch-action:none;
	touch-action:none;
	z-index:1500;
	-webkit-text-size-adjust:100%;
	-webkit-backface-visibility:hidden;
	outline:none
}
.pswp * {
	box-sizing:border-box
}
.pswp img {
	max-width:none
}
.pswp--animate_opacity {
	opacity:.001;
	will-change:opacity;
	transition:opacity 333ms cubic-bezier(.4,0,.22,1)
}
.pswp--open {
	display:block
}
.pswp--zoom-allowed .pswp__img {
	cursor:zoom-in
}
.pswp--zoomed-in .pswp__img {
	cursor:-webkit-grab;
	cursor:grab
}
.pswp--dragging .pswp__img {
	cursor:-webkit-grabbing;
	cursor:grabbing
}
.pswp__bg {
	background:#000;
	opacity:0;
	-webkit-transform:translateZ(0);
	transform:translateZ(0);
	-webkit-backface-visibility:hidden
}
.pswp__bg,.pswp__scroll-wrap {
	position:absolute;
	left:0;
	top:0;
	width:100%;
	height:100%
}
.pswp__scroll-wrap {
	overflow:hidden
}
.pswp__container,.pswp__zoom-wrap {
	-ms-touch-action:none;
	touch-action:none;
	position:absolute;
	left:0;
	right:0;
	top:0;
	bottom:0
}
.pswp__container,.pswp__img {
	-webkit-user-select:none;
	-moz-user-select:none;
	-ms-user-select:none;
	user-select:none;
	-webkit-tap-highlight-color:transparent;
	-webkit-touch-callout:none
}
.pswp__zoom-wrap {
	position:absolute;
	width:100%;
	-webkit-transform-origin:left top;
	transform-origin:left top;
	transition:-webkit-transform 333ms cubic-bezier(.4,0,.22,1);
	transition:transform 333ms cubic-bezier(.4,0,.22,1);
	transition:transform 333ms cubic-bezier(.4,0,.22,1),-webkit-transform 333ms cubic-bezier(.4,0,.22,1)
}
.pswp__bg {
	will-change:opacity;
	transition:opacity 333ms cubic-bezier(.4,0,.22,1)
}
.pswp--animated-in .pswp__bg,.pswp--animated-in .pswp__zoom-wrap {
	transition:none
}
.pswp__container,.pswp__zoom-wrap {
	-webkit-backface-visibility:hidden
}
.pswp__item {
	right:0;
	bottom:0;
	overflow:hidden
}
.pswp__img,.pswp__item {
	position:absolute;
	left:0;
	top:0
}
.pswp__img {
	width:auto;
	height:auto
}
.pswp__img--placeholder {
	-webkit-backface-visibility:hidden
}
.pswp__img--placeholder--blank {
	background:#222
}
.pswp--ie .pswp__img {
	width:100%!important;
	height:auto!important;
	left:0;
	top:0
}
.pswp__error-msg {
	position:absolute;
	left:0;
	top:50%;
	width:100%;
	text-align:center;
	font-size:14px;
	line-height:16px;
	margin-top:-8px;
	color:#ccc
}
.pswp__error-msg a {
	color:#ccc;
	text-decoration:underline
}