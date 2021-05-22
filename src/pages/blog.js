import React from 'react';
import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import { gql } from '@apollo/client';

import config from '../utils/config';
import Layout from '../components/Layout';
import NewsItem from '../components/blog/PostItem';
import { apolloQuerySsr } from '../utils/apolloClient';

const Container = styled.div`
  margin-top: 4rem;
  margin-bottom: 6rem;
`;

const query = gql`
  query allPosts {
    allPosts {
      id
      title
      slug
      createdAt
    }
  }
`;

const Blog = ({ posts }) => {
  return (
    <Layout>
      <NextSeo
        title="Blog"
        description={`Get in touch with us at ${config.siteName}`}
        url={`${config.siteUrl}/blog`}
      />
      <section className="section">
        <Container className="container">
          <h2 className="title is-2 has-text-centered has-text-weight-bold">
            News & Updates
          </h2>
          <div className="columns is-centered">
            <div className="column is-four-fifths">
              {posts.map((post) => (
                <NewsItem key={post.id} post={post} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Blog;

export async function getServerSideProps(ctx) {
  const data = await apolloQuerySsr({ ctx, query, skipRedirect: true });
  // console.log('apollo data', data);

  return {
    props: {
      posts: data.allPosts || [],
    },
  };
}
