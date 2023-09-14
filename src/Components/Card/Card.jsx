import { useEffect, useState } from "react";


const Card = () => {

    return (
    
    
    <div className="">
        <div className=" p-3 w-72 bg-base-100 shadow-xl">
        <figure><img className="rounded-lg mb-2" src="https://cdn.bestflashfile.com/wp-content/uploads/2022/12/FRP-Bypass-APK-File.webp" alt="Shoes" /></figure>
        <div className="">
            <h2 className="text-left text-1xl font-bold mb-2">Introduction to C Programming</h2>
            <p className="text-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <div className="flex justify-between my-2 border-black	p-3">
            <div><p>Price : 15000</p></div>
            <div><p>Credit : 1hr</p></div>
            </div>
            <div className=" justify-center">
            <button className="btn btn-primary w-full">Select</button>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Card;