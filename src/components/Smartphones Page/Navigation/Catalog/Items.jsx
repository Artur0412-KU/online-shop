<<<<<<< HEAD
import { Space, Divider } from 'antd';
=======
import { Space, Divider } from "antd";
import { AudioIcon, ConsoleIcon, KidsIcon, LaptopIcon, PCIcon, PhotoIcon, SaleIcon, SmartphoneIcon, TabletIcon, TVIcon, WatchIcon } from "../../../MainPage/img/icons";
>>>>>>> main

const items = [
  {
    key: '1',
    label: (
      <>
        <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
<<<<<<< HEAD
          <Space
            className="catalog-item"
            style={{ paddingRight: '20px', paddingTop: '16px' }}
            align="center"
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                paddingLeft: '10px',
              }}
            >
              <img
                src="/src/components/MainPage/img/catalog-icons/smartphone.svg"
                alt="Smartphone"
                style={{ padding: '0px', margin: '0px' }}
              />
              <p
                style={{
                  fontSize: '24px',
                  fontFamily: '"Arial", sans-serif',
                  margin: '0',
                  lineHeight: '150%',
                }}
              >
                Smartphone
              </p>
=======
          <Space className="catalog-item" style={{paddingRight: '20px', paddingTop: '16px'  }} align="center">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
              <img src={SmartphoneIcon} alt='Smartphone' style={{padding: '0px', margin: '0px'}}/>
              <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0', lineHeight: '150%' }}>Smartphone</p>
>>>>>>> main
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
        <Divider
          style={{ paddingTop: '0px', marginTop: '10px', marginBottom: '16px' }}
        />
      </>
    ),
  },
  {
    key: '2',
<<<<<<< HEAD
    label: (
      <>
        <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
          <Space
            className="catalog-item"
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
              paddingRight: '20px',
              paddingTop: '8px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                paddingLeft: '10px',
              }}
            >
              <img
                src="/src/components/MainPage/img/catalog-icons/laptop.svg"
                alt="Smartphone"
              />
              <p
                style={{
                  fontSize: '24px',
                  fontFamily: '"Arial", sans-serif',
                  margin: '0',
                }}
              >
                Laptop
              </p>
            </div>
          </Space>
          <i
            className="arrow right"
            style={{ marginLeft: 'auto', marginRight: '10px' }}
          ></i>
=======
    label: <>
    <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
      <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
          <img src={LaptopIcon} alt='Smartphone' />
          <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0' }}>Laptop</p>
>>>>>>> main
        </div>
        <Divider
          style={{ paddingTop: '0px', marginTop: '10px', marginBottom: '16px' }}
        />
      </>
    ),
  },
  {
    key: '3',
<<<<<<< HEAD
    label: (
      <>
        <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
          <Space
            className="catalog-item"
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
              paddingRight: '20px',
              paddingTop: '8px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                paddingLeft: '10px',
              }}
            >
              <img
                src="/src/components/MainPage/img/catalog-icons/tablet.svg"
                alt="Smartphone"
              />
              <p
                style={{
                  fontSize: '24px',
                  fontFamily: '"Arial", sans-serif',
                  margin: '0',
                }}
              >
                Tablet
              </p>
            </div>
          </Space>
          <i
            className="arrow right"
            style={{ marginLeft: 'auto', marginRight: '10px' }}
          ></i>
=======
    label: <>
    <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
      <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
          <img src={TabletIcon} alt='Smartphone' />
          <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0' }}>Tablet</p>
>>>>>>> main
        </div>
        <Divider
          style={{ paddingTop: '0px', marginTop: '10px', marginBottom: '16px' }}
        />
      </>
    ),
  },
  {
    key: '4',
<<<<<<< HEAD
    label: (
      <>
        <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
          <Space
            className="catalog-item"
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
              paddingRight: '20px',
              paddingTop: '8px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                paddingLeft: '10px',
              }}
            >
              <img
                src="/src/components/MainPage/img/catalog-icons/pc.svg"
                alt="Smartphone"
              />
              <p
                style={{
                  fontSize: '24px',
                  fontFamily: '"Arial", sans-serif',
                  margin: '0',
                }}
              >
                PC
              </p>
            </div>
          </Space>
          <i
            className="arrow right"
            style={{ marginLeft: 'auto', marginRight: '10px' }}
          ></i>
