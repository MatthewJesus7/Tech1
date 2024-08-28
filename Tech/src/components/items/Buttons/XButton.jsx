import { IoIosClose } from "react-icons/io";

function XButton({ handleOnClick, customclass }) {
    return(
        <button onClick={handleOnClick}
        className={` text-6xl ${customclass}`}>
            <p>
                <IoIosClose />
            </p>
        </button>
    )
}

export default XButton