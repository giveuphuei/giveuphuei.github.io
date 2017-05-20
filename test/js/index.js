var whScale = 430/644 ;
var Window_wd = $(window).width()
var navleft1 = parseFloat((Window_wd/ 1288 * 700 - 190)*0.12 - 20)
window.onload = function(){			
	reView()

	$(".selfResume,.title1").click(navTitle1)

	$(".workShare,.title2").click(navTitle2)

	$(".lifeNote,.title3").click(navTitle3)

	$(".contactMe,.title4").click(navTitle4)
		
}
function reView(){
		//alert(Window_wd)
	$("#mainBody,.mainNav").width(Window_wd)
	$("#mainBody").height(Window_wd * whScale)
	$("#name").width(Window_wd / 1288 *120)
	$("#name").height(Window_wd / 1288 *120)
	$("#words").width((Window_wd / 1288 * 470))
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
	$(".selfResume li:first-child").css({'background-positionY': '-1%'})
	$(".workShare li:first-child").css('background-positionY', '92%')
	$(".lifeNote li:first-child").css('background-positionY', '92%')
	$(".contactMe li:first-child").css('background-positionY', '92%')
	$(".selfResume li:last-child").css("color","orange")
	$(".workShare li:last-child,.lifeNote li:last-child,.contactMe li:last-child").css("color","black")
	$(".tran").css({
		'left':'11%',
		'top':'60px'
	})
}

function navTitle2(){
	$(".selfResume li:first-child").css({'background-positionY': '92%'})
	$(".workShare li:first-child").css('background-positionY', '-1%')
	$(".lifeNote li:first-child").css('background-positionY', '92%')
	$(".contactMe li:first-child").css('background-positionY', '92%')
	$(".workShare li:last-child").css("color","orange")
	$(".selfResume li:last-child,.lifeNote li:last-child,.contactMe li:last-child").css("color","black")

	$(".tran").css({
		'left':'36%',
		'top':'60px'
	})
}

function navTitle3(){
	$(".selfResume li:first-child").css({'background-positionY': '92%'})
	$(".workShare li:first-child").css('background-positionY', '92%')
	$(".lifeNote li:first-child").css('background-positionY', '-1%')
	$(".contactMe li:first-child").css('background-positionY', '92%')
	$(".lifeNote li:last-child").css("color","orange")
	$(".selfResume li:last-child,.workShare li:last-child,.contactMe li:last-child").css("color","black")

	$(".tran").css({
		'left':'61%',
		'top':'60px'
	})
}

function navTitle4(){
	$(".selfResume li:first-child").css({'background-positionY': '92%'})
	$(".workShare li:first-child").css('background-positionY', '92%')
	$(".lifeNote li:first-child").css('background-positionY', '92%')
	$(".contactMe li:first-child").css('background-positionY', '-1%')
	$(".contactMe li:last-child").css("color","orange")
	$(".selfResume li:last-child,.workShare li:last-child,.lifeNote li:last-child").css("color","black")

	$(".tran").css({
		'left':'86%',
		'top':'60px'
	})}