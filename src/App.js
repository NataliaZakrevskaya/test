import style from './App.module.css';
import swanPaint from './images/swanPaint.png';
import andreyImg from './images/andrey.png';
import swanText from './images/swanText.png';
import menuPhoto from './images/menuPhoto.png';
import smallMenuPhoto from './images/smallMenuPhoto.png';
import arrowUp from './images/arrowUp.png';
import arrowDown from './images/arrowDown.png';
import {useLayoutEffect, useState} from "react";

function App() {
  
  const menuItems = ['ГЛАВНАЯ', 'O СЕБЕ', 'ВОПРОС - ОТВЕТ', 'СЕРТИФИКАТ', 'ОТЗЫВЫ', 'РАБОТА', 'ПРАЙС', 'КАРТА САЙТА', 'КОНТАКТЫ'];
  const services = ['ВЫБРАТЬ УСЛУГУ', 'ПОЛУЧИТЬ СКИДКУ по АКЦИИ'];
  const navigationMenuItems = ['ВЫБРАТЬ услугу', 'СМОТРЕТЬ видео', 'ПОДПИСКА на рассылку'];
  
  const [windowWidth, setWindowWidth] = useState(1920)
  const [windowHeight, setWindowHeight] = useState(1460)
  const [scrollY, setScrollY] = useState(0)
  const [editMenu, setEditMenu] = useState(false);
  const [navMenuEdit, setNavMenuEdit] = useState(false);
  
  const handleMenuEdit = (edit) => {
    setEditMenu(edit)
  }
  const handleNavMenuEdit = (edit) => {
    setNavMenuEdit(edit)
  }
  
  useLayoutEffect(() => {
    const scrollHandler = () => {
      setScrollY(window.scrollY)
    }
    const resizeHandler = () => {
      setWindowWidth(window.outerWidth)
      setWindowHeight(window.outerHeight)
    }
    scrollHandler()
    resizeHandler()
    window.addEventListener('scroll', scrollHandler)
    window.addEventListener('resize', resizeHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
      window.removeEventListener('resize', resizeHandler)
    }
  }, [scrollY, windowWidth, windowHeight])
  
  return (
    <div className={style.app}>
      <div className={style.header}>
        <div className={style.headerContainer}>
          <div className={style.headerTop}>
            <div className={style.headerLogoContainer}>
              <div className={style.nameLogo}>
                <img src={andreyImg} alt="andreyImg"/>
              </div>
              <div className={style.swanPaint}>
                <img src={swanPaint} alt="swanPaint"/>
              </div>
              <div className={style.swanText}>
                <img src={swanText} alt="swanText"/>
              </div>
              <p>студия</p>
            </div>
            <div className={style.linksBlockContainer}>
              <div className={style.linksBlock}>
                <a href="#">ОБРАБОТКА ФОТО</a>
                <div/>
                <a href="#">ФОТОКНИГА</a>
                <div/>
                <a href="#">СЛАЙД-ШОУ</a>
                <div/>
                <a href="#">ФОТО/ВИДЕО СЪЁМКА</a>
                <div/>
                <a href="#">МОНТАЖ</a>
                <div/>
                <a href="#">ВИДЕОРОЛИК</a>
              </div>
            </div>
            <div className={style.telBtnContainer}>
              <div className={style.tel}>
                <p>+7 /495/ <span>648-40-22</span></p>
                <p>+7 /926/ <span>511-25-71</span></p>
              </div>
              <div className={style.headerButton}>
                <button>НАПОМНИТЬ о ПОДАРКЕ</button>
                <button>СКИДКИ 2+</button>
              </div>
            </div>
          </div>
          {windowWidth > 480
            ? (
              <div className={style.headerBottom}>
                {menuItems.map((item, index) => {
                  return (
                    <a href="#" key={index}>{item}</a>
                  )
                })}
              </div>
            )
            : (<>
              {!editMenu
                ? (<div>
                  <div className={style.serviceItem} onClick={() => handleMenuEdit(true)}>
                    <p>МЕНЮ</p>
                    <div/>
                  </div>
                </div>)
                : (<div className={style.menu}>
                  <div className={style.serviceItem} onClick={() => handleMenuEdit(false)}>
                    <p>МЕНЮ</p>
                    <div/>
                  </div>
                  <div className={style.menuBlocks}>
                    <div className={style.menuItemContainer}>
                      {menuItems.map((item, index) => {
                        return (
                          <div className={style.menuItem} key={index}>
                            <p>{item}</p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>)}
              <div className={style.menuPhotoContainer}>
                <img src={windowWidth > 320 ? menuPhoto : smallMenuPhoto} alt="menuPhoto"/>
              </div>
              <div className={style.navItemContainer}>
                {services.map((service, index) => {
                  return (
                    <div className={style.navItem} key={index}>
                      <p>{service}</p>
                      <div/>
                    </div>
                  )
                })}
              </div>
            </>)
          }
        </div>
      </div>
      {scrollY > windowHeight && windowWidth > 480 && (
        <div className={style.floatNavigation}>
          <div>
            <p>ВЫБРАТЬ</p>
            <p>услугу</p>
          </div>
          <div>
            <p>СМОТРЕТЬ</p>
            <p>видео</p>
          </div>
          <div>
            <p>ПОДПИСКА</p>
            <p>на рассылку</p>
          </div>
          <div>
            <div>
              <p>ВВЕРХ</p>
              <img src={arrowUp} alt="arrowUp"/>
            </div>
            <div>
              <p>ВНИЗ</p>
              <img src={arrowDown} alt="arrowDown"/>
            </div>
          </div>
        </div>
      )}
      {scrollY > windowHeight && windowWidth > 480 && (
        <div className={style.floatNavbar}>
          {menuItems.map((item, index) => {
            return (
              <div key={index}>
                <a href={'#'}>{item}</a>
              </div>
            )
          })}
        </div>
      )}
      {(scrollY - 200) > windowHeight && windowWidth <= 480 && (
        <>
          {!navMenuEdit
            ? (<div>
              <div className={style.floatServiceItem} onClick={() => handleNavMenuEdit(true)}>
                <p>МЕНЮ СТРАНИЦЫ</p>
                <div/>
              </div>
            </div>)
            : (<>
              <div className={style.floatServiceItem} onClick={() => handleNavMenuEdit(false)}>
                <p>МЕНЮ</p>
                <div/>
              </div>
              <div className={style.floatMenuBlocks}>
                <div className={style.menuItemContainer}>
                  {menuItems.map((item, index) => {
                    return (
                      <div className={style.menuItem} key={index}>
                        <p>{item}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </>)}
          <div className={style.floatNavigationMenu}>
            {navigationMenuItems.map((item, index) => {
              return (
                <div key={index}>
                  <p>{item}</p>
                </div>
              )
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
