function lockedProfile() {
    // Array.from(document.querySelectorAll(".profile button")).forEach((button) =>
    //   button.addEventListener("click", onClick)
    // );

    // function onClick(event) {
    //   let profile = event.target.parentElement;
    //   let isActive = profile.querySelector('input[value="unlock"]').checked;

    //   if (isActive) {
    //     let info = Array.from(profile.querySelectorAll("div")).find((p) =>
    //       p.id.includes("HiddenFields")
    //     );

    //     if (event.target.textContent === "Show more") {
    //       event.target.textContent = "Hide it";
    //       info.style.display = "block";
    //     } else {
    //       event.target.textContent = "Show more";
    //       info.style.display = "none";
    //     }
    //   }
    // }

    Array.from(document.querySelectorAll('.profile button')).forEach((button) => {
        button.addEventListener('click', onCLick);
    })

    function onCLick(event) {
        const parent = event.target.parentElement;
        const unlockedCheck = parent.querySelector('input[value="unlock"]');
        if (unlockedCheck.checked) {
            const hidenDiv = parent.querySelector('div');
            hidenDiv.style.display === 'block'
                ? (hidenDiv.style.display = 'none')
                : (hidenDiv.style.display = 'block');

            event.target.textContent === "Show more"
                ? (event.target.textContent = "Hide it")
                : (event.target.textContent = "Show more");
        }
    }

}
