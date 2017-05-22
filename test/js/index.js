var whScale = 410/640 ;
var Window_wd = $(window).width()
var navleft1 = parseInt((Window_wd/ 1280 * 700 )*0.125 - 24)
window.onload = function(){			
	reView()
	//alert($(".nav table td") .width() / 2 - 20)
	//alert(navleft1)
	//$(window).scroll = function(){
           // alert("KOJ")
                    //变量t就是滚动条滚动时，到顶部的距离
         //  var ttdis =  $(".mainTitle").offset().top;
         //  var t =document.documentElement.scrollTop||document.body.scrollTop;
         //   if( ttdis < 170){
            //    $(".backTop a").css('display',"block")
               /* $(".nav table").css({
                    'position':"fixed",
                    'top':"25px",
                    'right': "12%"
                })*/
        //   }
     	 $(window).scroll(function () {
		if ($(window).scrollTop() < 700 ) {
			$(".backTop a").css('display',"none")
		}
		else{
			$(".backTop a").css('display',"block")
		}
	});
	$("#name").click(backHome)

	$(".selfResume,.title1").click(navTitle1)

	$(".workShare,.title2").click(navTitle2)

	$(".lifeNote,.title3").click(navTitle3)

	$(".contactMe,.title4").click(navTitle4)

}
function reView(){
		//alert(Window_wd)
	$("#mainBody,.mainNav,.mainTitle").width(Window_wd)
	$("#mainBody").height(Window_wd * whScale)
	$("#name").width(Window_wd / 1280 *120)
	$("#name").height(Window_wd / 1280 *120)
	$("#words").width((Window_wd / 1280 * 470))
	$(".resume").css({
		'margin':"0 auto",
		'width':Window_wd * 0.9
	})
	
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
		$("#mainBody,.mainNav,.mainTitle").width('1280')
		$("#mainBody").height('845')
		$("#name").width('120')
		$("#name").height('120')
		$("#words").width('470')
		$(".resume").css({
			'margin-left':"64", 
			'width':1280 * 0.9
		})
		$(".nav table").css({
			'width':"700",
			'right':"180"
		})
		$(".selfResume li:first-child").css('background-positionX', 63.5)
		$(".workShare li:first-child").css({
			'background-positionX': -112.5 ,
			'background-positionY': '-65px'
		})
		$(".lifeNote li:first-child").css({
			'background-positionX': -293.5 ,
			'background-positionY': '-65px'
		})
		$(".contactMe li:first-child").css({
			'background-positionX': -472.5,
			'background-positionY': '-65px'
		})
	}			
}
/*窗口改变时重置视图位置*/
$(window).resize(function(){
	Window_wd = $(this).width();
	navleft1 = parseInt((Window_wd/ 1280 * 700 )*0.125 - 24)

	reView();
})

function backHome(){
	reView()
	$("#mainBody").addClass('mainBody')
	$("#words").css('display','block')
}
/*标题1 _selfresume*/
function navTitle1(){
	$(".selfResume li:first-child").css({'background-positionY': '15px'})
	$(".workShare li:first-child").css('background-positionY', '-65px')
	$(".lifeNote li:first-child").css('background-positionY', '-65px')
	$(".contactMe li:first-child").css('background-positionY', '-65px')
	$(".selfResume li:last-child").css("color","orange")
	$(".workShare li:last-child,.lifeNote li:last-child,.contactMe li:last-child").css("color","black")
	$(".tran").css({
		'left':'11%',
		'top':'60px'
	})
	$("#mainBody").css({
		'height':'170px',
	})
	$("#words").css('display','none')
}
/*标题2 _workshare*/
function navTitle2(){
	$(".selfResume li:first-child").css({'background-positionY': '-65px'})
	$(".workShare li:first-child").css('background-positionY', '15px')
	$(".lifeNote li:first-child").css('background-positionY', '-65px')
	$(".contactMe li:first-child").css('background-positionY', '-65px')
	$(".workShare li:last-child").css("color","orange")
	$(".selfResume li:last-child,.lifeNote li:last-child,.contactMe li:last-child").css("color","black")

	$(".tran").css({
		'left':'36.5%',
		'top':'60px'
	})
}
/*标题3 _lifenote*/
function navTitle3(){
	$(".selfResume li:first-child").css({'background-positionY': '-65px'})
	$(".workShare li:first-child").css('background-positionY', '-65px')
	$(".lifeNote li:first-child").css('background-positionY', '15px')
	$(".contactMe li:first-child").css('background-positionY', '-65px')
	$(".lifeNote li:last-child").css("color","orange")
	$(".selfResume li:last-child,.workShare li:last-child,.contactMe li:last-child").css("color","black")

	$(".tran").css({
		'left':'61.5%',
		'top':'60px'
	})
}
/*标题4 _contactMe*/
function navTitle4(){
	$(".selfResume li:first-child").css({'background-positionY': '-65px'})
	$(".workShare li:first-child").css('background-positionY', '-65px')
	$(".lifeNote li:first-child").css('background-positionY', '-65px')
	$(".contactMe li:first-child").css('background-positionY', '15px')
	$(".contactMe li:last-child").css("color","orange")
	$(".selfResume li:last-child,.workShare li:last-child,.lifeNote li:last-child").css("color","black")

	$(".tran").css({
		'left':'86.5%',
		'top':'60px'
	})
}