import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
         <p>WELCOME TO TREEHOUSE</p>
        <Link to='/login'><button >log in</button></Link>
        <button>sign up</button>
        </div>
    )
}

export default Home
