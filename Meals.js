document.addEventListener("DOMContentLoaded", () => {
    loadMealData(); // Load meal data from localStorage when the page loads
    loadCustomFoodData(); // Load custom food data from localStorage when the page loads
    updateNutritionalSummary(); // Update nutritional summary on page load
});

let selectedFood = '';
let selectedMeal = '';
let selectedCalories = 0;
let selectedFat = 0;
let selectedProtein = 0;
let selectedCarbs = 0;
let selectedIngredients = '';

function openFoodSearch(meal) {
    document.getElementById("foodSearchModal").style.display = "block";
    document.getElementById("foodSearchModal").setAttribute("data-meal", meal);
    showAllFoodItems(); // Show all food items when opening the search modal
    selectedMeal = meal; // Set the selected meal to the meal for which the search is being opened
}

function closeFoodSearch() {
    document.getElementById("foodSearchModal").style.display = "none";
    document.getElementById("foodSearchInput").value = ''; // Clear search input
}

function showFoodConfirmation(food, meal, calories, fat, protein, carbs, ingredients) {
    selectedFood = food;
    selectedCalories = calories;
    selectedFat = fat;
    selectedProtein = protein;
    selectedCarbs = carbs;
    selectedIngredients = ingredients;
    document.getElementById("foodConfirmationDetails").innerHTML = `
        <img src="images/${food}.jpg" alt="${food}">
        <span>${food}</span>
        <p>السعرات الحرارية: ${calories}</p>
        <p>الدهون: ${fat} جم</p>
        <p>البروتين: ${protein} جم</p>
        <p>الكربوهيدرات: ${carbs} جم</p>
        <p>المكونات: ${ingredients}</p>
    `;
    document.getElementById("foodConfirmationModal").style.display = "block";
}

function closeFoodConfirmation() {
    document.getElementById("foodConfirmationModal").style.display = "none";
}

function confirmAddFood() {
    const mealList = document.getElementById(`${selectedMeal}-list`);
    const foodItem = document.createElement("div");
    foodItem.className = "food-item";
    foodItem.innerHTML = `
        <img src="images/${selectedFood}.jpg" alt="${selectedFood}">
        <span>${selectedFood}</span>
        <button class="delete-button" onclick="removeFood(this)">حذف</button>
    `;
    mealList.appendChild(foodItem);
    saveMealData(); // Save updated meal data to localStorage
    updateNutritionalSummary(); // Update nutritional summary
    closeFoodConfirmation();
    closeFoodSearch();
}

function searchComplete() {
    const searchInput = document.getElementById("foodSearchInput").value.toLowerCase();
    const foodItems = document.querySelectorAll("#foodList .food-item");

    let anyVisibleItems = false;

    foodItems.forEach(item => {
        const foodName = item.querySelector("span").textContent.toLowerCase();
        if (foodName.includes(searchInput)) {
            item.style.display = "flex"; // Show matching item
            anyVisibleItems = true;
        } else {
            item.style.display = "none"; // Hide non-matching item
        }
    });

    // If no matching food item is found, show a message
    const noResultsMessage = document.querySelector("#foodList .no-results-message");
    if (!anyVisibleItems && !noResultsMessage) {
        const noResultsDiv = document.createElement("div");
        noResultsDiv.textContent = "لم يتم العثور على نتائج";
        noResultsDiv.className = "no-results-message";
        noResultsDiv.style.padding = "10px";
        noResultsDiv.style.textAlign = "center";
        noResultsDiv.style.color = "#888";
        document.getElementById("foodList").appendChild(noResultsDiv);
    } else if (anyVisibleItems && noResultsMessage) {
        noResultsMessage.remove(); // Remove no results message if there are visible items
    }
}

function showAllFoodItems() {
    const foodItems = document.querySelectorAll("#foodList .food-item");
    foodItems.forEach(item => {
        item.style.display = "flex";
    });
    const noResultsMessage = document.querySelector("#foodList .no-results-message");
    if (noResultsMessage) {
        noResultsMessage.remove(); // Remove no results message if all items are shown
    }
}

function removeFood(button) {
    const foodItem = button.parentElement;
    foodItem.remove(); // Remove the food item from the meal list
    saveMealData(); // Save updated meal data to localStorage
    updateNutritionalSummary(); // Update nutritional summary
}

