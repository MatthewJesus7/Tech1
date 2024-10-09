import Card from "../layout/Card"
import { useState } from "react";

const FooterList = ({ items, brand }) => {

    const [selectedBrand, setSelectedBrand] = useState(brand);

    return(
        <>
        {items
        .filter(card => card.brand === selectedBrand)
        .map((item, index) => (
            <li key={index} className="-mb-2.5">
            <Card
                type='partner'
                customtitle='text-sm'
                link={item.link}
                target={item.target}
                rel={item.rel}
                title={item.title}
            />
            </li>
        ))}
        </>
    );
};

export default FooterList;