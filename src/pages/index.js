import groq from 'groq';
import axios from 'axios';
import { NextSeo } from 'next-seo';

import sanity from '../utils/sanity';
import Layout from '../components/Layout';

function Index(props) {
  const { degrees = [], universities = [] } = props;
  console.log('data', degrees, universities);

  const handleContact = () => {
    console.log('handleContact');
    axios
      .post('/api/contact', {
        firstName: 'Fred',
        lastName: 'Flintstone',
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
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
        <h1 className="title">Hello World</h1>
        <p className="subtitle">
          My first website with <strong>NextJs</strong>!
        </p>
        <button
          type="button"
          className="button is-light"
          onClick={handleContact}>
          Send Contact Message
        </button>
      </section>
    </Layout>
  );
}

Index.getInitialProps = async () => ({
  degrees: await sanity.fetch(groq`
    *[_type == "degree"]|order(publishedAt desc)
  `),
  universities: await sanity.fetch(groq`
    *[_type == "university"]|order(publishedAt desc)
  `),
});

export default Index;
