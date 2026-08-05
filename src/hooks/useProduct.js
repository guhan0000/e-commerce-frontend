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

        // if (sortOrder === "price-low-high") {
        //   url += "&sortBy=price&order=asc";
        // } else if (sortOrder === "price-high-low") {
        //   url += "&sortBy=price&order=desc";
        // }

        // if (sortOrder === "rating-low-high") {
        //   url += "&sortBy=rating&order=asc";
        // } else if (sortOrder === "rating-high-low") {
        //   url += "&sortBy=rating&order=desc";
        // }
        if (sortOrder) {
          const [sortBy, orderBy] = sortOrder.split("-");
          url += `&sortBy=${sortBy}&order=${orderBy}`;
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
