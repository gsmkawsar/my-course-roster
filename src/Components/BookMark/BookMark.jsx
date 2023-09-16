import React from 'react';

const BookMark = ({bookmark, number}) => {
    const {name, price, creditHour} = bookmark;


    return (
        <div className=' my-2 bg-slate-200 p-3 border-stone-800 rounded-lg'>

            <ul> <span className='font-bold'>{number + 1}.</span> {name}</ul>
            <div className='flex mt-2'>
            <p className='mr-7'><span className='font-bold'>Price:</span> {price} USD</p>
            <p> <span className='font-bold'>Credit:</span> {creditHour}</p>
            </div>
        </div>
    );
};

export default BookMark;