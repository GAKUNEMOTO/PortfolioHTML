document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.image-soccer img');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.opacity = i === index ? '1' : '0';
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // Change image every 2 seconds (adjust as needed)
    setInterval(nextImage, 2000);
});