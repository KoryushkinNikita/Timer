const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
let hoursLeft = document.getElementById('hoursLeft');
let minutesLeft = document.getElementById('minutesLeft');
let secondsLeft = document.getElementById('secondsLeft');
let intervalID, isActive = false;;

function timerStopped(){
    document.getElementById('endingText').hidden = false;
    hours.innerText = 0;
    minutes.innerText = 0;
    seconds.innerText = 0;
    clearInterval(intervalID);
    isActive = false;
}

function startTimer(){
    document.getElementById('endingText').hidden = true;
    hoursLeft.innerText = hours.innerText;
    minutesLeft.innerText = minutes.innerText;
    secondsLeft.innerText = seconds.innerText;
    isActive = true;
    intervalID = setInterval(timeLeft, 1000);
}

function timeLeft(){
    secondsLeft.innerText = parseInt(secondsLeft.innerText) - 1;
    if (secondsLeft.innerText == 0 && minutesLeft.innerText == 0 && hoursLeft.innerText == 0) {timerStopped(); return;}
    if (secondsLeft.innerText == -1){
        minutesLeft.innerText = parseInt(minutesLeft.innerText) - 1
        if (minutesLeft.innerText == -1){
            if (hoursLeft.innerText == 0) {timerStopped(); return -1;}
            else hoursLeft.innerText = parseInt(hoursLeft.innerText) - 1;
            minutesLeft.innerText = 59;
        }
        secondsLeft.innerText = 59;
    }
}

const checkDec = (time) => parseInt(time) > 0 ? true : false;

document.getElementById('hoursUp').addEventListener('click', function(){
    hours.innerText = parseInt(hours.innerText) + 1;
})

document.getElementById('minutesUp').addEventListener('click', function(){
    minutes.innerText = parseInt(minutes.innerText) + 1;
})
document.getElementById('secondsUp').addEventListener('click', function(){
    seconds.innerText = parseInt(seconds.innerText) + 1;
})
document.getElementById('hoursDown').addEventListener('click', function() {
    if (checkDec(hours.innerText)) hours.innerText = parseInt(hours.innerText) - 1;
})
document.getElementById('minutesDown').addEventListener('click', function() {
    if (checkDec(minutes.innerText)) minutes.innerText = parseInt(minutes.innerText) - 1;
})
document.getElementById('secondsDown').addEventListener('click', function() {
    if (checkDec(seconds.innerText)) seconds.innerText = parseInt(seconds.innerText) - 1;
})

document.getElementById('stopButton').addEventListener('click', function(){
    if (intervalID) clearInterval(intervalID);
    isActive = false;
    document.getElementById('submitButton').innerText = 'continue'
})

document.getElementById('submitButton').addEventListener('click', function(){
    this.style.backgroundColor = 'white';
    setTimeout(() => this.style.backgroundColor = 'inherit', 100);
    if (seconds.innerText == 0 && minutes.innerText == 0 && hours.innerText == 0) {timerStopped();return;}
    if (secondsLeft.innerText == 0 && minutesLeft.innerText == 0 && hoursLeft.innerText == 0) startTimer();
    else if (!isActive) {
        document.getElementById('submitButton').innerText = 'start';
        intervalID = setInterval(timeLeft, 1000);
        isActive = true;
    }
    
})

