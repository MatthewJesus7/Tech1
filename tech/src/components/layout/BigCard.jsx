import Card from "./Card"

function BigCard({ item, customclass }) {
    return(
        <div className={`big_card sm:mb-5 mb-1 mr-1 sm:mr-5 p-0 ${customclass}`}>
                        <Card
                            type="card big_card"
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
    )
}

export default BigCard