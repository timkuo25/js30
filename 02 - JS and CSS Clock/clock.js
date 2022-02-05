const sec_hand = document.querySelector('.second-hand');
const min_hand = document.querySelector('.min-hand');
const hr_hand = document.querySelector('.hour-hand');

setInterval(() => {
    const date = new Date();
    const sec = date.getSeconds();
    const min = date.getMinutes();
    const hr = date.getHours();

    sec_hand.style.transition = (sec !== 45) ? "transform 0.05s" : "";
    min_hand.style.transition = (min !== 45) ? "transform 0.05s" : "";
    hr_hand.style.transition = (hr !== 9) ? "transform 0.05s" : "";

    sec_hand.style.transform = `rotate(${(90 + (sec) * 6) % 360}deg)`;
    min_hand.style.transform = `rotate(${(90 + min * 6) % 360}deg)`;
    hr_hand.style.transform = `rotate(${(90 + hr * 30) % 360}deg)`;

}, 1000)
