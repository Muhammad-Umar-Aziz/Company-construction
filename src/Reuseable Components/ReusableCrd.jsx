import React from 'react';
import { Card } from 'react-bootstrap';
import Basicbutton from './Basicbutton';

const ReusableCrd = ({ imgSrc, title, text, backgroundColor, buttonStyles }) => {

  return (
    <Card style={{ width: '21rem', backgroundColor }} className='border-0 mb-5'>
      <img src={imgSrc} alt={title}/>
      <Card.Body className='border_of_card p-4'>
        <Card.Title className='pb-3 text-center text-md-start' style={{ fontFamily: 'Open Sans', fontWeight: 700, fontSize: '15px' }}>
          {title}
        </Card.Title>
        <Card.Text className='text-muted pb-5 text-center text-md-start' style={{fontFamily: 'Open Sans', fontWeight: 400, fontSize: '15px' }}>
          {text}
        </Card.Text>
        <div className='pt-5 d-flex justify-content-center justify-content-md-start'>
          <Basicbutton style={buttonStyles}>VIEW PROJECT</Basicbutton>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ReusableCrd;
