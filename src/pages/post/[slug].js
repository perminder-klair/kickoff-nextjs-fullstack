import React from 'react';
import { NextSeo } from 'next-seo';
import { gql } from '@apollo/client';
import ReactMarkdown from 'react-markdown';

import config from '../../utils/config';
import LayoutMdx from '../../components/LayoutMdx';
import { apolloQuerySsr } from '../../utils/apolloClient';

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
      <div className="page-content">
        <h1 className="title is-1 has-text-centered has-text-weight-bold">
          {post.title}
        </h1>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </div>
    </LayoutMdx>
  );
}

export async function getServerSideProps(ctx) {
  const data = await apolloQuerySsr({
    ctx,
    query,
    variables: { slug: ctx.params.slug },
    skipRedirect: true,
  });
  // console.log('apollo data', data);

  return {
    props: {
      post: data.singlePost,
    },
  };
}
