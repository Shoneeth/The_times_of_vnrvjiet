'use client'
import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { carouselData } from '@/app/allDataFiles/carouselData';
import Link from 'next/link';
import Image from 'next/image';
import '@/app/styles/Mycarousel.css'



const CarouselComponent = () => {
      const [images, setImages] = useState([]);

      useEffect(() => {
            // console.log(carouselData);
            setImages(carouselData);
      }, []);


      return (
            <>
                  <h2 className='carouselHeading font-semibold p-2 lg:p-4 font-serif text-2xl'>TOP STORIES</h2>
                  <Carousel  centerMode centerSlidePercentage={60} showIndicators={false} stopOnHover={true} showArrows={true}  infiniteLoop autoPlay transitionTime={500} showThumbs={false} showStatus={false} swipeable={true} useKeyboardArrows>
                        {images.map((image, index) => (
                              <Link href={image.externalLink} target='_blank'>
                              <div key={index} className='carouselBox'>
                                    <Image
                                          src={image.imgURL}
                                          alt={image.description}
                                          width={1920}
                                          height={400}  
                                          className='carouselImage'   
                                    />
                              </div>
                              </Link>
                        ))}
                  </Carousel>
                  <div className='carouselmt'></div>
            </>
      )
}

export default CarouselComponent
