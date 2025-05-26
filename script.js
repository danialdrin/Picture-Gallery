
const galleryData = [
    {
        id: 1,
        title: 'Mountain Landscape',
        description: 'Beautiful mountain landscape with a lake',
        category: 'nature',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        liked: false,
        dateAdded: new Date('2024-01-15').toISOString()
    },
    {
        id: 2,
        title: 'Modern Architecture',
        description: 'Contemporary building with unique design',
        category: 'architecture',
        imageUrl: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        liked: false,
        dateAdded: new Date('2024-01-10').toISOString()
    },
    {
        id: 3,
        title: 'Beach Sunset',
        description: 'Golden sunset over the ocean',
        category: 'nature',
        imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80',
        liked: false,
        dateAdded: new Date().toISOString() // Today
    },
    {
        id: 4,
        title: 'Historic Building',
        description: 'Ancient architecture with intricate details',
        category: 'architecture',
        imageUrl: 'https://images.unsplash.com/photo-1548248823-ce16a73b6d49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        liked: false,
        dateAdded: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString() // 2 days ago
    },
    {
        id: 5,
        title: 'City Skyline',
        description: 'Urban landscape at night',
        category: 'travel',
        imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1544&q=80',
        liked: false,
        dateAdded: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString() // 5 days ago
    },
    {
        id: 6,
        title: 'Forest Path',
        description: 'Serene walkway through dense forest',
        category: 'nature',
        imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
        liked: false,
        dateAdded: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString() // Yesterday
    },
    {
        id: 7,
        title: 'Venice Canals',
        description: 'Famous waterways of Venice, Italy',
        category: 'travel',
        imageUrl: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1483&q=80',
        liked: false,
        dateAdded: new Date('2024-01-08').toISOString()
    },
    {
        id: 8,
        title: 'Glass Skyscraper',
        description: 'Modern glass building reaching for the sky',
        category: 'architecture',
        imageUrl: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        liked: false,
        dateAdded: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString() // 10 days ago
    },
    {
        id: 9,
        title: 'Mountain Village',
        description: 'Quaint village nestled in mountains',
        category: 'travel',
        imageUrl: 'https://images.unsplash.com/photo-1516715094483-75da7dee9758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80',
        liked: false,
        dateAdded: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString() // 3 days ago
    }
];


const gallery = document.querySelector('.gallery');
const filterButtons = document.querySelectorAll('.filter-btn');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxTitleText = document.getElementById('lightbox-title-text');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// New elements for added features
const themeToggle = document.getElementById('theme-toggle');
const uploadBtn = document.getElementById('upload-btn');
const uploadModal = document.getElementById('upload-modal');
const closeUpload = document.getElementById('close-upload');
const dropArea = document.getElementById('drop-area');
const inputFile = document.getElementById('input-file');
const imgView = document.getElementById('img-view');
const addToGalleryBtn = document.getElementById('add-to-gallery');
const downloadBtn = document.getElementById('download-btn');
const fullscreenBtn = document.getElementById('fullscreen-btn');
const closeLightboxBtn = document.getElementById('close-lightbox');
const slideshowBtn = document.getElementById('slideshow-btn');
const zoomInBtn = document.getElementById('zoom-in-btn');
const zoomOutBtn = document.getElementById('zoom-out-btn');
const compareBtn = document.getElementById('compare-btn');
const helpBtn = document.getElementById('help-btn');
const helpModal = document.getElementById('help-modal');
const closeHelp = document.getElementById('close-help');
const thumbnailStrip = document.getElementById('thumbnail-strip');
const prevThumbnails = document.getElementById('prev-thumbnails');
const nextThumbnails = document.getElementById('next-thumbnails');

let currentImageIndex = 0;
let filteredGallery = [...galleryData];
let uploadedFiles = [];
let nextId = Math.max(...galleryData.map(item => item.id)) + 1;
let thumbnailStartIndex = 0;
const thumbnailsPerView = 8;
let isAnimating = false;
let imageCache = new Map();
let observerOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
};


function initGallery() {
    loadTheme();
    renderGallery(galleryData);
    renderThumbnails();
    setupEventListeners();
    setupUploadFunctionality();
}

