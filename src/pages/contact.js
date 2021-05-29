import { useEffect } from 'react';
import { NextSeo } from 'next-seo';
import { gql, useMutation } from '@apollo/client';
import swal from 'sweetalert';
// import { ContactForm } from '@zeiq/web';

import config from '../utils/config';
import Layout from '../components/Layout';
import ContactForm from '../components/global/ContactForm';
import { Heading } from '../components/elements';

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

      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <Heading type="h1">Contact Us</Heading>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              We’re as accessible as your good neighbor. Feel free to give us a
              shout.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <ContactForm
                onSubmit={async (values) => {
                  await execute(values);
                }}
              />
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-indigo-500" href={`mailto:${config.email}`}>
                  📧 {config.email}
                </a>{' '}
                |{' '}
                <a className="text-indigo-500" href={`tel:${config.telephone}`}>
                  ☎️ {config.telephone}
                </a>
                <p className="leading-normal my-5">📍{config.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
