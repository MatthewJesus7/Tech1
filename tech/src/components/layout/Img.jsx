function Img({ children, customImg, backgroundImage, backgroundSize, backgroundPosition, customclass }) {
    return(
        <div className={`min-w-full min-h-full ${customclass}`}>
            <div
            className={` min-w-full min-h-full flex justify-center items-top ${customImg}`}
            style={{
                backgroundImage: backgroundImage, backgroundSize: backgroundSize, backgroundPosition: backgroundPosition,
                backgroundRepeat: 'no-repeat'
            }}
            >
                {children}
            </div>
        </div>
    )
}

export default Img