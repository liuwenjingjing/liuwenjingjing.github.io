
//回到顶部 jq
$(function(){
        $(".totop").click(function(){
            $("body,html").animate({"scrollTop":0},1500)
//            alert("123");
        });
    $(".totop").hide();
        $(window).scroll(function(){
            if($(window).scrollTop>300){
             $(".totop").fadeIn(1500);   
            }else{
               $(".totop").hide(1000); 
            };
            
        });
    });

//header-top滑动消失
//var search=document.querySelector(".navbar-default");
//window.onscroll=function(){
//    if(search !=null){
//            search.style.top="0";
//        }else{
//            search.style.top="auto";
//        }
//}
var search=document.querySelector(".navbar-default");
window.onscroll=function(){
    if(search !=null){
        if(document.body.scrollTop>115 || document.documentElement.scrollTop>115){
            search.style.top="0";
        }else{
            search.style.top="auto";
        }
    }
}


//banner img上边的阴影
var imgtop=document.querySelector(".index .img-top");
var img=document.querySelector(".index .col-md-8 img"); 
console.log(img)
var imgheight=img.clientHeight+"px";
//var imgwidth=img.clientWidth+"px";
imgtop.style.height=imgheight;
//imgtop.style.height=imgwidth;