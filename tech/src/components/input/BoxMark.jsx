function BoxMark({text, id, value, onSelect}) {

    const handleChange = (e) => {
        onSelect(e.target.value);
      };
    
    return(
        <label htmlFor={id} className="my-1">
            <input
            type="radio"
            id={id}
            name="filter"
            value={value}
            className="size-4"
            onChange={handleChange}
            />
            <span className="ml-1">{text}</span>
        </label>

    )
}

export default BoxMark