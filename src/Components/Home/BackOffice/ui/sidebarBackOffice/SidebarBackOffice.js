import React, { useState } from 'react'
import menu from '../../../../../assets/menu.svg'
import TitleComponent from '../../../../title/TitleComponent'
import { classNames } from './classes.js'
import './sidebarBackOffice.css'
import SidebarItemsNav from './SidebarItemsNav'

const SidebarBackOffice = () => {

  const [isOpen, setIsOpen] = useState(true)
  const handleClick = () => setIsOpen(!isOpen)
  
  return (
    <div className={classNames("SideBarMenu", isOpen ? " expanded" : " collapsed")}>
        <div className='menuButton'>
            <button className='hamburgerIcon' onClick={handleClick}>
              <img src={menu} alt="button"/>
            </button>
        </div>
        <TitleComponent 
          title=""
        />
        <SidebarItemsNav isOpen= {isOpen} />
        
    </div>
  )
}

export default SidebarBackOffice