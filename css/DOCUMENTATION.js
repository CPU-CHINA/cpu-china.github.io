@charset "utf-8";
/* CSS Document */

#loading{
	width:50vw;
	height:100vh;
	overflow:hidden;
	top:0;
	left:0;
	padding-left: 28vw;
	padding-top:13vw;
	float:left;
	margin-bottom:10vw;
	z-index: 999;
	background-color:black;
	position: fixed

}

html,body{
	font-size:10px;
	overflow-x:hidden
}

@media(max-width:600px){
	#loading_bg{width:100vw}
	#loading{width:100vw}
	body{width:100vw;}
	#top{width:100vw}
	#nav{width:100vw}
	#float{width:100vw}
	#aaa{width:100vw}
	#bbb{width:100vw}
	#ccc{width:100vw}
	#foot{width:100vw}
	}
@media(max-width:700px){
	#loading_bg{width:100vw}
	#loading{width:100vw}
	body{width:100vw;}
	#top{width:100vw}
	#nav{width:100vw}
	#float{width:100vw}
	#aaa{width:100vw}
	#bbb{width:100vw}
	#ccc{width:100vw}
	#foot{width:100vw}
}
@media(max-width:800px){
	#loading_bg{width:100vw}
	#loading{width:100vw}
	body{width:100vw;}
	#top{width:100vw}
	#nav{width:100vw}
	#float{width:100vw}
	#aaa{width:100vw}
	#bbb{width:100vw}
	#ccc{width:100vw}
	#foot{width:100vw}
}
@media(max-width:960px){
	#loading_bg{width:100vw}
	#loading{width:100vw}
	body{width:100vw;}
	#top{width:100vw}
	#nav{width:100vw}
	#float{width:100vw}
	#aaa{width:100vw}
	#bbb{width:100vw}
	#ccc{width:100vw}
	#foot{width:100vw}
}
@media(max-width:1100px){
	#loading_bg{width:100vw}
	#loading{width:100vw}
	body{width:100vw;}
	#top{width:100vw}
	#nav{width:100vw}
	#float{width:100vw}
	#aaa{width:100vw}
	#bbb{width:100vw}
	#ccc{width:100vw}
	#foot{width:100vw}
}
@media(max-width:1200px){
	#loading_bg{width:100vw}
	#loading{width:100vw}
	body{width:100vw;}
	#top{width:100vw}
	#nav{width:100vw}
	#float{width:100vw}
	#aaa{width:100vw}
	#bbb{width:100vw}
	#ccc{width:100vw}
	#foot{width:100vw}
}
@media(max-width:1300px){
	#loading_bg{width:100vw}
	#loading{width:100vw}
	body{width:100vw;}
	#top{width:100vw}
	#nav{width:100vw}
	#float{width:100vw}
	#aaa{width:100vw}
	#bbb{width:100vw}
	#ccc{width:100vw}
	#foot{width:100vw}
}
@media(max-width:1400px){
	#loading_bg{width:100vw}
	#loading{width:100vw}
	body{width:100vw;}
	#top{width:100vw}
	#nav{width:100vw}
	#float{width:100vw}
	#aaa{width:100vw}
	#bbb{width:100vw}
	#ccc{width:100vw}
	#foot{width:100vw}
}
@media(max-width:1500px){
	#loading_bg{width:100vw}
	#loading{width:100vw}
	body{width:100vw;}
	#top{width:100vw}
	#nav{width:100vw}
	#float{width:100vw}
	#aaa{width:100vw}
	#bbb{width:100vw}
	#ccc{width:100vw}
	#foot{width:100vw}
}
@media(max-width:1600px){
	#loading_bg{width:100vw}
	#loading{width:100vw}
	body{width:100vw;}
	#top{width:100vw}
	#nav{width:100vw}
	#float{width:100vw}
	#aaa{width:100vw}
	#bbb{width:100vw}
	#ccc{width:100vw}
	#foot{width:100vw}
}
main{
	width:min(70ch,100% - 4rem);
	margin-inline:auto;
}
h1{
	font-size: 4rem;
}
h2{
	font-size: 3rem;
}
h3{
	font-size: 2rem;
}
p{
	font-size:1.2vw;
	font-family:Segoe, "Segoe UI", "DejaVu Sans", "Trebuchet MS", Verdana, "sans-serif";
	word-break: normal;
}
a{
	text-decoration:none;
}

