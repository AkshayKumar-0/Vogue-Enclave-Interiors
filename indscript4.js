const navbar = document.querySelector(".cus-nav");
let lastScrollY = window.scrollY;
let timeout;
let navbarRevealed = false;

function isLargeScreen() {
  return window.innerWidth >= 992;
}

window.addEventListener("scroll", () => {
  if (!isLargeScreen()) return;

  const currentScrollY = window.scrollY;

  // When scrolling back to the top, make the navbar transparent again
  if (currentScrollY <= 100) {
    navbar.classList.remove("nav-bg");
    navbar.style.transform = "translateY(0)"; // keep it fixed at the top
    navbarRevealed = false; // Reset so it can show again with background after scroll down
  } else if (
    currentScrollY > lastScrollY &&
    currentScrollY > 100 &&
    !navbarRevealed
  ) {
    // Scrolling down — hide navbar
    navbar.style.transform = "translateY(-100%)";
    navbar.classList.remove("nav-bg");

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      navbar.style.transform = "translateY(0)";
      navbar.classList.add("nav-bg");
      navbarRevealed = true; // only do once
    }, 10); // Reappear after 2 seconds
  }

  lastScrollY = currentScrollY;
});
