const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

const addItem = e => {
    e.preventDefault();
    const text = e.currentTarget.querySelector('[name=item').value;
    const item = {
        text,
        done: false
    }

    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    e.currentTarget.reset();
    console.log(item);
}

const populateList = (plates = [], platesList) => {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked': ''}/>
                <label for="item${i}">${plate.text}</label>
            </li>
        `;
    }).join('');
}

const toggleDone = e => {
    if (!e.target.matches('input')) return;
    const el = e.target;

    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

addItems.addEventListener('submit', e => addItem(e));
itemsList.addEventListener('click', e => toggleDone(e));

populateList(items, itemsList);