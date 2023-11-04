import Footer from "@/app/Components/Footer"
import Navbar from "@/app/Components/Navbar"
import { doc } from "./doc"

export const metadata ={
  title:'ACCEPTABLE USE POLICY',
  alternates: {
    canonical: 'https://diurnalis.in',
  },
}

const page = () => {
  return (
    <>
    <Navbar/>
    <h1 className="text-2xl uppercase font-semibold p-5">Acceptable use policy</h1>
      <div className="p-5" dangerouslySetInnerHTML={{__html:`${doc}`}}>
      </div>
      <Footer/>
    </>
  )
}

export default page
