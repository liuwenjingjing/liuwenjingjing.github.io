
//var melis=document.querySelectorAll(".in-nav li");
//console.log(melis);
//for(var i=0;i<melis.length;i++){
//    console.log(melis[i]);
//    melis[i].onclick=function(){
//        for()
//    } 
//   this.style.borderBottom ="4px solid red";
//    this.style.color = "red";
//}


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


//点击消失
var ad=document.querySelector(".bottomm");
var adl=document.querySelector(".bottomm .span");
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




//banner部分轮播

var mySwiper = new Swiper ('.banner', {
    autoplay:true,
    loop: true,
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    }
  })        


//首页
new Vue ({
    el:"#in-ma",
    data:{
        inma:[
            {img:"images/shouye/1.jpg",h3:"AVEENO 艾维诺 全天候保湿乳液 227ml*2件",span:"76.5元包邮（需用码）",p1:"亚马逊海外购",p2:"|10:55",i:"国内",ico:"fa fa-commenting-o",icos:"0",link1:"http//www.baidu.com",link2:"http//www.qq.com"},
            {img:"images/shouye/2.jpg",h3:"Pure Smile 江户歌舞伎脸谱面膜 *8片+KOSE 高丝 黄金果冻玻尿酸保湿面膜 *8片",span:"3811日元含税包直邮（需用码，约￥225)",p1:"亚马逊海外购",p2:"|10:55",i1:"淘淘",ico:"fa fa-commenting-o",icos:"0",link1:"http//www.baidu.com",link2:"http//www.qq.com"},
            {img:"images/shouye/3.jpg",h3:"必看活动：北京领区福利！一大波签证好价上新！",span:"限时秒杀 日签1元起，泰签222元起",p1:"穷游网",p2:"|10:50",i:"国内",ico:"fa fa-commenting-o",icos:"2",link1:"http//www.baidu.com",link2:"http//www.qq.com"},
            {img:"images/shouye/4.jpg",h3:"中亚Prime会员：柳宗理 南部铁器 铸铁平底锅煎锅 18CM",span:"179元包税包邮",p1:"亚马逊海外购",p2:"|10:50",i:"国内",ico:"fa fa-commenting-o",icos:"0",link1:"http//www.baidu.com",link2:"http//www.qq.com"},
            {img:"images/shouye/5.jpg",h3:"加加 精酿酱油 黄豆酿造生抽 1.9L",span:"127.6元（可199-100）",p1:"京东",p2:"|10:45",i:"国内",ico:"fa fa-commenting-o",icos:"0",link1:"http//www.baidu.com",link2:"http//www.qq.com"},
            {img:"images/shouye/6.jpg",h3:"ZARA 00605032444 短款休闲西装外套女",span:"159元包邮",p1:"天猫精选",p2:"|10:44",i:"国内",ico:"fa fa-commenting-o",icos:"0",link1:"http//www.baidu.com",link2:"http//www.qq.com"},
            {img:"images/shouye/7.jpg",h3:"Massimo Dutti 00004014805 男士斜纹理织布休闲裤",span:"159元包邮",p1:"天猫精选",p2:"|10:44",i:"国内",ico:"fa fa-commenting-o",icos:"0",link1:"http//www.baidu.com",link2:"http//www.qq.com"},
            {img:"images/shouye/8.jpg",h3:"BOLOLO 波咯咯 婴儿辅食机+婴儿伞车",span:"379元包邮（需用券）",p1:"京东",p2:"|10:43",i:"国内",ico:"fa fa-commenting-o",icos:"10",link1:"http//www.baidu.com",link2:"http//www.qq.com"},
            {img:"images/shouye/9.jpg",h3:"海淘券码：GILT CITY 免费领取 CLINIQUE美国官网",span:"379元包邮（需用券）",p1:"京东",p2:"|10:40",i1:"淘淘",ico:"fa fa-commenting-o",icos:"0",link1:"http//www.baidu.com",link2:"http//www.qq.com"},
            {img:"images/shouye/10.jpg",h3:"ZARA TRF 00881327401 女士刺绣薄纱连衣裙",span:"129",p1:"天猫精选",p2:"|10:39",i:"国内",ico:"fa fa-commenting-o",icos:"0",link1:"http//www.baidu.com",link2:"http//www.qq.com"},
            {img:"images/shouye/11.jpg",h3:"凑单品：Canesten 凯妮汀 女士专用护理液 200ml",span:"AU$7.99（约￥38.32）",p1:"天猫精选",p2:"|10:39",i:"国内",ico:"fa fa-commenting-o",icos:"0",link1:"http//www.baidu.com",link2:"http//www.qq.com"},
            {img:"images/shouye/12.jpg",h3:"Benge 邦格 A4网格透明文件资料袋 5个 送标签贴",span:"4.8元包邮（需用券）",p1:"天猫精选",p2:"|10:39",i:"国内",ico:"fa fa-commenting-o",icos:"1",link1:"http//www.baidu.com",link2:"http//www.qq.com"},
            {img:"images/shouye/13.jpg",h3:"凑单品：Avene 雅漾 活泉修复霜 100ml",span:"NZ$16.5（可凑单满减，约￥75）",p1:"天猫精选",p2:"|10:39",i1:"淘淘",ico:"fa fa-commenting-o",icos:"0",link1:"http//www.baidu.com",link2:"http//www.qq.com"},
            {img:"images/shouye/14.jpg",h3:"众安孝欣保 恶性肿瘤险",span:"449元起  保额50万 限时分期免息",p1:"众安保险",p2:"|10:37",i:"国内",ico:"fa fa-commenting-o",icos:"0",link1:"http//www.baidu.com",link2:"http//www.qq.com"},
            {img:"images/shouye/15.jpg",h3:"SONY 索尼 KD-75X9000F 75寸 4K 液晶电视",span:"20499包邮",p1:"当当",p2:"|10:30",i:"国内",ico:"fa fa-commenting-o",icos:"0",link1:"http//www.baidu.com",link2:"http//www.qq.com"},
            {img:"images/shouye/16.jpg",h3:"浩美 超细简约头绳 100件",span:"6.8元包邮（需用券）",p1:"天猫精选",p2:"|10:30",i:"国内",ico:"fa fa-commenting-o",icos:"0",link1:"http//www.baidu.com",link2:"http//www.qq.com"},
            {img:"images/shouye/17.jpg",h3:"值友专享：HAMILTON 汉米尔顿 Khaki Aviation 卡其航空 Pilot H76755135 男士机械腕表",span:"$499（需用码，约￥3290）",p1:"Ashford",p2:"|10:30",i1:"淘淘",ico:"fa fa-commenting-o",icos:"0",link1:"http//www.baidu.com",link2:"http//www.qq.com"},
            {img:"images/shouye/18.jpg",h3:"《DK全球史：从史前文明到今天》",span:"158元包邮（双重优惠）",p1:"京东",p2:"|10:28",i1:"淘淘",ico:"fa fa-commenting-o",icos:"0",link1:"http//www.baidu.com",link2:"http//www.qq.com"},
        ]
    }
})






