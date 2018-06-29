//回到顶部 jq
$(function(){
        $(".totop").click(function(){
            $("body,html").animate({"scrollTop":0},1500)
//            alert("123");
        });
    $(".totop").hide();
        $(window).scroll(function(){
            if($(window).scrollTop()>300){
             $(".totop").fadeIn(1500);   
            }else{
               $(".totop").hide(1000); 
            };
            
        });
    });


