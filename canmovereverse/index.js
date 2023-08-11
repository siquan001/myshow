var RED=0;
var YELLOW=1;
var WHITE=2;
var ORANGE=3;
var BLUE=4;
var GREEN=5;

function createArray(t,n){
  var r=[];
  while(n>0){
    n--;
    r.push(t);
  }
  return r;
}

var cube={
  U:createArray(YELLOW,9),
  D:createArray(WHITE,9),
  L:createArray(BLUE,9),
  R:createArray(GREEN,9),
  F:createArray(RED,9),
  B:createArray(ORANGE,9),
}

var cubemove={
  U:function(){
    var uj1=cube.U[0];
    var uj2=cube.U[2];
    var uj3=cube.U[8];
    var uj4=cube.U[6];
    var ul1=cube.U[1];
    var ul2=cube.U[5];
    var ul3=cube.U[7];
    var ul4=cube.U[3];
    cube.U[0]=uj4;
    cube.U[2]=uj1;
    cube.U[8]=uj2;
    cube.U[6]=uj3;
    cube.U[1]=ul4;
    cube.U[5]=ul1;
    cube.U[7]=ul2;
    cube.U[3]=ul3;
    var l1=cube.L[0];
    var l2=cube.L[1];
    var l3=cube.L[2];
    var r1=cube.R[0];
    var r2=cube.R[1];
    var r3=cube.R[2];
    var f1=cube.F[0];
    var f2=cube.F[1];
    var f3=cube.F[2];
    var b1=cube.B[0];
    var b2=cube.B[1];
    var b3=cube.B[2];
    cube.F[0]=r1;
    cube.F[1]=r2;
    cube.F[2]=r3;
    cube.R[0]=b1;
    cube.R[1]=b2;
    cube.R[2]=b3;
    cube.B[0]=l1;
    cube.B[1]=l2;
    cube.B[2]=l3;
    cube.L[0]=f1;
    cube.L[1]=f2;
    cube.L[2]=f3;
  },
  L:function(){
    var lj1=cube.L[0];
    var lj2=cube.L[2];
    var lj3=cube.L[8];
    var lj4=cube.L[6];
    var ll1=cube.L[1];
    var ll2=cube.L[5];
    var ll3=cube.L[7];
    var ll4=cube.L[3];
    cube.L[0]=lj4;
    cube.L[2]=lj1;
    cube.L[8]=lj2;
    cube.L[6]=lj3;
    cube.L[1]=ll4;
    cube.L[5]=ll1;
    cube.L[7]=ll2;
    cube.L[3]=ll3;
    var u1=cube.U[0];
    var u2=cube.U[3];
    var u3=cube.U[6];
    var d1=cube.D[0];
    var d2=cube.D[3];
    var d3=cube.D[6];
    var f1=cube.F[0];
    var f2=cube.F[3];
    var f3=cube.F[6];
    var b1=cube.B[2];
    var b2=cube.B[5];
    var b3=cube.B[8];
    cube.U[0]=b3;
    cube.U[3]=b2;
    cube.U[6]=b1;
    cube.D[0]=f1;
    cube.D[3]=f2;
    cube.D[6]=f3;
    cube.F[0]=u1;
    cube.F[3]=u2;
    cube.F[6]=u3;
    cube.B[2]=d3;
    cube.B[5]=d2;
    cube.B[8]=d1;
  },
  R:function(){
    var rj1=cube.R[0];
    var rj2=cube.R[2];
    var rj3=cube.R[8];
    var rj4=cube.R[6];
    var rl1=cube.R[1];
    var rl2=cube.R[5];
    var rl3=cube.R[7];
    var rl4=cube.R[3];
    cube.R[0]=rj4;
    cube.R[2]=rj1;
    cube.R[8]=rj2;
    cube.R[6]=rj3;
    cube.R[1]=rl4;
    cube.R[5]=rl1;
    cube.R[7]=rl2;
    cube.R[3]=rl3;
    var u1=cube.U[2];
    var u2=cube.U[5];
    var u3=cube.U[8];
    var d1=cube.D[2];
    var d2=cube.D[5];
    var d3=cube.D[8];
    var f1=cube.F[2];
    var f2=cube.F[5];
    var f3=cube.F[8];
    var b1=cube.B[0];
    var b2=cube.B[3];
    var b3=cube.B[6];
    cube.U[2]=f1;
    cube.U[5]=f2;
    cube.U[8]=f3;
    cube.D[2]=b3;
    cube.D[5]=b2;
    cube.D[8]=b1;
    cube.F[2]=d1;
    cube.F[5]=d2;
    cube.F[8]=d3;
    cube.B[0]=u3;
    cube.B[3]=u2;
    cube.B[6]=u1;
  },
  D:function(){
    var dj1=cube.D[0];
    var dj2=cube.D[2];
    var dj3=cube.D[8];
    var dj4=cube.D[6];
    var dl1=cube.D[1];
    var dl2=cube.D[5];
    var dl3=cube.D[7];
    var dl4=cube.D[3];
    cube.D[0]=dj4;
    cube.D[2]=dj1;
    cube.D[8]=dj2;
    cube.D[6]=dj3;
    cube.D[1]=dl4;
    cube.D[5]=dl1;
    cube.D[7]=dl2;
    cube.D[3]=dl3;
    var l1=cube.L[6];
    var l2=cube.L[7];
    var l3=cube.L[8];
    var r1=cube.R[6];
    var r2=cube.R[7];
    var r3=cube.R[8];
    var f1=cube.F[6];
    var f2=cube.F[7];
    var f3=cube.F[8];
    var b1=cube.B[6];
    var b2=cube.B[7];
    var b3=cube.B[8];
    cube.L[6]=b1;
    cube.L[7]=b2;
    cube.L[8]=b3;
    cube.R[6]=f1;
    cube.R[7]=f2;
    cube.R[8]=f3;
    cube.F[6]=l1;
    cube.F[7]=l2;
    cube.F[8]=l3;
    cube.B[6]=r1;
    cube.B[7]=r2;
    cube.B[8]=r3;
  },
  F:function(){
    var fj1=cube.F[0];
    var fj2=cube.F[2];
    var fj3=cube.F[8];
    var fj4=cube.F[6];
    var fl1=cube.F[1];
    var fl2=cube.F[5];
    var fl3=cube.F[7];
    var fl4=cube.F[3];
    cube.F[0]=fj4;
    cube.F[2]=fj1;
    cube.F[8]=fj2;
    cube.F[6]=fj3;
    cube.F[1]=fl4;
    cube.F[5]=fl1;
    cube.F[7]=fl2;
    cube.F[3]=fl3;
    var l1=cube.L[2];
    var l2=cube.L[5];
    var l3=cube.L[8];
    var r1=cube.R[0];
    var r2=cube.R[3];
    var r3=cube.R[6];
    var u1=cube.U[6];
    var u2=cube.U[7];
    var u3=cube.U[8];
    var d1=cube.D[0];
    var d2=cube.D[1];
    var d3=cube.D[2];
    cube.L[2]=d1;
    cube.L[5]=d2;
    cube.L[8]=d3;
    cube.R[0]=u1;
    cube.R[3]=u2;
    cube.R[6]=u3;
    cube.U[6]=l3;
    cube.U[7]=l2;
    cube.U[8]=l1;
    cube.D[0]=r3;
    cube.D[1]=r2;
    cube.D[2]=r1;
  },
  B:function(){
    var bj1=cube.B[0];
    var bj2=cube.B[2];
    var bj3=cube.B[8];
    var bj4=cube.B[6];
    var bl1=cube.B[1];
    var bl2=cube.B[5];
    var bl3=cube.B[7];
    var bl4=cube.B[3];
    cube.B[0]=bj4;
    cube.B[2]=bj1;
    cube.B[8]=bj2;
    cube.B[6]=bj3;
    cube.B[1]=bl4;
    cube.B[5]=bl1;
    cube.B[7]=bl2;
    cube.B[3]=bl3;
    var l1=cube.L[0];
    var l2=cube.L[3];
    var l3=cube.L[6];
    var r1=cube.R[2];
    var r2=cube.R[5];
    var r3=cube.R[8];
    var u1=cube.U[0];
    var u2=cube.U[1];
    var u3=cube.U[2];
    var d1=cube.D[6];
    var d2=cube.D[7];
    var d3=cube.D[8];
    cube.L[0]=u3;
    cube.L[3]=u2;
    cube.L[6]=u1;
    cube.R[2]=d3;
    cube.R[5]=d2;
    cube.R[8]=d1;
    cube.U[0]=r1;
    cube.U[1]=r2;
    cube.U[2]=r3;
    cube.D[6]=l1;
    cube.D[7]=l2;
    cube.D[8]=l3;
  },
  Up:function(){
    this.U();
    this.U();
    this.U();
  },
  Dp:function(){
    this.D();
    this.D();
    this.D();
  },
  Lp:function(){
    this.L();
    this.L();
    this.L();
  },
  Rp:function(){
    this.R();
    this.R();
    this.R();
  },
  Fp:function(){
    this.F();
    this.F();
    this.F();
  },
  Bp:function(){
    this.B();
    this.B();
    this.B();
  }
}
function xr(){
  for(var k in cube){
    var m=document.querySelector(".cube ."+k.toLowerCase());
    var iss=m.querySelectorAll('div');
    iss.forEach(function(e,i){
      e.style.background=getColor(cube[k][i]);
    })
  }
}

