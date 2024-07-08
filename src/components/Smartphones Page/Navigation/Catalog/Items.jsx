import { Space, Divider } from "antd";
import { AudioIcon, ConsoleIcon, KidsIcon, LaptopIcon, PCIcon, PhotoIcon, SaleIcon, SmartphoneIcon, TabletIcon, TVIcon, WatchIcon } from "../../../MainPage/img/icons";

const items = [
  {
    key: '1',
    label: (
      <>
        <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
          <Space className="catalog-item" style={{ paddingRight: '20px', paddingTop: '16px' }} align="center">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
              <img src={SmartphoneIcon} alt='Smartphone' style={{ padding: '0px', margin: '0px' }}/>
              <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0', lineHeight: '150%', color: '#1C1817' }}>Smartphone</p>
            </div>
          </Space>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: '0px',
              marginRight: '10px',
              height: '36px',
              lineHeight: '150%',
            }}
          >
            <i className="arrow right"></i>
          </div>
        </div>
        <Divider style={{ paddingTop: '0px', margin: '0px', marginBottom: '16px' }}/>
      </>
    ),
  },
  {
    key: '2',
    label: (
      <>
        <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
          <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
              <img src={LaptopIcon} alt='Laptop' />
              <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0', color: '#1C1817' }}>Laptop</p>
            </div>
          </Space>
          <Divider style={{ paddingTop: '0px', marginTop: '10px', marginBottom: '16px' }}/>
        </div>
      </>
    ),
  },
  {
    key: '3',
    label: (
      <>
        <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
          <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
              <img src={TabletIcon} alt='Tablet' />
              <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0', color: '#1C1817' }}>Tablet</p>
            </div>
          </Space>
          <Divider style={{ paddingTop: '0px', marginTop: '10px', marginBottom: '16px' }}/>
        </div>
      </>
    ),
  },
  {
    key: '4',
    label: (
      <>
        <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
          <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
              <img src={PCIcon} alt='PC' />
              <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0', color: '#1C1817' }}>PC</p>
            </div>
          </Space>
          <Divider style={{ paddingTop: '0px', marginTop: '10px', marginBottom: '16px' }}/>
        </div>
      </>
    ),
  },
  {
    key: '5',
    label: (
      <>
        <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
          <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
              <img src={TVIcon} alt='TVs and Multimedia' />
              <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0', color: '#1C1817' }}>TVs and Multimedia</p>
            </div>
          </Space>
          <Divider style={{ paddingTop: '0px', marginTop: '10px', marginBottom: '16px' }}/>
        </div>
      </>
    ),
  },
  {
    key: '6',
    label: (
      <>
        <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
          <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
              <img src={WatchIcon} alt='Smart-watch' />
              <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0', color: '#1C1817' }}>Smart-watch</p>
            </div>
          </Space>
          <Divider style={{ paddingTop: '0px', marginTop: '10px', marginBottom: '16px' }}/>
        </div>
      </>
    ),
  },
  {
    key: '7',
    label: (
      <>
        <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
          <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
              <img src={AudioIcon} alt='Audio' />
              <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0', color: '#1C1817' }}>Audio</p>
            </div>
          </Space>
          <Divider style={{ paddingTop: '0px', marginTop: '10px', marginBottom: '16px' }}/>
        </div>
      </>
    ),
  },
  {
    key: '8',
    label: (
      <>
        <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
          <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
              <img src={ConsoleIcon} alt='Game console' />
              <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0', color: '#1C1817' }}>Game console</p>
            </div>
          </Space>
          <Divider style={{ paddingTop: '0px', marginTop: '10px', marginBottom: '16px' }}/>
        </div>
      </>
    ),
  },
  {
    key: '9',
    label: (
      <>
        <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
          <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
              <img src={PhotoIcon} alt='Photo and video' />
              <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0', color: '#1C1817' }}>Photo and video</p>
            </div>
          </Space>
          <Divider style={{ paddingTop: '0px', marginTop: '10px', marginBottom: '16px' }}/>
        </div>
      </>
    ),
  },
  {
    key: '10',
    label: (
      <>
        <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
          <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
              <img src={KidsIcon} alt='KIDS' />
              <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0', color: '#1C1817' }}>KIDS</p>
            </div>
          </Space>
          <Divider style={{ paddingTop: '0px', marginTop: '10px', marginBottom: '16px' }}/>
        </div>
      </>
    ),
  },
  {
    key: '11',
    label: (
      <>
        <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
          <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
              <img src={SaleIcon} alt='SALE' />
              <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0', color: 'red' }}>SALE</p>
            </div>
          </Space>
          <Divider style={{ paddingTop: '0px', marginTop: '10px', marginBottom: '16px' }}/>
        </div>
      </>
    ),
  },
];

export default items;

