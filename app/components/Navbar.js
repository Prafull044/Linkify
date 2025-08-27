import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <nav className='h-15 px-3 bg-purple-700 flex justify-between items-center text-white'>
        <div className='logo font-bold text-lg  '>
          <Link href="/">Linkify</Link>
        </div>
        <ul className='flex justify-center items-center gap-4'>
          <Link href="/"><li>Home</li></Link>
          <Link href="/about"><li>About</li></Link>
          <Link href="/shorten"><li>Shorten</li></Link>
          <Link href="/contact"><li>Contact Us</li></Link>
          <li className='flex gap-3 items-center'>
            <Link href="/shorten"><button className='bg-purple-500 rounded-3xl shadow-lg p-3 py-2 font-bold hover:bg-purple-600'>Try Now</button></Link>
      
          </li>

        </ul>
      </nav>
    </div>
  )
}

export default Navbar
