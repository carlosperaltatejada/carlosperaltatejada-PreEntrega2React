import React from ' react'
import {useParams} from 'react-router-dom'

const EntradasId = () => {

    const {id} = useParams();

    return (
    <div>
        <h3>Este producto seria el id: {id} </h3>
    </div>   
    )
}

export default EntradasId