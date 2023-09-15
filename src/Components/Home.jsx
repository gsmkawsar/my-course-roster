import { useState } from 'react';
import Card from './Card/Card';
import Course from './Course/Course';


const Home = () => {

const [bookMarks, setBookmarks] = useState([]);



    const handelSelect = (card) =>{

        const resultFind = bookMarks.find(item => item.id == bookMarks.id);

        if(resultFind){
          return alert ("ok")
        } else{
            setBookmarks([...bookMarks, card]);
        }

   

    }


    return (
        <div>
       <h1 className='text-3xl text-center font-bold my-6'>Course Registration</h1>
      <main className='flex justify-around w-10/12 m-auto'>
        <div className='w-2/3 '>
            <Card handelSelect={handelSelect}></Card> 
          </div>
          <div className='w-1/3'>
           <Course bookMarks={bookMarks}></Course>
          </div>
      </main>
        </div>
    );
};

export default Home;