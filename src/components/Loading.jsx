import React from 'react'
import "../App.css"
const Loading = () => {
    return (
        <div className='cardLoading'>
           
            <div class="lds-ring cardLo">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loading