// Theme Management
function loadTheme() {
    const savedTheme = localStorage.getItem('gallery-theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('gallery-theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
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

    // Update thumbnails when gallery changes
    thumbnailStartIndex = 0;
    renderThumbnails();
}


function filterGallery(category) {
    let filteredItems;

    if (category === 'all') {
        filteredItems = galleryData;
    } else if (category === 'recent') {
        // Show images from the last 30 days, sorted by date (newest first)
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        filteredItems = galleryData
            .filter(item => new Date(item.dateAdded) >= thirtyDaysAgo)
            .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
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

// Thumbnail Navigation Functions
function renderThumbnails() {
    const currentGallery = filteredGallery.length > 0 ? filteredGallery : galleryData;
    thumbnailStrip.innerHTML = '';

    const endIndex = Math.min(thumbnailStartIndex + thumbnailsPerView, currentGallery.length);

    for (let i = thumbnailStartIndex; i < endIndex; i++) {
        const item = currentGallery[i];
        const thumbnailItem = document.createElement('div');
        thumbnailItem.classList.add('thumbnail-item');
        thumbnailItem.dataset.index = i;

        if (i === currentImageIndex) {
            thumbnailItem.classList.add('active');
        }

        thumbnailItem.innerHTML = `<img src="${item.imageUrl}" alt="${item.title}">`;

        thumbnailItem.addEventListener('click', () => {
            openLightbox(i);
            updateActiveThumbnail(i);
        });

        thumbnailStrip.appendChild(thumbnailItem);
    }

    updateThumbnailNavButtons();
}

function updateActiveThumbnail(index) {
    const thumbnails = document.querySelectorAll('.thumbnail-item');
    thumbnails.forEach(thumb => thumb.classList.remove('active'));

    const activeThumbnail = document.querySelector(`[data-index="${index}"]`);
    if (activeThumbnail) {
        activeThumbnail.classList.add('active');
    }
}

function updateThumbnailNavButtons() {
    const currentGallery = filteredGallery.length > 0 ? filteredGallery : galleryData;

    prevThumbnails.disabled = thumbnailStartIndex <= 0;
    nextThumbnails.disabled = thumbnailStartIndex + thumbnailsPerView >= currentGallery.length;
}

function scrollThumbnailsPrev() {
    if (isAnimating || thumbnailStartIndex <= 0) return;

    isAnimating = true;
    thumbnailStartIndex = Math.max(0, thumbnailStartIndex - thumbnailsPerView);

    // Add smooth slide animation
    thumbnailStrip.style.transform = 'translateX(20px)';
    thumbnailStrip.style.opacity = '0.7';

    setTimeout(() => {
        renderThumbnails();
        thumbnailStrip.style.transform = 'translateX(-20px)';

        requestAnimationFrame(() => {
            thumbnailStrip.style.transform = 'translateX(0)';
            thumbnailStrip.style.opacity = '1';
            setTimeout(() => isAnimating = false, 300);
        });
    }, 150);
}

function scrollThumbnailsNext() {
    const currentGallery = filteredGallery.length > 0 ? filteredGallery : galleryData;
    if (isAnimating || thumbnailStartIndex + thumbnailsPerView >= currentGallery.length) return;

    isAnimating = true;
    thumbnailStartIndex += thumbnailsPerView;

    // Add smooth slide animation
    thumbnailStrip.style.transform = 'translateX(-20px)';
    thumbnailStrip.style.opacity = '0.7';

    setTimeout(() => {
        renderThumbnails();
        thumbnailStrip.style.transform = 'translateX(20px)';

        requestAnimationFrame(() => {
            thumbnailStrip.style.transform = 'translateX(0)';
            thumbnailStrip.style.opacity = '1';
            setTimeout(() => isAnimating = false, 300);
        });
    }, 150);
}

function ensureThumbnailVisible(index) {
    const currentGallery = filteredGallery.length > 0 ? filteredGallery : galleryData;

    if (index < thumbnailStartIndex) {
        thumbnailStartIndex = Math.max(0, index - Math.floor(thumbnailsPerView / 2));
        renderThumbnails();
    } else if (index >= thumbnailStartIndex + thumbnailsPerView) {
        thumbnailStartIndex = Math.min(
            currentGallery.length - thumbnailsPerView,
            index - Math.floor(thumbnailsPerView / 2)
        );
        renderThumbnails();
    }
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
    lightboxTitleText.textContent = item.title;
    lightbox.classList.add('active');

    // Reset zoom when opening new image
    resetZoom();

    // Ensure thumbnail is visible and update active state
    ensureThumbnailVisible(index);
    updateActiveThumbnail(index);

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
    lightboxTitleText.textContent = item.title;

    // Reset zoom when changing images
    resetZoom();

    // Update thumbnail navigation
    ensureThumbnailVisible(currentImageIndex);
    updateActiveThumbnail(currentImageIndex);
}


function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % filteredGallery.length;
    const item = filteredGallery[currentImageIndex];

    lightboxImg.src = item.imageUrl;
    lightboxTitleText.textContent = item.title;

    // Reset zoom when changing images
    resetZoom();

    // Update thumbnail navigation
    ensureThumbnailVisible(currentImageIndex);
    updateActiveThumbnail(currentImageIndex);
}

// Upload Modal Functions
function openUploadModal() {
    uploadModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeUploadModal() {
    uploadModal.classList.remove('active');
    document.body.style.overflow = '';
    resetUploadArea();
}

function resetUploadArea() {
    uploadedFiles = [];
    imgView.innerHTML = `
        <i class="fas fa-cloud-upload-alt upload-icon"></i>
        <p>Drag and drop or click here <br> to upload images</p>
        <span>Upload any images from your device</span>
    `;
    addToGalleryBtn.disabled = true;
}

// Upload Functionality
function setupUploadFunctionality() {
    // Click to upload
    dropArea.addEventListener('click', () => inputFile.click());

    // File input change
    inputFile.addEventListener('change', handleFiles);

    // Drag and drop events
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults, false);
    });

    ['dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, unhighlight, false);
    });

    dropArea.addEventListener('drop', handleDrop, false);
}

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

