import React from 'react'

const Button = ({children,handle}) => {
    return <div>
        <button onClick={handle}>{children}</button>
    </div>
}

export default React.memo(Button);