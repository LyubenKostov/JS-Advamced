function deleteByEmail() {
    // read input value 
     const query = document.querySelector('input[name="email"]').value;

    // get all rows
    const rows = document.querySelectorAll('#customers tbody tr');
    // iterate riws and compare content to input
    let deleted = false;
    const rowsArr = Array.from(rows);
    for(let row of rowsArr){

        const col = row.children[1];
        // remove matching row 
        if(col.textContent == query){
            row.remove();
            deleted = true;
        }
    }
    document.getElementById('result').textContent = deleted ? 'Deleted.' : 'Not found.';
}