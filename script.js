const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#navLinks");
const toast = document.querySelector("#toast");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.textContent = open ? "×" : "☰";
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  }));
}

document.querySelector("#year").textContent = new Date().getFullYear();

let toastTimer;
document.querySelectorAll("[data-placeholder]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    toast.textContent = link.dataset.placeholder || "Replace this placeholder with your real link.";
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
  });
});