/*回到顶部按钮*/
#top{
	
}
#myBtn {
			position: fixed;
			bottom: 8vw;
			right: 6vw;
			z-index: 9;
			border: none;
			cursor: pointer;
			inline-height:0;
			font-size:0;
			width:7.5rem;
			height:7.5rem;
			background-color:rgba(0,0,0,0.00);
			background-image: url("../images/组件 1 – 4.png");
			opacity: 0.6;
			background-repeat: no-repeat;
			}
#myBtn:hover {
	filter:drop-shadow(4px 4px 4px rgba(12,0,0,0.2));
	opacity: 1
}
/*顶部导航栏*/
#nav{
	position: fixed;
	width:100%;
	height:4.5vw;
	float:left;
	background-color:#083643;
	top:0;
	left:0;
	right:0
	
}
/*侧边导航栏*/
#float{
	height:20vw;
	position: fixed;
	margin-top:10vw;
	margin-left: 3vw;
	font-size: 1vw;
	font-weight: normal
	
}
/*各个栅格*/
#aaa{
	width:59%;
	height:345rem;
	float:left;
	margin-left:15vw;
	margin-top:10vw;
	padding-top:10vw;
	padding-left:5vw;
	padding-right:5vw;
	background-color: #FEF5F5;
	border-radius: 5vw;
	box-shadow: 10px 7px 10px 1px #DCD7D7;
	
}
#bbb{
	width:59%;
	height:230rem;
	float:left;
	margin-left:15vw;
	margin-top:5vw;
	padding-top:10vw;
	padding-left:5vw;
	padding-right:5vw;
	background-color: #FEF5F5;
	border-radius: 5vw;
	box-shadow: 10px 7px 10px 1px #DCD7D7 ;
}
#ccc{
	width:59%;
	height:120rem;
	float:left;
	margin-left:15vw;
	margin-top:5vw;
	padding-top:10vw;
	padding-left:5vw;
	padding-right:5vw;
	background-color: #FEF5F5;
	border-radius: 5vw;
	box-shadow: 10px 7px 10px 1px #DCD7D7 ;
}
#foot{
	width:100%;
	height:12vw;
	background-color:#083643;
	margin-top:5vw;
	float:left;
	
}
/*顶部导航栏*/
.function:link,.function:visited {
			display:inline-block;
		    width:15vw;
			font-family: Bronova;
			font-weight:bold;
			font-size: 1.2vw;
			color: rgba(184,236,215,1);
			background-color:rgba(8,54,67,1);
			text-align:center;
			padding:1rem;
			text-decoration:none;
			text-transform:uppercase;
			border:2px solid rgba(255,255,255,0);
			border-radius: 1rem
		}
		.function:hover,.function:active {
			text-decoration: underline;
			border-radius: 1rem;
			filter: drop-shadow(4px 4px 4px rgba(255,255,255,0.80));
			}

.items {
    width:100%;
	margin-left: 10vw;
	height: 5vw;
	float: left
}

