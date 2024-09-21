import Card from "./Card"
import { useState } from "react";

function BigCard({ item, customclass }) {

    const [menuValue, setMenuValue] = useState(false);

    const changeMenuValue = () => {
        setMenuValue(true);
        closeMenu();
    }

    const closeMenu = () => {
        if (menuValue === true) {
            setMenuValue(false)
        };
    }

    return(
        <div className={`big_card sm:mb-5 mb-1 mr-1 sm:mr-5 p-0 ${customclass}`}>
                        <Card
                            type="card big_card"
                            // link={item.link}
                            // target={item.target}
                            // rel={item.rel}
                            // title={item.title}
                            // price={item.price}
                            // total_price={item.total_price}
                            // image_url={item.image_url}
                            // colors={item.colors}
                            // customtitle={item.customtitle}
                            // custo_beneficio={item.custo_beneficio}
                            // hardware={item.hardware}
                            // camera={item.camera}
                            // tela={item.tela}
                            // desempenho={item.desempenho}
                            menuValue={menuValue}
                            changeMenuValue={changeMenuValue}
                        />
                    </div>
    )
}

export default BigCard