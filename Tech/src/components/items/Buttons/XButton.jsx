import { IoIosClose } from "react-icons/io";

function XButton({ handleOnClick}) {
    return(
        <button onClick={handleOnClick} className=" absolute top-0 right-[10%] text-6xl ">
            <p>
                <IoIosClose />
            </p>
        </button>
    )
}

export default XButton