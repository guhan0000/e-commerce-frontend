import { useEffect, useState } from "react";

const BASE_URL = "https://dummyjson.com/products";

const useProduct = (search, sortOrder, selectedCategories) => {
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
        let filteredProducts;

        if (selectedCategories.length > 0) {
          filteredProducts = data.products.filter((product) =>
            selectedCategories.includes(product.category),
          );
          setProducts(filteredProducts);
          // console.log(filteredProducts);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [search, sortOrder, selectedCategories]);

  return {
    products,
    loading,
    error,
  };
};

export default useProduct;
