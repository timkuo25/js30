const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const data = [];
// fetch(endpoint)
//     .then(res => res.json())
//     .then(cities => data.push(...cities));

const getData = async (url) => {
    const res = await fetch(url);
    const cities = await res.json();
    data.push(...cities);
}

const findMatches = (wordToMatch, data) => {
    return data.filter(item => {
        const reg = new RegExp(wordToMatch, 'gi');
        return item.city.match(reg) || item.state.match(reg);
    });
}
getData(endpoint);

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('keyup', (e) => {
    const matchArray = findMatches(e.target.value, data);
    const html = matchArray.map(place => {
        const regex = new RegExp(e.target.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${e.target.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${e.target.value}</span>`);
        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${place.population}</span>
            </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
});