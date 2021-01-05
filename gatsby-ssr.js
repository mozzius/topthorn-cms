import React from "react";
import { ThemeProvider } from "emotion-theming";
import theme from "./src/theme";
import "./src/base.css";
import { Elements } from "@stripe/react-stripe-js";

export const wrapRootElement = ({ element }) => (
  <Elements stripe={null}>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </Elements>
);
