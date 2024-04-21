import React from 'react'
import { Button } from "antd";

export default function ButtonIcon(props) {
  return (
    <Button icon = {props.icon} style={{width: '45px', height: '42px', borderRadius: '25%'}}/>
  )
}
