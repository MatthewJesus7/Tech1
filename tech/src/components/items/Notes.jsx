// "custo_beneficio": "7.8 ",
// "hardware": "8.7 ",
// "tela": "8.6 ",
// "camera": "8.4 ",
// "desempenho": "8.5 "

const Notes = ({custo_beneficio, hardware, camera, tela, desempenho, customclass}) => {
    return(
        <div 
        className={`flex h-full justify-end 
        ${customclass}`}>
            <ul className="flex flex-col justify-between h-full w-[105px] text-end rounded-md bg-white">
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