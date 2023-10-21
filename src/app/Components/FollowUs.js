import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6"
import { BiLogoGmail } from "react-icons/bi"


const FollowUs = () => {
  return (
    <>
      <div className="m-4 p-4 md:p-8 border-2 border-emerald-700 rounded-xl">
          <div className="contacts flex gap-4 items-center flex-wrap">
            <h1 className="text-lg font-semibold">Follow Us</h1>
              <ul className="connectLinks flex flex-row space-x-5">
                <li key={'facebook'} title="facebook" className="hover:scale-110">
                <Link href='https://www.youtube.com' target='_blank' >
                  <FaFacebook alt="facebook" className="w-6 h-6"/>
                </Link>
                </li>
                <li key={'instagram'} title="instagram" className="hover:scale-110">
                  <Link href='https://www.youtube.com' target='_blank' > 
                  <FaInstagram alt="instagram" className="w-6 h-6"/>
                  </Link>
                </li>
                <li key={'linkedin'} title="linkedin" className="hover:scale-110">
                  <Link href='https://www.youtube.com' target='_blank' >
                  <FaLinkedin alt="linkedin" className="w-6 h-6"/>
                  </Link>
                </li>
                <li key={'Gmail'} title="Gmail" className="hover:scale-110">
                  <Link href='https://www.youtube.com' target='_blank' >
                  <BiLogoGmail alt="Gmail" className="w-6 h-6"/>
                  </Link>
                </li>
              </ul>
          </div>
      </div>
    </>
  )
}

export default FollowUs
