import { useRef } from "react";

const TouchCarousel = ({children, customclass}) => {

    const carouselRef = useRef(null);

    const handleTouchStart = (e) => {
        carouselRef.current.style.transition = 'none';
    };

    const handleTouchMove = () => {
        // Adicione lógica se necessário para o movimento de toque
    };

    const handleTouchEnd = () => {
        carouselRef.current.style.transition = ''; // Reaplica a transição após o swipe
    };

    return(
        <div className={customclass}>
            <div
            className="flex transition-transform duration-500 w-full
            overflow-x-auto snap-x snap-mandatory
            
            "
            ref={carouselRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
                >
            {children}
            {/* {items.map((item, index) => (
                <div key={index}>
            
            ))} */}
                </div>
        </div>
    )
}

export default TouchCarousel