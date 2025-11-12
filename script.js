//Menu Hamburguesa
const hamburger = document.getElementById('hamburger');
const closeIcon = document.getElementById('closeIcon');
const menu = document.getElementById('menu-items');

// Abrir menú
hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    hamburger.classList.add('hidden');
    closeIcon.classList.remove('hidden');
});

// Cerrar menú
closeIcon.addEventListener('click', () => {
    menu.classList.remove('active');
    hamburger.classList.remove('hidden');
    closeIcon.classList.add('hidden');
});

// Cerrar menú al hacer clic en un enlace
const links = menu.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        hamburger.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    });
});



/* TABS */
const choiceArray = document.querySelectorAll(".choice")

choiceArray.forEach((card) => {
    card.addEventListener("click", () => {
        choiceArray.forEach((element) => {
            element.classList.remove("expand", "unset")
            element.classList.add('small')
        })
        card.classList.remove("small")
        card.classList.add('expand')
    });
});

//CAMBIO DE IDIOMAS
const langButtons = document.querySelectorAll("[data-language]");
const textsToChange = document.querySelectorAll("[data-section]");

langButtons.forEach((button) => {
    button.addEventListener("click", () => {
        fetch(`../languages/${button.dataset.language}.json`)
            .then(res => res.json())
            .then(data => {
                textsToChange.forEach((el) => {
                    const section = el.dataset.section;
                    const value = el.dataset.value;
                })
            })
    })
})