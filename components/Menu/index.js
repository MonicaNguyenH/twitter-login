import Link from "next/link"
import styles from './Menu.module.css'

export default function Menu(){
    return(
        <>
            <ul className={styles.ul}>
            <li><Link href={'/'} className={styles.hyperlink}>About</Link></li>
            <li><Link href={'/'} className={styles.hyperlink}>Page</Link></li>
            <li><Link href={'/'} className={styles.hyperlink}>Help Center</Link></li>
            <li><Link href={'/'} className={styles.hyperlink}>Privacy Info</Link></li>
            <li><Link href={'/'} className={styles.hyperlink}>Blog</Link></li>
            <li><Link href={'/'} className={styles.hyperlink}>Status</Link></li>
            
            </ul>
        </>
    )
}