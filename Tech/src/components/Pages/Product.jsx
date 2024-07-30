import HalfHeroSection from "../sections/HalfHeroSection"
import HeroSection from "../sections/HeroSection";
import CardSection from "../sections/CardSection";
import TypeItems from "../sections/TypeItems";
import PartnersSection from "../sections/PartnersSection";

import Section from "../sections/Section";
import Carousel from "../layout/Carousel"
import ProductSection from "../sections/ProductSection";

function Product() {

    const topCard = [
        {
        link: "https://amzn.to/3ylNZPO",
        title: "Xiaomi Redmi Note 11",
        price: "R$ 844,95",
        backgroundImage: "url('https://m.media-amazon.com/images/I/61sJSKeJExL._AC_SX569_.jpg')"
    },
    ]

    const bottomCard = [
        {
        link: "https://amzn.to/3A6Vcnm",
        title: "Redmi Note 12 Pro 4G",
        price: "R$ 1.394,99",
        backgroundImage: "url('https://m.media-amazon.com/images/I/5142s1BuATL._AC_SX569_.jpg')"
    },
    ]
    
    const productItems = [
        {
            type: "sm:card medium_card sm:mb-5 mb-1 product",
            link: "https://amzn.to/4dmSl8a",
            title: "Motorola Moto G34",
            price: "R$ 849,00",
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
            link: "https://amzn.to/3LKfrcY",
            title: "Galaxy A05s",
            price: "R$ 969,00",
            backgroundImage: "url('https://m.media-amazon.com/images/I/51oQc-4fAeL.__AC_SX300_SY300_QL70_ML2_.jpg')",
        },
        {
            type: "sm:card medium_card sm:mb-5 mb-1 product",
            link: "https://amzn.to/3LLC3K1",
            title: "Samsung Galaxy A14 5G",
            price: "R$ 1.012,00",
            backgroundImage: "url('https://m.media-amazon.com/images/I/61ezr50FpsL._AC_SX569_.jpg')",
        },
        {
            type: "sm:card medium_card sm:mb-5 mb-1 product",
            link: "https://amzn.to/3Sui0DD",
            title: "Redmi Note 12",
            price: "R$ 1.098,00",
            backgroundImage: "url('https://m.media-amazon.com/images/I/516d7C9LrtL._AC_SX569_.jpg')",
        },
        {
            type: "sm:card medium_card sm:mb-5 mb-1 product",
            link: "https://amzn.to/3YwZZs6",
            title: "Redmi Note 13 4G",
            price: "R$ 1.187,00",
            backgroundImage: "url('https://m.media-amazon.com/images/I/41zK0DZZNRL._AC_SX569_.jpg')",
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
            link: "https://amzn.to/3WtLIKc",
            title: "Celular Samsung Galaxy A25 5G",
            price: "R$ 1.199,00",
            backgroundImage: "url('https://m.media-amazon.com/images/I/51Cc4iXUumL._AC_SX679_.jpg')",
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
                <ProductSection
                items={productItems}
                topCard={topCard}
                bottomCard={bottomCard}
                />
            </Section>

            <PartnersSection></PartnersSection>

        </div>
    )
}

export default Product