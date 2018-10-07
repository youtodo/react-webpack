import React from 'react'
export default function SearchInput (props){
    console.log('=>',props);
    
    return(
        <div>
            <input type='text' placeholder='type your city...'/>
        </div>
    )
}