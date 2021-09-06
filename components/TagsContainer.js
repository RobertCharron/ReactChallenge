import React, { Component } from 'react'
import TagInput from './TagInput'
import { useTagsContext } from '../context/TagsContext';
import { useTagsUpdateContext } from '../context/TagsContext';
import { useState } from 'react';
import TagSet from './TagSet';

const TagsContainer = () => {
    const savedTags = useTagsContext();
    const updateSavedTags = useTagsUpdateContext();
    const [updated, setUpdated] = useState(true);

    function saveTags(tags) {
        if(tags.length == 0 ) {
            return;
        }
        savedTags.push(tags);
        updateSavedTags(savedTags);
        setUpdated(!updated);
    }
    function getSavedTags() {
        const tags = new Array();
        savedTags.forEach((element, index) => {
            tags.push(<TagSet value={element} key={index + element} index={index} removeSet={removeSet} />);

        });
        return tags;
    }
    function removeSet(index) {
        savedTags.splice(index, 1)
        updateSavedTags(savedTags);
        setUpdated(!updated);
    }
    return(
        <>
        <div className="flex">
         <TagInput saveTags={saveTags}/>
        </div>
        <div className="flex flex-col">
            {getSavedTags()}
        </div>
        </>
    );
}
export default TagsContainer