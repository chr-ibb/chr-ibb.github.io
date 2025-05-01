// This script dynamically positions an image between the right of a title and the end of a description.
document.addEventListener("DOMContentLoaded", function () {
  const description = document.querySelector(".post-description");
  const image = document.querySelector(".post-header img");
  const title = document.querySelector(".post-title");

  if (description && image && title) {
    const descriptionWidth = description.offsetWidth;
    const titleWidth = title.offsetWidth;
    const imageWidth = image.offsetWidth;
    const remainingSpace = descriptionWidth - titleWidth;
    const leftMargin = (remainingSpace / 2) - (imageWidth / 2);
    image.style.marginLeft = `${leftMargin}px`;
  }
});