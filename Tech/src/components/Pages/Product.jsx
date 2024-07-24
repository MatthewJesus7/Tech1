import HalfHeroSection from "../sections/HalfHeroSection"
import HeroSection from "../sections/HeroSection";
import CardSection from "../sections/CardSection";
import TypeItems from "../sections/TypeItems";
import PartnersSection from "../sections/PartnersSection";

import Section from "../sections/Section";
import Carousel from "../layout/Carousel"
import ProductSection from "../sections/ProductSection";

function Product() {

    const productItems = [
        {
            type: "sm:card medium_card sm:mb-5 mb-1 product",
            link: "https://amzn.to/3LSa63z",
            title: "Motorola Moto G34",
            price: "R$ 850,90",
            backgroundImage: "url('https://m.media-amazon.com/images/I/51ezdcOv0qL._AC_SX679_.jpg')",
        },
        {
            type: "sm:card medium_card sm:mb-5 mb-1 product",
            link: "https://amzn.to/4feRBDK",
            title: "Motorola Moto G53 5G",
            price: "R$ 899,00",
            backgroundImage: "url('https://m.media-amazon.com/images/I/51aNP7WdtcL._AC_SX679_.jpg')",
        },
        {
            type: "sm:card medium_card sm:mb-5 mb-1 product",
            link: "https://amzn.to/3WbGLWu",
            title: "Sansung Galaxy A05s",
            price: "R$ 979,00",
            backgroundImage: "url('https://m.media-amazon.com/images/I/51oGirlz2xL._AC_SX569_.jpg')",
        },
        {
            type: "sm:card medium_card sm:mb-5 mb-1 product",
            link: "https://amzn.to/3y9mPvj",
            title: "Redmi Note 12",
            price: "R$ 1.129,99",
            backgroundImage: "url('https://m.media-amazon.com/images/I/516d7C9LrtL._AC_SX569_.jpg')",
        },
        {
            type: "sm:card medium_card sm:mb-5 mb-1 product",
            link: "https://amzn.to/3zNe6PL",
            title: "Sansung Galaxy A25 5G",
            price: "R$ 1.199,00",
            backgroundImage: "url('https://m.media-amazon.com/images/I/51oC7szmO8L._AC_SX569_.jpg')"
        },
        {
            type: "sm:card medium_card sm:mb-5 mb-1 product",
            link: "https://amzn.to/3zNe6PL",
            title: "Xiaomi Redmi Note 13 4G",
            price: "R$ 1.209,90",
            backgroundImage: "url('https://a-static.mlcdn.com.br/350x350/smartphone-xiaomi-redmi-note-13-4g-azul-256gb-tela-667-8gb-de-ram-camera-traseira-tripla-android-13-e-processador-octa-core/soldemariabrasil/6941812762196c/d817089f4e5491d1ed636e17705c1887.jpeg')",
        },
    ];

    return(
        <div className="center bg-gray-50">

            {/* <HalfHeroSection></HalfHeroSection> */}

            <HeroSection></HeroSection>

            {/* <Section>
                <Carousel items={carouselItems}>
                </Carousel>
            </Section> */}

            <CardSection></CardSection>

            <Section id="product_section">
                <h2>Selecionados a Dedo</h2>
                <ProductSection items={productItems}/>
            </Section>

            <PartnersSection></PartnersSection>

        </div>
    )
}

export default Product