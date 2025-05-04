// Gallery data - in a real application, this might come from a database or API
const galleryData = [
    {
        id: 1,
        title: 'Mountain Landscape',
        description: 'Beautiful mountain landscape with a lake',
        category: 'nature',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        liked: false
    },
    {
        id: 2,
        title: 'Modern Architecture',
        description: 'Contemporary building with unique design',
        category: 'architecture',
        imageUrl: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        liked: false
    },
    {
        id: 3,
        title: 'Beach Sunset',
        description: 'Golden sunset over the ocean',
        category: 'nature',
        imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80',
        liked: false
    },
    {
        id: 4,
        title: 'Historic Building',
        description: 'Ancient architecture with intricate details',
        category: 'architecture',
        imageUrl: 'https://images.unsplash.com/photo-1548248823-ce16a73b6d49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        liked: false
    },
    {
        id: 5,
        title: 'City Skyline',
        description: 'Urban landscape at night',
        category: 'travel',
        imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1544&q=80',
        liked: false
    },
    {
        id: 6,
        title: 'Forest Path',
        description: 'Serene walkway through dense forest',
        category: 'nature',
        imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
        liked: false
    },
    {
        id: 7,
        title: 'Venice Canals',
        description: 'Famous waterways of Venice, Italy',
        category: 'travel',
        imageUrl: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1483&q=80',
        liked: false
    },
    {
        id: 8,
        title: 'Glass Skyscraper',
        description: 'Modern glass building reaching for the sky',
        category: 'architecture',
        imageUrl: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        liked: false
    },
    {
        id: 9,
        title: 'Mountain Village',
        description: 'Quaint village nestled in mountains',
        category: 'travel',
        imageUrl: 'https://images.unsplash.com/photo-1516715094483-75da7dee9758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80',
        liked: false
    }
];

// DOM Elements
const gallery = document.querySelector('.gallery');
const filterButtons = document.querySelectorAll('.filter-btn');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxCaption = document.querySelector('.lightbox-caption');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// Current image index for lightbox navigation
let currentImageIndex = 0;
let filteredGallery = [...galleryData];

// Initialize gallery
function initGallery() {
    renderGallery(galleryData);
    setupEventListeners();
}

// Render gallery items
function renderGallery(items) {
    gallery.innerHTML = '';
    filteredGallery = items;

    items.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        galleryItem.dataset.id = item.id;

        galleryItem.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.title}">
            <div class="gallery-item-info">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="like-button ${item.liked ? 'liked' : ''}">
                    <i class="fas fa-heart"></i>
                </div>
            </div>
        `;

        gallery.appendChild(galleryItem);
    });
}

// Filter gallery items by category
function filterGallery(category) {
    let filteredItems;

    if (category === 'all') {
        filteredItems = galleryData;
    } else {
        filteredItems = galleryData.filter(item => item.category === category);
    }

    // Preserve liked state
    filteredItems = filteredItems.map(item => {
        const originalItem = galleryData.find(original => original.id === item.id);
        return { ...item, liked: originalItem.liked };
    });

    renderGallery(filteredItems);
}

// Search gallery items
function searchGallery(query) {
    if (!query.trim()) {
        // If search is empty, show all images
        renderGallery(galleryData);
        return;
    }

    const searchTerm = query.toLowerCase().trim();
    const searchResults = galleryData.filter(item =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm)
    );

    // Preserve liked state
    const resultsWithLikedState = searchResults.map(item => {
        const originalItem = galleryData.find(original => original.id === item.id);
        return { ...item, liked: originalItem.liked };
    });

    renderGallery(resultsWithLikedState);

    // Reset active filter button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector('[data-filter="all"]').classList.add('active');
}

// Open lightbox
function openLightbox(index) {
    currentImageIndex = index;
    const item = filteredGallery[index];

    lightboxImg.src = item.imageUrl;
    lightboxCaption.textContent = `${item.title} - ${item.description}`;
    lightbox.classList.add('active');

    // Disable scrolling on body
    document.body.style.overflow = 'hidden';
}

// Close lightbox
function closeLightboxFunc() {
    lightbox.classList.remove('active');

    // Re-enable scrolling
    document.body.style.overflow = '';
}

// Navigate to previous image
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + filteredGallery.length) % filteredGallery.length;
    const item = filteredGallery[currentImageIndex];

    lightboxImg.src = item.imageUrl;
    lightboxCaption.textContent = `${item.title} - ${item.description}`;
}

// Navigate to next image
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % filteredGallery.length;
    const item = filteredGallery[currentImageIndex];

    lightboxImg.src = item.imageUrl;
    lightboxCaption.textContent = `${item.title} - ${item.description}`;
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Filter gallery
            const category = button.dataset.filter;
            filterGallery(category);
        });
    });

    // Gallery item click (open lightbox or like)
    gallery.addEventListener('click', (e) => {
        // Check if like button was clicked
        if (e.target.closest('.like-button')) {
            e.stopPropagation(); // Prevent lightbox from opening
            const galleryItem = e.target.closest('.gallery-item');
            const id = parseInt(galleryItem.dataset.id);
            const index = galleryData.findIndex(item => item.id === id);

            if (index !== -1) {
                // Toggle liked state
                galleryData[index].liked = !galleryData[index].liked;

                // Update UI
                const likeButton = e.target.closest('.like-button');
                if (galleryData[index].liked) {
                    likeButton.classList.add('liked');
                } else {
                    likeButton.classList.remove('liked');
                }
            }
            return;
        }

        // Handle lightbox opening
        const galleryItem = e.target.closest('.gallery-item');
        if (galleryItem) {
            const id = parseInt(galleryItem.dataset.id);
            const index = filteredGallery.findIndex(item => item.id === id);
            if (index !== -1) {
                openLightbox(index);
            }
        }
    });

    // Close lightbox when clicking on the lightbox background or image
    lightbox.addEventListener('click', (e) => {
        // Only close if clicking on the lightbox background or the image itself
        if (e.target === lightbox || e.target.classList.contains('lightbox-img')) {
            closeLightboxFunc();
        }
    });

    // Previous image
    lightboxPrev.addEventListener('click', prevImage);

    // Next image
    lightboxNext.addEventListener('click', nextImage);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') {
            closeLightboxFunc();
        } else if (e.key === 'ArrowLeft') {
            prevImage();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        }
    });

    // Search functionality
    searchButton.addEventListener('click', () => {
        searchGallery(searchInput.value);
    });

    // Search on Enter key
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchGallery(searchInput.value);
        }
    });

    // Real-time search (optional - uncomment if you want search-as-you-type)
    // searchInput.addEventListener('input', () => {
    //     searchGallery(searchInput.value);
    // });
}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', initGallery);
