/* * For the toggle menu */
const menuIcon = document.getElementById('menu-icon');
const navbarMenu = document.querySelector('.navbar-menu');
const menubar = document.querySelector('.bx-menu');

menuIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});
menuIcon.addEventListener('click', () => {
    if (navbarMenu.classList.contains('active')) {
        menubar.classList.add('bx-x');
    } else {
        menubar.classList.remove('bx-x');
    }
});


/* * For the sticky navbar */
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky', window.scrollY > 100);
    navbarMenu.classList.remove('active');
});



/*Active link*/
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar-menu a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.navbar-menu a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    menubar.classList.remove('bx-x');
    navbarMenu.classList.remove('active');
}

/* For the scroll reveal animation */
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .gallery-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* home text circular */
const homeText = document.getElementById('home-text'),
    letters = homeText.textContent.trim().split(''),
    angleStep = 360 / letters.length

homeText.textContent = ''
letters.forEach((char, i) => {
    const span = document.createElement('span')
    span.textContent = char;
    span.style.transform = `rotate(${i * angleStep}deg)`
    homeText.appendChild(span)
})

/* For the typed.js */
const typed = new Typed('#home-typed', {
    strings: ['lens_jibon', 'Saptarshi Saha'],
    typeSpeed: 70,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
});

/*social media icons*/


document.querySelectorAll('.social-links').forEach(item => {
    const socialText = item.querySelector('.social-text');
    item.addEventListener('mouseover', () => {
        socialText.style.display = 'block';
    });
    item.addEventListener('mouseout', () => {
        socialText.style.display = 'none';
    }); 
});

/*pop-up*/
function toggle() {
    var popup = document.getElementById('popup-container');
    popup.classList.toggle('active');
    var home = document.getElementById('Home');
    home.classList.toggle('active');
    var about = document.getElementById('About');
    about.classList.toggle('active');
    var services = document.getElementById('Services');
    services.classList.toggle('active');
    var gallery = document.getElementById('Gallery');
    gallery.classList.toggle('active');
    var contact = document.getElementById('Contact');
    contact.classList.toggle('active');
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('blur');
}

/* For the service discussion */
const serviceData = {
    photo:{
        title:"Photography",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque perspiciatis amet corporis inventore aut et alias repudiandae quos adipisci, velit repellat voluptatem, impedit nihil? Officia."
    },
    video:{
        title:"Videography",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque perspiciatis amet corporis inventore aut et alias repudiandae quos adipisci, velit repellat voluptatem, impedit nihil? Officia."
    },
    Commercial:{
        title:"Graphic Design",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque perspiciatis amet corporis inventore aut et alias repudiandae quos adipisci, velit repellat voluptatem, impedit nihil? Officia."
    },
    landscape:{
        title:"Brand Identity",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque perspiciatis amet corporis inventore aut et alias repudiandae quos adipisci, velit repellat voluptatem, impedit nihil? Officia."
    },
    marketing:{
        title:"Photo Editing",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque perspiciatis amet corporis inventore aut et alias repudiandae quos adipisci, velit repellat voluptatem, impedit nihil? Officia."
    },
    editing:{
        title:"Editing",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque perspiciatis amet corporis inventore aut et alias repudiandae quos adipisci, velit repellat voluptatem, impedit nihil? Officia."
    }

};

const serviceDiscussion = document.getElementById("service-discussion");

const title = document.getElementById("popupTitle");

const text = document.getElementById("popupText");

document.querySelectorAll(".service-box").forEach(box=>{

    box.addEventListener("click",()=>{

        const service = box.dataset.service;

        title.textContent = serviceData[service].title;

        text.textContent = serviceData[service].text;

        serviceDiscussion.classList.add("active");

    });

});
let activeBox = null; // Stores the currently active icon

document.querySelectorAll(".service-box").forEach(box => {

    box.addEventListener("click", () => {

        // If the same icon is clicked again, close the popup
        if (activeBox === box) {
            serviceDiscussion.classList.remove("active");
            box.classList.remove("active");
            activeBox = null;
            return;
        }

        // Remove active state from previous icon
        if (activeBox) {
            activeBox.classList.remove("active");
        }

        // Set the new active icon
        activeBox = box;
        box.classList.add("active");

        // Load content
        const service = box.dataset.service;
        title.textContent = serviceData[service].title;
        text.textContent = serviceData[service].text;

        // Show popup
        serviceDiscussion.classList.add("active");
    });

});

/* gallary section*/
const filters = document.querySelectorAll('.filter');
const photos = document.querySelectorAll('.photo');
const box = document.querySelector('#lightbox');
const boxImg = box.querySelector('img');
const boxTitle = box.querySelector('strong');
const boxMeta = box.querySelector('span');

filters.forEach((button) => button.addEventListener('click', () => {
  filters.forEach((filter) => filter.classList.remove('active'));
  button.classList.add('active');
  photos.forEach((photo) => {
    const isHidden = button.dataset.filter !== 'all' && photo.dataset.category !== button.dataset.filter;
    photo.classList.toggle('hide', isHidden);
  });
}));

photos.forEach((photo) => photo.addEventListener('click', () => {
  const image = photo.querySelector('img');
  boxImg.src = image.src;
  boxImg.alt = image.alt;
  boxTitle.textContent = photo.dataset.title;
  boxMeta.textContent = photo.dataset.meta;
  box.showModal();
}));

box.querySelector('.Close').addEventListener('click', () => box.close());
box.addEventListener('click', (event) => { if (event.target === box) box.close(); });

/*Contact Form*/
const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');
const submitButton = form.querySelector('button');
const popup = document.querySelector('#thank-you-popup');
const closePopup = document.querySelector('#close-popup');
let popupTimer;

function showThankYou() {
  window.clearTimeout(popupTimer);
  popup.classList.add('visible');
  popup.setAttribute('aria-hidden', 'false');
  popupTimer = window.setTimeout(hideThankYou, 7000);
}

function hideThankYou() {
  popup.classList.remove('visible');
  popup.setAttribute('aria-hidden', 'true');
}

closePopup.addEventListener('click', hideThankYou);

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  status.textContent = '';
  status.className = 'form-status';

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  submitButton.disabled = true;
  submitButton.querySelector('span').textContent = 'Sending…';

  try {
    // Web3Forms relays the message without exposing an email address on the page.
    const formData = new FormData(form);
    formData.append('access_key', 'b7507db0-692a-4525-ac7c-4b0b5790cb2c');
    formData.append('from_name', 'Portfolio contact form');
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData
    });

    const result = await response.json();
    if (!response.ok || result.success === false) {
      throw new Error(result.message || 'Message could not be sent.');
    }
    form.reset();
    status.textContent = result.message || 'Thanks — your message is on its way.';
    showThankYou();
  } catch (error) {
    status.classList.add('error');
    status.textContent = error.message || 'Something went wrong. Please try again in a moment.';
  } finally {
    submitButton.disabled = false;
    submitButton.querySelector('span').textContent = 'Send message';
  }
});
/*Contact Form*/