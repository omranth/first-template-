// start navbar
let iconNav = document.querySelector('.parent .icon');
let sideBar = document.querySelector('.parent nav ')
let exit = document.querySelector('.parent nav svg')

window.addEventListener('resize', () => {

    if (getComputedStyle(sideBar).width !== '0px') {
        if (innerWidth < 350) {
            resizePhoneSmale()

        } else if (innerWidth <= 735) {
            resizePhone()

        } else if (innerWidth > 735) {
            resizeLage()
        }
    }

});

document.body.addEventListener('click', (e) => {

    if (e.target.id === 'exit') {
        hidingSidBar()
    } else if (e.target !== 'undefined' && e.target.classList[0] === 'icon' || e.target.classList[0] === 'nav' || e.target.parentNode.classList[0] === 'nav' || e.target.parentNode.parentNode.classList[0] === 'nav') {
        if (innerWidth < 350) {
            resizePhoneSmale()

        } else if (innerWidth <= 735) {
            resizePhone()

        } else if (innerWidth > 735) {
            resizeLage()
        }
    } else {
        hidingSidBar()
    }
})

exit.addEventListener('click', () => {
    hidingSidBar()
})

function resizePhoneSmale() {
    sideBar.style.transition = 'all 0.5s ease';
    sideBar.style.width = '100vw';
    sideBar.style.height = '100vh';
    sideBar.style.display = 'flex';
}
function resizePhone() {
    sideBar.style.transition = 'all 0.5s ease';
    sideBar.style.width = '60vw';
    sideBar.style.height = '100vh';
    sideBar.style.display = 'flex';
}
function resizeLage() {
    sideBar.style.transition = 'all 0.5s ease';
    sideBar.style.width = '35vw';
    sideBar.style.height = '100vh';
    sideBar.style.display = 'flex';
}
function hidingSidBar() {
    // sideBar.style.transition = 'all 0.5s ease';
    sideBar.style.width = '0';
    sideBar.style.height = '0';
    sideBar.style.transition = 'height 0.8s ease';
    sideBar.style.transition = 'width 0.5s ease';
}
//---------------- start Up --------------------//
let Up = document.querySelector(".up");
// window.addEventListener('scroll', () => {
//     if (scrollY >= 120) {
//         Up.style.display = 'block';
//     } else {
//         Up.style.display = 'none';
//     }
// })

// window.addEventListener('scroll', () => {
//     if (scrollY >= 120) {
//         Up.style.display = 'block';
//     } else {
//         Up.style.display = 'none';
//     }
// })


Up.addEventListener('click', () => {
    // window.scrollTo(0, 3.5016836085463745) // shmooth time 4s
    smoothScrollToTop(3300); // 4000ms (4 seconds) for smooth scroll

    Up.style.animationName = 'none';

    void Up.offsetWidth;

    Up.style.animationName = 'position';

    function smoothScrollToTop(duration) {

        const start = window.scrollY;

        const startTime = performance.now();

        function scrollStep(timestamp) { //+ 16.6 + time 

            const currentTime = timestamp - startTime; // step[1] == 16.6

            const progress = Math.min(currentTime / duration, 1);

            console.log(progress + currentTime);

            console.log(duration + duration);

            window.scrollTo(0, start * (1 - progress)); // 16.6 + 16 + 16ms 

            if (currentTime < duration) {

                window.requestAnimationFrame(scrollStep);

            }
        }

        window.requestAnimationFrame(scrollStep);// 
    }
})
//---------------- start Up --------------------//



//start ------------------show side bar -------------//
let show = document.querySelectorAll('.portfolio .container .content-portfolio .show')
let but = document.querySelector('.portfolio .container .Show a')
but.addEventListener('click', () => {
    show.forEach((item) => {
        item.classList.toggle('visible')
    })
})
//end ------------------show side bar -------------//