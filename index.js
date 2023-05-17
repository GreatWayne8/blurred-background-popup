const containerEl = document.querySelector(".container"); // Fix the selector for the container element
const btnEl = document.querySelector(".btn"); // Fix the selector for the button element
const popupContainerEl = document.querySelector(".popup-container"); // Fix the selector for the popup container element
const closeIconEl = document.querySelector(".close-icon"); // Fix the selector for the close icon element

btnEl.addEventListener("click", () => {
  containerEl.classList.add("active");
  popupContainerEl.classList.add("active"); // Add class "active" to the popup container element to show it
});

closeIconEl.addEventListener("click", () => {
  containerEl.classList.remove("active");
  popupContainerEl.classList.remove("active"); // Remove class "active" from the popup container element to hide it
});
