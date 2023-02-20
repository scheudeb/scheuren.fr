document.addEventListener('DOMContentLoaded', () => {
    const btnToggle = document.querySelector('.btn_toggle');
    btnToggle.addEventListener('click', () => {
        const body = document.body;

        if (body.classList.contains('dark')) {
            body.classList.add('light')
            body.classList.remove('dark')
            btnToggle.innerHTML = "Mode nuit"
        } else if (body.classList.contains('light')) {
            body.classList.add('dark')
            body.classList.remove('light')
            btnToggle.innerHTML = "Mode jour"

        }
    });
});