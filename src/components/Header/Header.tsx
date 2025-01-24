import StacklineLogo from '../../assets/stackline_logo.svg'
import styles from "./header.module.css"
function Header() {
    // didn't find the same logo as the one in the mockup, using the one provided.
    return(
        <div className={styles.header}>
            <span className={styles.headerLogo}>
            <img src={StacklineLogo} alt="Stackline Logo" />
            </span>
        </div>
    )
}

export default Header;