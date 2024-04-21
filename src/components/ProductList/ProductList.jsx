import React from 'react'
import { Dropdown, Space, Divider } from 'antd';
import items from './Items';
import Right from '../img/icons/right.png'
import Smartphone from '../img/catalog-icons/smartphone.svg'
import laptop from '../img/catalog-icons/laptop.svg'
import tablet from '../img/catalog-icons/tablet.svg'
import PC from '../img/catalog-icons/pc.svg'
import TV from '../img/catalog-icons/tv.svg'
import watch from '../img/catalog-icons/watch.svg'
import audio from '../img/catalog-icons/audio.svg'
import console from '../img/catalog-icons/console.svg'
import photo from '../img/catalog-icons/photo.svg'
import kids from '../img/catalog-icons/kids.svg'
import sale from '../img/catalog-icons/sale.svg'


export default function ProductList() {
    return (
      <div className='product-list'>
        <Dropdown
          menu={items}
          trigger={['click']}
          placement='right'
        >
          <a href='' className='catalog-nav' onClick={(e) => e.preventDefault()}>
            <Space className='catalog-item' style={{ alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={Smartphone} alt="Smartphone" /> Smartphone
              </div>
              <img src={Right} alt="Right Arrow" style={{ marginLeft: 'auto' }} />
            </Space>
          </a>
          
        </Dropdown>
        <Divider style={{marginTop: '8px'}}/>
  
        <Dropdown
          menu={items}
          trigger={['click']}
          placement='right'
        >
          <a href='' className='catalog-nav' onClick={(e) => e.preventDefault()}>
            <Space className='catalog-item' style={{ alignItems: 'center', gap: '195px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={laptop} alt="Laptop" /> Laptop
              </div>
              <img src={Right} alt="Right Arrow" style={{ marginLeft: 'auto' }} />
            </Space>
          </a>
        </Dropdown>
        <Divider style={{marginTop: '8px'}}/>

        <Dropdown
          menu={items}
          trigger={['click']}
          placement='right'
        >
          <a href='' className='catalog-nav' onClick={(e) => e.preventDefault()}>
            <Space className='catalog-item' style={{ alignItems: 'center', gap: '200px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={tablet} alt="Laptop" /> Tablet
              </div>
              <img src={Right} alt="Right Arrow" style={{ marginLeft: 'auto' }} />
            </Space>
          </a>
        </Dropdown>
        <Divider style={{marginTop: '8px'}}/>

        <Dropdown
          menu={items}
          trigger={['click']}
          placement='right'
        >
          <a href='' className='catalog-nav' onClick={(e) => e.preventDefault()}>
            <Space className='catalog-item' style={{ alignItems: 'center', gap: '225px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={PC} alt="Laptop" /> PC
              </div>
              <img src={Right} alt="Right Arrow" style={{ marginLeft: 'auto' }} />
            </Space>
          </a>
        </Dropdown>
        <Divider style={{marginTop: '8px'}}/>

        <Dropdown
          menu={items}
          trigger={['click']}
          placement='right'
        >
          <a href='' className='catalog-nav' onClick={(e) => e.preventDefault()}>
            <Space className='catalog-item' style={{ alignItems: 'center', gap: '100px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={TV} alt="Laptop" /> TVs and Multimedia
              </div>
              <img src={Right} alt="Right Arrow" style={{ marginLeft: 'auto' }} />
            </Space>
          </a>
        </Dropdown>
        <Divider style={{marginTop: '8px'}}/>

        <Dropdown
          menu={items}
          trigger={['click']}
          placement='right'
        >
          <a href='' className='catalog-nav' onClick={(e) => e.preventDefault()}>
            <Space className='catalog-item' style={{ alignItems: 'center', gap: '150px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={watch} alt="Laptop" /> Smart-watch
              </div>
              <img src={Right} alt="Right Arrow" style={{ marginLeft: 'auto' }} />
            </Space>
          </a>
        </Dropdown>
        <Divider style={{marginTop: '8px'}}/>

        <Dropdown
          menu={items}
          trigger={['click']}
          placement='right'
        >
          <a href='' className='catalog-nav' onClick={(e) => e.preventDefault()}>
            <Space className='catalog-item' style={{ alignItems: 'center', gap: '200px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={audio} alt="Laptop" /> Audio
              </div>
              <img src={Right} alt="Right Arrow" style={{ marginLeft: 'auto' }} />
            </Space>
          </a>
        </Dropdown>
        <Divider style={{marginTop: '8px'}}/>

        <Dropdown
          menu={items}
          trigger={['click']}
          placement='right'
        >
          <a href='' className='catalog-nav' onClick={(e) => e.preventDefault()}>
            <Space className='catalog-item' style={{ alignItems: 'center', gap: '135px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={console} alt="Laptop" /> Game console
              </div>
              <img src={Right} alt="Right Arrow" style={{ marginLeft: 'auto' }} />
            </Space>
          </a>
        </Dropdown>
        <Divider style={{marginTop: '8px'}}/>

        <Dropdown
          menu={items}
          trigger={['click']}
          placement='right'
        >
          <a href='' className='catalog-nav' onClick={(e) => e.preventDefault()}>
            <Space className='catalog-item' style={{ alignItems: 'center', gap: '120px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={photo} alt="Laptop" /> Photo and video
              </div>
              <img src={Right} alt="Right Arrow" style={{ marginLeft: 'auto' }} />
            </Space>
          </a>
        </Dropdown>
        <Divider style={{marginTop: '8px'}}/>

        <Dropdown
          menu={items}
          trigger={['click']}
          placement='right'
        >
          <a href='' className='catalog-nav' onClick={(e) => e.preventDefault()}>
            <Space className='catalog-item' style={{ alignItems: 'center', gap: '208px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={kids} alt="Laptop" /> KIDS
              </div>
              <img src={Right} alt="Right Arrow" style={{ marginLeft: 'auto' }} />
            </Space>
          </a>
        </Dropdown>
        <Divider style={{marginTop: '8px'}}/>

        <Dropdown
          menu={items}
          trigger={['click']}
          placement='right'
        >
          <a href='' className='catalog-nav' onClick={(e) => e.preventDefault()}>
            <Space className='catalog-item' style={{ alignItems: 'center', gap: '202px', marginBottom: '0px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'red' }}>
                <img src={sale} alt="Laptop" /> SALE
              </div>
              <img src={Right} alt="Right Arrow" style={{ marginLeft: 'auto' }} />
            </Space>
          </a>
        </Dropdown>
        <Divider style={{marginTop: '8px', marginBottom: '0px'}}/>
      </div>
    );
  }