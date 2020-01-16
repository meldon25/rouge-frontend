import React from 'react'
import { Slide } from 'react-slideshow-image'
import '../styles/hero.css'

let slideImages = [
    "https://i.imgur.com/qRhd8M6.jpg",
    "https://i.imgur.com/5SjEprf.jpg",
    "https://i.imgur.com/jv9cuJ5.jpg"

];

    const Hero = () => {  
                return (
                    <div className="slide-container">
                <Slide {...slideImages}>
                  <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                    </div>
                  </div>
                  <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                    </div>
                  </div>
                  <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                    </div>
                  </div>
                </Slide>
              </div>
        
                )
    
        }

export default Hero