.menu{
    width: 15vw;
    height: 4vw;
    background: rgba(8,54,67,1);
    line-height: 3.5vw;
    text-align: center;
    position:fixed;
	top:0;
    overflow:hidden;
	z-index: 99;
	float: left;
	margin-left:20vw;
	border-radius: 1rem
	
}
.menu:hover{
    overflow:visible;
	width:15vw;
    color: rgba(8,54,67,1);
    z-index:99;
    cursor:pointer;
}
.menu1{
    width: 20vw;
    height: 4vw;
    background: rgba(8,54,67,1);
    line-height: 3.5vw;
    text-align: center;
    position:fixed;
	top:0;
    overflow:hidden;
	font-family: Bronova;
	font-weight: Bold;
	font-size: 1.4vw;
	z-index: 99;
	float: left;
	margin-left:36vw;
	border-radius: 1vw
	
}
.menu1:hover{
    overflow:visible;
	width:20vw;
    color: rgba(8,54,67,1);
    z-index:99;
    cursor:pointer;
}
.menu2{
    width: 20vw;
    height: 4vw;
    background: rgba(8,54,67,1);
    line-height: 3.5vw;
    text-align: center;
    position:fixed;
	top:0;
    overflow:hidden;
	font-family: Bronova;
	font-weight: Bold;
	font-size: 1.4vw;
	z-index: 99;
	float: left;
	margin-left:52vw;
	border-radius: 1vw
	
}
.menu2:hover{
    overflow:visible;
	width:20vw;
    color: rgba(8,54,67,1);
    z-index:99;
    cursor:pointer;
}
.menu3{
    width: 20vw;
    height: 4vw;
    background: rgba(8,54,67,1);
    line-height: 3.5vw;
    text-align: center;
    position:fixed;
	top:0;
    overflow:hidden;
	font-family: Bronova;
	font-weight: Bold;
	font-size: 1.4vw;
	z-index: 99;
	float: left;
	margin-left:68vw;
	border-radius: 1vw
	
}
.menu3:hover{
    overflow:visible;
	width:20vw;
    color: rgba(8,54,67,1);
    z-index:99;
    cursor:pointer;
}
.drop{
    filter:drop-shadow(2px 2px 2px rgba(255,255,255,0.80));
	text-shadow: -1px 1px 0 #FFF, 1px 1px 0 #FFF,1px -1px 0 #FFF,-1px -1px 0 #FFF;
    text-align: center;
    width: 15vw;
    height: 2.5vw;
    line-height: 2.9vw;
    overflow: hidden;
	font-weight:normal;
	margin-left:2.2vw;
	font-weight:bold;
	font-size:1vw;
	color:rgba(8,54,67,1);
	border:2px solid rgba(255,255,255,0);
}
.drop a{
	color:#476C5E
}
.drop:active,.drop:hover{
    background: rgba(184,236,215,1);
	filter: drop-shadow(4px 4px 4px rgba(184,236,215,0.80));
    cursor: pointer;
	border: 2px solid #0E5468;
	border-radius: 1.6vw;
	color:#53831F
}
/*复制代码*/
button{
	border:2px solid rgba(255,255,255,0);
	background-color:#FEF5F5;
	height:2.1vw;
}
button:hover{
	border:2px solid rgba(255,255,255,0);
	height:2.1vw;
	
}
textarea{
	font-family:"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", Verdana, "sans-serif";
	width:50vw;
	font-size:1vw;
	margin-left:1vw;
	height:3vw;
	padding-left:1vw;
	padding-top:1vw;
	padding-bottom:1vw;
	border:2px solid rgba(255,255,255,0);
	border-radius: 0.8vw;
	resize: none;
	user-select: none;
	color: #707070	
	}
.pichange{
	width:2vw;
	height:2vw;
	overflow: hidden;
	border:2px solid rgba(255,255,255,0);
}
.pichange img{
	border:2px solid rgba(255,255,255,0);
	padding-left:0;
	padding-top: 5px;
	height:20px;
	width:20px;
}
.pichange:hover img:last-child{
	display: block;
	border:2px solid rgba(255,255,255,0);
	cursor: pointer
}
.pichange:hover img:first-child{
	display: none;
	border:2px solid rgba(255,255,255,0);
	cursor: pointer
}
.pichange img:last-child{
	display: none;
	border:2px solid rgba(255,255,255,0);			
}
.website{
	text-decoration: none;
	color:#476C5E
}
.website:hover{
	text-decoration: underline;
	color:#9FA939
}
.website:visited{
	color:#9FA939
}
@charset "utf-8";
/* CSS Document */

