import Card from "./Card"

function BigCard() {
    return(
    <div className="w-full max-w-[808px] ml-2 mr-5 sm:mb-5 mb-1">
        <Card customclass=" big_card "
        link="https://amzn.to/3LSa63z"
        title="Motorola Moto G34"
        price="R$ 850,90"
        backgroundImage="url('https://m.media-amazon.com/images/I/51ezdcOv0qL._AC_SX679_.jpg')"></Card>
    </div>
    )
}

export default BigCard