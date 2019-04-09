// 이미지 슬라이드

 var pos = 0;
//number of slides
var totalSlides = $('#slider-wrap ul li').length;
//get the slide width
var sliderWidth = $('#slider-wrap').width();


$(document).ready(function(){
	
	
	/*****************
	 BUILD THE SLIDER
	*****************/
	//set width to be 'x' times the number of slides
	$('#slider-wrap ul#slider').width(sliderWidth*totalSlides);
	
    //next slide 	
	$('#next').click(function(){
		slideRight();
	});
	
	//previous slide
	$('#previous').click(function(){
		slideLeft();
	});
	
	
	
	/*************************
	 //*> OPTIONAL SETTINGS
	************************/
	//automatic slider
	var autoSlider = setInterval(slideRight, 3000);
	
	//for each slide 
	$.each($('#slider-wrap ul li'), function() { 

	   //create a pagination
	   var li = document.createElement('li');
	   $('#pagination-wrap ul').append(li);	   
	});
	
	//counter
	countSlides();
	
	//pagination
	pagination();
	
	//hide/show controls/btns when hover
	//pause automatic slide when hover
	$('#slider-wrap').hover(
	  function(){ $(this).addClass('active'); clearInterval(autoSlider); }, 
	  function(){ $(this).removeClass('active'); autoSlider = setInterval(slideRight, 3000); }
	);
	
	

});//DOCUMENT READY
	


/***********
 SLIDE LEFT
************/
function slideLeft(){
	pos--;
	if(pos==-1){ pos = totalSlides-1; }
	$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 	
	
	//*> optional
	countSlides();
	pagination();
}


/************
 SLIDE RIGHT
*************/
function slideRight(){
	pos++;
	if(pos==totalSlides){ pos = 0; }
	$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 
	
	//*> optional 
	countSlides();
	pagination();
}



	
/************************
 //*> OPTIONAL SETTINGS
************************/
function countSlides(){
	$('#counter').html(pos+1 + ' / ' + totalSlides);
}

function pagination(){
	$('#pagination-wrap ul li').removeClass('active');
	$('#pagination-wrap ul li:eq('+pos+')').addClass('active');
}

// 유튜브 //Magnific Popup 라이브러리
$('.popup-youtube').magnificPopup({type:'iframe'});
$.extend(true, $.magnificPopup.defaults, {  
    iframe: {
        patterns: {
            youtube: {
                index: 'youtube.com/', 
                id: 'v=', 
                src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
            }
        }
    }
});

// 필터 셀렉터
filterSelection("all");
function filterSelection(c){
    var x,i;
    x = document.getElementsByClassName("single-portfolio");
    if(c=="all")c = "";
    for(i = 0; i<x.length; i++){
        removeClass(x[i],"show");
        if(x[i].className.indexOf(c)>-1)addClass(x[i],"show");
    }
}

function addClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for(i = 0; i<arr2.length; i++){
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
}

function removeClass(element, name){
    var i,arr1,arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for(i = 0; i< arr2.length; i++){
        while(arr1.indexOf(arr2[i])>-1){
            arr1.splice(arr1.indexOf(arr2[i]),1);
        }
    }
    element.className = arr1.join(" ");
}


var navs = document.getElementsByClassName("navli");

for(var i = 0; i<navs.length; i++){
  
    navs[i].addEventListener("click",function(){
     
      var current = document.getElementsByClassName("select");
      current[0].className = current[0].className.replace(" select", "");
      this.className += " select";
    })
}
