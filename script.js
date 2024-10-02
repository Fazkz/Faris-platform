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
//كود عدد المستخدمين
// تحقق مما إذا كانت هذه أول زيارة للمستخدم
let hasVisited = localStorage.getItem('hasVisited');

// إذا لم يكن هناك سجل للزيارة السابقة
if (!hasVisited) {
    // اضبط أن المستخدم قد زار الموقع
    localStorage.setItem('hasVisited', 'true');

    // جلب عدد الزيارات من LocalStorage
    let visitCount = localStorage.getItem('visitCount');

    // إذا كان العداد غير موجود، اضبطه على 0
    if (!visitCount) {
        visitCount = 0;
    }

    // زيد العداد بمقدار 1
    visitCount++;

    // تحديث قيمة العداد في LocalStorage
    localStorage.setItem('visitCount', visitCount);
}

// عرض عدد الزيارات في الصفحة
document.getElementById('visitCount').textContent = localStorage.getItem('visitCount') || 0;