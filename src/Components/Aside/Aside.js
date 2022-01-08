import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import * as GiIcons from 'react-icons/gi';
import * as AiIcons from 'react-icons/ai';
import './Aside.css';
import { IconContext } from 'react-icons/lib';
import { AsideData } from './AsideData';

const Aside = () => {
  const [shown, setShown] = useState(false);


  const toggleSidebar = () => {
    setShown(!shown);
  };


    return (
      <>
        <IconContext.Provider value={{ color: '#000000' }}>
          <div className='sidebar'>
            <Link to='#' className='menu-bars'>
              <GiIcons.GiHamburgerMenu onClick ={toggleSidebar} />
            </Link>
          </div>
          <nav className={shown ? 'aside active' : 'aside'}>
            <ul className='aside-menu-items' onClick={toggleSidebar}>
              <li className='sidebar-toggle'>
                <Link to='#' className='menu-bars'>
                  <AiIcons.AiOutlineCloseCircle />
                </Link>
              </li>
              {AsideData.map((item, index) => {
                return (
                  <li key={index} className={item.className}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </>
    )
  }

export default Aside;