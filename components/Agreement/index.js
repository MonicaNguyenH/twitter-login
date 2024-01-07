import styles from './Agreement.module.css'
import Link from 'next/link'

export default function Agreement() {
    return(
        <p className={styles.p}>By signing up, you agree to the <Link href={'/'} className={styles.hyperlink}>Terms of Service</Link> and <Link href={'/'} className={styles.hyperlink}>Privacy Policy</Link>, including <Link href={'/'} className={styles.hyperlink}>Cookie Use</Link>.</p>
    )
}