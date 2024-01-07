import styles from './Footer.module.css'
import Link from 'next/link'

export default function() {
    return(
        <footer className={styles.footer}>
            © 2014 Monica Nguyen
        </footer>
    )
}