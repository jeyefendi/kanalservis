import styles from "./Header.module.css"

const Header = () => {
  return (
    <header>
        <div className={styles.logo}>
            <img src="/src/assets/logo.svg" alt="Logo" />
        </div>
    </header>
  )
}

export default Header