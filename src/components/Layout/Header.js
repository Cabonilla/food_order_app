import { Fragment } from 'react'
import img from '../../assets/food.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'


const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactChinese</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={img} alt='A Chinese food feast.'/>
      </div>
    </Fragment>
  )
}

export default Header