import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';

import { logo, sun, moon } from '../assets';
import { navlinks } from '../constants';

import { useDisconnect } from "@thirdweb-dev/react";

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick, lightColor, darkColor, isLight, darkBg, lightBg}) => (
  <div className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name ? (isLight ? lightBg : darkBg) : ''}
  flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
    ) : (
      <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} />
    )}
  </div>
)




const Sidebar = ({theme, activeState}) => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = activeState;
  const [isLight, setIsLight] = theme

  
    const disconnect = useDisconnect(); // Disconnect the wallet

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
      <Link to="/">
        <Icon styles={`w-[52px] h-[52px]  ${isLight? 'bg-[#F3F3F6]' : 'bg-[#2c2f32]'}`} imgUrl={logo} />
      </Link>

      <div id='sidebar' className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((link) => (
            <Icon 
              key={link.name}
              {...link}
              isActive={isActive}
              isLight={isLight}
              lightColor="text-black"
              darkColor="grayscale"
              lightBg="bg-orange"
              darkBg="bg-[#2c2f32]"
              handleClick={() => {
                if(!link.disabled) {
                  if(link.name==="Disconnect"){
                    setIsActive(link.name);
                    disconnect()
                    navigate('/profile');
                  }
                  else{
                    setIsActive(link.name);
                    navigate(link.link);
                  }
                }
              }}
            />
          ))}
        </div>

        <Icon handleClick={()=> {
          setIsLight(!isLight)
          console.log('light');
          localStorage.setItem('isLightMode', !isLight)
        }} id="sun-moon" styles={` ${isLight? '': 'bg-[#1c1c24]'} shadow-secondary`} imgUrl={isLight? moon : sun} />
      </div>
    </div>
  )
}

export default Sidebar