#loading{
	width:50vw;
	height:100vh;
	overflow:hidden;
	top:0;
	left:0;
	padding-left: 28vw;
	padding-top:13vw;
	float:left;
	margin-bottom:10vw;
	z-index: 999;
	background-color:black;
	position: fixed

}

html,body{
	font-size:10px;
	overflow-x:hidden
}

@media(max-width:600px){
	#loading_bg{width:100vw}
	#loading{width:100vw}
	body{width:100vw;}
	#top{width:100vw}
	#nav{width:100vw}
	#float{width:100vw}
	#aaa{width:100vw}
	#bbb{width:100vw}
	#ccc{width:100vw}
	#foot{width:100vw}
	}
@media(max-width:700px){
	#loading_bg{width:100vw}
	#loading{width:100vw}
	body{width:100vw;}
	#top{width:100vw}
	#nav{width:100vw}
	#float{width:100vw}
	#aaa{width:100vw}
	#bbb{width:100vw}
	#ccc{width:100vw}
	#foot{width:100vw}
}
@media(max-width:800px){
	#loading_bg{width:100vw}
	#loading{width:100vw}
	body{width:100vw;}
	#top{width:100vw}
	#nav{width:100vw}
	#float{width:100vw}
	#aaa{width:100vw}
	#bbb{width:100vw}
	#ccc{width:100vw}
	#foot{width:100vw}
}
@media(max-width:960px){
	#loading_bg{width:100vw}
	#loading{width:100vw}
	body{width:100vw;}
	#top{width:100vw}
	#nav{width:100vw}
	#float{width:100vw}
	#aaa{width:100vw}
	#bbb{width:100vw}
	#ccc{width:100vw}
	#foot{width:100vw}
}
@media(max-width:1100px){
	#loading_bg{width:100vw}
	#loading{width:100vw}
	body{width:100vw;}
	#top{width:100vw}
	#nav{width:100vw}
	#float{width:100vw}
	#aaa{width:100vw}
	#bbb{width:100vw}
	#ccc{width:100vw}
	#foot{width:100vw}
}
@media(max-width:1200px){
	#loading_bg{width:100vw}
	#loading{width:100vw}
	body{width:100vw;}
	#top{width:100vw}
	#nav{width:100vw}
	#float{width:100vw}
	#aaa{width:100vw}
	#bbb{width:100vw}
	#ccc{width:100vw}
	#foot{width:100vw}
}
@media(max-width:1300px){
	#loading_bg{width:100vw}
	#loading{width:100vw}
	body{width:100vw;}
	#top{width:100vw}
	#nav{width:100vw}
	#float{width:100vw}
	#aaa{width:100vw}
	#bbb{width:100vw}
	#ccc{width:100vw}
	#foot{width:100vw}
}
@media(max-width:1400px){
	#loading_bg{width:100vw}
	#loading{width:100vw}
	body{width:100vw;}
	#top{width:100vw}
	#nav{width:100vw}
	#float{width:100vw}
	#aaa{width:100vw}
	#bbb{width:100vw}
	#ccc{width:100vw}
	#foot{width:100vw}
}
@media(max-width:1500px){
	#loading_bg{width:100vw}
	#loading{width:100vw}
	body{width:100vw;}
	#top{width:100vw}
	#nav{width:100vw}
	#float{width:100vw}
	#aaa{width:100vw}
	#bbb{width:100vw}
	#ccc{width:100vw}
	#foot{width:100vw}
}
@media(max-width:1600px){
	#loading_bg{width:100vw}
	#loading{width:100vw}
	body{width:100vw;}
	#top{width:100vw}
	#nav{width:100vw}
	#float{width:100vw}
	#aaa{width:100vw}
	#bbb{width:100vw}
	#ccc{width:100vw}
	#foot{width:100vw}
}
main{
	width:min(70ch,100% - 4rem);
	margin-inline:auto;
}
h1{
	font-size: 4rem;
}
h2{
	font-size: 3rem;
}
h3{
	font-size: 2rem;
}
p{
	font-size:1.2vw;
	font-family:Segoe, "Segoe UI", "DejaVu Sans", "Trebuchet MS", Verdana, "sans-serif";
	word-break: normal;
}
a{
	text-decoration:none;
}

