const hero = document.querySelector('.hero');
const text = document.querySelector('h1');

const handleMove = (e) => {
    // console.log(e);
    // let x = e.offsetX;
    // let y = e.offsetY;
    let { offsetX: x, offsetY: y } = e;
    let { offsetWidth: width, offsetHeight: height } = hero;

    if (e.target !== e.currentTarget) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const walk = 100;
    const xWalk = (x / width * walk) - (walk / 2); 
    const yWalk = (y / height * walk) - (walk / 2); 
    text.style.textShadow = `${xWalk}px ${yWalk}px 1px #ff0000`
}

hero.addEventListener('mousemove', (e) => {
    handleMove(e);
})
