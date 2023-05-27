const blockAds = () => {
  const spans = document.getElementsByTagName("span");
  for (let i = 0; i < spans.length; i++) {
    if (spans[i].textContent === "Promoted") {
      let card = spans[i].closest(".feed-shared-update-v2");

      if (card === null) {
        let counter = 0;
        while (counter < 6) {
          card = card.parentNode;
          ++counter;
        }
      }

      card.setAttribute("style", "display:none !important");
    }
  }
};

document.addEventListener("scroll", () => {
  blockAds();
});
