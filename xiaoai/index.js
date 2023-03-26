var input=document.getElementById("input");
var btn=document.getElementById("send");
var ls=document.querySelector('.contents ul');
var statU=0;
var Statu=0;
input.onkeydown=function(e){
  if(e.key=='Enter'){
    e.preventDefault();
    send();
  }
}
btn.onclick=send;
function send(){
  if(statU==1) return;
  if(input.value.trim()=='') return;
  statU=1;
  var v=input.value.trim();
  input.value='';
  var l=document.createElement('li');
  l.classList.add('u');
  l.innerHTML=`<div class="c"><div class="left">U</div><div class="m">${v}</div></div>`;
  ls.append(l);
  answer(v);
  document.querySelector('.contents').scrollTop=document.querySelector('.contents').scrollHeight-document.querySelector('.contents').clientHeight;
}
var lorem="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro impedit alias voluptas odit necessitatibus veniam tenetur. Consequatur adipisci itaque alias sapiente incidunt quia perspiciatis magnam recusandae odio? Ea, saepe facilis!";
function answer(v){
  var l=document.createElement('li');
  l.classList.add('a');
  l.innerHTML=`<div class="c"><div class="left">A</div><div class="m"><span class="loading"></span></div></div>`;
  ls.append(l);
  if(v=='\\t'){
    l.querySelector('.m').innerText='已切换到文字回答模式';
    Statu=0;
    statU=0;
  }else if(v=='\\s'){
    l.querySelector('.m').innerText='已切换到语音回答模式';
    statU=0;
    Statu=1;
  }else{
  if(Statu==0){
    fetch('https://v.api.aa1.cn/api/api-xiaoai/talk.php?msg='+encodeURI(v)+'&type=text').then(r=>r.text()).then(r=>{
      l.querySelector('.m').innerText=r;
      document.querySelector('.contents').scrollTop=document.querySelector('.contents').scrollHeight-document.querySelector('.contents').clientHeight;
      statU=0;
    })
  }else{
    fetch('https://v.api.aa1.cn/api/api-xiaoai/talk.php?msg='+encodeURI(v)+'&type=json').then(r=>r.json()).then(r=>{
      if(r.meta.music.musicUrl){
        l.querySelector('.m').innerHTML='sound<audio src="'+r.meta.music.musicUrl+'"></audio>';
        l.querySelector('.m').onclick=function(){
          this.querySelector('audio').play();
        }
        l.querySelector('.m audio').play();
      }else{
        l.querySelector('.m').innerHTML='ERROR';
      }
      
      statU=0;
      document.querySelector('.contents').scrollTop=document.querySelector('.contents').scrollHeight-document.querySelector('.contents').clientHeight;
    })
  }
}
  
}
