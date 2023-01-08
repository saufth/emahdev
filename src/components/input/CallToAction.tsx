'use client'
// Styles
import styles from '../../styles/input/CallToAction.module.css'

/**
 * The primary action of the application
 */
const handleAction = () => alert('Primary action dene!')

/**
 * The primary and secondary call to actions of the application
 * @returns CallToAction component
 */
export default function CallToAction () {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button} onClick={handleAction}>
        Contáctanos
      </button>
      <span className={styles.backgroundOrange} />
      <span className={styles.backgroundBlue} />
      <span className={styles.backgroundPurple} />
    </div>
  )
}
