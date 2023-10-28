import Link from "next/link"
import { GoSearch } from "react-icons/go"
import { useState } from "react";

const Navpage = () => {

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    if(e.target.value !== '' ){
    setInputValue(e.target.value);
  }
  };

  const handleClick = () => {
    setInputValue('')
  };
  

  return (
    <>
    <div className="flex flex-col lg:flex-row bg-white shadow-md justify-between px-5">
      <ul className=" flex flex-col p-4 px-6 text-lg font-semibold lg:flex-row lg:space-x-8 lg:px-10 bg-white">
        <li key={'1'} className="hover:text-red-700"><Link href="/" > Home</Link></li>
        <li key={'2'} className="hover:text-red-700"><Link href="/articles?category=Academics&page=1">Categories of Articles</Link></li>
        <li key={'3'} className="hover:text-red-700"><Link href="/events" > Events</Link></li>
        <li key={'4'} className="hover:text-red-700"><Link href="/about" > About Us</Link></li>
        <li key={'5'} className="hover:text-red-700"><Link href="/contact"> Contact Us</Link></li>
      </ul>
      <div className="flex items-center justify-center border-2 border-solid rounded-lg px-2 py-0 m-3">
        <input className="hidden px-3 py-1 lg:block" type='search' placeholder="search" onChange={handleChange} />
        <Link href={`/search?search=${inputValue}&page=1`} >
          <div className="px-2 hover:scale-125 lg:border-l-2" onClick={handleClick}>
            <GoSearch />
          </div>
        </Link>
      </div>
      </div>
    </>
  )
}

export default Navpage
