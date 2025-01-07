// import React from 'react'
// import Hero from './components/Hero'
// import { client } from '@/sanity/lib/client'



// const Homepage = async () => {
//   const query = `*[_type == 'blog'] | order(_updateAt asc){
//   Title,Paragraph,image,
//   "slug":slug.current
//   }`

//   const data:Blog[] = await client.fetch(query)
//   // console.log(data)

//   return (

//     <div >

//       { data.map((data:Blog)=>(
//           <Hero data={data} key={data.slug}/>
//       )

//       )}
        
//     </div>
//   )
// }

// export default Homepage;

import React from 'react';
import Hero from './components/Hero';
import { client } from '@/sanity/lib/client';

const Homepage = async () => {
  const query = `*[_type == 'blog'] | order(_updatedAt asc){
    Title, Paragraph, image,
    "slug": slug.current
  }`;

  const data: Blog[] = await client.fetch(query);

  return (
    <div className="flex overflow-x-auto space-x-6 p-6 scrollbar-hide">
      {data.map((data: Blog) => (
        <div
          key={data.slug}
          className="flex-shrink-0 w-[350px] h-[500px] border rounded-lg shadow-lg overflow-hidden bg-gray-800"
        >
          <Hero data={data} />
        </div>
      ))}
    </div>
  );
};

export default Homepage;
