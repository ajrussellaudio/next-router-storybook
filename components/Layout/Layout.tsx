import { ReactNode } from 'react';
import { Nav } from '../Nav';
import styles from './Layout.module.css';

export type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <header>
        <Nav />
      </header>{' '}
      <div className={styles.layout}>{children}</div>
    </>
  );
}
