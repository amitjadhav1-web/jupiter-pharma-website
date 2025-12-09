// Basic interactions: contact form validation and small UX
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('year').textContent = new Date().getFullYear();

  const form = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const name = (data.get('name') || '').trim();
    const email = (data.get('email') || '').trim();
    const message = (data.get('message') || '').trim();

    if (!name || !email || !message) {
      formNote.textContent = 'Please fill name, email and message.';
      formNote.style.color = '#b02a37';
      return;
    }

    // Here you'd POST to your server or email endpoint.
    // For the static demo we just show a success message.
    formNote.textContent = 'Thanks — your message has been recorded. We will contact you soon.';
    formNote.style.color = '#0f5132';
    form.reset();
  });

  document.getElementById('contactTopBtn').addEventListener('click', function () {
    document.querySelector('#contact').scrollIntoView({behavior:'smooth'});
  });

  document.getElementById('openContact').addEventListener('click', function () {
    document.querySelector('#contact').scrollIntoView({behavior:'smooth'});
  });
});
