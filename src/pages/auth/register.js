import 'twin.macro';
import { useEffect } from 'react';
import { NextSeo } from 'next-seo';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { gql, useMutation } from '@apollo/client';
import swal from 'sweetalert';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { Heading, LoginForm } from '@zeiq/web';

import config from '../../utils/config';
import Layout from '../../components/Layout';

const mutation = gql`
  mutation register($input: RegisterInput!) {
    register(input: $input) {
      jwt
      user {
        id
      }
    }
  }
`;

const Register = () => {
  const router = useRouter();
  const isLoggedIn = useStoreState((state) => state.isLoggedIn.value);
  const setIsLoggedIn = useStoreActions((actions) => actions.isLoggedIn.toggle);
  const [execute, { data, error }] = useMutation(mutation);

  useEffect(() => {
    if (error) {
      swal(error.message);
    }
    if (data && data.register) {
      Cookies.set('token', data.register.jwt);
      setIsLoggedIn(true);
    }
  }, [error, data]);

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/auth/account');
    }
  }, [isLoggedIn]);

  return (
    <Layout>
      <NextSeo title="Register" url={`${config.siteUrl}/auth/register`} />
      <section tw="text-gray-600 body-font relative">
        <div tw="container px-5 py-24 mx-auto">
          <div tw="flex flex-col text-center w-full mb-12">
            <Heading type="h1">Register</Heading>
          </div>
          <div tw="lg:w-1/2 md:w-2/3 mx-auto">
            <div tw="flex flex-wrap -m-2">
              <LoginForm
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

export default Register;
