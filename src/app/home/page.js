import CarouselComponent from "@/app/Components/CarouselComponent"
import Latest from "../Components/Latest"
import Weather from "../Components/Weather"
import TopStories from "../Components/TopStories"
import HotTopics from "../Components/HotTopics"
import Category from "../Components/Category"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

const Home = () => {


  return (
    <>
      <Navbar/>
      <CarouselComponent />
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col justify-center">
          <Latest/>
          <HotTopics/>
        </div>
        <div className="flex flex-col">
          <Weather />
          <TopStories />
        </div>
      </div>
      <Category/>
      <Footer/>
    </>
  )
}

export default Home
