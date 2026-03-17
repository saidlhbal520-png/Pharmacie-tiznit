// Splash
setTimeout(() => {
  document.getElementById("splash").style.display = "none";
  document.getElementById("main").classList.remove("hidden");
}, 3000);

// Navigation
function showSection(id) {
  let sections = document.querySelectorAll(".section");
  sections.forEach(sec => sec.classList.add("hidden"));

  document.getElementById(id).classList.remove("hidden");
}
