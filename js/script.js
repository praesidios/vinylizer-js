const audio = document.querySelector('audio');
const button = document.querySelector('.checkbox');
const vynilizer = document.querySelector('.vynilizer');
const disk = document.querySelector('.vinyl-record');
const trackList = [
  {
    src: "./audio/Dead by April – Losing You.mp3",
    name: "Dead by April – Losing You"
  },
  {
    src: "./audio/Lana Del Rey –  Art Deco.mp3",
    name: "Lana Del Rey –  Art Deco"
  },
  {
    src: "./audio/Lana Del Rey – Summertime Sadness.mp3",
    name: "Lana Del Rey – Summertime Sadness"
  },
  {
    src: "./audio/Red Hot Chili Peppers -  Dani California.mp3",
    name: "Red Hot Chili Peppers -  Dani California"
  },
  {
    src: "./audio/Royal Blood - Little Monster.mp3",
    name: "Royal Blood - Little Monster"
  },
  {
    src: "./audio/The Neighbourhood - Sweater Weather.mp3",
    name: "The Neighbourhood - Sweater Weather"
  }
];


const ul = document.createElement('ul');
ul.className = "track-list";
vynilizer.appendChild(ul);

const list = trackList.map((track, index)=>{
  let li = document.createElement('li');
  li.className = "track"; 
  li.textContent = track.name;
  ul.appendChild(li);



  li.addEventListener('click', function(){
    list.map(track => {
      track.classList.remove("active-track");
      trackIndex = index;
    });
    li.className = "active-track";
    audio.src = track.src;
    if(button.checked){
      audio.play();
    }
  });

  return li;
});



function musicPlay(){
  if(button.checked){
    audio.play();
    diskRotate(true);
  }
  else {
    audio.pause();
    diskRotate(false);
  }
}



const diskRotate = (status) =>{
  if(status){
    disk.style.animation = "move 2.5s infinite linear";
  }
  else{
    disk.style.animation = "move 2.5s linear";
  }
}