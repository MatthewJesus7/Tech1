function Img({ children, customclass, backgroundImage, custom }) {
    return(
            <div className={`my-72 lg:my-0 ${custom}`}>

                <div className={`absolute lg:static w-full h-[560px] lg:size-[560px] bg-opacity-75 flex justify-center items-center ${customclass}`}
                style={{ backgroundImage: backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center',
                }}
                >
                    {children}
                </div>
            </div>
    )
}

export default Img