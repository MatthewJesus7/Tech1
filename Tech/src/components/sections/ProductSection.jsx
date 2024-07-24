import Card from "../layout/Card";
import BigCard from "../layout/BigCard";

function ProductSection({ items }) {  

    const topCard = [
            {
            link: "https://amzn.to/3LBFG5h",
            title: "Xiaomi Redmi Note 11",
            price: "R$ 849,95",
            backgroundImage: "url('https://m.media-amazon.com/images/I/61sJSKeJExL._AC_SX569_.jpg')"
        },
        ]

        const bottomCard = [
            {
            link: "https://amzn.to/3SjGJKY",
            title: "Redmi Note 12 Pro 4G",
            price: "R$ 1.359,11",
            backgroundImage: "url('https://m.media-amazon.com/images/I/5142s1BuATL._AC_SX569_.jpg')"
        },
        ]

    return(
        <div className="flex flex-wrap justify-center items-center mt-5">

            <BigCard items={topCard}></BigCard>
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
                <BigCard items={bottomCard}></BigCard>
        </div>
    )
}

export default ProductSection