import { useEffect } from 'react';
import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import { gql, useMutation } from '@apollo/client';
import swal from 'sweetalert';

import config from '../utils/config';
import Layout from '../components/Layout';
import ContactForm from '../components/global/ContactForm';

const Section = styled.section`
  p {
    margin-bottom: 1rem;
  }
  .image {
    width: 500px;
    height: auto;
    margin: 0 auto;
    object-position: center;
  }
  .button {
    margin-top: 2rem;
  }
`;

const mutation = gql`
  mutation contact($input: ContactInput!) {
    contact(input: $input) {
      success
    }
  }
`;

const ContactPage = () => {
  const [execute, { data, error }] = useMutation(mutation);

  useEffect(() => {
    if (error) {
      swal(error.message);
    }
    if (data && data.contact) {
      swal('Message sent!');
    }
  }, [error, data]);

  return (
    <Layout>
      <NextSeo
        title="Contact Us"
        description={`Get in touch with us at ${config.siteName}`}
        url={`${config.siteUrl}/contact`}
      />

      <Section className="section">
        <div className="container">
          <h2 className="heading">Contact Us</h2>
          <div className="columns is-vcentered">
            <div className="column is-6">
              <p>
                We’re as accessible as your good neighbour. Feel free
                <br />
                to give us a shout.
              </p>
              <p className="is-4">
                <span role="img" aria-label="e-mail">
                  📧
                </span>{' '}
                <a href={`mailto:${config.email}`}>{config.email}</a>
              </p>
              <p>
                <span role="img" aria-label="telephone">
                  ☎️
                </span>{' '}
                <a href={`tel:${config.telephone}`}>{config.telephone}</a>
              </p>
              <p>
                <span role="img" aria-label="Round Pushpin">
                  📍
                </span>{' '}
                {config.address}
              </p>
              <p className="control">
                <a
                  type="submit"
                  className="button is-secondary is-medium"
                  href={`mailto:${config.email}`}
                >
                  Get in touch
                </a>
              </p>
            </div>
            <div className="column is-6">
              <ContactForm
                onSubmit={async (values) => {
                  await execute({ variables: { input: values } });
                }}
              />
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default ContactPage;
