const r = document.querySelector(':root');
const spacing = document.querySelector('#spacing');
const blur = document.querySelector('#blur');
const base = document.querySelector('#base');

spacing.addEventListener('input', (e) => {
    r.style.setProperty('--spacing', `${e.target.value}px`)
})

blur.addEventListener('input', (e) => {
    r.style.setProperty('--blur', `${e.target.value}px`)
})

base.addEventListener('input', (e) => {
    r.style.setProperty('--base', e.target.value)
})