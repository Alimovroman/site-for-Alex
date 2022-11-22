import classes from './Header.module.css'
import instagram from '../../assets/images/instagram.png'
import telegram from '../../assets/images/telegram.png'
import logo from '../../assets/images/logo.png'

const Header: React.FC = () => {
  const onScroll = (section: string) => {
    document.getElementById(section)?.scrollIntoView()
  }
  return (
    <div className={classes.wrappedHeader}>
      <div className={classes.header} >
        <div>
          <img src={logo} alt='logo' />
        </div>
        <div className={classes.navigation}>
          <button className={classes.buttonNavigation} onClick={() => onScroll('home')}>HOME</button>
          <button className={classes.buttonNavigation} onClick={() => onScroll('aboutMe')}>ABOUT US</button>
          <button className={classes.buttonNavigation} onClick={() => onScroll('contacts')}>CONTACTS</button>
        </div>
        <div className={classes.mySocialNetwork}>
          <div className={classes.instagram}>
            <a href='#'> <img src={instagram} alt='instagram' /></a>
          </div>
          <div className={classes.telegram}>
            <a href='https://t.me/facelessjewellery'> <img src={telegram} alt='telegram' /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header