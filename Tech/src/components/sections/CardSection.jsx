import Section from "./Section"
import Carousel from "../layout/Carousel"

function CardSection({ customclass, customclassinner }) {

    const carouselItems = [
        {
            type: " card ",
            link: "https://amzn.to/3LBFG5h",
            title: "Xiaomi Redmi Note 11",
            price: "R$ 849,95",
            backgroundImage: "url('https://m.media-amazon.com/images/I/61sJSKeJExL._AC_SX569_.jpg')"
        },
        {
            type: " card ",
            link: "https://amzn.to/3LSa63z",
            title: "Motorola Moto G34",
            price: "R$ 850,90",
            backgroundImage: "url('https://m.media-amazon.com/images/I/51ezdcOv0qL._AC_SX679_.jpg')",
        },
        {
            type: " card ",
            link: "https://amzn.to/4feRBDK",
            title: "Motorola Moto G53 5G",
            price: "R$ 899,00",
            backgroundImage: "url('https://m.media-amazon.com/images/I/51aNP7WdtcL._AC_SX679_.jpg')",
        },
        {
            type: " card ",
            link: "https://amzn.to/3WbGLWu",
            title: "Galaxy A05s",
            price: "R$ 979,00",
            backgroundImage: "url('https://m.media-amazon.com/images/I/51oGirlz2xL._AC_SX569_.jpg')",
        },
        {
            type: " card ",
            link: "https://amzn.to/3y9mPvj",
            title: "Redmi Note 12",
            price: "R$ 1.129,99",
            backgroundImage: "url('https://m.media-amazon.com/images/I/516d7C9LrtL._AC_SX569_.jpg')",
        },
    ];

    return( 
        <Section customclass={` ml-2 py-3 -mt-28 ${customclass}`}>

            <h2 className={`relative text-white lg:text-black ${customclassinner}`}>Veja Nossos Favoritos</h2>

            <Carousel items={carouselItems}
            ></Carousel>

        </Section>
    )
}

export default CardSection