

const addMenu = document.getElementById("addMenu");
const CurrentMenuBody = document.querySelector("#currentMenu tbody");

let menuItems = [];

function renderTable() {
  CurrentMenuBody.innerHTML = "";
  menuItems.forEach((item, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${item.name}</td>
      <td>₦${item.price}</td>
      <td>${item.description}</td>
      <td>
        <input type="number" value="${item.price}" onchange="updatePrice(${index}, this.value)" />
      </td>
      <td>
        <button onclick="removeItem(${index})">Remove</button>
      </td>
    `;

    CurrentMenuBody.appendChild(row);
  });
}

function updatePrice(index, newPrice) {
  menuItems[index].price = parseFloat(newPrice);
  renderTable();
}

function removeItem(index) {
  if (confirm(`Are you sure you want to remove "${menuItems[index].name}"?`)) {
    menuItems.splice(index, 1);
    renderTable();
  }
}

addMenu.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const price = parseFloat(document.getElementById("price").value);
  const description = document.getElementById("description").value.trim();

  if (name && !isNaN(price) && desc) {
    menuItems.push({ name, price, description });
    addMenu.reset();
    renderTable();
  }
});

        // <!-- <button class="logout" onclick="logout()">Logout</button> -->
