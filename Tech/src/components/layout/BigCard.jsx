import Card from "./Card"

function BigCard({ items, customclass }) {
    return(
    <div className={`w-full max-w-[808px] sm:mb-5 mb-1 ${customclass}`}>
        {items.map((item, index) => (
                    <div key={index}>
                        <Card customclass=" big_card "
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

export default BigCard