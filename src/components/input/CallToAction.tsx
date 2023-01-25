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
const CallToAction = ({ large, theme = 'light' }: CallToActionProps) => {
  const buttonContainerStyle = `${styles.buttonContainer} ${large ? styles.large : ''}`
  const buttonStyle = `${styles.button} ${themeConfig[theme]}`

  /** The primary action of the application */
  const handleAction = () => alert('Primary action dene!')

  return (
    <div className={buttonContainerStyle}>
      <button className={buttonStyle} onClick={handleAction}>
        Contáctanos
      </button>
    </div>
  )
}

export default CallToAction