function highlight() {
    dropArea.classList.add('highlight');
}

function unhighlight() {
    dropArea.classList.remove('highlight');
}

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles({ target: { files } });
}

function handleFiles(e) {
    const files = Array.from(e.target.files);
    uploadedFiles = files.filter(file => file.type.startsWith('image/'));

    if (uploadedFiles.length > 0) {
        displayUploadPreview();
        addToGalleryBtn.disabled = false;
    }
}

function displayUploadPreview() {
    if (uploadedFiles.length === 1) {
        const file = uploadedFiles[0];
        const imgUrl = URL.createObjectURL(file);
        imgView.style.backgroundImage = `url(${imgUrl})`;
        imgView.innerHTML = `<p style="background: rgba(0,0,0,0.7); padding: 10px; border-radius: 5px; color: white;">${file.name}</p>`;
    } else {
        imgView.style.backgroundImage = 'none';
        imgView.innerHTML = `
            <i class="fas fa-images upload-icon"></i>
            <p>${uploadedFiles.length} images selected</p>
            <span>Ready to upload to gallery</span>
        `;
    }
}

function addImagesToGallery() {
    uploadedFiles.forEach(file => {
        const imageUrl = URL.createObjectURL(file);
        const newImage = {
            id: nextId++,
            title: file.name.split('.')[0].replace(/[-_]/g, ' '),
            description: `Uploaded image: ${file.name}`,
            category: 'nature', // Default category for uploaded images
            imageUrl: imageUrl,
            liked: false,
            dateAdded: new Date().toISOString()
        };

        galleryData.unshift(newImage); // Add to beginning of array
    });

    // Refresh gallery display
    renderGallery(galleryData);

    // Reset filter to show all images including new ones
    filterButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector('[data-filter="all"]').classList.add('active');

    // Close modal
    closeUploadModal();

    // Show success message (optional)
    console.log(`Successfully added ${uploadedFiles.length} image(s) to gallery`);
}

// Advanced Features
let slideShowInterval = null;
let touchStartX = 0;
let touchEndX = 0;

