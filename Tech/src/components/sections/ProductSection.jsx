import Card from "../layout/Card";
import BigCard from "../layout/BigCard";

function ProductSection({ items, topCard, bottomCard }) {  
    
    return(
        <div className="flex flex-wrap"
        // justify-center items-center
        >

            <BigCard
            item={topCard}
            customclass="lg:mr-5"
            ></BigCard>

            {items.map((item, index) => (
                    <div key={index}
                    className="max-[500px]:w-full">
                        <Card
                            type=" sm:card medium_card sm:mb-5 mb-1 product "
                            typeInner='product'
                            link={item.link}
                            target={item.target}
                            rel={item.rel}
                            title={item.title}
                            price={item.price}
                            totalPrice={item.totalPrice}
                            backgroundImage={item.backgroundImage}
                            colors={item.colors}
                        />
                    </div>
                ))}

                <BigCard item={bottomCard}></BigCard>
        </div>
    )
}

export default ProductSection