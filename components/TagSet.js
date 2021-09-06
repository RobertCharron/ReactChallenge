import React from 'react'
import { useState } from 'react'
const TagSet = ({value, index, removeSet}) => {
    const [tags, setTags] = useState(value)

    function getTags() {
        const displayTags = new Array();
        tags.forEach((element, index) => {
            displayTags.push(
            <div className="tagSet--tag flex flex-row " key={index}>
                <span className="items-center border rounded bg-gray-300 mr-2 p-3">{element}</span>
            </div>
            )
        });
        return displayTags;
    }
    return(
        <div className="bg-white w-2/4 p-3 text-lg mt-4 ">
            <div className="flex justify-between border-b-2 font-bold">
                <h2>Tag Set</h2>
                <button className="text-3xl cursor-pointer" onClick={(event) => {event.preventDefault(); removeSet(index)}}>&times;</button>
            </div>
            <div className="flex flex-wrap">
                {getTags()}
            </div>
        </div>
    )
}
export default TagSet