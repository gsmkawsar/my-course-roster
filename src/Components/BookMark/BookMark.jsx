import React from 'react';

const BookMark = ({bookmark}) => {
    const {name, index} = bookmark;
    return (
        <div className='list-decimal my-2 '>

            <ol >{index + 1} {name}</ol>


        </div>
    );
};

export default BookMark;