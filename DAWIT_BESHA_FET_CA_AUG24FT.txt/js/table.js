const tableData = [
  {
    id: 1,
    icon: "bi bi-box",
    description: "package",
    Info: "Delivery in 3 days",
    image: "package.jpg",
  },
  {
    id: 2,
    icon: "bi bi-star",
    description: "featured item",
    info: "top rated by users",
    image: "featured_item.jpg",
  },
  {
    id: 3,
    icon: "bi bi-cart",
    description: "shopping cart",
    info: "contains 5 items",
    image: "shopping-cart.jpg",
  },
  {
    id: 4,
    icon: "bi bi-tag",
    description: "discount",
    info: "20 % off on selected items",
    image: "discount.jpg",
  },
  {
    id: 5,
    icon: "bi bi-calendar",
    description: "event",
    info: "next event on October 15",
    image: "event.jpg",
  },
];

$(document).ready(function populateTable() {
  const tableBody = document.querySelector("#personalTable");
  tableData.forEach((row) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
          <td>${row.id}</td>
          <td class="icon-column"><i class="${row.icon}"></i></td>
          <td>${row.description}</td>
          <td>${row.info}</td>
          <td><img src = ${row.image} alt ="test"></td>`;

    tableBody.appendChild(tr);
  });
  $("#personalTable tr:odd").hover(
    function () {
      $(this).css("color", "red");
    },
    function () {
      $(this).css("color", "black");
    }
  );
});
