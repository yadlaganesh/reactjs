const heading1 = React.createElement(
  "h1",
  {
    id: "heading-one",
    className: "heading-cl1",
    key: 1
  },
  "Hi Everybody, I am heading one H1"
);
const heading2 = React.createElement(
  "h1",
  {
    id: "heading-two",
    className: "heading-cl2",
    key: 2
  },
  "Hi Everybody, I am heading one H2"
);
const container = React.createElement(
  "div",
  {
    id: "container"
  },
 [heading1, heading2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
