import React from 'react'

const Text = (props) => {
    
    return <div>
        <h4>{props.name}--{props.data}</h4>
    </div>
}

export default React.memo(Text);