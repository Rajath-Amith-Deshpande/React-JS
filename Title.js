import React from 'react'

const Title = () => {
    console.log("Title Comp")
    return <div>
        <h4>UseCallback </h4>
    </div>
}

export default React.memo(Title);