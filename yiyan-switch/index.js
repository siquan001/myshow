async function getYiYan(){
  let res=await fetch('https://v1.hitokoto.cn/');
  let obj=await res.json();
  return obj.hitokoto;
}

function pushYiYan(str){
  let cstr='';
  let yiyanContent=document.querySelector(".yiyan-content");
  let inter=setInterval(function(){
    if(cstr.length==str.length){
      clearInterval(inter);
      Promise.all([
        getYiYan(),
        new Promise((r)=>{setTimeout(r,3000)})
      ]).then(function(res){
        var yiyan=res[0];
        inter=setInterval(function(){
          if(cstr.length==0){
            clearInterval(inter);
            inter=null;
            pushYiYan(yiyan);
          }else{
            cstr=cstr.substring(0,cstr.length-2);
            yiyanContent.innerHTML=cstr;
          }
        },100)
      })
    }else{
      cstr+=str[cstr.length];
      yiyanContent.innerHTML=cstr;
    }
  },100)
}

getYiYan().then(pushYiYan);