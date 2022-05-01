import React from 'react';
import "../styles.css";
import Cards from './Cards/Card';
import Forms from './Forms/Forms';
import Toasts from "./Toast/Toast";



const Home = () => {

    return (
        <div className="main">
            <div className="main-left">
            <Forms/> 
            </div>
            <div className="main-right">
            <Cards/>
            
            <Toasts/>
            </div>


        </div>
    )
}



export default Home;