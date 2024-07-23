import React, { useState, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Container from '../layout/Container';
import Card from './Card';
import CarouselButton from "../items/Buttons/CarouselButton";

function Carousel({ items, customclass }) {
    const itemWidth = 256;
    const marginWidth = 20;
    const carouselRef = useRef(null);
    const [showButton, setShowButton] = useState(false);

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

    const handleTouchStart = (e) => {
        carouselRef.current.style.transition = 'none';
    };

    const handleTouchMove = () => {
        // Adicione lógica se necessário para o movimento de toque
    };

    const handleTouchEnd = () => {
        carouselRef.current.style.transition = ''; // Reaplica a transição após o swipe
    };

    return (
        <Container
        customclass={` w-[114%] overflow-x-hidden p-5 px-2.5 -ml-[30px] ${customclass}`}>
            <div
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                className="w-full relative cursor-pointer">
                <div
                    className="flex transition-transform duration-500 p-2.5 pb-7 w-full
                    overflow-x-auto snap-x snap-mandatory carousel-hide-scrollbar"
                    ref={carouselRef}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {items.map((item, index) => (
                        <div key={index}>
                            <Card
                            customclass='pb-24'
                            
                                type={item.type}
                                typeInner={item.typeInner}
                                link={item.link}
                                target={item.target}
                                rel={item.rel}
                                title={item.title}
                                price={item.price}
                                backgroundImage={item.backgroundImage}
                                colors={item.colors}
                            />
                        </div>
                    ))}
                </div>

                {showButton && (
                    <>
                        <CarouselButton
                        customclass=" left-5 cPrev "
                        text={<IoIosArrowBack />}
                        onLeft={() => scrollByOneCard('left')} />

                        <CarouselButton
                        customclass=" right-5 cNext "
                        text={<IoIosArrowForward />} onRight={() => scrollByOneCard('right')} />
                    </>
                )}
            </div>
        </Container>
    );
}

export default Carousel;
