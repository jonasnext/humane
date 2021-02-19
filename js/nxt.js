  document.addEventListener("DOMContentLoaded", () => {
    (function () {
      let elements;
      let windowHeight;

      const init = () => {
        elements = [
          ...Array.from(document.querySelectorAll(".hidden")),
          ...Array.from(document.querySelectorAll(".fade-in")),
        ];
        windowHeight = window.innerHeight;
      };

      const checkPosition = () => {
        for (let i = 0; i < elements.length; i++) {
          const element = elements[i];
          const positionFromTop = elements[i].getBoundingClientRect().top;

          const elementHeight = elements[i].getBoundingClientRect().height;

          if (positionFromTop - windowHeight + elementHeight <= 0) {
            if (elements[i].id === "iphone") {
              elements[i].src =
                "img/iPhone 12 Pro Max - Silver - Vertical 2.png";
            }
          }

          if (positionFromTop - windowHeight <= 0) {
            element.classList.add("fade-in");
            element.classList.remove("hidden");
          } else {
            element.classList.remove("fade-in");
            element.classList.add("hidden");
          }
        }
      };

      window.addEventListener("scroll", checkPosition);
      window.addEventListener("resize", init);

      init();
      checkPosition();
    })();
  });