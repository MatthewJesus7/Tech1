import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SimpleCarousel = ({ items }) => {
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startPos, setStartPos] = useState(0);
    const [currentTranslate, setCurrentTranslate] = useState(0);
    const [prevTranslate, setPrevTranslate] = useState(0);
    const [itemWidth, setItemWidth] = useState(0);

    // Definindo o itemWidth com base no tamanho do primeiro item
    useEffect(() => {
        if (carouselRef.current) {
            setItemWidth(carouselRef.current.clientWidth / items.length);
        }
    }, [items.length]);

    // Função para navegar para o próximo ou anterior slide
    const scrollByOneCard = (direction) => {
        const newIndex = direction === 'left' ? currentIndex - 1 : currentIndex + 1;
        if (newIndex >= 0 && newIndex < items.length) {
            setCurrentIndex(newIndex);
            carouselRef.current.style.transform = `translateX(${-newIndex * itemWidth}px)`;
        }
    };

    // Funções de arrastar
    const startDrag = (event) => {
        setIsDragging(true);
        setStartPos(getPositionX(event));
    };

    const endDrag = () => {
        setIsDragging(false);
        const movedBy = currentTranslate - prevTranslate;

        if (movedBy < -itemWidth / 4 && currentIndex < items.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        }

        if (movedBy > itemWidth / 4 && currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }

        setPositionByIndex();
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

    const setPositionByIndex = () => {
        const newTranslate = currentIndex * -itemWidth;
        setCurrentTranslate(newTranslate);
        setPrevTranslate(newTranslate);
        carouselRef.current.style.transform = `translateX(${newTranslate}px)`;
    };

    return (
        <div className="carousel-container relative w-full overflow-hidden">
            {/* Botão para navegar para a esquerda */}
            <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
                onClick={() => scrollByOneCard('left')}
            >
                <IoIosArrowBack />
            </button>

            {/* Container do carrossel */}
            <div
                className="flex transition-transform duration-300 ease-in-out"
                ref={carouselRef}
                onMouseDown={startDrag}
                onMouseMove={drag}
                onMouseUp={endDrag}
                onTouchStart={startDrag}
                onTouchMove={drag}
                onTouchEnd={endDrag}
                style={{ width: `${items.length * 100}%` }} // Largura dinâmica com base no número de itens
            >
                {/* Itens do carrossel */}
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="carousel-item flex-shrink-0 w-full"
                        style={{ width: `${100 / items.length}%` }} // Largura do item com base no número total
                    >
                        <img src={item.image} alt={item.title} className="w-full h-auto" />
                        <div className="text-center p-4">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Botão para navegar para a direita */}
            <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
                onClick={() => scrollByOneCard('right')}
            >
                <IoIosArrowForward />
            </button>
        </div>
    );
};

export default SimpleCarousel;
