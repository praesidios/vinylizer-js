const audio = document.querySelector('audio');
const button = document.querySelector('.checkbox');
const trackList = [
  {
    track: "./audio/Dead by April – Losing You.mp3",
    name: "Dead by April – Losing You"
  },
  {
    track: "./audio/Lana Del Rey –  Art Deco.mp3",
    name: "Lana Del Rey –  Art Deco"
  },
  {
    track: "./audio/Lana Del Rey – Summertime Sadness.mp3",
    name: "Lana Del Rey – Summertime Sadness"
  },
  {
    track: "./audio/Red Hot Chili Peppers -  Dani California.mp3",
    name: "Red Hot Chili Peppers -  Dani California"
  },
  {
    track: "./audio/Royal Blood - Little Monster.mp3",
    name: "Royal Blood - Little Monster"
  },
  {
    track: "./audio/The Neighbourhood - Sweater Weather.mp3",
    name: "The Neighbourhood - Sweater Weather"
  }
];



// var trackIndex;

//   trackList.forEach((active, index)=>{
//     active.addEventListener('click', function(){
//       trackList.forEach((track)=>{
//         track.classList.remove("active-track")
//       });
//       event.target.className = "active-track";
//       trackIndex = index;
//     });
//   });


  // function musicPlay(){
  //   if(button.checked){
  //     audio[trackIndex].play();
  //   }
  //   else {
  //     audio[trackIndex].pause();
  //   }
  // }
      