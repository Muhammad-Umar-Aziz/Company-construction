import React from 'react'

const TransparentHeaderBanner = ({ imgSrc, title, description }) => {
    return (
        <div className="d-flex pb-4">
          <div className="pt-2">
            <img src={imgSrc} alt={title} />
          </div>
          <div className="ps-3">
            <h5 style={{ fontFamily: 'rubik', fontWeight: '700', fontSize: '16px' }} className="text-light text-center text-md-start">
              {title}
            </h5>
            <p className="text-light text-center text-md-start">{description}</p>
          </div>
        </div>
      );
    };

export default TransparentHeaderBanner
