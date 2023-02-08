function create(input) {
  // let parentElement = document.getElementById("content");
  // let elements = input;

  // for (let i = 0; i < elements.length; i++) {
  //   let div = document.createElement("div");
  //   let p = document.createElement("p");
  //   let text = document.createTextNode(elements[i]);

  //   p.appendChild(text);

  //   p.style.display = "none";
  //   div.appendChild(p);

  //   div.addEventListener("click", (e) => {
  //       e.currentTarget.children[0].style.display = 'block'
  //   });

  //   parentElement.appendChild(div);
  // }


    const parentElement = document.getElementById('content');
    input.forEach((element) => {
        const div = document.createElement('div');
        const p = document.createElement('p');
        p.textContent = element;
        p.style.display = 'none';
        div.appendChild(p);
        div.addEventListener('click', (event) => {
            event.target.querySelector('p').style.display = 'block'
        });
        parentElement.appendChild(div)
    });


}
