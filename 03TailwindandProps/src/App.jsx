import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx";
function App() {
  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-xl">Tailwind Test</h1>
      <Card userName="Dev Goel" />
    </>
  );
}

export default App;
