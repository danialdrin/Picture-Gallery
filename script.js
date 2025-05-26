/* CSS Variables for Theme */
:root {
    /* Light theme (default) */
    --bg-color: #ffffff;
    --text-color: #333333;
    --header-bg: #ffffff;
    --search-bg: #f0f0f0;
    --card-bg: #ffffff;
    --border-color: #ddd;
    --shadow-color: rgba(0, 0, 0, 0.1);
    --button-bg: #333;
    --button-text: #fff;
    --button-hover: #555;
    --modal-bg: rgba(0, 0, 0, 0.3);
    --modal-content-bg: #ffffff;
}

[data-theme="dark"] {
    /* Dark theme */
    --bg-color: #1a1a1a;
    --text-color: #e0e0e0;
    --header-bg: #2d2d2d;
    --search-bg: #3a3a3a;
    --card-bg: #2d2d2d;
    --border-color: #444;
    --shadow-color: rgba(0, 0, 0, 0.3);
    --button-bg: #555;
    --button-text: #fff;
    --button-hover: #777;
    --modal-bg: rgba(0, 0, 0, 0.7);
    --modal-content-bg: #2d2d2d;
}

/* Reset and base styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--bg-color);
    transition: background-color 0.3s ease, color 0.3s ease;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header styles */
header {
    background-color: var(--header-bg);
    padding: 20px 10px 0px 0px;
    text-align: center;
    box-shadow: none;
    transition: background-color 0.3s ease;
}

.header-content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 80px; /* Space for buttons on the right */
}

.header-text {
    text-align: center;
}

.header-controls {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    gap: 10px;
    align-items: center;
}

.control-btn {
    width: 45px;
    height: 45px;
    border: none;
    border-radius: 50%;
    background-color: var(--button-bg);
    color: var(--button-text);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    box-shadow: 0 2px 5px var(--shadow-color);
}

.control-btn:hover {
    background-color: var(--button-hover);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px var(--shadow-color);
}

header h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: var(--text-color);
}

header p {
    font-size: 1.2rem;
    color: var(--text-color);
    opacity: 0.8;
}

/* Thumbnail Navigation Styles */
.thumbnail-container {
    background-color: var(--header-bg);
    padding: 20px 0;
    border-bottom: 1px solid var(--border-color);
    transition: background-color 0.3s ease;
}

.thumbnail-nav {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 70px; /* Space for fixed buttons */
}

.thumbnail-nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--button-bg);
    color: var(--button-text);
    border: none;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 12px var(--shadow-color);
    z-index: 10;
    backdrop-filter: blur(10px);
}

.thumbnail-nav-btn.prev-thumbnails {
    left: 10px;
}

.thumbnail-nav-btn.next-thumbnails {
    right: 10px;
}

.thumbnail-nav-btn:hover {
    background-color: var(--button-hover);
    transform: translateY(-50%) scale(1.15);
    box-shadow: 0 6px 20px var(--shadow-color);
}

.thumbnail-nav-btn:active {
    transform: translateY(-50%) scale(1.05);
}

.thumbnail-nav-btn:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    transform: translateY(-50%) scale(0.9);
    box-shadow: 0 2px 5px var(--shadow-color);
}

.thumbnail-strip {
    display: flex;
    gap: 12px;
    overflow: hidden;
    max-width: 800px;
    padding: 8px;
    transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    will-change: transform;
}

.thumbnail-item {
    flex-shrink: 0;
    width: 85px;
    height: 65px;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border: 3px solid transparent;
    position: relative;
    box-shadow: 0 2px 8px var(--shadow-color);
}

.thumbnail-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
}

.thumbnail-item:hover {
    transform: translateY(-3px) scale(1.08);
    border-color: var(--button-bg);
    box-shadow: 0 8px 25px var(--shadow-color);
}

.thumbnail-item:hover::before {
    opacity: 1;
}

.thumbnail-item.active {
    border-color: var(--button-bg);
    box-shadow: 0 0 20px rgba(51, 51, 51, 0.4);
    transform: translateY(-2px) scale(1.05);
}

