import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import { PiMapPinBold } from 'react-icons/pi';
import FollowUs from "../Components/FollowUs";

export const metadata ={
  title:'CONTACT US',
  alternates: {
    canonical: 'https://diurnalis.in',
  },
}

const page = () => {
  return (
    <>
      <Navbar />
      <section className='p-2'>
        <h2 className='text-lg font-bold tracking-wide p-2 md:p-4 lg:px-6 font-sans lg:text-3xl capitalize hover:underline'>Contact Us</h2>
        <iframe className=" p-8 w-[95vw]" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d486959.2047999666!2d78.384843!3d17.53762!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8e0aaf93a48b%3A0xd614e09fb5ec1d4a!2sPatrons%20Bhavan!5e0!3m2!1sen!2sus!4v1697805989499!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div className="m-4 p-4 md:p-8 border-2 border-emerald-700 rounded-xl">
          <div className="flex gap-2 items-center">
            <PiMapPinBold className="w-8 h-8" />
            <h1 className="text-2xl capitalize text-black font-bold font-sans tracking-wider">Our Location</h1>
          </div>
          <p className=" px-5 md:px-10 py-2 md:text-justify md:w-[60vw] font-medium md:text-lg">Diurnalis - The Journalism Club of VNRVJIET Third Floor. Patrons Bhavan, Hanuman Marg, Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering & Technology, Bachupally, Hyderabad Hyderabad, Telangana 500090 India</p>
        </div>
        <FollowUs/>
      </section>
      <Footer />
    </>
  )
}

export default page
