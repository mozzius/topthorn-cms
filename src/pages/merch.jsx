import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useStripe } from "@stripe/react-stripe-js";
import Layout, { Panel } from "../components/Layout";

const Products = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 30px;
`;

const ProductContainer = styled.div`
  width: 100%;
  padding: 10px;

  @media (min-width: 500px) and (max-width: 800px) {
    width: 50%;
  }

  @media (min-width: 800px) and (max-width: 1200px) {
    width: calc(100% / 3);
  }

  @media (min-width: 1200px) {
    width: 25%;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }

  p {
    select {
      margin: auto 0 auto 10px;
    }
  }
`;
const Product = ({ product, buyProduct }) => {
  const [option, setOption] = useState(
    product.sizes ? product.sizes[0] : undefined,
  );
  return (
    <ProductContainer>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>
        £{(product.amount / 100).toFixed(2)}
        {product.sizes && (
          <select value={option} onChange={evt => setOption(evt.target.value)}>
            {product.sizes.map(size => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        )}
        <Button onClick={() => buyProduct({ sku: product.sku, size: option })}>
          Buy now
        </Button>
      </p>
    </ProductContainer>
  );
};

const Button = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.blue};
  color: white;
  margin: auto 0 auto 10px;
  padding: 2px 10px;
  border-radius: 2px;
  cursor: pointer;
`;

const Merch = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();
  const stripe = useStripe();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/.netlify/functions/get-products", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setProducts(data);
      } catch (e) {
        console.error(e);
        setError("Sorry, an error has occurred");
      }
    })();
  }, []);

  const buyProduct = async product => {
    try {
      const res = await fetch("/.netlify/functions/create-checkout-session", {
        method: "POST",
        body: JSON.stringify(product),
      });
      const session = await res.json();
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) setError(result.error.message);
    } catch (e) {
      console.error(e);
      setError("Sorry, an error has occurred");
    }
  };

  return (
    <Layout>
      <Panel>
        <h1>Topthorn Merch</h1>
        {error ? (
          <p>{error}</p>
        ) : (
          <Products>
            {products.map(product => (
              <Product
                key={product.sku}
                product={product}
                buyProduct={buyProduct}
              />
            ))}
          </Products>
        )}
      </Panel>
    </Layout>
  );
};

export default Merch;