=======
    label: <>
    <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
      <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
          <img src={PCIcon} alt='Smartphone' />
          <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0' }}>PC</p>
>>>>>>> main
        </div>
        <Divider
          style={{ paddingTop: '0px', marginTop: '10px', marginBottom: '16px' }}
        />
      </>
    ),
  },
  {
    key: '5',
<<<<<<< HEAD
    label: (
      <>
        <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
          <Space
            className="catalog-item"
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
              paddingRight: '20px',
              paddingTop: '8px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                paddingLeft: '10px',
              }}
            >
              <img
                src="/src/components/MainPage/img/catalog-icons/tv.svg"
                alt="Smartphone"
              />
              <p
                style={{
                  fontSize: '24px',
                  fontFamily: '"Arial", sans-serif',
                  margin: '0',
                }}
              >
                TVs and Multimedia
              </p>
            </div>
          </Space>
          <i
            className="arrow right"
            style={{ marginLeft: 'auto', marginRight: '10px' }}
          ></i>
=======
    label: <>
    <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
      <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
          <img src={TVIcon} alt='Smartphone' />
          <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0' }}>TVs and Multimedia</p>
>>>>>>> main
        </div>
        <Divider
          style={{ paddingTop: '0px', marginTop: '10px', marginBottom: '16px' }}
        />
      </>
    ),
  },
  {
    key: '6',
<<<<<<< HEAD
    label: (
      <>
        <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
          <Space
            className="catalog-item"
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
              paddingRight: '20px',
              paddingTop: '8px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                paddingLeft: '10px',
              }}
            >
              <img
                src="/src/components/MainPage/img/catalog-icons/watch.svg"
                alt="Smartphone"
              />
              <p
                style={{
                  fontSize: '24px',
                  fontFamily: '"Arial", sans-serif',
                  margin: '0',
                }}
              >
                Smart-watch
              </p>
            </div>
          </Space>
          <i
            className="arrow right"
            style={{ marginLeft: 'auto', marginRight: '10px' }}
          ></i>
=======
    label: <>
    <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
      <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
          <img src={WatchIcon} alt='Smartphone' />
          <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0' }}>Smart-watch</p>
>>>>>>> main
        </div>
        <Divider
          style={{ paddingTop: '0px', marginTop: '10px', marginBottom: '16px' }}
        />
      </>
    ),
  },
  {
    key: '7',
<<<<<<< HEAD
    label: (
      <>
        <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
          <Space
            className="catalog-item"
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
              paddingRight: '20px',
              paddingTop: '8px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                paddingLeft: '10px',
              }}
            >
              <img
                src="/src/components/MainPage/img/catalog-icons/audio.svg"
                alt="Smartphone"
              />
              <p
                style={{
                  fontSize: '24px',
                  fontFamily: '"Arial", sans-serif',
                  margin: '0',
                }}
              >
                Audio
              </p>
            </div>
          </Space>
          <i
            className="arrow right"
            style={{ marginLeft: 'auto', marginRight: '10px' }}
          ></i>
=======
    label: <>
    <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
      <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
          <img src={AudioIcon} alt='Smartphone' />
          <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0' }}>Audio</p>
>>>>>>> main
        </div>
        <Divider
          style={{ paddingTop: '0px', marginTop: '10px', marginBottom: '16px' }}
        />
      </>
    ),
  },
  {
    key: '8',
<<<<<<< HEAD
    label: (
      <>
        <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
          <Space
            className="catalog-item"
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
              paddingRight: '20px',
              paddingTop: '8px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                paddingLeft: '10px',
              }}
            >
              <img
                src="/src/components/MainPage/img/catalog-icons/console.svg"
                alt="Smartphone"
              />
              <p
                style={{
                  fontSize: '24px',
                  fontFamily: '"Arial", sans-serif',
                  margin: '0',
                }}
              >
                Game console
              </p>
            </div>
          </Space>
          <i
            className="arrow right"
            style={{ marginLeft: 'auto', marginRight: '10px' }}
          ></i>