.thumbnail-item.active::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 6px;
    background-color: var(--button-bg);
    border-radius: 50%;
    box-shadow: 0 0 10px var(--button-bg);
}

.thumbnail-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.thumbnail-item:hover img {
    transform: scale(1.15);
}

.thumbnail-item:active {
    transform: translateY(-1px) scale(1.02);
}

/* Fixed Help Button */
.help-btn-fixed {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: var(--button-bg);
    color: var(--button-text);
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px var(--shadow-color);
    transition: all 0.3s ease;
    z-index: 1000;
}

.help-btn-fixed:hover {
    background-color: var(--button-hover);
    transform: translateY(-3px);
    box-shadow: 0 6px 20px var(--shadow-color);
}

.help-btn-fixed:active {
    transform: translateY(-1px);
}

/* Search bar styles */
.search-container {
    background-color: var(--search-bg);
    padding: 20px 0;
    border-bottom: none;
    transition: background-color 0.3s ease;
}

.search-bar {
    display: flex;
    max-width: 600px;
    margin: 0 auto;
    box-shadow: 0 2px 5px var(--shadow-color);
    border-radius: 4px;
    overflow: hidden;
}

#search-input {
    flex: 1;
    padding: 12px 16px;
    border: none;
    font-size: 1rem;
    outline: none;
    background-color: var(--card-bg);
    color: var(--text-color);
    transition: background-color 0.3s ease, color 0.3s ease;
}

#search-input::placeholder {
    color: var(--text-color);
    opacity: 0.6;
}

#search-button {
    background-color: var(--button-bg);
    color: var(--button-text);
    border: none;
    padding: 0 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

#search-button:hover {
    background-color: var(--button-hover);
}

/* Gallery controls */
.gallery-controls {
    margin: 30px 0;
    display: flex;
    justify-content: center;
}

.filter-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
}

.filter-btn {
    padding: 8px 16px;
    background-color: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9rem;
    color: var(--text-color);
    transition: all 0.3s ease;
}

.filter-btn:hover {
    background-color: var(--search-bg);
}

.filter-btn.active {
    background-color: var(--button-bg);
    color: var(--button-text);
    border-color: var(--button-bg);
}

/* Gallery styles */
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 50px;
}

.gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 8px var(--shadow-color);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    height: 300px;
    background-color: var(--card-bg);
}

.gallery-item:hover {
    transform: translateY(-5px);
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.gallery-item:hover img {
    transform: scale(1.05);
}

.gallery-item-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
    color: #fff;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-item-info {
    opacity: 1;
}

.gallery-item-info h3 {
    margin-bottom: 5px;
    font-size: 1.2rem;
}

/* Like button styles */
.like-button {
    position: absolute;
    bottom: 15px;
    right: 15px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    opacity: 0;
    transform: scale(0.8);
    z-index: 10;
}

.gallery-item:hover .like-button {
    opacity: 1;
    transform: scale(1);
}

.like-button i {
    font-size: 1.2rem;
    color: #d2d2d2;
    transition: all 0.3s ease;
}

.like-button.liked i {
    color: #ff3366;
    transform: scale(1.2);
}

.like-button:hover {
    transform: scale(1.2);
}

.like-button:hover i {
    transform: scale(1.3);
}

.like-button.liked:hover i {
    color: #ff3366;
    text-shadow: 0 0 10px rgba(255, 51, 102, 0.8);
    transform: scale(1.4);
}

/* Lightbox styles */
.lightbox {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 1000;
    justify-content: center;
    align-items: center;
}

.lightbox.active {
    display: flex;
}

/* Fixed Title at Top */
.lightbox-title {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 70%, transparent 100%);
    padding: 20px 40px;
    z-index: 1001;
    text-align: center;
    backdrop-filter: blur(10px);
}

.lightbox-title h2 {
    color: #fff;
    font-size: 1.8rem;
    font-weight: 600;
    margin: 0;
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
    letter-spacing: 0.5px;
}

.lightbox-content {
    position: relative;
    max-width: 75%;
    max-height: calc(100vh - 180px);
    margin-top: 70px;
    margin-bottom: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.lightbox-img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border: 3px solid #fff;
    border-radius: 8px;
}

