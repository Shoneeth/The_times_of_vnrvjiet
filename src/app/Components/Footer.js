'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CgArrowUpO } from "react-icons/cg"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6"
import { BiLogoGmail,BiLink } from "react-icons/bi"

const Footer = () => {
      const [date, setDate] = useState(new Date())
      const [submit, setSubmit] = useState(false)
      const formattedDate = date.toLocaleDateString("en-GB");
      useEffect(() => {
            const updateDate = () => {
                  setDate(new Date());
            };
            setInterval(updateDate, 1000); // Update the date every second
            return () => {
                  clearInterval(updateDate); // Cleanup the interval when the component unmounts
            };
      });


      const handleSubmit = async (e) => {  
            e.preventDefault()
            const formEle = document.querySelector("form");
            const formData = new FormData(formEle);
            
            const scriptURL = "https://script.google.com/macros/s/AKfycbz_xgjHKihoOvgpOCL2qF5IoCjgft0cNIXNbJiO-K3bAYZMYo747fu9OyLfNFPPlx_4ig/exec"
        
            try{
            const response = await fetch(scriptURL, {
              method: 'POST',
              body: formData
            });
            
            if (response.status === 200) {
              // The form data was submitted successfully.
              setSubmit(true)
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
        

      const handleScrollUp = ()=> {
            window.scrollTo({
                  top:0,
                  left:0,
                  behavior:"smooth"
            });
      }

      return (
            <>
                  <footer className="foot bg-[#111111] text-slate-50 tracking-wider font-sans">
                        <div className="flex flex-row justify-end">
                              <div className="date p-2 py-4 font-mono font-light">
                                    Date:{formattedDate}
                              </div>
                              <div className="upscroll p-2 py-4 hover:scale-110">
                                    <CgArrowUpO className="w-6 h-6" onClick={handleScrollUp}/>
                              </div>
                        </div>
                        <div className="flex flex-col items-center lg:flex-row lg:justify-around lg:items-start">
                              <div className="logo my-4 w-16 h-16 self-center lg:w-36 lg:h-36 lg:self-start lg:pl-8">
                                    <Image
                                          src="/Footerimages/TJC.png"
                                          width={500}
                                          height={500}
                                          alt="logo"
                                    />
                              </div>
                              <div className="context p-2 lg:w-96 lg:p-4">
                                    <h1 className="font-serif text-xl pb-2 text-center lg:text-2xl lg:font-medium"> THE TIMES OF VNRVJIET </h1>
                                    <p className="font-serif text-sm px-4 text-justify sm:px-40 md:px-52 lg:px-4 lg:text-lg lg:font-normal text-slate-200">The Journalism Club seeks to empower and inspire students to develop their critical thinking and communication skills.</p>
                              </div>
                              <div className="impLinks p-4 pb-4 font-sans self-center text-center lg:w-80 lg:self-start lg:pl-16">
                                    <h1 className="text-2xl pb-2 lg:font-medium lg:flex lg:pb-4">Important Links</h1>
                                    <ul className="Links text-xs space-y-2 lg:text-base lg:space-y-4 lg:flex lg:flex-col lg:items-start text-slate-200">
                                          <li key={'11'} className="hover:underline hover:ease-in-out"><Link href="/about">About Us</Link></li>
                                          <li key={'21'} className="hover:underline hover:ease-in-out"><Link href="/terms/acceptableUsePolicy">Acceptable Use Policy</Link></li>
                                          <li key={'41'} className="hover:underline hover:ease-in-out"><Link href="/terms/disclaimer">DISCLAIMER</Link></li>
                                          <li key={'51'} className="hover:underline hover:ease-in-out"><Link href="/terms/privacynotice">PRIVACY NOTICE</Link></li>
                                          <li key={'61'} className="hover:underline hover:ease-in-out"><Link href="/terms/termsofuse">TERMS OF USE</Link></li>
                                    </ul>
                              </div>
                              <div className="newsLetter font-sans p-8 w-[90vw] lg:w-96 lg:p-4">
                                    <h1 className="text-2xl font-semibold text-center py-4 lg:py-0 lg:pb-4">Subscribe For Newsletter</h1>
                                    <form className="NL text-black bg-white rounded-2xl p-4 lg:p-8" method="POST" action="" name="newsletter_form" onSubmit={handleSubmit}>
                                          <h1 className="text-center font-bold text-xl pb-4">Join The Newsletter</h1>
                                          <p className="text-center px-4 pb-4 text-md text-gray-500">You Will Receive The Latest News And Updates On Your Favorite</p>
                                          {submit ? <div className="thanks text-center text-green-600 font-semibold py-6">Thank you for Subscribing...</div> :
                                                <div className="flex flex-col p-4">
                                                      <input className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-auto rounded-md md:text-base focus:ring-1" type='email' name='email' placeholder='Email Address' required></input>
                                                      <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-2 w-28 self-center" type='submit'>Subscribe</button>
                                                </div>
                                          }
                                    </form>
                              </div>
                        </div>
                        <div className="contacts flex flex-col items-center p-6">
                              <h1 className="text-md font-semibold pb-2">Follow Us</h1>
                                    <ul className="connectLinks flex flex-row space-x-5">
                                          <li key={'facebook'} title="facebook" className="hover:scale-110">
                                                <Link href='#' target='_blank' >
                                                <FaFacebook alt="facebook" />
                                                </Link>
                                          </li>
                                          <li key={'instagram'} title="instagram" className="hover:scale-110">
                                                <Link href='https://www.instagram.com/diurnalis.tjc' target='_blank' >
                                                <FaInstagram alt="instagram" />
                                                </Link>
                                          </li>
                                          <li  key={'linkedin'} title="linkedin" className="hover:scale-110">
                                                <Link href='https://www.linkedin.com/company/diurnalis-tjc' target='_blank' >
                                                <FaLinkedin alt="linkedin" />
                                                </Link>
                                          </li>
                                          <li key={'Gmail'}  title="Gmail" className="hover:scale-110">
                                                <Link href='mailto:diurnalis@vnrvjiet.in' target='_blank' >
                                                <BiLogoGmail alt="Gmail" />
                                                </Link>
                                          </li>
                                          <li key={'linktree'}  title="Linktree" className="hover:scale-110">
                                                <Link href='https://linktr.ee/diurnalis_tjc' target='_blank' >
                                                <BiLink alt="Linktree" />
                                                </Link>
                                          </li>
                                    </ul>
                        </div>
                        <hr className="h-px  border-0 bg-gray-700"></hr>
                        <div className="trems">
                              <div className="devShow text-sm text-center pt-2">Powered by <span className="text-purple-700">Diurnalis</span></div>
                              <div className="lice text-center py-2 text-xs text-gray-500"> © 2023 Diurnalis . All rights reserved.</div>
                        </div>
                  </footer>
            </>
      )
}

export default Footer