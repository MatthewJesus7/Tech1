function Section(props) {
    return(
    <section className={`" max-w-7xl w-full mx-auto px-[5%] " ${props.customclass}`}>
        {props.children}
    </section>
    )
}

export default Section