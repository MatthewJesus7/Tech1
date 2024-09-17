const DotBar = ({ isActive }) => {
    return(
        <div className={`bg-gray-400 w-24 h-1 mr-4 rounded-md
        ${isActive ? 'bg-gray-700' : 'bg-gray-400'}`}>
            
        </div>
    )
}

export default DotBar