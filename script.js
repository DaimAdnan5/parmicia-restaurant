// Testimonials data
const testimonialsData = [
    {
        text: "Lorem ipsum dolor sit amet consectetur. Fringilla habitasse faucibus ipsum viverra odio tristique tristique sed sed. Quam eu amet id tincidunt dignissim massa volutpat tristique. Lectus pretium eu sed sed morbi integer faucibus dui ligula. Amet tempus diam duis auctor.",
        name: "Nick Jonas",
        image: "./Assets/Nick.jpg"
    },
    {
        text: "The authentic Italian flavors transported me straight to Italy! Every bite was a perfect blend of tradition and quality. The packaging and delivery were exceptional too. Highly recommend to anyone craving genuine Italian cuisine.",
        name: "Sofia Rodriguez",
        image: "./Assets/Customer_1.png"
    },
    {
        text: "I've never tasted pasta this good outside of Italy itself. The ingredients are fresh, the portions are generous, and the whole experience feels like having an Italian grandmother cook for you. Absolutely wonderful!",
        name: "Marcus Johnson",
        image: "./Assets/Customer_2.png"
    },
    {
        text: "PARMICIA has become our family's go-to for special occasions. The quality is consistently outstanding, and the variety keeps us coming back for more. It's like having a piece of Italy delivered to our doorstep.",
        name: "Elena Rossi",
        image: "./Assets/Customer_3.jpg"
    }
];

// Current testimonial index
let currentTestimonialIndex = 0;

// DOM elements
let testimonialText, profileImage, profileName, leftArrow, rightArrow, indicators;

// Initialize testimonials slider
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    testimonialText = document.querySelector('.testimonial_text p');
    profileImage = document.querySelector('.profile_image img');
    profileName = document.querySelector('.profile_name p');
    leftArrow = document.querySelector('.nav_left');
    rightArrow = document.querySelector('.nav_right');
    indicators = document.querySelectorAll('.indicator');

    // Add event listeners
    if (leftArrow) {
        leftArrow.addEventListener('click', showPreviousTestimonial);
    }
    
    if (rightArrow) {
        rightArrow.addEventListener('click', showNextTestimonial);
    }

    // Add click listeners to indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentTestimonialIndex = index;
            updateTestimonial();
        });
    });

    // Initialize with first testimonial
    updateTestimonial();
});

// Show previous testimonial
function showPreviousTestimonial() {
    currentTestimonialIndex = currentTestimonialIndex > 0 ? currentTestimonialIndex - 1 : testimonialsData.length - 1;
    updateTestimonial();
}

// Show next testimonial
function showNextTestimonial() {
    currentTestimonialIndex = currentTestimonialIndex < testimonialsData.length - 1 ? currentTestimonialIndex + 1 : 0;
    updateTestimonial();
}

// Update testimonial content
function updateTestimonial() {
    const currentTestimonial = testimonialsData[currentTestimonialIndex];
    
    if (testimonialText) {
        // Add fade effect
        testimonialText.style.opacity = '0';
        setTimeout(() => {
            testimonialText.textContent = currentTestimonial.text;
            testimonialText.style.opacity = '1';
        }, 200);
    }
    
    if (profileImage) {
        profileImage.style.opacity = '0';
        setTimeout(() => {
            profileImage.src = currentTestimonial.image;
            profileImage.alt = currentTestimonial.name;
            profileImage.style.opacity = '1';
        }, 200);
    }
    
    if (profileName) {
        profileName.style.opacity = '0';
        setTimeout(() => {
            profileName.textContent = currentTestimonial.name;
            profileName.style.opacity = '1';
        }, 200);
    }

    // Update indicators
    indicators.forEach((indicator, index) => {
        if (index === currentTestimonialIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Auto-slide functionality (optional)
function startAutoSlide() {
    setInterval(() => {
        showNextTestimonial();
    }, 5000); // Change testimonial every 5 seconds
}

// Uncomment the line below if you want auto-sliding testimonials
// startAutoSlide();
