const products = require("./data/products.json");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

exports.handler = async req => {
  const order = JSON.parse(req.body);
  const product = products.reduce(
    (prev, curr) => (curr.sku === order.sku ? curr : prev),
    null,
  );
  if (product === null) return { statusCode: 404 };

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    billing_address_collection: "auto",
    shipping_address_collection: {
      allowed_countries: ["GB"],
    },
    line_items: [
      {
        price_data: {
          currency: product.currency,
          product_data: {
            name: order.size ? `${product.name} (${order.size})` : product.name,
            images: [product.image],
          },
          unit_amount: product.amount,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "https://topthornarena.com/success",
    cancel_url: "https://topthornarena.com/cancel",
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ id: session.id }),
  };
};