// Image Preloading
function preloadImage(src) {
    return new Promise((resolve, reject) => {
        if (imageCache.has(src)) {
            resolve(imageCache.get(src));
            return;
        }

        const img = new Image();
        img.onload = () => {
            imageCache.set(src, img);
            resolve(img);
        };
        img.onerror = reject;
        img.src = src;
    });
}

// Auto Slideshow
function startSlideshow() {
    if (slideShowInterval) return;

    slideShowInterval = setInterval(() => {
        if (lightbox.classList.contains('active')) {
            nextImage();
        }
    }, 3000);

    // Add slideshow indicator
    const indicator = document.createElement('div');
    indicator.id = 'slideshow-indicator';
    indicator.innerHTML = '<i class="fas fa-play"></i> Slideshow Active';
    indicator.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 0.9rem;
        z-index: 2000;
        animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(indicator);
}

function stopSlideshow() {
    if (slideShowInterval) {
        clearInterval(slideShowInterval);
        slideShowInterval = null;

        const indicator = document.getElementById('slideshow-indicator');
        if (indicator) {
            indicator.remove();
        }

        // Update button icon
        const icon = slideshowBtn.querySelector('i');
        icon.className = 'fas fa-play';
        slideshowBtn.title = 'Start Slideshow';
    }
}

function toggleSlideshow() {
    if (slideShowInterval) {
        stopSlideshow();
    } else {
        startSlideshow();
        // Update button icon
        const icon = slideshowBtn.querySelector('i');
        icon.className = 'fas fa-pause';
        slideshowBtn.title = 'Stop Slideshow';
    }
}

// Touch/Swipe Gestures
function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next image
            nextImage();
        } else {
            // Swipe right - previous image
            prevImage();
        }
    }
}

// Image Zoom in Lightbox
let zoomLevel = 1;
const minZoom = 0.5;
const maxZoom = 3;
const zoomStep = 0.5;

function zoomIn() {
    if (zoomLevel < maxZoom) {
        zoomLevel += zoomStep;
        applyZoom();
    }
}

function zoomOut() {
    if (zoomLevel > minZoom) {
        zoomLevel -= zoomStep;
        applyZoom();
    }
}

function applyZoom() {
    const img = lightboxImg;
    img.style.transform = `scale(${zoomLevel})`;

    // Update cursor based on zoom level
    if (zoomLevel >= maxZoom) {
        img.style.cursor = 'zoom-out';
    } else if (zoomLevel <= minZoom) {
        img.style.cursor = 'zoom-in';
    } else {
        img.style.cursor = 'grab';
    }
}

function resetZoom() {
    zoomLevel = 1;
    applyZoom();
}

function toggleImageZoom() {
    if (zoomLevel === 1) {
        zoomIn();
    } else {
        resetZoom();
    }
}

