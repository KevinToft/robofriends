import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '0.5px solid black', height:'50vh'}}>
            {props.children} 
        </div>
    );
}

export default Scroll;