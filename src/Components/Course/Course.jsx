import BookMark from "../BookMark/BookMark";


const Course = ({bookMarks}) => {


    return (
        <div className="ml-7">
            <h2 className="text-1xl font-bold py-4">Credit Hour Remaining 7 hr</h2>
            <hr />
            <h2 className="text-1xl font-bold py-4">Course Name</h2>
           { 
            bookMarks.map((bookmark, index) => <BookMark key={index} bookmark={bookmark}></BookMark>)
            }
            <hr />
            <p className="py-4">Total Credit Hour : 13</p>
            <hr />
            <p>Total Price : 48000 USD</p>
        </div>
    );
};

export default Course;