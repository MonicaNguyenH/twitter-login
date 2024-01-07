import Image from "next/image";
import styles from './Signup.module.css'

export default function Signup () {
    return (
        <>
        <button className={styles.button}><Image src={'/Image/google-logo.png'} alt="Google logo" width={35} height={35}/> Sign up with Google</button>
        <button className={styles.button}><Image src={'/Image/apple-logo.png'} alt="Apple logo" width={30} height={30}/> Sign up with Apple</button>
        </>
    )
}


