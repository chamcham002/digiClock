const now = new Date();
const hour = now.getHours();
const body = document.querySelector('body');


function updateClock(){
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);
  const timeString = `${hours}:${minutes}:${seconds}`;

  document.getElementById("clock").textContent = timeString;
}

function changeBg(){

  if(hour <= 6){
    body.style.backgroundImage = "url(bluehour.jpg)";
  }
  else if(hour <= 7){
    body.style.backgroundImage = "url(sunrise.jpg)";
  }
  else if(hour <= 17){
    body.style.backgroundImage = "url(370973.jpg)";
  }
  else if(hour === 18){
    body.style.backgroundImage = "url(sunset.jpg)";
  }
  else if(hour === 19){
    body.style.backgroundImage = "url(bluehour.jpg)";
  }
  else if(hour >= 20){
    body.style.backgroundImage = "url(darkness.jpg)";
  }
}

updateClock();
changeBg();
setInterval(updateClock, 1000);
