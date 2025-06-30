$(document).ready(function () {
  console.log("jQuery Loaded:", typeof jQuery !== "undefined");

  // Slick is loaded?
  if (typeof $.fn.slick === "undefined") {
    console.error("Slick library is missing. Check your CDN links.");
    return;
  }

  // Image Data
  const imageData = {
    living: [
      {
        src: "interior/port/living room/Black-and-White-Contemporary-Formal-Living-Room-Design.jpg",
        alt: "Living Room 1",
      },
      {
        src: "interior/port/living room/Black-and-White-Modern-Living-Room-Design.jpg",
        alt: "Living Room 2",
      },
      {
        src: "interior/port/living room/Boho-Eclectic-Living-Room-Design.jpg",
        alt: "Living Room 3",
      },
      {
        src: "interior/port/living room/Coastal-Living-Room-Results-from-Online-Interior-Design-Help.jpg",
        alt: "Living Room 4",
      },
      {
        src: "interior/port/living room/Contemporary-Living-Room-Virtual-Interior-Design.jpg",
        alt: "Living Room 5",
      },
      {
        src: "interior/port/living room/Living-Room-online-interior-design-help-4.jpg",
        alt: "Living Room 6",
      },
    ],
    dining: [
      {
        src: "interior/port/dining room/Dining-Room-online-interior-design-help-1.jpg",
        alt: "Dining Room 1",
      },
      {
        src: "interior/port/dining room/Dining-Room-online-interior-design-help-2.jpg",
        alt: "Dining Room 2",
      },
      {
        src: "interior/port/dining room/Dining-Room-online-interior-design-help-30.jpg",
        alt: "Dining Room 3",
      },
      {
        src: "interior/port/dining room/Dining-Room-online-interior-design-help-3.jpg",
        alt: "Dining Room 4",
      },
      {
        src: "interior/port/dining room/Dining-Room-online-interior-design-help-4.jpg",
        alt: "Dining Room 5",
      },
      {
        src: "interior/port/dining room/Dining-Room-online-interior-design-help-5.jpg",
        alt: "Dining Room 6",
      },
    ],
    combined: [
      {
        src: "interior/port/combined/Combined-LivingDining-online-interior-design-help-1.jpg",
        alt: "Combined Room 1",
      },
      {
        src: "interior/port/combined/Combined-LivingDining-online-interior-design-help-2.jpg",
        alt: "Combined Room 2",
      },
      {
        src: "interior/port/combined/Combined-LivingDining-online-interior-design-help-3.jpg",
        alt: "Combined Room 3",
      },
      {
        src: "interior/port/combined/Combined-LivingDining-online-interior-design-help-30.jpg",
        alt: "Combined Room 4",
      },
      {
        src: "interior/port/combined/Combined-LivingDining-online-interior-design-help-4.jpg",
        alt: "Combined Room 5",
      },
      {
        src: "interior/port/combined/Combined-LivingDining-online-interior-design-help-5.jpg",
        alt: "Combined Room 6",
      },
    ],
    bedroom: [
      {
        src: "interior/port/bedroom/Bedroom-online-interior-design-help-1.jpg",
        alt: "Bedroom Room 1",
      },
      {
        src: "interior/port/bedroom/Bedroom-online-interior-design-help-2.jpg",
        alt: "Bedroom Room 2",
      },
      {
        src: "interior/port/bedroom/Bedroom-online-interior-design-help-3.jpg",
        alt: "Bedroom Room 3",
      },
      {
        src: "interior/port/bedroom/Bedroom-online-interior-design-help-30.jpg",
        alt: "Bedroom Room 4",
      },
      {
        src: "interior/port/bedroom/Bedroom-online-interior-design-help-4.jpg",
        alt: "Bedroom Room 5",
      },
      {
        src: "interior/port/bedroom/Bedroom-online-interior-design-help-5.jpg",
        alt: "Bedroom Room 6",
      },
    ],
    bathroom: [
      {
        src: "interior/port/bathroom/Bathroom-online-interior-design-help-1.jpg",
        alt: "Bathroom Room 1",
      },
      {
        src: "interior/port/bathroom/Bathroom-online-interior-design-help-2.jpg",
        alt: "Bathroom Room 2",
      },
      {
        src: "interior/port/bathroom/Bathroom-online-interior-design-help-3.jpg",
        alt: "Bathroom Room 3",
      },
      {
        src: "interior/port/bathroom/Bathroom-online-interior-design-help-30.jpg",
        alt: "Bathroom Room 4",
      },
      {
        src: "interior/port/bathroom/Bathroom-online-interior-design-help-4.jpg",
        alt: "Bathroom Room 5",
      },
      {
        src: "interior/port/bathroom/Bathroom-online-interior-design-help-5.jpg",
        alt: "Bathroom Room 6",
      },
    ],
    office: [
      {
        src: "interior/port/office/Small-Office-online-interior-design-help-1.jpg",
        alt: "Office Room 1",
      },
      {
        src: "interior/port/office/Small-Office-online-interior-design-help-2.jpg",
        alt: "Office Room 2",
      },
      {
        src: "interior/port/office/Small-Office-online-interior-design-help-3.jpg",
        alt: "Office Room 3",
      },
      {
        src: "interior/port/office/Small-Office-online-interior-design-help-30.jpg",
        alt: "Office Room 4",
      },
      {
        src: "interior/port/office/Small-Office-online-interior-design-help-4.jpg",
        alt: "Office Room 5",
      },
      {
        src: "interior/port/office/Small-Office-online-interior-design-help-5.jpg",
        alt: "Office Room 6",
      },
    ],
    kitchen: [
      {
        src: "interior/port/kitchen/Kitchen-online-interior-design-help-1.jpg",
        alt: "kitchen 1",
      },
      {
        src: "interior/port/kitchen/Dining-Room-online-interior-design-help-3.jpg",
        alt: "kitchen 2",
      },
      {
        src: "interior/port/kitchen/Kitchen-online-interior-design-help-3.jpg",
        alt: "kitchen 3",
      },
      {
        src: "interior/port/kitchen/Kitchen-online-interior-design-help-4.jpg",
        alt: "kitchen 4",
      },
      {
        src: "interior/port/kitchen/Kitchen-online-interior-design-help-5.jpg",
        alt: "kitchen 5",
      },
      {
        src: "interior/port/kitchen/Kitchen-online-interior-design-help-6.jpg",
        alt: "kitchen 6",
      },
    ],
    hallway: [
      {
        src: "interior/port/hallway/Hallway-online-interior-design-help-1.jpg",
        alt: "hallway 1",
      },
      {
        src: "interior/port/hallway/Hallway-online-interior-design-help-2.jpg",
        alt: "hallway 2",
      },
      {
        src: "interior/port/hallway/Hallway-online-interior-design-help-3.jpg",
        alt: "hallway 3",
      },
      {
        src: "interior/port/hallway/Hallway-online-interior-design-help-4.jpg",
        alt: "hallway 4",
      },
      {
        src: "interior/port/hallway/Hallway-online-interior-design-help-5.jpg",
        alt: "hallway 5",
      },
      {
        src: "interior/port/hallway/Hallway-online-interior-design-help-6.jpg",
        alt: "hallway 6",
      },
    ],
    kids: [
      {
        src: "interior/port/kids/Kids-RoomNursery-online-interior-design-help-1.jpg",
        alt: "kids 1",
      },
      {
        src: "interior/port/kids/Kids-RoomNursery-online-interior-design-help-2.jpg",
        alt: "kids 2",
      },
      {
        src: "interior/port/kids/Kids-RoomNursery-online-interior-design-help-3.jpg",
        alt: "kids 3",
      },
      {
        src: "interior/port/kids/Kids-RoomNursery-online-interior-design-help-4.jpg",
        alt: "kids 4",
      },
      {
        src: "interior/port/kids/Kids-RoomNursery-online-interior-design-help-5.jpg",
        alt: "kids 5",
      },
      {
        src: "interior/port/kids/Kids-RoomNursery-online-interior-design-help-6.jpg",
        alt: "kids 6",
      },
    ],
    outdoor: [
      {
        src: "interior/port/outdoor/OutdoorPatio-online-interior-design-help-1.jpg",
        alt: "outdoor 1",
      },
      {
        src: "interior/port/outdoor/OutdoorPatio-online-interior-design-help-2.jpg",
        alt: "outdoor 2",
      },
      {
        src: "interior/port/outdoor/OutdoorPatio-online-interior-design-help-3.jpg",
        alt: "outdoor 3",
      },
      {
        src: "interior/port/outdoor/OutdoorPatio-online-interior-design-help-4.jpg",
        alt: "outdoor 4",
      },
      {
        src: "interior/port/outdoor/OutdoorPatio-online-interior-design-help-5.jpg",
        alt: "outdoor 5",
      },
      {
        src: "interior/port/outdoor/OutdoorPatio-online-interior-design-help-6.jpg",
        alt: "outdoor 6",
      },
    ],
    business: [
      {
        src: "interior/port/business/Business-online-interior-design-help-1.jpg",
        alt: "business 1",
      },
      {
        src: "interior/port/business/CommercialBusiness-online-interior-design-help-2.jpg",
        alt: "business 2",
      },
      {
        src: "interior/port/business/CommercialBusiness-online-interior-design-help-3.jpg",
        alt: "business 3",
      },
      {
        src: "interior/port/business/CommercialBusiness-online-interior-design-help-4.jpg",
        alt: "business 4",
      },
      {
        src: "interior/port/business/Business-online-interior-design-help-5.jpg",
        alt: "business 5",
      },
      {
        src: "interior/port/business/Business-online-interior-design-help-6.jpg",
        alt: "business 6",
      },
    ],
    other: [
      {
        src: "interior/port/other/Other-online-interior-design-help-1.jpg",
        alt: "other 1",
      },
      {
        src: "interior/port/other/Other-online-interior-design-help-2.jpg",
        alt: "other 2",
      },
      {
        src: "interior/port/other/Other-online-interior-design-help-3.jpg",
        alt: "other 3",
      },
      {
        src: "interior/port/other/Other-online-interior-design-help-4.jpg",
        alt: "other 4",
      },
      {
        src: "interior/port/other/Other-online-interior-design-help-5.jpg",
        alt: "other 5",
      },
      {
        src: "interior/port/other/Other-online-interior-design-help-6.jpg",
        alt: "other 6",
      },
    ],
  };

  const slider = $("#roomSlider");

  // Function to Load Images
  function loadImages(category) {
    console.log("Loading images for:", category);

    if (slider.hasClass("slick-initialized")) {
      slider.slick("unslick"); // close existing slider
    }

    slider.empty(); // Clear previous images
    imageData[category].forEach((image) => {
      slider.append(
        `<div class="slick-slide-item"><img src="${image.src}" class="d-block w-100" alt="${image.alt}"></div>`
      );
    });

    // Reinitialize Slick
    slider.slick({
      slidesToShow: 3, // Show 3 images at a time
      slidesToScroll: 1, // Scroll 1 at a time
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      dots: true,
      infinite: true,
      responsive: [
        { breakpoint: 992, settings: { slidesToShow: 2 } },
        { breakpoint: 768, settings: { slidesToShow: 1 } },
      ],
    });

    console.log("Slick Initialized:", slider.hasClass("slick-initialized"));
  }

  // Handle Toggle Change
  $(".room-toggle-input").on("change", function () {
    loadImages($(this).attr("data-category"));
  });

  // Load Initial Images
  loadImages("living");
});