/*回到顶部按钮*/
#top{
	
}
#myBtn {
			position: fixed;
			bottom: 8vw;
			right: 6vw;
			z-index: 9;
			border: none;
			cursor: pointer;
			inline-height:0;
			font-size:0;
			width:7.5rem;
			height:7.5rem;
			background-color:rgba(0,0,0,0.00);
			background-image: url("../images/组件 1 – 4.png");
			opacity: 0.6;
			background-repeat: no-repeat;
			}
#myBtn:hover {
	filter:drop-shadow(4px 4px 4px rgba(12,0,0,0.2));
	opacity: 1
}
/*顶部导航栏*/
#nav{
	position: fixed;
	width:100%;
	height:4.5vw;
	float:left;
	background-color:#083643;
	top:0;
	left:0;
	right:0
	
}
/*侧边导航栏*/
#float{
	height:20vw;
	position: fixed;
	margin-top:10vw;
	margin-left: 3vw;
	font-size: 1vw;
	font-weight: normal
	
}
/*各个栅格*/
#aaa{
	width:59%;
	height:345rem;
	float:left;
	margin-left:15vw;
	margin-top:10vw;
	padding-top:10vw;
	padding-left:5vw;
	padding-right:5vw;
	background-color: #FEF5F5;
	border-radius: 5vw;
	box-shadow: 10px 7px 10px 1px #DCD7D7;
	
}
#bbb{
	width:59%;
	height:230rem;
	float:left;
	margin-left:15vw;
	margin-top:5vw;
	padding-top:10vw;
	padding-left:5vw;
	padding-right:5vw;
	background-color: #FEF5F5;
	border-radius: 5vw;
	box-shadow: 10px 7px 10px 1px #DCD7D7 ;
}
#ccc{
	width:59%;
	height:120rem;
	float:left;
	margin-left:15vw;
	margin-top:5vw;
	padding-top:10vw;
	padding-left:5vw;
	padding-right:5vw;
	background-color: #FEF5F5;
	border-radius: 5vw;
	box-shadow: 10px 7px 10px 1px #DCD7D7 ;
}
#foot{
	width:100%;
	height:12vw;
	background-color:#083643;
	margin-top:5vw;
	float:left;
	
}
/*顶部导航栏*/
.function:link,.function:visited {
			display:inline-block;
		    width:15vw;
			font-family: Bronova;
			font-weight:bold;
			font-size: 1.2vw;
			color: rgba(184,236,215,1);
			background-color:rgba(8,54,67,1);
			text-align:center;
			padding:1rem;
			text-decoration:none;
			text-transform:uppercase;
			border:2px solid rgba(255,255,255,0);
			border-radius: 1rem
		}
		.function:hover,.function:active {
			text-decoration: underline;
			border-radius: 1rem;
			filter: drop-shadow(4px 4px 4px rgba(255,255,255,0.80));
			}

.items {
    width:100%;
	margin-left: 10vw;
	height: 5vw;
	float: left
}

