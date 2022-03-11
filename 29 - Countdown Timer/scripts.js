let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');



const timer = seconds => {
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        if (secondsLeft < 0){
            clearInterval(countdown);
            return;
        }

        displayTimeLeft(secondsLeft);
    }, 1000);
}

const displayTimeLeft = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timerDisplay.textContent = display;
}

const displayEndTime = timestamp => {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At ${hour > 12 ? hour - 12 : hour}:${minutes < 10 ? '0' : '' }`;
    
}

const startTimer = e => {
    const seconds = parseInt(e.currentTarget.dataset.time);
    timer(seconds);

}

buttons.forEach(button => button.addEventListener('click', e => startTimer(e)));
document.customForm.addEventListener('submit', e => {
    e.preventDefault();
    const mins = e.currentTarget.minutes.value;
    timer(mins * 60);
    e.currentTarget.reset();
})