//classify
//选项卡
var cmainli=document.querySelectorAll(".classify .main li");
var cmaina=document.querySelectorAll(".classify .maina");
//console.log(sortrow[1]);
for(var z=0;z<cmaina.length;z++){
    cmaina[z].style.display="none";
}
if(cmaina[0] !== undefined){
    cmaina[0].style.display="block";
//    c[0].style.backgroundColor="#f5f5f5";
}


for(var i=0;i<cmainli.length;i++){
    cmainli[i].aa=i;
    cmainli[i].onclick=function(){
        for(var j=0;j<cmaina.length;j++){
            cmaina[j].style.display="none";
            cmainli[j].style.backgroundColor = "#fff";
            cmainli[j].style.color = "#333";
        }
//        this.style.backgroundColor = "#fff";
        cmainli[this.aa].style.backgroundColor = "#f04848";
        this.style.color = "#fff";
        cmaina[this.aa].style.display="block";
    } 
}


////document.documentElement.clientHeight    document.documentElement.clientHeight+"px"

//获取高
var cmaincol3=document.querySelector(".classify .main .col-xs-3");
var cmaincol9=document.querySelector(".classify .main .col-xs-9");
var html=document.querySelector("html");
var cmc3=html.clientHeight+"px";
if(cmaincol3!=null){
cmaincol3.style.height=cmc3;
cmaincol3.style.overflow="scroll";
console.log(cmc3);}
var cmc9=html.clientHeight+"px";
if(cmaincol9!=null){
cmaincol9.style.height=cmc9;
cmaincol9.style.overflow="scroll";
}

