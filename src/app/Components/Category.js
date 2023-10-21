'use client'
import Link from "next/link"

const Category = () => {
      const Categories = ['Academics', 'Alumni Connect', 'Campus Life', 'Career', 'Interviews', 'Sports', 'Lifestyle', 'Student Life'];
       
      const getClass = (key) => {

            switch (key) {
              case 'Academics':
                return "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300"
              case 'Alumni Connect':
                return "text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200"
              case 'Campus Life':
                return "bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100"
              case 'Career':
                return "bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200"
              case 'Interviews':
                return "text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200"
              case 'Sports':
                return "text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200"
              case 'Lifestyle':
                return "text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300"
              case 'Student Life':
                return "text-white bg-gradient-to-r from-rose-500 to-blue-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-red-200"
              default:
                return "bg-gray-500"
            }
          }



      return (
            <>
                  <section className="p-4 lg:ml-4 lg:mb-4 lg:p-4">
                        <Link href="/articles?category=Academics&page=1"><h1 className="text-3xl font-sans font-bold w-min hover:underline">Categories</h1></Link>
                        <div className="flex flex-wrap gap-4 p-4 px-6">
                              {Categories.map((category,index)=>(
                                    <Link href={`/articles?category=${category}&page=1`}>
                                    <div key={index} className={`${"lg:w-[22vw] h-16 bg-slate-400 text-center text-lg rounded-lg text-slate-50 font-semibold p-4 tracking-wider font-sans capitalize hover:scale-105"} ${getClass(category)}`}>
                                          {category}
                                    </div>
                                    </Link>
                              ))}
                        </div>
                  </section>
            </>
      )
}

export default Category