/* Fixed Action Buttons at Bottom */
.lightbox-actions {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 25px 40px;
    background: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 70%, transparent 100%);
    z-index: 1001;
    backdrop-filter: blur(10px);
}

.lightbox-action-btn {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    border: 2px solid rgba(255, 255, 255, 0.2);
    padding: 10px 12px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 0.85rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(15px);
    min-width: 60px;
    text-align: center;
}

.lightbox-action-btn i {
    font-size: 1.2rem;
    margin-bottom: 1px;
}

.lightbox-action-btn span {
    font-size: 0.7rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.3px;
}

.lightbox-action-btn:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.lightbox-action-btn:active {
    transform: translateY(-1px);
}

/* Enhanced Lightbox Image */
.lightbox-img {
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: zoom-in;
}

.lightbox-img.zoomed {
    cursor: zoom-out;
}

/* Advanced Gallery Item Effects */
.gallery-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
}

.gallery-item:hover::before {
    opacity: 1;
}

/* Loading Animation */
@keyframes shimmer {
    0% { background-position: -200px 0; }
    100% { background-position: calc(200px + 100%) 0; }
}

.loading-shimmer {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200px 100%;
    animation: shimmer 1.5s infinite;
}

/* Pulse Animation for Active Elements */
@keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(51, 51, 51, 0.4); }
    70% { box-shadow: 0 0 0 10px rgba(51, 51, 51, 0); }
    100% { box-shadow: 0 0 0 0 rgba(51, 51, 51, 0); }
}

.thumbnail-item.active {
    animation: pulse 2s infinite;
}

/* Smooth Scroll Behavior */
html {
    scroll-behavior: smooth;
}

/* Enhanced Upload Drop Area */
.upload-drop-area.highlight {
    background: linear-gradient(45deg, var(--card-bg), var(--search-bg));
    border-color: var(--button-bg);
    box-shadow: 0 0 20px rgba(51, 51, 51, 0.2);
}

/* Advanced Button Hover Effects */
.control-btn {
    position: relative;
    overflow: hidden;
}

.control-btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.3s ease, height 0.3s ease;
}

.control-btn:hover::before {
    width: 100%;
    height: 100%;
}

.lightbox-controls {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    pointer-events: none;
    z-index: 1001;
}

.lightbox-prev, .lightbox-next {
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    border: none;
    width: 60px;
    height: 60px;
    border-radius: 0;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s ease, transform 0.3s ease;
    pointer-events: auto;
}

.lightbox-prev {
    position: fixed;
    left: 0;
    height: 100%;
    border-radius: 0;
}

.lightbox-next {
    position: fixed;
    right: 0;
    height: 100%;
    border-radius: 0;
}

.lightbox-prev:hover, .lightbox-next:hover {
    background: rgba(0, 0, 0, 0.8);
}

.lightbox-prev:hover {
    transform: translateX(5px);
}

.lightbox-next:hover {
    transform: translateX(-5px);
}


@media (max-width: 768px) {
    .gallery {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }

    .lightbox-prev, .lightbox-next {
        width: 40px;
    }

    .lightbox-title {
        padding: 15px 20px;
    }

    .lightbox-title h2 {
        font-size: 1.4rem;
    }

    .lightbox-content {
        max-width: 85%;
    }

    .lightbox-actions {
        padding: 18px 15px;
        gap: 12px;
        flex-wrap: wrap;
    }

    .lightbox-action-btn {
        min-width: 55px;
        padding: 8px 10px;
    }

    .lightbox-action-btn i {
        font-size: 1.1rem;
    }

    .lightbox-action-btn span {
        font-size: 0.65rem;
    }
}

