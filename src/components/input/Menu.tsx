// Styles
import styles from '../../styles/input/Menu.module.css'
// Types
import { MenuProps } from '../../types/input'

/**
* The main menu button of the application
* @see {@link MenuProps} for props definition
* @param {MenuProps} MenuProps The Menu component props
* @returns The Menu component
*/
const Menu = ({ action, theme = 'light' }: MenuProps) => {
  const menuStyle = `${styles.menu} ${theme !== 'light' ? styles.menuDark : ''}`

  return (
    <button className={menuStyle} onClick={action}>
      <span />
      <span />
    </button>
  )
}

export default Menu
