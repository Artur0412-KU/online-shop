import hamburgerImg from '../img/burger_menu.svg';
import closeHamburgerMenu from '../img/close_burger_menu.svg';

export const HamburgerMenu = ({
  isActiveHamburgerMenu,
  setIsActiveHamburgerMenu,
}) => {
  const handleOpenHamburger = () =>
    setIsActiveHamburgerMenu((status) => !status);
  return (
    <div className="hamburger-menu" onClick={handleOpenHamburger}>
      <img
        src={isActiveHamburgerMenu ? closeHamburgerMenu : hamburgerImg}
        alt="hamburger image"
      />
    </div>
  );
};
