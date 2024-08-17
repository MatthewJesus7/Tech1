import Card from "./Card"

function BigCard({ item, customclass }) {
    return(
    <div className={`w-full max-w-[808px] sm:mb-5 mb-1 ${customclass}`}>
                        <Card
                            type="big_card"
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
    )
}

export default BigCard