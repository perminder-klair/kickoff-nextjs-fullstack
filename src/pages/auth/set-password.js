import { useEffect } from 'react';
import { NextSeo } from 'next-seo';
import { gql, useMutation } from '@apollo/client';
import swal from 'sweetalert';
import { useRouter } from 'next/router';

import config from '../../utils/config';
import Layout from '../../components/Layout';
import SetPasswordForm from '../../components/auth/SetPasswordForm';
import { Heading } from '../../components/elements';

const mutation = gql`
  mutation setNewPassword($input: SetNewPassword!) {
    setNewPassword(input: $input) {
      success
    }
  }
`;

const SetPassword = () => {
  const router = useRouter();
  const [execute, { data, error }] = useMutation(mutation);
  const { token } = router.query;

  useEffect(() => {
    if (error) {
      swal(error.message);
    }
    if (data && data.setNewPassword) {
      swal('Password changed!');
    }
  }, [error, data]);

  return (
    <Layout>
      <NextSeo
        title="Set Password"
        url={`${config.siteUrl}/auth/set-password`}
      />
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <Heading type="h1">Set a new Password</Heading>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <SetPasswordForm
                onSubmit={async (values) => {
                  await execute({
                    variables: {
                      input: {
                        token,
                        ...values,
                      },
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

export default SetPassword;
