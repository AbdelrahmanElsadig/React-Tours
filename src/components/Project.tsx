import React from 'react';
import { Cards } from './Cards';

const Project = () => {
    return (
        <div className='container mt-20 mx-auto flex flex-col gap-6 items-center text-blue-title'>
            <h1 className="text-5xl pb-4 font-bold relative after:bottom-0 after:left-1/4
            after:w-1/2 after:h-1 after:bg-blue-500 after:absolute">Our Tours</h1>

            <Cards />

        </div>
    )
}

export { Project }
