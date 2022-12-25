const heading1 = React.createElement(
  "h1",
  {
    id: "heading-one",
    class: "heading-cl1",
  },
  "Hi Everybody, I am heading one H1"
);
const heading2 = React.createElement(
  "h1",
  {
    id: "heading-two",
    class: "heading-cl2",
  },
  "Hi Everybody, I am heading one H2"
);
const container = React.createElement(
  "h1",
  {
    id: "container",
  },
  [heading1, heading2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
