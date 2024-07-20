function Link({ text, href, target, rel, onClick, customclass, textCustom }) {
    return(
            <a className={` hover:underline hover:cursor-pointer ${customclass} `}
            href={href}
            target={target}
            rel={rel}
            onClick={onClick}
            >
                <p className={textCustom}>{text}</p>
            </a>
    )
}

export default Link