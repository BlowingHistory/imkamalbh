export function loadMusicContent() {
    const musicData = [
        {
            title: "Destiny ft. Saskreet",
            year: "2024",
            image: "assets/album1.png"
        // },
        // {
        //     title: "Mountain Echo",
        //     year: "2023",
        //     image: "assets/album2.jpg"
        // },
        // {
        //     title: "Urban Dreams",
        //     year: "2022",
        //     image: "assets/album3.jpg"
        }
    ];

    const musicGrid = document.getElementById('musicGrid');
    
    musicData.forEach(album => {
        const card = document.createElement('div');
        card.className = 'music-card';
        card.innerHTML = `
            <img src="${album.image}" alt="${album.title}">
            <div class="music-info">
                <h3>${album.title}</h3>
                <p>${album.year}</p>
            </div>
        `;
        musicGrid.appendChild(card);
    });
}