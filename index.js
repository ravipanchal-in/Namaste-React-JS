// const heading = document.createElement("h1");
// heading.innerHTML = "Jay Shree Krishna";
// const root = document.getElementById("root");
// root.appendChild(heading);

const heading1 = React.createElement(
  "h1",
  { key: "h1", className: "heading1" },
  "Namste Everyone1!"
);
const heading2 = React.createElement(
  "h2",
  { key: "h2", className: "heading2" },
  "Namste Everyone2!"
);
const container = React.createElement("div", { className: "container" }, [
  heading1,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
