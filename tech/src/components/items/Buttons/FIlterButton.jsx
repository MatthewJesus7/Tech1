import { IoFilterOutline } from "react-icons/io5";

function FilterButton({ handleOnClick }) {
    return(
        <button onClick={handleOnClick}
        className="w-20 h-10 bg-white border rounded-md shadow-md; hover:shadow-lg ease-out duration-300 overflow-hidden mr-1 sm:mr-5">
            <IoFilterOutline className="ml-[28px] text-xl"/>
        </button>
    )
}

export default FilterButton;
