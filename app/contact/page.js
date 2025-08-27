import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <>
      <div className="flex my-20 gap-9 justify-center items-center">

<a
          href="https://www.linkedin.com/in/prafull-dokrimare-58a1612b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-3 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
        Linkedin
        </a>
       
        <a
          href="https://github.com/Prafull044"
          target="_blank"
          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-3 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          GitHub
        </a>

        <a
          href="https://www.instagram.com/prxfull_122?igsh=MTZjdDF5dGVvZHNxNA=="
          target="_blank"
          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-3 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Instagram
        </a>
      </div>

      <div className="text-center mt-8">
        <h1 className="text-xl font-bold">Gmail:</h1>
        <p>
          <a
            href="mailto:prafulx48@gmail.com"
            className="text-blue-600 underline"
          >
            prafullx48@gmail.com
          </a>
        </p>
      </div>
    </>
  );
};

export default Page;
