import React from 'react'
import { useState } from 'react';
import { useTagsContext } from '../context/TagsContext';
import TagButton from './TagButton';

const TagInput = ({saveTags}) => {
    const [currentTags, setCurrentTags] = useState(new Array());
    const [wrapperClasses, setWrapperClasses] = useState("flex flex-row flex-wrap bg-white rounded border border-transparent p-3 w-2/4")
    const [updated, setupdated] = useState(true);
    const [autoComplete, setautoComplete] = useState(new Array());
    const [inputValue, setinputValue] = useState("")
    const wrapperToggleClasses = " ring-2 ring-blue-600";
    const savedTags = useTagsContext();

    function saveTag(tag) {
        if(tag.length < 1 || tag == " " || currentTags.includes(tag.toLowerCase())) {
            return;
        }
        currentTags.push(tag.toLowerCase());
        setCurrentTags(currentTags);
        setupdated(!updated);
    }

    function removeTag(value) {
        const index = currentTags.indexOf(value);
        currentTags.splice(index,1);
        setCurrentTags(currentTags);
        setupdated(!updated);
    }

    function checkCompleted(event) {
        if(event.keyCode === 9 || event.keyCode === 13) {
            saveTag(event.target.value);
            setinputValue("");
        }

    }

    function searchExisting(event) {
        setinputValue(event.target.value);
        if(event.target.value == "") {
            setautoComplete(new Array());
            return;
        }
        findAutocompleteValues(event.target.value);
    }

    function findAutocompleteValues(starting) {
        const matches = savedTags.filter(tag => tag.includes(starting) && !currentTags.includes(tag));

        setautoComplete(matches);
        setupdated(!updated);
    }
    function getAutocomplete() {
        return autoComplete.map((value) =>{
            return <li key={value} className="bg-gray-200 border-b-2 border-gray-400 p-2 text-xl cursor-pointer hover:bg-blue-400 hover:text-white hover:text-4xl" onClick={() => selectExistingTag(value)}>{value}</li>;
        });
    }
    function selectExistingTag(val) {
        saveTag(val);
        setautoComplete(new Array());
        setinputValue("");
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
        setupdated(!updated);
    }


 return (
     <>
    <div className={wrapperClasses}>
        {getButtons()}
        <div className="flex flex-1">
            <input type="text" value={inputValue} onChange={searchExisting} onFocus={addWrapperBorder} onBlur={removeWrapperBorder} onKeyDown={preventFocusLoss} onKeyUp={checkCompleted } className="flex-1 font-mono text-xl border-none bg-transparent focus:outline-none focus:border-none p-1 ml-2" />
            <button className="whitespace-nowrap text-lg h-full button bg-blue-600 rounded p-3 text-white ml-4" onClick={buttonClicked }>Add Tags</button>
        </div>
    </div>
    <ul className="flex flex-col w-2/4 border-l-2 border-r-2 border-gray-400">
        {getAutocomplete()}
    </ul>
    </>
 )
}
export default TagInput