.menu{
    width: 15vw;
    height: 4vw;
    background: rgba(8,54,67,1);
    line-height: 3.5vw;
    text-align: center;
    position:fixed;
	top:0;
    overflow:hidden;
	z-index: 99;
	float: left;
	margin-left:20vw;
	border-radius: 1rem
	
}
.menu:hover{
    overflow:visible;
	width:15vw;
    color: rgba(8,54,67,1);
    z-index:99;
    cursor:pointer;
}
.menu1{
    width: 20vw;
    height: 4vw;
    background: rgba(8,54,67,1);
    line-height: 3.5vw;
    text-align: center;
    position:fixed;
	top:0;
    overflow:hidden;
	font-family: Bronova;
	font-weight: Bold;
	font-size: 1.4vw;
	z-index: 99;
	float: left;
	margin-left:36vw;
	border-radius: 1vw
	
}
.menu1:hover{
    overflow:visible;
	width:20vw;
    color: rgba(8,54,67,1);
    z-index:99;
    cursor:pointer;
}
.menu2{
    width: 20vw;
    height: 4vw;
    background: rgba(8,54,67,1);
    line-height: 3.5vw;
    text-align: center;
    position:fixed;
	top:0;
    overflow:hidden;
	font-family: Bronova;
	font-weight: Bold;
	font-size: 1.4vw;
	z-index: 99;
	float: left;
	margin-left:52vw;
	border-radius: 1vw
	
}
.menu2:hover{
    overflow:visible;
	width:20vw;
    color: rgba(8,54,67,1);
    z-index:99;
    cursor:pointer;
}
.menu3{
    width: 20vw;
    height: 4vw;
    background: rgba(8,54,67,1);
    line-height: 3.5vw;
    text-align: center;
    position:fixed;
	top:0;
    overflow:hidden;
	font-family: Bronova;
	font-weight: Bold;
	font-size: 1.4vw;
	z-index: 99;
	float: left;
	margin-left:68vw;
	border-radius: 1vw
	
}
.menu3:hover{
    overflow:visible;
	width:20vw;
    color: rgba(8,54,67,1);
    z-index:99;
    cursor:pointer;
}
.drop{
    filter:drop-shadow(2px 2px 2px rgba(255,255,255,0.80));
	text-shadow: -1px 1px 0 #FFF, 1px 1px 0 #FFF,1px -1px 0 #FFF,-1px -1px 0 #FFF;
    text-align: center;
    width: 15vw;
    height: 2.5vw;
    line-height: 2.9vw;
    overflow: hidden;
	font-weight:normal;
	margin-left:2.2vw;
	font-weight:bold;
	font-size:1vw;
	color:rgba(8,54,67,1);
	border:2px solid rgba(255,255,255,0);
}
.drop a{
	color:#476C5E
}
.drop:active,.drop:hover{
    background: rgba(184,236,215,1);
	filter: drop-shadow(4px 4px 4px rgba(184,236,215,0.80));
    cursor: pointer;
	border: 2px solid #0E5468;
	border-radius: 1.6vw;
	color:#53831F
}
/*复制代码*/
button{
	border:2px solid rgba(255,255,255,0);
	background-color:#FEF5F5;
	height:2.1vw;
}
button:hover{
	border:2px solid rgba(255,255,255,0);
	height:2.1vw;
	
}
textarea{
	font-family:"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", Verdana, "sans-serif";
	width:50vw;
	font-size:1vw;
	margin-left:1vw;
	height:3vw;
	padding-left:1vw;
	padding-top:1vw;
	padding-bottom:1vw;
	border:2px solid rgba(255,255,255,0);
	border-radius: 0.8vw;
	resize: none;
	user-select: none;
	color: #707070	
	}
.pichange{
	width:2vw;
	height:2vw;
	overflow: hidden;
	border:2px solid rgba(255,255,255,0);
}
.pichange img{
	border:2px solid rgba(255,255,255,0);
	padding-left:0;
	padding-top: 5px;
	height:20px;
	width:20px;
}
.pichange:hover img:last-child{
	display: block;
	border:2px solid rgba(255,255,255,0);
	cursor: pointer
}
.pichange:hover img:first-child{
	display: none;
	border:2px solid rgba(255,255,255,0);
	cursor: pointer
}
.pichange img:last-child{
	display: none;
	border:2px solid rgba(255,255,255,0);			
}
.website{
	text-decoration: none;
	color:#476C5E
}
.website:hover{
	text-decoration: underline;
	color:#9FA939
}
.website:visited{
	color:#9FA939
}
