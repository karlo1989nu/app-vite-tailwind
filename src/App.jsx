import { useState } from "react";
import Button from "./components/common/button";
import GridContainer from "./components/common/cont-grid";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import "./App.css";
import ProductCard from "./components/common/productcard";
import "/src/assets/styles/index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="product-grid">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      <h1>Somos tu tienda preferida de katanas</h1>
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
        <h1>Todo es mejor al filo de una katana</h1>
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
