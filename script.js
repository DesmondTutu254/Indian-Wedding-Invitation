// Animate On Scroll
AOS.init({ once: true, easing: "ease-out-quart", duration: 700 });

// particles.js
particlesJS("particles-js", {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 800 } },
    color: { value: ["#D4AF37", "#C5A24A", "#E8C67A"] },
    shape: { type: "circle" },
    opacity: {
      value: 0.8,
      random: true,
      anim: { enable: true, speed: 0.6, opacity_min: 0.2 },
    },
    size: { value: 2.4, random: true },
    move: { enable: true, speed: 0.6, direction: "none", out_mode: "out" },
  },
  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: false }, onclick: { enable: false } },
  },
  retina_detect: true,
});

// Toast
function showToast(msg, ms = 2200) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), ms);
}

// Confetti
function confettiBurst() {
  confetti({
    particleCount: 60,
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#D4AF37", "#F3E1A6", "#C49B31"],
    scalar: 0.9,
  });
}

// RSVP
function handleRSVP(event) {
  event.preventDefault();
  if (typeof confettiBurst === "function") {
    confettiBurst();
  }
  const confirmation = document.getElementById("rsvp-confirmation");
  confirmation.textContent = "🎉 Thank you! Your RSVP has been received.";
  confirmation.style.display = "block";
  event.target.reset();
}

// Gallery upload
const upload = document.getElementById("photoUpload");
const gallery = document.getElementById("gallery");
if (upload && gallery) {
  upload.addEventListener("change", (ev) => {
    const files = Array.from(ev.target.files).slice(0, 12);
    files.forEach((file) => {
      if (!file.type.startsWith("image/")) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = document.createElement("img");
        img.src = e.target.result;
        img.className = "thumb";
        gallery.prepend(img);
      };
      reader.readAsDataURL(file);
    });
    upload.value = "";
    showToast("Photos added to gallery (local preview).");
  });
}

// Smooth scroll for buttons
document.getElementById("btnSchedule")?.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("events")?.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("btnLive")?.addEventListener("click", () => {
  window.open("https://www.youtube.com/", "_blank");
});

// Small UX
document.addEventListener("aos:in", ({ detail }) => {});
