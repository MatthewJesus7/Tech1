
import Card from "./Card";
import Notes from "../items/Notes"
import SelectOrFind from "./MenuInner/SelectOrFind";

const SelectedCard = ({ onCheckChange, items = [] }) => {

    const isItemsArray = Array.isArray(items) && items.length > 0;

    return (
        <div 
        className={`border rounded-t-xl rounded-b-lg w-full mt-1 
        ${items.length > 0
            ? 'h-[670px]'
            : 'h-96'
        }
        `}>
            {items.length === 0 && !onCheckChange ? (
                <SelectOrFind/>
            ) : (
                <div className="size-full flex justify-between">
                    {isItemsArray && items.length > 0 ? (
                        items.map((item, index) => (
                            <div key={index} className="h-1/2 w-[49.5%] ">
                                {/* Renderizando o Card */}
                                <Card
                                    type="card product_adapted notes_false"
                                    link={item.link}
                                    target={item.target}
                                    rel={item.rel}
                                    title={item.title}
                                    price={item.price}
                                    total_price={item.total_price}
                                    image_url={item.image_url}
                                    customtitle="product_elipsis"
                                    menuValue={false}
                                    changeMenuValue={item.changeMenuValue}
                                    brand={item.brand}
                                />
                                
                                {/* Renderizando o Notes */}
                                <Notes
                                    customclass='compare_notes'
                                    custo_beneficio={item.custo_beneficio}
                                    hardware={item.hardware}
                                    camera={item.camera}
                                    tela={item.tela}
                                    desempenho={item.desempenho}
                                />
                            </div>
                        ))
                    ) : (
                        <SelectOrFind/>
                    )}
                </div>
            )}
        </div>
    );
};

export default SelectedCard;
