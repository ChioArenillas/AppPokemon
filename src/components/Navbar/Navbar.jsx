import React, { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbarBg}>
    <div className={styles.navbar}>
      <a className={styles.title} href="/">POKEMON
      </a>
      <div className={styles.menu}>
        <img className={styles.menuBtn} 
        src={menuOpen 
            ? "/assets/closeIcon.png"
            : "/assets/menuIcon.png"
        } 
        alt="menu-button"
        onClick={() => setMenuOpen(!menuOpen)} />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        onClick={() => setMenuOpen(false)}>
            <li> <a href={'../../AddPage'}>ADD POKEMON</a></li>
            <li> <a href={'../../ContactPage'}>CONTACT</a></li>
        </ul>
      </div>
      </div>
    </nav>
  )
}
