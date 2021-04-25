import React from 'react';
import Header from './Header';
import { IconContext } from 'react-icons';

function Sidebar() {

    return (
      <>
        <IconContext.Provider value={{ color: '#fff' }}>
          <Header />
        </IconContext.Provider>
      </>
    );
  }
  
  export default Sidebar;