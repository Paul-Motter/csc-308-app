// src/main.jsx
import React from "react";
import ReactDOMClient from "react-dom/client";
import MyApp from "./MyApp"; //Doesnt need the suffix since vite can accept js, jsx, and ts type files and turn them into js.
import "./main.css";

// function MyApp() {
//   return (
//     <div>
//       <h1>Hello, React!</h1>
//     </div>
//   );
// }

// Create the container
const container = document.getElementById("root");

// Create a root
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the Root
root.render(<MyApp />);