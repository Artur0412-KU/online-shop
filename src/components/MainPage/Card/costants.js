import {
  Laptop,
  LenovoColors,
  Smartphone,
  svgCard,
  svgCardClick,
  svgCardHover,
  svgLike,
  svgLikeH,
} from '../img/icons';
import { SamsungColors } from '../img/icons';

const DATA_CARD = [
  {
    key: '1',
    title: 'Samsung Galaxy A24 6/128Gb Black',
    title2: 'Lenovo IdeaPad 1 15ALC7',
    price: '19 900 ₴',
    price2: '16 999 ₴',
    colorPalette: SamsungColors,
    colorPalette2: LenovoColors,
    img: Smartphone,
    img2: Laptop,
    svgCard: svgCard,
    svgCardClick: svgCardClick,
    svgLike: svgLike,
    svgLikeH: svgLikeH,
    svgCardHover: svgCardHover,
  },
];

export default DATA_CARD;
