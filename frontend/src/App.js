import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [message, setMessage] = useState();
  useEffect(() => {
    fetch("/api/")
      .then(res => res.json())
      .then(res => setMessage(res.message))
      .catch(console.error);
  }, [setMessage]);
  return (
    // <div className="App">
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     <p>{message || "Loading..."}</p>
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //   some other text
    // </div>

    /* 
    * Navigator component
    *   has logo which is a link to home page
    *   "services" link
    *   "about us" link
    *   "contact us" link
    */
    <div className="navbar">
      <div className="Navigator__logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <a href="/home">Home</a>
        <a href="/services">Services</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
      </div>
    </div>
  );
}

export default App;
