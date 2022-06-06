import logoSVG from '../../assets/logo.svg'
import styles from './header.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoSVG} alt="Logomarca Todo" />
    </header>
  )
}