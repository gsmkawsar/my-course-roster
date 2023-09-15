import React from 'react';

const BookMark = ({bookmark}) => {
    const {name} = bookmark;
    return (
        <div>
            <ul>
                <li className='my-2'>{name}</li>
            </ul>

        </div>
    );
};

export default BookMark;