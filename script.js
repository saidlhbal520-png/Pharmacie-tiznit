// 1. قاعدة بيانات الصيدليات في تيزنيت
const pharmacies = {
    "ph1": { name: "صيدلية أفراك", phone: "0528123456", map: "https://goo.gl..." },
    "ph2": { name: "صيدلية العين", phone: "0528654321", map: "https://goo.gl..." },
    "ph3": { name: "صيدلية المسيرة", phone: "0528000000", map: "https://goo.gl..." }
};

// 2. جدول الحراسة (أضف التواريخ هنا يدوياً)
const schedule = {
    "2026-03-14": "ph1",
    "2026-03-15": "ph2",
    "2026-03-16": "ph3"
};

function initApp() {
    const nameEl = document.getElementById('pharmacy-name');
    const dateEl = document.getElementById('current-date');
    const btnCall = document.getElementById('btn-call');
    const btnMap = document.getElementById('btn-map');

    // تحديد تاريخ اليوم بصيغة YYYY-MM-DD
    const now = new Date();
    const todayStr = now.toISOString().split('T')[0];
    
    // عرض التاريخ بالعربية
    dateEl.innerText = now.toLocaleDateString('ar-MA', { weekday: 'long', day: 'numeric', month: 'long' });

    // جلب الصيدلية بناءً على التاريخ
    const phId = schedule[todayStr];
    const pharmacy = pharmacies[phId];

    if (pharmacy) {
        nameEl.innerText = pharmacy.name;
        btnCall.href = `tel:${pharmacy.phone}`;
        btnMap.href = pharmacy.map;
    } else {
        nameEl.innerText = "لم يتم تحديد صيدلية";
        nameEl.classList.add('text-red-400');
    }
}

window.onload = initApp;
