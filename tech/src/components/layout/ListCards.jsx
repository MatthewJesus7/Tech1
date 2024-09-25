import Card from "./Card"

const ListCards = ({ items, onClick}) => {
    return(
        <div className="min-w-full min-h-full">
            {items.map((item, index) => (
                <div key={index}
                    className={`h-32 w-full`}
                >
                    <Card
                        type={`card list_card`}
                        onClick={onClick}
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
                    />
                </div>
            ))}
        </div>
    );
};

export default ListCards;