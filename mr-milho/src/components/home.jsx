import React from 'react';
import { Link } from "react-router-dom";
import '../styles/pages.css'


const Home = () => {
    const GET_HEADER = {
        method: 'GET',
        headers: new Headers(),
        cache: 'default'
    };

    return (
        <div className='Page'>
            <div>
                <h1>Mr.milho in production!</h1>
            </div>


            <div>

            </div>
        </div>
    );
}

export default Home;