import React, { useEffect, useState } from 'react';
import { tour } from '../types/types';
const URL: string = 'https://course-api.com/react-tours-project';

function Cards() {
    const [cards, setCards]: [tour[], any] = useState([]);
    const [show, setShow] = useState(false);
    const [loading, setLoad] = useState(true);
    async function getTours(url = URL) {
        const req = await fetch(url);
        const res = await req.json();
        setCards(() => res);
        setLoad(false);
    }

    useEffect(() => {
        getTours(URL);
    }, []);

    const removeTour = (id: string): void => {
        const remainingTours = cards.filter(card => card.id !== id);
        setCards(() => remainingTours)
    }

    const toggleShow = () => {
        setShow(!show)
    }

    const showText = (text: string) => {
        const text1 = text.substring(0, 200);
        const text2 = text.substring(200);
        return (
            <>
                <p className="">{text1} <span>{show ? text2 : ''}</span>
                    &nbsp;<span onClick={() => toggleShow()} className='text-cyan-300 cursor-pointer'>{show ? 'Show Less' : '...Read More'}</span></p>
            </>
        )
    }

    return (
        <>
            <h1 className="text-5xl font-bold">{loading ? '...Loading' : ''}</h1>
            <div className="container flex flex-col items-center gap-6">
                {cards.map(card => {
                    return (
                        <div key={card.id} className="w-[95%] max-w-[620px] rounded-lg bg-white shadow-lg">
                            <img className='w-full aspect-video rounded-t-lg h-min' src={card.image} alt="" />
                            <div className="flex flex-col gap-6 p-8">
                                <div className="flex justify-between w-full">
                                    <h3 className="font-bold">{card.name}</h3>
                                    <h6 className="text-base bg-money-bg font-bold px-2 text-blue-money">${card.price}</h6>
                                </div>
                                {showText(card.info)}
                                <button onClick={() => removeTour(card.id)} className='border-[1px] border-solid border-button-color
                                text-button-color px-8 w-fit mx-auto rounded-md text-lg'>Not Interested</button>
                            </div>
                        </div>
                    )
                })}

            </div>
        </>

    )
}

export { Cards }
