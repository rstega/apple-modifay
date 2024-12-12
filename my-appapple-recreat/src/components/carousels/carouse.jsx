


import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { img } from './img/date'; // Ensure this path exports an array of image links

function Carouseleffect() {
    return (
        <div>
            <Carousel
                autoPlay={true} // Corrected property name to autoPlay
                infiniteLoop={true}
                showIndicators={true} // Corrected property name to showIndicators
                showThumbs={false}
            >
                {
                    img.map((imageItemLink, index) => (
                        <img key={index} src={imageItemLink} alt={`Slide ${index + 1}`} />
                    ))
                }
            </Carousel>
        </div>
    );
}

export default Carouseleffect;