import { useState } from 'react';
import Card from './Card/Card';
import Course from './Course/Course';
import {toast}  from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
    const [bookMarks, setBookmarks] = useState([]);
    const [totalHour, setTotalHour] = useState(0);
    const [dueHour, setDueHour] = useState(0)




    const handelSelect = (card) => {
        
        const resultFind = bookMarks.find(item => item.id == card.id);

        let hour = card.creditHour;
        if(resultFind){ 
          return  toast("already Select !")
        }
        else{
            bookMarks.forEach(item => {
                hour = hour + item.creditHour;
            });
            const totalDueHour = 20 - hour;

            if(hour > 20){
              return  toast ('Credit Over')
            }
            setDueHour(totalDueHour);
            setTotalHour(hour);

            setBookmarks([...bookMarks, card]);
        }
    };


    return (
        <div>
       <h1 className='text-3xl text-center font-bold my-6'>Course Registration</h1>
      <main className='flex justify-around w-10/12 m-auto'>
        <div className='w-3/4 '>
            <Card handelSelect={handelSelect}
            ></Card> 
          </div>
          <div className='w-1/4'>
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