



import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
    <div className='sm:w-[90%] w-ful px-5 sm:px-0 mx-auto'>
        <div className="my-10 bg-[#F3F4F8] p-5 shadow-md">

        <nav className="flex items-center justify-between text-xl ">

        

        <div className="flex justify-start items-center">

        <Link href="/" className="text-3xl  sm:mr-20 font-bold"><span className='text-blue-500'>Sky</span>Book CMS</Link>
        <Link href="/" className='hover:text-blue-500 hidden sm:block p-4'>Books</Link>
        <Link  href ="/" className='hover:text-blue-500 hidden sm:block p-4'>Categories</Link>
        </div>

       
       
            <Link href="/" className=''>
            <Image
            src={"/images/akash.jpg"}
            width={40}
            height={40}
            alt="profile image"
            className="rounded-full border-2 hover:border-blue-500" />
            </Link>
       
         
        
        
        </nav>


        </div>
            


       

       
    

   

</div>
        
    );
};

export default Navbar;
