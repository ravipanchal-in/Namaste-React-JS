// const heading = document.createElement("h1");
// heading.innerHTML = "Jay Shree Krishna";
// const root = document.getElementById("root");
// root.appendChild(heading);

import React, { Component } from "react";
import ReactDOM from "react-dom/client";

//* jsx expression or React Element
const heading = (
  <h1 id="heading" key="h1">
    I am heading
  </h1>
);

//* React Component
const Title = () => <h3>I am a Title</h3>;
const Desc = () => <p>Lorem Ipsum is simply dummy text.</p>;

const HeaderComponent = () => {
  return (
    <>
      {heading}
      {Title()}
      <Desc />
      {console.log("Hello World")}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
