import React from 'react';
import Form from '../components/Form';
import Layout, { Panel } from '../components/Layout';

const EHVForm = () => {
  return (
    <Layout>
      <Panel>
        <h1>EHV Form</h1>
        <p>You must submit this form before visiting Topthorn.</p>
        <Form />
      </Panel>
    </Layout>
  );
};

export default EHVForm;
