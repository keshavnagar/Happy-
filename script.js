const box = document.querySelector(".box");
let audio = document.querySelector("audio");
let h1 = document.querySelector("h1")
box.addEventListener("click", () => {



  box.classList.toggle("active");
  if (box.classList.contains("active")) {
    box.innerText = "Happy Holi";
    audio.play();
    
  } else {
    box.innerText = "manoj  click kar";
    audio.pause();
    audio.currentTime = 0;
  } 

  audio.addEventListener("ended",()=>{
    audio.currentTime=0;
    audio.play();

    
  })
  
});
