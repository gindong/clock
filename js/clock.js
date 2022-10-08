const clockDate = document.querySelector("#clock-date");
const clockTime = document.querySelector("#clock-time");

function getClock() {
    const date = new Date();
   
    const year = String(date.getFullYear());
    const month = String(date.getMonth()).padStart(2,"0");
    const day = String(date.getDay()).padStart(2,"0");    

    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clockDate.innerText = `${year}.${month}.${day}`;
    clockTime.innerText = `${hours}:${minutes}:${seconds}`;
}
setInterval(getClock, 1000);

