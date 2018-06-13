var input=document.querySelector("#input");
input.addEventListener('keyup',function(){
    console.log("value值："+input.value);
    localStorage.localName=input.value;
    console.log("本地储存："+localStorage.localName);
})
input.value=localStorage.localName;