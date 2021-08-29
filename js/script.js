const root = document.getElementById('root');

const galleryPictures = [
    {
        image: './images/g3.jpg'
    },
    {
        image: './images/g4.jpg'
    },
    {
        image: './images/d1.jpg'
    },
    {
        image: './images/d7.jpg'
    }
];

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

// COLORS VARIABLES

const fifthColor = '#A0937D';

window.addEventListener('load', () => {
    root.innerHTML = `
        <nav>
            <ul>
                <li id="home-btn">Home</li>
                <li id="about-btn">About Us</li>
                <li id="gallery-btn">Gallery</li>
                <li id="contact-btn">Contact Us</li>
            </ul>
        </nav>

        <div class="container">

            <div id="top-nav">
                <div id="contacts-top">
                    <div class="phone-card">
                        <ion-icon name="call-outline"></ion-icon>
                        <p>0900 900 900</p>
                    </div>
                    <div class="contacts-card">
                        <ion-icon name="mail-outline"></ion-icon>
                        <ion-icon name="location-outline"></ion-icon>
                        <ion-icon name="logo-instagram"></ion-icon>
                    </div>               
                </div>
                
                <h1 id="logo">Korstruction</h1>
            </div>

            <div id="full-content">
            
                <header>
                
                    <div class="active picture1">
                        <div class="title">
                            <p>Welcome to</p>
                            <h2>Korstruction London</h2>
                            <p class="title-paragraph">Over 50 years experience in the construction industry</p>                  
                        </div>
                        <div class="header-btns">
                            <button class="find-more">Find More</button>
                            <button class="contact-us">Contact Us</button>                      
                        </div>
                    </div>
                    <div class="picture2">
                        <div class="title">
                            <h2>Reinforcement Experts</h2>
                            <p>Steel fixing for the UK</p>                
                        </div>
                        <div class="header-btns">
                            <button class="find-more">Find More</button>
                            <button class="contact-us">Contact Us</button>                      
                        </div>
                    </div>
                    <div class="picture3">
                        <div class="title">
                            <h2>London's leading carpentry & joinery</h2>
                        </div>
                        <div class="header-btns">
                            <button class="find-more">Find More</button>
                            <button class="contact-us">Contact Us</button>                      
                        </div>
                    </div>

                    <button id="prev"><</button>
                    <button id="next">></button>

                    <button id="pic1"></button>
                    <button id="pic2"></button>
                    <button id="pic3"></button>
                </header>

                <div id="content">
                    <div id="about">
                        <h2>About Us</h2>
                        <p>Here at Korstruction London, we have over 50 years experience in the construction industry.</p>
                        <div id="about-cards">
                            <div class="card">
                                <h3>What we do</h3>
                                <p>This company offer the top quality construction services like steel fixing, carpentry & joinery and more.</p>
                            </div>
                            <div class="card">
                                <h3>Our approach</h3>
                                <p>We want to show you, our professionality in maximum safety methods and to work to together with you.</p>
                            </div>
                            <div class="card">
                                <h3>Our mission</h3>
                                <p>Our mission is complete your dream project, in safety, within budget and in to the highest standards.</p>
                            </div>
                        </div>

                        <div class="detail-button-div">
                            <button id="about-button" class="detail-button">More About Us</button>
                        </div>

                        <div class="services-card">
                            <h2>Our Services</h2>
                            <ul>
                                <li><ion-icon name="checkmark-circle-outline"></ion-icon>Steelfixing</li>
                                <li><ion-icon name="checkmark-circle-outline"></ion-icon>Carpentry</li>
                                <li><ion-icon name="checkmark-circle-outline"></ion-icon>Groundwork</li>
                                <li><ion-icon name="checkmark-circle-outline"></ion-icon>Paving</li>
                                <li><ion-icon name="checkmark-circle-outline"></ion-icon>Labouring</li>
                                <li><ion-icon name="checkmark-circle-outline"></ion-icon>Welding</li>
                                <li><ion-icon name="checkmark-circle-outline"></ion-icon>Bricklaying</li>
                                <li><ion-icon name="checkmark-circle-outline"></ion-icon>Painting</li>
                            </ul>                   
                        </div>
                        
                    </div>
                    
                </div>

                <div id="gallery">
                    <h2>Gallery</h2>
                    <div id="gallery-cards"></div>

                    <div class="detail-button-div">
                        <button id="gallery-button" class="detail-button">View Full Gallery</button>
                    </div>
                </div>

                <div id="contact">
                    <h2>Contact Us</h2>
                    <div id="big-contact">
                        <div class="contact-card">
                            <ion-icon name="call-outline"></ion-icon>
                            <p>0900 900 900</p>
                        </div>
                        <div class="contact-card">
                            <ion-icon name="mail-outline"></ion-icon>
                            <p>korstructionlondon@gmail.co.uk</p>                
                        </div>
                        <div class="contact-card">
                            <ion-icon name="location-outline"></ion-icon>
                            <p>1 Central Park Road,<br>
                            London, CL1 1UK<p>
                        </div>
                        <div class="contact-card">
                            <ion-icon name="logo-instagram"></ion-icon>
                            <p>@korstructionlondon</p>
                        </div>              
                    </div>

                    <div class="detail-button-div">
                        <button id="contact-button" class="detail-button">More Contact Details</button>
                    </div>
                </div>

                <footer>
                    <p>&copy; Ionut Cora, 2021</p> 
                </footer>
            </div>
   
        </div>

    `;

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

    setInterval(function() {
        handleDesign();
    }, 10000);

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

    const galleryCards = document.getElementById('gallery-cards');

    galleryPictures.forEach(galleryPicture => {
        galleryCards.innerHTML += `
            <img src="${galleryPicture.image}">
        `
    });

    const logo = document.getElementById('logo');
    const homeBtn = document.getElementById('home-btn');
    const aboutBtn = document.getElementById('about-btn');
    const galleryBtn = document.getElementById('gallery-btn');
    const contactBtn = document.getElementById('contact-btn');
    const fullContent = document.getElementById('full-content');

    // home page btns

    const aboutButton = document.getElementById('about-button');
    const galleryButton = document.getElementById('gallery-button');
    const contactButton = document.getElementById('contact-button');
    let findMoreButtons = document.querySelectorAll('.find-more');
    let contactUsButtons = document.querySelectorAll('.contact-us');

    logo.addEventListener('click', () => {
        location.reload();
    });
    
    homeBtn.addEventListener('click', () => {
        location.reload();
    });

    aboutBtn.addEventListener('click', () => {
        handleAboutPage();
    });

    aboutButton.addEventListener('click', () => {
        handleAboutPage();
    });

    findMoreButtons.forEach(findMoreButton => {
        findMoreButton.addEventListener('click', () => {
            handleAboutPage();
        });
    });

    contactUsButtons.forEach(contactUsButton => {
        contactUsButton.addEventListener('click', () => {
            handleContactPage();
        });
    });

    function handleAboutPage() {
        fullContent.innerHTML = `
                <div id="about-page">
                    <div id="about-content">
                    
                        <h2>About Us</h2>

                        <p class="about-paragraph">
                            We operate in construction industry across Uk over 50 years.<br>
                            Our company offer the top quality construction services like steel fixing, carpentry & joinery and more.
                        </p>
                            
                        <p class="about-paragraph">
                            We want to show you, our professionality in maximum safety methods and to work to together with you.<br>
                            Our mission is complete your dream project, in safety, within budget and in to the highest standards.
                        </p>

                        <p class="about-paragraph">
                            If you have a construction project in your mind or you want to work with us, 
                            please call us on our office phone number 0900 900 900 or visit our contact page and you will find
                            there more contact details.
                        </p>

                        <div class="services-card">
                            <h2>Our Services</h2>
                            <ul>
                                <li><ion-icon name="checkmark-circle-outline"></ion-icon>Steelfixing</li>
                                <li><ion-icon name="checkmark-circle-outline"></ion-icon>Carpentry</li>
                                <li><ion-icon name="checkmark-circle-outline"></ion-icon>Groundwork</li>
                                <li><ion-icon name="checkmark-circle-outline"></ion-icon>Paving</li>
                                <li><ion-icon name="checkmark-circle-outline"></ion-icon>Labouring</li>
                                <li><ion-icon name="checkmark-circle-outline"></ion-icon>Welding</li>
                                <li><ion-icon name="checkmark-circle-outline"></ion-icon>Bricklaying</li>
                                <li><ion-icon name="checkmark-circle-outline"></ion-icon>Painting</li>
                            </ul>                   
                        </div>

                        <div id="testimonials">
                            <h2>Testimonials</h2>
                            <div class="testimonial-card">
                                <p>"We have had a very good experience with Taylor Lane, with great service from start to finish."</p>
                                <h3>John Mille</h3>
                            </div>
                            <div class="testimonial-card">
                                <p>"We work with them from 10 years ago and we appreciate their seriousity."</p>
                                <h3>Billy Moore</h3>
                            </div>
                            <div class="testimonial-card">
                                <p>"Safety and very serious company."</p>
                                <h3>Mark Dave</h3>
                            </div>
                        </div>
                    </div>

                    <footer>
                        <p>&copy; Ionut Cora, 2021</p> 
                    </footer>                          
                </div>
        `;
    }

    galleryBtn.addEventListener('click', () => {
        handleGalleryPage();
    });

    galleryButton.addEventListener('click', () => {
        handleGalleryPage();
    });

    function handleGalleryPage() {
        fullContent.innerHTML = `
                <div id="gallery-page">
                    <h2>Gallery</h2>

                    <h3>Works in progress</h3>

                    <div id="gallery-page-card"></div>

                    <h3>Some done projects</h3>

                    <div id="gallery-page-done"></div>

                    <footer>
                        <p>&copy; Ionut Cora, 2021</p> 
                    </footer>                          
                </div>
        `;

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
    }

    contactBtn.addEventListener('click', () => {
        handleContactPage();
    });

    contactButton.addEventListener('click', () => {
        handleContactPage();
    });

    function handleContactPage() {
        fullContent.innerHTML = `
                <div id="contact-page">
                    <h2>Contact Us</h2>

                    <div id="contact-details">
                        <div id="contact-cards">
                            <div class="contact-card">
                                <ion-icon name="call-outline"></ion-icon>
                                <p>0900 900 900</p>
                            </div>
                            <div class="contact-card">
                                <ion-icon name="mail-outline"></ion-icon>
                                <p>korstructionlondon@gmail.co.uk</p>                
                            </div>
                            <div class="contact-card">
                                <ion-icon name="location-outline"></ion-icon>
                                <p>1 Central Park Road,<br>
                                London, CL1 1UK<p>
                            </div>
                            <div class="contact-card">
                                <ion-icon name="logo-instagram"></ion-icon>
                                <p>@korstructionlondon</p>
                            </div>              
                        </div>

                        <div id="office-hours">
                            <h3>Office Hours:</h3>
                            <ul>
                                <li>Monday - Friday: 08:00AM - 18:00PM</li>
                                <li>Saturday: 09:00AM - 15:00PM</li>
                                <li>Sunday: Closed</li>                       
                            </ul>
                        </div>                  
                    </div>

                    <form>
                        <input type="text" placeholder="Name" required>
                        <input type="email" placeholder="Email" required>
                        <input type="number" placeholder="Contact Number" required>
                        <input type="text" placeholder="Subject" required>
                        <textarea name="message" rows="5"placeholder="Message" required></textarea>
                        <button type="submit" id="submit">Send</button>
                    </form>

                    <footer>
                        <p>&copy; Ionut Cora, 2021</p> 
                    </footer>                          
                </div>
        `;
    }

}); 

