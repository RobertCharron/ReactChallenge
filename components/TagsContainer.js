import React, { Component } from 'react'
import TagInput from './TagInput'

const TagsContainer = () => {

    return(
    <form className='TagInputContainer'>
         <TagInput />
         <button className="sendTags text-lg h-full button bg-blue-600 rounded p-3 text-white ml-4" onClick={()=> handleClick()}>Add Tags</button>
    </form>
    );
}
export default TagsContainer