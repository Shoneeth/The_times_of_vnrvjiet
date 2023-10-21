'use client'
import Footer from '@/app/Components/Footer'
import Navbar from '@/app/Components/Navbar'
import { useSearchParams } from 'next/navigation'
import { useSelector } from 'react-redux'
import { BiCalendar } from "react-icons/bi";
import Image from 'next/image'
import Link from 'next/link'
import FollowUs from '@/app/Components/FollowUs'

const page = () => {

  const Params = useSearchParams()
  // const pathname = usePathname()
  const titleParam = Params.get('title')
  const currArticle = useSelector((data)=>data.article)

  // console.log(currArticle);

  const handleFormSubmit = async (e) => {  
    e.preventDefault()
    const formEle = document.querySelector("form");
    const formData = new FormData(formEle);
    
    const scriptURL = "https://script.google.com/macros/s/AKfycbwwYGI5A7j2YUuUFNNyiNp5AbTcUmsTm5sQZ9AKEaOX_QKDcMC2YlpDbO4HLLbGN2fOnw/exec"

    try{
    const response = await fetch(scriptURL, {
      method: 'POST',
      body: formData
    });
    
    if (response.status === 200) {
      // The form data was submitted successfully.
      alert('Your feedback was submitted successfully')
      window.location.reload()
    } else {
      // An error occurred while submitting the form data.
      alert('An error occurred while submitting the feedback,please try again later')
      window.location.reload()
    }
  }
  catch{
    alert('An error occurred while submitting the feedback,please try again later')
      window.location.reload()
  }
  }





  return (
    <>
      <Navbar/>
      <div className="flex flex-wrap">
      <div className="bg-white border shadow-lg m-4 md:m-10 lg:ml-16 lg:mt-16 p-6 lg:w-[60vw]">
        <h1 className="text-lg md:text-3xl text-black font-bold font-sans md:tracking-wider uppercase hover:underline text-justify">{currArticle.currarticle.title}</h1>
        <div className="flex items-center text-gray-500 gap-2 px-4 pt-2 text-sm font-medium"><BiCalendar/><p>{currArticle.currarticle.date}</p></div>
        <div className="flex items-center justify-between text-sm font-sans font-medium capitalize text-gray-500">
          <p className="px-4 py-3">by: {currArticle.currarticle.author}</p>
          <p className="px-4 py-3">Editor: {currArticle.currarticle.uploadedBy}</p>
        </div>
        <div className="flex flex-col text-xs text-gray-400 capitalize text-center py-4">
        <div className="overflow-hidden">
          <Image src={currArticle.currarticle.imgMainURL}
          width={1500}
          height={1500}
          alt={currArticle.currarticle.imgSmURL}
          className='object-cover'
          />
        </div>
          {`${currArticle.currarticle.imgSmURL} | Photo credits: ${currArticle.currarticle.imgCredits}`}
        </div>
        <div className="px-4 py-2 md:px-8 md:py-4 text-justify text-base md:text-lg" dangerouslySetInnerHTML={{__html:`${currArticle.currarticle.feedback}`}}>
        </div>
        <div className="text-end"><Link href="/articles"><button className="px-4 py-2 font-mono text-red-900 hover:scale-105"> More Articles --{`>`}</button></Link></div>
      </div>
      <div className="w-full lg:my-14 lg:w-[30vw]">
        <FollowUs/>
      </div>
      </div>
      <div className="feedback p-10 bg-gray-100">
        <form className="flex flex-col gap-3 items-center" method="POST" action="" name="feedback_form" onSubmit={handleFormSubmit}>
          <h1 className=" text-2xl md:text-3xl font-bold uppercase hover:underline font-serif tracking-wider">feedback</h1>
          <p className="text-xs p-2 text-sans md:text-base font-medium text-justify">we are looking forward for your feedback and suggestions feel free to post here.</p>
          <input className='hidden' name='timestamp' value={`${new Date()}`} readOnly></input>
          <input className='hidden' name='title' value={titleParam} readOnly></input>
          <input className="border-2 p-2 w-[75vw]  md:p-4 md:w-[50vw]" name="name" type="text" placeholder="your name" maxLength={40} required></input>
          <input className="border-2 p-2 w-[75vw]  md:p-4 md:w-[50vw]" name="email" type="email" placeholder="your email" maxLength={40} required></input>
          <textarea className="border-2 p-2 w-[75vw] h-[40vw] md:p-4 md:w-[50vw] md:h-[15vw]" name="feedback" placeholder="Help us to improve!!" maxLength={500}></textarea>
          <button className="p-4 bg-gray-500 text-white capitalize font-medium hover:bg-gray-800" type="submit">Send your feedback</button>
        </form>
      </div>
      <Footer/>
    </>
  )
}

export default page