function saveMealData() {
  const meals = ["breakfast", "snack1", "lunch", "snack2", "dinner"];
  const mealData = {};

  meals.forEach(meal => {
    const mealList = document.getElementById(`${meal}-list`);
    mealData[meal] = [];
    mealList.querySelectorAll(".food-item").forEach(item => {
      const foodName = item.querySelector("span").textContent;
      const quantity = item.querySelector("p").textContent.split(":")[1].trim(); // استخلاص الكمية
      mealData[meal].push({ name: foodName, quantity }); // إضافة الكمية
    });
  });

  localStorage.setItem("mealData", JSON.stringify(mealData));
}
///////زر الحذف مخفي عند تشغيل الصفحة 
function loadMealData() {
  const mealData = JSON.parse(localStorage.getItem("mealData")) || {};
  const meals = ["breakfast", "snack1", "lunch", "snack2", "dinner"];

  meals.forEach(meal => {
    const mealList = document.getElementById(`${meal}-list`);
    const foods = mealData[meal] || [];

    foods.forEach(food => {
      const foodItem = document.createElement("div");
      foodItem.className = "food-item";
      foodItem.innerHTML = `
                <img src="images/${food.name}.jpg" alt="${food.name}">
                <span>${food.name}</span>
                <p>الكمية: ${food.quantity}</p>
                <button class="delete-button" onclick="removeFood(this)" style="display: none;">حذف</button>
            `;
      mealList.appendChild(foodItem);
    });
  });
}

