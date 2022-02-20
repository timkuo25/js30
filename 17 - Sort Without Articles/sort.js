const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const strip = bandName => {
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

const sorted = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

console.log(sorted);
document.querySelector('#bands').innerHTML =
    sorted
        .map(band => `<li>${band}</li>`)
        .join('')