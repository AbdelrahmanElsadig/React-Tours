import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.css'
const URL = 'https://course-api.com/react-tours-project';





const domContainer: Element = document.querySelector('#root') as Element;
const root = createRoot(domContainer);
root.render(
    <>
        <div className='w-full min-h-screen flex flex-col gap-0 bg-gray-100'>
            <App />
        </div>
    </>
)




