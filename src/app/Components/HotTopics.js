'use client'
import Image from "next/image"
import Link from "next/link"
// import { articleData } from "../allDataFiles/articleData"
import { BiCalendar } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getArticle } from "../redux/slice";

const HotTopics = () => {
      const [articles, setArticles] = useState([])

      const getData= async()=>{
        let response =  await fetch(`https://diurnalis-backend.onrender.com/diurnalis/hottopics`);
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
      <section className="bg-orange-50 p-4 lg:ml-4 lg:mb-4 lg:p-4 rounded-xl lg:w-[65vw]">
      <h1 className="text-xl tracking-wide lg:text-3xl font-sans font-bold">Hot Topics</h1>
      <div className="flex justify-center py-6 items-center relative gap-3 lg:gap-4 flex-wrap">
            {articles.length >0 ?
            
            articles.map((article, index) => (
              (index >= 0 && index < 4) &&
              <div key={index} className="flex flex-col justify-center items-center md:w-44 lg:w-52">
                <div className="overflow-hidden rounded-md w-70 h-40 md:w-44 lg:w-52 md:h-32">
                  <Image
                    src={article.img}
                    height={100}
                    width={500}
                    alt={article.title}
                    className="h-40 object-cover transition duration-700 ease-in-out hover:scale-110"
                  />
                </div>
                <div className="px-3 py-4">
                  <span className={`${" text-xs text-white px-2 py-1 rounded-md font-medium capitalize"}
                ${getClass(article.category)}
                }`}>{article.category}</span>
                  <Link href={`/articles/${article.id}?category=${article.category}&id=${article.id}&title=${article.title}`}>
                    <h1 className="text-sm lg:text-base font-sans capitalize text-black font-bold py-2 hover:underline" onClick={()=>articleDispatch(article)}>{`${article.title.substring(0,55)}${article.title.length>55 ? '...' : ''}`}</h1>
                  </Link>
                  <div className="flex items-center gap-2 px-1 lg:gap-4 lg:px-2">
                    <p className="text-gray-500 font-medium text-xs font-sans">BY <span className="text-black uppercase">{`${article.author.substring(0,6)}${article.author.length>6 ? '...' : ''}`}</span></p>
                    <div className="flex items-center gap-2 text-gray-500 font-sans font-medium text-xs"><BiCalendar />{article.date}</div>
                  </div>
                </div>
              </div>
            )):<div className="text-2xl p-8 font-bold font-sans">No Articles here ...</div>}
            <div className="absolute -bottom-3 right-0"><Link href="/articles?category=Academics&page=1"><button className="px-4 py-2 font-mono text-red-900 hover:scale-105">Read more --{`>`}</button></Link></div>
          </div>
      </section>
    </>
  )
}

export default HotTopics
