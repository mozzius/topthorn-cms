import React from "react";
import { ThemeProvider } from "emotion-theming";
import theme from "./src/theme";
import "./src/base.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripe = loadStripe(process.env.STRIPE_PUBLIC);

export const wrapRootElement = ({ element }) => (
  <Elements stripe={stripe}>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </Elements>
);
