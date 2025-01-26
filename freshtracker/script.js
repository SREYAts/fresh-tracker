
document.addEventListener(DOMContentLoaded", function () {
    const foodform = document.getElementById("foodform");
    const foodlist = document.getElementById("foodlist");

    let foodItems = JSON.parse(localStorage.getItem("foodItems")) || [];
    displayFoodItems();

    foodform.addEventListener("submit", function (e) {
      e.preventDefault();
      const foodName = document.getElementById("foodName").value;
      const expiryDate = document.getElementById("expiryDate").value;

      if (foodName && expiryDate) {
        foodItems.push({ name: foodName, expiry: expiryDate});
        localStorage.setItem("foodItems", JSON.stringify(foodItems));
        displayFoodItems();
      }
  });
  function displayFoodItems() {
    foodlist.innerHTML = "";
    const today = new Date().toISOString().split("T")[O];

    foodItems.forEach((item, index)) => {
        const li = document.createElement("li");

        const expiryClass = item.expiry < today ? "expired" : "";

        li.innerHTML =  `
          <span>${item.name} (Expires: <span class  ="${expiryClass}">${item.expiry}</span>)</span>
          <button onclick="removeItem(${index})">Remove</button>
          `;
          foodList.appendChild(li);
     });
  }
  window.removeItem = function (index) {
    foodItems.splice(index, 1);
    localStorage.setItem("foodItems", JSON,stringify(foodItems));
    displayFoodItems();
  };
});

















