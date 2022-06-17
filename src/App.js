import { useRef } from "react";
import { useState } from "react";
import "./App.css";
import checkmark from "./assets/images/icon-check.svg";

function App() {
  const [sliderValue, setSliderValue] = useState(2);
  const views = [10, 50, 100, 500, 1];
  const cost = [8, 12, 16, 24, 36];

  const [discount, setDiscount] = useState(false);
  const toggleButtonRef = useRef();
  const toggleRef = useRef();

  function viewCounter(e) {
    setSliderValue(e);
  }

  const handleToggle = () => {
    toggleButtonRef.current.classList.toggle("active");
    toggleRef.current.classList.toggle("active");
    setDiscount(!discount);
  };

  return (
    <div className="App">
      <div className="header">
        <h2>Simple, traffic-based pricing</h2>
        <h3>
          Sign-up for our 30-day trial.
          <br />
          No credit card required.
        </h3>
      </div>
      <div className="container">
        <h3 style={{ textTransform: "uppercase", letterSpacing: "0.2rem" }}>
          {views[sliderValue] > 1
            ? views[sliderValue] + "K"
            : views[sliderValue] + "M"}{" "}
          pageviews
        </h3>
        <div className="slidecontainer">
          <input
            type="range"
            min="0"
            max="4"
            step="1"
            value={sliderValue}
            onChange={(e) => viewCounter(e.target.value)}
            className="slider"
            id="myRange"
          />
        </div>
        <div className="cost">
          <p>
            <span>
              ${!discount ? cost[sliderValue] : cost[sliderValue] / 2}.00
            </span>{" "}
            / month
          </p>
        </div>

        <div className="cost-toggle">
          <p>Monthly Billing</p>
          <div className="toggle" ref={toggleRef} onClick={handleToggle}>
            <div className="toggleButton" ref={toggleButtonRef}></div>
          </div>
          <p>Yearly Billing</p>
          <p>
            <span id="percent">-25%</span>
          </p>
        </div>
        <hr />

        <div className="features-list">
          <ul>
            <li>
              <img src={checkmark} alt="check mark" /> Unlimited websites
            </li>
            <li>
              <img src={checkmark} alt="check mark" />
              100% data ownership
            </li>
            <li>
              <img src={checkmark} alt="check mark" />
              Email reports
            </li>
          </ul>
        </div>
        <div className="button-container">
          <button className="button-start">Start my trial</button>
        </div>
      </div>
    </div>
  );
}

export default App;
