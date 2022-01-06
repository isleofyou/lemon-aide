import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Aside.css';

const Aside = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
      if (window.innerWidth <= 960) {
          setButton(false);
      } else {
          setButton(true);
      }
  };

  useEffect(() => {
      showButton();
  }, []);

  window.addEventListener('resize', showButton);

    return (
        <>
          <nav className='aside'>
              <div className='aside-container'>
                  <li className='aside-item'>
                    <Link to='/all-products' className='aside-links'>
                      All Items
                    </Link>
                  </li>
                  <li className='aside-item'>
                    <Link to='/favorite-product' className='aside-links'>
                      Favorites
                    </Link>
                  </li>
                  <li className='aside-item'>
                    <Link to='/create-outfit' className='aside-links' >
                      Create Outfit
                    </Link>
                  </li>
                  <li className='aside-item'>
                    <Link to='/my-outfits' className='aside-links'>
                      My Outfits
                    </Link>
                  </li>
              </div>
          </nav>
        </>
    )
}

export default Aside;