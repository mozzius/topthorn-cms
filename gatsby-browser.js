import React from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "./src/theme";
import "./src/base.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripe = loadStripe(
  "pk_test_51I5u2cFgL8dr7aeonzF5CkathOuOYNpg5s2Xziba9VXvdo9yJlJG34h2L21KVuSJk1Op98PL9e3MpuUcFDXt6WGk00X5FGxGll",
);

export const wrapRootElement = ({ element }) => (
  <Elements stripe={stripe}>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </Elements>
);
