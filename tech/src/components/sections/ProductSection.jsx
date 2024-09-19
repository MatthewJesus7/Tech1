import Card from "../layout/Card";
import BigCard from "../layout/BigCard";

function ProductSection({ items, topCard, bottomCard }) {  
    
    return(
        <div className="flex flex-wrap"
        >

            <BigCard
            item={topCard}
            customclass="lg:mr-5"
            ></BigCard>

            {items.map((item, index) => (
                    <div key={index}
                    className="product p-0 mb-1 mr-1 sm:mr-5 sm:mb-5"
                    >
                        <Card
                            type="product card"
                            link={item.link}
                            target={item.target}
                            rel={item.rel}
                            title={item.title}
                            price={item.price}
                            totalPrice={item.totalPrice}
                            backgroundImage={item.backgroundImage}
                            colors={item.colors}
                            customtitle={item.customtitle}
                            custo_beneficio={item.custo_beneficio}
                            hardware={item.hardware}
                            camera={item.camera}
                            tela={item.tela}
                            desempenho={item.desempenho}
                        />
                    </div>
                ))}

                <BigCard item={bottomCard}></BigCard>
        </div>
    )
}

export default ProductSection