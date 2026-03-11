// رابط Google Sheet (يجب أن ينتهي بـ output=csv)
const SHEET_URL = "ضع_رابط_CSV_الخاص_بك_هنا";

async function updatePharmacy() {
    const nameElement = document.getElementById('pharmacy-name');
    const dateElement = document.getElementById('current-date');
    const btnCall = document.getElementById('btn-call');
    const btnMap = document.getElementById('btn-map');

    // 1. عرض التاريخ الحالي
    const today = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    dateElement.innerText = today.toLocaleDateString('ar-MA', options);

    // صيغة التاريخ للبحث في الجدول (YYYY-MM-DD)
    const searchDate = today.toISOString().split('T')[0];

    try {
        // 2. جلب البيانات من جوجل شيت
        const response = await fetch(SHEET_URL);
        const csvData = await response.text();
        
        // 3. تحليل البيانات (تحويل CSV إلى مصفوفة)
        const rows = csvData.split('\n').map(row => row.split(','));
        
        // البحث عن صف يحتوي على تاريخ اليوم (العمود الأول A)
        const todayEntry = rows.find(row => row[0].trim() === searchDate);

        if (todayEntry) {
            nameElement.innerText = todayEntry[1]; // اسم الصيدلية (العمود B)
            btnCall.href = `tel:${todayEntry[2].trim()}`; // الهاتف (العمود C)
            btnMap.href = todayEntry[3].trim(); // الرابط (العمود D)
        } else {
            nameElement.innerText = "لا توجد حراسة مسجلة اليوم";
            nameElement.classList.add('text-red-400');
        }
    } catch (error) {
        nameElement.innerText = "خطأ في الاتصال بالبيانات";
        console.error("Error:", error);
    }
}

// التشغيل عند تحميل الصفحة
window.onload = updatePharmacy;
