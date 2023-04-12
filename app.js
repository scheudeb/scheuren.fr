//Gestion du mode Dark
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const btnToggle = document.querySelector('.btn_toggle');

    if (body.classList.contains('dark')) {
        btnToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else if (body.classList.contains('light')) {
        btnToggle.innerHTML = '<i class= "fa-solid fa-moon"></i>';
    }

    btnToggle.addEventListener('click', () => {
        if (body.classList.contains('dark')) {
            body.classList.add('light')
            body.classList.remove('dark')
            btnToggle.innerHTML = '<i class="fa-solid fa-moon"></i>'
        } else if (body.classList.contains('light')) {
            body.classList.add('dark')
            body.classList.remove('light')
            btnToggle.innerHTML = '<i class= "fa-solid fa-sun"></i>'
        }
    });
});