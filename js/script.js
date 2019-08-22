const audio = document.querySelectorAll('.audio');
const trackList = document.querySelectorAll('.track-list li')
const button = document.querySelector('.checkbox');

var trackIndex;

  trackList.forEach((active, index)=>{
    active.addEventListener('click', function(){
      trackList.forEach((track)=>{
        track.classList.remove("active-track")
      });
      event.target.className = "active-track";
      trackIndex = index;
    });
  });


  function musicPlay(){
    if(button.checked){
      audio[trackIndex].play();
    }
    else {
      audio[trackIndex].pause();
    }
  }
      
console.log(audio[0].duration)