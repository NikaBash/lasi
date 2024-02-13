function birthdayCountdown() {
    const birthdayDate = new Date("April 12, 2024 12:00");
    const now = new Date();
    const diff = birthdayDate - now;

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 *60 * 60 * 1000;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay)/msInHour);
    document.querySelector(".hours").textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour)/msInMinute);
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute)/msInSecond);
    document.querySelector(".seconds").textContent = displaySecond;

    if(diff <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timerID);
        finallyBirthday()
        finallyPhoto()
    }
}

let timerID = setInterval(birthdayCountdown, 1000);

function finallyBirthday() {
    const heading = document.querySelector("h1");
    heading.textContent = "Happy birthday Lasi!";
    heading.classList.add("yellow");
}

function finallyPhoto() {
    const imag = document.querySelector("body");
    imag.classList.add("photo");
}

const button = document.querySelector("#myButton");
const audio = document.querySelector("#myAudio");

button.addEventListener("click", function(){
    if (audio.paused) {
        audio.play();
        button.classList.toggle("pause");
    }
    else {
        audio.pause();
        button.classList.toggle("pause");
    }
})
