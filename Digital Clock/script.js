const h1Hour = document.querySelector("#hour");
const h1Minute = document.querySelector("#minute");
const h1Second = document.querySelector("#second");
const content = document.querySelectorAll(".content");
const box = document.querySelectorAll(".box");
const toggleButton = document.querySelector("i")
const p = document.querySelector("#ampm");
const day = document.querySelector("#day");

function timeupdate() {
  const now = new Date(); 
  let hours = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  const dayNumber = now.getDay();

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const dayName = dayNames[dayNumber];

  //Updating the html using the above fn
  day.textContent = dayName;

  //Determine AM/PM
  const isAM = hours < 12;
  const ampm = isAM ? "AM" : "PM";
  p.textContent = ampm;

  //Conversion of 24 hr format to 12
  hours = hours % 12;
  if (hours === 0){
    hours = 12;
  }

  h1Hour.textContent = hours;
  h1Minute.textContent = minute;
  h1Second.textContent = second;
  // Ensure two digits
  h1Hour.textContent = hours.toString().padStart(2, "0");  
  h1Minute.textContent = minute.toString().padStart(2, "0"); 
  h1Second.textContent = second.toString().padStart(2, "0"); 

}

function night() {
    toggleButton.addEventListener("click", ()=> {
      const isNightMode = content[0].classList.contains("nightcontainer");
      if(isNightMode) {
        content.forEach(test=> {
          test.classList.remove("nightcontainer");
        })
        box.forEach(boxes => {
          boxes.classList.remove("nightbox")
        })
      } else {
        content.forEach(test=> {
          test.classList.add("nightcontainer");
        })
        box.forEach(boxes => {
          boxes.classList.add("nightbox")
        })
      }
        
    })
}
setInterval(timeupdate, 1000);
night();
