import React from 'react'

interface JayZ{
    title: string;
}

export const Home = ( props:JayZ) => {
    return (
        <div>
            Text Here
            <h3>{props.title}</h3>
        </div>
    )
}