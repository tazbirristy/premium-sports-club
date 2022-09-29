import React from 'react';
import './Sport.css'

const Sport = ({sport}) => {
    const {name, time, img}=sport;
    return (
        <div>
           <div className='sport-container p-3'>
        <img className='w-full rounded-lg' src={img} alt="" />
        <p className='text-2xl mt-6 font-bold text-black-800'>{name}</p>
        <p className='text-1xl mt-2 font-bold text-black-800'>Time Required: {time} m</p>
        <div className='text-center mt-5 mb-3'>
        <button className='bg-purple-400 hover:bg-purple-700 text-white font-bold py-2 px-14 rounded mt-4'>Add to List</button>
        </div>
        
            </div> 
        </div>
    );
};

export default Sport;