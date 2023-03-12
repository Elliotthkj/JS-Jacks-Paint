function configureListeners() {
  let images = document.querySelectorAll("img"); // select img elements

  // iterate over images and add mouseover event listeners
  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseover", function () {
      addOpacity(event); // update opacity
      getProductInfo(event.target.id); // display product info
    });
    images[i].addEventListener("mouseout", function () {
      removeOpacity(event); // reset opacity and hide product info
    });
  }
}

function addOpacity(event) {
  // add appropriate CSS class
  event.target.style.opacity = 0.7;
  getProductInfo(event.target.id);
}

function removeOpacity(event) {
  //remove appropriate CSS class
  event.target.style.opacity = 1;

  let element = document.getElementById("color-price");
  element.textContent = "";

  let color = document.getElementById("color-name");
  color.textContent = "";

  event.preventDefault();
}

function getProductInfo(paintColor) {
  let price;
  let colorName;

  switch (paintColor) {
    case "pn1":
      // set variables for price and color name and invoke a function to update the price
      price = "$14.99";
      colorName = "Lime Green";
      updatePrice(colorName, price); // if mouseover target matches this id run this function
      break;
    case "pn2":
      // set variables for price and color name and invoke a function to update the price
      price = "$11.14";
      colorName = "Medium Brown";
      updatePrice(colorName, price);
      break;
    case "pn3":
      // set variables for price and color name and invoke a function to update the price
      price = "$22.99";
      colorName = "Royal Blue";
      updatePrice(colorName, price);
      break;
    case "pn4":
      // set variables for price and color name and invoke a function to update the price
      price = "$13.42";
      colorName = "Solid Red";
      updatePrice(colorName, price);
      break;
    case "pn5":
      // set variables for price and color name and invoke a function to update the price
      price = "$21.98";
      colorName = "Solid White";
      updatePrice(colorName, price);
      break;
    case "pn6":
      // set variables for price and color name and invoke a function to update the price
      price = "$4.99";
      colorName = "Solid Black";
      updatePrice(colorName, price);
      break;
    case "pn7":
      // set variables for price and color name and invoke a function to update the price
      price = "$8.22";
      colorName = "Solid Cyan";
      updatePrice(colorName, price);
      break;
    case "pn8":
      // set variables for price and color name and invoke a function to update the price
      price = "$11.99";
      colorName = "Solid Purple";
      updatePrice(colorName, price);
      break;
    case "pn9":
      // set variables for price and color name and invoke a function to update the price
      price = "$14.99";
      colorName = "Solid Yellow";
      updatePrice(colorName, price);
      break;
    default:
  }

  function updatePrice(colorName, price) {
    let colorPrice = document.getElementById("color-price");
    colorPrice.textContent = price;

    let color = document.getElementById("color-name");
    color.textContent = colorName;
  }
}
