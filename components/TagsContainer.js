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
        tags.forEach(tag => {
            if(!savedTags.includes(tag)) {
                savedTags.push(tag);
            }
        });
        updateSavedTags(savedTags);
        setUpdated(!updated);
    }
    return(
        <>
        <div className="flex flex-col">
         <TagInput saveTags={saveTags}/>
        </div>
        <div className="flex flex-col">
            <TagSet />
        </div>
        </>
    );
}
export default TagsContainer