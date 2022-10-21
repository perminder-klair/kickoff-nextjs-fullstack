import 'twin.macro';
import { NextSeo } from 'next-seo';
import { gql } from '@apollo/client';
import { Heading } from '@zeiq/web';

import config from '../utils/config';
import Layout from '../components/Layout';
import NewsItem from '../components/blog/PostItem';
import { apolloQuerySsr } from '../utils/apolloClient';

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

const Blog = ({ posts }) => (
  <Layout>
    <NextSeo
      title="Blog"
      description={`Get in touch with us at ${config.siteName}`}
      url={`${config.siteUrl}/blog`}
    />
    <section tw="text-gray-600">
      <div tw="container px-5 py-24 mx-auto">
        <div tw="flex flex-col text-center w-full mb-12">
          <Heading type="h1">News & Updates</Heading>
        </div>
        <div tw="flex flex-wrap -m-4">
          {posts.map((post) => (
            <NewsItem key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;

export async function getServerSideProps(ctx) {
  const data = await apolloQuerySsr({ ctx, query, isPrivate: false });
  // console.log('apollo data', data);

  return {
    props: {
      posts: data.allPosts || [],
    },
  };
}
