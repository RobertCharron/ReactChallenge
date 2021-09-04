import { ST } from 'next/dist/shared/lib/utils';
import { createContext, useContext } from 'react';
import { useState } from 'react';

const TagsContext = createContext();
const TagsUpdateContext = createContext();


const TagsProvider = ({children}) =>{
    const [savedTags, setSavedTags] = useState([]);

    function updateState(newSet) {
        savedTags.add(newSet);
        setSavedTags(savedTags);
    }
    return (
        <TagsContext.Provider value={savedTags}>
            <TagsUpdateContext.Provider value={updateState}>
                {children}
            </TagsUpdateContext.Provider>
        </TagsContext.Provider>
    );
}

const useTagsContext = () => {
    return useContext(TagsContext);
}
const useTagsUpdateContext = () => {
    return useContext(TagsUpdateContext);
}

export { TagsProvider, useTagsContext, useTagsUpdateContext };