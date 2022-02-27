import styles from '../styles/Navbar.module.css'

const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				<li className={styles.header}>FantasyAgg</li>
				<li className={styles.items}>Home</li>
				<li className={styles.items}>NFL</li>	
				<li className={styles.items}>MLB</li>
				<li className={styles.items}>NBA</li>
			</ul>
		</nav>
	)
}

export default Navbar
