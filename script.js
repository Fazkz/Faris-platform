function openMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('open');
}
//كود الخلفيات 
// عرض الصورة في النافذة المنبثقة
function showImage(imageSrc) {
  const popup = document.getElementById('popup');
  const overlay = document.getElementById('overlay');
  const popupImage = document.getElementById('popupImage');
  const downloadBtn = document.getElementById('downloadBtn');

  popup.style.display = "block";
  overlay.style.display = "block";
  popupImage.src = imageSrc;
  downloadBtn.href = imageSrc; // ربط زر التنزيل بالصورة
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

// زر إتمام البحث
function completeSearch() {
  document.getElementById('searchInput').value = '';
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.display = "block"; // إظهار جميع الصور بعد انتهاء البحث
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
// كود عدد المستخدمين
    // عداد الزيارات
document.addEventListener('DOMContentLoaded', function() {
    // تحديث عداد الزيارات
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    document.getElementById('visitCount').textContent = visitCount;

    // تحديث عداد التقييمات
    let ratingCount = localStorage.getItem('ratingCount') || 0;
    document.getElementById('ratingCount').textContent = ratingCount;

    // التقييم بالنجوم
    const stars = document.querySelectorAll('.stars i');
    let selectedStars = 0;
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            selectedStars = index + 1;
            stars.forEach((s, i) => {
                if (i < selectedStars) {
                    s.classList.add('selected');
                } else {
                    s.classList.remove('selected');
                }
            });
        });
    });

    // وظيفة عند النقر على زر "قيّم الموقع"
    document.getElementById('rateBtn').addEventListener('click', () => {
        if (selectedStars > 0) {
            ratingCount++;
            localStorage.setItem('ratingCount', ratingCount);
            document.getElementById('ratingCount').textContent = ratingCount;
            alert('شكراً لتقييمك!');
        } else {
            alert('يرجى تحديد عدد النجوم قبل التقييم.');
        }
    });

    // وظيفة عند النقر على زر "إعادة التعيين"
    document.getElementById('resetBtn').addEventListener('click', () => {
        localStorage.setItem('visitCount', 0);
        localStorage.setItem('ratingCount', 0);
        document.getElementById('visitCount').textContent = 0;
        document.getElementById('ratingCount').textContent = 0;
        stars.forEach(star => star.classList.remove('selected'));
        selectedStars = 0;
        alert('تمت إعادة التعيين بنجاح!');
    });
});
