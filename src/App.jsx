

import { useState ,useEffect } from 'react'
import './App.css'
import Card from './Components/Card/Card'
import Course from './Components/Course/Course'

function App() {

  const [cards, setCards] = useState([]);

  useEffect(()=>{
      fetch('./data.json')
      .then(res => res.json())
      .then(data => setCards(data));
  },[])




  return (
    <>
        <h1 className='text-3xl text-center font-bold my-6'>Course Registration</h1>
      <main className='flex w-10/12 m-auto'>
        <div className='w-2/3 grid grid-cols-3 gap-5'>
            {cards.map(card=> <Card
            key={card.id} ></Card>)

            }
          </div>
          <div className='w-1/3'>
            <Course></Course>
          </div>
      </main>

    </>
  )
}

export default App
