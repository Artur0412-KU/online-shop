import React, { useState } from 'react';
import { Dropdown, Menu, Space } from 'antd';
import items from './Items';
import styles from './Catalog.module.css';

const catalogIcon = {
  img: '/src/components/MainPage/img/catalog-icon.png',
};

export default function Catalog() {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleMouseEnter = () => {
    setShowOverlay(true);
  };

  const handleMouseLeave = () => {
    setShowOverlay(false);
  };

  return (
    <>
      <div className={`${styles.overlay} ${showOverlay ? styles.show : ''}`} />
      <Dropdown
        overlay={<Menu items={items} />}
        onOpenChange={(open) => setShowOverlay(open)}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space
            style={{
              fontSize: '42px',
              backgroundColor: '#6f4c9a',
              paddingLeft: '50px',
              paddingTop: '15px',
              paddingBottom: '15px',
              borderRadius: '0px',
              color: '#fff',
              textTransform: 'capitalize',
              fontFamily: '"Arial", sans-serif',
              fontWeight: 'medium',
              width: '370px',
              height: '62px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={catalogIcon.img}
              style={{ display: 'flex', alignItems: 'center' }}
              alt="Catalog Icon"
            />
            <p style={{ width: '200px' }}>Catalog</p>
          </Space>
        </a>
      </Dropdown>
    </>
  );
}
