import React, { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import {Button} from "../Button"
import "./Navbar.style.scss"

import Modal from "react-modal";
Modal.setAppElement("#root");


export const Navbar = ()=>{
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const [toggle, setToggle] = useState(false)

    const openModal = ()=>{
        setToggle(s => !s)
    }

    const showButton =()=>{
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
            setClick(false)
        }
    };

    useEffect(()=>{
        showButton()
    },[])

    window.addEventListener("resize", showButton);

    const clicked = ()=>{
        setClick(s=>!s)
    }
    return(
        <div className="navbar-container">
            
                    <Link to="/adventure" className="nav-links" exact>
                        <div className="navbar-logo">
                           <i title="Home" className="fas fa-hat-cowboy"></i>
                        </div>
                    </Link>

                    <div className="navbar-menu-logo" onClick={clicked}>
                        {!button && <i className={click ? "fas fa-times" : "fas fa-bars"}></i>}
                    </div>
                    <div className={click ? "nav-menu-container-mobile" :  "nav-menu-container"}>
                        {(button || click) &&
                        <> 
                            {click && <i className="fas fa-hat-cowboy mobile-menu-icon"></i>}
                            <ul className={click ? "nav-menu active" : "nav-menu"}>
                                <li className="nav-item" >
                                    <Link to = "/adventure" className="nav-links">Home</Link>
                                </li>
                                <li className="nav-item" >
                                    <Link to="/services" className="nav-links">Services</Link>
                                </li>
                                <li className="nav-item" >
                                    <Link to="/products" className="nav-links">Products</Link>
                                </li>
                            </ul>
                            <Button buttonName="Sign Up" buttonStyle="btn--outline" buttonSize="btn--medium" onClick={openModal} />
                        </>}
                        <Modal
                            isOpen={toggle}
                            onRequestClose={openModal}
                            contentLabel="sign-up"
                            className={button ? "modal-sign" : "modal-mobile"}
                            overlayClassName="overlay"
                        >
                          <label>E-mail<br/>
                              <input type="e-mail" placeholder="Please enter your e-mail" autoFocus />
                          </label><br/>
                          <label>Password<br/>
                              <input type="password" placeholder="Please enter your password" />
                          </label>
                          <Button className="btn" buttonName="Sign Up" buttonStyle="btn--outline" buttonSize="btn--large"/>
                          <Button className="btn" buttonName="Login" buttonStyle="btn--outline" buttonSize="btn--large"/>
                          <a className="forgot-link" href="#">Forgot Password?</a>
                        </Modal>
                    </div>
            
        </div>
    )
}