export function loadGalleryContent() {
    const galleryData = [
        "assets/gallery1.jpg"
    ];

    const galleryGrid = document.getElementById('galleryGrid');
    
    galleryData.forEach(image => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `<img src="${image}" alt="Gallery Image">`;
        galleryGrid.appendChild(item);
    });
}
