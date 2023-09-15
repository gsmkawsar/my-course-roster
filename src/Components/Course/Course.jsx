import BookMark from "../BookMark/BookMark";


const Course = ({bookMarks , dueHour, totalHour}) => {


    return (
        <div className="ml-7">
            <h2 className="text-1xl font-bold py-4">Credit Hour Remaining {dueHour} hr</h2>
            <hr />
            <h2 className="text-1xl font-bold py-4">Course Name</h2>
           { 
            bookMarks.map((bookmark, index) => <BookMark key={index} bookmark={bookmark}></BookMark>)
            }
            <hr />
            <p className="py-4">Total Credit Hour : {totalHour}</p>
            <hr />
            <p>Total Price : 48000 USD</p>
        </div>
    );
};

export default Course;