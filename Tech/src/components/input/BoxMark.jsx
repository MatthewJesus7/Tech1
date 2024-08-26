function BoxMark({text, id, value}) {
    return(
        <>
        <label for={id} className="my-1">
            <input
            type="checkbox"
            id={id}
            name="options"
            value={value}
            className="size-4"
            />
            <span className="pl-1">{text}</span>
        </label>
        </>
    )
}

export default BoxMark