// Image Comparison Mode
function enableComparisonMode() {
    if (filteredGallery.length < 2) return;

    const comparisonModal = document.createElement('div');
    comparisonModal.className = 'comparison-modal';
    comparisonModal.innerHTML = `
        <div class="comparison-content">
            <div class="comparison-images">
                <div class="comparison-image">
                    <img src="${filteredGallery[currentImageIndex].imageUrl}" alt="Image 1">
                    <span class="comparison-label">Current</span>
                </div>
                <div class="comparison-divider"></div>
                <div class="comparison-image">
                    <img src="${filteredGallery[(currentImageIndex + 1) % filteredGallery.length].imageUrl}" alt="Image 2">
                    <span class="comparison-label">Next</span>
                </div>
            </div>
            <button class="close-comparison">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

    document.body.appendChild(comparisonModal);

    // Add comparison styles
    const style = document.createElement('style');
    style.textContent = `
        .comparison-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.95);
            z-index: 3000;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: fadeIn 0.3s ease;
        }
        .comparison-content {
            position: relative;
            max-width: 90%;
            max-height: 90%;
        }
        .comparison-images {
            display: flex;
            gap: 20px;
            align-items: center;
        }
        .comparison-image {
            position: relative;
            max-width: 45vw;
            max-height: 80vh;
        }
        .comparison-image img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            border: 2px solid white;
            border-radius: 8px;
        }
        .comparison-label {
            position: absolute;
            bottom: -30px;
            left: 50%;
            transform: translateX(-50%);
            color: white;
            font-size: 1.1rem;
            font-weight: 600;
        }
        .comparison-divider {
            width: 2px;
            height: 60vh;
            background: linear-gradient(to bottom, transparent, white, transparent);
        }
        .close-comparison {
            position: absolute;
            top: -50px;
            right: 0;
            background: rgba(255,255,255,0.2);
            border: none;
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 1.2rem;
        }
    `;
    document.head.appendChild(style);

    comparisonModal.querySelector('.close-comparison').addEventListener('click', () => {
        comparisonModal.remove();
        style.remove();
    });
}

// Help Modal Functions
function openHelpModal() {
    helpModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeHelpModal() {
    helpModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Enhanced Lightbox Functions
function downloadImage() {
    const currentItem = filteredGallery[currentImageIndex];
    if (currentItem) {
        const link = document.createElement('a');
        link.href = currentItem.imageUrl;
        link.download = `${currentItem.title.replace(/\s+/g, '_')}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        lightbox.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable fullscreen: ${err.message}`);
        });
        fullscreenBtn.querySelector('i').className = 'fas fa-compress';
    } else {
        document.exitFullscreen();
        fullscreenBtn.querySelector('i').className = 'fas fa-expand';
    }
}

// Listen for fullscreen changes
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        fullscreenBtn.querySelector('i').className = 'fas fa-expand';
    }
});


function setupEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);

    // Help modal
    helpBtn.addEventListener('click', openHelpModal);
    closeHelp.addEventListener('click', closeHelpModal);

    // Upload modal
    uploadBtn.addEventListener('click', openUploadModal);
    closeUpload.addEventListener('click', closeUploadModal);
    addToGalleryBtn.addEventListener('click', addImagesToGallery);

    // Lightbox actions
    downloadBtn.addEventListener('click', downloadImage);
    fullscreenBtn.addEventListener('click', toggleFullscreen);
    closeLightboxBtn.addEventListener('click', closeLightboxFunc);
    slideshowBtn.addEventListener('click', toggleSlideshow);
    zoomInBtn.addEventListener('click', zoomIn);
    zoomOutBtn.addEventListener('click', zoomOut);
    compareBtn.addEventListener('click', enableComparisonMode);

    // Touch gestures for lightbox
    lightbox.addEventListener('touchstart', handleTouchStart, false);
    lightbox.addEventListener('touchend', handleTouchEnd, false);

    // Double-click to zoom
    lightboxImg.addEventListener('dblclick', toggleImageZoom);
    lightboxImg.style.cursor = 'zoom-in';

    // Close modals when clicking outside
    uploadModal.addEventListener('click', (e) => {
        if (e.target === uploadModal) {
            closeUploadModal();
        }
    });

    helpModal.addEventListener('click', (e) => {
        if (e.target === helpModal) {
            closeHelpModal();
        }
    });

    // Thumbnail navigation event listeners
    prevThumbnails.addEventListener('click', scrollThumbnailsPrev);
    nextThumbnails.addEventListener('click', scrollThumbnailsNext);

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

    // Enhanced keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Lightbox controls
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeLightboxFunc();
            } else if (e.key === 'ArrowLeft') {
                prevImage();
            } else if (e.key === 'ArrowRight') {
                nextImage();
            }
            return;
        }

        // Upload modal controls
        if (uploadModal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeUploadModal();
            }
            return;
        }

        // Help modal controls
        if (helpModal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeHelpModal();
            }
            return;
        }

        // Global shortcuts
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case 'u':
                    e.preventDefault();
                    openUploadModal();
                    break;
                case 'd':
                    e.preventDefault();
                    toggleTheme();
                    break;
            }
        }

        // Filter shortcuts
        if (!e.ctrlKey && !e.metaKey && !e.altKey) {
            switch(e.key) {
                case '1':
                    document.querySelector('[data-filter="all"]').click();
                    break;
                case '2':
                    document.querySelector('[data-filter="recent"]').click();
                    break;
                case '3':
                    document.querySelector('[data-filter="nature"]').click();
                    break;
                case '4':
                    document.querySelector('[data-filter="architecture"]').click();
                    break;
                case '5':
                    document.querySelector('[data-filter="travel"]').click();
                    break;
            }
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
