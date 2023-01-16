/** Showcase component props */
export interface ShowcaseProps {
  /** Heading of the showcase */
  heading: string
  /** Description of the showcase */
  description: string
  /** Image to use on the showcase */
  image: 'branding' | 'design' | 'development'
}
