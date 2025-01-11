


import React from 'react';
import Hero from './components/Hero';
import { client } from '@/sanity/lib/client';

const Homepage = async () => {
  const query = `*[_type == 'blog'] | order(_updatedAt asc){
    Title, Paragraph, image,
    "slug": slug.current
  }`;

  const data: Blog[] = await client.fetch(query);

  if (!data || data.length === 0) {
    return <p className="text-center text-gray-600">No blogs available.</p>;
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt={data[0]?.Title || "hero"}
            src={data[0]?.image || "/images/blogbac.jpg"}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {data[0]?.Title || "Welcome to My Blog"}
          </h1>
          <p className="mb-8 leading-relaxed">
            {data[0]?.Paragraph || "Explore amazing content and ideas!"}
          </p>
          
        </div>
      </div>

      <div className="flex overflow-x-auto space-x-6 p-6 scrollbar-hide">
        {data.map((blog: Blog) => (
          <div
            key={blog.slug}
            className="flex-shrink-0 w-[350px] h-[500px] border rounded-lg shadow-lg overflow-hidden bg-gray-800"
          >
            <Hero data={blog} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Homepage;





// import React from 'react';
// import Hero from './components/Hero';
// import { client } from '@/sanity/lib/client';
// import imageUrlBuilder from '@sanity/image-url';
// import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// const builder = imageUrlBuilder(client);

// function urlFor(source: SanityImageSource) {
//   return builder.image(source);
// }

// const Homepage = async () => {
//   const query = `*[_type == 'blog'] | order(_updatedAt asc){
//     Title, Paragraph, image,
//     "slug": slug.current
//   }`;

//   const data: Blog[] = await client.fetch(query);

//   if (!data || data.length === 0) {
//     return <p className="text-center text-gray-600">No blogs available.</p>;
//   }

//   return (
//     <section className="text-gray-600 body-font">
//       <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//         <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
//           <img
//             className="object-cover object-center rounded"
//             alt={data[0]?.Title || 'hero'}
//             src={
//               data[0]?.image
//                 ? urlFor(data[0]?.image).url()
//                 : '/images/blogbac.jpg'
//             }
//           />
//         </div>
//         <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
//           <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
//             {data[0]?.Title || 'Welcome to My Blog'}
//           </h1>
//           <p className="mb-8 leading-relaxed">
//             {data[0]?.Paragraph || 'Explore amazing content and ideas!'}
//           </p>
          
//         </div>
//       </div>

//       <div className="flex overflow-x-auto space-x-6 p-6 scrollbar-hide">
//         {data.map((blog: Blog) => (
//           <div
//             key={blog.slug}
//             className="flex-shrink-0 w-[350px] h-[500px] border rounded-lg shadow-lg overflow-hidden bg-gray-800"
//           >
//             <Hero data={blog} />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Homepage;


