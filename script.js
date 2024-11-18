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
