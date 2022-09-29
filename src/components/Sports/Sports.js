import React, { useEffect, useState } from 'react';
import Sport from '../Sport/Sport';
import './Sports.css';

const Sports = ({sports,handleAddToList}) => {

    return (
        <div className='sports-cart-container'>
         {
            sports.map(sport=><Sport 
                key={sport.id}
                sport={sport}
                handleAddToList={handleAddToList}
                ></Sport>)
         }   
        </div>
    );
};

export default Sports;