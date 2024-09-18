import Section from "./Section";
import Carousel from "../layout/Carousel";

function ProductTypeSection() {

    const carouselItems = [
        {
            // link: "#",
            type: "card",
            typeInner: 'product',
            title: "celular cor",
            price: "a partir de $10.00",
            backgroundImage: "url('/path/to/image1.jpg')",
            color: "bg-red-500",
            colors: ['bg-red-500'],
        },
        {
            type: "card",
            typeInner: 'product',
            title: "Item 2",
            price: "$20.00",
            backgroundImage: "url('/path/to/image2.jpg')",
            colors: ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500'],
        },
        {
            type: "card",
            typeInner: 'product',
            title: "Item 3",
            price: "$30.00",
            backgroundImage: "url('/path/to/image3.jpg')",
        },
        {
            type: "card",
            typeInner: 'product',
            title: "Item 4",
            price: "$40.00",
            backgroundImage: "url('/path/to/image4.jpg')"
        },
        {
            type: "card",
            typeInner: 'product',
            title: "Item 5",
            price: "$50.00",
            backgroundImage: "url('/path/to/image5.jpg')"
        }
    ];

    return(
        <Section customclass="py-3">
            <Carousel items={carouselItems}/>
        </Section>
    )
}

export default ProductTypeSection
