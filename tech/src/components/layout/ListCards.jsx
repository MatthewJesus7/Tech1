import Card from "./Card"

const ListCards = ({ items, onClick, customclass}) => {

    const handleClick = (item) => {
        onClick(item);
    };

    return(
        <div className={`min-w-full min-h-full ${customclass}`}>
            {items.map((item, index) => (
                <div key={index}
                    className={`h-32 w-full`}
                    // (item)
                >
                    <Card
                        type={`card list_card`}
                        // link={item.link}
                        target={item.target}
                        rel={item.rel}
                        title={item.title}
                        price={item.price}
                        total_price={item.total_price}
                        image_url={item.image_url}
                        colors={item.colors}
                        customtitle='product_elipsis'
                        custo_beneficio={item.custo_beneficio}
                        hardware={item.hardware}
                        camera={item.camera}
                        tela={item.tela}
                        desempenho={item.desempenho}
                        menuValue={false}
                        changeMenuValue={item.changeMenuValue}
                        brand={item.brand}
                        onClick={() => handleClick(item)}
                    />
                </div>
            ))}
        </div>
    );
};

export default ListCards;