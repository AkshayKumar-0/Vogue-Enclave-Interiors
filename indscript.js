document.addEventListener("DOMContentLoaded", function () {
  // Select all toggle inputs
  let toggles = document.querySelectorAll(".toggle-input");

  toggles.forEach((toggle) => {
    toggle.addEventListener("change", function () {
      let imageId = this.dataset.image;
      let state = this.dataset.state;

      let beforeImage = document.getElementById(imageId + "-before");
      let afterImage = document.getElementById(imageId + "-after");

      console.log(`Toggled: ${state} for ${imageId}`); // Debugging log

      if (beforeImage && afterImage) {
        if (state === "before") {
          beforeImage.classList.add("show");
          beforeImage.classList.remove("hidden");
          afterImage.classList.add("hidden");
          afterImage.classList.remove("show");
        } else {
          beforeImage.classList.add("hidden");
          beforeImage.classList.remove("show");
          afterImage.classList.add("show");
          afterImage.classList.remove("hidden");
        }
      } else {
        console.error("Error: Image elements not found!");
      }
    });
  });
});
