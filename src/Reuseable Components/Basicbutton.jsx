import React from 'react'
import { Button } from 'react-bootstrap'

const Basicbutton = ({children,style}) => {
  return (
    <div>
      <Button style={style}>{children}</Button>
    </div>
  )
}

export default Basicbutton
