var workerF=document.querySelector(".worker");

function resize(){
  document.body.style.width=0+"px";
  document.body.style.height=0+"px";
  var wl=16/9,hl=9/16;
  if(window.innerWidth*hl<=window.innerHeight){
    workerF.style.width=window.innerWidth+"px";
    workerF.style.height=window.innerWidth*hl+"px";
  }else{
    workerF.style.width=window.innerHeight*wl+"px";
    workerF.style.height=window.innerHeight+"px";
  }  
  document.body.style.width=window.innerWidth+"px";
  document.body.style.height=window.innerHeight+"px";
  
}

window.addEventListener('resize',resize);

resize();

var a=0;
var b=0;

document.querySelector(".hk_point").onmousedown=function(){
  document.onmousemove=function(e){
    var y=e.pageY,ny=document.querySelector('.hk_body').getBoundingClientRect().height,by=document.querySelector('.hk_body').getBoundingClientRect().top;
    var h=y-by;
    if(h<0)h=0;
    document.querySelector(".hk_point").style.top='calc('+h/ny*100+'% - 16px)';
    document.querySelector(".vp").style.transform='rotate('+(180-360*h/ny)+'deg)';
    a=180-360*h/ny;
  }
  document.onmouseup=function(){
    document.onmousemove=null;
    document.onmouseup=null;
  }
}
document.querySelector(".hk_point").addEventListener('touchstart',function(){
  document.ontouchmove=function(e){
    var y=e.targetTouches[0].pageY,ny=document.querySelector('.hk_body').getBoundingClientRect().height,by=document.querySelector('.hk_body').getBoundingClientRect().top;
    var h=y-by;
    if(h<0)h=0;
    document.querySelector(".hk_point").style.top='calc('+h/ny*100+'% - 16px)';
    document.querySelector(".vp").style.transform='rotate('+(180-360*h/ny)+'deg)';
    a=180-360*h/ny;
  }
  document.ontouchend=function(){
    document.ontouchmove=null;
    document.ontouchend=null;
  }
},{
  passive:false
})

var c=false;

function get(){
  c=!c;
  var f=1;
  if(c){
    f=-1;
  }
  return {
    f:f,
    deg:parseInt(Math.random()*90)+10,
    time:parseInt(Math.random()*500)+100
  }
}

function g(){
  var n=get();
  if(Math.abs(n.deg*n.f+b)>=180){
    n.deg=Math.abs(180*n.f-n.deg*n.f);
  }
  var nd=0;
  var inter=setInterval(function(){
    nd+=n.deg/n.time;
    b+=n.deg/n.time*n.f;
    document.querySelector(".jt").style.transform='rotate('+b+'deg)';
    if(nd>=n.deg){
      clearInterval(inter);
      g();
    }
  },10)
}
function rscope(){
  var pl=(Math.round(Math.abs(a+b)*10)/10)%360;
  document.querySelector("span.pls").innerHTML=pl;
  if(pl<=5){
    document.querySelector("span.xunzhan").className='xunzhan perfect';
    document.querySelector("span.xunzhan").innerHTML='PERFECT';
  }else if(pl<=10){
    document.querySelector("span.xunzhan").className='xunzhan great';
    document.querySelector("span.xunzhan").innerHTML='GREAT';
  }else if(pl<=15){
    document.querySelector("span.xunzhan").className='xunzhan good';
    document.querySelector("span.xunzhan").innerHTML='GOOD';
  }else{
    document.querySelector("span.xunzhan").className='xunzhan miss';
    document.querySelector("span.xunzhan").innerHTML='MISS';
  }
  requestAnimationFrame(rscope);
}
rscope();

function start(){
  document.querySelector(".jm.player").style.display='block';
  document.querySelector(".jm.start").style.display='none';
  g();
}