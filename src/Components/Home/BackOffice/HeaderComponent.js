import React,{useState} from "react"
import './stylesHeaderComponent.css'
import {Link} from "react-router-dom"
import Logo from './Logo'
import btnMenuImg from '../../../ImageProject/btn-menu.png'



function HeaderComponent(){

  const [btnResponsive, setBtnResponsive] = useState('')


  const handleClickBtn = () => {
    if(btnResponsive === '') {
      setBtnResponsive('show')
    }else {
      setBtnResponsive('')
    }
  }


    return(
      <header>
          <Logo />

          <nav id="navegador" className={btnResponsive}>
              <h2 className="nameOng">Somos Mas\</h2>
              <ul className="nav-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Home</Link></li>
              </ul>
          </nav>

          <div className="menu-btn" onClick ={handleClickBtn}>
              <img src={btnMenuImg} alt='Imagen Btn Menu'></img>
          </div>
      </header>
    )
}

export default HeaderComponent