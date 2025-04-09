import { useState } from "react";
import Button from "./components/common/button";
import GridContainer from "./components/common/cont-grid";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import "./App.css";
import ProductCard from "./components/common/productcard";
import "/src/assets/styles/index.css";
import SearchBar from "./components/common/searchbar";
import katanaSamurai1 from "./assets/images/katana-acero-forjado-negro.jpg";
import katanaSamurai2 from "./assets/images/katana-acero-inoxidable-granate.jpg";
import katanaSamurai3 from "./assets/images/katana-acero-inoxidable-negro.jpg";
import katanaSamurai4 from "./assets/images/katana-ynh-practical-dragonfly.jpg";
import katanaSamurai5 from "./assets/images/katana-ynh-practical-nokon.jpg";
import katanaSamurai6 from "./assets/images/katanero.jpg";

function App() {
  const [count, setCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const products = [
    {
      id: 1,
      title: "Katana Samurai",
      description: "Una katana tradicional.",
      imagen: katanaSamurai1,
    },
    {
      id: 2,
      title: "Katana Ninja",
      description: "Perfecta para ninjas.",
      imagen: katanaSamurai2,
    },
    {
      id: 3,
      title: "Katana Decorativa",
      description: "Ideal para decoración.",
      imagen: katanaSamurai3,
    },
    {
      id: 4,
      title: "Katana de Entrenamiento",
      description: "Para prácticas seguras.",
      imagen: katanaSamurai4,
    },
    {
      id: 5,
      title: "Katana flaca",
      description: "Para prácticas seguras.",
      imagen: katanaSamurai5,
    },
    {
      id: 6,
      title: "Katana gorda",
      description: "Para prácticas seguras.",
      imagen: katanaSamurai6,
    },
  ];
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <Header />
      <main>
        <SearchBar onSearch={setSearchQuery} />
        <h1>Bienvenido a nuestra tienda de katanas</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              imagen={product.imagen}
            />
          ))}
        </div>
        <div className="product-grid"></div>

        <h1>Somos tu tienda preferida de katanas</h1>
        <GridContainer />
        <h1>Todo es mejor al filo de una katana</h1>
      </main>

      <Footer />
    </>
  );
}

export default App;
