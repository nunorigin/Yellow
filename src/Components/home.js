import React from 'react';
import "../styles.css";
import Forms from './Forms/Forms';
// import Toasts from "./Toast/Toast";



const Home = () => {

    return (
        <div className="main">
            <div className="main-left">
            <Forms/>
            </div>
            <div className="main-right">
               
            {/* <Toasts/> */}
            
               
            </div>
       
        </div>
    )
}



export default Home;