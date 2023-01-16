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
 * Using to show a image with a heading and a description
 * @see {@link ShowcaseProps} for props specifications
 * @param {ShowcaseProps} ShowcaseProps The component props
 * @returns The Showcase component
 */
const Showcase = ({ heading, description, image }: ShowcaseProps) => {
  const imageStyle = `${styles.image} ${imagesConfig[image]}`

  return (
    <section className={styles.container}>

      <div>
        <div className={styles.demo}>
          <div className={styles.header}>
            <h2 className={styles.heading}>
              {heading}
            </h2>
            <p className={styles.description}>
              {description}
            </p>
          </div>
          <CallToAction />
        </div>
      </div>

      <div>
        <div className={styles.imageContainer}>
          <div className={imageStyle} />
        </div>
      </div>

    </section>
  )
}

export default Showcase
