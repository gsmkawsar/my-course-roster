import { useState ,useEffect } from 'react'



const Card = ({handelSelect}) => {

  const [cards, setCards] = useState([]);

  useEffect(()=>{
      fetch('./data.json')
      .then(res => res.json())
      .then(data => setCards(data));
  },[])

    return (
    
    <div className="grid grid-cols-3 gap-5">
            {cards.map(card=> <div 
            key={card.id}
             >
         <div className=" p-3 w-70 bg-base-100 shadow-xl">
        <figure><img className="rounded-lg mb-2" src={card.image} alt="Shoes" /></figure>
        <div className="">
            <h2 className="text-left text-1xl font-bold mb-2">{card.name}</h2>
            <p className="text-left">{card.para}</p>
            <div className="flex justify-between my-2 border-black	p-3">
            <div className=' flex items-center gap-1'>
                <p> </p>
                <p>Price : {card.price}</p></div>
            <div className=' flex items-center gap-1'>
                <p> </p>
                <p> Credit : {card.creditHour}hr</p></div>
            </div>
            <div className=" justify-center">
            <button onClick={()=>handelSelect(card)} className="btn btn-primary w-full">Select</button>
            </div>
        </div>
        </div>
            </div>
            )}

        </div>
    );
};

export default Card;