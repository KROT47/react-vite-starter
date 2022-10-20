import { Menubar } from 'primereact/menubar';

import { ReactComponent as Logo } from '@/assets/logo/logo-no-background.svg';
import { MainPage } from '@/pages';

import styles from './App.module.scss';

export function App() {
  return (
    <main className={styles.main}>
      <Menubar start={<Logo className={styles.logo} />} />

      <MainPage />
    </main>
  );
}
