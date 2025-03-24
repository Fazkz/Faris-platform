let currentIndex = 0; // تحديد الصورة الحالية
const slides = document.querySelectorAll('.slide'); // اختيار كل الشرائح (الصور)

// وظيفة لتحريك الصور
function updateSlides() {
  slides.forEach((slide, index) => {
    slide.style.display = index === currentIndex ? 'block' : 'none';
  });
}

// الانتقال إلى الشريحة التالية أو السابقة
function moveSlide(direction) {
  currentIndex = (currentIndex + direction + slides.length) % slides.length; // حساب الشريحة الجديدة
  updateSlides(); // تحديث العرض
}

// تشغيل السلايدر تلقائيًا (اختياري)
function autoPlay() {
  setInterval(() => {
    moveSlide(1); // الانتقال للصورة التالية كل 5 ثوانٍ
  }, 7000);
}

// استدعاء الوظيفة لتحديث العرض عند تحميل الصفحة
updateSlides();
autoPlay();

//كود تتبع الماء 
// البدء من القيمة الافتراضية وهي 100
let waterAmount = 100;
const oneDayInMilliseconds = 24 * 60 * 60 * 1000; // مدة اليوم بالميلي ثانية

// تحميل القيمة المحفوظة من المتصفح إن كانت موجودة وصالحة
function loadWaterAmount() {
  const savedAmount = localStorage.getItem('waterAmount');
  const savedTime = localStorage.getItem('waterAmountTime');

  if (savedAmount && savedTime) {
    const now = new Date().getTime();
    const elapsedTime = now - savedTime;

    // التحقق مما إذا كانت المدة أقل من يوم واحد
    if (elapsedTime < oneDayInMilliseconds) {
      waterAmount = parseInt(savedAmount);
    } else {
      // إن كانت القيمة قديمة، إزالة البيانات
      localStorage.removeItem('waterAmount');
      localStorage.removeItem('waterAmountTime');
    }
  }
}

// حفظ القيمة الحالية في المتصفح مع الوقت
function saveWaterAmount() {
  const now = new Date().getTime();
  localStorage.setItem('waterAmount', waterAmount);
  localStorage.setItem('waterAmountTime', now);
}

// تحديث العرض بعد كل تعديل
function updateAmount() {
  document.getElementById('waterAmount').textContent = waterAmount;
  document.getElementById('amountInput').value = waterAmount;
  saveWaterAmount();
}

// زيادة الكمية عند النقر على زر (+)
document.getElementById('increase').addEventListener('click', function() {
  waterAmount += 1; // زيادة 1 مل فقط
  updateAmount();
});

// إنقاص الكمية عند النقر على زر (-)
document.getElementById('decrease').addEventListener('click', function() {
  if (waterAmount > 0) { // تحقق إذا كانت الكمية أكبر من 0
    waterAmount -= 1; // إنقاص 1 مل فقط
    updateAmount();
  }
});

// حدث عند النقر على زر "أشرب"
document.querySelector('.drink-btn').addEventListener('click', function() {
  alert(`لقد شربت ${waterAmount} مل من الماء!`);
});

// السماح للمستخدم بإدخال رقم مخصص
document.getElementById('amountInput').addEventListener('input', function() {
  const inputValue = parseInt(this.value);
  if (!isNaN(inputValue) && inputValue >= 0) {
    waterAmount = inputValue; // تحديث الكمية
    updateAmount();
  }
});

// تحميل الكمية المحفوظة عند تحميل الصفحة
loadWaterAmount();
updateAmount();

///الاحتياجات اليومية // 

function saveData(cell) {
    var rowId = cell.parentNode.rowIndex;
    var data = cell.innerHTML;
    localStorage.setItem('nutritionData' + rowId, data);
}

window.onload = function() {
    var rows = document.getElementById('nutritionBody').rows;
    for (var i = 0; i < rows.length; i++) {
        var savedData = localStorage.getItem('nutritionData' + (i + 1));
        if (savedData) {
            rows[i].cells[1].innerHTML = savedData;
        }
    }
}
