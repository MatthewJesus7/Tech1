function Button({ text, customClass, onClick }) {
    return(
        <button onClick={onClick} className={customClass}>{text}</button>
    )
}

export default Button