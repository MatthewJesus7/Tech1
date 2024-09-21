// "custo_beneficio": "7.8 ",
// "hardware": "8.7 ",
// "tela": "8.6 ",
// "camera": "8.4 ",
// "desempenho": "8.5 "

import XButton from "../items/Buttons/XButton"

const Notes = ({custo_beneficio, hardware, camera, tela, desempenho, customclass, handleOnClick}) => {
    return(
        <div 
        className={`flex justify-end overflow-hidden hover:glass rounded-md
        ${customclass}`}>

            {/* <div className="mr-3 text-2xl
            text-white mix-blend-difference
            animated hover:ease-in-out hover:duration-300"
            onClick={handleOnClick}
            >X</div> */}

            <XButton 
            customclass="-mr-2 -mt-2 h-14 text-2xl
            text-white mix-blend-difference
            animated hover:ease-in-out hover:duration-300"
            handleOnClick={handleOnClick}>
            </XButton>

            <ul className=" h-full w-[105px] text-end rounded-md bg-white">
                <li>
                    <div>
                        <p>custo beneficio</p>
                        <p className="text-lg">{custo_beneficio}</p>
                    </div>
                </li>
                <li>
                    <div>
                        <p>hardware</p>
                        <p className="text-lg">{hardware}</p>
                    </div>
                </li>
                <li>
                    <div>
                        <p>câmera</p>
                        <p className="text-lg">{camera}</p>
                    </div>
                </li>
                <li>
                    <div>
                        <p>tela</p>
                        <p className="text-lg">{tela}</p>
                    </div>
                </li>
                <li>
                    <div>
                        <p>desempenho</p>
                        <p className="text-lg">{desempenho}</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Notes;