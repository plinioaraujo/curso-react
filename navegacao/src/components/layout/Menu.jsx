import React from 'react';

import '../layout/Menu.css'

const Menu = (props) => {
    return ( 
        <>
            <aside className="Menu">
               <nav>
                   <ul>
                       <li>
                           <a href="/">Início</a>

                       </li>
                       <li>
                           <a href="/about">Sobre</a>
                       </li>
                   </ul>
               </nav>
            </aside>
        </>      

     );
}

export default Menu;