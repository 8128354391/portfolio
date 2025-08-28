document.addEventListener("DOMContentLoaded", function () {
  const bookBtn = document.getElementById("bookCallBtn");
  if (bookBtn) {
    bookBtn.addEventListener("click", function () {
      // WhatsApp direct message functionality
      const phoneNumber = "+918128354391"; // Replace with your actual WhatsApp number
      const message = "Hi! I'd like to book a call with you. I'm interested in your services.";
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    });
  }
});

// Testimonial data
const testimonials = [
  {
    quote: '"Huy is phenomenal. An absolute pleasure to work with!"',
    author: "Pieter Pattyn",
    role: "Founder's Associate @Volup",
    tags: ["WEB DESIGN", "WEB DEVELOPMENT", "SEO"],
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=400&q=80",
  },
  {
    quote: '"Pratik delivered beyond expectations. Highly recommended!"',
    author: "Sarah Lee",
    role: "CEO @StartupX",
    tags: ["UI/UX", "BRANDING"],
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=400&h=400&q=80",
  },
  {
    quote: '"A creative genius and a true professional."',
    author: "John Smith",
    role: "Marketing Lead @BigBrand",
    tags: ["MARKETING", "CONSULTING"],
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&h=400&q=80",
  },
];

let currentTestimonial = 0;

function renderTestimonial(idx) {
  const t = testimonials[idx];
  document.getElementById("testimonialQuote").textContent = t.quote;
  document.getElementById("testimonialAuthor").textContent = t.author;
  document.getElementById("testimonialRole").textContent = t.role;
  document.getElementById("testimonialImage").src = t.image;
  document.getElementById("testimonialImage").alt = t.author;

  // Tags
  const tagsDiv = document.getElementById("testimonialTags");
  tagsDiv.innerHTML = "";
  t.tags.forEach((tag) => {
    const span = document.createElement("span");
    span.className = "testimonial-tag";
    span.textContent = tag;
    tagsDiv.appendChild(span);
  });
}

document.getElementById("testimonialPrev").addEventListener("click", () => {
  currentTestimonial =
    (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  renderTestimonial(currentTestimonial);
});
document.getElementById("testimonialNext").addEventListener("click", () => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  renderTestimonial(currentTestimonial);
});

// Initial render
renderTestimonial(currentTestimonial);

// WhatsApp functionality for CTA buttons
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".cta-button").forEach((btn) => {
    btn.addEventListener("click", () => {
      // WhatsApp direct message functionality
      const phoneNumber = "+918128354391"; // Replace with your actual WhatsApp number
      const message =
        "Hi! I'd like to book a call with you. I'm interested in your services.";
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappUrl, "_blank");
    });
  });
});

// Scroll to top button
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Initially hide the button
scrollTopBtn.style.display = "none";

// Show/hide button based on scroll position
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Loader hide logic
window.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  // Add the 'active' class to trigger the animation
  loader.classList.add("active");

  // Optional: Remove the loader after animation
  setTimeout(() => {
    loader.style.display = "none";
  }, 1200); // Adjust timing to match your animation
});

document.addEventListener("DOMContentLoaded", function () {
  const mainTitle = document.getElementById("mainTitle");
  const text = mainTitle.textContent;
  mainTitle.textContent = "";
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      mainTitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 150); // Adjust speed here
    }
  }
  typeWriter();
});

document.addEventListener("DOMContentLoaded", function () {
  const tlMainUnified = gsap.timeline();

  // Animate the profile image
  tlMainUnified.from(".profile-img", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  // Animate the description text
  tlMainUnified.from(
    ".description p",
    {
      x: -40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.7"
  ); // Overlap with image animation

  // Animate the BOOK A CALL button
  tlMainUnified.from(
    "#bookCallBtn",
    {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      ease: "back.out(1.7)",
    },
    "-=0.5"
  );
});

document.addEventListener("DOMContentLoaded", function () {
  const desc = document.querySelector(".description p");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      // Change 50 to whatever scroll threshold you want
      desc.classList.add("scrolled-color");
    } else {
      desc.classList.remove("scrolled-color");
    }
  });
});

