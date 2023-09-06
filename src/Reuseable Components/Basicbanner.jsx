import React from 'react'
import img from "../Assests/line.svg";
import Basicbutton from './Basicbutton';
import '../Reuseable Components/OverAll.scss'



const Basicbanner = ({settings,children,style}) => {

  const buttonStyles = {
    borderRadius: '0',
    border: 'none',
    backgroundColor: 'rgba(255, 180, 0, 1)',
    fontFamily: 'Rubik, sans-serif',
    fontWeight: 600,
    fontSize: '14px',
    padding: '12px 32px',
    cursor: 'pointer',
  };
  return (
    <div>

    {
          settings.map((data,index) => (
            <div key={index}>
            <div className='basic_banner'>
            <div className='d-flex justify-content-center justify-content-md-start pb-4'>
                <img src={img}/>
                <h1 className='heaading_font text-white ps-4 pt-4'>{data.text}</h1>
            </div>
                 <p className='text-white paragraph_font mb-5 text-center text-md-start'>{data.paragraph}</p>
                 <div className='d-flex justify-content-center justify-content-md-start'>
                 <Basicbutton className="custom-button" style={buttonStyles}>VIEW OUR WORK</Basicbutton>
                 </div>
                 
            </div>
           
         </div>












   ))
    }
      </div>
      )
}

export default Basicbanner