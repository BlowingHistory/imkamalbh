export function loadGalleryContent() {
    const galleryData = [
        "assets/gallery1.jpg",
        "assets/gallery2.jpg",
        "assets/gallery3.jpg",
        "assets/gallery4.jpg",
        "assets/gallery5.jpg",
        "assets/gallery6.jpg"
    ];

    const galleryGrid = document.getElementById('galleryGrid');
    
    galleryData.forEach(image => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `<img src="${image}" alt="Gallery Image">`;
        galleryGrid.appendChild(item);
    });
}