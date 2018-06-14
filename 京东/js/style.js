//点击消失
var ad=document.querySelector("#ad");
var adl=document.querySelector("#btn");
if(ad!=null){
    if(sessionStorage.ad=="floes"){
        ad.style.display="none";
    }else{
        ad.style.display="block";
    }
}
if(ad!=null){
    adl.onclick=function(){
        ad.style.display="none";
        sessionStorage.ad="floes"
    }
}




//search部分滚动变色
var search=document.querySelector(".search");
window.onscroll=function(){
    if(search !=null){
        if(document.body.scrollTop>115 || document.documentElement.scrollTop>115){
            search.style.top="0";
            document.querySelector(".search").style.background="#884c60";
        }else{
            search.style.top="auto";
            document.querySelector(".search").style.background="transparent";
        }
    }
}



//banner部分轮播

var mySwiper = new Swiper ('.banner', {
    loop: true,
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    }
  })        






//京东快报

//方法一
0.
//setInterval(function(){
//    x();
//    setTimeout(function(){
//        e();
//        h();
//    },3000);
//},3500);

//方法二
setInterval(function(){
    x();
    
},3000);


setInterval(function(){
        e();
        h();
},3500);


//向上偏移16像素
function x(){
    $(".news .center .text").css({"transform":"translateY(-16px)","transition":"1s"});
};

//归零
function e(){
    $(".news .center .text").css({"transform":"translateY(0)","transition":"0s"});
};


//把第一个移动到末尾
function h(){
    $(".news .center .text").eq(0).appendTo($(".news .center"));
};







//首页京东秒杀部分的效果（倒计时）

var zxx = {
    $: function(id){
        return document.getElementById(id);
    },
    futureDate: Date.UTC(2018, 7, 1, 8),
    obj: function(){
        return {
            sec: zxx.$("sec"),
            mini: zxx.$("mini"),
            hour: zxx.$("hour"),
            day: zxx.$("day"),
            month: zxx.$("month"),
            year: zxx.$("year")
        }
    }
};
fnTimeCountDown(zxx.futureDate, zxx.obj());



//html调用方式
//<span id="hour">00</span> 




//京东直播
var swiper = new Swiper('.jingdongzhibo', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });



