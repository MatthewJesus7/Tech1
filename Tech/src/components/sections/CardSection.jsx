import Section from "./Section"
import Carousel from "../layout/Carousel"

function CardSection({ customclass, customclassinner }) {

    const carouselItems = [
        {
            type: " card ",
            link: "https://amzn.to/3ylNZPO",
            title: "Xiaomi Redmi Note 11",
            price: "R$ 844,95",
            priceFull: "R$ 1.098,00",
            backgroundImage: "url('https://m.media-amazon.com/images/I/61sJSKeJExL._AC_SX569_.jpg')"
        },
        {
            type: " card ",
            link: "https://amzn.to/4dmSl8a",
            title: "Motorola Moto G34",
            price: "R$ 849,00",
            priceFull: "R$ 1.098,00",
            backgroundImage: "url('https://m.media-amazon.com/images/I/51ezdcOv0qL._AC_SX679_.jpg')",
        },
        {
            type: " card ",
            link: "https://amzn.to/4feRBDK",
            title: "Motorola Moto G53 5G",
            price: "R$ 899,00",
            priceFull: "R$ 1.098,00",
            backgroundImage: "url('https://m.media-amazon.com/images/I/51aNP7WdtcL._AC_SX679_.jpg')",
        },
        {
            type: " card ",
            link: "https://amzn.to/3LKfrcY",
            title: "Galaxy A05s",
            price: "R$ 969,00",
            priceFull: "R$ 1.098,00",
            backgroundImage: "url('https://m.media-amazon.com/images/I/51oGirlz2xL._AC_SX569_.jpg')",
        },
        {
            type: " card ",
            link: "https://amzn.to/3LLC3K1",
            title: "Samsung Galaxy A14 5G",
            price: "R$ 1.012,00",
            priceFull: "R$ 1.098,00",
            backgroundImage: "url('https://m.media-amazon.com/images/I/61ezr50FpsL._AC_SX569_.jpg')",
        },
        {
            type: " card ",
            link: "https://amzn.to/3Sui0DD",
            title: "Redmi Note 12",
            price: "R$ 1.098,00",
            priceFull: "R$ 1.098,00",
            backgroundImage: "url('https://m.media-amazon.com/images/I/516d7C9LrtL._AC_SX569_.jpg')",
        },
    ];

    return( 
        <Section customclass={` py-3 -mt-28 ${customclass}`}>

            <h2 className={`relative text-white lg:text-black pb-4 ${customclassinner}`}>Veja Nossos Favoritos</h2>

            <Carousel items={carouselItems}
            ></Carousel>

        </Section>
    )
}

export default CardSection