function updateNutritionalSummary() {
    const meals = ["breakfast", "snack1", "lunch", "snack2", "dinner"];
    let totalCalories = 0;
    let totalFat = 0;
    let totalProtein = 0;
    let totalCarbs = 0;

    meals.forEach(meal => {
        const mealList = document.getElementById(`${meal}-list`);
        mealList.querySelectorAll(".food-item").forEach(item => {
            // استخدم نفس المنطق لاستخراج المعلومات الغذائية
            const foodName = item.querySelector("span").textContent;
            // هنا نحتاج للحصول على المعلومات الغذائية للطعام، إما من كائن أو API
            // في هذا المثال البسيط، نفترض أن لدينا دالة getNutritionalInfo(foodName)
            const nutritionalInfo = getNutritionalInfo(foodName);

            totalCalories += nutritionalInfo.calories;
            totalFat += nutritionalInfo.fat;
            totalProtein += nutritionalInfo.protein;
            totalCarbs += nutritionalInfo.carbs;
        });
    });

    // تحديث HTML
    document.getElementById("total-calories").textContent = `: ${totalCalories}`;
    document.getElementById("total-fat").textContent = `: ${totalFat} `;
    document.getElementById("total-protein").textContent = `: ${totalProtein} `;
    document.getElementById("total-carbs").textContent = `: ${totalCarbs} `;
}
////القيم الغذائية للأطعمه ////////////
////////////////..//...../////////////
function getNutritionalInfo(foodName) {
  // تعريف معلومات غذائية لكل عنصر طعام
  const foodData = {
    // فواكة //////////
"أناناس طازج": { calories: 50, fat: 0.1, protein: 0.5, carbs: 13.1 },
"تفاحه بالقشره": { calories: 52, fat: 0.17, protein: 0.26, carbs: 13.81 },
"موز طازج|بدون قشر": { calories: 97, fat: 0.28, protein: 0.74, carbs: 22 },
"فراولة طازجه": { calories: 16, fat: 0.15, protein: 0.3, carbs: 3.8 },
"برتقال طازج": { calories: 47, fat: 0.1, protein: 0.9, carbs: 11.8 },
"عنب طازج": { calories: 69, fat: 0.2, protein: 0.72, carbs: 18 },
"رمان": { calories: 83, fat: 1.2, protein: 1.67, carbs: 18.7 },
 "كيوي": { calories: 61, fat: 0.5, protein: 1.1, carbs: 14.7 },
 "مانجو": { calories: 60, fat: 0.4, protein: 0.8, carbs: 15 },
 "بابايا": { calories: 43, fat: 0.3, protein: 0.5, carbs: 10.8 },
 "تين": { calories: 74, fat: 0.3, protein: 0.8, carbs: 19.2 },
 "كمثرى": { calories: 57, fat: 0.1, protein: 0.4, carbs: 15.2 },
 "توت أزرق": { calories: 57, fat: 0.3, protein: 0.7, carbs: 14.5 },
 "خوخ": { calories: 39, fat: 0.3, protein: 0.9, carbs: 9.5 },
 "جوافة": { calories: 68, fat: 0.3, protein: 2.6, carbs: 14.3 },
 "بطيخ أحمر": { calories: 30, fat: 0.2, protein: 0.6, carbs: 7.6 },
    ////خضراوات//////
 "جزر": { calories: 41, fat: 0.24, protein: 0.93, carbs: 9.58 },
    // لحوم و بيض //////////
    "بيض مسلوق": { calories: 135, fat: 21, protein: 5, carbs: 1, },
    "سلطة دجاج سيزر": { calories: 42, fat: 31, protein: 52, carbs: 4, },
   ////الحبوب و منتجاتها /////
   "أرز ابيض (مطبوخ)": { calories: 130, fat: 0.2, protein: 2.7, carbs: 28,},
    //الاجبان و منتجاتها //// 
    "جبن سائل بوك": { calories: 323, fat: 31, protein: 8.7, carbs: 1.9,},
    "جبن سائل المراعي": { calories: 103, fat: 10, protein: 1.6, carbs: 2,},
    "جبنة بالقشطة": { calories: 100, fat: 10, protein: 2, carbs: 1,},
    ///// مشروبات غازيه ///////////
    "بيبسي دايت": { calories: 1, fat: 0, protein: 0, carbs: 0 },
 "ميرندا تفاح أخضر": { calories: 176.4, fat: 0, protein: 0, carbs: 13 },
 "ميرندا برتقال": { calories: 170, fat: 0, protein: 0, carbs: 14 },
 "بربيكان شعير فراوله": { calories: 82.5, fat: 0, protein: 0, carbs: 8.4 },
    "ميرندا فراولة": { calories: 153.6, fat: 0, protein: 0, carbs: 13 },
"كينزا كوكتيل تفاح ونعناع": { calories: 134.5, fat: 0, protein: 0, carbs: 13.2 },
    "شاني بنكهة الفواكة": { calories: 166.4, fat: 0, protein: 0, carbs: 14 },
    ////مخبوزات //////
    "خبز توست بر": { calories: 75, fat: 1, protein: 3, carbs: 13 },
    "خبز توست أبيض": { calories: 79, fat: 1, protein: 3, carbs: 15 },
    "خبز توست نخالة": { calories: 81, fat: 1, protein: 3, carbs: 13 },
    "خبز توست بالحليب": { calories: 86, fat: 2, protein: 3, carbs: 15 },
    "فطيرة الجبنة": { calories: 265, fat: 15, protein: 7, carbs: 25 },
    "كرواسان الشوكولاتة": { calories: 257, fat: 16, protein: 4, carbs: 25 },
    ////حلويات ///////
    ////شوكولاته//////
    "شوكولاته بريك سوبا": { calories: 149, fat: 7, protein: 1, carbs: 21 },
    "شوكولاته سنيكرز": { calories: 147, fat: 7, protein: 2.5, carbs: 17 },
    "كيك بار الشوكولاته بالكراميل": { calories: 158, fat: 7, protein: 1.5, carbs: 23 },
    "ديمة فانتزي كيك بالشوكولاته": { calories: 156, fat: 23, protein: 6, carbs: 16 },
    "شوكولاته بريك ستار": { calories: 69, fat: 4, protein: 1, carbs: 7 },
    "بسكريم بكريمة الكراميل": { calories: 65.16, fat: 5, protein: 1, carbs: 13 },
/////ورقيات -/////////
    "خس طازج": { calories: 17, fat: 0.3, protein: 1.2, carbs: 3.3 },
    "جرجير طازج": { calories: 25, fat: 0.7, protein: 2.6, carbs: 3.7 },
    "كزبرة طازج": { calories: 23, fat: 0.5, protein: 2.1, carbs: 3.7 },
    "كراث طازج": { calories: 61, fat: 0.3, protein: 1.5, carbs: 14.2 },
    "نعناع بلدي طازج": { calories: 44, fat: 0.7, protein: 3.3, carbs: 8.4 },
    "بقدونس طازج": { calories: 36, fat: 0.8, protein: 3, carbs: 6.3 },
  };
//////نهاية القيم الغذائية |/
/////////////.///././///////.//////////
    // إضافة العناصر المخصصة إلى البيانات الغذائية
    const customFoodData = JSON.parse(localStorage.getItem("customFoodData")) || [];
    customFoodData.forEach(customFood => {
        foodData[customFood.name] = {
            calories: parseInt(customFood.calories, 10),
            fat: parseInt(customFood.fat, 10),
            protein: parseInt(customFood.protein, 10),
            carbs: parseInt(customFood.carbs, 10)
        };
    });

    return foodData[foodName] || { calories: 0, fat: 0, protein: 0, carbs: 0 };
}
// كود انشاء وجبة مخصصة
function openCustomFoodModal() {
    document.getElementById("customFoodModal").style.display = "block";
}

