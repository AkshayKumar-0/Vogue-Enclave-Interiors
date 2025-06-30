// $(document).ready(function () {
//   console.log("✅ Document Ready - Checking jQuery & Slick...");

//   console.log(
//     "🔍 jQuery Version:",
//     typeof jQuery !== "undefined" ? jQuery.fn.jquery : "Not loaded"
//   );
//   console.log(
//     "🔍 Slick Availability:",
//     typeof $.fn.slick !== "undefined" ? "Loaded" : "Not loaded"
//   );

//   // ✅ Function to Initialize Slick
//   function initializeSlick(slider) {
//     console.log("🔄 Initializing Slick on:", slider);
//     $(slider).slick({
//       slidesToShow: 4,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 2000,
//       dots: true,
//       arrows: true,
//       infinite: true,
//       speed: 500,
//       pauseOnHover: false,
//       responsive: [
//         { breakpoint: 1024, settings: { slidesToShow: 3 } },
//         { breakpoint: 768, settings: { slidesToShow: 2 } },
//         { breakpoint: 480, settings: { slidesToShow: 1 } },
//       ],
//     });

//     console.log("✅ Slick initialized successfully!");
//   }

//   // ✅ Ensure Slick initializes only once
//   if (!window.slickObserver) {
//     window.slickObserver = new MutationObserver(() => {
//       const slider = document.querySelector(".logo-slider");

//       console.log("🔍 Checking for .logo-slider...");
//       if (
//         slider &&
//         slider.children.length > 0 &&
//         typeof $.fn.slick !== "undefined"
//       ) {
//         console.log("✅ Dynamic .logo-slider found! Initializing Slick...");

//         if (!$(slider).hasClass("slick-initialized")) {
//           initializeSlick(slider);
//         } else {
//           console.warn("⚠️ Slick is already initialized!");
//         }

//         window.slickObserver.disconnect(); // Stop observing after success
//       } else {
//         console.warn("⚠️ .logo-slider not found OR has no child elements.");
//       }
//     });

//     // ✅ Observe only a specific section to improve performance
//     const targetNode =
//       document.querySelector(".slider-container") || document.body;
//     console.log("🔍 Observing for dynamic elements...");
//     window.slickObserver.observe(targetNode, {
//       childList: true,
//       subtree: true,
//     });
//   }

//   // ✅ Fix Passive Event Listener Warning
//   document.addEventListener("touchstart", () => {}, { passive: true });
//   document.addEventListener("touchmove", () => {}, { passive: true });

//   console.log("✅ Slick Initialization Script Loaded!");
// });

$(document).ready(function () {
  console.log("✅ Document Ready - Checking jQuery & Slick...");

  console.log(
    "🔍 jQuery Version:",
    typeof jQuery !== "undefined" ? jQuery.fn.jquery : "Not loaded"
  );
  console.log(
    "🔍 Slick Availability:",
    typeof $.fn.slick !== "undefined" ? "Loaded" : "Not loaded"
  );

  // ✅ Function to Initialize Slick
  function initializeSlick(slider) {
    console.log("🔄 Initializing Slick on:", slider);
    $(slider).slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      pauseOnHover: false,
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 3 } },
        { breakpoint: 768, settings: { slidesToShow: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 1 } },
      ],
    });

    console.log("✅ Slick initialized successfully!");

    // ✅ Convert Slick’s event listeners to passive
    setTimeout(() => {
      document.querySelectorAll(".slick-list").forEach((slickList) => {
        slickList.addEventListener("touchstart", (e) => e.stopPropagation(), {
          passive: true,
        });
        slickList.addEventListener("touchmove", (e) => e.stopPropagation(), {
          passive: true,
        });
      });
    }, 500);
  }

  // ✅ Ensure Slick initializes only once
  if (!window.slickObserver) {
    window.slickObserver = new MutationObserver(() => {
      const slider = document.querySelector(".logo-slider");

      console.log("🔍 Checking for .logo-slider...");
      if (
        slider &&
        slider.children.length > 0 &&
        typeof $.fn.slick !== "undefined"
      ) {
        console.log("✅ Dynamic .logo-slider found! Initializing Slick...");

        if (!$(slider).hasClass("slick-initialized")) {
          initializeSlick(slider);
        } else {
          console.warn("⚠️ Slick is already initialized!");
        }

        window.slickObserver.disconnect(); // Stop observing after success
      } else {
        console.warn("⚠️ .logo-slider not found OR has no child elements.");
      }
    });

    // ✅ Observe only a specific section to improve performance
    const targetNode =
      document.querySelector(".slider-container") || document.body;
    console.log("🔍 Observing for dynamic elements...");
    window.slickObserver.observe(targetNode, {
      childList: true,
      subtree: true,
    });
  }

  // ✅ Global Fix: Convert all `touchstart` & `touchmove` to passive
  const makeListenersPassive = () => {
    ["touchstart", "touchmove"].forEach((event) => {
      document.addEventListener(
        event,
        function (e) {
          e.stopPropagation();
        },
        { passive: true }
      );
    });
  };

  makeListenersPassive(); // Apply fix globally

  console.log("✅ Slick Initialization Script Loaded!");
});
