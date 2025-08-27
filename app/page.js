import Image from "next/image";
import React from "react";
import Link from "next/link";


export default function Home() {
  return (

    
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="0 flex flex-col gap-4 items-center justify-center px-12">
          <p className="font-bold text-emerald-900 text-2xl">
            The best URL shortener in the Market
          </p>

          <p className="">
            Linkify is your ultimate solution for transforming long, messy
            links into sleek, shareable short URLs within seconds. Whether
            a business, creator, or individual, our platform ensures
            speed, security, and simplicity.
          </p>


          <div className='gap-3 items-center'>
            <Link href="/shorten"> <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-3 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Try Now</button></Link>

          </div>
        </div>

        <div className="flex justify-start relative ">
          <Image className="mix-blend-darken" alt="an Image of a vector" src={"/p2.jpg"} fill={true} />
        </div>
      </section>
    </main >
  );
}
