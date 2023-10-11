import Image from "next/image"
import Link from "next/link"
import { BiCalendar } from "react-icons/bi";

const ArticleCard = (currArticle) => {

      return (
            <>
                  <div className="flex flex-col border border-separate rounded-lg w-fit items-center shadow-lg md:w-[40vw] lg:w-[20vw]">
                        <div className="overflow-hidden rounded-t-lg ">
                              <Image
                                    src={currArticle.imgMainURL}
                                    alt={currArticle.title}
                                    width={500}
                                    height={500}
                                    className="rounded-t-lg object-cover"
                              />
                        </div>
                        <div className="p-4">
                              <p className="text-gray-500 font-medium text-sm font-sans py-2 md:text-lg">{currArticle.Category}</p>
                              <h1 className="font-medium capitalize py-2 md:font-semibold md:text-xl hover:underline">{currArticle.title}</h1>
                              <div className="flex items-center gap-4 px-2">
                                    <p className="text-gray-500 font-medium text-xs font-sans">BY <span className="text-black uppercase">{currArticle.author}</span></p>
                                    <div className="flex items-center gap-2 text-gray-500 font-sans font-medium text-xs"><BiCalendar />{currArticle.date}</div>
                              </div>
                        </div>
                        <Link href={`/articles/${currArticle.id}`}>
                        <div className="m-4 px-10 py-2 bg-gray-500 rounded-lg self-center text-white font-sans font-semibold text-lg text-center tracking-wider hover:scale-110">
                              Read
                        </div>
                        </Link>
                  </div>
            </>
      )
}

export default ArticleCard
