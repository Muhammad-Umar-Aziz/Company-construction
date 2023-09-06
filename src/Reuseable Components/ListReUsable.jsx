import React from 'react'
const ListReUsable = ({listData }) => {
    return (
        <ul>
          {listData.map((item, index) => (
            <li key={index} style={{ color: 'rgba(42, 42, 42, 1)', fontFamily: 'Open Sans', fontWeight: '400', fontSize: '15px' }}>
              {item}
            </li>
          ))}
        </ul>
      );
    };

export default ListReUsable
