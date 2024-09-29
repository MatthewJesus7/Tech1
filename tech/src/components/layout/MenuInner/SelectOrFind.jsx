import { IoIosSearch } from "react-icons/io";

const SelectOrFind = () => {
    return(
        <div className="px-5 mx-auto">
        <IoIosSearch 
        className="text-7xl text-gray-300 mx-auto mt-32" />
        <p className="text-center text-gray-500">
            Parece que você ainda não pesquisou nenhum item, faça uma pesquisa para comparar os itens!
        </p>
    </div>
    );
};

export default SelectOrFind;