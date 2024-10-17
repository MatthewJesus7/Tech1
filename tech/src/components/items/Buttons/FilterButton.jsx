import { IoFilterOutline } from "react-icons/io5";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { HiAdjustments } from "react-icons/hi";

const FilterButton = ({ handleOnClick }) => {
    return(
        <button onClick={handleOnClick}
        className="w-12 h-12 rounded-lg ease-out duration-300 overflow-hidden mr-1 sm:mr-5 hover:bg-gray-200 active:bg-gray-300">
            
            <HiAdjustments
            className="mx-auto text-3xl text-gray-700 hover:text-gray-600 rotate-90"
            />

            {/* <IoFilterOutline 
            className="mx-auto text-2xl hover:text-gray-500 "/> */}
        </button>
    );
};

export default FilterButton;
