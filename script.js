// Splash
setTimeout(() => {
  document.getElementById("splash").style.display = "none";
  document.getElementById("main").classList.remove("hidden");
}, 2500);

// عرض المحتوى
function show(type) {
  document.getElementById("menu").style.display = "none";
  document.getElementById("content").classList.remove("hidden");

  let text = document.getElementById("text");

  if (type === "night") {
    text.innerHTML = `
      <h3>💊 صيدلية الحراسة</h3>
      <p>صيدلية السلام</p>
      <button class="call" onclick="call('0600000000')">📞 اتصال</button>
      <button class="map" onclick="map()">📍 الموقع</button>
    `;
  }

  if (type === "weekend") {
    text.innerHTML = `
      <h3>🕒 مداومة نهاية الأسبوع</h3>
      <p>صيدلية الأمل</p>
      <button class="call" onclick="call('0611111111')">📞 اتصال</button>
    `;
  }

  if (type === "pharmacies") {
    text.innerHTML = `
      <h3>📋 الصيدليات</h3>
      <p>صيدلية النور - 0622...</p>
      <p>صيدلية الشفاء - 0633...</p>
    `;
  }

  if (type === "doctors") {
    text.innerHTML = `
      <h3>👨‍⚕️ الأطباء</h3>
      <p>د. أحمد</p>
      <p>د. فاطمة</p>
    `;
  }
}

// رجوع
function back() {
  document.getElementById("menu").style.display = "grid";
  document.getElementById("content").classList.add("hidden");
}

// اتصال
function call(num) {
  window.location.href = "tel:" + num;
}

// خريطة
function map() {
  window.open("https://www.google.com/maps?q=Tiznit");
}
