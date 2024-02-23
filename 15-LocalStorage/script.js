const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

// console.log(items);

function addItem(e) {
    e.preventDefault();
    const itemName = this.querySelector('[name=item]').value;
    const item = {
        text: itemName,
        done: false
    };
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    console.log("item added", items);
    this.reset();
}

function populateList(plates = [], platesList) {
    const listItem = plates.map((plate, i) => {
        return `
            <li>
                <input id="item${i}" type="checkbox" ${plate.done ? 'checked' : ""} data-index=${1} />
                <label for="item${i}">${plate.text}</label>
            </li>
        `;
    });

    platesList.innerHTML = listItem.join("");
    console.log("list populated");
}

function toggleDone(e) {
    if (!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

populateList(items, itemsList);

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);