=======
    label: <>
    <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
      <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
          <img src={ConsoleIcon} alt='Smartphone' />
          <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0' }}>Game console</p>
>>>>>>> main
        </div>
        <Divider
          style={{ paddingTop: '0px', marginTop: '10px', marginBottom: '16px' }}
        />
      </>
    ),
  },
  {
    key: '9',
<<<<<<< HEAD
    label: (
      <>
        <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
          <Space
            className="catalog-item"
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
              paddingRight: '20px',
              paddingTop: '8px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                paddingLeft: '10px',
              }}
            >
              <img
                src="/src/components/MainPage/img/catalog-icons/photo.svg"
                alt="Smartphone"
              />
              <p
                style={{
                  fontSize: '24px',
                  fontFamily: '"Arial", sans-serif',
                  margin: '0',
                }}
              >
                Photo and video
              </p>
            </div>
          </Space>
          <i
            className="arrow right"
            style={{ marginLeft: 'auto', marginRight: '10px' }}
          ></i>
=======
    label: <>
    <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
      <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
          <img src={PhotoIcon} alt='Smartphone' />
          <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0' }}>Photo and video</p>
>>>>>>> main
        </div>
        <Divider
          style={{ paddingTop: '0px', marginTop: '10px', marginBottom: '16px' }}
        />
      </>
    ),
  },
  {
    key: '10',
<<<<<<< HEAD
    label: (
      <>
        <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
          <Space
            className="catalog-item"
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
              paddingRight: '20px',
              paddingTop: '8px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                paddingLeft: '10px',
              }}
            >
              <img
                src="/src/components/MainPage/img/catalog-icons/kids.svg"
                alt="Smartphone"
              />
              <p
                style={{
                  fontSize: '24px',
                  fontFamily: '"Arial", sans-serif',
                  margin: '0',
                }}
              >
                KIDS
              </p>
            </div>
          </Space>
          <i
            className="arrow right"
            style={{ marginLeft: 'auto', marginRight: '10px' }}
          ></i>
=======
    label: <>
    <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
      <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
          <img src={KidsIcon} alt='Smartphone' />
          <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0' }}>KIDS</p>
>>>>>>> main
        </div>
        <Divider
          style={{ paddingTop: '0px', marginTop: '10px', marginBottom: '16px' }}
        />
      </>
    ),
  },
  {
    key: '11',
<<<<<<< HEAD
    label: (
      <>
        <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
          <Space
            className="catalog-item"
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
              paddingRight: '20px',
              paddingTop: '8px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                paddingLeft: '10px',
              }}
            >
              <img
                src="/src/components/MainPage/img/catalog-icons/sale.svg"
                alt="Smartphone"
              />
              <p
                style={{
                  fontSize: '24px',
                  fontFamily: '"Arial", sans-serif',
                  margin: '0',
                  color: 'red',
                }}
              >
                SALE
              </p>
            </div>
          </Space>
          <i
            className="arrow right"
            style={{ marginLeft: 'auto', marginRight: '10px' }}
          ></i>
=======
    label: <>
    <div className="catalog-nav" style={{ paddingBottom: '0px' }}>
      <Space className="catalog-item" style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', paddingRight: '20px', paddingTop: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '10px' }}>
          <img src={SaleIcon} alt='Smartphone' />
          <p style={{ fontSize: '24px', fontFamily: '"Arial", sans-serif', margin: '0', color: 'red' }}>SALE</p>
>>>>>>> main
        </div>
        <Divider
          style={{ paddingTop: '0px', marginTop: '10px', marginBottom: '16px' }}
        />
      </>
    ),
  },
];

export default items;
