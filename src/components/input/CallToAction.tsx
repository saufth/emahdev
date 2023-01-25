// Styles
import styles from '../../styles/input/CallToAction.module.css'
// Types
import { CallToActionProps } from '../../types/input'

/** Theme configuration for CallToAction */
const themeConfig = {
  light: styles.buttonLight,
  dark: styles.buttonDark
}

/**
 * The primary call to actions of the application
 * @see {@link CallToActionProps} for props definition
 * @param {CallToActionProps} CallToActionProps The component props
 * @returns The CallToAction component
 */
const CallToAction = ({ fullWidth, theme = 'light' }: CallToActionProps) => {
  const buttonStyle = `${styles.button} ${themeConfig[theme]} ${fullWidth ? styles.fullWidth : ''}`

  /** The primary action of the application */
  const handleAction = () => alert('Primary action dene!')

  return (
    <div className={styles.buttonContainer}>
      <button className={buttonStyle} onClick={handleAction}>
        Contáctanos
      </button>
    </div>
  )
}

export default CallToAction
