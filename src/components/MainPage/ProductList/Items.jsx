import {
  MobileOutlined,
  LaptopOutlined,
  TabletOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const items = [
  {
    key: '1',
    label: (
      <Link target="_blank" to="/smartphones" className="list-item">
        <MobileOutlined /> <p>Smartphone</p>
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="" href="" className="list-item">
        <LaptopOutlined /> Laptop
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
];

export default items;
