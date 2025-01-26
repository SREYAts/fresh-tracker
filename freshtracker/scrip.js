document.addEventListener("DOMContentLoaded", function () {
    const foodForm = document.getElementById("foodForm");
    const foodList = document.getElementById("foodList");

   
let foodItems = JSON.parse(localStorage.getItem("foodItems")) || [];


function displayFoodItems() {
  const foodList = document.getElementById("foodList");
  foodList.innerHTML = ""; 

  if (foodItems.length === 0) {
    foodList.innerHTML = "<p>No food items found!</p>";
    return;
  }

  foodItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} (Expires on: ${item.expiry})`;
    li.style.cursor = "pointer";
    li.addEventListener("click", () => handleItemClick(item, index));
    foodList.appendChild(li);
  });
}
function handleItemClick(item, index) {
  alert(`You clicked on: ${item.name}\nExpiry Date: ${item.expiry}
`);
}
displayFoodItems();
window.removeItem = function (index) {
    foodItems.splice(index, 1);
    localStorage.setItem("foodItems", JSON.stringify(foodItems));
    displayFoodItems();
  };
});