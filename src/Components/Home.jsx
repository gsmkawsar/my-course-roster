import { useState } from 'react';
import Card from './Card/Card';
import Course from './Course/Course';


const Home = () => {
    const [bookMarks, setBookmarks] = useState([]);
    const [totalHour, setTotalHour] = useState(0);
    const [dueHour, setDueHour] = useState(0)




    const handelSelect = (card) =>{
        const resultFind = bookMarks.find(item => item.id == card.id);

        let hour = card.creditHour;
        if(resultFind){
          return  alert("All Ready Add")
        }else{
            bookMarks.forEach(item => {
                hour = hour + item.creditHour;
            });
            const totalDueHour = 20 - hour;
            setDueHour(totalDueHour);
            setTotalHour(hour);

            setBookmarks([...bookMarks, card]);
        }
    };


    return (
        <div>
       <h1 className='text-3xl text-center font-bold my-6'>Course Registration</h1>
      <main className='flex justify-around w-10/12 m-auto'>
        <div className='w-2/3 '>
            <Card handelSelect={handelSelect}
            ></Card> 
          </div>
          <div className='w-1/3'>
           <Course 
           bookMarks={bookMarks}
           totalHour={totalHour}
           dueHour={dueHour}

           ></Course>
          </div>
      </main>
        </div>
    );
};

export default Home;