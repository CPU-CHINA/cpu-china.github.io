@charset "utf-8";
/* CSS Document */

html{
	font-size:10px
}
a{
	text-decoration: none
}
ul{
	list-style-type:none;
	overflow:hidden;
}
li{
	float:left;
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
	font-size:1.8rem;
	font-family:Segoe, "Segoe UI", "DejaVu Sans", "Trebuchet MS", Verdana, "sans-serif";
	word-break: normal;
}
/*侧边导航栏*/
#float{
	height:20vw;
	position: fixed;
	margin-top:10vw;
	margin-left: 3vw;
	font-size: 1.5vw;
	font-weight: normal;
	z-index: 999
	
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
#aaa{
	width:60%;
	height:65rem;
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
	width:70%;
	height:30rem;
	float:left;
	
	
	padding-left:5vw;
	padding-right:5vw;
	min-height: 50vh;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left:5vw
	

}
#ccc{
	width:70%;
	height:60rem;
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
	font-family:Bronova;
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
	font-weight: bold;
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
.pichange{
	
	overflow: hidden;
	border:2px solid rgba(255,255,255,0);
	height:4.5vw;
	width:4.5vw
	
}
.pichange img{
	border:2px solid rgba(255,255,255,0);
	padding-left:0;
	padding-top: 5px;
	
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
}
.website:hover{
	text-decoration: underline;
}
.website:visited{
	color:#9FA939
}
.name1{
			
			font-weight:bold;
			width:20vw;
			height: 20vw;
			padding-bottom: 1vw;
			margin-top:30vw;
	padding-top:2vw;
			color:rgba(57,187,159,1.00);
			margin-left: 3.5vw;
	font-size: 1.2vw;
	
			
			
		}
		.name1:hover{
			text-decoration: underline;
		}
		.name{
			
			font-weight:bold;
			width:20vw;
			height: 6vw;
			padding-bottom: 1vw;
			
			color:rgba(57,187,159,1.00);
			margin-left: 3vw;
	font-size: 1.2vw
			
		}
		.name:hover{
			text-decoration: underline;
			color: rgba(57,187,159,1.00)
		}
		
		.text{
			padding-left:428px;
			padding-top:3px;
			width:43%;
			word-break:keep-all;
			color:rgba(112,112,112,1);
			
			
		}
		.text2{
			padding-left:470px;
			padding-top:20px;
			width:20%;
			word-break: break-all
		
		}

.container{
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}
.box{
	width:23vw;
	margin:1.6vw;
	text-align: center;
	position: relative;
	transform-style: preserve-3d;
	perspective: 3000px
}
.box .front{
	background-color: #fff;
	width:100%;
	height:20vw;
	display:flex;
	flex-direction: column;
	justify-content: center;
	box-shadow: 0 5px 20px rgba(0,0,0,0.1);
	transition: 0.5s ease;
}
.box .front .icon{
	height:15vw;
}
.box .front .icon i{
	font-size: 6.5vw;
	font-weight: 900;
}
.box .front span{
	font-size: 1.2vw;
	font-weight: 600;
	text-transform:uppercase;
	background:linear-gradient(220deg,#20dbb0,#007adf);
	-webkit-background-clip:text;
	-webkit-text-fill-color:transparent;
}
.box .back span{
	font-size: 0.8vw
}
.box .back{
	position: absolute;
	top:0;
	left: 0;
	z-index: -1;
	width: 100%;
	height: 18vw;
	background:linear-gradient(220deg,#20dbb0,#007adf);
	margin:0vw;
	color: #fff;
	opacity: 0;
	transform: translateY(110px) rotateX(-90deg);
	transition: 0.5s ease;
}
.box .back p{
	margin-top: 1vw;
	text-align: justify;
	line-height: 1.2vw;
	padding:1.2vw
}
.box:hover .front{
	opacity: 0;
	transform: translateY(-110px) rotateX(90deg)
}
.box:hover .back{
	opacity: 1;
	transform: translateY(0) rotateX(0)
}
