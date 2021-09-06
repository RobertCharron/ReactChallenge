import React from 'react'

const TagButton = ({value, removeTag}) => {
    return(
        <div className="flex flex-row items-center border rounded bg-gray-300  p-1">
            <span className="text-lg font-bold ">{value}</span>
            <span className="cursor-pointer font-bold p-1 text-xl" onClick={() => removeTag(value)}>&times;</span>
        </div>
    )
}

export default TagButton;