const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const $form = document.querySelector("#form");

const $input = document.querySelector("#number");

const $boton = document.querySelector(".submit");

const $card = document.querySelector(".card");
$card.style.visibility = "hidden";

// const localStorage = () => {
//   JSON.parse(localStorage.getItem("ultimaPizza"));
// };

const templatePizza = (pizza) => {
  return `
  <img src=${pizza.imagen} alt="${pizza.nombre}" class="img">
  <h2 class="card-title">${pizza.nombre}</h2>
  <p class="price">$${pizza.precio}.-</p>
  <p class="description">Ingredientes: ${pizza.ingredientes} </p>
  `;
};

const renderPizza = (numero) => {
  let pizzaID = parseInt(numero);
  let buscarPizza = pizzas.find((pizza) => pizza.id === pizzaID);
  if (buscarPizza) {
    $card.innerHTML = templatePizza(buscarPizza);
    $card.style.visibility = "visible";
    localStorage.setItem("ultimaPizza", JSON.stringify(buscarPizza));
  } else {
    $card.innerHTML = `<p class="error"> No se encontro ninguna variedad de pizza con el Valor ingresado. Por favor, intente nuevamente pero esta vez ingresando otro valor.</p>`;
    $card.style.visibility = "visible";
    localStorage.removeItem("ultimaPizza");
  }
};

const submitPizza = (e) => {
  e.preventDefault();
  pizzaElegida = $input.value;
  renderPizza(pizzaElegida);
  $input.value = "";
};

const init = () => {
  $form.addEventListener("submit", submitPizza);

  // Verificar si hay una pizza en el LocalStorage y renderizarla al cargar la página
  const ultimaPizzaGuardada = JSON.parse(localStorage.getItem("ultimaPizza"));
  if (ultimaPizzaGuardada) {
    renderPizza(ultimaPizzaGuardada.id);
    $card.style.visibility = "visible";
  }
};
init();
