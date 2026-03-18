// Mobile Navigation
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const navClose = document.getElementById('navClose');
const overlay = document.getElementById('overlay');

function openNav() {
  nav.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeNav() {
  nav.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

if (hamburger) hamburger.addEventListener('click', openNav);
if (navClose) navClose.addEventListener('click', closeNav);
if (overlay) overlay.addEventListener('click', closeNav);

// Close nav on link click (mobile)
document.querySelectorAll('nav ul li a').forEach(function(link) {
  link.addEventListener('click', closeNav);
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(function(question) {
  question.addEventListener('click', function() {
    var item = this.parentElement;
    var isActive = item.classList.contains('active');

    // Close all
    document.querySelectorAll('.faq-item').forEach(function(faqItem) {
      faqItem.classList.remove('active');
    });

    // Open clicked if it wasn't active
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// Appointment Form Submission
var appointmentForm = document.getElementById('appointmentForm');
if (appointmentForm) {
  appointmentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your appointment request! We will contact you shortly to confirm your appointment details.');
    this.reset();
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Header shadow on scroll
window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  if (window.scrollY > 10) {
    header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';
  } else {
    header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
  }
});
