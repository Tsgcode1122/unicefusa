import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  );
}

export default App;
