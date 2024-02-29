import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <br />
      <Header />
      <Menu />
      <br />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};
  // const style = { color: "red", fontSize: "32px", textTransform: "uppercase" };

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizza = pizzaData;
  // const pizzas = [];
  const numPizzas = pizza.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic italian cusine prepared every day. Creative and delicious
            dishes to choose from. All from our stone oven, all organic. all
            delicious.
          </p>
          <ul className="pizzas">
            {pizza.map((pizza) => (
              <Pizza pizzaObject={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later!</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObject }) {
  console.log(pizzaObject);
  if (pizzaObject.soldOut) return null;
  return (
    <li className="pizza">
      <img src={pizzaObject.photoName} alt={pizzaObject.name} />
      <h3>{pizzaObject.name}</h3>
      <p>{pizzaObject.ingredients}</p>
      <span>{pizzaObject.price}</span>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We´re currently open!");
  // else alert("Sorry we´re closed");
  // if (!isOpen) return <p>Sorry we're closed</p>;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeProp={closeHour} />
      ) : (
        <p>We're closed. Come back tomorrow!</p>
      )}
    </footer>
  );
}

function Order(props) {
  return (
    <div>
      <p>
        We're open until {props.closeProp}:00. Come visit us or order online
      </p>
      <br />
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
