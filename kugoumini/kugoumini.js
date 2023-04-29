var xximgurl = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9IiNlNWU1ZTUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSIzNCIgd2lkdGg9IjM0IiB5PSItMSIgeD0iLTEiLz4KIDwvZz4KIDxnPgogIDx0aXRsZT5MYXllciAxPC90aXRsZT4KICA8cGF0aCBmaWxsPSIjN2Y3ZjdmIiBpZD0ic3ZnXzEiIGQ9Im0xNiwyYy03LjcsMCAtMTQsNi4zIC0xNCwxNGMwLDcuNyA2LjMsMTQgMTQsMTRjNy43LDAgMTQsLTYuMyAxNCwtMTRjMCwtNy43IC02LjMsLTE0IC0xNCwtMTR6bTAsMThjLTIuMiwwIC00LC0xLjggLTQsLTRjMCwtMi4yIDEuOCwtNCA0LC00YzIuMiwwIDQsMS44IDQsNGMwLDIuMiAtMS44LDQgLTQsNHoiIGNsYXNzPSJzdDAiLz4KICA8cGF0aCBmaWxsPSIjOTk5OTk5IiBpZD0ic3ZnXzIiIGQ9Im0xNiwxMi43Yy0xLjgsMCAtMy4zLDEuNSAtMy4zLDMuM2MwLDEuOCAxLjUsMy4zIDMuMywzLjNjMS44LDAgMy4zLC0xLjUgMy4zLC0zLjNjMCwtMS44IC0xLjUsLTMuMyAtMy4zLC0zLjN6bTAsNS42Yy0xLjMsMCAtMi4zLC0xIC0yLjMsLTIuM2MwLC0xLjMgMSwtMi4zIDIuMywtMi4zYzEuMywwIDIuMywxIDIuMywyLjNjMCwxLjMgLTEsMi4zIC0yLjMsMi4zeiIgY2xhc3M9InN0MCIvPgogPC9nPgo8L3N2Zz4=';

