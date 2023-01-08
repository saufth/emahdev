// Types
import { ContainerProps, AligmentConfig } from '../../types/layout'
// Styles
import styles from '../../styles/layout/Container.module.css'

/**
 * Used to define the distribution of items
 */
const alignmentConfig: AligmentConfig = {
  start: styles.flexCenterStart,
  center: styles.flexCenter,
  end: styles.flexCenterEnd,
  'row-start': styles.flexRowStartCenter,
  'row-center': styles.flexRowCenter,
  'row-end': styles.flexRowCenterEnd,
  'row-between': styles.flexRowCenterBetween,
  'row-center-start': styles.flexRowCenterStart,
  'row-between-start': styles.flexRowBetweenStart
}

/**
 * The main container component of the application
 * @see {@link ContainerProps} for props specifications
 * @param {ContainerProps} ContainerProps The component props
 * @returns Th Container component
 */
export default function Container (
  {
    children,
    auto,
    fullHeight,
    space,
    relative,
    alignment
  }: ContainerProps
) {
  /**
   * Used to define the width of the container in auto and position it on center
   */
  const autoStyle = auto ? styles.container : ''

  /**
   * Ajust the container to the patern height
   */
  const heightStyle = fullHeight ? styles.size : ''

  /**
   * Set a padding on top and bottom
   */
  const spacingStyle = space ? styles.space : ''

  /**
   * Define de alingment configuration
   * @see {@link alignmentConfig} for configuration specifications
   */
  const alignmentStyle = alignment ? alignmentConfig[alignment] : ''

  /**
   * Set the conteiner on a relative position
   */
  const relativeLayoutStyle = relative ? styles.layout : ''

  /**
   * Used to binding the style configuration
   */
  const containerStyle =
    `${autoStyle} ${heightStyle} ${spacingStyle} ${alignmentStyle} ${relativeLayoutStyle}`

  return (
    <div className={containerStyle}>
      {children}
    </div>
  )
}
