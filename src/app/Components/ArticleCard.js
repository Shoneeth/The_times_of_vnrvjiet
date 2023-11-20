import Image from "next/image"
import Link from "next/link"
import { BiCalendar } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { getArticle } from "../redux/slice";
import { useEffect, useState } from "react";


const ArticleCard = (currArticle) => {

      const [article,setArticle] = useState({});

      const dispatch = useDispatch();

      const articleDispatch =()=>{
            dispatch(getArticle(article))
      }

      useEffect(()=>{
            setArticle(currArticle)
      },[])

      return (
            <>
                  <div className="bg-white flex flex-col border border-separate rounded-lg w-fit items-center shadow-lg md:w-[40vw] lg:w-[20vw] overflow-hidden">
                        <div className="overflow-hidden rounded-t-lg ">
                              <Image
                                    src={currArticle.img===''?'/articleImages/default.img.png':currArticle.img}
                                    alt={currArticle.title}
                                    width={500}
                                    height={500}
                                    className="rounded-t-lg object-cover transition duration-700 ease-in-out hover:scale-110"
                              />
                        </div>
                        <div className="p-4">
                              <p className="text-gray-500 font-medium text-sm font-sans py-2 md:text-lg">{currArticle.category}</p>
                              <h1 className="font-medium capitalize py-2 md:font-semibold md:text-xl hover:underline">{`${currArticle.title.substring(0,40)}${currArticle.title.length>40 ? '...' : ''}`}</h1>
                              <div className="flex items-center gap-4 px-2">
                                    <p className="text-gray-500 font-medium text-xs font-sans">BY <span className="text-black uppercase">{`${currArticle.author.substring(0,10)}${currArticle.author.length>10 ? '...' : ''}`}</span></p>
                                    <div className="flex items-center gap-2 text-gray-500 font-sans font-medium text-xs flex-wrap"><BiCalendar />{currArticle.date}</div>
                              </div>
                        </div>
                        <Link href={`/articles/${currArticle.id}?category=${currArticle.category}&id=${currArticle.id}&title=${currArticle.title}`} >
                        <div className="m-4 px-10 py-2 bg-gray-500 rounded-lg self-center text-white font-sans font-semibold text-lg text-center tracking-wider hover:scale-110" onClick={articleDispatch}>
                              Read
                        </div>
                        </Link>
                  </div>
            </>
      )
}

export default ArticleCard



