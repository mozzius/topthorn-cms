import React from "react";

import Layout, { Panel } from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

// const FullWidthImageContainer = styled.div`
//   width: 100vw;
//   height: 400px;
//   position: relative;
//   left: 50%;
//   right: 50%;
//   margin: 0 -50vw 2em;
//   background-size: cover;
//   background-position: bottom;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-image: url("${({ image }) => image}");
// `;

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Panel>
          <BlogRoll />
        </Panel>
      </Layout>
    );
  }
}
