// Styles
import styles from '../../styles/input/CallToAction.module.css'
// Types
import { Theme } from '../../types/theme'

/** The primary action of the application */
const handleAction = () => alert('Primary action dene!')

const themeConfig = {
  light: styles.buttonLight,
  dark: styles.buttonDark
}

/**
 * The primary call to actions of the application
 * @returns CallToAction component
 */
const CallToAction = ({ theme = 'light' }: Theme) => {
  const buttonStyle = `${styles.button} ${themeConfig[theme]}`

  return (
    <div className={styles.buttonContainer}>
      <button className={buttonStyle} onClick={handleAction}>
        Contáctanos
      </button>
    </div>
  )
}

export default CallToAction
