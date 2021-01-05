import React from "react";
import Layout, { Panel } from "../components/Layout";
import BigLink from "../components/BigLink";

const Success = () => {
  return (
    <Layout>
      <Panel>
        <h1>Uh oh</h1>
        <p>Something went wrong with your order</p>
        <BigLink to="/">Return home</BigLink>
      </Panel>
    </Layout>
  );
};

export default Success;
