'use client'
import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { carouselData } from '@/app/allDataFiles/carouselData';
import Link from 'next/link';
import Image from 'next/image';
import '@/app/styles/Mycarousel.css'



const CarouselComponent = () => {
      const [images, setImages] = useState([{
            carousalId: 0,
            carousalImg: '/Carouselimages/defaultImg.png',
            desc: 'the times of VNRVJIET-Diurnalis',
            link: '#'
      }]);

      const getData= async()=>{
            let response =  await fetch(`http://192.168.137.92:8080/diurnalis/carousalimages`);
            setImages(await response.json());
            // console.log(response.json());
          }

      useEffect(() => {
            getData()
      }, []);

      

      return (
            <>    <section className='pb-2'>
                  <h2 className='carouselHeading text-lg font-bold tracking-wide p-2 md:p-4 lg:px-6 font-sans lg:text-3xl'>Bulletin Board</h2>
                  <Carousel centerMode centerSlidePercentage={90} showIndicators={false} stopOnHover={true} showArrows={true}  infiniteLoop autoPlay transitionTime={500} showThumbs={false} showStatus={false} swipeable={true} useKeyboardArrows>

                        {images.length<0?<div/>:images.map((image,index) => (
                              <Link href={image.link} target='_blank'>
                              <div key={index} className='carouselBox'>
                                    <Image
                                          src={image.carousalImg}
                                          alt={image.desc}
                                          width={1920}
                                          height={400}  
                                          className='carouselImage'   
                                    />
                              </div>
                              </Link>
                        ))}
                  </Carousel>
                  <div className='carouselmt'></div>
                  </section>
            </>
      )
}

export default CarouselComponent
