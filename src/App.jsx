import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Button from "./components/common/button";
import GridContainer from "./components/common/cont-grid";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button
          text={`Count is ${count}`}
          onClick={() => setCount(count + 1)}
        />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <>
        <h1>Vite + React</h1>
        <GridContainer />
      </>

      <div className="card">
        {console.log("hola")}
        {function miFuncion() {
          console.log("hola");
        }}
        <button class="btn btn-blue">Botón Azul</button>
        <button className="btn btn-green">Botón Verde</button>
      </div>
      <Footer />
    </>
  );
}

export default App;
