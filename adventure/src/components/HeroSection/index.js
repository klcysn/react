import React, { useContext, useEffect, useState } from "react";
import {Button} from "../Button"
import "./HeroSection.style.scss"
import {ModalToggle} from "../../pages/Home/Home"
import {Carousel} from "../Carousel"

export function HeroSection(){
    const {openModal, openSignModal} = useContext(ModalToggle)
    const [big, setBig]=useState(false)
    const bigger =()=>{
        if(window.innerWidth <= 960){
            setBig(true)
        }else{
            setBig(false)
        }
    }
    useEffect(()=>{
        bigger()
    },[])

    window.addEventListener("resize", bigger)
    
    return(
        <div className="hero-container">
            {!big && <iframe className="home-background" title="Home page video" src="https://www.youtube.com/embed/JO0_ZES0zHw?autoplay=1&mute=1&loop=1&playlist=JO0_ZES0zHw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;" allowfullscreen></iframe>}

            {big && <img className="home-background" src="https://lp-cms-production.imgix.net/2020-07/shutterstockRF_188332622.jpg" />}
            
            {!big && <Carousel />}
            <h1>ADVENTURE</h1>
            <div className="hero-btns" style={{flexDirection: big ? "column" : "row"}}>
                <Button className="btns" buttonName="GET STARTED" buttonStyle="btn--outline" buttonSize="btn--large" onClick={openSignModal} />
                {!big && <div className="play-container">
                    <Button className="btns" buttonName = "Watch Trailer" buttonStyle="btn--primary" onClick={openModal} buttonSize="btn--large" />
                    <i class="fas fa-play-circle"></i>
                </div>}
            </div>
        </div>
    )
}