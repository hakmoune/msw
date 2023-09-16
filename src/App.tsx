import React, { useState, useEffect } from 'react';
import './App.css';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}


const App: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const param = 1
    const apiUrl = `https://dummyjson.com/products/${param}`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json()
      })
      .then(data => setProduct(data))
      .catch(error => console.error('Console Error fetching product data:', error))

  }, []);

  return (
    <div>
      <h1>Product Details</h1>
      {product ? (
        <div>
          <p>{product.brand}</p>
          <p>{product.category}</p>
          <p>{product.description}</p>
        </div>
      ) : "loading..."}
    </div>
  );
}

export default App;