new Vue ({
    el:"#wei",
    data:{
        arrs:[
            {name:"【京东超市】e洁 自动收口垃圾袋加厚手提式 45c",img:"images/weinituijian/1.jpg",price1:"21.08",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            {name:"安昕 良选男士船袜5双装 中筒棉袜商务男袜子吸汗透气短袜 船",img:"images/weinituijian/2.jpg",price1:"38.00",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            {name:"苹果原装数据线iPhone7 Plus // 6P / 5SE / iPadpro手机USB线",img:"images/weinituijian/3.jpg",price1:"15.00",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            {name:"真皮多卡位零钱包女士卡夹信用卡头层牛皮驾驶证皮套风琴",img:"images/weinituijian/4.jpg",price1:"59.00",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            
            
            {name:" Haier 海尔 BCD-470WDPG 470升 十字对开门冰箱 ",img:"images/weinituijian/5.jpg",price1:"4999.00",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            {name:"WMF 福腾宝 PERFECT RDS系列 压力锅 4.5L",img:"images/weinituijian/6.jpg",price1:"599.00",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            {name:"plantronics 缤特力 BackBeat SENSE 蓝牙头戴耳机",img:"images/weinituijian/7.jpg",price1:"298.00",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            {name:"纽仕兰牧场 Theland 全脂牛奶 250ml*24盒 +凑单品",img:"images/weinituijian/8.jpg",price1:"89.00",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            
            
            {name:"EMPORIO ARMANI 阿玛尼 AR1648 时尚男士腕表",img:"images/weinituijian/9.jpg",price1:"799.98",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            {name:"EMPORIO ARMANI AR1809 男士时装手表",img:"images/weinituijian/10.jpg",price1:"899.00",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            {name:"new balance 005系列 MRL005BG 中性款休闲运动鞋 *2双",img:"images/weinituijian/11.jpg",price1:"366.00",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            {name:"潮宏基珠宝 妍美 黄金手镯足金手镯手饰金镯子女 计价 C",img:"images/weinituijian/12.jpg",price1:"6332.00",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            
            
            {name:"new balance MRL247WR 女款休闲鞋 *2双",img:"images/weinituijian/13.jpg",price1:"396.00",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            {name:"PUMA 彪马 Suede Classic Trainers 女士休闲鞋",img:"images/weinituijian/14.jpg",price1:"388.00",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            {name:"山本汉方制药 板蓝根",img:"images/weinituijian/15.jpg",price1:"15.00",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            {name:"亿色(ESR) iPhone8 Plus/7Plus/6s Plus钢化膜 苹果8Plus/7plus/6sPlus钢化膜 非全屏覆盖抗蓝光玻璃手机贴膜",img:"images/weinituijian/16.jpg",price1:"22.00",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            
            
            {name:"淑女屋2018夏季新品短袖衬衫女小翻领刺绣衬衣女公主风荷叶边上衣",img:"images/weinituijian/17.jpg",price1:"219.00",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            {name:"上海文庙淘到 BANDAI 万代 hello kitty 40周年超合金纪念版",img:"images/weinituijian/18.jpg",price1:"186.00",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            {name:"茅台 王子传承2000 53度 500ml 酱香型白酒 单瓶装",img:"images/weinituijian/19.jpg",price1:"299.00",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            {name:"RASTAR 星辉车模 1:18布加迪威速Vitesse仿真跑车模型收藏汽车摆件配件 黑橙色",img:"images/weinituijian/20.jpg",price1:"159.00",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
        ]
    }
})






///cart
new Vue ({
    el:"#cai",
    data:{
        arrs:[
            {name:"【京东超市】e洁 自动收口垃圾袋加厚手提式 45c",img:"images/weinituijian/1.jpg",price1:"21.08",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            {name:"安昕 良选男士船袜5双装 中筒棉袜商务男袜子吸汗透气短袜 船",img:"images/weinituijian/2.jpg",price1:"38.00",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            {name:"苹果原装数据线iPhone7 Plus // 6P / 5SE / iPadpro手机USB线",img:"images/weinituijian/3.jpg",price1:"15.00",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            {name:"真皮多卡位零钱包女士卡夹信用卡头层牛皮驾驶证皮套风琴",img:"images/weinituijian/4.jpg",price1:"59.00",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            
            
            {name:" Haier 海尔 BCD-470WDPG 470升 十字对开门冰箱 ",img:"images/weinituijian/5.jpg",price1:"4999.00",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            {name:"WMF 福腾宝 PERFECT RDS系列 压力锅 4.5L",img:"images/weinituijian/6.jpg",price1:"599.00",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            {name:"plantronics 缤特力 BackBeat SENSE 蓝牙头戴耳机",img:"images/weinituijian/7.jpg",price1:"298.00",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            {name:"纽仕兰牧场 Theland 全脂牛奶 250ml*24盒 +凑单品",img:"images/weinituijian/8.jpg",price1:"89.00",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            
            
            {name:"EMPORIO ARMANI 阿玛尼 AR1648 时尚男士腕表",img:"images/weinituijian/9.jpg",price1:"799.98",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            {name:"EMPORIO ARMANI AR1809 男士时装手表",img:"images/weinituijian/10.jpg",price1:"899.00",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            {name:"new balance 005系列 MRL005BG 中性款休闲运动鞋 *2双",img:"images/weinituijian/11.jpg",price1:"366.00",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            {name:"潮宏基珠宝 妍美 黄金手镯足金手镯手饰金镯子女 计价 C",img:"images/weinituijian/12.jpg",price1:"6332.00",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            
            
            {name:"new balance MRL247WR 女款休闲鞋 *2双",img:"images/weinituijian/13.jpg",price1:"396.00",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            {name:"PUMA 彪马 Suede Classic Trainers 女士休闲鞋",img:"images/weinituijian/14.jpg",price1:"388.00",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            {name:"山本汉方制药 板蓝根",img:"images/weinituijian/15.jpg",price1:"15.00",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            {name:"亿色(ESR) iPhone8 Plus/7Plus/6s Plus钢化膜 苹果8Plus/7plus/6sPlus钢化膜 非全屏覆盖抗蓝光玻璃手机贴膜",img:"images/weinituijian/16.jpg",price1:"22.00",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            
            
            {name:"淑女屋2018夏季新品短袖衬衫女小翻领刺绣衬衣女公主风荷叶边上衣",img:"images/weinituijian/17.jpg",price1:"219.00",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            {name:"上海文庙淘到 BANDAI 万代 hello kitty 40周年超合金纪念版",img:"images/weinituijian/18.jpg",price1:"186.00",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            {name:"茅台 王子传承2000 53度 500ml 酱香型白酒 单瓶装",img:"images/weinituijian/19.jpg",price1:"299.00",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
            {name:"RASTAR 星辉车模 1:18布加迪威速Vitesse仿真跑车模型收藏汽车摆件配件 黑橙色",img:"images/weinituijian/20.jpg",price1:"159.00",link1:"http//www.baidu.com",link2:"http//www.qq.com",kan:"看相似"},
        ]
    }
})







//加载更多

var asd = document.querySelectorAll(".sss");
for(var i=0;i<asd.length;i++){
    asd[i].style.display = "none";
}
window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//    console.log(scrollTop);
    if(scrollTop > 4914){
        for(var i=0;i<asd.length;i++){
            asd[i].style.display = "block";
        }
        
        
    }
}



///点击消失
var a1=document.querySelector(".toptop .a .a2");
var toptop=document.querySelector(".toptop");
if(toptop!=null){
    if(sessionStorage.toptop=="floes"){
        toptop.style.display="none";
    }else{
        toptop.style.display="block";
    }
}
if(toptop!=null){
   a1.onclick=function(){
        toptop.style.display="none";
        sessionStorage.toptop="floes"
    }
}
