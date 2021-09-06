import { createContext, useContext } from 'react';
import { useState } from 'react';
import Cookies from 'universal-cookie';

const TagsContext = createContext();
const TagsUpdateContext = createContext();


const TagsProvider = ({children}) =>{
    const cookies = new Cookies();
    const [savedTags, setSavedTags] = useState(cookies.get('savedTagSets') ?? new Array());

    function updateState(newSet) {
        setSavedTags(newSet);
        cookies.set('savedTagSets', newSet);
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