@media (max-width: 480px) {
    header h1 {
        font-size: 2rem;
    }

    .gallery {
        grid-template-columns: 1fr;
    }

    .gallery-item {
        height: 250px;
    }

    .header-content {
        flex-direction: column;
        padding: 0 20px;
        gap: 20px;
    }

    .header-controls {
        position: static;
        transform: none;
        justify-content: center;
    }

    .lightbox-title {
        padding: 10px 15px;
    }

    .lightbox-title h2 {
        font-size: 1.2rem;
    }

    .lightbox-content {
        max-width: 95%;
        margin-top: 55px;
        margin-bottom: 130px;
    }

    .lightbox-actions {
        padding: 12px 8px;
        gap: 6px;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .lightbox-action-btn {
        min-width: 45px;
        padding: 6px 8px;
        gap: 3px;
    }

    .lightbox-action-btn i {
        font-size: 0.9rem;
    }

    .lightbox-action-btn span {
        font-size: 0.6rem;
    }

    .thumbnail-nav {
        gap: 10px;
        padding: 0 10px;
    }

    .thumbnail-nav-btn {
        width: 35px;
        height: 35px;
    }

    .thumbnail-item {
        width: 70px;
        height: 50px;
    }

    .help-btn-fixed {
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        font-size: 1.2rem;
    }
}

@media (max-width: 600px) {
    .thumbnail-nav {
        gap: 8px;
        padding: 0 10px;
    }

    .thumbnail-nav-btn {
        width: 30px;
        height: 30px;
        font-size: 0.8rem;
    }

    .thumbnail-item {
        width: 60px;
        height: 45px;
    }

    .thumbnail-strip {
        max-width: 300px;
        gap: 8px;
    }
}

/* Upload Modal Styles */
.upload-modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--modal-bg);
    backdrop-filter: blur(5px);
    z-index: 2000;
    justify-content: center;
    align-items: center;
    animation: fadeIn 0.3s ease;
}

.upload-modal.active {
    display: flex;
}

.upload-modal-content {
    background-color: var(--modal-content-bg);
    border-radius: 12px;
    padding: 30px;
    max-width: 600px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    box-shadow: 0 10px 30px var(--shadow-color);
    animation: slideIn 0.3s ease;
}

.upload-modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid var(--border-color);
}

.upload-modal-header h2 {
    color: var(--text-color);
    font-size: 1.5rem;
    margin: 0;
}

.close-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    color: var(--text-color);
    cursor: pointer;
    padding: 5px;
    border-radius: 50%;
    transition: background-color 0.3s ease;
}

.close-btn:hover {
    background-color: var(--search-bg);
}

.upload-drop-area {
    min-height: 300px;
    width: 100%;
    border: 3px dashed var(--border-color);
    border-radius: 12px;
    background-color: var(--search-bg);
    padding: 30px;
    transition: all 0.3s ease;
    cursor: pointer;
    margin-bottom: 20px;
}

.upload-drop-area:hover,
.upload-drop-area.highlight {
    border-color: var(--button-bg);
    background-color: var(--card-bg);
}

.upload-img-view {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    min-height: 250px;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

.upload-icon {
    font-size: 4rem;
    color: var(--text-color);
    opacity: 0.6;
}

.upload-img-view p {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-color);
    margin: 0;
}

.upload-img-view span {
    color: var(--text-color);
    opacity: 0.7;
    font-size: 0.9rem;
}

.upload-actions {
    display: flex;
    justify-content: center;
    gap: 15px;
}

.upload-btn {
    padding: 12px 24px;
    background-color: var(--button-bg);
    color: var(--button-text);
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    transition: all 0.3s ease;
}

.upload-btn:hover:not(:disabled) {
    background-color: var(--button-hover);
    transform: translateY(-2px);
}

.upload-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

/* Animations */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(-50px) scale(0.9);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

/* Help Modal Styles */
.help-content {
    max-height: 60vh;
    overflow-y: auto;
}

.shortcut-section {
    margin-bottom: 25px;
}

.shortcut-section h3 {
    color: var(--text-color);
    font-size: 1.2rem;
    margin-bottom: 15px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--border-color);
}

.shortcut-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid var(--border-color);
}

.shortcut-item:last-child {
    border-bottom: none;
}

.shortcut-item kbd {
    background-color: var(--search-bg);
    color: var(--text-color);
    padding: 4px 8px;
    border-radius: 4px;
    font-family: monospace;
    font-size: 0.9rem;
    border: 1px solid var(--border-color);
    box-shadow: 0 1px 3px var(--shadow-color);
}

.shortcut-item span {
    color: var(--text-color);
    opacity: 0.8;
}