function getColor(n){
  switch(n){
    case RED:
      return 'red';
    case YELLOW:
      return 'yellow';
    case WHITE:
      return 'white';
    case ORANGE:
      return 'orange';
    case BLUE:
      return 'blue';
    case GREEN:
      return 'green';                          
  }
}

function start(){
  var bzi=document.getElementById("bzi");
  var v=bzi.value.trim();
  bzi.readonly=true;
  this.disabled=true;
  var _=this;
  v=v.replaceAll('\'','p').split(' ');
  var bu=0;
  var a=setInterval(function(){
    bu++;
    v.forEach(function(f){
      if(!f) return;
      if(!cubemove[f]){
        clearInterval(a);
        document.getElementById("statu").innerHTML='公式错误或不支持！';
        _.disabled=false
        throw new Error('Method Not Support or Found!')
      }else{
        cubemove[f]();
      }
    })
    xr();
    document.getElementById("statu").innerHTML='执行'+bu+'步';
    var isqb=true;
    for(var k in cube){
      if(cube[k][0]==cube[k][1]&&
        cube[k][1]==cube[k][2]&&
        cube[k][2]==cube[k][3]&&
        cube[k][3]==cube[k][4]&&
        cube[k][4]==cube[k][5]&&
        cube[k][5]==cube[k][6]&&
        cube[k][6]==cube[k][7]&&
        cube[k][7]==cube[k][8]
        ){
  
        }else{
          isqb=false;
        }
    }
    if(isqb){
      clearInterval(a)
      _.disabled=false
      document.getElementById("statu").innerHTML='执行'+bu+'步，完成！';
    }
  },10)
}
xr();

