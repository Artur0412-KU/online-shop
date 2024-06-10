// Items.js
const items = [
  {
    key: '1',
    label: 'Smartphone',
    icon: <img src='/src/components/MainPage/img/catalog-icons/smartphone.svg' alt='Smartphone' />
  },
  {
    key: '2',
    label: 'Laptop',
    icon: <img src='/src/components/MainPage/img/catalog-icons/laptop.svg' alt='Laptop' />
  },
  
  {
    key: '11',
    label: 'SALE',
    icon: <img src='/src/components/MainPage/img/catalog-icons/sale.svg' alt='SALE' />,
    style: { color: 'red' } // Для елементів SALE можемо задати інший стиль
  }
];

export default items;
