import { NextSeo } from 'next-seo';
import { makeId } from '@zeiq/core';

import Image from 'next/image';
import Layout from '../components/Layout';

function Index() {
  const id = makeId(20);
  console.log('id', id);

  return (
    <Layout>
      <NextSeo
        title="Kickoff NextJs"
        description="A short description goes here."
      />
      <section className="section">
        <h1 className="title">Hello World!</h1>
        <p className="subtitle">
          My first website with <strong>NextJs</strong> and{' '}
          <strong>Apollo GraphQL</strong>!
        </p>
        <Image
          alt="Next.js logo"
          src="https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png"
          width={1200}
          height={400}
        />
      </section>
    </Layout>
  );
}

export default Index;
