// ================================================================
// DATA
// ================================================================
const categoriesData = {
    "كل الأطعمة": { icon: "fa-solid fa-bars", subcategories: [] },
    "الفواكه والخضروات": { icon: "fas fa-apple-alt", subcategories: ["فواكه", "خضراوات", "ورقيات", "سلطات", "عصائر طبيعية", "فواكة مجمدة", "خضراوات مجمدة", "مجففه"] },
    "الحليب و مشتقاته": { icon: "fa-solid fa-cheese", subcategories: ["الحليب", "الالبان", "الاجبان", "لبنه", "زبادي", "قشطة", "كريمة", "حليب مكثف", "حليب شاهي", "منتجات اخرى"] },
    "المخبوزات": { icon: "fa-solid fa-bread-slice", subcategories: ["مفرود", "صامولي و خبز برجر", "توست", "تورتيلا", "فطائر", "شابورة", "معمول", "مقرمشات", "مخبوزات صحية"] },
    "المشروبات": { icon: "fa-solid fa-bottle-water", subcategories: ["عصائر", "مشروبات غازية", "مشروبات طاقة", "مشروب شاي مثلج", "مشروبات ساخنة", "مشروبات باردة", "اظرف سريعة التحضير"] },
    "السكريات": { icon: "fa-solid fa-ice-cream", subcategories: ["🍦ايسكريم", "شوكولاتة", "تمور", "كيك", "حلويات شرقية", "مارشميلو", "علك", "سكر"] },
    "موالح": { icon: "fa-solid fa-cookie-bite", subcategories: ["🍿شبسات", "فصفص", "مكسرات"] },
    "المعلبات": { icon: "bx bx-box", subcategories: ["حلاوة طحينية", "المربى", "الفول السوداني", "فواكة معلبة", "خضروات معلبة", "اسماك معلبة"] },
    "اللحوم والبيض": { icon: "fas fa-drumstick-bite", subcategories: ["بيض🥚", "لحم غنم🐑", "دواجن🐓", "بحريات🐟", "لحم بقري🐄", "لحم جمل🐪"] },
    "الحبوب والبذور": { icon: "fas fa-seedling", subcategories: ["حبوب كاملة", "رز🍚", "مكرونة🍝", "شعبيات", "شوربات", "كورن فليكس", "طحين", "بذور"] },
    "الصلصات والإضافات": { icon: "fa-solid fa-wine-bottle", subcategories: ["معجون و صلصة الطماطم", "كاتشب و مايونيز", "➕إضافات للطعام", "صلصات البيتزا و الباستا", "صلصات الباربكيو و الصويا", "صلصات حارة", "خل"] },
    "الزيوت والدهون": { icon: "fas fa-oil-can", subcategories: ["زيوت صحية", "زيوت", "زبدة"] },
    "مطاعم عالميه": { icon: "fa-solid fa-shop", subcategories: ["ماكدونالدز🍔", "🍗كنتاكي", "🍗هارديز", "🥪كودو", "دومينوز🍕"] },
    "وصفاتBEST": { icon: "fa-solid fa-file-invoice", subcategories: ["وصفات من الرئيسية"] },
    "وجباتي": { icon: "bx bx-dish", subcategories: [] }
};

// أيقونات للتصنيفات الفرعية - مطاعم عالمية
const subCategoryIcons = {
    "ماكدونالدز🍔":"https://up6.cc/2025/05/174783082398482.jpeg",
    "🍗كنتاكي": "🍗",
    "🍗هارديز": "🍗",
    "🥪كودو": "🥪",
    "دومينوز🍕": ""
};

