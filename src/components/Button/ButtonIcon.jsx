import React from 'react'
import { Button } from '@mui/material'

export default function ButtonIcon(props) {
  return (
    <Button style={{borderRadius: '10px', backgroundColor: '#fff', padding: '10px', width: '45px', height: '50px'}} >
        <img src={props.icon} />
    </Button>
  )
}
