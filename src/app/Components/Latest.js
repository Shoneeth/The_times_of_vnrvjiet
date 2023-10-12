'use client'
import Image from "next/image"
import Link from "next/link"
import { articleData } from "../allDataFiles/articleData"
import { BiCalendar } from "react-icons/bi";
import { useState, useEffect } from "react";

const Latest = () => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    // console.log(carouselData);
    setArticles(articleData);
  }, []);

  const getClass = (key) => {

    switch (key) {
      case 'Academics':
        return "bg-orange-500"
      case 'Alumni Connect':
        return "bg-pink-500"
      case 'Campus Life':
        return "bg-blue-500"
      case 'Career':
        return "bg-teal-500"
      case 'Interviews':
        return "bg-cyan-500"
      case 'Sports':
        return "bg-purple-500"
      case 'Lifestyle':
        return "bg-fuchsia-700"
      case 'Student Life':
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <>
      <section className="bg-white p-4 lg:p-6 lg:w-[65vw]">
        <h1 className="text-xl tracking-wide lg:text-3xl font-sans font-bold">Latest News</h1>
        <div className="flex flex-col lg:flex-row items-center">
          <div className=" overflow-hidden rounded-md relative my-4 w-[90vw] h-[50vw] md:h-[40vw] lg:w-[35vw] lg:h-[30vw]">
            <Image
              src={articleData[0].imgMainURL}
              height={1500}
              width={1500}
              alt={articleData[0].title}
              className=" object-cover h-[50vw] md:h-[40vw] lg:h-[30vw] absolute transition duration-700 ease-in-out hover:scale-110"
            />
            <div className="absolute bottom-7 lg:bottom-12 px-6">
              <span className={`${" text-white px-2 py-1 rounded-md text-sm lg:text-base font-medium capitalize"}
                ${getClass(articleData[0].Category)}
                }`}>{articleData[0].Category}</span>
              <Link href="#">
                <h1 className=" text-sm md:text-2xl font-sans capitalize text-white font-bold py-2 hover:underline">{`${articleData[0].title.substring(0,55)}${articleData[0].title.length>55 ? '...' : ''}`}</h1>
              </Link>
              <div className="flex items-center gap-4 px-2">
                <p className="text-gray-300 font-medium text-xs font-sans">BY <span className="text-white uppercase">{articleData[0].author}</span></p>
                <div className="flex items-center gap-2 text-gray-300 font-sans font-medium text-xs"><BiCalendar />{articleData[0].date}</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center pl-2 md:pl-6 py-6 gap-6 md:gap-12 relative">
            {articles.map((article, index) => (
              (index > 0 && index < 4) &&
              <div className="flex flex-wrap">
                <div className="overflow-hidden rounded-md w-44 h-24 md:w-56 md:h-28">
                  <Image
                    src={article.imgMainURL}
                    height={100}
                    width={500}
                    alt={article.title}
                    className="h-24 md:h-28 object-cover transition duration-700 ease-in-out hover:scale-110"
                  />
                </div>
                <div className="pl-4 md:pl-6">
                  <span className={`${" text-xs text-white px-2 py-1 rounded-md font-medium capitalize"}
                ${getClass(article.Category)}
                }`}>{article.Category}</span>
                  <Link href="#">
                    <h1 className="text-sm md:text-base font-sans capitalize text-black font-bold px-2 md:px-0 py-2 hover:underline">{`${article.title.substring(0,55)}${article.title.length>55 ? '...' : ''}`}</h1>
                  </Link>
                  <div className="flex items-center gap-4 px-2">
                    <p className="text-gray-500 font-medium text-xs font-sans">BY <span className="text-black uppercase">{article.author}</span></p>
                    <div className="flex items-center gap-2 text-gray-500 font-sans font-medium text-xs"><BiCalendar />{article.date}</div>
                  </div>
                </div>
              </div>
            ))}
            <div className="absolute -bottom-3 right-0"><Link href="/articles"><button className="px-4 py-2 font-mono text-red-900 hover:scale-105">Read more --{`>`}</button></Link></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Latest

