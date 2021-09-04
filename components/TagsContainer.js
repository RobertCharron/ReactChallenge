import React, { Component } from 'react'
import TagInput from './TagInput'
import { useTagsContext } from '../context/TagsContext';
import { useTagsUpdateContext } from '../context/TagsContext';

const TagsContainer = () => {
    const savedTags = useTagsContext();
    const updateSavedTags = useTagsUpdateContext();
    
    function saveTags(event) {
        event.preventDefault();
    }
    return(
        <div className="flex">
         <TagInput />
         <button className="text-lg h-full button bg-blue-600 rounded p-3 text-white ml-4" onClick={saveTags}>Add Tags</button>
        </div>
    );
}
export default TagsContainer