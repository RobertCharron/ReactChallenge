import React from 'react'
import { useState } from 'react';
import { TagsWrapper, useTagsContext, useTagsUpdateContext } from '../context/TagsContext';

const TagInput = ({handleClick}) => {
    const [currentTags, setCurrentTags] = useState(new Set());
    const [wrapperClasses, setwrapperClasses] = useState("bg-white rounded border border-transparent p-3 md:w-96 xl:w-1/4")
    const savedTags = useTagsContext();
    const updateSavedTags = useTagsUpdateContext();
    const wrapperToggleClasses = " ring-2 ring-blue-600";

    function saveTag(tag) {
        let newTags = currentTags;
        newTags.add(tag);
        setCurrentTags(newTags);
    }

    function changedValue(event) {
        if(event.keyCode === 9 || event.keyCode === 13) {
            saveTag(event.target.value);
        }
    }

    function preventFocusLoss(event) {
        //Prevent tab from losing focus, and enter from submitting.
        if(event.keyCode === 9 || event.keyCode === 13) {
            event.preventDefault();
        }
    }

    function getCurrentValues() {
        return Array.from(currentTags).join(',');
    }

    function addWrapperBorder() {
        setwrapperClasses(wrapperClasses + wrapperToggleClasses)
    }

    function removeWrapperBorder() {
        console.log("Removing class");
        setwrapperClasses(wrapperClasses.replace(wrapperToggleClasses, ''));
    }


 return (
     <>
        <div className={wrapperClasses}>
            <input type="hidden" className="readyTags" value={getCurrentValues()} />
            <input type="text" onFocus={addWrapperBorder} onBlur={removeWrapperBorder} onKeyDown={preventFocusLoss} onKeyUp={changedValue } className="font-mono text-lg p-3 border-transparent focus:border-transparent" />
        </div>
    </>
 )
}
export default TagInput