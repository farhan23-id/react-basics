import { Routes, Route } from "react-router";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import ProductDetail from "./pages/ProductDetil.tsx";
import Products from "./pages/Products.tsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Dynamic Page */}
        <Route path="/product/:productSlug" element={<ProductDetail />} />

        {/* query params implementation */}
        <Route path="/products" element={<Products />} />

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
};

export default App;
