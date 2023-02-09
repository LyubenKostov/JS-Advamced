function focused() {
    const inputs = Array.from(document.querySelectorAll('input'));

    for(let input of inputs){
        input.addEventListener('focus', () => {
            input.parentElement.className = 'focused';
        });
        input.addEventListener('blur', () => {
            input.parentElement.className = '';
        })
    }
}
function focused() {
    const inputs = Array.from(document.querySelectorAll('input'));

    for(let input of inputs){
        input.addEventListener('focus', (event) => {
            event.target.parentElement.className = 'focused';
        });
        input.addEventListener('blur', (event) => {
            event.target.parentElement.className = '';
        })
    }
}