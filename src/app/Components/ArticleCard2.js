import Image from "next/image"
import Link from "next/link"
import { articleData } from "../allDataFiles/articleData"
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { useState, useEffect } from "react";


const ArticleCard2 = () => {

      const [articles, setArticles] = useState([]);
      const [like, setLike] = useState(false);

      const handleLike = () => {
            setLike(!like)
      }

      useEffect(() => {
            // console.log(carouselData);
            const temp = articleData.filter((a)=>a.likes>200)
            setArticles(temp);
      }, []);



      return (
            <>
                  {articles.map((article, index) => (
                        <div className="card flex flex-row shadow-neutral-200 lg:w-[30vw] border" key={index}>
                              <Image className="w-32 h-32 md:w-36 md:h-36" src={article.imgSmURL} alt="" width={150} height={150} />
                              <div className="context p-2 flex flex-col md:p-4 lg:px-8">
                                    <Link href="#"><h1 className="title text-sm font-semibold font-sans uppercase hover:underline hover:text-red-900 md:text-xl lg:text-xs">{article.title}</h1></Link>
                                    <label className="author text-xs font-medium text-gray-500 self-end px-2 md:text-sm md:px-4">-{article.author}</label>
                                    <div className="base flex justify-between items-center p-2 md:px-4">
                                          <div className="date text-sm font-medium font-sans text-gray-700 md:text-sm">
                                                {article.date}
                                          </div>
                                          <div className="likes flex text-xs text-slate-400 items-center font-serif ">
                                                {article.likes}
                                                <div className="text-xl px-1 md:text-2xl" onClick={handleLike}>{like ? <FcLike /> : <FcLikePlaceholder />}</div> 
                                          </div>
                                    </div>
                              </div>
                        </div>
                  ))}
            </>
      )
}

export default ArticleCard2
