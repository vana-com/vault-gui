import Link from 'next/link'
import styles from '../styles/Home.module.css'

export const Nav = ({ description }: { description: string }) => (
  <main className={styles.main}>
    <p className={styles.description}>{description}</p>
    <div className={styles.grid}>
      <Link href="/" passHref>
        <a className={styles.card}>
          <h2>Vault Home &rarr;</h2>
          <p>All your data modules.</p>
        </a>
      </Link>
      <Link href="/store/instagram" passHref>
        <a className={styles.card}>
          <h2>Storage [module-name] &rarr;</h2>
          <p>Connect a module to your Vault.</p>
        </a>
      </Link>
      <Link href="/instagram" passHref>
        <a className={styles.card}>
          <h2>Data [module-name] &rarr;</h2>
          <p>A data module in your Vault.</p>
        </a>
      </Link>
      <Link href="/admin" passHref>
        <a className={styles.card}>
          <h2>Admin &rarr;</h2>
          <p>Check the stats</p>
        </a>
      </Link>
    </div>
  </main>
)
