const box = document.querySelector(".box");
let audio = document.querySelector("audio");
let h1 = document.querySelector("h1")

const name = prompt("enter your name : ")
box.innerText = `${name} click karo`
box.addEventListener("click", () => {



  box.classList.toggle("active");
  if (box.classList.contains("active")) {
    box.innerText = `happy holi ${name}`;
    audio.play();
    
  } else {
    box.innerText = `${name} click kar`;
    audio.pause();
    audio.currentTime = 0;
  } 

  audio.addEventListener("ended",()=>{
    audio.currentTime=0;
    audio.play();

    
  })
  
});
