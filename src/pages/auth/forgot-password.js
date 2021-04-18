import { useEffect } from 'react';
import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import { gql, useMutation } from '@apollo/client';
import swal from 'sweetalert';

import config from '../../utils/config';
import Layout from '../../components/Layout';
import ForgotPasswordForm from '../../components/forms/ForgotPasswordForm';

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
  mutation forgotPassword($input: ForgotPasswordInput!) {
    forgotPassword(input: $input) {
      success
    }
  }
`;

const ForgotPassword = () => {
  const [execute, { data, error }] = useMutation(mutation);

  useEffect(() => {
    if (error) {
      swal(error.message);
    }
    if (data && data.contact) {
      swal('Password changed!');
    }
  }, [error, data]);

  return (
    <Layout>
      <NextSeo
        title="Forgot Password"
        url={`${config.siteUrl}/auth/set-password`}
      />

      <Section className="section">
        <div className="container">
          <h2 className="heading">Forgot Password</h2>
          <div className="columns is-vcentered">
            <div className="column is-12">
              <ForgotPasswordForm
                onSubmit={async (values) => {
                  await execute({
                    variables: {
                      input: values,
                    },
                  });
                }}
              />
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default ForgotPassword;
