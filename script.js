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
}, 1000);  // Delai de 1 secundă


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

        // Verificare validare
        if (!name || !role || !message) {
            alert("Toate câmpurile sunt obligatorii!");
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