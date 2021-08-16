import React from 'react';
import gitFinder from '../git-finder-project.png';
import TwoX from '../2xdemo.gif';
import wpKeeper from '../wpkeeper.png';
import SliderImg from '../sliderImg.png'

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
        </div>
    )
}

export default Projects
