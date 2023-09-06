import React from 'react'

const Basicbannercard  = ({ title, description, imageSrc,}) =>{


    return (
        <div className="d-flex pb-4 justify-content-center justify-content-md-start">
          <div className="pt-2">
            <img src={imageSrc}/>
          </div>
          <div className="ps-2">
            <h5 className='Banner_Heading text-center text-md-start'>{title}</h5>
            <p className="text-light text-center text-md-start">{description}</p>
          </div>
        </div>
      );
    };

export default Basicbannercard
