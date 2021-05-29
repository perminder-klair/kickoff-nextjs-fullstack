import { useEffect } from 'react';
import { NextSeo } from 'next-seo';
import { gql, useMutation } from '@apollo/client';
import swal from 'sweetalert';
import { Heading, ForgotPasswordForm } from '@zeiq/web';

import config from '../../utils/config';
import Layout from '../../components/Layout';

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
    if (data && data.forgotPassword) {
      swal('Password changed!');
    }
  }, [error, data]);

  return (
    <Layout>
      <NextSeo
        title="Forgot Password"
        url={`${config.siteUrl}/auth/set-password`}
      />
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <Heading type="h1">Forgot Password</Heading>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
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
      </section>
    </Layout>
  );
};

export default ForgotPassword;
