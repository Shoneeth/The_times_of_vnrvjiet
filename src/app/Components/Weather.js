import Link from "next/link"
const Weather = () => {
  return (
    <>
    <section className="p-4 lg:pt-6 lg:px-4 lg:w-[30vw]"> 
    <h1 className="text-3xl font-sans font-bold">Weather Today</h1>
    <div className="py-6 text-center lg:w-[28vw] lg:h-auto">
      <div className="h-60 rounded-md" id="ww_0258d270444f7" v='1.3' loc='auto' a='{"t":"horizontal","lang":"en","sl_lpl":1,"ids":[],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722"}'><Link href="https://weatherwidget.org/" id="ww_0258d270444f7_u" target="_blank">Weather widget</Link></div><script async src="https://app2.weatherwidget.org/js/?id=ww_0258d270444f7"></script>
    </div>
    </section> 
    </>
  )
}

export default Weather
