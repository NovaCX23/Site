function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages: 'en,ro'
    }, 'google_translate_element');
}

// Change navbar style on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
});

// navbar random color   // Can be eliminated to go back to originial color
function changeNavbarColorToDarkBlue() {
    const navbar = document.querySelector('nav');

    // Generăm o culoare în nuanțe de albastru închis
    const red = Math.floor(Math.random() * 100); // Valori mici pentru roșu
    const green = Math.floor(Math.random() * 100); // Valori mici pentru verde
    const blue = 150 + Math.floor(Math.random() * 105); // Dominant (150-255)
    const randomColor = `rgb(${red}, ${green}, ${blue})`;

    navbar.style.backgroundColor = randomColor;
}

// Schimbă culoarea navbar-ului la fiecare 10 secunde
setInterval(changeNavbarColorToDarkBlue, 10000);

// Up until here navbar random color change

// Show/hide FAQ and toggle icon
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // Change icon inside the event listener for each FAQ click
        const icon = faq.querySelector('.faq__icon i');
        if (icon.classList.contains('uil-plus')) {
            icon.classList.remove('uil-plus');
            icon.classList.add('uil-minus');
        } else {
            icon.classList.remove('uil-minus');
            icon.classList.add('uil-plus');
        }
    });
});


// show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);

// Pentru eficientizare asta n ar trebui sa fie prezenta
// Modificarea pentru afișarea navbar-ului cu întârziere
setTimeout(() => {
    const navbar = document.querySelector('nav');
    navbar.style.display = 'block'; // Afișează navbar-ul cu tranziție
}, 1000);  // Delay de 1 secundă


    // TESTIMONIALS

// Codul pentru gestionarea testimonialelor

document.addEventListener("DOMContentLoaded", () => {
    // Elemente din formular
    const addTestimonialBtn = document.querySelector('#add-testimonial-btn');
    const nameInput = document.querySelector('#testimonial-name');
    const roleInput = document.querySelector('#testimonial-role');
    const messageInput = document.querySelector('#testimonial-message');

    // Container pentru testimonialele existente
    const testimonialsContainer = document.querySelector('.testimonials__Container > div');

    // Lista de imagini pentru avatar (poți adăuga mai multe imagini aici)
    const avatarImages = [
        './images/avatar6.jpg', 
        './images/avatar7.jpg', 
        './images/avatar8.jpg', 
        './images/avatar9.jpg',
        './images/avatar10.jpg',
        './images/avatar11.jpg', 
        './images/avatar12.jpg'
    ];

    // Funcție pentru a alege aleatoriu o imagine
    function getRandomAvatar() {
        const randomIndex = Math.floor(Math.random() * avatarImages.length);
        return avatarImages[randomIndex];
    }

    // Funcția pentru adăugarea unui testimonial
    function addTestimonial(name, role, message, avatar) {
        const newTestimonial = document.createElement('article');
        newTestimonial.classList.add('testimonial');
        newTestimonial.innerHTML = `
            <div class="avatar">
                <img src="${avatar}" alt="Avatar">
            </div>
            <div class="testimonial__info">
                <h5>${name}</h5>
                <small>${role}</small>
            </div>
            <div class="testimonial__body">
                <p>"${message}"</p>
            </div>
            <button class="delete-testimonial-btn">Delete</button>
        `;

        // Adăugarea testimonialului în container
        testimonialsContainer.appendChild(newTestimonial);

        // Golește câmpurile formularului
        nameInput.value = '';
        roleInput.value = '';
        messageInput.value = '';

        // Adăugarea funcționalității de ștergere
        const deleteBtn = newTestimonial.querySelector('.delete-testimonial-btn');
        deleteBtn.addEventListener('click', () => {
            newTestimonial.remove();
        });
    }

    // Event listener pentru butonul de adăugare
    addTestimonialBtn.addEventListener('click', () => {
        // Obține valorile introduse
        const name = nameInput.value.trim();
        const role = roleInput.value.trim();
        const message = messageInput.value.trim();

        // Expresii regulate pentru validare
        const nameRegex = /^[a-zA-Z\s]{3,50}$/; // Nume între 3 și 50 de caractere
        const roleRegex = /^[a-zA-Z\s]{2,30}$/; // Rol între 2 și 30 de caractere
        const messageRegex = /^.{10,300}$/; // Mesaj între 10 și 300 de caractere

        // Verificare validare
        if (!nameRegex.test(name)) {
            alert("The name must contain only letters and spaces, between 3 and 50 characters.");
            return;
        }

        if (!roleRegex.test(role)) {
            alert("The role must contain only letters and spaces, between 2 and 30 characters.");
            return;
        }

        if (!messageRegex.test(message)) {
            alert("The message must be between 10 and 300 characters.");
            return;
        }

        // Dacă testimonialul este nou, alege o imagine aleatorie
        const avatar = getRandomAvatar();

        // Adăugare testimonial
        addTestimonial(name, role, message, avatar);
    });

    // Adăugarea testimonialelor deja existente
    const existingTestimonials = document.querySelectorAll('.testimonial');
    existingTestimonials.forEach(testimonial => {
        const avatarImg = testimonial.querySelector('.avatar img');
        const avatarSrc = avatarImg ? avatarImg.src : '';
        // Asigură-te că testimonialele existente nu sunt modificate
        testimonial.querySelector('.delete-testimonial-btn').addEventListener('click', () => {
            testimonial.remove();
        });
    });
});