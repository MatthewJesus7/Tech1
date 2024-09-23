import React, { useState, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Container from '../layout/Container';
import Card from './Card';
import CarouselButton from "../items/Buttons/CarouselButton";

function Carousel({ items, type, customtitle, customclass }) {
    const itemWidth = 256;
    const marginWidth = 20;
    const carouselRef = useRef(null);
    const [showButton, setShowButton] = useState(false);
    const [menuValue, setMenuValue] = useState(false);

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

    // Cria um array de estados para cada item do menu
    const [menuValues, setMenuValues] = useState(Array(items.length).fill(false));

    const changeMenuValue = (index) => {
        // Atualiza o estado de um card específico
        const updatedMenuValues = [...menuValues];
        updatedMenuValues[index] = true;
        setMenuValues(updatedMenuValues);
        closeMenu(index);
    }

    const closeMenu = (index) => {
        if (menuValues[index] === true) {
            const updatedMenuValues = [...menuValues];
            updatedMenuValues[index] = false;
            setMenuValues(updatedMenuValues);
        };
    }

    return (
        <Container
        customclass={` min-[1px]:w-[100vw] xl:w-[111%] -ml-2.5  overflow-x-hidden ${customclass}`}>
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
                                customclass='pb-[120px]'
                                type={type || item.type}
                                link={item.link}
                                target={item.target}
                                rel={item.rel}
                                title={item.title}
                                customtitle={customtitle}
                                price={item.price}
                                total_price={item.total_price}
                                image_url={item.image_url}
                                colors={item.colors}
                                custo_beneficio={item.custo_beneficio}
                                hardware={item.hardware}
                                camera={item.camera}
                                tela={item.tela}
                                desempenho={item.desempenho}
                                menuValue={menuValues[index]}
                                changeMenuValue={() => changeMenuValue(index)}
                                brand={item.brand}
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
                        customclass=" right-12 md:right-20 cNext "
                        text={<IoIosArrowForward />} onRight={() => scrollByOneCard('right')} />
                    </>
                )}
            </div>
        </Container>
    );
}

export default Carousel;
