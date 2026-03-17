// Splash
setTimeout(() => {
  document.getElementById("splash").style.display = "none";
  document.getElementById("app").classList.remove("hidden");
}, 3000);

// Navigation
function openScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  if (id === "map") {
    loadMap();
  }
}

// Google Map
function loadMap() {
  const map = new google.maps.Map(document.getElementById("mapContainer"), {
    center: { lat: 29.697, lng: -9.731 }, // Tiznit
    zoom: 14
  });

  new google.maps.Marker({
    position: { lat: 29.697, lng: -9.731 },
    map: map,
    title: "صيدلية"
  });
}
