// Components
import NextLink from 'next/link'
// Styles
// import styles from '../../styles/input/Link.module.css'

interface LinkProps {
  children: string
  href: string
}

/**
 * Used to navigate between pages
 * @returns Link component
 */
const Link = ({ children, href }: LinkProps) => {
  return (
    <NextLink href={href}>
      <div className='px-[27px] py-3 border border-white/50 rounded-[47px]'>
        {children}
      </div>
    </NextLink>
  )
}

export default Link
