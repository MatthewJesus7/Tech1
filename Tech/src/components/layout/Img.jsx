function Img({ children, customclass, backgroundImage, custom }) {
    return(
            <div className={` ${custom}`}>
                <div
                className={` min-w-full h-96 lg:size-[560px] bg-opacity-75 flex justify-center items-top ${customclass}`}
                style={{
                    backgroundImage: backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
                >
                    {children}
                </div>
            </div>
    )
}

export default Img