import React, { useState } from 'react';
import SearchIcon from './SearchIcon';
import { Input } from 'antd';
import DOMPurify from 'dompurify';

const SearchField = ({ status, onHover }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValueChange = (e) => {
    const sanitizedValue = DOMPurify.sanitize(e.target.value);
    setSearchValue(sanitizedValue);
  };

  const getStatusProps = (status) => {
    switch (status) {
      case 'Active':
      case 'Hover':
        return {
          style: { borderColor: '#fff' },

          suffix: (
            <SearchIcon
              width={'24px'}
              height={'24px'}
              color={'#6a0dad'}
              style={{ cursor: 'pointer' }}
            />
          ),
        };
      case 'Disable':
        return {
          suffix: (
            <SearchIcon
              width={'24px'}
              height={'24px'}
              color={'#A5A5A5'}
              style={{ cursor: 'not-allowed' }}
            />
          ),
        };
      default:
        return {};
    }
  };

  return (
    <div
      className="header-search"
      onMouseEnter={() => onHover('Hover')}
      onMouseLeave={() =>
        onHover((prev) => (prev === 'Active' ? 'Active' : 'Disable'))
      }
      style={{ width: 610, height: 56, display: 'flex', borderRadius: '16px' }}
    >
      <Input
        onFocus={() => onHover('Active')}
        onBlur={() => onHover('Disable')}
        placeholder={status === 'Active' ? null : 'Searching...'}
        {...getStatusProps(status)}
        style={{ borderRadius: '16px' }}
        value={searchValue}
        onChange={handleSearchValueChange}
        maxLength={100}
        required
      />
    </div>
  );
};

export default function Search() {
  const [status, setStatus] = useState('Disable');

  return <SearchField status={status} onHover={setStatus} />;
}
