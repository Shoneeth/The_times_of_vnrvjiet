'use client'
import { useState, useEffect } from "react";
import moment from "moment/moment";
import Navpage from "./Navpage"
import Image from "next/image";
import Link from "next/link";
import { CgMenu, CgClose } from "react-icons/cg";
import { FaFacebook, FaInstagram, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  const [date, setDate] = useState(new Date());
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const formattedDate = moment(date).format("DD-MM-YYYY");

  useEffect(() => {
    const updateDate = () => {
      setDate(new Date());
    };
    setInterval(updateDate, 1000); // Update the date every second
    return () => {
      clearInterval(updateDate); // Cleanup the interval when the component unmounts
    };
  });

  const handleOnClick = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav className="nav shadow-lg bg-white">
        <div className="menu p-4 absolute">
          <CgClose className={`w-6 h-6 text-gray-400 font-bold cursor-pointer lg:relative lg:left-10 lg:top-7 lg:w-9 lg:h-9 ${toggle ? '' : 'hidden'}`} title="close" onClick={handleOnClick} />
          <CgMenu className={`w-6 h-6 text-gray-400 font-bold cursor-pointer lg:relative lg:left-10 lg:top-7 lg:w-9 lg:h-9 ${toggle ? 'hidden' : ''}`} alt="Picture of the menu" onClick={handleOnClick} title="Menu" />
        </div>
        <Link href='/home'>
        <div className=" flex flex-col items-center lg:flex-row lg:justify-center">
          <div className="logo w-16 p-2 lg:w-24">
            <Image
              src="/Navimages/TJC.png"
              alt="logo"
              width={150}
              height={150}
            />
          </div>
          <div className="title text-lg font-bold font-serif md:text-4xl lg:text-6xl lg:font-normal lg:underline lg:decoration-1 lg:underline-offset-[25px]" >
            THE TIMES OF VNRVJIET
          </div>
        </div>
        </Link>
        <div className="flex flex-col items-center justify-center lg:right-[25vw] lg:relative lg:bottom-4 lg:items-end">
          <div className="date text-xs font-mono font-semibold text-red-800 bg-white p-1">
            Date: {formattedDate} / {`${days[date.getDay()]}`}
          </div>
          <div className="links p-2">
            <ul className="connectLinks flex flex-row space-x-3">
              <li key={'facebook'} title="facebook" className="hover:scale-110">
                <Link href="#">
                  <FaFacebook alt="facebook" />
                </Link>
              </li>
              <li  key={'instagram'} title="instagram" className="hover:scale-110">
                <Link href="#">
                  <FaInstagram alt="instagram" />
                </Link>
              </li>
              <li  key={'linkedin'} title="linkedin" className="hover:scale-110">
                <Link href="#">
                  <FaLinkedin alt="linkedin" />
                </Link>
              </li>
              <li key={'X'} title="X" className="hover:scale-110">
                <Link href="#">
                  <FaSquareXTwitter alt="X" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {toggle && (
        <>
          <Navpage />
        </>
      )}
    </>
  );
};

export default Navbar;
