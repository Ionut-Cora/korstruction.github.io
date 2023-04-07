
const galleryPagePictures = [
    {
        image: './images/g1.jpg'
    },
    {
        image: './images/g2.jpg'
    },
    {
        image: './images/g3.jpg'
    },
    {
        image: './images/g4.jpg'
    },
    {
        image: './images/g5.jpg'
    },
    {
        image: './images/g6.jpg'
    },
    {
        image: './images/g7.jpg'
    },
    {
        image: './images/g8.jpg'
    },
    {
        image: './images/g9.jpg'
    },
    {
        image: './images/g10.jpg'
    },
];

const galleryPageDonePictures = [
    {
        image: './images/d1.jpg'
    },
    {
        image: './images/d2.jpg'
    },
    {
        image: './images/d3.jpg'
    },
    {
        image: './images/d4.jpg'
    },
    {
        image: './images/d5.jpg'
    },
    {
        image: './images/d6.jpg'
    },
    {
        image: './images/d7.jpg'
    },
    {
        image: './images/d8.jpg'
    }
];

const galleryPageCard = document.getElementById('gallery-page-card');

galleryPagePictures.forEach(galleryPagePicture => {
    galleryPageCard.innerHTML += `
        <img src="${galleryPagePicture.image}">
    `
});

const galleryPageDone = document.getElementById('gallery-page-done');

galleryPageDonePictures.forEach(galleryPageDonePicture => {
    galleryPageDone.innerHTML += `
        <img src="${galleryPageDonePicture.image}">
    `
});