function closeCustomFoodModal() {
    document.getElementById("customFoodModal").style.display = "none";
}

let foodList = JSON.parse(localStorage.getItem('foodList')) || []; // لتحميل الأطعمة المخزنة
//الاطعمه الجديده 
function getBase64(file, callback) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => callback(reader.result);
  reader.onerror = error => console.log('Error: ', error);
}
//////////حفظ الطعام المخصص //////////
function saveCustomFood() {
  const foodImage = document.getElementById("foodImage").files[0];
  const foodName = document.getElementById("foodName").value;
  const foodDesc = document.getElementById("foodDesc").value;
  const servingUnit = document.getElementById("servingUnit").value;
  const unitCount = document.getElementById("unitCount").value;
  const calories = document.getElementById("calories").value;
  const carbs = document.getElementById("carbs").value;
  const fats = document.getElementById("fats").value;
  const protein = document.getElementById("protein").value;
  const foodCategory = document.getElementById("foodCategory").value;

  if (!foodName || !unitCount || !calories || !carbs || !fats || !protein) {
    alert("يرجى تعبئة جميع الحقول المطلوبة");
    return;
  }

  // إنشاء كائن للطعام الجديد
  const newFood = {
    name: foodName,
    description: foodDesc,
    image: URL.createObjectURL(foodImage), // استخدام الصورة المحملة
    servingUnit: servingUnit,
    unitCount: unitCount,
    calories: parseInt(calories),
    carbs: parseInt(carbs),
    fats: parseInt(fats),
    protein: parseInt(protein),
    category: foodCategory
  };

 
  // حفظ الطعام في localStorage
  foodList.push(newFood);
  localStorage.setItem('foodList', JSON.stringify(foodList)); // حفظ قائمة الأطعمة

  // تحديث قائمة الأطعمة على الصفحة
  displayFood(newFood);

  // إغلاق النافذة المنبثقة
  closePopup();
}
////استرجاع الطعام الجديد 
function loadSavedFoods() {
  const savedFoods = JSON.parse(localStorage.getItem('foodList')) || [];

  savedFoods.forEach(food => {
    displayFood(food); // عرض كل طعام مخزن
  });
}

// استدعاء الدالة عند تحميل الصفحة
window.onload = function() {
  loadSavedFoods();
};
//--//القيم الغذائية للطعام الجديد ////////
function confirmAddFood() {
  // إضافة الكود هنا لتحديث القيم الغذائية
  // مثال: تحديث السعرات الحرارية والبروتين والكربوهيدرات والدهون
  const calories = parseInt(document.getElementById("calories").value);
  const protein = parseInt(document.getElementById("protein").value);
  const carbs = parseInt(document.getElementById("carbs").value);
  const fats = parseInt(document.getElementById("fats").value);

  // تحديث القيم الغذائية في الـ HTML
  document.getElementById("total-calories").innerText = parseInt(document.getElementById("total-calories").innerText) + calories;
  document.getElementById("total-protein").innerText = parseInt(document.getElementById("total-protein").innerText) + protein;
  document.getElementById("total-carbs").innerText = parseInt(document.getElementById("total-carbs").innerText) + carbs;
  document.getElementById("total-fat").innerText = parseInt(document.getElementById("total-fat").innerText) + fats;

  // إغلاق نافذة التأكيد
  closeFoodConfirmation();
}
////////////// 
function showFoodConfirmation(name, category, calories, carbs, fats, protein, description, image,) {
  const modal = document.getElementById("foodConfirmationModal");
  const detailsDiv = document.getElementById("foodConfirmationDetails");

  detailsDiv.innerHTML = `
    <h3>تأكيد إضافة الطعام</h3>
    <img src="${image}" alt="${name}" style="width:100px;height:100px;">
    <p>اسم الطعام: ${name}</p>
    <p>التصنيف: ${category}</p>
    <p>السعرات: ${calories}</p>
    <p>الكربوهيدرات: ${carbs}</p>
    <p>الدهون: ${fats}</p>
    <p>البروتين: ${protein}</p>
    <p>الوصف: ${description}</p>
  `;

  modal.style.display = "block"; // عرض النافذة
}
/////////حفظ الاطعمة في قائمة الطعام//////
function displayFood(food) {
  const foodListDiv = document.getElementById("foodList");
  const foodItem = document.createElement("div");
  foodItem.className = "food-item";
  foodItem.setAttribute("data-category", food.category);

  // إضافة زر الحذف
  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.innerHTML = "×";
  deleteButton.onclick = () => deleteFoodItem(food.name);

  // محتوى الطعام
  foodItem.innerHTML = `
    <img src="${food.image}" alt="${food.name}">
    <span>${food.name}</span>
  `;

  // إضافة زر الحذف إلى العنصر
  foodItem.appendChild(deleteButton);

  // إضافة العنصر إلى قائمة الأطعمة
  foodListDiv.appendChild(foodItem);

  // إضافة وظيفة النقر لعرض تفاصيل الطعام
  foodItem.onclick = () => showFoodConfirmation(food.name, food.category, food.calories, food.carbs, food.fats, food.protein, food.description, food.image);
}

