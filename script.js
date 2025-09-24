// Mobile Hamburger Menu
// Get elements
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('.nav_links a');

// Toggle both hamburger and menu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
navItems.forEach(item => {
  item.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

const testimonials = document.querySelectorAll(".testimonial-card");
const dots = document.querySelectorAll(".dot");
let index = 0;
let interval;

function showTestimonial(i) {
  testimonials.forEach((card, idx) => {
    card.classList.toggle("active", idx === i);
    dots[idx].classList.toggle("active", idx === i);
  });
  index = i;
}

function nextTestimonial() {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showTestimonial(i);
    resetInterval();
  });
});

function startInterval() {
  interval = setInterval(nextTestimonial, 4000); // Auto-slide every 4s
}

function resetInterval() {
  clearInterval(interval);
  startInterval();
}
const counters = document.querySelectorAll('.counter');
const speed = 200; // lower = faster

const animateCounters = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = Math.ceil(target / speed);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target + "+";
      }
    };
    updateCount();
  });
};
document.getElementById('signupForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const plan = document.getElementById('plan').value;

  if(!fullname || !email || !phone || !plan) {
    alert('Please fill in all fields.');
    return false;
  }
  if(!/\S+@\S+\.\S+/.test(email)) {
    alert('Invalid email address.');
    return false;
  }
  alert('Thank you for signing up, ' + name + '!');
  return true;
});
let statsPlayed = false;
window.addEventListener('scroll', () => {
  const statsSection = document.querySelector('.stats');
  const sectionTop = statsSection.offsetTop;
  const sectionHeight = statsSection.offsetHeight;
  const scrollY = window.scrollY + window.innerHeight;

  if (!statsPlayed && scrollY > sectionTop + sectionHeight / 4) {
    animateCounters();
    statsPlayed = true;
  }
});

document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    item.classList.toggle('active');
  });
});