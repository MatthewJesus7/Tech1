function Container(props) {
    return(
        <div className={` max-w-7x1 w-full flex justify-between mx-auto flex-wrap ${props.customclass}`}>
            {props.children}
        </div>
    )
}

export default Container