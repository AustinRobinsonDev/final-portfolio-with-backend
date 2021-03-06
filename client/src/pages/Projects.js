import React from 'react';
import gitFinder from '../assets/git-finder-project.png';
import TwoX from '../assets/2xdemo.gif';
import wpKeeper from '../assets/wpkeeper.png';
import SliderImg from '../assets/sliderImg.png';
import services from '../assets/services.png';
import Weather from '../assets/weather-app.jpeg'

const Projects = () => {

    return (
        <div className='grid-3'>
            <div className="card text-center grid-item">
                <img src={gitFinder}
                    alt=""
                    className="round-img" 
                    style={{width: '250px'}} 
                />
                <h3 className='text-center aboutMe'>git finder</h3>
                <button className='btn'><a style={{color: 'black'}} href="https://git-hub-finder-react-course.netlify.app/">Visit</a></button>  
            </div>
            <div className="card text-center grid-item">
                <img src={TwoX}
                    alt=""
                    className="round-img" 
                    style={{width: '250px', height: '160px'}} 
                />
                <h3 className='aboutMe'>2X (Dapp)</h3>
                <button className='btn'><a style={{color: 'black'}} href="https://jaredborders.github.io/2X/">Visit</a></button>   
            </div>
            <div className="card text-center grid-item">
                <img src={wpKeeper}
                    alt=""
                    className="round-img" 
                    style={{width: '250px'}} 
                />
                <h3 className='aboutMe'>waypoint keeper</h3>
                <button className='btn'><a style={{color: 'black'}} href="https://stormy-savannah-74179.herokuapp.com/login">Visit</a></button>   
            </div>
            <div className="card text-center grid-item">
                <img src={SliderImg}
                    alt=""
                    className="round-img" 
                    style={{width: '250px'}} 
                />
                <h3 className='aboutMe'>full screen slider</h3>
                <button disabled className='btn'><a style={{color: 'black'}} href="https://github.com/AustinRobinsonDev/simpleSlider">Visit Github</a></button>   
            </div>
            <div className="card text-center grid-item">
                <img src={services}
                    alt=""
                    className="round-img" 
                    style={{width: '250px'}} 
                />
                <h3 className='aboutMe'>wordpress "services" site</h3>
                <button disabled className='btn'><a style={{color: 'black'}} href="http://charlesrobinsondevelopment.com/">Visit</a></button>   
            </div>
            <div className="card text-center grid-item">
                <img src={Weather}
                    alt=""
                    className="round-img" 
                    style={{width: '250px', maxHeight: '163px', objectFit: 'cover'}} 
                />
                <h3 className='aboutMe'>weather app</h3>
                <button disabled className='btn'><a style={{color: 'black'}} href="https://github.com/AustinRobinsonDev/weather-app-react">Visit Github</a></button>   
            </div>
        </div>
    )
}

export default Projects
