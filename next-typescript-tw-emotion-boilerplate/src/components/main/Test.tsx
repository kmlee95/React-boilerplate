import React from 'react'
import IconArrowDown from '$assets/icons/IconArrowDown'

interface testProps {}

const Test: React.FC<testProps> = ({}) => {
    return (
        <>
            <IconArrowDown style={{marginLeft: '.4rem'}} color={`var(--green-500)`} />
        </>
    )
}

export default Test
