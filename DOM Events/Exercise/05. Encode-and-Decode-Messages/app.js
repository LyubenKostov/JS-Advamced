function encodeAndDecodeMessages() {
    const textArea = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');

    buttons[0].addEventListener('click', enCode);
    buttons[1].addEventListener('click', deCode);

    function enCode (){
        let encodedMasage = '';
        const input = textArea[0].value;
        for(let i = 0; i < input.length; i++){
            const element = input[i];
            encodedMasage += String.fromCharCode(element.charCodeAt(0) + 1);
        }
        textArea[1].value = encodedMasage;
        textArea[0].value = '';
    }

    function deCode (){
        let decodedMassage = '';
        const input = textArea[1].value;
        for(let i = 0; i < input.length; i++){
            const element = input[i];
            decodedMassage += String.fromCharCode(element.charCodeAt(0) - 1);
        }
        textArea[1].value = decodedMassage;
    }
    
}