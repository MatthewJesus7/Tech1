import Section from "./Section"
import Carousel from "../layout/Carousel"

function CardSection() {

    const carouselItems = [
        {
            link: "../Pages/Product",
            type: "card",
            title: "celular x",
            price: "a partir de $10.00",
            backgroundImage: "url('/path/to/image1.jpg')"
        },
        {
            type: "card",
            title: "Item 2",
            price: "$20.00",
            backgroundImage: "url('/path/to/image2.jpg')"
        },
        {
            type: "card",
            title: "Item 3",
            price: "$30.00",
            backgroundImage: "url('/path/to/image3.jpg')"
        },
        {
            type: "card",
            title: "Item 4",
            price: "$40.00",
            backgroundImage: "url('/path/to/image4.jpg')"
        },
        {
            type: "card",
            title: "Item 5",
            price: "$50.00",
            backgroundImage: "url('/path/to/image5.jpg')"
        }
    ];

    return( 
        <Section customclass=" ml-2 py-3 -mt-28 ">

            <h2 >Veja Nossos Favoritos</h2>

            <Carousel items={carouselItems}
            ></Carousel>

        </Section>
    )
}

export default CardSection