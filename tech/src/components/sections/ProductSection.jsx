import Card from "../layout/Card";
import BigCard from "../layout/BigCard";
import { useState } from "react";

function ProductSection({ items, topCard, bottomCard }) {

    // Cria um array de estados para cada item do menu
    const [menuValues, setMenuValues] = useState(Array(items.length).fill(false));

    const changeMenuValue = (index) => {
        // Atualiza o estado de um card específico
        const updatedMenuValues = [...menuValues];
        updatedMenuValues[index] = true;
        setMenuValues(updatedMenuValues);
        closeMenu(index);
    }

    const closeMenu = (index) => {
        if (menuValues[index] === true) {
            const updatedMenuValues = [...menuValues];
            updatedMenuValues[index] = false;
            setMenuValues(updatedMenuValues);
        };
    }

    return (
        <div className="flex flex-wrap">

            <BigCard
                item={topCard}
                customclass="lg:mr-5"
            ></BigCard>

            {items.map((item, index) => (
                <div key={index}
                    className={`card product p-0 mb-1 mr-1 sm:mr-5 sm:mb-5 relative overflow-hidden rounded-xl
                        ${menuValues[index] ? 'product_adapted' : 'product'}`}
                >
                    <Card
                        type={`card
                            ${menuValues[index] ? 'product_adapted' : 'product'}`}
                        link={item.link}
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
                        menuValue={menuValues[index]}
                        changeMenuValue={() => changeMenuValue(index)}
                        brand={item.brand}
                    />
                </div>
            ))}

            <BigCard item={bottomCard}></BigCard>
        </div>
    )
}

export default ProductSection;
