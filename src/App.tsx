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

interface User {
  firstName: string,
  lastName: string,
  age: number
}


const App: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [user, setUser] = useState<User>({ firstName: '', lastName: '', age: 0 })

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


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetch("https://dummyjson.com/users/add", {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(console.log)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { name, value } = e.target
    setUser(state => ({
      ...state,
      [name]: value
    }))
  }

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
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="firstName" value={user.firstName} onChange={handleChange} />
          <input type="text" name="lastName" value={user.lastName} onChange={handleChange} />
          <input type="text" name="age" value={user.age} onChange={handleChange} />
          <button type="submit">Add product</button>
        </form>
      </div>
    </div>
  );
}

export default App;
