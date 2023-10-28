'use client'
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import about from "@/app/about/About.json"
import Lottie from "lottie-react"

const About = () => {
  return (
    <>
     <Navbar />
      <div className="flex gap-2 flex-wrap justify-center">
        <div className="hidden md:block md:w-[50vw] ">
          <Lottie animationData={about} loop={true} />
        </div>
        <div className="p-8 py-14 lg:w-[45vw]">
          <h1 className="text-2xl lg:text-4xl text-black font-sans font-bold hover:underline capitalize">About us</h1>
          <h2 className="p-2 text-xl lg:text-3xl text-gray-400 font-sans font-bold tracking-wider capitalize">Our Vision</h2>
          <p className="px-4 text-gray-500 text-justify">By the field of contemporary, Diurnalis – The Journalism Club seeks to empower and inspire students to develop their critical thinking and communication skills. The club aspires to provide a framework that values innovation, teamwork, and the free exchange of ideas so that students can hone their professional abilities and freely express themselves. Diurnalis – The Journalism Club envisions a time where students have the skills and knowledge needed to participate in informed debate and make a positive impact on society via their reporting and writing. The club’s mission is to foster a culture of ethical journalism that respects diversity, inclusivity, and social responsibility. Through its various activities and initiatives, the club aims to provide a platform for students to showcase their talents and gain practical experience in the field of journalism. It strives to create opportunities for students to interact with industry professionals, learn from their experiences, and gain insights into the ever-evolving media landscape.</p>
          <h2 className="p-2 text-xl lg:text-3xl text-gray-400 font-sans font-bold tracking-wider capitalize">Our Mission</h2>
          <p className="px-4 text-gray-500 text-justify">Diurnalis – The Journalism Club’s mission is to build a community of committed writers who are passionate about leveraging their voices to create a better society. Its mission is multifaceted and focuses on a variety of different objectives. At its core, the club aims to provide students with a platform to express themselves and develop their journalistic skills, while also promoting responsible journalism practices and encouraging critical thinking.  To create an environment that encourages students to express their ideas openly and unequivocally .  The organisation aspires to establish an environment where students may have fruitful conversations with one another and members of the larger community, as well as where they can explore significant matters and ideas from the perspective of communication.</p>
        </div>
      </div>
      <Footer /> 
    </>
  )
}

export default About
