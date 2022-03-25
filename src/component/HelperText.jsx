import React from 'react'

export const HelperData = (errorData) => {
    return <HelperText />
}

const HelperText = ({ error, text, id }) => {

    const defaultText  = "Please Fill "+ id;

    return (
        <>
            {error && (
                <p>{text || defaultText}</p>
            )}
        </>
    )
}

export default HelperText