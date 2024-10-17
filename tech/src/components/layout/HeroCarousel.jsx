import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Container from "../layout/Container";
import CarouselButton from "../items/Buttons/CarouselButton";
import FatherDot from './FatherDot';
import HeroCard from "../layout/HeroCard"

const HeroCarousel = ({ items, customclass, customCarousel }) => {
    const carouselRef = useRef(null);
    const [showButton, setShowButton] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startPos, setStartPos] = useState(0);
    const [currentTranslate, setCurrentTranslate] = useState(0);
    const [prevTranslate, setPrevTranslate] = useState(0);
    const [itemWidth, setItemWidth] = useState(0);
    useEffect(() => {
        const handleResize = () => {
            if (carouselRef.current) {
                setItemWidth(carouselRef.current.clientWidth / items.length);
            }
        };

        handleResize(); // Atualiza o itemWidth inicialmente
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [items.length]);

    useEffect(() => {
        setPositionByIndex();
    }, [currentIndex, itemWidth]);

    const scrollByOneCard = (direction) => {
        setCurrentIndex((prevIndex) => {
            const newIndex = direction === 'left' ? prevIndex - 1 : prevIndex + 1;
            return Math.max(0, Math.min(newIndex, items.length - 1));
        });
    };

    const startDrag = (event) => {
        setIsDragging(true);
        setStartPos(getPositionX(event));
    };

    const drag = (event) => {
        if (isDragging) {
            const currentPosition = getPositionX(event);
            const movedBy = currentPosition - startPos;
            setCurrentTranslate(prevTranslate + movedBy);
        }
    };
    
    const endDrag = () => {
        setIsDragging(false);
        const movedBy = currentTranslate - prevTranslate;
    
        if (movedBy < -itemWidth / 4 && currentIndex < items.length - 1) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        } else if (movedBy > itemWidth / 4 && currentIndex > 0) {
            setCurrentIndex(prevIndex => prevIndex - 1);
        }
    
        setPrevTranslate(currentTranslate);  // Atualiza prevTranslate para o valor atual de currentTranslate
        setPositionByIndex();
    };
    

    const getPositionX = (event) => {
        return event.type.includes('mouse') ? event.pageX : (event.touches[0]?.clientX || 0);
    };

    const setPositionByIndex = () => {
        const newTranslate = currentIndex * -itemWidth;
        setCurrentTranslate(newTranslate);
        if (carouselRef.current) {
            carouselRef.current.style.transform = `translateX(${newTranslate}px)`;
        }
    };

    function handleMouseOver() {
        setShowButton(true);
    }

    function handleMouseOut() {
        setShowButton(false);
    }

    return (
        <Container
        customclass={`
        min-[1px]:w-[100vw]
        min-[1px]:h-[540px] md:h-[460px] lg:h-96 overflow-hidden ${customclass}`}>
            <div
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                className="carousel-container relative size-full "
            >
                <div
                    className="flex transition-transform duration-50 ease-in-out size-full "
                    ref={carouselRef}
                    onTouchStart={startDrag}
                    onTouchMove={drag}
                    onTouchEnd={endDrag}
                    onMouseDown={startDrag}
                    onMouseMove={drag}
                    onMouseUp={endDrag}
                    style={{ width: `${items.length * 100}%` }}
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="carousel-item flex-shrink-0 card_hero"
                            style={{ width: `${100 / items.length}%` }}
                        >
                            <HeroCard
                                customclass={customCarousel}
                                title={item.title}
                                titleColor={item.titleColor}
                                text={item.text}
                                textButton={item.textButton}
                                typeButton={item.typeButton}
                                img={item.img}
                                backgroundSize={item.backgroundSize}
                                customImg={item.customImg}
                                href={item.href}
                                target={item.target}
                                rel={item.rel}
                                backgroundPosition={item.backgroundPosition}
                                backgroundColor={item.backgroundColor}
                                textStyle={item.textStyle}
                                imgSize={item.imgSize}
                            />
                        </div>
                    ))}
                </div>

                
                    <FatherDot
                        dots={items}
                        currentIndex={currentIndex}
                    />
                
                
                {showButton && (
                    <>
                        <CarouselButton
                            customclass=" left-8 cPrev "
                            text={<IoIosArrowBack />}
                            onLeft={() => scrollByOneCard('left')}
                        />
                        <CarouselButton
                            customclass=" right-8 cNext "
                            text={<IoIosArrowForward />}
                            onRight={() => scrollByOneCard('right')}
                        />
                    </>
                )}
            </div>
        </Container>
    );
};

export default HeroCarousel;
