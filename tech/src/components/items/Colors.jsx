import Color from "./Color";

function Colors({ colors = [] }) {
    return(
        <div className="flex justify-center sm:mb-6">

            {colors.map((color, index) => (
                <Color
                    key={index}
                    color={color}
                />
            ))}

        </div>
    )
}

export default Colors