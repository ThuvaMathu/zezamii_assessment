import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/header";
import ProductList from "./components/ProductList";

import { IProduct } from "./types/product-type";
import ProductSkelton from "./components/product-skelton";

const App: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true); // Start loading
      setError(null); // Reset any previous errors
      try {
        const response = await axios.get(
          "https://dummyjson.com/products?limit=100"
        );
        setProducts(response.data.products);
        setFilteredProducts(response.data.products);
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setIsLoading(false); // End loading
      }
    };
    fetchProducts();
  }, []);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      <div className="mt-10">
        {/* Display error message if there's an error */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Display skeleton while loading */}
        {isLoading ? (
          <div>
            {Array.from({ length: 4 }).map((_, index) => (
              <ProductSkelton key={index} />
            ))}
          </div>
        ) : (
          <ProductList products={filteredProducts} />
        )}
      </div>
    </div>
  );
};

export default App;
