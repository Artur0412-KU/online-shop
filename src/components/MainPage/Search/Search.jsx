import React, { useState } from 'react';
import SearchIcon from './SearchIcon';
import { Input } from 'antd';

const SearchField = ({ status, onHover }) => {
  const getStatusProps = (status) => {
    switch (status) {
      case 'Active':
        return {
          style: { borderColor: '#fff' },
          suffix: (
            <SearchIcon
              width={'24px'}
              height={'24px'}
              color={'#6a0dad'}
              style={{ cursor: 'pointer' }}
              tabIndex={0}
            />
          ),
        };
      case 'Disable':
        return {
          disabled: true,
          style: { backgroundColor: '#ffffff' },
          suffix: (
            <SearchIcon
              width={'24px'}
              height={'24px'}
              color={'#FFFFFF'}
              style={{ cursor: 'not-allowed' }}
              tabIndex={-1}
            />
          ),
        };
      case 'Hover':
        return {
          style: { borderColor: '#fff' },
          suffix: (
            <SearchIcon
              width={'24px'}
              height={'24px'}
              color={'#FFFFFF'}
              style={{ cursor: 'pointer' }}
              tabIndex={0}
            />
          ),
        };
      default:
        return {};
    }
  };

  return (
    <div
      onMouseEnter={() => onHover('Hover')}
      onMouseLeave={() => onHover('Disable')}
      style={{ width: 610, height: 56, display: 'flex', borderRadius: '16px' }}
      tabIndex={0}
    >
      <Input
        onFocus={() => onHover('Active')}
        placeholder={status === 'Active' ? null : 'Searching...'}
        {...getStatusProps(status)}
        tabIndex={0}
      />
    </div>
  );
};

export default function Search() {
  const [status, setStatus] = useState('Disable');

  return (
    <SearchField
      status={status}
      onHover={setStatus}
      style={{ borderRadius: '30px' }}
    />
  );
}
