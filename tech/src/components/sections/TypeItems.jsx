import Carousel from "../layout/Carousel"

function TypeItems({ customclass }) {

    const carouselTypes = [
        {
            // link: "#",
            type: "small_card",
            title: "celular x",
            backgroundImage: "url('/path/to/image1.jpg')"
        },
        {
            // link: "#",
            type: "small_card",
            title: "celular x",
            backgroundImage: "url('/path/to/image1.jpg')"
        },
        {
            // link: "#",
            type: "small_card",
            title: "celular x",
            backgroundImage: "url('/path/to/image1.jpg')"
        },
        {
            // link: "#",
            type: "small_card",
            title: "celular x",
            backgroundImage: "url('/path/to/image1.jpg')"
        },
        {
            // link: "#",
            type: "small_card",
            title: "celular x",
            backgroundImage: "url('/path/to/image1.jpg')"
        },
    ]

    return(
        <>
        <Carousel items={carouselTypes} customclass={customclass}/>
        </>
    )
}

export default TypeItems