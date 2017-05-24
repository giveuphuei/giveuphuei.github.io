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

	$(".selfResume,.title1").click(0,navTitle)

	$(".workShare,.title2").click(1,navTitle)

	$(".lifeNote,.title3").click(2,navTitle)

	$(".contactMe,.title4").click(3,navTitle)

}
function reView(){
		//alert(Window_wd)
	$("#mainBody,.mainNav,.mainTitle").width(Window_wd)
	if($("#mainBody").height() != 170){
		$("#mainBody").height(Window_wd * whScale)
	}
	$("#name").width(Window_wd / 1280 *120)
	$("#name").height(Window_wd / 1280 *120)
	$("#words").width((Window_wd / 1280 * 470))
	$(".resume,.work,.life,.contact").css({
		'margin':"0 auto",
		'width':Window_wd * 0.9
	})
    $("#demos").width( $(window).width()*0.9) 
     $("#ifram").width( $("#demos").width() - 300)
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
		$(".resume,.work,.life,.contact").css({
			'margin-left':"64", 
			'width':1280 * 0.9
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
/*标题2 _workshare
function navTitle2(){
	for(var i = 0; i<4;i++){
		if(i == 1){
			$("."+navT[i]+' li:first-child').css('background-positionY','15px')
			$("."+navT[i]+' li:last-child').css("color","orange")
		}
		else{
			$("."+navT[i]+' li:first-child').css('background-positionY', '-65px')
			$("."+navT[i]+' li:last-child').css("color","black")
		}		
	}

	$(".tran").css({
		'left':'36.5%',
		'top':'60px'
	})
	$("#mainBody").css({
		'height':'170px',
	})
	$("#words").css('display','none')
	for(var i=1;i<5;i++){
		var s = 'title' + i ;
		if(i != 2){	
			$("#"+s).css('display','none')
		}
		else{
			$("#"+s).css('display','block')
		}
	}
	/*$(".selfResume li:first-child").css({'background-positionY': '-65px'})
	$(".workShare li:first-child").css('background-positionY', '15px')
	$(".lifeNote li:first-child").css('background-positionY', '-65px')
	$(".contactMe li:first-child").css('background-positionY', '-65px')
	$(".workShare li:last-child").css("color","orange")
	$(".selfResume li:last-child,.lifeNote li:last-child,.contactMe li:last-child").css("color","black")

	$(".tran").css({
		'left':'36.5%',
		'top':'60px'
	})

	$("#mainBody").css({
		'height':'170px',
	})
	$("#words").css('display','none')
	for(i=1;i<5;i++){
		var s = 'title' + i ;
		if(i != 2){
			$("#"+s).css('display','none')
		}
		else{
			$("#"+s).css('display','block')
		}
	}
}*/
/*标题3 _lifenote
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

	$("#mainBody").css({
		'height':'170px',
	})
	$("#words").css('display','none')
	for(i=1;i<5;i++){
		var s = 'title' + i ;
		if(i != 3){
			$("#"+s).css('display','none')
		}
		else{
			$("#"+s).css('display','block')
		}
	}
}*/
/*标题4 _contactMe
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

	$("#mainBody").css({
		'height':'170px',
	})
	$("#words").css('display','none')
	for(i=1;i<5;i++){
		var s = 'title' + i ;
		if(i != 4){
			$("#"+s).css('display','none')
		}
		else{
			$("#"+s).css('display','block')
		}
	}
}*/
