import React from 'react';
import { Routes,    Route} from 'react-router-dom';
import About from '../../views/examples/About';
import Home from '../../views/examples/Home';


import '../layout/Content.css'

const Content = (props) => {
    return ( 
        <>
            <main className="Content">
                <Routes>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/" element={<Home/>}/>                    
                </Routes>
            </main>
        </>      

     );
}

export default Content;