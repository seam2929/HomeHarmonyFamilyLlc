const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    menuButton.textContent = isOpen ? '×' : '☰';
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.textContent = '☰';
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const quoteForm = document.getElementById('quote-form');
if (quoteForm) {
  quoteForm.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(quoteForm);
    const name = formData.get('name') || '';
    const email = formData.get('email') || '';
    const service = formData.get('service') || '';
    const message = formData.get('message') || '';
    const subject = encodeURIComponent(`Cleaning quote request — ${service}`);
    const body = encodeURIComponent(
      `Hello Home Harmony Family LLC,\\n\\nI'd like to request a quote.\\n\\nName: ${name}\\nEmail: ${email}\\nService: ${service}\\nDetails: ${message}\\n\\nThank you.`
    );
    // Replace the placeholder below with the business's confirmed email address before launch.
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  });
}
