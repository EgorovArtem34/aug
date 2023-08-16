import styles from './header.module.scss';

export const Header = () => {
  const today = new Date();
  const currentYear = today.getFullYear();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>ARMAGEDDON {currentYear}</h1>
      <span className={styles.text}>ООО “Команда им. Б. Уиллиса”.<br />
        Взрываем астероиды с 1998 года.</span>
    </header>
  )
};
