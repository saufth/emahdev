// Styles
import styles from '../../styles/data-display/Showcase.module.css'
import CallToAction from '../input/CallToAction'

/**
 * Showcase component props
 */
interface ShowcaseProps {
  /**
   * Heading of the showcase
   */
  heading: string
  /**
   * Description of the showcase
   */
  description: string
  /**
   * Image to use on the showcase
   */
  image: string
}

/**
 * Using to show a image with a heading and a description
 * @see {@link ShowcaseProps} for props specifications
 * @param {ShowcaseProps} ShowcaseProps The component props
 * @returns The Showcase component
 */
const Showcase = ({ heading, description, image }: ShowcaseProps) => {
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
          <div className={styles.image} />
        </div>
      </div>

    </section>
  )
}

export default Showcase
