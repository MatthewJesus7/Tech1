const LoadingAbout = ({customclass}) => {
    return(
        <div className={`loading_image ${customclass}`}>

            <div className="loading_title"></div>
            <div className="loading_title mini sm:hidden"></div>

            <div className="loading_text w-[78%] mt-24"></div>
            <div className="loading_text w-[80%]"></div>
            <div className="loading_text"></div>
            <div className="loading_text"></div>
            <div className="loading_text w-[72%]"></div>
            <div className="loading_text w-[58%]"></div>
        </div>
    );
}

export default LoadingAbout;