var models={
  siquan:{
    color:'#aaa',
    zhen:[
      'ooo o  ooo  o o ooo ooo',
      'o   o o   o o o o o o o',
      'ooo o o o o o o ooo o o',
      '  o o o  o  o o o o o o',
      'ooo o  oo o ooo o o o o'
    ]
  },
  css:{
    color:'#0f1',
    zhen:[
      'ooo ooo ooo',
      'o   o   o  ',
      'o   ooo ooo',
      'o     o   o',
      'ooo ooo ooo'
    ]
  },
  bilibili:{
    color:'#09f',
    zhen:[
      'oo  o o   o oo  o o   o',
      'o o o o   o o o o o   o',
      'oo  o o   o oo  o o   o',
      'o o o o   o o o o o   o',
      'oo  o ooo o oo  o ooo o'
    ]
  },
  done:{
    color:'#000',
    zhen:[
      'oo   oo  oooo ooo',
      'o o o  o o  o o  ',
      'o o o  o o  o ooo',
      'o o o  o o  o o  ',
      'oo   oo  o  o ooo'
    ]
  },
  n9:{
    color:"#0f1",
    zhen:[
      'ooo',
      'o o',
      'ooo',
      '  o',
      'ooo'
    ]
  },
  n8:{
    color:"#0f1",
    zhen:[
      'ooo',
      'o o',
      'ooo',
      'o o',
      'ooo'
    ]
  },n7:{
    color:"#0f1",
    zhen:[
      'ooo',
      '  o',
      '  o',
      '  o',
      '  o'
    ]
  },n6:{
    color:"#09f",
    zhen:[
      'ooo',
      'o  ',
      'ooo',
      'o o',
      'ooo'
    ]
  },n5:{
    color:"#09f",
    zhen:[
      'ooo',
      'o  ',
      'ooo',
      '  o',
      'ooo'
    ]
  },n4:{
    color:"#09f",
    zhen:[
      'o o',
      'o o',
      'ooo',
      '  o',
      '  o'
    ]
  },n3:{
    color:"#f11",
    zhen:[
      'ooo',
      '  o',
      'ooo',
      '  o',
      'ooo'
    ]
  },n2:{
    color:"#f11",
    zhen:[
      'ooo',
      '  o',
      'ooo',
      'o  ',
      'ooo'
    ]
  },n1:{
    color:"#f00",
    zhen:[
      'o',
      'o',
      'o',
      'o',
      'o'
    ]
  },n0:{
    color:"#f00",
    zhen:[
      'ooo',
      'o o',
      'o o',
      'o o',
      'ooo'
    ]
  },
}

function getrandomarr(){
  var q=[];
  for(var i=0;i<document.querySelectorAll(".a").length;i++){
    q.push(i);
  }
  var q2=[];
  var qi=q.length;
  for(var i=0;i<qi;i++){
    var ri=parseInt(Math.random()*q.length);
    q2.push(q[ri]);
    q.splice(ri,1);
  }
  return q2;
}

function zhentoarr(zhen){
  var q=[];
  for(var i=0;i<zhen.length;i++){
    for(var j=0;j<zhen[i].length;j++){
      if(zhen[i][j]=='o'){
        q.push([i,j]);
      }
    }
  }
  return q;
}

function xr(mo){
  var rar=getrandomarr();
  var zar=zhentoarr(mo.zhen);
  for(var i=0;i<zar.length;i++){
    document.querySelectorAll(".a")[rar[i]].style.opacity='1';
    document.querySelectorAll(".a")[rar[i]].style.top=zar[i][0]*40+'px';
    document.querySelectorAll(".a")[rar[i]].style.left=zar[i][1]*40+'px';
  }  
  for(var i=zar.length;i<rar.length;i++){
    document.querySelectorAll(".a")[rar[i]].style.opacity='0';
  }
  document.querySelector('.as').style.width=mo.zhen[0].length*40+'px';
  document.querySelectorAll(".a").forEach(function(a){
    a.style.background=mo.color;
  })
}

cf();
function cf(){
  xr(models.n9);

  setTimeout(function(){
    xr(models.n8);
  },1000)
  setTimeout(function(){
    xr(models.n7);
  },2000)
  setTimeout(function(){
    xr(models.n6);
  },3000)
  setTimeout(function(){
    xr(models.n5);
  },4000)
  setTimeout(function(){
    xr(models.n4);
  },5000);
  setTimeout(function(){
    xr(models.n3);
  },6000);
  setTimeout(function(){
    xr(models.n2);
  },7000);
  setTimeout(function(){
    xr(models.n1);
  },8000)
  setTimeout(function(){
    xr(models.n0);
  },9000)
  setTimeout(function(){
    xr(models.siquan);
  },10000)
  setTimeout(function(){
    xr(models.css);
  },11000)
  setTimeout(function(){
    xr(models.bilibili);
  },12000)
  setTimeout(function(){
    xr(models.done);
  },13000)
}