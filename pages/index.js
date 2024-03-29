import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Footer from '@/components/Footer'
import Signup from '@/components/Signup'
import Account from '@/components/Account'
import Agreement from '@/components/Agreement'
import Textbox from '@/components/Textbox'
import Menu from '@/components/Menu'


export default function Home() {
  return (
    <>
      <Head>
        <title>Twitter Login Layout</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
       

      </header>

      <main className={`${styles.main}`}>

        <div className={`${styles.logo}`}>
        <Image src={'/Image/twitter-logo.png'} alt="twitter logo" width={80} height={80} />
        </div>

        <div className={`${styles.wrapper}`}>
       
        <h1 className={`${styles.h1}`}>Happening now</h1>
        <h2 className={`${styles.h2}`}>Join today.</h2>

        <Signup/>

        <div className={`${styles.or}`}>

        <hr/><h3 className={`${styles.h3}`}>OR</h3><hr/>

        </div>
        
        <Account/>

        <Agreement/>

        <Textbox/>

        <Menu/>

        <Footer/>

        </div>

      </main>

    </>
  )
}
