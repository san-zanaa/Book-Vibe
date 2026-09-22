import React from 'react';
import Image from 'next/image'
import image from '@/assets/hero_img.jpg'

const Banner = () => {
    return (
        <section className='w-[90%] mx-auto mt-10 bg-gray-100 p-10 rounded-2xl'>
          <div className='container mx-auto grid grid-cols-2 gap-3 items-center'>
            <div>
                <h1 className='text-6xl font-bold mb-8'>Books to freshen up your bookshelf</h1>
                <button className="btn btn-lg bg-[#23BE0A] hover:bg-[#1da108] text-white font-bold">View The List</button>
            </div>
            <div>
                <Image src = {image} alt=''/>
            </div>
          </div>
        </section>
    );
};

export default Banner;