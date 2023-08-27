import { useEffect, useState } from "react";
import { users } from "../../mocks/users";
import { Link, Outlet } from "react-router-dom";
import { MENU_WIDTH, PAGES } from "../../const";
import { useAppDispatch, useAppSelector } from "../../hooks";
import cn from 'classnames';
import { changeCurrentPage, toggleMenu } from "../../store/page/page-actions";
import { ToggleMenuIcon } from "../icons/icons";
import { getMenuOpeningStatus, getPage, saveMenuOpeningStatus, savePage } from "../../store";

export function Layout(): JSX.Element {
  const [menuStatus, setMenuStatus] = useState(getMenuOpeningStatus() === 'true' ? true : false);
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.menu.menuStatus.currentPage);
  const isMenuOpened = useAppSelector((state) => state.menu.menuStatus.isOpened);

  menuStatus === true ? dispatch(toggleMenu({isOpened: true})) : dispatch(toggleMenu({isOpened: false}));

  useEffect(() => {
    const updateWindowWidth = () => {
      const newWidth = window.innerWidth;
      if (newWidth <= 500) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
    window.addEventListener('resize', updateWindowWidth);
    updateWindowWidth();
    saveMenuOpeningStatus(menuStatus.toString());
    return () => window.removeEventListener('resize', updateWindowWidth);
  }, [isMobile, menuStatus]);

  function onMenuToggle() {
    setMenuStatus(!menuStatus);
    dispatch(toggleMenu({isOpened: menuStatus}));
    toggleMenu({isOpened: menuStatus});
    saveMenuOpeningStatus(menuStatus.toString());
  }

  return (
    <>
    <div className="layout">
        <div className="menu" style={isMenuOpened ? {width: MENU_WIDTH[0]} : {width: MENU_WIDTH[1]}}>
          <p className="menu__logo">
            <span className="menu__logo-link" style={isMenuOpened ? {marginLeft: '22px'} : {marginLeft: '10px'}}>
              {isMenuOpened
                ? "SaaS\u00a0Kit"
                : "SaaS"}
            </span>
          </p>

          <div className="menu__user user" style={isMenuOpened && !isMobile ? {marginLeft: '22px'} : {marginLeft: '10px'}}>
            <img src={users[0].avatar} alt={users[0].name} width="46" height="46" className="user__avatar"/>
            {
              isMenuOpened && !isMobile
                ?
                <div className="user__wrapper">
                  <p className="user__name">{users[0].name}</p>
                  <p className="user__email">{users[0].email}</p>
                </div>
                : ""
            }
          </div>

          <ul className="menu__list">
            {
              PAGES.map((page) => {
                const onChangePage = () => {
                  dispatch(changeCurrentPage({currentPage: page.route}));
                  savePage(page.route);
                };
                const menuItemClassName = cn('menu__link',
                currentPage === page.route ? 'menu__link--active' : '',
                getPage() === page.route ? 'menu__link--active' : ''
              );
                return (
                  <li className="menu__item" key={page.title}>
                    <Link className={menuItemClassName} to={page.route} onClick={onChangePage}>
                      {page.icon}
                      {isMenuOpened && !isMobile ? page.title : ""}
                    </Link>
                  </li>
                )
              })
            }
          </ul>

          <div className="menu__toggler-wrapper">
            <button className="menu__toggler" onClick={(e) => onMenuToggle()}>
              <ToggleMenuIcon/>
              {isMenuOpened ? "Toggle\u00a0sidebar" : ""}
          </button>
          </div>
        </div>

        <div className="search" style={isMenuOpened && !isMobile ? {left: MENU_WIDTH[0]} : {left: MENU_WIDTH[1]}}>
          <form action="#" method="get">
            <input className="search__input" type="text" placeholder="Global search"/>
            <span className="search__icon"></span>
          </form>
        </div>
      </div>
      <Outlet/>
    </>
  );
}
