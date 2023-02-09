function addItem() {
    let text = document.getElementById('newItemText').value;
    let li = document.createElement('li');

    li.textContent = text;

    let list = document.getElementById('items');

    list.appendChild(li)

}