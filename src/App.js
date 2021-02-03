import React, { useRef } from "react";
import "./App.css";

function App() {
  const nav = useRef(null);

  const onClicked = () => {
    const burger = document.querySelector(".ham-menu");
    const navLinks = document.querySelectorAll("nav ul li");

    nav.current.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    burger.classList.toggle("toggle");
  };
  return (
    <div className="App">
      <nav>
        <h1>React Hamburger Menu</h1>
        <ul ref={nav}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="ham-menu" onClick={onClicked}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
}

export default App;
