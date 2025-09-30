

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("addmenu");
  const tableBody = document.querySelector("#currentMenu tbody");

  // Menu Manager Object
  const MenuManager = {
    menuItems: [],

    addItem(name, price, description) {
      const newItem = {
        id: Date.now(), // unique ID
        name,
        price,
        description
      };
      this.menuItems.push(newItem);
      this.renderTable();
    },

    editPrice(id, newPrice) {
      const item = this.menuItems.find(menu => menu.id === id);
      if (item) {
        item.price = newPrice;
        this.renderTable();
      }
    },

    removeItem(id) {
      this.menuItems = this.menuItems.filter(menu => menu.id !== id);
      this.renderTable();
    },

    renderTable() {
      tableBody.innerHTML = "";

      this.menuItems.forEach(item => {
        const row = document.createElement("tr");

        row.innerHTML = `
          <td>${item.name}</td>
          <td class="price-cell">₦${item.price}</td>
          <td>${item.description}</td>
          <td><button class="edit-btn">Edit</button></td>
          <td><button class="remove-btn">Remove</button></td>
        `;

        // Edit button
        row.querySelector(".edit-btn").addEventListener("click", () => {
          const newPrice = prompt("Enter new price (₦):", item.price);
          if (newPrice !== null && !isNaN(newPrice) && newPrice.trim() !== "") {
            this.editPrice(item.id, newPrice.trim());
          }
        });

        // Remove button
        row.querySelector(".remove-btn").addEventListener("click", () => {
          if (confirm("Are you sure you want to remove this menu item?")) {
            this.removeItem(item.id);
          }
        });

        tableBody.appendChild(row);
      });
    }
  };

  // Form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("menu").value.trim();
    const price = document.getElementById("price").value.trim();
    const description = document.getElementById("description").value.trim();

    if (name && price && description) {
      MenuManager.addItem(name, price, description);
      form.reset();
    }
  });
});
































