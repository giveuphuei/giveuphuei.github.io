var whScale = 430/644 ;
var Window_wd = $(window).width()
var navleft1 = parseFloat((Window_wd/ 1288 * 700 - 190)*0.12 - 20)
window.onload = function(){			
	reView()

	$(".selfResume,.title1").click(navTitle1)

	$(".workShare,.title2").click(navTitle2)

	$(".lifeNote,.title3").click(function(){
		$(".selfResume").css("background-position","41 -86")
		$(".workShare").css("background-position","-145 -86")
		$(".lifeNote").css("background-position","-334 -2")
		$(".contactMe").css("background-position","-520 -86")
		$(".title3").css("color","orange")
		$(".title1,.title2,.title4").css("color","black")
	})

	$(".contactMe,.title4").click(function(){
		$(".selfResume").css("background-position","41 -86")
		$(".workShare").css("background-position","-145 -86")
		$(".lifeNote").css("background-position","-334 -86")
		$(".contactMe").css("background-position","-520 -2")
		$(".title4").css("color","orange")
		$(".title1,.title2,.title3").css("color","black")
	})
}
function reView(){
		//alert(Window_wd)
	$("#mainBody,.mainNav").width(Window_wd)
	$("#mainBody").height(Window_wd * whScale)
	$("#name").width(Window_wd / 1288 *120)
	$("#name").height(Window_wd / 1288 *120)
	if(Window_wd/ 1288 * 600 > 480 ){
		$(".nav table").width(Window_wd/ 1288 * 700)	
		$(".selfResume li:first-child").css('background-positionX', navleft1)
		$(".workShare li:first-child").css({
			'background-positionX': navleft1 - 185 ,
			'background-positionY': '92%'
		})
		$(".lifeNote li:first-child").css({
			'background-positionX': navleft1 - 375 ,
			'background-positionY': '92%'
		})
		$(".contactMe li:first-child").css({
			'background-positionX': navleft1 - 565 ,
			'background-positionY': '92%'
		})
	}
	else{
		$("#mainBody,.mainNav").width('1288')
		$("#mainBody").height('860')
		$("#name").width('120')
		$("#name").height('120')
		$(".nav table").css({
			'width':"700",
			'right':"13%"
		})
	}			
}
$(window).resize(function(){
	Window_wd = $(this).width();
	navleft1 = parseFloat((Window_wd/ 1288 * 700 - 190)*0.12 - 20)
	reView();
})

function navTitle1(){
	alert("ok")
	$(".selfResume").css("background-position","41 -2")
	$(".workShare").css("background-position","-145 -86")
	$(".lifeNote").css("background-position","-334 -86")
	$(".contactMe").css("background-position","-520 -86")
	$(".title1").css("color","orange")
	$(".title2,.title3,.title4").css("color","black")
	$(".tran").css({
		'left':'11%',
		'top':'60px'
	})
}

function navTitle2(){
	$(".selfResume").css("background-position","41 -86")
	$(".workShare").css("background-position","-145 -2")
	$(".lifeNote").css("background-position","-334 -86")
	$(".contactMe").css("background-position","-520 -86")
	$(".title2").css("color","orange")
	$(".title1,.title3,.title4").css("color","black")
	$(".tran").css({
		'left':'36%',
		'top':'60px'
	})
}