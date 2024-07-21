import Section from "./Section"
import Carousel from "../layout/Carousel"

function CardSection() {

    const carouselItems = [
        {
            type: "card",
            link: "https://amzn.to/3LSa63z",
            title: "Motorola Moto G34",
            price: "R$ 850,90",
            backgroundImage: "url('https://m.media-amazon.com/images/I/51ezdcOv0qL._AC_SX679_.jpg')"
        },
        {
            type: "card",
            link: "https://amzn.to/3WbGLWu",
            title: "Sansung Galaxy A05s",
            price: "R$ 979,00",
            backgroundImage: "url('https://m.media-amazon.com/images/I/51oGirlz2xL._AC_SX569_.jpg')"
        },
        {
            type: "card",
            link: "https://amzn.to/3zNe6PL",
            title: "Sansung Galaxy A25 5G",
            price: "R$ 1.199,00",
            backgroundImage: "url('https://m.media-amazon.com/images/I/41VUO7JwA1L._AC_SX569_.jpg')"
        },
        {
            type: "card",
            link: "https://amzn.to/3zNe6PL",
            title: "Redmi Note 13 4G",
            price: "R$ 1.209,90",
            backgroundImage: "url('https://gazin-images.gazin.com.br/I-2m6C1MopVBRIQFsOJI5cYeiy4=/1920x/filters:format(webp):quality(75)/https://gazin-images.gazin.com.br/B5rOtIdJucsTgKFdcmivIiM5SzU=/filters:format(webp):quality(75)/https://gazin-marketplace.s3.amazonaws.com/midias/imagens/2024/05/smartphone-xiaomi-redmi-note-13-4g-66-octa-core-256gb-8gb-camera-tripla-162405161440.jpg')"
        },
    ];

    return( 
        <Section customclass=" ml-2 py-3 -mt-28 ">

            <h2 className="relative text-white sm:text-black">Veja Nossos Favoritos</h2>

            <Carousel items={carouselItems}
            ></Carousel>

        </Section>
    )
}

export default CardSection