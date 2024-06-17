import {
  MobileOutlined,
  LaptopOutlined,
  TabletOutlined,
  ClockCircleOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { HiDesktopComputer } from "react-icons/hi";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { IoGameController } from "react-icons/io5";
import { MdChildCare } from "react-icons/md";
import { LuPercent } from "react-icons/lu";
import BasketIcon from "../img/icons/basket-icon.svg";

const items = [
  {
    key: "1",
    label: (
      <Link target="_blank" to="/smartphones" className="list-item">
        <MobileOutlined /> <p>Smartphone</p>
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="" href="" className="list-item">
        <LaptopOutlined /> Laptop
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a target="_blank" rel="" href="" className="list-item">
        <TabletOutlined /> Tablet
      </a>
    ),
  },
];

export default items;
