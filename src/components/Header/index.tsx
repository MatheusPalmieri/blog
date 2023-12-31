import { Logo } from '../Logo';
import { Search } from '../Search';
import styles from './style.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Search />
    </header>
  );
};
