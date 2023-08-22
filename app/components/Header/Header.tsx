import Link from 'next/link';
import styles from './header.module.scss';

export const Header = () => {
  const today = new Date();
  const currentYear = today.getFullYear();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link href={'/'}>ARMAGEDDON {currentYear}</Link>
      </h1>
      <p className={styles.text}>ООО “Команда им. Б. Уиллиса”.<br />
        Взрываем астероиды с 1998 года.</p>
    </header>
  )
};
