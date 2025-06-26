import React from "react";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";

import EmptyCart from "./pages/EmptyCart.jsx";
import Products from "./pages/Products.jsx";
import { Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <div className="font-sans space-y-16">
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<EmptyCart />} />
            </Routes>

            <Footer />
        </div>
    );
};

export default App;
