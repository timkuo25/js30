const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

const handleEnter = (e) => {
    const eCur = e.currentTarget;
    eCur.classList.add('trigger-enter');
    setTimeout(() => {
        if (eCur.classList.contains('trigger-enter')) {
            eCur.classList.add('trigger-enter-active')
        }
    }, 150);
    background.classList.add('open');

    const dropdown = eCur.querySelector('.dropdown');
    // console.log(dropdown);
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    }

    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);

}

const handleLeave = (e) => {
    e.currentTarget.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseover', e => handleEnter(e)));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', e => handleLeave(e)));