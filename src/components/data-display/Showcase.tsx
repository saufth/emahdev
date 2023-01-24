// Components
import CallToAction from '../input/CallToAction'
// Styles
import styles from '../../styles/data-display/Showcase.module.css'
// Types
import { ShowcaseProps } from '../../types/data-display'

/** Configuration for available images */
const imagesConfig = {
  branding: styles.backgroundBranding,
  design: styles.backgroundDesign,
  development: styles.backgroundDevelopment
}

/**
 * Using to show a image with a heading and descriptions
 * @see {@link ShowcaseProps} for props specifications
 * @param {ShowcaseProps} ShowcaseProps The component props
 * @returns The Showcase component
 */
const Showcase = (
  {
    heading,
    descriptions,
    image,
    theme = 'light',
    action,
    large,
    reverse
  }: ShowcaseProps
) => {
  // Theme
  const isThemeLight = theme === 'light'
  const headingStyle = isThemeLight ? '' : styles.headingDark
  const descriptionsStyle = `${styles.descriptions} ${isThemeLight ? '' : styles.descriptionsDark}`
  // Reverse
  const containerStyle = `${styles.container} ${reverse ? styles.containerReverse : ''}`
  const demoStyle = `${styles.demo} ${reverse ? styles.demoReverse : ''} ${large ? styles.demoLarge : ''}`
  const imageContainerStyle = `${styles.imageContainer} ${reverse ? styles.imageContainerReverse : ''}`
  // Image
  const imageStyle = `${styles.image} ${imagesConfig[image]}`

  return (
    <section className={containerStyle}>

      <div>
        <div className={demoStyle}>
          <div className={styles.header}>
            <h2 className={headingStyle}>
              {heading}
            </h2>
            <div className={descriptionsStyle}>
              {descriptions.map((description, key) => (
                <p key={key}>
                  {description}
                </p>
              ))}
            </div>
          </div>
          {action ? <CallToAction /> : null}
        </div>
      </div>

      <div>
        <div className={imageContainerStyle}>
          <div className={imageStyle} />
        </div>
      </div>

    </section>
  )
}

export default Showcase
