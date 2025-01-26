document.addEventListener("DOMContentLoaded", function () {
    const foodForm = document.getElementById("foodForm");
    const foodList = document.getElementById('food-list');
    let foodItems = JSON.parse(localStorage.getItem("foodItems")) || [];
    displayFoodItems();
  
    foodForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const foodName = document.getElementById("foodName").value;
      const expiryDate = document.getElementById("expiryDate").value;
  
      if (foodName && expiryDate) {
        foodItems.push({ name: foodName, expiry: expiryDate });
        localStorage.setItem("foodItems", JSON.stringify(foodItems));
        displayFoodItems();
        foodForm.reset();
      }
    });
  
    function displayFoodItems() {
      foodList.innerHTML = "";
      const today = new Date().toISOString().split("T")[0];
  
      foodItems.forEach((item, index) => {
        const li = document.createElement("li");
        const expiryDate = new Date(item.expiry);
        const today = new Date();
        const expiryClass = expiryDate < today ? "expired" : "";
  
        li.innerHTML = `
          <span>${item.name} (Expires: <span class="${expiryClass}">${item.expiry}</span>)</span>
          <button onclick="removeItem(${index})">Remove</button>
        `;
        foodList.appendChild(li);
      });
    }
});  
     function removeItem(index) {
      foodItems.splice(index, 1);
      localStorage.setItem("foodItems", JSON.stringify(foodItems));
      displayFoodItems();
    }
  