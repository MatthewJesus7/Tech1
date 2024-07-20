import Carousel from "../Carousel"

const carouselItems = [
    {
        // link: "#",
        type: "medium_card",
        title: "celular x",
        price: "a partir de $10.00",
        backgroundImage: "url('/path/to/image1.jpg')"
    },
    {
        type: "medium_card",
        title: "Item 2",
        price: "$20.00",
        backgroundImage: "url('/path/to/image2.jpg')"
    },
    {
        type: "medium_card",
        title: "Item 3",
        price: "$30.00",
        backgroundImage: "url('/path/to/image3.jpg')"
    },
    {
        type: "medium_card",
        title: "Item 4",
        price: "$40.00",
        backgroundImage: "url('/path/to/image4.jpg')"
    },
    {
        type: "medium_card",
        title: "Item 5",
        price: "$50.00",
        backgroundImage: "url('/path/to/image5.jpg')"
    }
];


function Search() {
    return(
        <>
            <form className="mb-10">
                <div>
                    <label htmlFor="isearch">
                        <input
                        className="bg-gray-100 w-2/3 h-8 rounded-lg p-1 border border-gray-300"
                        placeholder=""
                        type="text"
                        name="search"
                        id="isearch"
                        />
                    </label>
                </div>
            </form>

            <h2>Você também pode gostar:</h2>
            <Carousel items={carouselItems} />
        </>
    )
}

export default Search