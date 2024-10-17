import Section from "../sections/Section";
import Img from "./Img";

const HeroCard =({ customclass, title, titleColor, text, textButton, typeButton, img, customImg, href, target, rel, backgroundSize, backgroundPosition, backgroundColor, textStyle, imgSize}) => {

    function navigateTo(url) {
        if (href === '#')
        window.location.href = url;
    }

    return(

        <section
        className={` relative flex flex-wrap lg:flex-nowrap h-full ${customclass}`}>

            <Section 
            customclass={`${titleColor} 
            absolute lg:static flex-shrink-0 lg:w-1/2 pt-[5%] xl:flex xl:justify-end
            `}>
                    <div 
                    className={`xl:max-w-[518px] ${textStyle}`}>
                        <h1 className="text-4xl ">
                            {title}
                        </h1>
                        <p
                        className={`text-lg mt-2.5 mb-3`}>
                            {text}
                        </p>
                        <a href={href} target={target} rel={rel}>
                            <button
                            className={`button ${typeButton}`}
                                onClick={() => navigateTo('/about')}
                                >
                                    <p>
                                        {textButton}
                                    </p>
                            </button>
                        </a>
                    </div>
                
                
            </Section>

            <aside className={`flex size-full ${imgSize}`}>
                <Img
                backgroundSize={backgroundSize}
                backgroundPosition={backgroundPosition}
                customImg={customImg}
                customclass={backgroundColor}
                backgroundImage={img}>
                </Img>
            </aside>
            
        </section>
    )
}

export default HeroCard;