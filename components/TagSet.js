import React from 'react'
import { useTagsContext } from '../context/TagsContext';
import { useTagsUpdateContext } from '../context/TagsContext';
import { useState } from 'react'
import TagButton from './TagButton';
const TagSet = () => {
    const savedTags = useTagsContext();
    const updateTags = useTagsUpdateContext();
    const [updated, setupdated] = useState(true)

    function getTags() {
        const displayTags = new Array();
        savedTags.forEach((tagValue, index) => {
            displayTags.push(
                <TagButton key={index} value={tagValue} removeTag={removeTag} />
            )
        });
        return displayTags;
    }
    function removeTag(value) {
        const index = savedTags.indexOf(value);
        if(index || index === 0) {
            savedTags.splice(index, 1);
        }
        updateTags(savedTags);
        setupdated(!updated);
    }
    
    if(savedTags.length < 1) {
        return(<></>);
    }

    return(
        <div className="bg-white w-2/4 p-3 text-lg mt-4 ">
            <div className="flex justify-between border-b-2 font-bold">
                <h2>Saved Tags</h2>
            </div>
            <div className="flex flex-wrap">
                {getTags()}
            </div>
        </div>
    )
}
export default TagSet