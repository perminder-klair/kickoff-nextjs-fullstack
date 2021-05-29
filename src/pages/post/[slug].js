import React from 'react';
import { NextSeo } from 'next-seo';
import { gql } from '@apollo/client';
import ReactMarkdown from 'react-markdown';

import config from '../../utils/config';
import LayoutMdx from '../../components/LayoutMdx';
import { apolloQuerySsr } from '../../utils/apolloClient';
import { Heading } from '../../components/elements';

const query = gql`
  query singlePost($slug: String!) {
    singlePost(slug: $slug) {
      id
      title
      slug
      body
      createdAt
    }
  }
`;

export default function BlogPost({ post }) {
  return (
    <LayoutMdx>
      <NextSeo
        title={post.title}
        description={`Get in touch with us at ${config.siteName}`}
        url={`${config.siteUrl}/post/${post.slug}`}
      />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <Heading type="h1">{post.title}</Heading>
          <ReactMarkdown>{post.body}</ReactMarkdown>
        </div>
      </section>
    </LayoutMdx>
  );
}

export async function getServerSideProps(ctx) {
  const data = await apolloQuerySsr({
    ctx,
    query,
    variables: { slug: ctx.params.slug },
    isPrivate: false,
  });
  // console.log('apollo data', data);

  return {
    props: {
      post: data.singlePost,
    },
  };
}
