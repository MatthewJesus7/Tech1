import Container from "../../layout/Container"

function CarouselButton({ onRight, onLeft, customclass, text }) {
    return(
        <Container>
            <button onClick={onLeft || onRight} className={`carousel_button  ${customclass}`}>
                <p className=" text-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {text}
                </p>
            </button>
        </Container>
    )
}

export default CarouselButton

// absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2