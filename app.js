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
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.slideshow_container');
    let holding = false;
    let firstClickX;
    let alreadyLeftScrolled;
    let velocity;
    let rafID;

    slider.addEventListener('mousedown', e => {
        holding = true;
        firstClickX = e.pageX - slider.offsetLeft;
        alreadyLeftScrolled = slider.scrollLeft;
        stopTransition()
    });


    slider.addEventListener('mousemove', e => {
        if (!holding) return;

        const x = e.pageX - slider.offsetLeft;

        const scrolled = (x - firstClickX) * 2;

        const prevScollLeft = slider.scrollLeft;

        slider.scrollLeft = alreadyLeftScrolled - scrolled;

        velocity = slider.scrollLeft - prevScollLeft;
    });

    slider.addEventListener('mouseup', () => {
        holding = false;
        starTransition()
    })

    slider.addEventListener('mouseleave', () => {
        holding = false;
    })

    function starTransition() {
        stopTransition();
        rafID = requestAnimationFrame(decreasingTransition);
    }

    function stopTransition() {
        cancelAnimationFrame(rafID);
    }

    function decreasingTransition() {
        slider.scrollLeft += velocity;
        velocity *= 0.95;
        if (Math.abs(velocity) > 0.5) {
            rafID = requestAnimationFrame(decreasingTransition)
        }
    }

    slider.addEventListener('touchstart', e => {
        holding = true;
        firstClickX = e.targetTouches[0].pageX - slider.offsetLeft;

        alreadyLeftScrolled = slider.scrollLeft;
        stopTransition()
    })

    slider.addEventListener('touchend', () => {
        holding = false;
        starTransition()
    })

    slider.addEventListener('touchmove', e => {
        if (!holding) return;

        const x = e.targetTouches[0].pageX - slider.offsetLeft;
        const scrolled = (x - firstClickX) * 2;

        const prevScollLeft = slider.scrollLeft;
        slider.scrollLeft = alreadyLeftScrolled - scrolled;
        velocity = slider.scrollLeft - prevScollLeft;
    })
});
