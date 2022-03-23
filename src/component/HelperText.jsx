import React from 'react'

const HelperText = ({ error, text, id }) => {

    const defaultText  = "Please Input "+ id;

    return (
        <>
            {error && (
                <p>{text || defaultText}</p>
            )}
        </>
    )
}

export default HelperText