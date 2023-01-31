// Styles
import Link from 'next/link'
import styles from '../../styles/navigation/CallToAction.module.css'
// Types
import { CallToActionProps } from '../../types/navigation'

/** Theme configuration for CallToAction */
const themeConfig = {
  light: styles.actionLight,
  dark: styles.actionDark
}

/**
 * The primary call to actions of the application
 * @see {@link CallToActionProps} for props definition
 * @param {CallToActionProps} CallToActionProps The component props
 * @returns The CallToAction component
 */
const CallToAction = ({ large, theme = 'light' }: CallToActionProps) => {
  const actionStyle = `${styles.action} ${large ? styles.large : ''} ${themeConfig[theme]}`

  return (
    <Link href='/contact'>
      <div className={actionStyle}>
        Contáctanos
      </div>
    </Link>
  )
}

export default CallToAction
