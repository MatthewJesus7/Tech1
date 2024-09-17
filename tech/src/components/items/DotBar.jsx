const DotBar = ({ isActive }) => {
    return(
        <div
        className={`bg-gray-400 sm:w-24 md:w-32 lg:w-40 sm:h-1 mr-4 sm:rounded-md
        size-4 rounded-full border border-gray-300
        ${isActive ? 'bg-gray-600' : 'bg-gray-300'}`}>
            
        </div>
    )
}

export default DotBar