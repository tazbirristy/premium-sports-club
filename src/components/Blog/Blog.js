import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className=' blog-container mt-20 '>
            <h1 className='font-bold text-center text-5xl mb-5 text-purple-800'>Welcome to my Blog</h1>
            <div className='mb-5'>
                <h3 className='font-bold text-purple-800'>Q.1 How does React work?</h3>
                <p>Answer: ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
                <br />
                <p>Think of your HTML code as a tree. In fact, that is exactly how the browser treats your DOM (your rendered HTML on the browser). React allows you to effectively re-construct your DOM in JavaScript and push only those changes to the DOM which have actually occurred.</p>
            </div>
            <div className='mb-5 '>
                <h3 className='font-bold text-purple-800'>Q.2 Difference between Props and states.</h3>
                <p>Answer: State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>
            </div>
            <div>
                <h3 className='font-bold text-purple-800'>Q.3 Functions of useEffect.</h3>
                <p>Answer:  By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates. Some examples of side effects are: fetching data, directly updating the DOM, and timers.</p>
            </div>
        </div>
    );
};

export default Blog;