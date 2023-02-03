/*
  Hot Module Replacement (HMR)
  File watcher
  Bundling 
  minify
  cleaning code
  Dev and Production build manage
  super fast build algorithm
  Image Optimization
  Caching while developing
  Compression
  Compatible with older versions
  Https on dev
  multiple port numbers automatically handle
  

*/

import React from "react";
import ReactDOM from "react-dom/client";

// const heading1 = React.createElement(
//   "h1",
//   {
//     id: "heading-one",
//     className: "heading-cl1",
//     key: "h1",
//     style: {
//       fontSize: "22px",
//       backgroundColor: "#f6f7f9",
//       padding: "20px",
//     },
//   },
//   "Hi Everybody, I am heading one H1"
// );
// const heading2 = React.createElement(
//   "h1",

//   {
//     id: "heading-two",
//     key: "h2",
//     className: "heading-cl2",
//   },
//   "Hi Everybody, I am heading one Heading 2"
// );
// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//     key: "containerc1",
//   },
//   [heading1, heading2]
// );
const heading3 = <h1 key="h3">Heading 3</h1>;
const Heading4 = () => {
  return <h1 key="h3">Heading 4</h1>;
};
const HeaderComponent = () => {
  return (
    <div key="container">
      {heading3}
      <h1 key="1">Head 1</h1>
      <h1 key="2">Head 2</h1>
    </div>
  );
};
// without return
const HeaderComponent2 = () => (
  <div key="container">
    <Heading4 />
    <h1 key="1">Head 1</h1>
    <h1 key="2">Head 2</h1>
  </div>
);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log("test");
// root.render([heading3]);
// root.render([container, heading3]);
// root.render([<HeaderComponent2 />, <HeaderComponent />]);
