import HomeCALIst from '@/app/Components/HomeCALIst'
import Link from 'next/link'
import { GoSearch } from "react-icons/go"

const HomeArticles = () => {
  return (
    <>
    <div className="line flex flex-row items-center justify-between w-[85%]">
    <Link href="#">
    <h2 className="title px-2 lg:px-4 py-2 text-base md:text-2xl font-serif font-semibold uppercase hover:underline hover:text-red-900">Categories Of Article</h2>
    </Link>
    <div className="flex items-center border-2 border-solid rounded-lg px-2 py-1">
      <input className="hidden px-3 py-1 lg:block" type='search' placeholder="search"/>
      <Link href="#">
      <div className="px-2 hover:scale-125 lg:border-l-2">
        <GoSearch/>
      </div>
      </Link>
    </div>
    </div>
    <hr className="w-[85%] h-0.5 border-0 bg-gray-300 ml-2 lg:ml-4"></hr>
    <HomeCALIst/>
    </>
  )
}

export default HomeArticles