// ===== Foods Data (مختصر - ضع بياناتك الكاملة هنا) =====
const foodsData = [
{
  id: "apple",
  name: "تفاحة بالقشرة",
  image: "https://up6.cc/2025/05/174783082398482.jpeg",
  calories: 52,
  fat: 0.17,
  protein: 0.26,
  carb: 13.81,
  category: "الفواكه والخضروات",
subcategory: "فواكه",
},
  {
    id: "pineapple",
    name: "اناناس طازج",
    image: "https://up6.cc/2025/05/174783082393011.jpeg",
    calories: 50,
    fat: 0.1,
    protein: 0.5,
    carb: 13.1,
    category: "الفواكه والخضروات",
    subcategory: "فواكه",
  },
{
  id: "banana",
  name: "موز طازج بدون قشر",
  image: "https://up6.cc/2025/05/174783082400193.jpeg",
  calories: 88,
  fat: 0.30,
  protein:1.10,
  carb: 20.20,
  category: "الفواكه والخضروات",
  subcategory: "فواكه",
},
{
  id: "strawberry",
  name: "فراولة طازجة",
  image: "https://up6.cc/2025/05/174792824371891.jpeg",
  calories: 16,
  fat: 0.15,
  protein: 0.3,
  carb: 3.8,
  category: "الفواكه والخضروات",
  subcategory: "فواكه",
},
{
  id: "orange",
  name: "برتقال طازج",
  image: "https://up6.cc/2025/05/174792824373072.jpeg",
  calories: 47,
  fat: 0.1,
  protein: 0.9,
  carb: 11.8,
  category: "الفواكه والخضروات",
  subcategory: "فواكه",
},
{
  id: "avocado",
  name: "أفوكادو طازج",
  image: "https://up6.cc/2025/05/174792824375933.jpeg",
  calories: 160,
  fat: 14.7,
  protein: 2.0,
  carb: 8.5,
  category: "الفواكه والخضروات",
  subcategory: "فواكه",
},
{
  id: "coconut",
  name: "جوز الهند طازج",
  image: "https://up6.cc/2025/05/174792824377614.jpeg",
  calories: 354,
  fat: 33.5,
  protein: 3.3,
  carb: 15.2,
  category: "الفواكه والخضروات",
  subcategory: "فواكه",
},
 {
   id: "grapes",
   name: "عنب اخضر طازج",
   image: "https://up6.cc/2025/05/174792824378835.jpeg",
   calories: 69,
   fat: 0.2,
   protein: 0.72,
   carb: 18,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
{
  id: "grapes",
  name: "عنب احمر طازج",
  image: "https://up6.cc/2025/05/174801415608651.jpeg",
  calories: 65,
  fat: 0.1,
  protein: 0.72,
  carb: 18,
  category: "الفواكه والخضروات",
  subcategory: "فواكه",
},
 {
   id: "pomegranate",
   name: "رمان",
   image: "https://up6.cc/2025/05/174792950844921.jpeg",
   calories: 83,
   fat: 1.2,
   protein: 1.67,
   carb: 18.7,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
 {
   id: "kiwi",
   name: "كيوي",
   image: "https://up6.cc/2025/05/174792950848862.jpeg",
   calories: 61,
   fat: 0.5,
   protein: 1.1,
   carb: 14.7,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
 {
   id: "mango",
   name: "مانجو",
   image: "https://up6.cc/2025/05/174792950850813.jpeg",
   calories: 60,
   fat: 0.4,
   protein: 0.8,
   carb: 15,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
 {
   id: "fig",
   name: "تين",
   image: "https://up6.cc/2025/05/174792950852344.jpeg",
   calories: 74,
   fat: 0.3,
   protein: 0.8,
   carb: 19.2,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
 {
   id: "pear",
   name: "كمثرى",
   image: "https://up6.cc/2025/05/174792950853545.jpeg",
   calories: 57,
   fat: 0.1,
   protein: 0.4,
   carb: 15.2,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
 {
   id: "blueberry",
   name: "توت أزرق",
   image: "https://up6.cc/2025/05/174800684878421.jpeg",
   calories: 57,
   fat: 0.3,
   protein: 0.7,
   carb: 14.5,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
 {
   id: "peach",
   name: "خوخ",
   image: "https://up6.cc/2025/05/174800684879632.jpeg",
   calories: 39,
   fat: 0.3,
   protein: 0.9,
   carb: 9.5,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
 {
   id: "guava",
   name: "جوافة",
   image: "https://up6.cc/2025/05/174800684880743.jpeg",
   calories: 68,
   fat: 0.3,
   protein: 2.6,
   carb: 14.3,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
 {
   id: "watermelon",
   name: "بطيخ أحمر",
   image: "https://up6.cc/2025/05/174800684882134.jpeg",
   calories: 30,
   fat: 0.2,
   protein: 0.6,
   carb: 7.6,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
 {
   id: "melon",
   name: "شمام كنتالوبي طازج",
   image: "https://up6.cc/2025/05/174800684883455.jpeg",
   calories: 34,
   fat: 0.2,
   protein: 0.8,
   carb: 8.2,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
{
  id: "melon",
  name: "شمام الكناري طازج",
  image: "https://up6.cc/2025/05/174801164254961.jpeg",
  calories: 60,
  fat: 0.3,
  protein: 0.6,
  carb: 9.1,
  category: "الفواكه والخضروات",
  subcategory: "فواكه",
},
{
  id: "melon",
  name: "شمام كوز العسل طازج",
  image: "https://up6.cc/2025/05/17480071791951.jpeg",
  calories: 36,
  fat: 0.1,
  protein: 0.6,
  carb: 9.1,
  category: "الفواكه والخضروات",
  subcategory: "فواكه",
},
 {
   id: "grapefruit_red",
   name: "غريب فروت أحمر طازج",
   image: "https://up6.cc/2025/05/174801164259183.jpeg",
   calories: 42,
   fat: 0.1,
   protein: 0.8,
   carb: 10.3,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
 {
   id: "grapefruit_yellow",
   name: "غريب فروت أصفر طازج",
   image: "https://up6.cc/2025/05/174801193656381.jpeg",
   calories: 33,
   fat: 0.1,
   protein: 0.6,
   carb: 8.4,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
 {
   id: "tangerine",
   name: "يوسفي طازج",
   image: "https://up6.cc/2025/05/174801164257572.jpeg",
   calories: 53,
   fat: 0.3,
   protein: 0.8,
   carb: 13.3,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
 {
   id: "olive_black",
   name: "زيتون أسود طازج",
   image: "https://up6.cc/2025/05/174801164260234.jpeg",
   calories: 116,
   fat: 10.9,
   protein: 0.8,
   carb: 6.0,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
 {
   id: "olive_green",
   name: "زيتون أخضر مخلل",
   image: "https://up6.cc/2025/05/174801193660722.jpeg",
   calories: 145,
   fat: 15.3,
   protein: 1.0,
   carb: 3.8,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
 {
   id: "cherry_sour",
   name: "كرز حامض طازج",
   image: "https://up6.cc/2025/05/174801193662273.jpeg",
   calories: 50,
   fat: 0.3,
   protein: 1.0,
   carb: 12.0,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
 {
   id: "cherry_sweet",
   name: "كرز حلو طازج",
   image: "https://up6.cc/2025/05/174801164261235.jpeg",
   calories: 63,
   fat: 0.2,
   protein: 1.1,
   carb: 16.0,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
 {
   id: "apricot",
   name: "مشمش طازج",
   image: "https://up6.cc/2025/05/174801193664734.jpeg",
   calories: 48,
   fat: 0.4,
   protein: 1.0,
   carb: 12.0,
   category: "الفواكه والخضروات",
   subcategory: "فواكه",
 },
///خضراوات///
{
id: "carrot",
name: "جزر",
image:"https://up6.cc/2025/07/175146494820751.jpeg",
calories: 41,
fat: 0.2,
protein: 0.9,
carb: 10,
category: "الفواكه والخضروات",
subcategory: "خضراوات",
      },
{
  id: "cucumber",
  name: "خيار",
  image: "https://up6.cc/2025/07/175146494821792.jpeg",
  calories: 16,
  fat: 0.1,
  protein: 0.7,
  carb: 3.6,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "potato_white",
  name: "بطاطا",
  image: "https://up6.cc/2025/07/175146494823083.jpeg",
  calories: 77,
  fat: 0.1,
  protein: 2,
  carb: 17,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "sweet_potato",
  name: "بطاطا حلوة",
  image: "https://up6.cc/2025/07/175146494824614.jpeg",
  calories: 86,
  fat: 0.1,
  protein: 1.6,
  carb: 20,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "turnip",
  name: "لفت",
  image: "https://up6.cc/2025/07/175146494826515.jpeg",
  calories: 28,
  fat: 0.1,
  protein: 0.9,
  carb: 6.4,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "eggplant_purple",
  name: "باذنجان بنفسجي",
  image: "https://up6.cc/2025/07/175146497024491.jpeg",
  calories: 25,
  fat: 0.2,
  protein: 1,
  carb: 6,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "eggplant_white",
  name: "باذنجان أبيض",
  image: "https://up6.cc/2025/07/175146497026982.jpeg",
  calories: 24,
  fat: 0.2,
  protein: 1,
  carb: 5.7,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "bell_pepper_red",
  name: "فلفل أحمر حلو",
  image: "https://up6.cc/2025/07/175146497029663.jpeg",
  calories: 26,
  fat: 0.3,
  protein: 1,
  carb: 6,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "bell_pepper_yellow",
  name: "فلفل أصفر حلو",
  image: "https://up6.cc/2025/07/175146497032124.jpeg",
  calories: 27,
  fat: 0.2,
  protein: 1,
  carb: 6.3,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "bell_pepper_green",
  name: "فلفل أخضر حلو",
  image: "https://up6.cc/2025/07/175146497033595.jpeg",
  calories: 20,
  fat: 0.2,
  protein: 0.9,
  carb: 4.6,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "chili_pepper",
  name: "فلفل احمر حار",
  image: "https://up6.cc/2025/07/17514649198651.jpeg",
  calories: 40,
  fat: 0.4,
  protein: 1.9,
  carb: 8.8,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "chili_pepper",
  name: "فلفل اخضر حار",
  image: "https://up6.cc/2025/07/17514649198892.jpeg",
  calories: 40,
  fat: 0.2,
  protein: 2,
  carb: 9.5,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "pumpkin",
  name: "قرع عسلي",
  image: "https://up6.cc/2025/07/175146491989913.jpeg",
  calories: 26,
  fat: 0.1,
  protein: 1,
  carb: 6.5,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "pumpkin",
  name: "قرع جوزي امريكي",
  image: "https://up6.cc/2025/07/175146491991814.jpeg",
  calories: 44,
  fat: 0.1,
  protein: 1,
  carb: 11.7,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "zucchini",
  name: "كوسا",
  image: "https://up6.cc/2025/07/175146491993635.jpeg",
  calories: 17,
  fat: 0.3,
  protein: 1.2,
  carb: 3.1,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "zucchini",
  name: "كوسا مسلوق",
  image: "https://up6.cc/2025/07/175146491993635.jpeg",
  calories: 15,
  fat: 0.4,
  protein: 1.1,
  carb: 2.7,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "green_beans",
  name: "فاصوليا خضراء",
  image: "https://g.top4top.io/p_348771kbp0.jpeg",
  calories: 31,
  fat: 0.2,
  protein: 1.8,
  carb: 7,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "green_beans",
  name: "فاصوليا خضراء مسلوقة",
  image: "https://g.top4top.io/p_348771kbp0.jpeg",
  calories: 35,
  fat: 0.3,
  protein: 1.9,
  carb: 7.9,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "peas",
  name: "بازلاء",
  image: "https://h.top4top.io/p_3487b27mq1.jpeg",
  calories: 81,
  fat: 0.4,
  protein: 5.4,
  carb: 14,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "okra",
  name: "بامية",
  image: "https://i.top4top.io/p_3487jvtib2.jpeg",
  calories: 33,
  fat: 0.2,
  protein: 1.9,
  carb: 7.5,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "cauliflower",
  name: "قرنبيط(زهره)",
  image: "https://j.top4top.io/p_34872w5kc3.jpeg",
  calories: 25,
  fat: 0.3,
  protein: 1.9,
  carb: 5,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "broccoli",
  name: "بروكلي",
  image: "https://k.top4top.io/p_3487ts27q4.jpeg",
  calories: 34,
  fat: 0.4,
  protein: 2.8,
  carb: 6.6,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "onion",
  name: "بصل",
  image: "https://l.top4top.io/p_3487wfnmd5.jpeg",
  calories: 40,
  fat: 0.1,
  protein: 1.1,
  carb: 9.3,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "garlic",
  name: "ثوم",
  image: "https://a.top4top.io/p_3487xjjfy6.jpeg",
  calories: 149,
  fat: 0.5,
  protein: 6.4,
  carb: 33,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "tomato",
  name: "طماطم",
  image: "https://b.top4top.io/p_34870vls97.jpeg",
  calories: 18,
  fat: 0.2,
  protein: 0.9,
  carb: 3.9,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "cherry_tomato",
  name: "طماطم كرزية",
  image: "https://c.top4top.io/p_3487syknk8.jpeg",
  calories: 18,
  fat: 0.2,
  protein: 0.9,
  carb: 3.9,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "beetroot",
  name: "شمندر",
  image: "https://d.top4top.io/p_3487hski09.jpeg",
  calories: 43,
  fat: 0.2,
  protein: 1.6,
  carb: 10,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "radish",
  name: "فجل",
  image: "https://b.top4top.io/p_3487qen1p0.jpeg",
  calories: 16,
  fat: 0.1,
  protein: 0.7,
  carb: 3.4,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
{
  id: "ginger",
  name: "زنجبيل",
  image: "https://c.top4top.io/p_3487vmvqo1.jpeg",
  calories: 80,
  fat: 0.8,
  protein: 1.8,
  carb: 18,
  category: "الفواكه والخضروات",
  subcategory: "خضراوات",
},
///ورقيات 
{
  id: "lettuce",
  name: "خس طازج",
  image: "https://up6.cc/2025/06/174897789224961.jpeg",
  calories: 17,
  fat: 0.3,
  protein: 1.2,
  carb: 3.3,
  category: "الفواكه والخضروات",
  subcategory: "ورقيات",
},
{
  id: "arugula",
  name: "جرجير طازج",
  image: "https://up6.cc/2025/06/174897847946561.jpeg",
  calories: 25,
  fat: 0.7,
  protein: 2.6,
  carb: 3.7,
  category: "الفواكه والخضروات",
  subcategory: "ورقيات",
},
{
  id: "coriander",
  name: "كزبرة طازجة",
  image: "https://up6.cc/2025/06/174897830260255.jpeg",
  calories: 23,
  fat: 0.5,
  protein: 2.1,
  carb: 3.7,
  category: "الفواكه والخضروات",
  subcategory: "ورقيات",
},
{
  id: "leek",
  name: "كراث طازج",
  image: "https://up6.cc/2025/06/174897789229772.jpeg",
  calories: 61,
  fat: 0.3,
  protein: 1.5,
  carb: 14.2,
  category: "الفواكه والخضروات",
  subcategory: "ورقيات",
},
{
  id: "mint",
  name: "نعناع بلدي طازج",
  image: "https://up6.cc/2025/06/174897789231693.jpeg",
  calories: 44,
  fat: 0.7,
  protein: 3.3,
  carb: 8.4,
  category: "الفواكه والخضروات",
  subcategory: "ورقيات",
},
{
  id: "parsley",
  name: "بقدونس طازج",
  image: "https://up6.cc/2025/06/174897873817371.jpeg",
  calories: 36,
  fat: 0.8,
  protein: 3,
  carb: 6.3,
  category: "الفواكه والخضروات",
  subcategory: "ورقيات",
},
{
  id: "leek",
  name: "سبانخ طازج",
  image: "https://up6.cc/2025/06/174897860095931.jpeg",
  calories: 23,
  fat: 0.3,
  protein: 3,
  carb: 3.8,
  category: "الفواكه والخضروات",
  subcategory: "ورقيات",
},
{
  id: "leek",
  name: "ريحان طازج",
  image: "https://up6.cc/2025/06/174897830258332.jpeg",
  calories: 23,
  fat: 0.6,
  protein: 3.2,
  carb: 2.6,
  category: "الفواكه والخضروات",
  subcategory: "ورقيات",
},
{
  id: "green_onion",
  name: "بصل أخضر طازج",
  image: "https://up6.cc/2025/06/174897887383661.jpeg",
  calories: 32,
  fat: 0.2,
  protein: 1.8,
  carb: 7.3,
  category: "الفواكه والخضروات",
  subcategory: "ورقيات",
},
{
  id: "leek",
  name: "ملفوف اخضر",
  image: "https://up6.cc/2025/06/174897789232734.jpeg",
  calories: 25,
  fat: 0.1,
  protein: 1.3,
  carb: 5.8,
  category: "الفواكه والخضروات",
  subcategory: "ورقيات",
},
{
  id: "leek",
  name: "ملفوف احمر",
  image: "https://up6.cc/2025/06/174897789234175.jpeg",
  calories: 31,
  fat: 0.2,
  protein: 1.4,
  carb: 7.4,
  category: "الفواكه والخضروات",
  subcategory: "ورقيات",
},
//سلطات
 {
   id: "sultat fawaaka",
   name: "سلطة فواكة جاهزة",
   image: "https://up6.cc/2025/08/175858500690121.png",
   calories: 204,
   fat: 0.6,
   protein: 2,
   carb: 50.6,
   category: "الفواكه والخضروات",
   subcategory: "سلطات",
 },
//عصائر طبيعيه
//فواكة مجمده
//خضراوات مجمده
//مجففه
  {
    id: "dried_figs",
    name: "تين مجفف",
    image: "https://example.com/dried_figs.jpg",
    calories: 249,
    fat: 0.9,
    protein: 3.3,
    carb: 64,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
  {
    id: "dried_apricots",
    name: "مشمش مجفف",
    image: "https://example.com/dried_apricots.jpg",
    calories: 241,
    fat: 0.5,
    protein: 3.4,
    carb: 63,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
  {
    id: "raisins",
    name: "زبيب",
    image: "https://example.com/raisins.jpg",
    calories: 299,
    fat: 0.5,
    protein: 3.1,
    carb: 79,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
  {
    id: "dried_prunes",
    name: "برقوق مجفف (قراصيا)",
    image: "https://example.com/dried_prunes.jpg",
    calories: 240,
    fat: 0.4,
    protein: 2.2,
    carb: 64,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
  {
    id: "dried_mango",
    name: "مانجو مجفف",
    image: "https://example.com/dried_mango.jpg",
    calories: 319,
    fat: 1.2,
    protein: 2.5,
    carb: 78,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
  {
    id: "dried_pineapple",
    name: "أناناس مجفف",
    image: "https://example.com/dried_pineapple.jpg",
    calories: 245,
    fat: 0.6,
    protein: 1.6,
    carb: 63,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
  {
    id: "dried_cranberries",
    name: "توت بري مجفف",
    image: "https://example.com/dried_cranberries.jpg",
    calories: 308,
    fat: 1.4,
    protein: 0.2,
    carb: 82,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
  {
    id: "dried_banana",
    name: "موز مجفف",
    image: "https://example.com/dried_banana.jpg",
    calories: 346,
    fat: 1.8,
    protein: 3.9,
    carb: 88,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
  {
    id: "dried_papaya",
    name: "بابايا مجففة",
    image: "https://example.com/dried_papaya.jpg",
    calories: 325,
    fat: 0.6,
    protein: 3.2,
    carb: 81,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
  {
    id: "dried_peaches",
    name: "خوخ مجفف",
    image: "https://example.com/dried_peaches.jpg",
    calories: 239,
    fat: 0.8,
    protein: 3.2,
    carb: 62,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
  {
    id: "dried_pears",
    name: "كمثرى مجففة",
    image: "https://example.com/dried_pears.jpg",
    calories: 262,
    fat: 0.6,
    protein: 1.9,
    carb: 70,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
  {
    id: "dried_apples",
    name: "تفاح مجفف",
    image: "https://example.com/dried_apples.jpg",
    calories: 243,
    fat: 0.3,
    protein: 0.9,
    carb: 66,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
  {
    id: "dried_cherries",
    name: "كرز مجفف",
    image: "https://example.com/dried_cherries.jpg",
    calories: 333,
    fat: 0.7,
    protein: 2.1,
    carb: 80,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
  {
    id: "dried_blueberries",
    name: "توت أزرق مجفف",
    image: "https://example.com/dried_blueberries.jpg",
    calories: 317,
    fat: 2.5,
    protein: 2.5,
    carb: 77,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
  {
    id: "dried_guava",
    name: "جوافة مجففة",
    image: "https://example.com/dried_guava.jpg",
    calories: 250,
    fat: 1.2,
    protein: 4.2,
    carb: 58,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
  {
    id: "dried_starfruit",
    name: "كارامبولا مجففة (فاكهة النجمة)",
    image: "https://example.com/dried_starfruit.jpg",
    calories: 320,
    fat: 0.8,
    protein: 3.1,
    carb: 78,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
  {
    id: "dried_kiwi",
    name: "كيوي مجفف",
    image: "https://example.com/dried_kiwi.jpg",
    calories: 285,
    fat: 1.1,
    protein: 3.2,
    carb: 69,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
  {
    id: "dried_melon",
    name: "شمام مجفف",
    image: "https://example.com/dried_melon.jpg",
    calories: 341,
    fat: 0.9,
    protein: 4.7,
    carb: 83,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
  {
    id: "dried_coconut",
    name: "جوز الهند المجفف",
    image: "https://example.com/dried_coconut.jpg",
    calories: 660,
    fat: 64.5,
    protein: 6.9,
    carb: 23.7,
    category: "الفواكه والخضروات",
    subcategory: "مجففه",
  },
//الحليب و مشتقاته/الحليب
{
  id:"alsueudia_fresh_milk_Fll_fat",
  name: "حليب السعودية طازج كامل الدسم",
  image: "https://up6.cc/2025/08/175758292115691.png",
  calories: 60,
  fat: 3,
  protein: 3,
  carb: 5,
  category: "الحليب و مشتقاته",
  subcategory: "الحليب"
},
{
  id: "almraay_hlyb_brwtyn_khaly_mn_allaktwz",
  name: "المراعي حليب بروتين خالي من اللاكتوز ( 400ml)",
  image: "https://up6.cc/2025/10/175985647275631.jpeg",
  calories: 44.5,
  fat: 1.25,
  protein: 4.8,
  carb: 3.2,
  category: "الحليب و مشتقاته",
  subcategory: "الحليب",
},

{
  id: "almraay_hlyb_aaly_albrwtyn_bnkhh_alqhwh",
  name: "المراعي حليب عالي البروتين بنكهة القهوة (400ml)",
  image: "https://up6.cc/2025/10/175985647276622.jpeg",
  calories: 77,
  fat: 0.25,
  protein: 8.5,
  carb: 10,
  category: "الحليب و مشتقاته",
  subcategory: "الحليب",
},
{
  id: "almraay_hlyb_aaly_albrwtyn_bnkhh_alshwkwlath",
  name: "المراعي حليب عالي البروتين بنكهة الشوكولاتة(400ml)",
  image: "https://up6.cc/2025/10/175985647277573.jpeg",
  calories: 82.5,
  fat: 0.4,
  protein: 8.5,
  carb: 11,
  category: "الحليب و مشتقاته",
  subcategory: "الحليب",
},
{
  id: "almraay_hlyb_aaly_albrwtyn_bnkhh_alfanyla",
  name: "المراعي حليب عالي البروتين بنكهة الفانيلا ( 400 ml )",
  image: "https://up6.cc/2025/10/175985647279394.jpeg",
  calories: 76,
  fat: 0.25,
  protein: 8.5,
  carb: 10,
  category: "الحليب و مشتقاته",
  subcategory: "الحليب",
},
{
  id:"almraay_hlyb_aaly_albrwtyn_bnkhh_alfrwalh_walmwz",
  name: "المراعي حليب عالي البروتين بنكهة الفروالة والموز",
  image: "https://up6.cc/2025/10/175985647280355.jpeg",
  calories: 75.5,
  fat: 0.3,
  protein: 8.5,
  carb: 9.7,
  category: "الحليب و مشتقاته",
  subcategory: "الحليب",
},
{
  id: "nadk_hlyb_tazj_qlyl_aldsm",
  name: "نادك حليب طازج قليل الدسم (200ml)",
  image: "https://up6.cc/2025/10/175985659981991.jpeg",
  calories: 40,
  fat: 1,
  protein: 3.1,
  carb: 4.7,
  category: "الحليب و مشتقاته",
  subcategory: "الحليب",
},
{
  id:"nadk_hlyb_tazj_kaml_aldsm",
  name: "نادك حليب طازج كامل الدسم(200ml)",
  image: "https://up6.cc/2025/10/175985659985862.jpeg",
  calories: 58,
  fat: 3,
  protein: 3.1,
  carb: 4.7,
  category: "الحليب و مشتقاته",
  subcategory: "الحليب",
},
{
id: "almraay_hlyb_tazj_qlyl_aldsm",
  name: "المراعي حليب طازج قليل الدسم(250)",
  image: "https://up6.cc/2025/10/175985659988413.jpeg",
  calories: 42.8,
  fat: 1.08,
  protein: 3.12,
  carb: 4.88,
  category: "الحليب و مشتقاته",
  subcategory: "الحليب",
},
{
  id: "almraay_hlyb_tazj_kaml_aldsm",
  name: "المراعي حليب طازج كامل الدسم (180ml)",
  image: "https://up6.cc/2025/10/175985659990754.jpeg",
  calories: 61.1,
  fat: 3.16,
  protein: 3.1,
  carb: 4.7,
  category: "الحليب و مشتقاته",
  subcategory: "الحليب",
},
{
  id: "alsawdyh_hlyb_qlyl_aldsm",
  name: "السعودية حليب قليل الدسم(200ml)",
  image: "https://up6.cc/2025/10/17598565999275.jpeg",
  calories: 45,
  fat: 1.3,
  protein: 3,
  carb: 5,
  category: "الحليب و مشتقاته",
  subcategory: "الحليب",
},
//اللالبان
{
  id: "nadk_lbn_tazj_qlyl_aldsm",
  name: "نادك لبن طازج قليل الدسم (180ml)",
  image: "https://up6.cc/2025/10/175985673595911.jpeg",
  calories: 40,
  fat: 1,
  protein: 3.1,
  carb: 4.7,
  category: "الحليب و مشتقاته",
  subcategory: "الالبان",
},
{
  id: "nadk_lbn_tazj_kaml_aldsm",
  name: "نادك لبن طازج كامل الدسم (180ml)",
  image: "https://up6.cc/2025/10/175985673598992.jpeg",
  calories: 58,
  fat: 3,
  protein: 3.1,
  carb: 4.7,
  category: "الحليب و مشتقاته",
  subcategory: "الالبان",
},
// لبنه
{
    id: "labneh",
    name: "لبنة",
    image: "https://example.com/labneh.jpg",
    calories: 135,
    fat: 10,
    protein: 6,
    carb: 4,
    category: "الحليب و مشتقاته",
    subcategory: "لبنه"
  },
// الأجبان
  {
    id: "Almarai-cheese",
    name:"جبنة المراعي طعم كريمة ",
    image: "https://up6.cc/2025/06/175062643955771.jpeg",
    calories: 343.3,
    fat: 33.3,
    protein: 5.3,
    carb: 3.3,
    category: "الحليب و مشتقاته",
    subcategory: "الاجبان"
  },
 {
   id: "Cheese-Puck",
   name: "جبن طعم كريمة بوك ",
   image: "https://up6.cc/2025/06/175062643957382.jpeg",
   calories: 323,
   fat: 31,
   protein: 8.7,
   carb: 1.9,
   category: "الحليب و مشتقاته",
   subcategory: "الاجبان"
 },
  {
   id: "cheese-Nadec",
   name: "جبن بطعم الشيدر نادك",
   image: "https://up6.cc/2025/06/175062643959344.jpeg",
   calories: 317,
   fat: 30,
   protein: 8,
   carb: 3.7,
   category: "الحليب و مشتقاته",
   subcategory: "الاجبان"
 },
  {
   id: "cheese-Nadec",
   name: "جبنة بطعم الكريمة (نادك",
   image: "https://up6.cc/2025/06/175062643958393.jpeg",
   calories: 314,
   fat: 30,
   protein: 7,
   carb: 4,
   category: "الحليب و مشتقاته",
   subcategory: "الاجبان"
 },
  {
   id: "Triangle-cheese",
   name: "جبنة مثلثات(نادك",
   image: "https://up6.cc/2025/06/175062643960275.jpeg",
   calories: 279,
   fat: 24,
   protein: 10.4,
   carb: 5.4,
   category: "الحليب و مشتقاته",
   subcategory: "الاجبان"
 },
 {
  id: "Almarai-cheese",
  name: "جبنة المربعات بالقشطة من المراعي",
  image: "https://up6.cc/2025/06/175062732565111.jpeg",
  calories: 92.6,
  fat: 9.2,
  protein: 1.8,
  carb: 0.92,
  category: "الحليب و مشتقاته",
  subcategory: "الاجبان"
},
{
  id: "Almarai-cheese-slices",
  name: "جبنة شرائح البرجر من المراعي",
  image: "https://up6.cc/2025/06/175062732569012.jpeg",
  calories: 270,
  fat: 25,
  protein: 15,
  carb: 5,
  category: "الحليب و مشتقاته",
  subcategory: "الاجبان"
},
{
  id: "Nadec-cheese-slices",
  name: "جبنة شرائح برجر من نادك",
  image: "https://up6.cc/2025/06/175062732570593.jpeg",
  calories: 282,
  fat: 22,
  protein: 14,
  carb: 7,
  category: "الحليب و مشتقاته",
  subcategory: "الاجبان"
},
{
  id: "Almarai-Mozzarella-cheese",
  name: "جبنة الموزاريلا المبشورة كاملة الدسم من المراعي",
  image: "https://up6.cc/2025/06/175062739669421.jpeg",
  calories: 290,
  fat: 23.3,
  protein: 23.3,
  carb: 0,
  category: "الحليب و مشتقاته",
  subcategory: "الاجبان"
},
{
  id: "Nadec-Mozzarella-cheese",
  name: "جبنة الموزاريلا المبشورة كاملة الدسم من نادك",
  image: "https://up6.cc/2025/06/175062739673162.jpeg",
  calories: 325,
  fat: 25,
  protein: 15,
  carb: 10,
  category: "الحليب و مشتقاته",
  subcategory: "الاجبان"
},
//زبادي
{
  id: "zbady_nadk_qlyl_aldsm",
  name: "زبادي نادك قليل الدسم",
  image: "https://up6.cc/2025/10/176484012940461.jpeg",
  calories: 60,
  fat: 1.5,
  protein: 4.6,
  carb: 6.9,
  category: "الحليب و مشتقاته",
  subcategory: "زبادي",
},
//قشطة
{
  id: "nadk_qshth_tazjh_kaml_aldsm",
  name: "نادك قشطة طازجة كامل الدسم100 جم",
  image: "sss",
  calories: 300,
  fat: 31,
  protein: 2,
  carb: 3.2,
  category: "الحليب و مشتقاته",
  subcategory: "قشطة",
},
{
  id: "nadk-qshth_tazjh_layt",
  name: "نادك قشطة طازجة لايت 100 جم",
  image: "sss",
  calories: 175,
  fat: 16,
  protein: 3.3,
  carb: 4.4,
  category: "الحليب و مشتقاته",
  subcategory: "قشطة",
},
{
  id: "almraay_qshth_kaml_aldsm",
  name: "المراعي قشطة كامل الدسم 100 جم",
  image: "sss",
  calories: 310,
  fat: 32,
  protein: 2,
  carb: 4,
  category: "الحليب و مشتقاته",
  subcategory: "قشطة",
},
{
  id: "almraay_qshth_qlyl_aldsm",
  name: "المراعي قشطة لايت 100 جم",
  image: "sss",
  calories: 234,
  fat: 14,
  protein: 2,
  carb: 4,
  category: "الحليب و مشتقاته",
  subcategory: "قشطة",
},
//المخبوزات
{
  id: "jona-white-samoli",
  name: "خبز صامولي ابيض -جونا",
  image: "https://l.top4top.io/p_3490pfr305.png",
  calories: 273,
  fat: 1,
  protein: 9,
  carb: 56,
  category: "المخبوزات",
  subcategory: "صامولي و خبز برجر",
},
{
  id: "luzain-white-sandwich",
  name: "خبز ساندويتش ابيض - لوزين",
  image: "https://a.top4top.io/p_3490dbh106.png",
  calories: 272,
  fat: 4,
  protein: 8,
  carb: 50,
  category: "المخبوزات",
  subcategory: "صامولي و خبز برجر",
},
{
  id: "luzain-milk-sandwich",
  name: "خبز ساندويتش بالحليب - لوزين",
  image: "https://b.top4top.io/p_34905pqo87.png",
  calories: 294,
  fat: 6,
  protein: 10,
  carb: 48,
  category: "المخبوزات",
  subcategory: "صامولي و خبز برجر",
},
{
  id: "luzain-brown-sandwich",
  name: "خبز ساندويش بر - لوزين",
  image: "https://c.top4top.io/p_3490xoic38.png",
  calories: 272,
  fat: 4,
  protein: 10,
  carb: 48,
  category: "المخبوزات",
  subcategory: "صامولي و خبز برجر",
},
{
  id: "harvey-white",
  name: "خبز ابيض - هرفي",
  image: "https://d.top4top.io/p_3490qu6yd9.png",
  calories: 268,
  fat: 4,
  protein: 8,
  carb: 51,
  category: "المخبوزات",
  subcategory: "صامولي و خبز برجر",
},
{
  id: "al-mithali-white-samoli",
  name: "خبز صامولي ابيض - المثالي",
  image: "https://f.top4top.io/p_3490ocepd0.png",
  calories: 306.6,
  fat: 7.2,
  protein: 12,
  carb: 48,
  category: "المخبوزات",
  subcategory: "صامولي و خبز برجر",
},
{
  id: "al-najah-jumbo-sesame",
  name: "خبز جامبو بالسمسم - مخابز النجاح",
  image: "https://g.top4top.io/p_3490fejam1.png",
  calories: 292,
  fat: 5,
  protein: 10,
  carb: 51,
  category: "المخبوزات",
  subcategory: "صامولي و خبز برجر",
},
{
  id: "luzain-brioche-burger",
  name: "خبز برجر بريوش - لوزين",
  image: "https://h.top4top.io/p_3490tc6262.png",
  calories: 320.8,
  fat: 8.9,
  protein: 10.4,
  carb: 47.7,
  category: "المخبوزات",
  subcategory: "صامولي و خبز برجر",
},
{
  id: "luzain-sesame-burger",
  name: "خبز برجر بالسمسم - لوزين",
  image: "https://i.top4top.io/p_3490q2fj73.png",
  calories: 280.5,
  fat: 3,
  protein: 12,
  carb: 49.2,
  category: "المخبوزات",
  subcategory: "صامولي و خبز برجر",
},
{
  id: "fushia-sesame-burger",
  name: "خبز برجر بالسمسم - فوشية",
  image: "https://j.top4top.io/p_34902mekm4.png",
  calories: 310.6,
  fat: 7.9,
  protein: 11,
  carb: 48.4,
  category: "المخبوزات",
  subcategory: "صامولي و خبز برجر",
},
{
  id: "al-najah-brown-flat",
  name: "خبز مفرود بر النجاح",
  image: "https://h.top4top.io/p_3490cfky91.png",
  calories: 253,
  fat: 1.2,
  protein: 8.5,
  carb: 52,
  category: "المخبوزات",
  subcategory: "مفرود",
},
{
  id: "al-najah-flat",
  name: "خبز مفرود النجاح",
  image: "https://g.top4top.io/p_34902ng9j0.png",
  calories: 266,
  fat: 1,
  protein: 8.5,
  carb: 55.8,
  category: "المخبوزات",
  subcategory: "مفرود",
},
{
  id: "yumi-flat",
  name: "خبز مفرود من يومي",
  image: "https://i.top4top.io/p_3490n436p2.png",
  calories: 291.6,
  fat: 0,
  protein: 11.1,
  carb: 63.8,
  category: "المخبوزات",
  subcategory: "مفرود",
},
{
  id: "chocies-flat",
  name: "خبز مفرود شوكيز",
  image: "https://j.top4top.io/p_3490lz97p3.png",
  calories: 252.3,
  fat: 1,
  protein: 8.4,
  carb: 18.4,
  category: "المخبوزات",
  subcategory: "مفرود",
},
{
  id: "jona-flat",
  name: "خبز مفرود جونا",
  image: "https://k.top4top.io/p_3490wot6r4.png",
  calories: 294,
  fat: 1,
  protein: 10,
  carb: 63,
  category: "المخبوزات",
  subcategory: "مفرود",
},
{
  id: "luzain-milk",
  name: "خبز بالحليب شريحة(30g) - لوزين",
  image: "https://k.top4top.io/p_3490zmh0m5.png",
  calories: 280,
  fat: 6.6,
  protein: 10,
  carb: 46.6,
  category: "المخبوزات",
  subcategory: "توست",
},
{
  id: "luzain-white",
  name: "خبز ابيض شريحة(30g)- لوزين",
  image: "https://l.top4top.io/p_349050mwf6.png",
  calories: 263.3,
  fat: 3.3,
  protein: 10,
  carb: 50,
  category: "المخبوزات",
  subcategory: "توست",
},
{
  id: "luzain-grain",
  name: "خبز بالحبوب شريحة(30g)- لوزين",
  image: "https://a.top4top.io/p_3490i0ump7.png",
  calories: 276.6,
  fat: 6.6,
  protein: 10,
  carb: 43.3,
  category: "المخبوزات",
  subcategory: "توست",
},
{
  id: "luzain-bran",
  name: "خبز بالنخالة شريحة(31g)- لوزين",
  image: "https://b.top4top.io/p_3490hm5nn8.png",
  calories: 256.6,
  fat: 4,
  protein: 10,
  carb: 43.3,
  category: "المخبوزات",
  subcategory: "توست",
},
{
  id: "luzain-brown",
  name: "خبز بر شريحة(30g)- لوزين",
  image: "https://c.top4top.io/p_3490qyh0h9.png",
  calories: 256.6,
  fat: 3.3,
  protein: 10,
  carb: 43.3,
  category: "المخبوزات",
  subcategory: "توست",
},
{
  id: "yumi-white",
  name: "خبز ابيض - يومي",
  image: "https://a.top4top.io/p_3490edjds0.png",
  calories: 253.3,
  fat: 3.3,
  protein: 9.6,
  carb: 44,
  category: "المخبوزات",
  subcategory: "توست",
},
{
  id: "yumi-brown",
  name: "خبز بر - يومي",
  image: "https://b.top4top.io/p_3490ey74u1.png",
  calories: 266.6,
  fat: 1.3,
  protein: 9.6,
  carb: 43.3,
  category: "المخبوزات",
  subcategory: "توست",
},
{
  id: "fushia-white",
  name: "خبز ابيض - فوشية",
  image: "https://c.top4top.io/p_3490k2j4u2.png",
  calories: 272.4,
  fat: 3.4,
  protein: 8.9,
  carb: 51,
  category: "المخبوزات",
  subcategory: "توست",
},
{
  id: "fushia-brown",
  name: "خبز بر - قوشية",
  image: "https://d.top4top.io/p_3490fe3fz3.png",
  calories: 241.3,
  fat: 2.7,
  protein: 8.6,
  carb: 45.5,
  category: "المخبوزات",
  subcategory: "توست",
},
{
  id: "fushia-milk",
  name: "خبز بالحليب - قوشية",
  image: "https://e.top4top.io/p_34901rno44.png",
  calories: 276.6,
  fat: 3.63,
  protein: 9.3,
  carb: 51.2,
  category: "المخبوزات",
  subcategory: "توست",
},
//فطائر //
{
  id: "ftyrh_alzhraa",
  name: "فطيرة الزهراء",
  image: "https://up6.cc/2025/10/176565614268171.jpeg",
  calories: 421,
  fat: 16.3,
  protein: 6.5,
  carb: 63,
  category: "المخبوزات",
  subcategory: "فطائر",
},
{
  id: "mrwj_ftyrh_zatr",
  name: "مروج فطيرة زعتر",
  image: "https://up6.cc/2025/10/176484012942932.jpeg",
  calories: 147.7,
  fat: 16.3,
  protein: 7.2,
  carb: 56.3,
  category: "المخبوزات",
  subcategory: "فطائر",
},
{
  id:"lwzyn_tsbyrh_sandwtsh_jbnh_alkrym",
  name: "لوزين تصبيره ساندوتش جبنة الكريم",
  image: "https://up6.cc/2025/08/175445911724162.png",
  calories: 296,
  fat: 13.3,
  protein: 9.7,
  carb: 33.7,
  category: "المخبوزات",
  subcategory: "فطائر",
},
{
id: "sfn_dayz_krwasan_alshwkwlath",
  name: "سفن دايز كرواسان الشوكولاته 55 جم",
  image: "https://up6.cc/2025/08/175866617942181.png",
  calories: 467.2,
  fat: 27.2,
  protein: 7.2,
  carb: 45.4,
  category: "المخبوزات",
  subcategory: "فطائر",
},
{
id:"lwzyn_tsbyrh_ftyrh_alshwkwlath",
  name: "لوزين تصبيرة فطيرة الشوكولاته 70 جم",
  image: "https://up6.cc/2025/08/175866617951083.png",
  calories: 375.7,
  fat: 17.14,
  protein: 10,
  carb: 45.7,
  category: "المخبوزات",
  subcategory: "فطائر",
},
{
  id: "lwzyn_tsbyrh_ftyrh_aljbnh",
  name: "لوزين تصبيرة فطيرة الجبنة 70 جم",
  image: "https://up6.cc/2025/08/175866617947892.png",
  calories: 378.5,
  fat: 41.4,
  protein: 10,
  carb: 35.7,
  category: "المخبوزات",
  subcategory: "فطائر",
},
{
  id: "lwzyn_krwasan_aljbnh_walzatr",
  name: "لوزين كرواسان الجبنة والزعتر 60 جم",
  image: "https://up6.cc/2025/08/17586661795424.png",
  calories: 408.3,
  fat: 21.6,
  protein: 11.6,
  carb: 41.6,
  category: "المخبوزات",
  subcategory: "فطائر",
},
{
  id: "lwzyn_tsbyrh_bkrymh_albskwyt",
  name: "لوزين تصبيرة بكريمة البسكويت 83 جم",
  image: "https://up6.cc/2025/08/175866617955615.png",
  calories: 503.6,
  fat: 32.5,
  protein: 9.6,
  carb: 43.3,
  category: "المخبوزات",
  subcategory: "فطائر",
},
{
  id: "lwzyn_tsbyrh_ftyrh_altfah",
  name: "لوزين تصبيرة فطيرة التفاح 70 جم",
  image: "https://up6.cc/2025/08/17586662486551.png",
  calories: 341.4,
  fat: 12.8,
  protein: 8.5,
  carb: 47.1,
  category: "المخبوزات",
  subcategory: "فطائر",
},
{
  id: "sfn_dayz_bhshwh_albndq_w_alkakaw",
  name: "سفن دايز بحشوة البندق و الكاكاو",
  image: "https://up6.cc/2025/08/175926547781441.png",
  calories: 486,
  fat: 31,
  protein: 8,
  carb: 43,
  category: "المخبوزات",
  subcategory: "فطائر",
},
//شابوره
{
  id: "shamwrh_qramysh_alkys",
 name: "شابورة قراميش : الكيس(47g)",
  image: "https://up6.cc/2025/10/176565614271473.jpeg",
  calories: 466,
  fat: 15.1,
  protein: 10.7,
  carb: 70.6,
  category: "المخبوزات",
  subcategory: "شابورة",
},
//مقرمشات
{
  id: "awlkr_bskwyt_shay",
  name: "أولكر بسكويت شاي",
  image: "https://up6.cc/2025/10/17656574672151.jpeg",
  calories: 449,
  fat: 13.8,
  protein: 7.3,
  carb: 72.6,
  category: "المخبوزات",
  subcategory: "مقرمشات",
},
{
  id: "qrmshny_dhrh",
  name: "قرمشني ذره",
  image: "https://up6.cc/2025/10/17656567782321.jpeg",
  calories: 460,
  fat: 14,
  protein: 4,
  carb: 79,
  category: "المخبوزات",
  subcategory: "مقرمشات",
},
{
  id: "asaba_twtw_btam_aldjaj",
  name: "اصابع توتو بطعم الدجاج",
  image: "https://up6.cc/2025/10/176044923449221.jpeg",
  calories: 160,
  fat: 11,
  protein: 2,
  carb: 14,
  category: "المخبوزات",
  subcategory: "مقرمشات",
},
{
  id: "my_my_mqrmshat_btam_ttbylh_aldjaj",
  name: "مي مي مقرمشات بطعم تتبيلة الدجاج",
  image: "https://up6.cc/2025/10/176044923450822.jpeg",
  calories: 475,
  fat: 7.5,
  protein: 68.75,
  carb: 18.125,
  category: "المخبوزات",
  subcategory: "مقرمشات",
},
//معمول
{
  id: "tmryh_mama_shwkwlath_alhbh",
  name: "تمرية ماما شوكولاتة الحبة: (20 g )",
  image: "https://up6.cc/2025/10/176565614272614.jpeg",
  calories: 386,
  fat: 9.1,
  protein: 3.7,
  carb: 72.3,
  category: "المخبوزات",
  subcategory: "معمول",
},
{
  id: "tmryh_mama_balqmh_alabyd",
  name: "تمرية ماما بالقمح الأبيض",
  image: "https://up6.cc/2025/10/176565614273985.jpeg",
  calories: 387,
  fat: 7.5,
  protein: 4.1,
  carb: 75.8,
  category: "المخبوزات",
  subcategory: "معمول",
},
{
  id: "tmryh_mama_baldkhn",
  name: "تمرية ماما بالدخن للحبة:20g",
  image: "https://up6.cc/2025/10/176565633499781.jpeg",
  calories: 397,
  fat: 10.8,
  protein: 3.9,
  carb: 71,
  category: "المخبوزات",
  subcategory: "معمول",
},
{
  id: "mamwl_am_salh_br_llhbh",
  name: "معمول أم صالح بالتمر للحبة : 20g",
  image: "https://up6.cc/2025/10/176565653782531.jpeg",
  calories: 374,
  fat: 11.2,
  protein: 6.3,
  carb: 58,
  category: "المخبوزات",
  subcategory: "معمول",
},
{
  id: "mamwl-mama-zero",
  name: "معمول شوفات ماما بدون سكر للحبة:20g",
  image: "https://up6.cc/2025/10/176565653784172.jpeg",
  calories: 414,
  fat: 15.6,
  protein: 5.3,
  carb: 63.3,
  category: "المخبوزات",
  subcategory: "معمول",
},
////مشروبات
 {
    id: "pepsi-diet",
    name: "بيبسي دايت",
    image: "https://up6.cc/2025/06/174900382452171.jpeg",
    calories: 0.28,
    fat: 0,
    protein: 0,
    carb: 0,
    category: "المشروبات",
    subcategory: "مشروبات غازية",
  },
{
  id: "pepsi",
  name: "بيبسي",
  image: "https://up6.cc/2025/06/175057123274813.jpeg",
  calories: 42,
  fat: 0,
  protein: 0,
  carb: 11,
  category: "المشروبات",
  subcategory: "مشروبات غازية",
},
{
  id: "7up-zero",
  name: "سفن اب زيرو سكر",
  image: "https://up6.cc/2025/06/175057123275874.jpeg",
  calories: 2,
  fat: 0,
  protein: 0,
  carb: 0,
  category: "المشروبات",
  subcategory: "مشروبات غازية",
},
  {
    id: "miranda-green-apple",
    name: "ميرندا تفاح أخضر",
    image: "https://up6.cc/2025/06/174900382459664.jpeg",
    calories: 49,
    fat: 0,
    protein: 0,
    carb: 3.61,
    category: "المشروبات",
    subcategory: "مشروبات غازية",
  },
 {
    id: "miranda-orange",
    name: "ميرندا برتقال",
    image: "https://up6.cc/2025/06/174900382461025.jpeg",
    calories: 47.22,
    fat: 0,
    protein: 0,
    carb: 3.89,
    category: "المشروبات",
    subcategory: "مشروبات غازية",
  },
  {
    id: "barbican-strawberry",
    name: "بربيكان شعير فراولة",
    image: "https://up6.cc/2025/06/174900382457843.jpeg",
    calories: 33,
    fat: 0,
    protein: 0,
    carb: 8.4,
    category: "المشروبات",
    subcategory: "مشروبات غازية",
  },
  {
    id: "miranda-strawberry",
    name: "ميرندا فراولة",
    image: "https://up6.cc/2025/06/174900409498351.jpeg",
    calories: 42.67,
    fat: 0,
    protein: 0,
    carb: 3.61,
    category: "المشروبات",
    subcategory: "مشروبات غازية",
  },
  {
    id: "Dew",
    name: "ديو",
    image: "https://up6.cc/2025/06/175057123269621.jpeg",
    calories: 48,
    fat: 0,
    protein: 0,
    carb: 12,
    category: "المشروبات",
    subcategory: "مشروبات غازية",
  },
  {
    id: "kinza-apple-mint",
name: "كينزا كوكتيل تفاح ونعناع",
    image: "https://up6.cc/2025/06/174900382455112.jpeg",
    calories: 37.36,
    fat: 0,
    protein: 0,
    carb: 3.67,
    category: "المشروبات",
    subcategory: "مشروبات غازية",
  },
{
  id: "Rita Blue",
  name: "ريتا بلو",
  image: "https://up6.cc/2025/06/175057123273392.jpeg",
  calories: 59,
  fat: 0,
  protein: 0,
  carb: 14,
  category: "المشروبات",
  subcategory: "مشروبات غازية",
},
  {
    id: "shani-fruit-flavor",
    name: "شاني بنكهة الفواكة",
    image: "https://up6.cc/2025/06/174900409502112.jpeg",
    calories: 46.22,
    fat: 0,
    protein: 0,
    carb: 3.89,
    category: "المشروبات",
    subcategory: "مشروبات غازية",
  },
{
  id: "miranda-hamdayat",
  name: "ميرندا حمضيات",
  image: "https://d.top4top.io/p_34893w8d70.png",
  calories: 48,
  fat: 0,
  protein: 0,
  carb: 12,
  category: "المشروبات",
  subcategory: "مشروبات غازية",
},
{
  id: "kinza-hamdayat",
  name: "حمضيات كينزا",
  image: "https://e.top4top.io/p_3489t1w8t1.png",
  calories: 50.5,
  fat: 0,
  protein: 0,
  carb: 13,
  category: "المشروبات",
  subcategory: "مشروبات غازية",
},
{
  id: "kinza-cola",
  name: "كينزا كولا",
  image: "https://f.top4top.io/p_3489zs5t22.png",
  calories: 44.5,
  fat: 0,
  protein: 0,
  carb: 11,
  category: "المشروبات",
  subcategory: "مشروبات غازية",
},
{
  id: "kinza-orange",
  name: "كينزا برتقال",
  image: "https://g.top4top.io/p_34898a1ti3.png",
  calories: 56.6,
  fat: 0,
  protein: 0,
  carb: 14,
  category: "المشروبات",
  subcategory: "مشروبات غازية",
},
{
  id: "sprite",
  name: "سبرايت",
  image: "https://h.top4top.io/p_34899jdig4.png",
  calories: 47,
  fat: 0,
  protein: 0,
  carb: 11.8,
  category: "المشروبات",
  subcategory: "مشروبات غازية",
},
{
  id: "rita-red",
  name: "ريتا رد",
  image: "https://i.top4top.io/p_3489d273w5.png",
  calories: 58,
  fat: 0,
  protein: 0,
  carb: 14,
  category: "المشروبات",
  subcategory: "مشروبات غازية",
},
{
  id: "rita-berry",
  name: "ريتا توت",
  image: "https://j.top4top.io/p_34897wq8d6.png",
  calories: 60,
  fat: 0,
  protein: 0,
  carb: 15,
  category: "المشروبات",
  subcategory: "مشروبات غازية",
},
{
  id: "rita-red-sugar-free",
  name: "ريتا رد بدون سكر",
  image: "https://k.top4top.io/p_3489irekk7.png",
  calories: 3,
  fat: 0,
  protein: 0,
  carb: 0,
  category: "المشروبات",
  subcategory: "مشروبات غازية",
},
{
  id: "rita-passion-fruit",
  name: "ريتا باشون فروت",
  image: "https://l.top4top.io/p_3489cfzjh8.png",
  calories: 62.3,
  fat: 0,
  protein: 0,
  carb: 15,
  category: "المشروبات",
  subcategory: "مشروبات غازية",
},
{
  id: "barbican-apple",
  name: "بربيكان بالتفاح",
  image: "https://a.top4top.io/p_3489nbk509.png",
  calories: 33,
  fat: 0,
  protein: 0,
  carb: 8.4,
  category: "المشروبات",
  subcategory: "مشروبات غازية",
},
{
  id: "barbican-citrus",
  name: "بربيكان شراب الشعير بنكهة الحمضيات",
  image: "https://h.top4top.io/p_3489u18j00.png",
  calories: 54.4,
  fat: 0,
  protein: 0,
  carb: 13.6,
  category: "المشروبات",
  subcategory: "مشروبات غازية",
},
//مشروب شاي مثلج
{
 id: "zwy_shay_mthlj_bnkhh_alkhwkh",
  name: "زوي شاي مثلج بنكهة الخوخ 320 مل",
  image: "https://c.top4top.io/p_35748su470.jpeg",
  calories: 31,
  fat: 0,
  protein: 0.5,
  carb: 8,
  category: "المشروبات",
  subcategory: "مشروب شاي مثلج",
},
{
id: "zwy_shay_mthlj_bnkhh_almanjw",
  name: "زوي شاي مثلج بنكهة المانجو 320 مل",
  image: "https://d.top4top.io/p_3574ce0lq1.jpeg",
  calories: 31,
  fat: 0,
  protein: 0.5,
  carb: 8,
  category: "المشروبات",
  subcategory: "مشروب شاي مثلج",
},

{
  id: "zwy_shay_mthlj_bnkhh_altwt_albry",
  name: "زوي شاي مثلج بنكهة التوت البري 320 مل",
  image: "https://e.top4top.io/p_3574uuhf22.jpeg",
  calories: 31,
  fat: 0,
  protein: 0.5,
  carb: 8,
  category: "المشروبات",
  subcategory: "مشروب شاي مثلج",
},

{
  id: "zwy_shay_mthlj_bnkhh_alfwakh_alastwaeyh",
  name: "زوي شاي مثلج بنكهة الفواكه الاستوائية 320 مل",
  image: "https://f.top4top.io/p_357427ysq3.jpeg",
  calories: 31,
  fat: 0,
  protein: 0.5,
  carb: 8,
  category: "المشروبات",
  subcategory: "مشروب شاي مثلج",
},

{
  id: "zwy_shay_mthlj_bnkhh_allymwn_walnanaa",
  name: "زوي شاي مثلج بنكهة الليمون والنعناع 320 مل",
  image: "https://g.top4top.io/p_3574918ko4.jpeg",
  calories: 31,
  fat: 0,
  protein: 0.4,
  carb: 8,
  category: "المشروبات",
  subcategory: "مشروب شاي مثلج",
},

{
  id: "lybtwn_ays_ty_bnkhh_alkhwkh",
  name: "ليبتون أيس تي بنكهة الخوخ 315 مل",
  image: "https://h.top4top.io/p_3574agsd25.jpeg",
  calories: 19,
  fat: 0,
  protein: 0,
  carb: 4.6,
  category: "المشروبات",
  subcategory: "مشروب شاي مثلج",
},

{
  id: "lybtwn_ays_ty_zyrw_bnkhh_alkhwkh",
  name: "ليبتون أيس تي زيرو بنكهة الخوخ 315 مل",
  image: "https://i.top4top.io/p_3574a46lx6.jpeg",
  calories: 1,
  fat: 0,
  protein: 0,
  carb: 0.1,
  category: "المشروبات",
  subcategory: "مشروب شاي مثلج",
},

{
  id: "lybtwn_ays_ty_fwakh_hmraa",
  name: "ليبتون أيس تي فواكة حمراء 315 مل",
  image: "https://j.top4top.io/p_3574g6edg7.jpeg",
  calories: 20,
  fat: 0,
  protein: 0,
  carb: 4.6,
  category: "المشروبات",
  subcategory: "مشروب شاي مثلج",
},

{
  id: "lyf_shay_akhdr_mthlj_balkhwkh_walkrkdyh",
  name: "ليف شاي أخضر مثلج بالخوخ والكركديه 240 مل",
  image: "https://k.top4top.io/p_35749ll6i8.jpeg",
  calories: 26,
  fat: 0,
  protein: 0,
  carb: 6.6,
  category: "المشروبات",
  subcategory: "مشروب شاي مثلج",
},

{
  id: "lyf_shay_akhdr_mthlj_balnanaa_almghrby",
  name: "ليف شاي أخضر مثلج بالنعناع المغربي 240 مل",
  image: "https://l.top4top.io/p_3574xzql19.jpeg",
  calories: 27,
  fat: 0,
  protein: 0,
  carb: 6.7,
  category: "المشروبات",
  subcategory: "مشروب شاي مثلج",
},
//مشروبات طاقة
//مشروبات ساخنة
{
  id: "qhwh_Saudi_hyl",
  name: "قهوة سعودية ( هيل )",
  image: "https://up6.cc/2025/08/175923970130031.png",
  calories: 2,
  fat: 0,
  protein: 0,
  carb: 0.1,
  category: "المشروبات",
  subcategory: "مشروبات ساخنة",
},
{
  id: "shay-bidun-sukar",
  name: "شاي بدون سكر",
  image: "https://up6.cc/2025/10/176521714494551.jpeg",
  calories: 1,
  fat: 0,
  protein: 0.3,
  carb: 0,
  category: "المشروبات",
  subcategory: "مشروبات ساخنة",
},
//عصائر
{
  id: "nadk_nktar_frawlh_ma_fwakh_mshklh",
  name: "نادك نكتار فراولة مع فواكه مشكلة",
  image: "https://up6.cc/2025/08/175445911722831.png",
  calories: 48,
  fat: 0,
  protein: 0,
  carb: 12,
  category: "المشروبات",
  subcategory: "عصائر",
},
//اظرف 
{
  id: "zrf_shay_krk",
  name: "ظرف شاي كرك",
  image: "https://up6.cc/2025/08/175715259501061.jpeg",
  calories: 400,
  fat: 7.8,
  protein: 4.8,
  carb: 78,
  category: "المشروبات",
  subcategory: "اظرف سريعة التحضير",
},
{
  id: "bajh_qhwh_frnsyh_bnkhh_altwfy",
  name: "باجة قهوة فرنسيه بنكهة التوفي",
  image: "https://up6.cc/2026/10/176790519526811.jpeg",
  calories: 410,
  fat: 5,
  protein: 10,
  carb: 80,
  category: "المشروبات",
  subcategory: "اظرف سريعة التحضير",
},
//السكريات-ايسكريم
{
  id: "alaml_ayskrym_manjw",
  name: "الأمل ايسكريم مانجو",
  image: "https://up6.cc/2025/10/176018493623183.jpeg",
  calories: 130,
  fat: 2.8,
  protein: 1.8,
  carb: 25,
  category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "quality-cherry-vanilla-icecream",
  name: "كواليتي ايسكريم فروتي الكرز بالفانيليا",
  image: "https://f.top4top.io/p_34923p8980.png",
  calories: 163.3,
  fat: 4.3,
  protein: 3.3,
  carb: 30,
  category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "quality-red-berry-icecream",
  name: "كواليتي ايسكريم فروتي التوت الأحمر",
  image: "https://g.top4top.io/p_3492tbz381.png",
  calories: 93.3,
  fat: 0,
  protein: 0,
  carb: 23.3,
  category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "quality-mango-icecream",
  name: "كواليتي ايسكريم فروتي مانجو",
  image: "https://h.top4top.io/p_3492oddhy2.png",
  calories: 143.3,
  fat: 2.5,
  protein: 5,
  carb: 23.3,
  category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "quality-milky-berry-icecream",
  name: "كواليتي ايسكريم مثلوج حليبي التوت",
  image: "https://i.top4top.io/p_3492bz1kr3.png",
  calories: 153.3,
  fat: 4.1,
  protein: 3.3,
  carb: 20,
  category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "quality-choco-bar",
  name: "كواليتي ايسكريم شوكو بار",
  image: "https://j.top4top.io/p_3492ov8wj4.png",
  calories: 263,
  fat: 16.9,
  protein: 6.1,
  carb: 21.5,
  category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "saudi-vanilla-sandwich",
  name: "السعودية ايسكريم ساندويش بالفانيليا",
  image: "https://k.top4top.io/p_34923d5sm5.png",
  calories: 130,
  fat: 3,
  protein: 2,
  carb: 24,
  category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "saudi-vanilla-biscuit",
  name: "السعودية بابو ايسكريم بسكويت الفانيلا",
  image: "https://l.top4top.io/p_3492zsqsp6.png",
  calories: 136.3,
  fat: 6.3,
  protein: 1.8,
  carb: 19,
  category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "saudi-choco-biscuit",
  name: "السعودية بابو ايسكريم بسكويت شوكولاته",
  image: "https://a.top4top.io/p_34929w2tl7.png",
  calories: 136.3,
  fat: 6.3,
  protein: 1.8,
  carb: 19,
  category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "saudi-strawberry-biscuit",
  name: "السعودية ايسكريم بسكويت فراولة",
  image: "https://b.top4top.io/p_3492j688e8.png",
  calories: 136.6,
  fat: 6.3,
  protein: 1.8,
  carb: 19,
  category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "saudi-cappuccino-biscuit",
  name: "السعودية ايسكريم بسكويت كابتشينو",
  image: "https://c.top4top.io/p_3492h1hlj9.png",
  calories: 145.2,
  fat: 6,
  protein: 1.7,
  carb: 20.8,
  category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "saudi-feast-chocolate",
  name: "السعودية فيست  ايسكريم شوكولاتة",
  image: "https://f.top4top.io/p_34929krvu0.png",
  calories: 272.2,
  fat: 18.9,
  protein: 5.5,
  carb: 20,
  category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "saudi-yofo-icecream",
  name: "السعودية يوفو  ايسكريم",
  image: "https://g.top4top.io/p_3492cwac41.png",
  calories: 289.1,
  fat: 18,
  protein: 3.6,
  carb: 29,
 category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "oreo-vanilla-sandwich",
  name: "أوريوا ايسكريم شوكولاته سندويش بنكهة فانيليا",
  image: "https://h.top4top.io/p_3492yi8842.png",
  calories: 300,
  fat: 11,
  protein: 5.1,
  carb: 43,
  category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "galaxy-heart-icecream",
  name: "جالكسي ايسكريم شكل قلب",
  image: "https://i.top4top.io/p_3492ftr1j3.png",
  calories: 307,
  fat: 18,
  protein: 4.1,
  carb: 31,
 category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "baskin-robbins-praline",
  name: "باسكن روبنز ايسكريم كراميل بالكريمة",
  image: "https://j.top4top.io/p_3492qmsan4.png",
  calories: 154,
  fat: 8.4,
  protein: 1.9,
  carb: 17.7,
 category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "baskin-robbins-candy",
  name: "باسكن روبنز ايسكريم حلوى القطن",
  image: "https://k.top4top.io/p_3492ygbq35.png",
  calories: 132,
  fat: 7.6,
  protein: 2,
  carb: 13.9,
  category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "saudi-chocolate-box",
  name: "السعودية ايسكريم الشوكولاتة علبة",
  image: "https://l.top4top.io/p_3492scy6c6.png",
  calories: 105,
  fat: 5.4,
  protein: 2,
  carb: 12,
category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "saudi-strawberry-box",
  name: "السعودية ايسكريم فراولة علبة",
  image: "https://a.top4top.io/p_3492ej2rb7.png",
  calories: 100,
  fat: 5.2,
  protein: 2,
  carb: 11.2,
  category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "saudi-mango-box",
  name: "السعودية ايسكريم المانجو",
  image: "https://b.top4top.io/p_3492n5jey8.png",
  calories: 108,
  fat: 5,
  protein: 2,
  carb: 14,
 category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "loacker-icecream-sandwich",
  name: "لواكر ايسكريم ساندوتش",
  image: "https://c.top4top.io/p_349210gya9.png",
  calories: 350,
  fat: 14,
  protein: 5.3,
  carb: 50,
  category: "السكريات",
  subcategory: "🍦ايسكريم"
},
{
  id: "alaml_ayskrym_sandwysh_balfanylya",
  name: "الامل ايسكريم ساندويش بالفانيليا",
  image: "https://c.top4top.io/p_3500xx7g01.png",
  calories: 142,
  fat: 3.7,
  protein: 2.1,
  carb: 25,
  category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "alamil-bialkaraz",
  name: "الامل ايسكريم بالكرز",
  image: "https://up6.cc/2025/08/175692864241341.png",
  calories: 136.3,
  fat: 3.3,
  protein: 2.3,
  carb: 25,
  category: "السكريات",
  subcategory: "🍦ايسكريم",
},
{
  id: "tuyst-sandutsh-ayskirim",
  name: "تويست ايسكريم ساندوتش",
  image: "https://up6.cc/2025/08/175692864243262.png",
  calories: 278.8,
  fat: 10,
  protein: 4.8,
  carb: 42.3,
  category: "السكريات",
  subcategory: "🍦ايسكريم",
},
//—شوكولاتة 
{
  id: "break-soba",
  name: "شوكولاته بريك سوبا 30 جم",
  image: "https://up6.cc/2025/10/175985749853571.jpeg",
  calories: 496.67,
  fat: 23.33,
  protein: 3.33,
  carb: 70,
  category: "السكريات",
  subcategory: "شوكولاتة",
},
{
  id: "break-star",
  name: "شوكولاته بريك ستار 13 جم",
  image: "https://up6.cc/2025/10/176018493620272.jpeg",
  calories: 530.77,
  fat: 30.77,
  protein: 7.69,
  carb: 53.85,
  category: "السكريات",
  subcategory: "شوكولاتة",
},
{
  id: "baskreem-caramel",
  name: "بسكريم بكريمة الكراميل 36 جم",
  image: "https://up6.cc/2025/10/175985791850291.jpeg",
  calories: 181,
  fat: 13.89,
  protein: 2.78,
  carb: 36.11,
  category: "السكريات",
  subcategory: "شوكولاتة",
},
{
  id: "snykrz_awryjynal",
  name: "سنيكرز أوريجينال 40 جم",
  image: "https://up6.cc/2025/10/175984429527481.jpeg",
  calories: 482.5,
  fat: 23.25,
  protein: 8.5,
  carb: 60,
  category: "السكريات",
  subcategory: "شوكولاتة",
},

{
  id: "wyf_ab_akstra_wyfr_balbndq",
  name: "ويف اب اكسترا ويفر بالبندق 29 جم",
  image: "https://up6.cc/2025/10/175984429531142.jpeg",
  calories: 544.8,
  fat: 33.44,
  protein: 12.75,
  carb: 48.2,
  category: "السكريات",
  subcategory: "شوكولاتة",
},

{
  id: "jalksy_shwkwlath_krysby",
  name: "جالكسي شوكولاته كريسبي ( 16جم)",
  image: "https://up6.cc/2025/10/175984429534823.jpeg",
  calories: 531.25,
  fat: 31.25,
  protein: 6.25,
  carb: 62.5,
  category: "السكريات",
  subcategory: "شوكولاتة",
},
{
  id: "maltyzrz_krat_alshwkwlath",
  name: "مالتيزرز كرات الشوكولاته 37 جم",
  image: "https://up6.cc/2025/10/17598442953714.jpeg",
  calories: 502.7,
  fat: 24.59,
  protein: 8.6,
  carb: 62.16,
  category: "السكريات",
  subcategory: "شوكولاتة",
},
{
  id: "shwkwlath_jalksy_daknh_dark",
  name: "شوكولاته جالكسي داكنه ( DARK )",
  image: "https://up6.cc/2026/01/176814474537481.jpeg",
  calories: 567.5,
  fat: 32.5,
  protein: 6.5,
  carb: 57.5,
  category: "السكريات",
  subcategory: "شوكولاتة",
},
{ 
 id:"awlkr_dylwks_wyfr_bkrymh_albndq",
  name: "أولكر ديلوكس ويفر بكريمة البندق 40 جم",
  image: "https://up6.cc/2025/10/175984429539435.jpeg",
  calories: 501,
  fat: 24,
  protein: 6.5,
  carb: 62.9,
  category: "السكريات",
  subcategory: "شوكولاتة",
},
{
  id: "kyndr_bwynw-(21.5g)",
  name: "كيندر بوينو 2 اصابع للواحد 21.5 جم",
  image: "https://up6.cc/2025/10/176018493618161.jpeg",
  calories: 572,
  fat: 38,
  protein: 8.6,
  carb: 52,
  category: "السكريات",
  subcategory: "شوكولاتة",
},
{
  id: "lwbw_drym_bar_kyk_balkakaw_mhshy_balkrymh_alkramyl",
  name: "لوبو دريم بار كيك بالكاكاو محشي بالكريمة الكراميل 50 جم",
  image: "sss",
  calories: 458,
  fat: 24,
  protein: 6,
  carb: 56,
  category: "السكريات",
  subcategory: "شوكولاتة",
},
//كيك
{
  id: "choco-caramel-bar",
  name: "كيك بار الشوكولاته بالكراميل 40 جم",
  image: "https://up6.cc/2024/12/173555886146151.jpeg",
  calories: 395,
  fat: 17.5,
  protein: 3.75,
  carb: 57.5,
  category: "السكريات",
  subcategory: "كيك",
},
{
  id: "dima-fantasy",
  name: "ديمة فانتزي كيك بالشوكولاته 40 جم",
  image: "https://up6.cc/2025/10/175985729682431.jpeg",
  calories: 390,
  fat: 57.5,
  protein: 15,
  carb: 40,
  category: "السكريات",
  subcategory: "كيك",
},
//سكر
 {
   id: "sugar",
   name: "سكر",
   image: "https://up6.cc/2025/08/175715390643771.jpeg",
   calories: 387,
   fat: 0,
   protein: 0,
   carb: 100,
   category: "السكريات",
   subcategory: "سكر",
 },
//موالح
{
  id: "lyz_fwrnw_balflfl_alaswd",
  name: "ليز فورنو بالفلفل الاسود",
  image: "https://up6.cc/2026/01/176826276017971.jpeg",
  calories: 430,
  fat: 12.3,
  protein: 6.6,
  carb: 73.3,
  category: "موالح",
  subcategory: "🍿شبسات",
},

{
  id: "shytws_kranshy_har_nar",
  name: "شيتوس كرانشي حار نار",
  image: "https://up6.cc/2026/01/176826276021472.jpeg",
  calories: 553.3,
  fat: 33.3,
  protein: 5.3,
  carb: 53.3,
  category: "موالح",
  subcategory: "🍿شبسات",
},

{
  id: "lyz_maks_bnkhh_ajnhh_shykajw_alharh",
  name: "ليز ماكس بنكهة أجنحة شيكاجو الحارة",
  image: "https://up6.cc/2026/01/176826302015762.jpeg",
  calories: 496,
  fat: 27.2,
  protein: 8,
  carb: 56,
  category: "موالح",
  subcategory: "🍿شبسات",
},

{
  id: "lyz_maks_bnkhh_alflfl_alhad_almksyky",
  name: "ليز ماكس بنكهة الفلفل الحاد المكسيكي",
  image: "https://up6.cc/2026/01/176826302014091.jpeg",
  calories: 496,
  fat: 27.6,
  protein: 8,
  carb: 56,
  category: "موالح",
  subcategory: "🍿شبسات",
},
{
  id: "aman_btats_balnkhh_alharh",
  name: "عمان بطاطس بالنكهة الحارة",
  image: "https://up6.cc/2026/01/176857126379731.jpeg",
  calories: 564,
  fat: 35.2,
  protein: 6,
  carb: 56,
  category: "موالح",
  subcategory: "🍿شبسات",
},
{
  id: "lyz_btats_balmlh_walkhl",
  name: "ليز بطاطس بالملح والخل",
  image: "https://up6.cc/2026/01/17685716398741.jpeg",
  calories: 528,
  fat: 34.4,
  protein: 6.4,
  carb: 48,
  category: "موالح",
  subcategory: "🍿شبسات",
},
{
  id: "dwrytws_rqaeq_aldhrh_bnkhh_jbnh_alnatshwz",
  name: "دوريتوس رقائق الذرة بنكهة جبنة الناتشوز",
  image: "https://up6.cc/2026/01/176826302018063.jpeg",
  calories: 506.6,
  fat: 27,
  protein: 8,
  carb: 60,
  category: "موالح",
  subcategory: "🍿شبسات",
},
//فصفص
{
  id: "dlfn_hb_msry",
  name: "دلفن حب مصري",
  image: "https://b.top4top.io/p_35004y3wy0.png",
  calories: 371.4,
  fat: 3.5,
  protein: 17.8,
  carb: 64.2,
  category: "موالح",
  subcategory: "فصفص",
},
//مكسرات
{
  id: "jwz_ayn_aljml",
  name: "جوز ( عين الجمل )",
  image: "https://up6.cc/2026/01/176814474543493.jpeg",
  calories: 654,
  fat: 65.2,
  protein: 15.2,
  carb: 13.7,
  category: "موالح",
  subcategory: "مكسرات",
},
{
  id: "fwl_swdany_mmlh_bajh",
  name: "فول سوداني مملح باجة",
  image: "https://up6.cc/2025/10/176565711775491.jpeg",
  calories: 453.5,
  fat: 14.2,
  protein: 25,
  carb: 50,
  category: "موالح",
  subcategory: "مكسرات",
},
//المعلبات
//حلاوة طحينية
{
id: "alnakhluh-halawat-tahinia",
  name: "النخله حلاوة طحينية",
  image: "https://www2.0zz0.com/2025/10/13/22/593042218.jpeg",
  calories: 571.4,
  fat: 35.7,
  protein: 14.2,
  carb: 47.6,
  category: "المعلبات",
  subcategory: "حلاوة طحينية",
},
{
  id: "alnkhlh_hlawh_balfstq",
  name: "النخلة حلاوة بالفستق",
  image: "https://www2.0zz0.com/2025/10/13/22/238958595.jpeg",
  calories: 571.42,
  fat: 35.7,
  protein: 11.9,
  carb: 50,
  category: "المعلبات",
  subcategory: "حلاوة طحينية",
},

{
  id: "alnkhlh_hlawh_balshkwlath",
  name: "النخلة حلاوة بالشكولاتة",
  image: "https://www2.0zz0.com/2025/10/13/22/963101495.jpeg",
  calories: 528.57,
  fat: 33.3,
  protein: 14.28,
  carb: 42.85,
  category: "المعلبات",
  subcategory: "حلاوة طحينية",
},

{
  id: "alnkhlh_hlawh_thynyh_bdwn_skr",
  name: "النخله حلاوه طحينية بدون سكر",
  image: "https://www2.0zz0.com/2025/10/13/22/200491175.jpeg",
  calories: 428.5,
  fat: 30.95,
  protein: 14.28,
  carb: 50,
  category: "المعلبات",
  subcategory: "حلاوة طحينية",
},

{
  id: "ymamh_hlawh_thynyh_qablh_lldhn",
  name: "يمامة حلاوة طحينية قابلة للدهن",
  image: "https://www2.0zz0.com/2025/10/13/22/255559077.jpeg",
  calories: 563,
  fat: 35,
  protein: 11,
  carb: 51,
  category: "المعلبات",
  subcategory: "حلاوة طحينية",
},

{
id: "hlwany_hlawh_qablh_lldhn_sadh",
name: "حلواني حلاوة قابلة للدهن سادة",
  image: "https://www2.0zz0.com/2025/10/13/22/900818039.jpeg",
  calories: 575,
  fat: 39,
  protein: 10,
  carb: 48,
  category: "المعلبات",
  subcategory: "حلاوة طحينية",
},

{
  id: "hlwany_hlawh_qablh_lldhn_fstq",
  name: "حلواني حلاوة قابلة للدهن فستق",
  image: "https://www2.0zz0.com/2025/10/13/22/850944344.jpeg",
  calories: 600,
  fat: 44,
  protein: 10,
  carb: 43,
  category: "المعلبات",
  subcategory: "حلاوة طحينية",
},

{
  id: "hlwany_hlawh_qablh_lldhn_twt",
  name: "حلواني حلاوة قابلة للدهن توت",
  image: "https://www2.0zz0.com/2025/10/13/22/849800959.jpeg",
  calories: 575,
  fat: 39,
  protein: 10,
  carb: 50,
  category: "المعلبات",
  subcategory: "حلاوة طحينية",
},

{
  id: "hlwany_hlawh_qablh_lldhn_shwkwlath",
  name: "حلواني حلاوة قابلة للدهن شوكولاتة",
  image: "https://www2.0zz0.com/2025/10/13/22/865454839.jpeg",
  calories: 555,
  fat: 36,
  protein: 11,
  carb: 50,
  category: "المعلبات",
  subcategory: "حلاوة طحينية",
},
//فود سوداني
{
  id: "qwdy_zbdh_alfwl_alswdany_naamh",
  name: "قودي زبدة الفول السوداني ناعمة",
  image: "https://up6.cc/2026/01/1768144745412.jpeg",
  calories: 640.6,
  fat: 53.1,
  protein: 27.1,
  carb: 11.8,
  category: "المعلبات",
  subcategory: "الفول السوداني",
},
//اسماك معلبة
{
  id: "goody_twna_balmaa_walmlh",
  name: "GOODY قودي تونا بالماء والملح 185 جم",
  image: "https://up6.cc/2025/10/175958678402781.jpeg",
  calories: 110,
  fat: 1.2,
  protein: 24.8,
  carb: 0,
  category: "المعلبات",
  subcategory: "اسماك معلبة",
},
{
  id: "tryfa_twnh_khfyfh",
  name: "تريفا تونة خفيفة بالزيت النباتي 80 جم",
  image: "https://up6.cc/2025/10/175958678408982.jpeg",
  calories: 130,
  fat: 4,
  protein: 24,
  carb: 0,
  category: "المعلبات",
  subcategory: "اسماك معلبة",
},
{
  id: "ryw_mary_slth_alkhdar_ma_altwnh_alkhlth_almksykyh",
  name: "ريو ماري سلطة الخضار مع التونة الخلطة المكسيكية 160جم",
  image: "https://up6.cc/2025/10/175958678412423.jpeg",
  calories: 197,
  fat: 13,
  protein: 10,
  carb: 12,
  category: "المعلبات",
  subcategory: "اسماك معلبة",
},
{
  id: "qwdy_tndryna_twna",
  name: "قودي تندرينا تونا ناعمة 185 جم",
  image: "https://up6.cc/2025/10/175958678415494.jpeg",
  calories: 209,
  fat: 13.7,
  protein: 21.4,
  carb: 0,
  category: "المعلبات",
  subcategory: "اسماك معلبة",
},
{
  id: "rwtanh_lhm_twna_",
  name: "روتانه لحم تونا بالزيت النباتي 160 جم",
  image: "https://up6.cc/2025/10/175958678417215.jpeg",
  calories: 130,
  fat: 4,
  protein: 23,
  carb: 0,
  category: "المعلبات",
  subcategory: "اسماك معلبة",
},
//صلصات معلبة
///لحوم و بيض
      {
id: "chicken",
name: "دجاج",
image:"###",
        calories: 239,
        fat: 14,
        protein: 27,
        carb: 0,
        category: "اللحوم والبيض",
        subcategory: "دواجن🐓",
      },
      {
        id: "egg",
        name: "بيض",
        image:
          "https://placehold.co/200x150/png?text=بيض+صورة+للطعام",
        calories: 155,
        fat: 11,
        protein: 13,
        carb: 1.1,
        category: "اللحوم والبيض",
        subcategory: "بيض🥚",
      },
      {
        id: "beef",
        name: "لحم بقري",
        image:
          "https://placehold.co/200x150/png?text=لحم+بقري+صورة+للطعام",
        calories: 250,
        fat: 15,
        protein: 26,
        carb: 0,
        category: "اللحوم والبيض",
        subcategory: "لحم بقري",
      },
{
  id: "fish",
        name: "سمك",
        image:
          "https://placehold.co/200x150/png?text=سمك+صورة+للطعام",
        calories: 206,
        fat: 12,
        protein: 22,
        carb: 0,
        category: "اللحوم والبيض",
        subcategory: "أسماك",
      },
//حبوب و بذور)
//حبوب كاملة 
{
  id: "kwykr_shwfan_abyd",
  name: "كويكر شوفان أبيض",
  image: "https://up6.cc/2026/01/176813609652741.jpeg",
  calories: 375,
  fat: 8,
  protein: 11,
  carb: 67.5,
  category: "الحبوب والبذور",
  subcategory: "حبوب كاملة",
},

{
  id: "hnaa_hbwb_kamlh_shwfan",
  name: "هناء حبوب كاملة شوفان",
  image: "https://up6.cc/2026/01/176813609655352.jpeg",
  calories: 408,
  fat: 9.3,
  protein: 10.5,
  carb: 70.5,
  category: "الحبوب والبذور",
  subcategory: "حبوب كاملة",
},
///كورن فليكس
{
  id: "Nesquik-kurn filiks shwkwlatat",
name: "Nesquik كورن فليكس شوكولاتة",
image:"https://up6.cc/2025/08/175844583336451.png",
calories: 377,
fat: 2.8,
protein: 8.5,
carb: 75.2,
category: "الحبوب والبذور",
subcategory: "كورن فليكس",
  },
{
  id: "xx",
  name: "كورن فليكس (Kellogg's)كيلوقز",
  image: "https://up6.cc/2025/08/175844583339482.png",
  calories: 378,
  fat: 0.9,
  protein: 7,
  carb: 84,
  category: "الحبوب والبذور",
  subcategory: "كورن فليكس",
},
//
{
  id: "Arz-matbukh-zayt-zaitun",
  name: "أرز ابيض مطبوخ بزيت زيتون 4 مل",
  image: "https://up6.cc/2026/10/176786832620371.jpeg",
  calories: 196,
  fat: 4.3,
  protein: 6.0,
  carb: 30.0,
  category: "الحبوب والبذور",
  subcategory: "رز🍚",
},
//بذور 
{
  id: "bthr_ktan",
  name: "بذور الكتان",
  image: "https://up6.cc/2026/06/178053657098351.jpeg",
  calories: 534,
  fat: 42,
  protein: 18,
  carb: 29,
  category: "الحبوب والبذور",
  subcategory: "بذور",
},
{
  id: "bthr_shya",
  name: "بذور الشيا",
  image: "https://up6.cc/2026/06/178053657098351.jpeg",
  calories: 486,
  fat: 31,
  protein: 17,
  carb: 42,
  category: "الحبوب والبذور",
  subcategory: "بذور",
},
{
  id: "bthr_3bad_shms",
  name: "بذور عباد الشمس",
  image: "https://up6.cc/2026/06/178053657098351.jpeg",
  calories: 584,
  fat: 51,
  protein: 21,
  carb: 20,
  category: "الحبوب والبذور",
  subcategory: "بذور",
},
{
  id: "bthr_qr3",
  name: "بذور القرع (اليقطين)",
  image: "https://up6.cc/2026/06/178053657098351.jpeg",
  calories: 559,
  fat: 49,
  protein: 30,
  carb: 11,
  category: "الحبوب والبذور",
  subcategory: "بذور",
},
{
  id: "bthr_smsm",
  name: "بذور السمسم",
  image: "https://up6.cc/2026/06/178053657098351.jpeg",
  calories: 573,
  fat: 50,
  protein: 18,
  carb: 23,
  category: "الحبوب والبذور",
  subcategory: "بذور",
},
{
  id: "bthr_qnb",
  name: "بذور القنب",
  image: "https://up6.cc/2026/06/178053657098351.jpeg",
  calories: 553,
  fat: 49,
  protein: 32,
  carb: 9,
  category: "الحبوب والبذور",
  subcategory: "بذور",
},
{
  id: "bthr_kshkhash",
  name: "بذور الخشخاش",
  image: "https://up6.cc/2026/06/178053657098351.jpeg",
  calories: 525,
  fat: 42,
  protein: 18,
  carb: 28,
  category: "الحبوب والبذور",
  subcategory: "بذور",
},
{
  id: "bthr_kmwn",
  name: "بذور الكمون",
  image: "https://up6.cc/2026/06/178053657098351.jpeg",
  calories: 375,
  fat: 22,
  protein: 18,
  carb: 44,
  category: "الحبوب والبذور",
  subcategory: "بذور",
},
{
  id: "bthr_hl",
  name: "بذور الهيل",
  image: "https://up6.cc/2026/06/178053657098351.jpeg",
  calories: 311,
  fat: 7,
  protein: 11,
  carb: 68,
  category: "الحبوب والبذور",
  subcategory: "بذور",
},
{
  id: "bthr_rshad",
  name: "بذور الرشاد",
  image: "https://up6.cc/2026/06/178053657098351.jpeg",
  calories: 454,
  fat: 25,
  protein: 26,
  carb: 35,
  category: "الحبوب والبذور",
  subcategory: "بذور",
},
//دهون
 {
id: "oliveOil",
        name: "زيت زيتون",
        image:"sss",
        calories: 793,
        fat: 90,
        protein: 0,
        carb: 0,
        category: "الزيوت والدهون",
        subcategory: "زيوت صحية",
      },
///زبدة
 {
   id: "Nadek's butter is unsalted",
   name: "زبدة نادك غير مملحة (100g)",
   image: "https://i.top4top.io/p_379283ayx0.jpeg",
   calories: 740,
   fat: 82,
   protein: 0.6,
   carb: 0.6,
   category: "الزيوت والدهون",
   subcategory: "زبدة"
 },
  {
   id: "Lurpak butter is not salted",
   name: "زبدة لورباك غير مملحة",
   image: "https://k.top4top.io/p_3792d0tmz2.jpeg",
   calories: 679,
   fat: 75,
   protein: 0.5,
   carb: 0.6,
   category: "الزيوت والدهون",
   subcategory: "زبدة"
 },
  {
   id: "Almarai butter is not salted",
   name: "زبدة المراعي غير مملحة",
   image: "https://j.top4top.io/p_379225yte1.jpeg",
   calories: 750,
   fat: 80,
   protein: 0,
   carb: 0,
   category: "الزيوت والدهون",
   subcategory: "زبدة"
 },
 
/// مطاعم عالمية
      {
id: "ماك",
name: "ساندوتش جراند تشيكن سبيشال",
image:"https://up6.cc/2025/06/174935351545021.png",
        calories: 257.6,
        fat: 14.3,
        protein: 11,
        carb: 22.5,
        category: "مطاعم عالميه",
        subcategory: "ماكدونالدز🍔",
      },
/// وصفاتنا افضل صحي 
{
  id: "grilled-chicken-pasta",
  name: "باستا الدجاج المشوي :الوزن (300 جم)",
  image: "https://up6.cc/2025/10/176495274035491.jpeg",
  calories: 128.7,
  fat: 4.2,
  protein: 8.9,
  carb: 14.7,
  category: "وصفاتBEST",
  subcategory: "وصفات من الرئيسية",
},
{
  id: "fruit-salad",
  name: "سلطة فواكه(وصفاتBEST)",
  image: "https://up6.cc/2025/08/175881308746151.jpeg",
  calories: 60,
  fat: 0.3,
  protein: 0.6,
  carb: 15.5,
  category: "وصفاتBEST",
  subcategory: "وصفات من الرئيسية",
},
{
  id: "eggs-avocado-toast",
  name: "البيض المسلوق والأفوكادو",
  image: "https://up6.cc/2025/10/176513072771191.jpeg",
  calories: 442,
  fat: 24.38,
  protein: 20.20,
  carb: 38,
  category: "وصفاتBEST",
  subcategory: "وصفات من الرئيسية",
}
    ];

// ================================================================
// STATE
// ================================================================
let sidebarOpen = false;
let calendarVisible = true;
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
let selectedDate = new Date(currentYear, currentMonth, currentDate.getDate());
let mealsData = JSON.parse(localStorage.getItem("nutritionAppData")) || {};
let favorites = JSON.parse(localStorage.getItem("nutritionAppFavorites")) || [];
let customMeals = JSON.parse(localStorage.getItem("customMeals")) || [];
let chartInstance = null;
let currentMainCategory = null;
let currentSubCategory = null;
let currentFoodDetail = null;
let currentFoodDetailMeal = null;
let currentFoodDetailIndex = null;
let currentEditingMealId = null;

// ===== الوجبات الأساسية =====
let baseMeals = JSON.parse(localStorage.getItem("baseMeals")) || [
    { id: "breakfast", name: "الفطور", emoji: "☀️" },
    { id: "lunch", name: "الغداء", emoji: "🌖" },
    { id: "dinner", name: "العشاء", emoji: "🌑" },
    { id: "snack", name: "وجبة خفيفة", emoji: "➕" }
];

// ================================================================
// TOAST NOTIFICATION
// ================================================================
function showToast(message, type = "success") {
    const container = document.getElementById("toastContainer");
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    const icon = type === "success" ? "fa-check-circle" : type === "warning" ? "fa-exclamation-triangle" : "fa-times-circle";
    toast.innerHTML = `<i class="fas ${icon}"></i> ${message}`;
    container.appendChild(toast);
    setTimeout(() => { if (toast.parentNode) toast.remove(); }, 3000);
}

// ================================================================
// UTILITIES
// ================================================================
function formatDate(date) { return date.toISOString().split("T")[0]; }
function formatNumber(num) { return num.toLocaleString("ar-EG"); }
function getMonthName(monthIndex) { const months = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]; return months[monthIndex]; }
function isSameDate(d1, d2) { return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate(); }

function saveData() { localStorage.setItem("nutritionAppData", JSON.stringify(mealsData)); }
function saveFavorites() { localStorage.setItem("nutritionAppFavorites", JSON.stringify(favorites)); }
function saveCustomMeals() { localStorage.setItem("customMeals", JSON.stringify(customMeals)); }
function saveBaseMeals() { localStorage.setItem("baseMeals", JSON.stringify(baseMeals)); }

function isFavorite(foodId) { return favorites.some(f => f.id === foodId); }
function toggleFavorite(food) {
    const idx = favorites.findIndex(f => f.id === food.id);
    if (idx >= 0) { favorites.splice(idx, 1); showToast(`❌ تم إزالة "${food.name}" من المفضلة`, "warning"); }
    else { favorites.push(food); showToast(`⭐ تم إضافة "${food.name}" إلى المفضلة`, "success"); }
    saveFavorites();
}

// ===== Load Custom Foods =====
function loadCustomFoods() {
    const stored = localStorage.getItem("customFoods");
    if (stored) {
        try {
            const customFoods = JSON.parse(stored);
            for (let i = foodsData.length - 1; i >= 0; i--) {
                if (foodsData[i].id && foodsData[i].id.startsWith("custom_")) { foodsData.splice(i, 1); }
            }
            foodsData.push(...customFoods);
        } catch (e) { console.error("فشل تحميل الأطعمة المخصصة:", e); }
    }
}
loadCustomFoods();

// ================================================================
// SIDEBAR
// ================================================================
function openSidebar() { sidebar.classList.add("open"); sidebarOverlay.classList.remove("hidden"); sidebarOpen = true; }
function closeSidebar() { sidebar.classList.remove("open"); sidebarOverlay.classList.add("hidden"); sidebarOpen = false; }

document.getElementById("openSidebarBtn").addEventListener("click", openSidebar);
document.getElementById("closeSidebarBtn").addEventListener("click", closeSidebar);
document.getElementById("sidebarOverlay").addEventListener("click", closeSidebar);

// ================================================================
// CALENDAR
// ================================================================
function renderCalendar(year, month) {
    document.getElementById("calendarMonthYear").textContent = `${getMonthName(month)} ${year}`;
    const daysContainer = document.getElementById("calendarDays");
    daysContainer.innerHTML = "";
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    let startDay = firstDay.getDay();
    const prevMonthLastDay = new Date(year, month, 0).getDate();

    for (let i = startDay - 1; i >= 0; i--) {
        const div = document.createElement("div");
        div.className = "empty-day";
        div.textContent = prevMonthLastDay - i;
        daysContainer.appendChild(div);
    }

    for (let day = 1; day <= lastDay.getDate(); day++) {
        const dateObj = new Date(year, month, day);
        const dateStr = formatDate(dateObj);
        const btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = day;
        if (isSameDate(dateObj, selectedDate)) btn.classList.add("selected");
        if (mealsData[dateStr]) btn.classList.add("has-food");
        btn.addEventListener("click", () => {
            selectedDate = dateObj;
            renderCalendar(currentYear, currentMonth);
            renderMealsForSelectedDate();
            updateNutritionSummary();
            updateChart();
        });
        daysContainer.appendChild(btn);
    }

    const totalCells = daysContainer.children.length;
    const cellsToAdd = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
    for (let i = 1; i <= cellsToAdd; i++) {
        const div = document.createElement("div");
        div.className = "empty-day";
        div.textContent = i;
        daysContainer.appendChild(div);
    }
}

document.getElementById("prevMonthBtn").addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) { currentMonth = 11; currentYear--; }
    renderCalendar(currentYear, currentMonth);
});
document.getElementById("nextMonthBtn").addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) { currentMonth = 0; currentYear++; }
    renderCalendar(currentYear, currentMonth);
});

document.getElementById("goTodayBtn").addEventListener("click", () => {
    currentDate = new Date();
    currentYear = currentDate.getFullYear();
    currentMonth = currentDate.getMonth();
    selectedDate = new Date(currentYear, currentMonth, currentDate.getDate());
    renderCalendar(currentYear, currentMonth);
    renderMealsForSelectedDate();
    updateNutritionSummary();
    updateChart();
});

document.getElementById("toggleCalendarBtn").addEventListener("click", () => {
    calendarVisible = !calendarVisible;
    document.getElementById("calendarSection").classList.toggle("visible", calendarVisible);
    const icon = document.getElementById("calendarToggleIcon");
    icon.classList.toggle("fa-chevron-down", calendarVisible);
    icon.classList.toggle("fa-chevron-up", !calendarVisible);
});

document.getElementById("deleteAllBtn").addEventListener("click", () => {
    if (confirm("هل أنت متأكد من حذف جميع البيانات؟")) {
        mealsData = {};
        saveData();
        renderCalendar(currentYear, currentMonth);
        renderMealsForSelectedDate();
        updateNutritionSummary();
        updateChart();
        showToast("🗑️ تم حذف جميع البيانات", "warning");
    }
});

// ================================================================
// RENDER MAIN CATEGORIES
// ================================================================
function renderMainCategories() {
    const container = document.getElementById("mainCategories");
    container.innerHTML = "";
    Object.entries(categoriesData).forEach(([catName, catData]) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "main-category-btn";
        btn.innerHTML = `<i class="${catData.icon}"></i> ${catName}`;
        btn.dataset.category = catName;
        btn.addEventListener("click", () => {
            document.querySelectorAll(".main-category-btn").forEach(c => c.classList.remove("active"));
            btn.classList.add("active");
            renderSubCategories(catName);
            renderFoodList(catName, null, document.getElementById("foodSearchInput").value.trim());
        });
        container.appendChild(btn);
    });
}

// ================================================================
// RENDER SUB CATEGORIES - مع صور صغيرة للمطاعم
// ================================================================
function renderSubCategories(mainCategory) {
    const container = document.getElementById("subCategories");
    container.innerHTML = "";
    if (!mainCategory || !categoriesData[mainCategory]) return;
    if (mainCategory === "كل الأطعمة") return;

    categoriesData[mainCategory].subcategories.forEach((subcat) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "sub-category-btn";
        
        // صور صغيرة للتصنيفات الفرعية
        let iconHtml = "";
        if (mainCategory === "مطاعم عالميه") {
            const icon = subCategoryIcons[subcat] || "🍽️";
            iconHtml = `<span style="font-size:16px;">${icon}</span> `;
        } else if (subcat.includes("🍦") || subcat.includes("🍿") || subcat.includes("🥚") || subcat.includes("🐑") || subcat.includes("🐓") || subcat.includes("🐟") || subcat.includes("🐄") || subcat.includes("🐪") || subcat.includes("🍚") || subcat.includes("🍝")) {
            iconHtml = `<span style="font-size:14px;">${subcat.match(/[🍦🍿🥚🐑🐓🐟🐄🐪🍚🍝]/g)?.[0] || ''}</span> `;
        }
        btn.innerHTML = iconHtml + subcat.replace(/[🍦🍿🥚🐑🐓🐟🐄🐪🍚🍝]/g, '').trim();
        btn.dataset.subcategory = subcat;

        btn.addEventListener("click", () => {
            document.querySelectorAll(".sub-category-btn").forEach(c => c.classList.remove("active"));
            btn.classList.add("active");
            renderFoodList(mainCategory, subcat, document.getElementById("foodSearchInput").value.trim());
        });
        container.appendChild(btn);
    });
}

// ================================================================
// RENDER FOOD LIST
// ================================================================
function filterAndSortFoods(mainCategory, subCategory, searchTerm, filter) {
    let filtered = foodsData.filter((food) => {
        if (mainCategory && mainCategory !== "كل الأطعمة" && food.category !== mainCategory) return false;
        if (subCategory && food.subcategory !== subCategory) return false;
        if (searchTerm && !food.name.includes(searchTerm)) return false;
        return true;
    });
    switch (filter) {
        case "caloriesAsc": filtered.sort((a, b) => a.calories - b.calories); break;
        case "caloriesDesc": filtered.sort((a, b) => b.calories - a.calories); break;
        case "proteinAsc": filtered.sort((a, b) => a.protein - b.protein); break;
        case "proteinDesc": filtered.sort((a, b) => b.protein - a.protein); break;
        case "carbAsc": filtered.sort((a, b) => a.carb - b.carb); break;
        case "carbDesc": filtered.sort((a, b) => b.carb - a.carb); break;
        case "fatAsc": filtered.sort((a, b) => a.fat - b.fat); break;
        case "fatDesc": filtered.sort((a, b) => b.fat - a.fat); break;
        default: for (let i = filtered.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [filtered[i], filtered[j]] = [filtered[j], filtered[i]]; } break;
    }
    return filtered;
}

function renderFoodList(mainCategory, subCategory, searchTerm) {
    currentMainCategory = mainCategory;
    currentSubCategory = subCategory;
    const container = document.getElementById("foodList");
    container.innerHTML = "";
    const filter = document.getElementById("foodFilterSelect").value;
    const foods = filterAndSortFoods(mainCategory, subCategory, searchTerm, filter);
    document.getElementById("foodListCount").textContent = foods.length;

    if (foods.length === 0) {
        container.innerHTML = `<div class="text-center text-gray-500 py-4">لا توجد أطعمة مطابقة</div>`;
        return;
    }

    foods.forEach((food) => {
        const div = document.createElement("div");
        div.className = "food-item";
        const img = document.createElement("img");
        img.src = food.image;
        img.alt = food.name;
        img.loading = "lazy";
        div.appendChild(img);

        const infoDiv = document.createElement("div");
        infoDiv.className = "food-item-info";
        const nameP = document.createElement("div");
        nameP.className = "food-item-name";
        nameP.textContent = food.name;
        infoDiv.appendChild(nameP);
        const nutritionP = document.createElement("div");
        nutritionP.className = "food-item-nutrition";
        nutritionP.innerHTML = `<span>🔥 ${food.calories}</span><span>💪 ${food.protein}g</span><span>🍞 ${food.carb}g</span><span>🥑 ${food.fat}g</span>`;
        infoDiv.appendChild(nutritionP);
        div.appendChild(infoDiv);

        const favBtn = document.createElement("button");
        favBtn.className = `food-item-favorite ${isFavorite(food.id) ? 'active' : ''}`;
        favBtn.innerHTML = `<i class="fas fa-star"></i>`;
        favBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleFavorite(food);
            favBtn.classList.toggle("active");
        });
        div.appendChild(favBtn);

        div.addEventListener("click", () => { openFoodDetailModal(food); });
        container.appendChild(div);
    });
}

// ================================================================
// UPDATE MEAL SELECT OPTIONS - مع الوجبات الأساسية والمخصصة
// ================================================================
function updateMealSelectOptions() {
    const select = document.getElementById("mealSelect");
    if (!select) return;
    const currentValue = select.value;
    select.innerHTML = '<option value="" disabled selected>اختر الوجبة</option>';
    
    // الوجبات الأساسية
    baseMeals.forEach(meal => {
        const option = document.createElement("option");
        option.value = meal.id;
        option.textContent = `${meal.emoji} ${meal.name}`;
        option.dataset.base = "true";
        select.appendChild(option);
    });
    
    // الوجبات المخصصة
    customMeals.forEach(meal => {
        const option = document.createElement("option");
        option.value = `custom_${meal.id}`;
        option.textContent = `${meal.emoji || '🍽️'} ${meal.name}`;
        option.dataset.custom = "true";
        select.appendChild(option);
    });
    
    if (currentValue) select.value = currentValue;
}

// ================================================================
// RENDER MEALS
// ================================================================
function renderMealsForSelectedDate() {
    const container = document.getElementById("mealsSection");
    container.innerHTML = "";
    const dateStr = formatDate(selectedDate);
    const dayMeals = mealsData[dateStr] || {};
    
    // جميع الوجبات (الأساسية والمخصصة)
    const allMeals = [...baseMeals, ...customMeals.map(m => ({ ...m, id: `custom_${m.id}` }))];
    
    let hasMeals = false;
    
    allMeals.forEach(meal => {
        const mealFoods = dayMeals[meal.id] || [];
        const mealDiv = document.createElement("div");
        mealDiv.className = "meal-card";
        
        const header = document.createElement("div");
        header.className = "meal-header";
        const title = document.createElement("span");
        title.className = "meal-title";
        title.textContent = `${meal.emoji || '🍽️'} ${meal.name}`;
        header.appendChild(title);
        const count = document.createElement("span");
        count.className = "meal-count";
        count.textContent = `${mealFoods.length} أصناف`;
        header.appendChild(count);
        mealDiv.appendChild(header);
        
        if (mealFoods.length === 0) {
            const empty = document.createElement("div");
            empty.className = "meal-empty";
            empty.textContent = "لا توجد أطعمة مضافة";
            mealDiv.appendChild(empty);
        } else {
            hasMeals = true;
            mealFoods.forEach((food, index) => {
                const item = document.createElement("div");
                item.className = "meal-item";
                const img = document.createElement("img");
                img.src = food.image;
                img.alt = food.name;
                img.loading = "lazy";
                item.appendChild(img);
                const infoDiv = document.createElement("div");
                infoDiv.className = "meal-item-info";
                const name = document.createElement("div");
                name.className = "meal-item-name";
                name.textContent = food.name;
                infoDiv.appendChild(name);
                const nutrition = document.createElement("div");
                nutrition.className = "meal-item-nutrition";
                nutrition.textContent = `الكمية: ${food.quantity}g • 🔥 ${Math.round((food.calories * food.quantity) / 100)} سعرة`;
                infoDiv.appendChild(nutrition);
                item.appendChild(infoDiv);
                const deleteBtn = document.createElement("button");
                deleteBtn.className = "meal-item-delete";
                deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
                deleteBtn.addEventListener("click", (e) => {
                    e.stopPropagation();
                    deleteFoodFromMeal(dateStr, meal.id, index);
                });
                item.appendChild(deleteBtn);
                item.addEventListener("click", () => {
                    openFoodDetailModal(food, meal.id, index);
                });
                mealDiv.appendChild(item);
            });
        }
        container.appendChild(mealDiv);
    });
    
    if (!hasMeals && Object.keys(dayMeals).length === 0) {
        const emptyDay = document.createElement("div");
        emptyDay.className = "meal-card";
        emptyDay.innerHTML = `<div class="text-center text-gray-400 py-8">
            <i class="fas fa-utensils text-4xl block mb-2 opacity-30"></i>
            <p>لا توجد وجبات مسجلة لهذا اليوم</p>
            <p class="text-sm mt-1">اضغط على زر <span class="font-bold text-primary">+</span> لإضافة طعام</p>
        </div>`;
        container.appendChild(emptyDay);
    }
}

function deleteFoodFromMeal(dateStr, mealKey, foodIndex) {
    if (confirm("هل أنت متأكد من حذف هذا الطعام؟")) {
        mealsData[dateStr][mealKey].splice(foodIndex, 1);
        if (mealsData[dateStr][mealKey].length === 0 && Object.values(mealsData[dateStr]).every(arr => arr.length === 0)) {
            delete mealsData[dateStr];
        }
        saveData();
        renderCalendar(currentYear, currentMonth);
        renderMealsForSelectedDate();
        updateNutritionSummary();
        updateChart();
        showToast("🗑️ تم حذف الطعام", "warning");
    }
}

// ================================================================
// UPDATE NUTRITION SUMMARY
// ================================================================
function updateNutritionSummary() {
    const dateStr = formatDate(selectedDate);
    const dayMeals = mealsData[dateStr] || {};
    
    let totalCalories = 0, totalFat = 0, totalProtein = 0, totalCarb = 0;
    
    Object.values(dayMeals).forEach(mealFoods => {
        mealFoods.forEach(food => {
            const factor = food.quantity / 100;
            totalCalories += food.calories * factor;
            totalFat += food.fat * factor;
            totalProtein += food.protein * factor;
            totalCarb += food.carb * factor;
        });
    });
    
    const targetCalories = parseInt(localStorage.getItem("calories")) || 0;
    const targetProtein = parseInt(localStorage.getItem("protein")) || 0;
    const targetCarb = parseInt(localStorage.getItem("carb")) || 0;
    const targetFat = parseInt(localStorage.getItem("fat")) || 0;
    
    document.getElementById("caloriesSummary").textContent = formatNumber(Math.round(totalCalories));
    document.getElementById("proteinSummary").textContent = totalProtein.toFixed(1).replace(".", ",");
    document.getElementById("carbSummary").textContent = totalCarb.toFixed(1).replace(".", ",");
    document.getElementById("fatSummary").textContent = totalFat.toFixed(1).replace(".", ",");
    
    document.getElementById("caloriesProgress").style.width = targetCalories > 0 ? `${Math.min((totalCalories / targetCalories) * 100, 100)}%` : '0%';
    document.getElementById("proteinProgress").style.width = targetProtein > 0 ? `${Math.min((totalProtein / targetProtein) * 100, 100)}%` : '0%';
    document.getElementById("carbProgress").style.width = targetCarb > 0 ? `${Math.min((totalCarb / targetCarb) * 100, 100)}%` : '0%';
    document.getElementById("fatProgress").style.width = targetFat > 0 ? `${Math.min((totalFat / targetFat) * 100, 100)}%` : '0%';
    
    document.getElementById("caloriesValue").textContent = targetCalories || 0;
    document.getElementById("proteinValue").textContent = targetProtein || 0;
    document.getElementById("carbValue").textContent = targetCarb || 0;
    document.getElementById("fatValue").textContent = targetFat || 0;
}

// ================================================================
// CHART
// ================================================================
function updateChart() {
    const dateStr = formatDate(selectedDate);
    const dayMeals = mealsData[dateStr] || {};
    let totalProtein = 0, totalCarb = 0, totalFat = 0;
    
    Object.values(dayMeals).forEach(mealFoods => {
        mealFoods.forEach(food => {
            const factor = food.quantity / 100;
            totalProtein += food.protein * factor;
            totalCarb += food.carb * factor;
            totalFat += food.fat * factor;
        });
    });
    
    const ctx = document.getElementById('macroChart').getContext('2d');
    if (chartInstance) chartInstance.destroy();
    
    chartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['البروتين', 'الكارب', 'الدهون'],
            datasets: [{
                data: [totalProtein, totalCarb, totalFat],
                backgroundColor: ['#4ECDC4', '#FFD93D', '#FF8A5C'],
                borderWidth: 0,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            cutout: '70%',
        },
        plugins: [{
            id: 'centerText',
            beforeDraw: function(chart) {
                const { width, height, ctx } = chart;
                ctx.save();
                const total = chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                ctx.font = 'bold 18px sans-serif';
                ctx.fillStyle = '#2D3436';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(total > 0 ? `${Math.round(total)}g` : '0g', width / 2, height / 2);
                ctx.restore();
            }
        }]
    });
}

// ================================================================
// FOOD DETAIL MODAL
// ================================================================
function openFoodDetailModal(food, mealKey = null, foodIndex = null) {
    currentFoodDetail = food;
    currentFoodDetailMeal = mealKey;
    currentFoodDetailIndex = foodIndex;
    
    document.getElementById("foodDetailModalTitle").textContent = food.name;
    document.getElementById("foodDetailImage").src = food.image;
    document.getElementById("foodDetailImage").alt = food.name;
    document.getElementById("foodCalories").textContent = food.calories;
    document.getElementById("foodProtein").textContent = food.protein;
    document.getElementById("foodCarbs").textContent = food.carb;
    document.getElementById("foodFat").textContent = food.fat;
    
    document.getElementById("mealSelect").value = mealKey || "";
    document.getElementById("quantityInput").value = 100;
    
    document.getElementById("foodDetailModal").classList.add("show");
}

document.getElementById("closeFoodDetailModalBtn").addEventListener("click", () => {
    document.getElementById("foodDetailModal").classList.remove("show");
    currentFoodDetail = null;
    currentFoodDetailMeal = null;
    currentFoodDetailIndex = null;
});

// ================================================================
// ADD FOOD TO MEAL - مع إشعار وعدم إغلاق النافذة
// ================================================================
document.getElementById("addFoodToMealForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const mealSelect = document.getElementById("mealSelect");
    const selectedValue = mealSelect.value;
    const quantity = parseInt(document.getElementById("quantityInput").value);
    
    if (!selectedValue) { showToast("⚠️ يرجى اختيار وجبة", "warning"); return; }
    if (isNaN(quantity) || quantity <= 0) { showToast("⚠️ يرجى إدخال كمية صحيحة", "warning"); return; }
    
    const dateStr = formatDate(selectedDate);
    if (!mealsData[dateStr]) mealsData[dateStr] = {};
    if (!mealsData[dateStr][selectedValue]) mealsData[dateStr][selectedValue] = [];
    
    // التحقق من التكرار
    if (mealsData[dateStr][selectedValue].some(f => f.id === currentFoodDetail.id)) {
        showToast(`⚠️ "${currentFoodDetail.name}" موجود بالفعل في هذه الوجبة`, "warning");
        return;
    }
    
    mealsData[dateStr][selectedValue].push({
        ...currentFoodDetail,
        quantity: quantity
    });
    
    saveData();
    renderCalendar(currentYear, currentMonth);
    renderMealsForSelectedDate();
    updateNutritionSummary();
    updateChart();
    
    // إشعار وعدم إغلاق النافذة
    showToast(`✅ تم إضافة "${currentFoodDetail.name}" إلى ${mealSelect.options[mealSelect.selectedIndex].text}`, "success");
});

// ================================================================
// FLOATING MENU
// ================================================================
let floatingOpen = false;
const floatingBtn = document.getElementById("floatingMenuBtn");
const floatingOptions = document.getElementById("floatingMenuOptions");

function toggleFloatingMenu() {
    floatingOpen = !floatingOpen;
    floatingOptions.classList.toggle("show", floatingOpen);
    floatingBtn.classList.toggle("active", floatingOpen);
}

floatingBtn.addEventListener("click", toggleFloatingMenu);
document.addEventListener("click", (e) => {
    if (!floatingBtn.contains(e.target) && !floatingOptions.contains(e.target)) {
        floatingOpen = false;
        floatingOptions.classList.remove("show");
        floatingBtn.classList.remove("active");
    }
});

document.getElementById("btnAddFood").addEventListener("click", () => {
    toggleFloatingMenu();
    document.getElementById("addFoodModal").classList.add("show");
    document.getElementById("foodSearchInput").value = "";
    document.getElementById("foodFilterSelect").value = "random";
    document.querySelectorAll(".main-category-btn").forEach(c => c.classList.remove("active"));
    document.querySelectorAll(".sub-category-btn").forEach(c => c.classList.remove("active"));
    document.getElementById("foodList").innerHTML = "";
    currentMainCategory = null;
    currentSubCategory = null;
});

document.getElementById("btnCreateFood").addEventListener("click", () => {
    toggleFloatingMenu();
    document.getElementById("createFoodModal").classList.add("show");
});

document.getElementById("btnCustomMeals").addEventListener("click", () => {
    toggleFloatingMenu();
    document.getElementById("addFoodModal").classList.add("show");
    setTimeout(() => {
        const section = document.querySelector(".custom-meals-section");
        if (section) { section.scrollIntoView({ behavior: "smooth", block: "center" });
        section.style.animation = "highlightPulse 0.6s ease";
        setTimeout(() => { section.style.animation = ""; }, 600); }
    }, 300);
});

document.getElementById("btnFavorites").addEventListener("click", () => {
    toggleFloatingMenu();
    renderFavoritesList();
    document.getElementById("favoritesModal").classList.add("show");
});

document.getElementById("btnManageMeals").addEventListener("click", () => {
    toggleFloatingMenu();
    renderManageMealsList();
    document.getElementById("manageMealsModal").classList.add("show");
});

// ================================================================
// CLOSE MODALS
// ================================================================
document.getElementById("closeAddFoodModalBtn").addEventListener("click", () => {
    document.getElementById("addFoodModal").classList.remove("show");
});
document.getElementById("closeCreateFoodModalBtn").addEventListener("click", () => {
    document.getElementById("createFoodModal").classList.remove("show");
    document.getElementById("createFoodForm").reset();
});
document.getElementById("closeFavoritesModalBtn").addEventListener("click", () => {
    document.getElementById("favoritesModal").classList.remove("show");
});
document.getElementById("closeCustomMealModalBtn").addEventListener("click", () => {
    document.getElementById("customMealModal").classList.remove("show");
});
document.getElementById("closeManageMealModalBtn").addEventListener("click", () => {
    document.getElementById("manageCustomMealModal").classList.remove("show");
});
document.getElementById("closeManageMealsModalBtn").addEventListener("click", () => {
    document.getElementById("manageMealsModal").classList.remove("show");
});

document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('show');
    });
});

// ================================================================
// CREATE FOOD
// ================================================================
const imageUploadArea = document.getElementById("imageUploadArea");
const imageFile = document.getElementById("imageFile");

imageUploadArea.addEventListener("click", () => imageFile.click());
imageUploadArea.addEventListener("dragover", (e) => { e.preventDefault(); imageUploadArea.style.borderColor = "#6C5CE7"; });
imageUploadArea.addEventListener("dragleave", () => { imageUploadArea.style.borderColor = "#DFE6E9"; });
imageUploadArea.addEventListener("drop", (e) => {
    e.preventDefault();
    imageUploadArea.style.borderColor = "#DFE6E9";
    if (e.dataTransfer.files.length) imageFile.files = e.dataTransfer.files;
});

document.getElementById("createFoodForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value.trim();
    const category = form.foodCategory.value.trim() || "وجباتي";
    const portion = form.portion.value.trim();
    const calories = parseFloat(form.calories.value);
    const protein = parseFloat(form.protein.value);
    const carb = parseFloat(form.carb.value);
    const fat = parseFloat(form.fat.value);
    let imageUrl = form.imageUrl.value.trim();
    const imageFile = form.imageFile.files[0];
    
    if (!foodName) { showToast("⚠️ يرجى إدخال اسم الطعام", "warning"); return; }
    if (isNaN(calories) || isNaN(protein) || isNaN(carb) || isNaN(fat)) { showToast("⚠️ يرجى إدخال القيم الغذائية بشكل صحيح", "warning"); return; }
    
    if (imageFile) imageUrl = URL.createObjectURL(imageFile);
    else if (!imageUrl) imageUrl = "https://placehold.co/200x150/6C5CE7/FFFFFF?text=" + encodeURIComponent(foodName);
    
    const newFood = {
        id: `custom_${Date.now()}`,
        name: foodName,
        category,
        subcategory: "وجباتي",
        portion: portion || "100g",
        calories,
        protein,
        carb,
        fat,
        image: imageUrl,
    };
    
    foodsData.push(newFood);
    const customFoods = foodsData.filter(f => f.id.startsWith("custom_"));
    localStorage.setItem("customFoods", JSON.stringify(customFoods));
    
    showToast(`✅ تم إضافة "${foodName}" إلى قائمة الأطعمة`, "success");
    document.getElementById("createFoodModal").classList.remove("show");
    document.getElementById("createFoodForm").reset();
    if (currentMainCategory === "وجباتي" || !currentMainCategory) renderFoodList("وجباتي", null, "");
});

// ================================================================
// CUSTOM MEALS SYSTEM
// ================================================================
// Render Custom Meals
function renderCustomMeals() {
    const container = document.getElementById("customMealsList");
    container.innerHTML = "";
    if (customMeals.length === 0) {
        container.innerHTML = `<span style="font-size:12px;color:var(--gray);">لا توجد وجبات مخصصة</span>`;
        return;
    }
    customMeals.forEach(meal => {
        const tag = document.createElement("div");
        tag.className = "custom-meal-tag";
        const foodCount = meal.foods ? meal.foods.length : 0;
        tag.innerHTML = `${meal.emoji || '🍽️'} ${meal.name} <span style="font-size:10px;color:var(--gray);">(${foodCount})</span>
            <span class="meal-delete" data-id="${meal.id}" title="حذف الوجبة">×</span>`;
        tag.addEventListener("click", (e) => {
            if (e.target.classList.contains("meal-delete")) return;
            openManageMeal(meal.id);
        });
        tag.querySelector(".meal-delete").addEventListener("click", (e) => {
            e.stopPropagation();
            if (confirm(`هل أنت متأكد من حذف وجبة "${meal.name}"؟`)) {
                customMeals = customMeals.filter(m => m.id !== meal.id);
                saveCustomMeals();
                renderCustomMeals();
                updateMealSelectOptions();
                showToast(`🗑️ تم حذف وجبة "${meal.name}"`, "warning");
            }
        });
        container.appendChild(tag);
    });
}

// Add Custom Meal
document.getElementById("addCustomMealBtn").addEventListener("click", () => {
    document.getElementById("customMealModal").classList.add("show");
    document.getElementById("customMealName").value = "";
    document.getElementById("customMealEmoji").value = "";
});

document.getElementById("customMealForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("customMealName").value.trim();
    if (!name) { showToast("⚠️ يرجى إدخال اسم الوجبة", "warning"); return; }
    
    const newMeal = {
        id: `meal_${Date.now()}`,
        name: name,
        emoji: document.getElementById("customMealEmoji").value.trim() || "🍽️",
        foods: [],
        image: ""
    };
    
    customMeals.push(newMeal);
    saveCustomMeals();
    renderCustomMeals();
    updateMealSelectOptions();
    document.getElementById("customMealModal").classList.remove("show");
    document.getElementById("customMealForm").reset();
    showToast(`✅ تم إنشاء وجبة "${name}"`, "success");
    openManageMeal(newMeal.id);
});

// Open Manage Meal
function openManageMeal(mealId) {
    const meal = customMeals.find(m => m.id === mealId);
    if (!meal) return;
    currentEditingMealId = mealId;
    document.getElementById("manageMealTitle").textContent = `${meal.emoji || '🍽️'} ${meal.name}`;
    
    // صورة الوجبة
    const preview = document.getElementById("mealImagePreview");
    const icon = document.getElementById("mealImageIcon");
    const text = document.querySelector(".meal-image-text");
    if (meal.image) {
        preview.src = meal.image;
        preview.style.display = "block";
        icon.style.display = "none";
        text.style.display = "none";
    } else {
        preview.style.display = "none";
        icon.style.display = "block";
        text.style.display = "block";
    }
    
    document.getElementById("manageCustomMealModal").classList.add("show");
    renderManageMealFoodList(meal);
    renderManageMealItems(meal);
    document.getElementById("manageMealSearch").value = "";
}

// Meal Image Upload
document.getElementById("mealImageFile").addEventListener("change", function() {
    const meal = customMeals.find(m => m.id === currentEditingMealId);
    if (!meal) return;
    if (this.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            meal.image = e.target.result;
            saveCustomMeals();
            const preview = document.getElementById("mealImagePreview");
            const icon = document.getElementById("mealImageIcon");
            const text = document.querySelector(".meal-image-text");
            preview.src = e.target.result;
            preview.style.display = "block";
            icon.style.display = "none";
            text.style.display = "none";
        };
        reader.readAsDataURL(this.files[0]);
    }
});

// Render Manage Meal Food List
function renderManageMealFoodList(meal, searchTerm = "") {
    const container = document.getElementById("manageMealFoodList");
    container.innerHTML = "";
    const mealFoodIds = meal.foods ? meal.foods.map(f => f.id) : [];
    let availableFoods = foodsData.filter(f => !mealFoodIds.includes(f.id));
    if (searchTerm) availableFoods = availableFoods.filter(f => f.name.includes(searchTerm));
    if (availableFoods.length === 0) {
        container.innerHTML = `<div class="manage-meal-empty">لا توجد أطعمة متاحة للإضافة</div>`;
        return;
    }
    availableFoods.forEach(food => {
        const item = document.createElement("div");
        item.className = "manage-meal-food-item";
        item.innerHTML = `
            <img src="${food.image}" alt="${food.name}" loading="lazy">
            <span class="food-name">${food.name}</span>
            <span class="food-cal">🔥 ${food.calories}</span>
            <button class="add-to-meal-btn" data-id="${food.id}"><i class="fas fa-plus-circle"></i></button>
        `;
        item.querySelector(".add-to-meal-btn").addEventListener("click", (e) => {
            e.stopPropagation();
            addFoodToCustomMeal(meal.id, food);
        });
        container.appendChild(item);
    });
}

// Render Manage Meal Items
function renderManageMealItems(meal) {
    const container = document.getElementById("manageMealItems");
    container.innerHTML = "";
    if (!meal.foods || meal.foods.length === 0) {
        container.innerHTML = `<div class="manage-meal-empty">لا توجد أطعمة في هذه الوجبة</div>`;
        return;
    }
    meal.foods.forEach((food, index) => {
        const item = document.createElement("div");
        item.className = "manage-meal-item";
        item.innerHTML = `
            <img src="${food.image}" alt="${food.name}" loading="lazy">
            <span class="item-name">${food.name}</span>
            <span style="font-size:11px;color:var(--gray);">🔥 ${food.calories}</span>
            <button class="item-remove" data-index="${index}"><i class="fas fa-times"></i></button>
        `;
        item.querySelector(".item-remove").addEventListener("click", () => {
            const mealData = customMeals.find(m => m.id === meal.id);
            if (mealData) {
                mealData.foods.splice(index, 1);
                saveCustomMeals();
                renderManageMealItems(mealData);
                renderManageMealFoodList(mealData);
                renderCustomMeals();
                showToast("🗑️ تم حذف الطعام من الوجبة", "warning");
            }
        });
        container.appendChild(item);
    });
    
    // زر إضافة الوجبة لليوم
    const addToDayBtn = document.createElement("button");
    addToDayBtn.className = "add-meal-to-day-btn";
    addToDayBtn.innerHTML = `<i class="fas fa-calendar-plus"></i> إضافة هذه الوجبة لليوم`;
    addToDayBtn.addEventListener("click", () => {
        addCustomMealToDay(meal.id);
    });
    container.appendChild(addToDayBtn);
}

// Add Food to Custom Meal
function addFoodToCustomMeal(mealId, food) {
    const meal = customMeals.find(m => m.id === mealId);
    if (!meal) return;
    if (!meal.foods) meal.foods = [];
    if (meal.foods.some(f => f.id === food.id)) {
        showToast(`⚠️ "${food.name}" موجود بالفعل في الوجبة`, "warning");
        return;
    }
    // إضافة مع كمية قابلة للتعديل
    const quantity = prompt(`أدخل كمية "${food.name}" (جم/مل):`, "100");
    if (quantity === null) return;
    const qty = parseFloat(quantity);
    if (isNaN(qty) || qty <= 0) { showToast("⚠️ كمية غير صالحة", "warning"); return; }
    
    meal.foods.push({
        id: food.id,
        name: food.name,
        image: food.image,
        calories: food.calories,
        protein: food.protein,
        carb: food.carb,
        fat: food.fat,
        quantity: qty
    });
    saveCustomMeals();
    renderManageMealFoodList(meal);
    renderManageMealItems(meal);
    renderCustomMeals();
    showToast(`✅ تم إضافة "${food.name}" (${qty}g) إلى الوجبة`, "success");
}

// Save Custom Meal
document.getElementById("saveCustomMealBtn").addEventListener("click", () => {
    document.getElementById("manageCustomMealModal").classList.remove("show");
    currentEditingMealId = null;
    showToast("✅ تم حفظ الوجبة", "success");
});

// Search in Manage Meal
document.getElementById("manageMealSearch").addEventListener("input", () => {
    const meal = customMeals.find(m => m.id === currentEditingMealId);
    if (meal) renderManageMealFoodList(meal, document.getElementById("manageMealSearch").value.trim());
});

// Add Custom Meal to Day
function addCustomMealToDay(mealId) {
    const meal = customMeals.find(m => m.id === mealId);
    if (!meal || !meal.foods || meal.foods.length === 0) {
        showToast("⚠️ هذه الوجبة لا تحتوي على أطعمة", "warning");
        return;
    }
    const dateStr = formatDate(selectedDate);
    if (!mealsData[dateStr]) mealsData[dateStr] = {};
    const mealKey = `custom_${mealId}`;
    if (!mealsData[dateStr][mealKey]) mealsData[dateStr][mealKey] = [];
    
    meal.foods.forEach(food => {
        mealsData[dateStr][mealKey].push({
            ...food,
            quantity: food.quantity || 100
        });
    });
    saveData();
    renderCalendar(currentYear, currentMonth);
    renderMealsForSelectedDate();
    updateNutritionSummary();
    updateChart();
    showToast(`✅ تم إضافة وجبة "${meal.name}" إلى اليوم`, "success");
}

// ================================================================
// MANAGE BASE MEALS
// ================================================================
function renderManageMealsList() {
    const container = document.getElementById("manageMealsList");
    container.innerHTML = "";
    baseMeals.forEach(meal => {
        const row = document.createElement("div");
        row.className = "manage-meal-item-row";
        row.innerHTML = `
            <span class="meal-name">${meal.emoji} ${meal.name}</span>
            <button class="meal-delete-btn" data-id="${meal.id}"><i class="fas fa-trash"></i></button>
        `;
        row.querySelector(".meal-delete-btn").addEventListener("click", () => {
            if (baseMeals.length <= 1) {
                showToast("⚠️ يجب أن يكون هناك وجبة واحدة على الأقل", "warning");
                return;
            }
            if (confirm(`هل أنت متأكد من حذف وجبة "${meal.name}"؟`)) {
                baseMeals = baseMeals.filter(m => m.id !== meal.id);
                saveBaseMeals();
                renderManageMealsList();
                updateMealSelectOptions();
                showToast(`🗑️ تم حذف وجبة "${meal.name}"`, "warning");
            }
        });
        container.appendChild(row);
    });
}

document.getElementById("addNewMealBtn").addEventListener("click", () => {
    const name = document.getElementById("newMealNameInput").value.trim();
    const emoji = document.getElementById("newMealEmojiInput").value.trim() || "🍽️";
    if (!name) { showToast("⚠️ يرجى إدخال اسم الوجبة", "warning"); return; }
    if (baseMeals.some(m => m.name === name)) {
        showToast("⚠️ هذه الوجبة موجودة بالفعل", "warning");
        return;
    }
    baseMeals.push({
        id: `meal_${Date.now()}`,
        name: name,
        emoji: emoji
    });
    saveBaseMeals();
    renderManageMealsList();
    updateMealSelectOptions();
    document.getElementById("newMealNameInput").value = "";
    document.getElementById("newMealEmojiInput").value = "";
    showToast(`✅ تم إضافة وجبة "${name}"`, "success");
});

document.getElementById("newMealNameInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") document.getElementById("addNewMealBtn").click();
});

// ================================================================
// FAVORITES
// ================================================================
function renderFavoritesList() {
    const container = document.getElementById("favoritesList");
    container.innerHTML = "";
    if (favorites.length === 0) {
        container.innerHTML = `<div class="text-center text-gray-500 py-4">لا توجد أطعمة مفضلة</div>`;
        return;
    }
    favorites.forEach(food => {
        const div = document.createElement("div");
        div.className = "favorite-item";
        const img = document.createElement("img");
        img.src = food.image;
        img.alt = food.name;
        img.loading = "lazy";
        div.appendChild(img);
        const name = document.createElement("span");
        name.className = "fav-name";
        name.textContent = food.name;
        div.appendChild(name);
        const removeBtn = document.createElement("button");
        removeBtn.className = "remove-fav";
        removeBtn.innerHTML = '<i class="fas fa-times"></i>';
        removeBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const idx = favorites.findIndex(f => f.id === food.id);
            if (idx >= 0) {
                favorites.splice(idx, 1);
                saveFavorites();
                renderFavoritesList();
                renderFoodList(currentMainCategory, currentSubCategory, document.getElementById("foodSearchInput").value.trim());
                showToast(`❌ تم إزالة "${food.name}" من المفضلة`, "warning");
            }
        });
        div.appendChild(removeBtn);
        div.addEventListener("click", () => {
            openFoodDetailModal(food);
            document.getElementById("favoritesModal").classList.remove("show");
        });
        container.appendChild(div);
    });
}

// ================================================================
// EDIT GOALS
// ================================================================
document.getElementById("editBtn").addEventListener("click", () => {
    document.getElementById("caloriesInput").value = localStorage.getItem("calories") || 0;
    document.getElementById("fatInput").value = localStorage.getItem("fat") || 0;
    document.getElementById("carbInput").value = localStorage.getItem("carb") || 0;
    document.getElementById("proteinInput").value = localStorage.getItem("protein") || 0;
    document.getElementById("popup").classList.add("show");
});

document.getElementById("closePopup").addEventListener("click", () => {
    document.getElementById("popup").classList.remove("show");
});

document.getElementById("needsForm").addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem("calories", document.getElementById("caloriesInput").value);
    localStorage.setItem("fat", document.getElementById("fatInput").value);
    localStorage.setItem("carb", document.getElementById("carbInput").value);
    localStorage.setItem("protein", document.getElementById("proteinInput").value);
    document.getElementById("popup").classList.remove("show");
    updateNutritionSummary();
    showToast("✅ تم تحديث الأهداف", "success");
});

// ================================================================
// SEARCH & FILTER
// ================================================================
document.getElementById("foodSearchForm").addEventListener("submit", (e) => {
    e.preventDefault();
    renderFoodList(currentMainCategory, currentSubCategory, document.getElementById("foodSearchInput").value.trim());
});

document.getElementById("foodFilterSelect").addEventListener("change", () => {
    renderFoodList(currentMainCategory, currentSubCategory, document.getElementById("foodSearchInput").value.trim());
});

// ================================================================
// KEYBOARD SHORTCUTS
// ================================================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.show, .popup-overlay.show').forEach(el => el.classList.remove('show'));
        if (sidebarOpen) closeSidebar();
    }
});

// ================================================================
// YEAR
// ================================================================
document.getElementById("year").textContent = new Date().getFullYear();

// ================================================================
// INIT
// ================================================================
function init() {
    renderCalendar(currentYear, currentMonth);
    renderMealsForSelectedDate();
    updateNutritionSummary();
    updateChart();
    renderMainCategories();
    renderCustomMeals();
    updateMealSelectOptions();
    document.getElementById("calendarSection").classList.add("visible");
    
    // تحميل الأهداف
    document.getElementById("caloriesValue").textContent = localStorage.getItem("calories") || 0;
    document.getElementById("fatValue").textContent = localStorage.getItem("fat") || 0;
    document.getElementById("carbValue").textContent = localStorage.getItem("carb") || 0;
    document.getElementById("proteinValue").textContent = localStorage.getItem("protein") || 0;
}

init();

console.log("✅ BEST Healthy App Loaded Successfully!");
