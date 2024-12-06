'use client'
import planning from "@/app/planning.json"
// import planning from "https://drive.google.com/file/d/1ONbDGRJmzdSGxS3hvdrR1zgbNVKptZhJ/view"
import Lottie from "lottie-react"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"


const Events = () => {
  return (
    <>
      <Navbar/>
      <h1 className="p-4 text-2xl font-semibold">Events</h1>
      <div className="flex justify-center p-4">
      <Lottie animationData={planning} loop={true} />
      </div>
      <Footer/>
    </>
  )
}

export default Events
