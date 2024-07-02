import { Space, Divider } from "antd";
import { AudioIcon, ConsoleIcon, KidsIcon, LaptopIcon, PCIcon, PhotoIcon, SaleIcon, SmartphoneIcon, TabletIcon, TVIcon, WatchIcon } from "../../../MainPage/img/icons";

const items = [
  {
    key: '1',
    label: (
      <>
        <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
          <Space className="catalog-item" style={{paddingRight: '20px', paddingTop: '16px'  }} align="center">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
              <img src={SmartphoneIcon} alt='Smartphone' style={{padding: '0px', margin: '0px'}}/>
              <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0', lineHeight: '150%', color: '#1C1817' }}>Smartphone</p>
            </div>
          </Space>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '0px', marginRight: '10px', height: '36px', lineHeight: '150%' }}>
            <i className="arrow right"></i>
          </div>
        </div>
        <Divider style={{paddingTop: '0px', margin: '0px',  marginBottom: '16px'}}/>
      </>
    )
  },
  {
    key: '2',
    label: <>
    <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
      <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
          <img src={LaptopIcon} alt='Smartphone' />
          <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0', color: '#1C1817'  }}>Laptop</p>
        </div>
      </Space>
      <i className="arrow right" style={{ marginLeft: 'auto', marginRight: '10px' }}></i>
    </div>
    <Divider style={{paddingTop: '0px', marginTop: '10px', marginBottom: '16px'}}/>
  </>
  },
  {
    key: '3',
    label: <>
    <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
      <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
          <img src={TabletIcon} alt='Smartphone' />
          <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0', color: '#1C1817'  }}>Tablet</p>
        </div>
      </Space>
      <i className="arrow right" style={{ marginLeft: 'auto', marginRight: '10px' }}></i>
    </div>
    <Divider style={{paddingTop: '0px', marginTop: '10px',  marginBottom: '16px'}}/>
  </>
  },
  {
    key: '4',
    label: <>
    <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
      <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
          <img src={PCIcon} alt='Smartphone' />
          <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0', color: '#1C1817'  }}>PC</p>
        </div>
      </Space>
      <i className="arrow right" style={{ marginLeft: 'auto', marginRight: '10px' }}></i>
    </div>
    <Divider style={{paddingTop: '0px', marginTop: '10px', marginBottom: '16px'}}/>
  </>
  },
  {
    key: '5',
    label: <>
    <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
      <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
          <img src={TVIcon} alt='Smartphone' />
          <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0', color: '#1C1817'  }}>TVs and Multimedia</p>
        </div>
      </Space>
      <i className="arrow right" style={{ marginLeft: 'auto', marginRight: '10px' }}></i>
    </div>
    <Divider style={{paddingTop: '0px', marginTop: '10px', marginBottom: '16px'}}/>
  </>
  },
  {
    key: '6',
    label: <>
    <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
      <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
          <img src={WatchIcon} alt='Smartphone' />
          <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0', color: '#1C1817'  }}>Smart-watch</p>
        </div>
      </Space>
      <i className="arrow right" style={{ marginLeft: 'auto', marginRight: '10px' }}></i>
    </div>
    <Divider style={{paddingTop: '0px', marginTop: '10px', marginBottom: '16px'}}/>
  </>
  },
  {
    key: '7',
    label: <>
    <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
      <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
          <img src={AudioIcon} alt='Smartphone' />
          <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0', color: '#1C1817'  }}>Audio</p>
        </div>
      </Space>
      <i className="arrow right" style={{ marginLeft: 'auto', marginRight: '10px' }}></i>
    </div>
    <Divider style={{paddingTop: '0px', marginTop: '10px', marginBottom: '16px'}}/>
  </>
  },
  {
    key: '8',
    label: <>
    <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
      <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
          <img src={ConsoleIcon} alt='Smartphone' />
          <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0', color: '#1C1817'  }}>Game console</p>
        </div>
      </Space>
      <i className="arrow right" style={{ marginLeft: 'auto', marginRight: '10px' }}></i>
    </div>
    <Divider style={{paddingTop: '0px', marginTop: '10px', marginBottom: '16px'}}/>
  </>
  },
  {
    key: '9',
    label: <>
    <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
      <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
          <img src={PhotoIcon} alt='Smartphone' />
          <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0', color: '#1C1817'  }}>Photo and video</p>
        </div>
      </Space>
      <i className="arrow right" style={{ marginLeft: 'auto', marginRight: '10px' }}></i>
    </div>
    <Divider style={{paddingTop: '0px', marginTop: '10px', marginBottom: '16px'}}/>
  </>
  },
  {
    key: '10',
    label: <>
    <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
      <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
          <img src={KidsIcon} alt='Smartphone' />
          <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0', color: '#1C1817'  }}>KIDS</p>
        </div>
      </Space>
      <i className="arrow right" style={{ marginLeft: 'auto', marginRight: '10px' }}></i>
    </div>
    <Divider style={{paddingTop: '0px', marginTop: '10px', marginBottom: '16px'}}/>
  </>
  },
  {
    key: '11',
    label: <>
    <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
      <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
          <img src={SaleIcon} alt='Smartphone' />
          <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0', color: 'red' }}>SALE</p>
        </div>
      </Space>
      <i className="arrow right" style={{ marginLeft: 'auto', marginRight: '10px' }}></i>
    </div>
    <Divider style={{paddingTop: '0px', marginTop: '10px', marginBottom: '16px'}}/>
  </>
  }
];

export default items;
