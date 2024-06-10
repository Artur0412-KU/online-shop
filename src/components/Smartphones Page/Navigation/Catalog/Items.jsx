import { Space, Divider } from "antd";

const items = [
  {
    key: '1',
    label: (
      <>
        <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
          <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px'  }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
              <img src='/src/components/MainPage/img/catalog-icons/smartphone.svg' alt='Smartphone' />
              <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0' }}>Smartphone</p>
            </div>
          </Space>
          <i className="arrow right" style={{ marginLeft: 'auto', marginRight: '10px' }}></i>
        </div>
        <Divider style={{paddingTop: '0px'}}/>
      </>
    )
  },
  {
    key: '2',
    label: <>
    <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
      <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
          <img src='/src/components/MainPage/img/catalog-icons/laptop.svg' alt='Smartphone' />
          <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0' }}>Laptop</p>
        </div>
      </Space>
      <i className="arrow right" style={{ marginLeft: 'auto', marginRight: '10px' }}></i>
    </div>
    <Divider style={{paddingTop: '0px'}}/>
  </>
  },
  {
    key: '3',
    label: <>
    <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
      <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
          <img src='/src/components/MainPage/img/catalog-icons/tablet.svg' alt='Smartphone' />
          <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0' }}>Tablet</p>
        </div>
      </Space>
      <i className="arrow right" style={{ marginLeft: 'auto', marginRight: '10px' }}></i>
    </div>
    <Divider style={{paddingTop: '0px'}}/>
  </>
  },
  {
    key: '4',
    label: <>
    <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
      <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
          <img src='/src/components/MainPage/img/catalog-icons/pc.svg' alt='Smartphone' />
          <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0' }}>PC</p>
        </div>
      </Space>
      <i className="arrow right" style={{ marginLeft: 'auto', marginRight: '10px' }}></i>
    </div>
    <Divider style={{paddingTop: '0px'}}/>
  </>
  },
  {
    key: '5',
    label: <>
    <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
      <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
          <img src='/src/components/MainPage/img/catalog-icons/tv.svg' alt='Smartphone' />
          <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0' }}>TVs and Multimedia</p>
        </div>
      </Space>
      <i className="arrow right" style={{ marginLeft: 'auto', marginRight: '10px' }}></i>
    </div>
    <Divider style={{paddingTop: '0px'}}/>
  </>
  },
  {
    key: '6',
    label: <>
    <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
      <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
          <img src='/src/components/MainPage/img/catalog-icons/watch.svg' alt='Smartphone' />
          <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0' }}>Smart-watch</p>
        </div>
      </Space>
      <i className="arrow right" style={{ marginLeft: 'auto', marginRight: '10px' }}></i>
    </div>
    <Divider style={{paddingTop: '0px'}}/>
  </>
  },
  {
    key: '7',
    label: <>
    <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
      <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
          <img src='/src/components/MainPage/img/catalog-icons/audio.svg' alt='Smartphone' />
          <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0' }}>Audio</p>
        </div>
      </Space>
      <i className="arrow right" style={{ marginLeft: 'auto', marginRight: '10px' }}></i>
    </div>
    <Divider style={{paddingTop: '0px'}}/>
  </>
  },
  {
    key: '8',
    label: <>
    <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
      <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
          <img src='/src/components/MainPage/img/catalog-icons/console.svg' alt='Smartphone' />
          <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0' }}>Game console</p>
        </div>
      </Space>
      <i className="arrow right" style={{ marginLeft: 'auto', marginRight: '10px' }}></i>
    </div>
    <Divider style={{paddingTop: '0px'}}/>
  </>
  },
  {
    key: '9',
    label: <>
    <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
      <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
          <img src='/src/components/MainPage/img/catalog-icons/photo.svg' alt='Smartphone' />
          <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0' }}>Photo and video</p>
        </div>
      </Space>
      <i className="arrow right" style={{ marginLeft: 'auto', marginRight: '10px' }}></i>
    </div>
    <Divider style={{paddingTop: '0px'}}/>
  </>
  },
  {
    key: '10',
    label: <>
    <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
      <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
          <img src='/src/components/MainPage/img/catalog-icons/kids.svg' alt='Smartphone' />
          <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0' }}>KIDS</p>
        </div>
      </Space>
      <i className="arrow right" style={{ marginLeft: 'auto', marginRight: '10px' }}></i>
    </div>
    <Divider style={{paddingTop: '0px'}}/>
  </>
  },
  {
    key: '11',
    label: <>
    <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
      <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
          <img src='/src/components/MainPage/img/catalog-icons/sale.svg' alt='Smartphone' />
          <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0', color: 'red' }}>SALE</p>
        </div>
      </Space>
      <i className="arrow right" style={{ marginLeft: 'auto', marginRight: '10px' }}></i>
    </div>
    <Divider style={{paddingTop: '0px'}}/>
  </>
  }
];

export default items;
