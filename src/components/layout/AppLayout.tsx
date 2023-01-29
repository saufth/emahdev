// Components
import Head from 'next/head'
import GSearchSchemaScript from '../app/scripts/GSearchSchemaScript'
import Navbar from '../navigation/Navbar'
// Types
import { ParentProps } from '../../types/layout'

/** The base URL of the application */
const baseUrl = process.env.HOST
/** The name of the organization */
const organization = 'emah'
/** The desciption of the organization */
const description = 'Expert Marketing Associates & Hacks'
/** The keyword list as string */
const keywords = String([
  'eamh',
  'marketing',
  'expert marketing',
  'marketing hacks',
  'marketing associates',
  'publicidad experta',
  'publicidad',
  'web development',
  'desarrollo web',
  'app development',
  'desarrollo de aplicaciones'
])
/** The social media image URL */
const socialImageUrl = `${baseUrl}images/emah.jpg`
/** Twitter account */
const twitter = '@emah'

export default function AppLayout ({ children } : ParentProps) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <title>Expert Marketing Associates & Hacks – emah – Endless posibilities</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='canonical' href={baseUrl} />
        <link rel='apple-touch-icon' href='/images/apple-touch-icon.png' />
        <meta name='theme-color' content='#FF6700' />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta property='og:locale' content='es_MX' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={organization} />
        <meta property='og:description' content={description} />
        <meta property='og:url' content={baseUrl} />
        <meta property='og:site_name' content={organization} />
        <meta property='og:image' content={socialImageUrl} />
        <meta property='og:image:secure_url' content={socialImageUrl} />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='640' />
        <meta property='og:image:type' content='image/jpeg' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={organization} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:site' content={twitter} />
        <meta name='twitter:image' content={socialImageUrl} />
      </Head>
      <Navbar />
      {children}
      <GSearchSchemaScript />
    </>
  )
}
