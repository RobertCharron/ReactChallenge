import React from 'react'
import { useState } from 'react';
import TagButton from './TagButton';
import { useEffect } from 'react';

const TagInput = () => {
    const [currentTags, setCurrentTags] = useState(new Set());
    const [wrapperClasses, setWrapperClasses] = useState("flex flex-row flex-wrap bg-white rounded border border-transparent p-3")
    const [forceUpdate, setForceUpdate] = useState(true)
    const wrapperToggleClasses = " ring-2 ring-blue-600";

    function saveTag(tag) {
        if(tag.length < 1 || tag == " ") {
            return;
        }
        let newTags = currentTags;
        newTags.add(tag);
        setCurrentTags(newTags);
        setForceUpdate(!forceUpdate);
    }

    function removeTag(value) {
        let newTags = currentTags;
        currentTags.delete(value);
        setCurrentTags(newTags);
        setForceUpdate(!forceUpdate);
    }

    function changedValue(event) {
        if(event.keyCode === 9 || event.keyCode === 13) {
            saveTag(event.target.value);
            event.target.value = "";
        }
    }

    function preventFocusLoss(event) {
        //Prevent tab from losing focus, and enter from submitting.
        if(event.keyCode === 9 || event.keyCode === 13) {
            event.preventDefault();
        }
    }

    function addWrapperBorder() {
        setWrapperClasses(wrapperClasses + wrapperToggleClasses)
    }

    function removeWrapperBorder() {
        setWrapperClasses(wrapperClasses.replace(wrapperToggleClasses, ''));
    }
    
    function getButtons() {
        const buttons = new Array();
        for(const val of currentTags) {
            buttons.push(<TagButton value={val} key={val} removeTag={removeTag} />);
        }
        return buttons;
    }




 return (
    <div className={wrapperClasses}>
        {getButtons()}
        <input type="text" onFocus={addWrapperBorder} onBlur={removeWrapperBorder} onKeyDown={preventFocusLoss} onKeyUp={changedValue } className="font-mono text-xl border-none bg-transparent focus:outline-none focus:border-none p-1 ml-2" />
    </div>
 )
}
export default TagInput