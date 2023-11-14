'use client'
import Image from "next/image"
import Link from "next/link"
// import { articleData } from "../allDataFiles/articleData"
import { BiCalendar } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getArticle } from "../redux/slice";



const TopStories = () => {
      const [articles, setArticles] = useState([])

      const getData= async()=>{
        let response =  await fetch(`https://backend.diurnalis.in:8080/diurnalis/hottopics`);
        setArticles(await response.json());
      }
    
      useEffect(() => {
        // console.log(carouselData);
        getData()
        // setArticles(articleData);
      }, []);

      const dispatch = useDispatch();

      const articleDispatch =(article)=>{
            dispatch(getArticle(article))
      }
    
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
      <section className="bg-white pt-1 p-6 lg:pt-1 lg:pb-4 lg:w-[30vw]">
       <h1 className="text-3xl font-sans font-bold ">Top Stories</h1>
       <div className="flex flex-col justify-center py-2 relative md:flex-row  md:flex-wrap">
            {articles.length>0?
            articles.map((article, index) => (
              (index >= 0 && index < 4) &&
              <div key={index} className="flex py-3 lg:py-1 items-center">
                <div className=" flex items-center overflow-hidden w-64 md:w-32 h-28 md:h-24 rounded-[20%]">
                  <Image
                    src={article.img===''?'/articleImages/default.img.png':article.img}
                    height={100}
                    width={500}
                    alt={article.title}
                    className="object-cover h-28 md:h-24 transition duration-700 ease-in-out hover:scale-110"
                  />
                </div>
                <div className="p-3 pl-5">
                  <span className={`${" text-xs text-white px-2 py-1 rounded-md font-medium capitalize"}
                ${getClass(article.category)}
            `}>{article.category}</span>
                  <Link href={`/articles/${article.id}?category=${article.category}&id=${article.id}&title=${article.title}`}>
                    <h1 className="text-sm font-sans capitalize text-black font-bold py-2 hover:underline" onClick={()=>articleDispatch(article)}>{`${article.title.substring(0,55)}${article.title.length>55 ? '...' : ''}`}</h1>
                  </Link>
                  <div className="flex items-center gap-4 px-2">
                    <div className="flex items-center gap-2 text-gray-500 font-sans font-semibold text-xs"><BiCalendar />{article.date}</div>
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

export default TopStories
