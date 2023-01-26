// Styles
import Link from 'next/link'
import styles from '../../styles/input/CallToAction.module.css'
// Types
import { CallToActionProps } from '../../types/input'

/** Theme configuration for CallToAction */
const themeConfig = {
  light: styles.actionLight,
  dark: styles.actionDark
}

const initialTheme = 'light'

/**
 * The primary call to actions of the application
 * @see {@link CallToActionProps} for props definition
 * @param {CallToActionProps} CallToActionProps The component props
 * @returns The CallToAction component
 */
const CallToAction = ({ large, theme = initialTheme }: CallToActionProps) => {
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
