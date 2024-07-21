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
            link: "https://amzn.to/3WbGLWu",
            title: "Sansung Galaxy A05s",
            price: "R$ 979,00",
            backgroundImage: "url('https://m.media-amazon.com/images/I/51oGirlz2xL._AC_SX569_.jpg')",
            // typeInner: 'product',
            // colors: ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500'],
        },
        {
            type: "sm:card medium_card sm:mb-5 mb-1 product",
            link: "https://amzn.to/3zNe6PL",
            title: "Sansung Galaxy A25 5G",
            price: "R$ 1.199,00",
            backgroundImage: "url('https://m.media-amazon.com/images/I/41VUO7JwA1L._AC_SX569_.jpg')"
        },
        {
            type: "sm:card medium_card sm:mb-5 mb-1 product",
            link: "https://amzn.to/3zNe6PL",
            title: "Redmi Note 13 4G",
            price: "R$ 1.209,90",
            backgroundImage: "url('https://gazin-images.gazin.com.br/I-2m6C1MopVBRIQFsOJI5cYeiy4=/1920x/filters:format(webp):quality(75)/https://gazin-images.gazin.com.br/B5rOtIdJucsTgKFdcmivIiM5SzU=/filters:format(webp):quality(75)/https://gazin-marketplace.s3.amazonaws.com/midias/imagens/2024/05/smartphone-xiaomi-redmi-note-13-4g-66-octa-core-256gb-8gb-camera-tripla-162405161440.jpg')",
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

            <Section>
                <h2>Selecionados a Dedo</h2>
                <ProductSection items={productItems}/>
            </Section>

            <PartnersSection></PartnersSection>

        </div>
    )
}

export default Product