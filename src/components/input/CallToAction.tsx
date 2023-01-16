// Styles
import styles from '../../styles/input/CallToAction.module.css'

/** The primary action of the application */
const handleAction = () => alert('Primary action dene!')

/**
 * The primary call to actions of the application
 * @returns CallToAction component
 */
const CallToAction = () => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button} onClick={handleAction}>
        Contáctanos
      </button>
    </div>
  )
}

export default CallToAction
