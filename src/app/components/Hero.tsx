

import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import React from 'react';

const Hero = ({ data }: { data: Blog }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-6 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-full">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-md">
                {/* Image Section */}
                <img
                  className="h-48 w-full object-cover object-center rounded-t-lg"
                  src={urlFor(data.image).url()}
                  alt="blog"
                />

                {/* Content Section */}
                <div className="p-6 bg-white">
                  <h1 className="title-font text-xl font-semibold text-gray-900 mb-2">
                    {data.Title}
                  </h1>
                  <p className="leading-relaxed text-sm text-gray-700 mb-4 line-clamp-3">
                    {data.Paragraph}
                  </p>
                  <div className="flex items-center">
                    <Link
                      href={`blog/${data.slug}`}
                      className="text-indigo-500 text-sm font-medium inline-flex items-center hover:underline"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-1"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
