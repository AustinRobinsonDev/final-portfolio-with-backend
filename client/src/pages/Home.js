import React from 'react'
import daisy from '../dz.jpg'

const Home = () => {
    return (
        <div className='grid-2'>
                <div>
                    <h1 className='largeText'>Charles Robinson</h1>
                    <h2 className='subHeader'>FULL STACK <span className='aboutMe'>Web Development</span> | <span className='aboutMe' style={{textDecoration: 'underline', textDecorationColor: 'black'}}>Programming</span></h2>
                    <p className='aboutMe paragraph'>I am currently seeking an ENTRY-LEVEL Computer Programming/Web Development position. I attended Jefferson State's full stack workforce development program and have been furthuring my knowledge in the field since completing the course.</p> 
                    <h3 style={{ textDecoration: 'underline'}} className="aboutMe paragraph">My skills</h3>
                    <div className='grid-2'>
                        <div className="text-center">                    
                            <ul>
                                <li className='aboutMe paragraph'>HTML5</li>
                                <li className='aboutMe paragraph'>CSS</li>
                                <li className='aboutMe paragraph'>Javascript</li>
                                <li className='aboutMe paragraph'>React</li>
                                <li className='aboutMe paragraph'>PHP</li>
                                <li className='aboutMe paragraph'>NODE.js</li>
                            </ul>
                        </div>
                        <div className="text-center text-black">
                            <ul>
                                <li className='aboutMe paragraph'>Java</li>
                                <li className='aboutMe paragraph'>MySQL</li>
                                <li className='aboutMe paragraph'>MongoDB</li>
                                <li className='aboutMe paragraph'>Source Tree</li>
                                <li className='aboutMe paragraph'>Basic Algorithms and Data Structures</li>
                            </ul>
                        </div>
                    </div>
                    <br />
                    <p className="aboutMe paragraph">I am also familiar with digital audio workshops (DAWs), basic photo/video editing, and excel. Self motivated and very eager to learn new skills. Feel free to reach out!</p>
                </div>
                <div>
                    <img className='coverPicture' src={daisy} alt="" />
                    <p className='aboutMe text-center'>This is my hiking buddy Daisy!</p>
                </div>
        </div>
    )
}

export default Home
