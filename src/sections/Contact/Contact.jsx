import styles from './ContactStyles.module.css'

//TEST

function Contact() {
  return (
    <section id="contact" className={styles.container}>
        <h1 className="sectionTitle">Contact</h1>
        <form action="https://formspree.io/f/xgvapznp" method='post'>
          <div className='formGroup'>
            <label htmlFor="name" hidden>
              Name
            </label>
            <input
            type='text'
            name='name'
            id='name'
            placeholder='Name'
            required />
          </div>
          <div className='formGroup'>
            <label htmlFor="email" hidden>
              Email
            </label>
            <input
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            required />
          </div>
          <div className='formGroup'>
            <label htmlFor="message" hidden>
              Message
            </label>
            <textarea
            name='message'
            id='message'
            placeholder='Message'
            required />
            </div>
            <input type="submit" value="Submit" className="hover btn" />
        </form>
    </section>
  );
}

export default Contact