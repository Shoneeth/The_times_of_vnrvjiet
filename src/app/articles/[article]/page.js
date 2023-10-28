import Adata from "./Adata"

const page = () => {

  return (
    <>
     <Adata/>
    </>
  )
}

export default page
export function generateMetadata({searchParams}){

  const title = searchParams.title;
  return{
    title:title,
  }
}