import React from 'react';
import ActivityDetails from '../ActivityDetails/ActivityDetails';
import Sports from '../Sports/Sports';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <div className="sports-container">
                <div className="flex">
                    <img className='w-15 h-11' src="" alt="" />
                    <h1 className='text-5xl text-purple-800 font-black'>Premium Sports Club</h1>
                </div>
            <div className="all-sports">
            <h2 className='text-3xl mt-6 font-bold text-black-800'>Today's sports activities</h2>
            <Sports></Sports>
            </div>
            </div>
            <div className="sports-details p-6 bg-slate-200">
            <ActivityDetails></ActivityDetails>
            </div>
           
        </div>
    );
};

export default Home;