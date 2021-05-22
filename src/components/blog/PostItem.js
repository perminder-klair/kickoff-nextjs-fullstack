import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import Link from 'next/link';

const Container = styled.article`
  && {
    border-top: none;
    margin-top: 2.3rem;
    .title {
      margin-top: 0.6rem;
      margin-bottom: 0.5rem;
    }
    a {
      color: ${(props) => props.theme.darkAccent};
    }
  }
`;

const PostItem = ({ post }) => (
  <Container className="media">
    <div className="media-content">
      <div className="content">
        <span className="has-text-weight-bold is-uppercase">
          {dayjs(post.createdAt).format('MMMM YYYY')}
        </span>
        <Link href={`/post/${post.slug}`}>
          <a>
            <h3 className="title is-3 has-text-weight-bold">{post.title}</h3>
          </a>
        </Link>
      </div>
      <nav className="level is-mobile">
        <div className="level-left">
          <Link href={`/post/${post.slug}`}>
            <a className="level-item">Read</a>
          </Link>
        </div>
      </nav>
    </div>
  </Container>
);

export default PostItem;
