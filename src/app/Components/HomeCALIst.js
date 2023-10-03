'use client'
import { useState } from 'react';
import ArticleCard from './ArticleCard';
import Link from 'next/link';
import ArticleCard2 from './ArticleCard2';

const HomeCALIst = () => {
  const Categories = ['Academics', 'Alumni Connect', 'Campus Life', 'Career', 'Interviews', 'Sports', 'Lifestyle', 'Student Life'];
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleClick = (category) => {
    console.log(category);
    setSelectedCategory(category);
  };

  return (
    <>
      <ol className="flex flex-row flex-wrap text-sm space-x-3 p-2 cursor-pointer md:p-4 md:text-lg">
        {Categories.map((category, index) => (
          <li
            key={index}
            id={category}
            className={`${"hover:text-red-900 hover:font-medium"} ${selectedCategory === category ? "text-red-900 font-medium" : ""}`}
            onClick={() => handleClick(category)}
          >
            {category}<span className="text-black">{' I'}</span>
          </li>
        ))}
        <li
          key={Categories.length}
          className={`${"hover:text-red-900 hover:font-medium"} ${selectedCategory === 'Other' ? "text-red-900 font-medium" : ""}`}
          onClick={() => handleClick('Other')}
        >
          Other
        </li>
      </ol>
      <div className="p-2 flex flex-col lg:flex-row lg:justify-stretch">
        <div className='p-2 lg:pr-10'> <ArticleCard />
          <div className="flex justify-end lg:w-[55vw]"><Link href="#"><button className=" border px-4 py-2 rounded-lg font-serif bg-gray-500 text-slate-100 hover:bg-red-900">Read more</button></Link></div>
        </div>
        <div className='flex flex-col lg:w-[40vw] divide-y-2'>
          <div className=' lg:w-[40vw] h-40 bg-gray-500 my-6'>
            {/*its for wheather */}
          </div>
          <div className='editor choices lg:w-[40vw] h-40 bg-gray-500'>
            {/* its for editors choices */}
          </div>
          <div className='my-4'>
            <h1 className=" text-lg uppercase font-serif font-semibold hover:text-red-900 hover:underline mb-2 md:text-xl lg:text-2xl md:px-4">Hot topics</h1>
            <div className='p-2 flex flex-col items-center'> <ArticleCard2 />
              <div className="flex justify-end lg:w-[30vw]"><Link href="#"><button className="  px-4 py-2 font-mono text-red-900 hover:scale-110">Read more --{`>`}</button></Link></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCALIst;