window.addEventListener("scroll", function () {
  // You can adjust this threshold as needed
  const scrollThreshold = 100; // px

  // Select the elements
  const availability = document.querySelector(".availability");
  const date = document.querySelector(".date");

  if (window.scrollY > scrollThreshold) {
    // Change to your desired color
    availability.style.color = "#000000"; // Example: orange
    date.style.color = "#000000";
  } else {
    // Revert to original color
    availability.style.color = "";
    date.style.color = "";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Split the .services-title text into spans
  const servicesTitle = document.querySelector(".services-title ,.services-description");
  const text = servicesTitle.textContent;
  servicesTitle.innerHTML = "";
  text.split("").forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    servicesTitle.appendChild(span);
  });

  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Animate each letter on scroll
  gsap.from(".services-title span ,.services-description", {
    scrollTrigger: {
      trigger: ".services-title",
      start: "top 80%", // when top of .services-title hits 80% of viewport
    },
    y: 60,
    opacity: 0,
    stagger: 0.05,
    duration: 0.7,
    ease: "power3.out",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const desc = document.querySelector(".services-description p");
  if (desc) {
    // Split text into spans (by word for a smoother effect)
    const words = desc.textContent.split(" ");
    desc.innerHTML = "";
    words.forEach((word, i) => {
      const span = document.createElement("span");
      span.textContent = word + (i < words.length - 1 ? " " : "");
      desc.appendChild(span);
    });

    // Animate each word on scroll
    gsap.from(".services-description p span", {
      scrollTrigger: {
        trigger: ".services-description",
        start: "top 80%",
      },
      y: 40,
      opacity: 0,
      stagger: 0.07,
      duration: 0.7,
      ease: "power3.out",
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Target only the .services-label under .selected-works-header (not the one in services-section)
  const projectsLabel = document.querySelector(
    ".selected-works-header .services-label"
  );
  if (!projectsLabel) return;
  const text = projectsLabel.textContent;
  projectsLabel.innerHTML = "";
  text.split("").forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    projectsLabel.appendChild(span);
  });

  gsap.from(".selected-works-header .services-label span", {
    scrollTrigger: {
      trigger: ".selected-works-header .services-label",
      start: "top 80%",
    },
    y: 40,
    opacity: 0,
    stagger: 0.05,
    duration: 0.7,
    ease: "power3.out",
  });
});

// Split each letter in .hero-title into a span
document.querySelectorAll(".hero-title span").forEach((line) => {
  const letters = line.textContent.split("");
  line.innerHTML = letters
    .map(
      (letter) =>
        `<span class="letter">${letter === " " ? "&nbsp;" : letter}</span>`
    )
    .join("");
});

// Animate the letters with a stagger on scroll
gsap.fromTo(
  ".hero-title .letter",
  { opacity: 0, y: 40 },
  {
    opacity: 1,
    y: 0,
    stagger: 0.05,
    duration: 0.6,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".hero-title",
      start: "top 80%", // adjust as needed
      toggleActions: "restart none none none", // replay on every scroll into view
    },
  }
);

// Add some CSS for smoother animation
document.head.insertAdjacentHTML(
  "beforeend",
  "<style>.hero-title .letter { display: inline-block; opacity: 0; transform: translateY(40px); }</style>"
);

document.addEventListener("DOMContentLoaded", function () {
  const mainTitle = document.getElementById("mainTitle");
  const text = mainTitle.textContent;
  mainTitle.innerHTML = "";
  text.split("").forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    mainTitle.appendChild(span);
  });

  gsap.from("#mainTitle span", {
    y: 40,
    opacity: 1,
    stagger: 0.05,
    duration: 0.7,
    ease: "power3.out",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Animate all main sections on load
  gsap.from(".main-content", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
  });

  // Animate all headings
  gsap.utils.toArray("h1, h2, h3").forEach((heading, i) => {
    gsap.from(heading, {
      scrollTrigger: {
        trigger: heading,
        start: "top 80%",
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      delay: i * 0.1,
      ease: "power3.out",
    });
  });

  // Animate all paragraphs and text blocks
  gsap.utils
    .toArray(
      "p, .description, .services-main-desc, .hero-description, .hero-about, .testimonial-text"
    )
    .forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
        opacity: 0,
        y: 30,
        duration: 0.7,
        delay: i * 0.05,
        ease: "power2.out",
      });
    });

  // Animate all images
  gsap.utils.toArray("img").forEach((img, i) => {
    gsap.from(img, {
      scrollTrigger: {
        trigger: img,
        start: "top 90%",
      },
      opacity: 0,
      scale: 0.95,
      duration: 1,
      delay: i * 0.1,
      ease: "power2.out",
    });
  });

  // Animate section containers
  gsap.utils.toArray("section").forEach((section, i) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 90%",
      },
      opacity: 0,
      y: 60,
      duration: 1,
      delay: i * 0.1,
      ease: "power3.out",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Register ScrollTrigger if not already
  if (gsap && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Footer GSAP timeline animation
  const footerTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".site-footer",
      start: "top 90%", // when footer enters viewport
    },
  });

  // Animate footer column headings
  footerTimeline.from(".footer-col h3", {
    y: 40,
    opacity: 0,
    stagger: 0.15,
    duration: 0.7,
    ease: "power3.out",
  });

  footerTimeline.from(".footer-col ul li", {
    y: 40,
    opacity: 0,
    stagger: 0.15,
    duration: 0.7,
    ease: "power3.out",
  });

  // Animate copyright, local time, and top button
  footerTimeline
    .from(".footer-copyright", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
    // Also remove this animation reference (around line 448)
    .from(
      ".footer-localtime div:first-child",
      {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.4"
    )
    .from(
      ".footer-top-btn",
      {
        scale: 0.7,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
      },
      "-=0.3"
    );
});


