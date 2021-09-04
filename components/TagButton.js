import React from 'react'

const TagButton = ({value, removeTag}) => {
    return(
        <div className="border rounded bg-gray-300  p-1">
            <span className="text-lg">{value}</span>
            <span className="cursor-pointer" onClick={() => removeTag(value)}>&times;</span>
        </div>
    )
}

export default TagButton;