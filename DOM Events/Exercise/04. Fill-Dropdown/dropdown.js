function addItem() {
    // let newtext = document.getElementById('newItemText').value;
    // let newValue = document.getElementById('newItemValue').value;
    // let option = document.createElement('option');
    // option.text = newtext;
    // option.value = newValue;

    // let menu = document.getElementById('menu');
    // if(newtext !== '' && newValue !== ''){

    //     menu.appendChild(option);
    // }
    
    // document.getElementById('newItemText').value = '';
    // document.getElementById('newItemValue').value = '';

    const newText = document.getElementById('newItemText');
    const newValue = document.getElementById('newItemValue');

    const option = document.createElement('option');
    option.textContent = newText.value;
    option.value = newValue.value;

    document.getElementById('menu').appendChild(option);

    newText.value = "";
    newValue.value = "";
}