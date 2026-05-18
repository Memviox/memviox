"use client";
import { useState } from 'react'
import memvioxLogo from "../assets/memviox-logo.jpg";


const Nav = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (

    <section id='nav' className='nav'>
        <div className='nav-main'>
            

            <div className="nav-d1 ">

                <img className='nav-d1-logo' src={memvioxLogo.src} alt="Logo" />
                <h1 className='nav-d1-name'>Memviox</h1>


                <a href="#GEA" className='nav-d1-a'>Register</a>

            </div>

            <div className="nav-d2 ">
                <nav className='nav-nav'>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`nav-d2-icon ${isOpen ? 'open' : 'close'}`}
                        aria-label="Toggle menu"
                        >
                        <span className="material-symbols-outlined">menu</span>
                    </button>

                    <ul className={`nav-ul ${isOpen ? 'nav-ul-open' : 'nav-ul-close'}`}>

                        <li className='nav-li'> <a href="#hero"> Hero </a> </li>
                        <li className='nav-li'> <a href="#product"> Product </a> </li>
                        <li className='nav-li'> <a href="#HIW"> Process </a> </li>
                        <li className='nav-li'> <a href="#detail"> Details </a> </li>
                        <li className='nav-li'> <a href="#pricing"> Pricing </a> </li>
                        <li className='nav-li'> <a href="#vision"> Vision </a> </li>
                        <li className='nav-li'> <a href="#GEA"> Apply </a> </li>
                        <li className='nav-li'> <a href="#footer"> Footer </a> </li>

                    </ul>
                </nav> 
            </div>


        </div>
    </section>

  )
}

export default Nav