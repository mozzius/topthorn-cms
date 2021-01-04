import React, { useEffect, useState } from 'react';
import Layout, { Panel } from '../components/Layout';

const Merch = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/.netlify/functions/get-products', {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await res.json();
        setProducts(data);
      } catch (e) {
        console.error(e);
        setError(true);
      }
    })();
  }, []);

  return (
    <Layout>
      <Panel>
        <h1>Topthorn Merch</h1>
        {error ? (
          <p>Sorry, an error has occured</p>
        ) : (
          products.map((product) => (
            <div>
              <img src={product.image} alt={product.name} />
              <h1>{product.name}</h1>
              <p>{product.description}</p>
            </div>
          ))
        )}
      </Panel>
    </Layout>
  );
};

export default Merch;
