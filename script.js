// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Smooth Scroll Reveal Animation (Intersection Observer)
  const revealElements = document.querySelectorAll(".reveal");

  const revealOnScroll = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // Animation runs only once
        }
      });
    },
    {
      threshold: 0.15, // Trigger when 15% of element is visible
    },
  );

  revealElements.forEach((el) => revealOnScroll.observe(el));

  // Navbar Sticky Effect on Scroll
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
    } else {
      navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
    }
  });

  // Simple functionality for Search Button
  const searchBtn = document.querySelector(".btn-search");
  searchBtn.addEventListener("click", () => {
    const input = document.querySelector(".input-group input").value;
    const select = document.querySelector(".input-group select").value;

    // User monawa hari type karala nam, eka URL parameter ekak widiyata pass karanna puluwan (Optional functionality)
    // Danata api kelinma jobs page ekata yawamu:

    window.location.href = "jobs.html";
  });
});

/* --- Dynamic Testimonials Logic --- */

// 1. Testimonial Data Array (Methana ona tharam add karanna puluwan)
const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Nurse in London, UK",
    text: "Never thought the process would be this smooth. Within 2 months, I was working in London! Highly recommended service.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Michael Chen",
    role: "Supervisor in Dubai",
    text: "GlobalRecruit found me a construction supervisor role in Dubai that pays double what I made at home. Life changing.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Amara Okafor",
    role: "Accountant in Toronto",
    text: "The visa assistance was incredible. I had zero stress about the paperwork for my move to Canada.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=24",
  },
  {
    name: "Kasun Perera",
    role: "Chef in Italy",
    text: "Best agency in Sri Lanka. They guided me from the interview until I landed in Rome. Thank you so much!",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=15",
  },
];

// 2. DOM Elements Selection
const track = document.getElementById("testimonialTrack");
const indicatorsContainer = document.getElementById("indicators");

// 3. Render Testimonials to HTML
function renderTestimonials() {
  track.innerHTML = "";
  indicatorsContainer.innerHTML = "";

  testimonials.forEach((item, index) => {
    // Create Card HTML
    const card = document.createElement("div");
    card.classList.add("review-card");
    card.innerHTML = `
            <div class="stars">${"★".repeat(item.rating)}</div>
            <p>"${item.text}"</p>
            <div class="user-info">
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h4>${item.name}</h4>
                    <span>${item.role}</span>
                </div>
            </div>
        `;
    track.appendChild(card);

    // Create Dot
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active"); // First dot active
    indicatorsContainer.appendChild(dot);
  });
}

// 4. Auto Slide Logic
let currentIndex = 0;

function slideTestimonials() {
  const cards = document.querySelectorAll(".review-card");
  const totalCards = cards.length;

  // Check screen width to decide how many to slide (Mobile: 1, Desktop: 2)
  const cardsPerView = window.innerWidth > 768 ? 2 : 1;

  // Move index
  currentIndex++;

  // Reset if reached end
  if (currentIndex > totalCards - cardsPerView) {
    currentIndex = 0;
  }

  updateSlidePosition();
}

function updateSlidePosition() {
  // Calculate translate percentage (Mobile: 100%, Desktop: 50%)
  const slidePercentage = window.innerWidth > 768 ? 50 : 100;
  track.style.transform = `translateX(-${currentIndex * slidePercentage}%)`;

  // Update Dots
  const dots = document.querySelectorAll(".dot");
  dots.forEach((d) => d.classList.remove("active"));
  // Simple dot logic (optional: can be improved for groups)
  if (dots[currentIndex]) dots[currentIndex].classList.add("active");
}

// 5. Initialize
document.addEventListener("DOMContentLoaded", () => {
  // Only run if track exists (to avoid errors on jobs.html)
  if (track) {
    renderTestimonials();

    // Auto slide every 3 seconds
    setInterval(slideTestimonials, 3000);

    // Resize unahama layout eka awul nowenna reset karamu
    window.addEventListener("resize", () => {
      currentIndex = 0;
      updateSlidePosition();
    });
  }
});
