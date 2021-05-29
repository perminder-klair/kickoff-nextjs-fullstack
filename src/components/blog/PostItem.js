import React from 'react';
import dayjs from 'dayjs';
import Link from 'next/link';
import Image from 'next/image';

const PostItem = ({ post }) => (
  <div className="p-4 md:w-1/3">
    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <Image
        className="lg:h-48 md:h-36 w-full object-cover object-center"
        src="https://dummyimage.com/722x402"
        alt="blog"
        width={722}
        height={402}
      />
      <div className="p-6">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
          {dayjs(post.createdAt).format('MMMM YYYY')}
        </h2>
        <Link href={`/post/${post.slug}`}>
          <a>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {post.title}
            </h1>
          </a>
        </Link>
        <p className="leading-relaxed mb-3">Read article...</p>
      </div>
    </div>
  </div>
);

export default PostItem;
