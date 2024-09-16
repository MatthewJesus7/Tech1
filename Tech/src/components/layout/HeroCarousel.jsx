import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Container from "./Container";
import CarouselButton from "../items/Buttons/CarouselButton";
import Card from "./Card";

const HeroCarousel = ({ items, customtitle, customclass }) => {
    const itemWidth = useWindowWidth();
    const marginWidth = 0;
    const carouselRef = useRef(null);
    const [showButton, setShowButton] = useState(false);

    function useWindowWidth() {
        
        const [width, setWidth] = useState(window.innerWidth);

        useEffect(() => {
          const handleResize = () => {
            setWidth(window.innerWidth);
          };
          window.addEventListener('resize', handleResize);
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);
      
        return width;
      }

    const scrollByOneCard = (direction) => {
        const scrollAmount = direction === 'left' ? -(itemWidth + marginWidth) : (itemWidth + marginWidth);

        carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    function handleMouseOver() {
        setShowButton(true);
    }

    function handleMouseOut() {
        setShowButton(false);
    }

    const handleTouchStart = () => {
        carouselRef.current.style.transition = 'none';
    };

    const handleTouchMove = () => {
    };

    const handleTouchEnd = () => {
        carouselRef.current.style.transition = '';
    };


    return (
        <Container
        customclass={`absolute left-0 top-10 min-[1px]:w-[100vw] min-[1px]:h-[580px] overflow-x-hidden ${customclass}`}>
            
            <div
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                className="w-full h-full relative">
                <div
                    className="flex transition-transform duration-10 w-full h-full
                    overflow-x-auto snap-x snap-mandatory carousel-hide-scrollbar"
                    ref={carouselRef}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {items.map((item, index) => (
                        <div key={index} className='card_hero'>
                            <Card
                                customclass='pb-20'
                                type={item.type}
                                link={item.link}
                                target={item.target}
                                rel={item.rel}
                                title={item.title}
                                customtitle={customtitle}
                                price={item.price}
                                totalPrice={item.totalPrice}
                                backgroundImage={item.backgroundImage}
                                colors={item.colors}
                            />
                        </div>
                    ))}
                </div>

                {showButton && (
                    <>
                        <CarouselButton
                        customclass=" left-8 cPrev "
                        text={<IoIosArrowBack />}
                        onLeft={() => scrollByOneCard('left')} />

                        <CarouselButton
                        customclass=" right-8 cNext "
                        text={<IoIosArrowForward />} onRight={() => scrollByOneCard('right')} />
                    </>
                )}
            </div>
        </Container>
    );
}
export default HeroCarousel