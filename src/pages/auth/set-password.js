import { useEffect } from 'react';
import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import { gql, useMutation } from '@apollo/client';
import swal from 'sweetalert';
import { useRouter } from 'next/router';

import config from '../../utils/config';
import Layout from '../../components/Layout';
import SetPasswordForm from '../../components/forms/SetPasswordForm';

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
    if (data && data.contact) {
      swal('Password changed!');
    }
  }, [error, data]);

  return (
    <Layout>
      <NextSeo
        title="Set Password"
        url={`${config.siteUrl}/auth/set-password`}
      />

      <Section className="section">
        <div className="container">
          <h2 className="heading">Set a new Password</h2>
          <div className="columns is-vcentered">
            <div className="column is-12">
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
      </Section>
    </Layout>
  );
};

export default SetPassword;
