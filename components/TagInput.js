import React from 'react'
import { useState } from 'react';
import TagButton from './TagButton';
import { useEffect } from 'react';

const TagInput = ({saveTags}) => {
    const [currentTags, setCurrentTags] = useState(new Array());
    const [wrapperClasses, setWrapperClasses] = useState("flex flex-row flex-wrap bg-white rounded border border-transparent p-3 w-2/4")
    const [forceUpdate, setForceUpdate] = useState(true)
    const wrapperToggleClasses = " ring-2 ring-blue-600";

    function saveTag(tag) {
        if(tag.length < 1 || tag == " " || currentTags.includes(tag.toLowerCase())) {
            return;
        }
        currentTags.push(tag.toLowerCase());
        setCurrentTags(currentTags);
        setForceUpdate(!forceUpdate);
    }

    function removeTag(value) {
        currentTags.delete(value);
        setCurrentTags(currentTags);
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

    function buttonClicked(event) {
        event.preventDefault();
        saveTags(currentTags);
        setCurrentTags(new Array());
        setForceUpdate(!forceUpdate);
    }


 return (
    <div className={wrapperClasses}>
        {getButtons()}
        <div className="flex flex-1">
            <input type="text" onFocus={addWrapperBorder} onBlur={removeWrapperBorder} onKeyDown={preventFocusLoss} onKeyUp={changedValue } className="flex-1 font-mono text-xl border-none bg-transparent focus:outline-none focus:border-none p-1 ml-2" />
            <button className="whitespace-nowrap text-lg h-full button bg-blue-600 rounded p-3 text-white ml-4" onClick={buttonClicked }>Add Tags</button>
        </div>
    </div>
 )
}
export default TagInput