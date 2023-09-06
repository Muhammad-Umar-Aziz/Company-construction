import React from 'react';

const OnlyTheBestReuseable = ({ title, imageSrc, description })=> {
    return (
        <div className="d-flex pb-4">
          <div className="pt-2">
            <img src={imageSrc} alt={title} />
          </div>
          <div className="ps-3">
            <h5 style={{ fontFamily: 'rubik', fontWeight: '700', fontSize: '18px' }} className='text-center text-md-start'>{title}</h5>
            <p className="text-center text-md-start" style={{ fontFamily: 'Open Sans', fontSize: '15px', fontWeight: '400' }}>{description}</p>
          </div>
        </div>
      );
    };
    

export default OnlyTheBestReuseable
