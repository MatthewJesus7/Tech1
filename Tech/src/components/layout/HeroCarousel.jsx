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
    const slidesContainerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startPos, setStartPos] = useState(0);
    const [currentTranslate, setCurrentTranslate] = useState(0);
    const [prevTranslate, setPrevTranslate] = useState(0);
    const animationID = useRef(null);

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

  useEffect(() => {

    const startDrag = (event) => {
      setIsDragging(true);
      setStartPos(getPositionX(event));
      animationID.current = requestAnimationFrame(animation);
    };

    const endDrag = () => {
      setIsDragging(false);
      cancelAnimationFrame(animationID.current);

      const movedBy = currentTranslate - prevTranslate;

      if (movedBy < -itemWidth / 4 && currentIndex < itemWidth.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      }

      if (movedBy > itemWidth / 4 && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      }

      setPositionByIndex(itemWidth);
    };

    const drag = (event) => {
      if (isDragging) {
        const currentPosition = getPositionX(event);
        setCurrentTranslate(prevTranslate + currentPosition - startPos);
      }
    };

    const getPositionX = (event) => {
      return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    };

    const animation = () => {
      setSliderPosition(carouselRef);
      if (isDragging) requestAnimationFrame(animation);
    };

    const setSliderPosition = () => {
        carouselRef.style.transform = `translateX(${currentTranslate}px)`;
    //   activateDot(currentIndex, dots);
    };

    const setPositionByIndex = (itemWidth) => {
      const newTranslate = currentIndex * -itemWidth;
      setCurrentTranslate(newTranslate);
      setPrevTranslate(newTranslate);
      setSliderPosition(carouselRef);
    };

    // const activateDot = (currentIndex, dots) => {
    //   dots.forEach((dot, index) => {
    //     dot.style.background = index === currentIndex ? '#3c7ad8' : '#424242';
    //   });
    // };

    window.addEventListener('resize', () => setPositionByIndex(itemWidth));

    setPositionByIndex(itemWidth);
});



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
                    onTouchStart={startDrag}
                    onTouchMove={drag}
                    onTouchEnd={endDrag}
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