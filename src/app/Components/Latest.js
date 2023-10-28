'use client'
import Image from "next/image"
import Link from "next/link"
// import { articles } from "../allDataFiles/articleData"
import { BiCalendar } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getArticle } from "../redux/slice";

const Latest = () => {
  const [articles, setArticles] = useState([])

  const getData= async()=>{
    let response =  await fetch(`https://diurnalis-backend.onrender.com/diurnalis/latestarticles`);
    setArticles(await response.json());
  }


  const dispatch = useDispatch();

  const articleDispatch =(article)=>{
        dispatch(getArticle(article))
  }

  useEffect(() => {
    // console.log(carouselData);
    
    getData()
    // setArticles(articleData);
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
   
      <section className="bg-white p-4 lg:p-6 lg:w-[68vw]">
        <h1 className="text-xl tracking-wide lg:text-3xl font-sans font-bold">Latest News</h1>
       <div className="flex flex-col lg:flex-row items-center">
       { articles.length>0?
          <div className=" overflow-hidden rounded-md relative my-4 w-[90vw] h-[50vw] md:h-[40vw] lg:w-[35vw] lg:h-[30vw]">
            <Image
              src={articles[0].img}
              height={1500}
              width={1500}
              alt={articles[0].title}
              className=" object-cover h-[50vw] md:h-[40vw] lg:h-[30vw] absolute transition duration-700 ease-in-out hover:scale-110"
            />
            <div className="absolute bottom-7 lg:bottom-12 px-6">
              <span className={`${" text-white px-2 py-1 rounded-md text-sm lg:text-base font-medium capitalize"}
                ${getClass(articles[0].category)}
                }`}>{articles[0].category}</span>
              <Link href={`/articles/${articles[0].id}?category=${articles[0].category}&id=${articles[0].id}&title=${articles[0].title}`}>
                <h1 className=" text-sm md:text-2xl font-sans capitalize text-white font-bold py-2 hover:underline" onClick={()=>articleDispatch(articles[0])}>{`${articles[0].title.substring(0,55)}${articles[0].title.length>55 ? '...' : ''}`}</h1>
              </Link>
              <div className="flex items-center gap-4 px-2">
                <p className="text-gray-300 font-medium text-xs font-sans">BY <span className="text-white uppercase">{`${articles[0].author.substring(0,10)}${articles[0].author.length>10 ? '...' : ''}`}</span></p>
                <div className="flex items-center gap-2 text-gray-300 font-sans font-medium text-xs"><BiCalendar />{articles[0].date}</div>
              </div>
            </div>
          </div>
    : <div className="text-2xl p-8 font-bold font-sans">No Articles here ...</div>}
          <div className="flex flex-col items-center justify-center pl-2 md:pl-6 py-6 gap-6 md:gap-12 relative">
            {articles.length>0?
            articles.map((article, index) => (
              (index > 0 && index < 4) &&
              <div key={index} className="flex flex-wrap justify-center lg:flex-nowrap overflow-hidden">
                <div className="overflow-hidden rounded-md p-4 md:p-0 w-fit h-fit md:w-56 md:h-28">
                  <Image
                    src={article.img}
                    height={100}
                    width={500}
                    alt={article.title}
                    className="h-40 md:h-28 object-cover transition duration-700 ease-in-out hover:scale-110"
                  />
                </div>
                <div className="pl-4 md:pl-6">
                  <span className={`${" text-xs text-white px-2 py-1 rounded-md font-medium capitalize"}
                ${getClass(article.category)}
                }`}>{article.category}</span>
                  <Link href={`/articles/${article.id}?category=${article.category}&id=${article.id}&title=${article.title}`}>
                    <h1 className="text-sm md:text-base font-sans capitalize text-black font-bold px-2 md:px-0 py-2 hover:underline" onClick={()=>articleDispatch(article)}>{`${article.title.substring(0,55)}${article.title.length>55 ? '...' : ''}`}</h1>
                  </Link>
                  <div className="flex items-center gap-4 px-2">
                    <p className="text-gray-500 font-medium text-xs font-sans">BY <span className="text-black uppercase">{`${article.author.substring(0,6)}${article.author.length>6 ? '...' : ''}`}</span></p>
                    <div className="flex items-center gap-2 text-gray-500 font-sans font-medium text-xs"><BiCalendar />{article.date}</div>
                  </div>
                </div>
              </div>
            )):<div className="text-2xl p-8 font-bold font-sans">No Articles here ...</div>}
            <div className="absolute -bottom-3 right-0"><Link href="/articles?category=Academics&page=1"><button className="px-4 py-2 font-mono text-red-900 hover:scale-105">Read more --{`>`}</button></Link></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Latest

