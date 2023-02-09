function addItem() {
        let text = document.getElementById('newItemText').value;
        let li = document.createElement('li');
    
        li.textContent = text;

        const delBtn = document.createElement('a');
        delBtn.href = '#';
        delBtn.textContent = '[Delete]';
        li.appendChild(delBtn);
        delBtn.addEventListener('click', () => {
            li.remove();
        })
         
    
        let list = document.getElementById('items');


    
        list.appendChild(li)

}
