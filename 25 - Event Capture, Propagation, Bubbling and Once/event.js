const divs = document.querySelectorAll('div');

const logText = e => {
    console.log(e.currentTarget.classList.value);
    e.stopPropagation();
}

divs.forEach(item => item.addEventListener('click', e => logText(e), {
    capture: true,
    once: true
}));