//为你推荐
new Vue ({
    el:"#app",
    data:{
        arrs:[
            {name:"【京东超市】e洁 自动收口垃圾袋加厚手提式 45c",img:"images/weinituijian/1.jpg",price1:"21.08",price2:"19.00",ico:"ziying",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            {name:"安昕 良选男士船袜5双装 中筒棉袜商务男袜子吸汗透气短袜 船",img:"images/weinituijian/2.jpg",price1:"38.00",price2:"19.00",ico:"ziying",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            {name:"苹果原装数据线iPhone7 Plus // 6P / 5SE / iPadpro手机USB线",img:"images/weinituijian/3.jpg",price1:"155.00",price2:"19.00",ico:"ziying",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            {name:"真皮多卡位零钱包女士卡夹信用卡头层牛皮驾驶证皮套风琴",img:"images/weinituijian/4.jpg",price1:"59.00",price2:"19.00",ico:"quanqiugou",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"}
        ]
    }
})






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
//回到顶部 js
//var totop=document.querySelector(".totop");
//totop.addEventListener("click",function(){
//    var t=setInterval(function(){
//        document.body.scrollTop=document.body.scrollTop-20;
//        document.documentElement.scrollTop=document.documentElement.scrollTop-20;
//        
//        if(document.body.scrollTop===0){
//            clearInterval(t);
//        };
//    });
//});
//window.onscroll=function(){
//    var totop=document.querySelector(".totop");
//    if(document.body.scrollTop>370){
//        totop.style.display="inline-block";
//    }else{
//        totop.style.display="none";
//    }
//}



new Vue ({
    el:"#sortright",
    data:{
        sortt:[
            {name:"热门分类",img:"images/sort/shoujishuma/img.jpg",img1:"images/sort/shoujishuma/xiaomi.png",img2:"images/sort/shoujishuma/huawei.jpg",img3:"images/sort/shoujishuma/rongyao.jpg",img4:"images/sort/shoujishuma/iPhone.jpg",img5:"images/sort/shoujishuma/oppo.png",img6:"images/sort/shoujishuma/vivo.png",img7:"images/sort/shoujishuma/sanxing.png",img8:"images/sort/shoujishuma/yijia.jpg",img9:"images/sort/shoujishuma/360.jpg",img10:"images/sort/shoujishuma/chunzi.jpg",link:"http//www.baidu.com",p1:"小米",p2:"华为",p3:"荣耀",p4:"iPhone",p5:"oppo",p6:"vivo",p7:"三星",p8:"一加",p9:"360",p10:"锤子"},
            {name:"手机数码",img:"images/sort/shoujishuma/img1.jpg",img10:"images/sort/shoujishuma/xiaomi.png",img9:"images/sort/shoujishuma/huawei.jpg",img8:"images/sort/shoujishuma/rongyao.jpg",img7:"images/sort/shoujishuma/iPhone.jpg",img6:"images/sort/shoujishuma/oppo.png",img5:"images/sort/shoujishuma/vivo.png",img4:"images/sort/shoujishuma/sanxing.png",img3:"images/sort/shoujishuma/yijia.jpg",img2:"images/sort/shoujishuma/360.jpg",img1:"images/sort/shoujishuma/chunzi.jpg",link:"http//www.baidu.com",p1:"锤子",p9:"华为",p8:"荣耀",p7:"iPhone",p6:"oppo",p5:"vivo",p4:"三星",p3:"一加",p2:"360",p10:"小米"},
            {name:"家用电器",img:"images/sort/shoujishuma/img.jpg",img5:"images/sort/shoujishuma/xiaomi.png",img6:"images/sort/shoujishuma/huawei.jpg",img7:"images/sort/shoujishuma/rongyao.jpg",img8:"images/sort/shoujishuma/iPhone.jpg",img9:"images/sort/shoujishuma/oppo.png",img10:"images/sort/shoujishuma/vivo.png",img4:"images/sort/shoujishuma/sanxing.png",img3:"images/sort/shoujishuma/yijia.jpg",img2:"images/sort/shoujishuma/360.jpg",img1:"images/sort/shoujishuma/chunzi.jpg",link:"http//www.baidu.com",p5:"小米",p6:"华为",p7:"荣耀",p8:"iPhone",p9:"oppo",p10:"vivo",p1:"三星",p4:"一加",p3:"360",p2:"锤子"},
            {name:"电脑办公",img:"images/sort/shoujishuma/img1.jpg",img10:"images/sort/shoujishuma/xiaomi.png",img1:"images/sort/shoujishuma/huawei.jpg",img9:"images/sort/shoujishuma/rongyao.jpg",img2:"images/sort/shoujishuma/iPhone.jpg",img8:"images/sort/shoujishuma/oppo.png",img3:"images/sort/shoujishuma/vivo.png",img7:"images/sort/shoujishuma/sanxing.png",img4:"images/sort/shoujishuma/yijia.jpg",img6:"images/sort/shoujishuma/360.jpg",img5:"images/sort/shoujishuma/chunzi.jpg",link:"http//www.baidu.com",p10:"小米",p1:"华为",p9:"荣耀",p2:"iPhone",p8:"oppo",p3:"vivo",p7:"三星",p4:"一加",p6:"360",p5:"锤子"},
            {name:"计生情趣",img:"images/sort/shoujishuma/img.jpg",img10:"images/sort/shoujishuma/xiaomi.png",img8:"images/sort/shoujishuma/huawei.jpg",img6:"images/sort/shoujishuma/rongyao.jpg",img4:"images/sort/shoujishuma/iPhone.jpg",img2:"images/sort/shoujishuma/oppo.png",img9:"images/sort/shoujishuma/vivo.png",img7:"images/sort/shoujishuma/sanxing.png",img5:"images/sort/shoujishuma/yijia.jpg",img3:"images/sort/shoujishuma/360.jpg",img1:"images/sort/shoujishuma/chunzi.jpg",link:"http//www.baidu.com",p10:"小米",p8:"华为",p6:"荣耀",p4:"iPhone",p2:"oppo",p9:"vivo",p7:"三星",p5:"一加",p3:"360",p1:"锤子"},
            {name:"美妆护肤",img1:"images/sort/shoujishuma/xiaomi.png",img2:"images/sort/shoujishuma/huawei.jpg",img3:"images/sort/shoujishuma/rongyao.jpg",img4:"images/sort/shoujishuma/iPhone.jpg",img5:"images/sort/shoujishuma/oppo.png",img6:"images/sort/shoujishuma/vivo.png",img7:"images/sort/shoujishuma/sanxing.png",img8:"images/sort/shoujishuma/yijia.jpg",img9:"images/sort/shoujishuma/360.jpg",img10:"images/sort/shoujishuma/chunzi.jpg",link:"http//www.baidu.com",p1:"小米",p2:"华为",p3:"荣耀",p4:"iPhone",p5:"oppo",p6:"vivo",p7:"三星",p8:"一加",p9:"360",p10:"锤子"},
            {name:"个护清洁",img:"images/sort/shoujishuma/img1.jpg",img10:"images/sort/shoujishuma/xiaomi.png",img9:"images/sort/shoujishuma/huawei.jpg",img8:"images/sort/shoujishuma/rongyao.jpg",img7:"images/sort/shoujishuma/iPhone.jpg",img6:"images/sort/shoujishuma/oppo.png",img5:"images/sort/shoujishuma/vivo.png",img4:"images/sort/shoujishuma/sanxing.png",img3:"images/sort/shoujishuma/yijia.jpg",img2:"images/sort/shoujishuma/360.jpg",img1:"images/sort/shoujishuma/chunzi.jpg",link:"http//www.baidu.com",p1:"锤子",p9:"华为",p8:"荣耀",p7:"iPhone",p6:"oppo",p5:"vivo",p4:"三星",p3:"一加",p2:"360",p10:"小米"},
            {name:"汽车用品",img:"images/sort/shoujishuma/img.jpg",img5:"images/sort/shoujishuma/xiaomi.png",img6:"images/sort/shoujishuma/huawei.jpg",img7:"images/sort/shoujishuma/rongyao.jpg",img8:"images/sort/shoujishuma/iPhone.jpg",img9:"images/sort/shoujishuma/oppo.png",img10:"images/sort/shoujishuma/vivo.png",img4:"images/sort/shoujishuma/sanxing.png",img3:"images/sort/shoujishuma/yijia.jpg",img2:"images/sort/shoujishuma/360.jpg",img1:"images/sort/shoujishuma/chunzi.jpg",link:"http//www.baidu.com",p5:"小米",p6:"华为",p7:"荣耀",p8:"iPhone",p9:"oppo",p10:"vivo",p1:"三星",p4:"一加",p3:"360",p2:"锤子"},
            {name:"京东超市",img:"images/sort/shoujishuma/img1.jpg",img10:"images/sort/shoujishuma/xiaomi.png",img1:"images/sort/shoujishuma/huawei.jpg",img9:"images/sort/shoujishuma/rongyao.jpg",img2:"images/sort/shoujishuma/iPhone.jpg",img8:"images/sort/shoujishuma/oppo.png",img3:"images/sort/shoujishuma/vivo.png",img7:"images/sort/shoujishuma/sanxing.png",img4:"images/sort/shoujishuma/yijia.jpg",img6:"images/sort/shoujishuma/360.jpg",img5:"images/sort/shoujishuma/chunzi.jpg",link:"http//www.baidu.com",p10:"小米",p1:"华为",p9:"荣耀",p2:"iPhone",p8:"oppo",p3:"vivo",p7:"三星",p4:"一加",p6:"360",p5:"锤子"},
            {name:"男装",img:"images/sort/shoujishuma/img.jpg",img10:"images/sort/shoujishuma/xiaomi.png",img8:"images/sort/shoujishuma/huawei.jpg",img6:"images/sort/shoujishuma/rongyao.jpg",img4:"images/sort/shoujishuma/iPhone.jpg",img2:"images/sort/shoujishuma/oppo.png",img9:"images/sort/shoujishuma/vivo.png",img7:"images/sort/shoujishuma/sanxing.png",img5:"images/sort/shoujishuma/yijia.jpg",img3:"images/sort/shoujishuma/360.jpg",img1:"images/sort/shoujishuma/chunzi.jpg",link:"http//www.baidu.com",p10:"小米",p8:"华为",p6:"荣耀",p4:"iPhone",p2:"oppo",p9:"vivo",p7:"三星",p5:"一加",p3:"360",p1:"锤子"}
            
        ]
    }
})
//选项卡
var sortmainli=document.querySelectorAll(".sort-main li");
var sortrow=document.querySelectorAll(".sort-main .col-xs-9 .top");
console.log(sortrow);
for(var z=0;z<sortrow.length;z++){
    sortrow[z].setAttribute("class","disappear");
}
sortrow[0].setAttribute("class","appear");
sortmainli[0].style.backgroundColor="#f5f5f5";
for(var i=0;i<sortmainli.length;i++){
    sortmainli[i].aa=i;
    sortmainli[i].onclick=function(){
        for(var j=0;j<sortrow.length;j++){
            sortrow[j].setAttribute("class","disappear");
            sortmainli[j].style.backgroundColor = "#fff";
            sortmainli[j].style.color = "#000";
        }
//        this.style.backgroundColor = "#fff";
        sortmainli[this.aa].style.backgroundColor = "#f5f5f5";
        this.style.color = "red";
        sortrow[this.aa].setAttribute("class","appear");
    } 
}


