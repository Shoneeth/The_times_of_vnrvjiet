import ArticlesPage from "./Articles"

export const metadata ={
  title:'ARTICLES',
  alternates: {
    canonical: 'https://diurnalis.in',
  },
}

const page = () => {
  return (
    <>
      <ArticlesPage/>
    </>
  )
}

export default page
