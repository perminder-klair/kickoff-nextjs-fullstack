import axios from 'axios';
import { NextSeo } from 'next-seo';

import Layout from '../components/Layout';

function Index() {
  const handleContact = () => {
    console.log('handleContact');
    axios
      .post('/api/contact', {
        firstName: 'Fred',
        lastName: 'Flintstone',
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout>
      <NextSeo
        title="Kickoff NextJs"
        description="A short description goes here."
      />
      <section className="section">
        <h1 className="title">Hello World!!</h1>
        <p className="subtitle">
          My first website with <strong>NextJs</strong>!
        </p>
        <button
          type="button"
          className="button is-light"
          onClick={handleContact}
        >
          Send Contact Message
        </button>
      </section>
    </Layout>
  );
}

export default Index;