var KugouMiniPlayer = {
  init: function (id, list) {
    var kugouMiniPlayer = document.querySelector('kugou-mini#' + id);
    if(list){
      kugouMiniPlayer.innerHTML = `
      <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9IiNlNWU1ZTUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSIzNCIgd2lkdGg9IjM0IiB5PSItMSIgeD0iLTEiLz4KIDwvZz4KIDxnPgogIDx0aXRsZT5MYXllciAxPC90aXRsZT4KICA8cGF0aCBmaWxsPSIjN2Y3ZjdmIiBpZD0ic3ZnXzEiIGQ9Im0xNiwyYy03LjcsMCAtMTQsNi4zIC0xNCwxNGMwLDcuNyA2LjMsMTQgMTQsMTRjNy43LDAgMTQsLTYuMyAxNCwtMTRjMCwtNy43IC02LjMsLTE0IC0xNCwtMTR6bTAsMThjLTIuMiwwIC00LC0xLjggLTQsLTRjMCwtMi4yIDEuOCwtNCA0LC00YzIuMiwwIDQsMS44IDQsNGMwLDIuMiAtMS44LDQgLTQsNHoiIGNsYXNzPSJzdDAiLz4KICA8cGF0aCBmaWxsPSIjOTk5OTk5IiBpZD0ic3ZnXzIiIGQ9Im0xNiwxMi43Yy0xLjgsMCAtMy4zLDEuNSAtMy4zLDMuM2MwLDEuOCAxLjUsMy4zIDMuMywzLjNjMS44LDAgMy4zLC0xLjUgMy4zLC0zLjNjMCwtMS44IC0xLjUsLTMuMyAtMy4zLC0zLjN6bTAsNS42Yy0xLjMsMCAtMi4zLC0xIC0yLjMsLTIuM2MwLC0xLjMgMSwtMi4zIDIuMywtMi4zYzEuMywwIDIuMywxIDIuMywyLjNjMCwxLjMgLTEsMi4zIC0yLjMsMi4zeiIgY2xhc3M9InN0MCIvPgogPC9nPgo8L3N2Zz4=' alt="">
      <div class="text">
        <div class="song_name">酷狗音乐</div>
        <div class="song_album">酷狗音乐</div>
      </div>
      <div class="lyric">酷狗音乐 就是歌多</div>
      <div class="controls">
        <input type="range" min="0" max="100" value="0">
        <div class="ct">
          <div class="m-sound"><i class="bi bi-volume-down"></i></div>
          <div class="m-last"><i class="bi bi-skip-start"></i></div>
          <div class="m-play"><i class="bi bi-play-fill"></i></div>
          <div class="m-next"><i class="bi bi-skip-end"></i></div>
          <div class="m-list"><i class="bi bi-music-note-list"></i></div>
        </div>
      </div>
      <div class="sound-frame">
        <input class="sound-range" type="range" max='100' min='0' value='100'/>
      </div>
      <div class="playlist">
        <ul>
          ${list.map(function (e) {
        return `<li data-hash="${e.hash}" data-albumid="${e.albumid}">${e.name}</li>`
      }).join('')}
        </ul>
      </div>
      <audio class="kugou-mini-audio"></audio>`;
      kugouMiniPlayer.querySelectorAll('.playlist li').forEach(function (playli) {
        playli.addEventListener('click', function () {
          var acted = kugouMiniPlayer.querySelector('.playlist li.act');
          if (acted) {
            acted.classList.remove('act');
          }
          this.classList.add('act');
          playMusic(this.getAttribute('data-hash'), this.getAttribute('data-albumid'));
        })
      })
      kugouMiniPlayer.querySelector(".playlist li").click();
    }else{
      kugouMiniPlayer.innerHTML = `
    <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9IiNlNWU1ZTUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSIzNCIgd2lkdGg9IjM0IiB5PSItMSIgeD0iLTEiLz4KIDwvZz4KIDxnPgogIDx0aXRsZT5MYXllciAxPC90aXRsZT4KICA8cGF0aCBmaWxsPSIjN2Y3ZjdmIiBpZD0ic3ZnXzEiIGQ9Im0xNiwyYy03LjcsMCAtMTQsNi4zIC0xNCwxNGMwLDcuNyA2LjMsMTQgMTQsMTRjNy43LDAgMTQsLTYuMyAxNCwtMTRjMCwtNy43IC02LjMsLTE0IC0xNCwtMTR6bTAsMThjLTIuMiwwIC00LC0xLjggLTQsLTRjMCwtMi4yIDEuOCwtNCA0LC00YzIuMiwwIDQsMS44IDQsNGMwLDIuMiAtMS44LDQgLTQsNHoiIGNsYXNzPSJzdDAiLz4KICA8cGF0aCBmaWxsPSIjOTk5OTk5IiBpZD0ic3ZnXzIiIGQ9Im0xNiwxMi43Yy0xLjgsMCAtMy4zLDEuNSAtMy4zLDMuM2MwLDEuOCAxLjUsMy4zIDMuMywzLjNjMS44LDAgMy4zLC0xLjUgMy4zLC0zLjNjMCwtMS44IC0xLjUsLTMuMyAtMy4zLC0zLjN6bTAsNS42Yy0xLjMsMCAtMi4zLC0xIC0yLjMsLTIuM2MwLC0xLjMgMSwtMi4zIDIuMywtMi4zYzEuMywwIDIuMywxIDIuMywyLjNjMCwxLjMgLTEsMi4zIC0yLjMsMi4zeiIgY2xhc3M9InN0MCIvPgogPC9nPgo8L3N2Zz4=' alt="">
    <div class="text">
      <div class="song_name">酷狗音乐</div>
      <div class="song_album">酷狗音乐</div>
    </div>
    <div class="lyric">酷狗音乐 就是歌多</div>
    <div class="controls">
      <input type="range" min="0" max="100" value="0">
      <div class="ct">
        <div class="m-sound"><i class="bi bi-volume-down"></i></div>
        <div class="m-last"><i class="bi bi-skip-start"></i></div>
        <div class="m-play"><i class="bi bi-play-fill"></i></div>
        <div class="m-next"><i class="bi bi-skip-end"></i></div>
        <div class="m-list"><i class="bi bi-search"></i></div>
      </div>
    </div>
    <div class="sound-frame">
      <input class="sound-range" type="range" max='100' min='0' value='100'/>
    </div>
    <div class="playlist">
      <div class="search-box">
        <input placeholder="Enter to search music"/>
      </div>
      <ul></ul>
    </div>
    <audio class="kugou-mini-audio"></audio>`;
      var searchinput=document.querySelector(".search-box input");
      searchinput.onkeydown=function(e){
        if(e.key=='Enter'){
          getjsonp("https://mobiles.kugou.com/api/v3/search/song?format=jsonp&keyword="+this.value+"&page=1&pagesize=30&showtype=1",function(a){
            var hlist='';  
            for (var i = 0; i < a.data.info.length; i++) {
              hlist += "<li data-hash='" + a.data.info[i].hash + "' data-albumid='" + a.data.info[i].album_id + "'>" +
                   (a.data.info[i].privilege==10?"<span class='vip'>VIP</span>":"")+a.data.info[i].filename +
                  "</li>";
            }
            kugouMiniPlayer.querySelector('.playlist ul').innerHTML=hlist;
            kugouMiniPlayer.querySelectorAll('.playlist li').forEach(function (playli) {
              playli.addEventListener('click', function () {
                var acted = kugouMiniPlayer.querySelector('.playlist li.act');
                if (acted) {
                  acted.classList.remove('act');
                }
                this.classList.add('act');
                playMusic(this.getAttribute('data-hash'), this.getAttribute('data-albumid'));
              })
            })
          })
        }
      }
    }
    
    kugouMiniPlayer.addEventListener('click', function (e) {
      e.stopPropagation();
    })
    var playlist = kugouMiniPlayer.querySelector('.playlist');
    var audio = kugouMiniPlayer.querySelector('.kugou-mini-audio');
    var playbtn = kugouMiniPlayer.querySelector('.m-play');
    var musicImg = kugouMiniPlayer.querySelector('img');
    var musicName = kugouMiniPlayer.querySelector('.song_name');
    var musicAlbum = kugouMiniPlayer.querySelector('.song_album');
    var musicRange = kugouMiniPlayer.querySelector('input[type="range"]');
    var soundRange = kugouMiniPlayer.querySelector('.sound-frame input[type="range"]');
    var soundFrame = kugouMiniPlayer.querySelector('.sound-frame');
    kugouMiniPlayer.querySelector('.m-list').addEventListener('click', function () {
      if (playlist.classList.contains('act')) {
        playlist.classList.remove('act');
      } else {
        playlist.classList.add('act');
      }
    });
    kugouMiniPlayer.querySelector('.m-sound').addEventListener('click', function () {
      if (soundFrame.classList.contains('act')) {
        soundFrame.classList.remove('act');
      } else {
        soundFrame.classList.add('act');
      }
    });
    kugouMiniPlayer.querySelector('.m-last').addEventListener('click', function () {
      var acted = kugouMiniPlayer.querySelector('.playlist li.act');
      var a = kugouMiniPlayer.querySelectorAll('.playlist li');
      if (acted) {
        if (acted.previousElementSibling) {
          acted.previousElementSibling.click();
        } else {
          a[a.length - 1].click();
        }
      } else {
        a[a.length - 1].click();
      }
    })
    kugouMiniPlayer.querySelector('.m-next').addEventListener('click', function () {
      var acted = kugouMiniPlayer.querySelector('.playlist li.act');
      if (acted) {
        if (acted.nextElementSibling) {
          acted.nextElementSibling.click();
        } else {
          kugouMiniPlayer.querySelectorAll('.playlist li')[0].click();
        }
      } else {
        kugouMiniPlayer.querySelectorAll('.playlist li')[0].click();
      }
    })
    
    audio.onplay = function () {
      playbtn.querySelector('i').classList.add('bi-pause');
      playbtn.querySelector('i').classList.remove('bi-play-fill');
      musicImg.classList.add('playing');
    }
    audio.onpause = function () {
      playbtn.querySelector('i').classList.remove('bi-pause');
      musicImg.classList.remove('playing');
      playbtn.querySelector('i').classList.add('bi-play-fill');
    }
    var tdrange = false;
    audio.ontimeupdate = function () {
      var mstime = audio.currentTime;
      var nowa = 0;
      for (var i = 0; i < oLRC.ms.length; i++) {
          try {
              if (parseFloat(oLRC.ms[i].t) <= mstime && parseFloat(oLRC.ms[i + 1].t) > mstime) {
                  nowa = i;
                  break;
              }
          } catch (error) {
              if (parseFloat(oLRC.ms[i].t) <= mstime) {
                  nowa = i;
                  break;
              }
          }
      }
      nowc = nowa;
      kugouMiniPlayer.querySelector('.lyric').innerText= oLRC.ms[nowc].c||'没有歌词';
      if (tdrange) return;
      musicRange.value = audio.currentTime / audio.duration * 100;
    }
    musicRange.onchange = function () {
      audio.currentTime = parseInt(this.value) / 100 * audio.duration;
    }
    musicRange.onmousedown = function () {
      tdrange = true;
      document.onmouseup = function () {
        document.onmouseup = null;
        tdrange = false;
      }
    }
    musicRange.ontouchstart = function () {
      tdrange = true;
      document.ontouchend = function () {
        document.ontouchend = null;
        tdrange = false;
      }
    }
    soundRange.oninput = function () {
      audio.volume = parseInt(this.value) / 100;
    }
    audio.onended = function () {
      kugouMiniPlayer.querySelector('.m-next').click();
    }
    audio.oncanplay = function () {
      audio.play();
    }
    playbtn.addEventListener('click', function () {
      audio.paused ? audio.play() : audio.pause();
    })
    var oLRC = {
      ti: "", 
      ar: "", 
      al: "", 
      by: "", 
      offset: 0, 
      ms: [] 
    };
    var nowc=0;
    function playMusic(hash, albumid,musicUrl) {
      getjsonp('https://wwwapi.kugou.com/yy/index.php?r=play/getdata&hash=' + hash + '&dfid=2mScsJ16ucV81qLdzD238ELf&appid=1014&mid=1b211caf58cd1e1fdfea5a4657cc21f5&platid=4&album_id=' + albumid + '&_=' + Date.now(), function (a) {
        musicImg.src = a.data.img;
        musicName.innerHTML = a.data.audio_name;
        yccl(musicName);
        musicAlbum.innerHTML = a.data.album_name;
        audio.src = musicUrl||a.data.play_url;
        oLRC = {
          ti: "", 
          ar: "", 
          al: "", 
          by: "", 
          offset: 0, 
          ms: [] 
        };
        createLrcObj(a.data.lyrics);
      })
    }
    function createLrcObj(lrc) {
      if (lrc.length == 0) return;
      var lrcs = lrc.split('\n');
      for (var i in lrcs) {
          lrcs[i] = lrcs[i].replace(/(^\s*)|(\s*$)/g, "");
          var t = lrcs[i].substring(lrcs[i].indexOf("[") + 1, lrcs[i].indexOf("]"));
          var s = t.split(":");
          if (isNaN(parseInt(s[0]))) {
              for (var i in oLRC) {
                  if (i != "ms" && i == s[0].toLowerCase()) {
                      oLRC[i] = s[1];
                  }
              }
          } else {
              var arr = lrcs[i].match(/\[(\d+:.+?)\]/g);
              var start = 0;
              for (var k in arr) {
                  start += arr[k].length;
              }
              var content = lrcs[i].substring(start);
              for (var k in arr) {
                  var t = arr[k].substring(1, arr[k].length - 1);
                  var s = t.split(":");
                  oLRC.ms.push({
                      t: (parseFloat(s[0]) * 60 + parseFloat(s[1])).toFixed(3),
                      c: content
                  });
              }
          }
      }
      oLRC.ms.sort(function(a, b) {
          return a.t - b.t;
      });
  }
    function getjsonp(url, cl) {
      var funcname = 'funcjsonp' + parseInt(Math.random() * 1000) + Date.now();
      var onload = cl;
      window[funcname] = function (json) {
        onload(json);
        delete window[funcname];
      }
      var s = document.createElement('script');
      s.src = url + '&callback=' + funcname;
      document.body.append(s);
      s.onload = function () {
        s.remove();
        s = null;
      }
    }
    var ycclinter = null;
    function yccl(ele) {
      clearInterval(ycclinter);
      ele.style.overflow = 'scroll';
      if (ele.scrollWidth > ele.clientWidth) {
        ele.innerText += ' \t \t \t ';
        ele.style.overflow = 'hidden';
        ycclinter = setInterval(function () {
          var h = ele.innerHTML;
          ele.innerHTML = h.substring(1, h.length) + h[0];
        }, 1000);
      } else {
        ele.style.overflow = 'hidden';
      }
    }
    musicImg.addEventListener('error',function(){
      this.src=xximgurl;
    })
    musicImg.addEventListener('click',function(){
      if(window.getComputedStyle(kugouMiniPlayer.querySelector('.lyric')).display=='flex'){
        kugouMiniPlayer.querySelector('.lyric').style.display='none';
      }else{
        kugouMiniPlayer.querySelector('.lyric').style.display='flex';
      }
    })
  }
}

document.addEventListener('click', function () {
  document.querySelectorAll('kugou-mini .playlist').forEach(function (p) {
    p.classList.remove('act');
  })
  document.querySelectorAll('kugou-mini .sound-frame').forEach(function (p) {
    p.classList.remove('act');
  })
})
