document.addEventListener('DOMContentLoaded', function() {
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const currentImageSpan = document.getElementById('current-image');
    const totalImagesSpan = document.getElementById('total-images');
    
    const images = [
        'images/image1.jpg',
        'images/image2.jpg',
        'images/image3.jpg',
        'images/image4.jpg',
        'images/image5.jpg'
    ];
    
    let currentIndex = 0;
    totalImagesSpan.textContent = images.length;
    
    
    function updateGallery(index) {
        mainImage.src = images[index];
        currentImageSpan.textContent = index + 1;
        
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        thumbnails[index].classList.add('active');
        
       
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === images.length - 1;
    }
    
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            currentIndex = parseInt(this.getAttribute('data-index'));
            updateGallery(currentIndex);
        });
    });
    
    
    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateGallery(currentIndex);
        }
    });
    
    
    nextBtn.addEventListener('click', function() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateGallery(currentIndex);
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
            currentIndex--;
            updateGallery(currentIndex);
        } else if (e.key === 'ArrowRight' && currentIndex < images.length - 1) {
            currentIndex++;
            updateGallery(currentIndex);
        }
    });
    
   
    updateGallery(0);
});