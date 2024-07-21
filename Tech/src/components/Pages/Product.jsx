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
            link: "../Pages/Product",
            type: "sm:card medium_card sm:mb-5 mb-1 product",
            title: "celular x",
            price: "a partir de $10.00",
            backgroundImage: "url('/path/to/image1.jpg')"
        },
        {
            type: "sm:card medium_card sm:mb-5 mb-1 product",
            title: "Item 2",
            price: "$20.00",
            backgroundImage: "url('/path/to/image2.jpg')"
        },
        {
            type: "sm:card medium_card sm:mb-5 mb-1 product",
            title: "Item 3",
            price: "$30.00",
            backgroundImage: "url('/path/to/image3.jpg')"
        },
        {
            type: "sm:card medium_card sm:mb-5 mb-1 product",
            title: "Item 4",
            price: "$40.00",
            backgroundImage: "url('/path/to/image4.jpg')"
        },
        {
            type: "sm:card medium_card sm:mb-5 mb-1 product",
            title: "Item 5",
            price: "$50.00",
            backgroundImage: "url('/path/to/image5.jpg')"
        }
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
            
            <ProductSection items={productItems}/>

            <PartnersSection></PartnersSection>

        </div>
    )
}

export default Product