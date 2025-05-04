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

const gallery = document.querySelector('.gallery');
const filterButtons = document.querySelectorAll('.filter-btn');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxCaption = document.querySelector('.lightbox-caption');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

let currentImageIndex = 0;
let filteredGallery = [...galleryData];

function initGallery() {
    renderGallery(galleryData);
    setupEventListeners();
}

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

function filterGallery(category) {
    let filteredItems;

    if (category === 'all') {
        filteredItems = galleryData;
    } else {
        filteredItems = galleryData.filter(item => item.category === category);
    }

    filteredItems = filteredItems.map(item => {
        const originalItem = galleryData.find(original => original.id === item.id);
        return { ...item, liked: originalItem.liked };
    });

    renderGallery(filteredItems);
}

function searchGallery(query) {
    if (!query.trim()) {
        renderGallery(galleryData);
        return;
    }

    const searchTerm = query.toLowerCase().trim();
    const searchResults = galleryData.filter(item =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm)
    );

    const resultsWithLikedState = searchResults.map(item => {
        const originalItem = galleryData.find(original => original.id === item.id);
        return { ...item, liked: originalItem.liked };
    });

    renderGallery(resultsWithLikedState);

    filterButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector('[data-filter="all"]').classList.add('active');
}

function openLightbox(index) {
    currentImageIndex = index;
    const item = filteredGallery[index];

    lightboxImg.src = item.imageUrl;
    lightboxCaption.textContent = `${item.title} - ${item.description}`;
    lightbox.classList.add('active');

    document.body.style.overflow = 'hidden';
}

function closeLightboxFunc() {
    lightbox.classList.remove('active');

    document.body.style.overflow = '';
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + filteredGallery.length) % filteredGallery.length;
    const item = filteredGallery[currentImageIndex];

    lightboxImg.src = item.imageUrl;
    lightboxCaption.textContent = `${item.title} - ${item.description}`;
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % filteredGallery.length;
    const item = filteredGallery[currentImageIndex];

    lightboxImg.src = item.imageUrl;
    lightboxCaption.textContent = `${item.title} - ${item.description}`;
}

function setupEventListeners() {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));

            button.classList.add('active');

            const category = button.dataset.filter;
            filterGallery(category);
        });
    });

    gallery.addEventListener('click', (e) => {
        if (e.target.closest('.like-button')) {
            e.stopPropagation();
            const galleryItem = e.target.closest('.gallery-item');
            const id = parseInt(galleryItem.dataset.id);
            const index = galleryData.findIndex(item => item.id === id);

            if (index !== -1) {
                galleryData[index].liked = !galleryData[index].liked;

                const likeButton = e.target.closest('.like-button');
                if (galleryData[index].liked) {
                    likeButton.classList.add('liked');
                } else {
                    likeButton.classList.remove('liked');
                }
            }
            return;
        }

        const galleryItem = e.target.closest('.gallery-item');
        if (galleryItem) {
            const id = parseInt(galleryItem.dataset.id);
            const index = filteredGallery.findIndex(item => item.id === id);
            if (index !== -1) {
                openLightbox(index);
            }
        }
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('lightbox-img')) {
            closeLightboxFunc();
        }
    });

    lightboxPrev.addEventListener('click', prevImage);

    lightboxNext.addEventListener('click', nextImage);

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

    searchButton.addEventListener('click', () => {
        searchGallery(searchInput.value);
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchGallery(searchInput.value);
        }
    });
}

document.addEventListener('DOMContentLoaded', initGallery);
