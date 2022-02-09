const panels = document.querySelectorAll('.panel');

// function toggleOpen() {
//     this.classList.toggle('open');
// }

// function toggleActive(e) {
//     if (e.propertyName.includes('flex')){
//         this.classList.toggle('open-active');
//     }
// }

// panels.forEach(item => item.addEventListener('click', toggleOpen));
// panels.forEach(item => item.addEventListener('transitionend', toggleActive));

panels.forEach(item => item.addEventListener('click', (e) => {
    // console.log(e); //null
    e.currentTarget.classList.toggle('open');
}));

panels.forEach(item => item.addEventListener('transitionend', (e) => {
    if (e.propertyName.includes('flex')){
        e.currentTarget.classList.toggle('open-active');
    }
}));

