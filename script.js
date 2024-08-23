const openModalButtons = document.querySelectorAll("[data-modal-target]");
const overlay = document.getElementById("overlay");
const addToCartButton = document.querySelector(".add-to-cart-button");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active, .notf-modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

addToCartButton.addEventListener("click", addToCartClicked);

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

function addToCartClicked() {
  const cartItems = document.querySelector(".cart-items");
  const newItem = document.createElement("div");
  const itemInfo = document.createTextNode("VANS SH-8 HI $99.99");
  newItem.appendChild(itemInfo);
  cartItems.appendChild(newItem);
  
  const notfModal = document.querySelector(".notf-modal")
  openModal(notfModal);
}
