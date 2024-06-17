import React from 'react';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import PageNavImg from '../img/PageNavImg.svg';

export default function PageNav() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        gap: '4px',
        paddingTop: '16px',
        paddingLeft: '50px',
      }}
    >
      <li>
        <NavLink to="/" className="page-nav">
          HomePage
        </NavLink>
      </li>
      <img src={PageNavImg} />
      <li>
        <NavLink
          className="page-nav"
          style={(isActive) => {
            return { color: '#000' };
          }}
        >
          Smartphone
        </NavLink>
      </li>
    </Box>
  );
}
