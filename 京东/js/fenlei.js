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
