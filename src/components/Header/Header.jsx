import styles from "./Header.module.css";
import { Outlet } from 'react-router-dom';


const Header = () => {
  return (
    <>
    <header>
        <div className={styles.logo}>
        </div>
    </header>

    <Outlet />
    </>
  )
}

export {Header}