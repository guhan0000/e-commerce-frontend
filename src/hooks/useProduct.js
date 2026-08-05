import { useEffect, useState } from "react";

const BASE_URL = "https://dummyjson.com/products";

const useProduct = (search, sortOrder) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        let url;

        if (search.trim()) {
          url = `${BASE_URL}/search?q=${search}`;
        } else {
          url = `${BASE_URL}?limit=194`;
        }

        if (sortOrder === "low-high") {
          url += "&sortBy=price&order=asc";
        } else if (sortOrder === "high-low") {
          url += "&sortBy=price&order=desc";
        }

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [search, sortOrder]);

  return {
    products,
    loading,
    error,
  };
};

export default useProduct;
