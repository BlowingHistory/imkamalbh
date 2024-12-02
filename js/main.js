import { initializeNavigation } from './navigation.js';
import { loadMusicContent } from './music.js';
import { loadGalleryContent } from './gallery.js';
import { initializeContactForm } from './contact.js';

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    loadMusicContent();
    loadGalleryContent();
    initializeContactForm();
});