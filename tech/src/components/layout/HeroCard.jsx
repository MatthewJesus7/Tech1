import Section from "../sections/Section";
import Img from "./Img";

const HeroCard =({ customclass, title, titleColor, text, textColor, textButton, typeButton, img, customImg, href, target, rel, backgroundSize }) => {

    function navigateTo(url) {
        if (href === '#')
        window.location.href = url;
    }

    return(

        <Section
        customclass={` flex flex-wrap lg:flex-nowrap h-[600px] ${customclass} `}>

            <article className={` relative z-10 pt-[5%] lg:pr-[8%] bg-transparent  h-2/5 ${titleColor}`}>

                <h1 className="text-4xl ">
                    {title}
                </h1>

                <p
                className={`text-lg mt-2.5 mb-3 ${textColor}`}>
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

            </article>
            <aside className="size-full">
                <Img
                backgroundSize={backgroundSize}
                custom={``}
                customclass={customImg}
                backgroundImage={img}>
                </Img>
            </aside>

        </Section>
    )
}

export default HeroCard;