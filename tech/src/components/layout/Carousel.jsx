import React, { useState, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Container from '../layout/Container';
import Card from './Card';
import CarouselButton from "../items/Buttons/CarouselButton";

function Carousel({ items, type, showNotes, customtitle, customclass }) {
    let itemWidth = 256;

    function updateItemWidth() {
    if (window.matchMedia("(min-width: 440px)").matches) {
        itemWidth = 394;
    } else {
        itemWidth = 256;
    }
    }

    updateItemWidth();

    window.addEventListener('resize', updateItemWidth);
    const marginWidth = 20;
    const carouselRef = useRef(null);
    const [showButton, setShowButton] = useState(false);
    // const [menuValue, setMenuValue] = useState(false);

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
        customclass={` min-[1px]:w-[110vw] -ml-[10vw] overflow-x-hidden  ${customclass}`}>
            <div
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                className="w-full relative cursor-pointer">
                <div
                    className="flex transition-transform duration-500 p-2.5 pl-[10vw] pr-[8vw] pb-7 w-full
                    overflow-x-auto snap-x snap-mandatory carousel-hide-scrollbar"
                    ref={carouselRef}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {items.map((item, index) => (
                        <div key={index}>
                            <Card
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
                                showNotes={ showNotes ||item.showNotes}
                                label={item.label}
                            />
                        </div>
                    ))}
                </div>

                {showButton && (
                    <>
                        <CarouselButton
                        customclass=" left-[10%] cPrev "
                        text={<IoIosArrowBack />}
                        onLeft={() => scrollByOneCard('left')} />

                        <CarouselButton
                        customclass=" right-[10%] cNext "
                        text={<IoIosArrowForward />} onRight={() => scrollByOneCard('right')} />
                    </>
                )}
            </div>
        </Container>
    );
}

export default Carousel;
