// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
//               app/page.js
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
      
//     </div>
//   );
// }

"use client"
import { Button } from "@/components/ui/button"
import Typed from 'typed.js';
import React, {useRef, useEffect} from 'react';
import "./globals.css"
export default function Home() {
    // Create reference to store the DOM element containing the animation
    const el = useRef(null);
   
    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Coding', 'Web Development', 'Software Engineering', 'Data Science', 'Machine Learning'],
        typeSpeed: 50,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []); 

  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free repository</span> for community <br className="hidden lg:block" /> components using <span className="font-semibold underline decoration-primary"><span ref={el} /></span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to <br className="hidden lg:block" /> bootstrap your new apps, projects or landing sites!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
             
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" />
        </div>
      </section>

<section className="py-12 bg-gray-100 dark:bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Pricing Plans</h2>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Choose the plan that suits you best</p>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Basic Plan */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Basic</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-300">$10/month</p>
          <ul className="mt-6 mb-6 space-y-4">
            <li className="text-gray-600 dark:text-gray-400"><s>10GB Storage</s></li>
            <li className="text-gray-600 dark:text-gray-400"><s>Basic Support</s></li>
            <li className="text-gray-600 dark:text-gray-400"><s>Single User</s></li>
            <li className="text-gray-600 dark:text-gray-400">Community Access</li>
            <li className="text-gray-600 dark:text-gray-400">Weekly Updates</li>
          </ul>
          <Button className="mx-1" variant="outline">Choose Plan</Button>
        </div>
      </div>
      {/* Standard Plan */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border-2 border-purple-500">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Standard</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-300">$20/month</p>
          <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">Bestseller</span>
          <ul className="mt-6 mb-6 space-y-4">
            <li className="text-gray-600 dark:text-gray-400">50GB Storage</li>
            <li className="text-gray-600 dark:text-gray-400">Priority Support</li>
            <li className="text-gray-600 dark:text-gray-400">Up to 5 Users</li>
            <li className="text-gray-600 dark:text-gray-400">Community Access</li>
            <li className="text-gray-600 dark:text-gray-400">Daily Updates</li>
          </ul>
          <Button className="mx-1" variant="outline">Choose Plan</Button>
        </div>
      </div>
      {/* Premium Plan */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Premium</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-300">$30/month</p>
          <ul className="mt-6 mb-6 space-y-4">
            <li className="text-gray-600 dark:text-gray-400">200GB Storage</li>
            <li className="text-gray-600 dark:text-gray-400">24/7 Support</li>
            <li className="text-gray-600 dark:text-gray-400">Unlimited Users</li>
            <li className="text-gray-600 dark:text-gray-400">Community Access</li>
            <li className="text-gray-600 dark:text-gray-400">Real-time Updates</li>
          </ul>
          <Button className="mx-1" variant="outline">Choose Plan</Button>
        </div>
      </div>
    </div>
  </div>
</section>



 <section className="py-12 bg-white dark:bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">What Our Clients Say</h2>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Hear from our satisfied customers</p>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Testimonial 1 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
        <p className="text-gray-600 dark:text-gray-400">&quot;This service has been a game-changer for our business. Highly recommend!&quot;</p>          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">John Doe</h3>
          <p className="text-gray-500 dark:text-gray-300">CEO, Company A</p>
        </div>
      </div>
      {/* Testimonial 2 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
        <p className="text-gray-600 dark:text-gray-400">&quot;Amazing experience! The team was professional and the results were outstanding.&quot;</p>          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Jane Smith</h3>
          <p className="text-gray-500 dark:text-gray-300">Marketing Director, Company B</p>
        </div>
      </div>
      {/* Testimonial 3 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
        <p className="text-gray-600 dark:text-gray-400">&quot;Exceptional service and support. We couldn&apos;t be happier with the results.&quot;</p>          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Michael Brown</h3>
          <p className="text-gray-500 dark:text-gray-300">CTO, Company C</p>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="py-12 bg-gray-100 dark:bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Top Blogs</h2>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Check out our most popular blog posts</p>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Blog 1 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
          <img src="https://images.pexels.com/photos/115655/pexels-photo-115655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Blog 1" className="w-full h-64 object-cover rounded-t-lg"/>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Post Title 1</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog post goes here. It should be engaging and informative.</p>
            <Button className="m-2" variant="outline" href="/blog-post-1">Read More</Button>
          </div>
        </div>
      </div>
      {/* Blog 2 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
          <img src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Blog 2" className="w-full h-64 object-cover rounded-t-lg"/>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Post Title 2</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog post goes here. It should be engaging and informative.</p>
            <Button className="m-2" variant="outline" href="/blog-post-2">Read More</Button>
          </div>
        </div>
      </div>
      {/* Blog 3 */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
          <img src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg" alt="Blog 3" className="w-full h-64 object-cover rounded-t-lg"/>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Post Title 3</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog post goes here. It should be engaging and informative.</p>
            <Button className="m-2" variant="outline" href="/blog-post-3">Read More</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </main>
  );
};







