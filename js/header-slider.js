
// COLORS VARIABLES
const fifthColor = '#A0937D';

const picture1 = document.querySelector('.picture1');
const picture2 = document.querySelector('.picture2');
const picture3 = document.querySelector('.picture3');

const prev = document.getElementById('prev');
const next = document.getElementById('next');

const pic1 = document.getElementById('pic1');
const pic2 = document.getElementById('pic2');
const pic3 = document.getElementById('pic3');

function handlePics1() {
    pic1.style.backgroundColor = "#fff";
    pic2.style.backgroundColor = fifthColor;
    pic3.style.backgroundColor = fifthColor;
}

function handlePics2() {
    pic2.style.backgroundColor = "#fff";
    pic1.style.backgroundColor = fifthColor;
    pic3.style.backgroundColor = fifthColor;
}

function handlePics3() {
    pic3.style.backgroundColor = "#fff";
    pic1.style.backgroundColor = fifthColor;
    pic2.style.backgroundColor = fifthColor;
}

function handleDesign() {
    if (picture1.classList.contains('active')) {
        picture1.classList.remove('active');
        picture2.classList.add('active');
        handlePics2();
    } else if (picture2.classList.contains('active')) {
        picture2.classList.remove('active');
        picture3.classList.add('active');
        handlePics3();
    } else {
        picture3.classList.remove('active');
        picture1.classList.add('active');
        handlePics1();
    }
}

let refreshInterval;

refreshInterval = setInterval(function() {
    handleDesign();
}, 7000);

prev.addEventListener('click', (event) => {
    event.preventDefault();

    if (picture1.classList.contains('active')) {
        picture1.classList.remove('active');
        picture3.classList.add('active');
        handlePics2();
    } else if (picture3.classList.contains('active')) {
        picture3.classList.remove('active');
        picture2.classList.add('active');
        handlePics3
    } else {
        picture2.classList.remove('active');
        picture1.classList.add('active');
        handlePics1();
    }
});

next.addEventListener('click', (event) => {
    event.preventDefault();
    handleDesign();
});

pic1.addEventListener('click', () => {
    picture2.classList.remove('active');
    picture3.classList.remove('active');
    picture1.classList.add('active');
    handlePics1()
});

pic2.addEventListener('click', () => {
    picture1.classList.remove('active');
    picture3.classList.remove('active');
    picture2.classList.add('active');
    handlePics2();
});

pic3.addEventListener('click', () => {
    picture1.classList.remove('active');
    picture2.classList.remove('active');
    picture3.classList.add('active');
    handlePics3();
});
