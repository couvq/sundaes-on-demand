import React from 'react';
import { useState, useEffect } from 'react';

const getSuggestedProducts = async () => {
  try {
    const response = await fetch('https://localhost:4340/suggestedProducts');

    const json = await response.json();

    return json.SuggestedProducts;
  } catch (error) {
    console.log(error);
  }
}

const SuggestedProducts = () => {
  const [suggestedProducts, setSuggestedProducts] = useState([]);

  useEffect(() => {
    getSuggestedProducts().then(data => setSuggestedProducts(data));
  }, [])

  return (
    <div role='suggested-products'>
      {
        suggestedProducts.map((product => (
          <p>{product}</p>
        )))
      }
    </div>
  );
}

export default SuggestedProducts;