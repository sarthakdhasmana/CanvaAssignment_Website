// animation for Count-down
const countDown = () => {
    const countDate = new Date("February 24, 2022 00:00:00");
    const now = new Date().getTime();
    const gap = countDate - now;

    //timings
    const seconds = 1000;
    const minutes = seconds * 60;
    const hour = minutes * 60;
    const day = hour * 24;

    //calculation
    const date = Math.floor(gap / day);
    const hr_ = Math.floor((gap % day) / hour);
    const min_ = Math.floor((gap % hour) / minutes);
    const sec_ = Math.floor((gap % minutes) / seconds);

    document.querySelector('.days').innerText = date
    document.querySelector('.hour').innerText = hr_
    document.querySelector('.minutes').innerText = min_
    document.querySelector('.seconds').innerText = sec_
}
setInterval(countDown, 1000);

// animation for the hero-section
const phoneArea = document.querySelector('.hero_right-section');
const phoneMove1 = document.querySelector('.phone-illustration-1');
const phoneMove2 = document.querySelector('.phone-illustration-2');

phoneArea.addEventListener('mousemove', e => {
    phoneArea.style.transition = 'all 0.5s ease-in-out';
    phoneMove1.classList.add('active');
    phoneMove2.classList.add('active');
})
phoneArea.addEventListener('mouseleave', e => {
    phoneArea.style.transition = 'none';
    phoneMove1.classList.remove('active');
    phoneMove2.classList.remove('active');
})


