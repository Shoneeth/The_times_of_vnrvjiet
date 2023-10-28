'use client'
import { useState,useEffect } from "react";
import { useSearchParams,useRouter } from "next/navigation";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import underDev from "@/app/underDev.json"
import Lottie from "lottie-react"

const Search = () => {

  const Params = useSearchParams()
  const router = useRouter()

  const searchParam = Params.get('search')
  const pageParam = Params.get('page')

  const [inputValue, setInputValue] = useState(searchParam);
  const [currPage, setCurrPage] = useState(1)

  useEffect(
    ()=>{
      setInputValue(searchParam)
    }
  ,[searchParam])

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = (search) => {
    router.push(`/search?search=${search}&page=1`)
    setInputValue(search);
  }
  
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <> 
    <Navbar/>
    <div className="p-6">
      <form  onSubmit={handleSubmit}>
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search Titles, Authors..."  onChange={handleChange} value={inputValue} required/>
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-rose-500 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-4 py-2 " onClick={()=>handleClick(inputValue)}>Search</button>
        </div>
      </form>
      </div>
      <div className="flex justify-center">
      <Lottie animationData={underDev} loop={true} />
      </div>
      <Footer/>
    </>
  )
}

export default Search
