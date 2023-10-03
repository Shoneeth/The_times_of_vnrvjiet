import Link from "next/link"
const Navpage = () => {
  return (
    <>
      <ul className=" flex flex-col p-4 px-6 text-lg font-semibold lg:flex-row lg:space-x-8 lg:px-10">
            <li className="hover:text-red-700"><Link  href="/home" > Home</Link></li>
            <li className="hover:text-red-700"><Link href="/about" > About Us</Link></li>
            <li className="hover:text-red-700"><Link href="/contact"> Contact Us</Link></li>
            <li className="hover:text-red-700"><Link href="/signup"> Login/Sign Up</Link></li>
      </ul>
    </>
  )
}

export default Navpage
