import { MobileOutlined, LaptopOutlined, TabletOutlined, ClockCircleOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { HiDesktopComputer } from "react-icons/hi";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { IoGameController } from "react-icons/io5";
import { MdChildCare } from "react-icons/md";
import { LuPercent } from "react-icons/lu";
import BasketIcon from '../img/icons/basket-icon.svg'

const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="" href="" className="list-item">
         <MobileOutlined />  <p>Smartphone</p>
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="" href="" className="list-item">
         <LaptopOutlined />  Laptop
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="" href="" className="list-item">
         <TabletOutlined /> Tablet
        </a>
      ),
    },
    {
      key: '4',
      label: (
        <a target="_blank" rel="" href="" className="list-item">
         <HiDesktopComputer /> PC
        </a>
      ),
    },
    {
      key: '5',
      label: (
        <a target="_blank" rel="" href="" className="list-item">
         <PiTelevisionSimpleBold /> TVs and Multimedia
        </a>
      ),
    },
    {
      key: '6',
      label: (
        <a target="_blank" rel="" href="" className="list-item">
         <ClockCircleOutlined/>  Smart-watch
        </a>
      ),
    },
    {
      key: '7',
      label: (
        <a target="_blank" rel="" href="" className="list-item">
         <FaHeadphonesSimple /> Audio
        </a>
      ),
    },
    {
      key: '8',
      label: (
        <a target="_blank" rel="" href="" className="list-item">
         <IoGameController /> Game console
        </a>
      ),
    },
    {
      key: '9',
      label: (
        <a target="_blank" rel="" href="" className="list-item">
         <VideoCameraOutlined />  Photo and video
        </a>
      ),
    },
    {
      key: '10',
      label: (
        <a target="_blank" rel="" href="" className="list-item">
         <MdChildCare /> KIDS
        </a>
      ),
    },
    {
      key: '11',
      label: (
        <a target="_blank" rel="" href="" style={{color: 'red'}} className="list-item">
         <LuPercent /> SALE
        </a>
      ),
    },
];

export default items;