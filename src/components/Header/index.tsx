import igtodoLogo from '../../assets/igtodo-logo.svg';

import styles from './styles.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igtodoLogo} alt="Logotipo do ToDo List" />
    </header>
  )
}