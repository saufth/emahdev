// Components
import CallToAction from '../input/CallToAction'
// Styles
import styles from '../../styles/data-display/Showcase.module.css'
// Types
import { ShowcaseProps } from '../../types/data-display'

const initialTheme = 'light'

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
    theme = initialTheme,
    action,
    large,
    reverse
  }: ShowcaseProps
) => {
  // Theme
  const themeStatus = theme !== initialTheme
  const headingStyle = themeStatus ? styles.headingDark : ''
  const descriptionsStyle = `${styles.descriptions} ${themeStatus ? styles.descriptionsDark : ''}`
  // Reverse
  const containerStyle = `${styles.container} ${reverse ? styles.containerReverse : ''}`
  const demoStyle = `${styles.demo} ${reverse ? styles.demoReverse : ''} ${large ? styles.demoLarge : ''}`
  const imageContainerStyle = `${styles.imageContainer} ${reverse ? styles.imageContainerReverse : ''}`
  // Image
  const imageStyle = `${styles.image}`
  const backgroundImageStyle = { backgroundImage: `url(/images/sections/${image}.jpg)` }

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
          <div className={imageStyle} style={backgroundImageStyle} />
        </div>
      </div>

    </section>
  )
}

export default Showcase
