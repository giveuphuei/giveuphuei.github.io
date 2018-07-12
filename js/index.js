var whScale = 410/640 ;
var Window_wd = $(window).width()
var navleft1 = parseInt((Window_wd/ 1280 * 700 )*0.125 - 24)
window.onload = function(){			
	reView()
	$(window).scroll(function () {
		if ($(window).scrollTop() < 700 ) {
			$(".backTop a").css('display',"none")
		}
		else{
			$(".backTop a").css('display',"block")
		}
	});
	$("#name").click(backHome)

	$(".selfResume,.title1").click(0,navTitle)

	$(".workShare,.title2").click(1,navTitle)

	$(".lifeNote,.title3").click(2,navTitle)

	$(".contactMe,.title4").click(3,navTitle)
	$(".life table div").mouseover(titleLager)
	$(".life table div").mouseout(titleReset)

}
function reView(){
	$("#mainBody,.mainNav,.mainTitle").width(Window_wd)
	if($("#mainBody").height() != 170){
		$("#mainBody").height(Window_wd * whScale)
	}
	$("#name").width(Window_wd / 1280 *120)
	$("#name").height(Window_wd / 1280 *120)
	$("#words").width((Window_wd / 1280 * 470))
	$(".resume,.work,.contact").css({
		'margin':"0 auto",
		'width':Window_wd
	})
	$(".life,.life>div").css({
		'margin':"0 auto",
		'width':Window_wd
	})
	$(".life table div").css({
		'width':Window_wd * 0.2,
		'height':Window_wd * 0.2 / 16 * 9,
	})
    $("#demos").width( $(window).width()*0.9) 
     $("#ifram").width( $("#demos").width() - 280)
	if(Window_wd/ 1280 * 600 > 480 ){
		$(".nav table").width(Window_wd/ 1280 * 700)
		$(".nav table").css({
			'position':" absolute",
			'top':"25px",
			'right': "12%"
		})
		$(".selfResume li:first-child").css('background-positionX', navleft1)
		$(".workShare li:first-child").css({
			'background-positionX': navleft1 - 176 ,
		})
		$(".lifeNote li:first-child").css({
			'background-positionX': navleft1 - 357 ,

		})
		$(".contactMe li:first-child").css({
			'background-positionX': navleft1 - 536 ,
		})
	}
	else{
		if($("#mainBody").height() != 170){
			$("#mainBody").height('845')
		}
		$("#mainBody,.mainNav,.mainTitle").width('1280')
		$("#name").width('120')
		$("#name").height('120')
		$("#words").width('470')
		$(".resume,.work,.life,.life>div,.contact").css({
			'width':'1280'
		})
		$(".life table div").css({
		'width':1280 * 0.2 ,
		'height':1280 * 0.2 / 16 * 9,
		})

		$("#demos").width('1100') ;
	    $("#ifram").width('800')
		$(".nav table").css({
			'width':"700",
			'right':"180"
		})
		$(".selfResume li:first-child").css('background-positionX', 63.5)
		$(".workShare li:first-child").css({
			'background-positionX': -112.5 ,
		})
		$(".lifeNote li:first-child").css({
			'background-positionX': -293.5 ,
		})
		$(".contactMe li:first-child").css({
			'background-positionX': -472.5,
		})
	}			
}
/*窗口改变时重置视图位置*/
$(window).resize(function(){
	Window_wd = $(this).width();
	navleft1 = parseInt((Window_wd/ 1280 * 700 )*0.125 - 24)

	reView()
})

function backHome(){
	$("#mainBody").height('845')
	reView()
	$("#mainBody").addClass('mainBody')
	$("#words").css('display','block')
	for(var i=1;i<5;i++){
		var s = 'title' + i 
		if(i == 1){
		$("#"+s).css('display','block')			
		}
		else{
			$("#"+s).css('display','none')
		}
	}
	for(var i = 0; i<4;i++){
		if(i == 0){
			$("."+navT[i]+' li:first-child').css('background-positionY','15px')
			$("."+navT[i]+' li:last-child').css("color","orange")
		}
		else{
			$("."+navT[i]).children().eq(0).css('background-positionY', '-65px')
			$("."+navT[i]+' li:last-child').css("color","black")
		}
	}
	$(".tran").css({
		'left':'11%' ,
		'top':'60px'
	})
}

/*导航标题切换*/
var navT = ['selfResume','workShare','lifeNote','contactMe']
function navTitle(e){
	for(var i = 0; i<4;i++){
		if(i == e.data){
			$("."+navT[i]+' li:first-child').css('background-positionY','15px')
			$("."+navT[i]+' li:last-child').css("color","orange")
		}
		else{
			$("."+navT[i]).children().eq(0).css('background-positionY', '-65px')
			$("."+navT[i]+' li:last-child').css("color","black")
		}
		
	}
	var navL = parseFloat(11 +  e.data * 25 )
	$(".tran").css({
		'left':navL+'%' ,
		'top':'60px'
	})
	$("#mainBody").css({
		'height':'170px',
	})
	$("#words").css('display','none')
	for(var i=1;i<5;i++){
		var s = 'title' + i ;
		if(i != (e.data+1)){	
			$("#"+s).css('display','none')
		}
		else{
			$("#"+s).css('display','block')
		}
	}
}

/*鼠标移入移出时文章标题框变化*/
function titleLager(){
	$(this).css({
		'background':'gray'

	})
	$(this).find('p').css({
		'font-size':'26px'
	})
}
function titleReset(){
	$(this).css({
		'background':'rgb(185, 183, 187)'

	})
	$(this).find('p').css({
		'font-size':'20px'
	})
}