import BookMark from "../BookMark/BookMark";
import { ToastContainer } from "react-toastify";

const Course = ({bookMarks , dueHour, totalHour, totalPrice}) => {

    return (
        
        <div className="ml-7 sticky top-1">

            <div className="f">
            <ToastContainer />
            </div>

            <h2 className="text-lg font-bold py-4 text-purple-900">Credit Hour Remaining {dueHour} hr</h2>
            <hr />
            <h2 className="text-lg font-bold py-4">Course Name</h2>

           { 
            bookMarks.map((bookmark, index) => <BookMark key={index} number={index} bookmark={bookmark}></BookMark>)
            }
            <hr />
            <p className="py-4"> <span className='font-bold' >Total Credit Hour : </span>{totalHour}</p>
            <hr />
            <p> <span className='font-bold'>Total Price : </span>{totalPrice} USD</p>
        </div>
    );
};

export default Course;