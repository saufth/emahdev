// Styles
import { useRef } from 'react'
import styles from '../../styles/pages/Contact.module.css'

/**
* The contact section of application
* @returns The Contact section component
*/
const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)

  return (
    <section className={styles.section}>
      <form className={styles.form} ref={formRef}>
        <div>
          <input
            className={styles.input}
            type='text'
            name='contact_name'
            id='contact_name'
            placeholder='Tu nombre'
            required
          />
        </div>
        <div>
          <input
            className={styles.input}
            type='email'
            name='contact_email'
            id='contact_email'
            placeholder='Tu Email'
            required
          />
        </div>
        <div>
          <textarea
            className={styles.input}
            name='contact_description'
            id='contact_description'
            rows={1}
            placeholder='Cuentanos sobre tu proyecto'
            defaultValue=''
            required
          />
        </div>
        <div className='pt-6 flex justify-center'>
          <div className='w-64 h-12'>
            <button type='submit' className='w-full h-full rounded-3xl font-proxima-soft-medium text-white bg-emah-blue'>
              Enviar
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Contact
