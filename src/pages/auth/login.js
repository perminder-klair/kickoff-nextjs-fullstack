import { useEffect } from 'react';
import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { gql, useMutation } from '@apollo/client';
import swal from 'sweetalert';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

import config from '../../utils/config';
import Layout from '../../components/Layout';
import LoginForm from '../../components/auth/LoginForm';

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
  mutation login($input: LoginInput!) {
    login(input: $input) {
      jwt
      user {
        id
      }
    }
  }
`;

const Login = () => {
  const router = useRouter();
  const isLoggedIn = useStoreState((state) => state.isLoggedIn.value);
  const setIsLoggedIn = useStoreActions((actions) => actions.isLoggedIn.toggle);
  const [execute, { data, error }] = useMutation(mutation);

  useEffect(() => {
    if (error) {
      swal(error.message);
    }
    if (data && data.login) {
      Cookies.set('token', data.login.jwt);
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
      <NextSeo title="Login" url={`${config.siteUrl}/auth/login`} />
      <Section className="section">
        <div className="container">
          <h2 className="heading">Login</h2>
          <div className="columns is-vcentered">
            <div className="column is-12">
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
      </Section>
    </Layout>
  );
};

export default Login;
