import rasm from '../img/iconMarkaz.webp'
import './Header.css'
import React from 'react';
import {useState } from 'react';
function Header(props) {
  let {darkmode, onCahngeTheme, filterCity, getProps} = props

  const [select, setSelect] = useState("Tuman bo'yicha tanlash ?")
  const [isActive, setIsActive] = useState(false)


  getProps(select)

  const onChangeSelect = (e) => {
    setSelect(e.target.innerText)
      setIsActive(false)
      filterCity(e.target.innerText)
  }


    return (
      <div className={darkmode ? "header darktheme " : " header"}>
        <div className='header__container'>
          <a href='/' className = 'header__logo'>
            <img src={rasm} alt = 'Logo'/>
          </a>
          <div className = 'header__navbar'>
              <div className={darkmode ? 'dark phone' : "phone"}>
                <img src={"https://upload.wikimedia.org/wikipedia/commons/9/90/Telephone_receiver.svg"} alt = "s"></img>
                93 339 08 48
              </div>
              <div className = 'region'>
                <div onClick={() => setIsActive(!isActive)}  className='region__select'> {select}
                <div className='svg'>
                    <svg width="10" height="10" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8.45 0.450001L5 3.9L1.55 0.450001L0.5 1.5L5 6L9.5 1.5L8.45 0.450001Z" fill="black"/>
                  </svg>
                </div>
                </div>
                <div onClick={(e) => onChangeSelect(e)}  className={isActive ? 'region__drop ' : 'hide'}>
                    <div className='drop__link' >
                      <span>Barchasi</span>
                    </div>
                    <div className='drop__link' >
                      <span>Qarshi</span>
                    </div> 
                    <div className='drop__link' >
                        <span>Koson</span>
                    </div> 
                    <div className='drop__link' >
                        <span>Shahrisabz</span>
                    </div> 
                    <div className='drop__link' >
                        <span>Yakkabog'</span>
                    </div> 
                </div>
              </div>
              <div onClick={onCahngeTheme} className="theme">
                {!darkmode ?
                <div className='lightIcon'>
                  <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M13.5532 13.815C9.66857 13.815 6.51929 10.9278 6.51929 7.36821C6.51929 6.0253 6.96679 4.78158 7.73143 3.75C4.69036 4.69515 2.5 7.33122 2.5 10.4381C2.5 14.3385 5.94929 17.5 10.2036 17.5C13.5929 17.5 16.4696 15.4932 17.5 12.7045C16.375 13.4048 15.0161 13.815 13.5532 13.815Z" fill="white" stroke="#111517" strokeWidth="1.25"/>
                  </svg></div> :
                  <div className='darkIcon'>
                  <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M13.5532 13.815C9.66857 13.815 6.51929 10.9278 6.51929 7.36821C6.51929 6.0253 6.96679 4.78158 7.73143 3.75C4.69036 4.69515 2.5 7.33122 2.5 10.4381C2.5 14.3385 5.94929 17.5 10.2036 17.5C13.5929 17.5 16.4696 15.4932 17.5 12.7045C16.375 13.4048 15.0161 13.815 13.5532 13.815Z" fill="white"/>
                  </svg>
                </div>}
                <p className={darkmode ? "dark theme__button" : "theme__button"}>Dark mode</p>
              </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Header;