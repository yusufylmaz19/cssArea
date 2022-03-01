const video=document.getElementById("video");

const play=()=>{
  video.play();
}

const pause=()=>{
  video.pause();
}
video.addEventListener('mouseover',play);
video.addEventListener('mouseout',pause);
