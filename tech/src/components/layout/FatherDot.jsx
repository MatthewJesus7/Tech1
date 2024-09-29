import DotBar from "../items/DotBar";

const FatherDot = ({dots, currentIndex}) => {
    return(
        <div className='flex absolute bottom-36
        left-1/2 -translate-x-1/2 father_dot'>
             {dots.map((dot, index) => (
            <DotBar
            key={index} isActive={index === currentIndex} />
        ))}
        </div>
    )
}

export default FatherDot;