/////زر الحذف لكي يعمل //////
function deleteFoodItem(foodName) {
  // استرجاع قائمة الأطعمة من localStorage
  let savedFoods = JSON.parse(localStorage.getItem('foodList')) || [];

  // فلترة القائمة لحذف العنصر المحدد
  savedFoods = savedFoods.filter(food => food.name !== foodName);

  // تحديث localStorage بالقائمة المحدثة
  localStorage.setItem('foodList', JSON.stringify(savedFoods));

  // إعادة تحميل قائمة الأطعمة على الصفحة
  document.getElementById("foodList").innerHTML = ''; // إفراغ القائمة
  loadSavedFoods(); // إعادة تحميل القائمة المحدثة
}
// تعديل دالة showFoodConfirmation لعرض الصورة
function showFoodConfirmation(food, meal, calories, fat, protein, carbs, ingredients, image) {
    selectedFood = food;
    selectedCalories = calories;
    selectedFat = fat;
    selectedProtein = protein;
    selectedCarbs = carbs;
    selectedIngredients = ingredients;
    document.getElementById("foodConfirmationDetails").innerHTML = `
        <img src="${image}" alt="${food}">
        <span>${food}</span>
        <p>الوصف: ${ingredients}</p>
        <p>السعرات الحرارية: ${calories}</p>
        <p>الدهون: ${fat} جم</p>
        <p>البروتين: ${protein} جم</p>
        <p>الكربوهيدرات: ${carbs} جم</p>
        <p>يُفضل كتابة الكمية تحت </p>
<label for="foodQuantity">الكمية:</label>
        <input type="number" id="foodQuantity" value="1" min="1" style="width: 100px; text-align: center;">
        <label for="servingUnit">وحدة التقدير:</label>
        <select id="servingUnit" style="margin-left: 55px;">
            <option value="جرام">جرام</option>
            <option value="مل">مل</option>
            <option value="قطعة">قطعة</option>
    `;
    document.getElementById("foodConfirmationModal").style.display = "block";
}

// تحميل بيانات الطعام المخصص مع الصورة
function loadCustomFoodData() {
    const customFoodData = JSON.parse(localStorage.getItem("customFoodData")) || [];
    ;
}


// عند النقر على زر الإضافة في نافذة التأكيد، يتم إضافة الطعام إلى قائمة الوجبات
function confirmAddFood() {
  const quantity = document.getElementById("foodQuantity").value; // الكمية المدخلة
  const unit = document.getElementById("servingUnit").value; // وحدة التقدير

  const mealList = document.getElementById(`${selectedMeal}-list`);
  const foodItem = document.createElement("div");
  foodItem.className = "food-item";
  foodItem.innerHTML = `
        <img src="${document.querySelector('#foodConfirmationDetails img').src}" alt="${selectedFood}">
        <span>${selectedFood}</span>
        <p>الكمية: ${quantity} ${unit}</p>
        <button class="delete-button" onclick="removeFood(this)" style="display: none;">حذف</button>
    `;
  mealList.appendChild(foodItem);

  saveMealData(); // حفظ البيانات إلى localStorage
  updateNutritionalSummary(); // تحديث ملخص القيم الغذائية
  closeFoodConfirmation();
  closeFoodSearch();
}
function showDeleteButtons() {
  const deleteButtons = document.querySelectorAll('.delete-button');
  deleteButtons.forEach(button => {
    button.style.display = "inline-block"; // إظهار أزرار الحذف
  });
}
//////❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤////

