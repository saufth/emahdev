// Components
import NextLink from 'next/link'
// Styles
import styles from '../../styles/navigation/Link.module.css'
// Types
import { LinkProps } from '../../types/navigation'

/**
 * Used to navigate between pages
 * @returns Link component
 */
const Link = ({ children, href }: LinkProps) => {
  return (
    <NextLink href={href}>
      <div className={styles.link}>
        {children}
      </div>
    </NextLink>
  )
}

export default Link
