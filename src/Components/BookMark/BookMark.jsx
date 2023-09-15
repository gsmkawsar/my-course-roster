import React from 'react';

const BookMark = ({bookmark}) => {
    const {name} = bookmark;
    return (
        <div>
            <li className='my-2 '>{name}</li>
        </div>
    );
};

export default BookMark;