import styles from './Textbox.module.css'

export default function Textbox() {
    return (
        <>
        <input className={styles.textbox} 
        type="email"
        placeholder="Email or Phone Number"/>

        <input className={styles.button}
        type="submit"
        value="Sign In"/>
        </>
    

    )
}