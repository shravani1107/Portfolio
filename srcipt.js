var typed = new Typed(".text", {
    strings: ["Frontend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const contactForm = document.getElementById('contact-form');
const successMsg = document.getElementById('success-msg');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(contactForm);

    const response = await fetch(contactForm.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
        successMsg.style.display = 'block';
        contactForm.reset();
        setTimeout(() => {
            successMsg.style.display = 'none';
        }, 5000);
    } else {
        alert("Oops! There was a problem sending your message.");
    }
});