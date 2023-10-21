import Footer from "@/app/Components/Footer"
import Navbar from "@/app/Components/Navbar"
import { doc } from "./doc"
const page = () => {
  return (
    <>
    <Navbar/>
    <h1 className="text-2xl uppercase font-semibold p-5">disclaimer</h1>
      <div className="p-5" dangerouslySetInnerHTML={{__html:`${doc}`}}>
      </div>
      <Footer/>
    </>
  )
}

export default page
