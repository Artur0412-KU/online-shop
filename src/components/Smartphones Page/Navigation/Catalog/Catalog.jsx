import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Dropdown, Input, Space } from 'antd';
const { Search } = Input;
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ListItemIcon } from '@mui/material';
import { color } from '@mui/system';

const catalogIcon = {
  img: '/src/components/MainPage/img/catalog-icon.png'
}

const DATA = [
  {
    key: '1',
    title: 'Smartphone',
    img: '/src/components/MainPage/img/catalog-icons/smartphone.svg'
  }, 
  {
    key: '2',
    title: 'Laptop',
    img: '/src/components/MainPage/img/catalog-icons/laptop.svg'
  }, 
  {
    key: '3',
    title: 'Tablet',
    img: '/src/components/MainPage/img/catalog-icons/tablet.svg'
  }, 
  {
    key: '4',
    title: 'PC',
    img: '/src/components/MainPage/img/catalog-icons/pc.svg'
  }, 
  {
    key: '5',
    title: 'TV and Multimedia',
    img: '/src/components/MainPage/img/catalog-icons/tv.svg'
  }, 
  {
    key: '6',
    title: 'Smart-watch',
    img: '/src/components/MainPage/img/catalog-icons/watch.svg'
  }, 
  {
    key: '7',
    title: 'Audio',
    img: '/src/components/MainPage/img/catalog-icons/audio.svg'
  }, 
  {
    key: '8',
    title: 'Game console',
    img: '/src/components/MainPage/img/catalog-icons/console.svg'
  }, 
  {
    key: '9',
    title: 'Photo and video',
    img: '/src/components/MainPage/img/catalog-icons/photo.svg'
  }, 
  {
    key: '10',
    title: 'KIDS',
    img: '/src/components/MainPage/img/catalog-icons/kids.svg'
  }, 
  {
    key: '11',
    title: 'SALE',
    img: '/src/components/MainPage/img/catalog-icons/sale.svg'
  }, 
]




export default function Catalog() {
  const navigate = useNavigate();
  const [data, setData] = useState(DATA);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <>
    <Button className='dropdown' 
        style={{
          fontSize: '42px', 
          backgroundColor: '#6f4c9a',
          paddingLeft: '50px',
          paddingRight: '190px',
          paddingTop:'15px',
          paddingBottom: '15px',
          borderRadius: '0px',
          color: '#fff',
          fontFamily: 'Inter',
          textTransform: 'capitalize',
          fontWeight: 'medium',
          width: '420px',
          height: '92px'
        }}
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick} 
        startIcon = {<img src={catalogIcon.img}/> }>
        Catalog
      </Button>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            maxHeight: 100 * 4.5,
            width: '27.5vw',
          },
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {data.map((item) => (
          <MenuItem onClick={handleClose} key={item.key} style={{ fontFamily: '"Arial", sans-serif', fontSize: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',  }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <ListItemIcon>
                <img src={item.img} alt={item.title} />
              </ListItemIcon>
              <p style={item.key === '11' ? {color: 'red'} : {color: 'black'}}>{item.title}</p>
            </div>
            <i className="arrow right"></i>
          </MenuItem>
        ))}
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
      </Menu>
    </>
      
      
    
  )
}
