document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.gallery-image');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.getElementById('lightbox-close');

    // Open lightbox on image click
    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            lightboxImage.src = image.src;
            lightbox.classList.remove('hidden');
        });
    });

    // Close lightbox on close button click
    lightboxClose.addEventListener('click', () => {
        lightbox.classList.add('hidden');
    });

    // Close lightbox on outside click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.add('hidden');
        }
    });
});
