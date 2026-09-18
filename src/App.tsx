import { Routes, Route } from "react-router";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import ProductDetail from "./pages/ProductDetil.tsx";
import Products from "./pages/Products.tsx";
import Form from "./pages/Form.tsx";
import RHFPage from "./pages/RHFPage.tsx";
import ReduxTest from "./pages/ReduxTest.tsx";

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

        {/* Form Handling */}
        <Route path="/form" element={<Form />} />
        <Route path="/rhf" element={<RHFPage />} />

        {/* state management with redux */}
        <Route path="/redux" element={<ReduxTest />} />

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
};

export default App;
