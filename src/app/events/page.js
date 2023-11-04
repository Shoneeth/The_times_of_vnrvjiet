import Events from '@/app/events/Events'

export const metadata ={
  title:'EVENTS',
  alternates: {
    canonical: 'https://diurnalis.in',
  },
}

const page = () => {
  return (
    <>
      <Events/>
    </>
  )
}

export default page


