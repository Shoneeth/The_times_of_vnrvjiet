'use client'
import { useEffect, useState} from 'react';
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation';
import ArticleCard from '../Components/ArticleCard';
// import { articleData } from '../allDataFiles/articleData';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const ArticlesPage = () => {
  const Params = useSearchParams()
  const router = useRouter()

  const categoryParam = Params.get('category')
  const pageParam = Params.get('page')

  const [articleData,setArticleData] = useState([]);
  const [totalData,setTotalData] = useState(0);

  const getData= async()=>{
    let response =  await fetch(`https://diurnalis-backend.onrender.com/diurnalis/articles?pageNum=${Number(pageParam)}&pageSize=${Number(dataPerPage)}&category=${categoryParam}`);
    setArticleData(await response.json());

    let total =  await fetch(`https://diurnalis-backend.onrender.com/diurnalis/totalsize?category=${categoryParam}`);
    setTotalData(await total.json());
  }


  useEffect( ()=>{
    getData()
  },[categoryParam,pageParam])

  
  const Categories = ['Academics', 'Alumni Connect', 'Campus Life', 'Career', 'Interviews', 'Sports', 'Lifestyle', 'Student Life'];
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [currPage, setCurrPage] = useState(1)

  const handleClick = (category) => {
    router.push(`/articles?category=${category}&page=1`)
    setSelectedCategory(category);
  }

  const handlePage = (page) => {
    
    router.push(`/articles?category=${categoryParam}&page=${page}`)
    setCurrPage(page);
  }

  const handleNextPrev=(page)=>{

    router.push(`/articles?category=${categoryParam}&page=${page}`)
    setCurrPage(page);
  }

  
  const dataPerPage = 9
  const totalPages = Math.ceil(totalData/dataPerPage)
  // console.log(categoryParam)
   let currPageNo = currPage
  if(Number(pageParam) >= 1){
    currPageNo = Number(pageParam)
  }

  // let offset = (currPage - 1) * dataPerPage

  let pageNumbers = []
  for(let i= currPage -3 ; i<=currPage+3 ;i++){
    if(i<1) continue;
    if(i>totalPages) break;
    pageNumbers.push(i)
  }

  return (
    <>
    <Navbar/>
      <section className="p-4 ">
        <div className="p-6 text-2xl md:text-3xl lg:text-4xl text-center font-bold font-sans capitalize tracking-wider hover:underline">Categories of Articles</div>
        <div className="flex justify-evenly flex-wrap gap-4 bg-gray-200 border-gray-500 border-y  p-2 shadow-md">
          {
            Categories.map((category, index) => (
              <div key={index} className={`${selectedCategory === category ? 'font-semibold' : ''} hover:font-medium`} onClick={() => handleClick(category)}>{category}</div>
            ))
          }
        </div>
        <div className='flex flex-wrap justify-evenly gap-4 p-4 lg:px-40 lg:pt-8 lg:gap-16'>
        {
        articleData.length>0 ?
          articleData.map(
            (currArticle) => (
              <ArticleCard key={currArticle.id} {...{...currArticle,totalData}}/>
            )
          ):
          <div className="text-2xl p-8 font-bold font-sans">No Articles here ...</div>
        }
        </div>
        <div className="flex gap-4 justify-center items-center p-10">
          {currPageNo -1 >= 1 &&(
            <div className="hover:scale-110 hover:font-bold" onClick={()=> handleNextPrev(currPageNo-1)}>
            {"<<"}
            </div>
          )
          }
          {
            pageNumbers.map(
              (page)=><div key={page} className={page === currPageNo ? 'text-rose-500 text-xl font-bold' : 'text-gray-500 hover:text-rose-500 hover:font-semibold'} onClick={()=>handlePage(page)} >{page}</div>
            )
          }
          {currPageNo +1 <= totalPages &&(
            <div className="hover:scale-110 hover:font-bold" onClick={()=>handleNextPrev(currPageNo+1)}>
            {">>"}
            </div>
          )
          }
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default ArticlesPage
