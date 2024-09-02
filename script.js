function addToCart() {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.id = "modal";

  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";

  const productName = document.createElement("div");
  productName.className = "product-name";
  productName.textContent = "VANS SH-8 HI";

  const productPrice = document.createElement("div");
  productPrice.className = "product-price";
  productPrice.textContent = "$99.99";

  const addToCartNotf = document.createElement("div");
  addToCartNotf.className = "addToCart-notf";
  addToCartNotf.textContent = "Item added to cart.";

  modalHeader.appendChild(addToCartNotf);
  modalHeader.appendChild(productName);
  modalHeader.appendChild(productPrice);

  const modalBody = document.createElement("div");
  modalBody.className = "modal-body";

  const productInfo = document.createElement("div");
  productInfo.className = "product-info";

  const size = document.createElement("div");
  size.className = "size";
  size.innerHTML = "<span>Size:</span> 4";

  const color = document.createElement("div");
  color.className = "color";
  color.innerHTML = "<span>Color:</span> Black";

  const quantity = document.createElement("div");
  quantity.className = "quantity";
  quantity.innerHTML = "<span>Quantity:</span> 1";

  productInfo.appendChild(size);
  productInfo.appendChild(color);
  productInfo.appendChild(quantity);

  modalBody.appendChild(productInfo);

  const overlay = document.createElement("div");
  overlay.id = "overlay";
  overlay.classList.add("active");

  modal.appendChild(modalHeader);
  modal.appendChild(modalBody);

  document.body.appendChild(modal);
  document.body.appendChild(overlay);
}
