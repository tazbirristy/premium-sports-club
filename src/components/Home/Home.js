import React, { useEffect, useState } from 'react';
import ActivityDetails from '../ActivityDetails/ActivityDetails';
import Sports from '../Sports/Sports';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolleyball} from '@fortawesome/free-solid-svg-icons'
import Blog from '../Blog/Blog';



const Home = () => {
    const [sports,setSports]=useState([]);
    const[count,setCount]=useState([]);
    
    useEffect(()=>{
        fetch('sports-data.json')
        .then(res=>res.json())
        .then(data=>setSports(data))
    },[])
    const handleAddToList=(sport)=>{
        const newCount=[...count, sport];
        setCount(newCount);
    }
    return (
        <div className='home-container'>
            <div className="sports-container">
                <div className="flex">
                    {/* <img className='w-15 h-11' src="" alt="" /> */}
                    
                    <h1 className='text-5xl text-purple-800 font-black'> <FontAwesomeIcon icon={faVolleyball}></FontAwesomeIcon>Premium Sports Club</h1>
                </div>
            <div className="all-sports">
            <h2 className='text-3xl mt-6 font-bold text-black-800'>Today's sports activities</h2>
            <Sports sports={sports} handleAddToList={handleAddToList}></Sports>
            </div>
            </div>
            <div className="sports-details p-6 bg-slate-200">
            <ActivityDetails count={count}></ActivityDetails>
            </div>
            <div>
                <Blog></Blog>
            </div>
           
        </div>
    );
};

export default Home;