function deleteCustomFood(foodName, foodItemElement) {
    // حذف العنصر من DOM
    foodItemElement.remove();
    // يمكنك إضافة المزيد من المنطق هنا إذا كنت تريد حفظ التغييرات في localStorage أو إجراء آخر
    console.log(`تم حذف الطعام: ${foodName}`);
}
// Save settings to local storage
document.getElementById('save-settings').addEventListener('click', () => {
  const dailyCalories = document.getElementById('daily-calories').value;
  const targetWeight = document.getElementById('target-weight').value;

  localStorage.setItem('dailyCalories', dailyCalories);
  localStorage.setItem('targetWeight', targetWeight);
  alert('Settings saved!');
});

// Load settings on page load
window.onload = () => {
  const savedCalories = localStorage.getItem('dailyCalories');
  const savedWeight = localStorage.getItem('targetWeight');

  if (savedCalories) {
    document.getElementById('daily-calories').value = savedCalories;
  }
  if (savedWeight) {
    document.getElementById('target-weight').value = savedWeight;
  }

  // Set current date
  document.getElementById('date').textContent = new Date().toISOString().split('T')[0];
};

// Open Meal Popup
function openMealPopup(mealType) {
  const popup = document.getElementById('meal-popup');
  popup.style.display = 'block';
}

// Close Meal Popup
function closeMealPopup() {
  const popup = document.getElementById('meal-popup');
  popup.style.display = 'none';
}

// Open Calendar
function openCalendar() {
  alert('Opening calendar...');
}
///////النافذة المنبثقة لإنشاء وجبة/////)
function openPopup() {
  document.getElementById('foodPopup').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
  document.getElementById('foodPopup').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}
function addFoodToList(food) {
  const foodList = document.getElementById('foodList');

  const foodItem = document.createElement('div');
  foodItem.classList.add('food-item');

  const foodContent = `
        <div>
            <img src="${food.image}" alt="food image">
            <strong>${food.name}</strong>
        </div>
        <button onclick="deleteFood(this)">حذف</button>
    `;

  foodItem.innerHTML = foodContent;
  foodList.appendChild(foodItem);
}

function deleteFood(button) {
  const foodItem = button.parentElement;
  foodItem.remove();
}
//تصنيفات الطعام ///
function filterFoods(category) {
  const foodItems = document.querySelectorAll('#foodList .food-item');

  foodItems.forEach(item => {
    const foodCategory = item.getAttribute('data-category');

    if (foodCategory === category || category === 'all') {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

const meals = {
  breakfast: { calories: 0, fat: 0, protein: 0, carbs: 0 },
  lunch: { calories: 0, fat: 0, protein: 0, carbs: 0 },
  dinner: { calories: 0, fat: 0, protein: 0, carbs: 0 }
};

//////تحريك التصنيفات //////
let categoriesContainer = document.getElementById("categories");
let startX;
let scrollLeft;

categoriesContainer.addEventListener("mousedown", (e) => {
  startX = e.pageX - categoriesContainer.offsetLeft;
  scrollLeft = categoriesContainer.scrollLeft;
  categoriesContainer.style.cursor = "grabbing";
  categoriesContainer.style.transition = "none"; // لإيقاف الانتقال أثناء السحب
});

categoriesContainer.addEventListener("mouseleave", () => {
  categoriesContainer.style.cursor = "grab";
  categoriesContainer.style.transition = "transform 0.3s ease";
});

categoriesContainer.addEventListener("mouseup", () => {
  categoriesContainer.style.cursor = "grab";
  categoriesContainer.style.transition = "transform 0.3s ease";
});

categoriesContainer.addEventListener("mousemove", (e) => {
  if (startX) {
    let x = e.pageX - categoriesContainer.offsetLeft;
    let walk = (x - startX) * 2; // جعل التمرير أسرع
    categoriesContainer.scrollLeft = scrollLeft - walk;
  }
});
/////جديد نجرب امسحه   ///