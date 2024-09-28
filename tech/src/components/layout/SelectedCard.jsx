import { IoIosSearch } from "react-icons/io";
import Card from "./Card";

const SelectedCard = ({ onCheckChange, items = [] }) => {
    // Verifique se items é um array
    const isItemsArray = Array.isArray(items) && items.length > 0;

    return (
        <div className="border rounded-lg w-full h-96 relative z-0">
            {items.length === 0 && !onCheckChange ? (
                <div className="px-5">
                    <IoIosSearch className="text-7xl text-gray-300 mx-auto mt-32" />
                    <p className="text-center text-gray-500">
                        Parece que você ainda não pesquisou nenhum item, faça uma pesquisa para comparar os itens!
                    </p>
                </div>
            ) : (
                <div>
                    {/* Verifica se items é um array válido antes de chamar .map */}
                    {isItemsArray ? (
                        items.map((item, index) => (
                            <div key={index} className={`h-32 w-full `}>
                                <Card
                                    type={`card product_adapted`}
                                    link={item.link}
                                    target={item.target}
                                    rel={item.rel}
                                    title={item.title}
                                    price={item.price}
                                    total_price={item.total_price}
                                    image_url={item.image_url}
                                    colors={item.colors}
                                    customtitle="product_elipsis"
                                    custo_beneficio={item.custo_beneficio}
                                    hardware={item.hardware}
                                    camera={item.camera}
                                    tela={item.tela}
                                    desempenho={item.desempenho}
                                    menuValue={false}
                                    changeMenuValue={item.changeMenuValue}
                                    brand={item.brand}
                                />
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">
                            Nenhum item foi selecionado ou encontrado.
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};

export default SelectedCard;
