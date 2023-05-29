import React, {useState} from 'react'
import './navbar.css'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
const Navbar = () => {
    const [active, setActive] = useState("navBar")
    // function to toggle navBar
    const showNav = () => {
        setActive('navBar activeNavbar')
    }

    //function to close navBar
    const closeNav = () => {
        setActive('navBar')
    }
  return (
    <section className="navBarSection">
        <header className="header flex">
            <div className="logoDiv">
                <a href="#" className="logo"></a>
                <h1><MdOutlineTravelExplore style={{color:"hsl(199, 100%, 33%)"}} className="icon"/> Travel. </h1>
            </div>

            <div className={active}>
                <ul className="navLists flex">
                    <li className="navItem">
                        <a href="" className="navLink"> Home </a>
                    </li>

                    <li className="navItem">
                        <a href="" className="navLink"> Packages </a>
                    </li>

                    <li className="navItem">
                        <a href="" className="navLink"> Shop </a>
                    </li>

                    <li className="navItem">
                        <a href="" className="navLink"> About </a>
                    </li>

                    <li className="navItem">
                        <a href="" className="navLink"> Pages </a>
                    </li>

                    <li className="navItem">
                        <a href="" className="navLink"> News </a>
                    </li>

                    <li className="navItem">
                        <a href="" className="navLink"> Contact </a>
                    </li>

                    <button className="btn">
                        <a href="#"> BOOK NOW </a>
                    </button>
                </ul>

                <div onClick={closeNav} className="closeNavbar">
                    <AiFillCloseCircle className="icon"/>
                </div>
            </div>

            <div onClick={showNav} className="toggleNavbar">
                <TbGridDots className="icon"/>
            </div>
        </header>
    </section>
  )
}

export default Navbar