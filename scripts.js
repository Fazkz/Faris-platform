// عرض الصورة في النافذة المنبثقة
function showImage(imageSrc) {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    const popupImage = document.getElementById('popupImage');

    popup.style.display = "block";
    overlay.style.display = "block";
    popupImage.src = imageSrc;
}

// إغلاق النافذة المنبثقة
function closePopup() {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');

    popup.style.display = "none";
    overlay.style.display = "none";
}

// وظيفة البحث
function searchImages() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const altText = card.querySelector('img').alt.toLowerCase();
        if (altText.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// تصفية الصور حسب التصنيف
function filterImages(category) {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
