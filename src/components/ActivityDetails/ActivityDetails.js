import React from 'react';
import './ActivityDetails.css';

const ActivityDetails = () => {
    return (
        <div>
            <div className='ml-3'>
        <h3 className='font-bold text-xl'>Tazbir Risty</h3>
        <p className='text-slate-400'>Dhaka, Bangladesh</p>
            </div>
            <div className='flex justify-around mt-8 p-2 rounded-md bg-slate-200'>
                <div>
                    <p className='font-semibold text-xl text-slate-400'>73kg</p>
                    <p className='font-semibold text-slate-500'>Weight</p>
                </div>
                <div>
                    <p className='font-semibold text-xl text-slate-400'>5.7</p>
                    <p className='font-semibold text-slate-500'>Height</p>
                </div>
                <div>
                <p className='font-semibold text-xl text-slate-400'>30yr</p>
                    <p className='font-semibold text-slate-500'>Age</p> 
                </div>
            </div>
            <div className='mt-6'>
                <h3 className='font-bold text-xl'>Break Time</h3>
                <div className='flex justify-around bg-slate-200 rounded-md p-2 mt-6'>
            <button className='bg-purple-400 hover:bg-purple-700 rounded-full hover:text-white p-2'>5m</button>
            <button className='bg-purple-400 hover:bg-purple-700 rounded-full hover:text-white p-2'>8m</button>
            <button className='bg-purple-400 hover:bg-purple-700 rounded-full hover:text-white p-2'>10m</button>
            <button className='bg-purple-400 hover:bg-purple-700 rounded-full hover:text-white p-2'>15m</button>
                </div>

            </div>
            <div className='mt-9'>
            <h2 className='font-bold text-xl'>Exercise Details</h2>
            <div className='flex justify-between p-3 rounded-md mt-5 bg-slate-200'>
                <p>Exercise Time</p>
                <p className='text-slate-400'>minutes</p>
            </div>
            <div className='flex justify-between p-3 rounded-md mt-5 bg-slate-200'>
                <p>Break Time</p>
                <p className='text-slate-400'>minutes</p>
            </div>
            </div>
            <div className='mt-9 text-center'>
            <button className='px-10 py-2 text-white lg:text-lg sm:text-sm rounded-lg bg-purple-800 hover:bg-purple-700'>Activity Completed</button>
            </div>
        </div>
    );
};

export default ActivityDetails;