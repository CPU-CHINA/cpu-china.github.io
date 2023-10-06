@charset "utf-8";
/* CSS Document */
html{
	font-size:10px
}
a{
	text-decoration: none
}
@media(max-width:600px){
	body{width:100vw;}
	#nav{width:100vw}
	#aaa{width:100vw}
	#bbb{width:100vw}
	#ccc{width:100vw}
	}
@media(max-width:700px){
	body{width:100vw;}
	#nav{width:100vw}
	#aaa{width:100vw}
	#bbb{width:100vw}
	#ccc{width:100vw}
}
@media(max-width:800px){
	body{width:100vw;}
	#nav{width:100vw}
	#aaa{width:100vw}
	#bbb{width:100vw}
	#ccc{width:100vw}
}
@media(max-width:960px){
	body{width:100vw;}
	#nav{width:100vw}
	#aaa{width:100vw}
	#bbb{width:100vw}
	#ccc{width:100vw}
}
@media(max-width:1100px){
	body{width:100vw;}
	#nav{width:100vw}
	#aaa{width:100vw}
	#bbb{width:100vw}
	#ccc{width:100vw}
}
@media(max-width:1200px){
	body{width:100vw;}
	#nav{width:100vw}
	#aaa{width:100vw}
	#bbb{width:100vw}
	#ccc{width:100vw}
}
@media(max-width:1300px){
	body{width:100vw;}
	#nav{width:100vw}
	#aaa{width:100vw}
	#bbb{width:100vw}
	#ccc{width:100vw}
}
@media(max-width:1400px){
	body{width:100vw;}
	#nav{width:100vw}
	#aaa{width:100vw}
	#bbb{width:100vw}
	#ccc{width:100vw}
}
@media(max-width:1500px){
	body{width:100vw;}
	#nav{width:100vw}
	#aaa{width:100vw}
	#bbb{width:100vw}
	#ccc{width:100vw}
}
@media(max-width:1600px){
	body{width:100vw;}
	#nav{width:100vw}
	#aaa{width:100vw}
	#bbb{width:100vw}
	#ccc{width:100vw}
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
/*侧边导航栏*/
#float{
	height:20vw;
	position: fixed;
	margin-top:10vw;
	margin-left: 3vw;
	font-size: 1vw;
	font-weight: normal
	
}
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
#myBtn {
			position: fixed;
			bottom: 8vw;
			right: 6vw;
			z-index: 99;
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
#aaa{
	width:60%;
	height:110rem;
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
	width:60%;
	height:155rem;
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
	width:60%;
	height:100rem;
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
/*导航栏*/
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
    z-index:999;
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
    z-index:999;
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
    z-index:999;
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
    z-index:999;
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
.website{
	text-decoration: none;
}
.website:hover{
	text-decoration: underline;
}
.website:visited{
	color:#9FA939
}
