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

  // ✅ Override addEventListener to selectively apply passive:false only when needed
  (function () {
    var originalAddEventListener = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function (
      type,
      listener,
      options
    ) {
      if (type === "touchmove" || type === "touchstart") {
        options = options || {};
        if (typeof options === "object" && options.passive === undefined) {
          options.passive = type === "touchstart" ? true : false; // Use passive:true for touchstart, false for touchmove
        }
      }
      originalAddEventListener.call(this, type, listener, options);
    };
  })();

  console.log("✅ Global Event Listener Patch Applied!");

  // ✅ Initialize Slick Slider
  function initializeSlick() {
    console.log("🔄 Initializing Slick Slider...");

    if ($(".logo-slider").hasClass("slick-initialized")) {
      console.warn("⚠️ Slick already initialized! Skipping...");
      return;
    }

    $(".logo-slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false, // ❌ Removed dots
      arrows: false, // ❌ Removed arrows
      infinite: true,
      speed: 500,
      pauseOnHover: false,
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 3 } },
        { breakpoint: 768, settings: { slidesToShow: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 1 } },
      ],
    });

    console.log("✅ Slick Slider Initialized!");
  }

  // ✅ Ensure Slick is initialized AFTER overriding event listeners
  function waitForElement(selector, callback) {
    if ($(selector).length > 0) {
      callback();
    } else {
      const observer = new MutationObserver((mutations, obs) => {
        if ($(selector).length > 0) {
          obs.disconnect();
          callback();
        }
      });
      observer.observe(document, { childList: true, subtree: true });
    }
  }

  waitForElement(".logo-slider", initializeSlick);
});
