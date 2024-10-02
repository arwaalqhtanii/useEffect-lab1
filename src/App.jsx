import  { useState, useEffect } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]); 
  const [cart, setCart] = useState([]); 

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json()) 
      .then((data) => setProducts(data));
  }, []); 

 
  const addToCart = (product) => {
    setCart([...cart, product]); 
    console.log('Added to cart:', product);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{
        textAlign: 'center',
        fontSize: '3rem',
        fontWeight: 'bold',
        color: '#d60073',
        marginBottom: '20px'
      }}>
        Our Products
      </h1>
    
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        {products.map((product) => (
          <div key={product.id} style={{
            border: '3px solid pink',
            padding: '10px',
            textAlign: 'center', 
            backgroundColor: '#fff',
            borderRadius: '10px', 
            height: '400px', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: '150px',
                height: '150px', 
                objectFit: 'contain', 
                margin: '0 auto' 
              }}
            />
            <h2 style={{
              fontSize: '1.1rem',
              fontWeight: '900',
              color: '#d60073',
              margin: '10px 0'
            }}>
              {product.title}
            </h2>
            <p style={{ color: 'pink', fontSize: '1.4rem' }}>${product.price}</p>

            <button 
              onClick={() => addToCart(product)} 
              style={{
                backgroundColor: '#d60073',
                color: 'white',
                border: 'none',
                padding: '10px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>


    </div>
  );
};

export default Products;
