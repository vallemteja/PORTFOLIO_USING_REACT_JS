import React from 'react'
import img3 from './download-removebg-preview.png'
// import img4 from './yellow.png'
import img5 from './photo.png'
import resume from '../src/resume.pdf'
const Porto = () => {
  return (
    <div className='hero'>
      <nav>
        <img src={img3} alt="" className='sow'/>
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">PORTFOLIO</a></li>
          <li><a href="#">SERVICES</a></li>
          <li><a href="#">HIREME</a></li>
        </ul>
      </nav>
      <div className="detel">
        <h1>I'm Vallem<span>Teja's</span></h1>
        <p>This is my offical portfolio websites to shows all
        <br />Details and work experience web development
        </p>
        <a href={resume}>DOWNLOAD CV</a>
      </div>
      <div className="images">
        {/* <img src={img4} className='shape'/> */}
        <img src={img5} className='boy'/>
      </div>
    </div>
  )
}
export default Porto;
