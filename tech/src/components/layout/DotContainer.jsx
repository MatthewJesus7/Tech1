import DotBar from "../items/DotBar";

const DotContainer = ({dots, currentIndex}) => {
    return(
        <div className='flex absolute bottom-32
        left-1/2 -translate-x-1/2'>
             {dots.map((dot, index) => (
            <DotBar key={index} isActive={index === currentIndex} />
        ))}
        </div>
    )
}

export default DotContainer;