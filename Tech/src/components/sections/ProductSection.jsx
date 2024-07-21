import Card from "../layout/Card";
import BigCard from "../layout/BigCard";

function ProductSection({ items }) {
    return(
        <div className="flex flex-wrap justify-center items-center mt-5">
            
            <BigCard></BigCard>
            {items.map((item, index) => (
                    <div key={index}>
                        <Card
                            type={item.type}
                            typeInner={item.typeInner}
                            link={item.link}
                            target={item.target}
                            rel={item.rel}
                            title={item.title}
                            price={item.price}
                            backgroundImage={item.backgroundImage}
                            colors={item.colors}
                        />
                    </div>
                ))}
        </div>
    )
}

export default ProductSection