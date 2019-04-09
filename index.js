var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
showDivs(slideIndex += n);
}

function showDivs(n) {
var i;
var x = document.getElementsByClassName("mySlides");
if (n > x.length) {slideIndex = 1}    
if (n < 1) {slideIndex = x.length} ;
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
}
x[slideIndex-1].style.display = "block";  
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
  x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000);
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
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className +=" active";
    })
}
